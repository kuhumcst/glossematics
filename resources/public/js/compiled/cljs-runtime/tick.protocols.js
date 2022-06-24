goog.provide('tick.protocols');

/**
 * @interface
 */
tick.protocols.ITruncate = function(){};

var tick$protocols$ITruncate$truncate$dyn_40164 = (function (date_time,unit_kw){
var x__5392__auto__ = (((date_time == null))?null:date_time);
var m__5393__auto__ = (tick.protocols.truncate[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(date_time,unit_kw) : m__5393__auto__.call(null,date_time,unit_kw));
} else {
var m__5391__auto__ = (tick.protocols.truncate["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(date_time,unit_kw) : m__5391__auto__.call(null,date_time,unit_kw));
} else {
throw cljs.core.missing_protocol("ITruncate.truncate",date_time);
}
}
});
tick.protocols.truncate = (function tick$protocols$truncate(date_time,unit_kw){
if((((!((date_time == null)))) && ((!((date_time.tick$protocols$ITruncate$truncate$arity$2 == null)))))){
return date_time.tick$protocols$ITruncate$truncate$arity$2(date_time,unit_kw);
} else {
return tick$protocols$ITruncate$truncate$dyn_40164(date_time,unit_kw);
}
});


/**
 * @interface
 */
tick.protocols.ITimeReify = function(){};

var tick$protocols$ITimeReify$on$dyn_40167 = (function (time,date){
var x__5392__auto__ = (((time == null))?null:time);
var m__5393__auto__ = (tick.protocols.on[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__5393__auto__.call(null,time,date));
} else {
var m__5391__auto__ = (tick.protocols.on["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__5391__auto__.call(null,time,date));
} else {
throw cljs.core.missing_protocol("ITimeReify.on",time);
}
}
});
/**
 * Set time be ON a date
 */
tick.protocols.on = (function tick$protocols$on(time,date){
if((((!((time == null)))) && ((!((time.tick$protocols$ITimeReify$on$arity$2 == null)))))){
return time.tick$protocols$ITimeReify$on$arity$2(time,date);
} else {
return tick$protocols$ITimeReify$on$dyn_40167(time,date);
}
});

var tick$protocols$ITimeReify$at$dyn_40169 = (function (date,time){
var x__5392__auto__ = (((date == null))?null:date);
var m__5393__auto__ = (tick.protocols.at[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__5393__auto__.call(null,date,time));
} else {
var m__5391__auto__ = (tick.protocols.at["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__5391__auto__.call(null,date,time));
} else {
throw cljs.core.missing_protocol("ITimeReify.at",date);
}
}
});
/**
 * Set date to be AT a time
 */
tick.protocols.at = (function tick$protocols$at(date,time){
if((((!((date == null)))) && ((!((date.tick$protocols$ITimeReify$at$arity$2 == null)))))){
return date.tick$protocols$ITimeReify$at$arity$2(date,time);
} else {
return tick$protocols$ITimeReify$at$dyn_40169(date,time);
}
});

var tick$protocols$ITimeReify$in$dyn_40170 = (function (dt,zone){
var x__5392__auto__ = (((dt == null))?null:dt);
var m__5393__auto__ = (tick.protocols.in$[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__5393__auto__.call(null,dt,zone));
} else {
var m__5391__auto__ = (tick.protocols.in$["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__5391__auto__.call(null,dt,zone));
} else {
throw cljs.core.missing_protocol("ITimeReify.in",dt);
}
}
});
/**
 * Set a date-time to be in a time-zone
 */
tick.protocols.in$ = (function tick$protocols$in(dt,zone){
if((((!((dt == null)))) && ((!((dt.tick$protocols$ITimeReify$in$arity$2 == null)))))){
return dt.tick$protocols$ITimeReify$in$arity$2(dt,zone);
} else {
return tick$protocols$ITimeReify$in$dyn_40170(dt,zone);
}
});

var tick$protocols$ITimeReify$offset_by$dyn_40171 = (function (dt,amount){
var x__5392__auto__ = (((dt == null))?null:dt);
var m__5393__auto__ = (tick.protocols.offset_by[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__5393__auto__.call(null,dt,amount));
} else {
var m__5391__auto__ = (tick.protocols.offset_by["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__5391__auto__.call(null,dt,amount));
} else {
throw cljs.core.missing_protocol("ITimeReify.offset-by",dt);
}
}
});
/**
 * Set a date-time to be offset by an amount
 */
tick.protocols.offset_by = (function tick$protocols$offset_by(dt,amount){
if((((!((dt == null)))) && ((!((dt.tick$protocols$ITimeReify$offset_by$arity$2 == null)))))){
return dt.tick$protocols$ITimeReify$offset_by$arity$2(dt,amount);
} else {
return tick$protocols$ITimeReify$offset_by$dyn_40171(dt,amount);
}
});


/**
 * @interface
 */
tick.protocols.IParseable = function(){};

var tick$protocols$IParseable$parse$dyn_40172 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.parse[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.parse["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IParseable.parse",_);
}
}
});
/**
 * 
 *  Parse is not in the main api because it is slow and may give surprising behaviour.
 *  
 *  Various tick functions in the public api  (e.g between) still accept strings as arguments and will attempt
 *  to parse the args into an applicable date/time entity before carrying out the main work of the 
 *  function. Calling these functions with strings is not recommended but has been kept for backward
 *  compatibility.
 *  
 *  Parse to most applicable instance. 
 *  
 *  Do not use this function if you know the expected format of the string
 * that you want to parse. This is partly because for example t/instant, t/date etc  will
 * be much faster, but also because if the string you pass it is not in the format you
 * expect, this function may still convert it into some entity that you weren't expecting.
 * 
 * If you have a string in a non-standard format, use a formatter and the parse fn of they entity you want.
 * 
 * For example:
 * 
 * (cljc.java-time.local-date/parse "20200202" (t/formatter "yyyyMMdd"))
 */
tick.protocols.parse = (function tick$protocols$parse(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IParseable$parse$arity$1 == null)))))){
return _.tick$protocols$IParseable$parse$arity$1(_);
} else {
return tick$protocols$IParseable$parse$dyn_40172(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeShift = function(){};

var tick$protocols$ITimeShift$forward_number$dyn_40174 = (function (_,n){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.forward_number[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5393__auto__.call(null,_,n));
} else {
var m__5391__auto__ = (tick.protocols.forward_number["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5391__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-number",_);
}
}
});
/**
 * Increment time
 */
tick.protocols.forward_number = (function tick$protocols$forward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$forward_number$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$forward_number$arity$2(_,n);
} else {
return tick$protocols$ITimeShift$forward_number$dyn_40174(_,n);
}
});

