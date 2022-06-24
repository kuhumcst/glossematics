goog.provide('dk.cst.glossematics.frontend.api');
dk.cst.glossematics.frontend.api.refresh_dialog_msg = (function dk$cst$glossematics$frontend$api$refresh_dialog_msg(status){
return ["Cannot fetch necessary data from the server. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__45641 = status;
switch (G__45641) {
case (403):
return "The resource is restricted \u2014 you may have been logged out!\n\n";

break;
case (404):
return "The resource does not exist \u2014 the page may need to refresh!\n\n";

break;
default:
return null;

}
})()),"Do you want to log in again and refresh the page?\n\n"].join('');
});
/**
 * Display a dialog based on the HTTP `status` asking to refresh the page.
 */
dk.cst.glossematics.frontend.api.refresh_dialog = (function dk$cst$glossematics$frontend$api$refresh_dialog(status){
if(cljs.core.truth_(dk.cst.glossematics.frontend.state._STAR_block_modal_dialogs_STAR_)){
return null;
} else {
(dk.cst.glossematics.frontend.state._STAR_block_modal_dialogs_STAR_ = true);

if(cljs.core.truth_(confirm(dk.cst.glossematics.frontend.api.refresh_dialog_msg(status)))){
return location.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"saml-login","saml-login",1377745813).cljs$core$IFn$_invoke$arity$1(dk.cst.glossematics.frontend.state.paths)),"?RelayState=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.href)].join(''));
} else {
return null;
}
}
});
dk.cst.glossematics.frontend.api.normalize_url = (function dk$cst$glossematics$frontend$api$normalize_url(url){
if(cljs.core.truth_(dk.cst.glossematics.frontend.state.development_QMARK_)){
return ["http://localhost:8080",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
} else {
return url;
}
});
/**
 * Do a GET request for the resource at `url`, returning the response body.
 *   Bad response codes result in a dialog asking the user to log in again.
 * 
 *   Usually, bad responses (e.g. 403) are caused by frontend-server mismatch
 *   which can be resolved by loading the latest version of the frontend app.
 */
dk.cst.glossematics.frontend.api.fetch = (function dk$cst$glossematics$frontend$api$fetch(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45660 = arguments.length;
var i__5769__auto___45661 = (0);
while(true){
if((i__5769__auto___45661 < len__5768__auto___45660)){
args__5774__auto__.push((arguments[i__5769__auto___45661]));

var G__45663 = (i__5769__auto___45661 + (1));
i__5769__auto___45661 = G__45663;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return dk.cst.glossematics.frontend.api.fetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(dk.cst.glossematics.frontend.api.fetch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__45648){
var vec__45649 = p__45648;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45649,(0),null);
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((function (){var G__45653 = dk.cst.glossematics.frontend.api.normalize_url(url);
var G__45654 = opts;
return (lambdaisland.fetch.get.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.fetch.get.cljs$core$IFn$_invoke$arity$2(G__45653,G__45654) : lambdaisland.fetch.get.call(null,G__45653,G__45654));
})(),(function (p__45655){
var map__45656 = p__45655;
var map__45656__$1 = cljs.core.__destructure_map(map__45656);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45656__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45656__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,(200))){
return dk.cst.glossematics.frontend.api.refresh_dialog(status);
} else {
return body;
}
})));
}catch (e45652){var e__40824__auto__ = e45652;
return kitchen_async.promise.reject(e__40824__auto__);
}}));

(dk.cst.glossematics.frontend.api.fetch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dk.cst.glossematics.frontend.api.fetch.cljs$lang$applyTo = (function (seq45643){
var G__45644 = cljs.core.first(seq45643);
var seq45643__$1 = cljs.core.next(seq45643);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45644,seq45643__$1);
}));


//# sourceMappingURL=dk.cst.glossematics.frontend.api.js.map
