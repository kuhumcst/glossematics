(ns kuhumcst.tei-facsimile.core
  (:require [shadow.resource :as resource]
            [meander.epsilon :as m]
            [kuhumcst.rescope.core :as rescope]
            [kuhumcst.rescope.style :as style]
            [kuhumcst.rescope.formats.xml :as xml]))

(def prefix
  "tei")

(def css
  (style/patch-css (resource/inline "css/tei.css") prefix))

(def da-type
  {"conference" "Konference"
   "org"        "Organisation"
   "pers"       "Person"
   "place"      "Sted"
   "publ"       "Publikation"
   "receiver"   "Modtager"
   "sender"     "Afsender"})

(defn- rewrite*
  [element]
  (m/rewrite element
    ;; Substitute TEI lists with HTML lists.
    [:list (m/or {:as ?attr}
                 (m/let [?attr {}])) .
     [:item !x] ...]
    [:ul ?attr .
     [:li !x] ...]

    ;; Surround all ref attributes with hyperlinks.
    [_ {:ref  (m/some ?ref)
        :type ?type} & _]
    [:a {:href  ?ref
         :title (m/app da-type ?type)}
     [:slot]]))

(defn rewrite
  [hiccup]
  (when-let [hiccup* (rewrite* hiccup)]
    (fn [this] hiccup*)))

(def transform
  (xml/patch-fn prefix {} rewrite))

(defn tei-hiccup
  "Transform and display TEI that has already been parsed as hiccup."
  [hiccup]
  (let [hiccup* (xml/transform transform hiccup)
        tags    (rescope/hiccup->tags hiccup*)]
    [rescope/scope hiccup* css tags]))

(defn tei-xml
  "Parse, transform and display TEI."
  [xml]
  [tei-hiccup (xml/parse xml)])
