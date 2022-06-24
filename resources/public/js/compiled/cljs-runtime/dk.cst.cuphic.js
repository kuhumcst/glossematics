goog.provide('dk.cst.cuphic');
/**
 * Return the symbol bindings at the root level of `hattr` based on `cattr`.
 *   Handles expected behaviour of wildcards and variables, including optional.
 */
dk.cst.cuphic.attr_root_bindings = (function dk$cst$cuphic$attr_root_bindings(cattr,hattr){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__45046){
var vec__45049 = p__45046;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45049,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45049,(1),null);
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hattr,k);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
if(dk.cst.cuphic.symbols.wildcard_QMARK_(sym)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,sym,v);
}
} else {
if(dk.cst.cuphic.symbols.optional_variable_QMARK_(sym)){
return m;
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentArrayMap.EMPTY,cattr);
});
/**
 * Validate matching key-value pairs at the root level for `cattr` and `hattr`
 *   and search for the remaining bindings at lower levels of the hattr.
 * 
 *   This function recursively validates the data structure. Any potential bindings
 *   at lower levels will be delegated to the 'attr-root-bindings' function, while
 *   this function makes sure any other values also match at every level.
 */
dk.cst.cuphic.attr_other_bindings = (function dk$cst$cuphic$attr_other_bindings(cattr,hattr){
if((cljs.core.count(hattr) >= cljs.core.count(cattr))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__45074){
var vec__45075 = p__45074;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45075,(0),null);
var cv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45075,(1),null);
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hattr,k);
if(cljs.core.truth_(temp__5802__auto__)){
var hv = temp__5802__auto__;
var temp__5802__auto____$1 = (dk.cst.cuphic.node_bindings.cljs$core$IFn$_invoke$arity$2 ? dk.cst.cuphic.node_bindings.cljs$core$IFn$_invoke$arity$2(cv,hv) : dk.cst.cuphic.node_bindings.call(null,cv,hv));
if(cljs.core.truth_(temp__5802__auto____$1)){
var delta = temp__5802__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,delta], 0));
} else {
return cljs.core.reduced(null);
}
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentArrayMap.EMPTY,cattr);
} else {
return null;
}
});
/**
 * Return bindings with values from `hattr` using symbols defined in `cattr`.
 */
dk.cst.cuphic.attr_bindings = (function dk$cst$cuphic$attr_bindings(cattr,hattr){
var k__GT_sym = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.symbols.slot_QMARK_,cljs.core.second),cattr));
var sym_keys = cljs.core.keys(k__GT_sym);
var other_cattr = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cattr,sym_keys);
var other_hattr = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,hattr,sym_keys);
var temp__5804__auto__ = dk.cst.cuphic.attr_other_bindings(other_cattr,other_hattr);
if(cljs.core.truth_(temp__5804__auto__)){
var rem_bindings = temp__5804__auto__;
var temp__5804__auto____$1 = dk.cst.cuphic.attr_root_bindings(k__GT_sym,hattr);
if(cljs.core.truth_(temp__5804__auto____$1)){
var sym_bindings = temp__5804__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rem_bindings,sym_bindings], 0));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Return a potential direct binding between `pnode` and `node`.
 */
dk.cst.cuphic.node_bindings = (function dk$cst$cuphic$node_bindings(pnode,node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pnode,node)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(dk.cst.cuphic.symbols.wildcard_QMARK_(pnode)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((dk.cst.cuphic.symbols.variable_QMARK_(pnode)) || (dk.cst.cuphic.symbols.optional_variable_QMARK_(pnode)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([pnode,node]);
} else {
if(((cljs.core.map_QMARK_(pnode)) && (cljs.core.map_QMARK_(node)))){
return dk.cst.cuphic.attr_bindings(pnode,node);
} else {
if(((cljs.core.vector_QMARK_(pnode)) && (cljs.core.vector_QMARK_(node)))){
return (dk.cst.cuphic.get_bindings.cljs$core$IFn$_invoke$arity$2 ? dk.cst.cuphic.get_bindings.cljs$core$IFn$_invoke$arity$2(pnode,node) : dk.cst.cuphic.get_bindings.call(null,pnode,node));
} else {
return null;
}
}
}
}
}
});
/**
 * Get direct bindings for `pnodes` in `nodes` - or nil if they don't match.
 * 
 *   Since this compares every pnode to a corresponding node, the length of the two
 *   collections must be identical.
 */
