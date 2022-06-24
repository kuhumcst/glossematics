goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5774__auto__ = [];
var len__5768__auto___38861 = arguments.length;
var i__5769__auto___38862 = (0);
while(true){
if((i__5769__auto___38862 < len__5768__auto___38861)){
args__5774__auto__.push((arguments[i__5769__auto___38862]));

var G__38866 = (i__5769__auto___38862 + (1));
i__5769__auto___38862 = G__38866;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37803){
var G__37804 = cljs.core.first(seq37803);
var seq37803__$1 = cljs.core.next(seq37803);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37804,seq37803__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37813 = cljs.core.seq(sources);
var chunk__37815 = null;
var count__37816 = (0);
var i__37817 = (0);
while(true){
if((i__37817 < count__37816)){
var map__37837 = chunk__37815.cljs$core$IIndexed$_nth$arity$2(null,i__37817);
var map__37837__$1 = cljs.core.__destructure_map(map__37837);
var src = map__37837__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37842){var e_38875 = e37842;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38875);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38875.message)].join('')));
}

var G__38876 = seq__37813;
var G__38877 = chunk__37815;
var G__38878 = count__37816;
var G__38879 = (i__37817 + (1));
seq__37813 = G__38876;
chunk__37815 = G__38877;
count__37816 = G__38878;
i__37817 = G__38879;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37813);
if(temp__5804__auto__){
var seq__37813__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37813__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__37813__$1);
var G__38882 = cljs.core.chunk_rest(seq__37813__$1);
var G__38883 = c__5567__auto__;
var G__38884 = cljs.core.count(c__5567__auto__);
var G__38885 = (0);
seq__37813 = G__38882;
chunk__37815 = G__38883;
count__37816 = G__38884;
i__37817 = G__38885;
continue;
} else {
var map__37845 = cljs.core.first(seq__37813__$1);
var map__37845__$1 = cljs.core.__destructure_map(map__37845);
var src = map__37845__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37849){var e_38891 = e37849;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38891);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38891.message)].join('')));
}

var G__38893 = cljs.core.next(seq__37813__$1);
var G__38894 = null;
var G__38895 = (0);
var G__38896 = (0);
seq__37813 = G__38893;
chunk__37815 = G__38894;
count__37816 = G__38895;
i__37817 = G__38896;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37861 = cljs.core.seq(js_requires);
var chunk__37862 = null;
var count__37863 = (0);
var i__37864 = (0);
while(true){
if((i__37864 < count__37863)){
var js_ns = chunk__37862.cljs$core$IIndexed$_nth$arity$2(null,i__37864);
var require_str_38901 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38901);


var G__38902 = seq__37861;
var G__38903 = chunk__37862;
var G__38904 = count__37863;
var G__38905 = (i__37864 + (1));
seq__37861 = G__38902;
chunk__37862 = G__38903;
count__37863 = G__38904;
i__37864 = G__38905;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37861);
if(temp__5804__auto__){
var seq__37861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37861__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__37861__$1);
var G__38906 = cljs.core.chunk_rest(seq__37861__$1);
var G__38907 = c__5567__auto__;
var G__38908 = cljs.core.count(c__5567__auto__);
var G__38909 = (0);
seq__37861 = G__38906;
chunk__37862 = G__38907;
count__37863 = G__38908;
i__37864 = G__38909;
continue;
} else {
var js_ns = cljs.core.first(seq__37861__$1);
var require_str_38910 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38910);


