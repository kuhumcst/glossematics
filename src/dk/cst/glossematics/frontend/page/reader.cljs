(ns dk.cst.glossematics.frontend.page.reader
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [kitchen-async.promise :as p]
            [cuphic.core :as cup]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.stucco.util.state :as state-util]
            [dk.cst.stucco.plastic :as plastic]
            [dk.cst.stucco.foundation :as foundation]
            [dk.cst.stucco.surface :as surface]
            [dk.cst.glossematics.frontend.facsimile :as facsimile]))

;; TODO: acc-1992_0005_024_Holt_0230-final.xml - facs and pb order switched!
;; TODO: acc-1992_0005_024_Holt_0780-final.xml - (count facs) > (count pbs)

(defonce tabs-state
  (r/cursor state/reader [:tabs]))

(defonce facsimile-pages
  (state-util/derive state/reader-pages {:kvs [[]]}))

(defn mk-tabs
  [tei hiccup]
  (plastic/heterostyled
    [["Content" ^{:key tei} [facsimile/tei-xml hiccup]]
     ["TEI" [:pre {:style {:white-space "pre-wrap"
                           :padding     "1ch"}}
             [:code
              tei]]]]))

(defn facs-id->facs-page
  [id]
  (let [[filename ext] (str/split id #"\.")
        url (api/sanitize-url (str "/files/facsimile/" filename ".jpg"))]
    [filename
     [surface/illustration {:src url
                            :alt (str "Illustration of " filename)}]]))

(defn get-facs
  [hiccup]
  (->> (:graphic (cup/scrape hiccup {:graphic '[:graphic {:xml/id id}]}))
       (mapv (comp facs-id->facs-page #(get % 'id)))))

(defn set-content!
  [filename]
  (p/let [url    (get @state/tei-files filename)
          tei    (api/transit-get url)
          hiccup (facsimile/parse tei)]
    (swap! state/reader assoc :current-file filename)
    (swap! facsimile-pages assoc
           :i 0
           :kvs (plastic/heterostyled (get-facs hiccup) shuffle))
    (swap! state/reader assoc-in [:tabs :kvs] (mk-tabs tei hiccup))))

;;TODO: should not re-fetch files data
(defn fetch-data!
  []
  (p/let [files (api/transit-get "/files/tei")]
    (->> (for [url files]
           [(last (str/split url #"/")) url])
         (into {})
         (reset! state/tei-files))
    (when (not (:current-file @state/reader))
      (set-content! "acc-1992_0005_024_Holt_0230-final.xml"))))

(defn page
  []
  (let [{:keys [current-file]} @state/reader]
    [:<>
     [:p
      [:label "TEI-fil: "
       [:select {:key           current-file
                 :default-value current-file
                 :on-change     (fn [e] (set-content! (.. e -target -value)))}
        (for [[k _] (sort @state/tei-files)]
          ^{:key k} [:option {:value k}
                     k])]]]
     [:div {:style {:max-width "200ch"
                    :min-width "80ch"
                    :margin    "0 auto"}}
      (when (not-empty (:kvs @tabs-state))
        [foundation/combination
         {:vs      [[plastic/carousel facsimile-pages]
                    [plastic/tabs tabs-state {:id "tei-tabs"}]]
          :weights [1 1]}])]]))
