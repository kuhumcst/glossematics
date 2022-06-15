(ns dk.cst.glossematics.frontend.page.bibliography
  "Bibliography modeled after the search index page."
  (:require [clojure.string :as str]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.frontend.shared :as shared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.api :as api]))

(defn skip-links
  [groups]
  (into [:p.index-page__skip-links]
        (->> groups
             (map (fn [[year]]
                    (let [fragment (str "#" (shared/legal-id year))]
                      [:a {:href     fragment
                           :on-click #(shared/find-fragment fragment)}
                       year])))
             (interpose ", ")
             (vec))))

;; TODO: make IDs into clickable search links
(defn handle-name
  "Ensures that `x` -- which can be either an ID, a name, or a set of either IDs
  or names -- parses correctly."
  [id->name x]
  (when x
    (let [id->name' #(get id->name % %)]
      (if (set? x)
        (->> (map id->name' x)
             (sort)
             (interpose "; ")
             (into [:<>]))
        (id->name' x)))))

;; https://examples.yourdictionary.com/bibliography-examples.html
(defn bibliography-content
  [id->name entries]
  [:ul
   (for [{:keys [document/author
                 document/title
                 document/publisher
                 document/publication
                 document/settlement
                 document/bib-entry
                 document/pp
                 file/name]
          :as   entry} entries
         :let [title'  (when title
                         (str/replace (shared/single title) #"\.$" ""))
               title'' (if name
                         [:a {:href (shared/reader-href name)} title']
                         title')]]
     [:li {:key bib-entry}
      (when-let [author-name (handle-name id->name author)]
        [:<> (shared/surname-first author-name) ". "])
      (if publication
        [:<>
         "\"" title'' "\". "
         [:em (handle-name id->name publication)]]
        [:em title''])
      (when pp
        [:<> ", pp. " pp])
      (when-let [publisher-name (handle-name id->name publisher)]
        [:<> ", " publisher-name])
      (when-let [settlement-name (handle-name id->name settlement)]
        [:<> ", " settlement-name])
      ", " (if (re-find #"[a-z]$" bib-entry)
             [:strong
              (subs bib-entry 0 (dec (count bib-entry)))
              [:sup (last bib-entry)]]
             [:strong bib-entry])
      "."])])

(defn fetch-results!
  []
  (let [query-params {:entity/type    :entity.type/bibliographic-entry
                      :file/extension :ANY}]
    (.then (api/fetch "/search" {:query-params query-params})
           #(swap! state/bibliography assoc :results %))))

(defn- bib-selection
  [id->name current-author other-author]
  (let [img-src   (-> :entity.type/person sd/entity-types :img-src)
        full-name (-> other-author
                      (sd/author->id)
                      (id->name)
                      (shared/surname-first)
                      (str/split #",")
                      (first))]
    (if (= current-author other-author)
      [:span [:img.entity-icon {:src img-src}]
       full-name]
      [:a {:href (shared/bib-href other-author)}
       [:img.entity-icon {:src img-src}]
       full-name])))

(defn page
  []
  (let [{:keys [id->name]} @state/search
        {:keys [results]} @state/bibliography
        author (-> @state/location :path-params :author)
        id     (sd/author->id author)]
    [:div.index-page
     [:h1
      [:img {:src "/images/book-fill.svg"}]
      " Bibliography"]
     (when (and id->name results)
       (let [groups (->> (filter #(= (:document/author %) id) results)
                         (group-by (comp shared/single :document/year))
                         (sort-by first)
                         (mapv (fn [[k v]]
                                 [(str k) (sort-by :document/bib-entry v)])))]
         [:<>
          [:div.text-content
           [:p.index-links
            [bib-selection id->name author "lh"] " / "
            [bib-selection id->name author "efj"] " / "
            [bib-selection id->name author "pd"]]
           [:hr]
           [skip-links groups]]
          ^{:key author}
          [shared/kvs-list groups (partial bibliography-content id->name)]]))]))
