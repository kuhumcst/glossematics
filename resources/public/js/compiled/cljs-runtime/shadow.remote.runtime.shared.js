goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33803,res){
var map__33804 = p__33803;
var map__33804__$1 = cljs.core.__destructure_map(map__33804);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33804__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33804__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33805 = res;
var G__33805__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33805,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33805);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33805__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33805__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33822 = arguments.length;
switch (G__33822) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33831,msg,handlers,timeout_after_ms){
var map__33832 = p__33831;
var map__33832__$1 = cljs.core.__destructure_map(map__33832);
var runtime = map__33832__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___34074 = arguments.length;
var i__5769__auto___34077 = (0);
while(true){
if((i__5769__auto___34077 < len__5768__auto___34074)){
args__5774__auto__.push((arguments[i__5769__auto___34077]));

var G__34080 = (i__5769__auto___34077 + (1));
i__5769__auto___34077 = G__34080;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33840,ev,args){
var map__33841 = p__33840;
var map__33841__$1 = cljs.core.__destructure_map(map__33841);
var runtime = map__33841__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33841__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33842 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33845 = null;
var count__33846 = (0);
var i__33847 = (0);
while(true){
if((i__33847 < count__33846)){
var ext = chunk__33845.cljs$core$IIndexed$_nth$arity$2(null,i__33847);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34089 = seq__33842;
var G__34090 = chunk__33845;
var G__34091 = count__33846;
var G__34092 = (i__33847 + (1));
seq__33842 = G__34089;
chunk__33845 = G__34090;
count__33846 = G__34091;
i__33847 = G__34092;
continue;
} else {
var G__34094 = seq__33842;
var G__34095 = chunk__33845;
var G__34096 = count__33846;
var G__34097 = (i__33847 + (1));
seq__33842 = G__34094;
chunk__33845 = G__34095;
count__33846 = G__34096;
i__33847 = G__34097;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33842);
if(temp__5804__auto__){
var seq__33842__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33842__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__33842__$1);
var G__34099 = cljs.core.chunk_rest(seq__33842__$1);
var G__34100 = c__5567__auto__;
var G__34101 = cljs.core.count(c__5567__auto__);
var G__34102 = (0);
seq__33842 = G__34099;
chunk__33845 = G__34100;
count__33846 = G__34101;
i__33847 = G__34102;
continue;
} else {
var ext = cljs.core.first(seq__33842__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34103 = cljs.core.next(seq__33842__$1);
var G__34104 = null;
var G__34105 = (0);
var G__34106 = (0);
seq__33842 = G__34103;
chunk__33845 = G__34104;
count__33846 = G__34105;
i__33847 = G__34106;
continue;
} else {
var G__34116 = cljs.core.next(seq__33842__$1);
var G__34117 = null;
var G__34118 = (0);
var G__34119 = (0);
seq__33842 = G__34116;
chunk__33845 = G__34117;
count__33846 = G__34118;
i__33847 = G__34119;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33837){
var G__33838 = cljs.core.first(seq33837);
var seq33837__$1 = cljs.core.next(seq33837);
var G__33839 = cljs.core.first(seq33837__$1);
var seq33837__$2 = cljs.core.next(seq33837__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33838,G__33839,seq33837__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33866,p__33867){
var map__33868 = p__33866;
var map__33868__$1 = cljs.core.__destructure_map(map__33868);
var runtime = map__33868__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33869 = p__33867;
var map__33869__$1 = cljs.core.__destructure_map(map__33869);
var msg = map__33869__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33869__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33872 = cljs.core.deref(state_ref);
var map__33872__$1 = cljs.core.__destructure_map(map__33872);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33882){
var map__33884 = p__33882;
var map__33884__$1 = cljs.core.__destructure_map(map__33884);
var runtime = map__33884__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33884__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33890,msg){
var map__33892 = p__33890;
var map__33892__$1 = cljs.core.__destructure_map(map__33892);
var runtime = map__33892__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33892__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33910,key,p__33911){
var map__33912 = p__33910;
var map__33912__$1 = cljs.core.__destructure_map(map__33912);
var state = map__33912__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33912__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33913 = p__33911;
var map__33913__$1 = cljs.core.__destructure_map(map__33913);
var spec = map__33913__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33913__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33919,key,spec){
var map__33920 = p__33919;
var map__33920__$1 = cljs.core.__destructure_map(map__33920);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33920__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33924_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33924_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33925_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33925_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33927_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33927_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33928_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33928_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33929_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33929_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33958,key){
var map__33959 = p__33958;
var map__33959__$1 = cljs.core.__destructure_map(map__33959);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33980,msg){
var map__33982 = p__33980;
var map__33982__$1 = cljs.core.__destructure_map(map__33982);
var runtime = map__33982__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33982__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34000,p__34001){
var map__34003 = p__34000;
var map__34003__$1 = cljs.core.__destructure_map(map__34003);
var runtime = map__34003__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34004 = p__34001;
var map__34004__$1 = cljs.core.__destructure_map(map__34004);
var msg = map__34004__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34004__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34004__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34023 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34025 = null;
var count__34026 = (0);
var i__34027 = (0);
while(true){
if((i__34027 < count__34026)){
var map__34045 = chunk__34025.cljs$core$IIndexed$_nth$arity$2(null,i__34027);
var map__34045__$1 = cljs.core.__destructure_map(map__34045);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34045__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34244 = seq__34023;
var G__34245 = chunk__34025;
var G__34246 = count__34026;
var G__34247 = (i__34027 + (1));
seq__34023 = G__34244;
chunk__34025 = G__34245;
count__34026 = G__34246;
i__34027 = G__34247;
continue;
} else {
var G__34248 = seq__34023;
var G__34249 = chunk__34025;
var G__34250 = count__34026;
var G__34251 = (i__34027 + (1));
seq__34023 = G__34248;
chunk__34025 = G__34249;
count__34026 = G__34250;
i__34027 = G__34251;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34023);
if(temp__5804__auto__){
var seq__34023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34023__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__34023__$1);
var G__34255 = cljs.core.chunk_rest(seq__34023__$1);
var G__34256 = c__5567__auto__;
var G__34257 = cljs.core.count(c__5567__auto__);
var G__34258 = (0);
seq__34023 = G__34255;
chunk__34025 = G__34256;
count__34026 = G__34257;
i__34027 = G__34258;
continue;
} else {
var map__34051 = cljs.core.first(seq__34023__$1);
var map__34051__$1 = cljs.core.__destructure_map(map__34051);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34051__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34265 = cljs.core.next(seq__34023__$1);
var G__34266 = null;
var G__34267 = (0);
var G__34268 = (0);
seq__34023 = G__34265;
chunk__34025 = G__34266;
count__34026 = G__34267;
i__34027 = G__34268;
continue;
} else {
var G__34269 = cljs.core.next(seq__34023__$1);
var G__34270 = null;
var G__34271 = (0);
var G__34272 = (0);
seq__34023 = G__34269;
chunk__34025 = G__34270;
count__34026 = G__34271;
i__34027 = G__34272;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
