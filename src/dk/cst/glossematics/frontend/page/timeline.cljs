(ns dk.cst.glossematics.frontend.page.timeline
  (:require [clojure.string :as str]
            [shadow.resource :as sr]
            [reagent.core :as r]
            [dk.cst.glossematics.frontend.page.timeline.data :as tld]
            [dk.cst.glossematics.frontend.timeline :as timeline :refer [timeline]]
            [kitchen-async.promise :as p]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.glossematics.frontend.state :as state]))

(def hjemslev-events
  (tld/load-timeline))

(def hjemslev-bands
  {:primary  {:width        "80%"
              :intervalUnit :year}
   :overview {:width        "20%"
              :intervalUnit :decade}
   :common   {:intervalPixels 400
              :timeZone       1
              :date           "1952-06-01"}})

(defonce jfk-events
  (as-> (sr/inline "public/timeline/examples/jfk/jfk.xml") $
        (.parseFromString (js/DOMParser.) $ "text/xml")
        (.getElementsByTagName $ "event")
        (map (fn [node]
               (into {:description (str/trim (.-innerHTML node))}
                     (for [obj (.-attributes node)]
                       [(keyword (.-name obj)) (.-value obj)])))
             $)))

(defonce jfk-bands
  {:primary  {:width        "80%"
              :zones        [{:start   "Fri Nov 22 1963 00:00:00 GMT-0600"
                              :end     "Mon Nov 25 1963 00:00:00 GMT-0600"
                              :magnify 10
                              :unit    js/SimileAjax.DateTime.DAY}
                             {:start   "Fri Nov 22 1963 09:00:00 GMT-0600"
                              :end     "Sun Nov 24 1963 00:00:00 GMT-0600"
                              :magnify 5
                              :unit    js/SimileAjax.DateTime.HOUR}
                             {:start    "Fri Nov 22 1963 11:00:00 GMT-0600"
                              :end      "Sat Nov 23 1963 00:00:00 GMT-0600"
                              :magnify  5
                              :unit     js/SimileAjax.DateTime.MINUTE,
                              :multiple 10}
                             {:start    "Fri Nov 22 1963 12:00:00 GMT-0600"
                              :end      "Fri Nov 22 1963 14:00:00 GMT-0600"
                              :magnify  3
                              :unit     js/SimileAjax.DateTime.MINUTE
                              :multiple 5}]
              :intervalUnit :week}
   :overview {:width        "20%"
              :zones        [{:start   "Fri Nov 22 1963 00:00:00 GMT-0600"
                              :end     "Mon Nov 25 1963 00:00:00 GMT-0600"
                              :magnify 10
                              :unit    js/SimileAjax.DateTime.WEEK}
                             {:start   "Fri Nov 22 1963 09:00:00 GMT-0600"
                              :end     "Sun Nov 24 1963 00:00:00 GMT-0600"
                              :magnify 5
                              :unit    js/SimileAjax.DateTime.DAY}
                             {:start    "Fri Nov 22 1963 11:00:00 GMT-0600"
                              :end      "Sat Nov 23 1963 00:00:00 GMT-0600"
                              :magnify  5
                              :unit     js/SimileAjax.DateTime.MINUTE
                              :multiple 60}
                             {:start    "Fri Nov 22 1963 12:00:00 GMT-0600"
                              :end      "Fri Nov 22 1963 14:00:00 GMT-0600"
                              :magnify  3
                              :unit     js/SimileAjax.DateTime.MINUTE
                              :multiple 15}]


              :intervalUnit :month}
   :common   {:intervalPixels 200
              :timeZone       -6
              :date           "Fri Nov 22 1963 13:00:00 GMT-0600"}})

(defn update-interval
  [tl-state band e]
  (let [v (keyword (.-value (.-target e)))]
    (swap! tl-state assoc-in [:bands band :intervalUnit] v)))

(defn interval-select
  [tl-state band]
  [:select {:on-change     #(update-interval tl-state band %)
            :default-value (-> @tl-state
                               (get-in [:bands band :intervalUnit])
                               (name))}
   (for [[k _] timeline/interval-kvs
         :let [str-k (name k)]]
     [:option {:value str-k
               :key   k}
      (str/capitalize str-k)])])

(defonce hjelmslev-tl-state
  (r/atom {:events hjemslev-events
           :bands  hjemslev-bands}))

(defonce jfk-tl-state
  (r/atom {:events jfk-events
           :bands  jfk-bands}))

;; Currently, relies on browser caching to avoid re-fires.
(defn fetch-timeline-data!
  []
  (p/let [events (api/fetch "/timeline")]
    (reset! state/timeline {:events events
                            :bands  hjemslev-bands})))

(defn page
  []
  (when (not-empty @state/timeline)
    [:<>
     [:form {:style {:padding       20
                     :margin-bottom -40}}
      [:p [:label [:strong "Primary: "] [interval-select state/timeline :primary]]]
      [:p [:label [:strong "Overview: "] [interval-select state/timeline :overview]]]]
     [:div {:style {:padding "20px"}}
      [timeline {:style {:height 400}}
       state/timeline]]

     #_[:div {:style {:padding "20px"}}
        [timeline {:style {:height 350}}
         jfk-tl-state]]]))