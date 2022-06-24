goog.provide('rescope.interop');
/**
 * Private implementation of extend-class, expecting only JavaScript types. This
 *   is simply a way to emulate the more modern class-based JS while still using
 *   its prototype-based subclassing.
 * 
 *   The primary goal was to emulate a call to super() in the constructor. This is
 *   a requirement when creating custom HTML components.
 */
rescope.interop.extend_class_STAR_ = (function rescope$interop$extend_class_STAR_(parent,props_obj,construct){
var child = (function rescope$interop$extend_class_STAR__$_child_STAR_(){
var obj = Reflect.construct(parent,[],rescope$interop$extend_class_STAR__$_child_STAR_);
if(cljs.core.truth_(construct)){
(construct.cljs$core$IFn$_invoke$arity$1 ? construct.cljs$core$IFn$_invoke$arity$1(obj) : construct.call(null,obj));
} else {
}

return obj;
});
var prototype = Object.create(parent.prototype,(function (){var or__5045__auto__ = props_obj;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})());
(child.prototype = prototype);

return child;
});
/**
 * Convert a map of properties into a properties object that can be consumed by
 *   extend-class*.
 */
rescope.interop.js_props = (function rescope$interop$js_props(props){
var wrap_method = (function (f){
return (function() { 
var G__44888__delegate = function (args){
var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,args) : f.call(null,this$,args));
};
var G__44888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44889__i = 0, G__44889__a = new Array(arguments.length -  0);
while (G__44889__i < G__44889__a.length) {G__44889__a[G__44889__i] = arguments[G__44889__i + 0]; ++G__44889__i;}
  args = new cljs.core.IndexedSeq(G__44889__a,0,null);
} 
return G__44888__delegate.call(this,args);};
G__44888.cljs$lang$maxFixedArity = 0;
G__44888.cljs$lang$applyTo = (function (arglist__44890){
var args = cljs.core.seq(arglist__44890);
return G__44888__delegate(args);
});
G__44888.cljs$core$IFn$_invoke$arity$variadic = G__44888__delegate;
return G__44888;
})()
;
});
var G__44731 = (function (){var iter__5522__auto__ = (function rescope$interop$js_props_$_iter__44732(s__44733){
return (new cljs.core.LazySeq(null,(function (){
var s__44733__$1 = s__44733;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44733__$1);
if(temp__5804__auto__){
var s__44733__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44733__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__44733__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__44735 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__44734 = (0);
while(true){
if((i__44734 < size__5521__auto__)){
var vec__44747 = cljs.core._nth(c__5520__auto__,i__44734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44747,(1),null);
cljs.core.chunk_append(b__44735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.fn_QMARK_(v))?wrap_method(v):v)], null)], null));

var G__44891 = (i__44734 + (1));
i__44734 = G__44891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44735),rescope$interop$js_props_$_iter__44732(cljs.core.chunk_rest(s__44733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44735),null);
}
} else {
var vec__44763 = cljs.core.first(s__44733__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44763,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.fn_QMARK_(v))?wrap_method(v):v)], null)], null),rescope$interop$js_props_$_iter__44732(cljs.core.rest(s__44733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(props);
})();
var G__44731__$1 = (((G__44731 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44731));
if((G__44731__$1 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__44731__$1);
}
});
/**
 * Extend the prototype of a `parent` class with a map of object `props`.
 */
rescope.interop.extend_class = (function rescope$interop$extend_class(var_args){
var args__5774__auto__ = [];
var len__5768__auto___44892 = arguments.length;
var i__5769__auto___44893 = (0);
while(true){
if((i__5769__auto___44893 < len__5768__auto___44892)){
args__5774__auto__.push((arguments[i__5769__auto___44893]));

var G__44894 = (i__5769__auto___44893 + (1));
i__5769__auto___44893 = G__44894;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic = (function (parent,p__44793){
var vec__44796 = p__44793;
var map__44799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44796,(0),null);
var map__44799__$1 = cljs.core.__destructure_map(map__44799);
var props = map__44799__$1;
var construct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44799__$1,new cljs.core.Keyword(null,"construct","construct",692547932));
return rescope.interop.extend_class_STAR_(parent,rescope.interop.js_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"construct","construct",692547932))),construct);
}));

(rescope.interop.extend_class.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.interop.extend_class.cljs$lang$applyTo = (function (seq44779){
var G__44780 = cljs.core.first(seq44779);
var seq44779__$1 = cljs.core.next(seq44779);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44780,seq44779__$1);
}));

/**
 * Define a custom element based on a `tag` name. Can optionally take a map of
 *   `props` to refine the prototype of the new HTMLElement subclass.
 */
