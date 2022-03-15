(ns dk.cst.glossematics.backend
  "The central namespace of the backend app; defines backend routing."
  (:require [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.spec.alpha :as s]
            [io.pedestal.log :as log]
            [io.pedestal.test :as test]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [dk.cst.pedestal.sp.routes :as sp.routes]
            [dk.cst.pedestal.sp.conf :as sp.conf]
            [dk.cst.pedestal.sp.interceptors :as sp.ic]
            [dk.cst.pedestal.sp.example :as example]
            [dk.cst.glossematics.backend.index :as index]
            [dk.cst.glossematics.backend.endpoints :as endpoints]
            [dk.cst.glossematics.backend.db :refer [bootstrap!]]))

(defonce server (atom nil))
(defonce sp-conf (atom nil))

(defn glossematics-routes
  "Most of the routing happens on the frontend inside the SPA. The API routes
   are an exception (as well as the SAML routes required for Pedestal SP)."
  [conf]
  (let [redirect-to-spa [(fn [_] {:status  301
                                  :headers {"Location" "/app"}})]
        single-page-app (conj (sp.ic/auth-chain conf :authenticated)
                              index/handler)]
    ;; These first few routes all lead to the SPA
    #{["/" :get redirect-to-spa :route-name ::root]
      ["/app" :get single-page-app :route-name ::spa]
      ["/app/*" :get single-page-app :route-name ::spa-path]

      ;; API routes
      ["/timeline"
       :get (into (sp.ic/auth-chain conf :authenticated)
                  endpoints/timeline-chain)
       :route-name ::endpoints/timeline]
      ["/file/:filename"
       :get (into (sp.ic/auth-chain conf :authenticated)
                  endpoints/file-chain)
       :route-name ::endpoints/file]
      ["/entity/:id"
       :get (into (sp.ic/auth-chain conf :authenticated)
                  endpoints/entity-chain)
       :route-name ::endpoints/entity]
      ["/search"
       :get (into (sp.ic/auth-chain conf :authenticated)
                  endpoints/search-chain)
       :route-name ::endpoints/search]}))

(defn routes
  [sp-conf]
  (route/expand-routes
    (set/union (glossematics-routes sp-conf)
               (sp.routes/all sp-conf))))

(defn ->service-map
  [sp-conf]
  (when-let [conf-error (s/explain-data ::sp.conf/config sp-conf)]
    (throw (ex-info "invalid configuration" conf-error)))
  (let [csp (if index/development?
              {:default-src "'self' 'unsafe-inline' 'unsafe-eval' localhost:* 0.0.0.0:* ws://localhost:* ws://0.0.0.0:*"}
              {:default-src "'none'"
               :script-src  "'self' 'unsafe-inline'"        ; unsafe-eval possibly only needed for dev main.js
               :connect-src "'self'"
               :img-src     "'self'"
               :font-src    "'self'"
               :style-src   "'self' 'unsafe-inline'"
               :base-uri    "'self'"})]
    (cond-> {::http/routes         #((deref #'routes) sp-conf)
             ::http/type           :jetty
             ::http/host           "0.0.0.0"                ; "localhost" won't work on a KU-IT server
             ::http/port           8080
             ::http/resource-path  "/public"

             ;; Using the starter policy from https://content-security-policy.com/ as a basis
             ::http/secure-headers {:content-security-policy-settings csp}}

      ;; Make sure we can communicate with the Shadow CLJS app during dev.
      index/development? (assoc ::http/allowed-origins (constantly true)))))

(defn load-sp-conf!
  ([path] (reset! sp-conf (cond-> (sp.conf/init (sp.conf/read-file! path))
                            ;; Comment out this line to use auth during dev.
                            ;; Make sure to reload the sp-conf and restart!
                            index/development? (assoc :auth-override :all))))
  ([] (load-sp-conf! (example/in-home "/.glossematics/repl-conf.edn"))))

(defn start []
  (when (not @sp-conf)
    (load-sp-conf!))
  (bootstrap! @sp-conf)
  (let [service-map (->service-map @sp-conf)]
    (http/start (http/create-server service-map))))

(defn start-dev []
  (when (not @sp-conf)
    (load-sp-conf!))
  (bootstrap! @sp-conf)
  (reset! server (http/start (http/create-server (assoc (->service-map @sp-conf)
                                                   ::http/join? false)))))

(defn stop-dev []
  (http/stop @server))

(defn restart []
  (when @server
    (stop-dev))
  (start-dev))

(defn -main
  [& [conf-source]]
  (cond
    (.exists (io/file conf-source))
    (do
      (log/info :conf/exists {:source conf-source})
      (load-sp-conf! conf-source)
      (start))

    conf-source
    (log/error :conf/unreadable {:source conf-source})

    :else
    (log/error :conf/missing {:source conf-source})))

(comment
  @sp-conf
  (:state-manager @sp-conf)

  (load-sp-conf!)
  (clojure.pprint/pprint (->service-map @sp-conf))

  (test/response-for (:io.pedestal.http/service-fn @server) :get "/no-such-route")

  (restart)
  (start-dev)
  (stop-dev))
