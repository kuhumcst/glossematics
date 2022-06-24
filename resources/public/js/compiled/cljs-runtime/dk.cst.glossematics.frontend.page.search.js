goog.provide('dk.cst.glossematics.frontend.page.search');
dk.cst.glossematics.frontend.page.search.params__GT_items = (function dk$cst$glossematics$frontend$page$search$params__GT_items(query_params,id__GT_name){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__46149){
var vec__46150 = p__46149;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46150,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46150,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"_","_",1453416199)))?new cljs.core.Symbol(null,"_","_",-1201019570,null):k),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_name,id)], null));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(v,/,/));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(query_params,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], 0))], 0));
});
dk.cst.glossematics.frontend.page.search.parse_params = (function dk$cst$glossematics$frontend$page$search$parse_params(p__46153,id__GT_name){
var map__46154 = p__46153;
var map__46154__$1 = cljs.core.__destructure_map(map__46154);
var query_params = map__46154__$1;
var order_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"to","to",192099007));
var items = dk.cst.glossematics.frontend.page.search.params__GT_items(query_params,id__GT_name);
var G__46155 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.vec(items),new cljs.core.Keyword(null,"unique","unique",329397282),cljs.core.set(items)], null);
var G__46155__$1 = (cljs.core.truth_(order_by)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155,new cljs.core.Keyword(null,"order-by","order-by",1527318070),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(order_by,/,/))):G__46155);
var G__46155__$2 = (cljs.core.truth_(limit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),parseInt(limit)):G__46155__$1);
var G__46155__$3 = (cljs.core.truth_(offset)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$2,new cljs.core.Keyword(null,"offset","offset",296498311),parseInt(offset)):G__46155__$2);
var G__46155__$4 = (cljs.core.truth_(from)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$3,new cljs.core.Keyword(null,"from","from",1815293044),from):G__46155__$3);
if(cljs.core.truth_(to)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$4,new cljs.core.Keyword(null,"to","to",192099007),to);
} else {
return G__46155__$4;
}
});
dk.cst.glossematics.frontend.page.search.backgrounds = cljs.core.cycle(dk.cst.stucco.pattern.background_colours);
dk.cst.glossematics.frontend.page.search.add_backgrounds = (function dk$cst$glossematics$frontend$page$search$add_backgrounds(kvs){
return dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$3(kvs,cljs.core.identity,dk.cst.glossematics.frontend.page.search.backgrounds);
});
/**
 * Conditionally reset the search query state from query-params.
 * 
 *   Local-only query state is not considered at all; only data transferred via
 *   query-params decide whether the state should be reset. When the query-params
 *   already match the query state, no state will be replaced. The primary reason
 *   for this behaviour is to only fully update the state when coming from outside
 *   the search page, e.g. when clicking on a hyperlink leading to a search.
 */
dk.cst.glossematics.frontend.page.search._QMARK_query_reset_BANG_ = (function dk$cst$glossematics$frontend$page$search$_QMARK_query_reset_BANG_(){
var map__46156 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__46156__$1 = cljs.core.__destructure_map(map__46156);
var id__GT_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46156__$1,new cljs.core.Keyword(null,"id->name","id->name",249122446));
var map__46157 = cljs.core.deref(dk.cst.glossematics.frontend.state.location);
var map__46157__$1 = cljs.core.__destructure_map(map__46157);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46157__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_((function (){var and__5043__auto__ = id__GT_name;
if(cljs.core.truth_(and__5043__auto__)){
return query_params;
} else {
return and__5043__auto__;
}
})())){
var query = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dk.cst.glossematics.frontend.state.query_defaults,dk.cst.glossematics.frontend.page.search.parse_params(query_params,id__GT_name)], 0));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,query,dk.cst.glossematics.frontend.state.local_query_keys),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.deref(dk.cst.glossematics.frontend.state.query),dk.cst.glossematics.frontend.state.local_query_keys))){
return cljs.core.reset_BANG_(dk.cst.glossematics.frontend.state.query,cljs.core.update.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"items","items",1031954938),dk.cst.glossematics.frontend.page.search.add_backgrounds));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Fetches and post-processes metadata used to populate the search form.
 */
