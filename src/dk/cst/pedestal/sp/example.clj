(ns dk.cst.pedestal.sp.example
  (:require [clojure.set :as set]
            [clojure.java.io :as io]
            [hiccup.core :as hiccup]
            [io.pedestal.interceptor :as ic]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [io.pedestal.log :as log]
            [dk.cst.pedestal.sp.routes :as sp.routes]
            [dk.cst.pedestal.sp.conf :as sp.conf]
            [dk.cst.pedestal.sp.auth :as sp.auth]))

(defonce server (atom nil))
(defonce sp-conf (atom nil))

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

(defn routes
  [conf]
  (route/expand-routes
    (set/union (example-routes conf)
               (sp.routes/all conf))))

(defn service-map
  [conf]
  (let [{:keys [filename password]} (:https-credential conf)]
    (merge
      {::http/routes (routes conf)
       ::http/type   :jetty
       ::http/port   8080}

      (if (and filename password)
        ;; Development-only keystore created using Bruce Hauman's Certifiable.
        ;; https://github.com/bhauman/certifiable#quick-start-command-line-usage
        {::http/container-options {:ssl?         true
                                   :ssl-port     4433       ; ports below 1024 require root permissions
                                   :keystore     filename
                                   :key-password password}}
        (log/warn :example/ssl "HTTPS unavailable: no filename or password")))))

(defn load-sp-conf!
  ([path] (reset! sp-conf (sp.conf/init (sp.conf/read-file! path))))
  ([] (load-sp-conf! (io/resource "conf.edn"))))

(defn start []
  (when (not @sp-conf)
    (load-sp-conf!))
  (reset! server (-> (service-map @sp-conf)
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

  @sp-conf
  (load-sp-conf!)
  @(:state-manager @sp-conf))
