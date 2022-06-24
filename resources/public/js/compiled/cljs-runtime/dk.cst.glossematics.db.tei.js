goog.provide('dk.cst.glossematics.db.tei');
dk.cst.glossematics.db.tei.utc_dtf = tick.core.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
/**
 * NOTE: Defaults to 1 january in case either is missing.
 */
dk.cst.glossematics.db.tei.utc_fallback_dtf = dk.cst.glossematics.db.tei.utc_dtf;
dk.cst.glossematics.db.tei.value_of = (function dk$cst$glossematics$db$tei$value_of(d){
return d.valueOf();
});
/**
 * Parse a `date-str` using the `formatter` of choice. Expects some noise in
 *   the data (e.g. Viggo's Excel file) so all dots are converted into dashes.
 */
dk.cst.glossematics.db.tei.parse_date = (function dk$cst$glossematics$db$tei$parse_date(formatter,date_str){
if(typeof date_str === 'string'){
try{return dk.cst.glossematics.db.tei.value_of(tick.core.parse_date(clojure.string.replace(date_str,/\./,"-"),formatter));
}catch (e45857){if((e45857 instanceof Error)){
var e = e45857;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("dk.cst.glossematics.db.tei",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["Could not parse date: ",date_str,new cljs.core.Keyword(null,"line","line",212345235),46], null)),null);
} else {
throw e45857;

}
}} else {
return date_str;
}
});
dk.cst.glossematics.db.tei.header_patterns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.Keyword(null,"repository","repository",1489835364),new cljs.core.Keyword(null,"hand-desc","hand-desc",-209370651),new cljs.core.Keyword(null,"correspDesc","correspDesc",1708771885),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"objectDesc","objectDesc",-144162833),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"collection","collection",-683361892)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settlement","settlement",-1178759071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"settlement","settlement",461772456,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repository","repository",1489835364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"repository","repository",-1164600405,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handDesc","handDesc",-1534782896),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"hand-desc","hand-desc",1431160876,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correspDesc","correspDesc",1708771885),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correspAction","correspAction",1513332536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"sent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persName","persName",-592001935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"sender","sender",-1097132484,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeName","placeName",1025644672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"sender-loc","sender-loc",-1096231229,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"sent-at","sent-at",-1914434994,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correspAction","correspAction",1513332536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"received"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persName","persName",-592001935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"recipient","recipient",-1004363535,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeName","placeName",1025644672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"recipient-loc","recipient-loc",1117510557,null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"title","title",-2017930186,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objectDesc","objectDesc",-144162833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"form","form",16469056,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"supportDesc","supportDesc",-1233766524),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"support","support",1392531368),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"support","support",-1261904401,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extent","extent",-186399820),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"page-count","page-count",-572690809,null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"author","author",-542749577,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Symbol(null,"language","language",49423963,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"collection","collection",957169635,null)], null)]);
dk.cst.glossematics.db.tei.facsimile_patterns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"facsimile","facsimile",71490092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphic","graphic",262278575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xml","id","xml/id",-1388545507),new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null)], null);
dk.cst.glossematics.db.tei.text_patterns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body-refs","body-refs",2055104691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.Keyword(null,"lang-refs","lang-refs",721357885),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"note","note",1426297904),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"language",new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null),new cljs.core.Keyword(null,"body-dates","body-dates",-45322683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Symbol(null,"when","when",1064114221,null)], null),new cljs.core.Symbol(null,"???","???",1210272185,null)], null)], null);
dk.cst.glossematics.db.tei.scrape_document = (function dk$cst$glossematics$db$tei$scrape_document(xml){
var hiccup = dk.cst.cuphic.xml.parse(xml);
var header = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hiccup,(2));
var facsimile = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hiccup,(3));
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hiccup,(4));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dk.cst.cuphic.scrape(header,dk.cst.glossematics.db.tei.header_patterns),dk.cst.cuphic.scrape(facsimile,dk.cst.glossematics.db.tei.facsimile_patterns),dk.cst.cuphic.scrape(text,dk.cst.glossematics.db.tei.text_patterns)], 0));
});
dk.cst.glossematics.db.tei.placeholder_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["xx",null,"#xx",null,"NA",null], null), null);
dk.cst.glossematics.db.tei.valid_QMARK_ = (function dk$cst$glossematics$db$tei$valid_QMARK_(v){
return cljs.core.not((function (){var or__5045__auto__ = clojure.string.blank_QMARK_(v);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return (dk.cst.glossematics.db.tei.placeholder_QMARK_.cljs$core$IFn$_invoke$arity$1 ? dk.cst.glossematics.db.tei.placeholder_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : dk.cst.glossematics.db.tei.placeholder_QMARK_.call(null,v));
}
})());
});
dk.cst.glossematics.db.tei.valid_int_QMARK_ = (function dk$cst$glossematics$db$tei$valid_int_QMARK_(v){
var and__5043__auto__ = dk.cst.glossematics.db.tei.valid_QMARK_(v);
if(and__5043__auto__){
return cljs.core.re_matches(/\d+/,v);
} else {
return and__5043__auto__;
}
});
dk.cst.glossematics.db.tei.valid_id_QMARK_ = (function dk$cst$glossematics$db$tei$valid_id_QMARK_(v){
var and__5043__auto__ = dk.cst.glossematics.db.tei.valid_QMARK_(v);
if(and__5043__auto__){
var and__5043__auto____$1 = ((clojure.string.starts_with_QMARK_(v,"n")) || (clojure.string.starts_with_QMARK_(v,"#n")));
if(and__5043__auto____$1){
return cljs.core.re_find(/\d$/,v);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
dk.cst.glossematics.db.tei.valid_date_QMARK_ = (function dk$cst$glossematics$db$tei$valid_date_QMARK_(v){
return cljs.core.re_matches(/\d\d\d\d-\d\d-\d\d/,v);
});
dk.cst.glossematics.db.tei.fix_id = (function dk$cst$glossematics$db$tei$fix_id(id){
if(clojure.string.starts_with_QMARK_(id,"#")){
return id;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
}
});
dk.cst.glossematics.db.tei.single_val = (function dk$cst$glossematics$db$tei$single_val(result,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(k));
});
dk.cst.glossematics.db.tei.single_triple = (function dk$cst$glossematics$db$tei$single_triple(result,filename,validation_fn,rel,k){
var temp__5804__auto__ = dk.cst.glossematics.db.tei.single_val(result,k);
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
if(cljs.core.truth_((validation_fn.cljs$core$IFn$_invoke$arity$1 ? validation_fn.cljs$core$IFn$_invoke$arity$1(v) : validation_fn.call(null,v)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,rel,v], null);
} else {
return null;
}
} else {
return null;
}
});
dk.cst.glossematics.db.tei.parse_int = parseInt;
dk.cst.glossematics.db.tei.document_triples = (function dk$cst$glossematics$db$tei$document_triples(filename,p__45865){
var map__45866 = p__45865;
var map__45866__$1 = cljs.core.__destructure_map(map__45866);
var result = map__45866__$1;
var objectDesc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"objectDesc","objectDesc",-144162833));
var correspDesc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"correspDesc","correspDesc",1708771885));
var facsimile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"facsimile","facsimile",71490092));
var body_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"body-refs","body-refs",2055104691));
var lang_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"lang-refs","lang-refs",721357885));
var body_dates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45866__$1,new cljs.core.Keyword(null,"body-dates","body-dates",-45322683));
var triple = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.db.tei.single_triple,result,filename,dk.cst.glossematics.db.tei.valid_QMARK_);
var id_triple = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p__45867){
var vec__45868 = p__45867;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45868,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45868,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45868,(2),null);
var eav = vec__45868;
if(cljs.core.truth_(eav)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,dk.cst.glossematics.db.tei.fix_id(v)], null);
} else {
return null;
}
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dk.cst.glossematics.db.tei.single_triple,result,filename,dk.cst.glossematics.db.tei.valid_id_QMARK_));
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [triple(new cljs.core.Keyword("document","title","document/title",-262963518),new cljs.core.Keyword(null,"title","title",636505583)),triple(new cljs.core.Keyword("document","hand","document/hand",2051225642),new cljs.core.Keyword(null,"hand-desc","hand-desc",-209370651)),id_triple(new cljs.core.Keyword("document","author","document/author",-1489857259),new cljs.core.Keyword(null,"author","author",2111686192)),id_triple(new cljs.core.Keyword("document","language","document/language",-728969505),new cljs.core.Keyword(null,"language","language",-1591107564)),id_triple(new cljs.core.Keyword("document","repository","document/repository",-475478907),new cljs.core.Keyword(null,"repository","repository",1489835364)),id_triple(new cljs.core.Keyword("document","settlement","document/settlement",-967009538),new cljs.core.Keyword(null,"settlement","settlement",-1178759071)),(function (){var collection = triple(new cljs.core.Keyword("document","collection","document/collection",-1948154303),new cljs.core.Keyword(null,"collection","collection",-683361892));
if(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_int_QMARK_(cljs.core.last(collection)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(collection,(2),dk.cst.glossematics.db.tei.parse_int);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objectDesc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Symbol(null,"form","form",16469056,null)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var form = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","form","document/form",1809184550),form], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(correspDesc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Symbol(null,"sender","sender",-1097132484,null)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var sender = temp__5804__auto__;
if(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(sender))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","sender","document/sender",678805714),sender], null);
} else {
return null;
}
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(correspDesc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Symbol(null,"sender-loc","sender-loc",-1096231229,null)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var sender_loc = temp__5804__auto__;
if(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(sender_loc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","sender-location","document/sender-location",1267346727),sender_loc], null);
} else {
return null;
}
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(correspDesc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Symbol(null,"sent-at","sent-at",-1914434994,null)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var sent_at = temp__5804__auto__;
if(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_date_QMARK_(sent_at))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","sent-at","document/sent-at",1463342308),dk.cst.glossematics.db.tei.parse_date(dk.cst.glossematics.db.tei.utc_dtf,sent_at)], null);
} else {
return null;
}
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(correspDesc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Symbol(null,"recipient","recipient",-1004363535,null)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var recipient = temp__5804__auto__;
if(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(recipient))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","recipient","document/recipient",-1883306027),recipient], null);
} else {
return null;
}
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(correspDesc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Symbol(null,"recipient-loc","recipient-loc",1117510557,null)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var recipient_loc = temp__5804__auto__;
if(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(recipient_loc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","recipient-location","document/recipient-location",660194497),recipient_loc], null);
} else {
return null;
}
} else {
return null;
}
})()], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5522__auto__ = (function dk$cst$glossematics$db$tei$document_triples_$_iter__45871(s__45872){
return (new cljs.core.LazySeq(null,(function (){
var s__45872__$1 = s__45872;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45872__$1);
if(temp__5804__auto__){
var s__45872__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45872__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45872__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45874 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45873 = (0);
while(true){
if((i__45873 < size__5521__auto__)){
var map__45875 = cljs.core._nth(c__5520__auto__,i__45873);
var map__45875__$1 = cljs.core.__destructure_map(map__45875);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45875__$1,new cljs.core.Symbol(null,"id","id",252129435,null));
cljs.core.chunk_append(b__45874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","facsimile","document/facsimile",-253376169),id], null));

var G__45979 = (i__45873 + (1));
i__45873 = G__45979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45874),dk$cst$glossematics$db$tei$document_triples_$_iter__45871(cljs.core.chunk_rest(s__45872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45874),null);
}
} else {
var map__45877 = cljs.core.first(s__45872__$2);
var map__45877__$1 = cljs.core.__destructure_map(map__45877);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45877__$1,new cljs.core.Symbol(null,"id","id",252129435,null));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","facsimile","document/facsimile",-253376169),id], null),dk$cst$glossematics$db$tei$document_triples_$_iter__45871(cljs.core.rest(s__45872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(facsimile);
})(),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$db$tei$document_triples_$_iter__45878(s__45879){
return (new cljs.core.LazySeq(null,(function (){
var s__45879__$1 = s__45879;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45879__$1);
if(temp__5804__auto__){
var s__45879__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45879__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45879__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45881 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45880 = (0);
while(true){
if((i__45880 < size__5521__auto__)){
var map__45882 = cljs.core._nth(c__5520__auto__,i__45880);
var map__45882__$1 = cljs.core.__destructure_map(map__45882);
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45882__$1,new cljs.core.Symbol(null,"when","when",1064114221,null));
cljs.core.chunk_append(b__45881,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","date-mention","document/date-mention",-811914499),dk.cst.glossematics.db.tei.parse_date(dk.cst.glossematics.db.tei.utc_fallback_dtf,when)], null));

var G__45987 = (i__45880 + (1));
i__45880 = G__45987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45881),dk$cst$glossematics$db$tei$document_triples_$_iter__45878(cljs.core.chunk_rest(s__45879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45881),null);
}
} else {
var map__45883 = cljs.core.first(s__45879__$2);
var map__45883__$1 = cljs.core.__destructure_map(map__45883);
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45883__$1,new cljs.core.Symbol(null,"when","when",1064114221,null));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","date-mention","document/date-mention",-811914499),dk.cst.glossematics.db.tei.parse_date(dk.cst.glossematics.db.tei.utc_fallback_dtf,when)], null),dk$cst$glossematics$db$tei$document_triples_$_iter__45878(cljs.core.rest(s__45879__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(body_dates);
})(),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$db$tei$document_triples_$_iter__45884(s__45885){
return (new cljs.core.LazySeq(null,(function (){
var s__45885__$1 = s__45885;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45885__$1);
if(temp__5804__auto__){
var s__45885__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45885__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45885__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45887 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45886 = (0);
while(true){
if((i__45886 < size__5521__auto__)){
var map__45893 = cljs.core._nth(c__5520__auto__,i__45886);
var map__45893__$1 = cljs.core.__destructure_map(map__45893);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45893__$1,new cljs.core.Symbol(null,"tag","tag",350170304,null));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45893__$1,new cljs.core.Symbol(null,"ref","ref",-1364538802,null));
var _QMARK_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45893__$1,new cljs.core.Symbol(null,"?type","?type",-1287409101,null));
cljs.core.chunk_append(b__45887,(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(ref))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","mention","document/mention",232655504),ref], null):null));

var G__45996 = (i__45886 + (1));
i__45886 = G__45996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45887),dk$cst$glossematics$db$tei$document_triples_$_iter__45884(cljs.core.chunk_rest(s__45885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45887),null);
}
} else {
var map__45899 = cljs.core.first(s__45885__$2);
var map__45899__$1 = cljs.core.__destructure_map(map__45899);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45899__$1,new cljs.core.Symbol(null,"tag","tag",350170304,null));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45899__$1,new cljs.core.Symbol(null,"ref","ref",-1364538802,null));
var _QMARK_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45899__$1,new cljs.core.Symbol(null,"?type","?type",-1287409101,null));
return cljs.core.cons((cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(ref))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","mention","document/mention",232655504),ref], null):null),dk$cst$glossematics$db$tei$document_triples_$_iter__45884(cljs.core.rest(s__45885__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(body_refs);
})(),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$db$tei$document_triples_$_iter__45900(s__45901){
return (new cljs.core.LazySeq(null,(function (){
var s__45901__$1 = s__45901;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45901__$1);
if(temp__5804__auto__){
var s__45901__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45901__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45901__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45903 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45902 = (0);
while(true){
if((i__45902 < size__5521__auto__)){
var map__45905 = cljs.core._nth(c__5520__auto__,i__45902);
var map__45905__$1 = cljs.core.__destructure_map(map__45905);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45905__$1,new cljs.core.Symbol(null,"ref","ref",-1364538802,null));
cljs.core.chunk_append(b__45903,(cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(ref))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","mention","document/mention",232655504),ref], null):null));

var G__46000 = (i__45902 + (1));
i__45902 = G__46000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45903),dk$cst$glossematics$db$tei$document_triples_$_iter__45900(cljs.core.chunk_rest(s__45901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45903),null);
}
} else {
var map__45907 = cljs.core.first(s__45901__$2);
var map__45907__$1 = cljs.core.__destructure_map(map__45907);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45907__$1,new cljs.core.Symbol(null,"ref","ref",-1364538802,null));
return cljs.core.cons((cljs.core.truth_(dk.cst.glossematics.db.tei.valid_id_QMARK_(ref))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,new cljs.core.Keyword("document","mention","document/mention",232655504),ref], null):null),dk$cst$glossematics$db$tei$document_triples_$_iter__45900(cljs.core.rest(s__45901__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(lang_refs);
})()], null)),null);
});
/**
 * Create Asami triples from either a `filepath` or `filename`/`content` combo.
 */
dk.cst.glossematics.db.tei.__GT_triples = (function dk$cst$glossematics$db$tei$__GT_triples(filename,content){
return dk.cst.glossematics.db.tei.document_triples(filename,dk.cst.glossematics.db.tei.scrape_document(content));
});
/**
 * Assemble Asami `triples` into an Asami entity.
 */
dk.cst.glossematics.db.tei.triples__GT_entity = (function dk$cst$glossematics$db$tei$triples__GT_entity(triples){
var ident = cljs.core.ffirst(triples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,clojure.set.union,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),ident], null),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$db$tei$triples__GT_entity_$_iter__45912(s__45913){
return (new cljs.core.LazySeq(null,(function (){
var s__45913__$1 = s__45913;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45913__$1);
if(temp__5804__auto__){
var s__45913__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45913__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45913__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45915 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45914 = (0);
while(true){
if((i__45914 < size__5521__auto__)){
var vec__45920 = cljs.core._nth(c__5520__auto__,i__45914);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(2),null);
cljs.core.chunk_append(b__45915,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.PersistentHashSet.createAsIfByAssoc([v])]));

var G__46004 = (i__45914 + (1));
i__45914 = G__46004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45915),dk$cst$glossematics$db$tei$triples__GT_entity_$_iter__45912(cljs.core.chunk_rest(s__45913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45915),null);
}
} else {
var vec__45926 = cljs.core.first(s__45913__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(2),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.PersistentHashSet.createAsIfByAssoc([v])]),dk$cst$glossematics$db$tei$triples__GT_entity_$_iter__45912(cljs.core.rest(s__45913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(triples);
})());
});

//# sourceMappingURL=dk.cst.glossematics.db.tei.js.map