var G__38911 = cljs.core.next(seq__37861__$1);
var G__38912 = null;
var G__38913 = (0);
var G__38914 = (0);
seq__37861 = G__38911;
chunk__37862 = G__38912;
count__37863 = G__38913;
i__37864 = G__38914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37879){
var map__37882 = p__37879;
var map__37882__$1 = cljs.core.__destructure_map(map__37882);
var msg = map__37882__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5522__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37885(s__37886){
return (new cljs.core.LazySeq(null,(function (){
var s__37886__$1 = s__37886;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37886__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37894 = cljs.core.first(xs__6360__auto__);
var map__37894__$1 = cljs.core.__destructure_map(map__37894);
var src = map__37894__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5518__auto__ = ((function (s__37886__$1,map__37894,map__37894__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37882,map__37882__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37885_$_iter__37887(s__37888){
return (new cljs.core.LazySeq(null,((function (s__37886__$1,map__37894,map__37894__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37882,map__37882__$1,msg,info,reload_info){
return (function (){
var s__37888__$1 = s__37888;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37888__$1);
if(temp__5804__auto____$1){
var s__37888__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37888__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__37888__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__37890 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__37889 = (0);
while(true){
if((i__37889 < size__5521__auto__)){
var warning = cljs.core._nth(c__5520__auto__,i__37889);
cljs.core.chunk_append(b__37890,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38924 = (i__37889 + (1));
i__37889 = G__38924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37890),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37885_$_iter__37887(cljs.core.chunk_rest(s__37888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37890),null);
}
} else {
var warning = cljs.core.first(s__37888__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37885_$_iter__37887(cljs.core.rest(s__37888__$2)));
}
} else {
return null;
}
break;
}
});})(s__37886__$1,map__37894,map__37894__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37882,map__37882__$1,msg,info,reload_info))
,null,null));
});})(s__37886__$1,map__37894,map__37894__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37882,map__37882__$1,msg,info,reload_info))
;
var fs__5519__auto__ = cljs.core.seq(iterys__5518__auto__(warnings));
if(fs__5519__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5519__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37885(cljs.core.rest(s__37886__$1)));
} else {
var G__38926 = cljs.core.rest(s__37886__$1);
s__37886__$1 = G__38926;
continue;
}
} else {
var G__38927 = cljs.core.rest(s__37886__$1);
s__37886__$1 = G__38927;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37907_38928 = cljs.core.seq(warnings);
var chunk__37908_38929 = null;
var count__37909_38930 = (0);
var i__37910_38931 = (0);
while(true){
if((i__37910_38931 < count__37909_38930)){
var map__37922_38932 = chunk__37908_38929.cljs$core$IIndexed$_nth$arity$2(null,i__37910_38931);
var map__37922_38933__$1 = cljs.core.__destructure_map(map__37922_38932);
var w_38934 = map__37922_38933__$1;
var msg_38935__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922_38933__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922_38933__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922_38933__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922_38933__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38938)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38936),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38937),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38935__$1)].join(''));


var G__38941 = seq__37907_38928;
var G__38942 = chunk__37908_38929;
var G__38943 = count__37909_38930;
var G__38944 = (i__37910_38931 + (1));
seq__37907_38928 = G__38941;
chunk__37908_38929 = G__38942;
count__37909_38930 = G__38943;
i__37910_38931 = G__38944;
continue;
} else {
var temp__5804__auto___38945 = cljs.core.seq(seq__37907_38928);
if(temp__5804__auto___38945){
var seq__37907_38946__$1 = temp__5804__auto___38945;
if(cljs.core.chunked_seq_QMARK_(seq__37907_38946__$1)){
var c__5567__auto___38948 = cljs.core.chunk_first(seq__37907_38946__$1);
var G__38949 = cljs.core.chunk_rest(seq__37907_38946__$1);
var G__38950 = c__5567__auto___38948;
var G__38951 = cljs.core.count(c__5567__auto___38948);
var G__38952 = (0);
seq__37907_38928 = G__38949;
chunk__37908_38929 = G__38950;
count__37909_38930 = G__38951;
i__37910_38931 = G__38952;
continue;
} else {
var map__37931_38953 = cljs.core.first(seq__37907_38946__$1);
var map__37931_38954__$1 = cljs.core.__destructure_map(map__37931_38953);
var w_38955 = map__37931_38954__$1;
var msg_38956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931_38954__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931_38954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931_38954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931_38954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38959)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38957),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38958),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38956__$1)].join(''));


