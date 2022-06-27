(ns dk.cst.glossematics.db
  "Functions for populating & querying the Glossematics Asami database."
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.set :as set]
            [clojure.math.combinatorics :as combo]
            [asami.core :as d]
            [io.pedestal.log :as log]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.shared :refer [resource]]
            [dk.cst.glossematics.db.file :as db.file]
            [dk.cst.glossematics.db.person :as db.person]
            [dk.cst.glossematics.db.timeline :as db.timeline]
            [dk.cst.glossematics.db.bibliography :as db.bibliography]
            [dk.cst.glossematics.db.tei :as db.tei]))

;; Syntax errors (fixed)
;; acc-1992_0005_025_Jakobson_0180-tei-final.xml:127:64

(defonce db-uri
  (doto "asami:mem://glossematics"
    (d/create-database)))

(defonce conn
  (d/connect db-uri))

(defn- multiple?
  [x]
  (and (coll? x) (> (count x) 1)))

(defn- as-set
  [v]
  (cond
    (set? v) v
    (some? v) #{v}))

;; TODO: just use full name if we only have a single canonical name?
(defn name-permutations
  "Get names sourced from the first, last, and full name of a `person-entity`."
  [person-entity]
  (let [{:keys [person/first-name
                person/last-name
                entity/full-name]} (update-vals person-entity as-set)]
    (set/union
      (cond
        (or (multiple? first-name) (multiple? last-name))
        (->> (combo/cartesian-product first-name last-name)
             (map (partial str/join " "))
             (set))

        (and (some? first-name) (some? last-name))
        (let [first-name* (first first-name)
              last-name*  (first last-name)]
          (if (= first-name* last-name*)
            #{last-name*}
            #{(str first-name* " " last-name*)})))
      (if-not (or full-name (and last-name first-name))
        (or last-name first-name)
        full-name))))

;; Takes several minuts to execute; used to find static/top-30-name-kvs.
;; TODO: remove again at some point?
(defn top-names
  []
  (->> (d/q '[:find ?id (count ?f)
              :where
              [?p :entity/type :entity.type/person]
              [?p :db/ident ?id]
              [?f :entity/type :entity.type/file]
              [?f _ ?id]]
            conn)
       (map #(assoc (d/entity conn (first %))
               :db/ident (first %)
               :frequency (second %)))
       (mapcat (fn [{:keys [db/ident frequency] :as m}]
                 (for [s (name-permutations m)]
                   (with-meta [s ident] {:frequency frequency}))))
       (sort-by (juxt (comp :frequency meta) first))
       (reverse)))

(defn search-metadata
  "Return a mapping from entity type->name->id to be used by the frontend."
  []
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

(defn other-entities
  [filename id-prefix entity-type]
  (->> (-> filename resource io/input-stream io/reader line-seq dedupe)
       (map #(str/split % #"\t"))
       (map (fn [[id full-name]]
              {:db/ident         (str id-prefix id)
               :entity/type      (keyword "entity.type" entity-type)
               :entity/full-name full-name}))))

(defn tei-files
  [conn]
  (d/q '[:find [?path ...]
         :where
         [?e :file/extension "xml"]
         [?e :file/path ?path]]
       conn))

(defn- log-transaction!
  "Transact `tx-data`, logging its count using the supplied `description`."
  [description tx-data]
  (log/info (keyword "bootstrap.asami" (str (name description) "-tx"))
            (count tx-data))
  (d/transact conn {:tx-data tx-data}))

(defn bootstrap!
  "Asynchronously bootstrap an in-memory Asami database from a `conf`."
  [{:keys [files-dir] :as conf}]
  (log-transaction! :timeline (db.timeline/timeline-entities))

  ;; Bibliography
  (log-transaction! :bib-EFJ (db.bibliography/bib-entries "EFJ bibliografi - Sheet1.csv"))
  (log-transaction! :bib-LH (db.bibliography/bib-entries "LH bibliografi - Sheet1.csv"))
  (log-transaction! :bib-PD (db.bibliography/bib-entries "PD bibliografi - Sheet1.csv"))

  ;; Search entities
  (log-transaction! :repositories sd/repositories)
  (log-transaction! :person (db.person/person-entities))
  (log-transaction! :linguistic-organisation (other-entities "Lingvistiske_organisationer_og_konferencer-gennemgået-FINAL.txt" "#nlingorg" "linguistic-organisation"))
  (log-transaction! :organisation (other-entities "Organisationer-gennemgået-FINAL.txt" "#norg" "organisation"))
  (log-transaction! :publication (other-entities "Publikationer-gennemgået-FINAL.txt" "#npub" "publication"))
  (log-transaction! :language (other-entities "sprog.txt" "#ns" "language"))
  (log-transaction! :place (other-entities "Stednavne-gennemgået-FINAL.txt" "#npl" "place"))
  (log-transaction! :terms (other-entities "terms.txt" "#nt" "term"))
  (log-transaction! :english-terms (other-entities "terms-eng.txt" "#nteng" "english-term"))

  ;; Add the file entities found in the files-dir.
  ;; Then parse each TEI file and link the document data to the file entities.
  (log-transaction! :files (db.file/file-entities files-dir))
  (log-transaction! :tei-data (map db.tei/file->entity (tei-files conn))))

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

(defn- ignore-tg-nil
  "Fixes sorting when there is a mix of e.g. dates and :tg/nil"
  [x]
  (when-not (= :tg/nil x) x))

(def sort-keyfn
  "Helper function to order search results by the sort-val first & ID second."
  (juxt (comp ignore-tg-nil second) first))

(defn- sort-results
  "Sort 2-tuple `search-results` containing sort values in the second position.

  A `sort-pred` may be supplied to filter the results prior to sorting, e.g.
  only keeping results with a sort-val within some range."
  [search-results & [sort-pred]]
  (->> search-results
       (filter (comp (or sort-pred
                         (constantly true))
                     ignore-tg-nil
                     second))
       (sort-by sort-keyfn)
       (map first)
       (distinct)))

(defn match-entity
  "Look up entity IDs in `conn` matching partial `entity` description.

  An `order-by` vector of [sort-key sort-dir] may also be supplied.
  The sort direction can be either :asc (default) or :desc."
  ([conn entity [sort-key sort-dir :as order-by] & [sort-pred]]
   (let [results (sort-results (d/q (entity->search-query entity sort-key) conn)
                               sort-pred)]
     (if (= sort-dir :desc)
       (reverse results)
       results)))
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
  (bootstrap! {:files-dir "/Users/rqf595/Desktop/Glossematics-data"})
  (count (tei-files conn))

  ;; Multiple names registered for the same person (very common)
  (d/entity conn "#np668")

  ;; Test loading of file entities
  (d/entity conn "acc-1992_0005_036_Uldall_0220-tei-final.xml")
  (d/entity conn "acc-1992_0005_134_Sprogteor_0130-tei.xml")
  (d/entity conn "acc-1992_0005_124_Cenematics_0100_098.tif.jpg")

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

  ;; Print duplicates
  (doseq [[k v] (name-duplicates)]
    (println (str k ": " (str/join ", " v))))

  ;; Test date predicates
  ((between-pred #inst"1948-08-30T23:00:00.000-00:00"
                 #inst"1950-08-30T23:00:00.000-00:00")
   #inst"1949-08-30T23:00:00.000-00:00")

  (count (d/q '[:find ?name ?path
                :where
                [?e :file/extension "jpg"]
                [?e :file/name ?name]
                [?e :file/path ?path]]
              (d/db conn)))

  (:db-after @(log-transaction! :terms (other-entities "terms.txt" "#nt" "term")))
  (tei-files (:db-after @(log-transaction! :terms (file))))
  #_.)
