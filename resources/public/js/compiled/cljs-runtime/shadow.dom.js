goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35675 = (function (this$){
var x__5392__auto__ = (((this$ == null))?null:this$);
var m__5393__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5393__auto__.call(null,this$));
} else {
var m__5391__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35675(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35676 = (function (this$){
var x__5392__auto__ = (((this$ == null))?null:this$);
var m__5393__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return (m__5393__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5393__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5393__auto__.call(null,this$));
} else {
var m__5391__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35676(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34279 = coll;
var G__34280 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34279,G__34280) : shadow.dom.lazy_native_coll_seq.call(null,G__34279,G__34280));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write(writer__5330__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34324 = arguments.length;
switch (G__34324) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34336 = arguments.length;
switch (G__34336) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34350 = arguments.length;
switch (G__34350) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34368 = arguments.length;
switch (G__34368) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34384 = arguments.length;
switch (G__34384) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34407 = arguments.length;
switch (G__34407) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34420){if((e34420 instanceof Object)){
var e = e34420;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34420;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34440 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34441 = null;
var count__34442 = (0);
var i__34443 = (0);
while(true){
if((i__34443 < count__34442)){
var el = chunk__34441.cljs$core$IIndexed$_nth$arity$2(null,i__34443);
var handler_35688__$1 = ((function (seq__34440,chunk__34441,count__34442,i__34443,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34440,chunk__34441,count__34442,i__34443,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35688__$1);


var G__35689 = seq__34440;
var G__35690 = chunk__34441;
var G__35691 = count__34442;
var G__35692 = (i__34443 + (1));
seq__34440 = G__35689;
chunk__34441 = G__35690;
count__34442 = G__35691;
i__34443 = G__35692;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34440);
if(temp__5804__auto__){
var seq__34440__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34440__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__34440__$1);
var G__35693 = cljs.core.chunk_rest(seq__34440__$1);
var G__35694 = c__5567__auto__;
var G__35695 = cljs.core.count(c__5567__auto__);
var G__35696 = (0);
seq__34440 = G__35693;
chunk__34441 = G__35694;
count__34442 = G__35695;
i__34443 = G__35696;
continue;
} else {
var el = cljs.core.first(seq__34440__$1);
var handler_35697__$1 = ((function (seq__34440,chunk__34441,count__34442,i__34443,el,seq__34440__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34440,chunk__34441,count__34442,i__34443,el,seq__34440__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35697__$1);


var G__35698 = cljs.core.next(seq__34440__$1);
var G__35699 = null;
var G__35700 = (0);
var G__35701 = (0);
seq__34440 = G__35698;
chunk__34441 = G__35699;
count__34442 = G__35700;
i__34443 = G__35701;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34466 = arguments.length;
switch (G__34466) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34472 = cljs.core.seq(events);
var chunk__34473 = null;
var count__34474 = (0);
var i__34475 = (0);
while(true){
if((i__34475 < count__34474)){
var vec__34491 = chunk__34473.cljs$core$IIndexed$_nth$arity$2(null,i__34475);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34491,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35714 = seq__34472;
var G__35715 = chunk__34473;
var G__35716 = count__34474;
var G__35717 = (i__34475 + (1));
seq__34472 = G__35714;
chunk__34473 = G__35715;
count__34474 = G__35716;
i__34475 = G__35717;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34472);
if(temp__5804__auto__){
var seq__34472__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34472__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__34472__$1);
var G__35722 = cljs.core.chunk_rest(seq__34472__$1);
var G__35723 = c__5567__auto__;
var G__35724 = cljs.core.count(c__5567__auto__);
var G__35725 = (0);
seq__34472 = G__35722;
chunk__34473 = G__35723;
count__34474 = G__35724;
i__34475 = G__35725;
continue;
} else {
var vec__34505 = cljs.core.first(seq__34472__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35728 = cljs.core.next(seq__34472__$1);
var G__35729 = null;
var G__35730 = (0);
var G__35731 = (0);
seq__34472 = G__35728;
chunk__34473 = G__35729;
count__34474 = G__35730;
i__34475 = G__35731;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34510 = cljs.core.seq(styles);
var chunk__34511 = null;
var count__34512 = (0);
var i__34513 = (0);
while(true){
if((i__34513 < count__34512)){
var vec__34525 = chunk__34511.cljs$core$IIndexed$_nth$arity$2(null,i__34513);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35736 = seq__34510;
var G__35737 = chunk__34511;
var G__35738 = count__34512;
var G__35739 = (i__34513 + (1));
seq__34510 = G__35736;
chunk__34511 = G__35737;
count__34512 = G__35738;
i__34513 = G__35739;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34510);
if(temp__5804__auto__){
var seq__34510__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34510__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__34510__$1);
var G__35742 = cljs.core.chunk_rest(seq__34510__$1);
var G__35743 = c__5567__auto__;
var G__35744 = cljs.core.count(c__5567__auto__);
var G__35745 = (0);
seq__34510 = G__35742;
chunk__34511 = G__35743;
count__34512 = G__35744;
i__34513 = G__35745;
continue;
} else {
var vec__34529 = cljs.core.first(seq__34510__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34529,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35750 = cljs.core.next(seq__34510__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__34510 = G__35750;
chunk__34511 = G__35751;
count__34512 = G__35752;
i__34513 = G__35753;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34538_35758 = key;
var G__34538_35759__$1 = (((G__34538_35758 instanceof cljs.core.Keyword))?G__34538_35758.fqn:null);
switch (G__34538_35759__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35767 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35767,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35767,"aria-");
}
})())){
el.setAttribute(ks_35767,value);
} else {
(el[ks_35767] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34589){
var map__34591 = p__34589;
var map__34591__$1 = cljs.core.__destructure_map(map__34591);
var props = map__34591__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34591__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34593 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34596 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34596,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34596;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34606 = arguments.length;
switch (G__34606) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34622){
var vec__34624 = p__34622;
var seq__34625 = cljs.core.seq(vec__34624);
var first__34626 = cljs.core.first(seq__34625);
var seq__34625__$1 = cljs.core.next(seq__34625);
var nn = first__34626;
var first__34626__$1 = cljs.core.first(seq__34625__$1);
var seq__34625__$2 = cljs.core.next(seq__34625__$1);
var np = first__34626__$1;
var nc = seq__34625__$2;
var node = vec__34624;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34633 = nn;
var G__34634 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34633,G__34634) : create_fn.call(null,G__34633,G__34634));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34635 = nn;
var G__34636 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34635,G__34636) : create_fn.call(null,G__34635,G__34636));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34643 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34643,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34643,(1),null);
var seq__34646_35781 = cljs.core.seq(node_children);
var chunk__34647_35782 = null;
var count__34648_35783 = (0);
var i__34649_35784 = (0);
while(true){
if((i__34649_35784 < count__34648_35783)){
var child_struct_35785 = chunk__34647_35782.cljs$core$IIndexed$_nth$arity$2(null,i__34649_35784);
var children_35786 = shadow.dom.dom_node(child_struct_35785);
if(cljs.core.seq_QMARK_(children_35786)){
var seq__34690_35791 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35786));
var chunk__34692_35792 = null;
var count__34693_35793 = (0);
var i__34694_35794 = (0);
while(true){
if((i__34694_35794 < count__34693_35793)){
var child_35796 = chunk__34692_35792.cljs$core$IIndexed$_nth$arity$2(null,i__34694_35794);
if(cljs.core.truth_(child_35796)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35796);


var G__35801 = seq__34690_35791;
var G__35802 = chunk__34692_35792;
var G__35803 = count__34693_35793;
var G__35804 = (i__34694_35794 + (1));
seq__34690_35791 = G__35801;
chunk__34692_35792 = G__35802;
count__34693_35793 = G__35803;
i__34694_35794 = G__35804;
continue;
} else {
var G__35805 = seq__34690_35791;
var G__35806 = chunk__34692_35792;
var G__35807 = count__34693_35793;
var G__35808 = (i__34694_35794 + (1));
seq__34690_35791 = G__35805;
chunk__34692_35792 = G__35806;
count__34693_35793 = G__35807;
i__34694_35794 = G__35808;
continue;
}
} else {
var temp__5804__auto___35812 = cljs.core.seq(seq__34690_35791);
if(temp__5804__auto___35812){
var seq__34690_35814__$1 = temp__5804__auto___35812;
if(cljs.core.chunked_seq_QMARK_(seq__34690_35814__$1)){
var c__5567__auto___35815 = cljs.core.chunk_first(seq__34690_35814__$1);
var G__35816 = cljs.core.chunk_rest(seq__34690_35814__$1);
var G__35817 = c__5567__auto___35815;
var G__35818 = cljs.core.count(c__5567__auto___35815);
var G__35819 = (0);
seq__34690_35791 = G__35816;
chunk__34692_35792 = G__35817;
count__34693_35793 = G__35818;
i__34694_35794 = G__35819;
continue;
} else {
var child_35820 = cljs.core.first(seq__34690_35814__$1);
if(cljs.core.truth_(child_35820)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35820);


var G__35822 = cljs.core.next(seq__34690_35814__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__34690_35791 = G__35822;
chunk__34692_35792 = G__35823;
count__34693_35793 = G__35824;
i__34694_35794 = G__35825;
continue;
} else {
var G__35826 = cljs.core.next(seq__34690_35814__$1);
var G__35827 = null;
var G__35828 = (0);
var G__35829 = (0);
seq__34690_35791 = G__35826;
chunk__34692_35792 = G__35827;
count__34693_35793 = G__35828;
i__34694_35794 = G__35829;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35786);
}


var G__35833 = seq__34646_35781;
var G__35834 = chunk__34647_35782;
var G__35835 = count__34648_35783;
var G__35836 = (i__34649_35784 + (1));
seq__34646_35781 = G__35833;
chunk__34647_35782 = G__35834;
count__34648_35783 = G__35835;
i__34649_35784 = G__35836;
continue;
} else {
var temp__5804__auto___35838 = cljs.core.seq(seq__34646_35781);
if(temp__5804__auto___35838){
var seq__34646_35841__$1 = temp__5804__auto___35838;
if(cljs.core.chunked_seq_QMARK_(seq__34646_35841__$1)){
var c__5567__auto___35842 = cljs.core.chunk_first(seq__34646_35841__$1);
var G__35843 = cljs.core.chunk_rest(seq__34646_35841__$1);
var G__35844 = c__5567__auto___35842;
var G__35845 = cljs.core.count(c__5567__auto___35842);
var G__35846 = (0);
seq__34646_35781 = G__35843;
chunk__34647_35782 = G__35844;
count__34648_35783 = G__35845;
i__34649_35784 = G__35846;
continue;
} else {
var child_struct_35851 = cljs.core.first(seq__34646_35841__$1);
var children_35852 = shadow.dom.dom_node(child_struct_35851);
if(cljs.core.seq_QMARK_(children_35852)){
var seq__34703_35853 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35852));
var chunk__34705_35854 = null;
var count__34706_35855 = (0);
var i__34707_35856 = (0);
while(true){
if((i__34707_35856 < count__34706_35855)){
var child_35861 = chunk__34705_35854.cljs$core$IIndexed$_nth$arity$2(null,i__34707_35856);
if(cljs.core.truth_(child_35861)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35861);


var G__35862 = seq__34703_35853;
var G__35863 = chunk__34705_35854;
var G__35864 = count__34706_35855;
var G__35865 = (i__34707_35856 + (1));
seq__34703_35853 = G__35862;
chunk__34705_35854 = G__35863;
count__34706_35855 = G__35864;
i__34707_35856 = G__35865;
continue;
} else {
var G__35866 = seq__34703_35853;
var G__35867 = chunk__34705_35854;
var G__35868 = count__34706_35855;
var G__35869 = (i__34707_35856 + (1));
seq__34703_35853 = G__35866;
chunk__34705_35854 = G__35867;
count__34706_35855 = G__35868;
i__34707_35856 = G__35869;
continue;
}
} else {
var temp__5804__auto___35870__$1 = cljs.core.seq(seq__34703_35853);
if(temp__5804__auto___35870__$1){
var seq__34703_35871__$1 = temp__5804__auto___35870__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34703_35871__$1)){
var c__5567__auto___35872 = cljs.core.chunk_first(seq__34703_35871__$1);
var G__35874 = cljs.core.chunk_rest(seq__34703_35871__$1);
var G__35875 = c__5567__auto___35872;
var G__35876 = cljs.core.count(c__5567__auto___35872);
var G__35877 = (0);
seq__34703_35853 = G__35874;
chunk__34705_35854 = G__35875;
count__34706_35855 = G__35876;
i__34707_35856 = G__35877;
continue;
} else {
var child_35879 = cljs.core.first(seq__34703_35871__$1);
if(cljs.core.truth_(child_35879)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35879);


var G__35881 = cljs.core.next(seq__34703_35871__$1);
var G__35882 = null;
var G__35883 = (0);
var G__35884 = (0);
seq__34703_35853 = G__35881;
chunk__34705_35854 = G__35882;
count__34706_35855 = G__35883;
i__34707_35856 = G__35884;
continue;
} else {
var G__35885 = cljs.core.next(seq__34703_35871__$1);
var G__35886 = null;
var G__35887 = (0);
var G__35888 = (0);
seq__34703_35853 = G__35885;
chunk__34705_35854 = G__35886;
count__34706_35855 = G__35887;
i__34707_35856 = G__35888;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35852);
}


var G__35889 = cljs.core.next(seq__34646_35841__$1);
var G__35890 = null;
var G__35891 = (0);
var G__35892 = (0);
seq__34646_35781 = G__35889;
chunk__34647_35782 = G__35890;
count__34648_35783 = G__35891;
i__34649_35784 = G__35892;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34734 = cljs.core.seq(node);
var chunk__34735 = null;
var count__34736 = (0);
var i__34737 = (0);
while(true){
if((i__34737 < count__34736)){
var n = chunk__34735.cljs$core$IIndexed$_nth$arity$2(null,i__34737);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35902 = seq__34734;
var G__35903 = chunk__34735;
var G__35904 = count__34736;
var G__35905 = (i__34737 + (1));
seq__34734 = G__35902;
chunk__34735 = G__35903;
count__34736 = G__35904;
i__34737 = G__35905;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34734);
if(temp__5804__auto__){
var seq__34734__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34734__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__34734__$1);
var G__35908 = cljs.core.chunk_rest(seq__34734__$1);
var G__35909 = c__5567__auto__;
var G__35910 = cljs.core.count(c__5567__auto__);
var G__35911 = (0);
seq__34734 = G__35908;
chunk__34735 = G__35909;
count__34736 = G__35910;
i__34737 = G__35911;
continue;
} else {
var n = cljs.core.first(seq__34734__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35914 = cljs.core.next(seq__34734__$1);
var G__35915 = null;
var G__35916 = (0);
var G__35917 = (0);
seq__34734 = G__35914;
chunk__34735 = G__35915;
count__34736 = G__35916;
i__34737 = G__35917;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34761 = arguments.length;
switch (G__34761) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34769 = arguments.length;
switch (G__34769) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34791 = arguments.length;
switch (G__34791) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5774__auto__ = [];
var len__5768__auto___35940 = arguments.length;
var i__5769__auto___35941 = (0);
while(true){
if((i__5769__auto___35941 < len__5768__auto___35940)){
args__5774__auto__.push((arguments[i__5769__auto___35941]));

var G__35942 = (i__5769__auto___35941 + (1));
i__5769__auto___35941 = G__35942;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34810_35947 = cljs.core.seq(nodes);
var chunk__34811_35948 = null;
var count__34812_35949 = (0);
var i__34813_35950 = (0);
while(true){
if((i__34813_35950 < count__34812_35949)){
var node_35951 = chunk__34811_35948.cljs$core$IIndexed$_nth$arity$2(null,i__34813_35950);
fragment.appendChild(shadow.dom._to_dom(node_35951));


var G__35953 = seq__34810_35947;
var G__35954 = chunk__34811_35948;
var G__35955 = count__34812_35949;
var G__35956 = (i__34813_35950 + (1));
seq__34810_35947 = G__35953;
chunk__34811_35948 = G__35954;
count__34812_35949 = G__35955;
i__34813_35950 = G__35956;
continue;
} else {
var temp__5804__auto___35958 = cljs.core.seq(seq__34810_35947);
if(temp__5804__auto___35958){
var seq__34810_35960__$1 = temp__5804__auto___35958;
if(cljs.core.chunked_seq_QMARK_(seq__34810_35960__$1)){
var c__5567__auto___35961 = cljs.core.chunk_first(seq__34810_35960__$1);
var G__35962 = cljs.core.chunk_rest(seq__34810_35960__$1);
var G__35963 = c__5567__auto___35961;
var G__35964 = cljs.core.count(c__5567__auto___35961);
var G__35965 = (0);
seq__34810_35947 = G__35962;
chunk__34811_35948 = G__35963;
count__34812_35949 = G__35964;
i__34813_35950 = G__35965;
continue;
} else {
var node_35967 = cljs.core.first(seq__34810_35960__$1);
fragment.appendChild(shadow.dom._to_dom(node_35967));


var G__35970 = cljs.core.next(seq__34810_35960__$1);
var G__35971 = null;
var G__35972 = (0);
var G__35973 = (0);
seq__34810_35947 = G__35970;
chunk__34811_35948 = G__35971;
count__34812_35949 = G__35972;
i__34813_35950 = G__35973;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34809){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34809));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34830_35977 = cljs.core.seq(scripts);
var chunk__34831_35978 = null;
var count__34832_35979 = (0);
var i__34833_35980 = (0);
while(true){
if((i__34833_35980 < count__34832_35979)){
var vec__34853_35982 = chunk__34831_35978.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35980);
var script_tag_35983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34853_35982,(0),null);
var script_body_35984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34853_35982,(1),null);
eval(script_body_35984);


var G__35988 = seq__34830_35977;
var G__35989 = chunk__34831_35978;
var G__35990 = count__34832_35979;
var G__35991 = (i__34833_35980 + (1));
seq__34830_35977 = G__35988;
chunk__34831_35978 = G__35989;
count__34832_35979 = G__35990;
i__34833_35980 = G__35991;
continue;
} else {
var temp__5804__auto___35992 = cljs.core.seq(seq__34830_35977);
if(temp__5804__auto___35992){
var seq__34830_35993__$1 = temp__5804__auto___35992;
if(cljs.core.chunked_seq_QMARK_(seq__34830_35993__$1)){
var c__5567__auto___35994 = cljs.core.chunk_first(seq__34830_35993__$1);
var G__35995 = cljs.core.chunk_rest(seq__34830_35993__$1);
var G__35996 = c__5567__auto___35994;
var G__35997 = cljs.core.count(c__5567__auto___35994);
var G__35998 = (0);
seq__34830_35977 = G__35995;
chunk__34831_35978 = G__35996;
count__34832_35979 = G__35997;
i__34833_35980 = G__35998;
continue;
} else {
var vec__34858_36000 = cljs.core.first(seq__34830_35993__$1);
var script_tag_36001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34858_36000,(0),null);
var script_body_36002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34858_36000,(1),null);
eval(script_body_36002);


var G__36003 = cljs.core.next(seq__34830_35993__$1);
var G__36004 = null;
var G__36005 = (0);
var G__36006 = (0);
seq__34830_35977 = G__36003;
chunk__34831_35978 = G__36004;
count__34832_35979 = G__36005;
i__34833_35980 = G__36006;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34865){
var vec__34867 = p__34865;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34891 = arguments.length;
switch (G__34891) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34938 = cljs.core.seq(style_keys);
var chunk__34939 = null;
var count__34940 = (0);
var i__34941 = (0);
while(true){
if((i__34941 < count__34940)){
var it = chunk__34939.cljs$core$IIndexed$_nth$arity$2(null,i__34941);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36029 = seq__34938;
var G__36030 = chunk__34939;
var G__36031 = count__34940;
var G__36032 = (i__34941 + (1));
seq__34938 = G__36029;
chunk__34939 = G__36030;
count__34940 = G__36031;
i__34941 = G__36032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34938);
if(temp__5804__auto__){
var seq__34938__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34938__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__34938__$1);
var G__36040 = cljs.core.chunk_rest(seq__34938__$1);
var G__36041 = c__5567__auto__;
var G__36042 = cljs.core.count(c__5567__auto__);
var G__36043 = (0);
seq__34938 = G__36040;
chunk__34939 = G__36041;
count__34940 = G__36042;
i__34941 = G__36043;
continue;
} else {
var it = cljs.core.first(seq__34938__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36044 = cljs.core.next(seq__34938__$1);
var G__36045 = null;
var G__36046 = (0);
var G__36047 = (0);
seq__34938 = G__36044;
chunk__34939 = G__36045;
count__34940 = G__36046;
i__34941 = G__36047;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k34976,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__34998 = k34976;
var G__34998__$1 = (((G__34998 instanceof cljs.core.Keyword))?G__34998.fqn:null);
switch (G__34998__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34976,else__5345__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5365__auto__,p__35024){
var vec__35026 = p__35024;
var k__5366__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(0),null);
var v__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(1),null);
return (f__5363__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5363__auto__.cljs$core$IFn$_invoke$arity$3(ret__5365__auto__,k__5366__auto__,v__5367__auto__) : f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__));
}),init__5364__auto__,this__5362__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer(writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer(writer__5358__auto__,pr_pair__5360__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5359__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34975){
var self__ = this;
var G__34975__$1 = this;
return (new cljs.core.RecordIter((0),G__34975__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5339__auto__));
})(this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34977,other34978){
var self__ = this;
var this34977__$1 = this;
return (((!((other34978 == null)))) && ((((this34977__$1.constructor === other34978.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34977__$1.x,other34978.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34977__$1.y,other34978.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34977__$1.__extmap,other34978.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5353__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k34976){
var self__ = this;
var this__5349__auto____$1 = this;
var G__35130 = k34976;
var G__35130__$1 = (((G__35130 instanceof cljs.core.Keyword))?G__35130.fqn:null);
switch (G__35130__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34976);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__34975){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__35142 = cljs.core.keyword_identical_QMARK_;
var expr__35143 = k__5351__auto__;
if(cljs.core.truth_((pred__35142.cljs$core$IFn$_invoke$arity$2 ? pred__35142.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35143) : pred__35142.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35143)))){
return (new shadow.dom.Coordinate(G__34975,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35142.cljs$core$IFn$_invoke$arity$2 ? pred__35142.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35143) : pred__35142.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35143)))){
return (new shadow.dom.Coordinate(self__.x,G__34975,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5351__auto__,G__34975),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__34975){
var self__ = this;
var this__5341__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34975,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5348__auto__,(0)),cljs.core._nth(entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write(writer__5389__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34987){
var extmap__5384__auto__ = (function (){var G__35197 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34987,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35197);
} else {
return G__35197;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34987),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34987),null,cljs.core.not_empty(extmap__5384__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k35215,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__35226 = k35215;
var G__35226__$1 = (((G__35226 instanceof cljs.core.Keyword))?G__35226.fqn:null);
switch (G__35226__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35215,else__5345__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5365__auto__,p__35227){
var vec__35228 = p__35227;
var k__5366__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(0),null);
var v__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(1),null);
return (f__5363__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5363__auto__.cljs$core$IFn$_invoke$arity$3(ret__5365__auto__,k__5366__auto__,v__5367__auto__) : f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__));
}),init__5364__auto__,this__5362__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer(writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer(writer__5358__auto__,pr_pair__5360__auto__,"#shadow.dom.Size{",", ","}",opts__5359__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35214){
var self__ = this;
var G__35214__$1 = this;
return (new cljs.core.RecordIter((0),G__35214__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5339__auto__));
})(this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35216,other35217){
var self__ = this;
var this35216__$1 = this;
return (((!((other35217 == null)))) && ((((this35216__$1.constructor === other35217.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35216__$1.w,other35217.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35216__$1.h,other35217.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35216__$1.__extmap,other35217.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5353__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k35215){
var self__ = this;
var this__5349__auto____$1 = this;
var G__35255 = k35215;
var G__35255__$1 = (((G__35255 instanceof cljs.core.Keyword))?G__35255.fqn:null);
switch (G__35255__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35215);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__35214){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__35265 = cljs.core.keyword_identical_QMARK_;
var expr__35266 = k__5351__auto__;
if(cljs.core.truth_((pred__35265.cljs$core$IFn$_invoke$arity$2 ? pred__35265.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35266) : pred__35265.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35266)))){
return (new shadow.dom.Size(G__35214,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35265.cljs$core$IFn$_invoke$arity$2 ? pred__35265.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35266) : pred__35265.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35266)))){
return (new shadow.dom.Size(self__.w,G__35214,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5351__auto__,G__35214),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__35214){
var self__ = this;
var this__5341__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35214,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5348__auto__,(0)),cljs.core._nth(entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write(writer__5389__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35220){
var extmap__5384__auto__ = (function (){var G__35294 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35220,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35220)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35294);
} else {
return G__35294;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35220),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35220),null,cljs.core.not_empty(extmap__5384__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5632__auto__ = opts;
var l__5633__auto__ = a__5632__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5633__auto__)){
var G__36122 = (i + (1));
var G__36123 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36122;
ret = G__36123;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35324){
var vec__35326 = p__35324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35326,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35341 = arguments.length;
switch (G__35341) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36131 = ps;
var G__36132 = (i + (1));
el__$1 = G__36131;
i = G__36132;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35384 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35395_36152 = cljs.core.seq(props);
var chunk__35396_36153 = null;
var count__35397_36154 = (0);
var i__35398_36155 = (0);
while(true){
if((i__35398_36155 < count__35397_36154)){
var vec__35435_36156 = chunk__35396_36153.cljs$core$IIndexed$_nth$arity$2(null,i__35398_36155);
var k_36157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435_36156,(0),null);
var v_36158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35435_36156,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36157);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36157),v_36158);


var G__36159 = seq__35395_36152;
var G__36160 = chunk__35396_36153;
var G__36161 = count__35397_36154;
var G__36162 = (i__35398_36155 + (1));
seq__35395_36152 = G__36159;
chunk__35396_36153 = G__36160;
count__35397_36154 = G__36161;
i__35398_36155 = G__36162;
continue;
} else {
var temp__5804__auto___36163 = cljs.core.seq(seq__35395_36152);
if(temp__5804__auto___36163){
var seq__35395_36164__$1 = temp__5804__auto___36163;
if(cljs.core.chunked_seq_QMARK_(seq__35395_36164__$1)){
var c__5567__auto___36165 = cljs.core.chunk_first(seq__35395_36164__$1);
var G__36166 = cljs.core.chunk_rest(seq__35395_36164__$1);
var G__36167 = c__5567__auto___36165;
var G__36168 = cljs.core.count(c__5567__auto___36165);
var G__36169 = (0);
seq__35395_36152 = G__36166;
chunk__35396_36153 = G__36167;
count__35397_36154 = G__36168;
i__35398_36155 = G__36169;
continue;
} else {
var vec__35460_36170 = cljs.core.first(seq__35395_36164__$1);
var k_36171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35460_36170,(0),null);
var v_36172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35460_36170,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36171);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36171),v_36172);


var G__36174 = cljs.core.next(seq__35395_36164__$1);
var G__36175 = null;
var G__36176 = (0);
var G__36177 = (0);
seq__35395_36152 = G__36174;
chunk__35396_36153 = G__36175;
count__35397_36154 = G__36176;
i__35398_36155 = G__36177;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35478 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(1),null);
var seq__35481_36178 = cljs.core.seq(node_children);
var chunk__35483_36179 = null;
var count__35484_36180 = (0);
var i__35485_36181 = (0);
while(true){
if((i__35485_36181 < count__35484_36180)){
var child_struct_36182 = chunk__35483_36179.cljs$core$IIndexed$_nth$arity$2(null,i__35485_36181);
if((!((child_struct_36182 == null)))){
if(typeof child_struct_36182 === 'string'){
var text_36183 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36183),child_struct_36182].join(''));
} else {
var children_36184 = shadow.dom.svg_node(child_struct_36182);
if(cljs.core.seq_QMARK_(children_36184)){
var seq__35608_36185 = cljs.core.seq(children_36184);
var chunk__35610_36186 = null;
var count__35611_36187 = (0);
var i__35612_36188 = (0);
while(true){
if((i__35612_36188 < count__35611_36187)){
var child_36189 = chunk__35610_36186.cljs$core$IIndexed$_nth$arity$2(null,i__35612_36188);
if(cljs.core.truth_(child_36189)){
node.appendChild(child_36189);


var G__36190 = seq__35608_36185;
var G__36191 = chunk__35610_36186;
var G__36192 = count__35611_36187;
var G__36193 = (i__35612_36188 + (1));
seq__35608_36185 = G__36190;
chunk__35610_36186 = G__36191;
count__35611_36187 = G__36192;
i__35612_36188 = G__36193;
continue;
} else {
var G__36194 = seq__35608_36185;
var G__36195 = chunk__35610_36186;
var G__36196 = count__35611_36187;
var G__36197 = (i__35612_36188 + (1));
seq__35608_36185 = G__36194;
chunk__35610_36186 = G__36195;
count__35611_36187 = G__36196;
i__35612_36188 = G__36197;
continue;
}
} else {
var temp__5804__auto___36198 = cljs.core.seq(seq__35608_36185);
if(temp__5804__auto___36198){
var seq__35608_36199__$1 = temp__5804__auto___36198;
if(cljs.core.chunked_seq_QMARK_(seq__35608_36199__$1)){
var c__5567__auto___36200 = cljs.core.chunk_first(seq__35608_36199__$1);
var G__36201 = cljs.core.chunk_rest(seq__35608_36199__$1);
var G__36202 = c__5567__auto___36200;
var G__36203 = cljs.core.count(c__5567__auto___36200);
var G__36204 = (0);
seq__35608_36185 = G__36201;
chunk__35610_36186 = G__36202;
count__35611_36187 = G__36203;
i__35612_36188 = G__36204;
continue;
} else {
var child_36205 = cljs.core.first(seq__35608_36199__$1);
if(cljs.core.truth_(child_36205)){
node.appendChild(child_36205);


var G__36206 = cljs.core.next(seq__35608_36199__$1);
var G__36207 = null;
var G__36208 = (0);
var G__36209 = (0);
seq__35608_36185 = G__36206;
chunk__35610_36186 = G__36207;
count__35611_36187 = G__36208;
i__35612_36188 = G__36209;
continue;
} else {
var G__36210 = cljs.core.next(seq__35608_36199__$1);
var G__36211 = null;
var G__36212 = (0);
var G__36213 = (0);
seq__35608_36185 = G__36210;
chunk__35610_36186 = G__36211;
count__35611_36187 = G__36212;
i__35612_36188 = G__36213;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36184);
}
}


var G__36214 = seq__35481_36178;
var G__36215 = chunk__35483_36179;
var G__36216 = count__35484_36180;
var G__36217 = (i__35485_36181 + (1));
seq__35481_36178 = G__36214;
chunk__35483_36179 = G__36215;
count__35484_36180 = G__36216;
i__35485_36181 = G__36217;
continue;
} else {
var G__36218 = seq__35481_36178;
var G__36219 = chunk__35483_36179;
var G__36220 = count__35484_36180;
var G__36221 = (i__35485_36181 + (1));
seq__35481_36178 = G__36218;
chunk__35483_36179 = G__36219;
count__35484_36180 = G__36220;
i__35485_36181 = G__36221;
continue;
}
} else {
var temp__5804__auto___36222 = cljs.core.seq(seq__35481_36178);
if(temp__5804__auto___36222){
var seq__35481_36223__$1 = temp__5804__auto___36222;
if(cljs.core.chunked_seq_QMARK_(seq__35481_36223__$1)){
var c__5567__auto___36225 = cljs.core.chunk_first(seq__35481_36223__$1);
var G__36226 = cljs.core.chunk_rest(seq__35481_36223__$1);
var G__36227 = c__5567__auto___36225;
var G__36228 = cljs.core.count(c__5567__auto___36225);
var G__36229 = (0);
seq__35481_36178 = G__36226;
chunk__35483_36179 = G__36227;
count__35484_36180 = G__36228;
i__35485_36181 = G__36229;
continue;
} else {
var child_struct_36232 = cljs.core.first(seq__35481_36223__$1);
if((!((child_struct_36232 == null)))){
if(typeof child_struct_36232 === 'string'){
var text_36234 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36234),child_struct_36232].join(''));
} else {
var children_36235 = shadow.dom.svg_node(child_struct_36232);
if(cljs.core.seq_QMARK_(children_36235)){
var seq__35624_36236 = cljs.core.seq(children_36235);
var chunk__35626_36237 = null;
var count__35627_36238 = (0);
var i__35628_36239 = (0);
while(true){
if((i__35628_36239 < count__35627_36238)){
var child_36240 = chunk__35626_36237.cljs$core$IIndexed$_nth$arity$2(null,i__35628_36239);
if(cljs.core.truth_(child_36240)){
node.appendChild(child_36240);


var G__36241 = seq__35624_36236;
var G__36242 = chunk__35626_36237;
var G__36243 = count__35627_36238;
var G__36244 = (i__35628_36239 + (1));
seq__35624_36236 = G__36241;
chunk__35626_36237 = G__36242;
count__35627_36238 = G__36243;
i__35628_36239 = G__36244;
continue;
} else {
var G__36245 = seq__35624_36236;
var G__36246 = chunk__35626_36237;
var G__36247 = count__35627_36238;
var G__36248 = (i__35628_36239 + (1));
seq__35624_36236 = G__36245;
chunk__35626_36237 = G__36246;
count__35627_36238 = G__36247;
i__35628_36239 = G__36248;
continue;
}
} else {
var temp__5804__auto___36249__$1 = cljs.core.seq(seq__35624_36236);
if(temp__5804__auto___36249__$1){
var seq__35624_36250__$1 = temp__5804__auto___36249__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35624_36250__$1)){
var c__5567__auto___36251 = cljs.core.chunk_first(seq__35624_36250__$1);
var G__36252 = cljs.core.chunk_rest(seq__35624_36250__$1);
var G__36253 = c__5567__auto___36251;
var G__36254 = cljs.core.count(c__5567__auto___36251);
var G__36255 = (0);
seq__35624_36236 = G__36252;
chunk__35626_36237 = G__36253;
count__35627_36238 = G__36254;
i__35628_36239 = G__36255;
continue;
} else {
var child_36257 = cljs.core.first(seq__35624_36250__$1);
if(cljs.core.truth_(child_36257)){
node.appendChild(child_36257);


var G__36258 = cljs.core.next(seq__35624_36250__$1);
var G__36259 = null;
var G__36260 = (0);
var G__36261 = (0);
seq__35624_36236 = G__36258;
chunk__35626_36237 = G__36259;
count__35627_36238 = G__36260;
i__35628_36239 = G__36261;
continue;
} else {
var G__36262 = cljs.core.next(seq__35624_36250__$1);
var G__36263 = null;
var G__36264 = (0);
var G__36265 = (0);
seq__35624_36236 = G__36262;
chunk__35626_36237 = G__36263;
count__35627_36238 = G__36264;
i__35628_36239 = G__36265;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36235);
}
}


var G__36267 = cljs.core.next(seq__35481_36223__$1);
var G__36268 = null;
var G__36269 = (0);
var G__36270 = (0);
seq__35481_36178 = G__36267;
chunk__35483_36179 = G__36268;
count__35484_36180 = G__36269;
i__35485_36181 = G__36270;
continue;
} else {
var G__36271 = cljs.core.next(seq__35481_36223__$1);
var G__36272 = null;
var G__36273 = (0);
var G__36274 = (0);
seq__35481_36178 = G__36271;
chunk__35483_36179 = G__36272;
count__35484_36180 = G__36273;
i__35485_36181 = G__36274;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5774__auto__ = [];
var len__5768__auto___36279 = arguments.length;
var i__5769__auto___36280 = (0);
while(true){
if((i__5769__auto___36280 < len__5768__auto___36279)){
args__5774__auto__.push((arguments[i__5769__auto___36280]));

var G__36283 = (i__5769__auto___36280 + (1));
i__5769__auto___36280 = G__36283;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35642){
var G__35643 = cljs.core.first(seq35642);
var seq35642__$1 = cljs.core.next(seq35642);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35643,seq35642__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35651 = arguments.length;
switch (G__35651) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__30552__auto___36289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30553__auto__ = (function (){var switch__29301__auto__ = (function (state_35657){
var state_val_35658 = (state_35657[(1)]);
if((state_val_35658 === (1))){
var state_35657__$1 = state_35657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35657__$1,(2),once_or_cleanup);
} else {
if((state_val_35658 === (2))){
var inst_35654 = (state_35657[(2)]);
var inst_35655 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35657__$1 = (function (){var statearr_35659 = state_35657;
(statearr_35659[(7)] = inst_35654);

return statearr_35659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35657__$1,inst_35655);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29302__auto__ = null;
var shadow$dom$state_machine__29302__auto____0 = (function (){
var statearr_35660 = [null,null,null,null,null,null,null,null];
(statearr_35660[(0)] = shadow$dom$state_machine__29302__auto__);

(statearr_35660[(1)] = (1));

return statearr_35660;
});
var shadow$dom$state_machine__29302__auto____1 = (function (state_35657){
while(true){
var ret_value__29303__auto__ = (function (){try{while(true){
var result__29304__auto__ = switch__29301__auto__(state_35657);
if(cljs.core.keyword_identical_QMARK_(result__29304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29304__auto__;
}
break;
}
}catch (e35661){var ex__29305__auto__ = e35661;
var statearr_35662_36292 = state_35657;
(statearr_35662_36292[(2)] = ex__29305__auto__);


if(cljs.core.seq((state_35657[(4)]))){
var statearr_35663_36295 = state_35657;
(statearr_35663_36295[(1)] = cljs.core.first((state_35657[(4)])));

} else {
throw ex__29305__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36296 = state_35657;
state_35657 = G__36296;
continue;
} else {
return ret_value__29303__auto__;
}
break;
}
});
shadow$dom$state_machine__29302__auto__ = function(state_35657){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29302__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29302__auto____1.call(this,state_35657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29302__auto____0;
shadow$dom$state_machine__29302__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29302__auto____1;
return shadow$dom$state_machine__29302__auto__;
})()
})();
var state__30554__auto__ = (function (){var statearr_35664 = f__30553__auto__();
(statearr_35664[(6)] = c__30552__auto___36289);

return statearr_35664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30554__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
