goog.provide('cljc.java_time.instant');
goog.scope(function(){
  cljc.java_time.instant.goog$module$goog$object = goog.module.get('goog.object');
});
cljc.java_time.instant.min = cljc.java_time.instant.goog$module$goog$object.get(java.time.Instant,"MIN");
cljc.java_time.instant.epoch = cljc.java_time.instant.goog$module$goog$object.get(java.time.Instant,"EPOCH");
cljc.java_time.instant.max = cljc.java_time.instant.goog$module$goog$object.get(java.time.Instant,"MAX");
cljc.java_time.instant.truncated_to = (function cljc$java_time$instant$truncated_to(this14122,java_time_temporal_TemporalUnit14123){
return this14122.truncatedTo(java_time_temporal_TemporalUnit14123);
});
cljc.java_time.instant.range = (function cljc$java_time$instant$range(this14124,java_time_temporal_TemporalField14125){
try{return this14124.range(java_time_temporal_TemporalField14125);
}catch (e39818){if((e39818 instanceof Error)){
var e__39685__auto__ = e39818;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39818;

}
}});
cljc.java_time.instant.of_epoch_second = (function cljc$java_time$instant$of_epoch_second(var_args){
var G__39823 = arguments.length;
switch (G__39823) {
case 2:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2 = (function (long14126,long14127){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"ofEpochSecond",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long14126,long14127], 0));
}));

(cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1 = (function (long14128){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"ofEpochSecond",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long14128], 0));
}));

(cljc.java_time.instant.of_epoch_second.cljs$lang$maxFixedArity = 2);

