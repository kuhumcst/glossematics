(ns dk.cst.glossematics.backend.files
  "Basic endpoint for retrieving non-public, static files (TEI and facsimile)."
  (:require [ring.util.response :as ring]))

(defn ->handler
  [files-dir]
  (fn [{:keys [path-params]}]
    (let [{:keys [fmt filename]} path-params
          filepath  (str "/" fmt "/" filename)]
      (ring/file-response filepath {:root files-dir}))))
