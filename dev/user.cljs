(ns user
  (:require [clojure.pprint :refer [pprint]]
            [shadow.resource :as resource]
            [reagent.dom :as rdom]
            [kuhumcst.tei-facsimile.core :as facsimile]))

(def tei-example
  ;(resource/inline "examples/tei/1151anno-anno-tei.xml"))
  (resource/inline "examples/tei/tei_example.xml"))

(defn app
  []
  [facsimile/tei-xml tei-example])

(def root
  (js/document.getElementById "app"))

(defn ^:dev/after-load render
  []
  (rdom/render [app] root))

(defn start-dev
  []
  (println "Started development environment for kuhumcst/tei-facsimile.")
  (render))
