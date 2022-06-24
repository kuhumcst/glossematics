goog.provide('dk.cst.pedestal.sp.auth');
/**
 * Is `m` a submap of `parent`?
 */
dk.cst.pedestal.sp.auth.submap_QMARK_ = (function dk$cst$pedestal$sp$auth$submap_QMARK_(m,parent){
return (cljs.core.first(clojure.data.diff(m,parent)) == null);
});
dk.cst.pedestal.sp.auth.request__GT_assertions = (function dk$cst$pedestal$sp$auth$request__GT_assertions(request){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"saml","saml",325260316),new cljs.core.Keyword(null,"assertions","assertions",-971608611)], null));
});
/**
 * Return a function to test an assertions map based on a given `condition`:
 * 
 *  :authenticated - requires authentication to access.
 *            :all - can be accessed by anyone, no restrictions apply.
 *           :none - no access by anyone under any circumstances.
 *             map - allow access when the assertions contain this submap.
 *              fn - takes assertions as input and returns true if accessible.
 */
dk.cst.pedestal.sp.auth.condition__GT_auth_test = (function dk$cst$pedestal$sp$auth$condition__GT_auth_test(condition){
if((condition instanceof cljs.core.Keyword)){
var G__39348 = condition;
var G__39348__$1 = (((G__39348 instanceof cljs.core.Keyword))?G__39348.fqn:null);
switch (G__39348__$1) {
case "authenticated":
return cljs.core.some_QMARK_;

break;
case "all":
return cljs.core.constantly(true);

break;
case "none":
return cljs.core.constantly(false);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39348__$1)].join('')));

}
} else {
if(cljs.core.map_QMARK_(condition)){
return (function (p1__39345_SHARP_){
return dk.cst.pedestal.sp.auth.submap_QMARK_(condition,p1__39345_SHARP_);
});
} else {
if(cljs.core.fn_QMARK_(condition)){
return condition;
} else {
return null;
}
}
}
});
/**
 * Create an auth test override from the `assertions` map.
 * 
 *   During development, the assertions map may contain a :condition key defining
 *   an alternative test used to override the conditions of a production system.
 */
dk.cst.pedestal.sp.auth.auth_override = (function dk$cst$pedestal$sp$auth$auth_override(assertions){
return dk.cst.pedestal.sp.auth.condition__GT_auth_test(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertions));
});

//# sourceMappingURL=dk.cst.pedestal.sp.auth.js.map
