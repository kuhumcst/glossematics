(ns dk.cst.glossematics.shared
  "Shared functionality usable from both frontend and backend."
  (:require [clojure.string :as str]
            #?(:clj  [dk.cst.glossematics.backend.shared :refer [development?]]
               :cljs [dk.cst.glossematics.frontend.state :refer [development?]])
            [tick.core :as t]
            [tick.locale-en-us]                             ; need it for some reason
            #?(:clj  [io.pedestal.log :as log]
               :cljs [lambdaisland.glogi :as log]))
  #?(:clj (:import [java.sql Date]
                   [java.time LocalDate ZoneOffset]
                   [java.time.format DateTimeParseException])))

(def utc-dtf
  (t/formatter "yyyy-MM-dd"))

;; Dates are always imported as UTC and displayed as UTC; see: #69.
;; We are ignoring the concept of timezones entirely, since we are only
;; using the date itself and not the hour of day. It would be preferable
;; to have a shared JS/Java date type which didn't care about timezones,
;; but unfortunately LocalDate doesn't exist in JavaScript AFAIK.
(defn value-of
  [d]
  #?(:clj  (Date/from (.toInstant (.atStartOfDay ^LocalDate d) ZoneOffset/UTC))
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

(defn remove-nil-vals
  "Remove kvs from `m` where v is nil.

  Asami treats a nil v different from an absent v in an input entity. The former
  comes out as :tg/nil in queries while the latter comes out as a true nil."
  [m]
  (into {} (remove (comp nil? second) m)))

(defn capitalize-all
  "Capitalise every word in `s` (not just the first) and normalise spaces."
  [s]
  (str/trim (str/join " " (map str/capitalize (str/split s #"\s+")))))

(defn local-name
  "Use the local name version of `s`, i.e. without a clarifying entity type."
  [s]
  (when s
    (if (str/includes? s "—")
      (first (str/split s #"\s—"))
      s)))

(defn single
  [coll]
  (if (not= (count coll) 1)
    (throw (ex-info "Must be exactly one item in coll" {:coll coll}))
    (first coll)))

(defn assertions->institution
  [assertions]
  (let [{:strs [organizationName schacHomeOrganization]} (:attrs assertions)]
    (or (first organizationName)
        (first schacHomeOrganization))))

(defn assertions->individual
  [assertions]
  (let [{:strs [cn displayName]} (:attrs assertions)]
    (or (first cn)
        (first displayName))))

(defn- assertions->user-ids
  [assertions]
  (-> assertions :attrs (get "eduPersonTargetedID")))

(defn assertions->user-id
  [assertions]
  (if development?
    "UNKNOWN"
    (when-let [user (assertions->user-ids assertions)]
      (not-empty (single user)))))

(comment
  ;; These should all be true
  (= (capitalize-all "ACTA JUTLANDICA")
     (capitalize-all "Acta Jutlandica")
     (capitalize-all " acta  jutlandica"))

  (single (assertions->user-ids {:attrs {"eduPersonTargetedID" #{"glen"}}}))
  (single (assertions->user-ids {:attrs {"eduPersonTargetedID" #{}}}))

  (parse-date utc-dtf "1899-10-03")
  (parse-date utc-dtf "2022-03-25")
  #_.)
