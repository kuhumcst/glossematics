goog.provide('dk.cst.glossematics.frontend');
dk.cst.glossematics.frontend.routes = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend","main","dk.cst.glossematics.frontend/main",-120659960),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.main.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/encyclopedia/:ref",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.encyclopedia","entry","dk.cst.glossematics.frontend.page.encyclopedia/entry",-1361667229),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.encyclopedia.page,new cljs.core.Keyword(null,"prep","prep",2123042288),(function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"encyclopedia","encyclopedia",-612868155,null),cljs.core.deref(dk.cst.glossematics.frontend.state.location)], 0));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.user","page","dk.cst.glossematics.frontend.page.user/page",-93074970),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.user.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/search",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.search","page","dk.cst.glossematics.frontend.page.search/page",-718726271),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.search.page,new cljs.core.Keyword(null,"prep","prep",2123042288),(function (p1__33390_SHARP_){
return dk.cst.glossematics.frontend.page.search.fetch_results_BANG_(p1__33390_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/bibliography/:author",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.bibliography","page","dk.cst.glossematics.frontend.page.bibliography/page",1192584763),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.bibliography.page,new cljs.core.Keyword(null,"prep","prep",2123042288),(function (){
return dk.cst.glossematics.frontend.page.bibliography.fetch_results_BANG_();
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/index/:kind",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.index","page","dk.cst.glossematics.frontend.page.index/page",1949521331),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.index.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/reader",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.reader","preview","dk.cst.glossematics.frontend.page.reader/preview",-1149674169),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.reader.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/reader/:document",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.reader","page","dk.cst.glossematics.frontend.page.reader/page",-767414306),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.reader.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/app/timeline",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("dk.cst.glossematics.frontend.page.timeline","page","dk.cst.glossematics.frontend.page.timeline/page",-1605550244),new cljs.core.Keyword(null,"page","page",849072397),dk.cst.glossematics.frontend.page.timeline.page,new cljs.core.Keyword(null,"prep","prep",2123042288),dk.cst.glossematics.frontend.page.timeline.fetch_timeline_data_BANG_], null)], null)], null);
dk.cst.glossematics.frontend.debug_view = (function dk$cst$glossematics$frontend$debug_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.33"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"DEBUG"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"auth"], null),(cljs.core.truth_((function (){var fexpr__33392 = (function (){var or__5045__auto__ = dk.cst.pedestal.sp.auth.auth_override(dk.cst.glossematics.frontend.state.assertions);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dk.cst.pedestal.sp.auth.condition__GT_auth_test(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, ["firstName",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Simon",null], null), null)], null)], null));
}
})();
return (fexpr__33392.cljs$core$IFn$_invoke$arity$1 ? fexpr__33392.cljs$core$IFn$_invoke$arity$1(dk.cst.glossematics.frontend.state.assertions) : fexpr__33392.call(null,dk.cst.glossematics.frontend.state.assertions));
})())?"firstName = Simon":"firstName != Simon")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"assertions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33393_33410 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33394_33411 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33395_33412 = true;
var _STAR_print_fn_STAR__temp_val__33396_33413 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33395_33412);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33396_33413);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(dk.cst.glossematics.frontend.state.assertions);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33394_33411);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33393_33410);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"@db"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33397_33414 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33398_33415 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33399_33416 = true;
var _STAR_print_fn_STAR__temp_val__33400_33417 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33399_33416);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33400_33417);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dk.cst.glossematics.frontend.state.db));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33398_33415);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33397_33414);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})()], null)], null)], null);
});
/**
 * A container component that wraps the various pages of the app.
 */
