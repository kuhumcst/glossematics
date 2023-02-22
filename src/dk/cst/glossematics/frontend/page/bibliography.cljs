(ns dk.cst.glossematics.frontend.page.bibliography
  "Bibliography modeled after the search index page."
  (:require [clojure.string :as str]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.frontend :as-alias frontend]
            [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.glossematics.frontend.i18n :as i18n]))

(defn skip-links
  [groups]
  (into [:p.index-page__skip-links]
        (->> groups
             (map (fn [[year]]
                    (let [fragment (str "#" (fshared/legal-id year))]
                      [:a {:href     fragment
                           :on-click #(fshared/find-fragment fragment)}
                       year])))
             (interpose ", ")
             (vec))))

(defn bibliography-content
  [id->name entries]
  [:ul
   (for [{:keys [document/bib-entry] :as entry} entries]
     [:li {:key bib-entry}
      [fshared/bib-line id->name entry]])])

(defn fetch-results!
  []
  (let [query-params {:entity/type    :entity.type/bibliographic-entry
                      :file/extension :ANY}]
    (.then (api/fetch "/search" {:query-params query-params})
           #(swap! state/bibliography assoc :results %))))

(defn- bib-selection
  [id->name current-author other-author]
  (let [img-src   (-> :entity.type/person sd/real-entity-types :img-src)
        full-name (-> other-author
                      (sd/author->id)
                      (id->name)
                      (fshared/surname-first)
                      (str/split #",")
                      (first))]
    (if (= current-author other-author)
      [:span [:img.entity-icon {:src img-src}]
       full-name]
      [:a {:href (fshared/bib-href other-author)}
       [:img.entity-icon {:src img-src}]
       full-name])))

(defn page
  []
  (let [{:keys [id->name]} @state/search
        {:keys [results]} @state/bibliography
        tr     (i18n/->tr)
        author (-> @state/location :path-params :author)
        id     (sd/author->id author)]
    [:article.index-page
     [:h1
      [:img {:src "/images/book-fill.svg"}] " " (tr ::frontend/bibliography)]
     (when (and id->name results)
       (let [groups (->> (filter #(= (:document/author %) id) results)
                         (group-by (comp fshared/single :document/year))
                         (sort-by first)
                         (mapv (fn [[k v]]
                                 [(str k) (sort-by :document/bib-entry v)])))]
         [:<>
          [:div.text-content.menu
           [:p.index-links
            [bib-selection id->name author "lh"] " / "
            [bib-selection id->name author "efj"] " / "
            [bib-selection id->name author "pd"]]
           [:hr]
           [skip-links groups]]
          ^{:key author}
          [fshared/kvs-list groups (partial bibliography-content id->name)]]))]))
