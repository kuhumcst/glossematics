(ns dk.cst.glossematics.frontend.app
  "The central namespace of the frontend app."
  (:require [clojure.string :as str]
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
            [dk.cst.glossematics.frontend.page.encyclopedia :as encyclopedia]
            [dk.cst.glossematics.frontend.page.timeline :as timeline]))

(def routes
  [["/app"
    {:name ::main
     :page main/page}]
   ["/app/encyclopedia/:ref"
    {:name ::encyclopedia/entry
     :page encyclopedia/page
     :prep #(prn 'encyclopedia @state/location)}]
   ["/app/reader"
    {:name ::reader/empty
     :page reader/page
     :prep reader/fetch-document-list!}]
   ["/app/reader/:document"
    {:name ::reader/document
     :page reader/page
     :prep reader/fetch-document-list!}]
   ["/app/timeline"
    {:name ::timeline
     :page timeline/page
     :prep timeline/fetch-timeline-data!}]])

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

(defn shell
  "A container component that wraps the various pages of the app."
  []
  [:div.shell
   [:div.shell__logo
    [:a {:href (href ::main)}
     [:h1 "Glossematics" [:span ".org"]]]]
   [:div.shell__content
    [:div
     [:a {:href (href ::reader/empty)} "Reader"] ", "
     [:a {:href (href ::timeline)} "Timeline"]]

    (if-let [page (get-in @state/location [:data :page])]
      [page]
      [:p "unknown page"])

    [debug-view]]])

(defn set-up-navigation!
  []
  (rfe/start!
    (rf/router routes)
    (fn [{:keys [path] :as m}]
      (let [old-path (-> @state/location :path)]
        (reset! state/location m)

        ;; Don't re-fetch prep data on soft reloads, e.g. by shadow-cljs.
        (when (not= path old-path)
          (when-let [prep (get-in m [:data :prep])]
            (prep)))))
    {:use-fragment false}))

(defn ^:dev/after-load render
  []
  (set-up-navigation!)                                      ; keep up-to-date
  (rdom/render [shell] (js/document.getElementById "app")))

(defn init!
  "The entry point of the frontend app."
  []
  ;; Make sure that edn/read-string can process timestamp literals
  (tl/print-time-literals-cljs!)

  (let [style      (js/document.createElement "style")
        root-style (str/replace-first css/shadow-style ":host" ":root")]
    (set! (.-innerHTML style) root-style)
    (js/document.head.appendChild style))

  (render))
