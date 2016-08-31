// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__48365__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__48362 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__48363 = cljs.core.seq(vec__48362);
var first__48364 = cljs.core.first(seq__48363);
var seq__48363__$1 = cljs.core.next(seq__48363);
var tag = first__48364;
var body = seq__48363__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__48365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48366__i = 0, G__48366__a = new Array(arguments.length -  0);
while (G__48366__i < G__48366__a.length) {G__48366__a[G__48366__i] = arguments[G__48366__i + 0]; ++G__48366__i;}
  args = new cljs.core.IndexedSeq(G__48366__a,0);
} 
return G__48365__delegate.call(this,args);};
G__48365.cljs$lang$maxFixedArity = 0;
G__48365.cljs$lang$applyTo = (function (arglist__48367){
var args = cljs.core.seq(arglist__48367);
return G__48365__delegate(args);
});
G__48365.cljs$core$IFn$_invoke$arity$variadic = G__48365__delegate;
return G__48365;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20753__auto__ = (function sablono$core$update_arglists_$_iter__48374(s__48375){
return (new cljs.core.LazySeq(null,(function (){
var s__48375__$1 = s__48375;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__48375__$1);
if(temp__4657__auto__){
var s__48375__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48375__$2)){
var c__20751__auto__ = cljs.core.chunk_first(s__48375__$2);
var size__20752__auto__ = cljs.core.count(c__20751__auto__);
var b__48377 = cljs.core.chunk_buffer(size__20752__auto__);
if((function (){var i__48376 = (0);
while(true){
if((i__48376 < size__20752__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20751__auto__,i__48376);
cljs.core.chunk_append(b__48377,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__48380 = (i__48376 + (1));
i__48376 = G__48380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48377),sablono$core$update_arglists_$_iter__48374(cljs.core.chunk_rest(s__48375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48377),null);
}
} else {
var args = cljs.core.first(s__48375__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__48374(cljs.core.rest(s__48375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20753__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21055__auto__ = [];
var len__21048__auto___48388 = arguments.length;
var i__21049__auto___48389 = (0);
while(true){
if((i__21049__auto___48389 < len__21048__auto___48388)){
args__21055__auto__.push((arguments[i__21049__auto___48389]));

var G__48390 = (i__21049__auto___48389 + (1));
i__21049__auto___48389 = G__48390;
continue;
} else {
}
break;
}

var argseq__21056__auto__ = ((((0) < args__21055__auto__.length))?(new cljs.core.IndexedSeq(args__21055__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21056__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20753__auto__ = (function sablono$core$iter__48382(s__48383){
return (new cljs.core.LazySeq(null,(function (){
var s__48383__$1 = s__48383;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__48383__$1);
if(temp__4657__auto__){
var s__48383__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48383__$2)){
var c__20751__auto__ = cljs.core.chunk_first(s__48383__$2);
var size__20752__auto__ = cljs.core.count(c__20751__auto__);
var b__48385 = cljs.core.chunk_buffer(size__20752__auto__);
if((function (){var i__48384 = (0);
while(true){
if((i__48384 < size__20752__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20751__auto__,i__48384);
cljs.core.chunk_append(b__48385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__48391 = (i__48384 + (1));
i__48384 = G__48391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48385),sablono$core$iter__48382(cljs.core.chunk_rest(s__48383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48385),null);
}
} else {
var style = cljs.core.first(s__48383__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__48382(cljs.core.rest(s__48383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20753__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq48381){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48381));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__48396 = goog.dom.getDocument().body;
var G__48397 = (function (){var G__48398 = "script";
var G__48399 = {"src": src};
return goog.dom.createDom(G__48398,G__48399);
})();
return goog.dom.appendChild(G__48396,G__48397);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to48400 = (function sablono$core$link_to48400(var_args){
var args__21055__auto__ = [];
var len__21048__auto___48403 = arguments.length;
var i__21049__auto___48404 = (0);
while(true){
if((i__21049__auto___48404 < len__21048__auto___48403)){
args__21055__auto__.push((arguments[i__21049__auto___48404]));

var G__48405 = (i__21049__auto___48404 + (1));
i__21049__auto___48404 = G__48405;
continue;
} else {
}
break;
}

var argseq__21056__auto__ = ((((1) < args__21055__auto__.length))?(new cljs.core.IndexedSeq(args__21055__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to48400.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21056__auto__);
});

sablono.core.link_to48400.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to48400.cljs$lang$maxFixedArity = (1);

sablono.core.link_to48400.cljs$lang$applyTo = (function (seq48401){
var G__48402 = cljs.core.first(seq48401);
var seq48401__$1 = cljs.core.next(seq48401);
return sablono.core.link_to48400.cljs$core$IFn$_invoke$arity$variadic(G__48402,seq48401__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to48400);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to48406 = (function sablono$core$mail_to48406(var_args){
var args__21055__auto__ = [];
var len__21048__auto___48413 = arguments.length;
var i__21049__auto___48414 = (0);
while(true){
if((i__21049__auto___48414 < len__21048__auto___48413)){
args__21055__auto__.push((arguments[i__21049__auto___48414]));

var G__48415 = (i__21049__auto___48414 + (1));
i__21049__auto___48414 = G__48415;
continue;
} else {
}
break;
}

var argseq__21056__auto__ = ((((1) < args__21055__auto__.length))?(new cljs.core.IndexedSeq(args__21055__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to48406.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21056__auto__);
});

sablono.core.mail_to48406.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__48409){
var vec__48410 = p__48409;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48410,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19973__auto__ = content;
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to48406.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to48406.cljs$lang$applyTo = (function (seq48407){
var G__48408 = cljs.core.first(seq48407);
var seq48407__$1 = cljs.core.next(seq48407);
return sablono.core.mail_to48406.cljs$core$IFn$_invoke$arity$variadic(G__48408,seq48407__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to48406);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list48416 = (function sablono$core$unordered_list48416(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__20753__auto__ = (function sablono$core$unordered_list48416_$_iter__48423(s__48424){
return (new cljs.core.LazySeq(null,(function (){
var s__48424__$1 = s__48424;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__48424__$1);
if(temp__4657__auto__){
var s__48424__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48424__$2)){
var c__20751__auto__ = cljs.core.chunk_first(s__48424__$2);
var size__20752__auto__ = cljs.core.count(c__20751__auto__);
var b__48426 = cljs.core.chunk_buffer(size__20752__auto__);
if((function (){var i__48425 = (0);
while(true){
if((i__48425 < size__20752__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20751__auto__,i__48425);
cljs.core.chunk_append(b__48426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__48429 = (i__48425 + (1));
i__48425 = G__48429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48426),sablono$core$unordered_list48416_$_iter__48423(cljs.core.chunk_rest(s__48424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48426),null);
}
} else {
var x = cljs.core.first(s__48424__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list48416_$_iter__48423(cljs.core.rest(s__48424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20753__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list48416);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list48430 = (function sablono$core$ordered_list48430(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__20753__auto__ = (function sablono$core$ordered_list48430_$_iter__48437(s__48438){
return (new cljs.core.LazySeq(null,(function (){
var s__48438__$1 = s__48438;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__48438__$1);
if(temp__4657__auto__){
var s__48438__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48438__$2)){
var c__20751__auto__ = cljs.core.chunk_first(s__48438__$2);
var size__20752__auto__ = cljs.core.count(c__20751__auto__);
var b__48440 = cljs.core.chunk_buffer(size__20752__auto__);
if((function (){var i__48439 = (0);
while(true){
if((i__48439 < size__20752__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20751__auto__,i__48439);
cljs.core.chunk_append(b__48440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__48443 = (i__48439 + (1));
i__48439 = G__48443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48440),sablono$core$ordered_list48430_$_iter__48437(cljs.core.chunk_rest(s__48438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48440),null);
}
} else {
var x = cljs.core.first(s__48438__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list48430_$_iter__48437(cljs.core.rest(s__48438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20753__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list48430);
/**
 * Create an image element.
 */
sablono.core.image48444 = (function sablono$core$image48444(var_args){
var args48445 = [];
var len__21048__auto___48448 = arguments.length;
var i__21049__auto___48449 = (0);
while(true){
if((i__21049__auto___48449 < len__21048__auto___48448)){
args48445.push((arguments[i__21049__auto___48449]));

var G__48450 = (i__21049__auto___48449 + (1));
i__21049__auto___48449 = G__48450;
continue;
} else {
}
break;
}

var G__48447 = args48445.length;
switch (G__48447) {
case 1:
return sablono.core.image48444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image48444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48445.length)].join('')));

}
});

sablono.core.image48444.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image48444.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image48444.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image48444);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48452_SHARP_,p2__48453_SHARP_){
return [cljs.core.str(p1__48452_SHARP_),cljs.core.str("["),cljs.core.str(p2__48453_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48454_SHARP_,p2__48455_SHARP_){
return [cljs.core.str(p1__48454_SHARP_),cljs.core.str("-"),cljs.core.str(p2__48455_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__19973__auto__ = value;
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field48456 = (function sablono$core$color_field48456(var_args){
var args48457 = [];
var len__21048__auto___48524 = arguments.length;
var i__21049__auto___48525 = (0);
while(true){
if((i__21049__auto___48525 < len__21048__auto___48524)){
args48457.push((arguments[i__21049__auto___48525]));

var G__48526 = (i__21049__auto___48525 + (1));
i__21049__auto___48525 = G__48526;
continue;
} else {
}
break;
}

var G__48459 = args48457.length;
switch (G__48459) {
case 1:
return sablono.core.color_field48456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field48456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48457.length)].join('')));

}
});

sablono.core.color_field48456.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.color_field48456.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.color_field48456.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.color_field48456.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field48456);

/**
 * Creates a date input field.
 */
sablono.core.date_field48460 = (function sablono$core$date_field48460(var_args){
var args48461 = [];
var len__21048__auto___48528 = arguments.length;
var i__21049__auto___48529 = (0);
while(true){
if((i__21049__auto___48529 < len__21048__auto___48528)){
args48461.push((arguments[i__21049__auto___48529]));

var G__48530 = (i__21049__auto___48529 + (1));
i__21049__auto___48529 = G__48530;
continue;
} else {
}
break;
}

var G__48463 = args48461.length;
switch (G__48463) {
case 1:
return sablono.core.date_field48460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field48460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48461.length)].join('')));

}
});

sablono.core.date_field48460.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.date_field48460.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.date_field48460.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.date_field48460.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field48460);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field48464 = (function sablono$core$datetime_field48464(var_args){
var args48465 = [];
var len__21048__auto___48532 = arguments.length;
var i__21049__auto___48533 = (0);
while(true){
if((i__21049__auto___48533 < len__21048__auto___48532)){
args48465.push((arguments[i__21049__auto___48533]));

var G__48534 = (i__21049__auto___48533 + (1));
i__21049__auto___48533 = G__48534;
continue;
} else {
}
break;
}

var G__48467 = args48465.length;
switch (G__48467) {
case 1:
return sablono.core.datetime_field48464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field48464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48465.length)].join('')));

}
});

sablono.core.datetime_field48464.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.datetime_field48464.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.datetime_field48464.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.datetime_field48464.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field48464);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field48468 = (function sablono$core$datetime_local_field48468(var_args){
var args48469 = [];
var len__21048__auto___48536 = arguments.length;
var i__21049__auto___48537 = (0);
while(true){
if((i__21049__auto___48537 < len__21048__auto___48536)){
args48469.push((arguments[i__21049__auto___48537]));

var G__48538 = (i__21049__auto___48537 + (1));
i__21049__auto___48537 = G__48538;
continue;
} else {
}
break;
}

var G__48471 = args48469.length;
switch (G__48471) {
case 1:
return sablono.core.datetime_local_field48468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field48468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48469.length)].join('')));

}
});

sablono.core.datetime_local_field48468.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.datetime_local_field48468.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.datetime_local_field48468.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.datetime_local_field48468.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field48468);

/**
 * Creates a email input field.
 */
sablono.core.email_field48472 = (function sablono$core$email_field48472(var_args){
var args48473 = [];
var len__21048__auto___48540 = arguments.length;
var i__21049__auto___48541 = (0);
while(true){
if((i__21049__auto___48541 < len__21048__auto___48540)){
args48473.push((arguments[i__21049__auto___48541]));

var G__48542 = (i__21049__auto___48541 + (1));
i__21049__auto___48541 = G__48542;
continue;
} else {
}
break;
}

var G__48475 = args48473.length;
switch (G__48475) {
case 1:
return sablono.core.email_field48472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field48472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48473.length)].join('')));

}
});

sablono.core.email_field48472.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.email_field48472.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.email_field48472.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.email_field48472.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field48472);

/**
 * Creates a file input field.
 */
sablono.core.file_field48476 = (function sablono$core$file_field48476(var_args){
var args48477 = [];
var len__21048__auto___48544 = arguments.length;
var i__21049__auto___48545 = (0);
while(true){
if((i__21049__auto___48545 < len__21048__auto___48544)){
args48477.push((arguments[i__21049__auto___48545]));

var G__48546 = (i__21049__auto___48545 + (1));
i__21049__auto___48545 = G__48546;
continue;
} else {
}
break;
}

var G__48479 = args48477.length;
switch (G__48479) {
case 1:
return sablono.core.file_field48476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field48476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48477.length)].join('')));

}
});

sablono.core.file_field48476.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.file_field48476.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.file_field48476.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.file_field48476.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field48476);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field48480 = (function sablono$core$hidden_field48480(var_args){
var args48481 = [];
var len__21048__auto___48548 = arguments.length;
var i__21049__auto___48549 = (0);
while(true){
if((i__21049__auto___48549 < len__21048__auto___48548)){
args48481.push((arguments[i__21049__auto___48549]));

var G__48550 = (i__21049__auto___48549 + (1));
i__21049__auto___48549 = G__48550;
continue;
} else {
}
break;
}

var G__48483 = args48481.length;
switch (G__48483) {
case 1:
return sablono.core.hidden_field48480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field48480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48481.length)].join('')));

}
});

sablono.core.hidden_field48480.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.hidden_field48480.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.hidden_field48480.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.hidden_field48480.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field48480);

/**
 * Creates a month input field.
 */
sablono.core.month_field48484 = (function sablono$core$month_field48484(var_args){
var args48485 = [];
var len__21048__auto___48552 = arguments.length;
var i__21049__auto___48553 = (0);
while(true){
if((i__21049__auto___48553 < len__21048__auto___48552)){
args48485.push((arguments[i__21049__auto___48553]));

var G__48554 = (i__21049__auto___48553 + (1));
i__21049__auto___48553 = G__48554;
continue;
} else {
}
break;
}

var G__48487 = args48485.length;
switch (G__48487) {
case 1:
return sablono.core.month_field48484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field48484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48485.length)].join('')));

}
});

sablono.core.month_field48484.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.month_field48484.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.month_field48484.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.month_field48484.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field48484);

/**
 * Creates a number input field.
 */
sablono.core.number_field48488 = (function sablono$core$number_field48488(var_args){
var args48489 = [];
var len__21048__auto___48556 = arguments.length;
var i__21049__auto___48557 = (0);
while(true){
if((i__21049__auto___48557 < len__21048__auto___48556)){
args48489.push((arguments[i__21049__auto___48557]));

var G__48558 = (i__21049__auto___48557 + (1));
i__21049__auto___48557 = G__48558;
continue;
} else {
}
break;
}

var G__48491 = args48489.length;
switch (G__48491) {
case 1:
return sablono.core.number_field48488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field48488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48489.length)].join('')));

}
});

sablono.core.number_field48488.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.number_field48488.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.number_field48488.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.number_field48488.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field48488);

/**
 * Creates a password input field.
 */
sablono.core.password_field48492 = (function sablono$core$password_field48492(var_args){
var args48493 = [];
var len__21048__auto___48560 = arguments.length;
var i__21049__auto___48561 = (0);
while(true){
if((i__21049__auto___48561 < len__21048__auto___48560)){
args48493.push((arguments[i__21049__auto___48561]));

var G__48562 = (i__21049__auto___48561 + (1));
i__21049__auto___48561 = G__48562;
continue;
} else {
}
break;
}

var G__48495 = args48493.length;
switch (G__48495) {
case 1:
return sablono.core.password_field48492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field48492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48493.length)].join('')));

}
});

sablono.core.password_field48492.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.password_field48492.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.password_field48492.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.password_field48492.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field48492);

/**
 * Creates a range input field.
 */
sablono.core.range_field48496 = (function sablono$core$range_field48496(var_args){
var args48497 = [];
var len__21048__auto___48564 = arguments.length;
var i__21049__auto___48565 = (0);
while(true){
if((i__21049__auto___48565 < len__21048__auto___48564)){
args48497.push((arguments[i__21049__auto___48565]));

var G__48566 = (i__21049__auto___48565 + (1));
i__21049__auto___48565 = G__48566;
continue;
} else {
}
break;
}

var G__48499 = args48497.length;
switch (G__48499) {
case 1:
return sablono.core.range_field48496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field48496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48497.length)].join('')));

}
});

sablono.core.range_field48496.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.range_field48496.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.range_field48496.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.range_field48496.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field48496);

/**
 * Creates a search input field.
 */
sablono.core.search_field48500 = (function sablono$core$search_field48500(var_args){
var args48501 = [];
var len__21048__auto___48568 = arguments.length;
var i__21049__auto___48569 = (0);
while(true){
if((i__21049__auto___48569 < len__21048__auto___48568)){
args48501.push((arguments[i__21049__auto___48569]));

var G__48570 = (i__21049__auto___48569 + (1));
i__21049__auto___48569 = G__48570;
continue;
} else {
}
break;
}

var G__48503 = args48501.length;
switch (G__48503) {
case 1:
return sablono.core.search_field48500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field48500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48501.length)].join('')));

}
});

