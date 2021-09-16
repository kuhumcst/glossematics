(ns dk.cst.glossematics.backend.index
  "Generate the index.html file using Clojure. This is mostly done to streamline
  fingerprinting of any included files in the release version."
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [hiccup.core :as hiccup]
            [dk.cst.pedestal.sp.auth :as sp.auth]))

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
    [:title (str (when development? "(dev) ") "Glossematics")]
    [:link {:rel "icon" :href "images/favicon.svg"}]
    [:link {:rel "mask-icon" :href "images/favicon.svg" :color "#a02c2c"}]
    [:link {:rel "stylesheet" :href "css/main.css"}]

    ;; These styles are used by the Simile Timeline API
    [:link {:rel "stylesheet" :href "timeline/css/ethers.css"}]
    [:link {:rel "stylesheet" :href "timeline/css/events.css"}]
    [:link {:rel "stylesheet" :href "timeline/css/timeline.css"}]
    [:link {:rel "stylesheet" :href "timeline/css/graphics.css"}]

    ;; TODO: reduce these (minify, bundle, ...)
    ;; These imports are all Simile Timeline library files.
    [:script {:src "timeline/js/simile-ajax-bundle.js"}]
    [:script {:src "timeline/js/timeline.js"}]
    [:script {:src "timeline/js/band.js"}]
    [:script {:src "timeline/js/themes.js"}]
    [:script {:src "timeline/js/ethers.js"}]
    [:script {:src "timeline/js/ether-painters.js"}]
    [:script {:src "timeline/js/event-utils.js"}]
    [:script {:src "timeline/js/labellers.js"}]
    [:script {:src "timeline/js/sources.js"}]
    [:script {:src "timeline/js/original-painter.js"}]
    [:script {:src "timeline/js/overview-painter.js"}]
    [:script {:src "timeline/js/en-labellers.js"}]]

   [:body
    [:div#app]
    [:script (str "var SAMLAssertions = '" (pr-str assertions) "';")]
    [:script {:src (str "js/compiled/" main-js)}]]])

(defn index-html
  [assertions]
  (hiccup/html (index-hiccup assertions)))

(defn handler
  [request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (index-html (sp.auth/request->assertions request))})