dk.cst.cuphic.section_bindings = (function dk$cst$cuphic$section_bindings(pnodes,nodes){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pnodes),cljs.core.count(nodes))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__45097){
var vec__45098 = p__45097;
var pnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45098,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45098,(1),null);
var temp__5802__auto__ = dk.cst.cuphic.node_bindings(pnode,node);
if(cljs.core.truth_(temp__5802__auto__)){
var delta = temp__5802__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,delta], 0));
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pnodes,nodes));
} else {
return null;
}
});
/**
 * Return direct bindings for the first occurrence of `pnodes` in `nodes`.
 */
dk.cst.cuphic.section_search = (function dk$cst$cuphic$section_search(pnodes,nodes){
var n = cljs.core.count(pnodes);
var i = (0);
while(true){
var nodes__$1 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(i,nodes));
if((cljs.core.count(nodes__$1) >= n)){
var temp__5802__auto__ = dk.cst.cuphic.section_bindings(pnodes,nodes__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var delta = temp__5802__auto__;
return cljs.core.with_meta(delta,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),i,new cljs.core.Keyword(null,"to","to",192099007),(i + n)], null));
} else {
var G__45375 = (i + (1));
i = G__45375;
continue;
}
} else {
return null;
}
break;
}
});
dk.cst.cuphic.min_size = (function dk$cst$cuphic$min_size(pnodes){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(dk.cst.cuphic.symbols.optional_quantification_QMARK_),pnodes));
});
dk.cst.cuphic.concat_deltas = (function dk$cst$cuphic$concat_deltas(deltas){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,delta){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.into,m,(function (){var iter__5522__auto__ = (function dk$cst$cuphic$concat_deltas_$_iter__45114(s__45115){
return (new cljs.core.LazySeq(null,(function (){
var s__45115__$1 = s__45115;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45115__$1);
if(temp__5804__auto__){
var s__45115__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45115__$2)){
var c__5520__auto__ = cljs.core.chunk_first(s__45115__$2);
var size__5521__auto__ = cljs.core.count(c__5520__auto__);
var b__45117 = cljs.core.chunk_buffer(size__5521__auto__);
if((function (){var i__45116 = (0);
while(true){
if((i__45116 < size__5521__auto__)){
var vec__45118 = cljs.core._nth(c__5520__auto__,i__45116);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45118,(1),null);
cljs.core.chunk_append(b__45117,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)]));

var G__45384 = (i__45116 + (1));
i__45116 = G__45384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45117),dk$cst$cuphic$concat_deltas_$_iter__45114(cljs.core.chunk_rest(s__45115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45117),null);
}
} else {
var vec__45124 = cljs.core.first(s__45115__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)]),dk$cst$cuphic$concat_deltas_$_iter__45114(cljs.core.rest(s__45115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__(delta);
})());
}),cljs.core.PersistentArrayMap.EMPTY,deltas);
});
dk.cst.cuphic.normalise = cljs.core.memoize((function (coll){
if(cljs.core.map_QMARK_(cljs.core.second(coll))){
return coll;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(coll),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.rest(coll));
}
}));
dk.cst.cuphic.fixed_length_QMARK_ = cljs.core.memoize(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.complement(dk.cst.cuphic.symbols.quantification_QMARK_)));
/**
 * Get bindings in `nodes` for a `pnode` containing a repeated pattern.
 * 
 *   Will bind successively until the fixed-length pattern no longer matches.
 */
dk.cst.cuphic.repetition_bindings = (function dk$cst$cuphic$repetition_bindings(pnode,nodes){
var pattern = cljs.core.rest(pnode);
var size = cljs.core.count(pattern);
var parts = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(size,nodes);
var deltas = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.section_bindings,pattern),parts));
if((!(((dk.cst.cuphic.symbols.definite_repetition_QMARK_(pnode)) && (cljs.core.empty_QMARK_(deltas)))))){
return cljs.core.with_meta(dk.cst.cuphic.concat_deltas(deltas),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(size * cljs.core.count(deltas))], null));
} else {
return null;
}
});
/**
 * Get bindings in `nodes` for an arbitrary section of `pnodes`.
 * 
 *   This will match all of the nodes and then destructure into individual parts:
 *   wildcards, variables, omissions, repetitions. If the number of nodes does not
 *   match the arity of the potential quantifier after destructuring, the bindings
 *   will be nil.
 */
