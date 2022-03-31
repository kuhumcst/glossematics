(ns dk.cst.glossematics.frontend
  "The central namespace of the frontend client; defines frontend routing."
  (:require [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [reagent.dom :as rdom]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe :refer [href]]
            [time-literals.data-readers]                    ; tagged literals
            [time-literals.read-write :as tl]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.page.main :as main]
            [dk.cst.glossematics.frontend.page.search :as search]
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
   ["/app/search"
    {:name ::search/page
     :page search/page
     :prep #(search/fetch-results! %)}]
   ["/app/reader/:document"
    {:name ::reader/page
     :page reader/page}]
   ["/app/timeline"
    {:name ::timeline/page
     :page timeline/page
     :prep timeline/fetch-timeline-data!}]])

;; TODO: remove...?
(defn debug-view
  []
  [:details {:style {:opacity "0.33"}} [:summary "DEBUG"]
   [:details [:summary "auth"]
    (sp.auth/if-permit [state/assertions {:attrs {"firstName" #{"Simon"}}}]
      "firstName = Simon"
      "firstName != Simon")]
   [:details [:summary "assertions"]
    [:pre (with-out-str (pprint state/assertions))]]
   [:details [:summary "@db"]
    [:pre (with-out-str (pprint @db))]]])

(defn shell
  "A container component that wraps the various pages of the app."
  []
  [:div.shell
   [:nav
    [:a {:href (href ::main)}
     [:h1 "Glossematics" [:span ".org"]]]
    [:a {:href (href ::search/page)} "Search"]
    [:a {:href (href ::timeline/page)} "Timeline"]]
   [:div.shell__content
    (if-let [page (get-in @state/location [:data :page])]
      [page]
      [:p "unknown page"])]])

(defn universal-prep!
  "Prepare widely needed state."
  []
  (let [{:keys [name->id]} @state/search]
    (when-not name->id
      (search/fetch-metadata!))))

(defn set-up-navigation!
  []
  (rfe/start!
    (rf/router routes)
    (fn [{:keys [path query-params] :as m}]
      (let [old-location @state/location]
        ;; Don't re-fetch prep data on soft reloads, e.g. by shadow-cljs.
        (when (or (not= path (:path old-location))
                  (not= query-params (:query-params old-location)))
          (universal-prep!)
          (when-let [prep (get-in m [:data :prep])]
            (prep m)))

        (reset! state/location m)))
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
