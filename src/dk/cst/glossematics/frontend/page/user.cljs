(ns dk.cst.glossematics.frontend.page.user
  "Page for logging in/out and managing user settings."
  (:require [dk.cst.glossematics.frontend.state :as state]
            [lambdaisland.fetch :as fetch]
            [clojure.string :as str]))

(defn saml-path
  [saml-type]
  (str (get state/paths saml-type)
       "?RelayState=" (js/encodeURIComponent js/location.href)))

(defn logout [e]
  (.preventDefault e)
  (.then (fetch/post (saml-path :saml-logout))
         (reset! state/authenticated? false)))

(defn login [e]
  (.preventDefault e)
  (set! js/location.href (saml-path :saml-login)))

(defn assertions->institution
  [assertions]
  (let [{:strs [organizationName schacHomeOrganization]} (:attrs assertions)]
    (or (first organizationName)
        (first schacHomeOrganization)
        "your institution")))

(defn assertions->individual
  [assertions]
  (let [{:strs [cn displayName]} (:attrs assertions)]
    (or (first cn)
        (first displayName)
        "you")))

(defn page
  []
  (let [individual  (assertions->individual state/assertions)
        institution (assertions->institution state/assertions)]
    [:div.user-page
     [:h1 individual]
     (if @state/authenticated?
       [:<>
        [:section.text-content
         [:div.auth-message
          [:span "You are currently " [:em "logged in"] " via " institution "."]
          [:button.logout-button
           {:on-click logout
            :title    "Log out of Glossematics"}
           [:img {:src "/images/lock-svgrepo-com.svg"}]
           "Log out"]]
         [:hr]
         [:table
          [:tbody
           (for [[k v :as kv] (:attrs state/assertions)]
             [:tr {:key kv}
              [:td (str k)]
              [:td (->> v sort (str/join ", "))]])]]]]
       [:<>
        [:section.text-content
         [:div.auth-message
          [:span "You are currently " [:em "not"] " logged in. "]
          [:button.login-button
           {:on-click login
            :title    "Log in to Glossematics using your institution"}
           [:img {:src "/images/unlock-svgrepo-com-modified.svg"}]
           "Log in"]]
         [:hr]
         [:p
          "You may still view the timeline and the bibliography when logged out. "
          "However, the search page and the facsimile reader "
          "are not available unless you first authenticate. "]]])]))
