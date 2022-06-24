goog.provide('dk.cst.glossematics.frontend.timeline_widget');
goog.scope(function(){
  dk.cst.glossematics.frontend.timeline_widget.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create an event for a timeline event source based on an `event` map.
 *   In most cases, :start is the only required key.
 * 
 *  :id          - An internal id. Really shouldn't be used by events.
 *                 Timeline library clients should use eventID
 *  :eventId     - For use by library client when writing custom painters or
 *                 custom fillInfoBubble
 *  :start       - Date string.
 *  :end         - Date string.
 *  :latestStart - Date string.
 *  :earliestEnd - Date string.
 *  :instant     - Boolean for (non-)precise logic and duration/instant issues.
 *  :title/:text - Used as the label on Timelines and in bubbles.
 *  :description - Used in bubbles.
 *  :image       - Used in bubbles.
 *  :link        - Used in bubbles.
 *  :icon        - The icon shown on the Timeline.
 *  :color       - Timeline label and tape color.
 *  :textColor   - Timeline label color, overrides color attribute
 *  :hoverText   - [DEPRECATED] Superseded by caption.
 *  :caption     - The HTML title attribute of the event.
 *  :classname   - The CSS class of the event on the Timeline.
 *  :tapeImage   - Sets the background image of the duration event's tape div.
 *  :tapeRepeat  - Repeat attribute for tapeImage (repeat, repeat-x, repeat-y).
 */
dk.cst.glossematics.frontend.timeline_widget.prepare_event = (function dk$cst$glossematics$frontend$timeline_widget$prepare_event(p__32908){
var map__32909 = p__32908;
var map__32909__$1 = cljs.core.__destructure_map(map__32909);
var event = map__32909__$1;
var isDuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32909__$1,new cljs.core.Keyword(null,"isDuration","isDuration",-1053106455));
var durationEvent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32909__$1,new cljs.core.Keyword(null,"durationEvent","durationEvent",2112515570));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32909__$1,new cljs.core.Keyword(null,"title","title",636505583));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32909__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var date = (new Date(start));
var defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"instant","instant",655498374),cljs.core.not((function (){var or__5045__auto__ = isDuration;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return durationEvent;
}
})()),new cljs.core.Keyword(null,"caption","caption",-855383902),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.toLocaleDateString()),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], null);
var date_ks = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"latestStart","latestStart",1185877999),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"earliestEnd","earliestEnd",-770690017),null], null), null);
var dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32910){
var vec__32911 = p__32910;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911,(1),null);
if(typeof v === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(new Date(v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(date_ks,cljs.core.first),event));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"text","text",-1790561697),title),defaults], 0)),dates);
});
/**
 * Add `events` to a Simile Timeline `event-source`.
 */
dk.cst.glossematics.frontend.timeline_widget.add_events_BANG_ = (function dk$cst$glossematics$frontend$timeline_widget$add_events_BANG_(event_source,events){
var __GT_Event = (function (p1__32914_SHARP_){
return (new Timeline.DefaultEventSource.Event(cljs.core.clj__GT_js(p1__32914_SHARP_)));
});
return event_source.addMany(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(__GT_Event,dk.cst.glossematics.frontend.timeline_widget.prepare_event),events)));
});
/**
 * Sorted order, for dropdowns.
 */
dk.cst.glossematics.frontend.timeline_widget.interval_kvs = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),SimileAjax.DateTime.MILLISECOND], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"second","second",-444702010),SimileAjax.DateTime.SECOND], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minute","minute",-642875969),SimileAjax.DateTime.MINUTE], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour","hour",-555989214),SimileAjax.DateTime.HOUR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),SimileAjax.DateTime.DAY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week","week",-1326473278),SimileAjax.DateTime.WEEK], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),SimileAjax.DateTime.MONTH], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),SimileAjax.DateTime.YEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decade","decade",1521268113),SimileAjax.DateTime.DECADE], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"century","century",-655916490),SimileAjax.DateTime.CENTURY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millennium","millennium",-1786240902),SimileAjax.DateTime.MILLENNIUM], null)], null);
/**
 * Mapping the interval time units described in labeller.js.
 */
dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,dk.cst.glossematics.frontend.timeline_widget.interval_kvs);
/**
 * Mapping the orientatons described in timeline.js.
 */
dk.cst.glossematics.frontend.timeline_widget.__GT_Orientation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),Timeline.HORIZONTAL,new cljs.core.Keyword(null,"vertical","vertical",718696748),Timeline.VERTICAL], null);
/**
 * Create a BandInfo or HotZoneBandInfo from a `band` map.
 */
dk.cst.glossematics.frontend.timeline_widget.__GT_BandInfo = (function dk$cst$glossematics$frontend$timeline_widget$__GT_BandInfo(band){
if(cljs.core.truth_(new cljs.core.Keyword(null,"zones","zones",2018149077).cljs$core$IFn$_invoke$arity$1(band))){
return Timeline.createHotZoneBandInfo(cljs.core.clj__GT_js(band));
} else {
return Timeline.createBandInfo(cljs.core.clj__GT_js(band));
}
});
/**
 * Connect two BandInfos given a `bands` config and an `event-source`.
 */
dk.cst.glossematics.frontend.timeline_widget.connect_bands = (function dk$cst$glossematics$frontend$timeline_widget$connect_bands(event_source,p__32916){
var map__32917 = p__32916;
var map__32917__$1 = cljs.core.__destructure_map(map__32917);
var bands = map__32917__$1;
var primary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32917__$1,new cljs.core.Keyword(null,"primary","primary",817773892));
var overview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32917__$1,new cljs.core.Keyword(null,"overview","overview",-435037267));
var common = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32917__$1,new cljs.core.Keyword(null,"common","common",-1822281391));
var get_unit = (function (p1__32915_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime,p1__32915_SHARP_,p1__32915_SHARP_);
});
var primary__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common,primary], 0)),new cljs.core.Keyword(null,"eventSource","eventSource",618437337),event_source),new cljs.core.Keyword(null,"intervalUnit","intervalUnit",233162692),get_unit);
var overview__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common,overview], 0)),new cljs.core.Keyword(null,"eventSource","eventSource",618437337),event_source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout","layout",-2120940921),"overview"], 0)),new cljs.core.Keyword(null,"intervalUnit","intervalUnit",233162692),get_unit);
return [dk.cst.glossematics.frontend.timeline_widget.__GT_BandInfo(primary__$1),(function (){var G__32918 = dk.cst.glossematics.frontend.timeline_widget.__GT_BandInfo(overview__$1);
(G__32918.syncWith = (0));

(G__32918.highlight = true);

return G__32918;
})()];
});
/**
 * Draw a Simile Timeline in the HTML `element` based on `opts`.
 */
dk.cst.glossematics.frontend.timeline_widget.draw_timeline_BANG_ = (function dk$cst$glossematics$frontend$timeline_widget$draw_timeline_BANG_(p__32919){
var map__32920 = p__32919;
var map__32920__$1 = cljs.core.__destructure_map(map__32920);
var opts = map__32920__$1;
var orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32920__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
var bands = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32920__$1,new cljs.core.Keyword(null,"bands","bands",1845824188));
var event_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32920__$1,new cljs.core.Keyword(null,"event-source","event-source",1675295181));
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32920__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var band_infos = dk.cst.glossematics.frontend.timeline_widget.connect_bands(event_source,bands);
return Timeline.create(element,band_infos,(dk.cst.glossematics.frontend.timeline_widget.__GT_Orientation.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.frontend.timeline_widget.__GT_Orientation.cljs$core$IFn$_invoke$arity$1(orientation) : dk.cst.glossematics.frontend.timeline_widget.__GT_Orientation.call(null,orientation)),null);
});
/**
 * Millisecond counts for various time spans.
 */
