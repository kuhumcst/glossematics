(ns user
  (:require [clojure.pprint :refer [pprint]]
            [shadow.resource :as sr]
            [load :as load]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [recap.component.widget.tabs :as tabs]
            [tei-facsimile.core :as facsimile]
            [clojure.string :as str]))

(def timeline-data
  (load/timeline))

(def jfk-xml
  (let [source (sr/inline "public/examples/jfk/jfk.xml")]
    (.parseFromString (js/DOMParser.) source "text/xml")))

(def initial-examples
  {"1151anno-anno-tei.xml"  (sr/inline "examples/tei/1151anno-anno-tei.xml")
   "1152anno-anno-tei.xml"  (sr/inline "examples/tei/1152anno-anno-tei.xml")
   "1153anno-anno-tei.xml"  (sr/inline "examples/tei/1153anno-anno-tei.xml")
   "1154anno-anno-tei.xml"  (sr/inline "examples/tei/1154anno-anno-tei.xml")
   "1155anno-anno-tei.xml"  (sr/inline "examples/tei/1155anno-anno-tei.xml")
   "1156anno-anno-tei.xml"  (sr/inline "examples/tei/1156anno-anno-tei.xml")
   "1157anno-anno-tei.xml"  (sr/inline "examples/tei/1157anno-anno-tei.xml")
   "1158anno-anno-tei.xml"  (sr/inline "examples/tei/1158anno-anno-tei.xml")
   "1159anno-anno-tei.xml"  (sr/inline "examples/tei/1159anno-anno-tei.xml")
   "1160anno-anno-tei.xml"  (sr/inline "examples/tei/1160anno-anno-tei.xml")
   "tei_example.xml"        (sr/inline "examples/tei/tei_example.xml")
   "test-1307-anno-tei.xml" (sr/inline "examples/tei/test-1307-anno-tei.xml")})

(def examples
  (r/atom initial-examples))

(defn mk-tabs
  [filename]
  (let [tei (get @examples filename)]
    [["Indhold" ^{:key tei} [facsimile/tei-xml tei]]
     ["XML" [:pre {:style {:white-space "pre-wrap"}}
             [:code
              tei]]]]))

(defonce state
  (r/atom {:current-file "test-1307-anno-tei.xml"
           :tabs         {:kvs (mk-tabs "test-1307-anno-tei.xml")
                          :i   0}}))

(defn set-content!
  [filename]
  (swap! state assoc :current-file filename)
  (swap! state assoc-in [:tabs :kvs] (mk-tabs filename)))

(defn paint-timeline!
  [elem state]
  (let [date            "Fri Nov 22 1963 13:00:00 GMT-0600"
        date-time       js/SimileAjax.DateTime
        event-source    (js/Timeline.DefaultEventSource.)
        layout          js/Timeline.HORIZONTAL
        interval-pixels 200
        time-zone       -6
        band-infos      #js [(js/Timeline.createHotZoneBandInfo
                               #js {:width          "80%"
                                    :intervalUnit   (.-WEEK date-time)
                                    :intervalPixels interval-pixels
                                    :zones          #js []
                                    :eventSource    event-source
                                    :date           date
                                    :timeZone       time-zone})
                             (doto (js/Timeline.createHotZoneBandInfo
                                     #js {:width          "20%"
                                          :intervalUnit   (.-MONTH date-time)
                                          :intervalPixels interval-pixels
                                          :zones          #js []
                                          :eventSource    event-source
                                          :date           date
                                          :timeZone       time-zone
                                          :overview       true})
                               (set! -syncWith 0)
                               (set! -highlight true))]]
    (when-not (:timeline @state)
      (let [timeline (js/Timeline.create elem band-infos layout)]
        (swap! state assoc :timeline timeline)))
    (.loadXML event-source jfk-xml "localhost")))

(defn timeline
  []
  (let [state (r/atom {:timeline nil})]
    (fn []
      [:div#tl {:style {:height 350}
                :ref   #(paint-timeline! % state)}])))

(defn app
  []
  [:<>
   [timeline]
   [:p {:style {:display         "flex"
                :justify-content "flex-end"}}
    (let [current-file (r/cursor state [:current-file])]
      [:label "TEI-fil: "
       [:select {:key           @current-file
                 :default-value @current-file
                 :on-change     (fn [e] (set-content! (.. e -target -value)))}
        (for [[k _] (sort @examples)]
          ^{:key k} [:option {:value k}
                     k])]
       " "
       [:input {:aria-label "Lokal TEI-fil"
                :type       "file"
                :on-change  (fn [e]
                              (when-let [file (.item e.target.files 0)]
                                (.then (.text file)
                                       (fn [s]
                                         (swap! examples assoc (.-name file) s)
                                         (set-content! (.-name file))))))}]])]
   [:div {:style {:max-width "100ch"
                  :min-width "40ch"
                  :margin    "0 auto"}}
    [tabs/tabs (r/cursor state [:tabs]) {:id "tei-tabs"}]]])
(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render
  []
  ;; TODO: dumb hack - do this another way
  (defonce add-recap-styles
    (let [style      (js/document.createElement "style")
          root-style (str/replace-first recap.css/shadow-style ":host" ":root")]
      (set! (.-innerHTML style) root-style)
      (js/document.head.appendChild style)))

  (rdom/render [app] root))

(defn start-dev
  []
  (println "Started development environment for kuhumcst/louis-hjelmslev.")
  (render))
