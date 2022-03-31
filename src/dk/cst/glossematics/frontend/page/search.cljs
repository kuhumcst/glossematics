(ns dk.cst.glossematics.frontend.page.search
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [reitit.frontend.easy :as rfe]
            [dk.cst.glossematics.frontend.shared :as shared]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.api :as api]))

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

(defn ?query-reset
  "Conditionally reset the search query state from the query-params."
  []
  (let [{:keys [id->name]} @state/search
        {:keys [query-params]} @state/location]
    (when (and id->name query-params)
      (let [query (merge state/query-defaults
                         (parse-params query-params id->name))]
        ;; The order of :items cannot be guaranteed, so it is dissoc'd.
        ;; Checking :unique and the other keys should be enough, anyway.
        (when (not= (dissoc query :items)
                    (dissoc @state/query :items))
          (reset! state/query query))))))

(defn fetch-metadata!
  []
  (.then (api/fetch "/search/metadata")
         #(do
            (let [name-kvs (:name-kvs %)
                  name->id (into {} name-kvs)
                  id->name (set/map-invert name->id)]
              (swap! state/search assoc
                     :name-kvs name-kvs
                     :name->id name->id
                     :id->name id->name))
            (?query-reset))))

(defn items->query-params
  [items]
  (->> (for [[k v] items]
         {k v})
       (apply merge-with (fn [& args] (str/join "," args)))))

(defn fetch-results!
  [{:keys [query-params]}]
  (if (empty? (dissoc query-params :limit :offset :order-by))
    (do
      (swap! state/search dissoc :results)
      (reset! state/query state/query-defaults)
      (rfe/replace-state ::page {} {}))
    (.then (api/fetch "/search" {:query-params query-params})
           #(do
              (swap! state/search assoc :results %)
              (?query-reset)))))

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

