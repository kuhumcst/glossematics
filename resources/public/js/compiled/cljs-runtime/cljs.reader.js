goog.provide('cljs.reader');
goog.scope(function(){
  cljs.reader.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__39521 = b.append("0");
b = G__39521;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__39380 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39380,(10),null);
var v = vec__39380;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__5045__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,cljs.reader.days_in_month(months__$1,cljs.reader.leap_year_QMARK_(years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5802__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__39414 = temp__5802__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__39426_39527 = cljs.core.seq(form);
var chunk__39427_39528 = null;
var count__39428_39529 = (0);
var i__39429_39530 = (0);
while(true){
if((i__39429_39530 < count__39428_39529)){
var x_39531 = chunk__39427_39528.cljs$core$IIndexed$_nth$arity$2(null,i__39429_39530);
arr.push(x_39531);


var G__39532 = seq__39426_39527;
var G__39533 = chunk__39427_39528;
var G__39534 = count__39428_39529;
var G__39535 = (i__39429_39530 + (1));
seq__39426_39527 = G__39532;
chunk__39427_39528 = G__39533;
count__39428_39529 = G__39534;
i__39429_39530 = G__39535;
continue;
} else {
var temp__5804__auto___39536 = cljs.core.seq(seq__39426_39527);
if(temp__5804__auto___39536){
var seq__39426_39537__$1 = temp__5804__auto___39536;
if(cljs.core.chunked_seq_QMARK_(seq__39426_39537__$1)){
var c__5567__auto___39538 = cljs.core.chunk_first(seq__39426_39537__$1);
var G__39539 = cljs.core.chunk_rest(seq__39426_39537__$1);
var G__39540 = c__5567__auto___39538;
var G__39541 = cljs.core.count(c__5567__auto___39538);
var G__39542 = (0);
seq__39426_39527 = G__39539;
chunk__39427_39528 = G__39540;
count__39428_39529 = G__39541;
i__39429_39530 = G__39542;
continue;
} else {
var x_39543 = cljs.core.first(seq__39426_39537__$1);
arr.push(x_39543);


var G__39544 = cljs.core.next(seq__39426_39537__$1);
var G__39545 = null;
var G__39546 = (0);
var G__39547 = (0);
seq__39426_39527 = G__39544;
chunk__39427_39528 = G__39545;
count__39428_39529 = G__39546;
i__39429_39530 = G__39547;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__39469_39548 = cljs.core.seq(form);
var chunk__39470_39549 = null;
var count__39471_39550 = (0);
var i__39472_39551 = (0);
while(true){
if((i__39472_39551 < count__39471_39550)){
var vec__39484_39552 = chunk__39470_39549.cljs$core$IIndexed$_nth$arity$2(null,i__39472_39551);
var k_39553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484_39552,(0),null);
var v_39554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484_39552,(1),null);
cljs.reader.goog$module$goog$object.set(obj,cljs.core.name(k_39553),v_39554);


var G__39555 = seq__39469_39548;
var G__39556 = chunk__39470_39549;
var G__39557 = count__39471_39550;
var G__39558 = (i__39472_39551 + (1));
seq__39469_39548 = G__39555;
chunk__39470_39549 = G__39556;
count__39471_39550 = G__39557;
i__39472_39551 = G__39558;
continue;
} else {
var temp__5804__auto___39559 = cljs.core.seq(seq__39469_39548);
if(temp__5804__auto___39559){
var seq__39469_39560__$1 = temp__5804__auto___39559;
if(cljs.core.chunked_seq_QMARK_(seq__39469_39560__$1)){
var c__5567__auto___39561 = cljs.core.chunk_first(seq__39469_39560__$1);
var G__39562 = cljs.core.chunk_rest(seq__39469_39560__$1);
var G__39563 = c__5567__auto___39561;
var G__39564 = cljs.core.count(c__5567__auto___39561);
var G__39565 = (0);
seq__39469_39548 = G__39562;
chunk__39470_39549 = G__39563;
count__39471_39550 = G__39564;
i__39472_39551 = G__39565;
continue;
} else {
var vec__39488_39567 = cljs.core.first(seq__39469_39560__$1);
var k_39568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39488_39567,(0),null);
var v_39569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39488_39567,(1),null);
cljs.reader.goog$module$goog$object.set(obj,cljs.core.name(k_39568),v_39569);


var G__39570 = cljs.core.next(seq__39469_39560__$1);
var G__39571 = null;
var G__39572 = (0);
var G__39573 = (0);
seq__39469_39548 = G__39570;
chunk__39470_39549 = G__39571;
count__39471_39550 = G__39572;
i__39472_39551 = G__39573;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("time","instant","time/instant",-2013236992,null),new cljs.core.Symbol("time","duration","time/duration",-1273941668,null),new cljs.core.Symbol("time","offset-date-time","time/offset-date-time",-1254592482,null),new cljs.core.Symbol("time","day-of-week","time/day-of-week",-1018890461,null),new cljs.core.Symbol("time","time","time/time",-1246984162,null),new cljs.core.Symbol("time","year-month","time/year-month",-1840595535,null),new cljs.core.Symbol("time","offset-time","time/offset-time",-1026521346,null),new cljs.core.Symbol("time","period","time/period",1291634901,null),new cljs.core.Symbol("time","zoned-date-time","time/zoned-date-time",-2125640645,null),new cljs.core.Symbol("time","month","time/month",-324062169,null),new cljs.core.Symbol("time","date","time/date",179823674,null),new cljs.core.Symbol("time","year","time/year",1979222727,null),new cljs.core.Symbol("time","month-day","time/month-day",61138729,null),new cljs.core.Symbol("time","date-time","time/date-time",1814680468,null),new cljs.core.Symbol("time","zone","time/zone",-580695523,null)],[(function (x__39320__auto__){
return time_literals.data_readers_cljs.instant(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.duration(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.offset_date_time(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.day_of_week(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.time(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.year_month(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.offset_time(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.period(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.zoned_date_time(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.month(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.date(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.year(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.month_day(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.date_time(x__39320__auto__);
}),(function (x__39320__auto__){
return time_literals.data_readers_cljs.zone(x__39320__auto__);
})])], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__39499 = arguments.length;
switch (G__39499) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__39504,reader){
var map__39505 = p__39504;
var map__39505__$1 = cljs.core.__destructure_map(map__39505);
var opts = map__39505__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__39509 = arguments.length;
switch (G__39509) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});

//# sourceMappingURL=cljs.reader.js.map
