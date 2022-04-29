(ns dk.cst.glossematics.static-data)

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

(def entity-types
  {:entity.type/person
   {:entity-label "Person"
    :img-src      "/images/person-sharp-svgrepo-com.svg"}

   :entity.type/publication
   {:entity-label "Publication"
    :img-src      "/images/book-fill.svg"}

   :entity.type/term
   {:entity-label "Term (Danish)"
    :img-src      "/images/label-svgrepo-com.svg"}

   :entity.type/english-term
   {:entity-label "Term (English)"
    :img-src      "/images/label-svgrepo-com.svg"}

   :entity.type/language
   {:entity-label "Language"
    :img-src      "/images/speech-bubble-svgrepo-com.svg"}

   :entity.type/place
   {:entity-label "Place"
    :img-src      "/images/earth-fill.svg"}

   :entity.type/organisation
   {:entity-label "Organisation"
    :img-src      "/images/people-group-svgrepo-com.svg"}

   :entity.type/linguistic-organisation
   {:entity-label "Linguistic organisation"
    :img-src      "/images/people-group-svgrepo-com.svg"}})

(def danish-letter->ascii
  {"æ" "ae"
   "Æ" "Ae"
   "å" "aa"
   "Å" "Aa"
   "ø" "oe"
   "Ø" "Oe"})