dk.cst.cuphic.arbitrary_bindings = (function dk$cst$cuphic$arbitrary_bindings(pnodes,nodes){
var G__45136 = pnodes;
var vec__45138 = G__45136;
var seq__45139 = cljs.core.seq(vec__45138);
var first__45140 = cljs.core.first(seq__45139);
var seq__45139__$1 = cljs.core.next(seq__45139);
var pnode = first__45140;
var pnodes__$1 = seq__45139__$1;
var G__45137 = nodes;
var vec__45141 = G__45137;
var seq__45142 = cljs.core.seq(vec__45141);
var first__45143 = cljs.core.first(seq__45142);
var seq__45142__$1 = cljs.core.next(seq__45142);
var node = first__45143;
var nodes__$1 = seq__45142__$1;
var qnode = null;
var bindings = cljs.core.PersistentArrayMap.EMPTY;
var G__45136__$1 = G__45136;
var G__45137__$1 = G__45137;
var qnode__$1 = qnode;
var bindings__$1 = bindings;
while(true){
var vec__45158 = G__45136__$1;
var seq__45159 = cljs.core.seq(vec__45158);
var first__45160 = cljs.core.first(seq__45159);
var seq__45159__$1 = cljs.core.next(seq__45159);
var pnode__$1 = first__45160;
var pnodes__$2 = seq__45159__$1;
var vec__45161 = G__45137__$1;
var seq__45162 = cljs.core.seq(vec__45161);
var first__45163 = cljs.core.first(seq__45162);
var seq__45162__$1 = cljs.core.next(seq__45162);
var node__$1 = first__45163;
var nodes__$2 = seq__45162__$1;
var qnode__$2 = qnode__$1;
var bindings__$2 = bindings__$1;
if(cljs.core.truth_(pnode__$1)){
if(dk.cst.cuphic.symbols.wildcard_QMARK_(pnode__$1)){
var G__45404 = pnodes__$2;
var G__45405 = nodes__$2;
var G__45406 = qnode__$2;
var G__45407 = (cljs.core.truth_(qnode__$2)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(bindings__$2,qnode__$2,cljs.core.rest):bindings__$2);
G__45136__$1 = G__45404;
G__45137__$1 = G__45405;
qnode__$1 = G__45406;
bindings__$1 = G__45407;
continue;
} else {
if(dk.cst.cuphic.symbols.variable_QMARK_(pnode__$1)){
var G__45408 = pnodes__$2;
var G__45409 = nodes__$2;
var G__45410 = qnode__$2;
var G__45411 = (cljs.core.truth_(qnode__$2)?(function (){var vec__45166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bindings__$2,qnode__$2);
var seq__45167 = cljs.core.seq(vec__45166);
var first__45168 = cljs.core.first(seq__45167);
var seq__45167__$1 = cljs.core.next(seq__45167);
var node__$2 = first__45168;
var stack = seq__45167__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bindings__$2,pnode__$1,node__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qnode__$2,stack], 0));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings__$2,pnode__$1,node__$1));
G__45136__$1 = G__45408;
G__45137__$1 = G__45409;
qnode__$1 = G__45410;
bindings__$1 = G__45411;
continue;
} else {
if(dk.cst.cuphic.symbols.quantification_QMARK_(pnode__$1)){
var G__45413 = cljs.core.reverse(pnodes__$2);
var G__45414 = null;
var G__45415 = pnode__$1;
var G__45416 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings__$2,pnode__$1,(cljs.core.truth_(node__$1)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,node__$1,null,(1),null))))),nodes__$2):null));
G__45136__$1 = G__45413;
G__45137__$1 = G__45414;
qnode__$1 = G__45415;
bindings__$1 = G__45416;
continue;
} else {
return null;
}
}
}
} else {
if(cljs.core.not(node__$1)){
if(cljs.core.truth_(qnode__$2)){
if(dk.cst.cuphic.symbols.omission_QMARK_(qnode__$2)){
if(dk.cst.cuphic.symbols.optional_quantification_QMARK_(qnode__$2)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bindings__$2,qnode__$2);
} else {
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bindings__$2,qnode__$2)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bindings__$2,qnode__$2);
} else {
return null;
}
}
} else {
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bindings__$2,qnode__$2);
var delta = dk.cst.cuphic.repetition_bindings(qnode__$2,cljs.core.reverse(stack));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(delta)),cljs.core.count(stack))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bindings__$2,qnode__$2),delta], 0));
} else {
return null;
}
}
} else {
return bindings__$2;
}
} else {
return null;
}
}
break;
}
});
/**
 * Find bindings in `hiccup` for a matching `pattern` - or nil on bad matches.
 */