var G__38961 = cljs.core.next(seq__37907_38946__$1);
var G__38962 = null;
var G__38963 = (0);
var G__38964 = (0);
seq__37907_38928 = G__38961;
chunk__37908_38929 = G__38962;
count__37909_38930 = G__38963;
i__37910_38931 = G__38964;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37878_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37878_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37965){
var map__37966 = p__37965;
var map__37966__$1 = cljs.core.__destructure_map(map__37966);
var msg = map__37966__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37966__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37966__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37969 = cljs.core.seq(updates);
var chunk__37971 = null;
var count__37972 = (0);
var i__37973 = (0);
while(true){
if((i__37973 < count__37972)){
var path = chunk__37971.cljs$core$IIndexed$_nth$arity$2(null,i__37973);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38401_38968 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38405_38969 = null;
var count__38406_38970 = (0);
var i__38407_38971 = (0);
while(true){
if((i__38407_38971 < count__38406_38970)){
var node_38973 = chunk__38405_38969.cljs$core$IIndexed$_nth$arity$2(null,i__38407_38971);
if(cljs.core.not(node_38973.shadow$old)){
var path_match_38974 = shadow.cljs.devtools.client.browser.match_paths(node_38973.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38974)){
var new_link_38975 = (function (){var G__38466 = node_38973.cloneNode(true);
G__38466.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38974),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38466;
})();
(node_38973.shadow$old = true);

(new_link_38975.onload = ((function (seq__38401_38968,chunk__38405_38969,count__38406_38970,i__38407_38971,seq__37969,chunk__37971,count__37972,i__37973,new_link_38975,path_match_38974,node_38973,path,map__37966,map__37966__$1,msg,updates,reload_info){
return (function (e){
var seq__38469_38977 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38471_38978 = null;
var count__38472_38979 = (0);
var i__38473_38980 = (0);
while(true){
if((i__38473_38980 < count__38472_38979)){
var map__38504_38981 = chunk__38471_38978.cljs$core$IIndexed$_nth$arity$2(null,i__38473_38980);
var map__38504_38982__$1 = cljs.core.__destructure_map(map__38504_38981);
var task_38983 = map__38504_38982__$1;
var fn_str_38984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504_38982__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504_38982__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38986 = goog.getObjectByName(fn_str_38984,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38985)].join(''));

(fn_obj_38986.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38986.cljs$core$IFn$_invoke$arity$2(path,new_link_38975) : fn_obj_38986.call(null,path,new_link_38975));


var G__38988 = seq__38469_38977;
var G__38989 = chunk__38471_38978;
var G__38990 = count__38472_38979;
var G__38991 = (i__38473_38980 + (1));
seq__38469_38977 = G__38988;
chunk__38471_38978 = G__38989;
count__38472_38979 = G__38990;
i__38473_38980 = G__38991;
continue;
} else {
var temp__5804__auto___38992 = cljs.core.seq(seq__38469_38977);
if(temp__5804__auto___38992){
var seq__38469_38993__$1 = temp__5804__auto___38992;
if(cljs.core.chunked_seq_QMARK_(seq__38469_38993__$1)){
var c__5567__auto___38994 = cljs.core.chunk_first(seq__38469_38993__$1);
var G__38995 = cljs.core.chunk_rest(seq__38469_38993__$1);
var G__38996 = c__5567__auto___38994;
var G__38997 = cljs.core.count(c__5567__auto___38994);
var G__38998 = (0);
seq__38469_38977 = G__38995;
chunk__38471_38978 = G__38996;
count__38472_38979 = G__38997;
i__38473_38980 = G__38998;
continue;
} else {
var map__38511_38999 = cljs.core.first(seq__38469_38993__$1);
var map__38511_39000__$1 = cljs.core.__destructure_map(map__38511_38999);
var task_39001 = map__38511_39000__$1;
var fn_str_39002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38511_39000__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38511_39000__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39005 = goog.getObjectByName(fn_str_39002,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39003)].join(''));

(fn_obj_39005.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39005.cljs$core$IFn$_invoke$arity$2(path,new_link_38975) : fn_obj_39005.call(null,path,new_link_38975));


var G__39006 = cljs.core.next(seq__38469_38993__$1);
var G__39007 = null;
var G__39008 = (0);
var G__39009 = (0);
seq__38469_38977 = G__39006;
chunk__38471_38978 = G__39007;
count__38472_38979 = G__39008;
i__38473_38980 = G__39009;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38973);
});})(seq__38401_38968,chunk__38405_38969,count__38406_38970,i__38407_38971,seq__37969,chunk__37971,count__37972,i__37973,new_link_38975,path_match_38974,node_38973,path,map__37966,map__37966__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38974], 0));

goog.dom.insertSiblingAfter(new_link_38975,node_38973);


var G__39012 = seq__38401_38968;
var G__39013 = chunk__38405_38969;
var G__39014 = count__38406_38970;
var G__39015 = (i__38407_38971 + (1));
seq__38401_38968 = G__39012;
chunk__38405_38969 = G__39013;
count__38406_38970 = G__39014;
i__38407_38971 = G__39015;
continue;
} else {
var G__39016 = seq__38401_38968;
var G__39017 = chunk__38405_38969;
var G__39018 = count__38406_38970;
var G__39019 = (i__38407_38971 + (1));
seq__38401_38968 = G__39016;
chunk__38405_38969 = G__39017;
count__38406_38970 = G__39018;
i__38407_38971 = G__39019;
continue;
}
} else {
var G__39020 = seq__38401_38968;
var G__39021 = chunk__38405_38969;
var G__39022 = count__38406_38970;
var G__39023 = (i__38407_38971 + (1));
seq__38401_38968 = G__39020;
chunk__38405_38969 = G__39021;
count__38406_38970 = G__39022;
i__38407_38971 = G__39023;
continue;
}
} else {
var temp__5804__auto___39024 = cljs.core.seq(seq__38401_38968);
if(temp__5804__auto___39024){
var seq__38401_39025__$1 = temp__5804__auto___39024;
if(cljs.core.chunked_seq_QMARK_(seq__38401_39025__$1)){
var c__5567__auto___39026 = cljs.core.chunk_first(seq__38401_39025__$1);
var G__39028 = cljs.core.chunk_rest(seq__38401_39025__$1);
var G__39029 = c__5567__auto___39026;
var G__39030 = cljs.core.count(c__5567__auto___39026);
var G__39031 = (0);
seq__38401_38968 = G__39028;
chunk__38405_38969 = G__39029;
count__38406_38970 = G__39030;
i__38407_38971 = G__39031;
continue;
} else {
var node_39032 = cljs.core.first(seq__38401_39025__$1);
if(cljs.core.not(node_39032.shadow$old)){
var path_match_39033 = shadow.cljs.devtools.client.browser.match_paths(node_39032.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39033)){
var new_link_39034 = (function (){var G__38527 = node_39032.cloneNode(true);
G__38527.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39033),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38527;
})();
(node_39032.shadow$old = true);

(new_link_39034.onload = ((function (seq__38401_38968,chunk__38405_38969,count__38406_38970,i__38407_38971,seq__37969,chunk__37971,count__37972,i__37973,new_link_39034,path_match_39033,node_39032,seq__38401_39025__$1,temp__5804__auto___39024,path,map__37966,map__37966__$1,msg,updates,reload_info){
return (function (e){
var seq__38529_39037 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38531_39038 = null;
var count__38532_39039 = (0);
var i__38533_39040 = (0);
while(true){
if((i__38533_39040 < count__38532_39039)){
var map__38545_39041 = chunk__38531_39038.cljs$core$IIndexed$_nth$arity$2(null,i__38533_39040);
var map__38545_39042__$1 = cljs.core.__destructure_map(map__38545_39041);
var task_39043 = map__38545_39042__$1;
var fn_str_39044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38545_39042__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38545_39042__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39047 = goog.getObjectByName(fn_str_39044,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39045)].join(''));

(fn_obj_39047.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39047.cljs$core$IFn$_invoke$arity$2(path,new_link_39034) : fn_obj_39047.call(null,path,new_link_39034));


var G__39048 = seq__38529_39037;
var G__39049 = chunk__38531_39038;
var G__39050 = count__38532_39039;
var G__39051 = (i__38533_39040 + (1));
seq__38529_39037 = G__39048;
chunk__38531_39038 = G__39049;
count__38532_39039 = G__39050;
i__38533_39040 = G__39051;
continue;
} else {
var temp__5804__auto___39054__$1 = cljs.core.seq(seq__38529_39037);
if(temp__5804__auto___39054__$1){
var seq__38529_39056__$1 = temp__5804__auto___39054__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38529_39056__$1)){
var c__5567__auto___39059 = cljs.core.chunk_first(seq__38529_39056__$1);
var G__39060 = cljs.core.chunk_rest(seq__38529_39056__$1);
var G__39061 = c__5567__auto___39059;
var G__39062 = cljs.core.count(c__5567__auto___39059);
var G__39063 = (0);
seq__38529_39037 = G__39060;
chunk__38531_39038 = G__39061;
count__38532_39039 = G__39062;
i__38533_39040 = G__39063;
continue;
} else {
var map__38551_39064 = cljs.core.first(seq__38529_39056__$1);
var map__38551_39065__$1 = cljs.core.__destructure_map(map__38551_39064);
var task_39066 = map__38551_39065__$1;
var fn_str_39067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38551_39065__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38551_39065__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39069 = goog.getObjectByName(fn_str_39067,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39068)].join(''));

(fn_obj_39069.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39069.cljs$core$IFn$_invoke$arity$2(path,new_link_39034) : fn_obj_39069.call(null,path,new_link_39034));


var G__39072 = cljs.core.next(seq__38529_39056__$1);
var G__39073 = null;
var G__39074 = (0);
var G__39075 = (0);
seq__38529_39037 = G__39072;
chunk__38531_39038 = G__39073;
count__38532_39039 = G__39074;
i__38533_39040 = G__39075;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39032);
});})(seq__38401_38968,chunk__38405_38969,count__38406_38970,i__38407_38971,seq__37969,chunk__37971,count__37972,i__37973,new_link_39034,path_match_39033,node_39032,seq__38401_39025__$1,temp__5804__auto___39024,path,map__37966,map__37966__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39033], 0));

goog.dom.insertSiblingAfter(new_link_39034,node_39032);


var G__39078 = cljs.core.next(seq__38401_39025__$1);
var G__39079 = null;
var G__39080 = (0);
var G__39081 = (0);
seq__38401_38968 = G__39078;
chunk__38405_38969 = G__39079;
count__38406_38970 = G__39080;
i__38407_38971 = G__39081;
continue;
} else {
var G__39082 = cljs.core.next(seq__38401_39025__$1);
var G__39083 = null;
var G__39084 = (0);
var G__39085 = (0);
seq__38401_38968 = G__39082;
chunk__38405_38969 = G__39083;
count__38406_38970 = G__39084;
i__38407_38971 = G__39085;
continue;
}
} else {
var G__39086 = cljs.core.next(seq__38401_39025__$1);
var G__39087 = null;
var G__39088 = (0);
var G__39089 = (0);
seq__38401_38968 = G__39086;
chunk__38405_38969 = G__39087;
count__38406_38970 = G__39088;
i__38407_38971 = G__39089;
continue;
}
}
} else {
}
}
break;
}


