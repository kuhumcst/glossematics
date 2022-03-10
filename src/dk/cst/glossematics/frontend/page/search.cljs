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

(defn page
  []
  (let [location* @state/location
        search*   @state/search]
    [:<>
     [:form {:role      "search"
             :action    (api/normalize-url "/search")
             :on-submit on-submit
             :method    "get"}
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
     (when-let [results (:results search*)]
       (if (empty? results)
         [:<>
          [:p "No matches for: "]
          [:dl
           (for [[k v] (:query-params search*)]
             [:<> {:key k}
              [:dt (str k)]
              [:dd v]])]]
         [:<>
          [:p (count results) " out of " (:total (meta results))]
          [:ul
           (for [{:keys [file/name]} results]
             [:li {:key name}
              [:a {:href (rfe/href ::reader/document {:document name})}
               name]])]]))]))
