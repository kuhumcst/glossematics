goog.provide('dk.cst.stucco.pattern');
dk.cst.stucco.pattern.mk_tab_id = (function dk$cst$stucco$pattern$mk_tab_id(parent_id,n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
});
dk.cst.stucco.pattern.mk_tab_panel_id = (function dk$cst$stucco$pattern$mk_tab_panel_id(parent_id,n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-tabpanel-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
});
dk.cst.stucco.pattern.background_colours = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["var(--tab-background-1)","var(--tab-background-2)","var(--tab-background-3)"], null);
/**
 * Annotate background `n` of `backgrounds` in the metadata of `kv`.
 */
dk.cst.stucco.pattern.add_background = (function dk$cst$stucco$pattern$add_background(backgrounds,n,kv){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(kv,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"background","background",-863952629)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(backgrounds,n));
});
/**
 * Apply heterogeneous styling to tab `kvs`.
 */
dk.cst.stucco.pattern.heterostyled = (function dk$cst$stucco$pattern$heterostyled(var_args){
var G__39802 = arguments.length;
switch (G__39802) {
case 1:
return dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$1 = (function (kvs){
return dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$2(kvs,cljs.core.identity);
}));

(dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$2 = (function (kvs,order_fn){
var backgrounds = cljs.core.cycle((order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(dk.cst.stucco.pattern.background_colours) : order_fn.call(null,dk.cst.stucco.pattern.background_colours)));
var add_background_SINGLEQUOTE_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.pattern.add_background,backgrounds);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(kvs),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(add_background_SINGLEQUOTE_,kvs));
}));

(dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$3 = (function (kvs,order_fn,backgrounds){
var backgrounds__$1 = cljs.core.cycle((order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(backgrounds) : order_fn.call(null,backgrounds)));
var add_background_SINGLEQUOTE_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dk.cst.stucco.pattern.add_background,backgrounds__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(kvs),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(add_background_SINGLEQUOTE_,kvs));
}));

(dk.cst.stucco.pattern.heterostyled.cljs$lang$maxFixedArity = 3);

/**
 * The tabs available in the `state`.
 */
