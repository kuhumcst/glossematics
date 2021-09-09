(ns dk.cst.glossematics.backend.service
  (:require [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.spec.alpha :as s]
            [io.pedestal.log :as log]
            [io.pedestal.test :as test]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [dk.cst.glossematics.backend.index :as index]
            [dk.cst.glossematics.backend.files :as files]
            [dk.cst.pedestal.sp.routes :as sp.routes]
            [dk.cst.pedestal.sp.conf :as sp.conf]
            [dk.cst.pedestal.sp.interceptors :as sp.ic]
            [dk.cst.pedestal.sp.example :as example]))

(defonce server (atom nil))
(defonce sp-conf (atom nil))

(defn glossematics-routes
  [{:keys [files-dir] :as conf}]
  #{["/" :get (conj (sp.ic/chain conf :authenticated) index/handler) :route-name ::index]
    ["/login" :get [(sp.ic/session-ic conf) (example/login-page-ic conf)] :route-name ::login]
    ["/files/:fmt/:filename" :get (conj (sp.ic/chain conf :authenticated) (files/->handler files-dir)) :route-name ::files]})

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
              {:default-src "'self' 'unsafe-inline' 'unsafe-eval' localhost:* ws://localhost:*"}
              {:default-src "'none'"
               :script-src  "'self' 'unsafe-inline'"        ; unsafe-eval possibly only needed for dev main.js
               :connect-src "'self'"
               :img-src     "'self'"
               :font-src    "'self'"
               :style-src   "'self' 'unsafe-inline'"
               :base-uri    "'self'"})]
    {::http/routes         #((deref #'routes) sp-conf)
     ::http/type           :jetty
     ::http/host           "0.0.0.0"                        ; "localhost" won't work on a KU-IT server
     ::http/port           8080
     ::http/resource-path  "/public"

     ;; Using the starter policy from https://content-security-policy.com/ as a basis
     ::http/secure-headers {:content-security-policy-settings csp}}))

(defn load-sp-conf!
  ([path] (reset! sp-conf (sp.conf/init (sp.conf/read-file! path))))
  ([] (load-sp-conf! (example/in-home "/.glossematics/repl-conf.edn"))))

(defn start []
  (when (not @sp-conf)
    (load-sp-conf!))
  (let [service-map (->service-map @sp-conf)]
    (http/start (http/create-server service-map))))

(defn start-dev []
  (when (not @sp-conf)
    (load-sp-conf!))
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
