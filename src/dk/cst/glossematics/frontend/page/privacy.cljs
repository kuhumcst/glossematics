(ns dk.cst.glossematics.frontend.page.privacy
  (:require [dk.cst.glossematics.frontend.i18n :as i18n]))

(defn page
  []
  (let [tr (i18n/->tr)]
    [:div.main-page                                         ;TODO: generic container
     [tr ::text]]))
