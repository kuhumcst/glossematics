(ns dk.cst.pedestal.sp.example
  (:require [clojure.set :as set]
            [clojure.data.json :as json]
            [hiccup.core :as hiccup]
            [io.pedestal.interceptor :as ic]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [dk.cst.pedestal.sp.routes :as sp.routes]
            [dk.cst.pedestal.sp.conf :as sp.conf]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.pedestal.sp.auth.interceptors :as sp.auth.ic]))

(defonce server (atom nil))
(defonce sp-conf (atom nil))

(defn in-home
  [path]
  (str (System/getProperty "user.home") path))

(defn- resource
  [ctx path description]
  (if-let [permitted (sp.auth.ic/permit-request? ctx path)]
    (if (= permitted :not-found)
      [:li "⚠️ " [:a {:href path} [:del description]]]
      [:li [:a {:href path} description]])
    [:li "🚫 " [:a {:href path} [:del description]]]))

(defn login-page-ic
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
                                          (if (sp.auth.ic/authenticated? request)
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
                                           (resource ctx "/api" "Fake API")
                                           (resource ctx "/forbidden" "Always forbidden")
                                           (resource ctx "/missing" "Missing resource")]]])})))}))

(defn api-ic
  "Example API endpoint."
  [request]
  (let [assertions (-> request :session :saml :assertions)]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (sp.auth/only-permit [assertions {:attrs {"lastName" #{"Jackson"}}}]
                (sp.auth/if-permit [assertions {:attrs {"firstName" #{"Glen"}}}]
                  (json/write-str {:glen "is the way"})
                  (json/write-str {:glen "is NOT the way"})))}))

(defn example-routes
  [conf]
  #{["/" :get [(sp.auth.ic/session-ic conf) (login-page-ic conf)] :route-name ::login]
    ["/api" :any (conj (sp.auth.ic/chain conf :authenticated) api-ic) :route-name ::api]
    ["/forbidden" :any (sp.auth.ic/chain conf :none) :route-name ::forbidden]})

(defn routes
  [conf]
  (route/expand-routes
    (set/union (example-routes conf)
               (sp.routes/all conf))))

(defn service-map
  [conf]
  {::http/routes #((deref #'routes) conf)
   ::http/type   :jetty
   ::http/port   8080})

(defn load-sp-conf!
  ([path] (reset! sp-conf (sp.conf/init (sp.conf/read-file! path))))
  ([] (load-sp-conf! (in-home "/.glossematics/repl-conf.edn"))))

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
