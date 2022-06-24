goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35212){
var map__35213 = p__35212;
var map__35213__$1 = cljs.core.__destructure_map(map__35213);
var m = map__35213__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35213__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35221_35498 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35222_35499 = null;
var count__35223_35500 = (0);
var i__35224_35501 = (0);
while(true){
if((i__35224_35501 < count__35223_35500)){
var f_35502 = chunk__35222_35499.cljs$core$IIndexed$_nth$arity$2(null,i__35224_35501);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35502], 0));


var G__35503 = seq__35221_35498;
var G__35504 = chunk__35222_35499;
var G__35505 = count__35223_35500;
var G__35506 = (i__35224_35501 + (1));
seq__35221_35498 = G__35503;
chunk__35222_35499 = G__35504;
count__35223_35500 = G__35505;
i__35224_35501 = G__35506;
continue;
} else {
var temp__5804__auto___35507 = cljs.core.seq(seq__35221_35498);
if(temp__5804__auto___35507){
var seq__35221_35509__$1 = temp__5804__auto___35507;
if(cljs.core.chunked_seq_QMARK_(seq__35221_35509__$1)){
var c__5567__auto___35510 = cljs.core.chunk_first(seq__35221_35509__$1);
var G__35512 = cljs.core.chunk_rest(seq__35221_35509__$1);
var G__35513 = c__5567__auto___35510;
var G__35514 = cljs.core.count(c__5567__auto___35510);
var G__35515 = (0);
seq__35221_35498 = G__35512;
chunk__35222_35499 = G__35513;
count__35223_35500 = G__35514;
i__35224_35501 = G__35515;
continue;
} else {
var f_35516 = cljs.core.first(seq__35221_35509__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35516], 0));


var G__35518 = cljs.core.next(seq__35221_35509__$1);
var G__35519 = null;
var G__35520 = (0);
var G__35521 = (0);
seq__35221_35498 = G__35518;
chunk__35222_35499 = G__35519;
count__35223_35500 = G__35520;
i__35224_35501 = G__35521;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35522 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35522], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35522)))?cljs.core.second(arglists_35522):arglists_35522)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35232_35527 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35233_35528 = null;
var count__35234_35529 = (0);
var i__35235_35530 = (0);
while(true){
if((i__35235_35530 < count__35234_35529)){
var vec__35249_35532 = chunk__35233_35528.cljs$core$IIndexed$_nth$arity$2(null,i__35235_35530);
var name_35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35249_35532,(0),null);
var map__35252_35534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35249_35532,(1),null);
var map__35252_35535__$1 = cljs.core.__destructure_map(map__35252_35534);
var doc_35536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35252_35535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35252_35535__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35533], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35537], 0));

if(cljs.core.truth_(doc_35536)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35536], 0));
} else {
}


var G__35540 = seq__35232_35527;
var G__35541 = chunk__35233_35528;
var G__35542 = count__35234_35529;
var G__35543 = (i__35235_35530 + (1));
seq__35232_35527 = G__35540;
chunk__35233_35528 = G__35541;
count__35234_35529 = G__35542;
i__35235_35530 = G__35543;
continue;
} else {
var temp__5804__auto___35544 = cljs.core.seq(seq__35232_35527);
if(temp__5804__auto___35544){
var seq__35232_35545__$1 = temp__5804__auto___35544;
if(cljs.core.chunked_seq_QMARK_(seq__35232_35545__$1)){
var c__5567__auto___35546 = cljs.core.chunk_first(seq__35232_35545__$1);
var G__35547 = cljs.core.chunk_rest(seq__35232_35545__$1);
var G__35548 = c__5567__auto___35546;
var G__35549 = cljs.core.count(c__5567__auto___35546);
var G__35550 = (0);
seq__35232_35527 = G__35547;
chunk__35233_35528 = G__35548;
count__35234_35529 = G__35549;
i__35235_35530 = G__35550;
continue;
} else {
var vec__35269_35557 = cljs.core.first(seq__35232_35545__$1);
var name_35558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35269_35557,(0),null);
var map__35272_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35269_35557,(1),null);
var map__35272_35560__$1 = cljs.core.__destructure_map(map__35272_35559);
var doc_35561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272_35560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272_35560__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35558], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35562], 0));

if(cljs.core.truth_(doc_35561)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35561], 0));
} else {
}


var G__35564 = cljs.core.next(seq__35232_35545__$1);
var G__35565 = null;
var G__35566 = (0);
var G__35567 = (0);
seq__35232_35527 = G__35564;
chunk__35233_35528 = G__35565;
count__35234_35529 = G__35566;
i__35235_35530 = G__35567;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35284 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35285 = null;
var count__35286 = (0);
var i__35287 = (0);
while(true){
if((i__35287 < count__35286)){
var role = chunk__35285.cljs$core$IIndexed$_nth$arity$2(null,i__35287);
var temp__5804__auto___35569__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35569__$1)){
var spec_35570 = temp__5804__auto___35569__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35570)], 0));
} else {
}


