(ns dk.cst.glossematics.frontend.page.timeline.data
  (:require [clojure.java.io :as io]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data.csv :as csv]
            [semantic-csv.core :as sem]))

(defn flip-datestring
  [datestring]
  (if-let [[_ dd mm yyyy] (re-matches #"(\d+)-(\d+)-(\d+)" datestring)]
    (str yyyy "-" mm "-" dd)
    ""))

(defn ok
  [coll]
  (remove empty? coll))

(defn mk-title
  [{:keys [people
           category
           source
           description
           institution
           country
           location
           event]}]
  (let [place (or (not-empty location) (not-empty country))]
    (condp str/starts-with? event
      "Ankomst" (str/join ", " (ok [event place]))
      "Afrejse" (str/join ", " (ok [event place]))
      "Afgang" (str/join ", " (ok [event place]))
      "Studier" (str/join ", " (ok [event place]))
      "Studieophold" (str/join ", " (ok [event place]))
      "Foredrag" (str/join ", " (ok [event description institution]))
      "Lecture" (str/join ", " (ok [event description institution]))
      "Oplæg" (str/join ", " (ok [event description institution]))
      "Kursus" (str/join ", " (ok [event description institution]))
      "????" (str/join ", " (ok [institution place]))
      (str/join ", " (ok [event place])))))

(defn mk-description
  [{:keys [people
           category
           source
           description
           institution
           country
           location
           event]}]
  (str/join ", " (ok [category
                      location
                      country
                      institution
                      description
                      people
                      source])))

(defmacro load-timeline
  []
  (with-open [reader (io/reader (io/resource "examples/timeline.csv"))]
    (-> (csv/read-csv reader :separator \;)
        sem/mappify
        (->> (map #(set/rename-keys % {:Personer                          :people
                                       :Startdato                         :start
                                       :Slutdato                          :end
                                       :Kategori                          :category
                                       :Kilde                             :source
                                       :Event-beskrivelse                 :description
                                       :Institution                       :institution
                                       :Land                              :country
                                       (keyword "Sted = By / Landområde") :location
                                       (keyword "Event / Begivenhed")     :event}))
             (map #(update % :start flip-datestring))
             (map #(update % :end flip-datestring))
             (map #(assoc % :title (mk-title %)))
             (map #(assoc % :description (mk-description %)))
             (map #(if (empty? (:end %))
                     (dissoc % :end)
                     (assoc % :isDuration true))))
        vec)))
