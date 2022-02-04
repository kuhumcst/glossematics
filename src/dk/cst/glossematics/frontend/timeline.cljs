(ns dk.cst.glossematics.frontend.timeline
  "Wrapper for the Simile Timeline widget. Depends on some ancient JS libs."
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn prepare-event
  "Create an event for a timeline event source based on an `event` map.
  In most cases, :start is the only required key.

    :id          - An internal id. Really shouldn't be used by events.
                   Timeline library clients should use eventID
    :eventId     - For use by library client when writing custom painters or
                   custom fillInfoBubble
    :start       - Date string.
    :end         - Date string.
    :latestStart - Date string.
    :earliestEnd - Date string.
    :instant     - Boolean for (non-)precise logic and duration/instant issues.
    :title/:text - Used as the label on Timelines and in bubbles.
    :description - Used in bubbles.
    :image       - Used in bubbles.
    :link        - Used in bubbles.
    :icon        - The icon shown on the Timeline.
    :color       - Timeline label and tape color.
    :textColor   - Timeline label color, overrides color attribute
    :hoverText   - [DEPRECATED] Superseded by caption.
    :caption     - The HTML title attribute of the event.
    :classname   - The CSS class of the event on the Timeline.
    :tapeImage   - Sets the background image of the duration event's tape div.
    :tapeRepeat  - Repeat attribute for tapeImage (repeat, repeat-x, repeat-y)."
  [{:keys [isDuration durationEvent title start] :as event}]
  (let [date     (js/Date. start)
        ;; TODO: figure out how :instant field should be properly handled
        defaults {:instant true #_(not (or isDuration durationEvent))
                  :caption (str (.toLocaleDateString date) ": " title)}
        date-ks  #{:start :end :latestStart :earliestEnd}
        dates    (->> (filter (comp date-ks first) event)
                      (map (fn [[k v]]
                             (if (string? v)
                               [k (js/Date. v)]
                               [k v]))))]
    (-> (assoc event :text title)
        (merge defaults)
        (into dates))))

(defn add-events!
  "Add `events` to a Simile Timeline `event-source`."
  [^js/Timeline.DefaultEventSource event-source events]
  (let [->Event #(js/Timeline.DefaultEventSource.Event. (clj->js %))]
    (->> (map (comp ->Event prepare-event) events)
         (into-array)
         (.addMany event-source))))

(def interval-kvs
  "Sorted order, for dropdowns."
  [[:millisecond js/SimileAjax.DateTime.MILLISECOND]
   [:second js/SimileAjax.DateTime.SECOND]
   [:minute js/SimileAjax.DateTime.MINUTE]
   [:hour js/SimileAjax.DateTime.HOUR]
   [:day js/SimileAjax.DateTime.DAY]
   [:week js/SimileAjax.DateTime.WEEK]
   [:month js/SimileAjax.DateTime.MONTH]
   [:year js/SimileAjax.DateTime.YEAR]
   [:decade js/SimileAjax.DateTime.DECADE]
   [:century js/SimileAjax.DateTime.CENTURY]
   [:millennium js/SimileAjax.DateTime.MILLENNIUM]])

(def ->DateTime
  "Mapping the interval time units described in labeller.js."
  (into {} interval-kvs))

(def ->Layout
  "Mapping the layouts described in timeline.js."
  {:horizontal js/Timeline.HORIZONTAL
   :vertical   js/Timeline.VERTICAL})

(defn ->BandInfo
  "Create a BandInfo or HotZoneBandInfo from a `band` map."
  [band]
  (if (:zones band)
    (js/Timeline.createHotZoneBandInfo (clj->js band))
    (js/Timeline.createBandInfo (clj->js band))))

(defn connect-bands
  "Connect two BandInfos given a `bands` config and an `event-source`."
  [event-source {:keys [primary overview common] :as bands}]
  (let [get-unit #(get ->DateTime % %)
        primary  (-> (merge common primary)
                     (assoc :eventSource event-source)
                     (update :intervalUnit get-unit))
        overview (-> (merge common overview)
                     (assoc
                       :eventSource event-source
                       :layout "overview")
                     (update :intervalUnit get-unit))]
    (array (->BandInfo primary)
           (doto (->BandInfo overview)
             (set! -syncWith 0)
             (set! -highlight true)))))

;; TODO: optimise redrawing (store JS objects as state and reuse)
(defn draw-timeline!
  "Draw a Simile Timeline in the HTML `element` based on `opts`."
  [{:keys [layout bands event-source element]
    :or   {layout :horizontal}
    :as   opts}]
  (let [band-infos (connect-bands event-source bands)]
    (js/Timeline.create element band-infos (->Layout layout))))

(defn timeline
  "Display events inside a Simile Timeline based on HTML `attr` and `state`.
  Note that in order for the component to display a height must be set!

  The available state options are:

    :events - events as Clojure maps (see the prepare-event fn).
    :bands  - information about the bands (see the connect-bands fn).
    :layout - either :horizontal or :vertical."
  [attr state]
  (let [state (if (map? state)
                (r/atom state)
                state)]
    (swap! state assoc :event-source (js/Timeline.DefaultEventSource.))
    (r/create-class
      {:component-did-mount
       (fn [this]
         (let [{:keys [event-source events]} @state
               element (rdom/dom-node this)]
           (add-events! event-source events)
           (swap! state assoc
                  :tl (atom nil)
                  :element element)))

       :reagent-render
       (fn [attr _]
         (let [{:keys [tl] :as state*} @state]
           (when tl
             (if-let [tl* @tl]
               ;; Preserve scroll state of timeline when redrawing.
               (let [band0 (.getBand ^js/Timeline tl* 0)
                     date  (.getCenterVisibleDate band0)]
                 (->> (assoc-in state* [:bands :common :date] date)
                      (draw-timeline!)
                      (reset! tl)))
               (reset! tl (draw-timeline! state*)))))
         [:div attr])})))
