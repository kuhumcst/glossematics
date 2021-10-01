(ns dk.cst.glossematics.frontend.state
  "Contains both static and dynamic frontend state."
  (:require [reagent.core :as r]
            [clojure.edn :as edn]))

(def development?
  (when (exists? js/inDevelopmentEnvironment)
    js/inDevelopmentEnvironment))

;; Loading assertions by passing an EDN string in index.html
(defonce assertions
  (if (exists? js/SAMLAssertions)
    (edn/read-string js/SAMLAssertions)
    {}))

;; Local page data should all be cursors into this central data structure.
(defonce db
  (r/atom {}))