var tick$protocols$ITimeShift$forward_duration$dyn_40176 = (function (_,d){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.forward_duration[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__5393__auto__.call(null,_,d));
} else {
var m__5391__auto__ = (tick.protocols.forward_duration["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__5391__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-duration",_);
}
}
});
/**
 * Increment time
 */
tick.protocols.forward_duration = (function tick$protocols$forward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$forward_duration$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$forward_duration$arity$2(_,d);
} else {
return tick$protocols$ITimeShift$forward_duration$dyn_40176(_,d);
}
});

var tick$protocols$ITimeShift$backward_number$dyn_40178 = (function (_,n){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.backward_number[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5393__auto__.call(null,_,n));
} else {
var m__5391__auto__ = (tick.protocols.backward_number["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5391__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-number",_);
}
}
});
/**
 * Decrement time
 */
tick.protocols.backward_number = (function tick$protocols$backward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$backward_number$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$backward_number$arity$2(_,n);
} else {
return tick$protocols$ITimeShift$backward_number$dyn_40178(_,n);
}
});

var tick$protocols$ITimeShift$backward_duration$dyn_40180 = (function (_,d){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.backward_duration[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__5393__auto__.call(null,_,d));
} else {
var m__5391__auto__ = (tick.protocols.backward_duration["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__5391__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-duration",_);
}
}
});
/**
 * Decrement time
 */
tick.protocols.backward_duration = (function tick$protocols$backward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$backward_duration$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$backward_duration$arity$2(_,d);
} else {
return tick$protocols$ITimeShift$backward_duration$dyn_40180(_,d);
}
});


/**
 * @interface
 */
tick.protocols.ITimeRangeable = function(){};

