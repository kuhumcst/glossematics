goog.provide('dk.cst.glossematics.frontend.page.reader');
/**
 * Styles used for TEI documents specifically. They are written in a regular CSS
 *   file and then processed to work on the generated HTML.
 */
dk.cst.glossematics.frontend.page.reader.tei_css = rescope.style.prefix_css("tei","/* Hide all TEI metadata. */\nteiHeader, facsimile {\n    display: none;\n}\n\n/* HTML div. */\ndiv {\n    display: block;\n}\n\n/* Forme work, a running header/footer. */\nfw {\n  display: block;\n  text-align: center;\n}\nfw:last-of-type {\n    border-bottom: 1px solid lightgrey;\n    padding-bottom: 0.5em;\n    margin-bottom: 0.5em;\n}\n\n/* HTML address. */\naddress > *, dateline > * {\n  display: block;\n  font-style: italic;\n}\n\n/* Or to be more precise: figure *MISSING*. */\nfigure {\n  display: inline-block;\n  width: 1ch;\n  height: 1ch;\n  border: 1px dashed grey;\n  margin: 0 0.5ch;\n  vertical-align: middle;\n}\n\n/* HTML p. */\np, opener, closer, postscript, salute {\n    display: block;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n/* HTML hr. */\npb:not(:first-of-type) {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border-style: inset;\n  border-width: 1px;\n}\n\n/* Marking incorrect spelling inline. */\nchoice > sic::after {\n    content: \" [sic] \";\n    font-style: italic;\n}\n\n/* Removing corrected spelling from text. */\nchoice > corr {\n    display: none;\n}\n\n/* Unclear text is clearly marked with a red underline. */\nunclear {\n    text-decoration: red wavy underline;\n}\n\nunclear[reason=illegible] {\n    text-decoration: none;\n}\n\n/* Otherwise seems to be mostly left empty. This adds some dimensionality. */\nunclear[reason=illegible]::after {\n    content: \" \uFFFD\uFFFD\uFFFD \";\n    text-decoration: none;\n}\n\n/* Gaps of missing content. */\ngap {\n    display: inline-block;\n    width: 10em; /* TODO: need a programmatic solution for the exact length. */\n    height: 1em;\n    background: lightgrey;\n}\n\ngap:not(:first-child) {\n    margin-left: 1em;\n}\n\ngap:not(:last-child) {\n    margin-right: 1em;\n}\n\n/* Additions are also distinguished from normal text. */\nadd {\n    font-weight: bold;\n    font-style: italic;\n}\n\nadd[place=above] {\n    vertical-align: super;\n    font-size: 70%;\n}\n\ndiv {\n    font-family: Georgia, serif;\n    font-size: 16px;\n}\n\n[rend=handwritten],\n[resp=hand] {\n    font-family: cursive;\n}\n\n[rend=underline] {\n    text-decoration: underline;\n}\n\n/*  The trailing <notes> of the TEI documents is re-assembled into a single\n    notes container containing all of the child <note> elements. */\n[type=notes] {\n    background: #EFEFEF;\n    padding: 1ch;\n    border: 1px solid lightgrey;\n}\n\n[type=notes] note {\n    display: list-item;\n    list-style-type: disc;\n    list-style-position: inside;\n    margin-left: 8px;\n}\n\n[type=notes] note + note {\n    margin-top: 8px;\n}\n\nnote[place]::before {\n    content: attr(data-place);\n    margin-right: 1ch;\n    text-decoration: underline;\n    font-variant: small-caps;\n}\n\n[type=transcribernote]::before {\n    content: attr(data-resp);\n    margin-right: 1ch;\n    text-decoration: underline;\n}\n");
/**
 * The complete set of styles (widgets and TEI documents).
 */
