(ns dk.cst.glossematics.backend.endpoints
  "The various handlers/interceptors provided by the backend web service."
  (:require [clojure.string :as str]
            [io.pedestal.http.route :refer [path-params-decoder]]
            [io.pedestal.log :as log]
            [ring.util.response :as ring]
            [com.wsscode.transito :as transito]
            [asami.core :as d]
            [dk.cst.glossematics.backend.db :as db :refer [conn]] ; TODO: attach this in an interceptor instead, reducing decoupling?
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.pedestal.sp.auth :as sp.auth]))

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
                         conn)
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
                  conn filename)]
    (if path
      (assoc-in (ring/file-response path)
                [:headers "Cache-Control"] one-day-cache)
      {:status 404})))

(defn- clean-entity
  "Remove private/unnecessary data from `entity`."
  [entity]
  (dissoc entity :file/path :entity/type))

(defn entity-handler
  "A handler to serve database entities, e.g. document or event metadata."
  [{:keys [path-params] :as request}]
  (let [{:keys [id]} path-params
        entity (d/entity conn id)]
    (if entity
      (-> request
          (assoc
            :status 200
            :body (transito/write-str (clean-entity entity)))
          (update :headers assoc
                  "Content-Type" "application/transit+json"
                  "Cache-Control" one-day-cache))
      {:status 404})))

(defn- split-params
  "Split comma-separated strings in `query-params`."
  [query-params]
  (update-vals query-params #(str/split % #"\s*,\s*")))

(defn- ?keywordize
  "Conditionally keywordize value `s`; otherwise:

     * turn _ into a symbol (wildcard value, but value must be present).
     * turn :ANY into a keyword (marks key for removal)"
  [s]
  (cond
    (= s ":ANY")
    :ANY

    (str/starts-with? s ":")
    (keyword (subs s 1))

    (= s "_")
    (symbol '_)

    :else
    s))

(defn ?keywordize-coll
  [coll]
  (into #{}
        (comp
          (map ?keywordize)
          (remove nil?))
        coll))

(def whitelisted
  "Whitelist certain searches for unauthenticated access based on entity type."
  #{#{:entity.type/bibliographic-entry}})

(defn- handle-file-extension
  "Behaviour when dealing with :file/extension in search `params`.

  Defaults to searching for XML (= TEI) files. However, the special value :ANY
  may be used to remove the :file/extension criteria completely."
  [params]
  (case (:file/extension params)
    nil (assoc params :file/extension "xml")
    #{:ANY} (dissoc params :file/extension)
    params))

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
                from
                to
                _]
         :as   params} (-> (split-params query-params)
                           (update-vals ?keywordize-coll))
        wildcard _                                          ; _ is used for noop
        _        (when-not (whitelisted (:entity/type params))
                   (sp.auth/enforce-condition request :authenticated))
        entity   (-> (handle-file-extension params)
                     (dissoc :_ :limit :offset :order-by :from :to)
                     (cond-> wildcard (assoc '_ wildcard)))
        raw      (db/search conn entity
                            :limit (when limit (parse-long (first limit)))
                            :offset (when offset (parse-long (first offset)))
                            :order-by (when order-by (map keyword order-by))
                            :from (when-let [from (first from)]
                                    (if (re-matches #"\d+" from)
                                      (parse-long from)
                                      (db/parse-date db/utc-dtf from)))
                            :to (when-let [to (first to)]
                                  (if (re-matches #"\d+" to)
                                    (parse-long to)
                                    (db/parse-date db/utc-dtf to))))
        final    (with-meta
                   (map clean-entity raw)
                   (meta raw))]
    (log/info :endpoints/search-result {:raw-count   (count raw)
                                        :final-count (count final)})
    (-> (assoc request
          :status 200
          :body (transito/write-str final))
        (update :headers assoc
                "Content-Type" "application/transit+json"
                "Cache-Control" one-day-cache))))

(defn search-metadata-handler
  [request]
  (let [search-metadata (db/search-metadata)]
    (log/info :endpoints/search-metadata (update-vals search-metadata count))
    (-> (assoc request
          :status 200
          :body (transito/write-str {:search-metadata search-metadata
                                     :top-30-kvs      sd/top-30}))
        (update :headers assoc
                "Content-Type" "application/transit+json"
                "Cache-Control" one-day-cache))))

(def timeline-chain
  [timeline-handler])

(def file-chain
  [path-params-decoder
   file-handler])

(def entity-chain
  [path-params-decoder
   entity-handler])

(def search-chain
  [path-params-decoder
   search-handler])

(def search-metadata-chain
  [path-params-decoder
   search-metadata-handler])

(comment
  (split-params {:glen "1,2,   3"
                 :john "something"})
  #_.)