var tick$protocols$ITimeRangeable$range$dyn_40186 = (function() {
var G__40187 = null;
var G__40187__1 = (function (from){
var x__5392__auto__ = (((from == null))?null:from);
var m__5393__auto__ = (tick.protocols.range[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__5393__auto__.call(null,from));
} else {
var m__5391__auto__ = (tick.protocols.range["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__5391__auto__.call(null,from));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
});
var G__40187__2 = (function (from,to){
var x__5392__auto__ = (((from == null))?null:from);
var m__5393__auto__ = (tick.protocols.range[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__5393__auto__.call(null,from,to));
} else {
var m__5391__auto__ = (tick.protocols.range["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__5391__auto__.call(null,from,to));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
});
var G__40187__3 = (function (from,to,step){
var x__5392__auto__ = (((from == null))?null:from);
var m__5393__auto__ = (tick.protocols.range[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__5393__auto__.call(null,from,to,step));
} else {
var m__5391__auto__ = (tick.protocols.range["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__5391__auto__.call(null,from,to,step));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
});
G__40187 = function(from,to,step){
switch(arguments.length){
case 1:
return G__40187__1.call(this,from);
case 2:
return G__40187__2.call(this,from,to);
case 3:
return G__40187__3.call(this,from,to,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40187.cljs$core$IFn$_invoke$arity$1 = G__40187__1;
G__40187.cljs$core$IFn$_invoke$arity$2 = G__40187__2;
G__40187.cljs$core$IFn$_invoke$arity$3 = G__40187__3;
return G__40187;
})()
;
/**
 * Returns a lazy seq of times from start (inclusive) to end (exclusive, nil means forever), by step, where start defaults to 0, step to 1, and end to infinity.
 */
tick.protocols.range = (function tick$protocols$range(var_args){
var G__39932 = arguments.length;
switch (G__39932) {
case 1:
return tick.protocols.range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.protocols.range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.protocols.range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.protocols.range.cljs$core$IFn$_invoke$arity$1 = (function (from){
if((((!((from == null)))) && ((!((from.tick$protocols$ITimeRangeable$range$arity$1 == null)))))){
return from.tick$protocols$ITimeRangeable$range$arity$1(from);
} else {
return tick$protocols$ITimeRangeable$range$dyn_40186(from);
}
}));

(tick.protocols.range.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
if((((!((from == null)))) && ((!((from.tick$protocols$ITimeRangeable$range$arity$2 == null)))))){
return from.tick$protocols$ITimeRangeable$range$arity$2(from,to);
} else {
return tick$protocols$ITimeRangeable$range$dyn_40186(from,to);
}
}));

(tick.protocols.range.cljs$core$IFn$_invoke$arity$3 = (function (from,to,step){
if((((!((from == null)))) && ((!((from.tick$protocols$ITimeRangeable$range$arity$3 == null)))))){
return from.tick$protocols$ITimeRangeable$range$arity$3(from,to,step);
} else {
return tick$protocols$ITimeRangeable$range$dyn_40186(from,to,step);
}
}));

(tick.protocols.range.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
tick.protocols.IDivisible = function(){};

var tick$protocols$IDivisible$divide$dyn_40195 = (function (t,divisor){
var x__5392__auto__ = (((t == null))?null:t);
var m__5393__auto__ = (tick.protocols.divide[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__5393__auto__.call(null,t,divisor));
} else {
var m__5391__auto__ = (tick.protocols.divide["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__5391__auto__.call(null,t,divisor));
} else {
throw cljs.core.missing_protocol("IDivisible.divide",t);
}
}
});
/**
 * Divide time
 */
tick.protocols.divide = (function tick$protocols$divide(t,divisor){
if((((!((t == null)))) && ((!((t.tick$protocols$IDivisible$divide$arity$2 == null)))))){
return t.tick$protocols$IDivisible$divide$arity$2(t,divisor);
} else {
return tick$protocols$IDivisible$divide$dyn_40195(t,divisor);
}
});


/**
 * @interface
 */
tick.protocols.IDivisibleDuration = function(){};

var tick$protocols$IDivisibleDuration$divide_duration$dyn_40198 = (function (divisor,duration){
var x__5392__auto__ = (((divisor == null))?null:divisor);
var m__5393__auto__ = (tick.protocols.divide_duration[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__5393__auto__.call(null,divisor,duration));
} else {
var m__5391__auto__ = (tick.protocols.divide_duration["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__5391__auto__.call(null,divisor,duration));
} else {
throw cljs.core.missing_protocol("IDivisibleDuration.divide-duration",divisor);
}
}
});
/**
 * Divide a duration
 */
tick.protocols.divide_duration = (function tick$protocols$divide_duration(divisor,duration){
if((((!((divisor == null)))) && ((!((divisor.tick$protocols$IDivisibleDuration$divide_duration$arity$2 == null)))))){
return divisor.tick$protocols$IDivisibleDuration$divide_duration$arity$2(divisor,duration);
} else {
return tick$protocols$IDivisibleDuration$divide_duration$dyn_40198(divisor,duration);
}
});


/**
 * @interface
 */
tick.protocols.ITimeSpan = function(){};

var tick$protocols$ITimeSpan$beginning$dyn_40199 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.beginning[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.beginning["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.beginning",_);
}
}
});
/**
 * Return the beginning of a span of time
 */
tick.protocols.beginning = (function tick$protocols$beginning(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeSpan$beginning$arity$1 == null)))))){
return _.tick$protocols$ITimeSpan$beginning$arity$1(_);
} else {
return tick$protocols$ITimeSpan$beginning$dyn_40199(_);
}
});

var tick$protocols$ITimeSpan$end$dyn_40202 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.end[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.end["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.end",_);
}
}
});
/**
 * Return the end of a span of time
 */
tick.protocols.end = (function tick$protocols$end(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeSpan$end$arity$1 == null)))))){
return _.tick$protocols$ITimeSpan$end$arity$1(_);
} else {
return tick$protocols$ITimeSpan$end$dyn_40202(_);
}
});


