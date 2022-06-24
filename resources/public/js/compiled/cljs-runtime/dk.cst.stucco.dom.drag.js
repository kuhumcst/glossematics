goog.provide('dk.cst.stucco.dom.drag');
/**
 * Temporary storage for drag data.
 * 
 *   This circumvents the string restriction of the JavaScript dataTransfer object,
 *   allowing this API to store any temporary data, e.g. functions, when dragging.
 */
dk.cst.stucco.dom.drag.drag_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * The `drag-fn` is called with no args on a successful drop. The container's
 *   `source-id` is needed to check for a illegal drop states when dropping.
 */
dk.cst.stucco.dom.drag.on_drag_start = (function dk$cst$stucco$dom$drag$on_drag_start(drag_fn,source_id){
return (function (e){
var drag_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(drag_fn));
var dt = e.dataTransfer;
var element = e.target;
var x_offset = (element.offsetWidth / (2));
var y_offset = (element.offsetHeight / (2));
var ghost = element.cloneNode(true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.stucco.dom.drag.drag_data,cljs.core.assoc,drag_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drag-fn","drag-fn",1270882084),drag_fn,new cljs.core.Keyword(null,"source-id","source-id",-585995304),source_id,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),ghost], null));

dt.setData("drag-id",drag_id);

(dt.effectAllowed = "move");

(dt.dropEffect = "move");

ghost.classList.add("--ghost");

ghost.setAttribute("aria-hidden","true");

document.body.appendChild(ghost);

dt.setDragImage(ghost,x_offset,y_offset);

return setTimeout((function (){
dk.cst.stucco.dom.bem.add_modifier_BANG_(element.parentNode,"drag-parent");

return dk.cst.stucco.dom.bem.add_modifier_BANG_(element,"drag");
}),(100));
});
});
/**
 * The `drop-fn` is called with the drag-fn's output as its input on a
 *   successful drop.
 */
dk.cst.stucco.dom.drag.on_drop = (function dk$cst$stucco$dom$drag$on_drop(drop_fn){
return (function (e){
e.preventDefault();

dk.cst.stucco.dom.bem.remove_modifier_BANG_(e.target,"drag-over");

var target = e.target;
var drag_id = e.dataTransfer.getData("drag-id");
var map__39703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dk.cst.stucco.dom.drag.drag_data),drag_id);
var map__39703__$1 = cljs.core.__destructure_map(map__39703);
var drag_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39703__$1,new cljs.core.Keyword(null,"drag-fn","drag-fn",1270882084));
var source_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39703__$1,new cljs.core.Keyword(null,"source-id","source-id",-585995304));
var ghost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39703__$1,new cljs.core.Keyword(null,"ghost","ghost",-1531157576));
var source = document.getElementById(source_id);
if(cljs.core.truth_(drag_fn)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dk.cst.stucco.dom.drag.drag_data,cljs.core.dissoc,drag_id);

ghost.parentNode.removeChild(ghost);

if(cljs.core.not((function (){var and__5043__auto__ = source;
if(cljs.core.truth_(and__5043__auto__)){
return source.contains(target);
} else {
return and__5043__auto__;
}
})())){
var G__39705 = (drag_fn.cljs$core$IFn$_invoke$arity$0 ? drag_fn.cljs$core$IFn$_invoke$arity$0() : drag_fn.call(null));
return (drop_fn.cljs$core$IFn$_invoke$arity$1 ? drop_fn.cljs$core$IFn$_invoke$arity$1(G__39705) : drop_fn.call(null,G__39705));
} else {
return null;
}
} else {
return null;
}
});
});
dk.cst.stucco.dom.drag.on_drag_over = (function dk$cst$stucco$dom$drag$on_drag_over(e){
e.preventDefault();

return (e.dataTransfer.dropEffect = "move");
});
dk.cst.stucco.dom.drag.on_drag_enter = (function dk$cst$stucco$dom$drag$on_drag_enter(e){
e.preventDefault();

return dk.cst.stucco.dom.bem.add_modifier_BANG_(e.target,"drag-over");
});
dk.cst.stucco.dom.drag.on_drag_leave = (function dk$cst$stucco$dom$drag$on_drag_leave(e){
e.preventDefault();

return dk.cst.stucco.dom.bem.remove_modifier_BANG_(e.target,"drag-over");
});
dk.cst.stucco.dom.drag.on_drag_end = (function dk$cst$stucco$dom$drag$on_drag_end(e){
dk.cst.stucco.dom.bem.remove_modifier_BANG_(e.target.parentNode,"drag-parent");

return dk.cst.stucco.dom.bem.remove_modifier_BANG_(e.target,"drag");
});

//# sourceMappingURL=dk.cst.stucco.dom.drag.js.map
