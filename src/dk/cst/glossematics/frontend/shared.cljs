(ns dk.cst.glossematics.frontend.shared
  "Frontend code that can be freely shared between frontend namespaces.")

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