dk.cst.glossematics.frontend.page.search.fetch_metadata_BANG_ = (function dk$cst$glossematics$frontend$page$search$fetch_metadata_BANG_(){
return dk.cst.glossematics.frontend.api.fetch("/search/metadata").then((function (p__46158){
var map__46159 = p__46158;
var map__46159__$1 = cljs.core.__destructure_map(map__46159);
var search_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46159__$1,new cljs.core.Keyword(null,"search-metadata","search-metadata",872197472));
var top_30_kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46159__$1,new cljs.core.Keyword(null,"top-30-kvs","top-30-kvs",461794125));
var name__GT_id_46269 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.vals(search_metadata));
var id__GT_name_46270 = clojure.set.map_invert(name__GT_id_46269);
var name__GT_type_46271 = (function (entity_name){
var groups = cljs.core.seq(search_metadata);
while(true){
var vec__46160 = groups;
var vec__46163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46163,(0),null);
var name__GT_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46163,(1),null);
if(cljs.core.truth_(type)){
if(cljs.core.truth_((name__GT_id__$1.cljs$core$IFn$_invoke$arity$1 ? name__GT_id__$1.cljs$core$IFn$_invoke$arity$1(entity_name) : name__GT_id__$1.call(null,entity_name)))){
return type;
} else {
var G__46272 = cljs.core.rest(groups);
groups = G__46272;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.search,cljs.core.assoc,new cljs.core.Keyword(null,"metadata","metadata",1799301597),search_metadata,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name->id","name->id",-338114168),name__GT_id_46269,new cljs.core.Keyword(null,"id->name","id->name",249122446),id__GT_name_46270,new cljs.core.Keyword(null,"name->type","name->type",-2005564299),name__GT_type_46271,new cljs.core.Keyword(null,"id->type","id->type",923482451),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(name__GT_type_46271,id__GT_name_46270),new cljs.core.Keyword(null,"name-kvs","name-kvs",972846156),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(top_30_kvs,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,name__GT_id_46269,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,top_30_kvs))))], 0));

return dk.cst.glossematics.frontend.page.search._QMARK_query_reset_BANG_();
}));
});
dk.cst.glossematics.frontend.page.search.items__GT_query_params = (function dk$cst$glossematics$frontend$page$search$items__GT_query_params(items){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function() { 
var G__46273__delegate = function (args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args);
};
var G__46273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46274__i = 0, G__46274__a = new Array(arguments.length -  0);
while (G__46274__i < G__46274__a.length) {G__46274__a[G__46274__i] = arguments[G__46274__i + 0]; ++G__46274__i;}
  args = new cljs.core.IndexedSeq(G__46274__a,0,null);
} 
return G__46273__delegate.call(this,args);};
G__46273.cljs$lang$maxFixedArity = 0;
G__46273.cljs$lang$applyTo = (function (arglist__46275){
var args = cljs.core.seq(arglist__46275);
return G__46273__delegate(args);
});
G__46273.cljs$core$IFn$_invoke$arity$variadic = G__46273__delegate;
return G__46273;
})()
,(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$search$items__GT_query_params_$_iter__46166(s__46167){
return (new cljs.core.LazySeq(null,(function (){
var s__46167__$1 = s__46167;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46167__$1);
if(temp__5804__auto__){
var s__46167__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46167__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__46167__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__46169 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__46168 = (0);
while(true){
if((i__46168 < size__5521__auto__)){
var vec__46170 = cljs.core._nth(c__5520__auto__,i__46168);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46170,(1),null);
cljs.core.chunk_append(b__46169,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));

var G__46276 = (i__46168 + (1));
i__46168 = G__46276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46169),dk$cst$glossematics$frontend$page$search$items__GT_query_params_$_iter__46166(cljs.core.chunk_rest(s__46167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46169),null);
}
} else {
var vec__46173 = cljs.core.first(s__46167__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46173,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),dk$cst$glossematics$frontend$page$search$items__GT_query_params_$_iter__46166(cljs.core.rest(s__46167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(items);
})());
});
dk.cst.glossematics.frontend.page.search.fetch_results_BANG_ = (function dk$cst$glossematics$frontend$page$search$fetch_results_BANG_(p__46177){
var map__46178 = p__46177;
var map__46178__$1 = cljs.core.__destructure_map(map__46178);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46178__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.empty_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,query_params,dk.cst.glossematics.frontend.state.query_result_set_keys))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.state.search,cljs.core.dissoc,new cljs.core.Keyword(null,"results","results",-1134170113));

return cljs.core.reset_BANG_(dk.cst.glossematics.frontend.state.query,dk.cst.glossematics.frontend.state.query_defaults);
} else {
return dk.cst.glossematics.frontend.api.fetch.cljs$core$IFn$_invoke$arity$variadic("/search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params], null)], 0)).then((function (p1__46176_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.search,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),p1__46176_SHARP_);

return dk.cst.glossematics.frontend.page.search._QMARK_query_reset_BANG_();
}));
}
});
/**
 * Add a `kv` to the :items in the passed-in `state` with background `n`.
 */