dk.cst.glossematics.frontend.timeline_widget.ms_count = (function (){var day = (86400000);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"second","second",-444702010),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"decade","decade",1521268113),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),new cljs.core.Keyword(null,"century","century",-655916490),new cljs.core.Keyword(null,"millennium","millennium",-1786240902),new cljs.core.Keyword(null,"minute","minute",-642875969)],[day,((60) * (60000)),(day * (7)),(1000),(day * (30)),((day * (365)) * (10)),(day * (365)),(1),((day * (365)) * (100)),((day * (365)) * (1000)),(60000)]);
})();
/**
 * Return keyfn to get the closest date through integer division by `ms`.
 *   The returned function can be used to group dates when used with 'group-by'.
 */
dk.cst.glossematics.frontend.timeline_widget.date_keyfn = (function dk$cst$glossematics$frontend$timeline_widget$date_keyfn(ms){
return (function (date){
var ts = date.getTime();
return (new Date(((cljs.core.quot(ts,ms) * ms) - (ms / (2)))));
});
});
dk.cst.glossematics.frontend.timeline_widget.busy_QMARK_ = (function dk$cst$glossematics$frontend$timeline_widget$busy_QMARK_(p__32921){
var vec__32922 = p__32921;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32922,(0),null);
var binned_dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32922,(1),null);
return (cljs.core.count(binned_dates) > (4));
});
/**
 * Find dates between :start and :end of `event` with tick of size `ms`.
 */
dk.cst.glossematics.frontend.timeline_widget.dates_between = (function dk$cst$glossematics$frontend$timeline_widget$dates_between(ms,p__32925){
var map__32926 = p__32925;
var map__32926__$1 = cljs.core.__destructure_map(map__32926);
var event = map__32926__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32926__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32926__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_(end)){
var end_ts = end.getTime();
var ts = (start.getTime() + ms);
var ticks = cljs.core.PersistentVector.EMPTY;
while(true){
if((ts < end_ts)){
var G__32936 = (ts + ms);
var G__32937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ticks,(new Date(ts)));
ts = G__32936;
ticks = G__32937;
continue;
} else {
return ticks;
}
break;
}
} else {
return null;
}
});
/**
 * Get all active dates in `events` based on a tick of size `ms`.
 */
dk.cst.glossematics.frontend.timeline_widget.active_dates = (function dk$cst$glossematics$frontend$timeline_widget$active_dates(ms,events){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),events)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),events),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.timeline_widget.dates_between,ms),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0))], 0));
});
/**
 * Define a hotzone of size `ms` based on a `busy-date-kv`.
 */
dk.cst.glossematics.frontend.timeline_widget.hotzone = (function dk$cst$glossematics$frontend$timeline_widget$hotzone(unit,ms,p__32927){
var vec__32928 = p__32927;
var center_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32928,(0),null);
var dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32928,(1),null);
var busy_date_kv = vec__32928;
var center_ms = center_date.getTime();
var extent_ms = cljs.core.quot(ms,(2));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),(new Date((center_ms - extent_ms))),new cljs.core.Keyword(null,"end","end",-268185958),(new Date((center_ms + extent_ms))),new cljs.core.Keyword(null,"magnify","magnify",-1690476659),cljs.core.count(dates),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
});
/**
 * Find hotzones in timeline `events` based on `size` (:day, :week, ...).
 */