dk.cst.glossematics.frontend.page.reader.theme_PLUS_tei_css = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dk.cst.stucco.util.css.shadow_style),"\n\n/*\n\t === tei.css ===\n*/\n",dk.cst.glossematics.frontend.page.reader.tei_css].join('');
dk.cst.glossematics.frontend.page.reader.da_type = (function dk$cst$glossematics$frontend$page$reader$da_type(type){
var type__GT_s = new cljs.core.PersistentArrayMap(null, 7, ["conference","denne konference","org","denne organisation","pers","denne person","place","dette sted","publ","denne publikation","receiver","denne modtager","sender","denne afsender"], null);
return ["Vis mere om ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((type__GT_s.cljs$core$IFn$_invoke$arity$2 ? type__GT_s.cljs$core$IFn$_invoke$arity$2(type,"dette") : type__GT_s.call(null,type,"dette")))].join('');
});
dk.cst.glossematics.frontend.page.reader.list_as_ul = dk.cst.cuphic.__GT_transformer(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),cljs.core.list(new cljs.core.Symbol(null,"...","...",-1926939749,null),new cljs.core.Symbol(null,"list-items","list-items",1947691307,null))], null),(function (p__33424){
var map__33425 = p__33424;
var map__33425__$1 = cljs.core.__destructure_map(map__33425);
var list_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33425__$1,new cljs.core.Symbol(null,"list-items","list-items",1947691307,null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$reader$iter__33426(s__33427){
return (new cljs.core.LazySeq(null,(function (){
var s__33427__$1 = s__33427;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33427__$1);
if(temp__5804__auto__){
var s__33427__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33427__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__33427__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__33429 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__33428 = (0);
while(true){
if((i__33428 < size__5521__auto__)){
var vec__33430 = cljs.core._nth(c__5520__auto__,i__33428);
var seq__33431 = cljs.core.seq(vec__33430);
var first__33432 = cljs.core.first(seq__33431);
var seq__33431__$1 = cljs.core.next(seq__33431);
var tag = first__33432;
var first__33432__$1 = cljs.core.first(seq__33431__$1);
var seq__33431__$2 = cljs.core.next(seq__33431__$1);
var attr = first__33432__$1;
var content = seq__33431__$2;
cljs.core.chunk_append(b__33429,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),content));

var G__33501 = (i__33428 + (1));
i__33428 = G__33501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33429),dk$cst$glossematics$frontend$page$reader$iter__33426(cljs.core.chunk_rest(s__33427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33429),null);
}
} else {
var vec__33433 = cljs.core.first(s__33427__$2);
var seq__33434 = cljs.core.seq(vec__33433);
var first__33435 = cljs.core.first(seq__33434);
var seq__33434__$1 = cljs.core.next(seq__33434);
var tag = first__33435;
var first__33435__$1 = cljs.core.first(seq__33434__$1);
var seq__33434__$2 = cljs.core.next(seq__33434__$1);
var attr = first__33435__$1;
var content = seq__33434__$2;
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),content),dk$cst$glossematics$frontend$page$reader$iter__33426(cljs.core.rest(s__33427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(list_items);
})());
}));
dk.cst.glossematics.frontend.page.reader.ref_as_anchor = dk.cst.cuphic.__GT_transformer(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),(function (p__33436){
var map__33437 = p__33436;
var map__33437__$1 = cljs.core.__destructure_map(map__33437);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Symbol(null,"ref","ref",-1364538802,null));
var _QMARK_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Symbol(null,"?type","?type",-1287409101,null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),dk.cst.glossematics.frontend.shared.search_href(ref),new cljs.core.Keyword(null,"title","title",636505583),dk.cst.glossematics.frontend.page.reader.da_type(_QMARK_type)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot","slot",240229571)], null)], null);
}));
dk.cst.glossematics.frontend.page.reader.date_as_time = dk.cst.cuphic.__GT_transformer(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),(function (p__33438){
var map__33439 = p__33438;
var map__33439__$1 = cljs.core.__destructure_map(map__33439);
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Symbol(null,"when","when",1064114221,null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date-time","date-time",177938180),when], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot","slot",240229571)], null)], null);
}));
dk.cst.glossematics.frontend.page.reader.pb_QMARK_ = (function dk$cst$glossematics$frontend$page$reader$pb_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pb","pb",-1523127746),cljs.core.first(x))));
});
/**
 * In certain cases, <pb> tags don't appear at the same level as <p> tags, but
 *   rather nested inside them. This transformer splits those <p> tags into
 *   multiple tags and interleaves with the formerly nested <pb> tags.
 */
