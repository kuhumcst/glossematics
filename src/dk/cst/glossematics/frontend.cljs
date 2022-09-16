(ns dk.cst.glossematics.frontend
  "The central namespace of the frontend client; defines frontend routing."
  (:require [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [reagent.dom :as rdom]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe :refer [href]]
            [time-literals.read-write :as tl]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.glossematics.frontend.i18n :as i18n]
            [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.page.main :as main]
            [dk.cst.glossematics.frontend.page.search :as search]
            [dk.cst.glossematics.frontend.page.bibliography :as bibliography]
            [dk.cst.glossematics.frontend.page.index :as index]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.page.encyclopedia :as encyclopedia]
            [dk.cst.glossematics.frontend.page.timeline :as timeline]))

(defn title-tr
  [k]
  (fn [_] ((i18n/->tr) k)))

(def routes
  [["/app"
    {:name ::main
     :page main/page}]
   ["/app/encyclopedia/:ref"
    {:name  ::encyclopedia/entry
     :title (title-tr ::encyclopedia)
     :page  encyclopedia/page
     :prep  #(prn 'encyclopedia @state/location)}]
   ["/app/search"
    {:name  ::search/page
     :title (title-tr ::search)
     :page  search/page
     :prep  #(search/fetch-results! % search/?query-reset!)}]
   ["/app/bibliography/:author"
    {:name  ::bibliography/page
     :title (fn [m]
              (str
                ((i18n/->tr) ::bibliography) ": "
                ({"lh"  "Hjelmslev"
                  "efj" "Fischer-Jørgensen"
                  "pd"  "Diderichsen"}
                 (get-in m [:path-params :author]))))
     :page  bibliography/page
     :prep  #(bibliography/fetch-results!)}]
   ["/app/index/:kind"
    {:name  ::index/page
     :title (fn [m]
              (->> (get-in m [:path-params :kind])
                   (keyword "entity.type")
                   ((i18n/->tr))))
     :page  index/page}]
   ["/app/reader"
    {:name  ::reader/preview
     :title (title-tr ::local-reader)
     :page  reader/page}]
   ["/app/reader/:document"
    {:name  ::reader/page
     :title (fn [m]
              (get-in m [:path-params :document]))
     :page  reader/page}]
   ["/app/timeline"
    {:name  ::timeline/page
     :title (title-tr ::timeline)
     :page  timeline/page
     :prep  timeline/fetch-timeline-data!}]])

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
  (let [{:keys [page name]} (:data @state/location)
        tr             (i18n/->tr)
        da?            (= "da" @state/language)
        authenticated? @state/authenticated?]
    [:div.shell {:class [(when (get #{::reader/page ::timeline/page} name)
                           "reader-mode")
                         (when (not-empty @state/fetches)
                           "fetching")]}
     [:img.loading-indicator {:src "/images/loading.svg"}]
     [:nav
      [:a {:href (href ::main)}
       [:h1 "Glossematics"]]
      [:a {:href      (href ::search/page)
           :title     (tr ::search-caption)
           :tab-index (if authenticated? "0" "-1")          ; for accessibility
           :disabled  (not authenticated?)}
       [tr ::search]]
      [:a {:href  (href ::timeline/page)
           :title (tr ::timeline-caption)}
       [tr ::timeline]]
      [:a {:href  (href ::bibliography/page {:author "lh"})
           :title (tr ::bibliography-caption)}
       [tr ::bibliography]]
      ;; TODO: set a cookie too
      [:button.language {:title    (if da?
                                     "Danish (click to switch to English)"
                                     "Engelsk (klik for skifte til dansk)")
                         :on-click (fn [e]
                                     (swap! state/language {"da" "en"
                                                            "en" "da"}))}
       (if da?
         "\uD83C\uDDE9\uD83C\uDDF0"
         "\uD83C\uDDEC\uD83C\uDDE7")]]
     [:div.shell__content {:class (when (= name ::timeline/page)
                                    "fill-mode")}
      (if page
        [page]
        [tr ::unknown-page])]]))

(defn universal-prep!
  "Prepare widely needed state."
  []
  (let [{:keys [name->id]} @state/search]
    (when-not name->id
      (search/fetch-metadata!))))

(defn page-title
  [m]
  (let [title (get-in m [:data :title])]
    (str (when state/development?
           "(dev) ")
         "Glossematics"
         (when title
           (str " | " (cond
                        (string? title)
                        title

                        (fn? title)
                        (title m)))))))

(defn on-navigate
  [{:keys [path query-params] :as m}]
  (let [old-location @state/location]
    ;; Avoid re-fetching/resetting on soft reloads, e.g. by shadow-cljs.
    (when (or (not= path (:path old-location))
              (not= query-params (:query-params old-location)))
      (set! state/*block-modal-dialogs* false)
      (universal-prep!)
      (when-let [prep (get-in m [:data :prep])]
        (prep m)))

    (reset! state/location m)
    (set! js/document.title (page-title m))

    ;; Scroll state is always reset when no intra-page navigation is expected.
    (when (empty? js/window.location.hash)
      (fshared/scroll-reset! "body"))))

(defn ^:dev/after-load render
  []
  (rfe/start! (rf/router routes) on-navigate {:use-fragment false})
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