dk.cst.cuphic.get_bindings = (function dk$cst$cuphic$get_bindings(pattern,hiccup){
if(cljs.core.vector_QMARK_(hiccup)){
var pattern__$1 = dk.cst.cuphic.normalise(pattern);
var hiccup__$1 = dk.cst.cuphic.normalise(hiccup);
var section_type = (function (p1__45179_SHARP_){
if(dk.cst.cuphic.symbols.arbitrary_QMARK_(p1__45179_SHARP_)){
return new cljs.core.Keyword(null,"arbitrary","arbitrary",379025994);
} else {
if(dk.cst.cuphic.symbols.repetition_QMARK_(p1__45179_SHARP_)){
return new cljs.core.Keyword(null,"repeated","repeated",-1455138913);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
});
var sections = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(section_type,pattern__$1);
var arbitrary_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.symbols.arbitrary_QMARK_,cljs.core.first);
var repeated_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.symbols.repetition_QMARK_,cljs.core.first);
var G__45190 = sections;
var vec__45192 = G__45190;
var seq__45193 = cljs.core.seq(vec__45192);
var first__45194 = cljs.core.first(seq__45193);
var seq__45193__$1 = cljs.core.next(seq__45193);
var pnodes = first__45194;
var sections__$1 = seq__45193__$1;
var G__45191 = hiccup__$1;
var vec__45195 = G__45191;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(0),null);
var nodes = vec__45195;
var bindings = cljs.core.PersistentArrayMap.EMPTY;
var G__45190__$1 = G__45190;
var G__45191__$1 = G__45191;
var bindings__$1 = bindings;
while(true){
var vec__45223 = G__45190__$1;
var seq__45224 = cljs.core.seq(vec__45223);
var first__45225 = cljs.core.first(seq__45224);
var seq__45224__$1 = cljs.core.next(seq__45224);
var pnodes__$1 = first__45225;
var sections__$2 = seq__45224__$1;
var vec__45226 = G__45191__$1;
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(0),null);
var nodes__$1 = vec__45226;
var bindings__$2 = bindings__$1;
if(cljs.core.truth_(pnodes__$1)){
if(cljs.core.truth_(arbitrary_QMARK_(pnodes__$1))){
var temp__5802__auto__ = cljs.core.first(sections__$2);
if(cljs.core.truth_(temp__5802__auto__)){
var next_section = temp__5802__auto__;
var next_section__$1 = (cljs.core.truth_(repeated_QMARK_(next_section))?cljs.core.rest(next_section):next_section);
var skip = dk.cst.cuphic.min_size(pnodes__$1);
var next_nodes = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(skip,nodes__$1);
var temp__5804__auto__ = dk.cst.cuphic.section_search(next_section__$1,next_nodes);
if(cljs.core.truth_(temp__5804__auto__)){
var next_delta = temp__5804__auto__;
var n = (skip + new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(next_delta)));
var temp__5804__auto____$1 = dk.cst.cuphic.arbitrary_bindings(pnodes__$1,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,nodes__$1));
if(cljs.core.truth_(temp__5804__auto____$1)){
var delta = temp__5804__auto____$1;
var G__45433 = sections__$2;
var G__45434 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,nodes__$1);
var G__45435 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings__$2,delta], 0));
G__45190__$1 = G__45433;
G__45191__$1 = G__45434;
bindings__$1 = G__45435;
continue;
} else {
return null;
}
} else {
return null;
}
} else {
var temp__5804__auto__ = dk.cst.cuphic.arbitrary_bindings(pnodes__$1,nodes__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var delta = temp__5804__auto__;
var G__45438 = sections__$2;
var G__45439 = null;
var G__45440 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings__$2,delta], 0));
G__45190__$1 = G__45438;
G__45191__$1 = G__45439;
bindings__$1 = G__45440;
continue;
} else {
return null;
}
}
} else {
if(cljs.core.truth_(repeated_QMARK_(pnodes__$1))){
var temp__5804__auto__ = dk.cst.cuphic.repetition_bindings(cljs.core.first(pnodes__$1),nodes__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var delta = temp__5804__auto__;
var map__45231 = cljs.core.meta(delta);
var map__45231__$1 = cljs.core.__destructure_map(map__45231);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45231__$1,new cljs.core.Keyword(null,"to","to",192099007));
var G__45445 = sections__$2;
var G__45446 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(to,nodes__$1);
var G__45447 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings__$2,delta], 0));
G__45190__$1 = G__45445;
G__45191__$1 = G__45446;
bindings__$1 = G__45447;
continue;
} else {
return null;
}
} else {
var n = cljs.core.count(pnodes__$1);
var temp__5804__auto__ = dk.cst.cuphic.section_bindings(pnodes__$1,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,nodes__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var delta = temp__5804__auto__;
var G__45448 = sections__$2;
var G__45449 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,nodes__$1);
var G__45450 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings__$2,delta], 0));
G__45190__$1 = G__45448;
G__45191__$1 = G__45449;
bindings__$1 = G__45450;
continue;
} else {
return null;
}

}
}
} else {
if(cljs.core.not(node__$1)){
return cljs.core.with_meta(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(bindings__$2,dk.cst.cuphic.symbols.omission,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dk.cst.cuphic.symbols.optional_omission], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),hiccup__$1], null));
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Returns the match, if any, of `hiccup` to a Cuphic `pattern`.
 */
