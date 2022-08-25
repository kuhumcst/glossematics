(ns dk.cst.glossematics.frontend.page.main
  (:require [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.state :as state]
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
        (first displayName))))

(defn user-section
  []
  (let [logged-in?  @state/authenticated?
        individual  (assertions->individual state/assertions)
        institution (assertions->institution state/assertions)
        assertions  (some-> (not-empty (:attrs state/assertions))
                            (dissoc "eduPersonTargetedID")  ; not needed
                            (->> (sort-by first)))
        title       (if (and logged-in? individual)
                      [:h1 "Welcome, " individual]
                      [:h1 "Welcome"])]
    (if @state/authenticated?
      [:<> title
       [:div.text-content
        [:div.login-status
         [:p "You are currently " [:em "logged in"] " via " institution ". "]
         [:button.logout-button
          {:on-click logout
           :title    "Log out of Glossematics"}
          [:span
           [:img {:src "/images/lock-svgrepo-com.svg" :alt ""}]
           "Log out"]]]
        (when assertions
          [:<>
           [:hr]
           [:details
            [:summary "Login details"]
            [:aside
             [:table.entity-metadata
              [:tbody
               (for [[k v :as kv] assertions]
                 [:tr {:key kv}
                  (into [:td] (for [c k]
                                (if (re-matches #"[A-Z]" c)
                                  [:<> [:wbr] c]
                                  c)))
                  [:td (->> v sort (str/join ", "))]])]]]]])]]
      [:<> title
       [:div.text-content
        [:div.login-status
         [:p "You are currently " [:em "not"] " logged in. "]
         [:button.login-button
          {:on-click login
           :title    "Log in to Glossematics using your institution"}
          [:span
           [:img {:src "/images/unlock-svgrepo-com-modified.svg" :alt ""}]
           "Log in"]]]]])))

(def important-correspondences
  [["#np56" "#np145"]                                       ;Hjelmslev-Uldall
   ["#np56" "#np60"]                                        ;Hjemslev-Holt
   ["#np56" "#np64"]                                        ;Hjelmslev-Jakobson
   ["#np56" "#np51"]                                        ;Hjemslev-Hammerich
   ["#np56" "#np33"]                                        ;Hjelmslev-Diderichsen
   ["#np56" "#np40"]                                        ;Hjelmslev-Fischer-Jørgensen
   ["#np56" "#np160"]                                       ;Hjelmslev-Wett Frederiksen
   ["#np56" "#np162"]                                       ;Hjelmslev-Whitfield
   ["#np56" "#np21"]                                        ;Hjelmslev-Brøndal
   ["#np56" "#np127"]                                       ;Hjelmslev-Sommerfelt
   ["#np56" "#np766"]                                       ;Hjelmslev-Stender-Petersen
   ["#np145" "#np68"]                                       ;Uldall-Jones
   ["#np33" "#np40"]                                        ;Diderichsen-Fischer-Jørgensen
   ["#np33" "#np51"]                                        ;Diderichsen-Hammerich
   ["#np33" "#np160"]                                       ;Diderichsen-Wett-Frederiksen
   ["#np40" "#np51"]                                        ;Fischer-Jørgensen-Hammerich
   ["#np40" "#np64"]])                                      ;Fischer-Jørgensen-Jakobson foreligger udgivet

(defn correspondence
  [ref1 ref2 & [id->name]]
  [:a {:title ""
       :href  (fshared/correspondence-href ref1 ref2)}
   (get id->name ref1 ref1) " / " (get id->name ref2 ref2)])

(defn page
  []
  (let [{:keys [id->name]} @state/search]
    [:div.main-page
     [user-section]
     [:div.text-content
      [:p "TODO: introduction"]
      [:p "TODO: introduction"]
      [:p "TODO: introduction"]
      [:hr]
      [:h2 "How to use"]
      [:p
       ""]
      [:p
       "Glossematics allows you to log in through your own institution "
       "as long as it is part of a common educational federation. "
       "Clicking 'Log in' above will direct you to "
       [:abbr {:title "Where Are You From"} "WAYF"] " "
       "where you may choose your institution from a list (if applicable)."]
      [:p
       "You may still view the timeline and the bibliography pages. "
       "However, the search page and the facsimile reader "
       "are not available unless you first log in. "]
      [:hr]
      [:h2 "Correspondences"]
      [:p
       "Once authenticated, you may search all documents within our archive. "
       "Below are exchanges that were important to the theory of Glossematics:"]
      [:ul
       (for [[ref1 ref2] important-correspondences]
         [:li {:key [ref1 ref2]} (correspondence ref1 ref2 id->name)])]]]))
