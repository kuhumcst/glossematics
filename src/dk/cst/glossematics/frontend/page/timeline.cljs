(ns dk.cst.glossematics.frontend.page.timeline
  "Page containing a chronological timeline of Louis Hjelmslev's life."
  (:require [kitchen-async.promise :as p]
            [dk.cst.glossematics.frontend.timeline-widget :as tw]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.glossematics.frontend.state :as state]))

(def default-bands
  {:primary  {:width        "85%"
              :intervalUnit :year}
   :overview {:width        "15%"
              :intervalUnit :decade}
   :common   {:intervalPixels 400
              :timeZone       1
              :date           "1950-03-01"}})

(def event-styling
  {:life       {:icon  "/images/heart-2-fill.svg"
                :color "#dd82dd"}
   :teaching   {:icon  "/images/book-fill.svg"
                :color "#779eff"}
   :lecture    {:icon  "/images/book-open-line.svg"
                :color "#169516"}
   :travel     {:icon  "/images/earth-fill.svg"
                :color "#ff663c"}
   :networking {:icon  "/images/group-fill.svg"
                :color "#7a4907"}
   nil         {:color "#333"}})

(defn- add-styling
  "Set icon and color for a timeline `event` based on its :type."
  [event]
  (let [{:keys [color icon]} (event-styling (:type event))]
    (assoc (dissoc event :type)
      :color color
      :icon icon)))

;; Currently, relies on browser caching to avoid re-fires.
(defn fetch-timeline-data!
  []
  (p/let [events (api/fetch "/timeline")
          zones  (tw/find-hotzones :month events)]
    (reset! state/timeline {:events (map add-styling events)
                            :bands  (-> default-bands
                                        (assoc-in [:primary :zones] zones)
                                        (assoc-in [:overview :zones] zones))})))

(defn page
  []
  (when (not-empty @state/timeline)
    [tw/timeline {}
     state/timeline]))
