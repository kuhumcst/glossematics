(ns dk.cst.glossematics.db.person
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [dk.ative.docjure.spreadsheet :as xl]
            [dk.cst.glossematics.shared :as shared]
            [dk.cst.glossematics.backend.shared :as bshared]))

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

(defn person-entities
  []
  (->> (bshared/resource "Navneliste_gennemgået-FINAL.xlsx")
       (io/input-stream)
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
       (map shared/remove-nil-vals)
       (remove #(= {:entity/type :entity.type/person} %)))) ; empty

(comment
  (person-entities)
  #_.)