dk.cst.glossematics.frontend.page.search.add_kv = (function dk$cst$glossematics$frontend$page$search$add_kv(p__46179,kv){
var map__46180 = p__46179;
var map__46180__$1 = cljs.core.__destructure_map(map__46180);
var state = map__46180__$1;
var unique = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"unique","unique",329397282));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"n","n",562130025));
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(unique,kv))){
var n_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_empty(items);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.search.backgrounds,n),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.last(items)))));
} else {
return and__5043__auto__;
}
})())?(n + (1)):n);
var kv_SINGLEQUOTE_ = dk.cst.stucco.pattern.add_background(dk.cst.glossematics.frontend.page.search.backgrounds,n_SINGLEQUOTE_,kv);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,kv_SINGLEQUOTE_),new cljs.core.Keyword(null,"unique","unique",329397282),cljs.core.conj,kv_SINGLEQUOTE_);
} else {
return state;
}
});
dk.cst.glossematics.frontend.page.search.remove_kv = (function dk$cst$glossematics$frontend$page$search$remove_kv(p__46181,kv){
var map__46182 = p__46181;
var map__46182__$1 = cljs.core.__destructure_map(map__46182);
var old_state = map__46182__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_state,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,kv),items)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset","offset",296498311),(0)], 0)),new cljs.core.Keyword(null,"unique","unique",329397282),cljs.core.disj,kv);
});
dk.cst.glossematics.frontend.page.search.multi_input_data = (function dk$cst$glossematics$frontend$page$search$multi_input_data(name_kvs){
return (function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"names"], null),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$search$multi_input_data_$_iter__46183(s__46184){
return (new cljs.core.LazySeq(null,(function (){
var s__46184__$1 = s__46184;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46184__$1);
if(temp__5804__auto__){
var s__46184__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46184__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__46184__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__46186 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__46185 = (0);
while(true){
if((i__46185 < size__5521__auto__)){
var vec__46187 = cljs.core._nth(c__5520__auto__,i__46185);
var entity_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46187,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46187,(1),null);
cljs.core.chunk_append(b__46186,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_name,id], null),new cljs.core.Keyword(null,"value","value",305978217),entity_name], null)], null));

var G__46277 = (i__46185 + (1));
i__46185 = G__46277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46186),dk$cst$glossematics$frontend$page$search$multi_input_data_$_iter__46183(cljs.core.chunk_rest(s__46184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46186),null);
}
} else {
var vec__46190 = cljs.core.first(s__46184__$2);
var entity_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46190,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46190,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_name,id], null),new cljs.core.Keyword(null,"value","value",305978217),entity_name], null)], null),dk$cst$glossematics$frontend$page$search$multi_input_data_$_iter__46183(cljs.core.rest(s__46184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(name_kvs);
})()], null);
});
});
dk.cst.glossematics.frontend.page.search.e__GT_v = (function dk$cst$glossematics$frontend$page$search$e__GT_v(e){
return e.target.value;
});
dk.cst.glossematics.frontend.page.search.s__GT_rel = (function dk$cst$glossematics$frontend$page$search$s__GT_rel(s){
if(cljs.core.empty_QMARK_(s)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"_")){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);

}
}
});
dk.cst.glossematics.frontend.page.search.rel__GT_s = (function dk$cst$glossematics$frontend$page$search$rel__GT_s(rel){
if((rel == null)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rel,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return "_";
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel),(1));

}
}
});
dk.cst.glossematics.frontend.page.search.state__GT_params = (function dk$cst$glossematics$frontend$page$search$state__GT_params(p__46193){
var map__46194 = p__46193;
var map__46194__$1 = cljs.core.__destructure_map(map__46194);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var order_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"to","to",192099007));
var temp__5804__auto__ = dk.cst.glossematics.frontend.page.search.items__GT_query_params(items);
if(cljs.core.truth_(temp__5804__auto__)){
var params = temp__5804__auto__;
var vec__46195 = order_by;
var rel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(0),null);
var G__46198 = params;
var G__46198__$1 = (cljs.core.truth_(rel)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46198,new cljs.core.Keyword(null,"order-by","order-by",1527318070),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.search.rel__GT_s,order_by))):G__46198);
var G__46198__$2 = (cljs.core.truth_(limit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46198__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit):G__46198__$1);
var G__46198__$3 = (cljs.core.truth_(offset)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46198__$2,new cljs.core.Keyword(null,"offset","offset",296498311),offset):G__46198__$2);
var G__46198__$4 = (cljs.core.truth_(from)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46198__$3,new cljs.core.Keyword(null,"from","from",1815293044),from):G__46198__$3);
if(cljs.core.truth_(to)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46198__$4,new cljs.core.Keyword(null,"to","to",192099007),to);
} else {
return G__46198__$4;
}
} else {
return null;
}
});
dk.cst.glossematics.frontend.page.search.select_opts = (function dk$cst$glossematics$frontend$page$search$select_opts(var_args){
var args__5774__auto__ = [];
var len__5768__auto___46278 = arguments.length;
var i__5769__auto___46279 = (0);
while(true){
if((i__5769__auto___46279 < len__5768__auto___46278)){
args__5774__auto__.push((arguments[i__5769__auto___46279]));

var G__46280 = (i__5769__auto___46279 + (1));
i__5769__auto___46279 = G__46280;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return dk.cst.glossematics.frontend.page.search.select_opts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(dk.cst.glossematics.frontend.page.search.select_opts.cljs$core$IFn$_invoke$arity$variadic = (function (rels,p__46201){
var vec__46202 = p__46201;
var default_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46202,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),default_option,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46205){
var vec__46206 = p__46205;
var rel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(0),null);
var map__46209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(1),null);
var map__46209__$1 = cljs.core.__destructure_map(map__46209);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46209__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var kv = vec__46206;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),rel,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)),new cljs.core.Keyword(null,"value","value",305978217),dk.cst.glossematics.frontend.page.search.rel__GT_s(rel)], null),label], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.second),rels))], null);
}));

