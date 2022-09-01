(ns dk.cst.glossematics.frontend.page.search
  "Page containing a search form for finding content to read."
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [reitit.frontend.easy :as rfe]
            [dk.cst.stucco.pattern :as stp]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.glossematics.frontend.shared :as fshared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.index :as index]
            [dk.cst.glossematics.frontend.api :as api]
            [dk.cst.glossematics.shared :as shared]))

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

(defn- rename-duplicates*
  "Helper function for 'rename-duplicates'; uses a set of marked `duplicates` to
  rename every `kv` in the search-metadata."
  [duplicates [entity-type local-name->id :as kv]]
  (let [type->label (fn [entity-type]
                      (-> entity-type sd/entity-types :entity-label))]
    [entity-type
     (into {} (for [[full-name id :as original-kv] local-name->id]
                (if (get duplicates full-name)
                  [(str full-name " — " (type->label entity-type)) id]
                  original-kv)))]))

(defn- rename-duplicates
  "Rename duplicate keys in the `search-metadata` such that the name of every
  entity has a 1:1 relationship with an entity ID."
  [search-metadata]
  (let [duplicates (-> search-metadata meta :duplicates)
        rename     #(rename-duplicates* duplicates %)]
    (into {} (map rename search-metadata))))

(defn fetch-metadata!
  "Fetches and post-processes metadata used to populate the search form."
  []
  (.then (api/fetch "/search/metadata")
         (fn [{:keys [search-metadata top-30-kvs]}]
           (let [search-metadata (rename-duplicates search-metadata)
                 name->id        (apply merge (vals search-metadata))
                 id->name        (set/map-invert name->id)
                 name->type      (fn [entity-name]
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
                    :id->name id->name

                    ;; Type resolution for entities.
                    :name->type name->type
                    :id->type (comp name->type id->name)

                    ;; Sorted entity list for the form input's <datalist>.
                    ;; The entities with the highest document frequency are put
                    ;; at the top; the rest are sorted according to the name.
                    :name-kvs (->> (map first top-30-kvs)
                                   (apply dissoc name->id)
                                   (sort-by first)
                                   (concat top-30-kvs))))
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
        order-rel (assoc :order-by (str/join "," (map rel->s order-by)))
        limit (assoc :limit limit)
        offset (assoc :offset offset)
        from (assoc :from from)
        to (assoc :to to)))))

(defn- select-opts
  [rels & [default-option]]
  [:<>
   default-option
   (->> (sort-by (comp :label second) rels)
        (map (fn [[rel {:keys [label]} :as kv]]
               [:option {:key      rel
                         :disabled (:disabled (meta kv))
                         :value    (rel->s rel)}
                label])))])

(defn- new-page!
  "Add a new page to the HTML history stack based on the current query state."
  []
  (rfe/push-state ::page {} (state->params @state/query)))

(defn- submit
  "Submit a new search criteria."
  []
  (let [{:keys [name->id id->name]} @state/search
        {:keys [in unique]} @state/query]
    (if-let [id (or (name->id in)
                    (and (id->name in) in))]
      (if-not (get unique ['_ id])
        (do
          (swap! state/query add-kv (with-meta ['_ id] {:label in}))
          (swap! state/query update :n inc)
          (swap! state/query assoc
                 :in ""
                 :offset 0)
          (swap! state/search dissoc :results)
          (new-page!))
        (swap! state/query assoc :not-allowed? true))
      (swap! state/query assoc
             :bad-input? true
             :not-allowed? true))))

(defn search-result-order
  [[order-rel order-dir :as order-by]]
  (let [->order #(fn [e]
                   (swap! state/query assoc-in [:order-by %] (s->rel (e->v e)))
                   (swap! state/query assoc :offset 0 :from nil :to nil)
                   (new-page!))]
    [:div.input-row
     [:label {:for "sort-key"} "Sort by "]
     [:select {:id        "sort-key"
               :value     (rel->s order-rel)
               :on-change (->order 0)}
      [select-opts sd/order-rels
       [:option {:value    ""
                 :disabled (some? order-rel)}
        "-"]]]

     [:select {:id        "sort-dir"
               :disabled  (nil? order-rel)
               :value     (rel->s order-dir)
               :on-change (->order 1)}
      [:option {:value "asc"} "▲ ascending"]
      [:option {:value "desc"} "▼ descending"]]]))

(defn search-result-between
  [[order-rel _ :as order-by] from to]
  (let [order-type (get-in sd/order-rels [order-rel :type] "date")
        ->tofrom   #(fn [e]
                      (swap! state/query assoc :offset 0)
                      (if-let [v (not-empty (e->v e))]
                        (swap! state/query assoc % v)
                        (swap! state/query dissoc %))
                      (new-page!))]
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
        [order-rel] order-by]
    [:<>
     [search-result-order order-by]
     (when order-rel
       [search-result-between order-by from to])]))

(def anything-opt
  [:option {:value (rel->s '_)} "any role"])

(defn rel-select-opts
  [entity-type]
  (if entity-type
    (let [compatible? (comp boolean entity-type :compatible second)
          ?disable    #(with-meta % {:disabled (not (compatible? %))})]
      [select-opts (map ?disable sd/search-rels) anything-opt])
    [select-opts sd/search-rels anything-opt]))

(defn search-criteria
  [id->type items]
  [:fieldset
   [:legend "Search criteria"
    [:button {:type     "button"                            ; prevent submit
              :title    "Clear all criteria"
              :on-click (fn [e]
                          (.preventDefault e)
                          (swap! state/query assoc
                                 :items []
                                 :unique #{})
                          (new-page!))}
     "x"]]

   (for [[k v :as kv] items
         :let [{:keys [label style]} (meta kv)
               entity-type (id->type v)
               ->set-rel   (fn [e]
                             (let [rel (s->rel (e->v e))
                                   kv' (assoc kv 0 rel)]
                               (when (not= kv kv')
                                 (swap! state/query assoc :offset 0))
                               (swap! state/query replace-kv kv kv')
                               (new-page!)))
               {:keys [img-src
                       entity-label]} (when entity-type
                                        (get sd/entity-types entity-type))]]
     [:<> {:key kv}
      [:span.search-form__item {:style (assoc style
                                         :position "relative")
                                :title entity-label}
       (when img-src
         [:img.entity-icon {:src img-src
                            :alt entity-label}])
       [:select.search-form__item-select {:on-change ->set-rel
                                          :value     (rel->s k)}
        [rel-select-opts entity-type]]

       (when (not= k '_)
         [:span.search-form__item-key
          (or (:label (sd/search-rels k))
              (str k))
          " | "])
       [:span.search-form__item-label (or (shared/local-name label) (str v))]
       [:button {:type     "button"                         ; prevent submit
                 :title    "Remove criterion"
                 :on-click (fn [e]
                             (.preventDefault e)
                             (swap! state/query remove-kv kv)
                             (new-page!))}
        "x"]]
      " "])])

(defn search-form
  []
  (let [{:keys [name-kvs name->id id->name id->type]} @state/search
        set-in (fn [e]
                 (let [in (e->v e)]
                   (swap! state/query assoc
                          :in in
                          :bad-input? false
                          :not-allowed? false)))]

    (fn [_ _]
      (let [{:keys [items in order-by bad-input? not-allowed?]} @state/query
            {:keys [results]} @state/search
            [order-rel] order-by
            good-input? (and (not-empty in) (or (name->id in)
                                                (id->name in)))]
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

          [:input {:type     "submit"
                   :value    "Search"
                   :disabled (empty? in)}]]

         (when (not-empty items)
           [:<>
            [search-criteria id->type items]

            ;; Remove when:
            ;;   1) There are no results.
            ;;   2) We can be sure it is not due to filtering by date.
            (when-not (and (empty? results) (nil? order-rel))
              [:details {:open (boolean order-rel)}
               [:summary "More options"]
               [search-result-postprocessing]])])]))))

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
  [results]
  (let [{:keys [offset limit]} @state/query
        num-results (count results)
        total       (:total (meta results))
        pp          (generate-paging limit total)]
    (when (> (count pp) 1)
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

(defn search-result-table
  [search-state {:keys [document/title file/name] :as entity}]
  (let [hyperlink [:a.action {:title "View in the reader"
                              :href  (fshared/reader-href name)}
                   (fshared/break-str title)
                   [:img.action__icon
                    {:src "/images/external-link-svgrepo-com.svg"}]]
        kvs       (concat [[:document/title hyperlink]]
                          (select-keys entity sd/search-result-rels))]
    [fshared/metadata-table search-state entity kvs]))

(defn explanation
  [name->id]
  (let [n         (count name->id)
        get-field (fn [m] (:label (second (nth (seq m) (rand-int (count m))))))]
    [:div.text-content
     [index/index-links]
     [:hr]
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
       "e.g. the field \"" [:strong [:em (get-field sd/search-rels)]] "\"."]
      [:li
       "The search results may also be sorted according to a specific field, "
       "e.g. the field \"" [:strong [:em (get-field sd/order-rels)]] "\". "
       "They can be further restricted to a certain range too."]]
     (when-let [[k v] (nth (seq name->id) (rand-int n))]
       [:p
        "Currently, a total of " [:strong [:em n]]
        " entities may be used as search criteria. "
        "An example of an entity that can be used as a criterion might be \""
        [:strong [:em [:a {:href (rfe/href ::page {} {'_ v})} k]]] "\". "])]))

(defn page
  []
  (let [{:keys [results name->id id->name] :as search-state} @state/search
        {:keys [offset]} @state/query
        {:keys [query-params]} @state/location]
    [:div.search-page
     ;; React key needed for input to update after name->id has been fetched!
     ^{:key name->id} [search-form]
     (if results
       (if (empty? results)
         [:div.text-content
          [:p
           "No documents match the search criteria. "
           " Perhaps try removing a criterion?"]]
         [:<>
          [:div.search-result
           [search-paging results]
           (when id->name
             (let [kvs          (map (juxt :file/name identity) results)
                   entity-table (partial search-result-table search-state)]
               [fshared/kvs-list kvs entity-table offset]))]])
       (when (empty? query-params)
         [explanation name->id]))]))
