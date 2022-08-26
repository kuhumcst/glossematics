(ns dk.cst.stucco.document
  "Simple reagent components meant to replace common HTML elements, providing
  useful interactive benefits and some validation.

  Unlike the more complex components located in e.g. 'dk.cst.stucco.pattern',
  the document components do not take any injected state. Rather, as they are
  meant to replace common HTML elements, they take an HTML `attr` map and (when
  applicable) contained HTML `content` as input args."
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(def default-filters
  {"saturate"   "100"
   "contrast"   "100"
   "brightness" "100"})

(defn- assert-alt
  "Assert from the `attr` that the image has an alt text."
  [{:keys [src alt] :as attr}]
  (assert alt
          (str src " lacks an alt text: " attr)))

(defn insert-wbr
  "Place word break opportunities into a potentially long `s`."
  [s]
  (into [:<>] (for [part (re-seq #"[_\.]+|[^_\.]+" s)]
                (if (re-matches #"[_\.]+" part)
                  [:<> part [:wbr]]
                  part))))

(defn- filters-str
  [m]
  (->> m
       (map (fn [[k v]] (str k "(" v "%)")))
       (str/join " ")))

(defn- filter-slider
  "Range slider for adjusting filter `k` in a map of `filters`."
  [filters k v]
  [:input.filter-slider
   {:type      "range"
    :value     v
    :min       0
    :max       200
    :on-change (fn [e]
                 (.preventDefault e)
                 (.stopPropagation e)
                 (swap! filters assoc k (.-value (.-target e))))}])

;; TODO: aria tags, keyboard access
(defn illustration
  "Illustration that can be full-screened if need be. Replaces [:img]."
  [{:keys [src alt] :as attr}]
  (assert-alt attr)
  (r/with-let [fullscreen (r/atom false)
               filters    (r/atom default-filters)]
    (let [fullscreen? @fullscreen
          toggle      #(swap! fullscreen not)
          attr*       (-> attr
                          (assoc :on-click toggle)
                          (assoc-in [:style :filter] (filters-str @filters)))]
      [:div.illustration (when fullscreen?
                           {:class    "illustration--fullscreen"
                            :on-click toggle})
       [:div.illustration__backdrop]
       [:img attr*]
       (when fullscreen?
         [:figure
          [:img attr*]
          [:figcaption
           [:h2 (insert-wbr alt)]

           ;; NOTE: this part relies on Glossematics CSS!
           [:table.entity-metadata {:on-click #(.stopPropagation %)
                                    :style    {:cursor "default"}}
            [:tbody
             [:tr
              [:td "File"]
              [:td [:a {:href src
                        :alt  "View image directly"}
                    (insert-wbr (last (str/split src #"/")))]]]
             (for [[k v] @filters]
               [:tr {:key k}
                [:td [:strong k]]
                [:td [filter-slider filters k v]]])
             [:tr
              [:td]
              [:td [:button {:on-click (fn [_]
                                         (reset! filters default-filters))}
                    "Reset filters"]]]]]]])])))

