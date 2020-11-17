(ns dk.cst.pedestal-sp.example
  (:require [clojure.set :as set]
            [hiccup.core :as hiccup]
            [io.pedestal.test :as test]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [dk.cst.pedestal-sp :as sp]
            [dk.cst.pedestal-sp.interceptors :as sp-ic]))

;; had to add an extra command line arg to keystore creation to get around saml request signing error
;; ERROR ... Supplied key (sun.security.provider.DSAPrivateKey) is not a RSAPrivateKey instance
;; https://stackoverflow.com/questions/3151147/cant-sign-a-dig-sig-utilizing-java-keytool

(def conf
  (sp/expand-conf {:app-name   "Test SAML app"              ; EntityId in meta, ProviderName in request
                   :sp-url     "https://localhost:4433"
                   :idp-url    "http://localhost:7000"
                   :idp-cert   (slurp "/Users/rqf595/Code/temp/saml-test/node_modules/saml-idp/idp-public-cert.pem")
                   :credential {:alias    "mylocalsp"
                                :filename "/Users/rqf595/Code/temp/saml-test/keystore.jks"
                                :password (System/getenv "KEYSTORE_PASS")}}))

(defn login-page
  "Example login page handler. Specifying the query-param RelayState will
  redirect there after successful SAML authentication."
  [conf]
  (fn [{:keys [query-params session] :as req}]
    (let [{:keys [app-name
                  acs-url
                  paths]} conf
          {:keys [saml-meta
                  saml-response
                  saml-assertions
                  saml-logout]} paths
          logged-in? (:saml session)]
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    (hiccup/html
                  [:html
                   [:body
                    [:h1 app-name]
                    [:p "Example login form for logging in through an IdP."]
                    (if logged-in?
                      [:form {:action saml-logout
                              :method "post"}
                       [:input {:type  "hidden"
                                :name  "RelayState"
                                :value "/"}]
                       [:button {:type "submit"}
                        "Log out"]]
                      [:form {:action acs-url}
                       (when-let [relay-state (:RelayState query-params)]
                         [:input {:type  "hidden"
                                  :name  "RelayState"
                                  :value relay-state}])
                       [:button {:type "submit"}
                        "Log in"]])
                    [:h2 "Available resources:"]
                    [:ul
                     [:li
                      [:a {:href saml-meta}
                       "SAML metadata"]]
                     (if logged-in?
                       [:li
                        [:a {:href saml-response}
                         "IdP response"]]
                       [:li "⚠️ "
                        [:a {:href saml-response}
                         [:del "IdP response"]]])
                     (if logged-in?
                       [:li
                        [:a {:href saml-assertions}
                         "User assertions"]]
                       [:li "⚠️ "
                        [:a {:href saml-assertions}
                         [:del "User assertions"]]])]]])})))

(defn example-routes
  [conf]
  #{["/" :get [(sp-ic/session conf) (login-page conf)] :route-name ::login]})

(def routes
  (route/expand-routes
    (set/union (example-routes conf)
               (sp/saml-routes conf))))

(def hjelmslev-csp
  {:default-src "'none'"
   :script-src  "'self' 'unsafe-inline'"
   :connect-src "'self'"
   :img-src     "'self'"
   :style-src   "'self' 'unsafe-inline'"
   :base-uri    "'self'"})

(def service-map
  (let [home (System/getProperty "user.home")
        jks  (str home "/_certifiable_certs/localhost-1d070e4/dev-server.jks")]
    {::http/routes            routes
     ::http/type              :jetty
     ::http/port              8080

     ;; TODO: move CSP stuff over to the hjelmslev service instead
     ::http/resource-path     "/public"
     ;; Using the starter policy from https://content-security-policy.com/ as a basis
     ::http/secure-headers    {:content-security-policy-settings hjelmslev-csp}

     ;; Development-only keystore created using Bruce Hauman's Certifiable.
     ;; https://github.com/bhauman/certifiable#quick-start-command-line-usage
     ::http/container-options {:ssl?         true
                               :ssl-port     4433           ; ports below 1024 require root permissions
                               :keystore     jks
                               :key-password "password"}}))

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