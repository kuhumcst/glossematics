(ns dk.cst.glossematics.frontend.page.encyclopedia
  (:require [dk.cst.glossematics.frontend.state :as state]))

(defn page
  []
  [:<>
   [:h2 (-> @state/location :path-params :ref)]
   [:p "TODO"]])
