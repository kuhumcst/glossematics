goog.provide('rescope.helpers');
rescope.helpers.as_data__STAR_ = (function rescope$helpers$as_data__STAR_(attr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5522__auto__ = (function rescope$helpers$as_data__STAR__$_iter__44977(s__44978){
return (new cljs.core.LazySeq(null,(function (){
var s__44978__$1 = s__44978;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44978__$1);
if(temp__5804__auto__){
var s__44978__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44978__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__44978__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__44980 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__44979 = (0);
while(true){
if((i__44979 < size__5521__auto__)){
var vec__44981 = cljs.core._nth(c__5520__auto__,i__44979);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44981,(1),null);
cljs.core.chunk_append(b__44980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rescope.util.data__STAR_(k)),v], null));

var G__45028 = (i__44979 + (1));
i__44979 = G__45028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44980),rescope$helpers$as_data__STAR__$_iter__44977(cljs.core.chunk_rest(s__44978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44980),null);
}
} else {
var vec__44984 = cljs.core.first(s__44978__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44984,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rescope.util.data__STAR_(k)),v], null),rescope$helpers$as_data__STAR__$_iter__44977(cljs.core.rest(s__44978__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(attr);
})());
});
/**
 * Convert all attributes into data-* attributes.
 */
rescope.helpers.attr__GT_data_attr = (function rescope$helpers$attr__GT_data_attr(p__44987){
var vec__44988 = p__44987;
var seq__44989 = cljs.core.seq(vec__44988);
var first__44990 = cljs.core.first(seq__44989);
var seq__44989__$1 = cljs.core.next(seq__44989);
var tag = first__44990;
var first__44990__$1 = cljs.core.first(seq__44989__$1);
var seq__44989__$2 = cljs.core.next(seq__44989__$1);
var attr = first__44990__$1;
var content = seq__44989__$2;
var node = vec__44988;
if(cljs.core.map_QMARK_(attr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,(1),rescope.helpers.as_data__STAR_(attr));
} else {
return node;
}
});
/**
 * Rename attr keys according to `kmap`.
 */
rescope.helpers.rename_attr = (function rescope$helpers$rename_attr(kmap,p__44995){
var vec__44996 = p__44995;
var seq__44997 = cljs.core.seq(vec__44996);
var first__44998 = cljs.core.first(seq__44997);
var seq__44997__$1 = cljs.core.next(seq__44997);
var tag = first__44998;
var first__44998__$1 = cljs.core.first(seq__44997__$1);
var seq__44997__$2 = cljs.core.next(seq__44997__$1);
var attr = first__44998__$1;
var content = seq__44997__$2;
var node = vec__44996;
if(cljs.core.truth_((function (){var and__5043__auto__ = kmap;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.map_QMARK_(attr);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,(1),clojure.set.rename_keys(attr,rescope.helpers.as_data__STAR_(kmap)));
} else {
return node;
}
});
/**
 * Transform a hiccup vector node `loc` to a valid custom element name by
 *   setting a custom `prefix`.
 */
rescope.helpers.add_prefix = (function rescope$helpers$add_prefix(prefix,node){
if((cljs.core.first(node) instanceof cljs.core.Keyword)){
var tag = cljs.core.name(cljs.core.first(node));
var new_tag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rescope.util.prefixed(prefix,tag));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,(0),new_tag);
} else {
return node;
}
});
/**
 * Merge the element metadata into the attr. Mimics the behaviour of reagent.
 */
rescope.helpers.meta_into_attr = (function rescope$helpers$meta_into_attr(p__45007){
var vec__45008 = p__45007;
var seq__45009 = cljs.core.seq(vec__45008);
var first__45010 = cljs.core.first(seq__45009);
var seq__45009__$1 = cljs.core.next(seq__45009);
var tag = first__45010;
var first__45010__$1 = cljs.core.first(seq__45009__$1);
var seq__45009__$2 = cljs.core.next(seq__45009__$1);
var attr = first__45010__$1;
var content = seq__45009__$2;
var node = vec__45008;
var temp__5802__auto__ = cljs.core.meta(node);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.map_QMARK_(attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,(1),cljs.core.merge,m);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,m], null),content);
}
} else {
return node;
}
});
/**
 * Return function applying default transformations based on `opts`.
 * 
 *   This is meant to be used as the :default fn in the final stage of a Cuphic
 *   rewrite to ensure that the Hiccup will convert to standards-compliant HTML.
 */
rescope.helpers.default_fn = (function rescope$helpers$default_fn(p__45019){
var map__45022 = p__45019;
var map__45022__$1 = cljs.core.__destructure_map(map__45022);
var opts = map__45022__$1;
var attr_kmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45022__$1,new cljs.core.Keyword(null,"attr-kmap","attr-kmap",807970155));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45022__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return (function (node){
return rescope.helpers.meta_into_attr(rescope.helpers.add_prefix(prefix,rescope.helpers.rename_attr(attr_kmap,rescope.helpers.attr__GT_data_attr(node))));
});
});

//# sourceMappingURL=rescope.helpers.js.map
