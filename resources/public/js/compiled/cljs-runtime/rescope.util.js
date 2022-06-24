goog.provide('rescope.util');
rescope.util.reserved_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["missing-glyph",null,"font-face-src",null,"font-face-uri",null,"font-face-format",null,"font-face-name",null,"font-face",null,"annotation-xml",null,"color-profile",null], null), null);
rescope.util.custom_tag = /\w+(-\w+)+/;
rescope.util.valid_custom_tag_QMARK_ = (function rescope$util$valid_custom_tag_QMARK_(tag_str){
var and__5043__auto__ = cljs.core.not((rescope.util.reserved_tags.cljs$core$IFn$_invoke$arity$1 ? rescope.util.reserved_tags.cljs$core$IFn$_invoke$arity$1(tag_str) : rescope.util.reserved_tags.call(null,tag_str)));
if(and__5043__auto__){
return cljs.core.re_matches(rescope.util.custom_tag,tag_str);
} else {
return and__5043__auto__;
}
});
/**
 * Add a `prefix` to an HTML `tag`, creating a valid custom HTML element name.
 */
rescope.util.prefixed = (function rescope$util$prefixed(prefix,tag){
var prefixed_tag = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
if(cljs.core.truth_((rescope.util.reserved_tags.cljs$core$IFn$_invoke$arity$1 ? rescope.util.reserved_tags.cljs$core$IFn$_invoke$arity$1(prefixed_tag) : rescope.util.reserved_tags.call(null,prefixed_tag)))){
return [prefixed_tag,"-x"].join('');
} else {
return prefixed_tag;
}
});
/**
 * Convert an XML attribute `k` into a data-* attribute.
 */
rescope.util.data__STAR_ = (function rescope$util$data__STAR_(k){
var $ = k;
var $__$1 = cljs.core.name($);
var $__$2 = clojure.string.replace($__$1,":","-");
return ["data-",$__$2].join('');
});

//# sourceMappingURL=rescope.util.js.map
