(ns dk.cst.glossematics.backend.shared
  "Backend code that can be freely shared between backend namespaces."
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]))

(defn resource
  "Load a Glossematics resource from `path` (avoids resource shadowing)."
  [path]
  (io/resource (str "dk/cst/glossematics/" path)))

(def main-js
  "When making a release, the filename will be appended with a hash;
  that is not the case when running the regular shadow-cljs watch process.

  It relies on :module-hash-names being set to true in shadow-cljs.edn."
  (if-let [url (resource "public/js/compiled/manifest.edn")]
    (-> url slurp edn/read-string first :output-name)
    "main.js"))

(def development?
  "Source of truth for whether this is a development build or not. "
  (= main-js "main.js"))
