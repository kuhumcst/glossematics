goog.provide('reitit.frontend');
reitit.frontend.query_param = (function reitit$frontend$query_param(q,k){
var vs = q.getValues(k);
if((vs.length < (2))){
return (vs[(0)]);
} else {
return cljs.core.vec(vs);
}
});
/**
 * Given goog.Uri, read query parameters into Clojure map.
 */
reitit.frontend.query_params = (function reitit$frontend$query_params(uri){
var q = uri.getQueryData();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,(function (p1__40177_SHARP_){
return reitit.frontend.query_param(q,p1__40177_SHARP_);
})),q.getKeys()));
});
/**
 * Given routing tree and current path, return match with possibly
 *   coerced parameters. Return nil if no match found.
 * 
 *   :on-coercion-error - a sideeffecting fn of `match exception -> nil`
 */
reitit.frontend.match_by_path = (function reitit$frontend$match_by_path(var_args){
var G__40184 = arguments.length;
switch (G__40184) {
case 2:
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2 = (function (router,path){
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3(router,path,null);
}));

(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3 = (function (router,path,p__40188){
var map__40189 = p__40188;
var map__40189__$1 = cljs.core.__destructure_map(map__40189);
var on_coercion_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40189__$1,new cljs.core.Keyword(null,"on-coercion-error","on-coercion-error",-970787));
var uri = goog.Uri.parse(path);
var coerce_BANG_ = (cljs.core.truth_(on_coercion_error)?(function (match){
try{return reitit.coercion.coerce_BANG_(match);
}catch (e40192){if((e40192 instanceof Error)){
var e = e40192;
(on_coercion_error.cljs$core$IFn$_invoke$arity$2 ? on_coercion_error.cljs$core$IFn$_invoke$arity$2(match,e) : on_coercion_error.call(null,match,e));

throw e;
} else {
throw e40192;

}
}}):reitit.coercion.coerce_BANG_);
var temp__5802__auto__ = reitit.core.match_by_path(router,uri.getPath());
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
var q = reitit.frontend.query_params(uri);
var match__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"query-params","query-params",900640534),q);
var parameters = (function (){var or__5045__auto__ = (coerce_BANG_.cljs$core$IFn$_invoke$arity$1 ? coerce_BANG_.cljs$core$IFn$_invoke$arity$1(match__$1) : coerce_BANG_.call(null,match__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match__$1),new cljs.core.Keyword(null,"query","query",-1288509510),q], null);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters);
} else {
return null;
}
}));

(reitit.frontend.match_by_path.cljs$lang$maxFixedArity = 3);

/**
 * Given a router, route name and optionally path-parameters,
 *   will return a Match (exact match), PartialMatch (missing path-parameters)
 *   or `nil` (no match).
 */
reitit.frontend.match_by_name = (function reitit$frontend$match_by_name(var_args){
var G__40197 = arguments.length;
switch (G__40197) {
case 2:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
return reitit.core.match_by_name(router,name,path_params);
}));

(reitit.frontend.match_by_name.cljs$lang$maxFixedArity = 3);

/**
 * Create a `reitit.core.router` from raw route data and optionally an options map.
 *   Enables request coercion. See [[reitit.core/router]] for details on options.
 */
reitit.frontend.router = (function reitit$frontend$router(var_args){
var G__40203 = arguments.length;
switch (G__40203) {
case 1:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),reitit.coercion.compile_request_coercers], null),opts], 0)));
}));

(reitit.frontend.router.cljs$lang$maxFixedArity = 2);

/**
 * Logs problems using console.warn
 */
reitit.frontend.match_by_name_BANG_ = (function reitit$frontend$match_by_name_BANG_(var_args){
var G__40209 = arguments.length;
switch (G__40209) {
case 2:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
var temp__5802__auto__ = reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(router,name,path_params);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
if(reitit.core.partial_match_QMARK_(match)){
if(cljs.core.every_QMARK_((function (p1__40206_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__40206_SHARP_);
}),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match))){
return match;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),defined);
console.warn("missing path-params for route",name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"missing","missing",362507769),missing,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match)], null));

return null;
}
} else {
return match;
}
} else {
console.warn("missing route",name);

return null;
}
}));

(reitit.frontend.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reitit.frontend.js.map
