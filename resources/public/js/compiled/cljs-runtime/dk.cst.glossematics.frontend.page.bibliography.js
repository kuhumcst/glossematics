goog.provide('dk.cst.glossematics.frontend.page.bibliography');
dk.cst.glossematics.frontend.page.bibliography.skip_links = (function dk$cst$glossematics$frontend$page$bibliography$skip_links(groups){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.index-page__skip-links","p.index-page__skip-links",599666308)], null),cljs.core.vec(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46010){
var vec__46011 = p__46010;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46011,(0),null);
var fragment = ["#",dk.cst.glossematics.frontend.shared.legal_id(year)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),fragment,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dk.cst.glossematics.frontend.shared.find_fragment.cljs$core$IFn$_invoke$arity$1(fragment);
})], null),year], null);
}),groups))));
});
/**
 * Ensures that `x` -- which can be either an ID, a name, or a set of either IDs
 *   or names -- parses correctly.
 */
dk.cst.glossematics.frontend.page.bibliography.handle_name = (function dk$cst$glossematics$frontend$page$bibliography$handle_name(id__GT_name,x){
if(cljs.core.truth_(x)){
var id__GT_name_SINGLEQUOTE_ = (function (p1__46018_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(id__GT_name,p1__46018_SHARP_,p1__46018_SHARP_);
});
if(cljs.core.set_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("; ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id__GT_name_SINGLEQUOTE_,x))));
} else {
return id__GT_name_SINGLEQUOTE_(x);
}
} else {
return null;
}
});
dk.cst.glossematics.frontend.page.bibliography.bibliography_content = (function dk$cst$glossematics$frontend$page$bibliography$bibliography_content(id__GT_name,entries){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$bibliography$bibliography_content_$_iter__46024(s__46025){
return (new cljs.core.LazySeq(null,(function (){
var s__46025__$1 = s__46025;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46025__$1);
if(temp__5804__auto__){
var s__46025__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46025__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__46025__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__46027 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__46026 = (0);
while(true){
if((i__46026 < size__5521__auto__)){
var map__46033 = cljs.core._nth(c__5520__auto__,i__46026);
var map__46033__$1 = cljs.core.__destructure_map(map__46033);
var entry = map__46033__$1;
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("document","author","document/author",-1489857259));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("document","title","document/title",-262963518));
var publisher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("document","publisher","document/publisher",737838799));
var publication = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("document","publication","document/publication",300799668));
var settlement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("document","settlement","document/settlement",-967009538));
var bib_entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("document","bib-entry","document/bib-entry",-74471691));
var pp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("document","pp","document/pp",438864697));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46033__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var title_SINGLEQUOTE_ = (cljs.core.truth_(title)?clojure.string.replace(dk.cst.glossematics.frontend.shared.single(title),/\.$/,""):null);
var title_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.reader_href(name)], null),title_SINGLEQUOTE_], null):title_SINGLEQUOTE_);
cljs.core.chunk_append(b__46027,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bib_entry], null),(function (){var temp__5804__auto____$1 = dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,author);
if(cljs.core.truth_(temp__5804__auto____$1)){
var author_name = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),dk.cst.glossematics.frontend.shared.surname_first(author_name),". "], null);
} else {
return null;
}
})(),(cljs.core.truth_(publication)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"\"",title_SINGLEQUOTE__SINGLEQUOTE_,"\". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,publication)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),title_SINGLEQUOTE__SINGLEQUOTE_], null)),(cljs.core.truth_(pp)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),", pp. ",pp], null):null),(function (){var temp__5804__auto____$1 = dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,publisher);
if(cljs.core.truth_(temp__5804__auto____$1)){
var publisher_name = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),", ",publisher_name], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto____$1 = dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,settlement);
if(cljs.core.truth_(temp__5804__auto____$1)){
var settlement_name = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),", ",settlement_name], null);
} else {
return null;
}
})(),", ",(cljs.core.truth_(cljs.core.re_find(/[a-z]$/,bib_entry))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(bib_entry,(0),(cljs.core.count(bib_entry) - (1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),cljs.core.last(bib_entry)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),bib_entry], null)),"."], null));

