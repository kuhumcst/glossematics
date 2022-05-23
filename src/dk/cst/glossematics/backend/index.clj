(ns dk.cst.glossematics.backend.index
  "Generate the index.html file using Clojure. This is mostly done to streamline
  fingerprinting of any included files in the release version."
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [hiccup.core :as hiccup]
            [dk.cst.pedestal.sp.auth :as sp.auth])
  (:import [java.util Date]))

(def init-hash
  (hash (Date.)))

;; https://javascript.plainenglish.io/what-is-cache-busting-55366b3ac022
(defn- cb
  "Decorate the supplied `path` with a cache busting string."
  [path]
  (str path "?" init-hash))

(def main-js
  "When making a release, the filename will be appended with a hash;
  that is not the case when running the regular shadow-cljs watch process.

  This relies on the :module-hash-names being set to true in shadow-cljs.edn."
  (if-let [url (io/resource "public/js/compiled/manifest.edn")]
    (-> url slurp edn/read-string first :output-name)
    "main.js"))

(def development?
  "Source of truth for whether this is a development build or not. "
  (= main-js "main.js"))

(defn index-hiccup
  [assertions]
  [:html {:lang "da"}
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name    "viewport"
            :content "width=device-width, initial-scale=1.0"}]
    [:title (str (when development? "(dev) ") "Glossematics")]
    [:link {:rel "icon" :href (cb "/images/favicon.svg")}]
    [:link {:rel "mask-icon" :href (cb "/images/favicon.svg") :color "#a02c2c"}]
    [:link {:rel "stylesheet" :href (cb "/css/main.css")}]
    [:link {:rel "stylesheet" :href (cb "/css/theme.css")}]

    ;; These styles are used by the Simile Timeline API
    [:link {:rel "stylesheet" :href (cb "/timeline/css/ethers.css")}]
    [:link {:rel "stylesheet" :href (cb "/timeline/css/events.css")}]
    [:link {:rel "stylesheet" :href (cb "/timeline/css/timeline.css")}]
    [:link {:rel "stylesheet" :href (cb "/timeline/css/graphics.css")}]

    ;; TODO: reduce these (minify, bundle, ...)
    ;; These imports are all Simile Timeline library files.
    [:script {:src (cb "/timeline/js/simile-ajax-bundle.js")}]
    [:script {:src (cb "/timeline/js/timeline.js")}]
    [:script {:src (cb "/timeline/js/band.js")}]
    [:script {:src (cb "/timeline/js/themes.js")}]
    [:script {:src (cb "/timeline/js/ethers.js")}]
    [:script {:src (cb "/timeline/js/ether-painters.js")}]
    [:script {:src (cb "/timeline/js/event-utils.js")}]
    [:script {:src (cb "/timeline/js/labellers.js")}]
    [:script {:src (cb "/timeline/js/sources.js")}]
    [:script {:src (cb "/timeline/js/original-painter.js")}]
    [:script {:src (cb "/timeline/js/overview-painter.js")}]
    [:script {:src (cb "/timeline/js/en-labellers.js")}]]

   [:body
    [:div#app]
    [:script
     (str "var SAMLAssertions = '" (pr-str assertions) "';"
          "var inDevelopmentEnvironment = " development? ";")]
    [:script {:src (cb (str "/js/compiled/" main-js))}]]])

(defn index-html
  [assertions]
  (hiccup/html (index-hiccup assertions)))

(defn handler
  [request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (index-html (sp.auth/request->assertions request))})

(defn shadow-handler
  "Handler used by the shadow-cljs watch process which overrides auth."
  [request]
  (handler (assoc-in request [:session :saml :assertions :condition] :all)))