dk.cst.glossematics.frontend.page.reader.inlined_pbs = dk.cst.cuphic.__GT_transformer((function (hv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),cljs.core.first(hv))){
var partitions = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.reader.pb_QMARK_,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),hv));
if((cljs.core.count(partitions) > (1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-attr","p-attr",10355843),cljs.core.second(hv),new cljs.core.Keyword(null,"partitions","partitions",602979514),partitions], null);
} else {
return null;
}
} else {
return null;
}
}),(function (p__33441){
var map__33442 = p__33441;
var map__33442__$1 = cljs.core.__destructure_map(map__33442);
var p_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"p-attr","p-attr",10355843));
var partitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (n,partition){
if(((cljs.core.vector_QMARK_(cljs.core.first(partition))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pb","pb",-1523127746),cljs.core.ffirst(partition))))){
return cljs.core.first(partition);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.update.cljs$core$IFn$_invoke$arity$3(p_attr,new cljs.core.Keyword("xml","id","xml/id",-1388545507),(function (p1__33440_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33440_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}))], null),partition);
}
}),partitions);
}));
/**
 * In some TEI documents, a <PB> tag doesn't always figure as the first element
 *   inside the <DIV>, so this helper function ensures that any rogue opening
 *   section is placed inside the first *real* content section after the <PB>.
 */
dk.cst.glossematics.frontend.page.reader.fix_rogue_content = (function dk$cst$glossematics$frontend$page$reader$fix_rogue_content(sections){
if(dk.cst.glossematics.frontend.page.reader.pb_QMARK_(cljs.core.ffirst(sections))){
return sections;
} else {
var vec__33443 = sections;
var rogue_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33443,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33443,(1),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33443,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rogue_content,page)], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),sections));
}
});
/**
 * In some TEI documents, there is <DIV> inserted as a containing element inside
 *   the document <DIV>. The contents of this div is pulled out and placed inside
 *   the parent <DIV>.
 */
dk.cst.glossematics.frontend.page.reader.fix_rogue_div = (function dk$cst$glossematics$frontend$page$reader$fix_rogue_div(divs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(divs),(1))){
var div = cljs.core.first(divs);
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(div,(4));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__33446 = temp__5804__auto__;
var seq__33447 = cljs.core.seq(vec__33446);
var first__33448 = cljs.core.first(seq__33447);
var seq__33447__$1 = cljs.core.next(seq__33447);
var tag = first__33448;
var first__33448__$1 = cljs.core.first(seq__33447__$1);
var seq__33447__$2 = cljs.core.next(seq__33447__$1);
var attr = first__33448__$1;
var content = seq__33447__$2;
var rogue_div = vec__33446;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"div","div",1057191632))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(div,(0),(4)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(content,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),divs)))], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a polymorphic coll of `notes` return a coll of single note elements.
 * 
 *   This function is needed to deal with the messy situation caused by TEI files
 *   compiled by hand, where trailing notes are written rather inconsistently.
 */
dk.cst.glossematics.frontend.page.reader.flatten_notes = (function dk$cst$glossematics$frontend$page$reader$flatten_notes(notes){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__33449){
var vec__33450 = p__33449;
var seq__33451 = cljs.core.seq(vec__33450);
var first__33452 = cljs.core.first(seq__33451);
var seq__33451__$1 = cljs.core.next(seq__33451);
var tag = first__33452;
var first__33452__$1 = cljs.core.first(seq__33451__$1);
var seq__33451__$2 = cljs.core.next(seq__33451__$1);
var attr = first__33452__$1;
var content = seq__33451__$2;
var item = vec__33450;
var G__33453 = tag;
var G__33453__$1 = (((G__33453 instanceof cljs.core.Keyword))?G__33453.fqn:null);
switch (G__33453__$1) {
case "div":
return content;

break;
case "note":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);

break;
default:
return null;

}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([notes], 0));
});
/**
 * Return a predicate that returns true if the note is in the target `document`.
 *   Note that notes without a specific target document also return true!
 */
dk.cst.glossematics.frontend.page.reader.with_target = (function dk$cst$glossematics$frontend$page$reader$with_target(document){
return (function (p__33454){
var vec__33455 = p__33454;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33455,(0),null);
var map__33458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33455,(1),null);
var map__33458__$1 = cljs.core.__destructure_map(map__33458);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33458__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,document);
} else {
return true;
}
});
});
/**
 * Put `notes` in a single container, filtering them by `document`.
 */