var G__39090 = seq__37969;
var G__39091 = chunk__37971;
var G__39092 = count__37972;
var G__39093 = (i__37973 + (1));
seq__37969 = G__39090;
chunk__37971 = G__39091;
count__37972 = G__39092;
i__37973 = G__39093;
continue;
} else {
var G__39095 = seq__37969;
var G__39096 = chunk__37971;
var G__39097 = count__37972;
var G__39098 = (i__37973 + (1));
seq__37969 = G__39095;
chunk__37971 = G__39096;
count__37972 = G__39097;
i__37973 = G__39098;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37969);
if(temp__5804__auto__){
var seq__37969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37969__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__37969__$1);
var G__39100 = cljs.core.chunk_rest(seq__37969__$1);
var G__39101 = c__5567__auto__;
var G__39102 = cljs.core.count(c__5567__auto__);
var G__39103 = (0);
seq__37969 = G__39100;
chunk__37971 = G__39101;
count__37972 = G__39102;
i__37973 = G__39103;
continue;
} else {
var path = cljs.core.first(seq__37969__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38560_39107 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38564_39108 = null;
var count__38565_39109 = (0);
var i__38566_39110 = (0);
while(true){
if((i__38566_39110 < count__38565_39109)){
var node_39112 = chunk__38564_39108.cljs$core$IIndexed$_nth$arity$2(null,i__38566_39110);
if(cljs.core.not(node_39112.shadow$old)){
var path_match_39114 = shadow.cljs.devtools.client.browser.match_paths(node_39112.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39114)){
var new_link_39116 = (function (){var G__38631 = node_39112.cloneNode(true);
G__38631.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39114),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38631;
})();
(node_39112.shadow$old = true);

(new_link_39116.onload = ((function (seq__38560_39107,chunk__38564_39108,count__38565_39109,i__38566_39110,seq__37969,chunk__37971,count__37972,i__37973,new_link_39116,path_match_39114,node_39112,path,seq__37969__$1,temp__5804__auto__,map__37966,map__37966__$1,msg,updates,reload_info){
return (function (e){
var seq__38633_39122 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38636_39123 = null;
var count__38637_39124 = (0);
var i__38638_39125 = (0);
while(true){
if((i__38638_39125 < count__38637_39124)){
var map__38649_39126 = chunk__38636_39123.cljs$core$IIndexed$_nth$arity$2(null,i__38638_39125);
var map__38649_39127__$1 = cljs.core.__destructure_map(map__38649_39126);
var task_39128 = map__38649_39127__$1;
var fn_str_39129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38649_39127__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38649_39127__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39133 = goog.getObjectByName(fn_str_39129,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39130)].join(''));

(fn_obj_39133.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39133.cljs$core$IFn$_invoke$arity$2(path,new_link_39116) : fn_obj_39133.call(null,path,new_link_39116));


var G__39134 = seq__38633_39122;
var G__39135 = chunk__38636_39123;
var G__39136 = count__38637_39124;
var G__39137 = (i__38638_39125 + (1));
seq__38633_39122 = G__39134;
chunk__38636_39123 = G__39135;
count__38637_39124 = G__39136;
i__38638_39125 = G__39137;
continue;
} else {
var temp__5804__auto___39140__$1 = cljs.core.seq(seq__38633_39122);
if(temp__5804__auto___39140__$1){
var seq__38633_39141__$1 = temp__5804__auto___39140__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38633_39141__$1)){
var c__5567__auto___39142 = cljs.core.chunk_first(seq__38633_39141__$1);
var G__39143 = cljs.core.chunk_rest(seq__38633_39141__$1);
var G__39144 = c__5567__auto___39142;
var G__39145 = cljs.core.count(c__5567__auto___39142);
var G__39146 = (0);
seq__38633_39122 = G__39143;
chunk__38636_39123 = G__39144;
count__38637_39124 = G__39145;
i__38638_39125 = G__39146;
continue;
} else {
var map__38660_39148 = cljs.core.first(seq__38633_39141__$1);
var map__38660_39149__$1 = cljs.core.__destructure_map(map__38660_39148);
var task_39150 = map__38660_39149__$1;
var fn_str_39151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660_39149__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660_39149__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39156 = goog.getObjectByName(fn_str_39151,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39152)].join(''));

(fn_obj_39156.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39156.cljs$core$IFn$_invoke$arity$2(path,new_link_39116) : fn_obj_39156.call(null,path,new_link_39116));


var G__39157 = cljs.core.next(seq__38633_39141__$1);
var G__39158 = null;
var G__39159 = (0);
var G__39160 = (0);
seq__38633_39122 = G__39157;
chunk__38636_39123 = G__39158;
count__38637_39124 = G__39159;
i__38638_39125 = G__39160;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39112);
});})(seq__38560_39107,chunk__38564_39108,count__38565_39109,i__38566_39110,seq__37969,chunk__37971,count__37972,i__37973,new_link_39116,path_match_39114,node_39112,path,seq__37969__$1,temp__5804__auto__,map__37966,map__37966__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39114], 0));

goog.dom.insertSiblingAfter(new_link_39116,node_39112);


var G__39162 = seq__38560_39107;
var G__39163 = chunk__38564_39108;
var G__39164 = count__38565_39109;
var G__39165 = (i__38566_39110 + (1));
seq__38560_39107 = G__39162;
chunk__38564_39108 = G__39163;
count__38565_39109 = G__39164;
i__38566_39110 = G__39165;
continue;
} else {
var G__39168 = seq__38560_39107;
var G__39169 = chunk__38564_39108;
var G__39170 = count__38565_39109;
var G__39171 = (i__38566_39110 + (1));
seq__38560_39107 = G__39168;
chunk__38564_39108 = G__39169;
count__38565_39109 = G__39170;
i__38566_39110 = G__39171;
continue;
}
} else {
var G__39172 = seq__38560_39107;
var G__39173 = chunk__38564_39108;
var G__39174 = count__38565_39109;
var G__39175 = (i__38566_39110 + (1));
seq__38560_39107 = G__39172;
chunk__38564_39108 = G__39173;
count__38565_39109 = G__39174;
i__38566_39110 = G__39175;
continue;
}
} else {
var temp__5804__auto___39177__$1 = cljs.core.seq(seq__38560_39107);
if(temp__5804__auto___39177__$1){
var seq__38560_39178__$1 = temp__5804__auto___39177__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38560_39178__$1)){
var c__5567__auto___39179 = cljs.core.chunk_first(seq__38560_39178__$1);
var G__39180 = cljs.core.chunk_rest(seq__38560_39178__$1);
var G__39181 = c__5567__auto___39179;
var G__39182 = cljs.core.count(c__5567__auto___39179);
var G__39183 = (0);
seq__38560_39107 = G__39180;
chunk__38564_39108 = G__39181;
count__38565_39109 = G__39182;
i__38566_39110 = G__39183;
continue;
} else {
var node_39185 = cljs.core.first(seq__38560_39178__$1);
if(cljs.core.not(node_39185.shadow$old)){
var path_match_39187 = shadow.cljs.devtools.client.browser.match_paths(node_39185.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39187)){
var new_link_39190 = (function (){var G__38679 = node_39185.cloneNode(true);
G__38679.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39187),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38679;
})();
(node_39185.shadow$old = true);

(new_link_39190.onload = ((function (seq__38560_39107,chunk__38564_39108,count__38565_39109,i__38566_39110,seq__37969,chunk__37971,count__37972,i__37973,new_link_39190,path_match_39187,node_39185,seq__38560_39178__$1,temp__5804__auto___39177__$1,path,seq__37969__$1,temp__5804__auto__,map__37966,map__37966__$1,msg,updates,reload_info){
return (function (e){
var seq__38685_39192 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38687_39193 = null;
var count__38688_39194 = (0);
var i__38689_39195 = (0);
while(true){
if((i__38689_39195 < count__38688_39194)){
var map__38712_39199 = chunk__38687_39193.cljs$core$IIndexed$_nth$arity$2(null,i__38689_39195);
var map__38712_39200__$1 = cljs.core.__destructure_map(map__38712_39199);
var task_39201 = map__38712_39200__$1;
var fn_str_39202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38712_39200__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38712_39200__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39205 = goog.getObjectByName(fn_str_39202,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39203)].join(''));

(fn_obj_39205.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39205.cljs$core$IFn$_invoke$arity$2(path,new_link_39190) : fn_obj_39205.call(null,path,new_link_39190));


var G__39208 = seq__38685_39192;
var G__39210 = chunk__38687_39193;
var G__39211 = count__38688_39194;
var G__39212 = (i__38689_39195 + (1));
seq__38685_39192 = G__39208;
chunk__38687_39193 = G__39210;
count__38688_39194 = G__39211;
i__38689_39195 = G__39212;
continue;
} else {
var temp__5804__auto___39213__$2 = cljs.core.seq(seq__38685_39192);
if(temp__5804__auto___39213__$2){
var seq__38685_39214__$1 = temp__5804__auto___39213__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38685_39214__$1)){
var c__5567__auto___39215 = cljs.core.chunk_first(seq__38685_39214__$1);
var G__39217 = cljs.core.chunk_rest(seq__38685_39214__$1);
var G__39218 = c__5567__auto___39215;
var G__39219 = cljs.core.count(c__5567__auto___39215);
var G__39220 = (0);
seq__38685_39192 = G__39217;
chunk__38687_39193 = G__39218;
count__38688_39194 = G__39219;
i__38689_39195 = G__39220;
continue;
} else {
var map__38722_39221 = cljs.core.first(seq__38685_39214__$1);
var map__38722_39222__$1 = cljs.core.__destructure_map(map__38722_39221);
var task_39224 = map__38722_39222__$1;
var fn_str_39225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722_39222__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38722_39222__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39229 = goog.getObjectByName(fn_str_39225,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39226)].join(''));

(fn_obj_39229.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39229.cljs$core$IFn$_invoke$arity$2(path,new_link_39190) : fn_obj_39229.call(null,path,new_link_39190));


var G__39231 = cljs.core.next(seq__38685_39214__$1);
var G__39232 = null;
var G__39233 = (0);
var G__39234 = (0);
seq__38685_39192 = G__39231;
chunk__38687_39193 = G__39232;
count__38688_39194 = G__39233;
i__38689_39195 = G__39234;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39185);
});})(seq__38560_39107,chunk__38564_39108,count__38565_39109,i__38566_39110,seq__37969,chunk__37971,count__37972,i__37973,new_link_39190,path_match_39187,node_39185,seq__38560_39178__$1,temp__5804__auto___39177__$1,path,seq__37969__$1,temp__5804__auto__,map__37966,map__37966__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39187], 0));

