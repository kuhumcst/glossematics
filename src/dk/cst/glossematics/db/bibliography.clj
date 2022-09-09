(ns dk.cst.glossematics.db.bibliography
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.data.csv :as csv]
            [dk.cst.glossematics.shared :as shared]))

(def bib-val->ref
  "Incomplete mapping from the strings used in the bibliography files to IDs."
  {"?"                                               nil
   "København"                                       "#npl283"
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
   "Madrid"                                          "#npl1110"
   "Bruges"                                          "#npl1110" ; Belgien
   "Louvain"                                         "#npl1110" ; Belgien
   "Ghent"                                           "#npl1110" ; Belgien
   "Münster"                                         "#npl1173"
   "Baltimore"                                       "#npl1957" ; Amerika
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
          (update :document/place bib-val->ref')
          (update :document/archive bib-val->ref')
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
   :document/place
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
    (map shared/remove-nil-vals)))

(defn bib-entries
  [filename]
  (with-open [reader (io/reader (shared/resource filename))]
    (into [] bib-entries-xf (rest (csv/read-csv reader)))))

(comment
  (bib-entries "LH bibliografi - Sheet1.csv")
  #_.)
