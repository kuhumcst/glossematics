goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39349 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39350 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39350);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__39352 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39353 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39353);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39352);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39349);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__39366 = arguments.length;
switch (G__39366) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__39371 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39371,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39371,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__39387_39436 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__39388_39437 = null;
var count__39389_39438 = (0);
var i__39390_39439 = (0);
while(true){
if((i__39390_39439 < count__39389_39438)){
var vec__39411_39440 = chunk__39388_39437.cljs$core$IIndexed$_nth$arity$2(null,i__39390_39439);
var container_39441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39411_39440,(0),null);
var comp_39442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39411_39440,(1),null);
reagent.dom.re_render_component(comp_39442,container_39441);


var G__39443 = seq__39387_39436;
var G__39444 = chunk__39388_39437;
var G__39445 = count__39389_39438;
var G__39446 = (i__39390_39439 + (1));
seq__39387_39436 = G__39443;
chunk__39388_39437 = G__39444;
count__39389_39438 = G__39445;
i__39390_39439 = G__39446;
continue;
} else {
var temp__5804__auto___39447 = cljs.core.seq(seq__39387_39436);
if(temp__5804__auto___39447){
var seq__39387_39448__$1 = temp__5804__auto___39447;
if(cljs.core.chunked_seq_QMARK_(seq__39387_39448__$1)){
var c__5567__auto___39449 = cljs.core.chunk_first(seq__39387_39448__$1);
var G__39450 = cljs.core.chunk_rest(seq__39387_39448__$1);
var G__39451 = c__5567__auto___39449;
var G__39452 = cljs.core.count(c__5567__auto___39449);
var G__39453 = (0);
seq__39387_39436 = G__39450;
chunk__39388_39437 = G__39451;
count__39389_39438 = G__39452;
i__39390_39439 = G__39453;
continue;
} else {
var vec__39420_39454 = cljs.core.first(seq__39387_39448__$1);
var container_39455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39420_39454,(0),null);
var comp_39456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39420_39454,(1),null);
reagent.dom.re_render_component(comp_39456,container_39455);


var G__39463 = cljs.core.next(seq__39387_39448__$1);
var G__39464 = null;
var G__39465 = (0);
var G__39466 = (0);
seq__39387_39436 = G__39463;
chunk__39388_39437 = G__39464;
count__39389_39438 = G__39465;
i__39390_39439 = G__39466;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