dk.cst.glossematics.frontend.page.reader.collect_notes = (function dk$cst$glossematics$frontend$page$reader$collect_notes(document,notes){
var notes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.reader.with_target(document),dk.cst.glossematics.frontend.page.reader.flatten_notes(notes));
if(cljs.core.truth_(cljs.core.not_empty(notes__$1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"notes"], null)], null),notes__$1);
} else {
return null;
}
});
dk.cst.glossematics.frontend.page.reader.rewrite_page = cljs.core.memoize((function (p1__33459_SHARP_){
return dk.cst.cuphic.rewrite.cljs$core$IFn$_invoke$arity$variadic(p1__33459_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dk.cst.glossematics.frontend.page.reader.inner_stage], 0));
}));
/**
 * Updates the `carousel-state` when new `kvs` are detected.
 */
dk.cst.glossematics.frontend.page.reader.update_tei_carousel_BANG_ = (function dk$cst$glossematics$frontend$page$reader$update_tei_carousel_BANG_(carousel_state,kvs){
var old_kvs = new cljs.core.Keyword(null,"kvs","kvs",958455492).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(carousel_state));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,kvs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,old_kvs))){
return cljs.core.reset_BANG_(carousel_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"kvs","kvs",958455492),kvs], null));
} else {
return null;
}
});
dk.cst.glossematics.frontend.page.reader.pages_in_carousel = dk.cst.cuphic.__GT_transformer(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol(null,"...","...",-1926939749,null),new cljs.core.Symbol(null,"content","content",1656364751,null))], null),(function (p__33462){
var map__33463 = p__33462;
var map__33463__$1 = cljs.core.__destructure_map(map__33463);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33463__$1,new cljs.core.Symbol(null,"content","content",1656364751,null));
var not_notes_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__33460_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("notes",p1__33460_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.second);
var vec__33464 = cljs.core.split_with(not_notes_QMARK_,content);
var divs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33464,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33464,(1),null);
var divs__$1 = (function (){var or__5045__auto__ = dk.cst.glossematics.frontend.page.reader.fix_rogue_div(divs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return divs;
}
})();
var divs_content = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33461_SHARP_){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__33461_SHARP_,(2));
}),divs__$1));
var pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.concat),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dk.cst.glossematics.frontend.page.reader.fix_rogue_content(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.reader.pb_QMARK_,divs_content))));
var pp = cljs.core.count(pages);
var container = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.first(divs__$1),(0),(2));
var kvs = (function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$reader$iter__33467(s__33468){
return (new cljs.core.LazySeq(null,(function (){
var s__33468__$1 = s__33468;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33468__$1);
if(temp__5804__auto__){
var s__33468__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33468__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__33468__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__33470 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__33469 = (0);
while(true){
if((i__33469 < size__5521__auto__)){
var vec__33471 = cljs.core._nth(c__5520__auto__,i__33469);
var vec__33474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33471,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33474,(0),null);
var map__33477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33474,(1),null);
var map__33477__$1 = cljs.core.__destructure_map(map__33477);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33477__$1,new cljs.core.Keyword(null,"n","n",562130025));
var facs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33477__$1,new cljs.core.Keyword(null,"facs","facs",-1414240612));
var page = vec__33471;
cljs.core.chunk_append(b__33470,(function (){var notes_STAR_ = dk.cst.glossematics.frontend.page.reader.collect_notes(facs,notes);
var page_PLUS_notes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [notes_STAR_], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Side ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," af ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pp),"; facs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(facs),"."].join(''),dk.cst.glossematics.frontend.page.reader.rewrite_page(cljs.core.into.cljs$core$IFn$_invoke$arity$2(container,page_PLUS_notes))], null);
})());

var G__33503 = (i__33469 + (1));
i__33469 = G__33503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33470),dk$cst$glossematics$frontend$page$reader$iter__33467(cljs.core.chunk_rest(s__33468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33470),null);
}
} else {
var vec__33478 = cljs.core.first(s__33468__$2);
var vec__33481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33478,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33481,(0),null);
var map__33484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33481,(1),null);
var map__33484__$1 = cljs.core.__destructure_map(map__33484);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"n","n",562130025));
var facs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33484__$1,new cljs.core.Keyword(null,"facs","facs",-1414240612));
var page = vec__33478;
return cljs.core.cons((function (){var notes_STAR_ = dk.cst.glossematics.frontend.page.reader.collect_notes(facs,notes);
var page_PLUS_notes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [notes_STAR_], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Side ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," af ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pp),"; facs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(facs),"."].join(''),dk.cst.glossematics.frontend.page.reader.rewrite_page(cljs.core.into.cljs$core$IFn$_invoke$arity$2(container,page_PLUS_notes))], null);
})(),dk$cst$glossematics$frontend$page$reader$iter__33467(cljs.core.rest(s__33468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(pages);
})();
dk.cst.glossematics.frontend.page.reader.update_tei_carousel_BANG_(dk.cst.glossematics.frontend.state.tei_carousel,kvs);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.pattern.carousel,dk.cst.glossematics.frontend.state.tei_carousel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Facsimile"], null)], null);
}));
/**
 * This function is applied as a final step in every transformation. Each XML
 *   tag is prefixed with 'tei-' making it a valid HTML tag name, while xml:lang
 *   and xml:id are both converted into the non-namespaced HTML varieties.
 */
