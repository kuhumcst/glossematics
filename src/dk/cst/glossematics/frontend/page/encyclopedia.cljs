(ns dk.cst.glossematics.frontend.page.encyclopedia
  "Page for encyclopedia look-ups of the various entities in the dataset."
  (:require [dk.cst.glossematics.frontend.state :as state]))

(defn page
  []
  [:<>
   [:h2 (-> @state/location :path-params :ref)]
   [:p "TODO"]])
