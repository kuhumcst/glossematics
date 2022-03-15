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

(defn fetch-search-results!
  [{:keys [query-params]}]
  (if (empty? query-params)
    (reset! state/search {})
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

(defn multi-input-form
  [limit offset]
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
        on-change      (fn [e]
                         (.preventDefault e)
                         (update-search!))]
    (fn [_ _]
      (let [{:keys [items in]} @state
            no-input? (empty? in)]
        [:div
         [:form {:on-submit (fn [e]
                              (.preventDefault e)
                              (let [{:keys [k v]} (-> (:elements @refs)
                                                      (elements->params))]
                                (swap! state add-kv [k v])
                                (update-search!)
                                (set! (.-value (:input @refs)) nil)))
                 :ref       form-ref}
          [:input {:type  "hidden"
                   :name  "limit"
                   :value (or limit "20")}]
          [:input {:type  "hidden"
                   :name  "offset"
                   :value (or offset "0")}]
          [:div (for [[k v :as kv] items]
                  [:span {:key kv}
                   v " (" k ") "
                   [:button {:type     "button"             ; prevent submit
                             :on-click (fn [e]
                                         (.preventDefault e)
                                         (swap! state remove-kv kv)
                                         (update-search!))}
                    "x"]])]
          [:input {:type      "text"
                   :name      "v"
                   :on-change (fn [e]
                                (swap! state assoc :in (.-value (.-target e))))
                   :ref       input-ref}]
          [:select {:name     "k"
                    :disabled no-input?}
           [:option {:value "_"} "Anything"]
           [:option {:value "document/mention"} "Mention"]]
          [:div
           [:label "Order by "
            [:select {:name      "sort-key"
                      :disabled  no-input?
                      :on-change on-change}
             [:option {:value ""} "Nothing"]
             [:option {:value "document/date-mention"}
              "Mentioned dates"]]
            [:select {:name      "sort-dir"
                      :disabled  no-input?
                      :on-change on-change}
             [:option {:value "asc"} "Ascending"]
             [:option {:value "desc"} "Descending"]]]]]]))))

(defn page
  []
  (let [location* @state/location
        {:keys [results query-params]} @state/search
        {:keys [offset limit]} query-params
        offset-n  (parse-int offset)
        limit-n   (parse-int limit)
        results-n (count results)
        total     (:total (meta results))]
    [:<>
     [multi-input-form limit offset]
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