dk.cst.stucco.pattern.tab_list = (function dk$cst$stucco$pattern$tab_list(p__39814,p__39815){
var map__39816 = p__39814;
var map__39816__$1 = cljs.core.__destructure_map(map__39816);
var state = map__39816__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39816__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39816__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__39817 = p__39815;
var map__39817__$1 = cljs.core.__destructure_map(map__39817);
var opts = map__39817__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39817__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
dk.cst.stucco.util.state.assert_valid(state,new cljs.core.Keyword("dk.cst.stucco.util.state","kvs+i","dk.cst.stucco.util.state/kvs+i",-56931243));

var map__39820 = cljs.core.deref(state);
var map__39820__$1 = cljs.core.__destructure_map(map__39820);
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39820__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39820__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var panel_id = dk.cst.stucco.pattern.mk_tab_panel_id(id,i__$1);
var length = cljs.core.count(kvs__$1);
var append = (function (kv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,dk.cst.stucco.util.state.mk_drop_state,(length - (1)),kv);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,dk.cst.stucco.util.state.mk_drop_state,length,kv);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list","div.tab-list",-1713189330),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"role","role",-736691072),"tablist",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Choose a tab to display",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),dk.cst.stucco.dom.keyboard.roving_tabindex_handler,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),dk.cst.stucco.dom.drag.on_drag_enter,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),dk.cst.stucco.dom.drag.on_drag_over,new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),dk.cst.stucco.dom.drag.on_drag_leave,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),dk.cst.stucco.dom.drag.on_drop(append)], null),(function (){var iter__5522__auto__ = (function dk$cst$stucco$pattern$tab_list_$_iter__39824(s__39825){
return (new cljs.core.LazySeq(null,(function (){
var s__39825__$1 = s__39825;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39825__$1);
if(temp__5804__auto__){
var s__39825__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39825__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__39825__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__39827 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__39826 = (0);
while(true){
if((i__39826 < size__5521__auto__)){
var n = cljs.core._nth(c__5520__auto__,i__39826);
var vec__39828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,n);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39828,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39828,(1),null);
var kv = vec__39828;
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var tab_id = dk.cst.stucco.pattern.mk_tab_id(id,n);
var source_id = dk.cst.stucco.pattern.mk_tab_panel_id(id,n);
var delete$ = ((function (i__39826,vec__39828,k,_,kv,selected_QMARK_,tab_id,source_id,n,c__5520__auto__,size__5521__auto__,b__39827,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,dk.cst.stucco.util.state.mk_drag_state,n);

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(kv,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_);
});})(i__39826,vec__39828,k,_,kv,selected_QMARK_,tab_id,source_id,n,c__5520__auto__,size__5521__auto__,b__39827,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id))
;
var insert = ((function (i__39826,vec__39828,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,n,c__5520__auto__,size__5521__auto__,b__39827,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id){
return (function (kv__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,dk.cst.stucco.util.state.mk_drop_state,n,kv__$1);
});})(i__39826,vec__39828,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,n,c__5520__auto__,size__5521__auto__,b__39827,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id))
;
var select = ((function (i__39826,vec__39828,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,insert,n,c__5520__auto__,size__5521__auto__,b__39827,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(i__39826,vec__39828,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,insert,n,c__5520__auto__,size__5521__auto__,b__39827,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id))
;
cljs.core.chunk_append(b__39827,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671)],["tab",((selected_QMARK_)?"0":"-1"),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs__$1,i__$1,n], null)),dk.cst.stucco.dom.focus.accept_BANG_,dk.cst.stucco.dom.drag.on_drop(insert),panel_id,select,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)),dk.cst.stucco.dom.drag.on_drag_leave,dk.cst.stucco.dom.drag.on_drag_start(delete$,source_id),true,tab_id,dk.cst.stucco.dom.drag.on_drag_enter,selected_QMARK_,dk.cst.stucco.dom.drag.on_drag_over,["View tab number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1)))].join(''),selected_QMARK_,dk.cst.stucco.dom.drag.on_drag_end]),k], null));

var G__39971 = (i__39826 + (1));
i__39826 = G__39971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39827),dk$cst$stucco$pattern$tab_list_$_iter__39824(cljs.core.chunk_rest(s__39825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39827),null);
}
} else {
var n = cljs.core.first(s__39825__$2);
var vec__39839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,n);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39839,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39839,(1),null);
var kv = vec__39839;
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var tab_id = dk.cst.stucco.pattern.mk_tab_id(id,n);
var source_id = dk.cst.stucco.pattern.mk_tab_panel_id(id,n);
var delete$ = ((function (vec__39839,k,_,kv,selected_QMARK_,tab_id,source_id,n,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,dk.cst.stucco.util.state.mk_drag_state,n);

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(kv,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_);
});})(vec__39839,k,_,kv,selected_QMARK_,tab_id,source_id,n,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id))
;
var insert = ((function (vec__39839,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,n,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id){
return (function (kv__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,dk.cst.stucco.util.state.mk_drop_state,n,kv__$1);
});})(vec__39839,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,n,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id))
;
var select = ((function (vec__39839,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,insert,n,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(vec__39839,k,_,kv,selected_QMARK_,tab_id,source_id,delete$,insert,n,s__39825__$2,temp__5804__auto__,map__39820,map__39820__$1,kvs__$1,i__$1,panel_id,length,append,map__39816,map__39816__$1,state,kvs,i,map__39817,map__39817__$1,opts,id))
;
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab","span.tab",330510028),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671)],["tab",((selected_QMARK_)?"0":"-1"),cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs__$1,i__$1,n], null)),dk.cst.stucco.dom.focus.accept_BANG_,dk.cst.stucco.dom.drag.on_drop(insert),panel_id,select,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv)),dk.cst.stucco.dom.drag.on_drag_leave,dk.cst.stucco.dom.drag.on_drag_start(delete$,source_id),true,tab_id,dk.cst.stucco.dom.drag.on_drag_enter,selected_QMARK_,dk.cst.stucco.dom.drag.on_drag_over,["View tab number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1)))].join(''),selected_QMARK_,dk.cst.stucco.dom.drag.on_drag_end]),k], null),dk$cst$stucco$pattern$tab_list_$_iter__39824(cljs.core.rest(s__39825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(length));
})()], null);
});
/**
 * The currently selected tab-panel of the `state`.
 */