/**
 * @interface
 */
tick.protocols.IConversion = function(){};

var tick$protocols$IConversion$inst$dyn_40204 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.inst[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.inst["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.inst",_);
}
}
});
/**
 * Make a java.util.Date instance.
 */
tick.protocols.inst = (function tick$protocols$inst(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$inst$arity$1 == null)))))){
return _.tick$protocols$IConversion$inst$arity$1(_);
} else {
return tick$protocols$IConversion$inst$dyn_40204(_);
}
});

var tick$protocols$IConversion$instant$dyn_40205 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.instant[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.instant["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.instant",_);
}
}
});
/**
 * Make a java.time.Instant instance.
 */
tick.protocols.instant = (function tick$protocols$instant(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$instant$arity$1 == null)))))){
return _.tick$protocols$IConversion$instant$arity$1(_);
} else {
return tick$protocols$IConversion$instant$dyn_40205(_);
}
});

var tick$protocols$IConversion$offset_date_time$dyn_40208 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.offset_date_time[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.offset_date_time["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.offset-date-time",_);
}
}
});
/**
 * Make a java.time.OffsetDateTime instance.
 */
tick.protocols.offset_date_time = (function tick$protocols$offset_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$offset_date_time$arity$1 == null)))))){
return _.tick$protocols$IConversion$offset_date_time$arity$1(_);
} else {
return tick$protocols$IConversion$offset_date_time$dyn_40208(_);
}
});

var tick$protocols$IConversion$zoned_date_time$dyn_40210 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.zoned_date_time[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.zoned_date_time["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.zoned-date-time",_);
}
}
});
/**
 * Make a java.time.ZonedDateTime instance.
 */
tick.protocols.zoned_date_time = (function tick$protocols$zoned_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$zoned_date_time$arity$1 == null)))))){
return _.tick$protocols$IConversion$zoned_date_time$arity$1(_);
} else {
return tick$protocols$IConversion$zoned_date_time$dyn_40210(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeComparison = function(){};

var tick$protocols$ITimeComparison$_EQ_$dyn_40213 = (function (x,y){
var x__5392__auto__ = (((x == null))?null:x);
var m__5393__auto__ = (tick.protocols._EQ_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5393__auto__.call(null,x,y));
} else {
var m__5391__auto__ = (tick.protocols._EQ_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5391__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.=",x);
}
}
});
/**
 * Is x the same as y?
 */
tick.protocols._EQ_ = (function tick$protocols$_EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_EQ_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_EQ_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_EQ_$dyn_40213(x,y);
}
});

var tick$protocols$ITimeComparison$_LT_$dyn_40214 = (function (x,y){
var x__5392__auto__ = (((x == null))?null:x);
var m__5393__auto__ = (tick.protocols._LT_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5393__auto__.call(null,x,y));
} else {
var m__5391__auto__ = (tick.protocols._LT_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5391__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<",x);
}
}
});
/**
 * Is x before y?
 */
tick.protocols._LT_ = (function tick$protocols$_LT_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_LT_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_LT_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_LT_$dyn_40214(x,y);
}
});

var tick$protocols$ITimeComparison$_LT__EQ_$dyn_40215 = (function (x,y){
var x__5392__auto__ = (((x == null))?null:x);
var m__5393__auto__ = (tick.protocols._LT__EQ_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5393__auto__.call(null,x,y));
} else {
var m__5391__auto__ = (tick.protocols._LT__EQ_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5391__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<=",x);
}
}
});
/**
 * Is x before or at the same time as y?
 */