(dk.cst.glossematics.frontend.page.search.select_opts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dk.cst.glossematics.frontend.page.search.select_opts.cljs$lang$applyTo = (function (seq46199){
var G__46200 = cljs.core.first(seq46199);
var seq46199__$1 = cljs.core.next(seq46199);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46200,seq46199__$1);
}));

dk.cst.glossematics.frontend.page.search.update_BANG_ = (function dk$cst$glossematics$frontend$page$search$update_BANG_(){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.search","page","dk.cst.glossematics.frontend.page.search/page",-718726271),cljs.core.PersistentArrayMap.EMPTY,dk.cst.glossematics.frontend.page.search.state__GT_params(cljs.core.deref(dk.cst.glossematics.frontend.state.query)));
});
dk.cst.glossematics.frontend.page.search.submit = (function dk$cst$glossematics$frontend$page$search$submit(){
var map__46210 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__46210__$1 = cljs.core.__destructure_map(map__46210);
var name__GT_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46210__$1,new cljs.core.Keyword(null,"name->id","name->id",-338114168));
var map__46211 = cljs.core.deref(dk.cst.glossematics.frontend.state.query);
var map__46211__$1 = cljs.core.__destructure_map(map__46211);
var rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"rel","rel",1378823488));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var unique = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"unique","unique",329397282));
var temp__5802__auto__ = (name__GT_id.cljs$core$IFn$_invoke$arity$1 ? name__GT_id.cljs$core$IFn$_invoke$arity$1(in$) : name__GT_id.call(null,in$));
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(unique,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rel,id], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.state.query,dk.cst.glossematics.frontend.page.search.add_kv,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rel,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),in$], null)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.query,cljs.core.update,new cljs.core.Keyword(null,"n","n",562130025),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"in","in",-1531184865),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset","offset",296498311),(0)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.state.search,cljs.core.dissoc,new cljs.core.Keyword(null,"results","results",-1134170113));

return dk.cst.glossematics.frontend.page.search.update_BANG_();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"not-allowed?","not-allowed?",-1384550020),true);
}
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"bad-input?","bad-input?",1544544849),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"not-allowed?","not-allowed?",-1384550020),true], 0));
}
});
dk.cst.glossematics.frontend.page.search.search_result_order = (function dk$cst$glossematics$frontend$page$search$search_result_order(p__46213){
var vec__46214 = p__46213;
var order_rel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46214,(0),null);
var order_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46214,(1),null);
var order_by = vec__46214;
var __GT_order = (function (p1__46212_SHARP_){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.query,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070),p1__46212_SHARP_], null),dk.cst.glossematics.frontend.page.search.s__GT_rel(dk.cst.glossematics.frontend.page.search.e__GT_v(e)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], 0));

return dk.cst.glossematics.frontend.page.search.update_BANG_();
});
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-row","div.input-row",-1792565831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"sort-key"], null),"Sort by "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"sort-key",new cljs.core.Keyword(null,"value","value",305978217),dk.cst.glossematics.frontend.page.search.rel__GT_s(order_rel),new cljs.core.Keyword(null,"on-change","on-change",-732046149),__GT_order((0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.select_opts,dk.cst.glossematics.static_data.order_rels,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"nothing"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sort-dir",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(order_rel == null),new cljs.core.Keyword(null,"value","value",305978217),dk.cst.glossematics.frontend.page.search.rel__GT_s(order_dir),new cljs.core.Keyword(null,"on-change","on-change",-732046149),__GT_order((1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"asc"], null),"\u25B2 ascending"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"desc"], null),"\u25BC descending"], null)], null)], null);
});
dk.cst.glossematics.frontend.page.search.search_result_between = (function dk$cst$glossematics$frontend$page$search$search_result_between(p__46218,from,to){
var vec__46219 = p__46218;
var order_rel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46219,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46219,(1),null);
var order_by = vec__46219;
var order_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.static_data.order_rels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [order_rel,new cljs.core.Keyword(null,"type","type",1174270348)], null),"date");
var __GT_tofrom = (function (p1__46217_SHARP_){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),(0));

var temp__5802__auto___46281 = cljs.core.not_empty(dk.cst.glossematics.frontend.page.search.e__GT_v(e));
if(cljs.core.truth_(temp__5802__auto___46281)){
var v_46282 = temp__5802__auto___46281;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,p1__46217_SHARP_,v_46282);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.state.query,cljs.core.dissoc,p1__46217_SHARP_);
}

return dk.cst.glossematics.frontend.page.search.update_BANG_();
});
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-row","div.input-row",-1792565831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"from"], null),"Limit from "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"from",new cljs.core.Keyword(null,"type","type",1174270348),order_type,new cljs.core.Keyword(null,"value","value",305978217),from,new cljs.core.Keyword(null,"max","max",61366548),to,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(from)?"good-input":null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),__GT_tofrom(new cljs.core.Keyword(null,"from","from",1815293044))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"to"], null)," to "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"to",new cljs.core.Keyword(null,"type","type",1174270348),order_type,new cljs.core.Keyword(null,"value","value",305978217),to,new cljs.core.Keyword(null,"min","min",444991522),from,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__5043__auto__ = from;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = to;
if(cljs.core.truth_(and__5043__auto____$1)){
return (Date.parse(from) > Date.parse(to));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bad-input","not-allowed"], null):(cljs.core.truth_(to)?"good-input":null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),__GT_tofrom(new cljs.core.Keyword(null,"to","to",192099007))], null)], null)], null);
});
/**
 * Widgets for ordering results and limiting the result set to a certain range.
 */
