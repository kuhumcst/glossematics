goog.provide('dk.cst.stucco.group');
/**
 * Redistribute `weights` such that the `delta` is subtracted from the weight at
 *   index `n` and added to the weight at index `m`.
 */
dk.cst.stucco.group.redistribute = (function dk$cst$stucco$group$redistribute(weights,m,n,delta){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(weights,m,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(weights,m) + delta);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(weights,n) - delta);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], 0));
});
/**
 * A combination of `vs`, with the space optionally partitioned by `weights`.
 *   If no `weights` are specified, each v will initially take up equal size.
 *   The `vs` will typically be various functionally related Stucco components.
 */
dk.cst.stucco.group.combination = (function dk$cst$stucco$group$combination(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45121 = arguments.length;
var i__5769__auto___45122 = (0);
while(true){
if((i__5769__auto___45122 < len__5768__auto___45121)){
args__5774__auto__.push((arguments[i__5769__auto___45122]));

var G__45123 = (i__5769__auto___45122 + (1));
i__5769__auto___45122 = G__45123;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return dk.cst.stucco.group.combination.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(dk.cst.stucco.group.combination.cljs$core$IFn$_invoke$arity$variadic = (function (p__45079,vs){
var map__45081 = p__45079;
var map__45081__$1 = cljs.core.__destructure_map(map__45081);
var state = map__45081__$1;
var weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45081__$1,new cljs.core.Keyword(null,"weights","weights",-1097626197));
var with_let45082 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let45082","with-let45082",-574441653));
var temp__5808__auto___45127 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___45127 == null)){
} else {
var c__36614__auto___45128 = temp__5808__auto___45127;
if((with_let45082.generation === c__36614__auto___45128.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let45082.generation = c__36614__auto___45128.ratomGeneration);
}

var init45083 = (with_let45082.length === (0));
var state__$1 = ((((init45083) || (cljs.core.not(with_let45082.hasOwnProperty((0))))))?(with_let45082[(0)] = dk.cst.stucco.util.state.normalize(state)):(with_let45082[(0)]));
var resize_state = ((((init45083) || (cljs.core.not(with_let45082.hasOwnProperty((1))))))?(with_let45082[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let45082[(1)]));
var res45084 = (function (){var map__45085 = cljs.core.deref(state__$1);
var map__45085__$1 = cljs.core.__destructure_map(map__45085);
var weights__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45085__$1,new cljs.core.Keyword(null,"weights","weights",-1097626197),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly((1)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vs))));
var resizing = cljs.core.deref(resize_state);
var key_prefix = cljs.core.hash(vs);
var columns = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("var(--grid-16)",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45070_SHARP_){
return ["minmax(min-content, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45070_SHARP_),"fr)"].join('');
}),weights__$1)));
var resize_begin = (function (m,n){
return (function (e){
var elements = e.target.parentNode.children;
var widths = (function (){var iter__5522__auto__ = (function dk$cst$stucco$group$iter__45089(s__45090){
return (new cljs.core.LazySeq(null,(function (){
var s__45090__$1 = s__45090;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45090__$1);
if(temp__5804__auto__){
var s__45090__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45090__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45090__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45092 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45091 = (0);
while(true){
if((i__45091 < size__5521__auto__)){
var elem = cljs.core._nth(c__5520__auto__,i__45091);
cljs.core.chunk_append(b__45092,elem.offsetWidth);

var G__45129 = (i__45091 + (1));
i__45091 = G__45129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45092),dk$cst$stucco$group$iter__45089(cljs.core.chunk_rest(s__45090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45092),null);
}
} else {
var elem = cljs.core.first(s__45090__$2);
return cljs.core.cons(elem.offsetWidth,dk$cst$stucco$group$iter__45089(cljs.core.rest(s__45090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements));
})();
return cljs.core.reset_BANG_(resize_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"widths","widths",-1467327440),cljs.core.vec(widths),new cljs.core.Keyword(null,"m","m",1632677161),m,new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"x","x",2099068185),e.clientX], null));
});
});
var resize_move = (function (e){
var temp__5804__auto__ = cljs.core.deref(resize_state);
if(cljs.core.truth_(temp__5804__auto__)){
var map__45095 = temp__5804__auto__;
var map__45095__$1 = cljs.core.__destructure_map(map__45095);
var widths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"widths","widths",-1467327440));
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"n","n",562130025));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var x_SINGLEQUOTE_ = e.clientX;
var weights_SINGLEQUOTE_ = dk.cst.stucco.group.redistribute(widths,m,n,(x_SINGLEQUOTE_ - x));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"weights","weights",-1097626197),weights_SINGLEQUOTE_);
} else {
return null;
}
});
var resize_end = (function (){
return cljs.core.reset_BANG_(resize_state,null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.combination","div.combination",1629936372),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),resize_move,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),resize_end,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),resize_end,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(resizing)?"combination--resize":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),columns], null)], null),(function (){var iter__5522__auto__ = (function dk$cst$stucco$group$iter__45101(s__45102){
return (new cljs.core.LazySeq(null,(function (){
var s__45102__$1 = s__45102;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45102__$1);
if(temp__5804__auto__){
var s__45102__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45102__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45102__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45104 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45103 = (0);
while(true){
if((i__45103 < size__5521__auto__)){
var vec__45105 = cljs.core._nth(c__5520__auto__,i__45103);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45105,(1),null);
var key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_prefix),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(v)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
cljs.core.chunk_append(b__45104,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),(((n > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.combination__separator","div.combination__separator",1820998383),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(resizing)))?"combination__separator--resize":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),resize_begin((n - (1)),n)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),v], null)], null));

var G__45150 = (i__45103 + (1));
i__45103 = G__45150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45104),dk$cst$stucco$group$iter__45101(cljs.core.chunk_rest(s__45102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45104),null);
}
} else {
var vec__45110 = cljs.core.first(s__45102__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45110,(1),null);
var key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_prefix),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(v)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),(((n > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.combination__separator","div.combination__separator",1820998383),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(resizing)))?"combination__separator--resize":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),resize_begin((n - (1)),n)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),v], null)], null),dk$cst$stucco$group$iter__45101(cljs.core.rest(s__45102__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,vs));
})()], null);
})();
return res45084;
}));

(dk.cst.stucco.group.combination.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dk.cst.stucco.group.combination.cljs$lang$applyTo = (function (seq45072){
var G__45073 = cljs.core.first(seq45072);
var seq45072__$1 = cljs.core.next(seq45072);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45073,seq45072__$1);
}));


//# sourceMappingURL=dk.cst.stucco.group.js.map
