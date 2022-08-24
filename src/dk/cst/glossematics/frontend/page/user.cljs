(ns dk.cst.glossematics.frontend.page.user
  "Page for logging in/out and managing user settings."
  (:require [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [lambdaisland.fetch :as fetch]
            [clojure.string :as str]))

(defn logout [e]
  (.preventDefault e)
  (.then (fetch/post (sp.auth/saml-path state/paths :saml-logout))
         #(reset! state/authenticated? false)))

(defn login [e]
  (.preventDefault e)
  (->> (sp.auth/saml-path state/paths :saml-login js/location.href)
       (set! js/location.href)))

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
        "Anonymous user")))

(defn page
  []
  (let [individual  (assertions->individual state/assertions)
        institution (assertions->institution state/assertions)
        assertions  (-> (:attrs state/assertions)
                        (not-empty)
                        (dissoc "eduPersonTargetedID")      ; not needed
                        (->> (sort-by first)))]
    [:div.user-page
     [:h1 individual]
     (if @state/authenticated?
       [:<>
        [:section.text-content
         [:button.logout-button
          {:on-click logout
           :title    "Log out of Glossematics"}
          [:span
           [:img {:src "/images/lock-svgrepo-com.svg" :alt ""}]
           "Log out"]]
         [:hr]
         [:p "You are currently " [:em "logged in"] " via " institution "."]
         (when assertions
           [:aside
            [:table.entity-metadata
             [:tbody
              (for [[k v :as kv] assertions]
                [:tr {:key kv}
                 (into [:td] (for [c k]
                               (if (re-matches #"[A-Z]" c)
                                 [:<> [:wbr] c]
                                 c)))
                 [:td (->> v sort (str/join ", "))]])]]])]]
       [:<>
        [:section.text-content
         [:button.login-button
          {:on-click login
           :title    "Log in to Glossematics using your institution"}
          [:span
           [:img {:src "/images/unlock-svgrepo-com-modified.svg" :alt ""}]
           "Log in"]]
         [:hr]
         [:p "You are currently " [:em "not"] " logged in. "]
         [:p
          "Glossematics allows you to log in through your own institution "
          "as long as it is part of a common educational federation. "
          "Clicking 'Log in' above will direct you to "
          [:abbr {:title "Where Are You From"} "WAYF"] " "
          "where you may choose your institution from a list (if applicable)."]
         [:p
          "You may still view the timeline and the bibliography pages. "
          "However, the search page and the facsimile reader "
          "are not available unless you first authenticate. "]]])]))
