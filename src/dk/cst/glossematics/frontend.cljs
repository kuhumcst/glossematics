(ns dk.cst.glossematics.frontend
  "The central namespace of the frontend client; defines frontend routing."
  (:require [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [reagent.dom :as rdom]
            [reagent.cookies :as cookie]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe :refer [href]]
            [time-literals.read-write :as tl]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.glossematics.shared :as shared]
            [dk.cst.glossematics.frontend.i18n :as i18n]
            [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.glossematics.frontend.page.main :as main]
            [dk.cst.glossematics.frontend.page.privacy :as privacy]
            [dk.cst.glossematics.frontend.page.search :as search]
            [dk.cst.glossematics.frontend.page.bibliography :as bibliography]
            [dk.cst.glossematics.frontend.page.bookmarks :as bookmarks]
            [dk.cst.glossematics.frontend.page.index :as index]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.page.encyclopedia :as encyclopedia]
            [dk.cst.glossematics.frontend.page.timeline :as timeline]))

(def routes
  [["/app"
    {:name  ::main/page
     :title "Glossematics"
     :page  main/page}]
   ["/privacy"
    {:name  ::privacy/page
     :title ::privacy
     :page  privacy/page}]
   ["/app/encyclopedia/:ref"
    {:name  ::encyclopedia/page
     :title ::encyclopedia
     :page  encyclopedia/page
     :prep  #(prn 'encyclopedia @state/location)}]
   ["/app/search"
    {:name  ::search/page
     :title search/page-title
     :page  search/page
     :prep  #(search/fetch-results!
               % (fn []
                   (do
                     (search/?query-reset!)
                     (fshared/set-title! (search/page-title)))))}]
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
   ["/app/bookmarks"
    {:name  ::bookmarks/page
     :title ::bookmarks
     :page  bookmarks/page}]
   ["/app/index/:kind"
    {:name  ::index/page
     :title (fn [m]
              (->> (get-in m [:path-params :kind])
                   (keyword "entity.type")
                   ((i18n/->tr))))
     :page  index/page}]
   ["/app/reader"
    {:name  ::reader/preview
     :title ::local-reader
     :page  reader/page}]
   ["/app/reader/:document"
    {:name  ::reader/page
     :title (fn [m]
              (get-in m [:path-params :document]))
     :page  reader/page}]
   ["/app/timeline"
    {:name  ::timeline/page
     :title ::timeline
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

(def lang
  {"da" "en"
   "en" "da"})

(def year-in-seconds
  (* 60 60 12 365))

(def cookie-opts
  {:max-age year-in-seconds
   :path    "/"
   :raw?    true                                            ; use raw strings
   :secure? true})

(defn mark-first
  "Mark the first character of a string `s` with the class first.

  This annoying workaround is needed because of 15+ year old bug in Firefox:
  https://bugzilla.mozilla.org/show_bug.cgi?id=385615"
  [s]
  (let [c (subs s 0 1)
        s (subs s 1)]
    [:<> [:span.first c] s]))

(defn shell
  "A container component that wraps the various pages of the app."
  []
  (let [{:keys [page name]} (:data @state/location)
        authenticated? @state/authenticated?
        fetching?      (not-empty @state/fetches)
        timeline?      (= name ::timeline/page)
        reader?        (= name ::reader/page)
        compact?       (or timeline? @state/compact #_reader?)
        tr             (i18n/->tr)
        bookmarks      @state/bookmarks
        user           (shared/assertions->user-id state/assertions)
        path           (fshared/current-path)
        {:keys [db/ident] :as bookmark} (get bookmarks path)]
    ;; A containing div is currently needed for the timeline to work properly.
    [:div#shell {:class [(when fetching?
                           "fetching")
                         (when compact?
                           "compact")
                         (when timeline?
                           "timeline")]}
     [:header
      [:h1
       [:a {:href  (href ::main/page)
            :title (tr ::main-caption)}
        "Glossematics"]
       [:button.language {:title    (tr ::language-caption)
                          :on-click (fn [_]
                                      (let [v (swap! state/language lang "da")]
                                        (cookie/set! :language v cookie-opts)
                                        (-> @state/location
                                            (fshared/location->page-title)
                                            (fshared/set-title!))))}
        (tr ::language-flag)]]
      [:div.toggle-compact (when-not timeline?
                             {:style    {:cursor (if @state/compact
                                                   "s-resize"
                                                   "n-resize")}
                              :on-click (fn [e]
                                          (swap! state/compact not))})]
      [:nav
       [:a {:href      (href ::search/page)
            :title     (tr ::search-caption)
            :tab-index (if authenticated? "0" "-1")         ; for accessibility
            :disabled  (not authenticated?)}
        (mark-first (tr ::search))]
       [:a {:href  (href ::timeline/page)
            :title (tr ::timeline-caption)}
        (mark-first (tr ::timeline))]
       [:a {:href  (href ::bibliography/page {:author "lh"})
            :title (tr ::bibliography-caption)}
        (mark-first (tr ::bibliography))]
       [:input.bookmark {:type      "checkbox"
                         :disabled  (not authenticated?)
                         :checked   (boolean bookmark)
                         :title     (if bookmark
                                      (tr ::rem-bookmark-caption)
                                      (tr ::add-bookmark-caption))
                         :on-change (fn [e]
                                      (.preventDefault e)
                                      (if bookmark
                                        (api/del-bookmark! user path ident)
                                        (api/add-bookmark! user path name)))}]]]
     [:main
      [:img.loading-indicator {:alt ""                      ; signal decorative
                               :src "/images/loading.svg"}]
      (if page
        [page]
        [tr ::unknown-page])]
     (when-not timeline?
       [:footer
        [:section.links
         [:a {:href "https://www.was.digst.dk/glossematics-dk"}
          (mark-first (tr ::a11y))]
         [:span " / "]
         [:a {:href "/privacy"}
          (mark-first (tr ::privacy))]
         [:span " / "]
         [:a {:href "https://github.com/kuhumcst/glossematics"}
          (mark-first "Github")]]
        [:section.links
         [tr ::copyright]]])]))

(defn fetch-bookmarks!
  "Fetches and post-processes metadata used to populate the search form."
  [user]
  (.then (api/fetch (str "/user/" user "/bookmarks"))
         (fn [bookmarks]
           (reset! state/bookmarks bookmarks))))

(defn universal-prep!
  "Prepare widely needed state."
  []
  (let [{:keys [name->id]} @state/search
        bookmarks @state/bookmarks]
    (when (and (not bookmarks) state/assertions)
      (when-let [user (shared/assertions->user-id state/assertions)]
        (fetch-bookmarks! user)))
    (when-not name->id
      (search/fetch-metadata!))))

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
    (fshared/set-title! (fshared/location->page-title m))

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

  ;; Needed for debugging login process
  (println "SAML assertions:")
  (prn state/assertions)

  (render))
