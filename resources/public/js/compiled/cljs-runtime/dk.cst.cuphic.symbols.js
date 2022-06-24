goog.provide('dk.cst.cuphic.symbols');
/**
 * Marks a slot that can be filled by any 1 node.
 */
dk.cst.cuphic.symbols.wildcard = new cljs.core.Symbol(null,"_","_",-1201019570,null);
/**
 * Marks a slot that can be filled any 1 node -OR- be empty.
 */
dk.cst.cuphic.symbols.optional = new cljs.core.Symbol(null,"?","?",-62633706,null);
/**
 * Marks omission of 1 or more nodes.
 */
dk.cst.cuphic.symbols.omission = new cljs.core.Symbol(null,"...","...",-1926939749,null);
/**
 * Marks omission of 0 or more nodes.
 */
dk.cst.cuphic.symbols.optional_omission = new cljs.core.Symbol(null,"???","???",1210272185,null);
dk.cst.cuphic.symbols.prefixed_with_QMARK_ = (function dk$cst$cuphic$symbols$prefixed_with_QMARK_(sym,prefix){
return clojure.string.starts_with_QMARK_(cljs.core.name(sym),prefix);
});
dk.cst.cuphic.symbols.wildcard_QMARK_ = (function dk$cst$cuphic$symbols$wildcard_QMARK_(pnode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pnode,dk.cst.cuphic.symbols.wildcard);
});
dk.cst.cuphic.symbols.optional_QMARK_ = (function dk$cst$cuphic$symbols$optional_QMARK_(pnode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pnode,dk.cst.cuphic.symbols.optional);
});
dk.cst.cuphic.symbols.variable_QMARK_ = (function dk$cst$cuphic$symbols$variable_QMARK_(pnode){
return (((pnode instanceof cljs.core.Symbol)) && (((cljs.core.not((function (){var fexpr__40989 = cljs.core.PersistentHashSet.createAsIfByAssoc([dk.cst.cuphic.symbols.omission,dk.cst.cuphic.symbols.wildcard,dk.cst.cuphic.symbols.optional_omission,dk.cst.cuphic.symbols.optional]);
return (fexpr__40989.cljs$core$IFn$_invoke$arity$1 ? fexpr__40989.cljs$core$IFn$_invoke$arity$1(pnode) : fexpr__40989.call(null,pnode));
})())) && ((!(dk.cst.cuphic.symbols.prefixed_with_QMARK_(pnode,"?")))))));
});
dk.cst.cuphic.symbols.optional_variable_QMARK_ = (function dk$cst$cuphic$symbols$optional_variable_QMARK_(pnode){
return (((pnode instanceof cljs.core.Symbol)) && (((cljs.core.not((function (){var fexpr__40993 = cljs.core.PersistentHashSet.createAsIfByAssoc([dk.cst.cuphic.symbols.optional_omission,dk.cst.cuphic.symbols.optional]);
return (fexpr__40993.cljs$core$IFn$_invoke$arity$1 ? fexpr__40993.cljs$core$IFn$_invoke$arity$1(pnode) : fexpr__40993.call(null,pnode));
})())) && (dk.cst.cuphic.symbols.prefixed_with_QMARK_(pnode,"?")))));
});
dk.cst.cuphic.symbols.slot_QMARK_ = (function dk$cst$cuphic$symbols$slot_QMARK_(pnode){
return (pnode instanceof cljs.core.Symbol);
});
dk.cst.cuphic.symbols.optional_omission_QMARK_ = (function dk$cst$cuphic$symbols$optional_omission_QMARK_(pnode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pnode,dk.cst.cuphic.symbols.optional_omission);
});
dk.cst.cuphic.symbols.definite_omission_QMARK_ = (function dk$cst$cuphic$symbols$definite_omission_QMARK_(pnode){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pnode,dk.cst.cuphic.symbols.omission);
});
/**
 * Does this `pnode` mark omission?
 */
dk.cst.cuphic.symbols.omission_QMARK_ = (function dk$cst$cuphic$symbols$omission_QMARK_(pnode){
return ((dk.cst.cuphic.symbols.definite_omission_QMARK_(pnode)) || (dk.cst.cuphic.symbols.optional_omission_QMARK_(pnode)));
});
dk.cst.cuphic.symbols.optional_repetition_QMARK_ = (function dk$cst$cuphic$symbols$optional_repetition_QMARK_(pnode){
return ((cljs.core.list_QMARK_(pnode)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.symbols.optional_omission,cljs.core.first(pnode))));
});
dk.cst.cuphic.symbols.definite_repetition_QMARK_ = (function dk$cst$cuphic$symbols$definite_repetition_QMARK_(pnode){
return ((cljs.core.list_QMARK_(pnode)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.symbols.omission,cljs.core.first(pnode))));
});
/**
 * Does this `pnode` mark repetition?
 */
