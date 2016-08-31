// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__48691_SHARP_,p2__48690_SHARP_){
return (p2__48690_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__48690_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__48691_SHARP_) : p2__48690_SHARP_.call(null,p1__48691_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var G__48721 = cljs.core.clj__GT_js(rum.util.filter_vals(cljs.core.some_QMARK_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__48722 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48722) : cljs.core.deref.call(null,G__48722));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,(next_props[":rum/initial-state"])], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__48693_SHARP_,p2__48692_SHARP_){
return (p2__48692_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__48692_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__48693_SHARP_) : p2__48692_SHARP_.call(null,old_state,p1__48693_SHARP_));
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_(next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__48723 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48723) : cljs.core.deref.call(null,G__48723));
})();
var new_state = (function (){var G__48724 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48724) : cljs.core.deref.call(null,G__48724));
})();
var or__19973__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__48694_SHARP_){
return (p1__48694_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__48694_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__48694_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__48725 = (function (){var G__48728 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__48728) : wrapped_render.call(null,G__48728));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48725,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48725,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = (function (){var G__48729 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48729) : cljs.core.deref.call(null,G__48729));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__48695_SHARP_){
return (p1__48695_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48695_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__48695_SHARP_.call(null,state));
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((props[":rum/initial-state"]),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.array_seq([props], 0));
return {":rum/state": cljs.core.volatile_BANG_(state)};
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props], 0))));
return React.createClass(G__48721);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((cljs.core.some_QMARK_(key_fn))?((function (class$,key_fn){
return (function() { 
var G__48730__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)};
return React.createElement(class$,props);
};
var G__48730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48731__i = 0, G__48731__a = new Array(arguments.length -  0);
while (G__48731__i < G__48731__a.length) {G__48731__a[G__48731__i] = arguments[G__48731__i + 0]; ++G__48731__i;}
  args = new cljs.core.IndexedSeq(G__48731__a,0);
} 
return G__48730__delegate.call(this,args);};
G__48730.cljs$lang$maxFixedArity = 0;
G__48730.cljs$lang$applyTo = (function (arglist__48732){
var args = cljs.core.seq(arglist__48732);
return G__48730__delegate(args);
});
G__48730.cljs$core$IFn$_invoke$arity$variadic = G__48730__delegate;
return G__48730;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__48733__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)};
return React.createElement(class$,props);
};
var G__48733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48734__i = 0, G__48734__a = new Array(arguments.length -  0);
while (G__48734__i < G__48734__a.length) {G__48734__a[G__48734__i] = arguments[G__48734__i + 0]; ++G__48734__i;}
  args = new cljs.core.IndexedSeq(G__48734__a,0);
} 
return G__48733__delegate.call(this,args);};
G__48733.cljs$lang$maxFixedArity = 0;
G__48733.cljs$lang$applyTo = (function (arglist__48735){
var args = cljs.core.seq(arglist__48735);
return G__48733__delegate(args);
});
G__48733.cljs$core$IFn$_invoke$arity$variadic = G__48733__delegate;
return G__48733;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__48740__delegate = function (args){
var G__48738 = class$;
var G__48739 = {":rum/args": args};
return React.createElement(G__48738,G__48739);
};
var G__48740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48741__i = 0, G__48741__a = new Array(arguments.length -  0);
while (G__48741__i < G__48741__a.length) {G__48741__a[G__48741__i] = arguments[G__48741__i + 0]; ++G__48741__i;}
  args = new cljs.core.IndexedSeq(G__48741__a,0);
} 
return G__48740__delegate.call(this,args);};
G__48740.cljs$lang$maxFixedArity = 0;
G__48740.cljs$lang$applyTo = (function (arglist__48742){
var args = cljs.core.seq(arglist__48742);
return G__48740__delegate(args);
});
G__48740.cljs$core$IFn$_invoke$arity$variadic = G__48740__delegate;
return G__48740;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__19973__auto__ = (function (){var and__19961__auto__ = typeof window !== 'undefined';
if(and__19961__auto__){
var or__19973__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
var or__19973__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__19973__auto____$1)){
return or__19973__auto____$1;
} else {
var or__19973__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__19973__auto____$2)){
return or__19973__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__19961__auto__;
}
})();
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
return ((function (or__19973__auto__){
return (function (p1__48743_SHARP_){
return setTimeout(p1__48743_SHARP_,(16));
});
;})(or__19973__auto__))
}
})();
rum.core.batch = (function (){var or__19973__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__19973__auto__)){
return or__19973__auto__;
} else {
var or__19973__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__19973__auto____$1)){
return or__19973__auto____$1;
} else {
return ((function (or__19973__auto____$1,or__19973__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__19973__auto____$1,or__19973__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__48750 = cljs.core.seq(queue);
var chunk__48752 = null;
var count__48753 = (0);
var i__48754 = (0);
while(true){
if((i__48754 < count__48753)){
var comp = chunk__48752.cljs$core$IIndexed$_nth$arity$2(null,i__48754);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__48756 = seq__48750;
var G__48757 = chunk__48752;
var G__48758 = count__48753;
var G__48759 = (i__48754 + (1));
seq__48750 = G__48756;
chunk__48752 = G__48757;
count__48753 = G__48758;
i__48754 = G__48759;
continue;
} else {
var G__48760 = seq__48750;
var G__48761 = chunk__48752;
var G__48762 = count__48753;
var G__48763 = (i__48754 + (1));
seq__48750 = G__48760;
chunk__48752 = G__48761;
count__48753 = G__48762;
i__48754 = G__48763;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__48750);
if(temp__4657__auto__){
var seq__48750__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48750__$1)){
var c__20784__auto__ = cljs.core.chunk_first(seq__48750__$1);
var G__48764 = cljs.core.chunk_rest(seq__48750__$1);
var G__48765 = c__20784__auto__;
var G__48766 = cljs.core.count(c__20784__auto__);
var G__48767 = (0);
seq__48750 = G__48764;
chunk__48752 = G__48765;
count__48753 = G__48766;
i__48754 = G__48767;
continue;
} else {
var comp = cljs.core.first(seq__48750__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__48768 = cljs.core.next(seq__48750__$1);
var G__48769 = null;
var G__48770 = (0);
var G__48771 = (0);
seq__48750 = G__48768;
chunk__48752 = G__48769;
count__48753 = G__48770;
i__48754 = G__48771;
continue;
} else {
var G__48772 = cljs.core.next(seq__48750__$1);
var G__48773 = null;
var G__48774 = (0);
var G__48775 = (0);
seq__48750 = G__48772;
chunk__48752 = G__48773;
count__48753 = G__48774;
i__48754 = G__48775;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
var G__48779 = component;
var G__48780 = {"key": key};
var G__48781 = null;
return React.cloneElement(G__48779,G__48780,G__48781);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__48785 = component;
var G__48786 = {"ref": ref};
var G__48787 = null;
return React.cloneElement(G__48785,G__48786,G__48787);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__48789 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__48789);
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
var G__48791 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__48791);
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args48792 = [];
var len__21048__auto___48795 = arguments.length;
var i__21049__auto___48796 = (0);
while(true){
if((i__21049__auto___48796 < len__21048__auto___48795)){
args48792.push((arguments[i__21049__auto___48796]));

var G__48797 = (i__21049__auto___48796 + (1));
i__21049__auto___48796 = G__48797;
continue;
} else {
}
break;
}

var G__48794 = args48792.length;
switch (G__48794) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48792.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_48799 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__48800 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48800,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48800,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__48803_48815 = cljs.core.seq(old_reactions);
var chunk__48804_48816 = null;
var count__48805_48817 = (0);
var i__48806_48818 = (0);
while(true){
if((i__48806_48818 < count__48805_48817)){
var ref_48819 = chunk__48804_48816.cljs$core$IIndexed$_nth$arity$2(null,i__48806_48818);
if(cljs.core.contains_QMARK_(new_reactions,ref_48819)){
} else {
cljs.core.remove_watch(ref_48819,key);
}

var G__48820 = seq__48803_48815;
var G__48821 = chunk__48804_48816;
var G__48822 = count__48805_48817;
var G__48823 = (i__48806_48818 + (1));
seq__48803_48815 = G__48820;
chunk__48804_48816 = G__48821;
count__48805_48817 = G__48822;
i__48806_48818 = G__48823;
continue;
} else {
var temp__4657__auto___48824 = cljs.core.seq(seq__48803_48815);
if(temp__4657__auto___48824){
var seq__48803_48825__$1 = temp__4657__auto___48824;
if(cljs.core.chunked_seq_QMARK_(seq__48803_48825__$1)){
var c__20784__auto___48826 = cljs.core.chunk_first(seq__48803_48825__$1);
var G__48827 = cljs.core.chunk_rest(seq__48803_48825__$1);
var G__48828 = c__20784__auto___48826;
var G__48829 = cljs.core.count(c__20784__auto___48826);
var G__48830 = (0);
seq__48803_48815 = G__48827;
chunk__48804_48816 = G__48828;
count__48805_48817 = G__48829;
i__48806_48818 = G__48830;
continue;
} else {
var ref_48831 = cljs.core.first(seq__48803_48825__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_48831)){
} else {
cljs.core.remove_watch(ref_48831,key);
}

var G__48832 = cljs.core.next(seq__48803_48825__$1);
var G__48833 = null;
var G__48834 = (0);
var G__48835 = (0);
seq__48803_48815 = G__48832;
chunk__48804_48816 = G__48833;
count__48805_48817 = G__48834;
i__48806_48818 = G__48835;
continue;
}
} else {
}
}
break;
}

var seq__48807_48836 = cljs.core.seq(new_reactions);
var chunk__48808_48837 = null;
var count__48809_48838 = (0);
var i__48810_48839 = (0);
while(true){
if((i__48810_48839 < count__48809_48838)){
var ref_48840 = chunk__48808_48837.cljs$core$IIndexed$_nth$arity$2(null,i__48810_48839);
if(cljs.core.contains_QMARK_(old_reactions,ref_48840)){
} else {
cljs.core.add_watch(ref_48840,key,((function (seq__48807_48836,chunk__48808_48837,count__48809_48838,i__48810_48839,ref_48840,comp,old_reactions,vec__48800,dom,next_state,new_reactions,key,_STAR_reactions_STAR_48799){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__48807_48836,chunk__48808_48837,count__48809_48838,i__48810_48839,ref_48840,comp,old_reactions,vec__48800,dom,next_state,new_reactions,key,_STAR_reactions_STAR_48799))
);
}

var G__48841 = seq__48807_48836;
var G__48842 = chunk__48808_48837;
var G__48843 = count__48809_48838;
var G__48844 = (i__48810_48839 + (1));
seq__48807_48836 = G__48841;
chunk__48808_48837 = G__48842;
count__48809_48838 = G__48843;
i__48810_48839 = G__48844;
continue;
} else {
var temp__4657__auto___48845 = cljs.core.seq(seq__48807_48836);
if(temp__4657__auto___48845){
var seq__48807_48846__$1 = temp__4657__auto___48845;
if(cljs.core.chunked_seq_QMARK_(seq__48807_48846__$1)){
var c__20784__auto___48847 = cljs.core.chunk_first(seq__48807_48846__$1);
var G__48848 = cljs.core.chunk_rest(seq__48807_48846__$1);
var G__48849 = c__20784__auto___48847;
var G__48850 = cljs.core.count(c__20784__auto___48847);
var G__48851 = (0);
seq__48807_48836 = G__48848;
chunk__48808_48837 = G__48849;
count__48809_48838 = G__48850;
i__48810_48839 = G__48851;
continue;
} else {
var ref_48852 = cljs.core.first(seq__48807_48846__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_48852)){
} else {
cljs.core.add_watch(ref_48852,key,((function (seq__48807_48836,chunk__48808_48837,count__48809_48838,i__48810_48839,ref_48852,seq__48807_48846__$1,temp__4657__auto___48845,comp,old_reactions,vec__48800,dom,next_state,new_reactions,key,_STAR_reactions_STAR_48799){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__48807_48836,chunk__48808_48837,count__48809_48838,i__48810_48839,ref_48852,seq__48807_48846__$1,temp__4657__auto___48845,comp,old_reactions,vec__48800,dom,next_state,new_reactions,key,_STAR_reactions_STAR_48799))
);
}

var G__48853 = cljs.core.next(seq__48807_48846__$1);
var G__48854 = null;
var G__48855 = (0);
var G__48856 = (0);
seq__48807_48836 = G__48853;
chunk__48808_48837 = G__48854;
count__48809_48838 = G__48855;
i__48810_48839 = G__48856;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_48799;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_48857 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__48811_48858 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__48812_48859 = null;
var count__48813_48860 = (0);
var i__48814_48861 = (0);
while(true){
if((i__48814_48861 < count__48813_48860)){
var ref_48862 = chunk__48812_48859.cljs$core$IIndexed$_nth$arity$2(null,i__48814_48861);
cljs.core.remove_watch(ref_48862,key_48857);

var G__48863 = seq__48811_48858;
var G__48864 = chunk__48812_48859;
var G__48865 = count__48813_48860;
var G__48866 = (i__48814_48861 + (1));
seq__48811_48858 = G__48863;
chunk__48812_48859 = G__48864;
count__48813_48860 = G__48865;
i__48814_48861 = G__48866;
continue;
} else {
var temp__4657__auto___48867 = cljs.core.seq(seq__48811_48858);
if(temp__4657__auto___48867){
var seq__48811_48868__$1 = temp__4657__auto___48867;
if(cljs.core.chunked_seq_QMARK_(seq__48811_48868__$1)){
var c__20784__auto___48869 = cljs.core.chunk_first(seq__48811_48868__$1);
var G__48870 = cljs.core.chunk_rest(seq__48811_48868__$1);
var G__48871 = c__20784__auto___48869;
var G__48872 = cljs.core.count(c__20784__auto___48869);
var G__48873 = (0);
seq__48811_48858 = G__48870;
chunk__48812_48859 = G__48871;
count__48813_48860 = G__48872;
i__48814_48861 = G__48873;
continue;
} else {
var ref_48874 = cljs.core.first(seq__48811_48868__$1);
cljs.core.remove_watch(ref_48874,key_48857);

var G__48875 = cljs.core.next(seq__48811_48868__$1);
var G__48876 = null;
var G__48877 = (0);
var G__48878 = (0);
seq__48811_48858 = G__48875;
chunk__48812_48859 = G__48876;
count__48813_48860 = G__48877;
i__48814_48861 = G__48878;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.array_seq([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
});
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__21055__auto__ = [];
var len__21048__auto___48885 = arguments.length;
var i__21049__auto___48886 = (0);
while(true){
if((i__21049__auto___48886 < len__21048__auto___48885)){
args__21055__auto__.push((arguments[i__21049__auto___48886]));

var G__48887 = (i__21049__auto___48886 + (1));
i__21049__auto___48886 = G__48887;
continue;
} else {
}
break;
}

var argseq__21056__auto__ = ((((2) < args__21055__auto__.length))?(new cljs.core.IndexedSeq(args__21055__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21056__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__48882){
var map__48883 = p__48882;
var map__48883__$1 = ((((!((map__48883 == null)))?((((map__48883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48883):map__48883);
var options = map__48883__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq48879){
var G__48880 = cljs.core.first(seq48879);
var seq48879__$1 = cljs.core.next(seq48879);
var G__48881 = cljs.core.first(seq48879__$1);
var seq48879__$2 = cljs.core.next(seq48879__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__48880,G__48881,seq48879__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__21055__auto__ = [];
var len__21048__auto___48891 = arguments.length;
var i__21049__auto___48892 = (0);
while(true){
if((i__21049__auto___48892 < len__21048__auto___48891)){
args__21055__auto__.push((arguments[i__21049__auto___48892]));

var G__48893 = (i__21049__auto___48892 + (1));
i__21049__auto___48892 = G__48893;
continue;
} else {
}
break;
}

var argseq__21056__auto__ = ((((2) < args__21055__auto__.length))?(new cljs.core.IndexedSeq(args__21055__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21056__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq48888){
var G__48889 = cljs.core.first(seq48888);
var seq48888__$1 = cljs.core.next(seq48888);
var G__48890 = cljs.core.first(seq48888__$1);
var seq48888__$2 = cljs.core.next(seq48888__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__48889,G__48890,seq48888__$2);
});

