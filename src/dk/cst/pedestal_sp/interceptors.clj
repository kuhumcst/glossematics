(ns dk.cst.pedestal-sp.interceptors
  (:require [clojure.pprint :refer [pprint]]
            [saml20-clj.core :as saml]
            [saml20-clj.coerce :as coerce]
            [saml20-clj.encode-decode :as saml-decode]
            [hiccup.core :as hiccup]
            [io.pedestal.log :as log]
            [io.pedestal.interceptor :as ic]
            [io.pedestal.interceptor.chain :as chain]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.ring-middlewares :as middlewares]))

;; https://github.com/ring-clojure/ring/wiki/Sessions
;; https://github.com/pedestal/pedestal/blob/master/samples/ring-middleware/src/ring_middleware/service.clj
;; https://www.baeldung.com/clojure-ring#4-working-with-cookies
(defn session
  [{:keys [session] :as conf}]
  (middlewares/session session))

(defn no-auth-resp
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

;; TODO: optionally redirect to login page with RelayState set to current URL
;; TODO: convert into error-throwing interceptor instead?
;; In the error-throwing interceptor, catch error and decide what to do with it.
;; Can either throw the error, redirect to somewhere else, or return 403 resp.
;; Which one you wanna do depends on what you want the behaviour to be.
;; In my case, I probably wanna redirect for some, throw 403 for others (api).
;; TODO: further check assertions?
(defn session-guard
  [{:keys [no-auth] :as conf}]
  (let [no-auth (or no-auth (no-auth-resp conf))]
    (with-meta
      (ic/interceptor
        {:name  ::session-guard
         :enter (fn [{:keys [request] :as ctx}]
                  ;; TODO: needs more fine-grained approach than this
                  (if-let [saml (get-in request [:session :saml :response])]
                    ctx
                    (do
                      (log/warn :msg (str "Unauthorised: " request))
                      (assoc ctx :response (no-auth request)))))})
      ;; TODO: attach actual authz stuff
      {:permit :authenticated})))

(defn- get-ic*
  [interceptors ic-name]
  (loop [[ic & remaining] interceptors]
    (cond
      (= (:name ic) ic-name) ic
      remaining (recur remaining))))

(def ^:private get-ic
  (memoize get-ic*))

(defn ctx->router-ic
  [ctx]
  (get-ic (::chain/stack ctx) ::route/router))

(defn routing-for
  "Resolve routing for `query-string` and `verb` using the router in the `ctx`.
  This is a modified version of `io.pedestal.http.route/try-routing-for`."
  [ctx query-string verb]
  (let [router-ic (ctx->router-ic ctx)
        context   ((:enter router-ic) {:request {:path-info      query-string
                                                 :request-method verb}})]
    (:route context)))

;; TODO: further investigate possibility of bidirectional route resolution
(defn url-for
  "Call *url-for* in `ctx` with `args`."
  [{:keys [bindings] :as ctx} & args]
  (let [*url-for* @(get bindings #'io.pedestal.http.route/*url-for*)]
    (apply *url-for* args)))

(defn restrictions
  "Given a `routing` map for a single route, return the restrictions attached
  as metadata to the ::session-guard interceptor.

  Note: routing maps are returned by `routing-for`."
  [{:keys [interceptors] :as routing}]
  (:permit (meta (get-ic interceptors ::session-guard))))

(defn authenticated?
  "The presence of an IdP response is evidence of authentication."
  [ctx]
  (get-in ctx [:request :session :saml :response]))

(defn permit?
  "Is a `route` or `query-string` allowed within the current interceptor `ctx`?
  Checks restrictions set by interceptor chain constructed with the permit fn."
  ([ctx query-string verb]
   (let [r (restrictions (routing-for ctx query-string verb))]
     (or (not r)
         (and (= r :authenticated)
              (authenticated? ctx)))))
  ([ctx route]
   (let [query-string (if (keyword? route)
                        (url-for ctx route)
                        route)]
     (permit? ctx query-string :get))))

(defn saml-logout
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

;; TODO: eventually delete, but keep for now as future API examples
(comment
  (permit :authenticated)
  (permit {:role "blabala"
           :ids  #{}})
  (permit #(fn [session] ...)))

(defn permit
  "Create an interceptor chain to make sure that a user is authorised to access
  a resource. The :authenticated restriction will simply ensure that the user
  is authenticated by an IdP, but more detailed parameters can be specified too.

  Note: return value should constitute the beginning of an interceptor chain."
  [conf restriction]
  (if (= restriction :authenticated)
    [(session conf) (session-guard conf)]
    (throw (ex-info "Unknown restriction" restriction))))

(defn echo-saml-resp
  "Handler echoing full SAML response (including assertions) in session store."
  [req]
  {:status  200
   :headers {"Content-Type" "text/xml"}
   :body    (get-in req [:session :saml :response])})

(defn echo-saml-req
  "Handler echoing full SAML request in session store."
  [req]
  (if-let [saml-request (get-in req [:session :saml :request])]
    {:status  200
     :headers {"Content-Type" "text/xml"}
     :body    saml-request}
    {:status  404
     :headers {}}))

(defn echo-saml-assertions
  "Handler echoing SAML response assertions in session store."
  [req]
  {:status  200
   :headers {"Content-Type"        "application/edn"
             "Content-Disposition" "filename=\"assertions.edn\""}
   :body    (-> (get-in req [:session :saml :assertions])
                (pprint)
                (with-out-str))})

(defn echo-saml-session
  "Handler echoing all current SAML-related information in session store."
  [req]
  (if-let [saml-session (get-in req [:session :saml])]
    {:status  200
     :headers {"Content-Type"        "application/edn"
               "Content-Disposition" "filename=\"session.edn\""}
     :body    (with-out-str (pprint saml-session))}
    {:status  404
     :headers {}}))

(defn saml-meta
  "SAML Metadata handler from an expanded `conf`. Returns the metadata as XML."
  [{:keys [app-name
           acs-url
           sp-cert]
    :as   conf}]
  (fn [_]
    {:status  200
     :headers {"Content-Type" "text/xml"}
     :body    (saml/metadata conf)}))

(defn saml-req
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

;; TODO: add error handler
;; TODO: validate response some more?
(defn saml-resp
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
          assertions (saml/assertions response)]
      {:status  303
       :session (update session :saml merge {:assertions assertions
                                             :response   xml})
       :headers {"Location" RelayState}})))

;; TODO: probably remove - left here for now
(comment
  (def echo-context
    (ic/interceptor
      {:name  ::echo-context
       :enter (fn [ctx]
                (assoc ctx
                  :response {:status  200
                             :body    (with-out-str (pprint ctx))
                             :headers {"Content-Type" "text/plain"}}))}))

  (def debug-routes
    #{["/ctx" :get [`echo-context]]}))
