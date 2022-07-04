(ns dk.cst.glossematics.db.search
  (:require [asami.core :as d]
            [io.pedestal.log :as log]))

(defn search-metadata
  "Return a mapping from entity type->name->id to be used by the frontend."
  [conn]
  (->> (d/q '[:find [?id ...]
              :where
              (or
                [?p :entity/type :entity.type/repository]
                [?p :entity/type :entity.type/person]
                [?p :entity/type :entity.type/linguistic-organisation]
                [?p :entity/type :entity.type/organisation]
                [?p :entity/type :entity.type/publication]
                [?p :entity/type :entity.type/language]
                [?p :entity/type :entity.type/place]
                [?p :entity/type :entity.type/term]
                [?p :entity/type :entity.type/english-term])
              [?p :db/ident ?id]

              ;; Only include refs currently found in the TEI files.
              [?f _ ?id]
              [?f :entity/type :entity.type/file]
              [?f :file/extension "xml"]]
            conn)
       (map (fn [id]
              (let [{:keys [entity/full-name entity/type]} (d/entity conn id)]
                (if (coll? full-name)
                  {type (into {} (for [variant full-name]
                                   [variant id]))}
                  {type {full-name id}}))))
       (apply merge-with merge)))

(alter-var-root #'search-metadata memoize)

(defn- entity->where-triples
  "Deconstruct partial `entity` description into triples for a search query."
  [entity]
  (->> (for [[k v] entity]
         (if (coll? v)
           (map #(vector '?e k %) v)
           [['?e k v]]))
       (apply concat)
       (set)))

(defn- to-pred
  "Return pred to check that the test value is on or before `to`."
  [to]
  (fn [v]
    (and v (<= (compare v to) 0))))

(defn- from-pred
  "Return pred to check that the test value is on or after `from`."
  [from]
  (fn [v]
    (and v (>= (compare v from) 0))))

(defn- between-pred
  "Return pred to check that the test value is on or between `from` and `to`."
  [from to]
  (fn [v]
    (and ((from-pred from) v)
         ((to-pred to) v))))

(defn- entity->search-query
  "Build an entity search query from a partial `entity` description.

  A `sort-key` may also be supplied to allow sorting of the results afterwards.
  When supplying a `sort-key` the result set is different (2-tuples rather than
  strings) and requires postprocessing to perform the actual sorting operation."
  ([entity sort-key]
   (into [:find '?id '?sort-value
          :where
          ['?e :db/ident '?id]
          (concat '(optional) [['?e sort-key '?sort-value]])]
         (entity->where-triples entity)))
  ([entity]
   (into '[:find [?id ...]
           :where [?e :db/ident ?id]]
         (entity->where-triples entity))))

(defn- ignore-asami-nil
  "Fixes sorting when there is a mix of e.g. dates and :a/nil"
  [x]
  (when-not (= :a/nil x) x))

(def sort-keyfn
  "Helper function to order search results by the sort-val first & ID second."
  (juxt second first))

(defn unsortable?
  [[k v]]
  (contains? #{nil :a/nil} v))

(defn- sort-results
  "Sort 2-tuple `search-results` containing sort values in the second position.

  A `sort-pred` may be supplied to filter the results prior to sorting, e.g.
  only keeping results with a sort-val within some range."
  [search-results & [sort-pred]]
  (->> search-results
       (filter (comp (or sort-pred (constantly true)) second))
       (sort-by sort-keyfn)
       (map first)
       (distinct)))

(defn match-entity
  "Look up entity IDs in `conn` matching partial `entity` description.

  An `order-by` vector of [sort-key sort-dir] may also be supplied;
  the sort direction can be either :asc (default) or :desc.

  Unsortable results are *ALWAYS* placed at the end, no matter the direction.
  For reproducibility's sake, unsorted results do in fact get sorted by name!"
  ([conn entity [sort-key sort-dir :as order-by] & [sort-pred]]
   (let [raw-results (d/q (entity->search-query entity sort-key) conn)
         unsorted    (sort (map first (filter unsortable? raw-results)))
         results     (sort-results (remove unsortable? raw-results) sort-pred)
         sorted      (if (= sort-dir :desc)
                       (reverse results)
                       results)]
     (concat sorted unsorted)))
  ([conn entity]
   (d/q (entity->search-query entity) conn)))

;; TODO: use bounded memoization, e.g. core.memoize
;; Since the function simply returns entity IDs the results can be memoised,
;; in order to provide a way to implement efficient :limit and :offset params
;; in the search function below.
(alter-var-root #'match-entity memoize)

(defn search
  "Return matching entities in `conn` based on a partial `entity` description.

  Also accepts :limit and :offset to return results gradually, as well as
  :order-by which should be a vector of [k dir]. The :total amount of matches
  regardless of :limit/:offset is always included as metadata."
  [conn entity & {:keys [limit offset order-by from to] :as opts}]
  (log/info :asami/search {:entity entity
                           :opts   opts})
  (let [matches (if order-by
                  (cond
                    (and from to)
                    (match-entity conn entity order-by (between-pred from to))

                    from
                    (match-entity conn entity order-by (from-pred from))

                    to
                    (match-entity conn entity order-by (to-pred to))

                    :else
                    (match-entity conn entity order-by))
                  (match-entity conn entity))]
    (with-meta
      (cond->> (map (partial d/entity conn) matches)
        offset (drop offset)
        limit (take limit))
      {:total (count matches)})))

(comment
  (defonce conn (d/connect "asami:mem://glossematics"))

  ;; Test entity search
  (count (match-entity conn {'_ #{"#np56"}}
                       [:document/date-mention :asc]
                       (between-pred #inst"1948-08-30T23:00:00.000-00:00"
                                     #inst"1950-08-30T23:00:00.000-00:00")))

  (entity->search-query {:document/mention #{"#np56"}} :document/date-mention)
  (search conn {:document/mention #{"#np58"}})
  (count (search conn {:document/mention #{"#np58"}}))      ; 51 in total
  (count (search conn {:document/mention #{"#np58"}}
                 :offset 50
                 :limit 10))                                ; 1 left

  ;; Test sorting of search results
  (match-entity conn {:document/mention #{"#npl1957"}} [:file/name :desc])
  (match-entity conn {:document/mention #{"#npl1957"}}
                [:document/date-mention :asc])
  (search conn {:document/mention #{"#npl1957"}}
          :order-by [:document/date-mention :asc]
          :limit 3)

  ;; Test date predicates
  ((between-pred #inst"1948-08-30T23:00:00.000-00:00"
                 #inst"1950-08-30T23:00:00.000-00:00")
   #inst"1949-08-30T23:00:00.000-00:00")
  #_.)