sablono.core.search_field48500.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.search_field48500.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.search_field48500.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.search_field48500.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field48500);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field48504 = (function sablono$core$tel_field48504(var_args){
var args48505 = [];
var len__21048__auto___48572 = arguments.length;
var i__21049__auto___48573 = (0);
while(true){
if((i__21049__auto___48573 < len__21048__auto___48572)){
args48505.push((arguments[i__21049__auto___48573]));

var G__48574 = (i__21049__auto___48573 + (1));
i__21049__auto___48573 = G__48574;
continue;
} else {
}
break;
}

var G__48507 = args48505.length;
switch (G__48507) {
case 1:
return sablono.core.tel_field48504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field48504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48505.length)].join('')));

}
});

sablono.core.tel_field48504.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.tel_field48504.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.tel_field48504.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.tel_field48504.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field48504);

/**
 * Creates a text input field.
 */
sablono.core.text_field48508 = (function sablono$core$text_field48508(var_args){
var args48509 = [];
var len__21048__auto___48576 = arguments.length;
var i__21049__auto___48577 = (0);
while(true){
if((i__21049__auto___48577 < len__21048__auto___48576)){
args48509.push((arguments[i__21049__auto___48577]));

var G__48578 = (i__21049__auto___48577 + (1));
i__21049__auto___48577 = G__48578;
continue;
} else {
}
break;
}

var G__48511 = args48509.length;
switch (G__48511) {
case 1:
return sablono.core.text_field48508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field48508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48509.length)].join('')));

}
});

