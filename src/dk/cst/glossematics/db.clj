(ns dk.cst.glossematics.db
  "Functions for populating & querying the Glossematics Asami database."
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.set :as set]
            [clojure.data.csv :as csv]
            [clojure.math.combinatorics :as combo]
            [asami.core :as d]
            [io.pedestal.log :as log]
            [dk.ative.docjure.spreadsheet :as xl]
            [dk.cst.glossematics.db.tei :as db.tei]
            [tick.core :as t])
  (:import [java.io File]))

;; Syntax errors (fixed)
;; acc-1992_0005_025_Jakobson_0180-tei-final.xml:127:64

(defonce db-uri
  (doto "asami:mem://glossematics"
    (d/create-database)))

(defonce conn
  (d/connect db-uri))

(def chronology-columns
  {:A :event/start
   :B :event/restored-start?
   :C :event/end
   :D :event/restored-end?
   :E :event/type
   :F :event/title
   :G :event/description
   :H :event/title-more
   :I :event/?1
   :J :location/country
   :K :location/city
   :L :location/institution
   :M :event/?2
   #_#_:N :event/title                                      ; duplicate column
   :O :event/?3
   :P :event/description-more
   :Q :event/people
   :R :event/source})

(def chronology-import
  #{:event/start
    :event/restored-start?
    :event/end
    :event/restored-end?
    :event/type
    :event/title
    :event/description
    :location/country
    :location/city
    :location/institution
    :event/people})

(def event-type-longform
  {"L" :life
   "U" :teaching
   "F" :lecture
   "R" :travel
   "N" :networking})

(def excel-dtf
  (t/formatter "dd-MM-yyyy"))

