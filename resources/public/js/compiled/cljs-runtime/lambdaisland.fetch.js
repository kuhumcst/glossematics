goog.provide('lambdaisland.fetch');
lambdaisland.fetch.content_types = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),"application/transit+json",new cljs.core.Keyword(null,"json","json",1279968570),"application/json",new cljs.core.Keyword(null,"form-encoded","form-encoded",188329083),"application/x-www-form-urlencoded",new cljs.core.Keyword(null,"text","text",-1790561697),"text/plain",new cljs.core.Keyword(null,"html","html",-998796897),"text/html",new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn"], null);
lambdaisland.fetch.transit_json_writer = (new cljs.core.Delay((function (){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
}),null));
lambdaisland.fetch.transit_json_reader = (new cljs.core.Delay((function (){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
}),null));
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.fetch !== 'undefined') && (typeof lambdaisland.fetch.encode_body !== 'undefined')){
} else {
lambdaisland.fetch.encode_body = (function (){var method_table__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__45234 = cljs.core.get_global_hierarchy;
return (fexpr__45234.cljs$core$IFn$_invoke$arity$0 ? fexpr__45234.cljs$core$IFn$_invoke$arity$0() : fexpr__45234.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.fetch","encode-body"),(function (content_type,body,opts){
return content_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,body,opts){
return body;
}));
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,body,opts){
return cognitect.transit.write(new cljs.core.Keyword(null,"transit-json-writer","transit-json-writer",-326747160).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(lambdaisland.fetch.transit_json_writer)),body);
}));
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"form-encoded","form-encoded",188329083),(function (_,body,opts){
return lambdaisland.uri.map__GT_query_string(body);
}));
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,body,opts){
return JSON.stringify(cljs.core.clj__GT_js(body));
}));
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.fetch !== 'undefined') && (typeof lambdaisland.fetch.decode_body !== 'undefined')){
} else {
lambdaisland.fetch.decode_body = (function (){var method_table__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__45237 = cljs.core.get_global_hierarchy;
return (fexpr__45237.cljs$core$IFn$_invoke$arity$0 ? fexpr__45237.cljs$core$IFn$_invoke$arity$0() : fexpr__45237.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.fetch","decode-body"),(function (content_type,bodyp,opts){
return content_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,response,opts){
var obj__40642__auto__ = response;
var f__40643__auto__ = (obj__40642__auto__["text"]);
return f__40643__auto__.call(obj__40642__auto__);
}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,response,opts){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((function (){var obj__40642__auto__ = response;
var f__40643__auto__ = (obj__40642__auto__["text"]);
return f__40643__auto__.call(obj__40642__auto__);
})(),(function (text){
var decoded = cognitect.transit.read(new cljs.core.Keyword(null,"transit-json-reader","transit-json-reader",-1038918063).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(lambdaisland.fetch.transit_json_reader)),text);
if((((!((decoded == null))))?(((((decoded.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === decoded.cljs$core$IWithMeta$))))?true:(((!decoded.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(decoded,cljs.core.assoc,new cljs.core.Keyword("lambdaisland.fetch","raw","lambdaisland.fetch/raw",-42775008),text);
} else {
return decoded;
}
})));
}catch (e45241){var e__40824__auto__ = e45241;
return kitchen_async.promise.reject(e__40824__auto__);
}}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,response,opts){
var obj__40642__auto__ = response;
var f__40643__auto__ = (obj__40642__auto__["json"]);
return f__40643__auto__.call(obj__40642__auto__);
}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__45250){
var map__45251 = p__45250;
var map__45251__$1 = cljs.core.__destructure_map(map__45251);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"follow","follow",-809317662));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),new cljs.core.Keyword(null,"same-origin","same-origin",706703957));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45251__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"default","default",-1987822328));
var referrer_policy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278),new cljs.core.Keyword(null,"client","client",-1323448117));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45251__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var fetch_headers = ({"Accept": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,content_type)});
var seq__45254_45484 = cljs.core.seq(headers);
var chunk__45255_45485 = null;
var count__45256_45486 = (0);
var i__45257_45487 = (0);
while(true){
if((i__45257_45487 < count__45256_45486)){
var vec__45289_45488 = chunk__45255_45485.cljs$core$IIndexed$_nth$arity$2(null,i__45257_45487);
var k_45489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45289_45488,(0),null);
var v_45490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45289_45488,(1),null);
var obj45292_45491 = fetch_headers;
var obj45293_45492 = (((!((obj45292_45491 == null))))?obj45292_45491:({}));
(obj45293_45492[applied_science.js_interop.impl.wrap_key(k_45489)] = v_45490);



