(ns user
  (:require [clojure.pprint :refer [pprint]]
            [shadow.resource :as resource]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [kuhumcst.tei-facsimile.tab :as tab]
            [kuhumcst.tei-facsimile.core :as facsimile]))

(def tei-examples
  {"1151anno-anno-tei.xml"  (resource/inline "examples/tei/1151anno-anno-tei.xml")
   "1152anno-anno-tei.xml"  (resource/inline "examples/tei/1152anno-anno-tei.xml")
   "1153anno-anno-tei.xml"  (resource/inline "examples/tei/1153anno-anno-tei.xml")
   "1154anno-anno-tei.xml"  (resource/inline "examples/tei/1154anno-anno-tei.xml")
   "1155anno-anno-tei.xml"  (resource/inline "examples/tei/1155anno-anno-tei.xml")
   "1156anno-anno-tei.xml"  (resource/inline "examples/tei/1156anno-anno-tei.xml")
   "1157anno-anno-tei.xml"  (resource/inline "examples/tei/1157anno-anno-tei.xml")
   "1158anno-anno-tei.xml"  (resource/inline "examples/tei/1158anno-anno-tei.xml")
   "1159anno-anno-tei.xml"  (resource/inline "examples/tei/1159anno-anno-tei.xml")
   "1160anno-anno-tei.xml"  (resource/inline "examples/tei/1160anno-anno-tei.xml")
   "tei_example.xml"        (resource/inline "examples/tei/tei_example.xml")
   "test-1307-anno-tei.xml" (resource/inline "examples/tei/test-1307-anno-tei.xml")})

(defn mk-kvs
  [filename]
  (let [tei (get tei-examples filename)]
    [["Tekst" ^{:key tei} [facsimile/tei-xml tei]]
     ["TEI" [:pre [:code tei]]]
     ["Test" [:pre [:code tei]]]]))

(defonce tab-state
  (r/atom {:i   0
           :kvs (mk-kvs "tei_example.xml")}))

(defn set-content!
  [filename]
  (swap! tab-state assoc :kvs (mk-kvs filename)))

(defn app
  []
  [:<>
   [:select {:on-change (fn [e] (set-content! (.. e -target -value)))}
    (for [[k _] (sort tei-examples)]
      ^{:key k} [:option k])]
   [:hr]
   [tab/window tab-state]])

(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render
  []
  (rdom/render [app] root))

(defn start-dev
  []
  (println "Started development environment for kuhumcst/tei-facsimile.")
  (render))
