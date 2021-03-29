(ns load
  (:require [clojure.java.io :as io]
            [clojure.set :as set]
            [clojure.data.csv :as csv]
            [semantic-csv.core :as sem]))

(defmacro timeline
  []
  (with-open [reader (io/reader (io/resource "timeline.csv"))]
    (-> (csv/read-csv reader :separator \;)
        sem/mappify
        (->> (map #(set/rename-keys % {:Personer                           :people
                                       :Startdato                          :start
                                       :Slutdato                           :end
                                       :Kategori                           :category
                                       :Kilde                              :source
                                       :Event-beskrivelse                  :description
                                       :Institution                        :institution
                                       :Land                               :country
                                       (keyword "Sted = By / Landområde") :location
                                       (keyword "Event / Begivenhed")      :event})))
        vec)))
