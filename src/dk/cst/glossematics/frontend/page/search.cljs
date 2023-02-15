(ns dk.cst.glossematics.frontend.page.search
  "Page containing a search form for finding content to read."
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [reitit.frontend.easy :as rfe]
            [dk.cst.stucco.pattern :as stp]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.frontend :as-alias frontend]
            [dk.cst.glossematics.frontend.i18n :as i18n]
            [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.index :as index]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.glossematics.shared :as shared]))

(defn- kv-label
  [tr id->name [k v]]
  (let [v' (or (fshared/?condition-tr tr v)
               (id->name v))]
    (if (= k '_)
      v'
      (str v' " (" (tr k) ")"))))

(defn page-title
  "Page title generator for searches."
  [& [_]]
  (let [{:keys [id->name
                results]} @state/search
        {:keys [offset
                limit
                items]} @state/query
        tr       (i18n/->tr)
        begin    (inc offset)
        total    (:total (meta results))
        end      (min (+ offset limit) total)
        pp       (str "pp. " begin "-" end
                      (when (and total (not= total end))
                        (str " (" total ")")))
        criteria (map (partial kv-label tr id->name) items)]
    (if (not-empty items)
      (str (when id->name
             (str (str/join ", " criteria) ", "))
           pp)
      (tr ::frontend/search))))

(defn query-params->items
  [query-params id->name]
  (->> (dissoc query-params :limit :offset :order-by :from :to)
       (mapcat (fn [[k v]]
                 (map (fn [id]
                        (with-meta [(if (= k :_) '_ k) id]
                                   {:label (get id->name id)}))
                      (str/split v #"\|"))))))

(defn parse-query-params
  "Parse the `query-params` as a map, using `id->name` to generate labels."
  [{:keys [order-by limit offset from to] :as query-params} id->name]
  (let [items (query-params->items query-params id->name)]
    (cond-> {:items  (vec items)
             :unique (set items)}
      order-by (assoc :order-by (->> (str/split order-by #"\|")
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
                         (parse-query-params query-params id->name))]
        (when (not= (apply dissoc query state/local-query-keys)
                    (apply dissoc @state/query state/local-query-keys))
          (->> (update query :items add-backgrounds)
               (reset! state/query)))))))

(defn- rename-duplicates*
  "Helper function for 'rename-duplicates'; uses a set of marked `duplicates` to
  rename every `kv` in the search-metadata."
  [duplicates [entity-type local-name->id :as kv]]
  (let [tr (i18n/->tr)]
    [entity-type
     (into {} (for [[full-name id :as original-kv] local-name->id]
                (if (get duplicates full-name)
                  [(str full-name " — " (tr entity-type)) id]
                  original-kv)))]))

(defn- rename-duplicates
  "Rename duplicate keys in the `search-metadata` such that the name of every
  entity has a 1:1 relationship with an entity ID."
  [search-metadata]
  (let [duplicates (-> search-metadata meta :duplicates)
        rename     #(rename-duplicates* duplicates %)]
    (println "Renamed" (count duplicates) "duplicate entities:"
             (str/join ", " (sort duplicates)))
    (into {} (map rename search-metadata))))

(defn- ->name-kvs
  [top-30-kvs name->id]
  (->> (map first top-30-kvs)
       (apply dissoc name->id)
       (sort-by first)
       (concat top-30-kvs)))

(defn- full-name->short-names
  "Get shorter variants of `full-name`."
  [full-name]
  (let [parts      (clojure.string/split full-name #"\s")
        first-name (clojure.string/lower-case (first parts))
        last-name  (clojure.string/lower-case (last parts))]
    (if (= first-name last-name)
      [last-name]
      [(str first-name " " last-name) last-name])))

(defn- short-names
  [search-metadata top-30-kvs]
  (let [{:keys [entity.type/person]} search-metadata]
    (persistent!
      (reduce (fn [m [k v]]
                (reduce #(assoc! %1 %2 v) m (full-name->short-names k)))
              (transient {})
              (concat (seq person) top-30-kvs)))))

(defn fetch-metadata!
  "Fetches and post-processes metadata used to populate the search form."
  []
  (.then (api/fetch "/search/metadata")
         (fn [{:keys [search-metadata top-30-kvs]}]
           (let [search-metadata    (rename-duplicates search-metadata)
                 name->id           (apply merge (vals search-metadata))
                 lowercase-name->id (update-keys name->id str/lower-case)
                 short-name->id     (short-names search-metadata top-30-kvs)
                 da-name->id        (merge name->id sd/da-attr->en-attr)
                 id->name           (set/map-invert name->id)
                 name->type         (fn [entity-name]
                                      (loop [groups (seq search-metadata)]
                                        (let [[[type name->id]] groups]
                                          (when type
                                            (if (name->id entity-name)
                                              type
                                              (recur (rest groups)))))))]
             (swap! state/search assoc

                    ;; Core metadata. TODO: keep or remove?
                    :metadata search-metadata

                    ;; Name resolution for entities.
                    :name->id name->id
                    :lowercase-name->id lowercase-name->id
                    :short-name->id short-name->id
                    :id->name id->name

                    ;; Type resolution for entities.
                    :name->type name->type
                    :id->type (comp name->type id->name)

                    ;; Sorted entity list for the form input's <datalist>.
                    ;; The entities with the highest document frequency are put
                    ;; at the top; the rest are sorted according to the name.
                    :en-name-kvs (->name-kvs top-30-kvs name->id)

                    ;; Hack to support Danish translations for attributes.
                    :da-name->id da-name->id
                    :da-name-kvs (->name-kvs top-30-kvs da-name->id)))
           (?query-reset!)
           (-> (fshared/location->page-title @state/location)
               (fshared/set-title!)))))

(defn items->query-params
  [items]
  (->> (for [[k v] items]
         {k v})
       (apply merge-with (fn [& args] (str/join "|" args)))))

(defn- attach-indices
  "Store the local index of each of the search result `entities` as metadata."
  [entities]
  (with-meta
    (map (fn [m i] (with-meta m {:i i})) entities (range))
    (meta entities)))

(defn fetch-results!
  "Fetch search results based on the `query-params`; triggered indirectly.
  An optional `f` may be used to execute side-effects when the results change."
  [{:keys [query-params]} & [f]]
  (if (empty? (apply dissoc query-params state/query-result-set-keys))
    (do
      (swap! state/search dissoc :results)
      (reset! state/query state/query-defaults))
    (.then (api/fetch "/search" {:query-params query-params})
           #(do
              (swap! state/search assoc :results (attach-indices %))
              (when f (f))))))

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
  [{:keys [items] :as state} kv]
  (-> state
      (assoc :items (vec (remove (partial = kv) items))
             :offset 0)
      (update :unique disj kv)))

(defn- replace-kv
  [{:keys [items unique] :as state} old-kv new-kv]
  (let [replace-kv* (fn [acc kv]
                      (conj acc (if (= kv old-kv)
                                  new-kv
                                  kv)))]
    (assoc state
      :items (reduce replace-kv* (empty items) items)
      :unique (-> unique (disj old-kv) (conj new-kv)))))

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

(defn- state->params
  [{:keys [items limit offset order-by from to]}]
  (when-let [params (items->query-params items)]            ; clear other params
    (let [[order-rel] order-by]
      (cond-> params
        order-rel (assoc :order-by (str/join "|" (map rel->s order-by)))
        limit (assoc :limit limit)
        offset (assoc :offset offset)
        from (assoc :from from)
        to (assoc :to to)))))

(defn- select-opts
  [tr rels & [default-option]]
  [:<>
   default-option
   (->> (sort-by (comp tr first) rels)
        (map (fn [[rel _ :as kv]]
               [:option {:key      rel
                         :disabled (:disabled (meta kv))
                         :value    (rel->s rel)}
                (tr rel)])))])

(defn- new-page!
  "Add a new page to the HTML history stack based on the current query state.
  This will trigger a backend fetch via 'fetch-results!' as a side-effect."
  []
  (rfe/push-state ::page {} (state->params @state/query)))

(defn- known-id
  "Get the known ID of `in` (if one exists) based on the `search-state`.
  The user input is compared to all the name variants in the search metadata."
  [{:keys [name->id
           lowercase-name->id
           short-name->id
           da-name->id
           id->name]
    :as   search-state}
   in]
  (when-let [in (not-empty (str/trim in))]
    (or (get name->id in)                                   ; exact name
        (get da-name->id in)                                ; danish locale only
        (and (get id->name in) in)                          ; entity IDs
        (let [lin (str/lower-case in)]
          (or (get lowercase-name->id lin)                  ; lower-case strings
              (get short-name->id lin))))))                 ; shorter variants

(defn- add-criterion!
  [kv]
  (do
    (swap! state/query add-kv kv)
    (swap! state/query update :n inc)                       ; cycle colour
    (swap! state/query assoc
           :in ""
           :offset 0)
    (swap! state/search dissoc :results)
    (new-page!)))

(defn- submit
  "Submit a new search criteria."
  []
  (let [{:keys [in unique]} @state/query]
    (if-let [id (known-id @state/search in)]
      (if-not (get unique ['_ id])
        (add-criterion! (with-meta ['_ id] {:label in}))
        (swap! state/query assoc :not-allowed? true))
      (add-criterion! (with-meta [:exactly in] {:label in})))))

(defn search-result-condition
  [tr]
  [:div.input-row
   [:label {:for "condition"} (tr ::condition)]
   (let [{:keys [unique]} @state/query
         v->k (if (= (i18n/->tr) i18n/tr-da)
                sd/da-attr->en-attr
                sd/en-attr->en-attr)]
     [:select {:id        "condition"
               :value     ""
               :on-change (fn [e]
                            (let [v  (.-value (.-target e))
                                  kv (with-meta ['_ (v->k v)] {:label v})]
                              (add-criterion! kv)))}

      [:option {:value ""} "-"]
      (for [[v k] v->k]
        [:option {:key      v
                  :value    v
                  :disabled (or (get unique [:document/condition k])
                                (get unique ['_ k]))}
         v])])])

(defn search-result-order
  [tr [order-rel order-dir :as order-by]]
  (let [->order #(fn [e]
                   (swap! state/query assoc-in [:order-by %] (s->rel (e->v e)))
                   (swap! state/query assoc :offset 0 :from nil :to nil)
                   (new-page!))]
    [:div.input-row
     [:label {:for "sort-key"} (tr ::order-by)]
     [:select {:id        "sort-key"
               :value     (rel->s order-rel)
               :on-change (->order 0)}
      [select-opts tr sd/order-rels
       [:option {:value    ""
                 :disabled (some? order-rel)}
        "-"]]]

     [:select {:id        "sort-dir"
               :disabled  (nil? order-rel)
               :value     (rel->s order-dir)
               :on-change (->order 1)}
      [:option {:value "asc"} (tr ::ascending)]
      [:option {:value "desc"} (tr ::descending)]]]))

(defn search-result-between
  [tr [order-rel _ :as order-by] from to]
  (let [order-type (get-in sd/order-rels [order-rel :type] "date")
        ->tofrom   #(fn [e]
                      (swap! state/query assoc :offset 0)
                      (if-let [v (not-empty (e->v e))]
                        (swap! state/query assoc % v)
                        (swap! state/query dissoc %))
                      (new-page!))]
    [:div.input-row
     [:label {:for "from"} (tr ::limit-from)]
     [:input {:id        "from"
              :type      order-type
              :value     from
              :max       to
              :class     (when from
                           "good-input")
              :on-change (->tofrom :from)}]

     [:label {:for "to"} (tr ::limit-to)]
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
  [tr]
  (let [{:keys [order-by from to]} @state/query
        [order-rel] order-by]
    [:<>
     [search-result-condition tr]
     [search-result-order tr order-by]
     (when order-rel
       [search-result-between tr order-by from to])]))

(defn anything-opt
  [tr]
  [:option {:value (rel->s '_)} (tr :any)])

;; TODO: if only one option is available, display by default in UI
(defn rel-select-opts
  [tr entity-type]
  (if entity-type
    (let [compatible?     (comp boolean entity-type :compatible second)
          compatible-rels (remove (complement compatible?) sd/search-rels)]
      [select-opts tr compatible-rels [anything-opt tr]])
    [select-opts tr sd/search-rels [anything-opt tr]]))

(defn search-criteria-add
  [tr]
  [:button.search-form__add
   {:title    (tr ::add)
    :disabled (= (:focus @state/ui) "v")
    :on-click (fn [e]
                (.preventDefault e)
                (.focus (js/document.getElementById "v")))}])

(defn search-criteria
  [tr id->type items]
  [:fieldset
   [:legend (tr ::criteria)
    [:button {:type     "button"                            ; prevent submit
              :title    (tr ::reset)
              :on-click (fn [e]
                          (.preventDefault e)
                          (swap! state/query assoc
                                 :items []
                                 :unique #{})
                          (new-page!))}
     "x"]]

   (for [[k v :as kv] items
         :let [{:keys [label style]} (meta kv)
               entity-type  (or (get id->type v)
                                :entity.type/unknown)
               ->set-rel    (fn [e]
                              (let [rel (s->rel (e->v e))
                                    kv' (assoc kv 0 rel)]
                                (when (not= kv kv')
                                  (swap! state/query assoc :offset 0))
                                (swap! state/query replace-kv kv kv')
                                (new-page!)))
               entity-label (tr entity-type)
               img-src      (-> sd/entity-types entity-type :img-src)]]
     [:<> {:key kv}
      [:span.search-form__item {:style (assoc style
                                         :position "relative")
                                :title entity-label}
       (when img-src
         [:img.entity-icon {:src img-src
                            :alt entity-label}])
       [:select.search-form__item-select {:on-change ->set-rel
                                          :value     (rel->s k)}
        [rel-select-opts tr entity-type]]

       (when (not= k '_)
         [:span.search-form__item-key
          (tr k k)
          " | "])
       [:span.search-form__item-label
        (let [label (or (when (= tr i18n/tr-da)
                          (get sd/en-attr->da-attr label))
                        (shared/local-name label)
                        (str v))]
          (if (= k :exactly)
            [:i (str "\"" label "\"")]
            label))]
       [:button {:type     "button"                         ; prevent submit
                 :title    (tr ::remove)
                 :on-click (fn [e]
                             (.preventDefault e)
                             (swap! state/query remove-kv kv)
                             (new-page!))}
        "x"]]
      " "])

   ;; Only used to nudge users to add additional criteria.
   [search-criteria-add tr]])

(def condition-kv?
  (comp sd/en-attr->da-attr second))

(defn search-form
  [_]
  (let [{:keys [en-name-kvs
                da-name-kvs
                name->id
                id->type]} @state/search
        set-in (fn [e]
                 (let [in (e->v e)]
                   (swap! state/query assoc
                          :in in
                          :bad-input? false
                          :not-allowed? false)))]

    (fn [tr]
      (let [{:keys [items in order-by bad-input? not-allowed?]} @state/query
            {:keys [results] :as search-state} @state/search
            [order-rel] order-by]
        [:form.search-form
         {:on-submit (fn [e] (.preventDefault e) (submit))}

         [:div.input-row
          [:label {:for "v"} (tr ::look-for)]
          [:input {:type        "list"
                   :list        "names"
                   :placeholder (tr ::placeholder)
                   :class       [(when not-allowed?
                                   "not-allowed")
                                 (when bad-input?
                                   "bad-input")
                                 (when (known-id search-state in)
                                   "good-input")]
                   :id          "v"
                   :disabled    (nil? name->id)
                   :on-change   set-in
                   :on-focus    #(swap! state/ui assoc :focus "v")
                   :on-blur     #(swap! state/ui dissoc :focus)
                   :value       in}]
          (when name->id
            (if (= "da" @state/language)
              [multi-input-data da-name-kvs]
              [multi-input-data en-name-kvs]))

          [:input {:type     "submit"
                   :value    (tr ::go)
                   :disabled (empty? in)}]]

         (when (not-empty items)
           [:<>
            [search-criteria tr id->type items]

            ;; Remove when:
            ;;   1) There are no results.
            ;;   2) We can be sure it is not due to filtering by date.
            (let [condition? (some condition-kv? items)]
              (when (or condition?
                        (not (empty? results))
                        (some? order-rel))
                [:details {:open (boolean (or order-rel condition?))}
                 [:summary (tr ::options)]
                 [search-result-postprocessing tr]]))])]))))

(defn- set-offset
  [f n]
  (let [new-offset (fn [offset & args] (apply f offset args))]
    (->> (swap! state/query update :offset new-offset n)
         (state->params)
         (rfe/replace-state ::page {}))))

(defn generate-paging
  [limit total]
  (->> (iterate (partial + limit) 1)
       (map (fn [n] [n (min total (dec (+ n limit)))]))
       (take-while (comp (partial > total) first))))

(defn search-paging
  "Paging widget for search `results`"
  [tr results]
  (let [{:keys [offset limit]} @state/query
        num-results (count results)
        total       (:total (meta results))
        pp          (generate-paging limit total)]
    (when (> (count pp) 1)
      [:div.search-result__paging
       [:div.input-row
        [:button {:disabled (= offset 0)
                  :on-click #(set-offset - limit)}
         (tr ::prev)]
        [:select {:on-change #(set-offset (fn [_ os] os) (js/parseInt (e->v %)))
                  :value     offset}
         (for [[from-item to-item] pp]
           [:option {:key   [from-item to-item]
                     :value (dec from-item)}
            (str from-item " ⋯ " to-item)])]
        [:button {:disabled (or (= num-results total)
                                (< total (+ offset limit)))
                  :on-click #(set-offset + limit)}
         (tr ::next)]]])))

(defn- cache-document-index!
  "Cache the search result index stored in the `entity` metadata."
  [entity]
  (swap! state/search assoc :i (:i (meta entity))))

(defn search-result-table
  [tr search-state {:keys [document/title file/name] :as entity}]
  (let [hyperlink [:a.action {:title    (tr ::view-caption)
                              :on-click #(cache-document-index! entity)
                              :href     (fshared/reader-href name)}
                   (fshared/break-str title)
                   [:img.action__icon
                    {:src "/images/external-link-svgrepo-com.svg"}]]
        kvs       (concat [[:document/title hyperlink]]
                          (select-keys entity sd/search-result-rels))]
    [fshared/metadata-table tr search-state entity kvs]))

(defn explanation
  [tr name->id]
  (let [n (count name->id)]
    [:div.text-content
     [tr ::explanation]
     (when-let [[k v] (nth (seq name->id) (rand-int n))]
       [tr ::explanation+
        [:strong [:em n]]
        [:strong [:em [:a {:href (rfe/href ::page {} {'_ v})} k]]]])]))

(defn page
  []
  (let [{:keys [results name->id id->name] :as search-state} @state/search
        {:keys [offset items]} @state/query
        {:keys [query-params]} @state/location
        tr (i18n/->tr)]
    [:div.search-page
     ;; React key needed for input to update after name->id has been fetched!
     ^{:key [name->id tr]} [search-form tr]
     (if results
       (if (empty? results)
         [:div.text-content
          [:p (tr ::empty)]
          (when (some (comp #{:exactly} first) items)
            [:p (tr ::empty-exact)])]
         [:<>
          [:div.search-result
           [search-paging tr results]
           (when id->name
             (let [kvs          (map (juxt :file/name identity) results)
                   entity-table (partial search-result-table tr search-state)]
               [fshared/kvs-list kvs entity-table offset]))]])
       (when (empty? query-params)
         [:<>
          [:div.text-content.menu
           [index/index-links tr]]
          [explanation tr name->id]]))]))