dk.cst.cuphic.matches = (function dk$cst$cuphic$matches(pattern,hiccup){
if(cljs.core.truth_(dk.cst.cuphic.get_bindings(pattern,hiccup))){
return hiccup;
} else {
return null;
}
});
/**
 * Helper fn for apply-bindings taking a `bindings` map and returning an fn that
 *   acts as (partial get bindings), but in a way such that collections only return
 *   the first item while swapping in the rest.
 * 
 *   Calling the returned fn with :done? will return 'true' if a collection has
 *   been exhausted.
 * 
 *   Calling the returned fn with :quantified? will return 'true' if a collection
 *   has been found among the returned values.
 */
dk.cst.cuphic.__GT_repetition_bindings_fn = (function dk$cst$cuphic$__GT_repetition_bindings_fn(bindings){
var bindings__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(bindings);
return (function (k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bindings__$1),k);
if(cljs.core.coll_QMARK_(v)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bindings__$1,cljs.core.assoc,new cljs.core.Keyword(null,"quantified?","quantified?",1081344967),true);

if((cljs.core.count(v) <= (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bindings__$1,cljs.core.assoc,new cljs.core.Keyword(null,"done?","done?",-1847001718),true);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bindings__$1,cljs.core.update,k,cljs.core.rest);

return cljs.core.first(v);
} else {
return v;
}
});
});
/**
 * Apply `bindings` to a Cuphic `pattern`.
 * 
 *   Quantified sub-patterns repeat until a quantified variable is exhausted.
 *   If the pattern does not contain any quantified variables, it runs only once.
 */
