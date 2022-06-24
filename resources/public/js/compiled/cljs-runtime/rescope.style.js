goog.provide('rescope.style');
/**
 * Remove comments from a piece of `css`.
 */
rescope.style.remove_comments = (function rescope$style$remove_comments(css){
return clojure.string.replace(css,/\/\*.*\*\//,"");
});
/**
 * Super hairy, write-only code for adding a `prefix` to all element selectors
 *   in a piece of `css`.
 */
rescope.style.prefix_element_selectors = (function rescope$style$prefix_element_selectors(prefix,css){
var css_rule = /([^{]+)(\s*\{[^}]*\}\s*)/;
var _QMARK_element_split = /([\s\(\)]+)|([^\s\(\)]+)/;
var element_selector = /([a-zA-Z-]+).*/;
var add_prefix = (function (_QMARK_element){
if(cljs.core.truth_((function (){var and__5043__auto__ = typeof _QMARK_element === 'string';
if(and__5043__auto__){
return cljs.core.re_matches(element_selector,_QMARK_element);
} else {
return and__5043__auto__;
}
})())){
return rescope.util.prefixed(prefix,_QMARK_element);
} else {
return _QMARK_element;
}
});
var $ = css;
var $__$1 = cljs.core.re_seq(css_rule,$);
var $__$2 = (function (){var iter__5522__auto__ = (function rescope$style$prefix_element_selectors_$_iter__44991(s__44992){
return (new cljs.core.LazySeq(null,(function (){
var s__44992__$1 = s__44992;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44992__$1);
if(temp__5804__auto__){
var s__44992__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44992__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__44992__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__44994 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__44993 = (0);
while(true){
if((i__44993 < size__5521__auto__)){
var vec__44999 = cljs.core._nth(c__5520__auto__,i__44993);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44999,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44999,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44999,(2),null);
cljs.core.chunk_append(b__44994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5522__auto__ = ((function (i__44993,vec__44999,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__44994,s__44992__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function rescope$style$prefix_element_selectors_$_iter__44991_$_iter__45003(s__45004){
return (new cljs.core.LazySeq(null,((function (i__44993,vec__44999,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__44994,s__44992__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function (){
var s__45004__$1 = s__45004;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45004__$1);
if(temp__5804__auto____$1){
var s__45004__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45004__$2)){
var c__5520__auto____$1 = cljs.core.chunk_first(s__45004__$2);
var size__5521__auto____$1 = cljs.core.count(c__5520__auto____$1);
var b__45006 = cljs.core.chunk_buffer(size__5521__auto____$1);
if((function (){var i__45005 = (0);
while(true){
if((i__45005 < size__5521__auto____$1)){
var _QMARK_elements = cljs.core._nth(c__5520__auto____$1,i__45005);
cljs.core.chunk_append(b__45006,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements));

var G__45093 = (i__45005 + (1));
i__45005 = G__45093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45006),rescope$style$prefix_element_selectors_$_iter__44991_$_iter__45003(cljs.core.chunk_rest(s__45004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45006),null);
}
} else {
var _QMARK_elements = cljs.core.first(s__45004__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements),rescope$style$prefix_element_selectors_$_iter__44991_$_iter__45003(cljs.core.rest(s__45004__$2)));
}
} else {
return null;
}
break;
}
});})(i__44993,vec__44999,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__44994,s__44992__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
,null,null));
});})(i__44993,vec__44999,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__44994,s__44992__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
;
return iter__5522__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_element_split,selector)));
})(),declaration], null));

var G__45094 = (i__44993 + (1));
i__44993 = G__45094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44994),rescope$style$prefix_element_selectors_$_iter__44991(cljs.core.chunk_rest(s__44992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44994),null);
}
} else {
var vec__45011 = cljs.core.first(s__44992__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45011,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45011,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45011,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5522__auto__ = ((function (vec__45011,_,selector,declaration,s__44992__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix){
return (function rescope$style$prefix_element_selectors_$_iter__44991_$_iter__45014(s__45015){
return (new cljs.core.LazySeq(null,(function (){
var s__45015__$1 = s__45015;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45015__$1);
if(temp__5804__auto____$1){
var s__45015__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45015__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45015__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45017 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45016 = (0);
while(true){
if((i__45016 < size__5521__auto__)){
var _QMARK_elements = cljs.core._nth(c__5520__auto__,i__45016);
cljs.core.chunk_append(b__45017,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements));

var G__45096 = (i__45016 + (1));
i__45016 = G__45096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45017),rescope$style$prefix_element_selectors_$_iter__44991_$_iter__45014(cljs.core.chunk_rest(s__45015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45017),null);
}
} else {
var _QMARK_elements = cljs.core.first(s__45015__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_prefix,_QMARK_elements),rescope$style$prefix_element_selectors_$_iter__44991_$_iter__45014(cljs.core.rest(s__45015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__45011,_,selector,declaration,s__44992__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_element_split,element_selector,add_prefix))
;
return iter__5522__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_element_split,selector)));
})(),declaration], null),rescope$style$prefix_element_selectors_$_iter__44991(cljs.core.rest(s__44992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__($__$1);
})();
var $__$3 = cljs.core.flatten($__$2);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,$__$3);
});
/**
 * More Perl-wannabe, garbage code for prefixing data-* to attribute selectors
 *   in a piece of `css`.
 */
rescope.style.convert_to_data__STAR_ = (function rescope$style$convert_to_data__STAR_(css){
var css_rule = /([^{]+)(\s*\{[^}]*\}\s*)/;
var _QMARK_attr_split = /(\[[^\]]+\])|([^\[]+)/;
var attr_selector = /\[([a-zA-Z]+)(.*)/;
var add_data__STAR_ = (function (_QMARK_attr){
var temp__5802__auto__ = (function (){var and__5043__auto__ = typeof _QMARK_attr === 'string';
if(and__5043__auto__){
return cljs.core.re_matches(attr_selector,_QMARK_attr);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var vec__45029 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45029,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45029,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45029,(2),null);
return ["[",rescope.util.data__STAR_(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return _QMARK_attr;
}
});
var $ = css;
var $__$1 = cljs.core.re_seq(css_rule,$);
var $__$2 = (function (){var iter__5522__auto__ = (function rescope$style$convert_to_data__STAR__$_iter__45033(s__45034){
return (new cljs.core.LazySeq(null,(function (){
var s__45034__$1 = s__45034;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45034__$1);
if(temp__5804__auto__){
var s__45034__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45034__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45034__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45036 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45035 = (0);
while(true){
if((i__45035 < size__5521__auto__)){
var vec__45037 = cljs.core._nth(c__5520__auto__,i__45035);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45037,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45037,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45037,(2),null);
cljs.core.chunk_append(b__45036,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5522__auto__ = ((function (i__45035,vec__45037,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__45036,s__45034__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function rescope$style$convert_to_data__STAR__$_iter__45033_$_iter__45042(s__45043){
return (new cljs.core.LazySeq(null,((function (i__45035,vec__45037,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__45036,s__45034__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function (){
var s__45043__$1 = s__45043;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45043__$1);
if(temp__5804__auto____$1){
var s__45043__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45043__$2)){
var c__5520__auto____$1 = cljs.core.chunk_first(s__45043__$2);
var size__5521__auto____$1 = cljs.core.count(c__5520__auto____$1);
var b__45045 = cljs.core.chunk_buffer(size__5521__auto____$1);
if((function (){var i__45044 = (0);
while(true){
if((i__45044 < size__5521__auto____$1)){
var _QMARK_attrs = cljs.core._nth(c__5520__auto____$1,i__45044);
cljs.core.chunk_append(b__45045,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs));

var G__45108 = (i__45044 + (1));
i__45044 = G__45108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45045),rescope$style$convert_to_data__STAR__$_iter__45033_$_iter__45042(cljs.core.chunk_rest(s__45043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45045),null);
}
} else {
var _QMARK_attrs = cljs.core.first(s__45043__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs),rescope$style$convert_to_data__STAR__$_iter__45033_$_iter__45042(cljs.core.rest(s__45043__$2)));
}
} else {
return null;
}
break;
}
});})(i__45035,vec__45037,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__45036,s__45034__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
,null,null));
});})(i__45035,vec__45037,_,selector,declaration,c__5520__auto__,size__5521__auto__,b__45036,s__45034__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
;
return iter__5522__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_attr_split,selector)));
})(),declaration], null));

var G__45109 = (i__45035 + (1));
i__45035 = G__45109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45036),rescope$style$convert_to_data__STAR__$_iter__45033(cljs.core.chunk_rest(s__45034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45036),null);
}
} else {
var vec__45060 = cljs.core.first(s__45034__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45060,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45060,(1),null);
var declaration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45060,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5522__auto__ = ((function (vec__45060,_,selector,declaration,s__45034__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_){
return (function rescope$style$convert_to_data__STAR__$_iter__45033_$_iter__45063(s__45064){
return (new cljs.core.LazySeq(null,(function (){
var s__45064__$1 = s__45064;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45064__$1);
if(temp__5804__auto____$1){
var s__45064__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45064__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45064__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45066 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45065 = (0);
while(true){
if((i__45065 < size__5521__auto__)){
var _QMARK_attrs = cljs.core._nth(c__5520__auto__,i__45065);
cljs.core.chunk_append(b__45066,cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs));

var G__45113 = (i__45065 + (1));
i__45065 = G__45113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45066),rescope$style$convert_to_data__STAR__$_iter__45033_$_iter__45063(cljs.core.chunk_rest(s__45064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45066),null);
}
} else {
var _QMARK_attrs = cljs.core.first(s__45064__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_data__STAR_,_QMARK_attrs),rescope$style$convert_to_data__STAR__$_iter__45033_$_iter__45063(cljs.core.rest(s__45064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__45060,_,selector,declaration,s__45034__$2,temp__5804__auto__,$,$__$1,css_rule,_QMARK_attr_split,attr_selector,add_data__STAR_))
;
return iter__5522__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.re_seq(_QMARK_attr_split,selector)));
})(),declaration], null),rescope$style$convert_to_data__STAR__$_iter__45033(cljs.core.rest(s__45034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__($__$1);
})();
var $__$3 = cljs.core.flatten($__$2);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,$__$3);
});
/**
 * Remove superfluous newlines.
 */
rescope.style.trim_blank_space = (function rescope$style$trim_blank_space(css){
return clojure.string.triml(clojure.string.replace(clojure.string.replace(css,/ +\n/,"\n"),/\n\n+/,"\n\n"));
});
/**
 * Patch a piece of `css` written for the original document structure so that it
 *   matches the postprocessed hiccup. Will remove comments, add `prefix` to
 *   element selectors, and convert all attribute selectors to the data-* style.
 */
rescope.style.prefix_css = (function rescope$style$prefix_css(prefix,css){
return rescope.style.trim_blank_space(rescope.style.convert_to_data__STAR_(rescope.style.prefix_element_selectors(prefix,rescope.style.remove_comments(css))));
});

//# sourceMappingURL=rescope.style.js.map
