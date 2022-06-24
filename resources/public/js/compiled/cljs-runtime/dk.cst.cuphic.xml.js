goog.provide('dk.cst.cuphic.xml');
dk.cst.cuphic.xml.Document = Document;

dk.cst.cuphic.xml.Element = Element;

dk.cst.cuphic.xml.Text = Text;

dk.cst.cuphic.xml.Comment = Comment;

dk.cst.cuphic.xml.Node = Node;
dk.cst.cuphic.xml.parser = (new DOMParser());
/**
 * Keywordize `s` converting XML namespaces to Clojure namespaces.
 */
dk.cst.cuphic.xml.keywordize = (function dk$cst$cuphic$xml$keywordize(s){
var vec__44714 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/:/);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(1),null);
if(cljs.core.truth_(s2)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(s1,s2);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s1);
}
});
/**
 * Parse `xml` into a DOM tree.
 */
dk.cst.cuphic.xml.dom_parse = (function dk$cst$cuphic$xml$dom_parse(xml){
return dk.cst.cuphic.xml.parser.parseFromString(xml,"text/xml").firstChild;
});
/**
 * Retrieve the raw attribute objects from the `node`.
 */
dk.cst.cuphic.xml.attribute_objects = (function dk$cst$cuphic$xml$attribute_objects(node){
return node.attributes;
});
/**
 * Retrieve the key from the `attribute` object.
 */
dk.cst.cuphic.xml.attribute_key = (function dk$cst$cuphic$xml$attribute_key(attribute){
return attribute.name;
});
/**
 * Retrieve the value from the `attribute` object.
 */
dk.cst.cuphic.xml.attribute_val = (function dk$cst$cuphic$xml$attribute_val(attribute){
return attribute.value;
});
/**
 * Get a Hiccup attributes map from a `node`.
 */
dk.cst.cuphic.xml.node_attrs = (function dk$cst$cuphic$xml$node_attrs(node){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5522__auto__ = (function dk$cst$cuphic$xml$node_attrs_$_iter__44755(s__44756){
return (new cljs.core.LazySeq(null,(function (){
var s__44756__$1 = s__44756;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44756__$1);
if(temp__5804__auto__){
var s__44756__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44756__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__44756__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__44758 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__44757 = (0);
while(true){
if((i__44757 < size__5521__auto__)){
var attribute = cljs.core._nth(c__5520__auto__,i__44757);
cljs.core.chunk_append(b__44758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.cuphic.xml.keywordize(dk.cst.cuphic.xml.attribute_key(attribute)),dk.cst.cuphic.xml.attribute_val(attribute)], null));

var G__44818 = (i__44757 + (1));
i__44757 = G__44818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44758),dk$cst$cuphic$xml$node_attrs_$_iter__44755(cljs.core.chunk_rest(s__44756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44758),null);
}
} else {
var attribute = cljs.core.first(s__44756__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dk.cst.cuphic.xml.keywordize(dk.cst.cuphic.xml.attribute_key(attribute)),dk.cst.cuphic.xml.attribute_val(attribute)], null),dk$cst$cuphic$xml$node_attrs_$_iter__44755(cljs.core.rest(s__44756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(dk.cst.cuphic.xml.attribute_objects(node));
})());
});
/**
 * Get a Hiccup tag from a `node`.
 */
dk.cst.cuphic.xml.node_tag = (function dk$cst$cuphic$xml$node_tag(node){
return dk.cst.cuphic.xml.keywordize(node.tagName);
});
/**
 * Get the children of the `node` as objects.
 */
dk.cst.cuphic.xml.node_content = (function dk$cst$cuphic$xml$node_content(node){
return node.childNodes;
});
/**
 * Return the data of a `node`. Mimics the return value of clojure.data.xml.
 */
dk.cst.cuphic.xml.node_data = (function dk$cst$cuphic$xml$node_data(node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),dk.cst.cuphic.xml.node_tag(node),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),dk.cst.cuphic.xml.node_attrs(node),new cljs.core.Keyword(null,"content","content",15833224),dk.cst.cuphic.xml.node_content(node)], null);
});
dk.cst.cuphic.xml.whole_text = (function dk$cst$cuphic$xml$whole_text(node){
return node.wholeText;
});
/**
 * Recursively convert a `node` and its children to Hiccup.
 */
dk.cst.cuphic.xml.node__GT_hiccup = (function dk$cst$cuphic$xml$node__GT_hiccup(node){
var pred__44802 = cljs.core.instance_QMARK_;
var expr__44803 = node;
if(cljs.core.truth_((pred__44802.cljs$core$IFn$_invoke$arity$2 ? pred__44802.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.xml.Document,expr__44803) : pred__44802.call(null,dk.cst.cuphic.xml.Document,expr__44803)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.xml.node__GT_hiccup,dk.cst.cuphic.xml.node_content(node));
} else {
if(cljs.core.truth_((pred__44802.cljs$core$IFn$_invoke$arity$2 ? pred__44802.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.xml.Element,expr__44803) : pred__44802.call(null,dk.cst.cuphic.xml.Element,expr__44803)))){
var map__44805 = dk.cst.cuphic.xml.node_data(node);
var map__44805__$1 = cljs.core.__destructure_map(map__44805);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44805__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44805__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.xml.node__GT_hiccup,content)));
} else {
if(cljs.core.truth_((pred__44802.cljs$core$IFn$_invoke$arity$2 ? pred__44802.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.xml.Text,expr__44803) : pred__44802.call(null,dk.cst.cuphic.xml.Text,expr__44803)))){
var s = dk.cst.cuphic.xml.whole_text(node);
if((!(clojure.string.blank_QMARK_(s)))){
return s;
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__44802.cljs$core$IFn$_invoke$arity$2 ? pred__44802.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.xml.Comment,expr__44803) : pred__44802.call(null,dk.cst.cuphic.xml.Comment,expr__44803)))){
return null;
} else {
if(cljs.core.truth_((pred__44802.cljs$core$IFn$_invoke$arity$2 ? pred__44802.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),expr__44803) : pred__44802.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__44803)))){
return node;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44803)].join('')));
}
}
}
}
}
});
/**
 * Parse `xml` as hiccup data.
 */
dk.cst.cuphic.xml.parse = (function dk$cst$cuphic$xml$parse(xml){
return dk.cst.cuphic.xml.node__GT_hiccup(dk.cst.cuphic.xml.dom_parse(xml));
});

//# sourceMappingURL=dk.cst.cuphic.xml.js.map