dk.cst.cuphic.apply_bindings = (function dk$cst$cuphic$apply_bindings(bindings,pattern){
return dk.cst.cuphic.zip.reduce_zipper((function (loc,pnode){
if(dk.cst.cuphic.symbols.repetition_QMARK_(pnode)){
var bindings__$1 = dk.cst.cuphic.__GT_repetition_bindings_fn(bindings);
var pattern__$1 = cljs.core.vec(cljs.core.rest(pnode));
var nodes = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(bindings__$1(new cljs.core.Keyword(null,"done?","done?",-1847001718)))){
return dk.cst.cuphic.zip.multi_replace(loc,nodes);
} else {
var nodes__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(nodes,(dk.cst.cuphic.apply_bindings.cljs$core$IFn$_invoke$arity$2 ? dk.cst.cuphic.apply_bindings.cljs$core$IFn$_invoke$arity$2(bindings__$1,pattern__$1) : dk.cst.cuphic.apply_bindings.call(null,bindings__$1,pattern__$1)));
if(cljs.core.truth_(bindings__$1(new cljs.core.Keyword(null,"quantified?","quantified?",1081344967)))){
var G__45460 = nodes__$1;
nodes = G__45460;
continue;
} else {
return dk.cst.cuphic.zip.multi_replace(loc,nodes__$1);
}
}
break;
}
} else {
var temp__5802__auto__ = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1(pnode) : bindings.call(null,pnode));
if(cljs.core.truth_(temp__5802__auto__)){
var replacement = temp__5802__auto__;
return clojure.zip.replace(loc,replacement);
} else {
return loc;
}
}
}),dk.cst.cuphic.zip.vector_map_zip(pattern));
});
/**
 * Transform `hiccup` using Cuphic `from-pattern` and `to-pattern`.
 * 
 *   Substitutes symbols in `to-pattern` with bound values from `hiccup` based on
 *   symbols in `from-pattern`. The Cuphic patterns can also be replaced with
 *   functions that either produce or consume a symbol->value map. 
 */
dk.cst.cuphic.transform = (function dk$cst$cuphic$transform(from_pattern,to_pattern,hiccup){
var temp__5804__auto__ = ((cljs.core.fn_QMARK_(from_pattern))?(from_pattern.cljs$core$IFn$_invoke$arity$1 ? from_pattern.cljs$core$IFn$_invoke$arity$1(hiccup) : from_pattern.call(null,hiccup)):dk.cst.cuphic.get_bindings(from_pattern,hiccup));
if(cljs.core.truth_(temp__5804__auto__)){
var bindings = temp__5804__auto__;
if(cljs.core.fn_QMARK_(to_pattern)){
return (to_pattern.cljs$core$IFn$_invoke$arity$1 ? to_pattern.cljs$core$IFn$_invoke$arity$1(bindings) : to_pattern.call(null,bindings));
} else {
return dk.cst.cuphic.apply_bindings(bindings,to_pattern);
}
} else {
return null;
}
});
/**
 * Make a transformer to transform Hiccup using `from-pattern` and `to-pattern`.
 * 
 *   The returned fn will return the transformed value on successful matches and
 *   nil otherwise.
 */
dk.cst.cuphic.__GT_transformer = (function dk$cst$cuphic$__GT_transformer(from_pattern,to_pattern){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dk.cst.cuphic.transform,from_pattern,to_pattern);
});
/**
 * Apply a `stage` of transformations to a Hiccup `node`.
 * 
 *   Transformations are applied in order. The earliest successful transformation
 *   takes precedence over any following transformations. Nil punning is used to
 *   ascertain whether a match is successful.
 */
dk.cst.cuphic.apply_stage = (function dk$cst$cuphic$apply_stage(node,p__45247){
var map__45248 = p__45247;
var map__45248__$1 = cljs.core.__destructure_map(map__45248);
var stage = map__45248__$1;
var wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45248__$1,new cljs.core.Keyword(null,"wrapper","wrapper",-969103524));
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45248__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45248__$1,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity);
var G__45249 = (function (){var temp__5802__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45244_SHARP_){
return (p1__45244_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45244_SHARP_.cljs$core$IFn$_invoke$arity$1(node) : p1__45244_SHARP_.call(null,node));
}),transformers)));
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
if(cljs.core.truth_(wrapper)){
return (wrapper.cljs$core$IFn$_invoke$arity$2 ? wrapper.cljs$core$IFn$_invoke$arity$2(node,new_node) : wrapper.call(null,node,new_node));
} else {
return new_node;
}
} else {
return node;
}
})();
return (default$.cljs$core$IFn$_invoke$arity$1 ? default$.cljs$core$IFn$_invoke$arity$1(G__45249) : default$.call(null,G__45249));
});
/**
 * Apply the `stage` to the current `loc`. Helper function for 'rewrite'.
 */