dk.cst.glossematics.frontend.timeline_widget.find_hotzones = (function dk$cst$glossematics$frontend$timeline_widget$find_hotzones(size,events){
var ms = (dk.cst.glossematics.frontend.timeline_widget.ms_count.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.frontend.timeline_widget.ms_count.cljs$core$IFn$_invoke$arity$1(size) : dk.cst.glossematics.frontend.timeline_widget.ms_count.call(null,size));
var unit = (function (){var x__5130__auto__ = ((dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime.cljs$core$IFn$_invoke$arity$1(size) : dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime.call(null,size)) + (1));
var y__5131__auto__ = (dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"millenium","millenium",512735368)) : dk.cst.glossematics.frontend.timeline_widget.__GT_DateTime.call(null,new cljs.core.Keyword(null,"millenium","millenium",512735368)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var date_bins = cljs.core.group_by(dk.cst.glossematics.frontend.timeline_widget.date_keyfn(ms),dk.cst.glossematics.frontend.timeline_widget.active_dates(ms,events));
var hotzone_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(dk.cst.glossematics.frontend.timeline_widget.busy_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.timeline_widget.hotzone,unit,ms)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,hotzone_xf,date_bins);
});
dk.cst.glossematics.frontend.timeline_widget.autoscroll_fn = (function dk$cst$glossematics$frontend$timeline_widget$autoscroll_fn(band,state){
return (function (distance,f){
return SimileAjax.Graphics.createAnimation((function (abs,diff){
return band._moveEther(diff);
}),(0),distance,(1000),(function (){
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
})).run();
});
});
dk.cst.glossematics.frontend.timeline_widget.on_mouse_up_fn = (function dk$cst$glossematics$frontend$timeline_widget$on_mouse_up_fn(band,state){
var finish_drag = (function (){
band._keyboardInput.focus();

return band._bounceBack();
});
return (function (){
if(cljs.core.truth_(band._dragging)){
(band._dragging = false);

return finish_drag();
} else {
if(cljs.core.truth_(band._orthogonalDragging)){
(band._orthogonalDragging = false);

return finish_drag();
} else {
return null;
}
}
});
});
/**
 * Display events inside a Simile Timeline based on HTML `attr` and `state`.
 *   Note that in order for the component to display a height must be set!
 * 
 *   The available state options are:
 * 
 *  :events      - events as Clojure maps (see the prepare-event fn).
 *  :bands       - information about the bands (see the connect-bands fn).
 *  :orientation - :horizontal or :vertical.
 */
dk.cst.glossematics.frontend.timeline_widget.timeline = (function dk$cst$glossematics$frontend$timeline_widget$timeline(_attr,state){
var state__$1 = ((cljs.core.map_QMARK_(state))?reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state):state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"event-source","event-source",1675295181),(new Timeline.DefaultEventSource()));

return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var map__32931 = cljs.core.deref(state__$1);
var map__32931__$1 = cljs.core.__destructure_map(map__32931);
var init_state = map__32931__$1;
var event_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32931__$1,new cljs.core.Keyword(null,"event-source","event-source",1675295181));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32931__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var element = reagent.dom.dom_node(this$);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(init_state,new cljs.core.Keyword(null,"element","element",1974019749),element);
var tl = dk.cst.glossematics.frontend.timeline_widget.draw_timeline_BANG_(new_state);
var band0 = tl.getBand((0));
var band1 = tl.getBand((1));
dk.cst.glossematics.frontend.timeline_widget.goog$module$goog$object.set(band0,"_autoScroll",dk.cst.glossematics.frontend.timeline_widget.autoscroll_fn(band0,state__$1));

dk.cst.glossematics.frontend.timeline_widget.goog$module$goog$object.set(band1,"_autoScroll",dk.cst.glossematics.frontend.timeline_widget.autoscroll_fn(band1,state__$1));

dk.cst.glossematics.frontend.timeline_widget.add_events_BANG_(event_source,events);

return cljs.core.reset_BANG_(state__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"tl","tl",-35265210),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tl)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (attr,_){
var map__32932 = cljs.core.deref(state__$1);
var map__32932__$1 = cljs.core.__destructure_map(map__32932);
var state_STAR_ = map__32932__$1;
var tl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32932__$1,new cljs.core.Keyword(null,"tl","tl",-35265210));
var extent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32932__$1,new cljs.core.Keyword(null,"extent","extent",-186399820));
var height = (function (){var x__5130__auto__ = extent;
var y__5131__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attr));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var temp__5804__auto___32938 = (function (){var and__5043__auto__ = tl;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(tl);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___32938)){
var tl_STAR__32939 = temp__5804__auto___32938;
var band0_32940 = tl_STAR__32939.getBand((0));
var date_32941 = band0_32940.getCenterVisibleDate();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bands","bands",1845824188),new cljs.core.Keyword(null,"common","common",-1822281391),new cljs.core.Keyword(null,"date","date",-1463434462)], null),date_32941);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.assoc_in(attr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"height","height",1025178622)], null),height)], null);
})], null));
});

//# sourceMappingURL=dk.cst.glossematics.frontend.timeline_widget.js.map
