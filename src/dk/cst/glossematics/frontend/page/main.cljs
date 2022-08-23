(ns dk.cst.glossematics.frontend.page.main
  (:require [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state]))

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
  (let [{:keys [id->name] :as search-state} @state/search]
    [:div.text-content
     [:h2 "Welcome"]
     [:p "[missing introduction]"]
     [:hr]
     [:h2 "Correspondence"]
     [:p
      "Once authenticated, you may search all letters recorded in our archive. "
      "Below are exchanges that were important to the theory of Glossematics:"]
     [:ul
      (for [[ref1 ref2] important-correspondences]
        [:li {:key [ref1 ref2]} (correspondence ref1 ref2 id->name)])]]))
