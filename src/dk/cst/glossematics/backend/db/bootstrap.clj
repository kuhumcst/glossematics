(ns dk.cst.glossematics.backend.db.bootstrap
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [clojure.set :as set]
            [asami.core :as d]
            [tick.core :as t]
            [dk.ative.docjure.spreadsheet :as xl]
            [dk.cst.cuphic :as cup]
            [dk.cst.cuphic.xml :as xml])
  (:import [java.io File]
           [java.sql Date]
           [java.time LocalDate]
           [java.time.format DateTimeFormatter
                             DateTimeFormatterBuilder
                             DateTimeParseException]
           [java.time.temporal ChronoField]))

;; Syntax errors (fixed)
;; acc-1992_0005_025_Jakobson_0180-tei-final.xml:127:64

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

(def tei-dtf
  "NOTE: Defaults to 1 january in case either is missing."
  (-> (DateTimeFormatterBuilder.)
      (.appendPattern "yyyy[-MM[-dd]]")
      (.parseDefaulting ChronoField/MONTH_OF_YEAR 1)
      (.parseDefaulting ChronoField/DAY_OF_MONTH 1)
      (.toFormatter)))

(defn parse-date
  "Parse a `date-str` using the `formatter` of choice. Expects some noise in
  the data (e.g. Viggo's Excel file) so all dots are converted into dashes."
  [^DateTimeFormatter formatter date-str]
  (if (string? date-str)
    (try
      ;; TODO: converting to oldschool Date/inst now since - switch?
      (-> ^LocalDate (t/parse-date (str/replace date-str #"\." "-") formatter)
          (Date/valueOf))
      (catch DateTimeParseException e                       ; missing year?
        (log/warn "Could not parse date: " date-str)))
    date-str))

(defn normalize-chronology-data
  [event]
  (-> event
      (update-vals #(if (string? %) (str/trim %) %))
      (update :event/type event-type-longform)
      (update :event/restored-start? (comp boolean not-empty))
      (update :event/restored-end? (comp boolean not-empty))
      (update :event/start (partial parse-date excel-dtf))
      (update :event/end (partial parse-date excel-dtf))))

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

(defonce db-uri
  (doto "asami:mem://glossematics"
    (d/create-database)))

(defonce conn
  (d/connect db-uri))

(defn file-entities
  "Recursively list all file entities found in `dir`, ignoring directories."
  [dir]
  (->> (file-seq (io/file dir))
       (remove #(.isDirectory ^File %))
       (map (fn [file]
              (let [filename  (.getName ^File file)
                    extension (last (str/split filename #"\."))
                    path      (.getPath ^File file)]
                {:db/ident       filename                   ; the entity ID
                 :file/name      filename
                 :file/extension extension
                 :file/path      path})))))

(defn tei-files
  [conn]
  (d/q '[:find [?path ...]
         :where
         [?e :file/extension "xml"]
         [?e :file/path ?path]]
       (d/db conn)))

(def rename
  {:placeName :place
   :persName  :person})

(defn ref-str
  [tag ?type]
  (if (= tag :rs)
    (name (get rename ?type ?type))
    (name (get rename tag tag))))

;; TODO: is ?optional switched with non-optional? see :document-type
;; TODO: the ... pattern not working correctly in Cuphic?
(def header-patterns
  {:language      '[:language {:ident language} ???]
   :title         '[:title {} title]
   :author        '[:author {:ref author} ???]
   :settlement    '[:settlement {:ref settlement} ???]
   :document-type '[:objectDesc {:form form}
                    [:supportDesc {}
                     [:support {} support]
                     [:extent {}
                      [:note {} page-count]]]]
   :header-refs   '[tag {:ref  ref
                         :type ?type} ???]                  ; TODO: not enough context
   :changes       '[:change {:when when :who who} ???]
   :header-dates  '[:date {:when when} ???]})

(def facsimile-patterns
  {:facsimile '[:graphic {:xml/id id}]})

(def text-patterns
  {:body-refs  '[tag {:ref  ref
                      :type ?type} ???]
   :body-dates '[:date {:when when} ???]})

(defn scrape-document
  [xml]
  (let [hiccup    (xml/parse xml)
        header    (nth hiccup 2)
        facsimile (nth hiccup 3)
        text      (nth hiccup 4)]
    (merge
      (cup/scrape header header-patterns)
      (cup/scrape facsimile facsimile-patterns)
      (cup/scrape text text-patterns))))

(def blank-ref?
  #{"xx" "#xx"})

(defn single-val
  [result k]
  (-> (get result k) first (get (symbol k))))

(defn single-triple
  [result filename rel k]
  (when-let [v (single-val result k)]
    (when (not (blank-ref? v))                              ;TODO don't include blanks
      [filename rel v])))

(defn document-triples
  [filename {:keys [header-refs
                    body-refs
                    facsimile
                    changes
                    body-dates]
             :as   result}]
  (let [triple (partial single-triple result filename)]
    (disj
      (reduce
        into
        (reduce
          conj
          #{}
          [(triple :document/title :title)
           (triple :document/author :author)
           (triple :document/editor :editor)
           (triple :document/language :language)
           (triple :document/settlement :settlement)])
        [(for [{:syms [when who]} changes]
           [filename :document/changedBy who])
         (for [{:syms [id]} facsimile]
           [filename :document/facsimile id])
         (for [{:syms [when]} body-dates]
           [filename :mention/date (parse-date tei-dtf when)])
         #_(for [{:syms [tag ref ?type]} header-refs]
             (when (str/starts-with? ref "#n")
               [filename (keyword "header" (ref-str tag ?type)) ref]))
         (for [{:syms [tag ref ?type]} body-refs]
           (when (str/starts-with? ref "#n")
             (let []
               [filename (keyword "mention" (ref-str tag ?type)) ref])))])
      nil)))

(defn as-triples
  [filepath]
  (let [file (io/file filepath)]
    (document-triples (.getName file) (scrape-document file))))

(defn as-entity
  [filepath]
  (let [triples (as-triples filepath)
        ident   (ffirst triples)]
    (->> (for [[_ k v] triples]
           {k #{v}})
         (apply merge-with set/union {:db/ident ident}))))

(defn bootstrap!
  "Asynchronously bootstrap an in-memory Asami database from a `conf`."
  [{:keys [files-dir] :as conf}]
  (d/transact conn {:tx-data (file-entities files-dir)})
  (d/transact conn {:tx-data (timeline-entities)})
  (d/transact conn {:tx-data (map as-entity (tei-files conn))}))

(comment
  (def example (nth (tei-files conn) 69))
  (xml/parse example)
  (nth (xml/parse example) 2)                               ; header
  (nth (xml/parse example) 3)                               ; facsimile
  (nth (xml/parse example) 4)                               ; text/body
  (scrape-document example)
  (document-triples "example.xml" (scrape-document example))
  (as-triples example)

  (file-entities "/Users/rqf595/Desktop/Data-FINAL")
  (count (file-entities "/Users/rqf595/Desktop/Data-FINAL"))
  (bootstrap! {:files-dir "/Users/rqf595/Desktop/Data-FINAL"})
  (count (tei-files conn))
  (timeline-entities)
  (parse-date excel-dtf "03.10.1899")
  (parse-date excel-dtf "03-10-1899")
  (parse-date tei-dtf "1899-10-03")

  (count (d/q '[:find ?name ?path
                :where
                [?e :file/extension "tif"]
                [?e :file/name ?name]
                [?e :file/path ?path]]
              (d/db conn)))
  #_.)
