(ns dk.cst.glossematics.backend.endpoints
  "The various handlers/interceptors provided by the backend web service."
  (:require [clojure.string :as str]
            [io.pedestal.http.content-negotiation :refer [negotiate-content]]
            [io.pedestal.http.route :refer [path-params-decoder]]
            [ring.util.response :as ring]
            [com.wsscode.transito :as transito]
            [hiccup.core :as hiccup]
            [asami.core :as d]
            [dk.cst.glossematics.backend.db :as db :refer [conn]])) ; TODO: attach this in an interceptor instead, reducing decoupling?)

(def one-month-cache
  "private, max-age=2592000")

(def one-day-cache
  "private, max-age=86400")

(defn timeline-handler
  "A handler to serve individual files."
  [{:as request}]
  (let [events (->> (d/q '[:find ?type ?title ?description ?start ?end
                           :where
                           [?e :event/type ?type]
                           [?e :event/title ?title]
                           [?e :event/start ?start]
                           (optional [?e :event/description ?description])
                           (optional [?e :event/end ?end])]
                         (d/db conn))
                    (map (fn [[?type ?title ?description ?start ?end]]
                           (cond-> {:type        ?type
                                    :title       ?title
                                    :description ?description
                                    :start       ?start}
                             ?end (assoc
                                    :isDuration true
                                    :end ?end)))))]
    {:status  200
     :body    (transito/write-str events)
     :headers {"Content-Type"  "application/transit+json"
               "Cache-Control" one-month-cache}}))

(defn file-handler
  "A handler to serve individual files."
  [{:keys [path-params] :as request}]
  (let [{:keys [filename]} path-params
        path (d/q '[:find ?path .
                    :in $ ?name
                    :where
                    [?e :file/name ?name]
                    [?e :file/path ?path]]
                  (d/db conn) filename)]
    (assoc-in (ring/file-response path)
              [:headers "Cache-Control"] one-day-cache)))

(defn entity-handler
  "A handler to serve database entities, e.g. document or event metadata."
  [{:keys [path-params] :as request}]
  (let [{:keys [filename]} path-params
        entity (d/entity conn filename)]
    (if entity
      (-> request
          (assoc
            :status 200
            :body (transito/write-str entity))
          (update :headers assoc
                  "Content-Type" "application/transit+json"
                  "Cache-Control" one-day-cache))
      {:status  404
       :body    nil
       :headers {}})))

(defn- split-params
  "Split comma-separated strings in `query-params`."
  [query-params]
  (update-vals query-params #(str/split % #"\s*,\s*")))

(defn- clean-entity
  "Remove private/unnecessary data from `entity`."
  [entity]
  (dissoc entity :file/path))

(defn search-handler
  "A handler to search for database entities, e.g. document or event metadata.

  The query params are translated directly into a partial entity description
  used to find matching entities in the Asami database. Three special params,
  limit, offset, and order-by are used to limit and sort the search results.

  Refer to the 'search' function in the 'db' ns for more!"
  [{:keys [query-params] :as request}]
  (let [{:keys [limit
                offset
                order-by
                _]
         :as   params} (split-params query-params)
        entity   (cond-> (dissoc (merge {:file/extension "xml"} params)
                                 :limit :offset :order-by :_)
                   _ (assoc '_ _))
        entities (db/search conn entity
                            :limit (when limit (parse-long (first limit)))
                            :offset (when offset (parse-long (first offset)))
                            :order-by (when order-by (map keyword order-by)))]
    (-> (assoc request
          :status 200
          :body (transito/write-str (with-meta
                                      (map clean-entity entities)
                                      (meta entities))))
        (update :headers assoc
                "Content-Type" "application/transit+json"
                "Cache-Control" one-day-cache))))

(defn build-hrefs
  "Build hyperlinks for the 'files-ic' based on a specific file `extension`."
  [extension]
  (->> (d/q '[:find [?name ...]
              :in $ ?ext
              :where
              [?e :file/extension ?ext]
              [?e :file/name ?name]]
            (d/db conn) extension)
       (sort-by (comp str/lower-case first))
       (map (partial str "/file/"))))

(def content-type->body-fn
  {"application/edn"
   (fn [hrefs]
     (pr-str hrefs))

   "application/transit+json"
   (fn [hrefs]
     (transito/write-str hrefs))

   "text/plain"
   (fn [hrefs]
     (str/join "\n" hrefs))

   "text/html"
   (fn [hrefs]
     (hiccup/html
       [:html
        [:body
         [:ul
          (for [href hrefs]
            [:li [:a {:title (str "Download " href)
                      :href  href}
                  href]])]]]))})

(def file-list-ic
  "Expects the Pedestal content negotiator in the interceptor chain."
  {:name  ::file-list
   :leave (fn [{:keys [request] :as ctx}]
            (let [content-type (get-in request [:accept :field] "text/plain")
                  extension    (get-in request [:path-params :extension])
                  hrefs        (build-hrefs extension)
                  hrefs->body  (content-type->body-fn content-type)]
              (-> ctx
                  (update :response assoc
                          :status 200
                          :body (hrefs->body hrefs))
                  (update-in [:response :headers] assoc
                             "Content-Type" content-type
                             "Cache-Control" one-day-cache))))})

(def timeline-chain
  [timeline-handler])

(def file-list-chain
  [(negotiate-content (keys content-type->body-fn))
   path-params-decoder
   file-list-ic])

(def file-chain
  [path-params-decoder
   file-handler])

(def entity-chain
  [path-params-decoder
   entity-handler])

(def search-chain
  [path-params-decoder
   search-handler])

(comment
  (split-params {:glen "1,2,   3"
                 :john "something"})
  #_.)
