// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('postaustralia.core');
goog.require('cljs.core');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["This text is printed from src/postaustralia/core.cljs. Go ahead and edit it and see reloading in action."], 0));
if(typeof postaustralia.core.app_state !== 'undefined'){
} else {
postaustralia.core.app_state = (function (){var G__48896 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Live as if you were working in the latter days of a disposable nation."], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48896) : cljs.core.atom.call(null,G__48896));
})();
}
postaustralia.core.hexagon = rum.core.build_defc((function (){
var G__48911 = "li";
var G__48912 = null;
var G__48913 = (function (){var G__48916 = "div";
var G__48917 = null;
var G__48918 = (function (){var G__48921 = "img";
var G__48922 = {"src": "img/postaustralia.svg", "alt": ""};
return React.createElement(G__48921,G__48922);
})();
var G__48919 = React.createElement("h1",null,"Postaustralia");
var G__48920 = (function (){var attrs48901 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(postaustralia.core.app_state) : cljs.core.deref.call(null,postaustralia.core.app_state)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs48901))?sablono.interpreter.attributes(attrs48901):null),((cljs.core.map_QMARK_(attrs48901))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48901)], null)));
})();
return React.createElement(G__48916,G__48917,G__48918,G__48919,G__48920);
})();
return React.createElement(G__48911,G__48912,G__48913);
}),null,postaustralia.core.hexagon);
postaustralia.core.pusher = rum.core.build_defc((function (){
var G__48925 = "li";
var G__48926 = {"className": "pusher"};
return React.createElement(G__48925,G__48926);
}),null,postaustralia.core.pusher);
postaustralia.core.filler = rum.core.build_defc((function (){
var G__48929 = "li";
var G__48930 = null;
var G__48931 = React.createElement("div",null);
return React.createElement(G__48929,G__48930,G__48931);
}),null,postaustralia.core.filler);
postaustralia.core.hive = rum.core.build_defc((function (size){
var attrs48932 = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (component,react_key){
return rum.core.with_key((component.cljs$core$IFn$_invoke$arity$0 ? component.cljs$core$IFn$_invoke$arity$0() : component.call(null)),react_key);
}),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(size,(function (){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [postaustralia.core.hexagon,postaustralia.core.hexagon,postaustralia.core.hexagon,postaustralia.core.pusher,postaustralia.core.filler], null));
})),cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ul",((cljs.core.map_QMARK_(attrs48932))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clr","categories"], null)], null),attrs48932], 0))):{"className": "clr categories"}),((cljs.core.map_QMARK_(attrs48932))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48932)], null)));
}),null,postaustralia.core.hive);
rum.core.mount((postaustralia.core.hive.cljs$core$IFn$_invoke$arity$1 ? postaustralia.core.hive.cljs$core$IFn$_invoke$arity$1((100)) : postaustralia.core.hive.call(null,(100))),document.getElementById("app"));
postaustralia.core.on_js_reload = (function postaustralia$core$on_js_reload(){
return null;
});
