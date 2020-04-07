(ns kuhumcst.tei-facsimile.tab
  "Tab components that rely entirely on external, derefable state, e.g. a ratom.
  The `state` should always deref as a map of the keys:

    :i - the index of the currently selected tab.
    :kvs - key-value pairs of tab headers and bodies.

  The tab `head` and `body` are, in principle, visually decoupled. However, a
  merged view is available in the form of the `window` component.")

(defn- nth-label
  "The header in the tab `state` at index `n`."
  [n state]
  (let [{:keys [i kvs]} @state
        [k v] (nth kvs n)
        id (random-uuid)]
    [:<> {:key id}                                          ; so checked works
     [:input {:id        id
              :type      "radio"
              :checked   (= n i)
              :read-only true
              :value     n}]
     [:label {:for id} k]]))

(defn head
  "The headers available in the tab `state`."
  [state]
  (let [{:keys [kvs]} @state]
    [:form.tab-head {:on-change (fn [e]
                                  (let [i (js/parseInt (.. e -target -value))]
                                    (swap! state assoc :i i)))}
     (for [n (range (count kvs))]
       ^{:key n} [nth-label n state])
     [:span.tab-head__spacer]]))

(defn body
  "The currently selected body in the tab `state`."
  [state]
  (let [{:keys [i kvs]} @state
        [_ v] (nth kvs i)]
    [:article.tab-body v]))

(defn window
  "A merged view of the tab headers and the body of the currently selected tab.
  Takes tab `state` in the form described in the description of this namespace."
  [state]
  [:<>
   [head state]
   [body state]])
