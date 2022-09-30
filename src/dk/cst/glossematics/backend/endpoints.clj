(ns dk.cst.glossematics.backend.endpoints
  "The various handlers/interceptors provided by the backend web service."
  (:require [clojure.string :as str]
            [io.pedestal.http.route :refer [path-params-decoder]]
            [io.pedestal.http.body-params :refer [body-params]]
            [io.pedestal.http.content-negotiation :as conneg]
            [io.pedestal.log :as log]
            [ring.util.response :as ring]
            [com.wsscode.transito :as transito]
            [asami.core :as d]
            [tick.core :as t]
            [dk.cst.glossematics.db :as db :refer [conn pconn]] ; TODO: attach this in an interceptor instead, reducing decoupling?
            [dk.cst.glossematics.db.search :as db.search]
            [dk.cst.glossematics.shared :refer [parse-date utc-dtf]]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.pedestal.sp.auth :as sp.auth]
            [dk.cst.glossematics.shared :as shared])
  (:import [java.util UUID]))

(def one-month-cache
  "private, max-age=2592000")

(def one-day-cache
  "private, max-age=86400")

(defn ->language-negotiation-ic
  "Make a language negotiation interceptor from a coll of `supported-languages`.
  The interceptor reuses Pedestal's content-negotiation logic, but unlike the
  included content negotiation interceptor this one does not create a 406
  response if no match is found."
  [supported-languages]
  (let [match-fn   (conneg/best-match-fn supported-languages)
        lang-paths [[:request :headers "accept-language"]
                    [:request :headers :accept-language]]]
    {:name  ::negotiate-language
     :enter (fn [ctx]
              (if-let [accept-param (loop [[path & paths] lang-paths]
                                      (if-let [param (get-in ctx path)]
                                        param
                                        (when (not-empty paths)
                                          (recur paths))))]
                (if-let [language (->> (conneg/parse-accept-* accept-param)
                                       (conneg/best-match match-fn))]
                  (assoc-in ctx [:request :accept-language] language)
                  ctx)
                ctx))}))

(def lang-neg
  (->language-negotiation-ic ["da" "en"]))

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
      (-> (ring/file-response path)
          (assoc-in [:headers "Cache-Control"] one-day-cache)
          (assoc-in [:headers "X-Frame-Options"] "SAMEORIGIN")) ; allow <object>
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