dk.cst.glossematics.frontend.page.search.search_result_postprocessing = (function dk$cst$glossematics$frontend$page$search$search_result_postprocessing(){
var map__46222 = cljs.core.deref(dk.cst.glossematics.frontend.state.query);
var map__46222__$1 = cljs.core.__destructure_map(map__46222);
var order_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46222__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46222__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46222__$1,new cljs.core.Keyword(null,"to","to",192099007));
var vec__46223 = order_by;
var order_rel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46223,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.search_result_order,order_by], null),(cljs.core.truth_(order_rel)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.search_result_between,order_by,from,to], null):null)], null);
});
dk.cst.glossematics.frontend.page.search.search_criteria = (function dk$cst$glossematics$frontend$page$search$search_criteria(id__GT_type,items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Search criteria",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Clear all criteria",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unique","unique",329397282),cljs.core.PersistentHashSet.EMPTY], 0));

return dk.cst.glossematics.frontend.page.search.update_BANG_();
})], null),"x"], null)], null),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$search$search_criteria_$_iter__46226(s__46227){
return (new cljs.core.LazySeq(null,(function (){
var s__46227__$1 = s__46227;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46227__$1);
if(temp__5804__auto__){
var s__46227__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46227__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__46227__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__46229 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__46228 = (0);
while(true){
if((i__46228 < size__5521__auto__)){
var vec__46230 = cljs.core._nth(c__5520__auto__,i__46228);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46230,(1),null);
var kv = vec__46230;
var map__46233 = cljs.core.meta(kv);
var map__46233__$1 = cljs.core.__destructure_map(map__46233);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46233__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46233__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__46234 = (cljs.core.truth_(id__GT_type)?(function (){var G__46235 = (id__GT_type.cljs$core$IFn$_invoke$arity$1 ? id__GT_type.cljs$core$IFn$_invoke$arity$1(v) : id__GT_type.call(null,v));
return (dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1(G__46235) : dk.cst.glossematics.static_data.entity_types.call(null,G__46235));
})():null);
var map__46234__$1 = cljs.core.__destructure_map(map__46234);
var img_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46234__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
var entity_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46234__$1,new cljs.core.Keyword(null,"entity-label","entity-label",-1985702332));
cljs.core.chunk_append(b__46229,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),kv], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-form__item","span.search-form__item",-431563174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"title","title",636505583),entity_label], null),(cljs.core.truth_(img_src)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.entity-icon","img.entity-icon",1791014534),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src,new cljs.core.Keyword(null,"alt","alt",-3214426),entity_label], null)], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Symbol(null,"_","_",-1201019570,null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-form__item-key","span.search-form__item-key",975781558),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((dk.cst.glossematics.static_data.search_rels.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.search_rels.cljs$core$IFn$_invoke$arity$1(k) : dk.cst.glossematics.static_data.search_rels.call(null,k)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
}
})()," \u2192 "], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-form__item-label","span.search-form__item-label",-12003781),(function (){var or__5045__auto__ = label;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Remove criterion",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__46228,map__46233,map__46233__$1,label,style,map__46234,map__46234__$1,img_src,entity_label,vec__46230,k,v,kv,c__5520__auto__,size__5521__auto__,b__46229,s__46227__$2,temp__5804__auto__){
return (function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.state.query,dk.cst.glossematics.frontend.page.search.remove_kv,kv);

return dk.cst.glossematics.frontend.page.search.update_BANG_();
});})(i__46228,map__46233,map__46233__$1,label,style,map__46234,map__46234__$1,img_src,entity_label,vec__46230,k,v,kv,c__5520__auto__,size__5521__auto__,b__46229,s__46227__$2,temp__5804__auto__))
], null),"x"], null)], null)," "], null));

