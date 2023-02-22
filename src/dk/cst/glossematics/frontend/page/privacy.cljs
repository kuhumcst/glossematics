(ns dk.cst.glossematics.frontend.page.privacy
  (:require [dk.cst.glossematics.frontend.i18n :as i18n]
            [dk.cst.glossematics.frontend :as-alias frontend]))

(defn page
  []
  (let [tr (i18n/->tr)]
    [:article.main-page                                         ;TODO: generic container
     [:div.text-content
      [:h2 [tr ::frontend/privacy]]
      [tr ::text]]]))