dk.cst.cuphic.rewrite_loc = (function dk$cst$cuphic$rewrite_loc(loc,stage){
var old_node = clojure.zip.node(loc);
var new_node = dk.cst.cuphic.apply_stage(old_node,stage);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_node,new_node)){
if(cljs.core.seq_QMARK_(new_node)){
return dk.cst.cuphic.zip.multi_replace(loc,new_node);
} else {
return clojure.zip.replace(loc,new_node);
}
} else {
return loc;
}
});
/**
 * Process the nodes of some `hiccup` in one or more transformation `stages`.
 * 
 *   A stage is applied in full to the entire Hiccup tree, handing over a modified
 *   tree to the next stage which then traverses the entire modified tree again.
 *   For this reason, only very few stages should be used when rewriting Hiccup.
 * 
 *   Stages are maps with the following keys (optional):
 *  :transformers - sequence of transformer fns applied to each Hiccup node.
 *  :wrapper      - fn applied to [node new-node] on successful transformations.
 *  :default      - fn applied to every Hiccup node as a final step.
 * 
 *   A transformer is an fn that, given a Hiccup node, attempts to match the node,
 *   returning a transformed node on matches, otherwise returning nil.
 */
dk.cst.cuphic.rewrite = (function dk$cst$cuphic$rewrite(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45464 = arguments.length;
var i__5769__auto___45465 = (0);
while(true){
if((i__5769__auto___45465 < len__5768__auto___45464)){
args__5774__auto__.push((arguments[i__5769__auto___45465]));

var G__45469 = (i__5769__auto___45465 + (1));
i__5769__auto___45465 = G__45469;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return dk.cst.cuphic.rewrite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(dk.cst.cuphic.rewrite.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,stages){
var hiccup__$1 = hiccup;
var G__45273 = stages;
var vec__45274 = G__45273;
var seq__45275 = cljs.core.seq(vec__45274);
var first__45276 = cljs.core.first(seq__45275);
var seq__45275__$1 = cljs.core.next(seq__45275);
var stage = first__45276;
var stages__$1 = seq__45275__$1;
var hiccup__$2 = hiccup__$1;
var G__45273__$1 = G__45273;
while(true){
var hiccup__$3 = hiccup__$2;
var vec__45282 = G__45273__$1;
var seq__45283 = cljs.core.seq(vec__45282);
var first__45284 = cljs.core.first(seq__45283);
var seq__45283__$1 = cljs.core.next(seq__45283);
var stage__$1 = first__45284;
var stages__$2 = seq__45283__$1;
if(cljs.core.truth_(stage__$1)){
var loc = hickory.zip.hiccup_zip(hiccup__$3);
var G__45470 = dk.cst.cuphic.zip.reduce_zipper(((function (hiccup__$2,G__45273__$1,loc,hiccup__$3,vec__45282,seq__45283,first__45284,seq__45283__$1,stage__$1,stages__$2,hiccup__$1,G__45273,vec__45274,seq__45275,first__45276,seq__45275__$1,stage,stages__$1){
return (function (p1__45258_SHARP_){
return dk.cst.cuphic.rewrite_loc(p1__45258_SHARP_,stage__$1);
});})(hiccup__$2,G__45273__$1,loc,hiccup__$3,vec__45282,seq__45283,first__45284,seq__45283__$1,stage__$1,stages__$2,hiccup__$1,G__45273,vec__45274,seq__45275,first__45276,seq__45275__$1,stage,stages__$1))
,loc);
var G__45471 = stages__$2;
hiccup__$2 = G__45470;
G__45273__$1 = G__45471;
continue;
} else {
return hiccup__$3;
}
break;
}
}));

(dk.cst.cuphic.rewrite.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dk.cst.cuphic.rewrite.cljs$lang$applyTo = (function (seq45259){
var G__45263 = cljs.core.first(seq45259);
var seq45259__$1 = cljs.core.next(seq45259);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45263,seq45259__$1);
}));

/**
 * Return a function that takes a loc and returns bindings based on `pattern`.
 */
dk.cst.cuphic.pattern__GT_bindings_fn = (function dk$cst$cuphic$pattern__GT_bindings_fn(pattern){
return (function (loc){
return dk.cst.cuphic.get_bindings(pattern,clojure.zip.node(loc));
});
});
/**
 * Given some `hiccup` and one or more Cuphic `patterns` to match, return a lazy
 *   sequence of match results. Each result - successful or not - has the form
 *   [loc bindings-1 ... bindings-n] with n being the number of Cuphic patterns.
 * 
 *   Results come in the order they are scanned while iterating through the zipper.
 *   Many result rows will probably have nil results for most of the patterns.
 *   Result rows with no pattern matches are always removed before returning.
 *   The result rows also include the loc, making it possible to see the exact
 *   state of the zipper at each node and retrieve the node itself.
 * 
 *   WARNING: not suitable for REPL output as every line of output will contain a
 *   (typically quite sizable) zipper data structure.
 */
dk.cst.cuphic.scan = (function dk$cst$cuphic$scan(var_args){
var args__5774__auto__ = [];
var len__5768__auto___45474 = arguments.length;
var i__5769__auto___45475 = (0);
while(true){
if((i__5769__auto___45475 < len__5768__auto___45474)){
args__5774__auto__.push((arguments[i__5769__auto___45475]));

var G__45476 = (i__5769__auto___45475 + (1));
i__5769__auto___45475 = G__45476;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return dk.cst.cuphic.scan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(dk.cst.cuphic.scan.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,patterns){
var bindings_fns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dk.cst.cuphic.pattern__GT_bindings_fn,patterns);
var contains_match_QMARK_ = (function (row){
return cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,cljs.core.rest(row));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(contains_match_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.juxt,cljs.core.identity,bindings_fns),dk.cst.cuphic.zip.iterate_zipper(hickory.zip.hiccup_zip(hiccup))));
}));

(dk.cst.cuphic.scan.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dk.cst.cuphic.scan.cljs$lang$applyTo = (function (seq45302){
var G__45303 = cljs.core.first(seq45302);
var seq45302__$1 = cljs.core.next(seq45302);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45303,seq45302__$1);
}));

