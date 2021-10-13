(ns dk.cst.glossematics.frontend.state
  "Contains both static and dynamic frontend state."
  (:require [reagent.core :as r]
            [clojure.edn :as edn]))

(defonce development?
  (when (exists? js/inDevelopmentEnvironment)
    js/inDevelopmentEnvironment))

;; Loading assertions by passing an EDN string in index.html
(defonce assertions
  (if (exists? js/SAMLAssertions)
    (edn/read-string js/SAMLAssertions)
    {}))

;; Some state to keep track of modals to avoid concurrent instances.
(def ^:dynamic *modal-dialog*)

;; Local page data should all be cursors into this central data structure.
(defonce db
  (r/atom {:reader {:pages {:i 0}}}))

(defonce tei-files
  (r/cursor db [:files :tei]))

(defonce reader
  (r/cursor db [:reader]))

(defonce reader-pages
  (r/cursor db [:reader :pages]))
