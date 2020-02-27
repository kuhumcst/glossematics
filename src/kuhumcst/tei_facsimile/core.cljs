(ns kuhumcst.tei-facsimile.core
  (:require [shadow.resource :as resource]
            [meander.epsilon :as m]
            [kuhumcst.rescope.core :as rescope]
            [kuhumcst.rescope.hiccup :as hic]
            [kuhumcst.rescope.style :as style]
            [kuhumcst.rescope.formats.xml :as xml]))

(def prefix
  "tei")

(def css
  (style/prefix-css prefix (resource/inline "css/tei.css")))

(defn ref-title
  [type]
  (let [type->s {"conference" "denne konference"
                 "org"        "denne organisation"
                 "pers"       "denne person"
                 "place"      "dette sted"
                 "publ"       "denne publikation"
                 "receiver"   "denne modtager"
                 "sender"     "denne afsender"}]
    (str "Vis mere om " (type->s type "dette"))))

;; Needed for recursively postprocessing content from inside the injector.
(declare postprocess)

(defn- injector
  [node]
  (some-> (m/rewrite node
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
                 :title (m/app ref-title ?type)}
             [:slot]])
          (constantly)))

(def postprocess
  (memoize #(hic/postprocess % {:prefix prefix, :injector injector})))

(def parse
  (memoize xml/parse))

(defn tei-xml
  "Parse, postprocess, and display TEI."
  [xml]
  [rescope/scope (-> xml parse postprocess) css])
