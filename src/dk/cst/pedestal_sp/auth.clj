(ns dk.cst.pedestal-sp.auth
  (:require [hiccup.core :as hiccup]
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

;; TODO: convert into error-throwing interceptor. handle response elsewhere
;; In the error-throwing interceptor, catch error and decide what to do with it.
;; Can either throw the error, redirect to somewhere else, or return 403 resp.
;; Which one you wanna do depends on what you want the behaviour to be.
;; In my case, I probably wanna redirect for some, throw 403 for others (api).
;; TODO: further check assertions?
(defn guard
  [{:keys [no-auth] :as conf} restriction]
  (let [no-auth (or no-auth (no-auth-resp conf))]
    (with-meta
      (ic/interceptor
        {:name  ::guard
         :enter (fn [{:keys [request] :as ctx}]
                  ;; TODO: needs more fine-grained approach than this
                  (if-let [saml (get-in request [:session :saml :response])]
                    ctx
                    (do
                      (log/warn :msg (str "Unauthorised: " request))
                      (assoc ctx :response (no-auth request)))))})
      {::restriction restriction})))

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

(defn url-for
  "Call *url-for* in `ctx` with `args`."
  [{:keys [bindings] :as ctx} & args]
  (let [*url-for* @(get bindings #'io.pedestal.http.route/*url-for*)]
    (apply *url-for* args)))

;; TODO: handle conversion of pure data restriction to test function too
(defn routing->test
  "Given a `routing` map for a single route, return the auth test attached as
  metadata to the ::session-guard interceptor.

  Note: routing maps are returned by `routing-for`."
  [{:keys [interceptors] :as routing}]
  (::restriction (meta (get-ic interceptors ::guard))))

;; TODO: allow restriction to be defined as data too
(defn permit
  "Create an interceptor chain to make sure that a user is authorised to access
  a resource based on the expanded `conf` and a `restriction`.

  When no `restriction` is provided, simply returns an interceptor chain with
  the session interceptor."
  ([conf]
   [(session conf)])
  ([conf restriction]
   (if (fn? restriction)
     [(session conf) (guard conf restriction)]
     (throw (ex-info "Unknown restriction type" restriction)))))

(defn authenticated?
  "The presence of user assertions from an IdP is evidence of authentication."
  [request]
  (get-in request [:session :saml :assertions]))

(defn permit?
  "Is a `route` or `query-string` allowed within the current interceptor `ctx`?
  Checks restrictions set by interceptor chain constructed with the permit fn."
  ([{:keys [request] :as ctx} query-string verb]
   (let [test (routing->test (routing-for ctx query-string verb))]
     (or (not test)
         (test request))))
  ([ctx route]
   (let [query-string (if (keyword? route)
                        (url-for ctx route)
                        route)]
     (permit? ctx query-string :get))))
