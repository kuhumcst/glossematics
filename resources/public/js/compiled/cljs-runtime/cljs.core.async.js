goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30670 = arguments.length;
switch (G__30670) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30675 = (function (f,blockable,meta30676){
this.f = f;
this.blockable = blockable;
this.meta30676 = meta30676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30677,meta30676__$1){
var self__ = this;
var _30677__$1 = this;
return (new cljs.core.async.t_cljs$core$async30675(self__.f,self__.blockable,meta30676__$1));
}));

(cljs.core.async.t_cljs$core$async30675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30677){
var self__ = this;
var _30677__$1 = this;
return self__.meta30676;
}));

(cljs.core.async.t_cljs$core$async30675.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30675.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30676","meta30676",-626945935,null)], null);
}));

(cljs.core.async.t_cljs$core$async30675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30675");

(cljs.core.async.t_cljs$core$async30675.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async30675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30675.
 */
cljs.core.async.__GT_t_cljs$core$async30675 = (function cljs$core$async$__GT_t_cljs$core$async30675(f__$1,blockable__$1,meta30676){
return (new cljs.core.async.t_cljs$core$async30675(f__$1,blockable__$1,meta30676));
});

}

return (new cljs.core.async.t_cljs$core$async30675(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30695 = arguments.length;
switch (G__30695) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30715 = arguments.length;
switch (G__30715) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30730 = arguments.length;
switch (G__30730) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33789 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33789) : fn1.call(null,val_33789));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33789) : fn1.call(null,val_33789));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30746 = arguments.length;
switch (G__30746) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5635__auto___33807 = n;
var x_33808 = (0);
while(true){
if((x_33808 < n__5635__auto___33807)){
(a[x_33808] = x_33808);

var G__33813 = (x_33808 + (1));
x_33808 = G__33813;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30762 = (function (flag,meta30763){
this.flag = flag;
this.meta30763 = meta30763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30764,meta30763__$1){
var self__ = this;
var _30764__$1 = this;
return (new cljs.core.async.t_cljs$core$async30762(self__.flag,meta30763__$1));
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30764){
var self__ = this;
var _30764__$1 = this;
return self__.meta30763;
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30763","meta30763",-711383455,null)], null);
}));

(cljs.core.async.t_cljs$core$async30762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30762");

(cljs.core.async.t_cljs$core$async30762.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async30762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30762.
 */
cljs.core.async.__GT_t_cljs$core$async30762 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30762(flag__$1,meta30763){
return (new cljs.core.async.t_cljs$core$async30762(flag__$1,meta30763));
});

}

return (new cljs.core.async.t_cljs$core$async30762(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30778 = (function (flag,cb,meta30779){
this.flag = flag;
this.cb = cb;
this.meta30779 = meta30779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30780,meta30779__$1){
var self__ = this;
var _30780__$1 = this;
return (new cljs.core.async.t_cljs$core$async30778(self__.flag,self__.cb,meta30779__$1));
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30780){
var self__ = this;
var _30780__$1 = this;
return self__.meta30779;
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30779","meta30779",-1564186285,null)], null);
}));

(cljs.core.async.t_cljs$core$async30778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30778");

(cljs.core.async.t_cljs$core$async30778.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async30778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30778.
 */
cljs.core.async.__GT_t_cljs$core$async30778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30778(flag__$1,cb__$1,meta30779){
return (new cljs.core.async.t_cljs$core$async30778(flag__$1,cb__$1,meta30779));
});

}

return (new cljs.core.async.t_cljs$core$async30778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30791_SHARP_){
var G__30798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30791_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30798) : fret.call(null,G__30798));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30792_SHARP_){
var G__30802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30792_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30802) : fret.call(null,G__30802));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33854 = (i + (1));
i = G__33854;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___33856 = arguments.length;
var i__5769__auto___33857 = (0);
while(true){
if((i__5769__auto___33857 < len__5768__auto___33856)){
args__5774__auto__.push((arguments[i__5769__auto___33857]));

var G__33858 = (i__5769__auto___33857 + (1));
i__5769__auto___33857 = G__33858;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30821){
var map__30822 = p__30821;
var map__30822__$1 = cljs.core.__destructure_map(map__30822);
var opts = map__30822__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30811){
var G__30812 = cljs.core.first(seq30811);
var seq30811__$1 = cljs.core.next(seq30811);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30812,seq30811__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30830 = arguments.length;
switch (G__30830) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30552__auto___33863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_30875){
var state_val_30877 = (state_30875[(1)]);
if((state_val_30877 === (7))){
var inst_30871 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30880_33864 = state_30875__$1;
(statearr_30880_33864[(2)] = inst_30871);

(statearr_30880_33864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (1))){
var state_30875__$1 = state_30875;
var statearr_30889_33865 = state_30875__$1;
(statearr_30889_33865[(2)] = null);

(statearr_30889_33865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (4))){
var inst_30850 = (state_30875[(7)]);
var inst_30850__$1 = (state_30875[(2)]);
var inst_30851 = (inst_30850__$1 == null);
var state_30875__$1 = (function (){var statearr_30899 = state_30875;
(statearr_30899[(7)] = inst_30850__$1);

return statearr_30899;
})();
if(cljs.core.truth_(inst_30851)){
var statearr_30900_33870 = state_30875__$1;
(statearr_30900_33870[(1)] = (5));

} else {
var statearr_30901_33871 = state_30875__$1;
(statearr_30901_33871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (13))){
var state_30875__$1 = state_30875;
var statearr_30903_33873 = state_30875__$1;
(statearr_30903_33873[(2)] = null);

(statearr_30903_33873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (6))){
var inst_30850 = (state_30875[(7)]);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30875__$1,(11),to,inst_30850);
} else {
if((state_val_30877 === (3))){
var inst_30873 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30875__$1,inst_30873);
} else {
if((state_val_30877 === (12))){
var state_30875__$1 = state_30875;
var statearr_30920_33876 = state_30875__$1;
(statearr_30920_33876[(2)] = null);

(statearr_30920_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (2))){
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30875__$1,(4),from);
} else {
if((state_val_30877 === (11))){
var inst_30864 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30864)){
var statearr_30922_33879 = state_30875__$1;
(statearr_30922_33879[(1)] = (12));

} else {
var statearr_30923_33881 = state_30875__$1;
(statearr_30923_33881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (9))){
var state_30875__$1 = state_30875;
var statearr_30925_33883 = state_30875__$1;
(statearr_30925_33883[(2)] = null);

(statearr_30925_33883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (5))){
var state_30875__$1 = state_30875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30926_33885 = state_30875__$1;
(statearr_30926_33885[(1)] = (8));

} else {
var statearr_30927_33886 = state_30875__$1;
(statearr_30927_33886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (14))){
var inst_30869 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30928_33887 = state_30875__$1;
(statearr_30928_33887[(2)] = inst_30869);

(statearr_30928_33887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (10))){
var inst_30861 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30932_33889 = state_30875__$1;
(statearr_30932_33889[(2)] = inst_30861);

(statearr_30932_33889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (8))){
var inst_30858 = cljs.core.async.close_BANG_(to);
var state_30875__$1 = state_30875;
var statearr_30934_33893 = state_30875__$1;
(statearr_30934_33893[(2)] = inst_30858);

(statearr_30934_33893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_30941 = [null,null,null,null,null,null,null,null];
(statearr_30941[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_30941[(1)] = (1));

return statearr_30941;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_30875){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30875);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30943){var ex__29305__auto__ = e30943;
var statearr_30944_33905 = state_30875;
(statearr_30944_33905[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30875[(4)]))){
var statearr_30945_33906 = state_30875;
(statearr_30945_33906[(1)] = cljs.core.first((state_30875[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33907 = state_30875;
state_30875 = G__33907;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_30946 = f__30553__auto__();
(statearr_30946[(6)] = c__30552__auto___33863);

return statearr_30946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30954){
var vec__30955 = p__30954;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955,(1),null);
var job = vec__30955;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30552__auto___33915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_30964){
var state_val_30965 = (state_30964[(1)]);
if((state_val_30965 === (1))){
var state_30964__$1 = state_30964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30964__$1,(2),res,v);
} else {
if((state_val_30965 === (2))){
var inst_30959 = (state_30964[(2)]);
var inst_30960 = cljs.core.async.close_BANG_(res);
var state_30964__$1 = (function (){var statearr_30967 = state_30964;
(statearr_30967[(7)] = inst_30959);

return statearr_30967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30964__$1,inst_30960);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_30968 = [null,null,null,null,null,null,null,null];
(statearr_30968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_30968[(1)] = (1));

return statearr_30968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_30964){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_30964);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e30972){var ex__29305__auto__ = e30972;
var statearr_30973_33921 = state_30964;
(statearr_30973_33921[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_30964[(4)]))){
var statearr_30979_33923 = state_30964;
(statearr_30979_33923[(1)] = cljs.core.first((state_30964[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33926 = state_30964;
state_30964 = G__33926;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_30964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_30964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_30984 = f__30553__auto__();
(statearr_30984[(6)] = c__30552__auto___33915);

return statearr_30984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30986){
var vec__30987 = p__30986;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30987,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30987,(1),null);
var job = vec__30987;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5635__auto___33930 = n;
var __33935 = (0);
while(true){
if((__33935 < n__5635__auto___33930)){
var G__30990_33936 = type;
var G__30990_33937__$1 = (((G__30990_33936 instanceof cljs.core.Keyword))?G__30990_33936.fqn:null);
switch (G__30990_33937__$1) {
case "compute":
var c__30552__auto___33942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33935,c__30552__auto___33942,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async){
return (function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = ((function (__33935,c__30552__auto___33942,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async){
return (function (state_31003){
var state_val_31004 = (state_31003[(1)]);
if((state_val_31004 === (1))){
var state_31003__$1 = state_31003;
var statearr_31006_33949 = state_31003__$1;
(statearr_31006_33949[(2)] = null);

(statearr_31006_33949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (2))){
var state_31003__$1 = state_31003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31003__$1,(4),jobs);
} else {
if((state_val_31004 === (3))){
var inst_31001 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31003__$1,inst_31001);
} else {
if((state_val_31004 === (4))){
var inst_30993 = (state_31003[(2)]);
var inst_30994 = process__$1(inst_30993);
var state_31003__$1 = state_31003;
if(cljs.core.truth_(inst_30994)){
var statearr_31007_33964 = state_31003__$1;
(statearr_31007_33964[(1)] = (5));

} else {
var statearr_31008_33965 = state_31003__$1;
(statearr_31008_33965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (5))){
var state_31003__$1 = state_31003;
var statearr_31009_33970 = state_31003__$1;
(statearr_31009_33970[(2)] = null);

(statearr_31009_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (6))){
var state_31003__$1 = state_31003;
var statearr_31011_33972 = state_31003__$1;
(statearr_31011_33972[(2)] = null);

(statearr_31011_33972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (7))){
var inst_30999 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
var statearr_31012_33979 = state_31003__$1;
(statearr_31012_33979[(2)] = inst_30999);

(statearr_31012_33979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33935,c__30552__auto___33942,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async))
;
return ((function (__33935,switch__29301__auto__,c__30552__auto___33942,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_31015 = [null,null,null,null,null,null,null];
(statearr_31015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_31015[(1)] = (1));

return statearr_31015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_31003){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31003);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31016){var ex__29305__auto__ = e31016;
var statearr_31017_33994 = state_31003;
(statearr_31017_33994[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31003[(4)]))){
var statearr_31018_33995 = state_31003;
(statearr_31018_33995[(1)] = cljs.core.first((state_31003[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33999 = state_31003;
state_31003 = G__33999;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_31003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_31003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
;})(__33935,switch__29301__auto__,c__30552__auto___33942,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async))
})();
var state__30554__auto__ = (function (){var statearr_31019 = f__30553__auto__();
(statearr_31019[(6)] = c__30552__auto___33942);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
});})(__33935,c__30552__auto___33942,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async))
);


break;
case "async":
var c__30552__auto___34002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33935,c__30552__auto___34002,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async){
return (function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = ((function (__33935,c__30552__auto___34002,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async){
return (function (state_31033){
var state_val_31034 = (state_31033[(1)]);
if((state_val_31034 === (1))){
var state_31033__$1 = state_31033;
var statearr_31036_34005 = state_31033__$1;
(statearr_31036_34005[(2)] = null);

(statearr_31036_34005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (2))){
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31033__$1,(4),jobs);
} else {
if((state_val_31034 === (3))){
var inst_31031 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31033__$1,inst_31031);
} else {
if((state_val_31034 === (4))){
var inst_31022 = (state_31033[(2)]);
var inst_31023 = async(inst_31022);
var state_31033__$1 = state_31033;
if(cljs.core.truth_(inst_31023)){
var statearr_31038_34010 = state_31033__$1;
(statearr_31038_34010[(1)] = (5));

} else {
var statearr_31039_34011 = state_31033__$1;
(statearr_31039_34011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (5))){
var state_31033__$1 = state_31033;
var statearr_31040_34012 = state_31033__$1;
(statearr_31040_34012[(2)] = null);

(statearr_31040_34012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (6))){
var state_31033__$1 = state_31033;
var statearr_31042_34022 = state_31033__$1;
(statearr_31042_34022[(2)] = null);

(statearr_31042_34022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (7))){
var inst_31028 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31043_34029 = state_31033__$1;
(statearr_31043_34029[(2)] = inst_31028);

(statearr_31043_34029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33935,c__30552__auto___34002,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async))
;
return ((function (__33935,switch__29301__auto__,c__30552__auto___34002,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_31044 = [null,null,null,null,null,null,null];
(statearr_31044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_31044[(1)] = (1));

return statearr_31044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_31033){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31033);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31045){var ex__29305__auto__ = e31045;
var statearr_31046_34031 = state_31033;
(statearr_31046_34031[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31033[(4)]))){
var statearr_31047_34033 = state_31033;
(statearr_31047_34033[(1)] = cljs.core.first((state_31033[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34037 = state_31033;
state_31033 = G__34037;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_31033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_31033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
;})(__33935,switch__29301__auto__,c__30552__auto___34002,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async))
})();
var state__30554__auto__ = (function (){var statearr_31048 = f__30553__auto__();
(statearr_31048[(6)] = c__30552__auto___34002);

return statearr_31048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
});})(__33935,c__30552__auto___34002,G__30990_33936,G__30990_33937__$1,n__5635__auto___33930,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30990_33937__$1)].join('')));

}

var G__34040 = (__33935 + (1));
__33935 = G__34040;
continue;
} else {
}
break;
}

var c__30552__auto___34046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_31075){
var state_val_31076 = (state_31075[(1)]);
if((state_val_31076 === (7))){
var inst_31071 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31078_34047 = state_31075__$1;
(statearr_31078_34047[(2)] = inst_31071);

(statearr_31078_34047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (1))){
var state_31075__$1 = state_31075;
var statearr_31079_34048 = state_31075__$1;
(statearr_31079_34048[(2)] = null);

(statearr_31079_34048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (4))){
var inst_31053 = (state_31075[(7)]);
var inst_31053__$1 = (state_31075[(2)]);
var inst_31054 = (inst_31053__$1 == null);
var state_31075__$1 = (function (){var statearr_31083 = state_31075;
(statearr_31083[(7)] = inst_31053__$1);

return statearr_31083;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31084_34053 = state_31075__$1;
(statearr_31084_34053[(1)] = (5));

} else {
var statearr_31085_34056 = state_31075__$1;
(statearr_31085_34056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (6))){
var inst_31058 = (state_31075[(8)]);
var inst_31053 = (state_31075[(7)]);
var inst_31058__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31062 = [inst_31053,inst_31058__$1];
var inst_31063 = (new cljs.core.PersistentVector(null,2,(5),inst_31061,inst_31062,null));
var state_31075__$1 = (function (){var statearr_31086 = state_31075;
(statearr_31086[(8)] = inst_31058__$1);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31075__$1,(8),jobs,inst_31063);
} else {
if((state_val_31076 === (3))){
var inst_31073 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31075__$1,inst_31073);
} else {
if((state_val_31076 === (2))){
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31075__$1,(4),from);
} else {
if((state_val_31076 === (9))){
var inst_31067 = (state_31075[(2)]);
var state_31075__$1 = (function (){var statearr_31088 = state_31075;
(statearr_31088[(9)] = inst_31067);

return statearr_31088;
})();
var statearr_31089_34062 = state_31075__$1;
(statearr_31089_34062[(2)] = null);

(statearr_31089_34062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (5))){
var inst_31056 = cljs.core.async.close_BANG_(jobs);
var state_31075__$1 = state_31075;
var statearr_31090_34064 = state_31075__$1;
(statearr_31090_34064[(2)] = inst_31056);

(statearr_31090_34064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (8))){
var inst_31058 = (state_31075[(8)]);
var inst_31065 = (state_31075[(2)]);
var state_31075__$1 = (function (){var statearr_31091 = state_31075;
(statearr_31091[(10)] = inst_31065);

return statearr_31091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31075__$1,(9),results,inst_31058);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_31093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_31093[(1)] = (1));

return statearr_31093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_31075){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31075);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31095){var ex__29305__auto__ = e31095;
var statearr_31096_34068 = state_31075;
(statearr_31096_34068[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31075[(4)]))){
var statearr_31097_34070 = state_31075;
(statearr_31097_34070[(1)] = cljs.core.first((state_31075[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34072 = state_31075;
state_31075 = G__34072;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_31075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_31075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_31098 = f__30553__auto__();
(statearr_31098[(6)] = c__30552__auto___34046);

return statearr_31098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


var c__30552__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (7))){
var inst_31134 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31147_34081 = state_31138__$1;
(statearr_31147_34081[(2)] = inst_31134);

(statearr_31147_34081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (20))){
var state_31138__$1 = state_31138;
var statearr_31148_34083 = state_31138__$1;
(statearr_31148_34083[(2)] = null);

(statearr_31148_34083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (1))){
var state_31138__$1 = state_31138;
var statearr_31150_34086 = state_31138__$1;
(statearr_31150_34086[(2)] = null);

(statearr_31150_34086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (4))){
var inst_31101 = (state_31138[(7)]);
var inst_31101__$1 = (state_31138[(2)]);
var inst_31102 = (inst_31101__$1 == null);
var state_31138__$1 = (function (){var statearr_31157 = state_31138;
(statearr_31157[(7)] = inst_31101__$1);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31102)){
var statearr_31158_34093 = state_31138__$1;
(statearr_31158_34093[(1)] = (5));

} else {
var statearr_31159_34098 = state_31138__$1;
(statearr_31159_34098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (15))){
var inst_31116 = (state_31138[(8)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31138__$1,(18),to,inst_31116);
} else {
if((state_val_31139 === (21))){
var inst_31129 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31161_34108 = state_31138__$1;
(statearr_31161_34108[(2)] = inst_31129);

(statearr_31161_34108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (13))){
var inst_31131 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31164 = state_31138;
(statearr_31164[(9)] = inst_31131);

return statearr_31164;
})();
var statearr_31166_34125 = state_31138__$1;
(statearr_31166_34125[(2)] = null);

(statearr_31166_34125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (6))){
var inst_31101 = (state_31138[(7)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(11),inst_31101);
} else {
if((state_val_31139 === (17))){
var inst_31124 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31124)){
var statearr_31168_34129 = state_31138__$1;
(statearr_31168_34129[(1)] = (19));

} else {
var statearr_31169_34131 = state_31138__$1;
(statearr_31169_34131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (3))){
var inst_31136 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31138__$1,inst_31136);
} else {
if((state_val_31139 === (12))){
var inst_31112 = (state_31138[(10)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(14),inst_31112);
} else {
if((state_val_31139 === (2))){
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(4),results);
} else {
if((state_val_31139 === (19))){
var state_31138__$1 = state_31138;
var statearr_31173_34143 = state_31138__$1;
(statearr_31173_34143[(2)] = null);

(statearr_31173_34143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (11))){
var inst_31112 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31174 = state_31138;
(statearr_31174[(10)] = inst_31112);

return statearr_31174;
})();
var statearr_31175_34144 = state_31138__$1;
(statearr_31175_34144[(2)] = null);

(statearr_31175_34144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (9))){
var state_31138__$1 = state_31138;
var statearr_31176_34145 = state_31138__$1;
(statearr_31176_34145[(2)] = null);

(statearr_31176_34145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (5))){
var state_31138__$1 = state_31138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31178_34152 = state_31138__$1;
(statearr_31178_34152[(1)] = (8));

} else {
var statearr_31180_34153 = state_31138__$1;
(statearr_31180_34153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (14))){
var inst_31118 = (state_31138[(11)]);
var inst_31116 = (state_31138[(8)]);
var inst_31116__$1 = (state_31138[(2)]);
var inst_31117 = (inst_31116__$1 == null);
var inst_31118__$1 = cljs.core.not(inst_31117);
var state_31138__$1 = (function (){var statearr_31184 = state_31138;
(statearr_31184[(11)] = inst_31118__$1);

(statearr_31184[(8)] = inst_31116__$1);

return statearr_31184;
})();
if(inst_31118__$1){
var statearr_31185_34161 = state_31138__$1;
(statearr_31185_34161[(1)] = (15));

} else {
var statearr_31186_34162 = state_31138__$1;
(statearr_31186_34162[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (16))){
var inst_31118 = (state_31138[(11)]);
var state_31138__$1 = state_31138;
var statearr_31189_34165 = state_31138__$1;
(statearr_31189_34165[(2)] = inst_31118);

(statearr_31189_34165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (10))){
var inst_31109 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31190_34167 = state_31138__$1;
(statearr_31190_34167[(2)] = inst_31109);

(statearr_31190_34167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (18))){
var inst_31121 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31191_34170 = state_31138__$1;
(statearr_31191_34170[(2)] = inst_31121);

(statearr_31191_34170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (8))){
var inst_31105 = cljs.core.async.close_BANG_(to);
var state_31138__$1 = state_31138;
var statearr_31192_34171 = state_31138__$1;
(statearr_31192_34171[(2)] = inst_31105);

(statearr_31192_34171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_31194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__);

(statearr_31194[(1)] = (1));

return statearr_31194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1 = (function (state_31138){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31138);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31196){var ex__29305__auto__ = e31196;
var statearr_31197_34176 = state_31138;
(statearr_31197_34176[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31138[(4)]))){
var statearr_31198_34178 = state_31138;
(statearr_31198_34178[(1)] = cljs.core.first((state_31138[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34186 = state_31138;
state_31138 = G__34186;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_31201 = f__30553__auto__();
(statearr_31201[(6)] = c__30552__auto__);

return statearr_31201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));

return c__30552__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31204 = arguments.length;
switch (G__31204) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31219 = arguments.length;
switch (G__31219) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31237 = arguments.length;
switch (G__31237) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30552__auto___34219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_31273){
var state_val_31274 = (state_31273[(1)]);
if((state_val_31274 === (7))){
var inst_31269 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31277_34223 = state_31273__$1;
(statearr_31277_34223[(2)] = inst_31269);

(statearr_31277_34223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (1))){
var state_31273__$1 = state_31273;
var statearr_31278_34224 = state_31273__$1;
(statearr_31278_34224[(2)] = null);

(statearr_31278_34224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (4))){
var inst_31250 = (state_31273[(7)]);
var inst_31250__$1 = (state_31273[(2)]);
var inst_31251 = (inst_31250__$1 == null);
var state_31273__$1 = (function (){var statearr_31279 = state_31273;
(statearr_31279[(7)] = inst_31250__$1);

return statearr_31279;
})();
if(cljs.core.truth_(inst_31251)){
var statearr_31280_34233 = state_31273__$1;
(statearr_31280_34233[(1)] = (5));

} else {
var statearr_31281_34234 = state_31273__$1;
(statearr_31281_34234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (13))){
var state_31273__$1 = state_31273;
var statearr_31285_34237 = state_31273__$1;
(statearr_31285_34237[(2)] = null);

(statearr_31285_34237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (6))){
var inst_31250 = (state_31273[(7)]);
var inst_31256 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31250) : p.call(null,inst_31250));
var state_31273__$1 = state_31273;
if(cljs.core.truth_(inst_31256)){
var statearr_31290_34240 = state_31273__$1;
(statearr_31290_34240[(1)] = (9));

} else {
var statearr_31292_34241 = state_31273__$1;
(statearr_31292_34241[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (3))){
var inst_31271 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31273__$1,inst_31271);
} else {
if((state_val_31274 === (12))){
var state_31273__$1 = state_31273;
var statearr_31294_34243 = state_31273__$1;
(statearr_31294_34243[(2)] = null);

(statearr_31294_34243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (2))){
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31273__$1,(4),ch);
} else {
if((state_val_31274 === (11))){
var inst_31250 = (state_31273[(7)]);
var inst_31260 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31273__$1,(8),inst_31260,inst_31250);
} else {
if((state_val_31274 === (9))){
var state_31273__$1 = state_31273;
var statearr_31296_34254 = state_31273__$1;
(statearr_31296_34254[(2)] = tc);

(statearr_31296_34254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (5))){
var inst_31253 = cljs.core.async.close_BANG_(tc);
var inst_31254 = cljs.core.async.close_BANG_(fc);
var state_31273__$1 = (function (){var statearr_31297 = state_31273;
(statearr_31297[(8)] = inst_31253);

return statearr_31297;
})();
var statearr_31298_34261 = state_31273__$1;
(statearr_31298_34261[(2)] = inst_31254);

(statearr_31298_34261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (14))){
var inst_31267 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31300_34264 = state_31273__$1;
(statearr_31300_34264[(2)] = inst_31267);

(statearr_31300_34264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (10))){
var state_31273__$1 = state_31273;
var statearr_31302_34273 = state_31273__$1;
(statearr_31302_34273[(2)] = fc);

(statearr_31302_34273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (8))){
var inst_31262 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
if(cljs.core.truth_(inst_31262)){
var statearr_31303_34276 = state_31273__$1;
(statearr_31303_34276[(1)] = (12));

} else {
var statearr_31305_34277 = state_31273__$1;
(statearr_31305_34277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_31307 = [null,null,null,null,null,null,null,null,null];
(statearr_31307[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_31307[(1)] = (1));

return statearr_31307;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_31273){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31273);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31312){var ex__29305__auto__ = e31312;
var statearr_31314_34286 = state_31273;
(statearr_31314_34286[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31273[(4)]))){
var statearr_31316_34292 = state_31273;
(statearr_31316_34292[(1)] = cljs.core.first((state_31273[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34294 = state_31273;
state_31273 = G__34294;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_31273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_31273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_31317 = f__30553__auto__();
(statearr_31317[(6)] = c__30552__auto___34219);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30552__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_31348){
var state_val_31349 = (state_31348[(1)]);
if((state_val_31349 === (7))){
var inst_31341 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31351_34301 = state_31348__$1;
(statearr_31351_34301[(2)] = inst_31341);

(statearr_31351_34301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (1))){
var inst_31321 = init;
var inst_31325 = inst_31321;
var state_31348__$1 = (function (){var statearr_31352 = state_31348;
(statearr_31352[(7)] = inst_31325);

return statearr_31352;
})();
var statearr_31355_34302 = state_31348__$1;
(statearr_31355_34302[(2)] = null);

(statearr_31355_34302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (4))){
var inst_31328 = (state_31348[(8)]);
var inst_31328__$1 = (state_31348[(2)]);
var inst_31329 = (inst_31328__$1 == null);
var state_31348__$1 = (function (){var statearr_31357 = state_31348;
(statearr_31357[(8)] = inst_31328__$1);

return statearr_31357;
})();
if(cljs.core.truth_(inst_31329)){
var statearr_31358_34303 = state_31348__$1;
(statearr_31358_34303[(1)] = (5));

} else {
var statearr_31360_34304 = state_31348__$1;
(statearr_31360_34304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (6))){
var inst_31328 = (state_31348[(8)]);
var inst_31325 = (state_31348[(7)]);
var inst_31332 = (state_31348[(9)]);
var inst_31332__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31325,inst_31328) : f.call(null,inst_31325,inst_31328));
var inst_31333 = cljs.core.reduced_QMARK_(inst_31332__$1);
var state_31348__$1 = (function (){var statearr_31363 = state_31348;
(statearr_31363[(9)] = inst_31332__$1);

return statearr_31363;
})();
if(inst_31333){
var statearr_31365_34305 = state_31348__$1;
(statearr_31365_34305[(1)] = (8));

} else {
var statearr_31370_34306 = state_31348__$1;
(statearr_31370_34306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (3))){
var inst_31343 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31348__$1,inst_31343);
} else {
if((state_val_31349 === (2))){
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31348__$1,(4),ch);
} else {
if((state_val_31349 === (9))){
var inst_31332 = (state_31348[(9)]);
var inst_31325 = inst_31332;
var state_31348__$1 = (function (){var statearr_31381 = state_31348;
(statearr_31381[(7)] = inst_31325);

return statearr_31381;
})();
var statearr_31385_34311 = state_31348__$1;
(statearr_31385_34311[(2)] = null);

(statearr_31385_34311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (5))){
var inst_31325 = (state_31348[(7)]);
var state_31348__$1 = state_31348;
var statearr_31387_34312 = state_31348__$1;
(statearr_31387_34312[(2)] = inst_31325);

(statearr_31387_34312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (10))){
var inst_31339 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31388_34318 = state_31348__$1;
(statearr_31388_34318[(2)] = inst_31339);

(statearr_31388_34318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (8))){
var inst_31332 = (state_31348[(9)]);
var inst_31335 = cljs.core.deref(inst_31332);
var state_31348__$1 = state_31348;
var statearr_31390_34319 = state_31348__$1;
(statearr_31390_34319[(2)] = inst_31335);

(statearr_31390_34319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29302__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29302__auto____0 = (function (){
var statearr_31397 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31397[(0)] = cljs$core$async$reduce_$_state_machine__29302__auto__);

(statearr_31397[(1)] = (1));

return statearr_31397;
});
var cljs$core$async$reduce_$_state_machine__29302__auto____1 = (function (state_31348){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31348);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31399){var ex__29305__auto__ = e31399;
var statearr_31405_34325 = state_31348;
(statearr_31405_34325[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31348[(4)]))){
var statearr_31415_34326 = state_31348;
(statearr_31415_34326[(1)] = cljs.core.first((state_31348[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34327 = state_31348;
state_31348 = G__34327;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29302__auto__ = function(state_31348){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29302__auto____1.call(this,state_31348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29302__auto____0;
cljs$core$async$reduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29302__auto____1;
return cljs$core$async$reduce_$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_31419 = f__30553__auto__();
(statearr_31419[(6)] = c__30552__auto__);

return statearr_31419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));

return c__30552__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30552__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_31433){
var state_val_31435 = (state_31433[(1)]);
if((state_val_31435 === (1))){
var inst_31426 = cljs.core.async.reduce(f__$1,init,ch);
var state_31433__$1 = state_31433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31433__$1,(2),inst_31426);
} else {
if((state_val_31435 === (2))){
var inst_31428 = (state_31433[(2)]);
var inst_31429 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31428) : f__$1.call(null,inst_31428));
var state_31433__$1 = state_31433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31433__$1,inst_31429);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29302__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29302__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null];
(statearr_31442[(0)] = cljs$core$async$transduce_$_state_machine__29302__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var cljs$core$async$transduce_$_state_machine__29302__auto____1 = (function (state_31433){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31433);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31445){var ex__29305__auto__ = e31445;
var statearr_31446_34345 = state_31433;
(statearr_31446_34345[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31433[(4)]))){
var statearr_31448_34346 = state_31433;
(statearr_31448_34346[(1)] = cljs.core.first((state_31433[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34348 = state_31433;
state_31433 = G__34348;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29302__auto__ = function(state_31433){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29302__auto____1.call(this,state_31433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29302__auto____0;
cljs$core$async$transduce_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29302__auto____1;
return cljs$core$async$transduce_$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_31452 = f__30553__auto__();
(statearr_31452[(6)] = c__30552__auto__);

return statearr_31452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));

return c__30552__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31455 = arguments.length;
switch (G__31455) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30552__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_31504){
var state_val_31505 = (state_31504[(1)]);
if((state_val_31505 === (7))){
var inst_31482 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
var statearr_31514_34359 = state_31504__$1;
(statearr_31514_34359[(2)] = inst_31482);

(statearr_31514_34359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (1))){
var inst_31467 = cljs.core.seq(coll);
var inst_31468 = inst_31467;
var state_31504__$1 = (function (){var statearr_31518 = state_31504;
(statearr_31518[(7)] = inst_31468);

return statearr_31518;
})();
var statearr_31520_34367 = state_31504__$1;
(statearr_31520_34367[(2)] = null);

(statearr_31520_34367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (4))){
var inst_31468 = (state_31504[(7)]);
var inst_31480 = cljs.core.first(inst_31468);
var state_31504__$1 = state_31504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31504__$1,(7),ch,inst_31480);
} else {
if((state_val_31505 === (13))){
var inst_31498 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
var statearr_31528_34370 = state_31504__$1;
(statearr_31528_34370[(2)] = inst_31498);

(statearr_31528_34370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (6))){
var inst_31485 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
if(cljs.core.truth_(inst_31485)){
var statearr_31532_34372 = state_31504__$1;
(statearr_31532_34372[(1)] = (8));

} else {
var statearr_31533_34373 = state_31504__$1;
(statearr_31533_34373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (3))){
var inst_31502 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31504__$1,inst_31502);
} else {
if((state_val_31505 === (12))){
var state_31504__$1 = state_31504;
var statearr_31535_34378 = state_31504__$1;
(statearr_31535_34378[(2)] = null);

(statearr_31535_34378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (2))){
var inst_31468 = (state_31504[(7)]);
var state_31504__$1 = state_31504;
if(cljs.core.truth_(inst_31468)){
var statearr_31540_34382 = state_31504__$1;
(statearr_31540_34382[(1)] = (4));

} else {
var statearr_31542_34383 = state_31504__$1;
(statearr_31542_34383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (11))){
var inst_31492 = cljs.core.async.close_BANG_(ch);
var state_31504__$1 = state_31504;
var statearr_31543_34385 = state_31504__$1;
(statearr_31543_34385[(2)] = inst_31492);

(statearr_31543_34385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (9))){
var state_31504__$1 = state_31504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31548_34388 = state_31504__$1;
(statearr_31548_34388[(1)] = (11));

} else {
var statearr_31549_34389 = state_31504__$1;
(statearr_31549_34389[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (5))){
var inst_31468 = (state_31504[(7)]);
var state_31504__$1 = state_31504;
var statearr_31554_34396 = state_31504__$1;
(statearr_31554_34396[(2)] = inst_31468);

(statearr_31554_34396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (10))){
var inst_31500 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
var statearr_31559_34397 = state_31504__$1;
(statearr_31559_34397[(2)] = inst_31500);

(statearr_31559_34397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (8))){
var inst_31468 = (state_31504[(7)]);
var inst_31488 = cljs.core.next(inst_31468);
var inst_31468__$1 = inst_31488;
var state_31504__$1 = (function (){var statearr_31560 = state_31504;
(statearr_31560[(7)] = inst_31468__$1);

return statearr_31560;
})();
var statearr_31562_34404 = state_31504__$1;
(statearr_31562_34404[(2)] = null);

(statearr_31562_34404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_31573 = [null,null,null,null,null,null,null,null];
(statearr_31573[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_31573[(1)] = (1));

return statearr_31573;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_31504){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31504);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e31578){var ex__29305__auto__ = e31578;
var statearr_31579_34406 = state_31504;
(statearr_31579_34406[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31504[(4)]))){
var statearr_31584_34408 = state_31504;
(statearr_31584_34408[(1)] = cljs.core.first((state_31504[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34409 = state_31504;
state_31504 = G__34409;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_31504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_31504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_31592 = f__30553__auto__();
(statearr_31592[(6)] = c__30552__auto__);

return statearr_31592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));

return c__30552__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31601 = arguments.length;
switch (G__31601) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34425 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5393__auto__.call(null,_));
} else {
var m__5391__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34425(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34437 = (function (m,ch,close_QMARK_){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5393__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5391__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34437(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34446 = (function (m,ch){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5393__auto__.call(null,m,ch));
} else {
var m__5391__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34446(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34454 = (function (m){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5393__auto__.call(null,m));
} else {
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34454(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31657 = (function (ch,cs,meta31658){
this.ch = ch;
this.cs = cs;
this.meta31658 = meta31658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31659,meta31658__$1){
var self__ = this;
var _31659__$1 = this;
return (new cljs.core.async.t_cljs$core$async31657(self__.ch,self__.cs,meta31658__$1));
}));

(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31659){
var self__ = this;
var _31659__$1 = this;
return self__.meta31658;
}));

(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31657.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31658","meta31658",1321359800,null)], null);
}));

(cljs.core.async.t_cljs$core$async31657.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31657");

(cljs.core.async.t_cljs$core$async31657.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async31657");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31657.
 */
cljs.core.async.__GT_t_cljs$core$async31657 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31657(ch__$1,cs__$1,meta31658){
return (new cljs.core.async.t_cljs$core$async31657(ch__$1,cs__$1,meta31658));
});

}

return (new cljs.core.async.t_cljs$core$async31657(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30552__auto___34471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (7))){
var inst_31836 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31855_34476 = state_31848__$1;
(statearr_31855_34476[(2)] = inst_31836);

(statearr_31855_34476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (20))){
var inst_31727 = (state_31848[(7)]);
var inst_31742 = cljs.core.first(inst_31727);
var inst_31744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31742,(0),null);
var inst_31745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31742,(1),null);
var state_31848__$1 = (function (){var statearr_31858 = state_31848;
(statearr_31858[(8)] = inst_31744);

return statearr_31858;
})();
if(cljs.core.truth_(inst_31745)){
var statearr_31860_34481 = state_31848__$1;
(statearr_31860_34481[(1)] = (22));

} else {
var statearr_31862_34482 = state_31848__$1;
(statearr_31862_34482[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (27))){
var inst_31782 = (state_31848[(9)]);
var inst_31687 = (state_31848[(10)]);
var inst_31774 = (state_31848[(11)]);
var inst_31776 = (state_31848[(12)]);
var inst_31782__$1 = cljs.core._nth(inst_31774,inst_31776);
var inst_31784 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31782__$1,inst_31687,done);
var state_31848__$1 = (function (){var statearr_31864 = state_31848;
(statearr_31864[(9)] = inst_31782__$1);

return statearr_31864;
})();
if(cljs.core.truth_(inst_31784)){
var statearr_31866_34498 = state_31848__$1;
(statearr_31866_34498[(1)] = (30));

} else {
var statearr_31868_34499 = state_31848__$1;
(statearr_31868_34499[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (1))){
var state_31848__$1 = state_31848;
var statearr_31870_34504 = state_31848__$1;
(statearr_31870_34504[(2)] = null);

(statearr_31870_34504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (24))){
var inst_31727 = (state_31848[(7)]);
var inst_31750 = (state_31848[(2)]);
var inst_31751 = cljs.core.next(inst_31727);
var inst_31696 = inst_31751;
var inst_31697 = null;
var inst_31698 = (0);
var inst_31699 = (0);
var state_31848__$1 = (function (){var statearr_31872 = state_31848;
(statearr_31872[(13)] = inst_31699);

(statearr_31872[(14)] = inst_31696);

(statearr_31872[(15)] = inst_31697);

(statearr_31872[(16)] = inst_31698);

(statearr_31872[(17)] = inst_31750);

return statearr_31872;
})();
var statearr_31875_34508 = state_31848__$1;
(statearr_31875_34508[(2)] = null);

(statearr_31875_34508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (39))){
var state_31848__$1 = state_31848;
var statearr_31893_34509 = state_31848__$1;
(statearr_31893_34509[(2)] = null);

(statearr_31893_34509[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (4))){
var inst_31687 = (state_31848[(10)]);
var inst_31687__$1 = (state_31848[(2)]);
var inst_31688 = (inst_31687__$1 == null);
var state_31848__$1 = (function (){var statearr_31895 = state_31848;
(statearr_31895[(10)] = inst_31687__$1);

return statearr_31895;
})();
if(cljs.core.truth_(inst_31688)){
var statearr_31896_34517 = state_31848__$1;
(statearr_31896_34517[(1)] = (5));

} else {
var statearr_31898_34518 = state_31848__$1;
(statearr_31898_34518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (15))){
var inst_31699 = (state_31848[(13)]);
var inst_31696 = (state_31848[(14)]);
var inst_31697 = (state_31848[(15)]);
var inst_31698 = (state_31848[(16)]);
var inst_31723 = (state_31848[(2)]);
var inst_31724 = (inst_31699 + (1));
var tmp31886 = inst_31696;
var tmp31887 = inst_31697;
var tmp31888 = inst_31698;
var inst_31696__$1 = tmp31886;
var inst_31697__$1 = tmp31887;
var inst_31698__$1 = tmp31888;
var inst_31699__$1 = inst_31724;
var state_31848__$1 = (function (){var statearr_31904 = state_31848;
(statearr_31904[(13)] = inst_31699__$1);

(statearr_31904[(14)] = inst_31696__$1);

(statearr_31904[(18)] = inst_31723);

(statearr_31904[(15)] = inst_31697__$1);

(statearr_31904[(16)] = inst_31698__$1);

return statearr_31904;
})();
var statearr_31906_34523 = state_31848__$1;
(statearr_31906_34523[(2)] = null);

(statearr_31906_34523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (21))){
var inst_31754 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31911_34524 = state_31848__$1;
(statearr_31911_34524[(2)] = inst_31754);

(statearr_31911_34524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (31))){
var inst_31782 = (state_31848[(9)]);
var inst_31788 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31782);
var state_31848__$1 = state_31848;
var statearr_31917_34528 = state_31848__$1;
(statearr_31917_34528[(2)] = inst_31788);

(statearr_31917_34528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (32))){
var inst_31773 = (state_31848[(19)]);
var inst_31774 = (state_31848[(11)]);
var inst_31775 = (state_31848[(20)]);
var inst_31776 = (state_31848[(12)]);
var inst_31790 = (state_31848[(2)]);
var inst_31791 = (inst_31776 + (1));
var tmp31907 = inst_31773;
var tmp31908 = inst_31774;
var tmp31909 = inst_31775;
var inst_31773__$1 = tmp31907;
var inst_31774__$1 = tmp31908;
var inst_31775__$1 = tmp31909;
var inst_31776__$1 = inst_31791;
var state_31848__$1 = (function (){var statearr_31919 = state_31848;
(statearr_31919[(19)] = inst_31773__$1);

(statearr_31919[(11)] = inst_31774__$1);

(statearr_31919[(20)] = inst_31775__$1);

(statearr_31919[(12)] = inst_31776__$1);

(statearr_31919[(21)] = inst_31790);

return statearr_31919;
})();
var statearr_31922_34533 = state_31848__$1;
(statearr_31922_34533[(2)] = null);

(statearr_31922_34533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (40))){
var inst_31804 = (state_31848[(22)]);
var inst_31810 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31804);
var state_31848__$1 = state_31848;
var statearr_31924_34536 = state_31848__$1;
(statearr_31924_34536[(2)] = inst_31810);

(statearr_31924_34536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (33))){
var inst_31794 = (state_31848[(23)]);
var inst_31797 = cljs.core.chunked_seq_QMARK_(inst_31794);
var state_31848__$1 = state_31848;
if(inst_31797){
var statearr_31926_34537 = state_31848__$1;
(statearr_31926_34537[(1)] = (36));

} else {
var statearr_31927_34539 = state_31848__$1;
(statearr_31927_34539[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (13))){
var inst_31711 = (state_31848[(24)]);
var inst_31720 = cljs.core.async.close_BANG_(inst_31711);
var state_31848__$1 = state_31848;
var statearr_31933_34553 = state_31848__$1;
(statearr_31933_34553[(2)] = inst_31720);

(statearr_31933_34553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (22))){
var inst_31744 = (state_31848[(8)]);
var inst_31747 = cljs.core.async.close_BANG_(inst_31744);
var state_31848__$1 = state_31848;
var statearr_31937_34555 = state_31848__$1;
(statearr_31937_34555[(2)] = inst_31747);

(statearr_31937_34555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (36))){
var inst_31794 = (state_31848[(23)]);
var inst_31799 = cljs.core.chunk_first(inst_31794);
var inst_31800 = cljs.core.chunk_rest(inst_31794);
var inst_31801 = cljs.core.count(inst_31799);
var inst_31773 = inst_31800;
var inst_31774 = inst_31799;
var inst_31775 = inst_31801;
var inst_31776 = (0);
var state_31848__$1 = (function (){var statearr_31939 = state_31848;
(statearr_31939[(19)] = inst_31773);

(statearr_31939[(11)] = inst_31774);

(statearr_31939[(20)] = inst_31775);

(statearr_31939[(12)] = inst_31776);

return statearr_31939;
})();
var statearr_31942_34567 = state_31848__$1;
(statearr_31942_34567[(2)] = null);

(statearr_31942_34567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (41))){
var inst_31794 = (state_31848[(23)]);
var inst_31812 = (state_31848[(2)]);
var inst_31813 = cljs.core.next(inst_31794);
var inst_31773 = inst_31813;
var inst_31774 = null;
var inst_31775 = (0);
var inst_31776 = (0);
var state_31848__$1 = (function (){var statearr_31949 = state_31848;
(statearr_31949[(19)] = inst_31773);

(statearr_31949[(25)] = inst_31812);

(statearr_31949[(11)] = inst_31774);

(statearr_31949[(20)] = inst_31775);

(statearr_31949[(12)] = inst_31776);

return statearr_31949;
})();
var statearr_31957_34576 = state_31848__$1;
(statearr_31957_34576[(2)] = null);

(statearr_31957_34576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (43))){
var state_31848__$1 = state_31848;
var statearr_31960_34577 = state_31848__$1;
(statearr_31960_34577[(2)] = null);

(statearr_31960_34577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (29))){
var inst_31824 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31962_34578 = state_31848__$1;
(statearr_31962_34578[(2)] = inst_31824);

(statearr_31962_34578[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (44))){
var inst_31833 = (state_31848[(2)]);
var state_31848__$1 = (function (){var statearr_31965 = state_31848;
(statearr_31965[(26)] = inst_31833);

return statearr_31965;
})();
var statearr_31967_34579 = state_31848__$1;
(statearr_31967_34579[(2)] = null);

(statearr_31967_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (6))){
var inst_31765 = (state_31848[(27)]);
var inst_31764 = cljs.core.deref(cs);
var inst_31765__$1 = cljs.core.keys(inst_31764);
var inst_31766 = cljs.core.count(inst_31765__$1);
var inst_31767 = cljs.core.reset_BANG_(dctr,inst_31766);
var inst_31772 = cljs.core.seq(inst_31765__$1);
var inst_31773 = inst_31772;
var inst_31774 = null;
var inst_31775 = (0);
var inst_31776 = (0);
var state_31848__$1 = (function (){var statearr_31980 = state_31848;
(statearr_31980[(19)] = inst_31773);

(statearr_31980[(28)] = inst_31767);

(statearr_31980[(11)] = inst_31774);

(statearr_31980[(20)] = inst_31775);

(statearr_31980[(12)] = inst_31776);

(statearr_31980[(27)] = inst_31765__$1);

return statearr_31980;
})();
var statearr_31981_34580 = state_31848__$1;
(statearr_31981_34580[(2)] = null);

(statearr_31981_34580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (28))){
var inst_31773 = (state_31848[(19)]);
var inst_31794 = (state_31848[(23)]);
var inst_31794__$1 = cljs.core.seq(inst_31773);
var state_31848__$1 = (function (){var statearr_31982 = state_31848;
(statearr_31982[(23)] = inst_31794__$1);

return statearr_31982;
})();
if(inst_31794__$1){
var statearr_31983_34581 = state_31848__$1;
(statearr_31983_34581[(1)] = (33));

} else {
var statearr_31984_34582 = state_31848__$1;
(statearr_31984_34582[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (25))){
var inst_31775 = (state_31848[(20)]);
var inst_31776 = (state_31848[(12)]);
var inst_31778 = (inst_31776 < inst_31775);
var inst_31779 = inst_31778;
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31779)){
var statearr_31985_34583 = state_31848__$1;
(statearr_31985_34583[(1)] = (27));

} else {
var statearr_31986_34584 = state_31848__$1;
(statearr_31986_34584[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (34))){
var state_31848__$1 = state_31848;
var statearr_31992_34585 = state_31848__$1;
(statearr_31992_34585[(2)] = null);

(statearr_31992_34585[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (17))){
var state_31848__$1 = state_31848;
var statearr_31993_34586 = state_31848__$1;
(statearr_31993_34586[(2)] = null);

(statearr_31993_34586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (3))){
var inst_31838 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31848__$1,inst_31838);
} else {
if((state_val_31849 === (12))){
var inst_31759 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31995_34588 = state_31848__$1;
(statearr_31995_34588[(2)] = inst_31759);

(statearr_31995_34588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (2))){
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(4),ch);
} else {
if((state_val_31849 === (23))){
var state_31848__$1 = state_31848;
var statearr_31996_34590 = state_31848__$1;
(statearr_31996_34590[(2)] = null);

(statearr_31996_34590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (35))){
var inst_31819 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31997_34592 = state_31848__$1;
(statearr_31997_34592[(2)] = inst_31819);

(statearr_31997_34592[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (19))){
var inst_31727 = (state_31848[(7)]);
var inst_31732 = cljs.core.chunk_first(inst_31727);
var inst_31733 = cljs.core.chunk_rest(inst_31727);
var inst_31734 = cljs.core.count(inst_31732);
var inst_31696 = inst_31733;
var inst_31697 = inst_31732;
var inst_31698 = inst_31734;
var inst_31699 = (0);
var state_31848__$1 = (function (){var statearr_31998 = state_31848;
(statearr_31998[(13)] = inst_31699);

(statearr_31998[(14)] = inst_31696);

(statearr_31998[(15)] = inst_31697);

(statearr_31998[(16)] = inst_31698);

return statearr_31998;
})();
var statearr_31999_34597 = state_31848__$1;
(statearr_31999_34597[(2)] = null);

(statearr_31999_34597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (11))){
var inst_31696 = (state_31848[(14)]);
var inst_31727 = (state_31848[(7)]);
var inst_31727__$1 = cljs.core.seq(inst_31696);
var state_31848__$1 = (function (){var statearr_32000 = state_31848;
(statearr_32000[(7)] = inst_31727__$1);

return statearr_32000;
})();
if(inst_31727__$1){
var statearr_32001_34598 = state_31848__$1;
(statearr_32001_34598[(1)] = (16));

} else {
var statearr_32002_34599 = state_31848__$1;
(statearr_32002_34599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (9))){
var inst_31761 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_32003_34605 = state_31848__$1;
(statearr_32003_34605[(2)] = inst_31761);

(statearr_32003_34605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (5))){
var inst_31694 = cljs.core.deref(cs);
var inst_31695 = cljs.core.seq(inst_31694);
var inst_31696 = inst_31695;
var inst_31697 = null;
var inst_31698 = (0);
var inst_31699 = (0);
var state_31848__$1 = (function (){var statearr_32004 = state_31848;
(statearr_32004[(13)] = inst_31699);

(statearr_32004[(14)] = inst_31696);

(statearr_32004[(15)] = inst_31697);

(statearr_32004[(16)] = inst_31698);

return statearr_32004;
})();
var statearr_32006_34607 = state_31848__$1;
(statearr_32006_34607[(2)] = null);

(statearr_32006_34607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (14))){
var state_31848__$1 = state_31848;
var statearr_32007_34612 = state_31848__$1;
(statearr_32007_34612[(2)] = null);

(statearr_32007_34612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (45))){
var inst_31830 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_32008_34615 = state_31848__$1;
(statearr_32008_34615[(2)] = inst_31830);

(statearr_32008_34615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (26))){
var inst_31765 = (state_31848[(27)]);
var inst_31826 = (state_31848[(2)]);
var inst_31827 = cljs.core.seq(inst_31765);
var state_31848__$1 = (function (){var statearr_32013 = state_31848;
(statearr_32013[(29)] = inst_31826);

return statearr_32013;
})();
if(inst_31827){
var statearr_32014_34616 = state_31848__$1;
(statearr_32014_34616[(1)] = (42));

} else {
var statearr_32015_34617 = state_31848__$1;
(statearr_32015_34617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (16))){
var inst_31727 = (state_31848[(7)]);
var inst_31730 = cljs.core.chunked_seq_QMARK_(inst_31727);
var state_31848__$1 = state_31848;
if(inst_31730){
var statearr_32016_34618 = state_31848__$1;
(statearr_32016_34618[(1)] = (19));

} else {
var statearr_32017_34619 = state_31848__$1;
(statearr_32017_34619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (38))){
var inst_31816 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_32018_34620 = state_31848__$1;
(statearr_32018_34620[(2)] = inst_31816);

(statearr_32018_34620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (30))){
var state_31848__$1 = state_31848;
var statearr_32019_34621 = state_31848__$1;
(statearr_32019_34621[(2)] = null);

(statearr_32019_34621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (10))){
var inst_31699 = (state_31848[(13)]);
var inst_31697 = (state_31848[(15)]);
var inst_31710 = cljs.core._nth(inst_31697,inst_31699);
var inst_31711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31710,(0),null);
var inst_31712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31710,(1),null);
var state_31848__$1 = (function (){var statearr_32023 = state_31848;
(statearr_32023[(24)] = inst_31711);

return statearr_32023;
})();
if(cljs.core.truth_(inst_31712)){
var statearr_32025_34630 = state_31848__$1;
(statearr_32025_34630[(1)] = (13));

} else {
var statearr_32026_34631 = state_31848__$1;
(statearr_32026_34631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (18))){
var inst_31757 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_32027_34632 = state_31848__$1;
(statearr_32027_34632[(2)] = inst_31757);

(statearr_32027_34632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (42))){
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(45),dchan);
} else {
if((state_val_31849 === (37))){
var inst_31794 = (state_31848[(23)]);
var inst_31687 = (state_31848[(10)]);
var inst_31804 = (state_31848[(22)]);
var inst_31804__$1 = cljs.core.first(inst_31794);
var inst_31806 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31804__$1,inst_31687,done);
var state_31848__$1 = (function (){var statearr_32028 = state_31848;
(statearr_32028[(22)] = inst_31804__$1);

return statearr_32028;
})();
if(cljs.core.truth_(inst_31806)){
var statearr_32030_34637 = state_31848__$1;
(statearr_32030_34637[(1)] = (39));

} else {
var statearr_32031_34638 = state_31848__$1;
(statearr_32031_34638[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (8))){
var inst_31699 = (state_31848[(13)]);
var inst_31698 = (state_31848[(16)]);
var inst_31701 = (inst_31699 < inst_31698);
var inst_31703 = inst_31701;
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31703)){
var statearr_32032_34641 = state_31848__$1;
(statearr_32032_34641[(1)] = (10));

} else {
var statearr_32033_34642 = state_31848__$1;
(statearr_32033_34642[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29302__auto__ = null;
var cljs$core$async$mult_$_state_machine__29302__auto____0 = (function (){
var statearr_32038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32038[(0)] = cljs$core$async$mult_$_state_machine__29302__auto__);

(statearr_32038[(1)] = (1));

return statearr_32038;
});
var cljs$core$async$mult_$_state_machine__29302__auto____1 = (function (state_31848){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_31848);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32039){var ex__29305__auto__ = e32039;
var statearr_32040_34656 = state_31848;
(statearr_32040_34656[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_31848[(4)]))){
var statearr_32041_34657 = state_31848;
(statearr_32041_34657[(1)] = cljs.core.first((state_31848[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34658 = state_31848;
state_31848 = G__34658;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29302__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29302__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29302__auto____0;
cljs$core$async$mult_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29302__auto____1;
return cljs$core$async$mult_$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_32045 = f__30553__auto__();
(statearr_32045[(6)] = c__30552__auto___34471);

return statearr_32045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32048 = arguments.length;
switch (G__32048) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34660 = (function (m,ch){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5393__auto__.call(null,m,ch));
} else {
var m__5391__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34660(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34661 = (function (m,ch){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5393__auto__.call(null,m,ch));
} else {
var m__5391__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34661(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34671 = (function (m){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5393__auto__.call(null,m));
} else {
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34671(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34676 = (function (m,state_map){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5393__auto__.call(null,m,state_map));
} else {
var m__5391__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34676(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34677 = (function (m,mode){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5393__auto__.call(null,m,mode));
} else {
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34677(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___34685 = arguments.length;
var i__5769__auto___34686 = (0);
while(true){
if((i__5769__auto___34686 < len__5768__auto___34685)){
args__5774__auto__.push((arguments[i__5769__auto___34686]));

var G__34687 = (i__5769__auto___34686 + (1));
i__5769__auto___34686 = G__34687;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32075){
var map__32076 = p__32075;
var map__32076__$1 = cljs.core.__destructure_map(map__32076);
var opts = map__32076__$1;
var statearr_32077_34696 = state;
(statearr_32077_34696[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32078_34697 = state;
(statearr_32078_34697[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32079_34698 = state;
(statearr_32079_34698[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32065){
var G__32066 = cljs.core.first(seq32065);
var seq32065__$1 = cljs.core.next(seq32065);
var G__32067 = cljs.core.first(seq32065__$1);
var seq32065__$2 = cljs.core.next(seq32065__$1);
var G__32068 = cljs.core.first(seq32065__$2);
var seq32065__$3 = cljs.core.next(seq32065__$2);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32066,G__32067,G__32068,seq32065__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32095 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32096){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32096 = meta32096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32097,meta32096__$1){
var self__ = this;
var _32097__$1 = this;
return (new cljs.core.async.t_cljs$core$async32095(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32096__$1));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32097){
var self__ = this;
var _32097__$1 = this;
return self__.meta32096;
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32096","meta32096",-651993443,null)], null);
}));

(cljs.core.async.t_cljs$core$async32095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32095");

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async32095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32095.
 */
cljs.core.async.__GT_t_cljs$core$async32095 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32096){
return (new cljs.core.async.t_cljs$core$async32095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32096));
});

}

return (new cljs.core.async.t_cljs$core$async32095(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30552__auto___34716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_32181){
var state_val_32182 = (state_32181[(1)]);
if((state_val_32182 === (7))){
var inst_32137 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
if(cljs.core.truth_(inst_32137)){
var statearr_32206_34718 = state_32181__$1;
(statearr_32206_34718[(1)] = (8));

} else {
var statearr_32215_34719 = state_32181__$1;
(statearr_32215_34719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (20))){
var inst_32130 = (state_32181[(7)]);
var state_32181__$1 = state_32181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32181__$1,(23),out,inst_32130);
} else {
if((state_val_32182 === (1))){
var inst_32111 = calc_state();
var inst_32112 = cljs.core.__destructure_map(inst_32111);
var inst_32113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32112,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32112,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32112,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32116 = inst_32111;
var state_32181__$1 = (function (){var statearr_32225 = state_32181;
(statearr_32225[(8)] = inst_32114);

(statearr_32225[(9)] = inst_32113);

(statearr_32225[(10)] = inst_32115);

(statearr_32225[(11)] = inst_32116);

return statearr_32225;
})();
var statearr_32227_34720 = state_32181__$1;
(statearr_32227_34720[(2)] = null);

(statearr_32227_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (24))){
var inst_32119 = (state_32181[(12)]);
var inst_32116 = inst_32119;
var state_32181__$1 = (function (){var statearr_32231 = state_32181;
(statearr_32231[(11)] = inst_32116);

return statearr_32231;
})();
var statearr_32232_34721 = state_32181__$1;
(statearr_32232_34721[(2)] = null);

(statearr_32232_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (4))){
var inst_32130 = (state_32181[(7)]);
var inst_32132 = (state_32181[(13)]);
var inst_32129 = (state_32181[(2)]);
var inst_32130__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32129,(0),null);
var inst_32131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32129,(1),null);
var inst_32132__$1 = (inst_32130__$1 == null);
var state_32181__$1 = (function (){var statearr_32234 = state_32181;
(statearr_32234[(14)] = inst_32131);

(statearr_32234[(7)] = inst_32130__$1);

(statearr_32234[(13)] = inst_32132__$1);

return statearr_32234;
})();
if(cljs.core.truth_(inst_32132__$1)){
var statearr_32235_34722 = state_32181__$1;
(statearr_32235_34722[(1)] = (5));

} else {
var statearr_32236_34723 = state_32181__$1;
(statearr_32236_34723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (15))){
var inst_32153 = (state_32181[(15)]);
var inst_32120 = (state_32181[(16)]);
var inst_32153__$1 = cljs.core.empty_QMARK_(inst_32120);
var state_32181__$1 = (function (){var statearr_32237 = state_32181;
(statearr_32237[(15)] = inst_32153__$1);

return statearr_32237;
})();
if(inst_32153__$1){
var statearr_32238_34724 = state_32181__$1;
(statearr_32238_34724[(1)] = (17));

} else {
var statearr_32239_34725 = state_32181__$1;
(statearr_32239_34725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (21))){
var inst_32119 = (state_32181[(12)]);
var inst_32116 = inst_32119;
var state_32181__$1 = (function (){var statearr_32241 = state_32181;
(statearr_32241[(11)] = inst_32116);

return statearr_32241;
})();
var statearr_32242_34727 = state_32181__$1;
(statearr_32242_34727[(2)] = null);

(statearr_32242_34727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (13))){
var inst_32144 = (state_32181[(2)]);
var inst_32145 = calc_state();
var inst_32116 = inst_32145;
var state_32181__$1 = (function (){var statearr_32244 = state_32181;
(statearr_32244[(17)] = inst_32144);

(statearr_32244[(11)] = inst_32116);

return statearr_32244;
})();
var statearr_32245_34728 = state_32181__$1;
(statearr_32245_34728[(2)] = null);

(statearr_32245_34728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (22))){
var inst_32174 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
var statearr_32246_34729 = state_32181__$1;
(statearr_32246_34729[(2)] = inst_32174);

(statearr_32246_34729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (6))){
var inst_32131 = (state_32181[(14)]);
var inst_32135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32131,change);
var state_32181__$1 = state_32181;
var statearr_32249_34732 = state_32181__$1;
(statearr_32249_34732[(2)] = inst_32135);

(statearr_32249_34732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (25))){
var state_32181__$1 = state_32181;
var statearr_32251_34733 = state_32181__$1;
(statearr_32251_34733[(2)] = null);

(statearr_32251_34733[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (17))){
var inst_32131 = (state_32181[(14)]);
var inst_32121 = (state_32181[(18)]);
var inst_32155 = (inst_32121.cljs$core$IFn$_invoke$arity$1 ? inst_32121.cljs$core$IFn$_invoke$arity$1(inst_32131) : inst_32121.call(null,inst_32131));
var inst_32156 = cljs.core.not(inst_32155);
var state_32181__$1 = state_32181;
var statearr_32253_34738 = state_32181__$1;
(statearr_32253_34738[(2)] = inst_32156);

(statearr_32253_34738[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (3))){
var inst_32178 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32181__$1,inst_32178);
} else {
if((state_val_32182 === (12))){
var state_32181__$1 = state_32181;
var statearr_32255_34739 = state_32181__$1;
(statearr_32255_34739[(2)] = null);

(statearr_32255_34739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (2))){
var inst_32119 = (state_32181[(12)]);
var inst_32116 = (state_32181[(11)]);
var inst_32119__$1 = cljs.core.__destructure_map(inst_32116);
var inst_32120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32119__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32119__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32119__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32181__$1 = (function (){var statearr_32256 = state_32181;
(statearr_32256[(18)] = inst_32121);

(statearr_32256[(12)] = inst_32119__$1);

(statearr_32256[(16)] = inst_32120);

return statearr_32256;
})();
return cljs.core.async.ioc_alts_BANG_(state_32181__$1,(4),inst_32122);
} else {
if((state_val_32182 === (23))){
var inst_32165 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
if(cljs.core.truth_(inst_32165)){
var statearr_32257_34742 = state_32181__$1;
(statearr_32257_34742[(1)] = (24));

} else {
var statearr_32258_34743 = state_32181__$1;
(statearr_32258_34743[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (19))){
var inst_32159 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
var statearr_32259_34744 = state_32181__$1;
(statearr_32259_34744[(2)] = inst_32159);

(statearr_32259_34744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (11))){
var inst_32131 = (state_32181[(14)]);
var inst_32141 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32131);
var state_32181__$1 = state_32181;
var statearr_32260_34748 = state_32181__$1;
(statearr_32260_34748[(2)] = inst_32141);

(statearr_32260_34748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (9))){
var inst_32131 = (state_32181[(14)]);
var inst_32150 = (state_32181[(19)]);
var inst_32120 = (state_32181[(16)]);
var inst_32150__$1 = (inst_32120.cljs$core$IFn$_invoke$arity$1 ? inst_32120.cljs$core$IFn$_invoke$arity$1(inst_32131) : inst_32120.call(null,inst_32131));
var state_32181__$1 = (function (){var statearr_32265 = state_32181;
(statearr_32265[(19)] = inst_32150__$1);

return statearr_32265;
})();
if(cljs.core.truth_(inst_32150__$1)){
var statearr_32266_34751 = state_32181__$1;
(statearr_32266_34751[(1)] = (14));

} else {
var statearr_32267_34752 = state_32181__$1;
(statearr_32267_34752[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (5))){
var inst_32132 = (state_32181[(13)]);
var state_32181__$1 = state_32181;
var statearr_32268_34754 = state_32181__$1;
(statearr_32268_34754[(2)] = inst_32132);

(statearr_32268_34754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (14))){
var inst_32150 = (state_32181[(19)]);
var state_32181__$1 = state_32181;
var statearr_32272_34756 = state_32181__$1;
(statearr_32272_34756[(2)] = inst_32150);

(statearr_32272_34756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (26))){
var inst_32170 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
var statearr_32273_34759 = state_32181__$1;
(statearr_32273_34759[(2)] = inst_32170);

(statearr_32273_34759[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (16))){
var inst_32161 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
if(cljs.core.truth_(inst_32161)){
var statearr_32274_34762 = state_32181__$1;
(statearr_32274_34762[(1)] = (20));

} else {
var statearr_32275_34763 = state_32181__$1;
(statearr_32275_34763[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (10))){
var inst_32176 = (state_32181[(2)]);
var state_32181__$1 = state_32181;
var statearr_32276_34764 = state_32181__$1;
(statearr_32276_34764[(2)] = inst_32176);

(statearr_32276_34764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (18))){
var inst_32153 = (state_32181[(15)]);
var state_32181__$1 = state_32181;
var statearr_32277_34765 = state_32181__$1;
(statearr_32277_34765[(2)] = inst_32153);

(statearr_32277_34765[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32182 === (8))){
var inst_32130 = (state_32181[(7)]);
var inst_32139 = (inst_32130 == null);
var state_32181__$1 = state_32181;
if(cljs.core.truth_(inst_32139)){
var statearr_32278_34766 = state_32181__$1;
(statearr_32278_34766[(1)] = (11));

} else {
var statearr_32279_34767 = state_32181__$1;
(statearr_32279_34767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29302__auto__ = null;
var cljs$core$async$mix_$_state_machine__29302__auto____0 = (function (){
var statearr_32280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32280[(0)] = cljs$core$async$mix_$_state_machine__29302__auto__);

(statearr_32280[(1)] = (1));

return statearr_32280;
});
var cljs$core$async$mix_$_state_machine__29302__auto____1 = (function (state_32181){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32181);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32283){var ex__29305__auto__ = e32283;
var statearr_32284_34770 = state_32181;
(statearr_32284_34770[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32181[(4)]))){
var statearr_32285_34772 = state_32181;
(statearr_32285_34772[(1)] = cljs.core.first((state_32181[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34778 = state_32181;
state_32181 = G__34778;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29302__auto__ = function(state_32181){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29302__auto____1.call(this,state_32181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29302__auto____0;
cljs$core$async$mix_$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29302__auto____1;
return cljs$core$async$mix_$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_32286 = f__30553__auto__();
(statearr_32286[(6)] = c__30552__auto___34716);

return statearr_32286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34788 = (function (p,v,ch,close_QMARK_){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5393__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5391__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34788(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34789 = (function (p,v,ch){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5393__auto__.call(null,p,v,ch));
} else {
var m__5391__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34789(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34792 = (function() {
var G__34793 = null;
var G__34793__1 = (function (p){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5393__auto__.call(null,p));
} else {
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34793__2 = (function (p,v){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5393__auto__.call(null,p,v));
} else {
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34793 = function(p,v){
switch(arguments.length){
case 1:
return G__34793__1.call(this,p);
case 2:
return G__34793__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34793.cljs$core$IFn$_invoke$arity$1 = G__34793__1;
G__34793.cljs$core$IFn$_invoke$arity$2 = G__34793__2;
return G__34793;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32303 = arguments.length;
switch (G__32303) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34792(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34792(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32309 = arguments.length;
switch (G__32309) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32307_SHARP_){
if(cljs.core.truth_((p1__32307_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32307_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32307_SHARP_.call(null,topic)))){
return p1__32307_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32307_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32316 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32317){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32317 = meta32317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32318,meta32317__$1){
var self__ = this;
var _32318__$1 = this;
return (new cljs.core.async.t_cljs$core$async32316(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32317__$1));
}));

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32318){
var self__ = this;
var _32318__$1 = this;
return self__.meta32317;
}));

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32317","meta32317",-978800804,null)], null);
}));

(cljs.core.async.t_cljs$core$async32316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32316");

(cljs.core.async.t_cljs$core$async32316.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async32316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32316.
 */
cljs.core.async.__GT_t_cljs$core$async32316 = (function cljs$core$async$__GT_t_cljs$core$async32316(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32317){
return (new cljs.core.async.t_cljs$core$async32316(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32317));
});

}

return (new cljs.core.async.t_cljs$core$async32316(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30552__auto___34814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_32422){
var state_val_32424 = (state_32422[(1)]);
if((state_val_32424 === (7))){
var inst_32417 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32432_34815 = state_32422__$1;
(statearr_32432_34815[(2)] = inst_32417);

(statearr_32432_34815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (20))){
var state_32422__$1 = state_32422;
var statearr_32433_34816 = state_32422__$1;
(statearr_32433_34816[(2)] = null);

(statearr_32433_34816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (1))){
var state_32422__$1 = state_32422;
var statearr_32434_34817 = state_32422__$1;
(statearr_32434_34817[(2)] = null);

(statearr_32434_34817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (24))){
var inst_32397 = (state_32422[(7)]);
var inst_32409 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32397);
var state_32422__$1 = state_32422;
var statearr_32439_34818 = state_32422__$1;
(statearr_32439_34818[(2)] = inst_32409);

(statearr_32439_34818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (4))){
var inst_32337 = (state_32422[(8)]);
var inst_32337__$1 = (state_32422[(2)]);
var inst_32338 = (inst_32337__$1 == null);
var state_32422__$1 = (function (){var statearr_32440 = state_32422;
(statearr_32440[(8)] = inst_32337__$1);

return statearr_32440;
})();
if(cljs.core.truth_(inst_32338)){
var statearr_32441_34819 = state_32422__$1;
(statearr_32441_34819[(1)] = (5));

} else {
var statearr_32442_34820 = state_32422__$1;
(statearr_32442_34820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (15))){
var inst_32391 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32444_34821 = state_32422__$1;
(statearr_32444_34821[(2)] = inst_32391);

(statearr_32444_34821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (21))){
var inst_32414 = (state_32422[(2)]);
var state_32422__$1 = (function (){var statearr_32445 = state_32422;
(statearr_32445[(9)] = inst_32414);

return statearr_32445;
})();
var statearr_32446_34824 = state_32422__$1;
(statearr_32446_34824[(2)] = null);

(statearr_32446_34824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (13))){
var inst_32372 = (state_32422[(10)]);
var inst_32375 = cljs.core.chunked_seq_QMARK_(inst_32372);
var state_32422__$1 = state_32422;
if(inst_32375){
var statearr_32447_34825 = state_32422__$1;
(statearr_32447_34825[(1)] = (16));

} else {
var statearr_32448_34826 = state_32422__$1;
(statearr_32448_34826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (22))){
var inst_32406 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32406)){
var statearr_32458_34827 = state_32422__$1;
(statearr_32458_34827[(1)] = (23));

} else {
var statearr_32459_34829 = state_32422__$1;
(statearr_32459_34829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (6))){
var inst_32337 = (state_32422[(8)]);
var inst_32397 = (state_32422[(7)]);
var inst_32399 = (state_32422[(11)]);
var inst_32397__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32337) : topic_fn.call(null,inst_32337));
var inst_32398 = cljs.core.deref(mults);
var inst_32399__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32398,inst_32397__$1);
var state_32422__$1 = (function (){var statearr_32471 = state_32422;
(statearr_32471[(7)] = inst_32397__$1);

(statearr_32471[(11)] = inst_32399__$1);

return statearr_32471;
})();
if(cljs.core.truth_(inst_32399__$1)){
var statearr_32477_34834 = state_32422__$1;
(statearr_32477_34834[(1)] = (19));

} else {
var statearr_32478_34839 = state_32422__$1;
(statearr_32478_34839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (25))){
var inst_32411 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32479_34840 = state_32422__$1;
(statearr_32479_34840[(2)] = inst_32411);

(statearr_32479_34840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (17))){
var inst_32372 = (state_32422[(10)]);
var inst_32382 = cljs.core.first(inst_32372);
var inst_32383 = cljs.core.async.muxch_STAR_(inst_32382);
var inst_32384 = cljs.core.async.close_BANG_(inst_32383);
var inst_32385 = cljs.core.next(inst_32372);
var inst_32347 = inst_32385;
var inst_32348 = null;
var inst_32349 = (0);
var inst_32350 = (0);
var state_32422__$1 = (function (){var statearr_32483 = state_32422;
(statearr_32483[(12)] = inst_32350);

(statearr_32483[(13)] = inst_32347);

(statearr_32483[(14)] = inst_32349);

(statearr_32483[(15)] = inst_32348);

(statearr_32483[(16)] = inst_32384);

return statearr_32483;
})();
var statearr_32485_34850 = state_32422__$1;
(statearr_32485_34850[(2)] = null);

(statearr_32485_34850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (3))){
var inst_32419 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32422__$1,inst_32419);
} else {
if((state_val_32424 === (12))){
var inst_32393 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32495_34852 = state_32422__$1;
(statearr_32495_34852[(2)] = inst_32393);

(statearr_32495_34852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (2))){
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32422__$1,(4),ch);
} else {
if((state_val_32424 === (23))){
var state_32422__$1 = state_32422;
var statearr_32497_34856 = state_32422__$1;
(statearr_32497_34856[(2)] = null);

(statearr_32497_34856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (19))){
var inst_32337 = (state_32422[(8)]);
var inst_32399 = (state_32422[(11)]);
var inst_32404 = cljs.core.async.muxch_STAR_(inst_32399);
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32422__$1,(22),inst_32404,inst_32337);
} else {
if((state_val_32424 === (11))){
var inst_32347 = (state_32422[(13)]);
var inst_32372 = (state_32422[(10)]);
var inst_32372__$1 = cljs.core.seq(inst_32347);
var state_32422__$1 = (function (){var statearr_32507 = state_32422;
(statearr_32507[(10)] = inst_32372__$1);

return statearr_32507;
})();
if(inst_32372__$1){
var statearr_32509_34861 = state_32422__$1;
(statearr_32509_34861[(1)] = (13));

} else {
var statearr_32510_34862 = state_32422__$1;
(statearr_32510_34862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (9))){
var inst_32395 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32517_34863 = state_32422__$1;
(statearr_32517_34863[(2)] = inst_32395);

(statearr_32517_34863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (5))){
var inst_32344 = cljs.core.deref(mults);
var inst_32345 = cljs.core.vals(inst_32344);
var inst_32346 = cljs.core.seq(inst_32345);
var inst_32347 = inst_32346;
var inst_32348 = null;
var inst_32349 = (0);
var inst_32350 = (0);
var state_32422__$1 = (function (){var statearr_32519 = state_32422;
(statearr_32519[(12)] = inst_32350);

(statearr_32519[(13)] = inst_32347);

(statearr_32519[(14)] = inst_32349);

(statearr_32519[(15)] = inst_32348);

return statearr_32519;
})();
var statearr_32520_34873 = state_32422__$1;
(statearr_32520_34873[(2)] = null);

(statearr_32520_34873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (14))){
var state_32422__$1 = state_32422;
var statearr_32524_34875 = state_32422__$1;
(statearr_32524_34875[(2)] = null);

(statearr_32524_34875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (16))){
var inst_32372 = (state_32422[(10)]);
var inst_32377 = cljs.core.chunk_first(inst_32372);
var inst_32378 = cljs.core.chunk_rest(inst_32372);
var inst_32379 = cljs.core.count(inst_32377);
var inst_32347 = inst_32378;
var inst_32348 = inst_32377;
var inst_32349 = inst_32379;
var inst_32350 = (0);
var state_32422__$1 = (function (){var statearr_32525 = state_32422;
(statearr_32525[(12)] = inst_32350);

(statearr_32525[(13)] = inst_32347);

(statearr_32525[(14)] = inst_32349);

(statearr_32525[(15)] = inst_32348);

return statearr_32525;
})();
var statearr_32535_34878 = state_32422__$1;
(statearr_32535_34878[(2)] = null);

(statearr_32535_34878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (10))){
var inst_32350 = (state_32422[(12)]);
var inst_32347 = (state_32422[(13)]);
var inst_32349 = (state_32422[(14)]);
var inst_32348 = (state_32422[(15)]);
var inst_32359 = cljs.core._nth(inst_32348,inst_32350);
var inst_32364 = cljs.core.async.muxch_STAR_(inst_32359);
var inst_32365 = cljs.core.async.close_BANG_(inst_32364);
var inst_32366 = (inst_32350 + (1));
var tmp32521 = inst_32347;
var tmp32522 = inst_32349;
var tmp32523 = inst_32348;
var inst_32347__$1 = tmp32521;
var inst_32348__$1 = tmp32523;
var inst_32349__$1 = tmp32522;
var inst_32350__$1 = inst_32366;
var state_32422__$1 = (function (){var statearr_32550 = state_32422;
(statearr_32550[(12)] = inst_32350__$1);

(statearr_32550[(13)] = inst_32347__$1);

(statearr_32550[(17)] = inst_32365);

(statearr_32550[(14)] = inst_32349__$1);

(statearr_32550[(15)] = inst_32348__$1);

return statearr_32550;
})();
var statearr_32551_34888 = state_32422__$1;
(statearr_32551_34888[(2)] = null);

(statearr_32551_34888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (18))){
var inst_32388 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32553_34895 = state_32422__$1;
(statearr_32553_34895[(2)] = inst_32388);

(statearr_32553_34895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (8))){
var inst_32350 = (state_32422[(12)]);
var inst_32349 = (state_32422[(14)]);
var inst_32356 = (inst_32350 < inst_32349);
var inst_32357 = inst_32356;
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32357)){
var statearr_32558_34898 = state_32422__$1;
(statearr_32558_34898[(1)] = (10));

} else {
var statearr_32559_34901 = state_32422__$1;
(statearr_32559_34901[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32571[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32571[(1)] = (1));

return statearr_32571;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32422){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32422);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32573){var ex__29305__auto__ = e32573;
var statearr_32574_34903 = state_32422;
(statearr_32574_34903[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32422[(4)]))){
var statearr_32575_34906 = state_32422;
(statearr_32575_34906[(1)] = cljs.core.first((state_32422[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34909 = state_32422;
state_32422 = G__34909;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_32581 = f__30553__auto__();
(statearr_32581[(6)] = c__30552__auto___34814);

return statearr_32581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32587 = arguments.length;
switch (G__32587) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32607 = arguments.length;
switch (G__32607) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32625 = arguments.length;
switch (G__32625) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30552__auto___34937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_32691){
var state_val_32692 = (state_32691[(1)]);
if((state_val_32692 === (7))){
var state_32691__$1 = state_32691;
var statearr_32696_34948 = state_32691__$1;
(statearr_32696_34948[(2)] = null);

(statearr_32696_34948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (1))){
var state_32691__$1 = state_32691;
var statearr_32698_34949 = state_32691__$1;
(statearr_32698_34949[(2)] = null);

(statearr_32698_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (4))){
var inst_32647 = (state_32691[(7)]);
var inst_32648 = (state_32691[(8)]);
var inst_32650 = (inst_32648 < inst_32647);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32650)){
var statearr_32703_34956 = state_32691__$1;
(statearr_32703_34956[(1)] = (6));

} else {
var statearr_32704_34957 = state_32691__$1;
(statearr_32704_34957[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (15))){
var inst_32677 = (state_32691[(9)]);
var inst_32682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32677);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32691__$1,(17),out,inst_32682);
} else {
if((state_val_32692 === (13))){
var inst_32677 = (state_32691[(9)]);
var inst_32677__$1 = (state_32691[(2)]);
var inst_32678 = cljs.core.some(cljs.core.nil_QMARK_,inst_32677__$1);
var state_32691__$1 = (function (){var statearr_32706 = state_32691;
(statearr_32706[(9)] = inst_32677__$1);

return statearr_32706;
})();
if(cljs.core.truth_(inst_32678)){
var statearr_32707_34964 = state_32691__$1;
(statearr_32707_34964[(1)] = (14));

} else {
var statearr_32709_34965 = state_32691__$1;
(statearr_32709_34965[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (6))){
var state_32691__$1 = state_32691;
var statearr_32711_34966 = state_32691__$1;
(statearr_32711_34966[(2)] = null);

(statearr_32711_34966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (17))){
var inst_32684 = (state_32691[(2)]);
var state_32691__$1 = (function (){var statearr_32713 = state_32691;
(statearr_32713[(10)] = inst_32684);

return statearr_32713;
})();
var statearr_32714_34968 = state_32691__$1;
(statearr_32714_34968[(2)] = null);

(statearr_32714_34968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (3))){
var inst_32689 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32691__$1,inst_32689);
} else {
if((state_val_32692 === (12))){
var _ = (function (){var statearr_32717 = state_32691;
(statearr_32717[(4)] = cljs.core.rest((state_32691[(4)])));

return statearr_32717;
})();
var state_32691__$1 = state_32691;
var ex32712 = (state_32691__$1[(2)]);
var statearr_32718_34972 = state_32691__$1;
(statearr_32718_34972[(5)] = ex32712);


if((ex32712 instanceof Object)){
var statearr_32722_34974 = state_32691__$1;
(statearr_32722_34974[(1)] = (11));

(statearr_32722_34974[(5)] = null);

} else {
throw ex32712;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (2))){
var inst_32646 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32647 = cnt;
var inst_32648 = (0);
var state_32691__$1 = (function (){var statearr_32728 = state_32691;
(statearr_32728[(7)] = inst_32647);

(statearr_32728[(8)] = inst_32648);

(statearr_32728[(11)] = inst_32646);

return statearr_32728;
})();
var statearr_32729_34984 = state_32691__$1;
(statearr_32729_34984[(2)] = null);

(statearr_32729_34984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (11))){
var inst_32656 = (state_32691[(2)]);
var inst_32657 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32691__$1 = (function (){var statearr_32730 = state_32691;
(statearr_32730[(12)] = inst_32656);

return statearr_32730;
})();
var statearr_32731_34990 = state_32691__$1;
(statearr_32731_34990[(2)] = inst_32657);

(statearr_32731_34990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (9))){
var inst_32648 = (state_32691[(8)]);
var _ = (function (){var statearr_32738 = state_32691;
(statearr_32738[(4)] = cljs.core.cons((12),(state_32691[(4)])));

return statearr_32738;
})();
var inst_32663 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32648) : chs__$1.call(null,inst_32648));
var inst_32664 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32648) : done.call(null,inst_32648));
var inst_32665 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32663,inst_32664);
var ___$1 = (function (){var statearr_32739 = state_32691;
(statearr_32739[(4)] = cljs.core.rest((state_32691[(4)])));

return statearr_32739;
})();
var state_32691__$1 = state_32691;
var statearr_32742_34992 = state_32691__$1;
(statearr_32742_34992[(2)] = inst_32665);

(statearr_32742_34992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (5))){
var inst_32675 = (state_32691[(2)]);
var state_32691__$1 = (function (){var statearr_32743 = state_32691;
(statearr_32743[(13)] = inst_32675);

return statearr_32743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32691__$1,(13),dchan);
} else {
if((state_val_32692 === (14))){
var inst_32680 = cljs.core.async.close_BANG_(out);
var state_32691__$1 = state_32691;
var statearr_32744_34997 = state_32691__$1;
(statearr_32744_34997[(2)] = inst_32680);

(statearr_32744_34997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (16))){
var inst_32687 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32745_34999 = state_32691__$1;
(statearr_32745_34999[(2)] = inst_32687);

(statearr_32745_34999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (10))){
var inst_32648 = (state_32691[(8)]);
var inst_32668 = (state_32691[(2)]);
var inst_32669 = (inst_32648 + (1));
var inst_32648__$1 = inst_32669;
var state_32691__$1 = (function (){var statearr_32746 = state_32691;
(statearr_32746[(14)] = inst_32668);

(statearr_32746[(8)] = inst_32648__$1);

return statearr_32746;
})();
var statearr_32748_35008 = state_32691__$1;
(statearr_32748_35008[(2)] = null);

(statearr_32748_35008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (8))){
var inst_32673 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32749_35014 = state_32691__$1;
(statearr_32749_35014[(2)] = inst_32673);

(statearr_32749_35014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32754[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32754[(1)] = (1));

return statearr_32754;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32691){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32691);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32759){var ex__29305__auto__ = e32759;
var statearr_32764_35031 = state_32691;
(statearr_32764_35031[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32691[(4)]))){
var statearr_32770_35033 = state_32691;
(statearr_32770_35033[(1)] = cljs.core.first((state_32691[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35035 = state_32691;
state_32691 = G__35035;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_32773 = f__30553__auto__();
(statearr_32773[(6)] = c__30552__auto___34937);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32776 = arguments.length;
switch (G__32776) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30552__auto___35049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_32816){
var state_val_32817 = (state_32816[(1)]);
if((state_val_32817 === (7))){
var inst_32795 = (state_32816[(7)]);
var inst_32796 = (state_32816[(8)]);
var inst_32795__$1 = (state_32816[(2)]);
var inst_32796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32795__$1,(0),null);
var inst_32797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32795__$1,(1),null);
var inst_32798 = (inst_32796__$1 == null);
var state_32816__$1 = (function (){var statearr_32824 = state_32816;
(statearr_32824[(9)] = inst_32797);

(statearr_32824[(7)] = inst_32795__$1);

(statearr_32824[(8)] = inst_32796__$1);

return statearr_32824;
})();
if(cljs.core.truth_(inst_32798)){
var statearr_32825_35068 = state_32816__$1;
(statearr_32825_35068[(1)] = (8));

} else {
var statearr_32831_35070 = state_32816__$1;
(statearr_32831_35070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (1))){
var inst_32783 = cljs.core.vec(chs);
var inst_32784 = inst_32783;
var state_32816__$1 = (function (){var statearr_32833 = state_32816;
(statearr_32833[(10)] = inst_32784);

return statearr_32833;
})();
var statearr_32834_35072 = state_32816__$1;
(statearr_32834_35072[(2)] = null);

(statearr_32834_35072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (4))){
var inst_32784 = (state_32816[(10)]);
var state_32816__$1 = state_32816;
return cljs.core.async.ioc_alts_BANG_(state_32816__$1,(7),inst_32784);
} else {
if((state_val_32817 === (6))){
var inst_32812 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32838_35084 = state_32816__$1;
(statearr_32838_35084[(2)] = inst_32812);

(statearr_32838_35084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (3))){
var inst_32814 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32816__$1,inst_32814);
} else {
if((state_val_32817 === (2))){
var inst_32784 = (state_32816[(10)]);
var inst_32786 = cljs.core.count(inst_32784);
var inst_32787 = (inst_32786 > (0));
var state_32816__$1 = state_32816;
if(cljs.core.truth_(inst_32787)){
var statearr_32841_35103 = state_32816__$1;
(statearr_32841_35103[(1)] = (4));

} else {
var statearr_32842_35104 = state_32816__$1;
(statearr_32842_35104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (11))){
var inst_32784 = (state_32816[(10)]);
var inst_32805 = (state_32816[(2)]);
var tmp32840 = inst_32784;
var inst_32784__$1 = tmp32840;
var state_32816__$1 = (function (){var statearr_32848 = state_32816;
(statearr_32848[(10)] = inst_32784__$1);

(statearr_32848[(11)] = inst_32805);

return statearr_32848;
})();
var statearr_32849_35105 = state_32816__$1;
(statearr_32849_35105[(2)] = null);

(statearr_32849_35105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (9))){
var inst_32796 = (state_32816[(8)]);
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32816__$1,(11),out,inst_32796);
} else {
if((state_val_32817 === (5))){
var inst_32810 = cljs.core.async.close_BANG_(out);
var state_32816__$1 = state_32816;
var statearr_32855_35113 = state_32816__$1;
(statearr_32855_35113[(2)] = inst_32810);

(statearr_32855_35113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (10))){
var inst_32808 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32857_35114 = state_32816__$1;
(statearr_32857_35114[(2)] = inst_32808);

(statearr_32857_35114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (8))){
var inst_32784 = (state_32816[(10)]);
var inst_32797 = (state_32816[(9)]);
var inst_32795 = (state_32816[(7)]);
var inst_32796 = (state_32816[(8)]);
var inst_32800 = (function (){var cs = inst_32784;
var vec__32791 = inst_32795;
var v = inst_32796;
var c = inst_32797;
return (function (p1__32774_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32774_SHARP_);
});
})();
var inst_32801 = cljs.core.filterv(inst_32800,inst_32784);
var inst_32784__$1 = inst_32801;
var state_32816__$1 = (function (){var statearr_32859 = state_32816;
(statearr_32859[(10)] = inst_32784__$1);

return statearr_32859;
})();
var statearr_32860_35121 = state_32816__$1;
(statearr_32860_35121[(2)] = null);

(statearr_32860_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32869 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32869[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32869[(1)] = (1));

return statearr_32869;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32816){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32816);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32875){var ex__29305__auto__ = e32875;
var statearr_32879_35131 = state_32816;
(statearr_32879_35131[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32816[(4)]))){
var statearr_32880_35132 = state_32816;
(statearr_32880_35132[(1)] = cljs.core.first((state_32816[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35141 = state_32816;
state_32816 = G__35141;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_32881 = f__30553__auto__();
(statearr_32881[(6)] = c__30552__auto___35049);

return statearr_32881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32886 = arguments.length;
switch (G__32886) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30552__auto___35153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_32918){
var state_val_32919 = (state_32918[(1)]);
if((state_val_32919 === (7))){
var inst_32900 = (state_32918[(7)]);
var inst_32900__$1 = (state_32918[(2)]);
var inst_32901 = (inst_32900__$1 == null);
var inst_32902 = cljs.core.not(inst_32901);
var state_32918__$1 = (function (){var statearr_32923 = state_32918;
(statearr_32923[(7)] = inst_32900__$1);

return statearr_32923;
})();
if(inst_32902){
var statearr_32924_35162 = state_32918__$1;
(statearr_32924_35162[(1)] = (8));

} else {
var statearr_32926_35163 = state_32918__$1;
(statearr_32926_35163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (1))){
var inst_32895 = (0);
var state_32918__$1 = (function (){var statearr_32929 = state_32918;
(statearr_32929[(8)] = inst_32895);

return statearr_32929;
})();
var statearr_32930_35164 = state_32918__$1;
(statearr_32930_35164[(2)] = null);

(statearr_32930_35164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (4))){
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32918__$1,(7),ch);
} else {
if((state_val_32919 === (6))){
var inst_32913 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32933_35170 = state_32918__$1;
(statearr_32933_35170[(2)] = inst_32913);

(statearr_32933_35170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (3))){
var inst_32915 = (state_32918[(2)]);
var inst_32916 = cljs.core.async.close_BANG_(out);
var state_32918__$1 = (function (){var statearr_32938 = state_32918;
(statearr_32938[(9)] = inst_32915);

return statearr_32938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32918__$1,inst_32916);
} else {
if((state_val_32919 === (2))){
var inst_32895 = (state_32918[(8)]);
var inst_32897 = (inst_32895 < n);
var state_32918__$1 = state_32918;
if(cljs.core.truth_(inst_32897)){
var statearr_32942_35195 = state_32918__$1;
(statearr_32942_35195[(1)] = (4));

} else {
var statearr_32944_35196 = state_32918__$1;
(statearr_32944_35196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (11))){
var inst_32895 = (state_32918[(8)]);
var inst_32905 = (state_32918[(2)]);
var inst_32906 = (inst_32895 + (1));
var inst_32895__$1 = inst_32906;
var state_32918__$1 = (function (){var statearr_32948 = state_32918;
(statearr_32948[(10)] = inst_32905);

(statearr_32948[(8)] = inst_32895__$1);

return statearr_32948;
})();
var statearr_32949_35199 = state_32918__$1;
(statearr_32949_35199[(2)] = null);

(statearr_32949_35199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (9))){
var state_32918__$1 = state_32918;
var statearr_32954_35200 = state_32918__$1;
(statearr_32954_35200[(2)] = null);

(statearr_32954_35200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (5))){
var state_32918__$1 = state_32918;
var statearr_32963_35201 = state_32918__$1;
(statearr_32963_35201[(2)] = null);

(statearr_32963_35201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (10))){
var inst_32910 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32965_35202 = state_32918__$1;
(statearr_32965_35202[(2)] = inst_32910);

(statearr_32965_35202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (8))){
var inst_32900 = (state_32918[(7)]);
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32918__$1,(11),out,inst_32900);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_32973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32973[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_32973[(1)] = (1));

return statearr_32973;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_32918){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_32918);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e32974){var ex__29305__auto__ = e32974;
var statearr_32975_35203 = state_32918;
(statearr_32975_35203[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_32918[(4)]))){
var statearr_32976_35209 = state_32918;
(statearr_32976_35209[(1)] = cljs.core.first((state_32918[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35210 = state_32918;
state_32918 = G__35210;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_32918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_32918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_32984 = f__30553__auto__();
(statearr_32984[(6)] = c__30552__auto___35153);

return statearr_32984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33001 = (function (f,ch,meta33002){
this.f = f;
this.ch = ch;
this.meta33002 = meta33002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33003,meta33002__$1){
var self__ = this;
var _33003__$1 = this;
return (new cljs.core.async.t_cljs$core$async33001(self__.f,self__.ch,meta33002__$1));
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33003){
var self__ = this;
var _33003__$1 = this;
return self__.meta33002;
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33022 = (function (f,ch,meta33002,_,fn1,meta33023){
this.f = f;
this.ch = ch;
this.meta33002 = meta33002;
this._ = _;
this.fn1 = fn1;
this.meta33023 = meta33023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33024,meta33023__$1){
var self__ = this;
var _33024__$1 = this;
return (new cljs.core.async.t_cljs$core$async33022(self__.f,self__.ch,self__.meta33002,self__._,self__.fn1,meta33023__$1));
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33024){
var self__ = this;
var _33024__$1 = this;
return self__.meta33023;
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32996_SHARP_){
var G__33039 = (((p1__32996_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32996_SHARP_) : self__.f.call(null,p1__32996_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33039) : f1.call(null,G__33039));
});
}));

(cljs.core.async.t_cljs$core$async33022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33002","meta33002",-2649914,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33001","cljs.core.async/t_cljs$core$async33001",1508587240,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33023","meta33023",1777698271,null)], null);
}));

(cljs.core.async.t_cljs$core$async33022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33022");

(cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async33022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33022.
 */
cljs.core.async.__GT_t_cljs$core$async33022 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33022(f__$1,ch__$1,meta33002__$1,___$2,fn1__$1,meta33023){
return (new cljs.core.async.t_cljs$core$async33022(f__$1,ch__$1,meta33002__$1,___$2,fn1__$1,meta33023));
});

}

return (new cljs.core.async.t_cljs$core$async33022(self__.f,self__.ch,self__.meta33002,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33044 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33044) : self__.f.call(null,G__33044));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33002","meta33002",-2649914,null)], null);
}));

(cljs.core.async.t_cljs$core$async33001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33001");

(cljs.core.async.t_cljs$core$async33001.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async33001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33001.
 */
cljs.core.async.__GT_t_cljs$core$async33001 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33001(f__$1,ch__$1,meta33002){
return (new cljs.core.async.t_cljs$core$async33001(f__$1,ch__$1,meta33002));
});

}

return (new cljs.core.async.t_cljs$core$async33001(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33060 = (function (f,ch,meta33061){
this.f = f;
this.ch = ch;
this.meta33061 = meta33061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33062,meta33061__$1){
var self__ = this;
var _33062__$1 = this;
return (new cljs.core.async.t_cljs$core$async33060(self__.f,self__.ch,meta33061__$1));
}));

(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33062){
var self__ = this;
var _33062__$1 = this;
return self__.meta33061;
}));

(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33061","meta33061",1762333832,null)], null);
}));

(cljs.core.async.t_cljs$core$async33060.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33060");

(cljs.core.async.t_cljs$core$async33060.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async33060");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33060.
 */
cljs.core.async.__GT_t_cljs$core$async33060 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33060(f__$1,ch__$1,meta33061){
return (new cljs.core.async.t_cljs$core$async33060(f__$1,ch__$1,meta33061));
});

}

return (new cljs.core.async.t_cljs$core$async33060(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33073 = (function (p,ch,meta33074){
this.p = p;
this.ch = ch;
this.meta33074 = meta33074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33075,meta33074__$1){
var self__ = this;
var _33075__$1 = this;
return (new cljs.core.async.t_cljs$core$async33073(self__.p,self__.ch,meta33074__$1));
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33075){
var self__ = this;
var _33075__$1 = this;
return self__.meta33074;
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33074","meta33074",1493569644,null)], null);
}));

(cljs.core.async.t_cljs$core$async33073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33073");

(cljs.core.async.t_cljs$core$async33073.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"cljs.core.async/t_cljs$core$async33073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33073.
 */
cljs.core.async.__GT_t_cljs$core$async33073 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33073(p__$1,ch__$1,meta33074){
return (new cljs.core.async.t_cljs$core$async33073(p__$1,ch__$1,meta33074));
});

}

return (new cljs.core.async.t_cljs$core$async33073(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33093 = arguments.length;
switch (G__33093) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30552__auto___35248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_33118){
var state_val_33119 = (state_33118[(1)]);
if((state_val_33119 === (7))){
var inst_33114 = (state_33118[(2)]);
var state_33118__$1 = state_33118;
var statearr_33124_35253 = state_33118__$1;
(statearr_33124_35253[(2)] = inst_33114);

(statearr_33124_35253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (1))){
var state_33118__$1 = state_33118;
var statearr_33126_35254 = state_33118__$1;
(statearr_33126_35254[(2)] = null);

(statearr_33126_35254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (4))){
var inst_33100 = (state_33118[(7)]);
var inst_33100__$1 = (state_33118[(2)]);
var inst_33101 = (inst_33100__$1 == null);
var state_33118__$1 = (function (){var statearr_33127 = state_33118;
(statearr_33127[(7)] = inst_33100__$1);

return statearr_33127;
})();
if(cljs.core.truth_(inst_33101)){
var statearr_33128_35256 = state_33118__$1;
(statearr_33128_35256[(1)] = (5));

} else {
var statearr_33129_35257 = state_33118__$1;
(statearr_33129_35257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (6))){
var inst_33100 = (state_33118[(7)]);
var inst_33105 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33100) : p.call(null,inst_33100));
var state_33118__$1 = state_33118;
if(cljs.core.truth_(inst_33105)){
var statearr_33134_35264 = state_33118__$1;
(statearr_33134_35264[(1)] = (8));

} else {
var statearr_33135_35268 = state_33118__$1;
(statearr_33135_35268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (3))){
var inst_33116 = (state_33118[(2)]);
var state_33118__$1 = state_33118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33118__$1,inst_33116);
} else {
if((state_val_33119 === (2))){
var state_33118__$1 = state_33118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33118__$1,(4),ch);
} else {
if((state_val_33119 === (11))){
var inst_33108 = (state_33118[(2)]);
var state_33118__$1 = state_33118;
var statearr_33140_35273 = state_33118__$1;
(statearr_33140_35273[(2)] = inst_33108);

(statearr_33140_35273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (9))){
var state_33118__$1 = state_33118;
var statearr_33142_35274 = state_33118__$1;
(statearr_33142_35274[(2)] = null);

(statearr_33142_35274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (5))){
var inst_33103 = cljs.core.async.close_BANG_(out);
var state_33118__$1 = state_33118;
var statearr_33147_35275 = state_33118__$1;
(statearr_33147_35275[(2)] = inst_33103);

(statearr_33147_35275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (10))){
var inst_33111 = (state_33118[(2)]);
var state_33118__$1 = (function (){var statearr_33149 = state_33118;
(statearr_33149[(8)] = inst_33111);

return statearr_33149;
})();
var statearr_33150_35283 = state_33118__$1;
(statearr_33150_35283[(2)] = null);

(statearr_33150_35283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (8))){
var inst_33100 = (state_33118[(7)]);
var state_33118__$1 = state_33118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33118__$1,(11),out,inst_33100);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_33156 = [null,null,null,null,null,null,null,null,null];
(statearr_33156[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_33156[(1)] = (1));

return statearr_33156;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_33118){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_33118);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33158){var ex__29305__auto__ = e33158;
var statearr_33159_35288 = state_33118;
(statearr_33159_35288[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_33118[(4)]))){
var statearr_33160_35289 = state_33118;
(statearr_33160_35289[(1)] = cljs.core.first((state_33118[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35290 = state_33118;
state_33118 = G__35290;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_33118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_33118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_33161 = f__30553__auto__();
(statearr_33161[(6)] = c__30552__auto___35248);

return statearr_33161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33169 = arguments.length;
switch (G__33169) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30552__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_33246){
var state_val_33247 = (state_33246[(1)]);
if((state_val_33247 === (7))){
var inst_33242 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
var statearr_33253_35298 = state_33246__$1;
(statearr_33253_35298[(2)] = inst_33242);

(statearr_33253_35298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (20))){
var inst_33207 = (state_33246[(7)]);
var inst_33218 = (state_33246[(2)]);
var inst_33220 = cljs.core.next(inst_33207);
var inst_33185 = inst_33220;
var inst_33186 = null;
var inst_33187 = (0);
var inst_33188 = (0);
var state_33246__$1 = (function (){var statearr_33254 = state_33246;
(statearr_33254[(8)] = inst_33218);

(statearr_33254[(9)] = inst_33186);

(statearr_33254[(10)] = inst_33187);

(statearr_33254[(11)] = inst_33188);

(statearr_33254[(12)] = inst_33185);

return statearr_33254;
})();
var statearr_33255_35299 = state_33246__$1;
(statearr_33255_35299[(2)] = null);

(statearr_33255_35299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (1))){
var state_33246__$1 = state_33246;
var statearr_33256_35300 = state_33246__$1;
(statearr_33256_35300[(2)] = null);

(statearr_33256_35300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (4))){
var inst_33174 = (state_33246[(13)]);
var inst_33174__$1 = (state_33246[(2)]);
var inst_33175 = (inst_33174__$1 == null);
var state_33246__$1 = (function (){var statearr_33258 = state_33246;
(statearr_33258[(13)] = inst_33174__$1);

return statearr_33258;
})();
if(cljs.core.truth_(inst_33175)){
var statearr_33263_35301 = state_33246__$1;
(statearr_33263_35301[(1)] = (5));

} else {
var statearr_33265_35302 = state_33246__$1;
(statearr_33265_35302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (15))){
var state_33246__$1 = state_33246;
var statearr_33269_35303 = state_33246__$1;
(statearr_33269_35303[(2)] = null);

(statearr_33269_35303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (21))){
var state_33246__$1 = state_33246;
var statearr_33270_35304 = state_33246__$1;
(statearr_33270_35304[(2)] = null);

(statearr_33270_35304[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (13))){
var inst_33186 = (state_33246[(9)]);
var inst_33187 = (state_33246[(10)]);
var inst_33188 = (state_33246[(11)]);
var inst_33185 = (state_33246[(12)]);
var inst_33195 = (state_33246[(2)]);
var inst_33196 = (inst_33188 + (1));
var tmp33266 = inst_33186;
var tmp33267 = inst_33187;
var tmp33268 = inst_33185;
var inst_33185__$1 = tmp33268;
var inst_33186__$1 = tmp33266;
var inst_33187__$1 = tmp33267;
var inst_33188__$1 = inst_33196;
var state_33246__$1 = (function (){var statearr_33277 = state_33246;
(statearr_33277[(9)] = inst_33186__$1);

(statearr_33277[(10)] = inst_33187__$1);

(statearr_33277[(11)] = inst_33188__$1);

(statearr_33277[(14)] = inst_33195);

(statearr_33277[(12)] = inst_33185__$1);

return statearr_33277;
})();
var statearr_33278_35305 = state_33246__$1;
(statearr_33278_35305[(2)] = null);

(statearr_33278_35305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (22))){
var state_33246__$1 = state_33246;
var statearr_33282_35306 = state_33246__$1;
(statearr_33282_35306[(2)] = null);

(statearr_33282_35306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (6))){
var inst_33174 = (state_33246[(13)]);
var inst_33183 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33174) : f.call(null,inst_33174));
var inst_33184 = cljs.core.seq(inst_33183);
var inst_33185 = inst_33184;
var inst_33186 = null;
var inst_33187 = (0);
var inst_33188 = (0);
var state_33246__$1 = (function (){var statearr_33283 = state_33246;
(statearr_33283[(9)] = inst_33186);

(statearr_33283[(10)] = inst_33187);

(statearr_33283[(11)] = inst_33188);

(statearr_33283[(12)] = inst_33185);

return statearr_33283;
})();
var statearr_33284_35311 = state_33246__$1;
(statearr_33284_35311[(2)] = null);

(statearr_33284_35311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (17))){
var inst_33207 = (state_33246[(7)]);
var inst_33211 = cljs.core.chunk_first(inst_33207);
var inst_33212 = cljs.core.chunk_rest(inst_33207);
var inst_33213 = cljs.core.count(inst_33211);
var inst_33185 = inst_33212;
var inst_33186 = inst_33211;
var inst_33187 = inst_33213;
var inst_33188 = (0);
var state_33246__$1 = (function (){var statearr_33290 = state_33246;
(statearr_33290[(9)] = inst_33186);

(statearr_33290[(10)] = inst_33187);

(statearr_33290[(11)] = inst_33188);

(statearr_33290[(12)] = inst_33185);

return statearr_33290;
})();
var statearr_33293_35316 = state_33246__$1;
(statearr_33293_35316[(2)] = null);

(statearr_33293_35316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (3))){
var inst_33244 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33246__$1,inst_33244);
} else {
if((state_val_33247 === (12))){
var inst_33228 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
var statearr_33295_35322 = state_33246__$1;
(statearr_33295_35322[(2)] = inst_33228);

(statearr_33295_35322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (2))){
var state_33246__$1 = state_33246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33246__$1,(4),in$);
} else {
if((state_val_33247 === (23))){
var inst_33240 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
var statearr_33296_35323 = state_33246__$1;
(statearr_33296_35323[(2)] = inst_33240);

(statearr_33296_35323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (19))){
var inst_33223 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
var statearr_33299_35325 = state_33246__$1;
(statearr_33299_35325[(2)] = inst_33223);

(statearr_33299_35325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (11))){
var inst_33185 = (state_33246[(12)]);
var inst_33207 = (state_33246[(7)]);
var inst_33207__$1 = cljs.core.seq(inst_33185);
var state_33246__$1 = (function (){var statearr_33306 = state_33246;
(statearr_33306[(7)] = inst_33207__$1);

return statearr_33306;
})();
if(inst_33207__$1){
var statearr_33308_35331 = state_33246__$1;
(statearr_33308_35331[(1)] = (14));

} else {
var statearr_33309_35332 = state_33246__$1;
(statearr_33309_35332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (9))){
var inst_33230 = (state_33246[(2)]);
var inst_33231 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33246__$1 = (function (){var statearr_33311 = state_33246;
(statearr_33311[(15)] = inst_33230);

return statearr_33311;
})();
if(cljs.core.truth_(inst_33231)){
var statearr_33313_35333 = state_33246__$1;
(statearr_33313_35333[(1)] = (21));

} else {
var statearr_33314_35336 = state_33246__$1;
(statearr_33314_35336[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (5))){
var inst_33177 = cljs.core.async.close_BANG_(out);
var state_33246__$1 = state_33246;
var statearr_33317_35340 = state_33246__$1;
(statearr_33317_35340[(2)] = inst_33177);

(statearr_33317_35340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (14))){
var inst_33207 = (state_33246[(7)]);
var inst_33209 = cljs.core.chunked_seq_QMARK_(inst_33207);
var state_33246__$1 = state_33246;
if(inst_33209){
var statearr_33321_35342 = state_33246__$1;
(statearr_33321_35342[(1)] = (17));

} else {
var statearr_33322_35343 = state_33246__$1;
(statearr_33322_35343[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (16))){
var inst_33226 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
var statearr_33327_35344 = state_33246__$1;
(statearr_33327_35344[(2)] = inst_33226);

(statearr_33327_35344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (10))){
var inst_33186 = (state_33246[(9)]);
var inst_33188 = (state_33246[(11)]);
var inst_33193 = cljs.core._nth(inst_33186,inst_33188);
var state_33246__$1 = state_33246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33246__$1,(13),out,inst_33193);
} else {
if((state_val_33247 === (18))){
var inst_33207 = (state_33246[(7)]);
var inst_33216 = cljs.core.first(inst_33207);
var state_33246__$1 = state_33246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33246__$1,(20),out,inst_33216);
} else {
if((state_val_33247 === (8))){
var inst_33187 = (state_33246[(10)]);
var inst_33188 = (state_33246[(11)]);
var inst_33190 = (inst_33188 < inst_33187);
var inst_33191 = inst_33190;
var state_33246__$1 = state_33246;
if(cljs.core.truth_(inst_33191)){
var statearr_33331_35348 = state_33246__$1;
(statearr_33331_35348[(1)] = (10));

} else {
var statearr_33334_35349 = state_33246__$1;
(statearr_33334_35349[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33336[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____1 = (function (state_33246){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_33246);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33338){var ex__29305__auto__ = e33338;
var statearr_33339_35352 = state_33246;
(statearr_33339_35352[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_33246[(4)]))){
var statearr_33340_35354 = state_33246;
(statearr_33340_35354[(1)] = cljs.core.first((state_33246[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35355 = state_33246;
state_33246 = G__35355;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__ = function(state_33246){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____1.call(this,state_33246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29302__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_33346 = f__30553__auto__();
(statearr_33346[(6)] = c__30552__auto__);

return statearr_33346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));

return c__30552__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33352 = arguments.length;
switch (G__33352) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33360 = arguments.length;
switch (G__33360) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33368 = arguments.length;
switch (G__33368) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30552__auto___35367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_33396){
var state_val_33398 = (state_33396[(1)]);
if((state_val_33398 === (7))){
var inst_33387 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33403_35368 = state_33396__$1;
(statearr_33403_35368[(2)] = inst_33387);

(statearr_33403_35368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (1))){
var inst_33369 = null;
var state_33396__$1 = (function (){var statearr_33408 = state_33396;
(statearr_33408[(7)] = inst_33369);

return statearr_33408;
})();
var statearr_33409_35370 = state_33396__$1;
(statearr_33409_35370[(2)] = null);

(statearr_33409_35370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (4))){
var inst_33372 = (state_33396[(8)]);
var inst_33372__$1 = (state_33396[(2)]);
var inst_33373 = (inst_33372__$1 == null);
var inst_33374 = cljs.core.not(inst_33373);
var state_33396__$1 = (function (){var statearr_33415 = state_33396;
(statearr_33415[(8)] = inst_33372__$1);

return statearr_33415;
})();
if(inst_33374){
var statearr_33416_35372 = state_33396__$1;
(statearr_33416_35372[(1)] = (5));

} else {
var statearr_33417_35373 = state_33396__$1;
(statearr_33417_35373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (6))){
var state_33396__$1 = state_33396;
var statearr_33420_35374 = state_33396__$1;
(statearr_33420_35374[(2)] = null);

(statearr_33420_35374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (3))){
var inst_33389 = (state_33396[(2)]);
var inst_33390 = cljs.core.async.close_BANG_(out);
var state_33396__$1 = (function (){var statearr_33426 = state_33396;
(statearr_33426[(9)] = inst_33389);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33396__$1,inst_33390);
} else {
if((state_val_33398 === (2))){
var state_33396__$1 = state_33396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33396__$1,(4),ch);
} else {
if((state_val_33398 === (11))){
var inst_33372 = (state_33396[(8)]);
var inst_33381 = (state_33396[(2)]);
var inst_33369 = inst_33372;
var state_33396__$1 = (function (){var statearr_33439 = state_33396;
(statearr_33439[(7)] = inst_33369);

(statearr_33439[(10)] = inst_33381);

return statearr_33439;
})();
var statearr_33444_35375 = state_33396__$1;
(statearr_33444_35375[(2)] = null);

(statearr_33444_35375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (9))){
var inst_33372 = (state_33396[(8)]);
var state_33396__$1 = state_33396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33396__$1,(11),out,inst_33372);
} else {
if((state_val_33398 === (5))){
var inst_33372 = (state_33396[(8)]);
var inst_33369 = (state_33396[(7)]);
var inst_33376 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33372,inst_33369);
var state_33396__$1 = state_33396;
if(inst_33376){
var statearr_33449_35376 = state_33396__$1;
(statearr_33449_35376[(1)] = (8));

} else {
var statearr_33450_35377 = state_33396__$1;
(statearr_33450_35377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (10))){
var inst_33384 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33454_35379 = state_33396__$1;
(statearr_33454_35379[(2)] = inst_33384);

(statearr_33454_35379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (8))){
var inst_33369 = (state_33396[(7)]);
var tmp33448 = inst_33369;
var inst_33369__$1 = tmp33448;
var state_33396__$1 = (function (){var statearr_33455 = state_33396;
(statearr_33455[(7)] = inst_33369__$1);

return statearr_33455;
})();
var statearr_33456_35381 = state_33396__$1;
(statearr_33456_35381[(2)] = null);

(statearr_33456_35381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_33464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33464[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_33464[(1)] = (1));

return statearr_33464;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_33396){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_33396);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33465){var ex__29305__auto__ = e33465;
var statearr_33466_35387 = state_33396;
(statearr_33466_35387[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_33396[(4)]))){
var statearr_33467_35389 = state_33396;
(statearr_33467_35389[(1)] = cljs.core.first((state_33396[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35394 = state_33396;
state_33396 = G__35394;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_33396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_33396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_33471 = f__30553__auto__();
(statearr_33471[(6)] = c__30552__auto___35367);

return statearr_33471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33477 = arguments.length;
switch (G__33477) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30552__auto___35409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_33539){
var state_val_33540 = (state_33539[(1)]);
if((state_val_33540 === (7))){
var inst_33535 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33563_35414 = state_33539__$1;
(statearr_33563_35414[(2)] = inst_33535);

(statearr_33563_35414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (1))){
var inst_33502 = (new Array(n));
var inst_33503 = inst_33502;
var inst_33504 = (0);
var state_33539__$1 = (function (){var statearr_33574 = state_33539;
(statearr_33574[(7)] = inst_33504);

(statearr_33574[(8)] = inst_33503);

return statearr_33574;
})();
var statearr_33575_35419 = state_33539__$1;
(statearr_33575_35419[(2)] = null);

(statearr_33575_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (4))){
var inst_33507 = (state_33539[(9)]);
var inst_33507__$1 = (state_33539[(2)]);
var inst_33508 = (inst_33507__$1 == null);
var inst_33509 = cljs.core.not(inst_33508);
var state_33539__$1 = (function (){var statearr_33576 = state_33539;
(statearr_33576[(9)] = inst_33507__$1);

return statearr_33576;
})();
if(inst_33509){
var statearr_33578_35425 = state_33539__$1;
(statearr_33578_35425[(1)] = (5));

} else {
var statearr_33581_35426 = state_33539__$1;
(statearr_33581_35426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (15))){
var inst_33529 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33582_35431 = state_33539__$1;
(statearr_33582_35431[(2)] = inst_33529);

(statearr_33582_35431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (13))){
var state_33539__$1 = state_33539;
var statearr_33586_35432 = state_33539__$1;
(statearr_33586_35432[(2)] = null);

(statearr_33586_35432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (6))){
var inst_33504 = (state_33539[(7)]);
var inst_33525 = (inst_33504 > (0));
var state_33539__$1 = state_33539;
if(cljs.core.truth_(inst_33525)){
var statearr_33588_35443 = state_33539__$1;
(statearr_33588_35443[(1)] = (12));

} else {
var statearr_33589_35444 = state_33539__$1;
(statearr_33589_35444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (3))){
var inst_33537 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33539__$1,inst_33537);
} else {
if((state_val_33540 === (12))){
var inst_33503 = (state_33539[(8)]);
var inst_33527 = cljs.core.vec(inst_33503);
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33539__$1,(15),out,inst_33527);
} else {
if((state_val_33540 === (2))){
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33539__$1,(4),ch);
} else {
if((state_val_33540 === (11))){
var inst_33519 = (state_33539[(2)]);
var inst_33520 = (new Array(n));
var inst_33503 = inst_33520;
var inst_33504 = (0);
var state_33539__$1 = (function (){var statearr_33596 = state_33539;
(statearr_33596[(10)] = inst_33519);

(statearr_33596[(7)] = inst_33504);

(statearr_33596[(8)] = inst_33503);

return statearr_33596;
})();
var statearr_33597_35459 = state_33539__$1;
(statearr_33597_35459[(2)] = null);

(statearr_33597_35459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (9))){
var inst_33503 = (state_33539[(8)]);
var inst_33517 = cljs.core.vec(inst_33503);
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33539__$1,(11),out,inst_33517);
} else {
if((state_val_33540 === (5))){
var inst_33507 = (state_33539[(9)]);
var inst_33512 = (state_33539[(11)]);
var inst_33504 = (state_33539[(7)]);
var inst_33503 = (state_33539[(8)]);
var inst_33511 = (inst_33503[inst_33504] = inst_33507);
var inst_33512__$1 = (inst_33504 + (1));
var inst_33513 = (inst_33512__$1 < n);
var state_33539__$1 = (function (){var statearr_33605 = state_33539;
(statearr_33605[(11)] = inst_33512__$1);

(statearr_33605[(12)] = inst_33511);

return statearr_33605;
})();
if(cljs.core.truth_(inst_33513)){
var statearr_33607_35467 = state_33539__$1;
(statearr_33607_35467[(1)] = (8));

} else {
var statearr_33608_35468 = state_33539__$1;
(statearr_33608_35468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (14))){
var inst_33532 = (state_33539[(2)]);
var inst_33533 = cljs.core.async.close_BANG_(out);
var state_33539__$1 = (function (){var statearr_33610 = state_33539;
(statearr_33610[(13)] = inst_33532);

return statearr_33610;
})();
var statearr_33613_35475 = state_33539__$1;
(statearr_33613_35475[(2)] = inst_33533);

(statearr_33613_35475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (10))){
var inst_33523 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33615_35476 = state_33539__$1;
(statearr_33615_35476[(2)] = inst_33523);

(statearr_33615_35476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (8))){
var inst_33512 = (state_33539[(11)]);
var inst_33503 = (state_33539[(8)]);
var tmp33609 = inst_33503;
var inst_33503__$1 = tmp33609;
var inst_33504 = inst_33512;
var state_33539__$1 = (function (){var statearr_33616 = state_33539;
(statearr_33616[(7)] = inst_33504);

(statearr_33616[(8)] = inst_33503__$1);

return statearr_33616;
})();
var statearr_33619_35477 = state_33539__$1;
(statearr_33619_35477[(2)] = null);

(statearr_33619_35477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_33621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33621[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_33621[(1)] = (1));

return statearr_33621;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_33539){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_33539);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33624){var ex__29305__auto__ = e33624;
var statearr_33626_35488 = state_33539;
(statearr_33626_35488[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_33539[(4)]))){
var statearr_33627_35489 = state_33539;
(statearr_33627_35489[(1)] = cljs.core.first((state_33539[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_33539;
state_33539 = G__35496;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_33539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_33539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_33628 = f__30553__auto__();
(statearr_33628[(6)] = c__30552__auto___35409);

return statearr_33628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33633 = arguments.length;
switch (G__33633) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30552__auto___35508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_33690){
var state_val_33691 = (state_33690[(1)]);
if((state_val_33691 === (7))){
var inst_33686 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33693_35517 = state_33690__$1;
(statearr_33693_35517[(2)] = inst_33686);

(statearr_33693_35517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (1))){
var inst_33644 = [];
var inst_33646 = inst_33644;
var inst_33647 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33690__$1 = (function (){var statearr_33696 = state_33690;
(statearr_33696[(7)] = inst_33646);

(statearr_33696[(8)] = inst_33647);

return statearr_33696;
})();
var statearr_33697_35523 = state_33690__$1;
(statearr_33697_35523[(2)] = null);

(statearr_33697_35523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (4))){
var inst_33651 = (state_33690[(9)]);
var inst_33651__$1 = (state_33690[(2)]);
var inst_33652 = (inst_33651__$1 == null);
var inst_33653 = cljs.core.not(inst_33652);
var state_33690__$1 = (function (){var statearr_33701 = state_33690;
(statearr_33701[(9)] = inst_33651__$1);

return statearr_33701;
})();
if(inst_33653){
var statearr_33702_35524 = state_33690__$1;
(statearr_33702_35524[(1)] = (5));

} else {
var statearr_33703_35525 = state_33690__$1;
(statearr_33703_35525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (15))){
var inst_33646 = (state_33690[(7)]);
var inst_33678 = cljs.core.vec(inst_33646);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33690__$1,(18),out,inst_33678);
} else {
if((state_val_33691 === (13))){
var inst_33673 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33704_35526 = state_33690__$1;
(statearr_33704_35526[(2)] = inst_33673);

(statearr_33704_35526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (6))){
var inst_33646 = (state_33690[(7)]);
var inst_33675 = inst_33646.length;
var inst_33676 = (inst_33675 > (0));
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33676)){
var statearr_33708_35531 = state_33690__$1;
(statearr_33708_35531[(1)] = (15));

} else {
var statearr_33709_35538 = state_33690__$1;
(statearr_33709_35538[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (17))){
var inst_33683 = (state_33690[(2)]);
var inst_33684 = cljs.core.async.close_BANG_(out);
var state_33690__$1 = (function (){var statearr_33717 = state_33690;
(statearr_33717[(10)] = inst_33683);

return statearr_33717;
})();
var statearr_33723_35539 = state_33690__$1;
(statearr_33723_35539[(2)] = inst_33684);

(statearr_33723_35539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (3))){
var inst_33688 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33690__$1,inst_33688);
} else {
if((state_val_33691 === (12))){
var inst_33646 = (state_33690[(7)]);
var inst_33666 = cljs.core.vec(inst_33646);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33690__$1,(14),out,inst_33666);
} else {
if((state_val_33691 === (2))){
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33690__$1,(4),ch);
} else {
if((state_val_33691 === (11))){
var inst_33655 = (state_33690[(11)]);
var inst_33646 = (state_33690[(7)]);
var inst_33651 = (state_33690[(9)]);
var inst_33663 = inst_33646.push(inst_33651);
var tmp33727 = inst_33646;
var inst_33646__$1 = tmp33727;
var inst_33647 = inst_33655;
var state_33690__$1 = (function (){var statearr_33729 = state_33690;
(statearr_33729[(12)] = inst_33663);

(statearr_33729[(7)] = inst_33646__$1);

(statearr_33729[(8)] = inst_33647);

return statearr_33729;
})();
var statearr_33730_35563 = state_33690__$1;
(statearr_33730_35563[(2)] = null);

(statearr_33730_35563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (9))){
var inst_33647 = (state_33690[(8)]);
var inst_33659 = cljs.core.keyword_identical_QMARK_(inst_33647,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33690__$1 = state_33690;
var statearr_33731_35568 = state_33690__$1;
(statearr_33731_35568[(2)] = inst_33659);

(statearr_33731_35568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (5))){
var inst_33656 = (state_33690[(13)]);
var inst_33655 = (state_33690[(11)]);
var inst_33647 = (state_33690[(8)]);
var inst_33651 = (state_33690[(9)]);
var inst_33655__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33651) : f.call(null,inst_33651));
var inst_33656__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33655__$1,inst_33647);
var state_33690__$1 = (function (){var statearr_33732 = state_33690;
(statearr_33732[(13)] = inst_33656__$1);

(statearr_33732[(11)] = inst_33655__$1);

return statearr_33732;
})();
if(inst_33656__$1){
var statearr_33734_35571 = state_33690__$1;
(statearr_33734_35571[(1)] = (8));

} else {
var statearr_33735_35572 = state_33690__$1;
(statearr_33735_35572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (14))){
var inst_33655 = (state_33690[(11)]);
var inst_33651 = (state_33690[(9)]);
var inst_33668 = (state_33690[(2)]);
var inst_33669 = [];
var inst_33670 = inst_33669.push(inst_33651);
var inst_33646 = inst_33669;
var inst_33647 = inst_33655;
var state_33690__$1 = (function (){var statearr_33736 = state_33690;
(statearr_33736[(7)] = inst_33646);

(statearr_33736[(14)] = inst_33670);

(statearr_33736[(8)] = inst_33647);

(statearr_33736[(15)] = inst_33668);

return statearr_33736;
})();
var statearr_33737_35585 = state_33690__$1;
(statearr_33737_35585[(2)] = null);

(statearr_33737_35585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (16))){
var state_33690__$1 = state_33690;
var statearr_33738_35592 = state_33690__$1;
(statearr_33738_35592[(2)] = null);

(statearr_33738_35592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (10))){
var inst_33661 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33661)){
var statearr_33740_35599 = state_33690__$1;
(statearr_33740_35599[(1)] = (11));

} else {
var statearr_33741_35600 = state_33690__$1;
(statearr_33741_35600[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (18))){
var inst_33680 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33742_35603 = state_33690__$1;
(statearr_33742_35603[(2)] = inst_33680);

(statearr_33742_35603[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (8))){
var inst_33656 = (state_33690[(13)]);
var state_33690__$1 = state_33690;
var statearr_33743_35605 = state_33690__$1;
(statearr_33743_35605[(2)] = inst_33656);

(statearr_33743_35605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29302__auto__ = null;
var cljs$core$async$state_machine__29302__auto____0 = (function (){
var statearr_33745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33745[(0)] = cljs$core$async$state_machine__29302__auto__);

(statearr_33745[(1)] = (1));

return statearr_33745;
});
var cljs$core$async$state_machine__29302__auto____1 = (function (state_33690){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_33690);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e33746){var ex__29305__auto__ = e33746;
var statearr_33747_35614 = state_33690;
(statearr_33747_35614[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_33690[(4)]))){
var statearr_33749_35615 = state_33690;
(statearr_33749_35615[(1)] = cljs.core.first((state_33690[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35619 = state_33690;
state_33690 = G__35619;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
cljs$core$async$state_machine__29302__auto__ = function(state_33690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29302__auto____1.call(this,state_33690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29302__auto____0;
cljs$core$async$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29302__auto____1;
return cljs$core$async$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_33751 = f__30553__auto__();
(statearr_33751[(6)] = c__30552__auto___35508);

return statearr_33751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
