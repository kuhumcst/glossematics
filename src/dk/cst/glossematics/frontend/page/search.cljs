(ns dk.cst.glossematics.frontend.page.search
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [reitit.frontend.easy :as rfe]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.api :as api]))

(defn fetch-metadata!
  []
  (.then (api/fetch "/search/metadata")
         #(swap! state/search assoc
                 :name->id (:name->id %)
                 :id->name (set/map-invert (:name->id %)))))

(defn items->query-params
  [items]
  (->> (for [[k v] items]
         {k v})
       (apply merge-with (fn [& args] (str/join "," args)))))

(defn params->items
  [query-params id->name]
  (->> (dissoc query-params :limit :offset :order-by)
       (mapcat (fn [[k v]]
                 (mapv (fn [id]
                         (with-meta [(if (= k :_) '_ k) id]
                                    {:label (get id->name id)}))
                       (str/split v #","))))))

(defn- parse-int
  [s]
  (js/parseInt s))

(defn parse-params
  [{:keys [order-by limit offset] :as query-params} id->name]
  (let [items (params->items query-params id->name)]
    (cond-> {:items  items
             :unique (set items)}
            order-by (assoc :order-by (->> (str/split order-by #",")
                                           (map (comp keyword str/trim))))
            limit (assoc :limit (js/parseInt limit))
            offset (assoc :offset (js/parseInt offset)))))

(defn fetch-results!
  [{:keys [query-params]}]
  (if (empty? (dissoc query-params :limit :offset :order-by))
    (swap! state/search dissoc :results)
    (.then (api/fetch "/search" {:query-params query-params})
           #(swap! state/search assoc :results %))))

(defn- add-kv
  [{:keys [unique] :as old-state} kv]
  (if-not (get unique kv)
    (-> old-state
        (update :items conj kv)
        (update :unique conj kv))
    old-state))

(defn- remove-kv
  [{:keys [items] :as old-state} kv]
  (-> old-state
      (assoc :items (vec (remove (partial = kv) items)))
      (update :unique disj kv)))

(defn- not-empty-entity
  "Like 'not-empty' for the partial entity hidden inside `params`."
  [params]
  (when-not (empty? (dissoc params :limit :offset :order-by))
    params))

(defn multi-input-data
  [name->id]
  (fn [_]
    [:datalist {:id "names"}
     (for [[entity-name id] (sort name->id)]
       [:option {:key   entity-name
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

(def rel->description
  {:document/mention "mentioned"})

(defn- state->params
  [{:keys [items limit offset order-by]}]
  (let [[rel] order-by]
    (cond-> (items->query-params items)
            rel (assoc :order-by (str/join "," (map rel->s order-by)))
            limit (assoc :limit limit)
            offset (assoc :offset offset))))

(defn- set-offset
  [f n]
  (let [new-offset (fn [offset & args] (apply f offset args))]
    (->> (swap! state/query update :offset new-offset n)
         (state->params)
         (rfe/replace-state ::page {}))))

(defn search-form
  []
  (let [{:keys [name->id id->name]} @state/search
        {:keys [query-params]} @state/location
        update!  #(rfe/push-state ::page {} (state->params @state/query))
        set-in   (fn [e]
                   (swap! state/query assoc :in (e->v e)))
        submit   #(let [{:keys [rel in unique]} @state/query]
                    ;; TODO: shake animation when bad input?
                    (when-let [id (name->id in)]
                      (when-not (get unique [rel id])
                        (swap! state/query add-kv (with-meta [rel id]
                                                             {:label in}))
                        (swap! state/query assoc
                               :in ""
                               :offset 0)
                        (swap! state/search dissoc :results)
                        (update!))))
        set-rel  (fn [e]
                   (swap! state/query assoc :rel (s->rel (e->v e)))
                   (submit))
        order-fn #(fn [e]
                    (swap! state/query assoc-in [:order-by %] (s->rel (e->v e)))
                    (update!))]

    ;; Synchronize state with query params. As the search form needs to display
    ;; entity labels rather than IDs, this runs after the search results have
    ;; been fetched and updates separately. When there are multiple names
    ;; available for an ID, a hard page reload won't always result in the same
    ;; label being displayed!
    (when (and id->name query-params)
      (reset! state/query (merge state/query-defaults
                                 (parse-params query-params id->name))))

    (fn [_ _]
      (let [{:keys [items in rel order-by]} @state/query
            [order-rel order-dir] order-by
            no-input? (empty? in)
            no-items? (empty? items)]
        [:form.search
         {:on-submit (fn [e]
                       (.preventDefault e)
                       (submit))}

         [:div.search__input
          [:label {:for "v"} "Look for "]
          [:input.search__input-value {:type      "list"
                                       :list      "names"
                                       :name      "v"
                                       :id        "v"
                                       :disabled  (nil? name->id)
                                       :on-change set-in
                                       :value     in}]
          (when name->id
            [multi-input-data name->id])

          [:label {:for "k"} " as "]
          [:select.search__input-attribute
           {:name      "k"
            :id        "k"
            :value     (rel->s rel)
            :on-change set-rel
            :disabled  (not (get name->id in))}
           [:option {:value "_"} "anything"]
           [:<>
            (for [[rel description] (sort-by second rel->description)]
              [:option {:key rel :value (rel->s rel)} description])]]]

         (when (not-empty items)
           [:<>
            [:div.search__order
             [:label {:for "sort-key"} "Order by "]
             [:select {:name      "sort-key"
                       :id        "sort-key"
                       :disabled  (and no-input? no-items?)
                       :value     (rel->s order-rel)
                       :on-change (order-fn 0)}
              [:option {:value ""} ""]
              [:option {:value "document/date-mention"}
               "Mentioned dates"]]

             [:label {:for "sort-dir"} " in direction "]
             [:select {:name      "sort-dir"
                       :id        "sort-dir"
                       :disabled  (nil? order-rel)
                       :value     (rel->s order-dir)
                       :on-change (order-fn 1)}
              [:option {:value "asc"} "ascending"]
              [:option {:value "desc"} "descending"]]]

            [:fieldset
             [:legend "Search criteria"
              [:button {:type     "button"                  ; prevent submit
                        :title    "Clear all criteria"
                        :on-click (fn [e]
                                    (.preventDefault e)
                                    (swap! state/query assoc
                                           :items []
                                           :unique #{})
                                    (update!))}
               "x"]]

             (for [[k v :as kv] items
                   :let [label (:label (meta kv))]]
               [:<> {:key kv}
                [:span.search__item
                 (when (not= k '_)
                   [:span.search__item-key (rel->description k) " "])
                 [:span.search__item-label label]
                 [:button {:type     "button"               ; prevent submit
                           :title    "Remove criterion"
                           :on-click (fn [e]
                                       (.preventDefault e)
                                       (swap! state/query remove-kv kv)
                                       (update!))}
                  "x"]]
                " "])]])]))))

(defn page
  []
  (let [{:keys [results name->id]} @state/search
        {:keys [offset limit]} @state/query
        num-results (count results)
        total       (:total (meta results))]
    [:<>
     ;; React key needed for input to update after name->id has been fetched!
     ^{:key name->id} [search-form]
     (when results
       (if (empty? results)
         [:p "No matches found for query."]
         [:<>
          [:p
           [:button {:disabled (= offset 0)
                     :on-click #(set-offset - 20)}
            "←"]
           " "
           (if offset
             (str offset " to " (+ offset num-results))
             num-results)
           " out of "
           total
           " "
           [:button {:disabled (or (= num-results total)
                                   (< total (+ offset limit)))
                     :on-click #(set-offset + 20)}
            "→"]]
          [:ul
           (for [{:keys [file/name] :as entity} results]
             [:li {:key name}
              [:a {:href (rfe/href ::reader/page {:document name})}
               name]
              [:br]
              ;; This is only present while figuring things out...
              [:pre (with-out-str (cljs.pprint/pprint entity))]])]]))]))
