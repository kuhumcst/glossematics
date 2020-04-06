(ns kuhumcst.tei-facsimile.tab
  "Tab components that rely entirely on external, derefable state, e.g. a ratom.
  The `state` should deref as a map of the keys:

    :i - the index of the currently selected tab.
    :kvs - key-value pairs of tab headers and bodies.

  The tab `headers` and `body` are, in principle, visually decoupled. However,
  merged view is available in the form of the `window` component.")

(defn- nth-header
  "The header in the tab `state` at index `n`."
  [n state]
  (let [{:keys [i kvs]} @state
        [k _] (nth kvs n)]
    [:label
     [:input {:type      "radio"
              :checked   (= n i)
              :read-only true
              :on-click  #(swap! state assoc :i n)}]
     k]))

(defn headers
  "The headers available in the tab `state`."
  [state]
  (let [{:keys [kvs]} @state]
    [:<>
     (for [n (range (count kvs))]
       ^{:key n} [nth-header n state])]))

(defn body
  "The currently selected body in the tab `state`."
  [state]
  (let [{:keys [i kvs]} @state
        [_ v] (nth kvs i)]
    v))

(defn window
  "A merged view of the tab headers and the body of the currently selected tab.
  Takes tab `state` in the form described in the description of this namespace."
  [state]
  [:article
   [:section [headers state]]
   [:section [body state]]])
