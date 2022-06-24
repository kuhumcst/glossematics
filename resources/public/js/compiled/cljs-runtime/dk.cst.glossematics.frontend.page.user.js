goog.provide('dk.cst.glossematics.frontend.page.user');
dk.cst.glossematics.frontend.page.user.saml_path = (function dk$cst$glossematics$frontend$page$user$saml_path(saml_type){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dk.cst.glossematics.frontend.state.paths,saml_type)),"?RelayState=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(location.href))].join('');
});
dk.cst.glossematics.frontend.page.user.logout = (function dk$cst$glossematics$frontend$page$user$logout(e){
e.preventDefault();

return lambdaisland.fetch.post(dk.cst.glossematics.frontend.page.user.saml_path(new cljs.core.Keyword(null,"saml-logout","saml-logout",949258886))).then(cljs.core.reset_BANG_(dk.cst.glossematics.frontend.state.authenticated_QMARK_,false));
});
dk.cst.glossematics.frontend.page.user.login = (function dk$cst$glossematics$frontend$page$user$login(e){
e.preventDefault();

return (location.href = dk.cst.glossematics.frontend.page.user.saml_path(new cljs.core.Keyword(null,"saml-login","saml-login",1377745813)));
});
dk.cst.glossematics.frontend.page.user.assertions__GT_institution = (function dk$cst$glossematics$frontend$page$user$assertions__GT_institution(assertions){
var map__45657 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(assertions);
var map__45657__$1 = cljs.core.__destructure_map(map__45657);
var organizationName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45657__$1,"organizationName");
var schacHomeOrganization = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45657__$1,"schacHomeOrganization");
var or__5045__auto__ = cljs.core.first(organizationName);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.first(schacHomeOrganization);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "your institution";
}
}
});
dk.cst.glossematics.frontend.page.user.assertions__GT_individual = (function dk$cst$glossematics$frontend$page$user$assertions__GT_individual(assertions){
var map__45662 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(assertions);
var map__45662__$1 = cljs.core.__destructure_map(map__45662);
var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45662__$1,"cn");
var displayName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45662__$1,"displayName");
var or__5045__auto__ = cljs.core.first(cn);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.first(displayName);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "Anonymous user";
}
}
});
dk.cst.glossematics.frontend.page.user.page = (function dk$cst$glossematics$frontend$page$user$page(){
var individual = dk.cst.glossematics.frontend.page.user.assertions__GT_individual(dk.cst.glossematics.frontend.state.assertions);
var institution = dk.cst.glossematics.frontend.page.user.assertions__GT_institution(dk.cst.glossematics.frontend.state.assertions);
var assertions = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dk.cst.glossematics.frontend.state.assertions)),"eduPersonTargetedID"));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-page","div.user-page",-440105452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),individual], null),(cljs.core.truth_(cljs.core.deref(dk.cst.glossematics.frontend.state.authenticated_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.text-content","section.text-content",-1444643692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.logout-button","button.logout-button",1222323909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),dk.cst.glossematics.frontend.page.user.logout,new cljs.core.Keyword(null,"title","title",636505583),"Log out of Glossematics"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/lock-svgrepo-com.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null),"Log out"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You are currently ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"logged in"], null)," via ",institution,"."], null),(cljs.core.truth_(assertions)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.entity-metadata","table.entity-metadata",-241485661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5522__auto__ = (function dk$cst$glossematics$frontend$page$user$page_$_iter__45664(s__45665){
return (new cljs.core.LazySeq(null,(function (){
var s__45665__$1 = s__45665;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45665__$1);
if(temp__5804__auto__){
var s__45665__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45665__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45665__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45667 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45666 = (0);
while(true){
if((i__45666 < size__5521__auto__)){
var vec__45668 = cljs.core._nth(c__5520__auto__,i__45666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45668,(1),null);
var kv = vec__45668;
cljs.core.chunk_append(b__45667,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),kv], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),(function (){var iter__5522__auto__ = ((function (i__45666,vec__45668,k,v,kv,c__5520__auto__,size__5521__auto__,b__45667,s__45665__$2,temp__5804__auto__,individual,institution,assertions){
return (function dk$cst$glossematics$frontend$page$user$page_$_iter__45664_$_iter__45671(s__45672){
return (new cljs.core.LazySeq(null,((function (i__45666,vec__45668,k,v,kv,c__5520__auto__,size__5521__auto__,b__45667,s__45665__$2,temp__5804__auto__,individual,institution,assertions){
return (function (){
var s__45672__$1 = s__45672;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45672__$1);
if(temp__5804__auto____$1){
var s__45672__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45672__$2)){
var c__5520__auto____$1 = cljs.core.chunk_first(s__45672__$2);
var size__5521__auto____$1 = cljs.core.count(c__5520__auto____$1);
var b__45674 = cljs.core.chunk_buffer(size__5521__auto____$1);
if((function (){var i__45673 = (0);
while(true){
if((i__45673 < size__5521__auto____$1)){
var c = cljs.core._nth(c__5520__auto____$1,i__45673);
cljs.core.chunk_append(b__45674,(cljs.core.truth_(cljs.core.re_matches(/[A-Z]/,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wbr","wbr",228661800)], null),c], null):c));

var G__45700 = (i__45673 + (1));
i__45673 = G__45700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45674),dk$cst$glossematics$frontend$page$user$page_$_iter__45664_$_iter__45671(cljs.core.chunk_rest(s__45672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45674),null);
}
} else {
var c = cljs.core.first(s__45672__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.re_matches(/[A-Z]/,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wbr","wbr",228661800)], null),c], null):c),dk$cst$glossematics$frontend$page$user$page_$_iter__45664_$_iter__45671(cljs.core.rest(s__45672__$2)));
}
} else {
return null;
}
break;
}
});})(i__45666,vec__45668,k,v,kv,c__5520__auto__,size__5521__auto__,b__45667,s__45665__$2,temp__5804__auto__,individual,institution,assertions))
,null,null));
});})(i__45666,vec__45668,k,v,kv,c__5520__auto__,size__5521__auto__,b__45667,s__45665__$2,temp__5804__auto__,individual,institution,assertions))
;
return iter__5522__auto__(k);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(v))], null)], null));

var G__45706 = (i__45666 + (1));
i__45666 = G__45706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45667),dk$cst$glossematics$frontend$page$user$page_$_iter__45664(cljs.core.chunk_rest(s__45665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45667),null);
}
} else {
var vec__45677 = cljs.core.first(s__45665__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45677,(1),null);
var kv = vec__45677;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),kv], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),(function (){var iter__5522__auto__ = ((function (vec__45677,k,v,kv,s__45665__$2,temp__5804__auto__,individual,institution,assertions){
return (function dk$cst$glossematics$frontend$page$user$page_$_iter__45664_$_iter__45680(s__45681){
return (new cljs.core.LazySeq(null,(function (){
var s__45681__$1 = s__45681;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45681__$1);
if(temp__5804__auto____$1){
var s__45681__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45681__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45681__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45683 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45682 = (0);
while(true){
if((i__45682 < size__5521__auto__)){
var c = cljs.core._nth(c__5520__auto__,i__45682);
cljs.core.chunk_append(b__45683,(cljs.core.truth_(cljs.core.re_matches(/[A-Z]/,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wbr","wbr",228661800)], null),c], null):c));

var G__45708 = (i__45682 + (1));
i__45682 = G__45708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45683),dk$cst$glossematics$frontend$page$user$page_$_iter__45664_$_iter__45680(cljs.core.chunk_rest(s__45681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45683),null);
}
} else {
var c = cljs.core.first(s__45681__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.re_matches(/[A-Z]/,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wbr","wbr",228661800)], null),c], null):c),dk$cst$glossematics$frontend$page$user$page_$_iter__45664_$_iter__45680(cljs.core.rest(s__45681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__45677,k,v,kv,s__45665__$2,temp__5804__auto__,individual,institution,assertions))
;
return iter__5522__auto__(k);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(v))], null)], null),dk$cst$glossematics$frontend$page$user$page_$_iter__45664(cljs.core.rest(s__45665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(assertions);
})()], null)], null)], null):null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.text-content","section.text-content",-1444643692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.login-button","button.login-button",-902435967),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),dk.cst.glossematics.frontend.page.user.login,new cljs.core.Keyword(null,"title","title",636505583),"Log in to Glossematics using your institution"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/unlock-svgrepo-com-modified.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null),"Log in"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You are currently ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"not"], null)," logged in. "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Glossematics allows you to log in through your own institution ","as long as it is part of a common educational federation. ","Clicking 'Log in' above will direct you to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Where Are You From"], null),"WAYF"], null)," ","where you may choose your institution from a list (if applicable)."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You may still view the timeline and the bibliography pages. ","However, the search page and the facsimile reader ","are not available unless you first authenticate. "], null)], null)], null))], null);
});

//# sourceMappingURL=dk.cst.glossematics.frontend.page.user.js.map
