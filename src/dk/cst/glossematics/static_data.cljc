(ns dk.cst.glossematics.static-data
  (:require [clojure.set :as set]))

;; TODO: keep using only person names or include other entities?
(def top-30
  "The IDs with the highest document name-kvs frequency."
  [["Louis Trolle Hjelmslev" "#np56"]
   ["Hans Jørgen Uldall" "#np145"]
   ["Jens Adolf Holt" "#np60"]
   ["Eli Fischer-Jørgensen" "#np40"]
   ["Paul Henrik Krag Diderichsen" "#np33"]
   ["Vibeke Hjelmslev" "#np57"]
   ["Louis Leonor Hammerich" "#np51"]
   ["Daniel Jones" "#np68"]
   ["Francis James Whitfield" "#np162"]
   ["Elizabeth Theodora Uldall" "#np334"]
   ["Alf Axelssøn Sommerfelt" "#np127"]
   ["Pierre de Villiers Pienaar" "#np388"]
   ["Harry Wett Frederiksen" "#np160"]
   ["Rasmus Viggo Brøndal" "#np21"]
   ["Holger Pedersen" "#np719"]
   ["Roman Osipovitj Jakobson" "#np64"]
   ["Anne Sophie Uldall" "#np1025"]
   ["Charles Ernest Bazell" "#np8"]
   ["Erik Hoder" "#np58"]
   ["Carsten Høeg" "#np230"]
   ["Jens Otto Harry Jespersen" "#np67"]
   ["Adolf Frans Emil" "#np766"]
   ["Franz Blatt" "#np548"]
   ["Carl Adolf Gottlieb Bodelsen" "#np16"]
   ["Gunnar Bech" "#np428"]
   ["Ejnar Johannes Nielsen Munksgaard" "#np104"]
   ["André Martinet" "#np94"]
   ["Andreas Peter Damsgaard Blinkenberg" "#np549"]
   ["Eberhard Zwirner" "#np166"]
   ["Svend Ranulf" "#np115"]])

(def real-entity-types
  "The core searchable entities (with index pages)."
  {:entity.type/archive
   {:img-src "/images/archive-svgrepo-com.svg"}

   :entity.type/person
   {:img-src "/images/person-sharp-svgrepo-com.svg"}

   :entity.type/publication
   {:img-src "/images/book-fill.svg"}

   :entity.type/term
   {:img-src "/images/label-svgrepo-com.svg"}

   :entity.type/english-term
   {:img-src "/images/label-svgrepo-com.svg"}

   :entity.type/language
   {:img-src "/images/speech-bubble-svgrepo-com.svg"}

   :entity.type/place
   {:img-src "/images/earth-fill.svg"}

   :entity.type/organisation
   {:img-src "/images/people-group-svgrepo-com.svg"}

   :entity.type/linguistic-organisation
   {:img-src "/images/people-group-svgrepo-com.svg"}})

(def special-entity-types
  "These do not correspond to actual entities, but rather to searchable
  attributes that we want to be able to filter by in searches.

  The keys of the :en->da map correspond to the set of allowed values."
  {:entity.type/unknown
   {:img-src "/images/question-mark-in-circular-shape-svgrepo-com.svg"}

   :document/condition
   ;; TODO: move translations to i18n ns??
   {:en->da  {"transcribed"  "transkriberet"

              "original"     "original"
              "photocopy"    "fotokopi"
              "carbon copy"  "gennemslagspapir"

              ;; form
              "postcard"     "postkort"
              "document"     "dokument"
              "letter"       "brev"

              ;; hand
              "stenographed" "stenografi"
              "typed"        "maskinskrevet"
              "handwritten"  "håndskrevet"}
    :img-src "/images/paper-sheet-svgrepo-com.svg"}})

(def en-attr->da-attr
  (apply merge (map (comp :en->da second) special-entity-types)))

(def en-attr->en-attr
  (zipmap (keys en-attr->da-attr) (keys en-attr->da-attr)))

(def da-attr->en-attr
  (set/map-invert en-attr->da-attr))

(def entity-types
  (merge real-entity-types special-entity-types))

(def repositories
  [{:db/ident         "#narch1"
    :entity/full-name "Louis Hjelmslev's archive"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch2"
    :entity/full-name "Det Universitetshistoriske Arkiv"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch3"
    :entity/full-name "Lingvistisk Bibliotek"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch4"
    :entity/full-name "Eli Fischer-Jørgensen's archive"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch5"
    :entity/full-name "Francis Whitfield's archive"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch6"
    :entity/full-name "Hans Jørgen Uldall's archive"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch7"
    :entity/full-name "Henning Spang-Hanssen's archive"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch8"
    :entity/full-name "Harry Wett Frederiksen's archive"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch9"
    :entity/full-name "Paul Diderichsen's archive"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch10"
    :entity/full-name "Acta Jutlandica"
    :entity/type      :entity.type/archive}
   {:db/ident         "#narch11"
    :entity/full-name "Travaux du Cercle de Linguistique Copenhague"
    :entity/type      :entity.type/archive}])

(def danish-letter->ascii
  {"æ" "ae"
   "Æ" "Ae"
   "å" "aa"
   "Å" "Aa"
   "ø" "oe"
   "Ø" "Oe"})

(def search-rels
  {:document/mention            {:compatible (set (keys real-entity-types))}
   :document/author             {:compatible #{:entity.type/person}}
   :document/sender             {:compatible #{:entity.type/person}}
   :document/sender-location    {:compatible #{:entity.type/place}}
   :document/recipient          {:compatible #{:entity.type/person}}
   :document/recipient-location {:compatible #{:entity.type/place}}
   :document/archive            {:compatible #{:entity.type/archive}}
   :document/language           {:compatible #{:entity.type/language}}
   :document/publication        {:compatible #{:entity.type/publication}}
   :document/place              {:compatible #{:entity.type/place
                                               :entity.type/organisation}}

   ;; Special relations -- various strings treated as searchable entities.
   :document/condition          {:compatible #{:document/condition}}

   ;; Dynamic relations -- expands to a more complex operation during search.
   :correspondent               {:compatible #{:entity.type/person}}})

(def order-rels
  {:document/date-mention {:type "date"}
   :document/sent-at      {:type "date"}})

;; Used for select-keys (NOTE: relies on n<8 keys to keep order)
(def search-result-rels
  [:document/sent-at
   :document/condition
   :document/author
   :document/recipient
   :document/sent-at])

(def reader-rels
  [:document/title
   :document/sent-at
   :document/condition
   :document/author
   :document/recipient])

(def author->id
  {"lh"  "#np56"
   "efj" "#np40"
   "pd"  "#np33"})

(def id->author
  (set/map-invert author->id))
