(ns dk.cst.glossematics.frontend.page.reader
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [shadow.resource :as resource]
            [kitchen-async.promise :as p]
            [reitit.frontend.easy :as rfe]
            [dk.cst.cuphic :as cup]
            [dk.cst.cuphic.xml :as xml]
            [rescope.core :as rescope]
            [rescope.helpers :as helpers]
            [rescope.style :as style]
            [dk.cst.stucco.pattern :as pattern]
            [dk.cst.stucco.group :as group]
            [dk.cst.stucco.document :as document]
            [dk.cst.stucco.dom.keyboard :as kbd]
            [dk.cst.stucco.util.css :as css]
            [dk.cst.glossematics.db.tei :as db.tei]
            [dk.cst.glossematics.frontend.page.search :as search-page]
            [dk.cst.glossematics.frontend.state :as state :refer [db]]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.frontend.i18n :as i18n]
            [dk.cst.glossematics.shared :as shared]))

;; TODO: acc-1992_0005_024_Holt_0780-final.xml - (count facs) > (count pbs)
;; TODO: acc-1992_0005_024_Holt_0930-final.xml - rogue ">" symbol
;; TODO: acc-1992_0005_024_Holt_0170-final.xml - facs wrong order

(def tei-css
  "Styles used for TEI documents specifically. They are written in a regular CSS
  file and then processed to work on the generated HTML."
  (style/prefix-css "tei" (resource/inline "dk/cst/glossematics/public/css/tei.css")))

(def theme+tei-css
  "The complete set of styles (widgets and TEI documents)."
  (str css/shadow-style "\n\n/*\n\t === tei.css ===\n*/\n" tei-css))

;; TODO: convert to i18n ns translations?
(defn da-type
  [type]
  (let [da?     (= "da" @state/language)
        type->s (if da?
                  {"conference" "denne konference"
                   "term"       "dette begreb"
                   "language"   "dette sprog"
                   "org"        "denne organisation"
                   "pers"       "denne person"
                   "place"      "dette sted"
                   "publ"       "denne udgivelse"
                   "receiver"   "denne modtager"
                   "sender"     "denne afsender"}
                  {"conference" "this conference"
                   "term"       "this term"
                   "language"   "this language"
                   "org"        "this organisation"
                   "pers"       "this person"
                   "place"      "this place"
                   "publ"       "this publication"
                   "receiver"   "this recipient"
                   "sender"     "this sender"})]
    (if da?
      (str "Vis mere om " (type->s type "dette"))
      (str "Show more about " (type->s type "this")))))

(def list-as-ul
  (cup/->transformer
    '[:list (... list-items)]

    (fn [{:syms [list-items]}]
      (into [:ul] (for [[tag attr & content] list-items]
                    (into [:li] content))))))

(defn get-comment
  [user entity-id & [target]]
  (->> (get @state/comments entity-id)
       (filter #(and (= target (:comment/target %))
                     (= user (:comment/author %))))
       (first)
       (:comment/body)))

