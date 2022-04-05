(ns dk.cst.glossematics.frontend.page.reader
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [shadow.resource :as resource]
            [reitit.frontend.easy :as rfe]
            [kitchen-async.promise :as p]
            [dk.cst.cuphic :as cup]
            [dk.cst.cuphic.xml :as xml]
            [rescope.core :as rescope]
            [rescope.helpers :as helpers]
            [rescope.style :as style]
            [dk.cst.stucco.pattern :as pattern]
            [dk.cst.stucco.group :as group]
            [dk.cst.stucco.document :as document]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.glossematics.frontend.page.encyclopedia :as encyclopedia]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.api :as api]))

;; TODO: missing facs http://localhost:8080/app/reader/acc-1992_0005_025_Jakobson_0160-tei-final.xml
;; TODO: acc-1992_0005_024_Holt_0780-final.xml - (count facs) > (count pbs)
;; TODO: acc-1992_0005_024_Holt_0930-final.xml - rogue ">" symbol
;; TODO: acc-1992_0005_024_Holt_0900-final.xml - error on line 150 at column 25
;; TODO: acc-1992_0005_024_Holt_0230-final.xml - note in note?
;; TODO: acc-1992_0005_024_Holt_0170-final.xml - facs wrong order
;; TODO: acc-1992_0005_024_Holt_0530-final.xml - note type=top vs type=above
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

(defn- encyclopedia-href
  [ref]
  (rfe/href ::encyclopedia/entry {:ref (if (str/starts-with? ref "#")
                                         (subs ref 1)
                                         ref)}))

;; TODO: eventually use :as-alias
(defn- search-href
  [ref]
  (rfe/href :dk.cst.glossematics.frontend.page.search/page {}
            (merge (select-keys state/query-defaults [:limit :offset])
                   {'_ ref})))

(def ref-as-anchor
  (cup/->transformer
    '[_ {:ref  ref
         :type ?type} ???]

    (fn [{:syms [ref ?type]}]
      [:a {:href  (search-href ref)
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
  "In some TEI documents, a <PB> tag doesn't always figure as the first element
  inside the <DIV>, so this helper function ensures that any rogue opening
  section is placed inside the first *real* content section after the <PB>."
  [sections]
  (if (pb? (ffirst sections))
    sections
    (let [[rogue-content pb page] sections]
      (into [pb (concat rogue-content page)] (drop 3 sections)))))

;; e.g. acc-1992_0005_032_Uldall_1000-final.xml
;;      acc-1992_0005_032_Uldall_0830-tei-final.xml
(defn- fix-rogue-div
  "In some TEI documents, there is <DIV> inserted as a containing element inside
  the document <DIV>. The contents of this div is pulled out and placed inside
  the parent <DIV>."
  [divs]
  (when (= (count divs) 1)
    (let [div (first divs)]
      (when-let [[tag attr & content :as rogue-div] (get div 4)]
        (when (= tag :div)
          [(into (subvec div 0 4) (concat content (drop 4 divs)))])))))

(defn- flatten-notes
  "Given a polymorphic coll of `notes` return a coll of single note elements.

  This function is needed to deal with the messy situation caused by TEI files
  compiled by hand, where trailing notes are written rather inconsistently."
  [notes]
  (mapcat (fn [[tag attr & content :as item]]
            (case tag
              :div content
              :note [item]
              nil))
          notes))

(defn- with-target
  "Return a predicate that returns true if the note is in the target `document`.
  Note that notes without a specific target document also return true!"
  [document]
  (fn [[tag {:keys [target]}]]
    (if target
      (= target document)
      true)))

(defn collect-notes
  "Put `notes` in a single container, filtering them by `document`."
  [document notes]
  (let [notes (->> (flatten-notes notes)
                   (filter (with-target document)))]
    (when (not-empty notes)
      (into [:div {:type "notes"}] notes))))

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
            divs         (or (fix-rogue-div divs) divs)
            divs-content (apply concat (map #(subvec % 2) divs))
            pages        (->> (partition-by pb? divs-content)
                              (fix-rogue-content)
                              (partition 2)
                              (map (partial apply concat)))
            pp           (count pages)
            container    (subvec (first divs) 0 2)
            kvs          (for [[[_ {:keys [n facs]}] :as page] pages]
                           (let [notes*     (collect-notes facs notes)
                                 page+notes (concat page [notes*])]
                             [(str "Side " n " af " pp "; facs. " facs ".")
                              (rewrite-page (into container page+notes))]))]
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

;; For now, it seems impossible to not wrap every modified component, even if it
;; is a bit ineffecient. The issues are
;;   1) Cuphic deals poorly with Hiccup turning into reagent components.
;;   2) the current Cuphic patterns rely on shadow-dom features, e.g. slot.
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

(defn facs-id->facs-page
  [id]
  (let [url (api/normalize-url (str "/file/" id ".jpg"))]
    [id [document/illustration {:src url :alt (str "Illustration of " id)}]]))

(defn get-facs
  [hiccup]
  (->> (:graphic (cup/scrape hiccup {:graphic '[:graphic {:xml/id id}]}))
       (mapv (comp facs-id->facs-page #(get % 'id)))))

(defn set-content!
  "Change the `document` currently displayed in the reader."
  [document]
  (p/let [url              (api/normalize-url (str "/file/" document))
          tei              (api/fetch url)
          raw-hiccup       (parse tei)
          facs             (get-facs raw-hiccup)
          rewritten-hiccup (cup/rewrite raw-hiccup pre-stage outer-stage)
          tei-kvs          (:kvs @state/tei-carousel)
          missing-count    (- (count facs) (count tei-kvs))
          placeholder      ["N/A" "[content missing]"]]
    (swap! state/reader assoc
           :i 0
           :document document
           :tei tei
           :hiccup rewritten-hiccup
           :facs-kvs (pattern/heterostyled facs shuffle)

           ;; Perhaps a bit confusingly, the value of the :tei-kvs key is set as
           ;; a side-effect of the cup/rewrite call above. Below, the count of
           ;; :tei-kvs is compared to the count of the :facs-kvs and placeholder
           ;; content is inserted for any missing pages. This is done to ensure
           ;; that the two carousel widgets are able to stay synchronized in
           ;; situations where the system *doesn't* produce valid TEI content.
           :tei-kvs (if (not= 0 missing-count)
                      (concat tei-kvs (repeat missing-count placeholder))
                      tei-kvs))))

(defn page
  []
  (let [{:keys [hiccup tei document]} @state/reader
        location*          @state/location
        current-document   (get-in location* [:path-params :document])
        document-selected? (= ::page (get-in location* [:data :name]))
        new-document?      (not= document current-document)]

    ;; Uses a side-effect of the rendering function to load new documents.
    ;; Probably a bad way to do this...
    (when (and document-selected? new-document?)
      (set-content! current-document))

    [:<>
     [:h2 current-document]

     ;; TODO: support metadata-only documents
     (when (and document-selected? hiccup)
       [:div.reader
        [group/combination {:weights [1 1]}
         [pattern/carousel state/facs-carousel]
         [pattern/tabs
          {:i   0
           :kvs (pattern/heterostyled
                  [["Content" ^{:key tei} [rescope/scope hiccup tei-css]]
                   ["TEI" [:pre {:style {:white-space "pre-wrap"
                                         :margin      "1ch"
                                         :padding     "1ch"
                                         :background  "white"}}
                           [:code
                            tei]]]])}
          {:id "tei-tabs"}]]])]))