var G__46283 = (i__46228 + (1));
i__46228 = G__46283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46229),dk$cst$glossematics$frontend$page$search$search_criteria_$_iter__46226(cljs.core.chunk_rest(s__46227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46229),null);
}
} else {
var vec__46236 = cljs.core.first(s__46227__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46236,(1),null);
var kv = vec__46236;
var map__46239 = cljs.core.meta(kv);
var map__46239__$1 = cljs.core.__destructure_map(map__46239);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46239__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46239__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__46240 = (cljs.core.truth_(id__GT_type)?(function (){var G__46241 = (id__GT_type.cljs$core$IFn$_invoke$arity$1 ? id__GT_type.cljs$core$IFn$_invoke$arity$1(v) : id__GT_type.call(null,v));
return (dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1(G__46241) : dk.cst.glossematics.static_data.entity_types.call(null,G__46241));
})():null);
var map__46240__$1 = cljs.core.__destructure_map(map__46240);
var img_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46240__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
var entity_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46240__$1,new cljs.core.Keyword(null,"entity-label","entity-label",-1985702332));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),kv], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-form__item","span.search-form__item",-431563174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"title","title",636505583),entity_label], null),(cljs.core.truth_(img_src)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.entity-icon","img.entity-icon",1791014534),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src,new cljs.core.Keyword(null,"alt","alt",-3214426),entity_label], null)], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Symbol(null,"_","_",-1201019570,null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-form__item-key","span.search-form__item-key",975781558),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((dk.cst.glossematics.static_data.search_rels.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.search_rels.cljs$core$IFn$_invoke$arity$1(k) : dk.cst.glossematics.static_data.search_rels.call(null,k)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
}
})()," \u2192 "], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-form__item-label","span.search-form__item-label",-12003781),(function (){var or__5045__auto__ = label;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Remove criterion",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__46239,map__46239__$1,label,style,map__46240,map__46240__$1,img_src,entity_label,vec__46236,k,v,kv,s__46227__$2,temp__5804__auto__){
return (function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.frontend.state.query,dk.cst.glossematics.frontend.page.search.remove_kv,kv);

return dk.cst.glossematics.frontend.page.search.update_BANG_();
});})(map__46239,map__46239__$1,label,style,map__46240,map__46240__$1,img_src,entity_label,vec__46236,k,v,kv,s__46227__$2,temp__5804__auto__))
], null),"x"], null)], null)," "], null),dk$cst$glossematics$frontend$page$search$search_criteria_$_iter__46226(cljs.core.rest(s__46227__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(items);
})()], null);
});
dk.cst.glossematics.frontend.page.search.search_form = (function dk$cst$glossematics$frontend$page$search$search_form(){
var map__46243 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__46243__$1 = cljs.core.__destructure_map(map__46243);
var name_kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46243__$1,new cljs.core.Keyword(null,"name-kvs","name-kvs",972846156));
var name__GT_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46243__$1,new cljs.core.Keyword(null,"name->id","name->id",-338114168));
var id__GT_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46243__$1,new cljs.core.Keyword(null,"id->type","id->type",923482451));
var name__GT_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46243__$1,new cljs.core.Keyword(null,"name->type","name->type",-2005564299));
var set_in = (function (e){
var in$ = dk.cst.glossematics.frontend.page.search.e__GT_v(e);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"in","in",-1531184865),in$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-input?","bad-input?",1544544849),false,new cljs.core.Keyword(null,"not-allowed?","not-allowed?",-1384550020),false], 0));
});
var set_rel = (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.query,cljs.core.assoc,new cljs.core.Keyword(null,"rel","rel",1378823488),dk.cst.glossematics.frontend.page.search.s__GT_rel(dk.cst.glossematics.frontend.page.search.e__GT_v(e)));

