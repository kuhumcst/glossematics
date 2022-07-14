(ns dk.cst.glossematics.shared
  (:require [clojure.string :as str]
            #?(:clj [clojure.java.io :as io])
            [tick.core :as t]
            [tick.locale-en-us]                             ; need it for some reason
            #?(:clj  [io.pedestal.log :as log]
               :cljs [lambdaisland.glogi :as log]))
  #?(:clj (:import [java.sql Date]
                   [java.time LocalDate]
                   [java.time.format DateTimeParseException])))

#?(:clj
   (defn resource
     "Load a Glossematics resource from `path` (avoids resource shadowing)."
     [path]
     (io/resource (str "dk/cst/glossematics/" path))))

(def utc-dtf
  (t/formatter "yyyy-MM-dd"))

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

(defn remove-nil-vals
  "Remove kvs from `m` where v is nil.

  Asami treats a nil v different from an absent v in an input entity. The former
  comes out as :tg/nil in queries while the latter comes out as a true nil."
  [m]
  (into {} (remove (comp nil? second) m)))

(defn capitalize-words
  "Capitalise every word in `s` (not just the first)."
  [s]
  (str/join " " (map str/capitalize (str/split s #"\s"))))

(defn local-name
  "Use the local name version of `s`, i.e. without a clarifying entity type."
  [s]
  (if (str/includes? s "—")
    (first (str/split s #"\s—"))
    s))

(comment
  (capitalize-words "ACTA JUTLANDICA")
  (capitalize-words "Acta Jutlandica")
  (capitalize-words "acta jutlandica")
  (parse-date utc-fallback-dtf "1899-10-03")
  (parse-date utc-dtf "2022-03-25")
  #_.)
