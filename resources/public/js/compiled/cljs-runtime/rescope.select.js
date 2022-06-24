goog.provide('rescope.select');
/**
 * Create an element selector predicate for element `tags`. Will select elements
 *   present in the list of tags. Selects all elements if no tags are specified.
 */
rescope.select.element = (function rescope$select$element(var_args){
var args__5774__auto__ = [];
var len__5768__auto___44957 = arguments.length;
var i__5769__auto___44958 = (0);
while(true){
if((i__5769__auto___44958 < len__5768__auto___44957)){
args__5774__auto__.push((arguments[i__5769__auto___44958]));

var G__44959 = (i__5769__auto___44958 + (1));
i__5769__auto___44958 = G__44959;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return rescope.select.element.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(rescope.select.element.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
if(cljs.core.empty_QMARK_(tags)){
return cljs.core.vector_QMARK_;
} else {
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set(tags),cljs.core.first));
}
}));

(rescope.select.element.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rescope.select.element.cljs$lang$applyTo = (function (seq44923){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44923));
}));

/**
 * Create an attribute selector predicate based on `attr`. Passing a set as attr
 *   will test for the existence of attribute keys, while passing a map will test
 *   for matching key-value pairs of attributes.
 */
rescope.select.attr = (function rescope$select$attr(attr){
var contains_attr_QMARK_ = (function (p__44924){
var vec__44925 = p__44924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44925,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44925,(1),null);
if(cljs.core.set_QMARK_(attr)){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,m),attr);
} else {
if(cljs.core.map_QMARK_(attr)){
return cljs.core.every_QMARK_(cljs.core.set(m),attr);
} else {
return cljs.core.contains_QMARK_(m,attr);

}
}
});
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.second),contains_attr_QMARK_);
});
/**
 * Select elements satisfying `preds` in a `hiccup` tree while (coll-pred coll)
 *   returns logically true.
 */
rescope.select.select_while = (function rescope$select$select_while(var_args){
var args__5774__auto__ = [];
var len__5768__auto___44960 = arguments.length;
var i__5769__auto___44961 = (0);
while(true){
if((i__5769__auto___44961 < len__5768__auto___44960)){
args__5774__auto__.push((arguments[i__5769__auto___44961]));

var G__44962 = (i__5769__auto___44961 + (1));
i__5769__auto___44961 = G__44962;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return rescope.select.select_while.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(rescope.select.select_while.cljs$core$IFn$_invoke$arity$variadic = (function (coll_pred,hiccup,preds){
var matches_QMARK_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.every_pred,cljs.core.vector_QMARK_,preds);
var collect = (function (coll,p__44935){
var vec__44936 = p__44935;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44936,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44936,(1),null);
var loc = vec__44936;
var G__44939 = coll;
var G__44939__$1 = ((cljs.core.not((coll_pred.cljs$core$IFn$_invoke$arity$1 ? coll_pred.cljs$core$IFn$_invoke$arity$1(coll) : coll_pred.call(null,coll))))?cljs.core.reduced(G__44939):G__44939);
if(cljs.core.truth_((matches_QMARK_.cljs$core$IFn$_invoke$arity$1 ? matches_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : matches_QMARK_.call(null,node)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44939__$1,node);
} else {
return G__44939__$1;
}
});
var zip_iter = cljs.core.iterate(clojure.zip.next,hickory.zip.hiccup_zip(hiccup));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(collect,cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(clojure.zip.end_QMARK_),zip_iter));
}));

(rescope.select.select_while.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rescope.select.select_while.cljs$lang$applyTo = (function (seq44929){
var G__44930 = cljs.core.first(seq44929);
var seq44929__$1 = cljs.core.next(seq44929);
var G__44931 = cljs.core.first(seq44929__$1);
var seq44929__$2 = cljs.core.next(seq44929__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44930,G__44931,seq44929__$2);
}));

/**
 * Select all elements satisfying `preds` in a `hiccup` tree. If no predicates
 *   are specified, all elements in the hiccup will be returned.
 */
rescope.select.all = (function rescope$select$all(var_args){
var args__5774__auto__ = [];
var len__5768__auto___44967 = arguments.length;
var i__5769__auto___44968 = (0);
while(true){
if((i__5769__auto___44968 < len__5768__auto___44967)){
args__5774__auto__.push((arguments[i__5769__auto___44968]));

var G__44969 = (i__5769__auto___44968 + (1));
i__5769__auto___44968 = G__44969;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return rescope.select.all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(rescope.select.all.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,preds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rescope.select.select_while,cljs.core.constantly(true),hiccup,preds);
}));

(rescope.select.all.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.select.all.cljs$lang$applyTo = (function (seq44944){
var G__44945 = cljs.core.first(seq44944);
var seq44944__$1 = cljs.core.next(seq44944);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44945,seq44944__$1);
}));

/**
 * Select the first element satisfying `preds` in a `hiccup` tree.
 */
rescope.select.one = (function rescope$select$one(var_args){
var args__5774__auto__ = [];
var len__5768__auto___44970 = arguments.length;
var i__5769__auto___44971 = (0);
while(true){
if((i__5769__auto___44971 < len__5768__auto___44970)){
args__5774__auto__.push((arguments[i__5769__auto___44971]));

var G__44972 = (i__5769__auto___44971 + (1));
i__5769__auto___44971 = G__44972;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return rescope.select.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(rescope.select.one.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,preds){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rescope.select.select_while,(function (p1__44952_SHARP_){
return (cljs.core.count(p1__44952_SHARP_) < (1));
}),hiccup,preds));
}));

(rescope.select.one.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.select.one.cljs$lang$applyTo = (function (seq44954){
var G__44955 = cljs.core.first(seq44954);
var seq44954__$1 = cljs.core.next(seq44954);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44955,seq44954__$1);
}));


//# sourceMappingURL=rescope.select.js.map
