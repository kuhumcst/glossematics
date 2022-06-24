goog.provide('dk.cst.glossematics.frontend.shared');
dk.cst.glossematics.frontend.shared._surname_first = (function dk$cst$glossematics$frontend$shared$_surname_first(s){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.last(parts),", ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.butlast(parts)));
});
/**
 * Put the surname of `s` in front, followed by a comma and the other parts.
 */
dk.cst.glossematics.frontend.shared.surname_first = cljs.core.memoize(dk.cst.glossematics.frontend.shared._surname_first);
/**
 * Remove prepended parentheses from `s`.
 */
dk.cst.glossematics.frontend.shared.str_sort_val = (function dk$cst$glossematics$frontend$shared$str_sort_val(s){
return clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/^\(.+\)\s*/,""),/^\-\s*/,"");
});
/**
 * Is the `element` fully located inside the browser's viewport?
 */
dk.cst.glossematics.frontend.shared.visible_QMARK_ = (function dk$cst$glossematics$frontend$shared$visible_QMARK_(element){
var rect = element.getBoundingClientRect();
return (((((rect.top >= rect.left)) && ((rect.left >= (0))))) && ((((rect.bottom <= (function (){var or__5045__auto__ = window.innerHeight;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document.documentElement.clientHeight;
}
})())) && ((rect.right <= (function (){var or__5045__auto__ = window.innerWidth;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document.documentElement.clientWidth;
}
})())))));
});
/**
 * Scroll to the `fragment`; if none specified, read from window.location.hash.
 */
dk.cst.glossematics.frontend.shared.find_fragment = (function dk$cst$glossematics$frontend$shared$find_fragment(var_args){
var G__45864 = arguments.length;
switch (G__45864) {
case 1:
return dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$1 = (function (fragment){
var temp__5804__auto__ = document.querySelector(fragment);
if(cljs.core.truth_(temp__5804__auto__)){
var elem = temp__5804__auto__;
return elem.scrollIntoView(({"behavior": "smooth"}));
} else {
return null;
}
}));

(dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5804__auto__ = cljs.core.not_empty(window.location.hash);
if(cljs.core.truth_(temp__5804__auto__)){
var fragment = temp__5804__auto__;
return dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$1(fragment);
} else {
return null;
}
}));

(dk.cst.glossematics.frontend.shared.find_fragment.cljs$lang$maxFixedArity = 1);

dk.cst.glossematics.frontend.shared.encyclopedia_href = (function dk$cst$glossematics$frontend$shared$encyclopedia_href(ref){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.search.encyclopedia","entry","dk.cst.glossematics.frontend.page.search.encyclopedia/entry",847361201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((clojure.string.starts_with_QMARK_(ref,"#"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ref,(1)):ref)], null));
});
dk.cst.glossematics.frontend.shared.search_href = (function dk$cst$glossematics$frontend$shared$search_href(ref){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.search","page","dk.cst.glossematics.frontend.page.search/page",-718726271),cljs.core.PersistentArrayMap.EMPTY,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(dk.cst.glossematics.frontend.state.query_defaults,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"offset","offset",296498311)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"_","_",-1201019570,null),ref], null)], 0)));
});
dk.cst.glossematics.frontend.shared.index_href = (function dk$cst$glossematics$frontend$shared$index_href(entity_type){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.index","page","dk.cst.glossematics.frontend.page.index/page",1949521331),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.name(entity_type)], null));
});
dk.cst.glossematics.frontend.shared.reader_href = (function dk$cst$glossematics$frontend$shared$reader_href(document){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.reader","page","dk.cst.glossematics.frontend.page.reader/page",-767414306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"document","document",-1329188687),document], null));
});
dk.cst.glossematics.frontend.shared.bib_href = (function dk$cst$glossematics$frontend$shared$bib_href(author){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.bibliography","page","dk.cst.glossematics.frontend.page.bibliography/page",1192584763),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),author], null));
});
/**
 * Make sure `s` is a legal HTML id/fragment, e.g. doesn't start with a number.
 */
