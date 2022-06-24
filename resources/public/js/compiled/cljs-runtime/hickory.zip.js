goog.provide('hickory.zip');
/**
 * Returns a zipper for html dom maps (as from as-hickory),
 *   given a root element.
 */
hickory.zip.hickory_zip = (function hickory$zip$hickory_zip(root){
return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword(null,"content","content",15833224)),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"content","content",15833224),(function (){var and__5043__auto__ = children;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else {
return and__5043__auto__;
}
})());
}),root);
});
/**
 * Takes a hiccup node (normalized or not) and returns its children nodes.
 */
hickory.zip.children = (function hickory$zip$children(node){
if(cljs.core.vector_QMARK_(node)){
if(cljs.core.map_QMARK_(cljs.core.second(node))){
return cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(node,(2)));
} else {
return cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(node,(1)));
}
} else {
return node;
}
});
/**
 * Takes a hiccup node (normalized or not) and a sequence of children nodes,
 * and returns a new node that has the the children argument as its children.
 */
hickory.zip.make = (function hickory$zip$make(node,children){
if(cljs.core.vector_QMARK_(node)){
if(cljs.core.map_QMARK_(cljs.core.second(node))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(node,(0),(2)),children);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.first(node),children);
}
} else {
return children;
}
});
/**
 * Returns a zipper for Hiccup forms, given a root form.
 */
hickory.zip.hiccup_zip = (function hickory$zip$hiccup_zip(root){
return clojure.zip.zipper(cljs.core.sequential_QMARK_,hickory.zip.children,hickory.zip.make,root);
});

//# sourceMappingURL=hickory.zip.js.map