return dk.cst.glossematics.frontend.page.search.submit();
});
var anything_opt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),dk.cst.glossematics.frontend.page.search.rel__GT_s(new cljs.core.Symbol(null,"_","_",-1201019570,null))], null),"anything"], null);
return (function (_,___$1){
var map__46244 = cljs.core.deref(dk.cst.glossematics.frontend.state.query);
var map__46244__$1 = cljs.core.__destructure_map(map__46244);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46244__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46244__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46244__$1,new cljs.core.Keyword(null,"rel","rel",1378823488));
var order_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46244__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070));
var bad_input_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46244__$1,new cljs.core.Keyword(null,"bad-input?","bad-input?",1544544849));
var not_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46244__$1,new cljs.core.Keyword(null,"not-allowed?","not-allowed?",-1384550020));
var map__46245 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__46245__$1 = cljs.core.__destructure_map(map__46245);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46245__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var vec__46246 = order_by;
var order_rel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46246,(0),null);
var good_input_QMARK_ = (function (){var and__5043__auto__ = cljs.core.not_empty(in$);
if(cljs.core.truth_(and__5043__auto__)){
return (name__GT_id.cljs$core$IFn$_invoke$arity$1 ? name__GT_id.cljs$core$IFn$_invoke$arity$1(in$) : name__GT_id.call(null,in$));
} else {
return and__5043__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.search-form","form.search-form",-949559255),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return dk.cst.glossematics.frontend.page.search.submit();
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-row","div.input-row",-1792565831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"v"], null),"Look for "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"list",new cljs.core.Keyword(null,"list","list",765357683),"names",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. place, person, organisation, \u2026",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(not_allowed_QMARK_)?"not-allowed":null),(cljs.core.truth_(bad_input_QMARK_)?"bad-input":null),(cljs.core.truth_(good_input_QMARK_)?"good-input":null)], null),new cljs.core.Keyword(null,"id","id",-1388402092),"v",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(name__GT_id == null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),set_in,new cljs.core.Keyword(null,"value","value",305978217),in$], null)], null),(cljs.core.truth_(name__GT_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.multi_input_data,name_kvs], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"k"], null)," as "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"k",new cljs.core.Keyword(null,"value","value",305978217),dk.cst.glossematics.frontend.page.search.rel__GT_s(rel),new cljs.core.Keyword(null,"on-change","on-change",-732046149),set_rel,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(name__GT_id,in$))], null),(function (){var temp__5802__auto__ = (function (){var and__5043__auto__ = name__GT_type;
if(cljs.core.truth_(and__5043__auto__)){
return (name__GT_type.cljs$core$IFn$_invoke$arity$1 ? name__GT_type.cljs$core$IFn$_invoke$arity$1(in$) : name__GT_type.call(null,in$));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var entity_type = temp__5802__auto__;
var compatible_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.boolean$,entity_type,new cljs.core.Keyword(null,"compatible","compatible",714215472),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0));
var _QMARK_disable = (function (p1__46242_SHARP_){
return cljs.core.with_meta(p1__46242_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(compatible_QMARK_(p1__46242_SHARP_))], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.select_opts,cljs.core.map.cljs$core$IFn$_invoke$arity$2(_QMARK_disable,dk.cst.glossematics.static_data.search_rels),anything_opt], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.select_opts,dk.cst.glossematics.static_data.search_rels,anything_opt], null);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Search",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(in$)], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty(items))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.search_criteria,id__GT_type,items], null),((((cljs.core.empty_QMARK_(results)) && ((order_rel == null))))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.boolean$(order_rel)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"More options"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.search_result_postprocessing], null)], null))], null):null)], null);
});
});
dk.cst.glossematics.frontend.page.search.set_offset = (function dk$cst$glossematics$frontend$page$search$set_offset(f,n){
var new_offset = (function() { 
var G__46284__delegate = function (offset,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,offset,args);
};
var G__46284 = function (offset,var_args){
var args = null;
if (arguments.length > 1) {
var G__46285__i = 0, G__46285__a = new Array(arguments.length -  1);
while (G__46285__i < G__46285__a.length) {G__46285__a[G__46285__i] = arguments[G__46285__i + 1]; ++G__46285__i;}
  args = new cljs.core.IndexedSeq(G__46285__a,0,null);
} 
return G__46284__delegate.call(this,offset,args);};
G__46284.cljs$lang$maxFixedArity = 1;
G__46284.cljs$lang$applyTo = (function (arglist__46286){
var offset = cljs.core.first(arglist__46286);
var args = cljs.core.rest(arglist__46286);
return G__46284__delegate(offset,args);
});
G__46284.cljs$core$IFn$_invoke$arity$variadic = G__46284__delegate;
return G__46284;
})()
;
var top_elem = document.querySelector(".search-form");
var header_height = (100);
reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.search","page","dk.cst.glossematics.frontend.page.search/page",-718726271),cljs.core.PersistentArrayMap.EMPTY,dk.cst.glossematics.frontend.page.search.state__GT_params(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.query,cljs.core.update,new cljs.core.Keyword(null,"offset","offset",296498311),new_offset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))));

if(dk.cst.glossematics.frontend.shared.visible_QMARK_(top_elem)){
return null;
} else {
top_elem.scrollIntoView(true);

return window.scroll((0),(window.scrollY + header_height));
}
});
dk.cst.glossematics.frontend.page.search.generate_paging = (function dk$cst$glossematics$frontend$page$search$generate_paging(limit,total){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,total),cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(function (){var x__5133__auto__ = total;
var y__5134__auto__ = ((n + limit) - (1));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()], null);
}),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,limit),(1))));
});
/**
 * Paging widget for search `results`
 */
dk.cst.glossematics.frontend.page.search.search_paging = (function dk$cst$glossematics$frontend$page$search$search_paging(results){
var map__46250 = cljs.core.deref(dk.cst.glossematics.frontend.state.query);
var map__46250__$1 = cljs.core.__destructure_map(map__46250);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46250__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46250__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var num_results = cljs.core.count(results);
var total = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(results));
var pp = dk.cst.glossematics.frontend.page.search.generate_paging(limit,total);
if((cljs.core.count(pp) > (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-result__paging","div.search-result__paging",2005361378),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-row","div.input-row",-1792565831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,(0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dk.cst.glossematics.frontend.page.search.set_offset(cljs.core._,limit);
})], null),"\u2190 previous"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__46249_SHARP_){
return dk.cst.glossematics.frontend.page.search.set_offset((function (_,os){
return os;
}),parseInt(dk.cst.glossematics.frontend.page.search.e__GT_v(p1__46249_SHARP_)));
}),new cljs.core.Keyword(null,"value","value",305978217),offset], null),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$search$search_paging_$_iter__46251(s__46252){
return (new cljs.core.LazySeq(null,(function (){
var s__46252__$1 = s__46252;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46252__$1);
if(temp__5804__auto__){
var s__46252__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46252__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__46252__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__46254 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__46253 = (0);
while(true){
if((i__46253 < size__5521__auto__)){
var vec__46255 = cljs.core._nth(c__5520__auto__,i__46253);
var from_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46255,(0),null);
var to_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46255,(1),null);
cljs.core.chunk_append(b__46254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_item,to_item], null),new cljs.core.Keyword(null,"value","value",305978217),(from_item - (1))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_item),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_item)].join('')], null));