dk.cst.glossematics.frontend.shared.legal_id = (function dk$cst$glossematics$frontend$shared$legal_id(s){
var s_SINGLEQUOTE_ = clojure.string.replace(s,/[æøåÆØÅ]/,dk.cst.glossematics.static_data.danish_letter__GT_ascii);
if(cljs.core.not(cljs.core.re_matches(/[a-zA-Z0-9]+/,s_SINGLEQUOTE_))){
return ["X",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(cljs.core.hash(s_SINGLEQUOTE_)))].join('');
} else {
if(cljs.core.truth_(cljs.core.re_find(/^\d/,s_SINGLEQUOTE_))){
return ["No",s_SINGLEQUOTE_].join('');
} else {
return s_SINGLEQUOTE_;

}
}
});
dk.cst.glossematics.frontend.shared.backgrounds = cljs.core.cycle(dk.cst.stucco.pattern.background_colours);
dk.cst.glossematics.frontend.shared.add_backgrounds = (function dk$cst$glossematics$frontend$shared$add_backgrounds(kvs,offset){
return dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$3(kvs,cljs.core.identity,((typeof offset === 'number')?cljs.core.drop.cljs$core$IFn$_invoke$arity$2(offset,dk.cst.glossematics.frontend.shared.backgrounds):dk.cst.glossematics.frontend.shared.backgrounds));
});
dk.cst.glossematics.frontend.shared.sort_coll = (function dk$cst$glossematics$frontend$shared$sort_coll(id__GT_name,coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((cljs.core.inst_QMARK_(cljs.core.first(coll)))?cljs.core.identity:cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.shared.str_sort_val,(function (p1__45876_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(id__GT_name,p1__45876_SHARP_,p1__45876_SHARP_);
}))),coll);
});
dk.cst.glossematics.frontend.shared.group_coll = (function dk$cst$glossematics$frontend$shared$group_coll(id__GT_type,coll){
return cljs.core.group_by(((cljs.core.inst_QMARK_(cljs.core.first(coll)))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,tick.core.year):cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"entity-label","entity-label",-1985702332),dk.cst.glossematics.static_data.entity_types,id__GT_type)),coll);
});
/**
 * Transducer for annotating long Hiccup strings with word break opportunities.
 */
dk.cst.glossematics.frontend.shared.break_str_xf = (function (){var sep_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/_|\./);
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1(sep_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (cs){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs),(1));
if(and__5043__auto__){
return sep_QMARK_(cljs.core.first(cs));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wbr","wbr",228661800)], null),cljs.core.first(cs)], null);
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cs);
}
})));
})();
/**
 * Annotate `s` with word break opportunities.
 */
dk.cst.glossematics.frontend.shared.break_str = (function dk$cst$glossematics$frontend$shared$break_str(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),dk.cst.glossematics.frontend.shared.break_str_xf,s);
});
/**
 * Create a Hiccup representation for `v` based on `k` and the source `m`;
 *   names are sourced via the `search-state`.
 */
dk.cst.glossematics.frontend.shared.metadata_table_val = (function dk$cst$glossematics$frontend$shared$metadata_table_val(p__45896,m,k,v){
var map__45897 = p__45896;
var map__45897__$1 = cljs.core.__destructure_map(map__45897);
var search_state = map__45897__$1;
var id__GT_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45897__$1,new cljs.core.Keyword(null,"id->name","id->name",249122446));
var id__GT_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45897__$1,new cljs.core.Keyword(null,"id->type","id->type",923482451));
var into_ul = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45891_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),p1__45891_SHARP_],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45890_SHARP_){
return (dk.cst.glossematics.frontend.shared.metadata_table_val.cljs$core$IFn$_invoke$arity$4 ? dk.cst.glossematics.frontend.shared.metadata_table_val.cljs$core$IFn$_invoke$arity$4(search_state,m,k,p1__45890_SHARP_) : dk.cst.glossematics.frontend.shared.metadata_table_val.call(null,search_state,m,k,p1__45890_SHARP_));
}),dk.cst.glossematics.frontend.shared.sort_coll(id__GT_name,coll))));
});
if(cljs.core.vector_QMARK_(v)){
return v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("document","facsimile","document/facsimile",-253376169))){
if(cljs.core.set_QMARK_(v)){
return cljs.core.count(v);
} else {
return (1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("document","bib-entry","document/bib-entry",-74471691))){
var href = dk.cst.glossematics.frontend.shared.bib_href((function (){var G__45904 = new cljs.core.Keyword("document","author","document/author",-1489857259).cljs$core$IFn$_invoke$arity$1(m);
return (dk.cst.glossematics.static_data.id__GT_author.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.id__GT_author.cljs$core$IFn$_invoke$arity$1(G__45904) : dk.cst.glossematics.static_data.id__GT_author.call(null,G__45904));
})());
var fragment = dk.cst.glossematics.frontend.shared.legal_id(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("document","year","document/year",659063502).cljs$core$IFn$_invoke$arity$1(m)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(href),"#",fragment].join('')], null),v], null);
} else {
if(((typeof v === 'string') && (clojure.string.starts_with_QMARK_(v,"#")))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.search_href(v),new cljs.core.Keyword(null,"title","title",636505583),"View in the reader",new cljs.core.Keyword(null,"key","key",-1516042587),v], null),(function (){var temp__5804__auto__ = (function (){var G__45906 = v;
var G__45906__$1 = (((G__45906 == null))?null:(id__GT_type.cljs$core$IFn$_invoke$arity$1 ? id__GT_type.cljs$core$IFn$_invoke$arity$1(G__45906) : id__GT_type.call(null,G__45906)));
var G__45906__$2 = (((G__45906__$1 == null))?null:(dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1(G__45906__$1) : dk.cst.glossematics.static_data.entity_types.call(null,G__45906__$1)));
if((G__45906__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"img-src","img-src",-108905265).cljs$core$IFn$_invoke$arity$1(G__45906__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var img_src = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.entity-icon","img.entity-icon",1791014534),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null);
} else {
return null;
}
})(),cljs.core.get.cljs$core$IFn$_invoke$arity$3(id__GT_name,v,v)], null);
} else {
if(cljs.core.set_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45908){
var vec__45909 = p__45908;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45909,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45909,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),k__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),into_ul(coll)], null)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,dk.cst.glossematics.frontend.shared.group_coll(id__GT_type,v))));
} else {
if(cljs.core.boolean_QMARK_(v)){
if(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"available"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.weak","span.weak",378905980),"n/a"], null);
}
} else {
if(cljs.core.inst_QMARK_(v)){
var d = v.toISOString();
var ret = clojure.string.split.cljs$core$IFn$_invoke$arity$2(d,/T/);
if(cljs.core.coll_QMARK_(ret)){
return cljs.core.first(ret);
} else {
return d;
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
}
}
}
}
}
});
dk.cst.glossematics.frontend.shared.metadata_table = (function dk$cst$glossematics$frontend$shared$metadata_table(search_state,m,kvs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.entity-metadata","table.entity-metadata",-241485661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$shared$metadata_table_$_iter__45916(s__45917){
return (new cljs.core.LazySeq(null,(function (){
var s__45917__$1 = s__45917;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45917__$1);
if(temp__5804__auto__){
var s__45917__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45917__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45917__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45919 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45918 = (0);
while(true){
if((i__45918 < size__5521__auto__)){
var vec__45923 = cljs.core._nth(c__5520__auto__,i__45918);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45923,(1),null);
cljs.core.chunk_append(b__45919,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.static_data.rel__GT_label,k,k))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),dk.cst.glossematics.frontend.shared.metadata_table_val(search_state,m,k,v)], null)], null));

