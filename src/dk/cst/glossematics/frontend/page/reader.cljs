(ns dk.cst.glossematics.frontend.page.reader
  (:require [clojure.string :as str]
            [shadow.resource :as resource]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            [kitchen-async.promise :as p]
            [cuphic.core :as cup]
            [cuphic.xml :as xml]
            [rescope.core :as rescope]
            [rescope.helpers :as helpers]
            [rescope.style :as style]
            [dk.cst.stucco.pattern :as pattern]
            [dk.cst.stucco.group :as group]
            [dk.cst.stucco.document :as document]
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

(def tei-css
  "Styles used for TEI documents specifically. They are written in a regular CSS
  file and then processed to work on the generated HTML."
  (style/prefix-css "tei" (resource/inline "public/css/tei.css")))

(def theme+tei-css
  "The complete set of styles (widgets and TEI documents)."
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

;; Unlike the 'outer-stage', the 'inner-stage' transformations can be safely
;; memoised since they don't have any side-effects.
(def rewrite-page
  (memoize #(cup/rewrite % inner-stage)))

(defn update-tei-carousel!
  "Updates the `carousel-state` when new `kvs` are detected."
  [carousel-state kvs]
  (let [old-kvs (:kvs @carousel-state)]
    (when (not= (map first kvs) (map first old-kvs))
      (reset! carousel-state {:i 0 :kvs kvs}))))

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

        ;; Currently, TEI data is updated on the page by way of a side-effect.
        ;; I'm unsure if there is a better way to do this.
        (update-tei-carousel! state/tei-carousel kvs)
        [pattern/carousel state/tei-carousel
         {:aria-label "Facsimile"}]))))

(def default-fn
  "This function is applied as a final step in every transformation. Each XML
  tag is prefixed with 'tei-' making it a valid HTML tag name, while xml:lang
  and xml:id are both converted into the non-namespaced HTML varieties."
  (helpers/default-fn {:prefix    "tei"
                       :attr-kmap {:xml/lang :lang
                                   :xml/id   :id}}))

;; TODO: investigate possibility of having fewer components wrapped
(defn shadow-dom-wrapper
  "Each node is wrapped in a shadow DOM, allowing for an inlined style element
  and general isolation from the outer document style.

  This mostly preserves the XML structure in the generated HTML, while also
  allowing for discreet structural changes using <slot>."
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

;; Note that this step *cannot* be memoised since the document rendering relies
;; on side-effects executed inside the 'pages-in-carousel' transformation.
(def outer-stage
  "Places all TEI pages inside a carousel component in a shadow DOM."
  {:transformers [pages-in-carousel]
   :wrapper      shadow-dom-wrapper
   :default      default-fn})

(def parse
  (memoize xml/parse))

(defn mk-tabs
  [tei hiccup]
  (pattern/heterostyled
    [["Content" ^{:key tei} [rescope/scope hiccup tei-css]]
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
     [document/illustration {:src url
                             :alt (str "Illustration of " filename)}]]))

(defn get-facs
  [hiccup]
  (->> (:graphic (cup/scrape hiccup {:graphic '[:graphic {:xml/id id}]}))
       (mapv (comp facs-id->facs-page #(get % 'id)))))

;; NOTE: :tei-kvs is loaded as a side-effect of the cup/rewrite call!
(defn set-content!
  "Change the `document` currently displayed in the reader."
  [document]
  (p/let [url              (api/normalize-url (str "/files/tei/" document))
          tei              (api/fetch url)
          raw-hiccup       (parse tei)
          facs             (get-facs raw-hiccup)
          rewritten-hiccup (cup/rewrite raw-hiccup pre-stage outer-stage)]
    (swap! state/reader assoc
           :i 0
           :document document
           :tei tei
           :hiccup rewritten-hiccup
           :facs-kvs (pattern/heterostyled facs shuffle))))

;; Currently, relies on browser caching to avoid re-fires.
(defn fetch-document-list!
  []
  (p/let [files (api/fetch "/files/tei")]
    (->> (for [url files]
           [(last (str/split url #"/")) url])
         (into {})
         (reset! state/tei-files))))

(defn page
  []
  (let [{:keys [hiccup tei document]} @state/reader
        location*          @state/location
        current-document   (get-in location* [:path-params :document])
        document-selected? (= ::document (get-in location* [:data :name]))
        new-document?      (not= document current-document)]

    ;; Uses a side-effect of the rendering function to load new documents.
    ;; Probably a bad way to do this...
    (when (and document-selected? new-document?)
      (set-content! current-document))

    [:<>
     [:h2 current-document]
     [:p
      [:label "TEI-fil: "
       [:select {:value     (or (and document-selected? document) "")
                 :on-change (fn [e]
                              (let [v (.. e -target -value)]
                                (rfe/push-state ::document {:document v})))}
        [:option {:value "" :disabled true} "--"]
        (for [[k _] (sort @state/tei-files)]
          ^{:key k} [:option {:value k}
                     k])]]]

     (when (and document-selected? hiccup)
       [:div.reader
        [group/combination
         {:vs      [[pattern/carousel state/facs-carousel]
                    [pattern/tabs
                     (r/atom {:i   0
                              :kvs (mk-tabs tei hiccup)})
                     {:id "tei-tabs"}]]
          :weights [1 1]}]])]))
