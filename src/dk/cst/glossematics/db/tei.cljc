(ns dk.cst.glossematics.db.tei
  "Scrape metadata from TEI documents in both the frontend and the backend."
  (:require [clojure.string :as str]
            #?(:clj [clojure.java.io :as io])
            [clojure.set :as set]
            #?(:clj  [io.pedestal.log :as log]
               :cljs [lambdaisland.glogi :as log])
            [dk.cst.cuphic :as cup]
            [dk.cst.cuphic.xml :as xml]
            [dk.cst.glossematics.shared :as shared]
            [dk.cst.glossematics.static-data :as sd])
  #?(:clj (:import [java.time.temporal ChronoField]
                   [java.time.format DateTimeFormatterBuilder])))

(def utc-dtf'
  "NOTE: Defaults to 1 january in case either is missing."
  #?(:clj  (-> (DateTimeFormatterBuilder.)
               (.appendPattern "yyyy[-MM[-dd]]")
               (.parseDefaulting ChronoField/MONTH_OF_YEAR 1)
               (.parseDefaulting ChronoField/DAY_OF_MONTH 1)
               (.toFormatter))
     :cljs shared/utc-dtf))

;; TODO: is ?optional switched with non-optional? see :document-type
;; TODO: the ... pattern not working correctly in Cuphic?
(def header-patterns
  {:language      '[:language {:ident language} ???]
   :title         '[:title {} title]
   :author        '[:author {:ref author} ???]
   :place         '[:msIdentifier {}
                    [:placeName {:ref place} _]
                    ???]
   :settlement    '[:settlement {:ref settlement} ???]
   :repository    '[:repository {:ref repository} title]
   :collection    '[:collection {} collection]
   :object-desc   '[:objectDesc {:form form}
                    [:supportDesc {}
                     [:support {} support]
                     [:extent {}
                      [:note {} page-count]]]]
   :hand-desc     '[:handDesc {} [:p {} hand]]

   ;; Explodes [:correspDesc ...] into its constituent parts.
   :sender        '[:correspAction {:type "sent"}
                    ??? [:persName {:ref sender} ???] ???]
   :sender-loc    '[:correspAction {:type "sent"}
                    ??? [:placeName {:ref sender-loc}] ???]
   :sent-at       '[:correspAction {:type "sent"}
                    ??? [:date {} sent-at] ???]
   :recipient     '[:correspAction {:type "received"}
                    ??? [:persName {:ref recipient} ???] ???]
   :recipient-loc '[:correspAction {:type "received"}
                    ??? [:placeName {:ref recipient-loc}] ???]})

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
  [s]
  (not (or (str/blank? s)
           (placeholder? s))))

(defn valid-int?
  [s]
  (and (valid? s)
       (re-matches #"\d+" s)))

(defn valid-id?
  [s]
  (and (valid? s)
       ;; TODO: make Dorte streamline archive IDs in the TEI files
       (or (str/starts-with? s "n")                         ; used for archives
           (str/starts-with? s "#n"))
       (or (re-matches #"#ns..." s)                         ; refer to sprog.txt
           (re-find #"\d$" s))))

(defn valid-date?
  [s]
  (re-matches #"\d\d\d\d-\d\d-\d\d" s))

;; Since Dorte's IDs sometimes have a prefixed # and sometimes don't
(defn fix-id
  [id]
  (if (str/starts-with? id "#")
    id
    (str "#" id)))

(def language-ref
  {"en"  "#nseng"
   "eng" "#nseng"                                           ; used in some TEI documents
   "fr"  "#nsfre"
   "da"  "#nsdan"
   "de"  "#nsger"})

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
  [filename {:keys [object-desc
                    hand-desc
                    facsimile
                    language
                    body-refs
                    lang-refs
                    body-dates]
             :as   result}]
  (let [triple    (partial single-triple result filename)
        id-triple (comp
                    (fn [[e a v :as eav]] (when eav [e a (fix-id v)]))
                    (partial single-triple result filename valid-id?))]
    (disj
      (reduce
        into
        (reduce
          conj
          #{}
          [(triple valid? :document/title :title)
           (id-triple :document/author :author)
           (id-triple :document/repository :repository)
           (id-triple :document/sender :sender)
           (id-triple :document/sender-location :sender-loc)
           (id-triple :document/recipient :recipient)
           (id-triple :document/recipient-location :recipient-loc)
           ;; Unfortunately, some documents use settlement & others use place...
           (id-triple :document/place :settlement)
           (id-triple :document/place :place)
           (when-let [ref (language-ref (get-in language [0 'language]))]
             [filename :document/language ref])
           (when-let [sent-at (triple valid-date? :document/sent-at :sent-at)]
             (update sent-at 2 (partial shared/parse-date utc-dtf')))
           (let [collection (triple valid? :document/collection :collection)]
             (when (not-empty (last collection))
               collection))
           (when-let [v (get-in object-desc [0 'form])]
             (if (get (-> sd/special-entity-types :document/appearance :vs) v)
               [filename :document/appearance v]
               (log/info :tei/unsupported {:document/appearance v})))
           (when-let [v (get-in object-desc [0 'support])]
             (let [v (if (= v "copy") "photocopy" v)]
               (if (get (-> sd/special-entity-types :document/appearance :vs) v)
                 [filename :document/appearance v]
                 (log/info :tei/unsupported {:document/appearance v}))))])
        [(for [{:syms [id]} facsimile]
           [filename :document/facsimile id])
         (when-let [hands (get-in hand-desc [0 'hand])]
           (for [hand (->> (str/split hands #"\s+and\s+")
                           (map str/trim)
                           (filter (-> sd/special-entity-types
                                       :document/appearance
                                       :vs)))]
             [filename :document/appearance hand]))
         (for [{:syms [when]} body-dates]
           [filename :document/date-mention (shared/parse-date utc-dtf' when)])
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

(def file->entity
  (comp triples->entity ->triples))

(comment
  (def example (io/file "/Users/rqf595/Desktop/Glossematics-data/N-drev/Data-FINAL/DanielJones/TEI/DJtilHJU-1931-02-14-tei-final.xml"))
  (xml/parse (slurp example))
  (scrape-document (slurp example))
  (->triples example)
  (triples->entity (->triples example))
  #_.)