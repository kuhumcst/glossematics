(ns dk.cst.pedestal-sp.auth
  (:require [hiccup.core :as hiccup]
            [io.pedestal.interceptor :as ic]
            [io.pedestal.interceptor.chain :as chain]
            [io.pedestal.interceptor.error :as error]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.ring-middlewares :as middlewares]))

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

(defn routing->restriction
  "Given a `routing` map for a single route, return the auth test attached as
  metadata to the ::session-guard interceptor.

  Note: routing maps are returned by `routing-for`."
  [{:keys [interceptors] :as routing}]
  (::restriction (meta (get-ic interceptors ::guard))))

(defn authenticated?
  [request]
  (get-in request [:session :saml :assertions]))

(defn restriction->auth-test
  [restriction]
  (cond
    (nil? restriction) (constantly true)
    (keyword? restriction) (case restriction
                             :authenticated authenticated?
                             :all (constantly true)
                             :none (constantly false))
    (fn? restriction) restriction
    :else (throw (ex-info "Unknown restriction type" restriction))))

(defn session
  [{:keys [session] :as conf}]
  (middlewares/session session))

;; TODO: further check assertions?
(defn guard
  "Interceptor that will throw exceptions when auth fails."
  [conf restriction]
  (with-meta
    (ic/interceptor
      {:name  ::guard
       :enter (fn [{:keys [request] :as ctx}]
                (let [authorised? (restriction->auth-test restriction)]
                  (if (not (authorised? request))
                    (throw (ex-info "Failed auth" {::restriction restriction}))
                    ctx)))})
    {::restriction restriction}))

(defn- no-authn
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

(defn failure
  "Error-handling interceptor creating responses for errors thrown by ::guard."
  [conf]
  (error/error-dispatch [{:keys [request] :as ctx} ex]
    [{:exception-type :clojure.lang.ExceptionInfo :interceptor ::guard}]
    (if (authenticated? request)
      (assoc ctx :response no-authz)
      (assoc ctx :response ((no-authn conf) request)))

    :else (assoc ctx ::chain/error ex)))

;; TODO: allow restrictions to be defined as data too (map, set, vector)
(defn permit
  "Create an interceptor chain to make sure that a user is authorised to access
  a resource based on the expanded `conf` and a `restriction`.

  When no `restriction` is provided, simply returns an interceptor chain with
  the session interceptor."
  [conf restriction]
  (if (or (keyword? restriction) (fn? restriction))
    [(failure conf) (session conf) (guard conf restriction)]
    (throw (ex-info "Unknown restriction type" restriction))))

(defn permit?
  "Is a `route` or `query-string` allowed within the current interceptor `ctx`?
  Checks restrictions set by interceptor chain constructed with the permit fn."
  ([{:keys [request] :as ctx} query-string verb]
   (let [auth-test (-> (routing-for ctx query-string verb)
                       (routing->restriction)
                       (restriction->auth-test))]
     (auth-test request)))
  ([ctx route]
   (let [query-string (if (keyword? route)
                        (url-for ctx route)
                        route)]
     (permit? ctx query-string :get))))