var G__46064 = (i__46026 + (1));
i__46026 = G__46064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46027),dk$cst$glossematics$frontend$page$bibliography$bibliography_content_$_iter__46024(cljs.core.chunk_rest(s__46025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46027),null);
}
} else {
var map__46042 = cljs.core.first(s__46025__$2);
var map__46042__$1 = cljs.core.__destructure_map(map__46042);
var entry = map__46042__$1;
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("document","author","document/author",-1489857259));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("document","title","document/title",-262963518));
var publisher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("document","publisher","document/publisher",737838799));
var publication = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("document","publication","document/publication",300799668));
var settlement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("document","settlement","document/settlement",-967009538));
var bib_entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("document","bib-entry","document/bib-entry",-74471691));
var pp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("document","pp","document/pp",438864697));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var title_SINGLEQUOTE_ = (cljs.core.truth_(title)?clojure.string.replace(dk.cst.glossematics.frontend.shared.single(title),/\.$/,""):null);
var title_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.reader_href(name)], null),title_SINGLEQUOTE_], null):title_SINGLEQUOTE_);
return cljs.core.cons(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bib_entry], null),(function (){var temp__5804__auto____$1 = dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,author);
if(cljs.core.truth_(temp__5804__auto____$1)){
var author_name = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),dk.cst.glossematics.frontend.shared.surname_first(author_name),". "], null);
} else {
return null;
}
})(),(cljs.core.truth_(publication)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"\"",title_SINGLEQUOTE__SINGLEQUOTE_,"\". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,publication)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),title_SINGLEQUOTE__SINGLEQUOTE_], null)),(cljs.core.truth_(pp)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),", pp. ",pp], null):null),(function (){var temp__5804__auto____$1 = dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,publisher);
if(cljs.core.truth_(temp__5804__auto____$1)){
var publisher_name = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),", ",publisher_name], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto____$1 = dk.cst.glossematics.frontend.page.bibliography.handle_name(id__GT_name,settlement);
if(cljs.core.truth_(temp__5804__auto____$1)){
var settlement_name = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),", ",settlement_name], null);
} else {
return null;
}
})(),", ",(cljs.core.truth_(cljs.core.re_find(/[a-z]$/,bib_entry))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(bib_entry,(0),(cljs.core.count(bib_entry) - (1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),cljs.core.last(bib_entry)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),bib_entry], null)),"."], null),dk$cst$glossematics$frontend$page$bibliography$bibliography_content_$_iter__46024(cljs.core.rest(s__46025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(entries);
})()], null);
});
dk.cst.glossematics.frontend.page.bibliography.fetch_results_BANG_ = (function dk$cst$glossematics$frontend$page$bibliography$fetch_results_BANG_(){
var query_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("entity","type","entity/type",-1331966609),new cljs.core.Keyword("entity.type","bibliographic-entry","entity.type/bibliographic-entry",900855474),new cljs.core.Keyword("file","extension","file/extension",1452357597),new cljs.core.Keyword(null,"ANY","ANY",234551374)], null);
return dk.cst.glossematics.frontend.api.fetch.cljs$core$IFn$_invoke$arity$variadic("/search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params], null)], 0)).then((function (p1__46049_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.frontend.state.bibliography,cljs.core.assoc,new cljs.core.Keyword(null,"results","results",-1134170113),p1__46049_SHARP_);
}));
});
dk.cst.glossematics.frontend.page.bibliography.bib_selection = (function dk$cst$glossematics$frontend$page$bibliography$bib_selection(id__GT_name,current_author,other_author){
var img_src = new cljs.core.Keyword(null,"img-src","img-src",-108905265).cljs$core$IFn$_invoke$arity$1((dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.entity_types.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("entity.type","person","entity.type/person",855259842)) : dk.cst.glossematics.static_data.entity_types.call(null,new cljs.core.Keyword("entity.type","person","entity.type/person",855259842))));
var full_name = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.shared.surname_first((function (){var G__46052 = (dk.cst.glossematics.static_data.author__GT_id.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.author__GT_id.cljs$core$IFn$_invoke$arity$1(other_author) : dk.cst.glossematics.static_data.author__GT_id.call(null,other_author));
return (id__GT_name.cljs$core$IFn$_invoke$arity$1 ? id__GT_name.cljs$core$IFn$_invoke$arity$1(G__46052) : id__GT_name.call(null,G__46052));
})()),/,/));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_author,other_author)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.entity-icon","img.entity-icon",1791014534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src], null)], null),full_name], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.bib_href(other_author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.entity-icon","img.entity-icon",1791014534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src], null)], null),full_name], null);
}
});
dk.cst.glossematics.frontend.page.bibliography.page = (function dk$cst$glossematics$frontend$page$bibliography$page(){
var map__46054 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__46054__$1 = cljs.core.__destructure_map(map__46054);
var id__GT_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46054__$1,new cljs.core.Keyword(null,"id->name","id->name",249122446));
var map__46055 = cljs.core.deref(dk.cst.glossematics.frontend.state.bibliography);
var map__46055__$1 = cljs.core.__destructure_map(map__46055);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46055__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var author = new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dk.cst.glossematics.frontend.state.location)));
var id = (dk.cst.glossematics.static_data.author__GT_id.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.static_data.author__GT_id.cljs$core$IFn$_invoke$arity$1(author) : dk.cst.glossematics.static_data.author__GT_id.call(null,author));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.index-page","div.index-page",2077864149),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/book-fill.svg"], null)], null)," Bibliography"], null),(cljs.core.truth_((function (){var and__5043__auto__ = id__GT_name;
if(cljs.core.truth_(and__5043__auto__)){
return results;
} else {
return and__5043__auto__;
}
})())?(function (){var groups = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__46059){
var vec__46060 = p__46059;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46060,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("document","bib-entry","document/bib-entry",-74471691),v)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.shared.single,new cljs.core.Keyword("document","year","document/year",659063502)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46053_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("document","author","document/author",-1489857259).cljs$core$IFn$_invoke$arity$1(p1__46053_SHARP_),id);
}),results))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-content","div.text-content",-1548599504),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.index-links","p.index-links",-624197396),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.bibliography.bib_selection,id__GT_name,author,"lh"], null)," / ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.bibliography.bib_selection,id__GT_name,author,"efj"], null)," / ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.bibliography.bib_selection,id__GT_name,author,"pd"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.bibliography.skip_links,groups], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.shared.kvs_list,groups,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.bibliography.bibliography_content,id__GT_name)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),author], null))], null);
})():null)], null);
});

//# sourceMappingURL=dk.cst.glossematics.frontend.page.bibliography.js.map