(defn normalize-chronology-data
  [event]
  (-> event
      (update-vals #(if (string? %) (str/trim %) %))
      (update :event/type event-type-longform)
      (update :event/restored-start? (comp boolean not-empty))
      (update :event/restored-end? (comp boolean not-empty))
      (update :event/start (partial db.tei/parse-date excel-dtf))
      (update :event/end (partial db.tei/parse-date excel-dtf))
      (assoc :entity/type :entity.type/event)))

(defn normalize-name-data
  [person]
  (-> person
      (update-vals #(cond
                      (string? %)
                      (let [s (str/trim %)]
                        (when (not-empty s)
                          (when-not (re-find #"\?" s)
                            s)))

                      (number? %)
                      (int %)

                      :else %))
      (update :db/ident #(when % (str "#np" %)))
      (assoc :entity/type :entity.type/person)))

(defn- remove-nil-vals
  "Remove kvs from `m` where v is nil.

  Asami treats a nil v different from an absent v in an input entity. The former
  comes out as :tg/nil in queries while the latter comes out as a true nil."
  [m]
  (into {} (remove (comp nil? second) m)))

(defn timeline-entities
  []
  (->> (io/file (io/resource "Reconstructed Hjelmslev kronologi 250122.xlsx"))
       (xl/load-workbook)
       (xl/select-sheet "Ark1")
       (xl/select-columns chronology-columns)
       (rest)                                               ; skip title
       (map normalize-chronology-data)
       (map remove-nil-vals)
       (map #(select-keys % chronology-import))))

(def bib-val->ref
  "Incomplete mapping from the strings used in the bibliography files to IDs."
  {"København"                                       "#npl283"
   "København."                                      "#npl283"
   "Copenhagen"                                      "#npl283"
   "Aarhus"                                          "#npl1"
   "København; Aarhus"                               #{"#npl283"
                                                       "#npl1"}
   "Oslo"                                            "#npl1242"
   "Cambridge"                                       "#npl741"
   "London"                                          "#npl1095"
   "Paris"                                           "#npl1257"
   "New York"                                        "#npl1200"
   "Helsinki"                                        "#npl931"
   "Beograd"                                         "#npl683"
   "Madison"                                         "#norg72"
   "Nice"                                            "#npl1203"
   "Bruxelles-Tervuren"                              "#npl2000"
   "EFJ"                                             "#np40"
   "LH"                                              "#np56"
   "PD"                                              "#np33"
   "Acta Jutlandica"                                 "#npub19"
   "Travaux du Cercle de Linguistique Copenhague"    "#npub15"
   "Summer Institute of Linguistics. Oklahoma"       "#norg82"
   "Selskab for nordisk Filologi"                    "#norg3"
   "Société de linguistique de Paris"                "#nlingorg50"
   "Indiana University Publications"                 "#norg53"
   "Nordisk Sprog- og Kulturforlag"                  "#norg18"
   "Det Kongelige Danske Videnskabernes Selskab. Historisk-filologiske Meddelelser, 16 (1); Bianco Lunos Bogtrykkeri"
   #{"#norg28"
     "Bianco Lunos Bogtrykkeri"}
   "Levin & Munksgaard"                              "#norg68"
   "Levin & Munksgaards"                             "#norg68"
   "Levin & Munksgaard; Aarhus Universitetsforlaget" #{"#norg68"
                                                       "Aarhus Universitetsforlaget"}
   "Munksgaard"                                      "#np104"
   "Oslo U.P."                                       "#norg21"})

(defn normalize-bib-data
  [{:keys [file/name
           document/author
           document/bib-entry
           document/year]
    :as   entry}]
  (let [[year' end-year] (when (string? year)
                           (map parse-long (str/split year #"-")))
        end-year'     (when end-year
                        (+ end-year (* (quot year' 100) 100)))
        bib-val->ref' #(get bib-val->ref % %)]
    (when year'
      ;; In cases where we already have a :file/name we also have some canonical
      ;; data from the TEI file, which we prefer over the bibliographical entry.
      (-> (if name
            (dissoc entry :document/title :document/author)
            (update entry :document/author bib-val->ref'))
          (update-vals str/trim)
          (update :document/settlement bib-val->ref')
          (update :document/repository bib-val->ref')
          (update :document/publisher bib-val->ref')
          (dissoc :tei-id :short-title)                     ; remove unused vals
          (assoc :entity/type :entity.type/bibliographic-entry
                 :document/year year'
                 :document/end-year end-year'
                 :db/ident (if name
                             name
                             (str author "-" bib-entry)))))))

(def bib-columns
  [:document/author
   :document/year
   :document/bib-entry
   :document/title
   :document/publication
   :document/publisher
   :document/settlement
   :document/pp
   :document/notes
   :short-title                                             ; unused
   :tei-id                                                  ; unused
   :file/name])

(defn- remove-empty-vals
  [m]
  (apply dissoc m (->> (filter (comp empty? second) m)
                       (map first))))

(def bib-entries-xf
  (comp
    (map (partial zipmap bib-columns))
    (map #(dissoc % :tei-id))
    (map remove-empty-vals)
    (map normalize-bib-data)
    (remove nil?)
    (map remove-nil-vals)))

(defn bib-entries
  [filename]
  (with-open [reader (io/reader (io/resource filename))]
    (into [] bib-entries-xf (rest (csv/read-csv reader)))))

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

(defn person-entities
  []
  (->> (io/file (io/resource "Navneliste_gennemgået-FINAL.xlsx"))
       (xl/load-workbook)
       (xl/select-sheet "Sheet1")
       (xl/select-columns {:A :db/ident
                           :B :person/first-name
                           :C :person/last-name
                           :D :entity/full-name
                           :E :person/birth
                           :F :person/death})
       (rest)                                               ; skip title
       (map normalize-name-data)
       (map remove-nil-vals)
       (remove #(= {:entity/type :entity.type/person} %)))) ; empty

(defn other-entities
  [filename id-prefix entity-type]
  (->> (-> filename io/resource io/file io/reader line-seq dedupe)
       (map #(str/split % #"\t"))
       (map (fn [[id full-name]]
              {:db/ident         (str id-prefix id)
               :entity/type      (keyword "entity.type" entity-type)
               :entity/full-name full-name}))))

(defn- with-body?
  "Does the file with `filename` contain a body of content?"
  [filename]
  (str/ends-with? filename "-final.xml"))

(def file-entities-xf
  (comp
    (remove #(.isDirectory ^File %))
    (map (fn [file]
           (let [filename  (.getName ^File file)
                 extension (last (str/split filename #"\."))
                 path      (.getPath ^File file)]
             {:db/ident       filename
              :entity/type    :entity.type/file
              :file/body?     (with-body? filename)
              :file/name      filename
              :file/extension extension
              :file/path      path})))))

(def duplicates-xf
  (comp
    (map :file/name)
    (filter with-body?)
    (map (fn [s] (str (subs s 0 (- (count s) 10)) ".xml")))))

(defn file-entities
  "Recursively list all file entities found in `dir`, ignoring directories.
  Duplicates of the transcribed TEI files with empty bodies are not included."
  [dir]
  (let [entities   (into [] file-entities-xf (file-seq (io/file dir)))
        duplicates (into #{} duplicates-xf entities)]
    (remove (comp duplicates :file/name) entities)))

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

(def repositories
  [{:db/ident         "#narch1"
    :entity/full-name "Louis Hjelmslev's archive"
    :entity/type      :entity.type/repository}
   {:db/ident         "#narch2"
    :entity/full-name "Det Universitetshistoriske Arkiv"
    :entity/type      :entity.type/repository}
   ;; TODO: is #narch3 missing? investigate
   {:db/ident         "#narch4"
    :entity/full-name "Eli Fischer-Jørgensen's archive"
    :entity/type      :entity.type/repository}
   {:db/ident         "#narch5"
    :entity/full-name "Francis Whitfield's archive"
    :entity/type      :entity.type/repository}
   {:db/ident         "#narch6"
    :entity/full-name "Hans Jørgen Uldall's archive"
    :entity/type      :entity.type/repository}
   {:db/ident         "#narch7"
    :entity/full-name "Henning Spang-Hanssen's archive"
    :entity/type      :entity.type/repository}
   {:db/ident         "#narch8"
    :entity/full-name "Harry Wett Frederiksen's archive"
    :entity/type      :entity.type/repository}
   {:db/ident         "#narch9"
    :entity/full-name "Paul Diderichsen's archive"
    :entity/type      :entity.type/repository}
   ;; TODO: is #narch10 missing? investigate
   {:db/ident         "#narch11"
    :entity/full-name "Travaux du Cercle de Linguistique Copenhague"
    :entity/type      :entity.type/repository}])

(def file->entity
  (comp db.tei/triples->entity db.tei/->triples))

(defn bootstrap!
  "Asynchronously bootstrap an in-memory Asami database from a `conf`."
  [{:keys [files-dir] :as conf}]
  ;; Timeline events
  (log-transaction! :timeline (timeline-entities))

  ;; Bibliography
  (log-transaction! :bib-EFJ (bib-entries "EFJ bibliografi - Sheet1.csv"))
  (log-transaction! :bib-LH (bib-entries "LH bibliografi - Sheet1.csv"))
  (log-transaction! :bib-PD (bib-entries "PD bibliografi - Sheet1.csv"))

  ;; Search entities
  (log-transaction! :repositories repositories)
  (log-transaction! :person (person-entities))
  (log-transaction! :linguistic-organisation (other-entities "Lingvistiske_organisationer_og_konferencer-gennemgået-FINAL.txt" "#nlingorg" "linguistic-organisation"))
  (log-transaction! :organisation (other-entities "Organisationer-gennemgået-FINAL.txt" "#norg" "organisation"))
  (log-transaction! :publication (other-entities "Publikationer-gennemgået-FINAL.txt" "#npub" "publication"))
  (log-transaction! :language (other-entities "sprog.txt" "#ns" "language"))
  (log-transaction! :place (other-entities "Stednavne-gennemgået-FINAL.txt" "#npl" "place"))
  (log-transaction! :terms (other-entities "terms.txt" "#nt" "term"))
  (log-transaction! :english-terms (other-entities "terms-eng.txt" "#nteng" "english-term"))

  ;; Add the file entities found in the files-dir.
  ;; Then parse each TEI file and link the document data to the file entities.
  (log-transaction! :files (file-entities files-dir))
  (log-transaction! :tei-data (map file->entity (tei-files conn))))

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
  (file-entities "/Users/rqf595/Desktop/Glossematics-data")
  (count (file-entities "/Users/rqf595/Desktop/Glossematics-data"))
  (bootstrap! {:files-dir "/Users/rqf595/Desktop/Glossematics-data"})
  (count (tei-files conn))
  (timeline-entities)
  (bib-entries "LH bibliografi - Sheet1.csv")
  (person-entities)
  (db.tei/parse-date excel-dtf "03.10.1899")
  (db.tei/parse-date excel-dtf "03-10-1899")

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
