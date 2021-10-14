(ns dk.cst.glossematics.backend.files
  "Basic endpoint for retrieving non-public, static files (TEI and facsimile)."
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [io.pedestal.http.content-negotiation :refer [negotiate-content]]
            [ring.util.response :as ring]
            [com.wsscode.transito :as transito]
            [hiccup.core :as hiccup]))

(def one-month-cache
  "private, max-age=2592000")

(def one-day-cache
  "private, max-age=86400")

(defn ->file-handler
  "Return a handler to serve individual files based on a `files-dir`."
  [files-dir]
  (fn [{:keys [path-params] :as request}]
    (let [{:keys [fmt filename]} path-params
          filepath (str "/" fmt "/" filename)]
      (assoc-in (ring/file-response filepath {:root files-dir})
                [:headers "Cache-Control"] one-day-cache))))

(defn- safe-dir-path
  "Don't just accept any subdirectory."
  [fmt files-dir]
  (case fmt
    "tei" (str files-dir "/tei")
    "facsimile" (str files-dir "/facsimile")))

(defn build-hrefs
  "Build hyperlinks for the 'files-ic' based on a `request` and a `files-dir`."
  [request files-dir]
  (let [path-info (get-in request [:path-info])
        fmt       (get-in request [:path-params :fmt])
        dir       (io/file (safe-dir-path fmt files-dir))]
    (->> (file-seq dir)
         (remove #{dir})
         (map #(.getName %))
         (sort-by str/lower-case)
         (map (partial str path-info "/")))))

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

(defn ->files-dir-ic
  "Return an interceptor to handle directory listing based on a `files-dir`.
  Expects the Pedestal content negotiator in the interceptor chain."
  [files-dir]
  {:name  ::files
   :leave (fn [{:keys [request] :as ctx}]
            (let [content-type (get-in request [:accept :field] "text/plain")
                  hrefs        (build-hrefs request files-dir)
                  hrefs->body  (content-type->body-fn content-type)]
              (-> ctx
                  (update :response assoc
                          :status 200
                          :body (hrefs->body hrefs))
                  (update-in [:response :headers] assoc
                             "Content-Type" content-type
                             "Cache-Control" one-day-cache))))})

(defn files-chain
  [files-dir]
  [(negotiate-content (keys content-type->body-fn))
   (->files-dir-ic files-dir)])
