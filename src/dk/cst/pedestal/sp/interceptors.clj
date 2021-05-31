(ns dk.cst.pedestal.sp.interceptors
  "Standard interceptors for the SAML login flow + a few helper interceptors.

  In addition, this namespace also contains interceptors used to create custom
  SAML-authorized routes. A SAML-authorized route is constructed by appending to
  the output of the `chain` function.

  Route-level authorisation checks can be made using the `permit-request?` fn
  from within an interceptor. For inline restriction definitions and checks
  (available in both Clojure/ClojureScript) refer to `dk.cst.pedestal.sp.auth`."
  (:require [clojure.pprint :refer [pprint]]
            [clojure.walk :as walk]
            [io.pedestal.interceptor :as ic]
            [io.pedestal.interceptor.chain :as chain]
            [io.pedestal.interceptor.error :as error]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.ring-middlewares :as middlewares]
            [hiccup.core :as hiccup]
            [time-literals.data-readers]                    ; tagged literals
            [time-literals.read-write :as tl]
            [saml20-clj.core :as saml]
            [saml20-clj.coerce :as coerce]
            [saml20-clj.encode-decode :as saml-decode]
            [dk.cst.pedestal.sp.auth :as sp.auth]))

;; Make sure that echo-assertions prints timestamps in a nice way
(tl/print-time-literals-clj!)

(defn request->assertions
  [request]
  (get-in request [:session :saml :assertions]))

(defn authenticated?
  "Has the user making this `request` authenticated via SAML?"
  [request]
  (boolean (request->assertions request)))

(defn echo-response-ic
  "Handler echoing full SAML response (including assertions) in session store."
  [req]
  {:status  200
   :headers {"Content-Type" "text/xml"}
   :body    (get-in req [:session :saml :response])})

(defn echo-request-ic
  "Handler echoing full SAML request in session store."
  [req]
  (if-let [saml-request (get-in req [:session :saml :request])]
    {:status  200
     :headers {"Content-Type" "text/xml"}
     :body    saml-request}
    {:status  404
     :headers {}}))

(defn echo-assertions-ic
  "Handler echoing SAML response assertions in session store."
  [req]
  {:status  200
   :headers {"Content-Type"        "application/edn"
             "Content-Disposition" "filename=\"assertions.edn\""}
   :body    (-> (get-in req [:session :saml :assertions])
                (pprint)
                (with-out-str))})

(defn echo-session-ic
  "Handler echoing all current SAML-related information in session store."
  [req]
  (if-let [saml-session (get-in req [:session :saml])]
    {:status  200
     :headers {"Content-Type"        "application/edn"
               "Content-Disposition" "filename=\"session.edn\""}
     :body    (with-out-str (pprint saml-session))}
    {:status  404
     :headers {}}))

(defn metadata-ic
  "SAML Metadata handler from an expanded `conf`. Returns the metadata as XML."
  [{:keys [app-name
           acs-url
           sp-cert]
    :as   conf}]
  (fn [_]
    {:status  200
     :headers {"Content-Type" "text/xml"}
     :body    (saml/metadata conf)}))

(defn request-ic
  "SAML request handler from an expanded `conf`. Redirects login to IdP.
  Custom RelayState taking the form of a URL can be provided as a query-param."
  [{:keys [app-name
           acs-url
           idp-url
           issuer
           credential
           state-manager
           relay-state]
    :as   conf}]
  (fn [{:keys [query-params] :as req}]
    (let [saml-request (saml/request (dissoc conf :relay-state))
          relay-state* (or (:RelayState query-params)
                           relay-state
                           "/")]
      (assoc (saml/idp-redirect-response saml-request idp-url relay-state*)
        :session {:saml {:request     (coerce/->xml-string saml-request)
                         :relay-state relay-state*}}))))

(defn- massage-assertions
  "Makes the saml20-clj `assertions` (a direct XML conversion) more palatable.
  The returned map can more easily be queried e.g. for authorisation purposes."
  [assertions]
  (->> (first assertions)
       (walk/postwalk (fn [x]
                        (cond
                          (seq? x) (set x)
                          :else x)))))

;; TODO: add error handler
;; TODO: validate response some more?
(defn response-ic
  "SAML response handler from an expanded `conf`. Accepts response from IdP.
  Will treat RelayState as a location, redirecting there after authentication."
  [{:keys [idp-cert
           sp-private-key
           validation]
    :as   conf}]
  (fn [{:keys [form-params session] :as req}]
    (let [{:keys [SAMLResponse RelayState]} form-params
          response   (-> SAMLResponse
                         saml-decode/base64->str
                         (saml/validate idp-cert sp-private-key validation))
          xml        (saml/->xml-string response)
          assertions (-> (saml/assertions response)
                         (massage-assertions))]
      {:status  303
       :session (update session :saml merge {:assertions assertions
                                             :response   xml})
       :headers {"Location" RelayState}})))

