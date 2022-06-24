goog.provide('rescope.core');
/**
 * Get a set of all custom tags (as strings) found in a `hiccup` tree.
 */
rescope.core.hiccup__GT_custom_tags = (function rescope$core$hiccup__GT_custom_tags(hiccup){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(rescope.util.valid_custom_tag_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.name),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,rescope.select.all(hiccup))))));
});
/**
 * Define custom HTML elements covering all `tags`.
 */
rescope.core.define_elements_BANG_ = (function rescope$core$define_elements_BANG_(tags){
var seq__45151 = cljs.core.seq(tags);
var chunk__45152 = null;
var count__45153 = (0);
var i__45154 = (0);
while(true){
if((i__45154 < count__45153)){
var tag = chunk__45152.cljs$core$IIndexed$_nth$arity$2(null,i__45154);
rescope.interop.define_element_BANG_(tag);


var G__45198 = seq__45151;
var G__45199 = chunk__45152;
var G__45200 = count__45153;
var G__45201 = (i__45154 + (1));
seq__45151 = G__45198;
chunk__45152 = G__45199;
count__45153 = G__45200;
i__45154 = G__45201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45151);
if(temp__5804__auto__){
var seq__45151__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45151__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__45151__$1);
var G__45202 = cljs.core.chunk_rest(seq__45151__$1);
var G__45203 = c__5567__auto__;
var G__45204 = cljs.core.count(c__5567__auto__);
var G__45205 = (0);
seq__45151 = G__45202;
chunk__45152 = G__45203;
count__45153 = G__45204;
i__45154 = G__45205;
continue;
} else {
var tag = cljs.core.first(seq__45151__$1);
rescope.interop.define_element_BANG_(tag);


var G__45206 = cljs.core.next(seq__45151__$1);
var G__45207 = null;
var G__45208 = (0);
var G__45209 = (0);
seq__45151 = G__45206;
chunk__45152 = G__45207;
count__45153 = G__45208;
i__45154 = G__45209;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Get a :ref fn for a DOM element to render a given `comp` as its shadow root.
 *   The component should accept a single argument: the element's DOM reference.
 */
rescope.core.shadow_ref = (function rescope$core$shadow_ref(comp){
return (function (this$){
if(cljs.core.truth_(this$)){
if((void 0 === this$.shadow)){
(this$.shadow = this$.attachShadow(({"mode": "open"})));
} else {
}

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,this$], null),this$.shadow);
} else {
return null;
}
});
});
rescope.core.shadow_wrapper = (function rescope$core$shadow_wrapper(old_node,new_node){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(old_node,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1289896967),rescope.core.shadow_ref(cljs.core.constantly(new_node)));
});
/**
 * Render `hiccup` inside a shadow DOM with the root element as the shadow host.
 *   Optionally takes scoped `css` to apply to the content inside the shadow DOM.
 *   The `css` can be a string or hiccup, e.g. [:style], [:link], [:template].
 */
rescope.core.scope = (function rescope$core$scope(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45217 = arguments.length;
var i__5769__auto___45218 = (0);
while(true){
if((i__5769__auto___45218 < len__5768__auto___45217)){
args__5774__auto__.push((arguments[i__5769__auto___45218]));

var G__45219 = (i__5769__auto___45218 + (1));
i__5769__auto___45218 = G__45219;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return rescope.core.scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(rescope.core.scope.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__45169){
var vec__45170 = p__45169;
var css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45170,(0),null);
rescope.core.define_elements_BANG_(rescope.core.hiccup__GT_custom_tags(hiccup));

var vec__45173 = ((cljs.core.map_QMARK_(cljs.core.second(hiccup)))?cljs.core.split_at((2),hiccup):cljs.core.split_at((1),hiccup));
var vec__45176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45173,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45176,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45176,(1),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45173,(1),null);
var style = ((typeof css === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),css], null):css);
var comp = (function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),style], null),children);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,new cljs.core.Keyword(null,"ref","ref",1289896967),rescope.core.shadow_ref(comp))], null);
}));

(rescope.core.scope.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.core.scope.cljs$lang$applyTo = (function (seq45164){
var G__45165 = cljs.core.first(seq45164);
var seq45164__$1 = cljs.core.next(seq45164);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45165,seq45164__$1);
}));


//# sourceMappingURL=rescope.core.js.map
