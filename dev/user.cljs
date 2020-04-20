(ns user
  (:require [clojure.pprint :refer [pprint]]
            [shadow.resource :as resource]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [kuhumcst.recap.tabs :as tabs]
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
    [["Indhold" ^{:key tei} [facsimile/tei-xml tei]]
     ["XML" [:pre [:code tei]]]
     ["Noget andet" [:<>
                     [:h1 "Noget andet indhold"]
                     [:p "Her er ikke noget lige nu."]]]]))

(defonce tabs-state
  (r/atom {:tabs (mk-kvs "tei_example.xml")}))

(defn set-content!
  [filename]
  (swap! tabs-state assoc :tabs (mk-kvs filename)))

(defn app
  []
  [:<>
   [:p {:style {:display         "flex"
                :justify-content "flex-end"}}
    [:select {:style     {:font-size "1rem"
                          :padding   "0.4rem"}
              :on-change (fn [e] (set-content! (.. e -target -value)))}
     (for [[k _] (sort tei-examples)]
       ^{:key k} [:option k])]]
   ;; TODO: fix - it's error prone to copy-paste the CSS file from recap!
   [tabs/tabs tabs-state {:tab-list-id "tei-tabs"}]])

(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render
  []
  (rdom/render [app] root))

(defn start-dev
  []
  (println "Started development environment for kuhumcst/tei-facsimile.")
  (render))
