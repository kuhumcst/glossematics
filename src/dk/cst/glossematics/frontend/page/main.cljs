(ns dk.cst.glossematics.frontend.page.main
  (:require [dk.cst.glossematics.shared :as shared]
            [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.i18n :as i18n]
            [dk.cst.glossematics.frontend.api :as api]
            [clojure.string :as str]))

(defn user-section
  [tr]
  (let [institution (shared/assertions->institution state/assertions)
        assertions  (some-> (not-empty (:attrs state/assertions))
                            (dissoc "eduPersonTargetedID")  ; not needed
                            (->> (sort-by first)))]
    (if @state/authenticated?
      [:div.text-content.menu
       [:div.login-status
        (if institution
          [tr ::logged-in-status-1 institution]
          [tr ::logged-in-status])
        [:button.logout-button
         {:on-click (fn [e]
                      (.preventDefault e)
                      (api/logout))
          :title    (tr ::log-out-long)}
         [:span
          [:img {:src "/images/lock-svgrepo-com.svg" :alt ""}]
          [tr ::log-out]]]]
       (when (or assertions state/development?)
         [:<>
          [:hr]
          [:details
           [:summary [tr ::user-details]]
           [:aside
            [:table.entity-metadata
             [:tbody
              (for [[k v :as kv] assertions]
                [:tr {:key kv}
                 (into [:td] (for [c k]
                               (if (re-matches #"[A-Z]" c)
                                 [:<> [:wbr] c]
                                 c)))
                 [:td (->> v sort (str/join ", "))]])]]]]])]
      [:div.text-content.menu
       [:div.login-status
        [tr ::logged-out-status]
        [:button.login-button
         {:on-click (fn [e]
                      (.preventDefault e)
                      (api/login))
          :title    (tr ::log-in-long)}
         [:span
          [:img {:src "/images/unlock-svgrepo-com-modified.svg" :alt ""}]
          [tr ::log-in]]]]])))

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
  (let [{:keys [id->name]} @state/search
        tr (i18n/->tr)]
    [:article.main-page
     [user-section tr]
     [:div.text-content
      (let [intro (tr ::introduction)]
        (conj (subvec intro 0 (dec (count intro)))
              ;; The correspondence list is inserted into the translated text.
              (conj (last intro)
                    [:ul
                     (for [[ref1 ref2] important-correspondences]
                       [:li {:key [ref1 ref2]}
                        (correspondence ref1 ref2 id->name)])])))]]))