tick.protocols._LT__EQ_ = (function tick$protocols$_LT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_LT__EQ_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_LT__EQ_$dyn_40215(x,y);
}
});

var tick$protocols$ITimeComparison$_GT_$dyn_40217 = (function (x,y){
var x__5392__auto__ = (((x == null))?null:x);
var m__5393__auto__ = (tick.protocols._GT_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5393__auto__.call(null,x,y));
} else {
var m__5391__auto__ = (tick.protocols._GT_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5391__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>",x);
}
}
});
/**
 * Is x after y?
 */
tick.protocols._GT_ = (function tick$protocols$_GT_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_GT_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_GT_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_GT_$dyn_40217(x,y);
}
});

var tick$protocols$ITimeComparison$_GT__EQ_$dyn_40221 = (function (x,y){
var x__5392__auto__ = (((x == null))?null:x);
var m__5393__auto__ = (tick.protocols._GT__EQ_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5393__auto__.call(null,x,y));
} else {
var m__5391__auto__ = (tick.protocols._GT__EQ_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__5391__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>=",x);
}
}
});
/**
 * Is x after or at the same time as y?
 */
tick.protocols._GT__EQ_ = (function tick$protocols$_GT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_GT__EQ_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_GT__EQ_$dyn_40221(x,y);
}
});


/**
 * @interface
 */
tick.protocols.MinMax = function(){};

var tick$protocols$MinMax$min_of_type$dyn_40223 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.min_of_type[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.min_of_type["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.min-of-type",_);
}
}
});
/**
 * Return the min
 */
tick.protocols.min_of_type = (function tick$protocols$min_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$MinMax$min_of_type$arity$1 == null)))))){
return _.tick$protocols$MinMax$min_of_type$arity$1(_);
} else {
return tick$protocols$MinMax$min_of_type$dyn_40223(_);
}
});

var tick$protocols$MinMax$max_of_type$dyn_40227 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.max_of_type[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.max_of_type["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.max-of-type",_);
}
}
});
/**
 * Return the max
 */
tick.protocols.max_of_type = (function tick$protocols$max_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$MinMax$max_of_type$arity$1 == null)))))){
return _.tick$protocols$MinMax$max_of_type$arity$1(_);
} else {
return tick$protocols$MinMax$max_of_type$dyn_40227(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeArithmetic = function(){};

var tick$protocols$ITimeArithmetic$_PLUS_$dyn_40229 = (function (t,d){
var x__5392__auto__ = (((t == null))?null:t);
var m__5393__auto__ = (tick.protocols._PLUS_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__5393__auto__.call(null,t,d));
} else {
var m__5391__auto__ = (tick.protocols._PLUS_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__5391__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.+",t);
}
}
});
/**
 * Sum amounts of time
 */
tick.protocols._PLUS_ = (function tick$protocols$_PLUS_(t,d){
if((((!((t == null)))) && ((!((t.tick$protocols$ITimeArithmetic$_PLUS_$arity$2 == null)))))){
return t.tick$protocols$ITimeArithmetic$_PLUS_$arity$2(t,d);
} else {
return tick$protocols$ITimeArithmetic$_PLUS_$dyn_40229(t,d);
}
});

var tick$protocols$ITimeArithmetic$_$dyn_40230 = (function (t,d){
var x__5392__auto__ = (((t == null))?null:t);
var m__5393__auto__ = (tick.protocols._[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__5393__auto__.call(null,t,d));
} else {
var m__5391__auto__ = (tick.protocols._["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__5391__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.-",t);
}
}
});
/**
 * Subtract from amount of time, or negate
 */
tick.protocols._ = (function tick$protocols$_(t,d){
if((((!((t == null)))) && ((!((t.tick$protocols$ITimeArithmetic$_$arity$2 == null)))))){
return t.tick$protocols$ITimeArithmetic$_$arity$2(t,d);
} else {
return tick$protocols$ITimeArithmetic$_$dyn_40230(t,d);
}
});


/**
 * @interface
 */
tick.protocols.IBetween = function(){};

var tick$protocols$IBetween$between$dyn_40231 = (function (v1,v2){
var x__5392__auto__ = (((v1 == null))?null:v1);
var m__5393__auto__ = (tick.protocols.between[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__5393__auto__.call(null,v1,v2));
} else {
var m__5391__auto__ = (tick.protocols.between["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__5391__auto__.call(null,v1,v2));
} else {
throw cljs.core.missing_protocol("IBetween.between",v1);
}
}
});
/**
 * Return the duration (or period) between two times
 */
tick.protocols.between = (function tick$protocols$between(v1,v2){
if((((!((v1 == null)))) && ((!((v1.tick$protocols$IBetween$between$arity$2 == null)))))){
return v1.tick$protocols$IBetween$between$arity$2(v1,v2);
} else {
return tick$protocols$IBetween$between$dyn_40231(v1,v2);
}
});


/**
 * @interface
 */
tick.protocols.ILocalTime = function(){};

var tick$protocols$ILocalTime$local_QMARK_$dyn_40233 = (function (t){
var x__5392__auto__ = (((t == null))?null:t);
var m__5393__auto__ = (tick.protocols.local_QMARK_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__5393__auto__.call(null,t));
} else {
var m__5391__auto__ = (tick.protocols.local_QMARK_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__5391__auto__.call(null,t));
} else {
throw cljs.core.missing_protocol("ILocalTime.local?",t);
}
}
});
/**
 * Is the time a java.time.LocalTime or java.time.LocalDateTime?
 */
