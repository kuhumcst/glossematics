(ns dk.cst.glossematics.backend.shared
  (:require [clojure.java.io :as io]))

(defn resource
  "Load a Glossematics resource from `path` (avoids resource shadowing)."
  [path]
  (io/resource (str "dk/cst/glossematics/" path)))
