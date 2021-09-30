(ns dk.cst.glossematics.frontend.api
  "Common API access operations."
  (:require [lambdaisland.fetch :as fetch]
            [dk.cst.glossematics.frontend.state :as state]
            [kitchen-async.promise :as p]))

(defn sanitize-url
  [url]
  (if state/development?
    (str "http://0.0.0.0:8080" url)
    url))

(defn transit-get
  [url]
  (p/-> url sanitize-url fetch/get :body))