var G__46287 = (i__46253 + (1));
i__46253 = G__46287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46254),dk$cst$glossematics$frontend$page$search$search_paging_$_iter__46251(cljs.core.chunk_rest(s__46252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46254),null);
}
} else {
var vec__46258 = cljs.core.first(s__46252__$2);
var from_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46258,(0),null);
var to_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46258,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_item,to_item], null),new cljs.core.Keyword(null,"value","value",305978217),(from_item - (1))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_item),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_item)].join('')], null),dk$cst$glossematics$frontend$page$search$search_paging_$_iter__46251(cljs.core.rest(s__46252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(pp);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_results,total)) || ((total < (offset + limit)))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dk.cst.glossematics.frontend.page.search.set_offset(cljs.core._PLUS_,limit);
})], null),"next \u2192"], null)], null)], null);
} else {
return null;
}
});
dk.cst.glossematics.frontend.page.search.search_result_table = (function dk$cst$glossematics$frontend$page$search$search_result_table(search_state,p__46261){
var map__46262 = p__46261;
var map__46262__$1 = cljs.core.__destructure_map(map__46262);
var entity = map__46262__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46262__$1,new cljs.core.Keyword("document","title","document/title",-262963518));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46262__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var hyperlink = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.action","a.action",-1301579814),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"View in the reader",new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.reader_href(name)], null),dk.cst.glossematics.frontend.shared.break_str(title),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.action__icon","img.action__icon",1624183531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/external-link-svgrepo-com.svg"], null)], null)], null);
var kvs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","title","document/title",-262963518),hyperlink], null)], null),cljs.core.select_keys(entity,dk.cst.glossematics.static_data.search_result_rels));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.shared.metadata_table,search_state,entity,kvs], null);
});
dk.cst.glossematics.frontend.page.search.explanation = (function dk$cst$glossematics$frontend$page$search$explanation(name__GT_id){
var n = cljs.core.count(name__GT_id);
var get_field = (function (m){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(m),cljs.core.rand_int(cljs.core.count(m)))));
});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-content","div.text-content",-1548599504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.index.index_links], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Use this page to search for relevant documents in our archive."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Results are found by matching document metadata to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"one or more"], null)], null)," search criteria."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"The search criteria comprise: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"people, places, organisations, publications, languages,"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"terms"], null),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Note that ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"all"], null)], null)," selected criteria will apply to every document in a search result."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"By default, a search criterion will be compared to anything. ","However, a particular field may be selected for any criterion, ","e.g. the field \"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),get_field(dk.cst.glossematics.static_data.search_rels)], null)], null),"\"."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"The search results may also be sorted according to a specific field, ","e.g. the field \"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),get_field(dk.cst.glossematics.static_data.order_rels)], null)], null),"\". ","They can be further restricted to a certain range too."], null)], null),(function (){var temp__5804__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(name__GT_id),cljs.core.rand_int(n));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__46263 = temp__5804__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46263,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46263,(1),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Currently, a total of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),n], null)], null)," entities may be used as search criteria. ","An example of an entity that can be used as a criterion might be \"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.search","page","dk.cst.glossematics.frontend.page.search/page",-718726271),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null))], null),k], null)], null)], null),"\". "], null);
} else {
return null;
}
})()], null);
});
dk.cst.glossematics.frontend.page.search.page = (function dk$cst$glossematics$frontend$page$search$page(){
var map__46266 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__46266__$1 = cljs.core.__destructure_map(map__46266);
var search_state = map__46266__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46266__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var name__GT_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46266__$1,new cljs.core.Keyword(null,"name->id","name->id",-338114168));
var id__GT_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46266__$1,new cljs.core.Keyword(null,"id->name","id->name",249122446));
var map__46267 = cljs.core.deref(dk.cst.glossematics.frontend.state.query);
var map__46267__$1 = cljs.core.__destructure_map(map__46267);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46267__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var map__46268 = cljs.core.deref(dk.cst.glossematics.frontend.state.location);
var map__46268__$1 = cljs.core.__destructure_map(map__46268);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46268__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-page","div.search-page",1928814695),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.search_form], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name__GT_id], null)),(cljs.core.truth_(results)?((cljs.core.empty_QMARK_(results))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-content","div.text-content",-1548599504),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No documents match the search criteria. "," Perhaps try removing a criterion?"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-result","div.search-result",1848288768),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.search_paging,results], null),(cljs.core.truth_(id__GT_name)?(function (){var kvs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","name","file/name",1848919477),cljs.core.identity),results);
var entity_table = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.search.search_result_table,search_state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.shared.kvs_list,kvs,entity_table,offset], null);
})():null)], null)], null)):((cljs.core.empty_QMARK_(query_params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.search.explanation,name__GT_id], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0",new cljs.core.Keyword(null,"animation","animation",-1248293244),"fade-in-xy 1s ease-out forwards",new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"0.5s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"height","height",1025178622),(150)], null),new cljs.core.Keyword(null,"src","src",-1651076051),"/images/loading.svg"], null)], null)], null)))], null);
});

//# sourceMappingURL=dk.cst.glossematics.frontend.page.search.js.map
