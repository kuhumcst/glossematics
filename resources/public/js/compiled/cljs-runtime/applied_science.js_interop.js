goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5774__auto__ = [];
var len__5768__auto___41414 = arguments.length;
var i__5769__auto___41415 = (0);
while(true){
if((i__5769__auto___41415 < len__5768__auto___41414)){
args__5774__auto__.push((arguments[i__5769__auto___41415]));

var G__41421 = (i__5769__auto___41415 + (1));
i__5769__auto___41415 = G__41421;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__40980_41427 = keyvals;
var vec__40981_41428 = G__40980_41427;
var seq__40982_41429 = cljs.core.seq(vec__40981_41428);
var first__40983_41430 = cljs.core.first(seq__40982_41429);
var seq__40982_41431__$1 = cljs.core.next(seq__40982_41429);
var k_41432 = first__40983_41430;
var first__40983_41433__$1 = cljs.core.first(seq__40982_41431__$1);
var seq__40982_41434__$2 = cljs.core.next(seq__40982_41431__$1);
var v_41435 = first__40983_41433__$1;
var keyvals_41436__$1 = seq__40982_41434__$2;
var G__40980_41437__$1 = G__40980_41427;
while(true){
var vec__40984_41438 = G__40980_41437__$1;
var seq__40985_41439 = cljs.core.seq(vec__40984_41438);
var first__40986_41440 = cljs.core.first(seq__40985_41439);
var seq__40985_41441__$1 = cljs.core.next(seq__40985_41439);
var k_41442__$1 = first__40986_41440;
var first__40986_41443__$1 = cljs.core.first(seq__40985_41441__$1);
var seq__40985_41444__$2 = cljs.core.next(seq__40985_41441__$1);
var v_41445__$1 = first__40986_41443__$1;
var keyvals_41446__$2 = seq__40985_41444__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_41442__$1)] = v_41445__$1);

