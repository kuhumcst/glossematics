(ns dk.cst.glossematics.frontend.api
  "Common API access operations."
  (:require [lambdaisland.fetch :as fetch]
            [kitchen-async.promise :as p]))

(def development?
  (when (exists? js/inDevelopmentEnvironment)
    js/inDevelopmentEnvironment))

(defn sanitize-url
  [url]
  (if development?
    (str "http://0.0.0.0:8080" url)
    url))

(defn transit-get
  [url]
  (p/-> url sanitize-url fetch/get :body))
