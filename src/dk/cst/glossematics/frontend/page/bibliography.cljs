(ns dk.cst.glossematics.frontend.page.bibliography
  "Bibliography modeled after the search index page."
  (:require [dk.cst.glossematics.frontend.shared :as shared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.api :as api]
            [clojure.string :as str]))

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

(defn bibliography-content
  [id->name entries]
  [:ul
   (for [{:keys [document/author
                 document/title
                 document/publication
                 document/settlement
                 file/name]} entries]
     [:li {:key name}
      (when-let [author-name (get id->name author author)]
        (str (shared/surname-listing author-name) ". "))
      [:a {:href (shared/reader-href name)}
       (str/replace title #"\.$" "")]
      (when-let [settlement-name (get id->name settlement settlement)]
        (str ". " settlement-name))
      (when-let [publication-name (get id->name publication publication)]
        (str ". " publication-name))
      "."])])

(defn fetch-results!
  []
  (let [query-params {:entity/type :entity.type/bibliographic-entry}]
    (.then (api/fetch "/search" {:query-params query-params})
           #(swap! state/bibliography assoc :results %))))

(defn sort-keyfn
  [id->name entity]
  [(-> entity :document/author id->name shared/surname-listing)
   (-> entity :document/title)])

(defn page
  []
  (let [{:keys [id->name]} @state/search
        {:keys [results]} @state/bibliography
        sort-keyfn' (partial sort-keyfn id->name)]
    [:div.index-page
     [:h1 "Bibliography"]
     (when (and id->name results)
       (let [groups (->> (group-by :document/year results)
                         (sort-by first)
                         (mapv (fn [[k v]]
                                 [(str k) (sort-by sort-keyfn' v)])))]
         [:<>
          [:div.text-content
           [skip-links groups]]
          [shared/kvs-list groups (partial bibliography-content id->name)]]))]))