dk.cst.stucco.pattern.tab_panel = (function dk$cst$stucco$pattern$tab_panel(p__39855,p__39856){
var map__39857 = p__39855;
var map__39857__$1 = cljs.core.__destructure_map(map__39857);
var state = map__39857__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39857__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39857__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__39858 = p__39856;
var map__39858__$1 = cljs.core.__destructure_map(map__39858);
var opts = map__39858__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39858__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
dk.cst.stucco.util.state.assert_valid(state,new cljs.core.Keyword("dk.cst.stucco.util.state","kvs+i","dk.cst.stucco.util.state/kvs+i",-56931243));

var map__39860 = cljs.core.deref(state);
var map__39860__$1 = cljs.core.__destructure_map(map__39860);
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39860__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39860__$1,new cljs.core.Keyword(null,"i","i",-1386841315),(0));
var vec__39861 = (cljs.core.truth_(cljs.core.not_empty(kvs__$1))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,i__$1):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39861,(1),null);
var kv = vec__39861;
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.tab-panel","section.tab-panel",561093350),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"tabpanel",new cljs.core.Keyword(null,"id","id",-1388402092),dk.cst.stucco.pattern.mk_tab_panel_id(id,i__$1),new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),dk.cst.stucco.pattern.mk_tab_id(id,i__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv))], null),v], null);
} else {
return null;
}
});
/**
 * Merged view of the tab-list and the tab-panel of the currently selected tab.
 * 
 *   Takes `state` of the form:
 *  :kvs - key-value pairs of tab labels and bodies.
 *  :i   - (optional) the index of the currently selected tab.
 * 
 *   Various opts for tab components:
 *  :id - (optional) a unique id attribute for the tab-list.
 * 
 *   ARIA reference:
 *  https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
 */
dk.cst.stucco.pattern.tabs = (function dk$cst$stucco$pattern$tabs(p__39869,p__39870){
var map__39872 = p__39869;
var map__39872__$1 = cljs.core.__destructure_map(map__39872);
var state = map__39872__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39872__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39872__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__39873 = p__39870;
var map__39873__$1 = cljs.core.__destructure_map(map__39873);
var opts = map__39873__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39873__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state__$1 = dk.cst.stucco.util.state.prepare(new cljs.core.Keyword("dk.cst.stucco.util.state","kvs+i","dk.cst.stucco.util.state/kvs+i",-56931243),state);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.random_uuid();
}
})());
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.tabs","article.tabs",1086188119),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.pattern.tab_list,state__$1,opts__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.pattern.tab_panel,state__$1,opts__$1], null)], null);
});
});
/**
 * Tabbed carousel with a slide picker, but without automatic slide rotation.
 * 
 *   Takes `state` of the form:
 *  :kvs  - key-values pairs of slide labels and bodies.
 *  :i    - (optional) the index of the currently selected slide.
 * 
 *   Optionally, certain HTML attributes specified in the `opts` may merged with
 *   the carousel attr. This should be done in order to satisfy ARIA labeling
 *   requirements, e.g. either :aria-label or :aria-labelledby should be set.
 * 
 *   ARIA reference:
 *  https://www.w3.org/TR/wai-aria-practices-1.1/#carousel
 */
