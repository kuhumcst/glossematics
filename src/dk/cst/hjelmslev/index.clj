(ns dk.cst.hjelmslev.index
  "Generate the index.html file using Clojure. This is mostly done to streamline
  fingerprinting of any included files in the release version."
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [hiccup.core :as hiccup]))

(def index-filename
  (-> (io/resource "public/js/compiled/manifest.edn")
      slurp
      edn/read-string
      first
      :output-name))

(def index-hiccup
  [:html {:lang "da"}
   [:head
    [:meta {:charset "utf-8"}]
    [:title "Louis Hjelmslev development"]
    [:link {:rel "icon" :href "favicon.svg"}]
    [:link {:rel "mask-icon" :href "favicon.svg" :color "#a02c2c"}]

    ;; These styles are used by the Simile Timeline API
    [:link {:rel "stylesheet" :href "styles.css" :type "text/css"}]
    [:link {:rel "stylesheet" :href "/api/styles/ethers.css" :type "text/css"}]
    [:link {:rel "stylesheet" :href "/api/styles/events.css" :type "text/css"}]
    [:link {:rel "stylesheet" :href "/api/styles/timeline.css" :type "text/css"}]
    [:link {:rel "stylesheet" :href "/api/styles/graphics.css" :type "text/css"}]

    ;; These singleton objects are required by the Timeline API
    [:script
     "Timeline = {
      serverLocale: \"en\",
      clientLocale: \"en\",
      urlPrefix: \"api/\"
    };

    SimileAjax = {
        Platform:  new Object(),
        urlPrefix: \"api/\"
    };"]

    ;; TODO: reduce these (minify, bundle, ...)
    ;; These imports are all Simile Timeline library files.
    [:script {:src "/api/simile-ajax-bundle.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/timeline.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/band.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/themes.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/ethers.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/ether-painters.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/event-utils.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/labellers.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/sources.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/original-painter.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/detailed-painter.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/overview-painter.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/compact-painter.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/decorators.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/l10n/en/labellers.js" :type "text/javascript"}]
    [:script {:src "/api/scripts/l10n/en/timeline.js" :type "text/javascript"}]

    ;; TODO: remove
    ;; (some CSS that was grandfathered in from the original HTML example)
    [:style {:type "text/css"} ".t-highlight1 { background-color: #ccf; }
        .p-highlight1 { background-color: #fcc; }

        .timeline-highlight-label-start .label_t-highlight1 { color: #f00; }
        .timeline-highlight-label-end .label_t-highlight1 { color: #aaf; }

        .timeline-band-events .important { color: #f00; }
        .timeline-band-events .small-important { background: #c00; }"]]

   [:body
    [:div#app]
    [:script {:src (str "js/compiled/" index-filename)}]]])

(def index-html
  (hiccup/html index-hiccup))

(defn handler
  [{:keys [http-config] :as req}]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    index-html})