sablono.core.text_field48508.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.text_field48508.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.text_field48508.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.text_field48508.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field48508);

/**
 * Creates a time input field.
 */
sablono.core.time_field48512 = (function sablono$core$time_field48512(var_args){
var args48513 = [];
var len__21048__auto___48580 = arguments.length;
var i__21049__auto___48581 = (0);
while(true){
if((i__21049__auto___48581 < len__21048__auto___48580)){
args48513.push((arguments[i__21049__auto___48581]));

var G__48582 = (i__21049__auto___48581 + (1));
i__21049__auto___48581 = G__48582;
continue;
} else {
}
break;
}

var G__48515 = args48513.length;
switch (G__48515) {
case 1:
return sablono.core.time_field48512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field48512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48513.length)].join('')));

}
});

sablono.core.time_field48512.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.time_field48512.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.time_field48512.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.time_field48512.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field48512);

/**
 * Creates a url input field.
 */
sablono.core.url_field48516 = (function sablono$core$url_field48516(var_args){
var args48517 = [];
var len__21048__auto___48584 = arguments.length;
var i__21049__auto___48585 = (0);
while(true){
if((i__21049__auto___48585 < len__21048__auto___48584)){
args48517.push((arguments[i__21049__auto___48585]));

var G__48586 = (i__21049__auto___48585 + (1));
i__21049__auto___48585 = G__48586;
continue;
} else {
}
break;
}

var G__48519 = args48517.length;
switch (G__48519) {
case 1:
return sablono.core.url_field48516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field48516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48517.length)].join('')));

}
});

