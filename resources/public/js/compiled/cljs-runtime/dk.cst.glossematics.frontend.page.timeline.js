goog.provide('dk.cst.glossematics.frontend.page.timeline');
dk.cst.glossematics.frontend.page.timeline.default_bands = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"85%",new cljs.core.Keyword(null,"intervalUnit","intervalUnit",233162692),new cljs.core.Keyword(null,"year","year",335913393)], null),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"15%",new cljs.core.Keyword(null,"intervalUnit","intervalUnit",233162692),new cljs.core.Keyword(null,"decade","decade",1521268113)], null),new cljs.core.Keyword(null,"common","common",-1822281391),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervalPixels","intervalPixels",-1560812441),(400),new cljs.core.Keyword(null,"timeZone","timeZone",-1874446783),(1),new cljs.core.Keyword(null,"date","date",-1463434462),"1950-03-01"], null)], null);
dk.cst.glossematics.frontend.page.timeline.event_styling = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/images/heart-2-fill.svg",new cljs.core.Keyword(null,"color","color",1011675173),"#dd82dd"], null),new cljs.core.Keyword(null,"teaching","teaching",1331203675),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/images/book-fill.svg",new cljs.core.Keyword(null,"color","color",1011675173),"#779eff"], null),new cljs.core.Keyword(null,"lecture","lecture",-1052740831),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/images/book-open-line.svg",new cljs.core.Keyword(null,"color","color",1011675173),"#169516"], null),new cljs.core.Keyword(null,"travel","travel",-610820371),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/images/earth-fill.svg",new cljs.core.Keyword(null,"color","color",1011675173),"#ff663c"], null),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"/images/group-fill.svg",new cljs.core.Keyword(null,"color","color",1011675173),"#7a4907"], null),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null)], null);
/**
 * Set icon and color for a timeline `event` based on its :type.
 */
dk.cst.glossematics.frontend.page.timeline.add_styling = (function dk$cst$glossematics$frontend$page$timeline$add_styling(event){
var map__32933 = (function (){var G__32934 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event);
return (dk.cst.glossematics.frontend.page.timeline.event_styling.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.frontend.page.timeline.event_styling.cljs$core$IFn$_invoke$arity$1(G__32934) : dk.cst.glossematics.frontend.page.timeline.event_styling.call(null,G__32934));
})();
var map__32933__$1 = cljs.core.__destructure_map(map__32933);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32933__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32933__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"color","color",1011675173),color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"icon","icon",1679606541),icon], 0));
});
dk.cst.glossematics.frontend.page.timeline.fetch_timeline_data_BANG_ = (function dk$cst$glossematics$frontend$page$timeline$fetch_timeline_data_BANG_(){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.api.fetch("/timeline"),(function (events){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.timeline_widget.find_hotzones(new cljs.core.Keyword(null,"month","month",-1960248533),events),(function (zones){
return cljs.core.reset_BANG_(dk.cst.glossematics.frontend.state.timeline,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.timeline.add_styling,events),new cljs.core.Keyword(null,"bands","bands",1845824188),cljs.core.assoc_in(cljs.core.assoc_in(dk.cst.glossematics.frontend.page.timeline.default_bands,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"zones","zones",2018149077)], null),zones),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.Keyword(null,"zones","zones",2018149077)], null),zones)], null));
}));
})));
}catch (e32935){var e__29086__auto__ = e32935;
return kitchen_async.promise.reject(e__29086__auto__);
}});
dk.cst.glossematics.frontend.page.timeline.page = (function dk$cst$glossematics$frontend$page$timeline$page(){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(dk.cst.glossematics.frontend.state.timeline)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.timeline_widget.timeline,cljs.core.PersistentArrayMap.EMPTY,dk.cst.glossematics.frontend.state.timeline], null);
} else {
return null;
}
});

//# sourceMappingURL=dk.cst.glossematics.frontend.page.timeline.js.map
