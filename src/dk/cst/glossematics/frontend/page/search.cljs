(ns dk.cst.glossematics.frontend.page.search
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [reitit.frontend.easy :as rfe]
            [dk.cst.stucco.pattern :as stp]
            [dk.cst.glossematics.frontend.shared :as shared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.api :as api]))

;; TODO: bad ref for LOUIS HJELMSLEV (missing "np") http://localhost:9000/app/reader/acc-1992_0005_035_Uldall_0110-tei-final.xml
;; TODO: missing name http://localhost:8080/app/search?limit=10&offset=0&_=%23npl737

(defn params->items
  [query-params id->name]
  (->> (dissoc query-params :limit :offset :order-by :from :to)
       (mapcat (fn [[k v]]
                 (map (fn [id]
                        (with-meta [(if (= k :_) '_ k) id]
                                   {:label (get id->name id)}))
                      (str/split v #","))))))

(defn parse-params
  [{:keys [order-by limit offset from to] :as query-params} id->name]
  (let [items (params->items query-params id->name)]
    (cond-> {:items  (vec items)
             :unique (set items)}
            order-by (assoc :order-by (->> (str/split order-by #",")
                                           (mapv (comp keyword str/trim))))
            limit (assoc :limit (js/parseInt limit))
            offset (assoc :offset (js/parseInt offset))
            from (assoc :from from)
            to (assoc :to to))))

(def backgrounds
  (cycle stp/background-colours))

(defn- add-backgrounds
  [kvs]
  (stp/heterostyled kvs identity backgrounds))

(defn ?query-reset!
  "Conditionally reset the search query state from query-params.

  Local-only query state is not considered at all; only data transferred via
  query-params decide whether the state should be reset. When the query-params
  already match the query state, no state will be replaced. The primary reason
  for this behaviour is to only fully update the state when coming from outside
  the search page, e.g. when clicking on a hyperlink leading to a search."
  []
  (let [{:keys [id->name]} @state/search
        {:keys [query-params]} @state/location]
    (when (and id->name query-params)
      (let [query (merge state/query-defaults
                         (parse-params query-params id->name))]
        (when (not= (apply dissoc query state/local-query-keys)
                    (apply dissoc @state/query state/local-query-keys))
          (->> (update query :items add-backgrounds)
               (reset! state/query)))))))

(defn fetch-metadata!
  []
  (.then (api/fetch "/search/metadata")
         (fn [{:keys [search-metadata top-30-kvs]}]
           (let [name->id (apply merge (vals search-metadata))
                 id->name (set/map-invert name->id)]
             (swap! state/search assoc
                    ;; The entities with the highest document frequency are
                    ;; placed at the top, the rest sorted according to the name.
                    :name-kvs (->> (apply dissoc name->id top-30-kvs)
                                   (sort-by first)
                                   (concat top-30-kvs))
                    :name->id name->id
                    :id->name id->name))
           (?query-reset!))))

(defn items->query-params
  [items]
  (->> (for [[k v] items]
         {k v})
       (apply merge-with (fn [& args] (str/join "," args)))))

(defn fetch-results!
  [{:keys [query-params]}]
  (if (empty? (apply dissoc query-params state/query-result-set-keys))
    (do
      (swap! state/search dissoc :results)
      (reset! state/query state/query-defaults))
    (.then (api/fetch "/search" {:query-params query-params})
           #(do
              (swap! state/search assoc :results %)
              (?query-reset!)))))

(defn- add-kv
  "Add a `kv` to the :items in the passed-in `state` with background `n`."
  [{:keys [unique items n] :as state} kv]
  (if-not (get unique kv)
    ;; n is incremented when the background of the last item matches what would
    ;; resolved by (get backgrounds n), making sure that the system itself
    ;; doesn't generate the same colour background for adjacent items.
    (let [n'  (if (and (not-empty items)
                       (= (nth backgrounds n)
                          (-> items last meta :style :background)))
                (inc n)
                n)
          kv' (stp/add-background backgrounds n' kv)]
      (-> state
          (update :items conj kv')
          (update :unique conj kv')))
    state))

(defn- remove-kv
  [{:keys [items] :as old-state} kv]
  (-> old-state
      (assoc :items (vec (remove (partial = kv) items))
             :offset 0)
      (update :unique disj kv)))

(defn multi-input-data
  [name-kvs]
  (fn [_]
    [:datalist {:id "names"}
     (for [[entity-name id] name-kvs]
       [:option {:key   [entity-name id]
                 :value entity-name}])]))

(defn- e->v
  [e]
  (.-value (.-target e)))

(defn- s->rel
  [s]
  (cond
    (empty? s) nil
    (= s "_") '_
    :else (keyword s)))

(defn- rel->s
  [rel]
  (cond
    (nil? rel) ""
    (= rel '_) "_"
    :else (subs (str rel) 1)))

;; TODO: denote compatible input types, e.g. location, individual, etc.
;; TODO: make collection, repository searchable too (add to datalist)
(def search-rels
  {:document/mention            {:label "mentioned"}
   :document/author             {:label "author"}
   :document/sender             {:label "sender"}
   :document/sender-location    {:label "sender location"}
   :document/recipient          {:label "recipient"}
   :document/recipient-location {:label "recipient location"}
   #_#_:document/repository {:label "repository"}
   #_#_:document/collection {:label "collection"}})

(def order-rels
  {:document/date-mention {:label "mentioned date"
                           :type  "date"}
   :document/sent-at      {:label "date"
                           :type  "date"}})

(def other-rels
  "Relations that are not available as search/order params."
  {:document/title     {:label "title"}
   :document/form      {:label "form"}
   :document/hand      {:label "representation"}
   :document/facsimile {:label "facsimile"}
   :file/name          {:label "file name"}
   :file/extension     {:label "file extension"}
   :file/body?         {:label "transcribed"}})


;; Used for select-keys (NOTE: relies on n<8 keys to keep order)
(def search-result-rels
  [:document/sent-at
   :document/form
   :document/author
   :document/recipient
   :file/body?])

(def rel->label
  (->> (merge search-rels order-rels other-rels)
       (map (juxt key (comp :label val)))
       (into {})))

(defn- state->params
  [{:keys [items limit offset order-by from to]}]
  (when-let [params (items->query-params items)]            ; clear other params
    (let [[rel] order-by]
      (cond-> params
              rel (assoc :order-by (str/join "," (map rel->s order-by)))
              limit (assoc :limit limit)
              offset (assoc :offset offset)
              from (assoc :from from)
              to (assoc :to to)))))

(defn- select-opts
  [rels & [default-option]]
  [:<>
   default-option
   (->> (sort-by (comp :label second) rels)
        (map (fn [[rel {:keys [label]}]]
               [:option {:key rel :value (rel->s rel)} label])))])

(defn- update!
  []
  (rfe/push-state ::page {} (state->params @state/query)))

(defn- submit
  []
  (let [{:keys [name->id]} @state/search
        {:keys [rel in unique]} @state/query]
    (if-let [id (name->id in)]
      (if-not (get unique [rel id])
        (do
          (swap! state/query add-kv (with-meta [rel id] {:label in}))
          (swap! state/query update :n inc)
          (swap! state/query assoc
                 :in ""
                 :offset 0)
          (swap! state/search dissoc :results)
          (update!))
        (swap! state/query assoc :not-allowed? true))
      (swap! state/query assoc
             :bad-input? true
             :not-allowed? true))))


(defn search-result-order
  [[order-rel order-dir :as order-by]]
  (let [->order #(fn [e]
                   (swap! state/query assoc-in [:order-by %] (s->rel (e->v e)))
                   (swap! state/query assoc :offset 0 :from nil :to nil)
                   (update!))]
    [:div.input-row
     [:label {:for "sort-key"} "Sort by "]
     [:select {:id        "sort-key"
               :value     (rel->s order-rel)
               :on-change (->order 0)}
      [select-opts order-rels [:option {:value ""} "nothing"]]]

     [:select {:id        "sort-dir"
               :disabled  (nil? order-rel)
               :value     (rel->s order-dir)
               :on-change (->order 1)}
      [:option {:value "asc"} "▲ ascending"]
      [:option {:value "desc"} "▼ descending"]]]))

(defn search-result-between
  [[order-rel _ :as order-by] from to]
  (let [order-type (get-in order-rels [order-rel :type] "date")
        ->tofrom   #(fn [e]
                      (swap! state/query assoc :offset 0)
                      (if-let [v (not-empty (e->v e))]
                        (swap! state/query assoc % v)
                        (swap! state/query dissoc %))
                      (update!))]
    [:div.input-row
     [:label {:for "from"} "Limit from "]
     [:input {:id        "from"
              :type      order-type
              :value     from
              :max       to
              :class     (when from
                           "good-input")
              :on-change (->tofrom :from)}]

     [:label {:for "to"} " to "]
     [:input {:id        "to"
              :type      order-type
              :value     to
              :min       from
              :class     (if (and from to
                                  (> (js/Date.parse from)
                                     (js/Date.parse to)))
                           ["bad-input"
                            "not-allowed"]
                           (when to
                             "good-input"))
              :on-change (->tofrom :to)}]]))

(defn search-result-postprocessing
  "Widgets for ordering results and limiting the result set to a certain range."
  []
  (let [{:keys [order-by from to]} @state/query
        {:keys [results]} @state/search
        [order-rel] order-by]
    (when-not (and (empty? results) (nil? order-rel))
      [:div.search-result__options
       [search-result-order order-by]
       (when order-rel
         [search-result-between order-by from to])])))

(defn search-criteria
  [items]
  [:fieldset
   [:legend "Search criteria"
    [:button {:type     "button"                            ; prevent submit
              :title    "Clear all criteria"
              :on-click (fn [e]
                          (.preventDefault e)
                          (swap! state/query assoc
                                 :items []
                                 :unique #{})
                          (update!))}
     "x"]]

   (for [[k v :as kv] items
         :let [{:keys [label style]} (meta kv)]]
     [:<> {:key kv}
      [:span.search-form__item {:style style}
       (when (not= k '_)
         [:span.search-form__item-key (:label (search-rels k)) " → "])
       [:span.search-form__item-label label]
       [:button {:type     "button"                         ; prevent submit
                 :title    "Remove criterion"
                 :on-click (fn [e]
                             (.preventDefault e)
                             (swap! state/query remove-kv kv)
                             (update!))}
        "x"]]
      " "])])

(defn search-form
  []
  (let [{:keys [name-kvs name->id]} @state/search
        set-in  (fn [e]
                  (let [in (e->v e)]
                    (swap! state/query assoc
                           :in in
                           :bad-input? false
                           :not-allowed? false)))
        set-rel (fn [e]
                  (swap! state/query assoc :rel (s->rel (e->v e)))
                  (submit))]

    (fn [_ _]
      (let [{:keys [order-by items in rel bad-input? not-allowed?]} @state/query
            [order-rel] order-by
            good-input? (and (not-empty in) (name->id in))]
        [:form.search-form
         {:on-submit (fn [e] (.preventDefault e) (submit))}

         [:div.input-row
          [:label {:for "v"} "Look for "]
          [:input {:type        "list"
                   :list        "names"
                   :placeholder "e.g. place, person, organisation, …"
                   :class       [(when not-allowed?
                                   "not-allowed")
                                 (when bad-input?
                                   "bad-input")
                                 (when good-input?
                                   "good-input")]
                   :id          "v"
                   :disabled    (nil? name->id)
                   :on-change   set-in
                   :value       in}]
          (when name->id
            [multi-input-data name-kvs])

          [:label {:for "k"} " as "]
          [:select
           {:id        "k"
            :value     (rel->s rel)
            :on-change set-rel
            :disabled  (not (get name->id in))}
           [select-opts search-rels [:option {:value (rel->s '_)} "anything"]]]

          [:input {:type     "submit"
                   :value    "Search"
                   :disabled (empty? in)}]]

         (when (not-empty items)
           [search-criteria items])]))))

(defn- set-offset
  [f n]
  (let [new-offset    (fn [offset & args] (apply f offset args))
        top-elem      (js/document.querySelector ".search-form")
        header-height 100]
    (->> (swap! state/query update :offset new-offset n)
         (state->params)
         (rfe/replace-state ::page {}))

    ;; Scroll to the top paging element when switching pages.
    ;; Must also account for the approximate height of the sticky header!
    (when-not (shared/visible? top-elem)
      (.scrollIntoView top-elem true)
      (.scroll js/window 0 (+ js/window.scrollY header-height)))))

(defn generate-paging
  [limit total]
  (->> (iterate (partial + limit) 1)
       (map (fn [n] [n (min total (dec (+ n limit)))]))
       (take-while (comp (partial > total) first))))

(defn search-paging
  "Paging widget for search `results`"
  [results]
  (let [{:keys [offset limit]} @state/query
        num-results (count results)
        total       (:total (meta results))]
    (when-let [pp (not-empty (generate-paging limit total))]
      [:div.search-result__paging
       [:div.input-row
        [:button {:disabled (= offset 0)
                  :on-click #(set-offset - limit)}
         "← previous"]
        [:select {:on-change #(set-offset (fn [_ os] os) (js/parseInt (e->v %)))
                  :value     offset}
         (for [[from-item to-item] pp]
           [:option {:key   [from-item to-item]
                     :value (dec from-item)}
            (str from-item "-" to-item)])]
        [:button {:disabled (or (= num-results total)
                                (< total (+ offset limit)))
                  :on-click #(set-offset + limit)}
         "next →"]]])))

(defn- search-result-val
  [id->name v]
  (cond
    (boolean? v)
    [:input {:type      "checkbox"
             :checked   v
             :tab-index "-1"
             :read-only true}]

    (and (string? v) (str/starts-with? v "#"))
    (get id->name v v)

    (inst? v)
    (first (str/split (.toISOString v) #"T"))

    :else
    (str v)))

(defn search-result-items
  "View of search `results`."
  [results id->name]
  [:div.search-result__items
   [:dl
    (for [{:keys [document/title] :as entity} results
          :let [filename (:file/name entity)]]
      [:<> {:key filename}
       [:dt
        [:a {:title "View this document"
             :href  (rfe/href ::reader/page {:document filename})}
         title]]
       [:dd
        [:table
         [:tbody
          (for [[k v] (->> (select-keys entity search-result-rels))]
            [:tr {:key k}
             [:td [:strong (str (get rel->label k k))]]
             [:td (if (set? v)
                    (->> (map (partial search-result-val id->name) v)
                         (sort)
                         (str/join ", "))
                    (search-result-val id->name v))]])]]]])]])

(defn explanation
  [name->id]
  (let [n         (count name->id)
        get-field (fn [m] (:label (second (nth (seq m) (rand-int (count m))))))]
    [:div.text-content
     [:p "Use this page to search for relevant documents in our archive."]
     [:ul
      [:li
       "Results are found by matching document metadata to "
       [:strong [:em "one or more"]] " search criteria."]
      [:li
       "The search criteria comprise: "
       [:em "people, places, organisations, publications, languages,"] " and "
       [:em "terms"] "."]
      [:li
       "Note that " [:strong [:em "all"]]
       " selected criteria will apply to every document in a search result."]
      [:li
       "By default, a search criterion will be compared to anything. "
       "However, a particular field may be selected for any criterion, "
       "e.g. the field \"" [:strong [:em (get-field search-rels)]] "\"."]
      [:li
       "The search results may also be sorted according to a specific field, "
       "e.g. the field \"" [:strong [:em (get-field order-rels)]] "\". "
       "They can be further restricted to a certain range too."]]
     (when-let [[k v] (nth (seq name->id) (rand-int n))]
       [:p
        "Currently, a total of " [:strong [:em n]]
        " entities may be used as search criteria. "
        "An example of an entity that can be used as a criterion might be \""
        [:strong [:em [:a {:href (rfe/href ::page {} {'_ v})} k]]] "\". "])]))

(defn page
  []
  (let [{:keys [results name->id id->name]} @state/search
        {:keys [order-by]} @state/query
        {:keys [query-params]} @state/location
        [order-rel] order-by]
    [:div.search-page
     ;; React key needed for input to update after name->id has been fetched!
     ^{:key name->id} [search-form]
     (if results
       (if (empty? results)
         [:div.text-content
          [search-result-postprocessing]
          [:p
           "No documents match the search criteria. "
           " Perhaps try removing a criterion?"]]
         [:div.text-content
          [:div.search-result
           [search-paging results]
           [:details {:open (boolean order-rel)}
            [:summary "Sort & limit"]
            [search-result-postprocessing]]
           (when id->name
             [search-result-items results id->name])]])
       (if (empty? query-params)
         [explanation name->id]
         ;; TODO: put this in main.css
         [:div {:style {:text-align      "center"
                        :opacity         "0"
                        :animation       "fade-in-xy 1s ease-out forwards"
                        :animation-delay "0.5s"}}
          [:img {:style {:width  150
                         :height 150}
                 :src   "/images/loading.svg"}]]))]))