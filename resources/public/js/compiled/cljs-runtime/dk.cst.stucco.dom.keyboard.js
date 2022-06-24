goog.provide('dk.cst.stucco.dom.keyboard');
/**
 * Get siblings for an `element` (including itself) with the same ARIA role.
 */
dk.cst.stucco.dom.keyboard.role_siblings = (function dk$cst$stucco$dom$keyboard$role_siblings(element){
var role = element.getAttribute("role");
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39626_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(role,p1__39626_SHARP_.getAttribute("role"));
}),element.parentNode.children);
});
/**
 * Get adjacent role siblings for an `element` as [before after].
 */
dk.cst.stucco.dom.keyboard.adjacent_role_siblings = (function dk$cst$stucco$dom$keyboard$adjacent_role_siblings(element){
var before = cljs.core.PersistentVector.EMPTY;
var after = null;
var G__39631 = dk.cst.stucco.dom.keyboard.role_siblings(element);
var vec__39632 = G__39631;
var seq__39633 = cljs.core.seq(vec__39632);
var first__39634 = cljs.core.first(seq__39633);
var seq__39633__$1 = cljs.core.next(seq__39633);
var sibling = first__39634;
var siblings = seq__39633__$1;
var before__$1 = before;
var after__$1 = after;
var G__39631__$1 = G__39631;
while(true){
var before__$2 = before__$1;
var after__$2 = after__$1;
var vec__39638 = G__39631__$1;
var seq__39639 = cljs.core.seq(vec__39638);
var first__39640 = cljs.core.first(seq__39639);
var seq__39639__$1 = cljs.core.next(seq__39639);
var sibling__$1 = first__39640;
var siblings__$1 = seq__39639__$1;
if((sibling__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [before__$2,after__$2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,sibling__$1)){
var G__39648 = before__$2;
var G__39649 = cljs.core.PersistentVector.EMPTY;
var G__39650 = siblings__$1;
before__$1 = G__39648;
after__$1 = G__39649;
G__39631__$1 = G__39650;
continue;
} else {
if(cljs.core.truth_(after__$2)){
var G__39651 = before__$2;
var G__39652 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(after__$2,sibling__$1);
var G__39653 = siblings__$1;
before__$1 = G__39651;
after__$1 = G__39652;
G__39631__$1 = G__39653;
continue;
} else {
if(cljs.core.truth_(before__$2)){
var G__39654 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(before__$2,sibling__$1);
var G__39655 = after__$2;
var G__39656 = siblings__$1;
before__$1 = G__39654;
after__$1 = G__39655;
G__39631__$1 = G__39656;
continue;
} else {
return null;
}
}
}
}
break;
}
});
dk.cst.stucco.dom.keyboard.spacebar = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Spacebar",null," ",null], null), null);
dk.cst.stucco.dom.keyboard.enter = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Enter",null], null), null);
dk.cst.stucco.dom.keyboard.up = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"Up",null], null), null);
dk.cst.stucco.dom.keyboard.down = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowDown",null,"Down",null], null), null);
dk.cst.stucco.dom.keyboard.left = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Left",null,"ArrowLeft",null], null), null);
dk.cst.stucco.dom.keyboard.right = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"Right",null], null), null);
dk.cst.stucco.dom.keyboard.prev_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.dom.keyboard.up,dk.cst.stucco.dom.keyboard.left);
dk.cst.stucco.dom.keyboard.next_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.dom.keyboard.down,dk.cst.stucco.dom.keyboard.right);
dk.cst.stucco.dom.keyboard.click_item = clojure.set.union.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.dom.keyboard.spacebar,dk.cst.stucco.dom.keyboard.enter);
dk.cst.stucco.dom.keyboard.supported_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(dk.cst.stucco.dom.keyboard.prev_item,dk.cst.stucco.dom.keyboard.next_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dk.cst.stucco.dom.keyboard.click_item], 0));
/**
 * OnKeyDown handler with keyboard functionality needed for a roving tabindex.
 *   Focus moves between adjacent DOM siblings with the same ARIA role.
 * 
 *   Requires :on-click and :role to have been set on the affected elements.
 *   The elements should also update their :tab-index attribute reactively.
 * 
 *   ARIA references:
 *  https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_general_within
 */
dk.cst.stucco.dom.keyboard.roving_tabindex_handler = (function dk$cst$stucco$dom$keyboard$roving_tabindex_handler(e){
if(cljs.core.truth_((dk.cst.stucco.dom.keyboard.supported_keys.cljs$core$IFn$_invoke$arity$1 ? dk.cst.stucco.dom.keyboard.supported_keys.cljs$core$IFn$_invoke$arity$1(e.key) : dk.cst.stucco.dom.keyboard.supported_keys.call(null,e.key)))){
e.preventDefault();

e.stopPropagation();

var vec__39641 = dk.cst.stucco.dom.keyboard.adjacent_role_siblings(e.target);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39641,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39641,(1),null);
var pred__39644 = cljs.core.contains_QMARK_;
var expr__39645 = e.key;
if(cljs.core.truth_((pred__39644.cljs$core$IFn$_invoke$arity$2 ? pred__39644.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.dom.keyboard.click_item,expr__39645) : pred__39644.call(null,dk.cst.stucco.dom.keyboard.click_item,expr__39645)))){
dk.cst.stucco.dom.focus.request_BANG_(e.target.id);

e.target.click();

return e.target.focus();
} else {
if(cljs.core.truth_((pred__39644.cljs$core$IFn$_invoke$arity$2 ? pred__39644.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.dom.keyboard.prev_item,expr__39645) : pred__39644.call(null,dk.cst.stucco.dom.keyboard.prev_item,expr__39645)))){
return cljs.core.last(((cljs.core.empty_QMARK_(before))?after:before)).focus();
} else {
if(cljs.core.truth_((pred__39644.cljs$core$IFn$_invoke$arity$2 ? pred__39644.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.dom.keyboard.next_item,expr__39645) : pred__39644.call(null,dk.cst.stucco.dom.keyboard.next_item,expr__39645)))){
return cljs.core.first(((cljs.core.empty_QMARK_(after))?before:after)).focus();
} else {
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);
}
}
}
} else {
return null;
}
});

//# sourceMappingURL=dk.cst.stucco.dom.keyboard.js.map
