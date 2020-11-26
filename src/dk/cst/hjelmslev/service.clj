(ns dk.cst.hjelmslev.service
  (:require [clojure.set :as set]
            [io.pedestal.test :as test]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [dk.cst.pedestal-sp :as sp]
            [dk.cst.pedestal-sp.auth :as sp.auth]
            [dk.cst.pedestal-sp.example :as example])
  (:import [javax.servlet DispatcherType]
           [java.util EnumSet]
           [org.eclipse.jetty.servlets DoSFilter]
           [org.eclipse.jetty.servlet ServletContextHandler FilterHolder]
           [org.eclipse.jetty.server.handler.gzip GzipHandler]))

(def conf
  (sp/expand-conf {:app-name   "Hjelmslev"                  ; EntityId in meta, ProviderName in request
                   :sp-url     "https://localhost:4433"
                   :idp-url    "https://localhost:7000"
                   :idp-cert   (slurp "/Users/rqf595/Code/temp/saml-test/node_modules/saml-idp/idp-public-cert.pem")
                   :credential {:alias    "mylocalsp"
                                :filename "/Users/rqf595/Code/temp/saml-test/keystore.jks"
                                :password (System/getenv "KEYSTORE_PASS")}}))

(defn hjelmslev-routes
  [conf]
  #{["/" :get [(sp.auth/session conf) (example/login-page conf)] :route-name ::login]})

(def routes
  (route/expand-routes
    (set/union (hjelmslev-routes conf)
               (sp/saml-routes conf))))

;; TODO: make dev exception for shadow-cljs
(def hjelmslev-csp
  {:default-src "'none'"
   :script-src  "'self' 'unsafe-inline'"
   :connect-src "'self'"
   :img-src     "'self'"
   :style-src   "'self' 'unsafe-inline'"
   :base-uri    "'self'"})

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
      #_(.setGzipHandler (GzipHandler.))                    ;TODO enable for production system
      (.addFilter dos-filter "/*" (EnumSet/of DispatcherType/REQUEST)))))

(def service-map
  (let [home (System/getProperty "user.home")
        jks  (str home "/_certifiable_certs/localhost-1d070e4/dev-server.jks")]
    {::http/routes            routes
     ::http/type              :jetty
     ::http/port              8080
     ::http/resource-path     "/public"

     ;; Using the starter policy from https://content-security-policy.com/ as a basis
     ::http/secure-headers    {:content-security-policy-settings hjelmslev-csp}

     ;; Development-only keystore created using Bruce Hauman's Certifiable.
     ;; https://github.com/bhauman/certifiable#quick-start-command-line-usage
     ::http/container-options {:ssl?                 true
                               :ssl-port             4433   ; ports below 1024 require root permissions
                               :keystore             jks
                               :key-password         "password"
                               :context-configurator context-configurator}}))

(defn start []
  (http/start (http/create-server service-map)))

(defonce server (atom nil))

(defn start-dev []
  (reset! server
          (http/start (http/create-server (assoc service-map
                                            ::http/join? false)))))

(defn stop-dev []
  (http/stop @server))

(defn restart []
  (when @server
    (stop-dev))
  (start-dev))

(comment
  ;; Currently, there's a print-related bug with the SAML StateManager...
  (dissoc conf :state-manager)
  @(:state-manager conf)

  (test/response-for (:io.pedestal.http/service-fn @server) :get "/no-such-route")

  (restart)
  (start-dev)
  (stop-dev))
