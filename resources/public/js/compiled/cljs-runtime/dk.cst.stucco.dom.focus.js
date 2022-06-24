goog.provide('dk.cst.stucco.dom.focus');
dk.cst.stucco.dom.focus._STAR_requested_focus_STAR_ = null;
/**
 * Request that the element with the given `id` is given focus next.
 *   The element should have accept-focus! as its :ref handler.
 */
dk.cst.stucco.dom.focus.request_BANG_ = (function dk$cst$stucco$dom$focus$request_BANG_(id){
return (dk.cst.stucco.dom.focus._STAR_requested_focus_STAR_ = id);
});
/**
 * Focus the HTML `element` if it has been requested. Use as a :ref handler.
 */
dk.cst.stucco.dom.focus.accept_BANG_ = (function dk$cst$stucco$dom$focus$accept_BANG_(element){
if(cljs.core.truth_((function (){var and__5043__auto__ = element;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element.id,dk.cst.stucco.dom.focus._STAR_requested_focus_STAR_);
} else {
return and__5043__auto__;
}
})())){
(dk.cst.stucco.dom.focus._STAR_requested_focus_STAR_ = null);

return element.focus();
} else {
return null;
}
});

//# sourceMappingURL=dk.cst.stucco.dom.focus.js.map
