goog.provide('kitchen_async.promise');
kitchen_async.promise._PERCENT_promise_impl = (function (){var init = (((typeof Promise !== 'undefined'))?Promise:goog.Promise);
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(init);
})();
kitchen_async.promise.promise_impl = (function kitchen_async$promise$promise_impl(){
return cljs.core.deref(kitchen_async.promise._PERCENT_promise_impl);
});
kitchen_async.promise.set_promise_impl_BANG_ = (function kitchen_async$promise$set_promise_impl_BANG_(impl){
return cljs.core.reset_BANG_(kitchen_async.promise._PERCENT_promise_impl,impl);
});
kitchen_async.promise.resolve = (function kitchen_async$promise$resolve(x){
var p = kitchen_async.promise.promise_impl();
return (new p((function (resolve){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(x) : resolve.call(null,x));
})));
});
kitchen_async.promise.reject = (function kitchen_async$promise$reject(x){
var p = kitchen_async.promise.promise_impl();
return (new p((function (_,reject){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(x) : reject.call(null,x));
})));
});
kitchen_async.promise.then = (function kitchen_async$promise$then(var_args){
var G__40991 = arguments.length;
switch (G__40991) {
case 2:
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return (kitchen_async.promise.__GT_promise.cljs$core$IFn$_invoke$arity$1 ? kitchen_async.promise.__GT_promise.cljs$core$IFn$_invoke$arity$1(p) : kitchen_async.promise.__GT_promise.call(null,p)).then((function (x){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}));
}));

(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,g){
return (kitchen_async.promise.__GT_promise.cljs$core$IFn$_invoke$arity$1 ? kitchen_async.promise.__GT_promise.cljs$core$IFn$_invoke$arity$1(p) : kitchen_async.promise.__GT_promise.call(null,p)).then((function (x){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}),(function (x){
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
}));
}));

(kitchen_async.promise.then.cljs$lang$maxFixedArity = 3);

kitchen_async.promise.catch_STAR_ = (function kitchen_async$promise$catch_STAR_(p,f){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$3(p,cljs.core.identity,f);
});
kitchen_async.promise.finally_STAR_ = (function kitchen_async$promise$finally_STAR_(p,f){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$3(p,f,f);
});
kitchen_async.promise.all = (function kitchen_async$promise$all(ps){
return goog.Promise.all(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(kitchen_async.promise.__GT_promise,ps)));
});
kitchen_async.promise.race = (function kitchen_async$promise$race(ps){
return goog.Promise.race(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(kitchen_async.promise.__GT_promise,ps)));
});
kitchen_async.promise.timeout = (function kitchen_async$promise$timeout(var_args){
var G__41018 = arguments.length;
switch (G__41018) {
case 1:
return kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$1 = (function (ms){
return kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$2(ms,null);
}));

(kitchen_async.promise.timeout.cljs$core$IFn$_invoke$arity$2 = (function (ms,v){
var p__40813__auto__ = kitchen_async.promise.promise_impl();
return (new p__40813__auto__((function (resolve){
return setTimeout((function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
}),ms);
})));
}));

(kitchen_async.promise.timeout.cljs$lang$maxFixedArity = 2);

(goog.Promise.prototype.kitchen_async$protocols$promisable$Promisable$ = cljs.core.PROTOCOL_SENTINEL);

(goog.Promise.prototype.kitchen_async$protocols$promisable$Promisable$__GT_promise_STAR_$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(kitchen_async.protocols.promisable.Promisable["_"] = true);

(kitchen_async.protocols.promisable.__GT_promise_STAR_["_"] = (function (x){
return kitchen_async.promise.resolve(x);
}));
if((typeof Promise !== 'undefined')){
(Promise.prototype.kitchen_async$protocols$promisable$Promisable$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.kitchen_async$protocols$promisable$Promisable$__GT_promise_STAR_$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));
} else {
}
kitchen_async.promise.__GT_promise = (function kitchen_async$promise$__GT_promise(x){
return kitchen_async.protocols.promisable.__GT_promise_STAR_(x);
});
/**
 * Given a fn that takes a callback fn as its last arg, and returns
 *   a modified version of that fn that returns a promise instead of
 *   calling the callback
 */
kitchen_async.promise.promisify = (function kitchen_async$promise$promisify(f){
return (function() { 
var G__41081__delegate = function (args){
var p__40813__auto__ = kitchen_async.promise.promise_impl();
return (new p__40813__auto__((function (resolve,reject){
var callback = (function kitchen_async$promise$promisify_$_callback(err,val){
if(cljs.core.truth_(err)){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(val) : resolve.call(null,val));
}
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback], null)));
})));
};
var G__41081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41088__i = 0, G__41088__a = new Array(arguments.length -  0);
while (G__41088__i < G__41088__a.length) {G__41088__a[G__41088__i] = arguments[G__41088__i + 0]; ++G__41088__i;}
  args = new cljs.core.IndexedSeq(G__41088__a,0,null);
} 
return G__41081__delegate.call(this,args);};
G__41081.cljs$lang$maxFixedArity = 0;
G__41081.cljs$lang$applyTo = (function (arglist__41089){
var args = cljs.core.seq(arglist__41089);
return G__41081__delegate(args);
});
G__41081.cljs$core$IFn$_invoke$arity$variadic = G__41081__delegate;
return G__41081;
})()
;
});

//# sourceMappingURL=kitchen_async.promise.js.map
