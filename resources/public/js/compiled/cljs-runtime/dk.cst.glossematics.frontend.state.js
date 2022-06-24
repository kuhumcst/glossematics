goog.provide('dk.cst.glossematics.frontend.state');
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.development_QMARK_ !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.development_QMARK_ = (((typeof inDevelopmentEnvironment !== 'undefined'))?inDevelopmentEnvironment:null);
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.assertions !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.assertions = (((typeof SAMLAssertions !== 'undefined'))?clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(SAMLAssertions):cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.paths !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.paths = (((typeof SAMLPaths !== 'undefined'))?clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(SAMLPaths):cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.authenticated_QMARK_ !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.authenticated_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var fexpr__39749 = (function (){var or__5045__auto__ = dk.cst.pedestal.sp.auth.auth_override(dk.cst.glossematics.frontend.state.assertions);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dk.cst.pedestal.sp.auth.condition__GT_auth_test(new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
}
})();
return (fexpr__39749.cljs$core$IFn$_invoke$arity$1 ? fexpr__39749.cljs$core$IFn$_invoke$arity$1(dk.cst.glossematics.frontend.state.assertions) : fexpr__39749.call(null,dk.cst.glossematics.frontend.state.assertions));
})())?true:false));
}
/**
 * Keys used locally by the search page; not transferable via query-params.
 */
dk.cst.glossematics.frontend.state.local_query_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rel","rel",1378823488),null,new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"bad-input?","bad-input?",1544544849),null,new cljs.core.Keyword(null,"not-allowed?","not-allowed?",-1384550020),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
/**
 * Keys that only affect the size/order of the query result set.
 * 
 *   NOTE: same keys are used for both the query state and the query-params.
 */
dk.cst.glossematics.frontend.state.query_result_set_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"limit","limit",-1355822363),null,new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"order-by","order-by",1527318070),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null);
dk.cst.glossematics.frontend.state.query_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rel","rel",1378823488),new cljs.core.Keyword(null,"unique","unique",329397282),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"to","to",192099007)],[new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.PersistentHashSet.EMPTY,(10),(0),(0),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"asc","asc",356854569)], null),cljs.core.PersistentVector.EMPTY,"",null]);
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.db !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reader","reader",169660853),null,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),dk.cst.glossematics.frontend.state.query_defaults], null)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.location !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.location = reagent.core.cursor(dk.cst.glossematics.frontend.state.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.timeline !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.timeline = reagent.core.cursor(dk.cst.glossematics.frontend.state.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline","timeline",192903161)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.search !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.search = reagent.core.cursor(dk.cst.glossematics.frontend.state.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"meta","meta",1499536964)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.query !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.query = reagent.core.cursor(dk.cst.glossematics.frontend.state.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.bibliography !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.bibliography = reagent.core.cursor(dk.cst.glossematics.frontend.state.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bibliography","bibliography",1696888206)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.reader !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.reader = reagent.core.cursor(dk.cst.glossematics.frontend.state.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.facs_carousel !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.facs_carousel = dk.cst.stucco.util.state.ghost.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.state.reader,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"facs-kvs","facs-kvs",-677136786),new cljs.core.Keyword(null,"kvs","kvs",958455492)], null));
}
if((typeof dk !== 'undefined') && (typeof dk.cst !== 'undefined') && (typeof dk.cst.glossematics !== 'undefined') && (typeof dk.cst.glossematics.frontend !== 'undefined') && (typeof dk.cst.glossematics.frontend.state !== 'undefined') && (typeof dk.cst.glossematics.frontend.state.tei_carousel !== 'undefined')){
} else {
dk.cst.glossematics.frontend.state.tei_carousel = dk.cst.stucco.util.state.ghost.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.state.reader,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"tei-kvs","tei-kvs",-385566623),new cljs.core.Keyword(null,"kvs","kvs",958455492)], null));
}

//# sourceMappingURL=dk.cst.glossematics.frontend.state.js.map