(defn comment-input
  "A smart and relatively keyboard-accessible input widget for adding comments."
  [user entity-id & [target]]
  (let [in       (r/atom (get-comment user entity-id target))
        textarea (r/atom nil)
        save     #(api/add-comment! user entity-id % target)]
    (fn [user entity-id & [target]]
      (let [body     (get-comment user entity-id target)
            tr       (if (= "da" @state/language)
                       i18n/tr-da
                       i18n/tr-en)
            changed? (not= @in body)]
        [:form {:class     "comment-input"
                :key       target
                :method    "post"
                :on-click  (fn [e] (.stopPropagation e))
                :on-submit (fn [e]
                             (.preventDefault e)
                             (save (.get (js/FormData. (.-target e)) "v"))
                             (.focus @textarea))}
         [:img {:class       "comment-input__icon"
                :src         "/images/dialog-svgrepo-com.svg"
                :aria-hidden "true"}]
         [:div.comment-input__widget
          [:textarea {:name          "v"
                      :class         (when changed? "changed")
                      :ref           (fn [elem] (reset! textarea elem))
                      :auto-focus    true
                      :placeholder   (when-not (and (nil? @in) (some? body))
                                       (tr ::comment-p-placeholder))
                      :on-key-down   (fn [e]
                                       ;; prevent outer div capturing keys
                                       (.stopPropagation e))
                      :on-change     (fn [e]
                                       (->> (.-value (.-target e))
                                            (str/trim)
                                            (not-empty)
                                            (reset! in)))
                      :default-value (str body)}]
          (when changed?
            [:input {:type  "submit"
                     :value (cond
                              (and (some? @in) (nil? body))
                              (tr ::save-comment)

                              (nil? @in)
                              (tr ::delete-comment)

                              :else
                              (tr ::save-changes))}])]]))))

(defn comments-list
  [comments]
  [:ul
   (for [{:keys [comment/body
                 comment/author]} comments]
     [:li {:key author}
      author ": " (into [:<>] (interpose [:br] (str/split body #"\n")))])])

(defn commentable
  "Component to make the shadow DOM element with the given `id` commentable."
  [id]
  (let [{:keys [document target]} @state/reader
        ;; Some paragraphs are split by page breaks and have generated IDs.
        ;; In those cases we use the primary paragraph ID as found in TEI file.
        ;; The entire paragraph is therefore selected -- not just the part that
        ;; happened to appear on the page where the user clicked.
        id'            (first (str/split id #"-"))
        user           (shared/assertions->user-id state/assertions)
        other-comments (->> (get @state/comments document)
                            (filter #(and (= target (:comment/target %))
                                          ;; TODO: add this line back in
                                          #_(not= user (:comment/author %)))))
        tr             (if (= "da" @state/language)
                         i18n/tr-da
                         i18n/tr-en)
        targeted?      (= target id')]
    [:section
     {:class       ["commentable" (when targeted? "targeted")]
      :key         id
      :tab-index   (when-not targeted? "0")
      :title       (when-not targeted?
                     (tr ::comment-p-title-1 id'))
      :style       (when targeted?
                     (let [bgs ["#ffc92e20"
                                "#ff663c20"
                                "#779eff20"]
                           n   (dec (parse-long (subs id' 1)))]
                       {:background (nth bgs (rem n 3))}))
      ;; TODO: is more aria stuff is needed?
      :on-key-down kbd/select-handler
      :on-click    (fn [e]
                     (when (empty? (str (js/window.getSelection)))
                       (if (= target id')
                         (swap! state/reader dissoc :target)
                         (swap! state/reader assoc :target id'))))}
     [:slot]
     (when (and targeted? (not-empty other-comments))
       [:details {:class    "targeted__comments"
                  :on-click (fn [e] (.stopPropagation e))}
        [:summary (if (= 1 (count other-comments))
                    (tr ::other-comments)
                    (tr ::other-comments-1 (count other-comments)))]
        [comments-list other-comments]])
     (when targeted?
       [comment-input user document id'])]))

(def commentable-p
  (cup/->transformer
    '[:p {:xml/id id} ???]

    (fn [{:syms [id]}]
      [commentable id])))

(def ref-as-anchor
  (cup/->transformer
    '[_ {:ref  ref
         :type ?type} ???]

    (fn [{:syms [ref ?type]}]
      [:a {:href  (fshared/search-href ref)
           :title (da-type ?type)}
       [:slot]])))

(def language-as-anchor
  (cup/->transformer
    '[_ {:type "language"
         :n    ref} ???]

    (fn [{:syms [ref]}]
      [:a {:href  (fshared/search-href ref)
           :title (da-type "language")}
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


;; e.g. acc-1992_0005_032_Uldall_1000-tei-final.xml
;;      acc-1992_0005_032_Uldall_0830-tei-final.xml
;;      acc-1992_0005_034_Uldall_1180-tei-final.xml
(defn- flatten-div
  "Flatten divs at the top level, pulling the content inside the input `div`.

  In some TEI documents, there is <div> inserted as a containing element inside
  primary the document <div>. The contents of this div is pulled out and placed
  inside the parent <div>."
  [div]
  (reduce (fn [result x]
            (if (and (vector? x)
                     (= (first x) :div))
              (into result (drop 2 x))                      ; removing :div + {}
              (conj result x)))
          []
          div))

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
      (= (db.tei/fix-facsimile-id target) document)
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

(defn- entity-aware
  "Apply `entity` metadata knowledge to the Hiccup `container` element."
  [{:keys [document/condition] :as entity} container]
  (let [handwritten? (and (get condition "handwritten")
                          (not (get condition "typed")))]
    (cond-> container

      ;; Fully handwritten documents are *NOT* marked as such in the text body,
      ;; but rather in the document header, so that knowledge needs to be
      ;; marked directly in the container element.
      handwritten? (assoc-in [1 :rend] "handwritten"))))

;; Fairly complex transformer that restructures sibling-level page content into
;; a stucco carousel component. The large amount of content captured as page
;; content has to be explicitly rewritten in a separate call; otherwise, it will
;; be skipped entirely.
(defn pages-in-carousel
  "Get an `entity`-aware transformer for arranging a TEI document into pages."
  [entity]
  (cup/->transformer
    '[:body (... content)]

    (fn [{:syms [content]}]
      (let [notes        #{"note" "notes"}                  ; both are in use...
            not-notes?   (comp (complement notes) :type second)
            [divs notes] (split-with not-notes? content)
            divs         (if (= (count divs) 1)
                           [(flatten-div (first divs))]
                           divs)
            divs-content (apply concat (map #(subvec % 2) divs))
            pages        (->> (partition-by pb? divs-content)
                              (fix-rogue-content)
                              (partition 2)
                              (map (partial apply concat)))
            pp           (count pages)
            container    (entity-aware entity (subvec (first divs) 0 2))
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
                  language-as-anchor
                  commentable-p
                  list-as-ul
                  date-as-time]
   :wrapper      shadow-dom-wrapper
   :default      default-fn})

;; TODO: still buggy when selecting cross page p, e.g. http://localhost:8080/app/reader/acc-1992_0005_030_Western_0120-tei-final.xml
(def cited-stage
  (update inner-stage :transformers (partial remove #{commentable-p})))

;; Note that this step *cannot* be memoised since the document rendering relies
;; on side-effects executed inside the 'pages-in-carousel' transformation.
(defn ->outer-stage
  "Places all TEI pages inside a carousel component in a shadow DOM."
  [entity]
  {:transformers [(pages-in-carousel entity)]
   :wrapper      shadow-dom-wrapper
   :default      default-fn})

(def parse
  (memoize xml/parse))

(defn facs-id->facs-page
  [tr id]
  (let [url (fshared/backend-url (str "/file/" id ".jpg"))]
    [id [document/illustration {:src url
                                :alt (tr ::illustration-of-1 id)}]]))

(defn normalize-facs
  "Turn `raw-facsimile` into a sorted sequential collection."
  [raw-facsimile]
  (cond
    (coll? raw-facsimile)
    (sort raw-facsimile)

    (some? raw-facsimile)
    [raw-facsimile]))

;; Keep track of document fetches
(def ^:dynamic *current-fetch* nil)

(defn set-content!
  "Change the `document` currently displayed in the reader.

  Optionally, an `xml` string may be provided to parse as a TEI document.
  This feature is used to preview local TEI documents in Glossematics."
  [document & [xml]]
  (set! *current-fetch* document)
  ;; Should not display old state while waiting for the network request.
  (when (not= document (:document @state/reader))
    (swap! state/reader assoc :i 0 :document nil))

  ;; Need not be synced with other document-related fetches.
  (api/update-comments! document)

  ;; TODO: fix :tei-kvs side-effect, makes it hard to implement history/cache
  (p/let [tei              (or xml (api/fetch (str "/file/" document)))
          entity           (if xml
                             (-> (db.tei/->triples document xml)
                                 (db.tei/triples->entity))
                             (api/fetch (str "/entity/" document)))
          raw-hiccup       (parse tei)
          tr               (i18n/->tr)
          facs             (->> (normalize-facs (:document/facsimile entity))
                                (mapv (partial facs-id->facs-page tr)))
          outer-stage      (->outer-stage entity)
          rewritten-hiccup (cup/rewrite raw-hiccup pre-stage outer-stage)
          tei-kvs          (:kvs @state/tei-carousel)
          missing-count    (- (count facs) (count tei-kvs))
          placeholder      (tr ::placeholder)]
    (swap! state/reader assoc

           :document document
           :target nil
           :entity entity
           :tei tei
           :raw-hiccup raw-hiccup
           :hiccup rewritten-hiccup
           :facs-kvs facs

           ;; Perhaps a bit confusingly, the value of the :tei-kvs key is set as
           ;; a side-effect of the cup/rewrite call above. Below, the count of
           ;; :tei-kvs is compared to the count of the :facs-kvs and placeholder
           ;; content is inserted for any missing pages. This is done to ensure
           ;; that the two carousel widgets are able to stay synchronized in
           ;; situations where the system *doesn't* produce valid TEI content.
           :tei-kvs (if (not= 0 missing-count)
                      (concat tei-kvs (repeat missing-count placeholder))
                      tei-kvs))))

(defn entity-meta
  [tr search-state entity]
  (let [entity' (dissoc entity :file/extension)             ; not interesting
        kvs     (concat (remove nil? (for [k sd/reader-rels]
                                       (when-let [v (get entity' k)]
                                         [k v])))
                        (sort-by first (apply dissoc entity' sd/reader-rels)))]
    [fshared/metadata-table tr search-state entity kvs]))

(defn pdf-object
  [pdf-src]
  [:object {:data  pdf-src
            :type  "application/pdf"
            :style {:width  "100%"
                    :height "calc(100vh - 102px)"}}
   [:a {:href pdf-src}
    "Download facsimile"]])

(defn nth-document!
  [n]
  (let [{:keys [results]} @state/search
        {:keys [limit]} @state/query]
    (cond
      (>= n limit)
      (do
        (swap! state/query update :offset + limit)
        (search-page/fetch-results!
          {:query-params (search-page/state->params @state/query)}
          #(nth-document! 0)))

      (< n 0)
      (do
        (swap! state/query update :offset - limit)
        (search-page/fetch-results!
          {:query-params (search-page/state->params @state/query)}
          #(nth-document! (dec limit))))

      :else
      (do
        (swap! state/search assoc :i n)
        (rfe/push-state ::page {:document (:file/name (nth results n))})))))

;; TODO: redo the .search-result__paging CSS now that it fills two roles
(defn reader-paging
  [tr results i {:keys [offset limit] :as query-state}]
  [:div.search-result__paging
   [:div.input-row
    [:button {:disabled (= i offset 0)
              :on-click #(nth-document! (dec i))}
     [tr ::search-page/prev]]
    [:select {:on-change #(nth-document! (js/parseInt (.-value (.-target %))))
              :value     i}
     (when (> offset 0)
       [:option {:value -1}
        (tr ::prev-results)])
     (for [entity results
           :let [n    (:i (meta entity))
                 file (:file/name entity)]]
       [:option {:key   file
                 :value n}
        file])
     (when (< (+ offset limit) (:total (meta results)))
       [:option {:value (+ offset limit)}
        (tr ::next-results)])]
    [:button {:disabled (= (dec (:total (meta results)))
                           (+ i offset))
              :on-click #(nth-document! (inc i))}
     [tr ::search-page/next]]]])

(defn comments-tab
  [document]
  (let [{:keys [raw-hiccup target]} @state/reader
        user (shared/assertions->user-id state/assertions)]
    [:div.reader-content
     (when-let [comments (get @state/comments document)]
       [:details
        [:summary "Existing comments"]
        (for [{:keys [comment/body
                      comment/target
                      comment/author]} comments]
          [:li {:key (if target
                       (keyword author target)
                       (keyword author))}
           "@" target ", " author ": " body])])
     (when target
       (let [pattern [:p {:xml/id target} '???]
             p       (-> raw-hiccup
                         (cup/select-one pattern)
                         (cup/rewrite cited-stage))]
         [:blockquote #_{:cite target}
          [rescope/scope p tei-css]]))
     [comment-input user document target]]))

(defn page
  []
  (let [{:keys [hiccup raw-hiccup tei document entity]} @state/reader
        {:keys [id->name results i] :as search-state} @state/search
        query-state        @state/query
        tr                 (i18n/->tr)
        location*          @state/location
        current-document   (get-in location* [:path-params :document])
        local-preview?     (empty? current-document)
        document-selected? (= ::page (get-in location* [:data :name]))
        new-document?      (not= document current-document)
        {:keys [document/condition document/facsimile]} entity
        body?              (get condition "transcribed")
        paging?            (and i (> (count results) 1))
        pdf-src            (and (not body?)
                                (string? facsimile)
                                (str/ends-with? facsimile ".pdf")
                                (fshared/backend-url (str "/file/" facsimile)))]

    ;; Uses a side-effect of the rendering function to load new documents.
    ;; Probably a bad way to do this...
    (when (and (not local-preview?)
               document-selected?
               new-document?
               (not= current-document *current-fetch*))
      (set-content! current-document))

    [:article {:class (if local-preview?
                        "reader-preview-page"
                        "reader-page")}
     (when local-preview?
       [:input {:aria-label (tr ::local-file)
                :type       "file"
                :on-change  (fn [e]
                              (when-let [file (.item e.target.files 0)]
                                (.then (.text file)
                                       (fn [s]
                                         (set-content! (.-name file) s)))))}])

     (when paging?
       [reader-paging tr results i query-state])

     (when hiccup
       (if local-preview?
         ;; Only for previewing TEI parsing functionality.
         [pattern/tabs
          {:i   0
           :kvs (pattern/heterostyled
                  [[[tr ::transcription]
                    ^{:key tei} [rescope/scope hiccup tei-css]]

                   ["Metadata"
                    (when id->name
                      [:div.reader-content
                       [entity-meta tr search-state entity]])]

                   ["TEI"
                    [:pre.reader-content
                     [:code {:style {:white-space "pre-wrap"}}
                      tei]]]])}

          {:id "tei-tabs"}]

         ;; The primary page, displaying data fetched from the server.
         [group/combination {:weights [1 1]}
          (if pdf-src
            [pdf-object pdf-src]
            [pattern/carousel state/facs-carousel])
          [pattern/tabs
           {:i   0
            :kvs (cond->>
                   [(with-meta
                      ["Metadata"
                       (when id->name
                         [:div.reader-content
                          [entity-meta tr search-state entity]])]
                      {:style {:background "var(--tab-background-2)"}})

                    (with-meta
                      ["TEI"
                       [:pre.reader-content
                        [:code {:style {:white-space "pre-wrap"}}
                         tei]]]
                      {:style {:background "var(--tab-background-3)"}})

                    (with-meta
                      [[tr ::comments]
                       [comments-tab document]]
                      {:style {:background "var(--background)"}})]

                   body?
                   (into
                     [(with-meta
                        [[tr ::transcription]
                         ^{:key tei} [rescope/scope hiccup tei-css]]
                        {:style {:background "var(--tab-background-1)"}})]))}
           {:id "tei-tabs"}]]))

     (when paging?
       [reader-paging tr results i query-state])]))
