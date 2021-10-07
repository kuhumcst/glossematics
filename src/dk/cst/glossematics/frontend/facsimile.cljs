(ns dk.cst.glossematics.frontend.facsimile
  "Rendering TEI files in Hiccup using Cuphic and Rescope."
  (:require [shadow.resource :as resource]
            [cuphic.core :as cup]
            [cuphic.xml :as xml]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.stucco.plastic :as plastic]
            [rescope.core :as rescope]
            [rescope.helpers :as helpers]
            [rescope.style :as style]
            [dk.cst.glossematics.frontend.state :as db]))

(def prefix
  "tei")

(def tei-css
  (style/prefix-css prefix (resource/inline "public/css/tei.css")))

(def recap+tei-css
  (str css/shadow-style "\n\n/*\n\t === tei.css ===\n*/\n" tei-css))

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
  (cup/->transformer
    '[:list (... list-items)]

    (fn [{:syms [list-items]}]
      (into [:ul] (for [[tag attr & content] list-items]
                    (into [:li] content))))))

(def ref-as-anchor
  (cup/->transformer
    '[_ {:ref  ref
         :type ?type} ???]

    (fn [{:syms [ref ?type]}]
      [:a {:href  ref
           :title (da-type ?type)}
       [:slot]])))

(def date-as-time
  (cup/->transformer
    '[:date {:when when} ???]

    (fn [{:syms [when]}]
      [:time {:date-time when}
       [:slot]])))

(defn- pb?
  [x]
  (and (vector? x)
       (= :pb (first x))))

;; TODO: doesn't work properly for acc-1992_0005_032_Uldall_1000-tei-final.xml
(def inlined-pbs
  "In certain cases, <pb> tags don't appear at the same level as <p> tags, but
  rather nested inside them. This transformer splits those <p> tags into
  multiple tags and interleaves with the formerly nested <pb> tags."
  (cup/->transformer
    (fn [hv]
      (when (= :p (first hv))
        (let [partitions (partition-by pb? (drop 2 hv))]
          (when (> (count partitions) 1)
            {:p-attr     (second hv)
             :partitions partitions}))))

    (fn [{:keys [p-attr partitions]}]
      ;; TODO: use proper order, e.g. 1, 2, 3, ...
      ;; Add some semi-random extra numbers to new paragraph IDs
      (map-indexed (fn [n partition]
                     (if (and (vector? (first partition))
                              (= :pb (ffirst partition)))
                       (first partition)
                       (into [:p (update p-attr :xml/id #(str % "-" n))]
                             partition)))
                   partitions))))

(defn- fix-rogue-content
  "In some TEI documents, a <PB> tag doesn't always figure as the first elemnent
  inside the <DIV>, so this helper function ensures that any rogue opening
  section is placed inside the first *real* content section after the <PB>."
  [sections]
  (if (pb? (ffirst sections))
    sections
    (let [[rogue-content pb page] sections]
      (into [pb (concat rogue-content page)] (drop 3 sections)))))

(declare inner-stage)

(defn rewrite-page
  [page]
  (cup/rewrite page inner-stage))

(defn update-content!
  "Updates the `carousel-state` when new `kvs` are detected."
  [carousel-state kvs]
  (let [old-kvs (:kvs @carousel-state)]
    (when (not= (map first kvs) (map first old-kvs))
      (reset! carousel-state {:i 0 :kvs kvs}))))

;; TODO: display notes? (currently excluded)
;; Fairly complex transformer that restructures sibling-level page content into
;; an interactive carousel recap component. The large amount of content captured
;; as page content has to be explicitly rewritten in a separate call. Otherwise,
;; it will be skipped entirely.
(def pages-in-carousel
  (cup/->transformer
    '[:body (... content)]

    (fn [{:syms [content]}]
      (let [not-notes?   (comp #(not= "notes" %) :type second)
            [divs notes] (split-with not-notes? content)
            divs-content (apply concat (map #(subvec % 2) divs))
            pages        (->> (partition-by pb? divs-content)
                              (fix-rogue-content)
                              (partition 2)
                              (map (partial apply concat)))
            pp           (count pages)
            kvs          (for [[[_ {:keys [n facs]}] :as page] pages]
                           [(str "Side " n " af " pp "; facs. " facs ".")
                            (into [:<>] (map rewrite-page page))])]
        (update-content! db/reader-pages kvs)
        [plastic/carousel db/reader-pages
         {:aria-label "Facsimile"}]))))

(def default-fn
  (helpers/default-fn {:prefix    "tei"
                       :attr-kmap {:xml/lang :lang
                                   :xml/id   :id}}))

(defn shadow-dom-wrapper
  [old-node new-node]
  (let [node-with-css (constantly [:<> [:style recap+tei-css] new-node])]
    (vary-meta old-node assoc :ref (rescope/shadow-ref node-with-css))))

(def pre-stage
  "Makes actual structural changes to the TEI content."
  {:transformers [inlined-pbs]})

(def inner-stage
  "Makes virtual changes to TEI document features using the shadow DOM."
  {:transformers [ref-as-anchor
                  list-as-ul
                  date-as-time]
   :wrapper      shadow-dom-wrapper
   :default      default-fn})

(def outer-stage
  "Places all TEI pages inside a carousel component in a shadow DOM."
  {:transformers [pages-in-carousel]
   :wrapper      shadow-dom-wrapper
   :default      default-fn})

;; Memoization sadly not feasible - 'pages-in-carousel' relies on a side-effect!
(def rewrite
  #(cup/rewrite % pre-stage outer-stage))

(def parse
  (memoize xml/parse))

(defn tei-xml
  "Parse, postprocess, and display TEI."
  [hiccup]
  [rescope/scope (rewrite hiccup) tei-css])
