// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 *   
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 *   
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args48219 = [];
var len__21048__auto___48250 = arguments.length;
var i__21049__auto___48251 = (0);
while(true){
if((i__21049__auto___48251 < len__21048__auto___48250)){
args48219.push((arguments[i__21049__auto___48251]));

var G__48252 = (i__21049__auto___48251 + (1));
i__21049__auto___48251 = G__48252;
continue;
} else {
}
break;
}

var G__48221 = args48219.length;
switch (G__48221) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48219.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__48222 = opts;
var map__48222__$1 = ((((!((map__48222 == null)))?((((map__48222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48222):map__48222);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48222__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48222__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__48224 = cljs.core.count(refs);
switch (G__48224) {
case (1):
var vec__48225 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(0),null);
return ((function (vec__48225,a,G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_){
return (function (){
var G__48228 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48228) : f.call(null,G__48228));
});
;})(vec__48225,a,G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__48229 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48229,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48229,(1),null);
return ((function (vec__48229,a,b,G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_){
return (function (){
var G__48232 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__48233 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48232,G__48233) : f.call(null,G__48232,G__48233));
});
;})(vec__48229,a,b,G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__48234 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48234,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48234,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48234,(2),null);
return ((function (vec__48234,a,b,c,G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_){
return (function (){
var G__48237 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__48238 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__48239 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48237,G__48238,G__48239) : f.call(null,G__48237,G__48238,G__48239));
});
;})(vec__48234,a,b,c,G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__48224,map__48222,map__48222__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__48240 = ref;
var G__48241_48255 = G__48240;
var G__48242_48256 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48241_48255,G__48242_48256) : cljs.core.reset_BANG_.call(null,G__48241_48255,G__48242_48256));

return G__48240;
})():(function (){var G__48243 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48243) : cljs.core.atom.call(null,G__48243));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__48222,map__48222__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__48222,map__48222__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__48222,map__48222__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__48244 = sink;
var G__48245 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48244,G__48245) : cljs.core.reset_BANG_.call(null,G__48244,G__48245));
});})(map__48222,map__48222__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__48246_48257 = cljs.core.seq(refs);
var chunk__48247_48258 = null;
var count__48248_48259 = (0);
var i__48249_48260 = (0);
while(true){
if((i__48249_48260 < count__48248_48259)){
var ref_48261__$1 = chunk__48247_48258.cljs$core$IIndexed$_nth$arity$2(null,i__48249_48260);
cljs.core.add_watch(ref_48261__$1,key,watch);

var G__48262 = seq__48246_48257;
var G__48263 = chunk__48247_48258;
var G__48264 = count__48248_48259;
var G__48265 = (i__48249_48260 + (1));
seq__48246_48257 = G__48262;
chunk__48247_48258 = G__48263;
count__48248_48259 = G__48264;
i__48249_48260 = G__48265;
continue;
} else {
var temp__4657__auto___48266 = cljs.core.seq(seq__48246_48257);
if(temp__4657__auto___48266){
var seq__48246_48267__$1 = temp__4657__auto___48266;
if(cljs.core.chunked_seq_QMARK_(seq__48246_48267__$1)){
var c__20784__auto___48268 = cljs.core.chunk_first(seq__48246_48267__$1);
var G__48269 = cljs.core.chunk_rest(seq__48246_48267__$1);
var G__48270 = c__20784__auto___48268;
var G__48271 = cljs.core.count(c__20784__auto___48268);
var G__48272 = (0);
seq__48246_48257 = G__48269;
chunk__48247_48258 = G__48270;
count__48248_48259 = G__48271;
i__48249_48260 = G__48272;
continue;
} else {
var ref_48273__$1 = cljs.core.first(seq__48246_48267__$1);
cljs.core.add_watch(ref_48273__$1,key,watch);

var G__48274 = cljs.core.next(seq__48246_48267__$1);
var G__48275 = null;
var G__48276 = (0);
var G__48277 = (0);
seq__48246_48257 = G__48274;
chunk__48247_48258 = G__48275;
count__48248_48259 = G__48276;
i__48249_48260 = G__48277;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

