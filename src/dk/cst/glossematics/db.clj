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

(defn other-entities
  [filename id-prefix entity-type]
  (->> (-> filename shared/resource io/input-stream io/reader line-seq dedupe)
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

(comment
  (bootstrap! {:files-dir "/Users/rqf595/Desktop/Glossematics-data"})
  (count (tei-files conn))

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
              (d/db conn)))
  #_.)