var G__35573 = seq__35284;
var G__35574 = chunk__35285;
var G__35575 = count__35286;
var G__35576 = (i__35287 + (1));
seq__35284 = G__35573;
chunk__35285 = G__35574;
count__35286 = G__35575;
i__35287 = G__35576;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35284);
if(temp__5804__auto____$1){
var seq__35284__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35284__$1)){
var c__5567__auto__ = cljs.core.chunk_first(seq__35284__$1);
var G__35580 = cljs.core.chunk_rest(seq__35284__$1);
var G__35581 = c__5567__auto__;
var G__35582 = cljs.core.count(c__5567__auto__);
var G__35583 = (0);
seq__35284 = G__35580;
chunk__35285 = G__35581;
count__35286 = G__35582;
i__35287 = G__35583;
continue;
} else {
var role = cljs.core.first(seq__35284__$1);
var temp__5804__auto___35584__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35584__$2)){
var spec_35586 = temp__5804__auto___35584__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35586)], 0));
} else {
}


var G__35588 = cljs.core.next(seq__35284__$1);
var G__35589 = null;
var G__35590 = (0);
var G__35591 = (0);
seq__35284 = G__35588;
chunk__35285 = G__35589;
count__35286 = G__35590;
i__35287 = G__35591;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35607 = cljs.core.ex_cause(t);
via = G__35606;
t = G__35607;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35334 = datafied_throwable;
var map__35334__$1 = cljs.core.__destructure_map(map__35334);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35334__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35334__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35334__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35335 = cljs.core.last(via);
var map__35335__$1 = cljs.core.__destructure_map(map__35335);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35337 = data;
var map__35337__$1 = cljs.core.__destructure_map(map__35337);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35337__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35337__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35337__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35338 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35338__$1 = cljs.core.__destructure_map(map__35338);
var top_data = map__35338__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35345 = phase;
var G__35345__$1 = (((G__35345 instanceof cljs.core.Keyword))?G__35345.fqn:null);
switch (G__35345__$1) {
case "read-source":
var map__35346 = data;
var map__35346__$1 = cljs.core.__destructure_map(map__35346);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35346__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35346__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35347 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35347__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35347,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35347);
var G__35347__$2 = (cljs.core.truth_((function (){var fexpr__35350 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35350.cljs$core$IFn$_invoke$arity$1 ? fexpr__35350.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35350.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35347__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35347__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35347__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35347__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35351 = top_data;
var G__35351__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35351,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35351);
var G__35351__$2 = (cljs.core.truth_((function (){var fexpr__35353 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35353.cljs$core$IFn$_invoke$arity$1 ? fexpr__35353.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35353.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35351__$1);
var G__35351__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35351__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35351__$2);
var G__35351__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35351__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35351__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35351__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35351__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35358 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35358,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35358,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35358,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35358,(3),null);
var G__35361 = top_data;
var G__35361__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35361);
var G__35361__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35361__$1);
var G__35361__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35361__$2);
var G__35361__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35361__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35361__$4;
}

break;
case "execution":
var vec__35364 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35364,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35330_SHARP_){
var or__5045__auto__ = (p1__35330_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__35369 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35369.cljs$core$IFn$_invoke$arity$1 ? fexpr__35369.cljs$core$IFn$_invoke$arity$1(p1__35330_SHARP_) : fexpr__35369.call(null,p1__35330_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__35371 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35371__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35371,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35371);
var G__35371__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35371__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35371__$1);
var G__35371__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35371__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35371__$2);
var G__35371__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35371__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35371__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35371__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35371__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35345__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35382){
var map__35383 = p__35382;
var map__35383__$1 = cljs.core.__destructure_map(map__35383);
var triage_data = map__35383__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35408 = phase;
var G__35408__$1 = (((G__35408 instanceof cljs.core.Keyword))?G__35408.fqn:null);
switch (G__35408__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35410 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35411 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35412 = loc;
var G__35413 = (cljs.core.truth_(spec)?(function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35415_35638 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35416_35639 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35417_35640 = true;
var _STAR_print_fn_STAR__temp_val__35418_35641 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35417_35640);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35418_35641);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35378_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35378_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35416_35639);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35415_35638);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35410,G__35411,G__35412,G__35413) : format.call(null,G__35410,G__35411,G__35412,G__35413));

break;
case "macroexpansion":
var G__35438 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35439 = cause_type;
var G__35440 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35441 = loc;
var G__35442 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35438,G__35439,G__35440,G__35441,G__35442) : format.call(null,G__35438,G__35439,G__35440,G__35441,G__35442));

break;
case "compile-syntax-check":
var G__35445 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35446 = cause_type;
var G__35447 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35448 = loc;
var G__35449 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35445,G__35446,G__35447,G__35448,G__35449) : format.call(null,G__35445,G__35446,G__35447,G__35448,G__35449));

break;
case "compilation":
var G__35450 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35451 = cause_type;
var G__35452 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35453 = loc;
var G__35454 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35450,G__35451,G__35452,G__35453,G__35454) : format.call(null,G__35450,G__35451,G__35452,G__35453,G__35454));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35455 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35456 = symbol;
var G__35457 = loc;
var G__35458 = (function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35463_35646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35464_35647 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35465_35648 = true;
var _STAR_print_fn_STAR__temp_val__35466_35649 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35465_35648);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35466_35649);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35380_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35380_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35464_35647);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35463_35646);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35455,G__35456,G__35457,G__35458) : format.call(null,G__35455,G__35456,G__35457,G__35458));
} else {
var G__35469 = "Execution error%s at %s(%s).\n%s\n";
var G__35470 = cause_type;
var G__35471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35472 = loc;
var G__35473 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35469,G__35470,G__35471,G__35472,G__35473) : format.call(null,G__35469,G__35470,G__35471,G__35472,G__35473));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35408__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
