(ns dk.cst.glossematics.db.tei
  "Scrape metadata from TEI documents in both the frontend and the backend."
  (:require [clojure.string :as str]
            #?(:clj [clojure.java.io :as io])
            [clojure.set :as set]
            [tick.core :as t]
            [tick.locale-en-us]                             ; need it for some reason
            #?(:clj  [io.pedestal.log :as log]
               :cljs [lambdaisland.glogi :as log])
            [dk.cst.cuphic :as cup]
            [dk.cst.cuphic.xml :as xml])
  #?(:clj (:import [java.io File]
                   [java.sql Date]
                   [java.time LocalDate]
                   [java.time.temporal ChronoField]
                   [java.time.format DateTimeFormatter
                                     DateTimeFormatterBuilder
                                     DateTimeParseException])))

(def utc-dtf
  (t/formatter "yyyy-MM-dd"))

(def utc-fallback-dtf
  "NOTE: Defaults to 1 january in case either is missing."
  #?(:clj  (-> (DateTimeFormatterBuilder.)
               (.appendPattern "yyyy[-MM[-dd]]")
               (.parseDefaulting ChronoField/MONTH_OF_YEAR 1)
               (.parseDefaulting ChronoField/DAY_OF_MONTH 1)
               (.toFormatter))
     :cljs utc-dtf))

;; TODO: is this right?
(defn value-of
  [d]
  #?(:clj  (Date/valueOf ^LocalDate d)
     :cljs (.valueOf d)))

