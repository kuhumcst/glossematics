goog.provide('dk.cst.stucco.document');
/**
 * Assert from the `attr` that the image has an alt text.
 */
dk.cst.stucco.document.assert_alt = (function dk$cst$stucco$document$assert_alt(p__45018){
var map__45020 = p__45018;
var map__45020__$1 = cljs.core.__destructure_map(map__45020);
var attr = map__45020__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45020__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45020__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
if(cljs.core.truth_(alt)){
return null;
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," lacks an alt text: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)].join(''),"\n","alt"].join('')));
}
});
/**
 * Illustration that can be full-screened if need be. Replaces [:img].
 */
dk.cst.stucco.document.illustration = (function dk$cst$stucco$document$illustration(p__45023){
var map__45024 = p__45023;
var map__45024__$1 = cljs.core.__destructure_map(map__45024);
var attr = map__45024__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45024__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45024__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
dk.cst.stucco.document.assert_alt(attr);

var with_let45025 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let45025","with-let45025",204507923));
var temp__5808__auto___45040 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___45040 == null)){
} else {
var c__36614__auto___45041 = temp__5808__auto___45040;
if((with_let45025.generation === c__36614__auto___45041.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let45025.generation = c__36614__auto___45041.ratomGeneration);
}

var init45026 = (with_let45025.length === (0));
var fullscreen = ((((init45026) || (cljs.core.not(with_let45025.hasOwnProperty((0))))))?(with_let45025[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let45025[(0)]));
var res45027 = (function (){var fullscreen_QMARK_ = cljs.core.deref(fullscreen);
var toggle = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fullscreen,cljs.core.not);
});
var attr_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle], null)], 0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.illustration","div.illustration",-950529502),(cljs.core.truth_(fullscreen_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"illustration--fullscreen",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.illustration__backdrop","div.illustration__backdrop",1217523378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),attr_STAR_], null),(cljs.core.truth_(fullscreen_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),attr_STAR_], null):null)], null);
})();
return res45027;
});

//# sourceMappingURL=dk.cst.stucco.document.js.map