;; TODO: allow integer input, e.g. collection
(def id-rels
  {:document/mention            {:label "mentioned"}
   :document/author             {:label "author"}
   :document/sender             {:label "sender"}
   :document/sender-location    {:label "sender location"}
   :document/recipient          {:label "recipient"}
   :document/recipient-location {:label "recipient location"}
   :document/repository         {:label "repository"}
   #_#_:document/collection {:label "collection"}})

(def order-rels
  {:document/date-mention {:label "mentioned date"
                           :type  "date"}
   :document/sent-at      {:label "send date"
                           :type  "date"}
   :document/collection   {:label "collection"
                           :type  "number"}})

(def rel->label
  (->> (merge id-rels order-rels)
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

(defn search-form
  []
  (let [{:keys [name-kvs name->id]} @state/search
        no-op    (fn [e] (.preventDefault e))
        update!  #(rfe/push-state ::page {} (state->params @state/query))
        set-in   (fn [e]
                   (let [in (e->v e)]
                     (swap! state/query assoc
                            :in in
                            :good-input? (name->id in)
                            :bad-input? false
                            :not-allowed? false)))
        submit   #(let [{:keys [rel in unique]} @state/query]
                    (if-let [id (name->id in)]
                      (if-not (get unique [rel id])
                        (do
                          (swap! state/query add-kv (with-meta [rel id]
                                                               {:label in}))
                          (swap! state/query assoc
                                 :in ""
                                 :offset 0)
                          (swap! state/search dissoc :results)
                          (update!))
                        (swap! state/query assoc :not-allowed? true))
                      (swap! state/query assoc
                             :bad-input? true
                             :not-allowed? true)))
        set-rel  (fn [e]
                   (swap! state/query assoc :rel (s->rel (e->v e)))
                   (submit))
        ->order  #(fn [e]
                    (swap! state/query assoc-in [:order-by %] (s->rel (e->v e)))
                    (swap! state/query assoc :offset 0 :from nil :to nil)
                    (update!))
        ->tofrom #(fn [e]
                    (swap! state/query assoc :offset 0)
                    (if-let [v (not-empty (e->v e))]
                      (swap! state/query assoc % v)
                      (swap! state/query dissoc %))
                    (update!))]

    (fn [_ _]
      (let [{:keys [items in rel order-by from to
                    bad-input? good-input? not-allowed?]} @state/query
            [order-rel order-dir] order-by
            no-items?  (empty? items)
            no-order?  (nil? order-rel)
            order-type (get-in order-rels [order-rel :type] "date")]
        [:form.search-form
         {:on-submit no-op}                                 ; no page reloads
         [:div.search-form__input
          [:label {:for "v"} "Look for "]
          [:input {:type      "list"
                   :list      "names"
                   :class     ["search-form__input-value"
                               (when not-allowed?
                                 "not-allowed")
                               (when bad-input?
                                 "bad-input")
                               (when good-input?
                                 "good-input")]
                   :id        "v"
                   :disabled  (nil? name->id)
                   :on-change set-in
                   :on-key-up (fn [e]
                                (.preventDefault e)
                                (when (= 13 (.-keyCode e))
                                  (submit)))
                   :value     in}]
          (when name->id
            [multi-input-data name-kvs])

          [:label {:for "k"} " as "]
          [:select.search-form__input-attribute
           {:id        "k"
            :value     (rel->s rel)
            :on-change set-rel
            :disabled  (not (get name->id in))}
           [select-opts id-rels [:option {:value (rel->s '_)} "-"]]]]

         [:div.search-form__order
          [:label {:for "sort-key"} "Order by "]
          [:select {:id        "sort-key"
                    :disabled  no-items?
                    :value     (rel->s order-rel)
                    :on-change (->order 0)}
           [select-opts order-rels [:option {:value ""} "-"]]]

          [:label {:for "sort-dir"} " in direction "]
          [:select {:id        "sort-dir"
                    :disabled  (or (nil? order-rel) no-items?)
                    :value     (rel->s order-dir)
                    :on-change (->order 1)}
           [:option {:value "asc"} "ascending"]
           [:option {:value "desc"} "descending"]]]

         [:div.search-form__between
          [:label {:for "from"} "From "]
          [:input {:id        "from"
                   :type      order-type
                   :value     from
                   :max       to
                   :class     (when from
                                "good-input")
                   :on-change (->tofrom :from)
                   :disabled  (or no-order? no-items?)}]

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
                   :on-change (->tofrom :to)
                   :disabled  (or no-order? no-items?)}]]

         (when (not-empty items)
           [:fieldset
            [:legend "Search criteria"
             [:button {:type     "button"                   ; prevent submit
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
               [:span.search-form__item
                (when (not= k '_)
                  [:span.search-form__item-key (:label (id-rels k)) " "])
                [:span.search-form__item-label label]
                [:button {:type     "button"                ; prevent submit
                          :title    "Remove criterion"
                          :on-click (fn [e]
                                      (.preventDefault e)
                                      (swap! state/query remove-kv kv)
                                      (update!))}
                 "x"]]
               " "])])]))))

(defn- set-offset
  [f n]
  (let [new-offset (fn [offset & args] (apply f offset args))
        top-elem   (js/document.querySelector ".search-result__paging")]
    (->> (swap! state/query update :offset new-offset n)
         (state->params)
         (rfe/replace-state ::page {}))

    ;; Scroll to the top paging element when switching pages.
    (when-not (shared/visible? top-elem)
      (.scrollIntoView top-elem))))

(defn search-paging
  "Paging widget for search `results`"
  [results]
  (let [{:keys [offset limit]} @state/query
        num-results (count results)
        total       (:total (meta results))]
    [:div.search-result__paging
     [:button {:disabled (= offset 0)
               :on-click #(set-offset - limit)}
      "←"]
     [:span.search-result__paging-description
      (if offset
        (str offset " ··· " (+ offset num-results))
        num-results)
      (when (> total limit)
        [:<> " ⊂ " total])]
     [:button {:disabled (or (= num-results total)
                             (< total (+ offset limit)))
               :on-click #(set-offset + limit)}
      "→"]]))

(defn- search-result-val
  [id->name v]
  (cond
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
        [:a {:href (rfe/href ::reader/page {:document filename})}
         title]]
       [:dd
        [:table
         [:tbody
          (for [[k v] (->> (select-keys entity (keys rel->label))
                           (sort-by (comp name key)))]
            [:tr {:key k}
             [:td (rel->label k)]
             [:td (if (set? v)
                    (->> (map (partial search-result-val id->name) v)
                         (sort)
                         (str/join ", "))
                    (search-result-val id->name v))]])]]]])]])


(defn page
  []
  (let [{:keys [results name->id id->name]} @state/search]
    [:div.search-page
     ;; React key needed for input to update after name->id has been fetched!
     ^{:key name->id} [search-form]
     (when results
       [:div.search-result
        (if (empty? results)
          [:div.search-result__items
           [:p "No matches found for query."]]
          [:<>
           [search-paging results]
           (when id->name
             [search-result-items results id->name])
           [search-paging results]])])]))
