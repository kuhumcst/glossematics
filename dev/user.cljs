(ns user
  (:require [clojure.pprint :refer [pprint]]
            [shadow.resource :as sr]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [kuhumcst.recap.widgets.tabs :as tabs]
            [kuhumcst.tei-facsimile.core :as facsimile]))

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
     ["XML" [:pre [:code tei]]]
     ["Noget andet" [:<>
                     [:h1 "Noget andet indhold for " filename]
                     [:p "Her er ikke noget lige nu."]]]]))

(defonce state
  (r/atom {:current-file "tei_example.xml"
           :tabs         {:kvs (mk-tabs "tei_example.xml")
                          :i   0}}))

(defn set-content!
  [filename]
  (swap! state assoc :current-file filename)
  (swap! state assoc-in [:tabs :kvs] (mk-tabs filename)))

(defn app
  []
  [:<>
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

   ;; TODO: fix - it's error prone to copy-paste the CSS file from recap!
   [tabs/tabs (r/cursor state [:tabs]) {:tab-list-id "tei-tabs"}]])

(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render
  []
  (rdom/render [app] root))

(defn start-dev
  []
  (println "Started development environment for kuhumcst/tei-facsimile.")
  (render))