var G__46005 = (i__45918 + (1));
i__45918 = G__46005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45919),dk$cst$glossematics$frontend$shared$metadata_table_$_iter__45916(cljs.core.chunk_rest(s__45917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45919),null);
}
} else {
var vec__45930 = cljs.core.first(s__45917__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dk.cst.glossematics.static_data.rel__GT_label,k,k))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),dk.cst.glossematics.frontend.shared.metadata_table_val(search_state,m,k,v)], null)], null),dk$cst$glossematics$frontend$shared$metadata_table_$_iter__45916(cljs.core.rest(s__45917__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(kvs);
})()], null)], null);
});
/**
 * Generic display of title+content `kvs`; `val-com` renders the content.
 */
dk.cst.glossematics.frontend.shared.kvs_list = (function dk$cst$glossematics$frontend$shared$kvs_list(var_args){
var args__5774__auto__ = [];
var len__5768__auto___46006 = arguments.length;
var i__5769__auto___46007 = (0);
while(true){
if((i__5769__auto___46007 < len__5768__auto___46006)){
args__5774__auto__.push((arguments[i__5769__auto___46007]));

var G__46008 = (i__5769__auto___46007 + (1));
i__5769__auto___46007 = G__46008;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return dk.cst.glossematics.frontend.shared.kvs_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(dk.cst.glossematics.frontend.shared.kvs_list.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,val_com,p__45942){
var vec__45944 = p__45942;
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45944,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl.kvs-list","dl.kvs-list",1605763202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (){
return dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$0();
})], null),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$shared$iter__45947(s__45948){
return (new cljs.core.LazySeq(null,(function (){
var s__45948__$1 = s__45948;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45948__$1);
if(temp__5804__auto__){
var s__45948__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45948__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45948__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45950 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45949 = (0);
while(true){
if((i__45949 < size__5521__auto__)){
var vec__45952 = cljs.core._nth(c__5520__auto__,i__45949);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45952,(1),null);
var kv = vec__45952;
cljs.core.chunk_append(b__45950,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),dk.cst.glossematics.frontend.shared.legal_id(k),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv))], null),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_com,v], null)], null)], null));

var G__46009 = (i__45949 + (1));
i__45949 = G__46009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45950),dk$cst$glossematics$frontend$shared$iter__45947(cljs.core.chunk_rest(s__45948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45950),null);
}
} else {
var vec__45962 = cljs.core.first(s__45948__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45962,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45962,(1),null);
var kv = vec__45962;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),dk.cst.glossematics.frontend.shared.legal_id(k),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv))], null),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_com,v], null)], null)], null),dk$cst$glossematics$frontend$shared$iter__45947(cljs.core.rest(s__45948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(dk.cst.glossematics.frontend.shared.add_backgrounds(kvs,offset));
})()], null);
}));

(dk.cst.glossematics.frontend.shared.kvs_list.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dk.cst.glossematics.frontend.shared.kvs_list.cljs$lang$applyTo = (function (seq45938){
var G__45939 = cljs.core.first(seq45938);
var seq45938__$1 = cljs.core.next(seq45938);
var G__45940 = cljs.core.first(seq45938__$1);
var seq45938__$2 = cljs.core.next(seq45938__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45939,G__45940,seq45938__$2);
}));

/**
 * If `x` is a 'coll' return the first item; else return `x`.
 */
dk.cst.glossematics.frontend.shared.single = (function dk$cst$glossematics$frontend$shared$single(x){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(x));
} else {
return x;
}
});

//# sourceMappingURL=dk.cst.glossematics.frontend.shared.js.map