dk.cst.glossematics.frontend.page.reader.default_fn = rescope.helpers.default_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),"tei",new cljs.core.Keyword(null,"attr-kmap","attr-kmap",807970155),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("xml","lang","xml/lang",-1820082569),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword("xml","id","xml/id",-1388545507),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null));
/**
 * Each node is wrapped in a shadow DOM, allowing for an inlined style element
 *   and general isolation from the outer document style.
 * 
 *   This mostly preserves the XML structure in the generated HTML, while also
 *   allowing for discreet structural changes using <slot>.
 */
dk.cst.glossematics.frontend.page.reader.shadow_dom_wrapper = (function dk$cst$glossematics$frontend$page$reader$shadow_dom_wrapper(old_node,new_node){
var node_with_css = cljs.core.constantly(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),dk.cst.glossematics.frontend.page.reader.theme_PLUS_tei_css], null),new_node], null));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(old_node,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1289896967),rescope.core.shadow_ref(node_with_css));
});
/**
 * Makes actual structural changes to the TEI content.
 */
dk.cst.glossematics.frontend.page.reader.pre_stage = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.reader.inlined_pbs], null)], null);
/**
 * Makes virtual changes to TEI document features using the shadow DOM.
 */
dk.cst.glossematics.frontend.page.reader.inner_stage = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.reader.ref_as_anchor,dk.cst.glossematics.frontend.page.reader.list_as_ul,dk.cst.glossematics.frontend.page.reader.date_as_time], null),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),dk.cst.glossematics.frontend.page.reader.shadow_dom_wrapper,new cljs.core.Keyword(null,"default","default",-1987822328),dk.cst.glossematics.frontend.page.reader.default_fn], null);
/**
 * Places all TEI pages inside a carousel component in a shadow DOM.
 */
dk.cst.glossematics.frontend.page.reader.outer_stage = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.reader.pages_in_carousel], null),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),dk.cst.glossematics.frontend.page.reader.shadow_dom_wrapper,new cljs.core.Keyword(null,"default","default",-1987822328),dk.cst.glossematics.frontend.page.reader.default_fn], null);
dk.cst.glossematics.frontend.page.reader.parse = cljs.core.memoize(dk.cst.cuphic.xml.parse);
dk.cst.glossematics.frontend.page.reader.facs_id__GT_facs_page = (function dk$cst$glossematics$frontend$page$reader$facs_id__GT_facs_page(id){
var url = dk.cst.glossematics.frontend.api.normalize_url(["/file/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".jpg"].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.document.illustration,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"alt","alt",-3214426),["Illustration of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)], null)], null);
});
dk.cst.glossematics.frontend.page.reader.get_facs = (function dk$cst$glossematics$frontend$page$reader$get_facs(hiccup){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.reader.facs_id__GT_facs_page,(function (p1__33485_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__33485_SHARP_,new cljs.core.Symbol(null,"id","id",252129435,null));
})),new cljs.core.Keyword(null,"graphic","graphic",262278575).cljs$core$IFn$_invoke$arity$1(dk.cst.cuphic.scrape(hiccup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xml","id","xml/id",-1388545507),new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null)], null))));
});
dk.cst.glossematics.frontend.page.reader._STAR_current_fetch_STAR_ = null;
/**
 * Change the `document` currently displayed in the reader.
 * 
 *   Optionally, an `xml` string may be provided to parse as a TEI document.
 *   This feature is used to preview local TEI documents in Glossematics.
 */
