(ns dk.cst.glossematics.frontend.page.reader
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [kitchen-async.promise :as p]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.stucco.plastic :as plastic]
            [dk.cst.glossematics.frontend.facsimile :as facsimile]))

(defonce files
  (r/atom nil))

(defn mk-tabs
  [tei]
  [["Indhold" ^{:key tei} [facsimile/tei-xml tei]]
   ["XML" [:pre {:style {:white-space "pre-wrap"}}
           [:code
            tei]]]])

(defonce state
  (r/atom {}))

;; TODO: temporary - only here because Stucco bugs out when using a map directly
(defonce tabs-state
  (r/cursor state [:tabs]))

(defn set-content!
  [filename]
  (p/let [url (get @files filename)
          tei (api/transit-get url)]
    (swap! state assoc :current-file filename)
    (swap! state assoc-in [:tabs :kvs] (mk-tabs tei))))

(defn fetch-data!
  []
  (p/let [tei-files (api/transit-get "/files/tei")]
    (->> (for [url tei-files]
           [(last (str/split url #"/")) url])
         (into {})
         (reset! files))
    (set-content! "acc-1992_0005_024_Holt_0020-final.xml")))

(defn page
  []
  (let [{:keys [current-file]} @state]
    [:<>
     [:p
      [:label "TEI-fil: "
       [:select {:key           current-file
                 :default-value current-file
                 :on-change     (fn [e] (set-content! (.. e -target -value)))}
        (for [[k _] (sort @files)]
          ^{:key k} [:option {:value k}
                     k])]]]
     [:div {:style {:max-width "100ch"
                    :min-width "40ch"
                    :margin    "0 auto"}}
      (when (not-empty @tabs-state)
        [plastic/tabs tabs-state {:id "tei-tabs"}])]]))