tick.protocols.local_QMARK_ = (function tick$protocols$local_QMARK_(t){
if((((!((t == null)))) && ((!((t.tick$protocols$ILocalTime$local_QMARK_$arity$1 == null)))))){
return t.tick$protocols$ILocalTime$local_QMARK_$arity$1(t);
} else {
return tick$protocols$ILocalTime$local_QMARK_$dyn_40233(t);
}
});


/**
 * @interface
 */
tick.protocols.IClock = function(){};

var tick$protocols$IClock$clock$dyn_40234 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.clock[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.clock["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IClock.clock",_);
}
}
});
/**
 * Make a clock
 */
tick.protocols.clock = (function tick$protocols$clock(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IClock$clock$arity$1 == null)))))){
return _.tick$protocols$IClock$clock$arity$1(_);
} else {
return tick$protocols$IClock$clock$dyn_40234(_);
}
});


/**
 * @interface
 */
tick.protocols.IExtraction = function(){};

var tick$protocols$IExtraction$time$dyn_40236 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.time[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.time["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.time",_);
}
}
});
/**
 * Make a java.time.LocalTime instance.
 */
tick.protocols.time = (function tick$protocols$time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$time$arity$1 == null)))))){
return _.tick$protocols$IExtraction$time$arity$1(_);
} else {
return tick$protocols$IExtraction$time$dyn_40236(_);
}
});

var tick$protocols$IExtraction$date$dyn_40237 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.date[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.date["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date",_);
}
}
});
/**
 * Make a java.time.LocalDate instance.
 */
tick.protocols.date = (function tick$protocols$date(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$date$arity$1 == null)))))){
return _.tick$protocols$IExtraction$date$arity$1(_);
} else {
return tick$protocols$IExtraction$date$dyn_40237(_);
}
});

var tick$protocols$IExtraction$date_time$dyn_40239 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.date_time[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.date_time["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date-time",_);
}
}
});
/**
 * Make a java.time.LocalDateTime instance.
 */
tick.protocols.date_time = (function tick$protocols$date_time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$date_time$arity$1 == null)))))){
return _.tick$protocols$IExtraction$date_time$arity$1(_);
} else {
return tick$protocols$IExtraction$date_time$dyn_40239(_);
}
});

var tick$protocols$IExtraction$nanosecond$dyn_40241 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.nanosecond[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.nanosecond["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.nanosecond",_);
}
}
});
/**
 * Return the millisecond field of the given time
 */
tick.protocols.nanosecond = (function tick$protocols$nanosecond(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$nanosecond$arity$1 == null)))))){
return _.tick$protocols$IExtraction$nanosecond$arity$1(_);
} else {
return tick$protocols$IExtraction$nanosecond$dyn_40241(_);
}
});

var tick$protocols$IExtraction$microsecond$dyn_40243 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.microsecond[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.microsecond["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.microsecond",_);
}
}
});
/**
 * Return the millisecond field of the given time
 */
tick.protocols.microsecond = (function tick$protocols$microsecond(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$microsecond$arity$1 == null)))))){
return _.tick$protocols$IExtraction$microsecond$arity$1(_);
} else {
return tick$protocols$IExtraction$microsecond$dyn_40243(_);
}
});

var tick$protocols$IExtraction$millisecond$dyn_40245 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.millisecond[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.millisecond["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.millisecond",_);
}
}
});
/**
 * Return the millisecond field of the given time
 */