/**
 * Select all nodes in `hiccup` matching the Cuphic `pattern`.
 */
dk.cst.cuphic.select_all = (function dk$cst$cuphic$select_all(hiccup,pattern){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.ffirst,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),dk.cst.cuphic.scan.cljs$core$IFn$_invoke$arity$variadic(hiccup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0))));
});
/**
 * Select the first node in `hiccup` matching the Cuphic `pattern`.
 */
dk.cst.cuphic.select_one = (function dk$cst$cuphic$select_one(hiccup,pattern){
return cljs.core.first(dk.cst.cuphic.select_all(hiccup,pattern));
});
/**
 * Given some `hiccup` and a map `k->pattern` from keys to Cuphic patterns,
 *   return the map k->results, where results is a collection of bindings for all
 *   matches found for the pattern identified by k.
 * 
 *   This can be used to mine Hiccup data (e.g. a webpage) using Cuphic patterns
 *   to match and bind values from target Hiccup nodes:
 * 
 *  (scrape [:div {}
 *           [:p {:id "p"}
 *            [:span {:id "span"}]]]
 * 
 *          {:x '[tag {:id "nada"}]
 *           :y '[:span {:id id}]
 *           :z '[tag {:id id} ???]})
 * 
 * ... which will return:
 * 
 *   {:y [{id "span"}]
 *    :z [{tag :p
 *         id  "p"}
 *        {tag :span
 *         id  "span"}]}
 * 
 *   For a more low-level operation, try the scan function defined above instead.
 */
dk.cst.cuphic.scrape = (function dk$cst$cuphic$scrape(hiccup,k__GT_pattern){
var i__GT_k = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.keys(k__GT_pattern)));
var scans = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dk.cst.cuphic.scan,hiccup,cljs.core.vals(k__GT_pattern));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__45337){
var vec__45338 = p__45337;
var seq__45339 = cljs.core.seq(vec__45338);
var first__45340 = cljs.core.first(seq__45339);
var seq__45339__$1 = cljs.core.next(seq__45339);
var loc = first__45340;
var results = seq__45339__$1;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__GT_k.cljs$core$IFn$_invoke$arity$1 ? i__GT_k.cljs$core$IFn$_invoke$arity$1(i) : i__GT_k.call(null,i)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),loc], null))], null)], null);
} else {
return null;
}
}),results)))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,scans);
});

//# sourceMappingURL=dk.cst.cuphic.js.map
