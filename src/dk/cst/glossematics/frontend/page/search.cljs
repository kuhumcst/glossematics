(ns dk.cst.glossematics.frontend.page.search
  "Page containing a synchronized facsimile & TEI transcription reader."
  (:require [clojure.string :as str]
            [reitit.frontend.easy :as rfe]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend.page.reader :as reader]
            [dk.cst.glossematics.frontend.api :as api]))

(defn- form-elements->query-params
  "Retrieve a map of query parameters from HTML `form-elements`."
  [form-elements]
  (let [{:keys [sort-key
                sort-dir]
         :as   m} (into {} (for [form-element form-elements]
                             (when (not-empty (.-name form-element))
                               [(keyword (.-name form-element))
                                (.-value form-element)])))
        order-by (when (not-empty sort-key)
                   (str/join "," [sort-key sort-dir]))
        entity   (->> (dissoc m :sort-key :sort-dir)
                      (remove (comp empty? second))
                      (into {}))]
    (when (not-empty entity)
      (if order-by
        (assoc entity :order-by order-by)
        entity))))

(defn on-submit
  [e]
  (let [query-params (form-elements->query-params (.. e -target -elements))]
    (.preventDefault e)
    (if query-params
      (rfe/push-state ::page {} query-params)
      (js/alert "Please specify search criteria before submitting!"))))

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
     [:form {:role      "search"
             :action    (api/normalize-url "/search")
             :on-submit on-submit
             :method    "get"}
      [:input {:type  "hidden"
               :name  "limit"
               :value (or limit "20")}]
      [:input {:type  "hidden"
               :name  "offset"
               :value (or offset "0")}]
      [:label "Anything " [:input {:type "text"
                                   :name "_"}]]
      [:br]
      [:label "Mentions " [:input {:type "text"
                                   :name "document/mention"}]]
      [:br]
      [:label "Order by "
       [:select {:name "sort-key"}
        [:option {:value ""} "Nothing"]
        [:option {:value "document/date-mention"}
         "Mentioned dates"]]
       [:select {:name "sort-dir"}
        [:option {:value "asc"} "Ascending"]
        [:option {:value "desc"} "Descending"]]]
      [:input {:type "submit"}]]
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
           (for [{:keys [file/name]} results]
             [:li {:key name}
              [:a {:href (rfe/href ::reader/document {:document name})}
               name]])]]))]))
