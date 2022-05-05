(ns dk.cst.glossematics.frontend.shared
  "Frontend code that can be freely shared between frontend namespaces."
  (:require [clojure.string :as str]
            [reitit.frontend.easy :as rfe]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.static-data :as sd]
            [dk.cst.stucco.pattern :as stp]))

;; https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
(defn- visible?
  "Is the `element` fully located inside the browser's viewport?"
  [element]
  (let [rect (.getBoundingClientRect element)]
    (and (>= (.-top rect) (.-left rect) 0)
         (<= (.-bottom rect) (or js/window.innerHeight
                                 js/document.documentElement.clientHeight))
         (<= (.-right rect) (or js/window.innerWidth
                                js/document.documentElement.clientWidth)))))

(defn find-fragment
  "Scroll to the `fragment`; if none specified, read from window.location.hash."
  ([fragment]
   (when-let [elem (js/document.querySelector fragment)]
     (.scrollIntoView elem #js{:behavior "smooth"})))
  ([]
   (when-let [fragment (not-empty js/window.location.hash)]
     (find-fragment fragment))))

;; TODO: eventually use :as-alias
(defn encyclopedia-href
  [ref]
  (rfe/href :dk.cst.glossematics.frontend.page.search.encyclopedia/entry
            {:ref (if (str/starts-with? ref "#")
                    (subs ref 1)
                    ref)}))

;; TODO: eventually use :as-alias
(defn search-href
  [ref]
  (rfe/href :dk.cst.glossematics.frontend.page.search/page {}
            (merge (select-keys state/query-defaults [:limit :offset])
                   {'_ ref})))

;; TODO: eventually use :as-alias
(defn index-href
  [entity-type]
  (rfe/href :dk.cst.glossematics.frontend.page.index/page
            {:kind (name entity-type)}))

(defn legal-id
  "Make sure `s` is a legal HTML id/fragment, e.g. doesn't start with a number."
  [s]
  (let [s' (clojure.string/replace s #"[æøåÆØÅ]" sd/danish-letter->ascii)]
    (cond
      (not (re-matches #"[a-zA-Z0-9]+" s'))
      (str "X" (js/Math.abs (hash s')))

      (re-find #"^\d" s')
      (str "No" s')

      :else s')))

(def backgrounds
  (cycle stp/background-colours))

(defn- add-backgrounds
  [kvs]
  (stp/heterostyled kvs identity backgrounds))

(defn kvs-list
  "Generic display of title+content `kvs`; `val-com` renders the content."
  [kvs val-com]
  [:dl.kvs-list {:ref #(find-fragment)}
   (for [[k v :as kv] (add-backgrounds kvs)]
     [:<> {:key k}
      [:dt {:id    (legal-id k)
            :style (:style (meta kv))}
       k]
      [:dd
       [val-com v]]])])