tick.protocols.millisecond = (function tick$protocols$millisecond(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$millisecond$arity$1 == null)))))){
return _.tick$protocols$IExtraction$millisecond$arity$1(_);
} else {
return tick$protocols$IExtraction$millisecond$dyn_40245(_);
}
});

var tick$protocols$IExtraction$second$dyn_40247 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.second[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.second["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.second",_);
}
}
});
/**
 * Return the second field of the given time
 */
tick.protocols.second = (function tick$protocols$second(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$second$arity$1 == null)))))){
return _.tick$protocols$IExtraction$second$arity$1(_);
} else {
return tick$protocols$IExtraction$second$dyn_40247(_);
}
});

var tick$protocols$IExtraction$minute$dyn_40248 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.minute[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.minute["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.minute",_);
}
}
});
/**
 * Return the minute field of the given time
 */
tick.protocols.minute = (function tick$protocols$minute(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$minute$arity$1 == null)))))){
return _.tick$protocols$IExtraction$minute$arity$1(_);
} else {
return tick$protocols$IExtraction$minute$dyn_40248(_);
}
});

var tick$protocols$IExtraction$hour$dyn_40249 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.hour[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.hour["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.hour",_);
}
}
});
/**
 * Return the hour field of the given time
 */
tick.protocols.hour = (function tick$protocols$hour(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$hour$arity$1 == null)))))){
return _.tick$protocols$IExtraction$hour$arity$1(_);
} else {
return tick$protocols$IExtraction$hour$dyn_40249(_);
}
});

var tick$protocols$IExtraction$day_of_week$dyn_40250 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.day_of_week[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.day_of_week["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-week",_);
}
}
});
/**
 * Make a java.time.DayOfWeek instance.
 */
tick.protocols.day_of_week = (function tick$protocols$day_of_week(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$day_of_week$arity$1 == null)))))){
return _.tick$protocols$IExtraction$day_of_week$arity$1(_);
} else {
return tick$protocols$IExtraction$day_of_week$dyn_40250(_);
}
});

var tick$protocols$IExtraction$day_of_month$dyn_40251 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.day_of_month[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.day_of_month["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-month",_);
}
}
});
/**
 * Return value of the day in the month as an integer.
 */
tick.protocols.day_of_month = (function tick$protocols$day_of_month(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$day_of_month$arity$1 == null)))))){
return _.tick$protocols$IExtraction$day_of_month$arity$1(_);
} else {
return tick$protocols$IExtraction$day_of_month$dyn_40251(_);
}
});

var tick$protocols$IExtraction$int$dyn_40253 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.int$[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.int$["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.int",_);
}
}
});
/**
 * Return value as integer
 */
tick.protocols.int$ = (function tick$protocols$int(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$int$arity$1 == null)))))){
return _.tick$protocols$IExtraction$int$arity$1(_);
} else {
return tick$protocols$IExtraction$int$dyn_40253(_);
}
});

var tick$protocols$IExtraction$long$dyn_40256 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.long$[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.long$["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.long",_);
}
}
});
/**
 * Return value as long
 */
tick.protocols.long$ = (function tick$protocols$long(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$long$arity$1 == null)))))){
return _.tick$protocols$IExtraction$long$arity$1(_);
} else {
return tick$protocols$IExtraction$long$dyn_40256(_);
}
});

var tick$protocols$IExtraction$month$dyn_40259 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.month[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.month["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.month",_);
}
}
});
/**
 * Make a java.time.Month instance.
 */
tick.protocols.month = (function tick$protocols$month(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$month$arity$1 == null)))))){
return _.tick$protocols$IExtraction$month$arity$1(_);
} else {
return tick$protocols$IExtraction$month$dyn_40259(_);
}
});

var tick$protocols$IExtraction$year$dyn_40262 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.year[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.year["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year",_);
}
}
});
/**
 * Make a java.time.Year instance.
 */
tick.protocols.year = (function tick$protocols$year(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$year$arity$1 == null)))))){
return _.tick$protocols$IExtraction$year$arity$1(_);
} else {
return tick$protocols$IExtraction$year$dyn_40262(_);
}
});

var tick$protocols$IExtraction$year_month$dyn_40263 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.year_month[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.year_month["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year-month",_);
}
}
});
/**
 * Make a java.time.YearMonth instance.
 */
