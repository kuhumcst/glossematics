(ns kuhumcst.tei-facsimile.core
  (:require [shadow.resource :as resource]
            [meander.epsilon :as m]
            [kuhumcst.rescope.core :as rescope]
            [kuhumcst.rescope.style :as style]
            [kuhumcst.rescope.formats.xml :as xml]))

(def prefix
  "tei")

(def css
  (style/prefix-css prefix (resource/inline "css/tei.css")))

(def da-type
  {"conference" "Konference"
   "org"        "Organisation"
   "pers"       "Person"
   "place"      "Sted"
   "publ"       "Publikation"
   "receiver"   "Modtager"
   "sender"     "Afsender"})

;; Needed for postprocessing content inside meander-rewrite.
(declare postprocess)

(defn- meander-rewrite
  [element]
  (m/rewrite element
    ;; Substitute TEI lists with HTML lists.
    [:list (m/or {:as ?attr}
                 (m/let [?attr {}]))
     . [:item & _ :as !x] ...]
    [:ul ?attr
     . [:li (m/app postprocess [:<> !x])] ...]

    ;; Surround all ref attributes with hyperlinks.
    [_ {:ref  (m/some ?ref)
        :type ?type} & _]
    [:a {:href  ?ref
         :title (m/app da-type ?type)}
     [:slot]]))

(defn rewrite
  [hiccup]
  (when-let [hiccup* (meander-rewrite hiccup)]
    (fn [this] hiccup*)))

(def postprocess
  (let [xml-postprocessor (xml/postprocessor prefix {} rewrite)]
    (memoize (partial rescope/postprocess xml-postprocessor))))

(def parse
  (memoize xml/parse))

(defn tei-hiccup
  "Postprocess and display TEI that has already been parsed as hiccup."
  [hiccup]
  [rescope/scope (postprocess hiccup) css])

(defn tei-xml
  "Parse, postprocess, and display TEI."
  [xml]
  [tei-hiccup (parse xml)])