rescope.interop.define_element_BANG_ = (function rescope$interop$define_element_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___44898 = arguments.length;
var i__5769__auto___44899 = (0);
while(true){
if((i__5769__auto___44899 < len__5768__auto___44898)){
args__5774__auto__.push((arguments[i__5769__auto___44899]));

var G__44900 = (i__5769__auto___44899 + (1));
i__5769__auto___44899 = G__44900;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return rescope.interop.define_element_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(rescope.interop.define_element_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (tag,p__44812){
var vec__44813 = p__44812;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44813,(0),null);
if((void 0 === window.customElements.get(tag))){
var element = rescope.interop.extend_class.cljs$core$IFn$_invoke$arity$variadic(HTMLElement,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
return window.customElements.define(tag,element);
} else {
return null;
}
}));

(rescope.interop.define_element_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rescope.interop.define_element_BANG_.cljs$lang$applyTo = (function (seq44808){
var G__44809 = cljs.core.first(seq44808);
var seq44808__$1 = cljs.core.next(seq44808);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44809,seq44808__$1);
}));

/**
 * Create a Blob object from a `coll` of content and a `type` (from `opts`).
 */
rescope.interop.blob = (function rescope$interop$blob(coll,p__44816){
var map__44819 = p__44816;
var map__44819__$1 = cljs.core.__destructure_map(map__44819);
var opts = map__44819__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44819__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (new Blob(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,coll),cljs.core.clj__GT_js(opts)));
});
/**
 * Wrap an atom `a` holding an object URL to auto-revoke the older objects.
 */
rescope.interop.auto_revoked = (function rescope$interop$auto_revoked(a){
return cljs.core.add_watch(a,new cljs.core.Keyword(null,"change","change",-1163046502),(function (k,r,o,n){
if(cljs.core.truth_((function (){var and__5043__auto__ = o;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o,n);
} else {
return and__5043__auto__;
}
})())){
return URL.revokeObjectURL(o);
} else {
return null;
}
}));
});
/**
 * Create (or reuse) an object URL for a custom Blob based on `coll` and `opts`.
 *   Use together with auto-revoked to properly garbage-collect dangling objects.
 */
rescope.interop.blob_url = cljs.core.memoize((function (coll,opts){
return URL.createObjectURL(rescope.interop.blob(coll,opts));
}));
/**
 * Wrapping XMLHttpRequest as a function to make it more accessible.
 */
rescope.interop.request = (function rescope$interop$request(p__44823){
var map__44824 = p__44823;
var map__44824__$1 = cljs.core.__destructure_map(map__44824);
var opts = map__44824__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44824__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44824__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44824__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var on_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44824__$1,new cljs.core.Keyword(null,"on-progress","on-progress",1196110410));
var xhr = (new XMLHttpRequest());
xhr.open(method,url);

var iter__5522__auto___44904 = (function rescope$interop$request_$_iter__44831(s__44832){
return (new cljs.core.LazySeq(null,(function (){
var s__44832__$1 = s__44832;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44832__$1);
if(temp__5804__auto__){
var s__44832__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44832__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__44832__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__44834 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__44833 = (0);
while(true){
if((i__44833 < size__5521__auto__)){
var vec__44850 = cljs.core._nth(c__5520__auto__,i__44833);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(1),null);
cljs.core.chunk_append(b__44834,xhr.setRequestHeader(k,v));

var G__44906 = (i__44833 + (1));
i__44833 = G__44906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44834),rescope$interop$request_$_iter__44831(cljs.core.chunk_rest(s__44832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44834),null);
}
} else {
var vec__44853 = cljs.core.first(s__44832__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44853,(1),null);
return cljs.core.cons(xhr.setRequestHeader(k,v),rescope$interop$request_$_iter__44831(cljs.core.rest(s__44832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__5522__auto___44904(headers);

if(cljs.core.truth_(on_progress)){
(xhr.onprogress = on_progress);
} else {
}

return xhr.send();
});
if((typeof rescope !== 'undefined') && (typeof rescope.interop !== 'undefined') && (typeof rescope.interop.event_data !== 'undefined')){
} else {
rescope.interop.event_data = (function (){var method_table__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44874 = cljs.core.get_global_hierarchy;
return (fexpr__44874.cljs$core$IFn$_invoke$arity$0 ? fexpr__44874.cljs$core$IFn$_invoke$arity$0() : fexpr__44874.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rescope.interop","event-data"),(function (p1__44867_SHARP_){
return p1__44867_SHARP_.type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
rescope.interop.event_data.cljs$core$IMultiFn$_add_method$arity$3(null,"progress",(function (event){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),event.loaded,new cljs.core.Keyword(null,"total","total",1916810418),(cljs.core.truth_(event.lengthComputable)?event.total:null)], null);
}));

//# sourceMappingURL=rescope.interop.js.map