goog.dom.insertSiblingAfter(new_link_39190,node_39185);


var G__39236 = cljs.core.next(seq__38560_39178__$1);
var G__39237 = null;
var G__39238 = (0);
var G__39239 = (0);
seq__38560_39107 = G__39236;
chunk__38564_39108 = G__39237;
count__38565_39109 = G__39238;
i__38566_39110 = G__39239;
continue;
} else {
var G__39241 = cljs.core.next(seq__38560_39178__$1);
var G__39242 = null;
var G__39243 = (0);
var G__39244 = (0);
seq__38560_39107 = G__39241;
chunk__38564_39108 = G__39242;
count__38565_39109 = G__39243;
i__38566_39110 = G__39244;
continue;
}
} else {
var G__39246 = cljs.core.next(seq__38560_39178__$1);
var G__39247 = null;
var G__39248 = (0);
var G__39249 = (0);
seq__38560_39107 = G__39246;
chunk__38564_39108 = G__39247;
count__38565_39109 = G__39248;
i__38566_39110 = G__39249;
continue;
}
}
} else {
}
}
break;
}


var G__39250 = cljs.core.next(seq__37969__$1);
var G__39251 = null;
var G__39252 = (0);
var G__39253 = (0);
seq__37969 = G__39250;
chunk__37971 = G__39251;
count__37972 = G__39252;
i__37973 = G__39253;
continue;
} else {
var G__39254 = cljs.core.next(seq__37969__$1);
var G__39255 = null;
var G__39256 = (0);
var G__39257 = (0);
seq__37969 = G__39254;
chunk__37971 = G__39255;
count__37972 = G__39256;
i__37973 = G__39257;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38729){
var map__38732 = p__38729;
var map__38732__$1 = cljs.core.__destructure_map(map__38732);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38732__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38754){
var map__38756 = p__38754;
var map__38756__$1 = cljs.core.__destructure_map(map__38756);
var _ = map__38756__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38756__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38767,done,error){
var map__38768 = p__38767;
var map__38768__$1 = cljs.core.__destructure_map(map__38768);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38768__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38774,done,error){
var map__38775 = p__38774;
var map__38775__$1 = cljs.core.__destructure_map(map__38775);
var msg = map__38775__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38782){
var map__38784 = p__38782;
var map__38784__$1 = cljs.core.__destructure_map(map__38784);
var src = map__38784__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38784__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38785 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38785) : done.call(null,G__38785));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38792){
var map__38793 = p__38792;
var map__38793__$1 = cljs.core.__destructure_map(map__38793);
var msg__$1 = map__38793__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38793__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38795){var ex = e38795;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38800){
var map__38803 = p__38800;
var map__38803__$1 = cljs.core.__destructure_map(map__38803);
var env = map__38803__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38803__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38835){
var map__38836 = p__38835;
var map__38836__$1 = cljs.core.__destructure_map(map__38836);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38844){
var map__38848 = p__38844;
var map__38848__$1 = cljs.core.__destructure_map(map__38848);
var svc = map__38848__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
