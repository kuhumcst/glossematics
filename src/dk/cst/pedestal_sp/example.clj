(ns dk.cst.pedestal-sp.example
  (:require [clojure.set :as set]
            [hiccup.core :as hiccup]
            [io.pedestal.interceptor :as ic]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [dk.cst.pedestal-sp :as sp]
            [dk.cst.pedestal-sp.auth :as sp.auth]))

(def conf
  (sp/expand-conf {:app-name   "Example app"                ; EntityId in meta, ProviderName in request
                   :sp-url     "https://localhost:4433"
                   :idp-url    "https://localhost:7000"
                   :idp-cert   (slurp "/Users/rqf595/Code/temp/saml-test/node_modules/saml-idp/idp-public-cert.pem")
                   :credential {:alias    "mylocalsp"
                                :filename "/Users/rqf595/Code/temp/saml-test/keystore.jks"
                                :password (System/getenv "KEYSTORE_PASS")}}))

(defn- resource
  [ctx path description]
  (if (sp.auth/permit? ctx path)
    [:li [:a {:href path} description]]
    [:li "⚠️ " [:a {:href path} [:del description]]]))

(defn login-page
  "Example login page handler. Specifying the query-param RelayState will
  redirect there after successful SAML authentication."
  [conf]
  (ic/interceptor
    {:name  ::login-page
     :enter (fn [{:keys [request] :as ctx}]
              (let [{:keys [query-params]} request
                    {:keys [RelayState]} query-params
                    {:keys [app-name
                            acs-url
                            paths]} conf
                    {:keys [saml-meta
                            saml-request
                            saml-response
                            saml-assertions
                            saml-logout]} paths]
                (assoc ctx
                  :response {:status  200
                             :headers {"Content-Type" "text/html"}
                             :body    (hiccup/html
                                        [:html
                                         [:head
                                          [:meta {:charset "utf-8"}]]
                                         [:body
                                          [:h1 app-name]
                                          [:p "Example login form for logging in through an IdP."]
                                          (if (sp.auth/authenticated? request)
                                            [:form {:action saml-logout
                                                    :method "post"}
                                             [:input {:type  "hidden"
                                                      :name  "RelayState"
                                                      :value "/"}]
                                             [:button {:type "submit"}
                                              "Log out"]]
                                            [:form {:action acs-url}
                                             (when RelayState
                                               [:input {:type  "hidden"
                                                        :name  "RelayState"
                                                        :value RelayState}])
                                             [:button {:type "submit"}
                                              "Log in"]])
                                          [:h2 "Available resources:"]
                                          [:ul
                                           (resource ctx saml-meta "SAML metadata")
                                           (resource ctx saml-request "SP request")
                                           (resource ctx saml-response "IdP response")
                                           (resource ctx saml-assertions "User assertions")
                                           (resource ctx "/forbidden" "Always forbidden")]]])})))}))

(defn example-routes
  [conf]
  #{["/" :get [(sp.auth/session conf) (login-page conf)] :route-name ::login]
    ["/forbidden" :any (sp.auth/permit conf :none) :route-name ::forbidden]})

(def routes
  (route/expand-routes
    (set/union (example-routes conf)
               (sp/saml-routes conf))))

(def service-map
  (let [home (System/getProperty "user.home")
        jks  (str home "/_certifiable_certs/localhost-1d070e4/dev-server.jks")]
    {::http/routes            routes
     ::http/type              :jetty
     ::http/port              8080

     ;; Development-only keystore created using Bruce Hauman's Certifiable.
     ;; https://github.com/bhauman/certifiable#quick-start-command-line-usage
     ::http/container-options {:ssl?         true
                               :ssl-port     4433           ; ports below 1024 require root permissions
                               :keystore     jks
                               :key-password "password"}}))

(defonce server (atom nil))

(defn start []
  (reset! server (-> service-map
                     (assoc ::http/join? false)
                     (http/create-server)
                     (http/start))))

(defn stop []
  (http/stop @server))

(defn restart []
  (when @server
    (stop))
  (start))

(comment
  (restart)
  (start)
  (stop)

  ;; Currently, there's a print-related bug with the SAML StateManager...
  (dissoc conf :state-manager)
  @(:state-manager conf))