tick.protocols.year_month = (function tick$protocols$year_month(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$year_month$arity$1 == null)))))){
return _.tick$protocols$IExtraction$year_month$arity$1(_);
} else {
return tick$protocols$IExtraction$year_month$dyn_40263(_);
}
});

var tick$protocols$IExtraction$zone$dyn_40264 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.zone[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.zone["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone",_);
}
}
});
/**
 * Make a java.time.ZoneId instance.
 */
tick.protocols.zone = (function tick$protocols$zone(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$zone$arity$1 == null)))))){
return _.tick$protocols$IExtraction$zone$arity$1(_);
} else {
return tick$protocols$IExtraction$zone$dyn_40264(_);
}
});

var tick$protocols$IExtraction$zone_offset$dyn_40267 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.zone_offset[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.zone_offset["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone-offset",_);
}
}
});
/**
 * Make a java.time.ZoneOffset instance.
 */
tick.protocols.zone_offset = (function tick$protocols$zone_offset(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$zone_offset$arity$1 == null)))))){
return _.tick$protocols$IExtraction$zone_offset$arity$1(_);
} else {
return tick$protocols$IExtraction$zone_offset$dyn_40267(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeLength = function(){};

var tick$protocols$ITimeLength$nanos$dyn_40268 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.nanos[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.nanos["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.nanos",_);
}
}
});
/**
 * Return the given quantity in nanoseconds.
 */
tick.protocols.nanos = (function tick$protocols$nanos(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$nanos$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$nanos$arity$1(_);
} else {
return tick$protocols$ITimeLength$nanos$dyn_40268(_);
}
});

var tick$protocols$ITimeLength$micros$dyn_40269 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.micros[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.micros["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.micros",_);
}
}
});
/**
 * Return the given quantity in microseconds.
 */
tick.protocols.micros = (function tick$protocols$micros(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$micros$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$micros$arity$1(_);
} else {
return tick$protocols$ITimeLength$micros$dyn_40269(_);
}
});

var tick$protocols$ITimeLength$millis$dyn_40270 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.millis[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.millis["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.millis",_);
}
}
});
/**
 * Return the given quantity in milliseconds.
 */
tick.protocols.millis = (function tick$protocols$millis(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$millis$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$millis$arity$1(_);
} else {
return tick$protocols$ITimeLength$millis$dyn_40270(_);
}
});

var tick$protocols$ITimeLength$seconds$dyn_40271 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.seconds[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.seconds["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.seconds",_);
}
}
});
/**
 * Return the given quantity in seconds.
 */
tick.protocols.seconds = (function tick$protocols$seconds(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$seconds$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$seconds$arity$1(_);
} else {
return tick$protocols$ITimeLength$seconds$dyn_40271(_);
}
});

var tick$protocols$ITimeLength$minutes$dyn_40272 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.minutes[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.minutes["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.minutes",_);
}
}
});
/**
 * Return the given quantity in minutes.
 */
tick.protocols.minutes = (function tick$protocols$minutes(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$minutes$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$minutes$arity$1(_);
} else {
return tick$protocols$ITimeLength$minutes$dyn_40272(_);
}
});

var tick$protocols$ITimeLength$hours$dyn_40273 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.hours[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.hours["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.hours",_);
}
}
});
/**
 * Return the given quantity in hours.
 */
tick.protocols.hours = (function tick$protocols$hours(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$hours$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$hours$arity$1(_);
} else {
return tick$protocols$ITimeLength$hours$dyn_40273(_);
}
});

var tick$protocols$ITimeLength$days$dyn_40274 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.days[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.days["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.days",_);
}
}
});
/**
 * Return the given quantity in days.
 */
tick.protocols.days = (function tick$protocols$days(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$days$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$days$arity$1(_);
} else {
return tick$protocols$ITimeLength$days$dyn_40274(_);
}
});

var tick$protocols$ITimeLength$months$dyn_40275 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.months[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.months["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.months",_);
}
}
});
/**
 * Return the given quantity in months.
 */
tick.protocols.months = (function tick$protocols$months(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$months$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$months$arity$1(_);
} else {
return tick$protocols$ITimeLength$months$dyn_40275(_);
}
});

var tick$protocols$ITimeLength$years$dyn_40276 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (tick.protocols.years[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (tick.protocols.years["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.years",_);
}
}
});
/**
 * Return the given quantity in years.
 */
tick.protocols.years = (function tick$protocols$years(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$years$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$years$arity$1(_);
} else {
return tick$protocols$ITimeLength$years$dyn_40276(_);
}
});


//# sourceMappingURL=tick.protocols.js.map