(defn logout-ic
  "Delete current SAML-related session info related to the user, i.e. log out.

  This is an API endpoint by default, so it returns 204. That will not by itself
  refresh the browser page, but a 303 redirect can be triggered by providing
  a RelayState query parameter similar to how the SAML login response endpoint
  works."
  [{:keys [form-params] :as req}]
  (let [{:keys [RelayState]} form-params
        session (not-empty (update req :session dissoc :saml))]
    (if RelayState
      {:status  303
       :headers {"Location" RelayState}
       :session session}
      {:status  204
       :headers {}
       :session session})))

(defn session-ic
  "Interceptor that adds Ring session data to a request."
  [{:keys [session] :as conf}]
  (middlewares/session session))

(defn guard-ic
  "Interceptor that will throw exceptions based on the given `restriction`.

  By also including the restriction as metadata other interceptors can look up
  restrictions for different routes ahead of time (see permit? fn)."
  [restriction]
  (let [authorized? (sp.auth/restriction->auth-test restriction)
        auth-meta   {::restriction restriction
                     ::auth-test   authorized?}]
    (assert authorized? (str "Invalid restriction: " restriction))
    (with-meta
      (ic/interceptor
        {:name  ::guard
         :enter (fn [{:keys [request] :as ctx}]
                  (let [assertions (request->assertions request)]
                    (if (not (authorized? assertions))
                      (throw (ex-info "Failed auth" auth-meta))
                      ctx)))})
      auth-meta)))

(defn- ->no-authn-handler
  "Create a response handler to use when user is not authenticated. By default,
  the user is provided with a hyperlink to the SAML endpoint defined in `conf`."
  [{:keys [paths] :as conf}]
  (fn [{:keys [uri] :as req}]
    {:status  403
     :headers {"Content-Type" "text/html"}
     :body    (hiccup/html
                [:html
                 [:body
                  [:h1 "Login required"]
                  [:p "You must "
                   [:a {:href (str (:saml-login paths) "?RelayState=" uri)}
                    "log in"]
                   " before you can access this resource."]]])}))

(def ^:private no-authz
  {:status  403
   :headers {"Content-Type" "text/html"}
   :body    (hiccup/html
              [:html
               [:body
                [:h1 "Forbidden"]
                [:p "You do not have permission to access this resource."]]])})

(defn failure-ic
  "Error-handling interceptor creating responses for errors thrown by ::guard."
  [conf]
  (error/error-dispatch [{:keys [request] :as ctx} ex]
    [{:exception-type :clojure.lang.ExceptionInfo}]
    (if (::restriction (ex-data ex))
      (if (authenticated? request)
        (assoc ctx :response no-authz)
        (assoc ctx :response ((->no-authn-handler conf) request)))
      (assoc ctx ::chain/error ex))

    :else (assoc ctx ::chain/error ex)))

(defn- get-ic*
  [interceptors ic-name]
  (loop [[ic & remaining] interceptors]
    (cond
      (= (:name ic) ic-name) ic
      remaining (recur remaining))))

(def ^:private get-ic
  (memoize get-ic*))

(defn routing-for
  "Resolve routing for `query-string` and `verb` using the router in the `ctx`.
  This is a modified version of `io.pedestal.http.route/try-routing-for`."
  [ctx query-string verb]
  (let [router-ic (get-ic (::chain/stack ctx) ::route/router)
        context   ((:enter router-ic) {:request {:path-info      query-string
                                                 :request-method verb}})]
    (:route context)))

(defn url-for
  "Call *url-for* in `ctx` with `args`."
  [{:keys [bindings] :as ctx} & args]
  (let [*url-for* @(get bindings #'io.pedestal.http.route/*url-for*)]
    (apply *url-for* args)))

(defn routing->auth-test
  "Given a `routing` map for a single route, return the auth test attached as
  metadata to the ::session-guard interceptor.

  Note: routing maps are returned by `routing-for`."
  [{:keys [interceptors] :as routing}]
  (or (::auth-test (meta (get-ic interceptors ::guard)))
      (constantly true)))

(defn permit-request?
  "Is a `route` or `query-string` allowed within the current interceptor `ctx`?
  Checks restrictions set by interceptor chain constructed with the chain fn.

  Note that unresolved routes will result in a truthy response, but the return
  value will be :not-found in that case!"
  ([{:keys [request] :as ctx} query-string verb]
   (if-let [routing (routing-for ctx query-string verb)]
     (let [assertions  (request->assertions request)
           authorized? (routing->auth-test routing)]
       (authorized? assertions))
     :not-found))
  ([ctx route]
   (let [query-string (if (keyword? route)
                        (url-for ctx route)
                        route)]
     (permit-request? ctx query-string :get))))

(defn chain
  "Create an interceptor chain to make sure that a user is authorized to access
  a resource based on the expanded `conf` and a `restriction`."
  [conf restriction]
  [(failure-ic conf)
   (session-ic conf)
   (guard-ic restriction)])
