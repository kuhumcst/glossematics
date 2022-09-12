(ns dk.cst.glossematics.backend
  "The central namespace of the backend app; defines backend routing."
  (:require [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.spec.alpha :as s]
            [io.pedestal.log :as log]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [io.pedestal.interceptor :as ic]
            [dk.cst.pedestal.sp.routes :as sp.routes]
            [dk.cst.pedestal.sp.conf :as sp.conf]
            [dk.cst.pedestal.sp.interceptors :as sp.ic]
            [dk.cst.pedestal.sp.example :as example]
            [dk.cst.glossematics.backend.index :as index]
            [dk.cst.glossematics.backend.endpoints :as endpoints]
            [dk.cst.glossematics.db :as db :refer [conn]]
            [dk.cst.glossematics.db.search :as db.search])
  (:gen-class))

(defonce server (atom nil))
(defonce sp-conf (atom nil))

(defn ->conf-ic
  "Return an interceptor that assocs the `conf` to the request."
  [conf]
  (ic/interceptor
    {:name  ::saml-paths
     :enter (fn [ctx]
              (update ctx :request assoc :conf conf))}))

(defn glossematics-routes
  "Most of the routing happens on the frontend inside the SPA. The API routes
   are an exception (as well as the SAML routes required for Pedestal SP)."
  [conf]
  (let [redirect-to-spa [(fn [_] {:status  301
                                  :headers {"Location" "/app"}})]
        conf-ic         (->conf-ic conf)
        all             (conj (sp.ic/auth-chain conf :all) conf-ic)
        authenticated   (conj (sp.ic/auth-chain conf :authenticated) conf-ic)
        spa-chain       (conj all endpoints/lang-neg index/handler)]

    ;; These first few routes all lead to the SPA
    #{["/" :get redirect-to-spa :route-name ::root]
      ["/app" :get spa-chain :route-name ::spa]
      ["/app/*" :get spa-chain :route-name ::spa-path]

      ;; API routes
      ["/timeline"
       :get (into all endpoints/timeline-chain)
       :route-name ::endpoints/timeline]
      ["/file/:filename"
       :get (into authenticated endpoints/file-chain)
       :route-name ::endpoints/file]
      ["/entity/:id"
       :get (into authenticated endpoints/entity-chain)
       :route-name ::endpoints/entity]

      ;; Unrestricted at the route level, but performs local authorization.
      ;; Refer to the source code of the 'search-handler' for details.
      ["/search"
       :get (into all endpoints/search-chain)
       :route-name ::endpoints/search]

      ;; The metadata contains names and internal IDs, but it doesn't contain
      ;; information about these names. It is needed to construct unrestricted
      ;; pages such as the bibliography page. Otherwise, that page would have to
      ;; be hidden. Under GDPR this will likely constitute legitimate interest.
      ["/search/metadata"
       :get (into all endpoints/search-metadata-chain)
       :route-name ::endpoints/search-metadata]}))

(defn routes
  [sp-conf]
  (route/expand-routes
    (set/union (glossematics-routes sp-conf)
               (sp.routes/all sp-conf))))

(defn ->service-map
  [sp-conf]
  (when-let [conf-error (s/explain-data ::sp.conf/config sp-conf)]
    (log/error :bootstrap.conf/invalid conf-error)
    (throw (ex-info "invalid configuration" conf-error)))
  (let [csp (if index/development?
              {:default-src "'self' 'unsafe-inline' 'unsafe-eval' localhost:* 0.0.0.0:* ws://localhost:* ws://0.0.0.0:*"}
              {:default-src "'self'"
               :base-uri    "'self'"
               :script-src  "'self' 'unsafe-inline'"        ; TODO: unsafe-eval possibly only needed for dev main.js?
               :style-src   "'self' 'unsafe-inline'"})]
    (cond-> {::http/routes         #((deref #'routes) sp-conf)
             ::http/type           :jetty
             ::http/host           "0.0.0.0"                ; "localhost" won't work on a KU-IT server
             ::http/port           8080
             ::http/resource-path  "/dk/cst/glossematics/public"

             ;; Using the starter policy from https://content-security-policy.com/ as a basis
             ::http/secure-headers {:content-security-policy-settings csp}}

      ;; Make sure we can communicate with the Shadow CLJS app during dev.
      index/development? (assoc ::http/allowed-origins (constantly true)))))

(defn load-sp-conf!
  "Load the config file (superset of a Pedestal SP config) at `conf-path`."
  [conf-path]
  (log/info :bootstrap.conf/load conf-path)
  (reset! sp-conf (cond-> (sp.conf/init (sp.conf/read-file! conf-path))
                    ;; Comment out this line to use auth during dev.
                    ;; Make sure to reload the sp-conf and restart!
                    index/development? (assoc :auth-override :all))))

(defn start-prod
  "Start a production environment using the config file at `conf-path`."
  [conf-path]
  (log/info :bootstrap/start {:dev? false})
  (let [conf        (load-sp-conf! conf-path)
        service-map (->service-map conf)]
    (db/bootstrap! conf)
    (log/info :bootstrap.asami/begin-cache-names true)
    (->> (update-vals (db.search/search-metadata conn) count) ; memoize
         (log/info :bootstrap.asami/names-cache))
    (log/info :bootstrap.server/service-map service-map)
    (http/start (http/create-server service-map))))

(defn start-dev []
  "Start a development environment using the config file at `conf-path`."
  (log/info :bootstrap/start {:dev? true})

  ;; NOTE: only bootstraps once in dev mode!
  ;; This facilitates quick server restarts when developing at the REPL.
  (if (not @sp-conf)
    (-> (example/in-home "/.glossematics/repl-conf.edn")
        (load-sp-conf!)
        (db/bootstrap!))
    (log/info :bootstrap.conf/skip true))

  (let [service-map (assoc (->service-map @sp-conf) ::http/join? false)]
    (log/info :bootstrap.server/service-map service-map)
    (reset! server (http/start (http/create-server service-map)))))

(defn stop-dev []
  (log/info :bootstrap.server/stop true)
  (http/stop @server))

(defn restart-dev []
  (when @server
    (stop-dev))
  (start-dev))

(defn -main
  [& [conf-path]]
  (log/info :bootstrap/main conf-path)
  (cond
    (.exists (io/file conf-path))
    (do
      (log/info :bootstrap.conf/exists conf-path)
      (start-prod conf-path))

    conf-path
    (log/error :bootstrap.conf/unreadable conf-path)

    :else
    (log/error :bootstrap.conf/missing conf-path)))

(comment
  @sp-conf
  (restart-dev)
  (start-dev)
  (stop-dev)
  #_.)