sablono.core.url_field48516.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.url_field48516.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.url_field48516.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.url_field48516.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field48516);

/**
 * Creates a week input field.
 */
sablono.core.week_field48520 = (function sablono$core$week_field48520(var_args){
var args48521 = [];
var len__21048__auto___48588 = arguments.length;
var i__21049__auto___48589 = (0);
while(true){
if((i__21049__auto___48589 < len__21048__auto___48588)){
args48521.push((arguments[i__21049__auto___48589]));

var G__48590 = (i__21049__auto___48589 + (1));
i__21049__auto___48589 = G__48590;
continue;
} else {
}
break;
}

var G__48523 = args48521.length;
switch (G__48523) {
case 1:
return sablono.core.week_field48520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field48520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48521.length)].join('')));

}
});

sablono.core.week_field48520.cljs$core$IFn$_invoke$arity$1 = (function (name__21851__auto__){
return sablono.core.week_field48520.cljs$core$IFn$_invoke$arity$2(name__21851__auto__,null);
});

sablono.core.week_field48520.cljs$core$IFn$_invoke$arity$2 = (function (name__21851__auto__,value__21852__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__21851__auto__,value__21852__auto__);
});

sablono.core.week_field48520.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field48520);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box48592 = (function sablono$core$check_box48592(var_args){
var args48593 = [];
var len__21048__auto___48596 = arguments.length;
var i__21049__auto___48597 = (0);
while(true){
if((i__21049__auto___48597 < len__21048__auto___48596)){
args48593.push((arguments[i__21049__auto___48597]));

var G__48598 = (i__21049__auto___48597 + (1));
i__21049__auto___48597 = G__48598;
continue;
} else {
}
break;
}

var G__48595 = args48593.length;
switch (G__48595) {
case 1:
return sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48593.length)].join('')));

}
});

sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box48592.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__19973__auto__ = value;
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box48592.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box48592);
/**
 * Creates a radio button.
 */
sablono.core.radio_button48600 = (function sablono$core$radio_button48600(var_args){
var args48601 = [];
var len__21048__auto___48604 = arguments.length;
var i__21049__auto___48605 = (0);
while(true){
if((i__21049__auto___48605 < len__21048__auto___48604)){
args48601.push((arguments[i__21049__auto___48605]));

var G__48606 = (i__21049__auto___48605 + (1));
i__21049__auto___48605 = G__48606;
continue;
} else {
}
break;
}

var G__48603 = args48601.length;
switch (G__48603) {
case 1:
return sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48601.length)].join('')));

}
});

sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button48600.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__19973__auto__ = value;
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button48600.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button48600);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__48609 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__48609);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options48610 = (function sablono$core$select_options48610(coll){
var iter__20753__auto__ = (function sablono$core$select_options48610_$_iter__48629(s__48630){
return (new cljs.core.LazySeq(null,(function (){
var s__48630__$1 = s__48630;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__48630__$1);
if(temp__4657__auto__){
var s__48630__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48630__$2)){
var c__20751__auto__ = cljs.core.chunk_first(s__48630__$2);
var size__20752__auto__ = cljs.core.count(c__20751__auto__);
var b__48632 = cljs.core.chunk_buffer(size__20752__auto__);
if((function (){var i__48631 = (0);
while(true){
if((i__48631 < size__20752__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20751__auto__,i__48631);
cljs.core.chunk_append(b__48632,((cljs.core.sequential_QMARK_(x))?(function (){var vec__48641 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48641,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48641,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48641,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options48610(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__48647 = (i__48631 + (1));
i__48631 = G__48647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48632),sablono$core$select_options48610_$_iter__48629(cljs.core.chunk_rest(s__48630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48632),null);
}
} else {
var x = cljs.core.first(s__48630__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__48644 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48644,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48644,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48644,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options48610(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options48610_$_iter__48629(cljs.core.rest(s__48630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20753__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options48610);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down48648 = (function sablono$core$drop_down48648(var_args){
var args48649 = [];
var len__21048__auto___48652 = arguments.length;
var i__21049__auto___48653 = (0);
while(true){
if((i__21049__auto___48653 < len__21048__auto___48652)){
args48649.push((arguments[i__21049__auto___48653]));

var G__48654 = (i__21049__auto___48653 + (1));
i__21049__auto___48653 = G__48654;
continue;
} else {
}
break;
}

var G__48651 = args48649.length;
switch (G__48651) {
case 2:
return sablono.core.drop_down48648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down48648.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48649.length)].join('')));

}
});

sablono.core.drop_down48648.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down48648.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down48648.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down48648.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down48648);
/**
 * Creates a text area element.
 */
sablono.core.text_area48656 = (function sablono$core$text_area48656(var_args){
var args48657 = [];
var len__21048__auto___48660 = arguments.length;
var i__21049__auto___48661 = (0);
while(true){
if((i__21049__auto___48661 < len__21048__auto___48660)){
args48657.push((arguments[i__21049__auto___48661]));

var G__48662 = (i__21049__auto___48661 + (1));
i__21049__auto___48661 = G__48662;
continue;
} else {
}
break;
}

var G__48659 = args48657.length;
switch (G__48659) {
case 1:
return sablono.core.text_area48656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area48656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48657.length)].join('')));

}
});

sablono.core.text_area48656.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area48656.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area48656.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__19973__auto__ = value;
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area48656.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area48656);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label48664 = (function sablono$core$label48664(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label48664);
/**
 * Creates a submit button.
 */
sablono.core.submit_button48665 = (function sablono$core$submit_button48665(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button48665);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button48666 = (function sablono$core$reset_button48666(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button48666);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to48667 = (function sablono$core$form_to48667(var_args){
var args__21055__auto__ = [];
var len__21048__auto___48677 = arguments.length;
var i__21049__auto___48678 = (0);
while(true){
if((i__21049__auto___48678 < len__21048__auto___48677)){
args__21055__auto__.push((arguments[i__21049__auto___48678]));

var G__48679 = (i__21049__auto___48678 + (1));
i__21049__auto___48678 = G__48679;
continue;
} else {
}
break;
}

var argseq__21056__auto__ = ((((1) < args__21055__auto__.length))?(new cljs.core.IndexedSeq(args__21055__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to48667.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21056__auto__);
});

sablono.core.form_to48667.cljs$core$IFn$_invoke$arity$variadic = (function (p__48670,body){
var vec__48671 = p__48670;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48671,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__48674 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__48675 = "_method";
var G__48676 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__48674,G__48675,G__48676) : sablono.core.hidden_field.call(null,G__48674,G__48675,G__48676));
})()], null)),body));
});

sablono.core.form_to48667.cljs$lang$maxFixedArity = (1);

sablono.core.form_to48667.cljs$lang$applyTo = (function (seq48668){
var G__48669 = cljs.core.first(seq48668);
var seq48668__$1 = cljs.core.next(seq48668);
return sablono.core.form_to48667.cljs$core$IFn$_invoke$arity$variadic(G__48669,seq48668__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to48667);