dk.cst.glossematics.frontend.page.reader.set_content_BANG_ = (function dk$cst$glossematics$frontend$page$reader$set_content_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___33504 = arguments.length;
var i__5769__auto___33505 = (0);
while(true){
if((i__5769__auto___33505 < len__5768__auto___33504)){
args__5774__auto__.push((arguments[i__5769__auto___33505]));

var G__33506 = (i__5769__auto___33505 + (1));
i__5769__auto___33505 = G__33506;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return dk.cst.glossematics.frontend.page.reader.set_content_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(dk.cst.glossematics.frontend.page.reader.set_content_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (document,p__33488){
var vec__33489 = p__33488;
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33489,(0),null);
(dk.cst.glossematics.frontend.page.reader._STAR_current_fetch_STAR_ = document);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(document,new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dk.cst.glossematics.frontend.state.reader)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.reader,cljs.core.assoc,new cljs.core.Keyword(null,"i","i",-1386841315),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"document","document",-1329188687),null], 0));
} else {
}

try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = xml;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dk.cst.glossematics.frontend.api.fetch(["/file/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(document)].join(''));
}
})(),(function (tei){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(xml)?dk.cst.glossematics.db.tei.triples__GT_entity(dk.cst.glossematics.db.tei.__GT_triples(document,xml)):dk.cst.glossematics.frontend.api.fetch(["/entity/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(document)].join(''))),(function (entity){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.reader.parse(tei),(function (raw_hiccup){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.page.reader.get_facs(raw_hiccup),(function (facs){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.rewrite.cljs$core$IFn$_invoke$arity$variadic(raw_hiccup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dk.cst.glossematics.frontend.page.reader.pre_stage,dk.cst.glossematics.frontend.page.reader.outer_stage], 0)),(function (rewritten_hiccup){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kvs","kvs",958455492).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dk.cst.glossematics.frontend.state.tei_carousel)),(function (tei_kvs){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((cljs.core.count(facs) - cljs.core.count(tei_kvs)),(function (missing_count){
return kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["N/A","[content missing]"], null),(function (placeholder){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dk.cst.glossematics.frontend.state.reader,cljs.core.assoc,new cljs.core.Keyword(null,"document","document",-1329188687),document,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"tei","tei",1195330079),tei,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),rewritten_hiccup,new cljs.core.Keyword(null,"facs-kvs","facs-kvs",-677136786),facs,new cljs.core.Keyword(null,"tei-kvs","tei-kvs",-385566623),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),missing_count))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tei_kvs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(missing_count,placeholder)):tei_kvs)], 0));
}));
}));
}));
}));
}));
}));
}));
})));
}catch (e33492){var e__29098__auto__ = e33492;
return kitchen_async.promise.reject(e__29098__auto__);
}}));

(dk.cst.glossematics.frontend.page.reader.set_content_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dk.cst.glossematics.frontend.page.reader.set_content_BANG_.cljs$lang$applyTo = (function (seq33486){
var G__33487 = cljs.core.first(seq33486);
var seq33486__$1 = cljs.core.next(seq33486);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33487,seq33486__$1);
}));

