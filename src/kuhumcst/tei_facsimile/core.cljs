(ns kuhumcst.tei-facsimile.core
  (:require [shadow.resource :as resource]
            [cuphic.core :as cup]
            [rescope.core :as rescope]
            [rescope.helpers :as helpers]
            [rescope.style :as style]
            [rescope.formats.xml :as xml]))

(def prefix
  "tei")

(def css
  (style/prefix-css prefix (resource/inline "css/tei.css")))

(defn da-type
  [type]
  (let [type->s {"conference" "denne konference"
                 "org"        "denne organisation"
                 "pers"       "denne person"
                 "place"      "dette sted"
                 "publ"       "denne publikation"
                 "receiver"   "denne modtager"
                 "sender"     "denne afsender"}]
    (str "Vis mere om " (type->s type "dette"))))

(def list-as-ul
  (cup/transformer
    :from '[:list +items]
    :to (fn [{:syms [+items]}]
          (into [:ul] (for [[tag attr & content] +items]
                        (into [:li] content))))))

(def ref-as-anchor
  (cup/transformer
    :from '[? {:ref  ?ref
               :type ?type} *]
    :to (fn [{:syms [?ref ?type]}]
          ;; TODO: bug in attr-bindings - now need to check for attr existence
          (when ?ref
            [:a {:href  ?ref
                 :title (da-type ?type)}
             [:slot]]))))

(def wrap-pbs
  (cup/transformer
    :from '[:div * [:<> [:pb] +]]
    :to (fn [{:syms [<>] :as bindings}]
          (let [{:keys [begin end]} (meta <>)
                source (:source (meta bindings))]
            (vec (concat (subvec source 0 begin)
                         [(into [:pbs] (subvec source begin end))]
                         (subvec source end)))))))

(def stages
  [{:transformers [wrap-pbs]}
   {:transformers [ref-as-anchor
                   list-as-ul]
    :wrapper      rescope/shadow-wrapper
    :default      (helpers/default-fn {:prefix    prefix
                                       :attr-kmap {:xml:lang :lang
                                                   :xml:id   :id}})}])

(def rewrite
  (memoize #(cup/rewrite % stages)))

(def parse
  (memoize xml/parse))

(defn tei-xml
  "Parse, postprocess, and display TEI."
  [xml]
  [rescope/scope (-> xml parse rewrite) css])
