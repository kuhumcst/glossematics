(ns dk.cst.glossematics.frontend.timeline
  "Wrapper for the Simile Timeline widget. Depends on some ancient JS libs."
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [goog.object :as g]))

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
        defaults {:instant (not (or isDuration durationEvent))
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

(def ms-count
  "Millisecond counts for various time spans."
  (let [day 86400000]
    {:millisecond 1
     :second      1000
     :minute      60000
     :hour        (* 60 60000)
     :day         day
     :week        (* day 7)
     :month       (* day 30)
     :year        (* day 365)
     :decade      (* day 365 10)
     :century     (* day 365 100)
     :millennium  (* day 365 1000)}))

(defn date-keyfn
  "Return keyfn to get the closest date through integer division by `ms`.
  The returned function can be used to group dates when used with 'group-by'."
  [ms]
  (fn [date]
    (let [ts (.getTime ^js/Date date)]
      (js/Date. ^long (- (* (quot ts ms) ms) (/ ms 2))))))

;; TODO: currently just a heuristic, can it be approached more rationally?
(defn busy?
  [[k binned-dates]]
  (> (count binned-dates) 4))

(defn dates-between
  "Find dates between :start and :end of `event` with tick of size `ms`."
  [ms {:keys [start end] :as event}]
  (when end
    (let [end-ts (.getTime end)]
      (loop [ts    (+ (.getTime start) ms)
             ticks []]
        (if (< ts end-ts)
          (recur (+ ts ms) (conj ticks (js/Date. ts)))
          ticks)))))

(defn active-dates
  "Get all active dates in `events` based on a tick of size `ms`."
  [ms events]
  (concat (remove nil? (map :end events))
          (map :start events)
          (mapcat (partial dates-between ms) events)))

(defn hotzone
  "Define a hotzone of size `ms` based on a `busy-date-kv`."
  [unit ms [^js/Date center-date dates :as busy-date-kv]]
  (let [center-ms (.getTime center-date)
        extent-ms (quot ms 2)]
    {:start   (js/Date. ^long (- center-ms extent-ms))
     :end     (js/Date. ^long (+ center-ms extent-ms))
     :magnify (count dates)
     :unit    unit}))

(defn find-hotzones
  "Find hotzones in timeline `events` based on `size` (:day, :week, ...)."
  [size events]
  (let [ms         (ms-count size)
        unit       (max (inc (->DateTime size)) (->DateTime :millenium))
        date-bins  (group-by (date-keyfn ms) (active-dates ms events))
        hotzone-xf (comp
                     (filter busy?)
                     (map (partial hotzone unit ms)))]
    (into [] hotzone-xf date-bins)))

;; TODO: make dynamic, currently just adds +25% as the overview is set to 20%
(defn tl-extent
  [tl]
  (let [band-height (fn [^js/Timeline._Band band]
                      (let [ep (.getEventPainter band)]
                        (when (g/containsKey ep "getOrthogonalExtent")
                          (.getOrthogonalExtent ep))))
        band0       (.getBand ^js/Timeline tl 0)]
    (* (band-height band0) 1.25)))

(defn resize-tl!
  "Updates the :extent of the :tl defined in `state` until the size of the
  container matches the extent of its contents. WARNING: kind of a hack."
  [state]
  (let [{:keys [tl extent]} @state
        tl* (and tl @tl)]
    (when tl*
      (let [current-extent (tl-extent tl*)]
        (when-not (= current-extent extent)
          (swap! state assoc :extent current-extent))
        (.layout ^js/Timeline tl*)))))

(defn autoscroll-fn
  [^js/Timeline._Band band state]
  (fn [distance f]
    (.run (js/SimileAjax.Graphics.createAnimation
            (fn [abs diff] (._moveEther band diff))
            0
            distance
            1000
            #(do (when f (f)) (resize-tl! state))))))

;; TODO: unfortunately, this interferes with _autoScroll, fix it somehow!
(defn on-mouse-up-fn
  [^js/Timeline._Band band state]
  (let [finish-drag (fn []
                      (.focus (.-_keyboardInput band))
                      (._bounceBack band)
                      (resize-tl! state))]
    (fn []
      (cond
        (.-_dragging band)
        (do (set! (.-_dragging band) false)
            (finish-drag))

        (.-_orthogonalDragging band)
        (do (set! (.-_orthogonalDragging band) false)
            (finish-drag))))))

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
         (let [{:keys [event-source events] :as init-state} @state
               element   (rdom/dom-node this)
               new-state (assoc init-state :element element)
               tl        (draw-timeline! new-state)
               band0     (.getBand ^js/Timeline tl 0)
               band1     (.getBand ^js/Timeline tl 1)]
           ;; TODO: also react to _onKeyUp _onMouseOut?
           (g/set band0 "_autoScroll" (autoscroll-fn band0 state))
           (g/set band1 "_autoScroll" (autoscroll-fn band1 state))
           #_(g/set band0 "_onMouseUp" (on-mouse-up-fn band0 state))
           #_(g/set band1 "_onMouseUp" (on-mouse-up-fn band1 state))
           (add-events! event-source events)
           (reset! state (assoc new-state :tl (atom tl)))))

       :component-did-update
       (fn [this]
         (resize-tl! state))

       :reagent-render
       (fn [attr _]
         (let [{:keys [tl extent] :as state*} @state
               height (max extent (-> attr :style :height))]
           (when-let [tl* (and tl @tl)]
             ;; Preserve scroll state of timeline when redrawing.
             (let [band0 (.getBand ^js/Timeline tl* 0)
                   date  (.getCenterVisibleDate band0)]
               (swap! state assoc-in [:bands :common :date] date)))
           [:div (assoc-in attr [:style :height] height)]))})))
