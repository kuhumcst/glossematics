(ns user
  (:require [clojure.string :as str]
            [clojure.pprint :refer [pprint]]
            [clojure.edn :as edn]
            [shadow.resource :as sr]
            [load :as load]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [recap.component.widget.tabs :as tabs]
            [time-literals.data-readers]                    ; tagged literals
            [time-literals.read-write :as tl]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.glossematics.facsimile :as facsimile]
            [dk.cst.glossematics.timeline :as timeline :refer [timeline]]))

;; Make sure that edn/read-string can process timestamp literals
(time-literals.read-write/print-time-literals-cljs!)

(def hjemslev-events
  (load/timeline))

;; Loading assertions by passing an EDN string in index.html
(def assertions
  (if (exists? js/SAMLAssertions)
    (edn/read-string js/SAMLAssertions)
    {}))

(def hjemslev-bands
  {:primary  {:width        "80%"
              :intervalUnit :month}
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

(defn app
  []
  [:<>
   [:p (sp.auth/if-permit [assertions {:attrs {"firstName" #{"Simon"}}}]
         "Simon is the way"
         "Simon is NOT the way")]
   [:h1 {:style {:color          "black"
                 :letter-spacing "4px"
                 :font-family    "PoiretOne"
                 :font-size      "64px"
                 :text-align     "left"
                 :text-transform "uppercase"
                 :border-bottom  "16px solid darkred"}}
    "Glossematics"
    [:span {:style {:color     "#DDBBBB"
                    :font-size "40px"}}
     ".org"]]
   [:form {:style {:padding       20
                   :margin-bottom -40}}
    [:p [:label [:strong "Primary: "] [interval-select hjelmslev-tl-state :primary]]]
    [:p [:label [:strong "Overview: "] [interval-select hjelmslev-tl-state :overview]]]]
   [:div {:style {:padding "20px"}}
    [timeline {:style {:height 400}}
     hjelmslev-tl-state]]

   [:div {:style {:padding "20px"}}
    [timeline {:style {:height 350}}
     jfk-tl-state]]]
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
  (println "Started development environment for kuhumcst/glossematics.")
  (render))