if(keyvals_41446__$2){
var G__41450 = keyvals_41446__$2;
G__40980_41437__$1 = G__41450;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq40975){
var G__40976 = cljs.core.first(seq40975);
var seq40975__$1 = cljs.core.next(seq40975);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40976,seq40975__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__40994 = arguments.length;
switch (G__40994) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj41001 = obj;
var k41002 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41003 = obj41001;
return (((!((obj41003 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41002,obj41003)));
})()){
return (obj41001[k41002]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj41006 = obj;
var k41007 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41008 = obj41006;
return (((!((obj41008 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41007,obj41008)));
})()){
return (obj41006[k41007]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__41012 = arguments.length;
switch (G__41012) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj41025 = self__.obj;
var k41026 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41027 = obj41025;
return (((!((obj41027 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41026,obj41027)));
})()){
return (obj41025[k41026]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj41032 = self__.obj;
var k41033 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41034 = obj41032;
return (((!((obj41034 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41033,obj41034)));
})()){
return (obj41032[k41033]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___41479 = arguments.length;
var i__5769__auto___41480 = (0);
while(true){
if((i__5769__auto___41480 < len__5768__auto___41479)){
args__5774__auto__.push((arguments[i__5769__auto___41480]));

var G__41481 = (i__5769__auto___41480 + (1));
i__5769__auto___41480 = G__41481;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__41058 = keyvals;
var vec__41059 = G__41058;
var seq__41060 = cljs.core.seq(vec__41059);
var first__41061 = cljs.core.first(seq__41060);
var seq__41060__$1 = cljs.core.next(seq__41060);
var k = first__41061;
var first__41061__$1 = cljs.core.first(seq__41060__$1);
var seq__41060__$2 = cljs.core.next(seq__41060__$1);
var v = first__41061__$1;
var kvs = seq__41060__$2;
var G__41058__$1 = G__41058;
while(true){
var vec__41063 = G__41058__$1;
var seq__41064 = cljs.core.seq(vec__41063);
var first__41065 = cljs.core.first(seq__41064);
var seq__41064__$1 = cljs.core.next(seq__41064);
var k__$1 = first__41065;
var first__41065__$1 = cljs.core.first(seq__41064__$1);
var seq__41064__$2 = cljs.core.next(seq__41064__$1);
var v__$1 = first__41065__$1;
var kvs__$1 = seq__41064__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__41488 = kvs__$1;
G__41058__$1 = G__41488;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq41045){
var G__41046 = cljs.core.first(seq41045);
var seq41045__$1 = cljs.core.next(seq41045);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41046,seq41045__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___41492 = arguments.length;
var i__5769__auto___41493 = (0);
while(true){
if((i__5769__auto___41493 < len__5768__auto___41492)){
args__5774__auto__.push((arguments[i__5769__auto___41493]));

var G__41496 = (i__5769__auto___41493 + (1));
i__5769__auto___41493 = G__41496;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq41075){
var G__41076 = cljs.core.first(seq41075);
var seq41075__$1 = cljs.core.next(seq41075);
var G__41077 = cljs.core.first(seq41075__$1);
var seq41075__$2 = cljs.core.next(seq41075__$1);
var G__41078 = cljs.core.first(seq41075__$2);
var seq41075__$3 = cljs.core.next(seq41075__$2);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41076,G__41077,G__41078,seq41075__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___41507 = arguments.length;
var i__5769__auto___41508 = (0);
while(true){
if((i__5769__auto___41508 < len__5768__auto___41507)){
args__5774__auto__.push((arguments[i__5769__auto___41508]));

var G__41510 = (i__5769__auto___41508 + (1));
i__5769__auto___41508 = G__41510;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq41106){
var G__41107 = cljs.core.first(seq41106);
var seq41106__$1 = cljs.core.next(seq41106);
var G__41108 = cljs.core.first(seq41106__$1);
var seq41106__$2 = cljs.core.next(seq41106__$1);
var G__41109 = cljs.core.first(seq41106__$2);
var seq41106__$3 = cljs.core.next(seq41106__$2);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41107,G__41108,G__41109,seq41106__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__41145 = arguments.length;
switch (G__41145) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5793__auto__ = [];
var len__5768__auto___41522 = arguments.length;
var i__5769__auto___41527 = (0);
while(true){
if((i__5769__auto___41527 < len__5768__auto___41522)){
args_arr__5793__auto__.push((arguments[i__5769__auto___41527]));

var G__41529 = (i__5769__auto___41527 + (1));
i__5769__auto___41527 = G__41529;
continue;
} else {
}
break;
}

var argseq__5794__auto__ = (new cljs.core.IndexedSeq(args_arr__5793__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5794__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__41159_41534 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__41160_41535 = null;
var count__41163_41536 = (0);
var i__41164_41537 = (0);
while(true){
if((i__41164_41537 < count__41163_41536)){
var k_41540 = chunk__41160_41535.cljs$core$IIndexed$_nth$arity$2(null,i__41164_41537);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41540,applied_science.js_interop.unchecked_get(x,k_41540)], 0));


var G__41541 = seq__41159_41534;
var G__41542 = chunk__41160_41535;
var G__41543 = count__41163_41536;
var G__41544 = (i__41164_41537 + (1));
seq__41159_41534 = G__41541;
chunk__41160_41535 = G__41542;
count__41163_41536 = G__41543;
i__41164_41537 = G__41544;
continue;
} else {
var temp__5804__auto___41545 = cljs.core.seq(seq__41159_41534);
if(temp__5804__auto___41545){
var seq__41159_41547__$1 = temp__5804__auto___41545;
if(cljs.core.chunked_seq_QMARK_(seq__41159_41547__$1)){
var c__5567__auto___41548 = cljs.core.chunk_first(seq__41159_41547__$1);
var G__41549 = cljs.core.chunk_rest(seq__41159_41547__$1);
var G__41550 = c__5567__auto___41548;
var G__41551 = cljs.core.count(c__5567__auto___41548);
var G__41552 = (0);
seq__41159_41534 = G__41549;
chunk__41160_41535 = G__41550;
count__41163_41536 = G__41551;
i__41164_41537 = G__41552;
continue;
} else {
var k_41555 = cljs.core.first(seq__41159_41547__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41555,applied_science.js_interop.unchecked_get(x,k_41555)], 0));


var G__41559 = cljs.core.next(seq__41159_41547__$1);
var G__41560 = null;
var G__41561 = (0);
var G__41562 = (0);
seq__41159_41534 = G__41559;
chunk__41160_41535 = G__41560;
count__41163_41536 = G__41561;
i__41164_41537 = G__41562;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq41139){
var G__41140 = cljs.core.first(seq41139);
var seq41139__$1 = cljs.core.next(seq41139);
var G__41142 = cljs.core.first(seq41139__$1);
var seq41139__$2 = cljs.core.next(seq41139__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41140,G__41142,seq41139__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__41204 = array;
G__41204.push(x);

return G__41204;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__41213 = array;
G__41213.unshift(x);

return G__41213;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5774__auto__ = [];
var len__5768__auto___41580 = arguments.length;
var i__5769__auto___41582 = (0);
while(true){
if((i__5769__auto___41582 < len__5768__auto___41580)){
args__5774__auto__.push((arguments[i__5769__auto___41582]));

var G__41583 = (i__5769__auto___41582 + (1));
i__5769__auto___41582 = G__41583;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj41237 = obj;
var k41238 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41239 = obj41237;
return (((!((obj41239 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41238,obj41239)));
})()){
return (obj41237[k41238]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq41222){
var G__41223 = cljs.core.first(seq41222);
var seq41222__$1 = cljs.core.next(seq41222);
var G__41224 = cljs.core.first(seq41222__$1);
var seq41222__$2 = cljs.core.next(seq41222__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41223,G__41224,seq41222__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj41251 = obj;
var k41252 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj41253 = obj41251;
return (((!((obj41253 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k41252,obj41253)));
})()){
return (obj41251[k41252]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5774__auto__ = [];
var len__5768__auto___41596 = arguments.length;
var i__5769__auto___41597 = (0);
while(true){
if((i__5769__auto___41597 < len__5768__auto___41596)){
args__5774__auto__.push((arguments[i__5769__auto___41597]));

var G__41599 = (i__5769__auto___41597 + (1));
i__5769__auto___41597 = G__41599;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq41261){
var G__41262 = cljs.core.first(seq41261);
var seq41261__$1 = cljs.core.next(seq41261);
var G__41264 = cljs.core.first(seq41261__$1);
var seq41261__$2 = cljs.core.next(seq41261__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41262,G__41264,seq41261__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5774__auto__ = [];
var len__5768__auto___41606 = arguments.length;
var i__5769__auto___41607 = (0);
while(true){
if((i__5769__auto___41607 < len__5768__auto___41606)){
args__5774__auto__.push((arguments[i__5769__auto___41607]));

var G__41608 = (i__5769__auto___41607 + (1));
i__5769__auto___41607 = G__41608;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__41309_41610 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__41310_41611 = null;
var count__41311_41612 = (0);
var i__41312_41613 = (0);
while(true){
if((i__41312_41613 < count__41311_41612)){
var vec__41365_41616 = chunk__41310_41611.cljs$core$IIndexed$_nth$arity$2(null,i__41312_41613);
var k_41617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41365_41616,(0),null);
var v_41618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41365_41616,(1),null);
var obj41368_41621 = obj;
var obj41371_41622 = (((!((obj41368_41621 == null))))?obj41368_41621:({}));
(obj41371_41622[applied_science.js_interop.impl.wrap_key(k_41617)] = v_41618);



var G__41624 = seq__41309_41610;
var G__41625 = chunk__41310_41611;
var G__41626 = count__41311_41612;
var G__41627 = (i__41312_41613 + (1));
seq__41309_41610 = G__41624;
chunk__41310_41611 = G__41625;
count__41311_41612 = G__41626;
i__41312_41613 = G__41627;
continue;
} else {
var temp__5804__auto___41629 = cljs.core.seq(seq__41309_41610);
if(temp__5804__auto___41629){
var seq__41309_41630__$1 = temp__5804__auto___41629;
if(cljs.core.chunked_seq_QMARK_(seq__41309_41630__$1)){
var c__5567__auto___41634 = cljs.core.chunk_first(seq__41309_41630__$1);
var G__41635 = cljs.core.chunk_rest(seq__41309_41630__$1);
var G__41636 = c__5567__auto___41634;
var G__41637 = cljs.core.count(c__5567__auto___41634);
var G__41638 = (0);
seq__41309_41610 = G__41635;
chunk__41310_41611 = G__41636;
count__41311_41612 = G__41637;
i__41312_41613 = G__41638;
continue;
} else {
var vec__41381_41641 = cljs.core.first(seq__41309_41630__$1);
var k_41642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41381_41641,(0),null);
var v_41643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41381_41641,(1),null);
var obj41385_41644 = obj;
var obj41387_41646 = (((!((obj41385_41644 == null))))?obj41385_41644:({}));
(obj41387_41646[applied_science.js_interop.impl.wrap_key(k_41642)] = v_41643);



var G__41649 = cljs.core.next(seq__41309_41630__$1);
var G__41650 = null;
var G__41651 = (0);
var G__41652 = (0);
seq__41309_41610 = G__41649;
chunk__41310_41611 = G__41650;
count__41311_41612 = G__41651;
i__41312_41613 = G__41652;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq41289){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41289));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