dk.cst.stucco.pattern.carousel = (function dk$cst$stucco$pattern$carousel(p__39891,p__39892){
var map__39894 = p__39891;
var map__39894__$1 = cljs.core.__destructure_map(map__39894);
var state = map__39894__$1;
var kvs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39894__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39894__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var map__39895 = p__39892;
var map__39895__$1 = cljs.core.__destructure_map(map__39895);
var opts = map__39895__$1;
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39895__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_labelledby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39895__$1,new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667));
var with_let39898 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39898","with-let39898",357437074));
var temp__5808__auto___39986 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___39986 == null)){
} else {
var c__36614__auto___39987 = temp__5808__auto___39986;
if((with_let39898.generation === c__36614__auto___39987.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39898.generation = c__36614__auto___39987.ratomGeneration);
}

var init39899 = (with_let39898.length === (0));
var state__$1 = ((((init39899) || (cljs.core.not(with_let39898.hasOwnProperty((0))))))?(with_let39898[(0)] = dk.cst.stucco.util.state.prepare(new cljs.core.Keyword("dk.cst.stucco.util.state","kvs+i","dk.cst.stucco.util.state/kvs+i",-56931243),state)):(with_let39898[(0)]));
var next_slide = ((((init39899) || (cljs.core.not(with_let39898.hasOwnProperty((1))))))?(with_let39898[(1)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.update,new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.inc);
})):(with_let39898[(1)]));
var prev_slide = ((((init39899) || (cljs.core.not(with_let39898.hasOwnProperty((2))))))?(with_let39898[(2)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.update,new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.dec);
})):(with_let39898[(2)]));
var res39900 = (function (){var map__39910 = cljs.core.deref(state__$1);
var map__39910__$1 = cljs.core.__destructure_map(map__39910);
var i__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39910__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var kvs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39910__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var styles = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.meta),kvs__$1);
var vec__39911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kvs__$1,i__$1);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39911,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39911,(1),null);
var tab_panel_id = cljs.core.random_uuid();
var label_id = cljs.core.random_uuid();
var prev_QMARK_ = (i__$1 > (0));
var next_QMARK_ = (i__$1 < (cljs.core.count(kvs__$1) - (1)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel","div.carousel",-760498478),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"group",new cljs.core.Keyword(null,"aria-roledescription","aria-roledescription",549343444),"carousel",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),aria_label,new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),aria_labelledby], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel__select","button.carousel__select",-617636703),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["View slide number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((prev_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((prev_QMARK_)?prev_slide:null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(styles,(i__$1 - (1)),null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel__slide","div.carousel__slide",223315872),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"tabpanel",new cljs.core.Keyword(null,"id","id",-1388402092),tab_panel_id,new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),label_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(styles,i__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel__slide-header","div.carousel__slide-header",-208317774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel__slide-label","div.carousel__slide-label",1672685114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),label_id], null),label], null),(((cljs.core.count(kvs__$1) > (1)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slide-picker","div.slide-picker",393327121),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"tablist",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),dk.cst.stucco.dom.keyboard.roving_tabindex_handler,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Choose a slide to display"], null)], null),(function (){var iter__5522__auto__ = (function dk$cst$stucco$pattern$carousel_$_iter__39914(s__39915){
return (new cljs.core.LazySeq(null,(function (){
var s__39915__$1 = s__39915;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39915__$1);
if(temp__5804__auto__){
var s__39915__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39915__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__39915__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__39917 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__39916 = (0);
while(true){
if((i__39916 < size__5521__auto__)){
var n = cljs.core._nth(c__5520__auto__,i__39916);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var select = ((function (i__39916,selected_QMARK_,n,c__5520__auto__,size__5521__auto__,b__39917,s__39915__$2,temp__5804__auto__,map__39910,map__39910__$1,i__$1,kvs__$1,styles,vec__39911,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init39899,state__$1,next_slide,prev_slide,with_let39898,map__39894,map__39894__$1,state,kvs,i,map__39895,map__39895__$1,opts,aria_label,aria_labelledby){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(i__39916,selected_QMARK_,n,c__5520__auto__,size__5521__auto__,b__39917,s__39915__$2,temp__5804__auto__,map__39910,map__39910__$1,i__$1,kvs__$1,styles,vec__39911,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init39899,state__$1,next_slide,prev_slide,with_let39898,map__39894,map__39894__$1,state,kvs,i,map__39895,map__39895__$1,opts,aria_label,aria_labelledby))
;
cljs.core.chunk_append(b__39917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slide-picker__dot","span.slide-picker__dot",75672836),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),tab_panel_id,new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),selected_QMARK_,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((selected_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),select], null)], null));

var G__40015 = (i__39916 + (1));
i__39916 = G__40015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39917),dk$cst$stucco$pattern$carousel_$_iter__39914(cljs.core.chunk_rest(s__39915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39917),null);
}
} else {
var n = cljs.core.first(s__39915__$2);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1);
var select = ((function (selected_QMARK_,n,s__39915__$2,temp__5804__auto__,map__39910,map__39910__$1,i__$1,kvs__$1,styles,vec__39911,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init39899,state__$1,next_slide,prev_slide,with_let39898,map__39894,map__39894__$1,state,kvs,i,map__39895,map__39895__$1,opts,aria_label,aria_labelledby){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),n);
});})(selected_QMARK_,n,s__39915__$2,temp__5804__auto__,map__39910,map__39910__$1,i__$1,kvs__$1,styles,vec__39911,label,content,tab_panel_id,label_id,prev_QMARK_,next_QMARK_,init39899,state__$1,next_slide,prev_slide,with_let39898,map__39894,map__39894__$1,state,kvs,i,map__39895,map__39895__$1,opts,aria_label,aria_labelledby))
;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slide-picker__dot","span.slide-picker__dot",75672836),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),tab_panel_id,new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),selected_QMARK_,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((selected_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),select], null)], null),dk$cst$stucco$pattern$carousel_$_iter__39914(cljs.core.rest(s__39915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(kvs__$1)));
})()):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.carousel__slide-separator","div.carousel__slide-separator",-1953475912)], null),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.carousel__select","button.carousel__select",-617636703),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["View slide number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i__$1 + (1)))].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),((next_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((next_QMARK_)?next_slide:null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(styles,(i__$1 + (1)),null)], null)], null)], null);
})();
return res39900;
});

//# sourceMappingURL=dk.cst.stucco.pattern.js.map