cljc.java_time.instant.at_offset = (function cljc$java_time$instant$at_offset(this14129,java_time_ZoneOffset14130){
return this14129.atOffset(java_time_ZoneOffset14130);
});
cljc.java_time.instant.minus_millis = (function cljc$java_time$instant$minus_millis(this14131,long14132){
return this14131.minusMillis(long14132);
});
cljc.java_time.instant.get_nano = (function cljc$java_time$instant$get_nano(this14133){
return this14133.nano();
});
cljc.java_time.instant.plus_millis = (function cljc$java_time$instant$plus_millis(this14134,long14135){
return this14134.plusMillis(long14135);
});
cljc.java_time.instant.minus_seconds = (function cljc$java_time$instant$minus_seconds(this14136,long14137){
return this14136.minusSeconds(long14137);
});
cljc.java_time.instant.plus_nanos = (function cljc$java_time$instant$plus_nanos(this14138,long14139){
return this14138.plusNanos(long14139);
});
cljc.java_time.instant.plus = (function cljc$java_time$instant$plus(var_args){
var G__39846 = arguments.length;
switch (G__39846) {
case 2:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2 = (function (this14140,java_time_temporal_TemporalAmount14141){
try{return this14140.plus(java_time_temporal_TemporalAmount14141);
}catch (e39849){if((e39849 instanceof Error)){
var e__39685__auto__ = e39849;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39849;

}
}}));

(cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3 = (function (this14142,long14143,java_time_temporal_TemporalUnit14144){
try{return this14142.plus(long14143,java_time_temporal_TemporalUnit14144);
}catch (e39852){if((e39852 instanceof Error)){
var e__39685__auto__ = e39852;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39852;

}
}}));

(cljc.java_time.instant.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.query = (function cljc$java_time$instant$query(this14145,java_time_temporal_TemporalQuery14146){
return this14145.query(java_time_temporal_TemporalQuery14146);
});
cljc.java_time.instant.to_string = (function cljc$java_time$instant$to_string(this14147){
return this14147.toString();
});
cljc.java_time.instant.is_before = (function cljc$java_time$instant$is_before(this14148,java_time_Instant14149){
return this14148.isBefore(java_time_Instant14149);
});
cljc.java_time.instant.minus = (function cljc$java_time$instant$minus(var_args){
var G__39874 = arguments.length;
switch (G__39874) {
case 2:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2 = (function (this14150,java_time_temporal_TemporalAmount14151){
try{return this14150.minus(java_time_temporal_TemporalAmount14151);
}catch (e39878){if((e39878 instanceof Error)){
var e__39685__auto__ = e39878;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39878;

}
}}));

(cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3 = (function (this14152,long14153,java_time_temporal_TemporalUnit14154){
try{return this14152.minus(long14153,java_time_temporal_TemporalUnit14154);
}catch (e39888){if((e39888 instanceof Error)){
var e__39685__auto__ = e39888;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39888;

}
}}));

(cljc.java_time.instant.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.at_zone = (function cljc$java_time$instant$at_zone(this14155,java_time_ZoneId14156){
return this14155.atZone(java_time_ZoneId14156);
});
cljc.java_time.instant.of_epoch_milli = (function cljc$java_time$instant$of_epoch_milli(long14157){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"ofEpochMilli",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long14157], 0));
});
cljc.java_time.instant.get_long = (function cljc$java_time$instant$get_long(this14158,java_time_temporal_TemporalField14159){
return this14158.getLong(java_time_temporal_TemporalField14159);
});
cljc.java_time.instant.until = (function cljc$java_time$instant$until(this14160,java_time_temporal_Temporal14161,java_time_temporal_TemporalUnit14162){
try{return this14160.until(java_time_temporal_Temporal14161,java_time_temporal_TemporalUnit14162);
}catch (e39906){if((e39906 instanceof Error)){
var e__39685__auto__ = e39906;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39906;

}
}});
cljc.java_time.instant.from = (function cljc$java_time$instant$from(java_time_temporal_TemporalAccessor14163){
try{return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor14163], 0));
}catch (e39908){if((e39908 instanceof Error)){
var e__39685__auto__ = e39908;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39908;

}
}});
cljc.java_time.instant.is_after = (function cljc$java_time$instant$is_after(this14164,java_time_Instant14165){
return this14164.isAfter(java_time_Instant14165);
});
cljc.java_time.instant.minus_nanos = (function cljc$java_time$instant$minus_nanos(this14166,long14167){
return this14166.minusNanos(long14167);
});
cljc.java_time.instant.is_supported = (function cljc$java_time$instant$is_supported(this14168,G__14169){
return this14168.isSupported(G__14169);
});
cljc.java_time.instant.parse = (function cljc$java_time$instant$parse(java_lang_CharSequence14170){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence14170], 0));
});
cljc.java_time.instant.hash_code = (function cljc$java_time$instant$hash_code(this14171){
return this14171.hashCode();
});
cljc.java_time.instant.adjust_into = (function cljc$java_time$instant$adjust_into(this14172,java_time_temporal_Temporal14173){
try{return this14172.adjustInto(java_time_temporal_Temporal14173);
}catch (e39925){if((e39925 instanceof Error)){
var e__39685__auto__ = e39925;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39925;

}
}});
cljc.java_time.instant.with$ = (function cljc$java_time$instant$with(var_args){
var G__39934 = arguments.length;
switch (G__39934) {
case 3:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3 = (function (this14174,java_time_temporal_TemporalField14175,long14176){
try{return this14174.with(java_time_temporal_TemporalField14175,long14176);
}catch (e39937){if((e39937 instanceof Error)){
var e__39685__auto__ = e39937;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39937;

}
}}));

(cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2 = (function (this14177,java_time_temporal_TemporalAdjuster14178){
try{return this14177.with(java_time_temporal_TemporalAdjuster14178);
}catch (e39941){if((e39941 instanceof Error)){
var e__39685__auto__ = e39941;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39941;

}
}}));

(cljc.java_time.instant.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.now = (function cljc$java_time$instant$now(var_args){
var G__39946 = arguments.length;
switch (G__39946) {
case 0:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.Instant,"now");
}));

(cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1 = (function (java_time_Clock14179){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Clock14179], 0));
}));

(cljc.java_time.instant.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.instant.to_epoch_milli = (function cljc$java_time$instant$to_epoch_milli(this14180){
return this14180.toEpochMilli();
});
cljc.java_time.instant.get_epoch_second = (function cljc$java_time$instant$get_epoch_second(this14181){
return this14181.epochSecond();
});
cljc.java_time.instant.compare_to = (function cljc$java_time$instant$compare_to(this14182,java_time_Instant14183){
return this14182.compareTo(java_time_Instant14183);
});
cljc.java_time.instant.plus_seconds = (function cljc$java_time$instant$plus_seconds(this14184,long14185){
return this14184.plusSeconds(long14185);
});
cljc.java_time.instant.get = (function cljc$java_time$instant$get(this14186,java_time_temporal_TemporalField14187){
try{return this14186.get(java_time_temporal_TemporalField14187);
}catch (e39970){if((e39970 instanceof Error)){
var e__39685__auto__ = e39970;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljc.java_time.instant.goog$module$goog$object.get(e__39685__auto__,"stack"))].join('')));
} else {
throw e39970;

}
}});
cljc.java_time.instant.equals = (function cljc$java_time$instant$equals(this14188,java_lang_Object14189){
return this14188.equals(java_lang_Object14189);
});

//# sourceMappingURL=cljc.java_time.instant.js.map
