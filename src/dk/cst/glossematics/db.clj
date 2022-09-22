(ns dk.cst.glossematics.db
  "Functions for populating & querying the Glossematics Asami database."
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.set :as set]
            [clojure.math.combinatorics :as combo]
            [asami.core :as d]
            [io.pedestal.log :as log]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.shared :as shared]
            [dk.cst.glossematics.backend.shared :as bshared]
            [dk.cst.glossematics.db.file :as db.file]
            [dk.cst.glossematics.db.paper :as db.paper]
            [dk.cst.glossematics.db.person :as db.person]
            [dk.cst.glossematics.db.timeline :as db.timeline]
            [dk.cst.glossematics.db.bibliography :as db.bibliography]
            [dk.cst.glossematics.db.tei :as db.tei]))

;; Syntax errors (fixed)
;; acc-1992_0005_025_Jakobson_0180-tei-final.xml:127:64

(defonce conn
  (d/connect "asami:mem://glossematics"))

(defn- puri
  [db-dir]
  (str "asami:local://" db-dir))

(defn pconn
  "Get a connection to the persisted storage graph located in `db-dir`.

  While the regular in-memory graph in 'conn' is a product of the input dataset,
  the persisted storage graph returned by 'pconn' is a smaller one consisting
  only of user-submitted data, e.g. bookmarks or comments."
  [db-dir]
  (d/connect (puri db-dir)))

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

(defn other-entities
  "Load TSV resource from `file` with the given `id-prefix` and `entity-type`;
  the returned data can be transacted into Asami."
  [file id-prefix entity-type]
  (->> (-> file bshared/resource io/input-stream io/reader line-seq dedupe)
       (map #(str/split % #"\t"))
       (map (fn [[id full-name]]
              {:db/ident         (str id-prefix id)
               :entity/type      (keyword "entity.type" entity-type)
               :entity/full-name (shared/capitalize-all full-name)}))))

(defn tei-files
  [conn]
  (d/q '[:find [?path ...]
         :where
         [?e :file/extension "xml"]
         [?e :file/path ?path]]
       conn))

(defn bookmarks
  [conn assertions author]
  (d/q (cond-> '[:find [?ident ...]
                 :in $ ?author
                 :where
                 [?e :entity/type :entity.type/bookmark]
                 [?e :bookmark/author ?author]
                 [?e :db/ident ?ident]]

         ;; Authorization required for non-public bookmarks!
         (not= author (shared/assertions->user-id assertions))
         (conj '[?e :bookmark/visibility :public]))

       conn author))

(defn entity-triples
  "Find the triples in `conn` of the entity identified by `ident` (:db/ident)."
  [conn ident]
  (d/q '[:find ?e ?a ?v
         :in $ ?ident
         :where
         [?e :db/ident ?ident]
         [?e ?a ?v]]
       conn ident))

(defn- retracted-eav
  [[e a v]]
  [:db/retract e a v])

(defn retract-entity!
  "Retracts the entity in `conn` identified by `ident`."
  [conn ident]
  (when-let [triples (entity-triples conn ident)]
    (d/transact conn {:tx-data (map retracted-eav triples)})
    (log/info :asami/retract-entity {:db/ident ident})))

(defn- log-transaction!
  "Transact `tx-data`, logging its count using the supplied `description`."
  [description tx-data]
  (log/info (keyword "bootstrap.asami" (str (name description) "-tx"))
            (count tx-data))
  (d/transact conn {:tx-data tx-data}))

(defn bootstrap!
  "Asynchronously bootstrap an in-memory Asami database from a `conf`."
  [{:keys [files-dir db-dir] :as conf}]
  ;; Ensure that persisted storage exists and can be accessed.
  (log/info :bootstrap.asami/persisted-storage {:db (pconn db-dir)})

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
  (log-transaction! :paper db.paper/static-data)
  (log-transaction! :files (db.file/file-entities files-dir))
  (log-transaction! :tei-data (map db.tei/file->entity (tei-files conn))))

(comment
  (bootstrap! {:files-dir "/Users/rqf595/Desktop/Glossematics-data"})
  (count (tei-files conn))

  ;; Delete everything in persisted storage -- for development use.
  (d/delete-database (puri "/Users/rqf595/.glossematics/db"))

  ;; Test persisted storage
  (d/transact (pconn "/Users/rqf595/.glossematics/db")
              {:tx-data [{:db/ident   "glen"
                          :glen/name  "Glen"
                          :glen/thing 123}]})
  (d/entity (pconn "/Users/rqf595/.glossematics/db") "glen")
  (d/q '[:find ?e ?a ?v
         :where
         [?e :db/ident #uuid"e4040c7d-9020-3e45-92ed-d57f1cd86abd"]
         [?e ?a ?v]]
       (pconn "/Users/rqf595/.glossematics/db"))

  (bookmarks (pconn "/Users/rqf595/.glossematics/db")
             {}
             "UNKNOWN")

  ;; Multiple names registered for the same person (very common)
  (d/entity conn "#np668")

  ;; Test loading of file entities
  (d/entity conn "acc-1992_0005_036_Uldall_0220-tei-final.xml")
  (d/entity conn "acc-1992_0005_134_Sprogteor_0130-tei.xml")
  (d/entity conn "acc-1992_0005_124_Cenematics_0100_098.tif.jpg")

  (count (d/q '[:find ?name ?path
                :where
                [?e :file/extension "jpg"]
                [?e :file/name ?name]
                [?e :file/path ?path]]
              conn))
  #_.)
