(ns dk.cst.glossematics.frontend.page.index
  "Page containing a range of indices of important entities."
  (:require [clojure.string :as str]
            [dk.cst.stucco.pattern :as stp]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.frontend.shared :as shared]
            [dk.cst.glossematics.frontend.state :as state]))

(defn str-sort-val
  "Remove prepended parentheses from `s`."
  [s]
  (-> s
      (str/replace #"^\(.+\)\s*" "")
      (str/replace #"^\-\s*" "")))

(defn str->index-group
  "The canonical index group for a given `s`; used for group-by."
  [s]
  (when s
    (first (str/upper-case (str-sort-val s)))))

(def backgrounds
  (cycle stp/background-colours))

(defn- add-backgrounds
  [kvs]
  (stp/heterostyled kvs identity backgrounds))

(defn- index-groups
  [search-metadata entity-type]
  (->> (get search-metadata entity-type)
       (group-by (comp str->index-group first))
       (remove (comp nil? first))
       (sort-by first)
       (into [])
       (add-backgrounds)))

(defn index-links
  [& [current-type]]
  (->> (sort-by (comp :entity-label second) sd/entity-types)
       (map (fn [[entity-type {:keys [entity-label img-src]}]]
              (if (= current-type entity-type)
                [:span [:img.entity-icon {:src img-src}]
                 entity-label]
                [:a {:href     (shared/index-href entity-type)
                     :disabled (= current-type entity-type)}
                 [:img.entity-icon {:src img-src}]
                 entity-label])))
       (interpose " / ")
       (into [:p.index-links])))

(defn skip-links
  [groups]
  (into [:p.index-page__skip-links]
        (->> groups
             (map (fn [[letter]]
                    (let [fragment (str "#" (shared/legal-id letter))]
                      [:a {:href     fragment
                           :on-click #(shared/find-fragment fragment)}
                       letter])))
             (interpose ", ")
             (vec))))

(defn index-list
  [groups]
  [:dl.index-list {:ref #(shared/find-fragment)}
   (for [[letter kvs :as kv] groups]
     [:<> {:key letter}
      [:dt {:id    (shared/legal-id letter)
            :style (:style (meta kv))}
       letter]
      [:dd
       [:ul
        (for [[k v] (sort-by (comp str-sort-val first) kvs)]
          [:li {:key k}
           [:a {:href (shared/search-href v)}
            (str k)]])]]])])

(defn page
  []
  (let [{:keys [metadata]} @state/search
        entity-type (->> (get-in @state/location [:path-params :kind])
                         (keyword "entity.type"))
        {:keys [entity-label
                img-src]} (get sd/entity-types entity-type)]
    [:div.index-page
     [:h1 [:img {:src img-src}] " " entity-label]
     (when metadata
       (let [groups (index-groups metadata entity-type)]
         [:<>
          [:div.text-content
           [index-links entity-type]
           [:hr]
           [skip-links groups]]
          ^{:key groups} [index-list groups]]))]))
