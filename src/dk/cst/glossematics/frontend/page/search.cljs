(ns dk.cst.glossematics.frontend.page.search
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.api :as api]))

(defn- elements->params
  "Retrieve a map of query parameters from HTML form `elements`."
  [elements]
  (let [{:keys [sort-key
                sort-dir]
         :as   m} (into {} (for [element elements]
                             (when (not-empty (.-name element))
                               [(keyword (.-name element))
                                (.-value element)])))
        order-by (when (not-empty sort-key)
                   (str/join "," [sort-key sort-dir]))
        entity   (->> (dissoc m :sort-key :sort-dir)
                      (remove (comp empty? second))
                      (into {}))]
    (when (not-empty entity)
      (if order-by
        (assoc entity :order-by order-by)
        entity))))

(defn fetch-metadata!
  []
  (.then (api/fetch "/search/metadata")
         #(swap! state/search assoc :name->id (:name->id %))))

(defn fetch-results!
  [{:keys [query-params]}]
  (if (empty? query-params)
    (swap! state/search dissoc :results :query-params)
    (.then (api/fetch "/search" {:query-params query-params})
           #(swap! state/search assoc
                   :results %
                   :query-params query-params))))

(defn- parse-int
  [s]
  (js/parseInt (or s "0")))

(defn- set-offset!
  [f n]
  (let [new-offset (fn [offset & args] (str (apply f (parse-int offset) args)))]
    (swap! state/search update-in [:query-params :offset] new-offset n)
    (rfe/push-state ::page {} (:query-params @state/search))))

(defn items->query-params
  [items]
  (->> (for [[k v] items]
         {(keyword k) (str v)})
       (apply merge-with (fn [& args] (str/join "," args)))))

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

(defn multi-input-form
  [limit offset name->id]
  (let [state          (r/atom {:unique #{} :items []})
        refs           (atom {:input nil :elements nil})
        update-search! (fn []
                         (let [{:keys [items]} @state
                               {:keys [elements]} @refs]
                           (->> (dissoc (elements->params elements) :k :v)
                                (merge (items->query-params items))
                                (not-empty-entity)
                                (rfe/push-state ::page {}))))
        form-ref       (fn [elem]
                         (when elem
                           (swap! refs assoc :elements (.-elements elem))))
        input-ref      (fn [elem]
                         (when elem
                           (swap! refs assoc :input elem)))
        on-input       (fn [e]
                         (swap! state assoc :in (.-value (.-target e))))
        on-change      (fn [e]
                         (.preventDefault e)
                         (update-search!))]
    (fn [_ _]
      (let [{:keys [items in]} @state
            no-input? (empty? in)
            no-items? (empty? items)]
        [:form.search
         {:on-submit (fn [e]
                       (.preventDefault e)
                       (let [{:keys [k v]} (-> (:elements @refs)
                                               (elements->params))]
                         (swap! state add-kv (with-meta
                                               [k (name->id v)]
                                               {:label v}))

                         (update-search!)
                         (set! (.-value (:input @refs)) nil)
                         (swap! state assoc :in "")))
          :ref       form-ref}

         [:div.search__input
          [:label {:for "v"} "Look for "]
          [:input.search__input-value {:type      "list"
                                       :list      "names"
                                       :name      "v"
                                       :id        "v"
                                       :disabled  (nil? name->id)
                                       :on-change on-input
                                       :ref       input-ref}]
          (when name->id
            [multi-input-data name->id])
          [:label {:for "k"} " as "]
          [:select.search__input-attribute
           {:name     "k"
            :id       "k"
            :disabled no-input?}
           [:option {:value "_"} "Anything"]
           [:option {:value "document/mention"} "Mention"]]]

         (when (not-empty items)
           [:<>
            [:div.search__order
             [:label {:for "sort-key"} "Order by "]
             [:select {:name      "sort-key"
                       :id        "sort-key"
                       :disabled  (and no-input? no-items?)
                       :on-change on-change}
              [:option {:value ""} "Nothing"]
              [:option {:value "document/date-mention"}
               "Mentioned dates"]]
             [:label {:for "sort-dir"} " in direction "]
             [:select {:name      "sort-dir"
                       :id        "sort-dir"
                       :disabled  (and no-input? no-items?)
                       :on-change on-change}
              [:option {:value "asc"} "Ascending"]
              [:option {:value "desc"} "Descending"]]]

            [:fieldset
             [:legend "Search criteria"
              [:button {:type     "button"                  ; prevent submit
                        :title    "Clear all criteria"
                        :on-click (fn [e]
                                    (.preventDefault e)
                                    (swap! state dissoc :items :unique)
                                    (update-search!))}
               "x"]]

             [:div.search__list
              (for [[k v :as kv] items
                    :let [label (:label (meta kv))]]
                [:span.search__item {:key kv}
                 [:span.search__item-label label]
                 (when (not= k "_")
                   [:span.search__item-key k])
                 [:button {:type     "button"               ; prevent submit
                           :title    "Remove criterion"
                           :on-click (fn [e]
                                       (.preventDefault e)
                                       (swap! state remove-kv kv)
                                       (update-search!))}
                  "x"]])]]])

         [:input {:type  "hidden"
                  :name  "limit"
                  :value (or limit "20")}]
         [:input {:type  "hidden"
                  :name  "offset"
                  :value (or offset "0")}]]))))

(defn page
  []
  (let [location* @state/location
        {:keys [results query-params name->id]} @state/search
        {:keys [offset limit]} query-params
        offset-n  (parse-int offset)
        limit-n   (parse-int limit)
        results-n (count results)
        total     (:total (meta results))]
    [:<>
     ;; React key needed for input to update after name->id has been fetched!
     ^{:key (hash name->id)}
     [multi-input-form limit offset name->id]
     (when results
       (if (empty? results)
         [:<>
          [:p "No matches for: "]
          [:dl
           (for [[k v] query-params]
             [:<> {:key k}
              [:dt (str k)]
              [:dd v]])]]
         [:<>
          [:p
           [:button {:disabled (= offset-n 0)
                     :on-click #(set-offset! - 20)}
            "←"]
           " "
           (if offset-n
             (str offset-n " to " (+ offset-n results-n))
             results-n)
           " out of "
           total
           " "
           [:button {:disabled (or (= results-n total)
                                   (< total (+ offset-n limit-n)))
                     :on-click #(set-offset! + 20)}
            "→"]]
          [:ul
           (for [{:keys [file/name] :as entity} results]
             [:li {:key name}
              [:a {:href (rfe/href ::reader/document {:document name})}
               name]
              [:br]
              ;; This is only present while figuring things out...
              [:pre (with-out-str (cljs.pprint/pprint entity))]])]]))]))
