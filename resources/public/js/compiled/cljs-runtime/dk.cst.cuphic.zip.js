goog.provide('dk.cst.cuphic.zip');
/**
 * Also zips maps in addition to zipping vectors. Intentionally skips records.
 */
dk.cst.cuphic.zip.vector_map_zip = (function dk$cst$cuphic$zip$vector_map_zip(root){
return clojure.zip.zipper(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.complement(cljs.core.record_QMARK_))),cljs.core.seq,(function (node,children){
if(cljs.core.vector_QMARK_(node)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,children),cljs.core.meta(node));
} else {
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children),cljs.core.meta(node));
}
}),root);
});
/**
 * Lazily iterate through all zipper states from the given `loc` to the end.
 */
dk.cst.cuphic.zip.iterate_zipper = (function dk$cst$cuphic$zip$iterate_zipper(loc){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(clojure.zip.end_QMARK_),cljs.core.iterate(clojure.zip.next,loc));
});
/**
 * Traverse the zipper starting from `loc`, applying `f` to all locs on the way.
 *   Once the whole zipper has been traversed, zip up and return the changed tree.
 */
dk.cst.cuphic.zip.reduce_zipper = (function dk$cst$cuphic$zip$reduce_zipper(f,loc){
var G__44727 = loc;
var vec__44728 = G__44727;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44728,(0),null);
var loc__$1 = vec__44728;
var G__44727__$1 = G__44727;
while(true){
var vec__44736 = G__44727__$1;
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44736,(0),null);
var loc__$2 = vec__44736;
if(clojure.zip.end_QMARK_(loc__$2)){
return clojure.zip.root(loc__$2);
} else {
var G__44789 = clojure.zip.next((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(loc__$2,node__$1) : f.call(null,loc__$2,node__$1)));
G__44727__$1 = G__44789;
continue;
}
break;
}
});
/**
 * Fast-forward a zipper to skip the subtree at `loc`.
 */
dk.cst.cuphic.zip.skip_subtree = (function dk$cst$cuphic$zip$skip_subtree(p__44745){
while(true){
var vec__44752 = p__44745;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44752,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44752,(1),null);
var loc = vec__44752;
if(clojure.zip.end_QMARK_(loc)){
return loc;
} else {
if(cljs.core.truth_(clojure.zip.right(loc))){
return clojure.zip.right(loc);
} else {
if(cljs.core.truth_(clojure.zip.up(loc))){
var G__44792 = clojure.zip.up(loc);
p__44745 = G__44792;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc,(1),new cljs.core.Keyword(null,"end","end",-268185958));

}
}
}
break;
}
});
/**
 * Replace `loc` with `nodes`.
 */
dk.cst.cuphic.zip.multi_replace = (function dk$cst$cuphic$zip$multi_replace(loc,p__44768){
var vec__44770 = p__44768;
var seq__44771 = cljs.core.seq(vec__44770);
var first__44772 = cljs.core.first(seq__44771);
var seq__44771__$1 = cljs.core.next(seq__44771);
var node = first__44772;
var nodes = seq__44771__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.zip.insert_right,clojure.zip.replace(loc,node),cljs.core.reverse(nodes));
});

//# sourceMappingURL=dk.cst.cuphic.zip.js.map
