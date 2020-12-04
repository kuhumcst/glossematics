(ns dk.cst.hjelmslev.service
  (:require [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.spec.alpha :as s]
            [io.pedestal.log :as log]
            [io.pedestal.test :as test]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [dk.cst.pedestal.sp.routes :as sp.routes]
            [dk.cst.pedestal.sp.conf :as sp.conf]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.pedestal.sp.example :as example])
  (:import [javax.servlet DispatcherType]
           [java.util EnumSet]
           [org.eclipse.jetty.servlets DoSFilter]
           [org.eclipse.jetty.servlet ServletContextHandler FilterHolder]
           [org.eclipse.jetty.server.handler.gzip GzipHandler]))

(defonce server (atom nil))
(defonce sp-conf (atom nil))

(defn hjelmslev-routes
  [conf]
  #{["/" :get [(sp.auth/session conf) (example/login-page conf)] :route-name ::login]})

(defn routes
  [sp-conf]
  (route/expand-routes
    (set/union (hjelmslev-routes sp-conf)
               (sp.routes/all sp-conf))))

;; Pedestal does come with a namespace called `io.pedestal.http.jetty.util`
;; which wraps some of the interop done here. If the configuration was a single
;; declarative configuration map I would be onboard, but a hotch-potch mix of
;; interop and fairly useless wrappers is less desirable than interop alone.
(defn context-configurator
  [^ServletContextHandler context]
  (let [dos-filter (doto (FilterHolder. (DoSFilter.))
                     ;; https://www.eclipse.org/jetty/documentation/current/dos-filter.html
                     ;; TODO: custom configuration? example vals below
                     #_(.setInitParameter "maxRequestsPerSec" "1")
                     #_(.setInitParameter "delayMs" "-1"))]
    (doto context
      ;; Add rate-limiting to incoming requests.
      (.setGzipHandler (GzipHandler.))
      (.addFilter dos-filter "/*" (EnumSet/of DispatcherType/REQUEST)))))

(s/def ::https-credential
  (s/keys :req-un [::sp.conf/filename ::sp.conf/password]))

(s/def ::extra-config
  (s/keys :req-un [::https-credential]))

(s/def ::config
  (s/merge ::sp.conf/config ::extra-config))

(defn ->service-map
  [{:keys [ports https-credential] :as sp-conf}]
  (when-let [conf-error (s/explain-data ::config sp-conf)]
    (throw (ex-info "invalid configuration" conf-error)))
  (let [{:keys [filename password]} https-credential
        {:keys [http https]
         :or   {http  80
                https 443}} ports
        ;; TODO: make dev exception for shadow-cljs
        csp {:default-src "'none'"
             :script-src  "'self' 'unsafe-inline'"
             :connect-src "'self'"
             :img-src     "'self'"
             :style-src   "'self' 'unsafe-inline'"
             :base-uri    "'self'"}]
    {::http/routes            (routes sp-conf)
     ::http/type              :jetty
     ::http/host              "0.0.0.0"                     ; "localhost" won't work on a KU-IT server
     ::http/port              http                          ; TODO: disable
     ::http/resource-path     "/public"

     ;; Using the starter policy from https://content-security-policy.com/ as a basis
     ::http/secure-headers    {:content-security-policy-settings csp}

     ;; Development-only keystore created using Bruce Hauman's Certifiable.
     ;; https://github.com/bhauman/certifiable#quick-start-command-line-usage
     ::http/container-options {:h2c?                 false
                               :ssl?                 true
                               :ssl-port             https  ; ports below 1024 require root permissions
                               :keystore             filename
                               :key-password         password
                               :context-configurator context-configurator}}))

(defn load-sp-conf!
  ([path] (reset! sp-conf (sp.conf/init (assoc (sp.conf/read-file! path)
                                          :app-name "Glossematics"))))
  ([] (load-sp-conf! (io/resource "conf.edn"))))

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
  (let [conf-source* (or conf-source (System/getenv "GLOSSEMATICS_CONF"))]
    (cond
      (.exists (io/file conf-source*))
      (do
        (log/info :conf/exists {:source conf-source*})
        (load-sp-conf! conf-source*)
        (start))

      conf-source*
      (log/error :conf/unreadable {:source conf-source*})

      :else
      (log/error :conf/missing {:source conf-source*}))))

(comment
  ;; Currently, there's a print-related bug with the SAML StateManager...
  (dissoc @sp-conf :state-manager)
  @(:state-manager @sp-conf)
  (dissoc (load-sp-conf!) :state-manager)
  (clojure.pprint/pprint (->service-map @sp-conf))

  (test/response-for (:io.pedestal.http/service-fn @server) :get "/no-such-route")

  (restart)
  (start-dev)
  (stop-dev))