dk.cst.glossematics.frontend.page.reader.entity_meta = (function dk$cst$glossematics$frontend$page$reader$entity_meta(search_state,entity){
var entity_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(entity,new cljs.core.Keyword("file","extension","file/extension",1452357597),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","body?","file/body?",-1311738617)], 0));
var kvs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$reader$entity_meta_$_iter__33493(s__33494){
return (new cljs.core.LazySeq(null,(function (){
var s__33494__$1 = s__33494;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33494__$1);
if(temp__5804__auto__){
var s__33494__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33494__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__33494__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__33496 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__33495 = (0);
while(true){
if((i__33495 < size__5521__auto__)){
var k = cljs.core._nth(c__5520__auto__,i__33495);
cljs.core.chunk_append(b__33496,(function (){var temp__5804__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity_SINGLEQUOTE_,k);
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})());

var G__33507 = (i__33495 + (1));
i__33495 = G__33507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33496),dk$cst$glossematics$frontend$page$reader$entity_meta_$_iter__33493(cljs.core.chunk_rest(s__33494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33496),null);
}
} else {
var k = cljs.core.first(s__33494__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity_SINGLEQUOTE_,k);
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})(),dk$cst$glossematics$frontend$page$reader$entity_meta_$_iter__33493(cljs.core.rest(s__33494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(dk.cst.glossematics.static_data.reader_rels);
})()),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,entity_SINGLEQUOTE_,dk.cst.glossematics.static_data.reader_rels)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.shared.metadata_table,search_state,entity,kvs], null);
});
dk.cst.glossematics.frontend.page.reader.pdf_object = (function dk$cst$glossematics$frontend$page$reader$pdf_object(pdf_src){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),pdf_src,new cljs.core.Keyword(null,"type","type",1174270348),"application/pdf",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"calc(100vh - 102px)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),pdf_src], null),"Download facsimile"], null)], null);
});
dk.cst.glossematics.frontend.page.reader.page = (function dk$cst$glossematics$frontend$page$reader$page(){
var map__33497 = cljs.core.deref(dk.cst.glossematics.frontend.state.reader);
var map__33497__$1 = cljs.core.__destructure_map(map__33497);
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33497__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var tei = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33497__$1,new cljs.core.Keyword(null,"tei","tei",1195330079));
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33497__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33497__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var map__33498 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__33498__$1 = cljs.core.__destructure_map(map__33498);
var search_state = map__33498__$1;
var id__GT_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33498__$1,new cljs.core.Keyword(null,"id->name","id->name",249122446));
var location_STAR_ = cljs.core.deref(dk.cst.glossematics.frontend.state.location);
var current_document = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(location_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"document","document",-1329188687)], null));
var local_preview_QMARK_ = cljs.core.empty_QMARK_(current_document);
var document_selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.reader","page","dk.cst.glossematics.frontend.page.reader/page",-767414306),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(location_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var new_document_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(document__$1,current_document);
var map__33499 = entity;
var map__33499__$1 = cljs.core.__destructure_map(map__33499);
var body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33499__$1,new cljs.core.Keyword("file","body?","file/body?",-1311738617));
var facsimile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33499__$1,new cljs.core.Keyword("document","facsimile","document/facsimile",-253376169));
var pdf_src = (function (){var and__5043__auto__ = cljs.core.not(body_QMARK_);
if(and__5043__auto__){
var and__5043__auto____$1 = typeof facsimile === 'string';
if(and__5043__auto____$1){
var and__5043__auto____$2 = clojure.string.ends_with_QMARK_(facsimile,".pdf");
if(and__5043__auto____$2){
return dk.cst.glossematics.frontend.api.normalize_url(["/file/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(facsimile)].join(''));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if((((!(local_preview_QMARK_))) && (((document_selected_QMARK_) && (((new_document_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_document,dk.cst.glossematics.frontend.page.reader._STAR_current_fetch_STAR_)))))))){
dk.cst.glossematics.frontend.page.reader.set_content_BANG_(current_document);
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((local_preview_QMARK_)?"reader-preview":"reader")], null),((local_preview_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Local TEI-file",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var temp__5804__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__5804__auto__)){
var file = temp__5804__auto__;
return file.text().then((function (s){
return dk.cst.glossematics.frontend.page.reader.set_content_BANG_.cljs$core$IFn$_invoke$arity$variadic(file.name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
}));
} else {
return null;
}
})], null)], null):null),(cljs.core.truth_(hiccup)?((local_preview_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.pattern.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"kvs","kvs",958455492),dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transcription",cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rescope.core.scope,hiccup,dk.cst.glossematics.frontend.page.reader.tei_css], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tei], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metadata",(cljs.core.truth_(id__GT_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reader-content","div.reader-content",1069870242),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.reader.entity_meta,search_state,entity], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TEI",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.reader-content","pre.reader-content",1951266072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap"], null)], null),tei], null)], null)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tei-tabs"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.group.combination,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weights","weights",-1097626197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),(cljs.core.truth_(pdf_src)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.reader.pdf_object,pdf_src], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.pattern.carousel,dk.cst.glossematics.frontend.state.facs_carousel], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.stucco.pattern.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),(0),new cljs.core.Keyword(null,"kvs","kvs",958455492),dk.cst.stucco.pattern.heterostyled.cljs$core$IFn$_invoke$arity$1((function (){var G__33500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metadata",(cljs.core.truth_(id__GT_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reader-content","div.reader-content",1069870242),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.page.reader.entity_meta,search_state,entity], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TEI",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.reader-content","pre.reader-content",1951266072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap"], null)], null),tei], null)], null)], null)], null);
if(cljs.core.truth_(body_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transcription",cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rescope.core.scope,hiccup,dk.cst.glossematics.frontend.page.reader.tei_css], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tei], null))], null)], null),G__33500);
} else {
return G__33500;
}
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tei-tabs"], null)], null)], null)):null)], null);
});

//# sourceMappingURL=dk.cst.glossematics.frontend.page.reader.js.map
