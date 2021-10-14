(ns dk.cst.glossematics.frontend.page.reader
  (:require [clojure.string :as str]
            [shadow.resource :as resource]
            [reagent.core :as r]
            [kitchen-async.promise :as p]
            [cuphic.core :as cup]
            [cuphic.xml :as xml]
            [rescope.core :as rescope]
            [rescope.helpers :as helpers]
            [rescope.style :as style]
            [dk.cst.stucco.util.state :as state-util]
            [dk.cst.stucco.plastic :as plastic]
            [dk.cst.stucco.foundation :as foundation]
            [dk.cst.stucco.surface :as surface]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.api :as api]))

;; TODO: acc-1992_0005_024_Holt_0780-final.xml - (count facs) > (count pbs)
;; TODO: acc-1992_0005_032_Uldall_1000-final.xml - pbs not captured
;; TODO: acc-1992_0005_024_Holt_0930-final.xml - rogue ">" symbol
;; TODO: acc-1992_0005_024_Holt_0900-final.xml - error on line 150 at column 25
;; TODO: acc-1992_0005_024_Holt_0230-final.xml - note in note?
;; TODO: acc-1992_0005_024_Holt_0180-final.xml - multiple notes?
;; TODO: acc-1992_0005_024_Holt_0170-final.xml - facs wrong order
;; TODO: acc-1992_0005_024_Holt_0530-final.xml - note type=top vs type=above
;; TODO: acc-1992_0005_024_Holt_1330-final.xml - just div, not div type=notes
;; TODO: in general: why resp attr used for hand/machine, while hand attr used for people?

(defonce tabs-state
  (r/cursor state/reader [:tabs]))

(defonce facsimile-pages
  (state-util/derive state/reader-pages {:kvs [[]]}))

(def prefix
  "tei")

(def tei-css
  (style/prefix-css prefix (resource/inline "public/css/tei.css")))

(def theme+tei-css
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
                           (let [page+notes (concat page notes)]
                             [(str "Side " n " af " pp "; facs. " facs ".")
                              (into [:<>] (map rewrite-page page+notes))]))]
        (update-content! state/reader-pages kvs)
        [plastic/carousel state/reader-pages
         {:aria-label "Facsimile"}]))))

(def default-fn
  (helpers/default-fn {:prefix    "tei"
                       :attr-kmap {:xml/lang :lang
                                   :xml/id   :id}}))

;; TODO: investigate possibility of having fewer components wrapped
(defn shadow-dom-wrapper
  [old-node new-node]
  (let [node-with-css (constantly [:<> [:style theme+tei-css] new-node])]
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

(def parse
  (memoize xml/parse))

(defn tei-xml
  "Parse, postprocess, and display TEI."
  [hiccup]
  [rescope/scope (cup/rewrite hiccup pre-stage outer-stage) tei-css])

(defn mk-tabs
  [tei hiccup]
  (plastic/heterostyled
    [["Content" ^{:key tei} [tei-xml hiccup]]
     ["TEI" [:pre {:style {:white-space "pre-wrap"
                           :margin      "1ch"
                           :padding     "1ch"
                           :background  "white"}}
             [:code
              tei]]]]))

(defn facs-id->facs-page
  [id]
  (let [[filename ext] (str/split id #"\.")
        url (api/normalize-url (str "/files/facsimile/" filename ".jpg"))]
    [filename
     [surface/illustration {:src url
                            :alt (str "Illustration of " filename)}]]))

(defn get-facs
  [hiccup]
  (->> (:graphic (cup/scrape hiccup {:graphic '[:graphic {:xml/id id}]}))
       (mapv (comp facs-id->facs-page #(get % 'id)))))

(defn set-content!
  [filename]
  (p/let [url    (get @state/tei-files filename)
          tei    (api/fetch url)
          hiccup (parse tei)]
    (swap! state/reader assoc :current-file filename)
    (swap! facsimile-pages assoc
           :i 0
           :kvs (plastic/heterostyled (get-facs hiccup) shuffle))
    (swap! state/reader assoc-in [:tabs :kvs] (mk-tabs tei hiccup))))

;; Currently, relies on browser caching to avoid re-fires.
(defn fetch-data!
  []
  (p/let [files (api/fetch "/files/tei")]
    (->> (for [url files]
           [(last (str/split url #"/")) url])
         (into {})
         (reset! state/tei-files))
    (when (not (:current-file @state/reader))
      (set-content! "acc-1992_0005_024_Holt_0230-final.xml"))))

(defn page
  []
  (let [{:keys [current-file]} @state/reader]
    [:<>
     [:h2 current-file]
     [:p
      [:label "TEI-fil: "
       [:select {:key           current-file
                 :default-value current-file
                 :on-change     (fn [e] (set-content! (.. e -target -value)))}
        (for [[k _] (sort @state/tei-files)]
          ^{:key k} [:option {:value k}
                     k])]]]
     [:div.reader
      (when (not-empty (:kvs @tabs-state))
        [foundation/combination
         {:vs      [[plastic/carousel facsimile-pages]
                    [plastic/tabs tabs-state {:id "tei-tabs"}]]
          :weights [1 1]}])]]))
