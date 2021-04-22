(ns user
  (:require [clojure.string :as str]
            [clojure.pprint :refer [pprint]]
            [shadow.resource :as sr]
            [load :as load]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [recap.component.widget.tabs :as tabs]
            [tei-facsimile.core :as facsimile]
            [dk.cst.hjelmslev.timeline :as timeline :refer [timeline]]))

(def hjemslev-events
  (load/timeline))

(defonce hjemslev-bands
  (r/atom {:primary  {:width        "80%"
                      :intervalUnit :month}
           :overview {:width        "20%"
                      :intervalUnit :decade}
           :common   {:intervalPixels 400
                      :timeZone       1
                      :date           "1952-06-01"}}))

;; Only left here in case I need to call (.loadXML ...) again.
(defonce jfk-xml
  (let [source (sr/inline "public/examples/jfk/jfk.xml")]
    (.parseFromString (js/DOMParser.) source "text/xml")))

(defonce jfk-events
  (as-> (sr/inline "public/examples/jfk/jfk.xml") $
        (.parseFromString (js/DOMParser.) $ "text/xml")
        (.getElementsByTagName $ "event")
        (map (fn [node]
               (into {:description (str/trim (.-innerHTML node))}
                     (for [obj (.-attributes node)]
                       [(keyword (.-name obj)) (.-value obj)])))
             $)))

(defonce jfk-bands
  (r/atom
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
                :date           "Fri Nov 22 1963 13:00:00 GMT-0600"}}))

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
    [["Tidslinje" [timeline {:style {:height 350}}
                   {:events jfk-events
                    :bands  jfk-bands}]]
     ["Indhold" ^{:key tei} [facsimile/tei-xml tei]]
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

(defn update-interval
  [bands-atom band e]
  (let [v (keyword (.-value (.-target e)))]
    (swap! bands-atom assoc-in [band :intervalUnit] v)))

(defn interval-select
  [bands-atom band]
  [:select {:on-change     #(update-interval bands-atom band %)
            :default-value (-> @bands-atom
                               (get-in [band :intervalUnit])
                               (name))}
   (for [[k _] timeline/interval-kvs
         :let [str-k (name k)]]
     [:option {:value str-k
               :key   k}
      (str/capitalize str-k)])])

(defn app
  []
  [:<>
   [:form {:style {:padding       20
                   :margin-bottom -40}}
    [:p [:label [:strong "Primary: "] [interval-select hjemslev-bands :primary]]]
    [:p [:label [:strong "Overview: "] [interval-select hjemslev-bands :overview]]]]
   [:div {:style {:padding "20px"}}
    [timeline {:style {:height 400}}
     {:events hjemslev-events
      :bands  @hjemslev-bands}]]

   [:div {:style {:padding "20px"}}
    [timeline {:style {:height 350}}
     {:events jfk-events
      :bands  @jfk-bands}]]]
  #_[:<>
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