(defn parse-date
  "Parse a `date-str` using the `formatter` of choice. Expects some noise in
  the data (e.g. Viggo's Excel file) so all dots are converted into dashes."
  [formatter date-str]
  (if (string? date-str)
    (try
      (value-of (t/parse-date (str/replace date-str #"\." "-") formatter))
      (catch #?(:clj DateTimeParseException :cljs js/Error) e ; missing year?
        (log/warn "Could not parse date: " date-str)))
    date-str))

;; TODO: is ?optional switched with non-optional? see :document-type
;; TODO: the ... pattern not working correctly in Cuphic?
(def header-patterns
  {:language    '[:language {:ident language} ???]
   :title       '[:title {} title]
   :author      '[:author {:ref author} ???]
   :settlement  '[:settlement {:ref settlement} ???]
   :repository  '[:repository {:ref repository} ???]
   :collection  '[:collection {} collection]
   :objectDesc  '[:objectDesc {:form form}
                  [:supportDesc {}
                   [:support {} support]
                   [:extent {}
                    [:note {} page-count]]]]

   ;; TODO: adjust - doesn't match in https://glossematics.dk/app/reader/20.9.1945-Holt-LH-tei-final.xml
   :correspDesc '[:correspDesc
                  {}
                  [:correspAction
                   {:type "sent"}
                   [:persName {:ref sender} ???]
                   [:placeName {:ref sender-loc}]
                   [:date {} sent-at]]
                  [:correspAction {:type "received"}
                   [:persName {:ref recipient} ???]
                   [:placeName {:ref recipient-loc}]]]

   :hand-desc   '[:handDesc {} [:p {} hand-desc]]})

(def facsimile-patterns
  {:facsimile '[:graphic {:xml/id id}]})

(def text-patterns
  {:body-refs  '[tag {:ref  ref
                      :type ?type} ???]
   :lang-refs  '[:note {:type "language"
                        :n    ref} ???]
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

(def placeholder?
  #{"xx" "#xx" "NA"})

(defn valid?
  [v]
  (not (or (str/blank? v)
           (placeholder? v))))

(defn valid-int?
  [v]
  (and (valid? v)
       (re-matches #"\d+" v)))

(defn valid-id?
  [v]
  (and (valid? v)
       ;; TODO: make Dorte streamline archive IDs in the TEI files
       (or (str/starts-with? v "n")                         ; used for archives
           (str/starts-with? v "#n"))
       (re-find #"\d$" v)))

(defn valid-date?
  [v]
  (re-matches #"\d\d\d\d-\d\d-\d\d" v))

;; Since Dorte's IDs sometimes have a prefixed # and sometimes don't
(defn fix-id
  [id]
  (if (str/starts-with? id "#")
    id
    (str "#" id)))

(defn single-val
  [result k]
  (-> (get result k) first (get (symbol k))))

(defn single-triple
  [result filename validation-fn rel k]
  (when-let [v (single-val result k)]
    (when (validation-fn v)
      [filename rel v])))

(def parse-int
  #?(:clj  parse-long
     :cljs js/parseInt))

(defn document-triples
  [filename {:keys [objectDesc
                    correspDesc
                    facsimile
                    body-refs
                    lang-refs
                    body-dates]
             :as   result}]
  (let [triple    (partial single-triple result filename valid?)
        id-triple (comp
                    (fn [[e a v :as eav]] (when eav [e a (fix-id v)]))
                    (partial single-triple result filename valid-id?))]
    (disj
      (reduce
        into
        (reduce
          conj
          #{}
          [(triple :document/title :title)
           (triple :document/hand :hand-desc)
           (id-triple :document/author :author)
           (id-triple :document/language :language)
           (id-triple :document/repository :repository)
           (id-triple :document/settlement :settlement)
           (let [collection (triple :document/collection :collection)]
             (when (valid-int? (last collection))
               (update collection 2 parse-int)))
           (when-let [form (get-in objectDesc [0 'form])]
             [filename :document/form form])
           (when-let [sender (get-in correspDesc [0 'sender])]
             (when (valid-id? sender)
               [filename :document/sender sender]))
           (when-let [sender-loc (get-in correspDesc [0 'sender-loc])]
             (when (valid-id? sender-loc)
               [filename :document/sender-location sender-loc]))
           (when-let [sent-at (get-in correspDesc [0 'sent-at])]
             (when (valid-date? sent-at)
               [filename :document/sent-at (parse-date utc-dtf sent-at)]))
           (when-let [recipient (get-in correspDesc [0 'recipient])]
             (when (valid-id? recipient)
               [filename :document/recipient recipient]))
           (when-let [recipient-loc (get-in correspDesc [0 'recipient-loc])]
             (when (valid-id? recipient-loc)
               [filename :document/recipient-location recipient-loc]))])
        [(for [{:syms [id]} facsimile]
           [filename :document/facsimile id])
         (for [{:syms [when]} body-dates]
           [filename :document/date-mention (parse-date utc-fallback-dtf when)])
         (for [{:syms [tag ref ?type]} body-refs]
           (when (valid-id? ref)
             [filename :document/mention ref]))
         (for [{:syms [ref]} lang-refs]
           (when (valid-id? ref)
             [filename :document/mention ref]))])
      nil)))

(defn ->triples
  "Create Asami triples from either a `filepath` or `filename`/`content` combo."
  #?(:clj ([filepath]
           (let [file (io/file filepath)]
             (document-triples (.getName file) (scrape-document file)))))
  ([filename content]
   (document-triples filename (scrape-document content))))

(defn triples->entity
  "Assemble Asami `triples` into an Asami entity."
  [triples]
  (let [ident (ffirst triples)]
    (->> (for [[_ k v] triples]
           {k #{v}})
         (apply merge-with set/union {:db/ident ident}))))

(comment
  (def example (io/file "/Users/rqf595/Desktop/Glossematics-data/N-drev/Data-FINAL/DanielJones/TEI/DJtilHJU-1931-02-14-tei-final.xml"))
  (xml/parse (slurp example))
  (scrape-document (slurp example))
  (->triples example)
  (triples->entity (->triples example))

  (parse-date utc-fallback-dtf "1899-10-03")
  (parse-date utc-dtf "2022-03-25")
  #_.)