var G__45493 = seq__45254_45484;
var G__45494 = chunk__45255_45485;
var G__45495 = count__45256_45486;
var G__45496 = (i__45257_45487 + (1));
seq__45254_45484 = G__45493;
chunk__45255_45485 = G__45494;
count__45256_45486 = G__45495;
i__45257_45487 = G__45496;
continue;
} else {
var temp__5804__auto___45497 = cljs.core.seq(seq__45254_45484);
if(temp__5804__auto___45497){
var seq__45254_45498__$1 = temp__5804__auto___45497;
if(cljs.core.chunked_seq_QMARK_(seq__45254_45498__$1)){
var c__5567__auto___45499 = cljs.core.chunk_first(seq__45254_45498__$1);
var G__45500 = cljs.core.chunk_rest(seq__45254_45498__$1);
var G__45501 = c__5567__auto___45499;
var G__45502 = cljs.core.count(c__5567__auto___45499);
var G__45503 = (0);
seq__45254_45484 = G__45500;
chunk__45255_45485 = G__45501;
count__45256_45486 = G__45502;
i__45257_45487 = G__45503;
continue;
} else {
var vec__45297_45504 = cljs.core.first(seq__45254_45498__$1);
var k_45505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45297_45504,(0),null);
var v_45506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45297_45504,(1),null);
var obj45301_45507 = fetch_headers;
var obj45304_45508 = (((!((obj45301_45507 == null))))?obj45301_45507:({}));
(obj45304_45508[applied_science.js_interop.impl.wrap_key(k_45505)] = v_45506);



var G__45509 = cljs.core.next(seq__45254_45498__$1);
var G__45510 = null;
var G__45511 = (0);
var G__45512 = (0);
seq__45254_45484 = G__45509;
chunk__45255_45485 = G__45510;
count__45256_45486 = G__45511;
i__45257_45487 = G__45512;
continue;
}
} else {
}
}
break;
}

return ({"method": clojure.string.upper_case(cljs.core.name(method)), "headers": fetch_headers, "redirect": cljs.core.name(redirect), "mode": cljs.core.name(mode), "cache": cljs.core.name(cache), "credentials": cljs.core.name(credentials), "referrer-policy": cljs.core.name(referrer_policy)});
});
lambdaisland.fetch.request = (function lambdaisland$fetch$request(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45513 = arguments.length;
var i__5769__auto___45514 = (0);
while(true){
if((i__5769__auto___45514 < len__5768__auto___45513)){
args__5774__auto__.push((arguments[i__5769__auto___45514]));

var G__45515 = (i__5769__auto___45514 + (1));
i__5769__auto___45514 = G__45515;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__45317){
var vec__45319 = p__45317;
var map__45322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45319,(0),null);
var map__45322__$1 = cljs.core.__destructure_map(map__45322);
var opts = map__45322__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45322__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45322__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45322__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45322__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45322__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lambdaisland.uri.uri(url),new cljs.core.Keyword(null,"query","query",-1288509510),lambdaisland.uri.map__GT_query_string(query_params)));
var request = (function (){var G__45327 = lambdaisland.fetch.fetch_opts(opts);
if(cljs.core.truth_(body)){
var obj45329 = G__45327;
var obj45330 = (((!((obj45329 == null))))?obj45329:({}));
(obj45330["body"] = ((typeof body === 'string')?body:lambdaisland.fetch.encode_body.cljs$core$IFn$_invoke$arity$3(content_type,body,opts)));

return obj45330;
} else {
return G__45327;
}
})();
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(fetch(url__$1,request),(function (response){
return kitchen_async.promise.catch_STAR_((function (){try{return kitchen_async.promise.__GT_promise((function (){var headers = (function (){var obj45365 = response;
var k45366 = "headers";
if((function (){var obj45369 = obj45365;
return (((!((obj45369 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k45366,obj45369)));
})()){
return (obj45365[k45366]);
} else {
return undefined;
}
})();
var header_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.es6_iterator_seq((function (){var obj__40642__auto__ = headers;
var f__40643__auto__ = (obj__40642__auto__["entries"]);
return f__40643__auto__.call(obj__40642__auto__);
})()));
var content_type_header = (function (){var obj__40642__auto__ = headers;
var f__40643__auto__ = (obj__40642__auto__["get"]);
return f__40643__auto__.call(obj__40642__auto__,"Content-Type");
})();
var content_type__$1 = (cljs.core.truth_(content_type_header)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(lambdaisland.fetch.content_types),clojure.string.replace(content_type_header,/;.*/,"")):null);
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.decode_body.cljs$core$IFn$_invoke$arity$3(content_type__$1,response,opts),(function (body__$1){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj45378 = response;
var k45379 = "status";
if((function (){var obj45382 = obj45378;
return (((!((obj45382 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k45379,obj45382)));
})()){
return (obj45378[k45379]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj45386 = request;
var obj45387 = (((!((obj45386 == null))))?obj45386:({}));
(obj45387["url"] = url__$1);

return obj45387;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
})));
}catch (e45376){var e__40824__auto__ = e45376;
return kitchen_async.promise.reject(e__40824__auto__);
}})());
}catch (e45362){var e__40824__auto__ = e45362;
return kitchen_async.promise.reject(e__40824__auto__);
}})(),(function (err45358){
var e = err45358;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj45395 = request;
var obj45396 = (((!((obj45395 == null))))?obj45395:({}));
(obj45396["url"] = url__$1);

return obj45396;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

}));
})));
}catch (e45333){var e__40824__auto__ = e45333;
return kitchen_async.promise.reject(e__40824__auto__);
}}));

(lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq45309){
var G__45310 = cljs.core.first(seq45309);
var seq45309__$1 = cljs.core.next(seq45309);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45310,seq45309__$1);
}));

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45519 = arguments.length;
var i__5769__auto___45520 = (0);
while(true){
if((i__5769__auto___45520 < len__5768__auto___45519)){
args__5774__auto__.push((arguments[i__5769__auto___45520]));

var G__45522 = (i__5769__auto___45520 + (1));
i__5769__auto___45520 = G__45522;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__45426){
var vec__45429 = p__45426;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45429,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687))], 0));
}));

(lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq45417){
var G__45418 = cljs.core.first(seq45417);
var seq45417__$1 = cljs.core.next(seq45417);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45418,seq45417__$1);
}));

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45523 = arguments.length;
var i__5769__auto___45524 = (0);
while(true){
if((i__5769__auto___45524 < len__5768__auto___45523)){
args__5774__auto__.push((arguments[i__5769__auto___45524]));

var G__45525 = (i__5769__auto___45524 + (1));
i__5769__auto___45524 = G__45525;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__45454){
var vec__45457 = p__45454;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45457,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570))], 0));
}));

(lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq45443){
var G__45444 = cljs.core.first(seq45443);
var seq45443__$1 = cljs.core.next(seq45443);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45444,seq45443__$1);
}));

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45526 = arguments.length;
var i__5769__auto___45527 = (0);
while(true){
if((i__5769__auto___45527 < len__5768__auto___45526)){
args__5774__auto__.push((arguments[i__5769__auto___45527]));

var G__45528 = (i__5769__auto___45527 + (1));
i__5769__auto___45527 = G__45528;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__45463){
var vec__45466 = p__45463;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45466,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620))], 0));
}));

(lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq45461){
var G__45462 = cljs.core.first(seq45461);
var seq45461__$1 = cljs.core.next(seq45461);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45462,seq45461__$1);
}));

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45530 = arguments.length;
var i__5769__auto___45531 = (0);
while(true){
if((i__5769__auto___45531 < len__5768__auto___45530)){
args__5774__auto__.push((arguments[i__5769__auto___45531]));

var G__45532 = (i__5769__auto___45531 + (1));
i__5769__auto___45531 = G__45532;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__45478){
var vec__45479 = p__45478;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45479,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919))], 0));
}));

(lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq45472){
var G__45473 = cljs.core.first(seq45472);
var seq45472__$1 = cljs.core.next(seq45472);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45473,seq45472__$1);
}));


//# sourceMappingURL=lambdaisland.fetch.js.map
