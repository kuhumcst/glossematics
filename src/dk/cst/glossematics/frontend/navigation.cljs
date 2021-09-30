(ns dk.cst.glossematics.frontend.navigation
  "The central namespace the frontend app."
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe :refer [href]]
            [time-literals.data-readers]                    ; tagged literals
            [time-literals.read-write :as tl]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.page.main :as main]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.page.timeline :as timeline]))

(defonce location
  (r/cursor db [:location]))

(def routes
  [["/"
    {:name ::main
     :page main/page}]

   ["/reader"
    {:name ::reader
     :page reader/page
     :prep reader/fetch-data!}]

   ["/timeline"
    {:name ::timeline
     :page timeline/page}]])

(defn debug-view
  []
  [:details {:style {:opacity "0.33"}} [:summary "DEBUG"]
   [:details [:summary "auth"]
    (sp.auth/if-permit [state/assertions {:attrs {"firstName" #{"Simon"}}}]
      "firstName = Simon"
      "firstName != Simon")]
   [:details [:summary "assertions"]
    [:pre (with-out-str (cljs.pprint/pprint state/assertions))]]
   [:details [:summary "@db"]
    [:pre (with-out-str (cljs.pprint/pprint @db))]]])

(defn app
  "A container component that wraps the various pages of the app."
  []
  [:<>
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

   [:ul
    [:li [:a {:href (href ::main)} (href ::main)]]
    [:li [:a {:href (href ::reader)} (href ::reader)]]
    [:li [:a {:href (href ::timeline)} (href ::timeline)]]]

   (if-let [page (get-in @location [:data :page])]
     [page]
     [:p "unknown page"])

   [debug-view]])

(defn ^:dev/after-load render
  []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init!
  "The entry point of the frontend app."
  []
  ;; Make sure that edn/read-string can process timestamp literals
  (tl/print-time-literals-cljs!)

  (let [style      (js/document.createElement "style")
        root-style (str/replace-first css/shadow-style ":host" ":root")]
    (set! (.-innerHTML style) root-style)
    (js/document.head.appendChild style))

  (rfe/start!
    (rf/router routes)
    (fn [m]
      (reset! location m)
      (when-let [prep (get-in m [:data :prep])]
        (prep)))
    {:use-fragment false})

  (render))
