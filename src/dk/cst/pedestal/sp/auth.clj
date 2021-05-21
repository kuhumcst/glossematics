(ns dk.cst.pedestal.sp.auth
  "Define restrictions at the route level and check them in decoupled manner."
  (:require [clojure.data :as data]
            [hiccup.core :as hiccup]
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
  "Retrieve the router from the `ctx`."
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

(defn routing->auth-test
  "Given a `routing` map for a single route, return the auth test attached as
  metadata to the ::session-guard interceptor.

  Note: routing maps are returned by `routing-for`."
  [{:keys [interceptors] :as routing}]
  (or (::auth-test (meta (get-ic interceptors ::guard)))
      (constantly true)))

(defn authenticated?
  "Has the user making this `request` authenticated via SAML?"
  [request]
  (get-in request [:session :saml :assertions]))

(defn submap?
  "Is `m` a submap of `parent`?"
  [m parent]
  (nil? (first (data/diff m parent))))

(defn- assertions->auth-test
  "Return a function taking a request that compares an `assertions` map to the
  stored SAML assertions for the user making the request."
  [assertions]
  #(submap? assertions %))

(defn restriction->auth-test
  "Return a function to test an assertions map based on a given `restriction`.
  The restriction can be :authenticated, :all, :none, a submap, or a function."
  [restriction]
  (cond
    (keyword? restriction) (case restriction
                             :authenticated some?
                             :all (constantly true)
                             :none (constantly false))
    (map? restriction) (assertions->auth-test restriction)
    (fn? restriction) restriction))

(defn session-ic
  "Interceptor that adds Ring session data to a request."
  [{:keys [session] :as conf}]
  (middlewares/session session))

(defn guard-ic
  "Interceptor that will throw exceptions based on the given `restriction`.

  By also including the restriction as metadata other interceptors can look up
  restrictions for different routes ahead of time (see permit? fn)."
  [restriction]
  (let [auth-test (restriction->auth-test restriction)
        auth-meta {::restriction restriction
                   ::auth-test   auth-test}]
    (assert auth-test (str "Invalid restriction: " restriction))
    (with-meta
      (ic/interceptor
        {:name  ::guard
         :enter (fn [ctx]
                  (let [assertions (-> ctx :request :session :saml :assertions)]
                    (if (not (auth-test assertions))
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

(defn chain
  "Create an interceptor chain to make sure that a user is authorised to access
  a resource based on the expanded `conf` and a `restriction`.

  When no `restriction` is provided, simply returns an interceptor chain with
  the session interceptor."
  [conf restriction]
  [(failure-ic conf) (session-ic conf) (guard-ic restriction)])

(defn permit?
  "Is a `route` or `query-string` allowed within the current interceptor `ctx`?
  Checks restrictions set by interceptor chain constructed with the permit fn.

  Note that unresolved routes will result in a truthy response, but the return
  value will be :not-found in that case!"
  ([{:keys [request] :as ctx} query-string verb]
   (if-let [routing (routing-for ctx query-string verb)]
     ((routing->auth-test routing) request)
     :not-found))
  ([ctx route]
   (let [query-string (if (keyword? route)
                        (url-for ctx route)
                        route)]
     (permit? ctx query-string :get))))

(defmacro if-permit
  "Checks that `assertions` satisfies `restriction`. When true, returns the
  first clause of `body`; else returns the second clause."
  [[assertions restriction] & body]
  `(if ((restriction->auth-test ~restriction) ~assertions)
     ~@body))

(defmacro only-permit
  "Checks that `assertions` satisfies `restriction`. If true, returns `body`;
  else throws an exception."
  [[assertions restriction] & body]
  `(if ((restriction->auth-test ~restriction) ~assertions)
     (do ~@body)
     (throw (ex-info "Unsatisfied restriction" {::restriction ~restriction}))))