(defn add-bookmark-handler
  "A handler to add a bookmark to the persisted storage graph."
  [{:keys [path-params transit-params conf] :as request}]
  (let [{:keys [bookmark/path
                bookmark/page
                bookmark/title
                bookmark/visibility]} transit-params
        {:keys [author]} path-params
        {:keys [db-dir]} conf
        assertions (sp.auth/request->assertions request)
        user       (shared/assertions->user-id assertions)
        db         (pconn db-dir)
        id         (UUID/nameUUIDFromBytes (.getBytes (str user " " path)))
        timestamp  (t/now)
        existing   (d/entity db id)]
    (cond
      (not= user author)
      {:status 403}

      (not (and path page title visibility))                ; i.e. 500 status
      (throw (ex-info "missing args in request" transit-params))

      :else
      (do
        (when (not= visibility (:bookmark/visibility existing))
          (let [tx-data [(if existing
                           {:db/ident             id
                            :entity/edited'       timestamp
                            :bookmark/visibility' visibility}
                           {:db/ident            id
                            :entity/type         :entity.type/bookmark
                            :entity/edited       timestamp
                            :entity/created      timestamp
                            :bookmark/path       path
                            :bookmark/title      title
                            :bookmark/page       page
                            :bookmark/author     user
                            :bookmark/visibility visibility})]]
            @(d/transact db {:tx-data tx-data})))
        {:status  (if existing 200 201)
         :body    (let [{:keys [bookmark/path] :as entity} (d/entity db id)]
                    (transito/write-str [path (-> (clean-entity entity)
                                                  (dissoc :bookmark/path)
                                                  (assoc :db/ident id))]))
         :headers {"Content-Type" "application/transit+json"
                   "Location"     (str "/bookmark/" id)}}))))

(defn single-bookmark-handler
  "A handler to get or delete a bookmark from the persisted storage graph."
  [{:keys [request-method path-params conf] :as request}]
  (let [{:keys [id author]} path-params
        {:keys [db-dir]} conf
        assertions (sp.auth/request->assertions request)
        user       (shared/assertions->user-id assertions)
        db         (pconn db-dir)
        id         (UUID/fromString id)
        bookmark   (d/entity db id)]
    (cond
      (not bookmark)
      {:status 404}

      (not= user author (:bookmark/author bookmark))
      {:status 403}

      (= request-method :get)
      {:status  200
       :body    (transito/write-str bookmark)
       :headers {"Content-Type" "application/transit+json"}}

      (= request-method :delete)
      (do
        (db/retract-entity! db id)
        {:status 204}))))

(defn bookmarks-handler
  "A handler to get all bookmarks from the persisted storage graph."
  [{:keys [path-params conf] :as request}]
  (let [{:keys [author]} path-params
        {:keys [db-dir]} conf
        assertions (sp.auth/request->assertions request)
        db         (pconn db-dir)
        bookmarks  (->> (db/bookmarks db assertions author)
                        (map (fn [id]
                               (let [{:keys [bookmark/path]
                                      :as   entity} (d/entity db id)]
                                 [path (-> (dissoc entity :bookmark/path)
                                           (assoc :db/ident id))])))
                        (into {}))]
    {:status  200
     :body    (transito/write-str (or bookmarks {}))
     :headers {"Content-Type" "application/transit+json"}}))

(defn- comma-split
  "Split comma-separated string `s`; otherwise return `s`."
  [s]
  (let [parts (str/split s #"\s*,\s*")]
    (if (= (count parts) 1)
      (first parts)
      parts)))

(defn- ?keywordize-val
  "Conditionally keywordize value `s` or turn _ into a symbol."
  [s]
  (cond
    (str/starts-with? s ":")
    (keyword (subs s 1))

    (= s "_")
    (symbol '_)

    :else
    s))

(defn- ?keywordize-coll
  [coll]
  (into (empty coll)
        (comp
          (map ?keywordize-val)
          (remove nil?))
        coll))

(defn- ?keywordize
  [x]
  (if (coll? x)
    (?keywordize-coll x)
    (?keywordize-val x)))

(def whitelisted
  "Whitelist certain searches for unauthenticated access based on entity type."
  #{:entity.type/bibliographic-entry})

(defn- handle-file-extension
  "Behaviour when dealing with :file/extension in search `params`.

  Defaults to searching for XML (= TEI) files. However, the special value :ANY
  may be used to remove the :file/extension criteria completely."
  [params]
  (case (:file/extension params)
    nil (assoc params :file/extension "xml")
    :ANY (dissoc params :file/extension)
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
         :as   params} (update-vals query-params (comp ?keywordize comma-split))
        wildcard _                                          ; _ is used for noop
        _        (when-not (whitelisted (:entity/type params))
                   (sp.auth/enforce-condition request :authenticated))
        entity   (-> (handle-file-extension params)
                     (dissoc :_ :limit :offset :order-by :from :to)
                     (cond-> wildcard (assoc '_ wildcard)))
        raw      (db.search/search
                   conn entity
                   :limit (when limit (parse-long limit))
                   :offset (when offset (parse-long offset))
                   :order-by (if order-by
                               (map keyword order-by)
                               [:document/sent-at :asc])    ;TODO: differentiate by entity type?
                   :from (when from
                           (if (re-matches #"\d+" from)
                             (parse-long from)
                             (parse-date utc-dtf from)))
                   :to (when to
                         (if (re-matches #"\d+" to)
                           (parse-long to)
                           (parse-date utc-dtf to))))
        ;;TODO: remove meta?
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
  (let [search-metadata (db.search/search-metadata conn)]
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

(def bookmarks-chain
  [path-params-decoder
   bookmarks-handler])

(def add-bookmark-chain
  [path-params-decoder
   (body-params)
   add-bookmark-handler])

(def single-bookmark-chain
  [path-params-decoder
   single-bookmark-handler])

(def search-chain
  [path-params-decoder
   search-handler])

(def search-metadata-chain
  [path-params-decoder
   search-metadata-handler])

(comment
  (update-vals {:glen "1,2,   3" :john "something"}
               (comp ?keywordize comma-split))
  #_.)
