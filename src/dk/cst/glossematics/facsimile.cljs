(ns dk.cst.glossematics.facsimile
  (:require [shadow.resource :as resource]
            [cuphic.core :as cup]
            [recap.css :as rc]
            [recap.component.widget.carousel :as carousel]
            [rescope.core :as rescope]
            [rescope.helpers :as helpers]
            [rescope.style :as style]
            [rescope.formats.xml :as xml]))

(def prefix
  "tei")

(def tei-css
  (style/prefix-css prefix (resource/inline "public/css/tei.css")))

(def recap+tei-css
  (str rc/shadow-style "\n\n/*\n\t === tei.css ===\n*/\n" tei-css))

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

(def default-fn
  (helpers/default-fn {:prefix    "tei"
                       :attr-kmap {:xml:lang :lang
                                   :xml:id   :id}}))

(defn custom-wrapper
  [old-node new-node]
  (let [styled-slide (constantly [:<> [:style recap+tei-css] new-node])]
    (vary-meta old-node assoc :ref (rescope/shadow-ref styled-slide))))

(def internal-stage
  {:transformers [ref-as-anchor
                  list-as-ul]
   :wrapper      custom-wrapper
   :default      default-fn})

;; Fairly complex transformer that restructures sibling-level page content into
;; an interactive carousel recap component. The large amount of content captured
;; as page content has to be explicitly rewritten in a separate call. Otherwise,
;; it will be skipped entirely.
(def carousel-pbs
  (cup/transformer
    :from '[:div * [:<> [:pb] +]]
    :to (fn [{:syms [<>] :as bindings}]
          (let [{:keys [begin end]} (meta <>)
                source     (:source (meta bindings))
                pages      (->> (subvec source begin end)
                                (partition-by #(= :pb (first %)))
                                (partition 2)
                                (map (partial apply concat)))
                pp         (count pages)
                kvs        (for [[[_ {:keys [n facs]}] :as page] pages]
                             [(str "Side " n " af " pp "; facs. " facs ".")
                              page])
                rewrite-kv (fn [[k v]]
                             (let [rewrite #(cup/rewrite % [internal-stage])]
                               [k (into [:<>] (map rewrite v))]))]
            [:<>
             [cup/rewrite (subvec source 0 begin) [internal-stage]]
             [carousel/carousel
              {:i   0
               :kvs (map rewrite-kv kvs)}
              {:aria-label "Facsimile"}]]))))

(def all-stages
  [{:transformers [ref-as-anchor
                   list-as-ul
                   carousel-pbs]
    :wrapper      custom-wrapper
    :default      default-fn}])

(def rewrite
  (memoize #(cup/rewrite % all-stages)))

(def parse
  (memoize xml/parse))

(defn tei-xml
  "Parse, postprocess, and display TEI."
  [xml]
  [rescope/scope (-> xml parse rewrite) tei-css])
