(ns dk.cst.glossematics.frontend.page.search
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.api :as api]))

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
         {k v})
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

(defn- update-query!
  "Modify the search query params to match the args."
  [items limit offset [rel dir :as order-by]]
  (if (not-empty items)
    (->> (cond-> (items->query-params items)
                 rel (assoc :order-by (str/join "," (map rel->s order-by)))
                 limit (assoc :limit limit)
                 offset (assoc :offset offset))
         (rfe/push-state ::page {}))
    (rfe/push-state ::page {} {})))

(defn search-form
  [limit offset name->id]
  (let [state        (r/atom {:unique   #{} :items []       ; = ordered set
                              :in       ""
                              :rel      '_
                              :order-by [nil :asc]})
        update!      #(let [{:keys [items order-by]} @state]
                        (update-query! items limit offset order-by))
        set-in!      (fn [e]
                       (swap! state assoc :in (e->v e)))
        submit-kv!   #(let [{:keys [rel in]} @state]
                        ;; TODO: shake animation when bad input?
                        (when-let [id (name->id in)]
                          (swap! state add-kv (with-meta [rel id]
                                                         {:label in}))
                          (swap! state assoc :in "")
                          (update!)))
        set-rel!     (fn [e]
                       (swap! state assoc :rel (s->rel (e->v e)))
                       (submit-kv!))
        ->set-order! #(fn [e]
                        (swap! state assoc-in [:order-by %] (s->rel (e->v e)))
                        (update!))]
    (fn [_ _]
      (let [{:keys [items in rel order-by]} @state
            [order-rel order-dir] order-by
            no-input? (empty? in)
            no-items? (empty? items)]
        [:form.search
         {:on-submit (fn [e]
                       (.preventDefault e)
                       (submit-kv!))}
         [:div.search__input
          [:label {:for "v"} "Look for "]
          [:input.search__input-value {:type      "list"
                                       :list      "names"
                                       :name      "v"
                                       :id        "v"
                                       :disabled  (nil? name->id)
                                       :on-change set-in!
                                       :value     in}]
          (when name->id
            [multi-input-data name->id])

          [:label {:for "k"} " as "]
          [:select.search__input-attribute
           {:name      "k"
            :id        "k"
            :value     (rel->s rel)
            :on-change set-rel!
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
                       :on-change (->set-order! 0)}
              [:option {:value ""} ""]
              [:option {:value "document/date-mention"}
               "Mentioned dates"]]

             [:label {:for "sort-dir"} " in direction "]
             [:select {:name      "sort-dir"
                       :id        "sort-dir"
                       :disabled  (nil? order-rel)
                       :value     (rel->s order-dir)
                       :on-change (->set-order! 1)}
              [:option {:value "asc"} "ascending"]
              [:option {:value "desc"} "descending"]]]

            [:fieldset
             [:legend "Search criteria"
              [:button {:type     "button"                  ; prevent submit
                        :title    "Clear all criteria"
                        :on-click (fn [e]
                                    (.preventDefault e)
                                    (swap! state assoc
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
                                       (swap! state remove-kv kv)
                                       (update!))}
                  "x"]]
                " "])]])

         ;; TODO: remove
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
     [search-form (or limit "20") (or offset "0") name->id]
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
