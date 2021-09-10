(ns dk.cst.glossematics.backend.files
  "Basic endpoint for retrieving non-public, static files (TEI and facsimile)."
  (:require [clojure.java.io :as io]
            [ring.util.response :as ring]
            [hiccup.core :as hiccup]))

(defn ->handler
  "Return a handler that to handle both file requests and directory listings."
  [files-dir]
  (fn [{:keys [path-params path-info]}]
    (let [{:keys [fmt filename]} path-params]
      (if (not-empty filename)
        (ring/file-response (str "/" fmt "/" filename) {:root files-dir})
        (let [dir       (-> (case fmt
                              "tei" (str files-dir "/tei")
                              "facsimile" (str files-dir "/facsimile"))
                            (io/file))
              filenames (->> (file-seq dir)
                             (remove #{dir})
                             (map #(.getName %))
                             (sort))]
          {:status  200
           :headers {"Content-Type" "text/html"}
           :body    (hiccup/html
                      [:html
                       [:body
                        [:ul
                         (for [filename filenames
                               :let [href (str path-info "/" filename)]]
                           [:li [:a {:title (str "Download " href)
                                     :href  href}
                                 filename]])]]])})))))