dk.cst.glossematics.frontend.shell = (function dk$cst$glossematics$frontend$shell(){
var map__33402 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dk.cst.glossematics.frontend.state.location));
var map__33402__$1 = cljs.core.__destructure_map(map__33402);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"page","page",849072397));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var authenticated_QMARK_ = cljs.core.deref(dk.cst.glossematics.frontend.state.authenticated_QMARK_);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shell","div.shell",885819017),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dk.cst.glossematics.frontend.page.timeline","page","dk.cst.glossematics.frontend.page.timeline/page",-1605550244),null,new cljs.core.Keyword("dk.cst.glossematics.frontend.page.reader","page","dk.cst.glossematics.frontend.page.reader/page",-767414306),null], null), null),name))?"reader-mode":null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dk.cst.glossematics.frontend","main","dk.cst.glossematics.frontend/main",-120659960))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Glossematics"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.search","page","dk.cst.glossematics.frontend.page.search/page",-718726271)),new cljs.core.Keyword(null,"title","title",636505583),"Find documents to read",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(cljs.core.truth_(authenticated_QMARK_)?"0":"-1"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(authenticated_QMARK_)], null),"Find"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.timeline","page","dk.cst.glossematics.frontend.page.timeline/page",-1605550244)),new cljs.core.Keyword(null,"title","title",636505583),"The life Louis Hjelmslev"], null),"Timeline"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.bibliography","page","dk.cst.glossematics.frontend.page.bibliography/page",1192584763),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),"lh"], null)),new cljs.core.Keyword(null,"title","title",636505583),"Relevant works"], null),"Bibl."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dk.cst.glossematics.frontend.page.user","page","dk.cst.glossematics.frontend.page.user/page",-93074970)),new cljs.core.Keyword(null,"title","title",636505583),"Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-icon","img.nav-icon",-231328418),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/person-sharp-yellow-svgrepo-com.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shell__content","div.shell__content",1343357290),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("dk.cst.glossematics.frontend.page.timeline","page","dk.cst.glossematics.frontend.page.timeline/page",-1605550244)))?"fill-mode":null)], null),(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"unknown page"], null))], null)], null);
});
/**
 * Prepare widely needed state.
 */
dk.cst.glossematics.frontend.universal_prep_BANG_ = (function dk$cst$glossematics$frontend$universal_prep_BANG_(){
var map__33403 = cljs.core.deref(dk.cst.glossematics.frontend.state.search);
var map__33403__$1 = cljs.core.__destructure_map(map__33403);
var name__GT_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33403__$1,new cljs.core.Keyword(null,"name->id","name->id",-338114168));
if(cljs.core.truth_(name__GT_id)){
return null;
} else {
return dk.cst.glossematics.frontend.page.search.fetch_metadata_BANG_();
}
});
dk.cst.glossematics.frontend.on_navigate = (function dk$cst$glossematics$frontend$on_navigate(p__33405){
var map__33406 = p__33405;
var map__33406__$1 = cljs.core.__destructure_map(map__33406);
var m = map__33406__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33406__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33406__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var old_location = cljs.core.deref(dk.cst.glossematics.frontend.state.location);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(old_location))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_params,new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(old_location))))){
(dk.cst.glossematics.frontend.state._STAR_block_modal_dialogs_STAR_ = false);

dk.cst.glossematics.frontend.universal_prep_BANG_();

var temp__5804__auto___33419 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"prep","prep",2123042288)], null));
if(cljs.core.truth_(temp__5804__auto___33419)){
var prep_33420 = temp__5804__auto___33419;
(prep_33420.cljs$core$IFn$_invoke$arity$1 ? prep_33420.cljs$core$IFn$_invoke$arity$1(m) : prep_33420.call(null,m));
} else {
}
} else {
}

return cljs.core.reset_BANG_(dk.cst.glossematics.frontend.state.location,m);
});
dk.cst.glossematics.frontend.render = (function dk$cst$glossematics$frontend$render(){
reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(dk.cst.glossematics.frontend.routes),dk.cst.glossematics.frontend.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.glossematics.frontend.shell], null),document.getElementById("app"));
});
/**
 * The entry point of the frontend app.
 */
dk.cst.glossematics.frontend.init_BANG_ = (function dk$cst$glossematics$frontend$init_BANG_(){
time_literals.read_write.print_time_literals_cljs_BANG_();

var style_33421 = document.createElement("style");
var root_style_33422 = clojure.string.replace_first(dk.cst.stucco.util.css.shadow_style,":host",":root");
(style_33421.innerHTML = root_style_33422);

document.head.appendChild(style_33421);

return dk.cst.glossematics.frontend.render();
});

//# sourceMappingURL=dk.cst.glossematics.frontend.js.map