dk.cst.cuphic.symbols.repetition_QMARK_ = (function dk$cst$cuphic$symbols$repetition_QMARK_(pnode){
return ((dk.cst.cuphic.symbols.definite_repetition_QMARK_(pnode)) || (dk.cst.cuphic.symbols.optional_repetition_QMARK_(pnode)));
});
/**
 * Does this `pnode` mark omission or repetition?
 */
dk.cst.cuphic.symbols.quantification_QMARK_ = (function dk$cst$cuphic$symbols$quantification_QMARK_(pnode){
return ((dk.cst.cuphic.symbols.omission_QMARK_(pnode)) || (dk.cst.cuphic.symbols.repetition_QMARK_(pnode)));
});
/**
 * Does this `pnode` allow for 0 cases? I.e. will the full pattern still be able
 *   to be matched even if pnode is represented by 0 nodes?
 */
dk.cst.cuphic.symbols.optional_quantification_QMARK_ = (function dk$cst$cuphic$symbols$optional_quantification_QMARK_(pnode){
return ((dk.cst.cuphic.symbols.optional_omission_QMARK_(pnode)) || (dk.cst.cuphic.symbols.optional_repetition_QMARK_(pnode)));
});
/**
 * Will this `pnode` match nodes arbitrarily?
 */
dk.cst.cuphic.symbols.arbitrary_QMARK_ = (function dk$cst$cuphic$symbols$arbitrary_QMARK_(pnode){
return ((dk.cst.cuphic.symbols.wildcard_QMARK_(pnode)) || (((dk.cst.cuphic.symbols.variable_QMARK_(pnode)) || (((dk.cst.cuphic.symbols.optional_quantification_QMARK_(pnode)) || (((dk.cst.cuphic.symbols.repetition_QMARK_(pnode)) && (cljs.core.every_QMARK_(dk.cst.cuphic.symbols.arbitrary_QMARK_,cljs.core.rest(pnode))))))))));
});
dk.cst.cuphic.symbols.slot_type = (function dk$cst$cuphic$symbols$slot_type(pnode){
if(cljs.core.list_QMARK_(pnode)){
var pred__41035 = cljs.core._EQ_;
var expr__41036 = cljs.core.first(pnode);
if(cljs.core.truth_((pred__41035.cljs$core$IFn$_invoke$arity$2 ? pred__41035.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.symbols.omission,expr__41036) : pred__41035.call(null,dk.cst.cuphic.symbols.omission,expr__41036)))){
return new cljs.core.Keyword(null,"definite-repetition","definite-repetition",1919944834);
} else {
if(cljs.core.truth_((pred__41035.cljs$core$IFn$_invoke$arity$2 ? pred__41035.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.symbols.optional_omission,expr__41036) : pred__41035.call(null,dk.cst.cuphic.symbols.optional_omission,expr__41036)))){
return new cljs.core.Keyword(null,"optional-repetition","optional-repetition",1433494496);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41036)].join('')));
}
}
} else {
if(dk.cst.cuphic.symbols.optional_QMARK_(pnode)){
return new cljs.core.Keyword(null,"optional","optional",2053951509);
} else {
if(dk.cst.cuphic.symbols.wildcard_QMARK_(pnode)){
return new cljs.core.Keyword(null,"wildcard","wildcard",-622473020);
} else {
if(dk.cst.cuphic.symbols.optional_omission_QMARK_(pnode)){
return new cljs.core.Keyword(null,"optional-omission","optional-omission",392770544);
} else {
if(dk.cst.cuphic.symbols.definite_omission_QMARK_(pnode)){
return new cljs.core.Keyword(null,"definite-omission","definite-omission",1124509418);
} else {
if(dk.cst.cuphic.symbols.optional_variable_QMARK_(pnode)){
return new cljs.core.Keyword(null,"optional-variable","optional-variable",843836095);
} else {
if(dk.cst.cuphic.symbols.variable_QMARK_(pnode)){
return new cljs.core.Keyword(null,"variable","variable",-281346492);
} else {
return null;
}
}
}
}
}
}
}
});

//# sourceMappingURL=dk.cst.cuphic.symbols.js.map
