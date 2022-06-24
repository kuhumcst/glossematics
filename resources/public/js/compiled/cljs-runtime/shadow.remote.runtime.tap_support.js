goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36460,p__36461){
var map__36462 = p__36460;
var map__36462__$1 = cljs.core.__destructure_map(map__36462);
var svc = map__36462__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36462__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36462__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36462__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36463 = p__36461;
var map__36463__$1 = cljs.core.__destructure_map(map__36463);
var msg = map__36463__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36463__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36470,p__36471){
var map__36472 = p__36470;
var map__36472__$1 = cljs.core.__destructure_map(map__36472);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36473 = p__36471;
var map__36473__$1 = cljs.core.__destructure_map(map__36473);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36478,p__36479){
var map__36481 = p__36478;
var map__36481__$1 = cljs.core.__destructure_map(map__36481);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36481__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36481__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36482 = p__36479;
var map__36482__$1 = cljs.core.__destructure_map(map__36482);
var msg = map__36482__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36482__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36486,tid){
var map__36487 = p__36486;
var map__36487__$1 = cljs.core.__destructure_map(map__36487);
var svc = map__36487__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36487__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36497 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36498 = null;
var count__36499 = (0);
var i__36500 = (0);
while(true){
if((i__36500 < count__36499)){
var vec__36513 = chunk__36498.cljs$core$IIndexed$_nth$arity$2(null,i__36500);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36513,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36513,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36533 = seq__36497;
var G__36534 = chunk__36498;
var G__36535 = count__36499;
var G__36536 = (i__36500 + (1));
seq__36497 = G__36533;
chunk__36498 = G__36534;
count__36499 = G__36535;
i__36500 = G__36536;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36497);
if(temp__5804__auto__){
var seq__36497__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36497__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__36497__$1);
var G__36537 = cljs.core.chunk_rest(seq__36497__$1);
var G__36538 = c__5567__auto__;
var G__36539 = cljs.core.count(c__5567__auto__);
var G__36540 = (0);
seq__36497 = G__36537;
chunk__36498 = G__36538;
count__36499 = G__36539;
i__36500 = G__36540;
continue;
} else {
var vec__36516 = cljs.core.first(seq__36497__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36516,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36516,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36541 = cljs.core.next(seq__36497__$1);
var G__36542 = null;
var G__36543 = (0);
var G__36544 = (0);
seq__36497 = G__36541;
chunk__36498 = G__36542;
count__36499 = G__36543;
i__36500 = G__36544;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36488_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36488_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36489_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36489_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36490_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36490_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36491_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36491_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36521){
var map__36526 = p__36521;
var map__36526__$1 = cljs.core.__destructure_map(map__36526);
var svc = map__36526__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36526__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36526__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
