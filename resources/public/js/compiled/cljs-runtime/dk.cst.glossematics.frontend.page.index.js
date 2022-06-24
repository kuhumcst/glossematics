goog.provide('dk.cst.glossematics.frontend.page.index');
/**
 * The canonical index group for a given `s`; used for group-by.
 */
dk.cst.glossematics.frontend.page.index.str__GT_index_group = (function dk$cst$glossematics$frontend$page$index$str__GT_index_group(s){
if(cljs.core.truth_(s)){
return cljs.core.first(clojure.string.upper_case(dk.cst.glossematics.frontend.shared.str_sort_val(s)));
} else {
return null;
}
});
dk.cst.glossematics.frontend.page.index.index_groups = (function dk$cst$glossematics$frontend$page$index$index_groups(search_metadata,entity_type){
var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(search_metadata,entity_type);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.index.str__GT_index_group,cljs.core.first),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(entity_type,new cljs.core.Keyword("entity.type","person","entity.type/person",855259842)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46014){
var vec__46015 = p__46014;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46015,(1),null);
var k_SINGLEQUOTE_ = dk.cst.glossematics.frontend.shared.surname_first(k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.ends_with_QMARK_(k_SINGLEQUOTE_,", "))?k:k_SINGLEQUOTE_),v], null);
}),entities):entities)))));
});
dk.cst.glossematics.frontend.page.index.index_links = (function dk$cst$glossematics$frontend$page$index$index_links(var_args){
var args__5774__auto__ = [];
var len__5768__auto___46056 = arguments.length;
var i__5769__auto___46057 = (0);
while(true){
if((i__5769__auto___46057 < len__5768__auto___46056)){
args__5774__auto__.push((arguments[i__5769__auto___46057]));

var G__46058 = (i__5769__auto___46057 + (1));
i__5769__auto___46057 = G__46058;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return dk.cst.glossematics.frontend.page.index.index_links.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(dk.cst.glossematics.frontend.page.index.index_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__46020){
var vec__46021 = p__46020;
var current_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46021,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.index-links","p.index-links",-624197396)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46028){
var vec__46029 = p__46028;
var entity_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46029,(0),null);
var map__46032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46029,(1),null);
var map__46032__$1 = cljs.core.__destructure_map(map__46032);
var entity_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46032__$1,new cljs.core.Keyword(null,"entity-label","entity-label",-1985702332));
var img_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46032__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_type,entity_type)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.entity-icon","img.entity-icon",1791014534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src], null)], null),entity_label], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.index_href(entity_type),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_type,entity_type)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.entity-icon","img.entity-icon",1791014534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src], null)], null),entity_label], null);
}
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entity-label","entity-label",-1985702332),cljs.core.second),dk.cst.glossematics.static_data.entity_types))));
}));

(dk.cst.glossematics.frontend.page.index.index_links.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dk.cst.glossematics.frontend.page.index.index_links.cljs$lang$applyTo = (function (seq46019){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46019));
}));

dk.cst.glossematics.frontend.page.index.skip_links = (function dk$cst$glossematics$frontend$page$index$skip_links(groups){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.index-page__skip-links","p.index-page__skip-links",599666308)], null),cljs.core.vec(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46034){
var vec__46035 = p__46034;
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46035,(0),null);
var fragment = ["#",dk.cst.glossematics.frontend.shared.legal_id(letter)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),fragment,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$1(fragment);
})], null),letter], null);
}),groups))));
});
dk.cst.glossematics.frontend.page.index.index_content = (function dk$cst$glossematics$frontend$page$index$index_content(kvs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$index$index_content_$_iter__46038(s__46039){
return (new cljs.core.LazySeq(null,(function (){
var s__46039__$1 = s__46039;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46039__$1);
if(temp__5804__auto__){
var s__46039__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46039__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__46039__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__46041 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__46040 = (0);
while(true){
if((i__46040 < size__5521__auto__)){
var vec__46043 = cljs.core._nth(c__5520__auto__,i__46040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46043,(1),null);
cljs.core.chunk_append(b__46041,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.search_href(v)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null)], null));

var G__46063 = (i__46040 + (1));
i__46040 = G__46063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46041),dk$cst$glossematics$frontend$page$index$index_content_$_iter__46038(cljs.core.chunk_rest(s__46039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46041),null);
}
} else {
var vec__46046 = cljs.core.first(s__46039__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46046,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.search_href(v)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null)], null),dk$cst$glossematics$frontend$page$index$index_content_$_iter__46038(cljs.core.rest(s__46039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.shared.str_sort_val,cljs.core.first),kvs));
})()], null);
});
dk.cst.glossematics.frontend.page.index.page = (function dk$cst$glossematics$frontend$page$index$page(){
var map__46050 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__46050__$1 = cljs.core.__destructure_map(map__46050);
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46050__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var entity_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("entity.type",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dk.cst.glossematics.frontend.state.location),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"kind","kind",-717265803)], null)));
var map__46051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.static_data.entity_types,entity_type);
var map__46051__$1 = cljs.core.__destructure_map(map__46051);
var entity_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46051__$1,new cljs.core.Keyword(null,"entity-label","entity-label",-1985702332));
var img_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46051__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.index-page","div.index-page",2077864149),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src], null)], null)," ",entity_label], null),(cljs.core.truth_(metadata)?(function (){var groups = dk.cst.glossematics.frontend.page.index.index_groups(metadata,entity_type);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-content","div.text-content",-1548599504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.index.index_links,entity_type], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.index.skip_links,groups], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.shared.kvs_list,groups,dk.cst.glossematics.frontend.page.index.index_content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),groups], null))], null);
})():null)], null);
});

//# sourceMappingURL=dk.cst.glossematics.frontend.page.index.js.map
