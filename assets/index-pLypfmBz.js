var kg=Object.defineProperty;var Hg=(i,e,t)=>e in i?kg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Kt=(i,e,t)=>(Hg(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ku(i,e){const t=new Set(i.split(","));return e?n=>t.has(n.toLowerCase()):n=>t.has(n)}const ut={},xs=[],In=()=>{},Vg=()=>!1,_l=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Hu=i=>i.startsWith("onUpdate:"),zt=Object.assign,Vu=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Gg=Object.prototype.hasOwnProperty,et=(i,e)=>Gg.call(i,e),ke=Array.isArray,ys=i=>gl(i)==="[object Map]",Xp=i=>gl(i)==="[object Set]",Xe=i=>typeof i=="function",Ct=i=>typeof i=="string",Ys=i=>typeof i=="symbol",gt=i=>i!==null&&typeof i=="object",Yp=i=>(gt(i)||Xe(i))&&Xe(i.then)&&Xe(i.catch),qp=Object.prototype.toString,gl=i=>qp.call(i),Wg=i=>gl(i).slice(8,-1),jp=i=>gl(i)==="[object Object]",Gu=i=>Ct(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ha=ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vl=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Xg=/-(\w)/g,Ps=vl(i=>i.replace(Xg,(e,t)=>t?t.toUpperCase():"")),Yg=/\B([A-Z])/g,qs=vl(i=>i.replace(Yg,"-$1").toLowerCase()),Kp=vl(i=>i.charAt(0).toUpperCase()+i.slice(1)),Hl=vl(i=>i?`on${Kp(i)}`:""),er=(i,e)=>!Object.is(i,e),Vl=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Za=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},qg=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let $h;const $p=()=>$h||($h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wu(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Ct(n)?Zg(n):Wu(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(i)||gt(i))return i}const jg=/;(?![^(]*\))/g,Kg=/:([^]+)/,$g=/\/\*[^]*?\*\//g;function Zg(i){const e={};return i.replace($g,"").split(jg).forEach(t=>{if(t){const n=t.split(Kg);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function xl(i){let e="";if(Ct(i))e=i;else if(ke(i))for(let t=0;t<i.length;t++){const n=xl(i[t]);n&&(e+=n+" ")}else if(gt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Jg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qg=ku(Jg);function Zp(i){return!!i||i===""}const Qs=i=>Ct(i)?i:i==null?"":ke(i)||gt(i)&&(i.toString===qp||!Xe(i.toString))?JSON.stringify(i,Jp,2):String(i),Jp=(i,e)=>e&&e.__v_isRef?Jp(i,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[Gl(n,s)+" =>"]=r,t),{})}:Xp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Gl(t))}:Ys(e)?Gl(e):gt(e)&&!ke(e)&&!jp(e)?String(e):e,Gl=(i,e="")=>{var t;return Ys(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kn;class e0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kn,!e&&kn&&(this.index=(kn.scopes||(kn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kn;try{return kn=this,e()}finally{kn=t}}}on(){kn=this}off(){kn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function t0(i,e=kn){e&&e.active&&e.effects.push(i)}function n0(){return kn}let Tr;class Xu{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,t0(this,r)}get dirty(){if(this._dirtyLevel===1){Br();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(i0(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),zr()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=qi,t=Tr;try{return qi=!0,Tr=this,this._runnings++,Zh(this),this.fn()}finally{Jh(this),this._runnings--,Tr=t,qi=e}}stop(){var e;this.active&&(Zh(this),Jh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function i0(i){return i.value}function Zh(i){i._trackId++,i._depsLength=0}function Jh(i){if(i.deps&&i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)Qp(i.deps[e],i);i.deps.length=i._depsLength}}function Qp(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let qi=!0,jc=0;const em=[];function Br(){em.push(qi),qi=!1}function zr(){const i=em.pop();qi=i===void 0?!0:i}function Yu(){jc++}function qu(){for(jc--;!jc&&Kc.length;)Kc.shift()()}function tm(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&Qp(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const Kc=[];function nm(i,e,t){Yu();for(const n of i.keys())if(n._dirtyLevel<e&&i.get(n)===n._trackId){const r=n._dirtyLevel;n._dirtyLevel=e,r===0&&(n._shouldSchedule=!0,n.trigger())}im(i),qu()}function im(i){for(const e of i.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&i.get(e)===e._trackId&&(e._shouldSchedule=!1,Kc.push(e.scheduler))}const rm=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},$c=new WeakMap,Er=Symbol(""),Zc=Symbol("");function fn(i,e,t){if(qi&&Tr){let n=$c.get(i);n||$c.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=rm(()=>n.delete(t))),tm(Tr,r)}}function Mi(i,e,t,n,r,s){const o=$c.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ke(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!Ys(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ke(i)?Gu(t)&&a.push(o.get("length")):(a.push(o.get(Er)),ys(i)&&a.push(o.get(Zc)));break;case"delete":ke(i)||(a.push(o.get(Er)),ys(i)&&a.push(o.get(Zc)));break;case"set":ys(i)&&a.push(o.get(Er));break}Yu();for(const l of a)l&&nm(l,2);qu()}const r0=ku("__proto__,__v_isRef,__isVue"),sm=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Ys)),Qh=s0();function s0(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=nt(this);for(let s=0,o=this.length;s<o;s++)fn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(nt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Br(),Yu();const n=nt(this)[e].apply(this,t);return qu(),zr(),n}}),i}function o0(i){const e=nt(this);return fn(e,"has",i),e.hasOwnProperty(i)}class om{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?x0:um:s?cm:lm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=ke(e);if(!r){if(o&&et(Qh,t))return Reflect.get(Qh,t,n);if(t==="hasOwnProperty")return o0}const a=Reflect.get(e,t,n);return(Ys(t)?sm.has(t):r0(t))||(r||fn(e,"get",t),s)?a:dn(a)?o&&Gu(t)?a:a.value:gt(a)?r?hm(a):Ml(a):a}}class am extends om{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._shallow){const l=Ls(s);if(!Ja(n)&&!Ls(n)&&(s=nt(s),n=nt(n)),!ke(e)&&dn(s)&&!dn(n))return l?!1:(s.value=n,!0)}const o=ke(e)&&Gu(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,n,r);return e===nt(r)&&(o?er(n,s)&&Mi(e,"set",t,n):Mi(e,"add",t,n)),a}deleteProperty(e,t){const n=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Mi(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!Ys(t)||!sm.has(t))&&fn(e,"has",t),n}ownKeys(e){return fn(e,"iterate",ke(e)?"length":Er),Reflect.ownKeys(e)}}class a0 extends om{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const l0=new am,c0=new a0,u0=new am(!0),ju=i=>i,yl=i=>Reflect.getPrototypeOf(i);function Jo(i,e,t=!1,n=!1){i=i.__v_raw;const r=nt(i),s=nt(e);t||(er(e,s)&&fn(r,"get",e),fn(r,"get",s));const{has:o}=yl(r),a=n?ju:t?Zu:Co;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Qo(i,e=!1){const t=this.__v_raw,n=nt(t),r=nt(i);return e||(er(i,r)&&fn(n,"has",i),fn(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function ea(i,e=!1){return i=i.__v_raw,!e&&fn(nt(i),"iterate",Er),Reflect.get(i,"size",i)}function ef(i){i=nt(i);const e=nt(this);return yl(e).has.call(e,i)||(e.add(i),Mi(e,"add",i,i)),this}function tf(i,e){e=nt(e);const t=nt(this),{has:n,get:r}=yl(t);let s=n.call(t,i);s||(i=nt(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?er(e,o)&&Mi(t,"set",i,e):Mi(t,"add",i,e),this}function nf(i){const e=nt(this),{has:t,get:n}=yl(e);let r=t.call(e,i);r||(i=nt(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Mi(e,"delete",i,void 0),s}function rf(){const i=nt(this),e=i.size!==0,t=i.clear();return e&&Mi(i,"clear",void 0,void 0),t}function ta(i,e){return function(n,r){const s=this,o=s.__v_raw,a=nt(o),l=e?ju:i?Zu:Co;return!i&&fn(a,"iterate",Er),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function na(i,e,t){return function(...n){const r=this.__v_raw,s=nt(r),o=ys(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?ju:e?Zu:Co;return!e&&fn(s,"iterate",l?Zc:Er),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Pi(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function h0(){const i={get(s){return Jo(this,s)},get size(){return ea(this)},has:Qo,add:ef,set:tf,delete:nf,clear:rf,forEach:ta(!1,!1)},e={get(s){return Jo(this,s,!1,!0)},get size(){return ea(this)},has:Qo,add:ef,set:tf,delete:nf,clear:rf,forEach:ta(!1,!0)},t={get(s){return Jo(this,s,!0)},get size(){return ea(this,!0)},has(s){return Qo.call(this,s,!0)},add:Pi("add"),set:Pi("set"),delete:Pi("delete"),clear:Pi("clear"),forEach:ta(!0,!1)},n={get(s){return Jo(this,s,!0,!0)},get size(){return ea(this,!0)},has(s){return Qo.call(this,s,!0)},add:Pi("add"),set:Pi("set"),delete:Pi("delete"),clear:Pi("clear"),forEach:ta(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=na(s,!1,!1),t[s]=na(s,!0,!1),e[s]=na(s,!1,!0),n[s]=na(s,!0,!0)}),[i,t,e,n]}const[f0,d0,p0,m0]=h0();function Ku(i,e){const t=e?i?m0:p0:i?d0:f0;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(et(t,r)&&r in n?t:n,r,s)}const _0={get:Ku(!1,!1)},g0={get:Ku(!1,!0)},v0={get:Ku(!0,!1)},lm=new WeakMap,cm=new WeakMap,um=new WeakMap,x0=new WeakMap;function y0(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function M0(i){return i.__v_skip||!Object.isExtensible(i)?0:y0(Wg(i))}function Ml(i){return Ls(i)?i:$u(i,!1,l0,_0,lm)}function S0(i){return $u(i,!1,u0,g0,cm)}function hm(i){return $u(i,!0,c0,v0,um)}function $u(i,e,t,n,r){if(!gt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=M0(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Ms(i){return Ls(i)?Ms(i.__v_raw):!!(i&&i.__v_isReactive)}function Ls(i){return!!(i&&i.__v_isReadonly)}function Ja(i){return!!(i&&i.__v_isShallow)}function fm(i){return Ms(i)||Ls(i)}function nt(i){const e=i&&i.__v_raw;return e?nt(e):i}function dm(i){return Za(i,"__v_skip",!0),i}const Co=i=>gt(i)?Ml(i):i,Zu=i=>gt(i)?hm(i):i;class pm{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Xu(()=>e(this._value),()=>Va(this,1),()=>this.dep&&im(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=nt(this);return(!e._cacheable||e.effect.dirty)&&er(e._value,e._value=e.effect.run())&&Va(e,2),mm(e),e.effect._dirtyLevel>=1&&Va(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function T0(i,e,t=!1){let n,r;const s=Xe(i);return s?(n=i,r=In):(n=i.get,r=i.set),new pm(n,r,s||!r,t)}function mm(i){qi&&Tr&&(i=nt(i),tm(Tr,i.dep||(i.dep=rm(()=>i.dep=void 0,i instanceof pm?i:void 0))))}function Va(i,e=2,t){i=nt(i);const n=i.dep;n&&nm(n,e)}function dn(i){return!!(i&&i.__v_isRef===!0)}function Jc(i){return E0(i,!1)}function E0(i,e){return dn(i)?i:new b0(i,e)}class b0{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:nt(e),this._value=t?e:Co(e)}get value(){return mm(this),this._value}set value(e){const t=this.__v_isShallow||Ja(e)||Ls(e);e=t?e:nt(e),er(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Co(e),Va(this,2))}}function _m(i){return dn(i)?i.value:i}const A0={get:(i,e,t)=>_m(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return dn(r)&&!dn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function gm(i){return Ms(i)?i:new Proxy(i,A0)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Sl(s,e,t)}return r}function Gn(i,e,t,n){if(Xe(i)){const s=ji(i,e,t,n);return s&&Yp(s)&&s.catch(o=>{Sl(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Gn(i[s],e,t,n));return r}function Sl(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ji(l,null,10,[i,o,a]);return}}w0(i,t,r,n)}function w0(i,e,t,n=!0){console.error(i)}let Po=!1,Qc=!1;const Gt=[];let Zn=0;const Ss=[];let Fi=null,gr=0;const vm=Promise.resolve();let Ju=null;function R0(i){const e=Ju||vm;return i?e.then(this?i.bind(this):i):e}function C0(i){let e=Zn+1,t=Gt.length;for(;e<t;){const n=e+t>>>1,r=Gt[n],s=Lo(r);s<i||s===i&&r.pre?e=n+1:t=n}return e}function Qu(i){(!Gt.length||!Gt.includes(i,Po&&i.allowRecurse?Zn+1:Zn))&&(i.id==null?Gt.push(i):Gt.splice(C0(i.id),0,i),xm())}function xm(){!Po&&!Qc&&(Qc=!0,Ju=vm.then(Mm))}function P0(i){const e=Gt.indexOf(i);e>Zn&&Gt.splice(e,1)}function L0(i){ke(i)?Ss.push(...i):(!Fi||!Fi.includes(i,i.allowRecurse?gr+1:gr))&&Ss.push(i),xm()}function sf(i,e,t=Po?Zn+1:0){for(;t<Gt.length;t++){const n=Gt[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;Gt.splice(t,1),t--,n()}}}function ym(i){if(Ss.length){const e=[...new Set(Ss)].sort((t,n)=>Lo(t)-Lo(n));if(Ss.length=0,Fi){Fi.push(...e);return}for(Fi=e,gr=0;gr<Fi.length;gr++)Fi[gr]();Fi=null,gr=0}}const Lo=i=>i.id==null?1/0:i.id,D0=(i,e)=>{const t=Lo(i)-Lo(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Mm(i){Qc=!1,Po=!0,Gt.sort(D0);try{for(Zn=0;Zn<Gt.length;Zn++){const e=Gt[Zn];e&&e.active!==!1&&ji(e,null,14)}}finally{Zn=0,Gt.length=0,ym(),Po=!1,Ju=null,(Gt.length||Ss.length)&&Mm()}}function I0(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ut;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||ut;f&&(r=t.map(d=>Ct(d)?d.trim():d)),h&&(r=t.map(qg))}let a,l=n[a=Hl(e)]||n[a=Hl(Ps(e))];!l&&s&&(l=n[a=Hl(qs(e))]),l&&Gn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Gn(c,i,6,r)}}function Sm(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Xe(i)){const l=c=>{const u=Sm(c,e,!0);u&&(a=!0,zt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(gt(i)&&n.set(i,null),null):(ke(s)?s.forEach(l=>o[l]=null):zt(o,s),gt(i)&&n.set(i,o),o)}function Tl(i,e){return!i||!_l(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(i,e[0].toLowerCase()+e.slice(1))||et(i,qs(e))||et(i,e))}let ei=null,El=null;function Qa(i){const e=ei;return ei=i,El=i&&i.type.__scopeId||null,e}function N0(i){El=i}function U0(){El=null}function O0(i,e=ei,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&_f(-1);const s=Qa(e);let o;try{o=i(...r)}finally{Qa(s),n._d&&_f(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Wl(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=i;let p,m;const S=Qa(i);try{if(t.shapeFlag&4){const M=r||n,w=M;p=Kn(u.call(w,M,h,s,d,f,g)),m=l}else{const M=e;p=Kn(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),m=e.props?l:F0(l)}}catch(M){xo.length=0,Sl(M,i,1),p=Si(Do)}let v=p;if(m&&_!==!1){const M=Object.keys(m),{shapeFlag:w}=v;M.length&&w&7&&(o&&M.some(Hu)&&(m=B0(m,o)),v=Ds(v,m))}return t.dirs&&(v=Ds(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),p=v,Qa(S),p}const F0=i=>{let e;for(const t in i)(t==="class"||t==="style"||_l(t))&&((e||(e={}))[t]=i[t]);return e},B0=(i,e)=>{const t={};for(const n in i)(!Hu(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function z0(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?of(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Tl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?of(n,o,c):!0:!!o;return!1}function of(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Tl(t,s))return!0}return!1}function k0({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const H0=Symbol.for("v-ndc"),V0=i=>i.__isSuspense;function G0(i,e){e&&e.pendingBranch?ke(i)?e.effects.push(...i):e.effects.push(i):L0(i)}const W0=Symbol.for("v-scx"),X0=()=>Wa(W0),ia={};function go(i,e,t){return Tm(i,e,t)}function Tm(i,e,{immediate:t,deep:n,flush:r,once:s,onTrack:o,onTrigger:a}=ut){if(e&&s){const E=e;e=(...b)=>{E(...b),w()}}const l=en,c=E=>n===!0?E:ps(E,n===!1?1:void 0);let u,h=!1,f=!1;if(dn(i)?(u=()=>i.value,h=Ja(i)):Ms(i)?(u=()=>c(i),h=!0):ke(i)?(f=!0,h=i.some(E=>Ms(E)||Ja(E)),u=()=>i.map(E=>{if(dn(E))return E.value;if(Ms(E))return c(E);if(Xe(E))return ji(E,l,2)})):Xe(i)?e?u=()=>ji(i,l,2):u=()=>(d&&d(),Gn(i,l,3,[g])):u=In,e&&n){const E=u;u=()=>ps(E())}let d,g=E=>{d=v.onStop=()=>{ji(E,l,4),d=v.onStop=void 0}},_;if(Rl)if(g=In,e?t&&Gn(e,l,3,[u(),f?[]:void 0,g]):u(),r==="sync"){const E=X0();_=E.__watcherHandles||(E.__watcherHandles=[])}else return In;let p=f?new Array(i.length).fill(ia):ia;const m=()=>{if(!(!v.active||!v.dirty))if(e){const E=v.run();(n||h||(f?E.some((b,C)=>er(b,p[C])):er(E,p)))&&(d&&d(),Gn(e,l,3,[E,p===ia?void 0:f&&p[0]===ia?[]:p,g]),p=E)}else v.run()};m.allowRecurse=!!e;let S;r==="sync"?S=m:r==="post"?S=()=>sn(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),S=()=>Qu(m));const v=new Xu(u,In,S),M=n0(),w=()=>{v.stop(),M&&Vu(M.effects,v)};return e?t?m():p=v.run():r==="post"?sn(v.run.bind(v),l&&l.suspense):v.run(),_&&_.push(w),w}function Y0(i,e,t){const n=this.proxy,r=Ct(i)?i.includes(".")?Em(n,i):()=>n[i]:i.bind(n,n);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=Yo(this),a=Tm(r,s.bind(n),t);return o(),a}function Em(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function ps(i,e,t=0,n){if(!gt(i)||i.__v_skip)return i;if(e&&e>0){if(t>=e)return i;t++}if(n=n||new Set,n.has(i))return i;if(n.add(i),dn(i))ps(i.value,e,t,n);else if(ke(i))for(let r=0;r<i.length;r++)ps(i[r],e,t,n);else if(Xp(i)||ys(i))i.forEach(r=>{ps(r,e,t,n)});else if(jp(i))for(const r in i)ps(i[r],e,t,n);return i}function or(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Br(),Gn(l,t,8,[i.el,a,i,e]),zr())}}/*! #__NO_SIDE_EFFECTS__ */function eh(i,e){return Xe(i)?zt({name:i.name},e,{setup:i}):i}const Ga=i=>!!i.type.__asyncLoader,bm=i=>i.type.__isKeepAlive;function q0(i,e){Am(i,"a",e)}function j0(i,e){Am(i,"da",e)}function Am(i,e,t=en){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(bl(e,n,t),t){let r=t.parent;for(;r&&r.parent;)bm(r.parent.vnode)&&K0(n,e,t,r),r=r.parent}}function K0(i,e,t,n){const r=bl(e,i,n,!0);wm(()=>{Vu(n[e],r)},t)}function bl(i,e,t=en,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Br();const a=Yo(t),l=Gn(e,t,i,o);return a(),zr(),l});return n?r.unshift(s):r.push(s),s}}const Ai=i=>(e,t=en)=>(!Rl||i==="sp")&&bl(i,(...n)=>e(...n),t),$0=Ai("bm"),th=Ai("m"),Z0=Ai("bu"),J0=Ai("u"),Q0=Ai("bum"),wm=Ai("um"),ev=Ai("sp"),tv=Ai("rtg"),nv=Ai("rtc");function iv(i,e=en){bl("ec",i,e)}function af(i,e,t,n){let r;const s=t&&t[n];if(ke(i)||Ct(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(gt(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const eu=i=>i?zm(i)?sh(i)||i.proxy:eu(i.parent):null,vo=zt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>eu(i.parent),$root:i=>eu(i.root),$emit:i=>i.emit,$options:i=>nh(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Qu(i.update)}),$nextTick:i=>i.n||(i.n=R0.bind(i.proxy)),$watch:i=>Y0.bind(i)}),Xl=(i,e)=>i!==ut&&!i.__isScriptSetup&&et(i,e),rv={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xl(n,e))return o[e]=1,n[e];if(r!==ut&&et(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&et(c,e))return o[e]=3,s[e];if(t!==ut&&et(t,e))return o[e]=4,t[e];tu&&(o[e]=0)}}const u=vo[e];let h,f;if(u)return e==="$attrs"&&fn(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ut&&et(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Xl(r,e)?(r[e]=t,!0):n!==ut&&et(n,e)?(n[e]=t,!0):et(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==ut&&et(i,o)||Xl(e,o)||(a=s[0])&&et(a,o)||et(n,o)||et(vo,o)||et(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:et(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function lf(i){return ke(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let tu=!0;function sv(i){const e=nh(i),t=i.proxy,n=i.ctx;tu=!1,e.beforeCreate&&cf(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:v,unmounted:M,render:w,renderTracked:E,renderTriggered:b,errorCaptured:C,serverPrefetch:x,expose:A,inheritAttrs:F,components:k,directives:$,filters:U}=e;if(c&&ov(c,n,null),o)for(const Y in o){const q=o[Y];Xe(q)&&(n[Y]=q.bind(t))}if(r){const Y=r.call(t,t);gt(Y)&&(i.data=Ml(Y))}if(tu=!0,s)for(const Y in s){const q=s[Y],ie=Xe(q)?q.bind(t,t):Xe(q.get)?q.get.bind(t,t):In,oe=!Xe(q)&&Xe(q.set)?q.set.bind(t):In,fe=Bv({get:ie,set:oe});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ue=>fe.value=ue})}if(a)for(const Y in a)Rm(a[Y],n,t,Y);if(l){const Y=Xe(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(q=>{fv(q,Y[q])})}u&&cf(u,i,"c");function H(Y,q){ke(q)?q.forEach(ie=>Y(ie.bind(t))):q&&Y(q.bind(t))}if(H($0,h),H(th,f),H(Z0,d),H(J0,g),H(q0,_),H(j0,p),H(iv,C),H(nv,E),H(tv,b),H(Q0,S),H(wm,M),H(ev,x),ke(A))if(A.length){const Y=i.exposed||(i.exposed={});A.forEach(q=>{Object.defineProperty(Y,q,{get:()=>t[q],set:ie=>t[q]=ie})})}else i.exposed||(i.exposed={});w&&i.render===In&&(i.render=w),F!=null&&(i.inheritAttrs=F),k&&(i.components=k),$&&(i.directives=$)}function ov(i,e,t=In){ke(i)&&(i=nu(i));for(const n in i){const r=i[n];let s;gt(r)?"default"in r?s=Wa(r.from||n,r.default,!0):s=Wa(r.from||n):s=Wa(r),dn(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function cf(i,e,t){Gn(ke(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Rm(i,e,t,n){const r=n.includes(".")?Em(t,n):()=>t[n];if(Ct(i)){const s=e[i];Xe(s)&&go(r,s)}else if(Xe(i))go(r,i.bind(t));else if(gt(i))if(ke(i))i.forEach(s=>Rm(s,e,t,n));else{const s=Xe(i.handler)?i.handler.bind(t):e[i.handler];Xe(s)&&go(r,s,i)}}function nh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>el(l,c,o,!0)),el(l,e,o)),gt(e)&&s.set(e,l),l}function el(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&el(i,s,t,!0),r&&r.forEach(o=>el(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=av[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const av={data:uf,props:hf,emits:hf,methods:po,computed:po,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:po,directives:po,watch:cv,provide:uf,inject:lv};function uf(i,e){return e?i?function(){return zt(Xe(i)?i.call(this,this):i,Xe(e)?e.call(this,this):e)}:e:i}function lv(i,e){return po(nu(i),nu(e))}function nu(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Zt(i,e){return i?[...new Set([].concat(i,e))]:e}function po(i,e){return i?zt(Object.create(null),i,e):e}function hf(i,e){return i?ke(i)&&ke(e)?[...new Set([...i,...e])]:zt(Object.create(null),lf(i),lf(e??{})):e}function cv(i,e){if(!i)return e;if(!e)return i;const t=zt(Object.create(null),i);for(const n in e)t[n]=Zt(i[n],e[n]);return t}function Cm(){return{app:null,config:{isNativeTag:Vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uv=0;function hv(i,e){return function(n,r=null){Xe(n)||(n=zt({},n)),r!=null&&!gt(r)&&(r=null);const s=Cm(),o=new WeakSet;let a=!1;const l=s.app={_uid:uv++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:zv,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(l,...u)):Xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Si(n,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,sh(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){tl=l;try{return c()}finally{tl=null}}};return l}}let tl=null;function fv(i,e){if(en){let t=en.provides;const n=en.parent&&en.parent.provides;n===t&&(t=en.provides=Object.create(n)),t[i]=e}}function Wa(i,e,t=!1){const n=en||ei;if(n||tl){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:tl._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Xe(e)?e.call(n&&n.proxy):e}}function dv(i,e,t,n=!1){const r={},s={};Za(s,wl,1),i.propsDefaults=Object.create(null),Pm(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:S0(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function pv(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=nt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Tl(i.emitsOptions,f))continue;const d=e[f];if(l)if(et(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Ps(f);r[g]=iu(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Pm(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!et(e,h)&&((u=qs(h))===h||!et(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=iu(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!et(e,h))&&(delete s[h],c=!0)}c&&Mi(i,"set","$attrs")}function Pm(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ha(l))continue;const c=e[l];let u;r&&et(r,u=Ps(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Tl(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=nt(t),c=a||ut;for(let u=0;u<s.length;u++){const h=s[u];t[h]=iu(r,l,h,c[h],i,!et(c,h))}}return o}function iu(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=et(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Yo(r);n=c[t]=l.call(null,e),u()}}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===qs(t))&&(n=!0))}return n}function Lm(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Xe(i)){const u=h=>{l=!0;const[f,d]=Lm(h,e,!0);zt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return gt(i)&&n.set(i,xs),xs;if(ke(s))for(let u=0;u<s.length;u++){const h=Ps(s[u]);ff(h)&&(o[h]=ut)}else if(s)for(const u in s){const h=Ps(u);if(ff(h)){const f=s[u],d=o[h]=ke(f)||Xe(f)?{type:f}:zt({},f);if(d){const g=mf(Boolean,d.type),_=mf(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||et(d,"default"))&&a.push(h)}}}const c=[o,a];return gt(i)&&n.set(i,c),c}function ff(i){return i[0]!=="$"}function df(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function pf(i,e){return df(i)===df(e)}function mf(i,e){return ke(e)?e.findIndex(t=>pf(t,i)):Xe(e)&&pf(e,i)?0:-1}const Dm=i=>i[0]==="_"||i==="$stable",ih=i=>ke(i)?i.map(Kn):[Kn(i)],mv=(i,e,t)=>{if(e._n)return e;const n=O0((...r)=>ih(e(...r)),t);return n._c=!1,n},Im=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Dm(r))continue;const s=i[r];if(Xe(s))e[r]=mv(r,s,n);else if(s!=null){const o=ih(s);e[r]=()=>o}}},Nm=(i,e)=>{const t=ih(e);i.slots.default=()=>t},_v=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=nt(e),Za(e,"_",t)):Im(e,i.slots={})}else i.slots={},e&&Nm(i,e);Za(i.slots,wl,1)},gv=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=ut;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(zt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Im(e,r)),o=e}else e&&(Nm(i,e),o={default:1});if(s)for(const a in r)!Dm(a)&&o[a]==null&&delete r[a]};function ru(i,e,t,n,r=!1){if(ke(i)){i.forEach((f,d)=>ru(f,e&&(ke(e)?e[d]:e),t,n,r));return}if(Ga(n)&&!r)return;const s=n.shapeFlag&4?sh(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,et(h,c)&&(h[c]=null)):dn(c)&&(c.value=null)),Xe(l))ji(l,a,12,[o,u]);else{const f=Ct(l),d=dn(l),g=i.f;if(f||d){const _=()=>{if(g){const p=f?et(h,l)?h[l]:u[l]:l.value;r?ke(p)&&Vu(p,s):ke(p)?p.includes(s)||p.push(s):f?(u[l]=[s],et(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,et(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};r||g?_():(_.id=-1,sn(_,t))}}}const sn=G0;function vv(i){return xv(i)}function xv(i,e){const t=$p();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=In,insertStaticContent:g}=i,_=(L,D,V,W=null,te=null,ne=null,T=void 0,y=null,N=!!D.dynamicChildren)=>{if(L===D)return;L&&!eo(L,D)&&(W=be(L),ue(L,te,ne,!0),L=null),D.patchFlag===-2&&(N=!1,D.dynamicChildren=null);const{type:B,ref:G,shapeFlag:K}=D;switch(B){case Al:p(L,D,V,W);break;case Do:m(L,D,V,W);break;case ql:L==null&&S(D,V,W,T);break;case Rn:k(L,D,V,W,te,ne,T,y,N);break;default:K&1?w(L,D,V,W,te,ne,T,y,N):K&6?$(L,D,V,W,te,ne,T,y,N):(K&64||K&128)&&B.process(L,D,V,W,te,ne,T,y,N,Re)}G!=null&&te&&ru(G,L&&L.ref,ne,D||L,!D)},p=(L,D,V,W)=>{if(L==null)n(D.el=a(D.children),V,W);else{const te=D.el=L.el;D.children!==L.children&&c(te,D.children)}},m=(L,D,V,W)=>{L==null?n(D.el=l(D.children||""),V,W):D.el=L.el},S=(L,D,V,W)=>{[L.el,L.anchor]=g(L.children,D,V,W,L.el,L.anchor)},v=({el:L,anchor:D},V,W)=>{let te;for(;L&&L!==D;)te=f(L),n(L,V,W),L=te;n(D,V,W)},M=({el:L,anchor:D})=>{let V;for(;L&&L!==D;)V=f(L),r(L),L=V;r(D)},w=(L,D,V,W,te,ne,T,y,N)=>{D.type==="svg"?T="svg":D.type==="math"&&(T="mathml"),L==null?E(D,V,W,te,ne,T,y,N):x(L,D,te,ne,T,y,N)},E=(L,D,V,W,te,ne,T,y)=>{let N,B;const{props:G,shapeFlag:K,transition:ae,dirs:re}=L;if(N=L.el=o(L.type,ne,G&&G.is,G),K&8?u(N,L.children):K&16&&C(L.children,N,null,W,te,Yl(L,ne),T,y),re&&or(L,null,W,"created"),b(N,L,L.scopeId,T,W),G){for(const _e in G)_e!=="value"&&!Ha(_e)&&s(N,_e,null,G[_e],ne,L.children,W,te,Te);"value"in G&&s(N,"value",null,G.value,ne),(B=G.onVnodeBeforeMount)&&qn(B,W,L)}re&&or(L,null,W,"beforeMount");const ce=yv(te,ae);ce&&ae.beforeEnter(N),n(N,D,V),((B=G&&G.onVnodeMounted)||ce||re)&&sn(()=>{B&&qn(B,W,L),ce&&ae.enter(N),re&&or(L,null,W,"mounted")},te)},b=(L,D,V,W,te)=>{if(V&&d(L,V),W)for(let ne=0;ne<W.length;ne++)d(L,W[ne]);if(te){let ne=te.subTree;if(D===ne){const T=te.vnode;b(L,T,T.scopeId,T.slotScopeIds,te.parent)}}},C=(L,D,V,W,te,ne,T,y,N=0)=>{for(let B=N;B<L.length;B++){const G=L[B]=y?Bi(L[B]):Kn(L[B]);_(null,G,D,V,W,te,ne,T,y)}},x=(L,D,V,W,te,ne,T)=>{const y=D.el=L.el;let{patchFlag:N,dynamicChildren:B,dirs:G}=D;N|=L.patchFlag&16;const K=L.props||ut,ae=D.props||ut;let re;if(V&&ar(V,!1),(re=ae.onVnodeBeforeUpdate)&&qn(re,V,D,L),G&&or(D,L,V,"beforeUpdate"),V&&ar(V,!0),B?A(L.dynamicChildren,B,y,V,W,Yl(D,te),ne):T||q(L,D,y,null,V,W,Yl(D,te),ne,!1),N>0){if(N&16)F(y,D,K,ae,V,W,te);else if(N&2&&K.class!==ae.class&&s(y,"class",null,ae.class,te),N&4&&s(y,"style",K.style,ae.style,te),N&8){const ce=D.dynamicProps;for(let _e=0;_e<ce.length;_e++){const Se=ce[_e],se=K[Se],ze=ae[Se];(ze!==se||Se==="value")&&s(y,Se,se,ze,te,L.children,V,W,Te)}}N&1&&L.children!==D.children&&u(y,D.children)}else!T&&B==null&&F(y,D,K,ae,V,W,te);((re=ae.onVnodeUpdated)||G)&&sn(()=>{re&&qn(re,V,D,L),G&&or(D,L,V,"updated")},W)},A=(L,D,V,W,te,ne,T)=>{for(let y=0;y<D.length;y++){const N=L[y],B=D[y],G=N.el&&(N.type===Rn||!eo(N,B)||N.shapeFlag&70)?h(N.el):V;_(N,B,G,null,W,te,ne,T,!0)}},F=(L,D,V,W,te,ne,T)=>{if(V!==W){if(V!==ut)for(const y in V)!Ha(y)&&!(y in W)&&s(L,y,V[y],null,T,D.children,te,ne,Te);for(const y in W){if(Ha(y))continue;const N=W[y],B=V[y];N!==B&&y!=="value"&&s(L,y,B,N,T,D.children,te,ne,Te)}"value"in W&&s(L,"value",V.value,W.value,T)}},k=(L,D,V,W,te,ne,T,y,N)=>{const B=D.el=L?L.el:a(""),G=D.anchor=L?L.anchor:a("");let{patchFlag:K,dynamicChildren:ae,slotScopeIds:re}=D;re&&(y=y?y.concat(re):re),L==null?(n(B,V,W),n(G,V,W),C(D.children||[],V,G,te,ne,T,y,N)):K>0&&K&64&&ae&&L.dynamicChildren?(A(L.dynamicChildren,ae,V,te,ne,T,y),(D.key!=null||te&&D===te.subTree)&&Um(L,D,!0)):q(L,D,V,G,te,ne,T,y,N)},$=(L,D,V,W,te,ne,T,y,N)=>{D.slotScopeIds=y,L==null?D.shapeFlag&512?te.ctx.activate(D,V,W,T,N):U(D,V,W,te,ne,T,N):z(L,D,N)},U=(L,D,V,W,te,ne,T)=>{const y=L.component=Dv(L,W,te);if(bm(L)&&(y.ctx.renderer=Re),Iv(y),y.asyncDep){if(te&&te.registerDep(y,H),!L.el){const N=y.subTree=Si(Do);m(null,N,D,V)}}else H(y,L,D,V,te,ne,T)},z=(L,D,V)=>{const W=D.component=L.component;if(z0(L,D,V))if(W.asyncDep&&!W.asyncResolved){Y(W,D,V);return}else W.next=D,P0(W.update),W.effect.dirty=!0,W.update();else D.el=L.el,W.vnode=D},H=(L,D,V,W,te,ne,T)=>{const y=()=>{if(L.isMounted){let{next:G,bu:K,u:ae,parent:re,vnode:ce}=L;{const Oe=Om(L);if(Oe){G&&(G.el=ce.el,Y(L,G,T)),Oe.asyncDep.then(()=>{L.isUnmounted||y()});return}}let _e=G,Se;ar(L,!1),G?(G.el=ce.el,Y(L,G,T)):G=ce,K&&Vl(K),(Se=G.props&&G.props.onVnodeBeforeUpdate)&&qn(Se,re,G,ce),ar(L,!0);const se=Wl(L),ze=L.subTree;L.subTree=se,_(ze,se,h(ze.el),be(ze),L,te,ne),G.el=se.el,_e===null&&k0(L,se.el),ae&&sn(ae,te),(Se=G.props&&G.props.onVnodeUpdated)&&sn(()=>qn(Se,re,G,ce),te)}else{let G;const{el:K,props:ae}=D,{bm:re,m:ce,parent:_e}=L,Se=Ga(D);if(ar(L,!1),re&&Vl(re),!Se&&(G=ae&&ae.onVnodeBeforeMount)&&qn(G,_e,D),ar(L,!0),K&&j){const se=()=>{L.subTree=Wl(L),j(K,L.subTree,L,te,null)};Se?D.type.__asyncLoader().then(()=>!L.isUnmounted&&se()):se()}else{const se=L.subTree=Wl(L);_(null,se,V,W,L,te,ne),D.el=se.el}if(ce&&sn(ce,te),!Se&&(G=ae&&ae.onVnodeMounted)){const se=D;sn(()=>qn(G,_e,se),te)}(D.shapeFlag&256||_e&&Ga(_e.vnode)&&_e.vnode.shapeFlag&256)&&L.a&&sn(L.a,te),L.isMounted=!0,D=V=W=null}},N=L.effect=new Xu(y,In,()=>Qu(B),L.scope),B=L.update=()=>{N.dirty&&N.run()};B.id=L.uid,ar(L,!0),B()},Y=(L,D,V)=>{D.component=L;const W=L.vnode.props;L.vnode=D,L.next=null,pv(L,D.props,W,V),gv(L,D.children,V),Br(),sf(L),zr()},q=(L,D,V,W,te,ne,T,y,N=!1)=>{const B=L&&L.children,G=L?L.shapeFlag:0,K=D.children,{patchFlag:ae,shapeFlag:re}=D;if(ae>0){if(ae&128){oe(B,K,V,W,te,ne,T,y,N);return}else if(ae&256){ie(B,K,V,W,te,ne,T,y,N);return}}re&8?(G&16&&Te(B,te,ne),K!==B&&u(V,K)):G&16?re&16?oe(B,K,V,W,te,ne,T,y,N):Te(B,te,ne,!0):(G&8&&u(V,""),re&16&&C(K,V,W,te,ne,T,y,N))},ie=(L,D,V,W,te,ne,T,y,N)=>{L=L||xs,D=D||xs;const B=L.length,G=D.length,K=Math.min(B,G);let ae;for(ae=0;ae<K;ae++){const re=D[ae]=N?Bi(D[ae]):Kn(D[ae]);_(L[ae],re,V,null,te,ne,T,y,N)}B>G?Te(L,te,ne,!0,!1,K):C(D,V,W,te,ne,T,y,N,K)},oe=(L,D,V,W,te,ne,T,y,N)=>{let B=0;const G=D.length;let K=L.length-1,ae=G-1;for(;B<=K&&B<=ae;){const re=L[B],ce=D[B]=N?Bi(D[B]):Kn(D[B]);if(eo(re,ce))_(re,ce,V,null,te,ne,T,y,N);else break;B++}for(;B<=K&&B<=ae;){const re=L[K],ce=D[ae]=N?Bi(D[ae]):Kn(D[ae]);if(eo(re,ce))_(re,ce,V,null,te,ne,T,y,N);else break;K--,ae--}if(B>K){if(B<=ae){const re=ae+1,ce=re<G?D[re].el:W;for(;B<=ae;)_(null,D[B]=N?Bi(D[B]):Kn(D[B]),V,ce,te,ne,T,y,N),B++}}else if(B>ae)for(;B<=K;)ue(L[B],te,ne,!0),B++;else{const re=B,ce=B,_e=new Map;for(B=ce;B<=ae;B++){const P=D[B]=N?Bi(D[B]):Kn(D[B]);P.key!=null&&_e.set(P.key,B)}let Se,se=0;const ze=ae-ce+1;let Oe=!1,Le=0;const Ae=new Array(ze);for(B=0;B<ze;B++)Ae[B]=0;for(B=re;B<=K;B++){const P=L[B];if(se>=ze){ue(P,te,ne,!0);continue}let he;if(P.key!=null)he=_e.get(P.key);else for(Se=ce;Se<=ae;Se++)if(Ae[Se-ce]===0&&eo(P,D[Se])){he=Se;break}he===void 0?ue(P,te,ne,!0):(Ae[he-ce]=B+1,he>=Le?Le=he:Oe=!0,_(P,D[he],V,null,te,ne,T,y,N),se++)}const ye=Oe?Mv(Ae):xs;for(Se=ye.length-1,B=ze-1;B>=0;B--){const P=ce+B,he=D[P],we=P+1<G?D[P+1].el:W;Ae[B]===0?_(null,he,V,we,te,ne,T,y,N):Oe&&(Se<0||B!==ye[Se]?fe(he,V,we,2):Se--)}}},fe=(L,D,V,W,te=null)=>{const{el:ne,type:T,transition:y,children:N,shapeFlag:B}=L;if(B&6){fe(L.component.subTree,D,V,W);return}if(B&128){L.suspense.move(D,V,W);return}if(B&64){T.move(L,D,V,Re);return}if(T===Rn){n(ne,D,V);for(let K=0;K<N.length;K++)fe(N[K],D,V,W);n(L.anchor,D,V);return}if(T===ql){v(L,D,V);return}if(W!==2&&B&1&&y)if(W===0)y.beforeEnter(ne),n(ne,D,V),sn(()=>y.enter(ne),te);else{const{leave:K,delayLeave:ae,afterLeave:re}=y,ce=()=>n(ne,D,V),_e=()=>{K(ne,()=>{ce(),re&&re()})};ae?ae(ne,ce,_e):_e()}else n(ne,D,V)},ue=(L,D,V,W=!1,te=!1)=>{const{type:ne,props:T,ref:y,children:N,dynamicChildren:B,shapeFlag:G,patchFlag:K,dirs:ae}=L;if(y!=null&&ru(y,null,V,L,!0),G&256){D.ctx.deactivate(L);return}const re=G&1&&ae,ce=!Ga(L);let _e;if(ce&&(_e=T&&T.onVnodeBeforeUnmount)&&qn(_e,D,L),G&6)me(L.component,V,W);else{if(G&128){L.suspense.unmount(V,W);return}re&&or(L,null,D,"beforeUnmount"),G&64?L.type.remove(L,D,V,te,Re,W):B&&(ne!==Rn||K>0&&K&64)?Te(B,D,V,!1,!0):(ne===Rn&&K&384||!te&&G&16)&&Te(N,D,V),W&&ee(L)}(ce&&(_e=T&&T.onVnodeUnmounted)||re)&&sn(()=>{_e&&qn(_e,D,L),re&&or(L,null,D,"unmounted")},V)},ee=L=>{const{type:D,el:V,anchor:W,transition:te}=L;if(D===Rn){le(V,W);return}if(D===ql){M(L);return}const ne=()=>{r(V),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(L.shapeFlag&1&&te&&!te.persisted){const{leave:T,delayLeave:y}=te,N=()=>T(V,ne);y?y(L.el,ne,N):N()}else ne()},le=(L,D)=>{let V;for(;L!==D;)V=f(L),r(L),L=V;r(D)},me=(L,D,V)=>{const{bum:W,scope:te,update:ne,subTree:T,um:y}=L;W&&Vl(W),te.stop(),ne&&(ne.active=!1,ue(T,L,D,V)),y&&sn(y,D),sn(()=>{L.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Te=(L,D,V,W=!1,te=!1,ne=0)=>{for(let T=ne;T<L.length;T++)ue(L[T],D,V,W,te)},be=L=>L.shapeFlag&6?be(L.component.subTree):L.shapeFlag&128?L.suspense.next():f(L.anchor||L.el);let Ne=!1;const Ue=(L,D,V)=>{L==null?D._vnode&&ue(D._vnode,null,null,!0):_(D._vnode||null,L,D,null,null,null,V),Ne||(Ne=!0,sf(),ym(),Ne=!1),D._vnode=L},Re={p:_,um:ue,m:fe,r:ee,mt:U,mc:C,pc:q,pbc:A,n:be,o:i};let Ge,j;return e&&([Ge,j]=e(Re)),{render:Ue,hydrate:Ge,createApp:hv(Ue,Ge)}}function Yl({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ar({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function yv(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Um(i,e,t=!1){const n=i.children,r=e.children;if(ke(n)&&ke(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Bi(r[s]),a.el=o.el),t||Um(o,a)),a.type===Al&&(a.el=o.el)}}function Mv(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Om(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Om(e)}const Sv=i=>i.__isTeleport,Rn=Symbol.for("v-fgt"),Al=Symbol.for("v-txt"),Do=Symbol.for("v-cmt"),ql=Symbol.for("v-stc"),xo=[];let Vn=null;function vr(i=!1){xo.push(Vn=i?null:[])}function Tv(){xo.pop(),Vn=xo[xo.length-1]||null}let Io=1;function _f(i){Io+=i}function Fm(i){return i.dynamicChildren=Io>0?Vn||xs:null,Tv(),Io>0&&Vn&&Vn.push(i),i}function ds(i,e,t,n,r,s){return Fm(yt(i,e,t,n,r,s,!0))}function Ev(i,e,t,n,r){return Fm(Si(i,e,t,n,r,!0))}function bv(i){return i?i.__v_isVNode===!0:!1}function eo(i,e){return i.type===e.type&&i.key===e.key}const wl="__vInternal",Bm=({key:i})=>i??null,Xa=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Ct(i)||dn(i)||Xe(i)?{i:ei,r:i,k:e,f:!!t}:i:null);function yt(i,e=null,t=null,n=0,r=null,s=i===Rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Bm(e),ref:e&&Xa(e),scopeId:El,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ei};return a?(rh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),Io>0&&!o&&Vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Vn.push(l),l}const Si=Av;function Av(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===H0)&&(i=Do),bv(i)){const a=Ds(i,e,!0);return t&&rh(a,t),Io>0&&!s&&Vn&&(a.shapeFlag&6?Vn[Vn.indexOf(i)]=a:Vn.push(a)),a.patchFlag|=-2,a}if(Fv(i)&&(i=i.__vccOpts),e){e=wv(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=xl(a)),gt(l)&&(fm(l)&&!ke(l)&&(l=zt({},l)),e.style=Wu(l))}const o=Ct(i)?1:V0(i)?128:Sv(i)?64:gt(i)?4:Xe(i)?2:0;return yt(i,e,t,n,r,o,s,!0)}function wv(i){return i?fm(i)||wl in i?zt({},i):i:null}function Ds(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Cv(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Bm(a),ref:e&&e.ref?t&&r?ke(r)?r.concat(Xa(e)):[r,Xa(e)]:Xa(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Rn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ds(i.ssContent),ssFallback:i.ssFallback&&Ds(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Rv(i=" ",e=0){return Si(Al,null,i,e)}function Kn(i){return i==null||typeof i=="boolean"?Si(Do):ke(i)?Si(Rn,null,i.slice()):typeof i=="object"?Bi(i):Si(Al,null,String(i))}function Bi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ds(i)}function rh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),rh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(wl in e)?e._ctx=ei:r===3&&ei&&(ei.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:ei},t=32):(e=String(e),n&64?(t=16,e=[Rv(e)]):t=8);i.children=e,i.shapeFlag|=t}function Cv(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=xl([e.class,n.class]));else if(r==="style")e.style=Wu([e.style,n.style]);else if(_l(r)){const s=e[r],o=n[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function qn(i,e,t,n=null){Gn(i,e,7,[t,n])}const Pv=Cm();let Lv=0;function Dv(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Pv,s={uid:Lv++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new e0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lm(n,r),emitsOptions:Sm(n,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:n.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=I0.bind(null,s),i.ce&&i.ce(s),s}let en=null,nl,su;{const i=$p(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};nl=e("__VUE_INSTANCE_SETTERS__",t=>en=t),su=e("__VUE_SSR_SETTERS__",t=>Rl=t)}const Yo=i=>{const e=en;return nl(i),i.scope.on(),()=>{i.scope.off(),nl(e)}},gf=()=>{en&&en.scope.off(),nl(null)};function zm(i){return i.vnode.shapeFlag&4}let Rl=!1;function Iv(i,e=!1){e&&su(e);const{props:t,children:n}=i.vnode,r=zm(i);dv(i,t,r,e),_v(i,n);const s=r?Nv(i,e):void 0;return e&&su(!1),s}function Nv(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=dm(new Proxy(i.ctx,rv));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?Ov(i):null,s=Yo(i);Br();const o=ji(n,i,0,[i.props,r]);if(zr(),s(),Yp(o)){if(o.then(gf,gf),e)return o.then(a=>{vf(i,a,e)}).catch(a=>{Sl(a,i,0)});i.asyncDep=o}else vf(i,o,e)}else km(i,e)}function vf(i,e,t){Xe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:gt(e)&&(i.setupState=gm(e)),km(i,t)}let xf;function km(i,e,t){const n=i.type;if(!i.render){if(!e&&xf&&!n.render){const r=n.template||nh(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=zt(zt({isCustomElement:s,delimiters:a},o),l);n.render=xf(r,c)}}i.render=n.render||In}{const r=Yo(i);Br();try{sv(i)}finally{zr(),r()}}}function Uv(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return fn(i,"get","$attrs"),e[t]}}))}function Ov(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return Uv(i)},slots:i.slots,emit:i.emit,expose:e}}function sh(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(gm(dm(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in vo)return vo[t](i)},has(e,t){return t in e||t in vo}}))}function Fv(i){return Xe(i)&&"__vccOpts"in i}const Bv=(i,e)=>T0(i,e,Rl),zv="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kv="http://www.w3.org/2000/svg",Hv="http://www.w3.org/1998/Math/MathML",zi=typeof document<"u"?document:null,yf=zi&&zi.createElement("template"),Vv={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?zi.createElementNS(kv,i):e==="mathml"?zi.createElementNS(Hv,i):zi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>zi.createTextNode(i),createComment:i=>zi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>zi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yf.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=yf.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gv=Symbol("_vtc");function Wv(i,e,t){const n=i[Gv];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Xv=Symbol("_vod"),Yv=Symbol("");function qv(i,e,t){const n=i.style,r=n.display,s=Ct(t);if(t&&!s){if(e&&!Ct(e))for(const o in e)t[o]==null&&ou(n,o,"");for(const o in t)ou(n,o,t[o])}else if(s){if(e!==t){const o=n[Yv];o&&(t+=";"+o),n.cssText=t}}else e&&i.removeAttribute("style");Xv in i&&(n.display=r)}const Mf=/\s*!important$/;function ou(i,e,t){if(ke(t))t.forEach(n=>ou(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=jv(i,e);Mf.test(t)?i.setProperty(qs(n),t.replace(Mf,""),"important"):i[n]=t}}const Sf=["Webkit","Moz","ms"],jl={};function jv(i,e){const t=jl[e];if(t)return t;let n=Ps(e);if(n!=="filter"&&n in i)return jl[e]=n;n=Kp(n);for(let r=0;r<Sf.length;r++){const s=Sf[r]+n;if(s in i)return jl[e]=s}return e}const Tf="http://www.w3.org/1999/xlink";function Kv(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Tf,e.slice(6,e.length)):i.setAttributeNS(Tf,e,t);else{const s=Qg(e);t==null||s&&!Zp(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function $v(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Zp(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function Zv(i,e,t,n){i.addEventListener(e,t,n)}function Jv(i,e,t,n){i.removeEventListener(e,t,n)}const Ef=Symbol("_vei");function Qv(i,e,t,n,r=null){const s=i[Ef]||(i[Ef]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=ex(e);if(n){const c=s[e]=ix(n,r);Zv(i,a,c,l)}else o&&(Jv(i,a,o,l),s[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function ex(i){let e;if(bf.test(i)){e={};let n;for(;n=i.match(bf);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):qs(i.slice(2)),e]}let Kl=0;const tx=Promise.resolve(),nx=()=>Kl||(tx.then(()=>Kl=0),Kl=Date.now());function ix(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Gn(rx(n,t.value),e,5,[n])};return t.value=i,t.attached=nx(),t}function rx(i,e){if(ke(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Af=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,sx=(i,e,t,n,r,s,o,a,l)=>{const c=r==="svg";e==="class"?Wv(i,n,c):e==="style"?qv(i,t,n):_l(e)?Hu(e)||Qv(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ox(i,e,n,c))?$v(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Kv(i,e,n,c))};function ox(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Af(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Af(e)&&Ct(t)?!1:e in i}const ax=zt({patchProp:sx},Vv);let wf;function lx(){return wf||(wf=vv(ax))}const cx=(...i)=>{const e=lx().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=hx(n);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,ux(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ux(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function hx(i){return Ct(i)?document.querySelector(i):i}const Rf={iot:{name:"物联网设备",unit:"个",min:800,max:3200},event:{name:"城市事件",unit:"件",min:20,max:260},power:{name:"电力能耗",unit:"kWh",min:400,max:4800},test:{name:"监测点位",unit:"个",min:12,max:180}},fx=[{name:"火警",types:["烟雾报警","明火报警","温度异常","消防预警"]},{name:"治安",types:["人员聚集","异常闯入","治安巡逻","纠纷报警"]},{name:"电力",types:["线路过载","配电故障","电压异常","设备停电"]}];function yo(i,e){return Math.floor(Math.random()*(e-i+1))+i}function Cf(i){return i[yo(0,i.length-1)]}function dx(){const i={};return Object.keys(Rf).forEach(e=>{const t=Rf[e];i[e]={name:t.name,unit:t.unit,number:yo(t.min,t.max)}}),i}function px(){const i=yo(3,5);return Array.from({length:i},()=>{const e=Cf(fx);return{name:e.name,type:Cf(e.types),id:Math.random().toString(16).slice(2),position:{x:yo(10,90),y:yo(10,90)}}})}function _i(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Hm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Is={duration:.5,overwrite:!1,delay:0},oh,Xt,ht,Nn=1e8,lt=1/Nn,au=Math.PI*2,mx=au/4,_x=0,Vm=Math.sqrt,gx=Math.cos,vx=Math.sin,Ot=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Ti=function(e){return typeof e=="number"},ah=function(e){return typeof e>"u"},ri=function(e){return typeof e=="object"},an=function(e){return e!==!1},lh=function(){return typeof window<"u"},ra=function(e){return Mt(e)||Ot(e)},Gm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,lu=/(?:-?\.?\d|\.)+/gi,Wm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xm=/[+-]=-?[.\d]+/,Ym=/[^,'"\[\]\s]+/gi,xx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,jn,cu,ch,Tn={},il={},qm,jm=function(e){return(il=Dr(e,Tn))&&pn},uh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},No=function(e,t){return!t&&console.warn(e)},Km=function(e,t){return e&&(Tn[e]=t)&&il&&(il[e]=t)||Tn},Uo=function(){return 0},yx={suppressEvents:!0,isStart:!0,kill:!1},Ya={suppressEvents:!0,kill:!1},Mx={suppressEvents:!0},hh={},Ki=[],uu={},$m,vn={},Zl={},Pf=30,qa=[],fh="",dh=function(e){var t=e[0],n,r;if(ri(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=qa.length;r--&&!qa[r].targetTest(t););n=qa[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new y_(e[r],n)))||e.splice(r,1);return e},br=function(e){return e._gsap||dh(Un(e))[0]._gsap},Zm=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():ah(n)&&e.getAttribute&&e.getAttribute(t)||n},ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},Ts=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Sx=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},rl=function(){var e=Ki.length,t=Ki.slice(0),n,r;for(uu={},Ki.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Jm=function(e,t,n,r){Ki.length&&!Xt&&rl(),e.render(t,n,r||Xt&&t<0&&(e._initted||e._startAt)),Ki.length&&!Xt&&rl()},Qm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ym).length<2?t:Ot(e)?e.trim():e},e_=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tx=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Dr=function(e,t){for(var n in t)e[n]=t[n];return e},Lf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ri(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},sl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Mo=function(e){var t=e.parent||pt,n=e.keyframes?Tx(Yt(e.keyframes)):On;if(an(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ex=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},t_=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Cl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hu=function(e,t,n,r){return e._startAt&&(Xt?e._startAt.revert(Ya):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ax=function i(e){return!e||e._ts&&i(e.parent)},Df=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ol=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pl=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Ll=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pl(e),n._dirty||Ar(n,e)),e},n_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ol(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Jn=function(e,t,n,r){return t.parent&&tr(t),t._start=Ut((Ti(n)?n:n||e!==pt?An(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),t_(e,t,"_first","_last",e._sort?"_start":0),fu(t)||(e._recent=t),r||n_(e,t),e._ts<0&&Ll(e,e._tTime),e},i_=function(e,t){return(Tn.ScrollTrigger||uh("scrollTrigger",t))&&Tn.ScrollTrigger.create(t,e)},r_=function(e,t,n,r,s){if(mh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$m!==yn.frame)return Ki.push(e),e._lazy=[s,r],1},wx=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},fu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Rx=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&wx(e)&&!(!e._initted&&fu(e))||(e._ts<0||e._dp._ts<0)&&!fu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=qo(0,e._tDur,t),u=Ns(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ns(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Xt||r||e._zTime===lt||!t&&e._zTime){if(!e._initted&&r_(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&hu(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&tr(e,1),!n&&!Xt&&(Mn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Cx=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Us=function(e,t,n,r){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ll(e,e._tTime=e._tDur*a),e.parent&&Pl(e),n||Ar(e.parent,e),e},If=function(e){return e instanceof tn?Ar(e):Us(e,e._dur)},Px={_start:0,endTime:Uo,totalDuration:Uo},An=function i(e,t,n){var r=e.labels,s=e._recent||Px,o=e.duration()>=Nn?s.endTime(!1):e._dur,a,l,c;return Ot(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Yt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},So=function(e,t,n){var r=Ti(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;o.immediateRender=an(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new wt(t[0],o,t[s+1])},ir=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e,t){return!Ot(e)||!(t=xx.exec(e))?"":t[1]},Lx=function(e,t,n){return ir(n,function(r){return qo(e,t,r)})},du=[].slice,s_=function(e,t){return e&&ri(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ri(e[0]))&&!e.nodeType&&e!==jn},Dx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ot(r)&&!t||s_(r,1)?(s=n).push.apply(s,Un(r)):n.push(r)})||n},Un=function(e,t,n){return ht&&!t&&ht.selector?ht.selector(e):Ot(e)&&!n&&(cu||!Os())?du.call((t||ch).querySelectorAll(e),0):Yt(e)?Dx(e,n):s_(e)?du.call(e,0):e?[e]:[]},pu=function(e){return e=Un(e)[0]||No("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Un(t,n.querySelectorAll?n:n===e?No("Invalid scope")||ch.createElement("div"):e)}},o_=function(e){return e.sort(function(){return .5-Math.random()})},a_=function(e){if(Mt(e))return e;var t=ri(e)?e:{each:e},n=wr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Ot(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,S,v,M,w,E,b,C,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,Nn])[1],!x){for(b=-Nn;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],m=l?Math.min(x,_)*u-.5:r%x,S=x===Nn?0:l?_*h/x-.5:r/x|0,b=0,C=Nn,E=0;E<_;E++)v=E%x-m,M=S-(E/x|0),p[E]=w=c?Math.abs(c==="y"?M:v):Vm(v*v+M*M),w>b&&(b=w),w<C&&(C=w);r==="random"&&o_(p),p.max=b-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Wt(t.amount||t.each)||0,n=n&&_<0?g_(n):n}return _=(p[f]-p.min)/p.max||0,Ut(p.b+(n?n(_):_)*p.v)+p.u}},mu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ut(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ti(n)?0:Wt(n))}},l_=function(e,t){var n=Yt(e),r,s;return!n&&ri(e)&&(r=n=e.radius||Nn,e.values?(e=Un(e.values),(s=!Ti(e[0]))&&(r*=r)):e=mu(e.increment)),ir(t,n?Mt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Nn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Ti(o)?u:u+Wt(o)}:mu(e))},c_=function(e,t,n,r){return ir(Yt(e)?!t:n===!0?!!(n=0):!r,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Ix=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Nx=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},Ux=function(e,t,n){return h_(e,t,0,1,n)},u_=function(e,t,n){return ir(n,function(r){return e[~~t(r)]})},Ox=function i(e,t,n){var r=t-e;return Yt(e)?u_(e,i(0,e.length),t):ir(n,function(s){return(r+(s-e)%r)%r+e})},Fx=function i(e,t,n){var r=t-e,s=r*2;return Yt(e)?u_(e,i(0,e.length-1),t):ir(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Oo=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Ym:lu),n+=e.substr(t,r-t)+c_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},h_=function(e,t,n,r,s){var o=t-e,a=r-n;return ir(s,function(l){return n+((l-e)/o*a||0)})},Bx=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ot(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else r||(e=Dr(Yt(e)?[]:{},e));if(!u){for(l in t)ph.call(a,e,l,"get",t[l]);s=function(g){return vh(g,a)||(o?e.p:e)}}}return ir(n,s)},Nf=function(e,t,n){var r=e.labels,s=Nn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mn=function(e,t,n){var r=e.vars,s=r[t],o=ht,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ki.length&&rl(),a&&(ht=a),u=l?s.apply(c,l):s.call(c),ht=o,u},mo=function(e){return tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Xt),e.progress()<1&&Mn(e,"onInterrupt"),e},_s,f_=[],d_=function(e){if(e)if(e=!e.name&&e.default||e,lh()||e.headless){var t=e.name,n=Mt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Uo,render:vh,add:ph,kill:ey,modifier:Qx,rawVars:0},o={targetTest:0,get:0,getSetter:gh,aliases:{},register:0};if(Os(),e!==r){if(vn[t])return;On(r,On(sl(e,s),o)),Dr(r.prototype,Dr(s,sl(e,o))),vn[r.prop=t]=r,e.targetTest&&(qa.push(r),hh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Km(t,r),e.register&&e.register(pn,r,cn)}else f_.push(e)},ot=255,_o={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Jl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},p_=function(e,t,n){var r=e?Ti(e)?[e>>16,e>>8&ot,e&ot]:0:_o.black,s,o,a,l,c,u,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_o[e])r=_o[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ot,r&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(lu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Jl(l+1/3,s,o),r[1]=Jl(l,s,o),r[2]=Jl(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Wm),n&&r.length<4&&(r[3]=1),r}else r=e.match(lu)||_o.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ot,o=r[1]/ot,a=r[2]/ot,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},m_=function(e){var t=[],n=[],r=-1;return e.split($i).forEach(function(s){var o=s.match(ms)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Uf=function(e,t,n){var r="",s=(e+r).match($i),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=p_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=m_(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace($i,"1").split(ms),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split($i),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},$i=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _o)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),zx=/hsl[a]?\(/,__=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=zx.test(t),e[1]=Uf(e[1],n),e[0]=Uf(e[0],n,m_(e[1])),!0},Fo,yn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(p){var m=i()-r,S=p===!0,v,M,w,E;if((m>e||m<0)&&(n+=m-t),r+=m,w=r-n,v=w-o,(v>0||S)&&(E=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=v+(v>=s?4:s-v),M=1),S||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](w,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qm&&(!cu&&lh()&&(jn=cu=window,ch=jn.document||{},Tn.gsap=pn,(jn.gsapVersions||(jn.gsapVersions=[])).push(pn.version),jm(il||jn.GreenSockGlobals||!jn.gsap&&jn||{}),f_.forEach(d_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Fo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fo=0,c=Uo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,S){var v=m?function(M,w,E,b){p(M,w,E,b),h.remove(v)}:p;return h.remove(p),a[S?"unshift":"push"](v),Os(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Os=function(){return!Fo&&yn.wake()},Qe={},kx=/^[\d.\-M][\d.\-,\s]/,Hx=/["']/g,Vx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Hx,"").trim():+c,r=l.substr(a+1).trim();return t},Gx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Wx=function(e){var t=(e+"").split("("),n=Qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Vx(t[1])]:Gx(e).split(",").map(Qm)):Qe._CE&&kx.test(e)?Qe._CE("",e):n},g_=function(e){return function(t){return 1-e(1-t)}},v_=function i(e,t){for(var n=e._first,r;n;)n instanceof tn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},wr=function(e,t){return e&&(Mt(e)?e:Qe[e]||Wx(e))||t},kr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return ln(e,function(a){Qe[a]=Tn[a]=s,Qe[o=a.toLowerCase()]=n;for(var l in s)Qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[a+"."+l]=s[l]}),s},x_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ql=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/au*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*vx((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:x_(a);return s=au/s,l.config=function(c,u){return i(e,c,u)},l},ec=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:x_(n);return r.config=function(s){return i(e,s)},r};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;kr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;kr("Elastic",Ql("in"),Ql("out"),Ql());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};kr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);kr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});kr("Circ",function(i){return-(Vm(1-i*i)-1)});kr("Sine",function(i){return i===1?1:-gx(i*mx)+1});kr("Back",ec("in"),ec("out"),ec());Qe.SteppedEase=Qe.steps=Tn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-lt;return function(a){return((r*qo(0,o,a)|0)+s)*n}}};Is.ease=Qe["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return fh+=i+","+i+"Params,"});var y_=function(e,t){this.id=_x++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Zm,this.set=t?t.getSetter:gh},Bo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Us(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),Fo||yn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ll(this,n),!s._dp||s.parent||n_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jm(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Df(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Df(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ns(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ol(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(qo(-Math.abs(this._delay),this._tDur,s),r!==!1),Pl(this),bx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Jn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(an(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Mx);var r=Xt;return Xt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Xt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,If(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,If(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(An(this,n),an(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,an(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-lt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Mt(n)?n:e_,a=function(){var c=r.then;r.then=null,Mt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){mo(this)},i}();On(Bo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var tn=function(i){Hm(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=an(n.sortChildren),pt&&Jn(n.parent||pt,_i(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&i_(_i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return So(0,arguments,this),this},t.from=function(r,s,o){return So(1,arguments,this),this},t.fromTo=function(r,s,o,a){return So(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wt(r,s,An(this,o),1),this},t.call=function(r,s,o){return Jn(this,wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new wt(r,o,An(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Mo(o).immediateRender=an(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Mo(a).immediateRender=an(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ut(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,p,m,S,v,M,w,E,b;if(this!==pt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,M=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Ut(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),w=Ns(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),E&&_&1&&(f=c-f,b=1),_!==w&&!this._lock){var C=E&&w&1,x=C===(E&&_&1);if(_<w&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ut(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;v_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Cx(this,Ut(a),Ut(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Mn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-lt);break}}d=g}else{d=this._last;for(var A=r<0?r:f;d;){if(g=d._prev,(d._act||A<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||Xt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=A?-lt:lt);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-lt)._zTime=f>=a?1:-1,this._ts))return this._start=M,Pl(this),this.render(r,s,o);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&tr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Mn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ti(s)||(s=An(this,s,r)),!(r instanceof Bo)){if(Yt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ot(r))return this.addLabel(r,s);if(Mt(r))r=wt.delayedCall(0,r);else return this}return this!==r?Jn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Nn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof wt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ot(r)?this.removeLabel(r):Mt(r)?this.killTweensOf(r):(Cl(this,r),r===this._recent&&(this._recent=this._last),Ar(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=An(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=wt.delayedCall(0,s||Uo,o);return a.data="isPause",this._hasPause=1,Jn(this,a,An(this,r))},t.removePause=function(r){var s=this._first;for(r=An(this,r);s;)s._start===r&&s.data==="isPause"&&tr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Vi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Un(r),l=this._first,c=Ti(s),u;l;)l instanceof wt?Sx(l._targets,a)&&(c?(!Vi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=An(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=wt.to(o,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||lt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Us(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,On({startAt:{time:An(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Nf(this,An(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Nf(this,An(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ar(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ar(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Nn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Jn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Us(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(pt._ts&&(Jm(pt,ol(r,pt)),$m=yn.frame),yn.frame>=Pf){Pf+=Sn.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&Sn.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e}(Bo);On(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xx=function(e,t,n,r,s,o,a){var l=new cn(this._pt,e,t,0,1,A_,null,s),c=0,u=0,h,f,d,g,_,p,m,S;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Oo(r)),o&&(S=[n,r],o(S,e,t),n=S[0],r=S[1]),f=n.match($l)||[];h=$l.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Ts(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=$l.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Xm.test(r)||m)&&(l.e=0),this._pt=l,l},ph=function(e,t,n,r,s,o,a,l,c,u){Mt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Mt(h)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Mt(h)?c?$x:E_:_h,g;if(Ot(r)&&(~r.indexOf("random(")&&(r=Oo(r)),r.charAt(1)==="="&&(g=Ts(f,r)+(Wt(f)||0),(g||g===0)&&(r=g))),!u||f!==r||_u)return!isNaN(f*r)&&r!==""?(g=new cn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?Jx:b_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&uh(t,r),Xx.call(this,e,t,f,r,d,l||Sn.stringFilter,c))},Yx=function(e,t,n,r,s){if(Mt(e)&&(e=To(e,s,t,n,r)),!ri(e)||e.style&&e.nodeType||Yt(e)||Gm(e))return Ot(e)?To(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=To(e[a],s,t,n,r);return o},M_=function(e,t,n,r,s,o){var a,l,c,u;if(vn[e]&&(a=new vn[e]).init(s,a.rawVars?t[e]:Yx(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new cn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==_s))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Vi,_u,mh=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!oh,M=e.timeline,w,E,b,C,x,A,F,k,$,U,z,H,Y;if(M&&(!f||!s)&&(s="none"),e._ease=wr(s,Is.ease),e._yEase=h?g_(wr(h===!0?s:h,Is.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!r.runBackwards,!M||f&&!r.stagger){if(k=p[0]?br(p[0]).harness:0,H=k&&r[k.prop],w=sl(r,hh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ya:yx),_._lazy=0),o){if(tr(e._startAt=wt.set(p,On({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt||!a&&!d)&&e._startAt.revert(Ya),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=On({overwrite:!1,data:"isFromStart",lazy:a&&!_&&an(l),immediateRender:a,stagger:0,parent:m},w),H&&(b[k.prop]=H),tr(e._startAt=wt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt?e._startAt.revert(Ya):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&an(l)||l&&!g,E=0;E<p.length;E++){if(x=p[E],F=x._gsap||dh(p)[E]._gsap,e._ptLookup[E]=U={},uu[F.id]&&Ki.length&&rl(),z=S===p?E:S.indexOf(x),k&&($=new k).init(x,H||w,e,z,S)!==!1&&(e._pt=C=new cn(e._pt,x,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(q){U[q]=C}),$.priority&&(A=1)),!k||H)for(b in w)vn[b]&&($=M_(b,w,e,z,x,S))?$.priority&&(A=1):U[b]=C=ph.call(e,x,b,"get",w[b],z,S,0,r.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),v&&e._pt&&(Vi=e,pt.killTweensOf(x,U,e.globalTime(t)),Y=!e.parent,Vi=0),e._pt&&l&&(uu[F.id]=1)}A&&w_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&M.render(Nn,!0,!0)},qx=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return _u=1,e.vars[t]="+=0",mh(e,a),_u=0,l?No(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Et(n)+Wt(h.e)),h.b&&(h.b=u.s+Wt(h.b))},jx=function(e,t){var n=e[0]?br(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Dr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Kx=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Yt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},To=function(e,t,n,r,s){return Mt(e)?e.call(t,n,r,s):Ot(e)&&~e.indexOf("random(")?Oo(e):e},S_=fh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",T_={};ln(S_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return T_[i]=1});var wt=function(i){Hm(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Mo(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=r.parent||pt,v=(Yt(n)||Gm(n)?Ti(n[0]):"length"in r)?[n]:Un(n),M,w,E,b,C,x,A,F;if(a._targets=v.length?dh(v):No("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||ra(c)||ra(u)){if(r=a.vars,M=a.timeline=new tn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=_i(a),M._start=0,f||ra(c)||ra(u)){if(b=v.length,A=f&&a_(f),ri(f))for(C in f)~S_.indexOf(C)&&(F||(F={}),F[C]=f[C]);for(w=0;w<b;w++)E=sl(r,T_),E.stagger=0,m&&(E.yoyoEase=m),F&&Dr(E,F),x=v[w],E.duration=+To(c,_i(a),w,x,v),E.delay=(+To(u,_i(a),w,x,v)||0)-a._delay,!f&&b===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),M.to(x,E,A?A(w,x,v):0),M._ease=Qe.none;M.duration()?c=u=0:a.timeline=0}else if(g){Mo(On(M.vars.defaults,{ease:"none"})),M._ease=wr(g.ease||r.ease||"none");var k=0,$,U,z;if(Yt(g))g.forEach(function(H){return M.to(v,H,">")}),M.duration();else{E={};for(C in g)C==="ease"||C==="easeEach"||Kx(C,g[C],E,g.easeEach);for(C in E)for($=E[C].sort(function(H,Y){return H.t-Y.t}),k=0,w=0;w<$.length;w++)U=$[w],z={ease:U.e,duration:(U.t-(w?$[w-1].t:0))/100*c},z[C]=U.v,M.to(v,z,k),k+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!oh&&(Vi=_i(a),pt.killTweensOf(v),Vi=0),Jn(S,_i(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ut(S._time)&&an(h)&&Ax(_i(a))&&S.data!=="nested")&&(a._tTime=-lt,a.render(Math.max(0,-u)||0)),p&&i_(_i(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-lt&&!u?l:r<lt?0:r,f,d,g,_,p,m,S,v,M;if(!c)Rx(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Ut(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Ut(h/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(M=this._yEase,f=c-f),p=Ns(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(v&&this._yEase&&v_(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(r_(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!s&&!g&&(Mn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&hu(this,r,s,o),Mn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&hu(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&tr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Fo||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||mh(this,c),u=this._ease(c/this._dur),qx(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ll(this,0),this.parent||t_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?mo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Vi&&Vi.vars.overwrite!==!0)._first||mo(this),this.parent&&o!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Un(r):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&Ex(a,l))return s==="all"&&(this._pt=0),mo(this);for(h=this._op=this._op||[],s!=="all"&&(Ot(s)&&(_={},ln(s,function(S){return _[S]=1}),s=_),s=jx(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Cl(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&mo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return So(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return So(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return pt.killTweensOf(r,s,o)},e}(Bo);On(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(i){wt[i]=function(){var e=new tn,t=du.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var _h=function(e,t,n){return e[t]=n},E_=function(e,t,n){return e[t](n)},$x=function(e,t,n,r){return e[t](r.fp,n)},Zx=function(e,t,n){return e.setAttribute(t,n)},gh=function(e,t){return Mt(e[t])?E_:ah(e[t])&&e.setAttribute?Zx:_h},b_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},A_=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},vh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Qx=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},ey=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Cl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},ty=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},w_=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},cn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||b_,this.d=l||this,this.set=c||_h,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=ty,this.m=n,this.mt=s,this.tween=r},i}();ln(fh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return hh[i]=1});Tn.TweenMax=Tn.TweenLite=wt;Tn.TimelineLite=Tn.TimelineMax=tn;pt=new tn({sortChildren:!1,defaults:Is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=__;var Rr=[],ja={},ny=[],Of=0,iy=0,tc=function(e){return(ja[e]||ny).map(function(t){return t()})},gu=function(){var e=Date.now(),t=[];e-Of>2&&(tc("matchMediaInit"),Rr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=jn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),tc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Of=e,tc("matchMedia"))},R_=function(){function i(t,n){this.selector=n&&pu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=iy++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Mt(n)&&(s=r,r=n,n=Mt);var o=this,a=function(){var c=ht,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=pu(s)),ht=o,h=r.apply(o,arguments),Mt(h)&&o._r.push(h),ht=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Mt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=ht;ht=null,n(this),ht=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof wt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Rr.length;o--;)Rr[o].id===this.id&&Rr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),ry=function(){function i(t){this.contexts=[],this.scope=t,ht&&ht.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ri(n)||(n={matches:n});var o=new R_(0,s||this.scope),a=o.conditions={},l,c,u;ht&&!o.selector&&(o.selector=ht.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=jn.matchMedia(n[c]),l&&(Rr.indexOf(o)<0&&Rr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(gu):l.addEventListener("change",gu)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),al={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return d_(r)})},timeline:function(e){return new tn(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ot(e)&&(e=Un(e)[0]);var s=br(e||{}).get,o=n?e_:Qm;return n==="native"&&(n=""),e&&(t?o((vn[t]&&vn[t].get||s)(e,t,n,r)):function(a,l,c){return o((vn[a]&&vn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Un(e),e.length>1){var r=e.map(function(u){return pn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=vn[t],a=br(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;_s._pt=0,h.init(e,n?u+n:u,_s,0,[e]),h.render(1,h),_s._pt&&vh(1,_s)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=pn.to(e,Dr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wr(e.ease,Is.ease)),Lf(Is,e||{})},config:function(e){return Lf(Sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!vn[a]&&!Tn[a]&&No(t+" effect requires "+a+" plugin.")}),Zl[t]=function(a,l,c){return n(Un(a),On(l||{},s),c)},o&&(tn.prototype[t]=function(a,l,c){return this.add(Zl[t](a,ri(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Qe[e]=wr(t)},parseEase:function(e,t){return arguments.length?wr(e,t):Qe},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new tn(e),r,s;for(n.smoothChildTiming=an(e.smoothChildTiming),pt.remove(n),n._dp=0,n._time=n._tTime=pt._time,r=pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof wt&&r.vars.onComplete===r._targets[0]))&&Jn(n,r,r._start-r._delay),r=s;return Jn(pt,n,0),n},context:function(e,t){return e?new R_(e,t):ht},matchMedia:function(e){return new ry(e)},matchMediaRefresh:function(){return Rr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||gu()},addEventListener:function(e,t){var n=ja[e]||(ja[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ja[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ox,wrapYoyo:Fx,distribute:a_,random:c_,snap:l_,normalize:Ux,getUnit:Wt,clamp:Lx,splitColor:p_,toArray:Un,selector:pu,mapRange:h_,pipe:Ix,unitize:Nx,interpolate:Bx,shuffle:o_},install:jm,effects:Zl,ticker:yn,updateRoot:tn.updateRoot,plugins:vn,globalTimeline:pt,core:{PropTween:cn,globals:Km,Tween:wt,Timeline:tn,Animation:Bo,getCache:br,_removeLinkedListItem:Cl,reverting:function(){return Xt},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return oh=e}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return al[i]=wt[i]});yn.add(tn.updateRoot);_s=al.to({},{duration:0});var sy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},oy=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=sy(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},nc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ot(s)&&(l={},ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}oy(a,s)}}}},pn=al.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Xt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},nc("roundProps",mu),nc("modifiers"),nc("snap",l_))||al;wt.version=tn.version=pn.version="3.12.5";qm=1;lh()&&Os();Qe.Power0;Qe.Power1;Qe.Power2;Qe.Power3;Qe.Power4;Qe.Linear;Qe.Quad;Qe.Cubic;Qe.Quart;Qe.Quint;Qe.Strong;Qe.Elastic;Qe.Back;Qe.SteppedEase;Qe.Bounce;Qe.Sine;Qe.Expo;Qe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ff,Gi,Es,xh,Mr,Bf,yh,ay=function(){return typeof window<"u"},Ei={},mr=180/Math.PI,bs=Math.PI/180,Gr=Math.atan2,zf=1e8,Mh=/([A-Z])/g,ly=/(left|right|width|margin|padding|x)/i,cy=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},C_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},P_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dy=function(e,t,n){return e.style[t]=n},py=function(e,t,n){return e.style.setProperty(t,n)},my=function(e,t,n){return e._gsap[t]=n},_y=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},gy=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},vy=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},_t="transform",un=_t+"Origin",xy=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ei&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=gi(r,a)}):this.tfm[e]=o.x?o[e]:gi(r,e),e===un&&(this.tfm.zOrigin=o.zOrigin);else return ti.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(_t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(un,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},L_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},yy=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Mh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=yh(),(!s||!s.isStart)&&!n[_t]&&(L_(n),r.zOrigin&&n[un]&&(n[un]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},D_=function(e,t){var n={target:e,props:[],revert:yy,save:xy};return e._gsap||pn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},I_,xu=function(e,t){var n=Gi.createElementNS?Gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gi.createElement(e);return n&&n.style?n:Gi.createElement(e)},ni=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Mh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Fs(t)||t,1)||""},kf="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,n){var r=t||Mr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(kf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?kf[o]:"")+e},yu=function(){ay()&&window.document&&(Ff=window,Gi=Ff.document,Es=Gi.documentElement,Mr=xu("div")||{style:{}},xu("div"),_t=Fs(_t),un=_t+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",I_=!!Fs("perspective"),yh=pn.core.reverting,xh=1)},ic=function i(e){var t=xu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Es.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Es.removeChild(t),this.style.cssText=s,o},Hf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},N_=function(e){var t;try{t=e.getBBox()}catch{t=ic.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ic||(t=ic.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Hf(e,["x","cx","x1"])||0,y:+Hf(e,["y","cy","y1"])||0,width:0,height:0}:t},U_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&N_(e))},Ir=function(e,t){if(t){var n=e.style,r;t in Ei&&t!==un&&(t=_t),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Mh,"-$1").toLowerCase())):n.removeAttribute(t)}},Wi=function(e,t,n,r,s,o){var a=new cn(e._pt,t,n,0,1,o?P_:C_);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Vf={deg:1,rad:1,turn:1},My={grid:1,flex:1},nr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Mr.style,l=ly.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,p,m;if(r===o||!s||Vf[r]||Vf[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),m=e.getCTM&&U_(e),(d||o==="%")&&(Ei[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Et(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Gi||!_.appendChild)&&(_=Gi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===yn.time&&!p.uncache)return Et(s/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+r,g=e[u],S?e.style[t]=S:Ir(e,t)}else(d||o==="%")&&!My[ni(_,"display")]&&(a.position=ni(e,"position")),_===e&&(a.position="static"),_.appendChild(Mr),g=Mr[u],_.removeChild(Mr),a.position="absolute";return l&&d&&(p=br(_),p.time=yn.time,p.width=_[u]),Et(f?g*s/h:g&&s?h/g*s:0)},gi=function(e,t,n,r){var s;return xh||yu(),t in ti&&t!=="transform"&&(t=ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ei[t]&&t!=="transform"?(s=ko(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cl(ni(e,un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ll[t]&&ll[t](e,t,n)||ni(e,t)||Zm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?nr(e,t,s,n)+n:s},Sy=function(e,t,n,r){if(!n||n==="none"){var s=Fs(t,e,1),o=s&&ni(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ni(e,"borderTopColor"))}var a=new cn(this._pt,e.style,t,0,1,A_),l=0,c=0,u,h,f,d,g,_,p,m,S,v,M,w;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=ni(e,t)||r,_?e.style[t]=_:Ir(e,t)),u=[n,r],__(u),n=u[0],r=u[1],f=n.match(ms)||[],w=r.match(ms)||[],w.length){for(;h=ms.exec(r);)p=h[0],S=r.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),p.charAt(1)==="="&&(p=Ts(d,p)+M),m=parseFloat(p),v=p.substr((m+"").length),l=ms.lastIndex-v.length,v||(v=v||Sn.units[t]||M,l===r.length&&(r+=v,a.e+=v)),M!==v&&(d=nr(e,t,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?P_:C_;return Xm.test(r)&&(a.e=0),this._pt=a,a},Gf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ty=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Gf[n]||n,t[1]=Gf[r]||r,t.join(" ")},Ey=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ei[a]&&(l=1,a=a==="transformOrigin"?un:_t),Ir(n,a);l&&(Ir(n,_t),o&&(o.svg&&n.removeAttribute("transform"),ko(n,1),o.uncache=1,L_(r)))}},ll={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new cn(e._pt,t,n,0,0,Ey);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},zo=[1,0,0,1,0,0],O_={},F_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wf=function(e){var t=ni(e,_t);return F_(t)?zo:t.substr(7).match(Wm).map(Et)},Sh=function(e,t){var n=e._gsap||br(e),r=e.style,s=Wf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zo:s):(s===zo&&!e.offsetParent&&e!==Es&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Es.appendChild(e)),s=Wf(e),l?r.display=l:Ir(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Es.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Mu=function(e,t,n,r,s,o){var a=e._gsap,l=s||Sh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],v=t.split(" "),M=parseFloat(v[0])||0,w=parseFloat(v[1])||0,E,b,C,x;n?l!==zo&&(b=d*p-g*_)&&(C=M*(p/b)+w*(-_/b)+(_*S-p*m)/b,x=M*(-g/b)+w*(d/b)-(d*S-g*m)/b,M=C,w=x):(E=N_(e),M=E.x+(~v[0].indexOf("%")?M/100*E.width:M),w=E.y+(~(v[1]||v[0]).indexOf("%")?w/100*E.height:w)),r||r!==!1&&a.smooth?(m=M-c,S=w-u,a.xOffset=h+(m*d+S*_)-m,a.yOffset=f+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[un]="0px 0px",o&&(Wi(o,a,"xOrigin",c,M),Wi(o,a,"yOrigin",u,w),Wi(o,a,"xOffset",h,a.xOffset),Wi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+w)},ko=function(e,t){var n=e._gsap||new y_(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ni(e,un)||"0",u,h,f,d,g,_,p,m,S,v,M,w,E,b,C,x,A,F,k,$,U,z,H,Y,q,ie,oe,fe,ue,ee,le,me;return u=h=f=_=p=m=S=v=M=0,d=g=1,n.svg=!!(e.getCTM&&U_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),b=Sh(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Mu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,E=n.yOrigin||0,b!==zo&&(F=b[0],k=b[1],$=b[2],U=b[3],u=z=b[4],h=H=b[5],b.length===6?(d=Math.sqrt(F*F+k*k),g=Math.sqrt(U*U+$*$),_=F||k?Gr(k,F)*mr:0,S=$||U?Gr($,U)*mr+_:0,S&&(g*=Math.abs(Math.cos(S*bs))),n.svg&&(u-=w-(w*F+E*$),h-=E-(w*k+E*U))):(me=b[6],ee=b[7],oe=b[8],fe=b[9],ue=b[10],le=b[11],u=b[12],h=b[13],f=b[14],C=Gr(me,ue),p=C*mr,C&&(x=Math.cos(-C),A=Math.sin(-C),Y=z*x+oe*A,q=H*x+fe*A,ie=me*x+ue*A,oe=z*-A+oe*x,fe=H*-A+fe*x,ue=me*-A+ue*x,le=ee*-A+le*x,z=Y,H=q,me=ie),C=Gr(-$,ue),m=C*mr,C&&(x=Math.cos(-C),A=Math.sin(-C),Y=F*x-oe*A,q=k*x-fe*A,ie=$*x-ue*A,le=U*A+le*x,F=Y,k=q,$=ie),C=Gr(k,F),_=C*mr,C&&(x=Math.cos(C),A=Math.sin(C),Y=F*x+k*A,q=z*x+H*A,k=k*x-F*A,H=H*x-z*A,F=Y,z=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Et(Math.sqrt(F*F+k*k+$*$)),g=Et(Math.sqrt(H*H+me*me)),C=Gr(z,H),S=Math.abs(C)>2e-4?C*mr:0,M=le?1/(le<0?-le:le):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!F_(ni(e,_t)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Et(d),n.scaleY=Et(g),n.rotation=Et(_)+a,n.rotationX=Et(p)+a,n.rotationY=Et(m)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[un]=cl(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?Ay:I_?B_:by,n.uncache=0,n},cl=function(e){return(e=e.split(" "))[0]+" "+e[1]},rc=function(e,t,n){var r=Wt(t);return Et(parseFloat(t)+parseFloat(nr(e,"x",n+"px",r)))+r},by=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,B_(e,t)},lr="0deg",to="0px",cr=") ",B_=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,M="",w=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==lr||u!==lr)){var E=parseFloat(u)*bs,b=Math.sin(E),C=Math.cos(E),x;E=parseFloat(h)*bs,x=Math.cos(E),o=rc(S,o,b*x*-v),a=rc(S,a,-Math.sin(E)*-v),l=rc(S,l,C*x*-v+v)}p!==to&&(M+="perspective("+p+cr),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(w||o!==to||a!==to||l!==to)&&(M+=l!==to||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+cr),c!==lr&&(M+="rotate("+c+cr),u!==lr&&(M+="rotateY("+u+cr),h!==lr&&(M+="rotateX("+h+cr),(f!==lr||d!==lr)&&(M+="skew("+f+", "+d+cr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+cr),S.style[_t]=M||"translate(0, 0)"},Ay=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(o),M=parseFloat(a),w,E,b,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,w=Math.cos(l)*h,E=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=bs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),b*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),w*=x,E*=x)),w=Et(w),E=Et(E),b=Et(b),C=Et(C)):(w=h,C=f,E=b=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=nr(d,"x",o,"px"),M=nr(d,"y",a,"px")),(g||_||p||m)&&(v=Et(v+g-(g*w+_*b)+p),M=Et(M+_-(g*E+_*C)+m)),(r||s)&&(x=d.getBBox(),v=Et(v+r/100*x.width),M=Et(M+s/100*x.height)),x="matrix("+w+","+E+","+b+","+C+","+v+","+M+")",d.setAttribute("transform",x),S&&(d.style[_t]=x)},wy=function(e,t,n,r,s){var o=360,a=Ot(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?mr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*zf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*zf)%o-~~(c/o)*o)),e._pt=f=new cn(e._pt,t,n,r,c,uy),f.e=u,f.u="deg",e._props.push(n),f},Xf=function(e,t){for(var n in t)e[n]=t[n];return e},Ry=function(e,t,n){var r=Xf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[_t]=t,a=ko(n,1),Ir(n,_t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_t],o[_t]=t,a=ko(n,1),o[_t]=c);for(l in Ei)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Wt(c),g=Wt(u),h=d!==g?nr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new cn(e._pt,a,l,h,f-h,vu),e._pt.u=g||0,e._props.push(l));Xf(a,r)};ln("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});ll[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return gi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var z_={name:"css",register:yu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,S,v,M,w,E,b,C;xh||yu(),this.styles=this.styles||D_(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(vn[_]&&M_(_,t,n,r,e,s)))){if(d=typeof u,g=ll[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Oo(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=Wt(c),m=Wt(u)),m?p!==m&&(c=nr(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Ot(c)&&~c.indexOf("random(")&&(c=Oo(c)),Wt(c+"")||c==="auto"||(c+=Sn.units[_]||Wt(gi(e,_))||""),(c+"").charAt(1)==="="&&(c=gi(e,_))):c=gi(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in ti&&(_==="autoAlpha"&&(f===1&&gi(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Wi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ei,v){if(this.styles.save(_),M||(w=e._gsap,w.renderTransform&&!t.parseTransform||ko(e,t.parseTransform),E=t.smoothOrigin!==!1&&w.smooth,M=this._pt=new cn(this._pt,a,_t,0,1,w.renderTransform,w,0,-1),M.dep=1),_==="scale")this._pt=new cn(this._pt,w,"scaleY",w.scaleY,(S?Ts(w.scaleY,S+h):h)-w.scaleY||0,vu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(un,0,a[un]),u=Ty(u),w.svg?Mu(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&Wi(this,w,"zOrigin",w.zOrigin,m),Wi(this,a,_,cl(c),cl(u)));continue}else if(_==="svgOrigin"){Mu(e,u,1,E,0,this);continue}else if(_ in O_){wy(this,w,_,f,S?Ts(f,S+u):u);continue}else if(_==="smoothOrigin"){Wi(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){Ry(this,u,e);continue}}else _ in a||(_=Fs(_)||_);if(v||(h||h===0)&&(f||f===0)&&!cy.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=Wt(u)||(_ in Sn.units?Sn.units[_]:p),p!==m&&(f=nr(e,_,c,m)),this._pt=new cn(this._pt,v?w:a,_,f,(S?Ts(f,S+h):h)-f,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?fy:vu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=hy);else if(_ in a)Sy.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,r,s);else if(_!=="parseTransform"){uh(_,u);continue}v||(_ in a?C.push(_,0,a[_]):C.push(_,1,c||e[_])),o.push(_)}}b&&w_(this)},render:function(e,t){if(t.tween._time||!yh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:ti,getSetter:function(e,t,n){var r=ti[t];return r&&r.indexOf(",")<0&&(t=r),t in Ei&&t!==un&&(e._gsap.x||gi(e,"x"))?n&&Bf===n?t==="scale"?_y:my:(Bf=n||{})&&(t==="scale"?gy:vy):e.style&&!ah(e.style[t])?dy:~t.indexOf("-")?py:gh(e,t)},core:{_removeProperty:Ir,_getMatrix:Sh}};pn.utils.checkPrefix=Fs;pn.core.getStyleSaver=D_;(function(i,e,t,n){var r=ln(i+","+e+","+t,function(s){Ei[s]=1});ln(e,function(s){Sn.units[s]="deg",O_[s]=1}),ti[r[13]]=i+","+e,ln(n,function(s){var o=s.split(":");ti[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Sn.units[i]="px"});pn.registerPlugin(z_);var Hn=pn.registerPlugin(z_)||pn;Hn.core.Tween;const Cy="/three_smart_city/assets/bar-KtdPHI_6.svg",Py="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1648734659753'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3601'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e@font-face%20{%20font-family:%20feedback-iconfont;%20src:%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944')%20format('woff2'),%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944')%20format('woff'),%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944')%20format('truetype');%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M724.958956%20608.283614a94.661552%2094.661552%200%200%201-7.967186%206.225787c-1.240605%200.933299-2.515354%201.821071-3.778722%202.731606-181.151047%20128.021298-199.57801%20277.485708-201.148685%20317.219204%200-0.409741%200-0.751192-0.079671-1.13817-10.869518-161.415189-141.041956-272.022495-188.036973-306.873243a341.45083%20341.45083%200%201%201%20401.011237-18.165184zM512.030218%20944.680972s-0.182107-3.676287%200.079672-10.243525C525.244366%201129.73594%20512.030218%20944.680972%20512.030218%20944.680972z'%20fill='%2342A0F9'%20p-id='3602'%3e%3c/path%3e%3cpath%20d='M512.030218%200.000341a341.38254%20341.38254%200%200%201%20212.928738%20608.283273%2094.661552%2094.661552%200%200%201-7.967186%206.225787c-1.240605%200.933299-2.515354%201.821071-3.778722%202.731606a629.76053%20629.76053%200%200%200-33.997121%2025.813683L273.959318%2096.744743A340.244371%20340.244371%200%200%201%20512.030218%200.000341z'%20fill='%23FFFFFF'%20opacity='.2'%20p-id='3603'%3e%3c/path%3e%3cpath%20d='M516.321117%20126.223332c20.48705-8.820813%2066.36666%2042.31714%2089.517026%2059.355536%2026.712837%2019.656186%2050.807884%2042.203323%2077.031307%2061.461149a117.800536%20117.800536%200%200%201%2027.06567%2022.524373c10.061418%2014.796203%206.24855%2045.720266%206.24855%2069.58768V459.820793a392.554638%20392.554638%200%200%201-2.08285%2067.538974%2031.231369%2031.231369%200%200%201-8.3314%204.09741c-11.063007%203.255165-83.211567%202.048705-104.085595%202.048705H328.955665c-9.936219-4.359189-10.323197-23.286947-10.391487-45.845465V316.536643a136.887638%20136.887638%200%200%201%204.1657-42.98866c7.967186-20.62363%2036.637674-32.927242%2054.131338-45.025982%2031.072026-21.500021%2060.527851-48.087659%2091.599876-69.599061%2015.78641-10.903663%2031.754927-21.36344%2047.860025-32.699608z%20m33.314219%20122.808482l-99.931276%2096.209462v14.318172c20.48705%2018.392818%2038.982303%2037.775844%2058.285657%2057.318212-0.295924%2027.190868-17.971695%2036.853926-20.817119%2061.46115H489.26683c28.795687-29.672077%2065.433361-53.732979%2095.765576-81.868528v-10.243525c-17.892024-24.038138-52.526519-34.748313-54.131338-69.587679%209.754112-12.701971%2018.904994-49.885966%2022.91135-67.550356H549.58981z'%20fill='%23FFFFFF'%20p-id='3604'%3e%3c/path%3e%3c/svg%3e",Ly="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1648734796832'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4623'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e@font-face%20{%20font-family:%20feedback-iconfont;%20src:%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944')%20format('woff2'),%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944')%20format('woff'),%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944')%20format('truetype');%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M355.9%20898.1c80.3%200%20263.5%2029.8%20263.5%2029.8%20478.8-187.6%20177-595.2%2065.9-658.8-7.2-4.1-25.1-13.5-28.8-16.6%208.4%207.1%205.5%2014.2%2016.9%2032%2037.1%2058.3%203.7%2078.2%205.1%20116.8%200.1%202.6%200.4%205.8%200.8%208.2-19.3-107.6-72.9-183.8-129.9-233.7-60-52.5-123.1-75.9-123.1-75.9%201.1%208.9%201.8%2021.5%203.6%2029.7%2033.3%20145.7-42%20245.6-122.6%20344.3-3-50.3-62.8-121.1-62.4-118.5%201.1%208.7-5.1%2040-6.5%2045.9-17.3%2071.6-41.2%2095-71.8%20186.2-40.2%20120%2019.2%20214.7%20189.3%20310.6z%20m0%200'%20fill='%232280BF'%20p-id='4624'%3e%3c/path%3e%3cpath%20d='M339.4%20929.9c80.3%200%20175%200.1%20278.9%200.1%20432.6-244.8%20107.6-611%2051-652.3%2018.8%2041.3%2022.5%20111.1-15.7%20145-64.5-244.6-224-294.7-224-294.7%2018.8%20126.1-68.4%20264.1-152.5%20367.1-3-50.3-6.1-85-32.5-133.1-5.9%2091.4-75.7%20165.9-94.7%20257.4-25.6%20124%2019.2%20214.7%20189.3%20310.6l0.2-0.1z%20m0%200'%20fill='%234EB3FF'%20p-id='4625'%3e%3c/path%3e%3c/svg%3e",Dy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1648735010984'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6937'%20data-spm-anchor-id='a313x.7781069.0.i22'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e@font-face%20{%20font-family:%20feedback-iconfont;%20src:%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944')%20format('woff2'),%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944')%20format('woff'),%20url('//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944')%20format('truetype');%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M514.886892%20965.584738c-122.848492%200-239.466338-79.600246-346.805169-236.77243-15.336369-22.453169-9.562585-53.086523%2012.890585-68.418954%2022.457108-15.336369%2053.086523-9.558646%2068.418954%2012.886646%2089.844185%20131.548554%20181.381908%20196.678892%20271.694769%20193.736862%20148.196431-4.907323%20258.5088-189.054031%20259.603692-190.916924%2013.800369-23.390523%2043.961108-31.224123%2067.363446-17.467076%2023.414154%2013.757046%2031.287138%2043.842954%2017.569477%2067.2768-5.553231%209.487754-138.346338%20232.448-340.806892%20239.493907-3.308308%200.118154-6.628431%200.181169-9.928862%200.181169z'%20fill='%231296db'%20p-id='6938'%20data-spm-anchor-id='a313x.7781069.0.i23'%20class='selected'%3e%3c/path%3e%3cpath%20d='M874.338462%20608.492308h-108.307693c-27.1872%200-49.230769-22.043569-49.230769-49.23077s22.043569-49.230769%2049.230769-49.230769h77.879139l56.694154-113.384369-395.795693-240.183138-375.969477%20240.4864L178.002708%20510.030769H620.307692c27.1872%200%2049.230769%2022.043569%2049.23077%2049.230769s-22.043569%2049.230769-49.23077%2049.23077H145.723077a49.226831%2049.226831%200%200%201-45.146585-29.601477l-78.76923-181.169231a49.230769%2049.230769%200%200%201%2018.621046-61.101292l437.16923-279.63077a49.215015%2049.215015%200%200%201%2052.066462-0.6144l460.8%20279.63077a49.234708%2049.234708%200%200%201%2018.495015%2064.106338l-90.584615%20181.169231A49.246523%2049.246523%200%200%201%20874.338462%20608.492308z'%20fill='%231296db'%20p-id='6939'%20data-spm-anchor-id='a313x.7781069.0.i21'%20class='selected'%3e%3c/path%3e%3cpath%20d='M505.623631%20209.8176l43.094646%2087.315692L645.076677%20311.138462l-69.718646%2067.969969%2016.450954%2095.972431-86.185354-45.312-86.193231%2045.312%2016.458831-95.972431L366.166646%20311.138462l96.3584-14.00517z'%20fill='%23eb491b'%20p-id='6940'%20data-spm-anchor-id='a313x.7781069.0.i20'%20class=''%3e%3c/path%3e%3c/svg%3e";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="160",Wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,Yf=1,Ny=2,k_=1,Uy=2,mi=3,bi=0,hn=1,Cn=2,Zi=0,As=1,Su=2,qf=3,jf=4,Oy=5,xr=100,Fy=101,By=102,Kf=103,$f=104,zy=200,ky=201,Hy=202,Vy=203,Tu=204,Eu=205,Gy=206,Wy=207,Xy=208,Yy=209,qy=210,jy=211,Ky=212,$y=213,Zy=214,Jy=0,Qy=1,eM=2,ul=3,tM=4,nM=5,iM=6,rM=7,H_=0,sM=1,oM=2,Ji=0,aM=1,lM=2,cM=3,uM=4,hM=5,fM=6,Zf="attached",dM="detached",V_=300,Bs=301,zs=302,bu=303,Au=304,Dl=306,Nr=1e3,Pn=1001,Ho=1002,Nt=1003,wu=1004,Ka=1005,on=1006,G_=1007,Ur=1008,Qi=1009,pM=1010,mM=1011,Eh=1012,W_=1013,Xi=1014,vi=1015,Vo=1016,X_=1017,Y_=1018,Cr=1020,_M=1021,Ln=1023,gM=1024,vM=1025,Pr=1026,ks=1027,xM=1028,q_=1029,yM=1030,j_=1031,K_=1033,sc=33776,oc=33777,ac=33778,lc=33779,Jf=35840,Qf=35841,ed=35842,td=35843,$_=36196,nd=37492,id=37496,rd=37808,sd=37809,od=37810,ad=37811,ld=37812,cd=37813,ud=37814,hd=37815,fd=37816,dd=37817,pd=37818,md=37819,_d=37820,gd=37821,cc=36492,vd=36494,xd=36495,MM=36283,yd=36284,Md=36285,Sd=36286,Go=2300,Hs=2301,uc=2302,Td=2400,Ed=2401,bd=2402,SM=2500,TM=0,Z_=1,Ru=2,J_=3e3,Lr=3001,EM=3200,bM=3201,Q_=0,AM=1,Dn="",mt="srgb",Ft="srgb-linear",bh="display-p3",Il="display-p3-linear",hl="linear",ct="srgb",fl="rec709",dl="p3",Yr=7680,Ad=519,wM=512,RM=513,CM=514,eg=515,PM=516,LM=517,DM=518,IM=519,Cu=35044,wd="300 es",Pu=1035,xi=2e3,pl=2001;class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rd=1234567;const ws=Math.PI/180,Vs=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Ah(i,e){return(i%e+e)%e}function NM(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function UM(i,e,t){return i!==e?(t-i)/(e-i):0}function Eo(i,e,t){return(1-t)*i+t*e}function OM(i,e,t,n){return Eo(i,e,1-Math.exp(-t*n))}function FM(i,e=1){return e-Math.abs(Ah(i,e*2)-e)}function BM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function HM(i,e){return i+Math.random()*(e-i)}function VM(i){return i*(.5-Math.random())}function GM(i){i!==void 0&&(Rd=i);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WM(i){return i*ws}function XM(i){return i*Vs}function Lu(i){return(i&i-1)===0&&i!==0}function YM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ml(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qM(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const tg={DEG2RAD:ws,RAD2DEG:Vs,generateUUID:Wn,clamp:Rt,euclideanModulo:Ah,mapLinear:NM,inverseLerp:UM,lerp:Eo,damp:OM,pingpong:FM,smoothstep:BM,smootherstep:zM,randInt:kM,randFloat:HM,randFloatSpread:VM,seededRandom:GM,degToRad:WM,radToDeg:XM,isPowerOfTwo:Lu,ceilPowerOfTwo:YM,floorPowerOfTwo:ml,setQuaternionFromProperEuler:qM,normalize:st,denormalize:Qn};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],p=r[3],m=r[6],S=r[1],v=r[4],M=r[7],w=r[2],E=r[5],b=r[8];return s[0]=o*_+a*S+l*w,s[3]=o*p+a*v+l*E,s[6]=o*m+a*M+l*b,s[1]=c*_+u*S+h*w,s[4]=c*p+u*v+h*E,s[7]=c*m+u*M+h*b,s[2]=f*_+d*S+g*w,s[5]=f*p+d*v+g*E,s[8]=f*m+d*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Ke;function ng(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jM(){const i=Wo("canvas");return i.style.display="block",i}const Cd={};function bo(i){i in Cd||(Cd[i]=!0,console.warn(i))}const Pd=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ld=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[Ft]:{transfer:hl,primaries:fl,toReference:i=>i,fromReference:i=>i},[mt]:{transfer:ct,primaries:fl,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Il]:{transfer:hl,primaries:dl,toReference:i=>i.applyMatrix3(Ld),fromReference:i=>i.applyMatrix3(Pd)},[bh]:{transfer:ct,primaries:dl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ld),fromReference:i=>i.applyMatrix3(Pd).convertLinearToSRGB()}},KM=new Set([Ft,Il]),it={enabled:!0,_workingColorSpace:Ft,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!KM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=sa[e].toReference,r=sa[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return sa[i].primaries},getTransfer:function(i){return i===Dn?hl:sa[i].transfer}};function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qr;class ig{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=Wo("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rs(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rs(t[n]/255)*255):t[n]=Rs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $M=0;class rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Wn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ig.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;class Bt extends Hr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Pn,r=Pn,s=on,o=Ur,a=Ln,l=Qi,c=Bt.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Wn(),this.name="",this.source=new rg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Lr?mt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?Lr:J_}set encoding(e){bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?mt:Dn}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=V_;Bt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(d+1)/2,w=(m+1)/2,E=(u+f)/4,b=(h+_)/4,C=(g+p)/4;return v>M&&v>w?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=E/n,s=b/n):M>w?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=C/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=b/s,r=C/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JM extends Hr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Lr?mt:Dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends JM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sg extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QM extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const w=Math.sqrt(v),E=Math.atan2(w,m*S);p=Math.sin(p*E)/w,a=Math.sin(a*E)/w}const M=a*S;if(l=l*p+f*M,c=c*p+d*M,u=u*p+g*M,h=h*p+_*M,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new I,Dd=new si;class wi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),aa.subVectors(this.max,no),jr.subVectors(e.a,no),Kr.subVectors(e.b,no),$r.subVectors(e.c,no),Li.subVectors(Kr,jr),Di.subVectors($r,Kr),ur.subVectors(jr,$r);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ur.z,ur.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ur.z,0,-ur.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ur.y,ur.x,0];return!mc(t,jr,Kr,$r,aa)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,jr,Kr,$r,aa))?!1:(la.crossVectors(Li,Di),t=[la.x,la.y,la.z],mc(t,jr,Kr,$r,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,oa=new wi,jr=new I,Kr=new I,$r=new I,Li=new I,Di=new I,ur=new I,no=new I,aa=new I,la=new I,hr=new I;function mc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){hr.fromArray(i,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const eS=new wi,io=new I,_c=new I;class oi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):eS.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(io,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(_c)),this.expandByPoint(io.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new I,gc=new I,ca=new I,Ii=new I,vc=new I,ua=new I,xc=new I;class js{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gc.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(gc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=Ii.dot(this.direction),l=-Ii.dot(ca),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(gc).addScaledVector(ca,f),d}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){vc.subVectors(t,e),ua.subVectors(n,e),xc.crossVectors(vc,ua);let o=this.direction.dot(xc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(Ii,ua));if(l<0)return null;const c=a*this.direction.dot(vc.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(xc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,p){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,t,n){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ni.crossVectors(n,_n),Ni.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ni.crossVectors(n,_n)),Ni.normalize(),ha.crossVectors(_n,Ni),r[0]=Ni.x,r[4]=ha.x,r[8]=_n.x,r[1]=Ni.y,r[5]=ha.y,r[9]=_n.y,r[2]=Ni.z,r[6]=ha.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],v=n[7],M=n[11],w=n[15],E=r[0],b=r[4],C=r[8],x=r[12],A=r[1],F=r[5],k=r[9],$=r[13],U=r[2],z=r[6],H=r[10],Y=r[14],q=r[3],ie=r[7],oe=r[11],fe=r[15];return s[0]=o*E+a*A+l*U+c*q,s[4]=o*b+a*F+l*z+c*ie,s[8]=o*C+a*k+l*H+c*oe,s[12]=o*x+a*$+l*Y+c*fe,s[1]=u*E+h*A+f*U+d*q,s[5]=u*b+h*F+f*z+d*ie,s[9]=u*C+h*k+f*H+d*oe,s[13]=u*x+h*$+f*Y+d*fe,s[2]=g*E+_*A+p*U+m*q,s[6]=g*b+_*F+p*z+m*ie,s[10]=g*C+_*k+p*H+m*oe,s[14]=g*x+_*$+p*Y+m*fe,s[3]=S*E+v*A+M*U+w*q,s[7]=S*b+v*F+M*z+w*ie,s[11]=S*C+v*k+M*H+w*oe,s[15]=S*x+v*$+M*Y+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,v=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,E=t*S+n*v+r*M+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=S*b,e[1]=(_*f*s-h*p*s-_*r*d+n*p*d+h*r*m-n*f*m)*b,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*m+n*l*m)*b,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*b,e[4]=v*b,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*m+t*f*m)*b,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*b,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*b,e[8]=M*b,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*m-t*h*m)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=w*b,e[13]=(u*_*r-g*h*r+g*n*f-t*_*f-u*n*p+t*h*p)*b,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*b,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,S=l*c,v=l*u,M=l*h,w=n.x,E=n.y,b=n.z;return r[0]=(1-(_+m))*w,r[1]=(d+M)*w,r[2]=(g-v)*w,r[3]=0,r[4]=(d-M)*E,r[5]=(1-(f+m))*E,r[6]=(p+S)*E,r[7]=0,r[8]=(g+v)*b,r[9]=(p-S)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),a=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=xi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,g;if(a===xi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===pl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=xi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,d=(n+r)*u;let g,_;if(a===xi)g=(o+s)*h,_=-2*h;else if(a===pl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new I,Bn=new Ye,tS=new I(0,0,0),nS=new I(1,1,1),Ni=new I,ha=new I,_n=new I,Id=new Ye,Nd=new si;class Nl{constructor(e=0,t=0,n=0,r=Nl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nl.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const Ud=new I,Jr=new si,hi=new Ye,fa=new I,ro=new I,rS=new I,sS=new si,Od=new I(1,0,0),Fd=new I(0,1,0),Bd=new I(0,0,1),oS={type:"added"},aS={type:"removed"};class ft extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new Nl,n=new si,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(Fd,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(Fd,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ro,fa,this.up):hi.lookAt(fa,ro,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(hi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,rS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,sS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new I,fi=new I,yc=new I,di=new I,Qr=new I,es=new I,zd=new I,Mc=new I,Sc=new I,Tc=new I;let da=!1;class xn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zn.subVectors(r,t),fi.subVectors(n,t),yc.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(fi),l=zn.dot(yc),c=fi.dot(fi),u=fi.dot(yc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,n,r,s,o,a,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),fi.subVectors(e,t),zn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,n),es.subVectors(s,n),Mc.subVectors(e,n);const l=Qr.dot(Mc),c=es.dot(Mc);if(l<=0&&c<=0)return t.copy(n);Sc.subVectors(e,r);const u=Qr.dot(Sc),h=es.dot(Sc);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Qr,o);Tc.subVectors(e,s);const d=Qr.dot(Tc),g=es.dot(Tc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(es,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return zd.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(zd,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(Qr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Ah(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ec(o,s,e+1/3),this.g=Ec(o,s,e),this.b=Ec(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=og[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=fc(e.r),this.g=fc(e.g),this.b=fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return it.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Rt(Vt.r*255,0,255))*65536+Math.round(Rt(Vt.g*255,0,255))*256+Math.round(Rt(Vt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=mt){it.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(pa);const n=Eo(Ui.h,pa.h,t),r=Eo(Ui.s,pa.s,t),s=Eo(Ui.l,pa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Fe;Fe.NAMES=og;let lS=0;class Xn extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=As,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Eu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tu&&(n.blendSrc=this.blendSrc),this.blendDst!==Eu&&(n.blendDst=this.blendDst),this.blendEquation!==xr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ul&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yi extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new I,ma=new xe;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class ag extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lg extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cS=0;const bn=new Ye,bc=new ft,ts=new I,gn=new wi,so=new wi,It=new I;class rn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ng(e)?lg:ag)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];so.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(gn.min,so.min),gn.expandByPoint(It),It.addVectors(gn.max,so.max),gn.expandByPoint(It)):(gn.expandByPoint(so.min),gn.expandByPoint(so.max))}gn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),It.add(ts)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new I,u[A]=new I;const h=new I,f=new I,d=new I,g=new xe,_=new xe,p=new xe,m=new I,S=new I;function v(A,F,k){h.fromArray(r,A*3),f.fromArray(r,F*3),d.fromArray(r,k*3),g.fromArray(o,A*2),_.fromArray(o,F*2),p.fromArray(o,k*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const $=1/(_.x*p.y-p.x*_.y);isFinite($)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar($),S.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar($),c[A].add(m),c[F].add(m),c[k].add(m),u[A].add(S),u[F].add(S),u[k].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,F=M.length;A<F;++A){const k=M[A],$=k.start,U=k.count;for(let z=$,H=$+U;z<H;z+=3)v(n[z+0],n[z+1],n[z+2])}const w=new I,E=new I,b=new I,C=new I;function x(A){b.fromArray(s,A*3),C.copy(b);const F=c[A];w.copy(F),w.sub(b.multiplyScalar(b.dot(F))).normalize(),E.crossVectors(C,F);const $=E.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=$}for(let A=0,F=M.length;A<F;++A){const k=M[A],$=k.start,U=k.count;for(let z=$,H=$+U;z<H;z+=3)x(n[z+0]),x(n[z+1]),x(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kd=new Ye,fr=new js,_a=new oi,Hd=new I,ns=new I,is=new I,rs=new I,Ac=new I,ga=new I,va=new xe,xa=new xe,ya=new xe,Vd=new I,Gd=new I,Wd=new I,Ma=new I,Sa=new I;class nn extends ft{constructor(e=new rn,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ac.fromBufferAttribute(h,e),o?ga.addScaledVector(Ac,u):ga.addScaledVector(Ac.sub(t),u))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(_a.containsPoint(fr.origin)===!1&&(fr.intersectSphere(_a,Hd)===null||fr.origin.distanceToSquared(Hd)>(e.far-e.near)**2))&&(kd.copy(s).invert(),fr.copy(e.ray).applyMatrix4(kd),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,w=v;M<w;M+=3){const E=a.getX(M),b=a.getX(M+1),C=a.getX(M+2);r=Ta(this,m,e,n,c,u,h,E,b,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=Ta(this,o,e,n,c,u,h,S,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,w=v;M<w;M+=3){const E=M,b=M+1,C=M+2;r=Ta(this,m,e,n,c,u,h,E,b,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=p,v=p+1,M=p+2;r=Ta(this,o,e,n,c,u,h,S,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function uS(i,e,t,n,r,s,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===bi,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:i}}function Ta(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ns),i.getVertexPosition(l,is),i.getVertexPosition(c,rs);const u=uS(i,e,t,n,ns,is,rs,Ma);if(u){r&&(va.fromBufferAttribute(r,a),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,c),u.uv=xn.getInterpolation(Ma,ns,is,rs,va,xa,ya,new xe)),s&&(va.fromBufferAttribute(s,a),xa.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),u.uv1=xn.getInterpolation(Ma,ns,is,rs,va,xa,ya,new xe),u.uv2=u.uv1),o&&(Vd.fromBufferAttribute(o,a),Gd.fromBufferAttribute(o,l),Wd.fromBufferAttribute(o,c),u.normal=xn.getInterpolation(Ma,ns,is,rs,Vd,Gd,Wd,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};xn.getNormal(ns,is,rs,h.normal),u.face=h}return u}class jo extends rn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function g(_,p,m,S,v,M,w,E,b,C,x){const A=M/b,F=w/C,k=M/2,$=w/2,U=E/2,z=b+1,H=C+1;let Y=0,q=0;const ie=new I;for(let oe=0;oe<H;oe++){const fe=oe*F-$;for(let ue=0;ue<z;ue++){const ee=ue*A-k;ie[_]=ee*S,ie[p]=fe*v,ie[m]=U,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[p]=0,ie[m]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(ue/b),h.push(1-oe/C),Y+=1}}for(let oe=0;oe<C;oe++)for(let fe=0;fe<b;fe++){const ue=f+fe+z*oe,ee=f+fe+z*(oe+1),le=f+(fe+1)+z*(oe+1),me=f+(fe+1)+z*oe;l.push(ue,ee,me),l.push(ee,le,me),q+=6}a.addGroup(d,q,x),d+=q,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const r in n)e[r]=n[r]}return e}function hS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cg(i){return i.getRenderTarget()===null?i.outputColorSpace:it.workingColorSpace}const fS={clone:Gs,merge:Jt};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=hS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ug extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends ug{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,os=1;class mS extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(ss,os,e,t);r.layers=this.layers,this.add(r);const s=new Qt(ss,os,e,t);s.layers=this.layers,this.add(s);const o=new Qt(ss,os,e,t);o.layers=this.layers,this.add(o);const a=new Qt(ss,os,e,t);a.layers=this.layers,this.add(a);const l=new Qt(ss,os,e,t);l.layers=this.layers,this.add(l);const c=new Qt(ss,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rh extends Bt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _S extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Lr?mt:Dn),this.texture=new Rh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new jo(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Zi});s.uniforms.tEquirect.value=t;const o=new nn(r,s),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=on),new mS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const wc=new I,gS=new I,vS=new Ke;class ki{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=wc.subVectors(n,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vS.getNormalMatrix(e),r=this.coplanarPoint(wc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new oi,Ea=new I;class Ch{constructor(e=new ki,t=new ki,n=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],S=r[13],v=r[14],M=r[15];if(n[0].setComponents(l-s,f-c,p-d,M-m).normalize(),n[1].setComponents(l+s,f+c,p+d,M+m).normalize(),n[2].setComponents(l+o,f+u,p+g,M+S).normalize(),n[3].setComponents(l-o,f-u,p-g,M-S).normalize(),n[4].setComponents(l-a,f-h,p-_,M-v).normalize(),t===xi)n[5].setComponents(l+a,f+h,p+_,M+v).normalize();else if(t===pl)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function xS(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),d.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?i.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):i.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Ul extends rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-S,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,M=S+c*(m+1),w=S+1+c*(m+1),E=S+1+c*m;d.push(v,M,E),d.push(M,w,E)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$S="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ET=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,UT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,OT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,FT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:yS,alphahash_pars_fragment:MS,alphamap_fragment:SS,alphamap_pars_fragment:TS,alphatest_fragment:ES,alphatest_pars_fragment:bS,aomap_fragment:AS,aomap_pars_fragment:wS,batching_pars_vertex:RS,batching_vertex:CS,begin_vertex:PS,beginnormal_vertex:LS,bsdfs:DS,iridescence_fragment:IS,bumpmap_pars_fragment:NS,clipping_planes_fragment:US,clipping_planes_pars_fragment:OS,clipping_planes_pars_vertex:FS,clipping_planes_vertex:BS,color_fragment:zS,color_pars_fragment:kS,color_pars_vertex:HS,color_vertex:VS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:YS,displacementmap_vertex:qS,emissivemap_fragment:jS,emissivemap_pars_fragment:KS,colorspace_fragment:$S,colorspace_pars_fragment:ZS,envmap_fragment:JS,envmap_common_pars_fragment:QS,envmap_pars_fragment:eT,envmap_pars_vertex:tT,envmap_physical_pars_fragment:dT,envmap_vertex:nT,fog_vertex:iT,fog_pars_vertex:rT,fog_fragment:sT,fog_pars_fragment:oT,gradientmap_pars_fragment:aT,lightmap_fragment:lT,lightmap_pars_fragment:cT,lights_lambert_fragment:uT,lights_lambert_pars_fragment:hT,lights_pars_begin:fT,lights_toon_fragment:pT,lights_toon_pars_fragment:mT,lights_phong_fragment:_T,lights_phong_pars_fragment:gT,lights_physical_fragment:vT,lights_physical_pars_fragment:xT,lights_fragment_begin:yT,lights_fragment_maps:MT,lights_fragment_end:ST,logdepthbuf_fragment:TT,logdepthbuf_pars_fragment:ET,logdepthbuf_pars_vertex:bT,logdepthbuf_vertex:AT,map_fragment:wT,map_pars_fragment:RT,map_particle_fragment:CT,map_particle_pars_fragment:PT,metalnessmap_fragment:LT,metalnessmap_pars_fragment:DT,morphcolor_vertex:IT,morphnormal_vertex:NT,morphtarget_pars_vertex:UT,morphtarget_vertex:OT,normal_fragment_begin:FT,normal_fragment_maps:BT,normal_pars_fragment:zT,normal_pars_vertex:kT,normal_vertex:HT,normalmap_pars_fragment:VT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:WT,clearcoat_pars_fragment:XT,iridescence_pars_fragment:YT,opaque_fragment:qT,packing:jT,premultiplied_alpha_fragment:KT,project_vertex:$T,dithering_fragment:ZT,dithering_pars_fragment:JT,roughnessmap_fragment:QT,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:aE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:hE,tonemapping_pars_fragment:fE,transmission_fragment:dE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:_E,uv_vertex:gE,worldpos_vertex:vE,background_vert:xE,background_frag:yE,backgroundCube_vert:ME,backgroundCube_frag:SE,cube_vert:TE,cube_frag:EE,depth_vert:bE,depth_frag:AE,distanceRGBA_vert:wE,distanceRGBA_frag:RE,equirect_vert:CE,equirect_frag:PE,linedashed_vert:LE,linedashed_frag:DE,meshbasic_vert:IE,meshbasic_frag:NE,meshlambert_vert:UE,meshlambert_frag:OE,meshmatcap_vert:FE,meshmatcap_frag:BE,meshnormal_vert:zE,meshnormal_frag:kE,meshphong_vert:HE,meshphong_frag:VE,meshphysical_vert:GE,meshphysical_frag:WE,meshtoon_vert:XE,meshtoon_frag:YE,points_vert:qE,points_frag:jE,shadow_vert:KE,shadow_frag:$E,sprite_vert:ZE,sprite_frag:JE},ge={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},$n={basic:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Jt([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Jt([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Jt([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Jt([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Jt([ge.lights,ge.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};$n.physical={uniforms:Jt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ba={r:0,b:0,g:0};function QE(i,e,t,n,r,s,o){const a=new Fe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Dl)?(u===void 0&&(u=new nn(new jo(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Gs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=it.getTransfer(v.colorSpace)!==ct,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new nn(new Ul(2,2),new ii({name:"BackgroundMaterial",uniforms:Gs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=it.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(ba,cg(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function eb(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(U,z,H,Y,q){let ie=!1;if(o){const oe=_(Y,H,z);c!==oe&&(c=oe,d(c.object)),ie=m(U,Y,H,q),ie&&S(U,Y,H,q)}else{const oe=z.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==oe)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=oe,ie=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,C(U,z,H,Y),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(U){return n.isWebGL2?i.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,z,H){const Y=H.wireframe===!0;let q=a[U.id];q===void 0&&(q={},a[U.id]=q);let ie=q[z.id];ie===void 0&&(ie={},q[z.id]=ie);let oe=ie[Y];return oe===void 0&&(oe=p(f()),ie[Y]=oe),oe}function p(U){const z=[],H=[],Y=[];for(let q=0;q<r;q++)z[q]=0,H[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:Y,object:U,attributes:{},index:null}}function m(U,z,H,Y){const q=c.attributes,ie=z.attributes;let oe=0;const fe=H.getAttributes();for(const ue in fe)if(fe[ue].location>=0){const le=q[ue];let me=ie[ue];if(me===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;oe++}return c.attributesNum!==oe||c.index!==Y}function S(U,z,H,Y){const q={},ie=z.attributes;let oe=0;const fe=H.getAttributes();for(const ue in fe)if(fe[ue].location>=0){let le=ie[ue];le===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(le=U.instanceColor));const me={};me.attribute=le,le&&le.data&&(me.data=le.data),q[ue]=me,oe++}c.attributes=q,c.attributesNum=oe,c.index=Y}function v(){const U=c.newAttributes;for(let z=0,H=U.length;z<H;z++)U[z]=0}function M(U){w(U,0)}function w(U,z){const H=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;H[U]=1,Y[U]===0&&(i.enableVertexAttribArray(U),Y[U]=1),q[U]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),q[U]=z)}function E(){const U=c.newAttributes,z=c.enabledAttributes;for(let H=0,Y=z.length;H<Y;H++)z[H]!==U[H]&&(i.disableVertexAttribArray(H),z[H]=0)}function b(U,z,H,Y,q,ie,oe){oe===!0?i.vertexAttribIPointer(U,z,H,q,ie):i.vertexAttribPointer(U,z,H,Y,q,ie)}function C(U,z,H,Y){if(n.isWebGL2===!1&&(U.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=Y.attributes,ie=H.getAttributes(),oe=z.defaultAttributeValues;for(const fe in ie){const ue=ie[fe];if(ue.location>=0){let ee=q[fe];if(ee===void 0&&(fe==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),fe==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ee!==void 0){const le=ee.normalized,me=ee.itemSize,Te=t.get(ee);if(Te===void 0)continue;const be=Te.buffer,Ne=Te.type,Ue=Te.bytesPerElement,Re=n.isWebGL2===!0&&(Ne===i.INT||Ne===i.UNSIGNED_INT||ee.gpuType===W_);if(ee.isInterleavedBufferAttribute){const Ge=ee.data,j=Ge.stride,L=ee.offset;if(Ge.isInstancedInterleavedBuffer){for(let D=0;D<ue.locationSize;D++)w(ue.location+D,Ge.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let D=0;D<ue.locationSize;D++)M(ue.location+D);i.bindBuffer(i.ARRAY_BUFFER,be);for(let D=0;D<ue.locationSize;D++)b(ue.location+D,me/ue.locationSize,Ne,le,j*Ue,(L+me/ue.locationSize*D)*Ue,Re)}else{if(ee.isInstancedBufferAttribute){for(let Ge=0;Ge<ue.locationSize;Ge++)w(ue.location+Ge,ee.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ge=0;Ge<ue.locationSize;Ge++)M(ue.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Ge=0;Ge<ue.locationSize;Ge++)b(ue.location+Ge,me/ue.locationSize,Ne,le,me*Ue,me/ue.locationSize*Ge*Ue,Re)}}else if(oe!==void 0){const le=oe[fe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(ue.location,le);break;case 3:i.vertexAttrib3fv(ue.location,le);break;case 4:i.vertexAttrib4fv(ue.location,le);break;default:i.vertexAttrib1fv(ue.location,le)}}}}E()}function x(){k();for(const U in a){const z=a[U];for(const H in z){const Y=z[H];for(const q in Y)g(Y[q].object),delete Y[q];delete z[H]}delete a[U]}}function A(U){if(a[U.id]===void 0)return;const z=a[U.id];for(const H in z){const Y=z[H];for(const q in Y)g(Y[q].object),delete Y[q];delete z[H]}delete a[U.id]}function F(U){for(const z in a){const H=a[z];if(H[U.id]===void 0)continue;const Y=H[U.id];for(const q in Y)g(Y[q].object),delete Y[q];delete H[U.id]}}function k(){$(),u=!0,c!==l&&(c=l,d(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:$,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:M,disableUnusedAttributes:E}}function tb(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,g;if(r)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nb(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||e.has("OES_texture_float"),w=v&&M,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:E}}function ib(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ki,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,v=S*4;let M=m.clippingState||null;l.value=M,M=u(g,f,v,d);for(let w=0;w!==v;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function rb(i){let e=new WeakMap;function t(o,a){return a===bu?o.mapping=Bs:a===Au&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bu||a===Au)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _S(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ph extends ug{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,Xd=[.125,.215,.35,.446,.526,.582],yr=20,Rc=new Ph,Yd=new Fe;let Cc=null,Pc=0,Lc=0;const _r=(1+Math.sqrt(5))/2,as=1/_r,qd=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,_r,as),new I(0,_r,-as),new I(as,0,_r),new I(-as,0,_r),new I(_r,as,0),new I(-_r,as,0)];class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Pc,Lc),e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Vo,format:Ln,colorSpace:Ft,depthBuffer:!1},r=Kd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sb(s)),this._blurMaterial=ob(s,e,t)}return r}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,n,r){const a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Yd),u.toneMapping=Ji,u.autoClear=!1;const d=new yi({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new nn(new jo,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Yd),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Aa(r,S*v,m>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Bs||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Rc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qd[(r-1)%qd.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nn(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*yr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);const m=[];let S=0;for(let b=0;b<yr;++b){const C=b/_,x=Math.exp(-C*C/2);m.push(x),b===0?S+=x:b<p&&(S+=2*x)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[r],w=3*M*(r>v-gs?r-v+gs:0),E=4*(this._cubeSize-M);Aa(t,w,E,3*M,2*M),l.setRenderTarget(t),l.render(h,Rc)}}function sb(i){const e=[],t=[],n=[];let r=i;const s=i-gs+1+Xd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-gs?l=Xd[o-i+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*d),v=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,C=E>2?0:-1,x=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];S.set(x,_*g*E),v.set(f,p*g*E);const A=[E,E,E,E,E,E];M.set(A,m*g*E)}const w=new rn;w.setAttribute("position",new qt(S,_)),w.setAttribute("uv",new qt(v,p)),w.setAttribute("faceIndex",new qt(M,m)),e.push(w),r>gs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kd(i,e,t){const n=new Or(i,e,t);return n.texture.mapping=Dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ob(i,e,t){const n=new Float32Array(yr),r=new I(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function $d(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Zd(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ab(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bu||l===Au,u=l===Bs||l===zs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new jd(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new jd(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cb(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let v=0,M=S.length;v<M;v+=3){const w=S[v+0],E=S[v+1],b=S[v+2];f.push(w,E,E,b,b,w)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const w=v+0,E=v+1,b=v+2;f.push(w,E,E,b,b,w)}}else return;const p=new(ng(f)?lg:ag)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ub(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){i.drawElements(s,g,a,d*l),t.update(g,s,1)}function h(d,g,_){if(_===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,d*l,_),t.update(g,s,_)}function f(d,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function hb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function fb(i,e){return i[0]-e[0]}function db(i,e){return Math.abs(e[1])-Math.abs(i[1])}function pb(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let z=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var d=z;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),w===!0&&(x=3);let A=u.attributes.position.count*x,F=1;A>e.maxTextureSize&&(F=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const k=new Float32Array(A*F*4*_),$=new sg(k,A,F,_);$.type=vi,$.needsUpdate=!0;const U=x*4;for(let H=0;H<_;H++){const Y=E[H],q=b[H],ie=C[H],oe=A*F*4*H;for(let fe=0;fe<Y.count;fe++){const ue=fe*U;v===!0&&(o.fromBufferAttribute(Y,fe),k[oe+ue+0]=o.x,k[oe+ue+1]=o.y,k[oe+ue+2]=o.z,k[oe+ue+3]=0),M===!0&&(o.fromBufferAttribute(q,fe),k[oe+ue+4]=o.x,k[oe+ue+5]=o.y,k[oe+ue+6]=o.z,k[oe+ue+7]=0),w===!0&&(o.fromBufferAttribute(ie,fe),k[oe+ue+8]=o.x,k[oe+ue+9]=o.y,k[oe+ue+10]=o.z,k[oe+ue+11]=ie.itemSize===4?o.w:1)}}p={count:_,texture:$,size:new xe(A,F)},s.set(u,p),u.addEventListener("dispose",z)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const w=_[M];w[0]=M,w[1]=f[M]}_.sort(db);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(fb);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const w=a[M],E=w[0],b=w[1];E!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+M)!==p[E]&&u.setAttribute("morphTarget"+M,p[E]),m&&u.getAttribute("morphNormal"+M)!==m[E]&&u.setAttribute("morphNormal"+M,m[E]),r[M]=b,S+=b):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const v=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function mb(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class fg extends Bt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Pr,u!==Pr&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pr&&(n=Xi),n===void 0&&u===ks&&(n=Cr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dg=new Bt,pg=new fg(1,1);pg.compareFunction=eg;const mg=new sg,_g=new QM,gg=new Rh,Jd=[],Qd=[],ep=new Float32Array(16),tp=new Float32Array(9),np=new Float32Array(4);function Ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Jd[r];if(s===void 0&&(s=new Float32Array(r),Jd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ol(i,e){let t=Qd[e];t===void 0&&(t=new Int32Array(e),Qd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _b(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function yb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;np.set(n),i.uniformMatrix2fv(this.addr,!1,np),Lt(t,n)}}function Mb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;tp.set(n),i.uniformMatrix3fv(this.addr,!1,tp),Lt(t,n)}}function Sb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ep.set(n),i.uniformMatrix4fv(this.addr,!1,ep),Lt(t,n)}}function Tb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Eb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function wb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Lb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?pg:dg;t.setTexture2D(e||s,r)}function Db(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_g,r)}function Ib(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gg,r)}function Nb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mg,r)}function Ub(i){switch(i){case 5126:return _b;case 35664:return gb;case 35665:return vb;case 35666:return xb;case 35674:return yb;case 35675:return Mb;case 35676:return Sb;case 5124:case 35670:return Tb;case 35667:case 35671:return Eb;case 35668:case 35672:return bb;case 35669:case 35673:return Ab;case 5125:return wb;case 36294:return Rb;case 36295:return Cb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Nb}}function Ob(i,e){i.uniform1fv(this.addr,e)}function Fb(i,e){const t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Bb(i,e){const t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function zb(i,e){const t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function kb(i,e){const t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hb(i,e){const t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vb(i,e){const t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gb(i,e){i.uniform1iv(this.addr,e)}function Wb(i,e){i.uniform2iv(this.addr,e)}function Xb(i,e){i.uniform3iv(this.addr,e)}function Yb(i,e){i.uniform4iv(this.addr,e)}function qb(i,e){i.uniform1uiv(this.addr,e)}function jb(i,e){i.uniform2uiv(this.addr,e)}function Kb(i,e){i.uniform3uiv(this.addr,e)}function $b(i,e){i.uniform4uiv(this.addr,e)}function Zb(i,e,t){const n=this.cache,r=e.length,s=Ol(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||dg,s[o])}function Jb(i,e,t){const n=this.cache,r=e.length,s=Ol(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_g,s[o])}function Qb(i,e,t){const n=this.cache,r=e.length,s=Ol(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gg,s[o])}function eA(i,e,t){const n=this.cache,r=e.length,s=Ol(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mg,s[o])}function tA(i){switch(i){case 5126:return Ob;case 35664:return Fb;case 35665:return Bb;case 35666:return zb;case 35674:return kb;case 35675:return Hb;case 35676:return Vb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return Yb;case 5125:return qb;case 36294:return jb;case 36295:return Kb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return eA}}class nA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ub(t.type)}}class iA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tA(t.type)}}class rA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function ip(i,e){i.seq.push(e),i.map[e.id]=e}function sA(i,e,t){const n=i.name,r=n.length;for(Dc.lastIndex=0;;){const s=Dc.exec(n),o=Dc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ip(t,c===void 0?new nA(a,i,e):new iA(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new rA(a),ip(t,h)),t=h}}}class $a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sA(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function rp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const oA=37297;let aA=0;function lA(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function cA(i){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(i);let n;switch(e===t?n="":e===dl&&t===fl?n="LinearDisplayP3ToLinearSRGB":e===fl&&t===dl&&(n="LinearSRGBToLinearDisplayP3"),i){case Ft:case Il:return[n,"LinearTransferOETF"];case mt:case bh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lA(i.getShaderSource(e),o)}else return r}function uA(i,e){const t=cA(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hA(i,e){let t;switch(e){case aM:t="Linear";break;case lM:t="Reinhard";break;case cM:t="OptimizedCineon";break;case uM:t="ACESFilmic";break;case fM:t="AgX";break;case hM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fA(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function dA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function pA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vs(i){return i!==""}function op(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ap(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(i){return i.replace(_A,vA)}const gA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vA(i,e){let t=We[e];if(t===void 0){const n=gA.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Du(t)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(i){return i.replace(xA,yA)}function yA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cp(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function EA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case H_:e="ENVMAP_BLENDING_MULTIPLY";break;case sM:e="ENVMAP_BLENDING_MIX";break;case oM:e="ENVMAP_BLENDING_ADD";break}return e}function bA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AA(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=MA(t),c=SA(t),u=TA(t),h=EA(t),f=bA(t),d=t.isWebGL2?"":fA(t),g=dA(t),_=pA(s),p=r.createProgram();let m,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vs).join(`
`),m.length>0&&(m+=`
`),S=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vs).join(`
`),S.length>0&&(S+=`
`)):(m=[cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),S=[d,cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?We.tonemapping_pars_fragment:"",t.toneMapping!==Ji?hA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,uA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),o=Du(o),o=op(o,t),o=ap(o,t),a=Du(a),a=op(a,t),a=ap(a,t),o=lp(o),a=lp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=v+m+o,w=v+S+a,E=rp(r,r.VERTEX_SHADER,M),b=rp(r,r.FRAGMENT_SHADER,w);r.attachShader(p,E),r.attachShader(p,b),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function C(k){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(E).trim(),z=r.getShaderInfoLog(b).trim();let H=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,E,b);else{const q=sp(r,E,"vertex"),ie=sp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+q+`
`+ie)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(U===""||z==="")&&(Y=!1);Y&&(k.diagnostics={runnable:H,programLog:$,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:S}})}r.deleteShader(E),r.deleteShader(b),x=new $a(r,p),A=mA(r,p)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(p,oA)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=b,this}let wA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CA(e),t.set(e,n)),n}}class CA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function PA(i,e,t,n,r,s,o){const a=new wh,l=new RA,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,A,F,k,$){const U=k.fog,z=$.geometry,H=x.isMeshStandardMaterial?k.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),q=Y&&Y.mapping===Dl?Y.image.height:null,ie=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=oe!==void 0?oe.length:0;let ue=0;z.morphAttributes.position!==void 0&&(ue=1),z.morphAttributes.normal!==void 0&&(ue=2),z.morphAttributes.color!==void 0&&(ue=3);let ee,le,me,Te;if(ie){const St=$n[ie];ee=St.vertexShader,le=St.fragmentShader}else ee=x.vertexShader,le=x.fragmentShader,l.update(x),me=l.getVertexShaderID(x),Te=l.getFragmentShaderID(x);const be=i.getRenderTarget(),Ne=$.isInstancedMesh===!0,Ue=$.isBatchedMesh===!0,Re=!!x.map,Ge=!!x.matcap,j=!!Y,L=!!x.aoMap,D=!!x.lightMap,V=!!x.bumpMap,W=!!x.normalMap,te=!!x.displacementMap,ne=!!x.emissiveMap,T=!!x.metalnessMap,y=!!x.roughnessMap,N=x.anisotropy>0,B=x.clearcoat>0,G=x.iridescence>0,K=x.sheen>0,ae=x.transmission>0,re=N&&!!x.anisotropyMap,ce=B&&!!x.clearcoatMap,_e=B&&!!x.clearcoatNormalMap,Se=B&&!!x.clearcoatRoughnessMap,se=G&&!!x.iridescenceMap,ze=G&&!!x.iridescenceThicknessMap,Oe=K&&!!x.sheenColorMap,Le=K&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,ye=!!x.specularColorMap,P=!!x.specularIntensityMap,he=ae&&!!x.transmissionMap,we=ae&&!!x.thicknessMap,Ee=!!x.gradientMap,de=!!x.alphaMap,O=x.alphaTest>0,pe=!!x.alphaHash,ve=!!x.extensions,De=!!z.attributes.uv1,Pe=!!z.attributes.uv2,$e=!!z.attributes.uv3;let Ze=Ji;return x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:le,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ue,instancing:Ne,instancingColor:Ne&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ft,map:Re,matcap:Ge,envMap:j,envMapMode:j&&Y.mapping,envMapCubeUVHeight:q,aoMap:L,lightMap:D,bumpMap:V,normalMap:W,displacementMap:f&&te,emissiveMap:ne,normalMapObjectSpace:W&&x.normalMapType===AM,normalMapTangentSpace:W&&x.normalMapType===Q_,metalnessMap:T,roughnessMap:y,anisotropy:N,anisotropyMap:re,clearcoat:B,clearcoatMap:ce,clearcoatNormalMap:_e,clearcoatRoughnessMap:Se,iridescence:G,iridescenceMap:se,iridescenceThicknessMap:ze,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:ye,specularIntensityMap:P,transmission:ae,transmissionMap:he,thicknessMap:we,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===As,alphaMap:de,alphaTest:O,alphaHash:pe,combine:x.combine,mapUv:Re&&_(x.map.channel),aoMapUv:L&&_(x.aoMap.channel),lightMapUv:D&&_(x.lightMap.channel),bumpMapUv:V&&_(x.bumpMap.channel),normalMapUv:W&&_(x.normalMap.channel),displacementMapUv:te&&_(x.displacementMap.channel),emissiveMapUv:ne&&_(x.emissiveMap.channel),metalnessMapUv:T&&_(x.metalnessMap.channel),roughnessMapUv:y&&_(x.roughnessMap.channel),anisotropyMapUv:re&&_(x.anisotropyMap.channel),clearcoatMapUv:ce&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(x.sheenRoughnessMap.channel),specularMapUv:Ae&&_(x.specularMap.channel),specularColorMapUv:ye&&_(x.specularColorMap.channel),specularIntensityMapUv:P&&_(x.specularIntensityMap.channel),transmissionMapUv:he&&_(x.transmissionMap.channel),thicknessMapUv:we&&_(x.thicknessMap.channel),alphaMapUv:de&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(W||N),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Pe,vertexUv3s:$e,pointsUvs:$.isPoints===!0&&!!z.attributes.uv&&(Re||de),fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cn,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ve&&x.extensions.derivatives===!0,extensionFragDepth:ve&&x.extensions.fragDepth===!0,extensionDrawBuffers:ve&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)A.push(F),A.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(S(A,x),v(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function S(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function M(x){const A=g[x.type];let F;if(A){const k=$n[A];F=fS.clone(k.uniforms)}else F=x.uniforms;return F}function w(x,A){let F;for(let k=0,$=c.length;k<$;k++){const U=c[k];if(U.cacheKey===A){F=U,++F.usedTimes;break}}return F===void 0&&(F=new AA(i,A,x,s),c.push(F)),F}function E(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:C}}function LA(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function DA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,_,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||DA),n.length>1&&n.sort(f||up),r.length>1&&r.sort(f||up)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function IA(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new hp,i.set(n,[o])):r>=s.length?(o=new hp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function NA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function UA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let OA=0;function FA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function BA(i,e){const t=new NA,n=UA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Ye,a=new Ye;function l(u,h){let f=0,d=0,g=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let _=0,p=0,m=0,S=0,v=0,M=0,w=0,E=0,b=0,C=0,x=0;u.sort(FA);const A=h===!0?Math.PI:1;for(let k=0,$=u.length;k<$;k++){const U=u[k],z=U.color,H=U.intensity,Y=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=z.r*H*A,d+=z.g*H*A,g+=z.b*H*A;else if(U.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(U.sh.coefficients[ie],H);x++}else if(U.isDirectionalLight){const ie=t.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity*A),U.castShadow){const oe=U.shadow,fe=n.get(U);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,r.directionalShadow[_]=fe,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=U.shadow.matrix,M++}r.directional[_]=ie,_++}else if(U.isSpotLight){const ie=t.get(U);ie.position.setFromMatrixPosition(U.matrixWorld),ie.color.copy(z).multiplyScalar(H*A),ie.distance=Y,ie.coneCos=Math.cos(U.angle),ie.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ie.decay=U.decay,r.spot[m]=ie;const oe=U.shadow;if(U.map&&(r.spotLightMap[b]=U.map,b++,oe.updateMatrices(U),U.castShadow&&C++),r.spotLightMatrix[m]=oe.matrix,U.castShadow){const fe=n.get(U);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,r.spotShadow[m]=fe,r.spotShadowMap[m]=q,E++}m++}else if(U.isRectAreaLight){const ie=t.get(U);ie.color.copy(z).multiplyScalar(H),ie.halfWidth.set(U.width*.5,0,0),ie.halfHeight.set(0,U.height*.5,0),r.rectArea[S]=ie,S++}else if(U.isPointLight){const ie=t.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity*A),ie.distance=U.distance,ie.decay=U.decay,U.castShadow){const oe=U.shadow,fe=n.get(U);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,fe.shadowCameraNear=oe.camera.near,fe.shadowCameraFar=oe.camera.far,r.pointShadow[p]=fe,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=U.shadow.matrix,w++}r.point[p]=ie,p++}else if(U.isHemisphereLight){const ie=t.get(U);ie.skyColor.copy(U.color).multiplyScalar(H*A),ie.groundColor.copy(U.groundColor).multiplyScalar(H*A),r.hemi[v]=ie,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==m||F.rectAreaLength!==S||F.hemiLength!==v||F.numDirectionalShadows!==M||F.numPointShadows!==w||F.numSpotShadows!==E||F.numSpotMaps!==b||F.numLightProbes!==x)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=S,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=E+b-C,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=x,F.directionalLength=_,F.pointLength=p,F.spotLength=m,F.rectAreaLength=S,F.hemiLength=v,F.numDirectionalShadows=M,F.numPointShadows=w,F.numSpotShadows=E,F.numSpotMaps=b,F.numLightProbes=x,r.version=OA++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const M=u[S];if(M.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function fp(i,e){const t=new BA(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zA(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fp(i,e),t.set(s,[l])):o>=a.length?(l=new fp(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class kA extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HA extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WA(i,e,t){let n=new Ch;const r=new xe,s=new xe,o=new at,a=new kA({depthPacking:bM}),l=new HA,c={},u=t.maxTextureSize,h={[bi]:hn,[hn]:bi,[Cn]:Cn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:VA,fragmentShader:GA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let m=this.type;this.render=function(E,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const x=i.getRenderTarget(),A=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Zi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=m!==mi&&this.type===mi,U=m===mi&&this.type!==mi;for(let z=0,H=E.length;z<H;z++){const Y=E[z],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ie=q.getFrameExtents();if(r.multiply(ie),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,q.mapSize.y=s.y)),q.map===null||$===!0||U===!0){const fe=this.type!==mi?{minFilter:Nt,magFilter:Nt}:{};q.map!==null&&q.map.dispose(),q.map=new Or(r.x,r.y,fe),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const oe=q.getViewportCount();for(let fe=0;fe<oe;fe++){const ue=q.getViewport(fe);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),k.viewport(o),q.updateMatrices(Y,fe),n=q.getFrustum(),M(b,C,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===mi&&S(q,C),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(x,A,F)};function S(E,b){const C=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Or(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,C,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,C,d,_,null)}function v(E,b,C,x){let A=null;const F=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)A=F;else if(A=C.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=A.uuid,$=b.uuid;let U=c[k];U===void 0&&(U={},c[k]=U);let z=U[$];z===void 0&&(z=A.clone(),U[$]=z,b.addEventListener("dispose",w)),A=z}if(A.visible=b.visible,A.wireframe=b.wireframe,x===mi?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:h[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,C.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=i.properties.get(A);k.light=C}return A}function M(E,b,C,x,A){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const $=e.update(E),U=E.material;if(Array.isArray(U)){const z=$.groups;for(let H=0,Y=z.length;H<Y;H++){const q=z[H],ie=U[q.materialIndex];if(ie&&ie.visible){const oe=v(E,ie,x,A);E.onBeforeShadow(i,E,b,C,$,oe,q),i.renderBufferDirect(C,null,$,oe,E,q),E.onAfterShadow(i,E,b,C,$,oe,q)}}}else if(U.visible){const z=v(E,U,x,A);E.onBeforeShadow(i,E,b,C,$,z,null),i.renderBufferDirect(C,null,$,z,E,null),E.onAfterShadow(i,E,b,C,$,z,null)}}const k=E.children;for(let $=0,U=k.length;$<U;$++)M(k[$],b,C,x,A)}function w(E){E.target.removeEventListener("dispose",w);for(const C in c){const x=c[C],A=E.target.uuid;A in x&&(x[A].dispose(),delete x[A])}}}function XA(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const pe=new at;let ve=null;const De=new at(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!O&&(i.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){O=Pe},setClear:function(Pe,$e,Ze,vt,St){St===!0&&(Pe*=vt,$e*=vt,Ze*=vt),pe.set(Pe,$e,Ze,vt),De.equals(pe)===!1&&(i.clearColor(Pe,$e,Ze,vt),De.copy(pe))},reset:function(){O=!1,ve=null,De.set(-1,0,0,0)}}}function s(){let O=!1,pe=null,ve=null,De=null;return{setTest:function(Pe){Pe?Ue(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Pe){pe!==Pe&&!O&&(i.depthMask(Pe),pe=Pe)},setFunc:function(Pe){if(ve!==Pe){switch(Pe){case Jy:i.depthFunc(i.NEVER);break;case Qy:i.depthFunc(i.ALWAYS);break;case eM:i.depthFunc(i.LESS);break;case ul:i.depthFunc(i.LEQUAL);break;case tM:i.depthFunc(i.EQUAL);break;case nM:i.depthFunc(i.GEQUAL);break;case iM:i.depthFunc(i.GREATER);break;case rM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){De!==Pe&&(i.clearDepth(Pe),De=Pe)},reset:function(){O=!1,pe=null,ve=null,De=null}}}function o(){let O=!1,pe=null,ve=null,De=null,Pe=null,$e=null,Ze=null,vt=null,St=null;return{setTest:function(tt){O||(tt?Ue(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(tt){pe!==tt&&!O&&(i.stencilMask(tt),pe=tt)},setFunc:function(tt,bt,Yn){(ve!==tt||De!==bt||Pe!==Yn)&&(i.stencilFunc(tt,bt,Yn),ve=tt,De=bt,Pe=Yn)},setOp:function(tt,bt,Yn){($e!==tt||Ze!==bt||vt!==Yn)&&(i.stencilOp(tt,bt,Yn),$e=tt,Ze=bt,vt=Yn)},setLocked:function(tt){O=tt},setClear:function(tt){St!==tt&&(i.clearStencil(tt),St=tt)},reset:function(){O=!1,pe=null,ve=null,De=null,Pe=null,$e=null,Ze=null,vt=null,St=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,M=null,w=null,E=null,b=null,C=null,x=new Fe(0,0,0),A=0,F=!1,k=null,$=null,U=null,z=null,H=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(oe)[1]),q=ie>=1):oe.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),q=ie>=2);let fe=null,ue={};const ee=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),me=new at().fromArray(ee),Te=new at().fromArray(le);function be(O,pe,ve,De){const Pe=new Uint8Array(4),$e=i.createTexture();i.bindTexture(O,$e),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ve;Ze++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(pe+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return $e}const Ne={};Ne[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(i.DEPTH_TEST),l.setFunc(ul),ne(!1),T(Yf),Ue(i.CULL_FACE),W(Zi);function Ue(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function Re(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function Ge(O,pe){return d[O]!==pe?(i.bindFramebuffer(O,pe),d[O]=pe,n&&(O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function j(O,pe){let ve=_,De=!1;if(O)if(ve=g.get(pe),ve===void 0&&(ve=[],g.set(pe,ve)),O.isWebGLMultipleRenderTargets){const Pe=O.texture;if(ve.length!==Pe.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Ze=Pe.length;$e<Ze;$e++)ve[$e]=i.COLOR_ATTACHMENT0+$e;ve.length=Pe.length,De=!0}}else ve[0]!==i.COLOR_ATTACHMENT0&&(ve[0]=i.COLOR_ATTACHMENT0,De=!0);else ve[0]!==i.BACK&&(ve[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function L(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const D={[xr]:i.FUNC_ADD,[Fy]:i.FUNC_SUBTRACT,[By]:i.FUNC_REVERSE_SUBTRACT};if(n)D[Kf]=i.MIN,D[$f]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(D[Kf]=O.MIN_EXT,D[$f]=O.MAX_EXT)}const V={[zy]:i.ZERO,[ky]:i.ONE,[Hy]:i.SRC_COLOR,[Tu]:i.SRC_ALPHA,[qy]:i.SRC_ALPHA_SATURATE,[Xy]:i.DST_COLOR,[Gy]:i.DST_ALPHA,[Vy]:i.ONE_MINUS_SRC_COLOR,[Eu]:i.ONE_MINUS_SRC_ALPHA,[Yy]:i.ONE_MINUS_DST_COLOR,[Wy]:i.ONE_MINUS_DST_ALPHA,[jy]:i.CONSTANT_COLOR,[Ky]:i.ONE_MINUS_CONSTANT_COLOR,[$y]:i.CONSTANT_ALPHA,[Zy]:i.ONE_MINUS_CONSTANT_ALPHA};function W(O,pe,ve,De,Pe,$e,Ze,vt,St,tt){if(O===Zi){m===!0&&(Re(i.BLEND),m=!1);return}if(m===!1&&(Ue(i.BLEND),m=!0),O!==Oy){if(O!==S||tt!==F){if((v!==xr||E!==xr)&&(i.blendEquation(i.FUNC_ADD),v=xr,E=xr),tt)switch(O){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Su:i.blendFunc(i.ONE,i.ONE);break;case qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Su:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,w=null,b=null,C=null,x.set(0,0,0),A=0,S=O,F=tt}return}Pe=Pe||pe,$e=$e||ve,Ze=Ze||De,(pe!==v||Pe!==E)&&(i.blendEquationSeparate(D[pe],D[Pe]),v=pe,E=Pe),(ve!==M||De!==w||$e!==b||Ze!==C)&&(i.blendFuncSeparate(V[ve],V[De],V[$e],V[Ze]),M=ve,w=De,b=$e,C=Ze),(vt.equals(x)===!1||St!==A)&&(i.blendColor(vt.r,vt.g,vt.b,St),x.copy(vt),A=St),S=O,F=!1}function te(O,pe){O.side===Cn?Re(i.CULL_FACE):Ue(i.CULL_FACE);let ve=O.side===hn;pe&&(ve=!ve),ne(ve),O.blending===As&&O.transparent===!1?W(Zi):W(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const De=O.stencilWrite;c.setTest(De),De&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),N(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(O){k!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),k=O)}function T(O){O!==Iy?(Ue(i.CULL_FACE),O!==$&&(O===Yf?i.cullFace(i.BACK):O===Ny?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),$=O}function y(O){O!==U&&(q&&i.lineWidth(O),U=O)}function N(O,pe,ve){O?(Ue(i.POLYGON_OFFSET_FILL),(z!==pe||H!==ve)&&(i.polygonOffset(pe,ve),z=pe,H=ve)):Re(i.POLYGON_OFFSET_FILL)}function B(O){O?Ue(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function G(O){O===void 0&&(O=i.TEXTURE0+Y-1),fe!==O&&(i.activeTexture(O),fe=O)}function K(O,pe,ve){ve===void 0&&(fe===null?ve=i.TEXTURE0+Y-1:ve=fe);let De=ue[ve];De===void 0&&(De={type:void 0,texture:void 0},ue[ve]=De),(De.type!==O||De.texture!==pe)&&(fe!==ve&&(i.activeTexture(ve),fe=ve),i.bindTexture(O,pe||Ne[O]),De.type=O,De.texture=pe)}function ae(){const O=ue[fe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(O){me.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),me.copy(O))}function he(O){Te.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Te.copy(O))}function we(O,pe){let ve=h.get(pe);ve===void 0&&(ve=new WeakMap,h.set(pe,ve));let De=ve.get(O);De===void 0&&(De=i.getUniformBlockIndex(pe,O.name),ve.set(O,De))}function Ee(O,pe){const De=h.get(pe).get(O);u.get(pe)!==De&&(i.uniformBlockBinding(pe,De,O.__bindingPointIndex),u.set(pe,De))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},fe=null,ue={},d={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,M=null,w=null,E=null,b=null,C=null,x=new Fe(0,0,0),A=0,F=!1,k=null,$=null,U=null,z=null,H=null,me.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Re,bindFramebuffer:Ge,drawBuffers:j,useProgram:L,setBlending:W,setMaterial:te,setFlipSided:ne,setCullFace:T,setLineWidth:y,setPolygonOffset:N,setScissorTest:B,activeTexture:G,bindTexture:K,unbindTexture:ae,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:Ae,texImage3D:ye,updateUBOMapping:we,uniformBlockBinding:Ee,texStorage2D:Oe,texStorage3D:Le,texSubImage2D:_e,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:ze,scissor:P,viewport:he,reset:de}}function YA(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):Wo("canvas")}function _(T,y,N,B){let G=1;if((T.width>B||T.height>B)&&(G=B/Math.max(T.width,T.height)),G<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const K=y?ml:Math.floor,ae=K(G*T.width),re=K(G*T.height);h===void 0&&(h=g(ae,re));const ce=N?g(ae,re):h;return ce.width=ae,ce.height=re,ce.getContext("2d").drawImage(T,0,0,ae,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ae+"x"+re+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Lu(T.width)&&Lu(T.height)}function m(T){return a?!1:T.wrapS!==Pn||T.wrapT!==Pn||T.minFilter!==Nt&&T.minFilter!==on}function S(T,y){return T.generateMipmaps&&y&&T.minFilter!==Nt&&T.minFilter!==on}function v(T){i.generateMipmap(T)}function M(T,y,N,B,G=!1){if(a===!1)return y;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=y;if(y===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),y===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RGBA){const ae=G?hl:it.getTransfer(B);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=ae===ct?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(T,y,N){return S(T,N)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){return T===Nt||T===wu||T===Ka?i.NEAREST:i.LINEAR}function b(T){const y=T.target;y.removeEventListener("dispose",b),x(y),y.isVideoTexture&&u.delete(y)}function C(T){const y=T.target;y.removeEventListener("dispose",C),F(y)}function x(T){const y=n.get(T);if(y.__webglInit===void 0)return;const N=T.source,B=f.get(N);if(B){const G=B[y.__cacheKey];G.usedTimes--,G.usedTimes===0&&A(T),Object.keys(B).length===0&&f.delete(N)}n.remove(T)}function A(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const N=T.source,B=f.get(N);delete B[y.__cacheKey],o.memory.textures--}function F(T){const y=T.texture,N=n.get(T),B=n.get(y);if(B.__webglTexture!==void 0&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(N.__webglFramebuffer[G]))for(let K=0;K<N.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(N.__webglFramebuffer[G][K]);else i.deleteFramebuffer(N.__webglFramebuffer[G]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[G])}else{if(Array.isArray(N.__webglFramebuffer))for(let G=0;G<N.__webglFramebuffer.length;G++)i.deleteFramebuffer(N.__webglFramebuffer[G]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let G=0;G<N.__webglColorRenderbuffer.length;G++)N.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[G]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let G=0,K=y.length;G<K;G++){const ae=n.get(y[G]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(y[G])}n.remove(y),n.remove(T)}let k=0;function $(){k=0}function U(){const T=k;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),k+=1,T}function z(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function H(T,y){const N=n.get(T);if(T.isVideoTexture&&te(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const B=T.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(N,T,y);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+y)}function Y(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){me(N,T,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+y)}function q(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){me(N,T,y);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+y)}function ie(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Te(N,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+y)}const oe={[Nr]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},fe={[Nt]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[Ka]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[G_]:i.LINEAR_MIPMAP_NEAREST,[Ur]:i.LINEAR_MIPMAP_LINEAR},ue={[wM]:i.NEVER,[IM]:i.ALWAYS,[RM]:i.LESS,[eg]:i.LEQUAL,[CM]:i.EQUAL,[DM]:i.GEQUAL,[PM]:i.GREATER,[LM]:i.NOTEQUAL};function ee(T,y,N){if(N?(i.texParameteri(T,i.TEXTURE_WRAP_S,oe[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,oe[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,oe[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[y.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Pn||y.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,E(y.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,E(y.minFilter)),y.minFilter!==Nt&&y.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Nt||y.minFilter!==Ka&&y.minFilter!==Ur||y.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function le(T,y){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",b));const B=y.source;let G=f.get(B);G===void 0&&(G={},f.set(B,G));const K=z(y);if(K!==T.__cacheKey){G[K]===void 0&&(G[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),G[K].usedTimes++;const ae=G[T.__cacheKey];ae!==void 0&&(G[T.__cacheKey].usedTimes--,ae.usedTimes===0&&A(y)),T.__cacheKey=K,T.__webglTexture=G[K].texture}return N}function me(T,y,N){let B=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(B=i.TEXTURE_3D);const G=le(T,y),K=y.source;t.bindTexture(B,T.__webglTexture,i.TEXTURE0+N);const ae=n.get(K);if(K.version!==ae.__version||G===!0){t.activeTexture(i.TEXTURE0+N);const re=it.getPrimaries(it.workingColorSpace),ce=y.colorSpace===Dn?null:it.getPrimaries(y.colorSpace),_e=y.colorSpace===Dn||re===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Se=m(y)&&p(y.image)===!1;let se=_(y.image,Se,!1,r.maxTextureSize);se=ne(y,se);const ze=p(se)||a,Oe=s.convert(y.format,y.colorSpace);let Le=s.convert(y.type),Ae=M(y.internalFormat,Oe,Le,y.colorSpace,y.isVideoTexture);ee(B,y,ze);let ye;const P=y.mipmaps,he=a&&y.isVideoTexture!==!0&&Ae!==$_,we=ae.__version===void 0||G===!0,Ee=w(y,se,ze);if(y.isDepthTexture)Ae=i.DEPTH_COMPONENT,a?y.type===vi?Ae=i.DEPTH_COMPONENT32F:y.type===Xi?Ae=i.DEPTH_COMPONENT24:y.type===Cr?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:y.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Pr&&Ae===i.DEPTH_COMPONENT&&y.type!==Eh&&y.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Xi,Le=s.convert(y.type)),y.format===ks&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,y.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Cr,Le=s.convert(y.type))),we&&(he?t.texStorage2D(i.TEXTURE_2D,1,Ae,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ae,se.width,se.height,0,Oe,Le,null));else if(y.isDataTexture)if(P.length>0&&ze){he&&we&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,P[0].width,P[0].height);for(let de=0,O=P.length;de<O;de++)ye=P[de],he?t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,Oe,Le,ye.data):t.texImage2D(i.TEXTURE_2D,de,Ae,ye.width,ye.height,0,Oe,Le,ye.data);y.generateMipmaps=!1}else he?(we&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,Oe,Le,se.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,se.width,se.height,0,Oe,Le,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){he&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ae,P[0].width,P[0].height,se.depth);for(let de=0,O=P.length;de<O;de++)ye=P[de],y.format!==Ln?Oe!==null?he?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,se.depth,Oe,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ae,ye.width,ye.height,se.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,se.depth,Oe,Le,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ae,ye.width,ye.height,se.depth,0,Oe,Le,ye.data)}else{he&&we&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,P[0].width,P[0].height);for(let de=0,O=P.length;de<O;de++)ye=P[de],y.format!==Ln?Oe!==null?he?t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,Oe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye.width,ye.height,Oe,Le,ye.data):t.texImage2D(i.TEXTURE_2D,de,Ae,ye.width,ye.height,0,Oe,Le,ye.data)}else if(y.isDataArrayTexture)he?(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ae,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Oe,Le,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,Oe,Le,se.data);else if(y.isData3DTexture)he?(we&&t.texStorage3D(i.TEXTURE_3D,Ee,Ae,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Oe,Le,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,Oe,Le,se.data);else if(y.isFramebufferTexture){if(we)if(he)t.texStorage2D(i.TEXTURE_2D,Ee,Ae,se.width,se.height);else{let de=se.width,O=se.height;for(let pe=0;pe<Ee;pe++)t.texImage2D(i.TEXTURE_2D,pe,Ae,de,O,0,Oe,Le,null),de>>=1,O>>=1}}else if(P.length>0&&ze){he&&we&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,P[0].width,P[0].height);for(let de=0,O=P.length;de<O;de++)ye=P[de],he?t.texSubImage2D(i.TEXTURE_2D,de,0,0,Oe,Le,ye):t.texImage2D(i.TEXTURE_2D,de,Ae,Oe,Le,ye);y.generateMipmaps=!1}else he?(we&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,Le,se)):t.texImage2D(i.TEXTURE_2D,0,Ae,Oe,Le,se);S(y,ze)&&v(B),ae.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Te(T,y,N){if(y.image.length!==6)return;const B=le(T,y),G=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const K=n.get(G);if(G.version!==K.__version||B===!0){t.activeTexture(i.TEXTURE0+N);const ae=it.getPrimaries(it.workingColorSpace),re=y.colorSpace===Dn?null:it.getPrimaries(y.colorSpace),ce=y.colorSpace===Dn||ae===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,Se=y.image[0]&&y.image[0].isDataTexture,se=[];for(let de=0;de<6;de++)!_e&&!Se?se[de]=_(y.image[de],!1,!0,r.maxCubemapSize):se[de]=Se?y.image[de].image:y.image[de],se[de]=ne(y,se[de]);const ze=se[0],Oe=p(ze)||a,Le=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),ye=M(y.internalFormat,Le,Ae,y.colorSpace),P=a&&y.isVideoTexture!==!0,he=K.__version===void 0||B===!0;let we=w(y,ze,Oe);ee(i.TEXTURE_CUBE_MAP,y,Oe);let Ee;if(_e){P&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ye,ze.width,ze.height);for(let de=0;de<6;de++){Ee=se[de].mipmaps;for(let O=0;O<Ee.length;O++){const pe=Ee[O];y.format!==Ln?Le!==null?P?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O,0,0,pe.width,pe.height,Le,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O,0,0,pe.width,pe.height,Le,Ae,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O,ye,pe.width,pe.height,0,Le,Ae,pe.data)}}}else{Ee=y.mipmaps,P&&he&&(Ee.length>0&&we++,t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ye,se[0].width,se[0].height));for(let de=0;de<6;de++)if(Se){P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,se[de].width,se[de].height,Le,Ae,se[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ye,se[de].width,se[de].height,0,Le,Ae,se[de].data);for(let O=0;O<Ee.length;O++){const ve=Ee[O].image[de].image;P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O+1,0,0,ve.width,ve.height,Le,Ae,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O+1,ye,ve.width,ve.height,0,Le,Ae,ve.data)}}else{P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Le,Ae,se[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ye,Le,Ae,se[de]);for(let O=0;O<Ee.length;O++){const pe=Ee[O];P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O+1,0,0,Le,Ae,pe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,O+1,ye,Le,Ae,pe.image[de])}}}S(y,Oe)&&v(i.TEXTURE_CUBE_MAP),K.__version=G.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function be(T,y,N,B,G,K){const ae=s.convert(N.format,N.colorSpace),re=s.convert(N.type),ce=M(N.internalFormat,ae,re,N.colorSpace);if(!n.get(y).__hasExternalTextures){const Se=Math.max(1,y.width>>K),se=Math.max(1,y.height>>K);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,K,ce,Se,se,y.depth,0,ae,re,null):t.texImage2D(G,K,ce,Se,se,0,ae,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),W(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,G,n.get(N).__webglTexture,0,V(y)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,G,n.get(N).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(T,y,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let B=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||W(y)){const G=y.depthTexture;G&&G.isDepthTexture&&(G.type===vi?B=i.DEPTH_COMPONENT32F:G.type===Xi&&(B=i.DEPTH_COMPONENT24));const K=V(y);W(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,B,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,B,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,B,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const B=V(y);N&&W(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,y.width,y.height):W(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const B=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let G=0;G<B.length;G++){const K=B[G],ae=s.convert(K.format,K.colorSpace),re=s.convert(K.type),ce=M(K.internalFormat,ae,re,K.colorSpace),_e=V(y);N&&W(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ce,y.width,y.height):W(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const B=n.get(y.depthTexture).__webglTexture,G=V(y);if(y.depthTexture.format===Pr)W(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(y.depthTexture.format===ks)W(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Re(T){const y=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ue(y.__webglFramebuffer,T)}else if(N){y.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[B]),y.__webglDepthbuffer[B]=i.createRenderbuffer(),Ne(y.__webglDepthbuffer[B],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ne(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(T,y,N){const B=n.get(T);y!==void 0&&be(B.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Re(T)}function j(T){const y=T.texture,N=n.get(T),B=n.get(y);T.addEventListener("dispose",C),T.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=y.version,o.memory.textures++);const G=T.isWebGLCubeRenderTarget===!0,K=T.isWebGLMultipleRenderTargets===!0,ae=p(T)||a;if(G){N.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[re]=[];for(let ce=0;ce<y.mipmaps.length;ce++)N.__webglFramebuffer[re][ce]=i.createFramebuffer()}else N.__webglFramebuffer[re]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)N.__webglFramebuffer[re]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(K)if(r.drawBuffers){const re=T.texture;for(let ce=0,_e=re.length;ce<_e;ce++){const Se=n.get(re[ce]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&W(T)===!1){const re=K?y:[y];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const _e=re[ce];N.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const Se=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),ze=M(_e.internalFormat,Se,se,_e.colorSpace,T.isXRRenderTarget===!0),Oe=V(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ze,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),ee(i.TEXTURE_CUBE_MAP,y,ae);for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)be(N.__webglFramebuffer[re][ce],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else be(N.__webglFramebuffer[re],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);S(y,ae)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){const re=T.texture;for(let ce=0,_e=re.length;ce<_e;ce++){const Se=re[ce],se=n.get(Se);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),ee(i.TEXTURE_2D,Se,ae),be(N.__webglFramebuffer,T,Se,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),S(Se,ae)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,B.__webglTexture),ee(re,y,ae),a&&y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)be(N.__webglFramebuffer[ce],T,y,i.COLOR_ATTACHMENT0,re,ce);else be(N.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,re,0);S(y,ae)&&v(re),t.unbindTexture()}T.depthBuffer&&Re(T)}function L(T){const y=p(T)||a,N=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let B=0,G=N.length;B<G;B++){const K=N[B];if(S(K,y)){const ae=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(K).__webglTexture;t.bindTexture(ae,re),v(ae),t.unbindTexture()}}}function D(T){if(a&&T.samples>0&&W(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],N=T.width,B=T.height;let G=i.COLOR_BUFFER_BIT;const K=[],ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(T),ce=T.isWebGLMultipleRenderTargets===!0;if(ce)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){K.push(i.COLOR_ATTACHMENT0+_e),T.depthBuffer&&K.push(ae);const Se=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Se===!1&&(T.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[_e]),Se===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ae])),ce){const se=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,N,B,0,0,N,B,G,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);const Se=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function V(T){return Math.min(r.maxSamples,T.samples)}function W(T){const y=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function te(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function ne(T,y){const N=T.colorSpace,B=T.format,G=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Pu||N!==Ft&&N!==Dn&&(it.getTransfer(N)===ct?a===!1?e.has("EXT_sRGB")===!0&&B===Ln?(T.format=Pu,T.minFilter=on,T.generateMipmaps=!1):y=ig.sRGBToLinear(y):(B!==Ln||G!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=U,this.resetTextureUnits=$,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=ie,this.rebindTextures=Ge,this.setupRenderTarget=j,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=be,this.useMultisampledRTT=W}function qA(i,e,t){const n=t.isWebGL2;function r(s,o=Dn){let a;const l=it.getTransfer(o);if(s===Qi)return i.UNSIGNED_BYTE;if(s===X_)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Y_)return i.UNSIGNED_SHORT_5_5_5_1;if(s===pM)return i.BYTE;if(s===mM)return i.SHORT;if(s===Eh)return i.UNSIGNED_SHORT;if(s===W_)return i.INT;if(s===Xi)return i.UNSIGNED_INT;if(s===vi)return i.FLOAT;if(s===Vo)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_M)return i.ALPHA;if(s===Ln)return i.RGBA;if(s===gM)return i.LUMINANCE;if(s===vM)return i.LUMINANCE_ALPHA;if(s===Pr)return i.DEPTH_COMPONENT;if(s===ks)return i.DEPTH_STENCIL;if(s===Pu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===xM)return i.RED;if(s===q_)return i.RED_INTEGER;if(s===yM)return i.RG;if(s===j_)return i.RG_INTEGER;if(s===K_)return i.RGBA_INTEGER;if(s===sc||s===oc||s===ac||s===lc)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jf||s===Qf||s===ed||s===td)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ed)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===td)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nd||s===id)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===nd)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===id)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rd||s===sd||s===od||s===ad||s===ld||s===cd||s===ud||s===hd||s===fd||s===dd||s===pd||s===md||s===_d||s===gd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===od)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ad)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ld)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ud)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===md)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_d)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gd)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cc||s===vd||s===xd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cc)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===MM||s===yd||s===Md||s===Sd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===cc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===yd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Md)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class jA extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KA={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $A extends Hr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const S=[],v=[],M=new xe;let w=null;const E=new Qt;E.layers.enable(1),E.viewport=new at;const b=new Qt;b.layers.enable(2),b.viewport=new at;const C=[E,b],x=new jA;x.layers.enable(1),x.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=S[ee];return le===void 0&&(le=new Ic,S[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=S[ee];return le===void 0&&(le=new Ic,S[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=S[ee];return le===void 0&&(le=new Ic,S[ee]=le),le.getHandSpace()};function k(ee){const le=v.indexOf(ee.inputSource);if(le===-1)return;const me=S[le];me!==void 0&&(me.update(ee.inputSource,ee.frame,c||o),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",U);for(let ee=0;ee<S.length;ee++){const le=v[ee];le!==null&&(v[ee]=null,S[ee].disconnect(le))}A=null,F=null,e.setRenderTarget(p),d=null,f=null,h=null,r=null,m=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Or(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,me=null,Te=null;_.depth&&(Te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?ks:Pr,me=_.stencil?Cr:Xi);const be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new Or(f.textureWidth,f.textureHeight,{format:Ln,type:Qi,depthTexture:new fg(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ne=e.properties.get(m);Ne.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(ee){for(let le=0;le<ee.removed.length;le++){const me=ee.removed[le],Te=v.indexOf(me);Te>=0&&(v[Te]=null,S[Te].disconnect(me))}for(let le=0;le<ee.added.length;le++){const me=ee.added[le];let Te=v.indexOf(me);if(Te===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=v.length){v.push(me),Te=Ne;break}else if(v[Ne]===null){v[Ne]=me,Te=Ne;break}if(Te===-1)break}const be=S[Te];be&&be.connect(me)}}const z=new I,H=new I;function Y(ee,le,me){z.setFromMatrixPosition(le.matrixWorld),H.setFromMatrixPosition(me.matrixWorld);const Te=z.distanceTo(H),be=le.projectionMatrix.elements,Ne=me.projectionMatrix.elements,Ue=be[14]/(be[10]-1),Re=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],j=(be[9]-1)/be[5],L=(be[8]-1)/be[0],D=(Ne[8]+1)/Ne[0],V=Ue*L,W=Ue*D,te=Te/(-L+D),ne=te*-L;le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ne),ee.translateZ(te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const T=Ue+te,y=Re+te,N=V-ne,B=W+(Te-ne),G=Ge*Re/y*T,K=j*Re/y*T;ee.projectionMatrix.makePerspective(N,B,G,K,T,y),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function q(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;x.near=b.near=E.near=ee.near,x.far=b.far=E.far=ee.far,(A!==x.near||F!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,F=x.far);const le=ee.parent,me=x.cameras;q(x,le);for(let Te=0;Te<me.length;Te++)q(me[Te],le);me.length===2?Y(x,E,b):x.projectionMatrix.copy(E.projectionMatrix),ie(ee,x,le)};function ie(ee,le,me){me===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Vs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)};let oe=null;function fe(ee,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Te=!1;me.length!==x.cameras.length&&(x.cameras.length=0,Te=!0);for(let be=0;be<me.length;be++){const Ne=me[be];let Ue=null;if(d!==null)Ue=d.getViewport(Ne);else{const Ge=h.getViewSubImage(f,Ne);Ue=Ge.viewport,be===0&&(e.setRenderTargetTextures(m,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(m))}let Re=C[be];Re===void 0&&(Re=new Qt,Re.layers.enable(be),Re.viewport=new at,C[be]=Re),Re.matrix.fromArray(Ne.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ne.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),be===0&&(x.matrix.copy(Re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Te===!0&&x.cameras.push(Re)}}for(let me=0;me<S.length;me++){const Te=v[me],be=S[me];Te!==null&&be!==void 0&&be.update(Te,le,c||o)}oe&&oe(ee,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const ue=new hg;ue.setAnimationLoop(fe),this.setAnimationLoop=function(ee){oe=ee},this.dispose=function(){}}}function ZA(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,cg(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function JA(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=r[S.id];M===void 0&&(g(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(S,w);const E=e.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function u(S){const v=h();S.__bindingPointIndex=v;const M=i.createBuffer(),w=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=r[S.id],M=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=M.length;E<b;E++){const C=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,A=C.length;x<A;x++){const F=C[x];if(d(F,E,x,w)===!0){const k=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let U=0;for(let z=0;z<$.length;z++){const H=$[z],Y=_(H);typeof H=="number"||typeof H=="boolean"?(F.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+U,F.__data)):H.isMatrix3?(F.__data[0]=H.elements[0],F.__data[1]=H.elements[1],F.__data[2]=H.elements[2],F.__data[3]=0,F.__data[4]=H.elements[3],F.__data[5]=H.elements[4],F.__data[6]=H.elements[5],F.__data[7]=0,F.__data[8]=H.elements[6],F.__data[9]=H.elements[7],F.__data[10]=H.elements[8],F.__data[11]=0):(H.toArray(F.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,v,M,w){const E=S.value,b=v+"_"+M;if(w[b]===void 0)return typeof E=="number"||typeof E=="boolean"?w[b]=E:w[b]=E.clone(),!0;{const C=w[b];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return w[b]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(S){const v=S.uniforms;let M=0;const w=16;for(let b=0,C=v.length;b<C;b++){const x=Array.isArray(v[b])?v[b]:[v[b]];for(let A=0,F=x.length;A<F;A++){const k=x[A],$=Array.isArray(k.value)?k.value:[k.value];for(let U=0,z=$.length;U<z;U++){const H=$[U],Y=_(H),q=M%w;q!==0&&w-q<Y.boundary&&(M+=w-q),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Y.storage}}}const E=M%w;return E>0&&(M+=w-E),S.__size=M,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class vg{constructor(e={}){const{canvas:t=jM(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const v=this;let M=!1,w=0,E=0,b=null,C=-1,x=null;const A=new at,F=new at;let k=null;const $=new Fe(0);let U=0,z=t.width,H=t.height,Y=1,q=null,ie=null;const oe=new at(0,0,z,H),fe=new at(0,0,z,H);let ue=!1;const ee=new Ch;let le=!1,me=!1,Te=null;const be=new Ye,Ne=new xe,Ue=new I,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return b===null?Y:1}let j=n;function L(R,X){for(let J=0;J<R.length;J++){const Q=R[J],Z=t.getContext(Q,X);if(Z!==null)return Z}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Th}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",pe,!1),j===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),j=L(X,R),j===null)throw L(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let D,V,W,te,ne,T,y,N,B,G,K,ae,re,ce,_e,Se,se,ze,Oe,Le,Ae,ye,P,he;function we(){D=new lb(j),V=new nb(j,D,e),D.init(V),ye=new qA(j,D,V),W=new XA(j,D,V),te=new hb(j),ne=new LA,T=new YA(j,D,W,ne,V,ye,te),y=new rb(v),N=new ab(v),B=new xS(j,V),P=new eb(j,D,B,V),G=new cb(j,B,te,P),K=new mb(j,G,B,te),Oe=new pb(j,V,T),Se=new ib(ne),ae=new PA(v,y,N,D,V,P,Se),re=new ZA(v,ne),ce=new IA,_e=new zA(D,V),ze=new QE(v,y,N,W,K,f,l),se=new WA(v,K,V),he=new JA(j,te,V,W),Le=new tb(j,D,te,V),Ae=new ub(j,D,te,V),te.programs=ae.programs,v.capabilities=V,v.extensions=D,v.properties=ne,v.renderLists=ce,v.shadowMap=se,v.state=W,v.info=te}we();const Ee=new $A(v,j);this.xr=Ee,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=D.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=D.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,H,!1))},this.getSize=function(R){return R.set(z,H)},this.setSize=function(R,X,J=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,H=X,t.width=Math.floor(R*Y),t.height=Math.floor(X*Y),J===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(z*Y,H*Y).floor()},this.setDrawingBufferSize=function(R,X,J){z=R,H=X,Y=J,t.width=Math.floor(R*J),t.height=Math.floor(X*J),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,X,J,Q){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,X,J,Q),W.viewport(A.copy(oe).multiplyScalar(Y).floor())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,X,J,Q){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,X,J,Q),W.scissor(F.copy(fe).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){W.setScissorTest(ue=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,X=!0,J=!0){let Q=0;if(R){let Z=!1;if(b!==null){const Me=b.texture.format;Z=Me===K_||Me===j_||Me===q_}if(Z){const Me=b.texture.type,Ce=Me===Qi||Me===Xi||Me===Eh||Me===Cr||Me===X_||Me===Y_,Ie=ze.getClearColor(),Be=ze.getClearAlpha(),qe=Ie.r,He=Ie.g,Ve=Ie.b;Ce?(d[0]=qe,d[1]=He,d[2]=Ve,d[3]=Be,j.clearBufferuiv(j.COLOR,0,d)):(g[0]=qe,g[1]=He,g[2]=Ve,g[3]=Be,j.clearBufferiv(j.COLOR,0,g))}else Q|=j.COLOR_BUFFER_BIT}X&&(Q|=j.DEPTH_BUFFER_BIT),J&&(Q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ce.dispose(),_e.dispose(),ne.dispose(),y.dispose(),N.dispose(),K.dispose(),P.dispose(),he.dispose(),ae.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",St),Ee.removeEventListener("sessionend",tt),Te&&(Te.dispose(),Te=null),bt.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=te.autoReset,X=se.enabled,J=se.autoUpdate,Q=se.needsUpdate,Z=se.type;we(),te.autoReset=R,se.enabled=X,se.autoUpdate=J,se.needsUpdate=Q,se.type=Z}function pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ve(R){const X=R.target;X.removeEventListener("dispose",ve),De(X)}function De(R){Pe(R),ne.remove(R)}function Pe(R){const X=ne.get(R).programs;X!==void 0&&(X.forEach(function(J){ae.releaseProgram(J)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,J,Q,Z,Me){X===null&&(X=Re);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=Og(R,X,J,Q,Z);W.setMaterial(Q,Ce);let Be=J.index,qe=1;if(Q.wireframe===!0){if(Be=G.getWireframeAttribute(J),Be===void 0)return;qe=2}const He=J.drawRange,Ve=J.attributes.position;let Tt=He.start*qe,mn=(He.start+He.count)*qe;Me!==null&&(Tt=Math.max(Tt,Me.start*qe),mn=Math.min(mn,(Me.start+Me.count)*qe)),Be!==null?(Tt=Math.max(Tt,0),mn=Math.min(mn,Be.count)):Ve!=null&&(Tt=Math.max(Tt,0),mn=Math.min(mn,Ve.count));const Dt=mn-Tt;if(Dt<0||Dt===1/0)return;P.setup(Z,Q,Ie,J,Be);let li,dt=Le;if(Be!==null&&(li=B.get(Be),dt=Ae,dt.setIndex(li)),Z.isMesh)Q.wireframe===!0?(W.setLineWidth(Q.wireframeLinewidth*Ge()),dt.setMode(j.LINES)):dt.setMode(j.TRIANGLES);else if(Z.isLine){let je=Q.linewidth;je===void 0&&(je=1),W.setLineWidth(je*Ge()),Z.isLineSegments?dt.setMode(j.LINES):Z.isLineLoop?dt.setMode(j.LINE_LOOP):dt.setMode(j.LINE_STRIP)}else Z.isPoints?dt.setMode(j.POINTS):Z.isSprite&&dt.setMode(j.TRIANGLES);if(Z.isBatchedMesh)dt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)dt.renderInstances(Tt,Dt,Z.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Fl=Math.min(J.instanceCount,je);dt.renderInstances(Tt,Dt,Fl)}else dt.render(Tt,Dt)};function $e(R,X,J){R.transparent===!0&&R.side===Cn&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Zo(R,X,J),R.side=bi,R.needsUpdate=!0,Zo(R,X,J),R.side=Cn):Zo(R,X,J)}this.compile=function(R,X,J=null){J===null&&(J=R),p=_e.get(J),p.init(),S.push(p),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),R!==J&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights(v._useLegacyLights);const Q=new Set;return R.traverse(function(Z){const Me=Z.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Ie=Me[Ce];$e(Ie,J,Z),Q.add(Ie)}else $e(Me,J,Z),Q.add(Me)}),S.pop(),p=null,Q},this.compileAsync=function(R,X,J=null){const Q=this.compile(R,X,J);return new Promise(Z=>{function Me(){if(Q.forEach(function(Ce){ne.get(Ce).currentProgram.isReady()&&Q.delete(Ce)}),Q.size===0){Z(R);return}setTimeout(Me,10)}D.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ze=null;function vt(R){Ze&&Ze(R)}function St(){bt.stop()}function tt(){bt.start()}const bt=new hg;bt.setAnimationLoop(vt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(R){Ze=R,Ee.setAnimationLoop(R),R===null?bt.stop():bt.start()},Ee.addEventListener("sessionstart",St),Ee.addEventListener("sessionend",tt),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(X),X=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,b),p=_e.get(R,S.length),p.init(),S.push(p),be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ee.setFromProjectionMatrix(be),me=this.localClippingEnabled,le=Se.init(this.clippingPlanes,me),_=ce.get(R,m.length),_.init(),m.push(_),Yn(R,X,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,ie),this.info.render.frame++,le===!0&&Se.beginShadows();const J=p.state.shadowsArray;if(se.render(J,R,X),le===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),ze.render(_,R),p.setupLights(v._useLegacyLights),X.isArrayCamera){const Q=X.cameras;for(let Z=0,Me=Q.length;Z<Me;Z++){const Ce=Q[Z];Wh(_,R,Ce,Ce.viewport)}}else Wh(_,R,X);b!==null&&(T.updateMultisampleRenderTarget(b),T.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,X),P.resetDefaultState(),C=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Yn(R,X,J,Q){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){Q&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const Ce=K.update(R),Ie=R.material;Ie.visible&&_.push(R,Ce,Ie,J,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const Ce=K.update(R),Ie=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ue.copy(Ce.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray(Ie)){const Be=Ce.groups;for(let qe=0,He=Be.length;qe<He;qe++){const Ve=Be[qe],Tt=Ie[Ve.materialIndex];Tt&&Tt.visible&&_.push(R,Ce,Tt,J,Ue.z,Ve)}}else Ie.visible&&_.push(R,Ce,Ie,J,Ue.z,null)}}const Me=R.children;for(let Ce=0,Ie=Me.length;Ce<Ie;Ce++)Yn(Me[Ce],X,J,Q)}function Wh(R,X,J,Q){const Z=R.opaque,Me=R.transmissive,Ce=R.transparent;p.setupLightsView(J),le===!0&&Se.setGlobalState(v.clippingPlanes,J),Me.length>0&&Ug(Z,Me,X,J),Q&&W.viewport(A.copy(Q)),Z.length>0&&$o(Z,X,J),Me.length>0&&$o(Me,X,J),Ce.length>0&&$o(Ce,X,J),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Ug(R,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Me=V.isWebGL2;Te===null&&(Te=new Or(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?Vo:Qi,minFilter:Ur,samples:Me?4:0})),v.getDrawingBufferSize(Ne),Me?Te.setSize(Ne.x,Ne.y):Te.setSize(ml(Ne.x),ml(Ne.y));const Ce=v.getRenderTarget();v.setRenderTarget(Te),v.getClearColor($),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Ie=v.toneMapping;v.toneMapping=Ji,$o(R,J,Q),T.updateMultisampleRenderTarget(Te),T.updateRenderTargetMipmap(Te);let Be=!1;for(let qe=0,He=X.length;qe<He;qe++){const Ve=X[qe],Tt=Ve.object,mn=Ve.geometry,Dt=Ve.material,li=Ve.group;if(Dt.side===Cn&&Tt.layers.test(Q.layers)){const dt=Dt.side;Dt.side=hn,Dt.needsUpdate=!0,Xh(Tt,J,Q,mn,Dt,li),Dt.side=dt,Dt.needsUpdate=!0,Be=!0}}Be===!0&&(T.updateMultisampleRenderTarget(Te),T.updateRenderTargetMipmap(Te)),v.setRenderTarget(Ce),v.setClearColor($,U),v.toneMapping=Ie}function $o(R,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Me=R.length;Z<Me;Z++){const Ce=R[Z],Ie=Ce.object,Be=Ce.geometry,qe=Q===null?Ce.material:Q,He=Ce.group;Ie.layers.test(J.layers)&&Xh(Ie,X,J,Be,qe,He)}}function Xh(R,X,J,Q,Z,Me){R.onBeforeRender(v,X,J,Q,Z,Me),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(v,X,J,Q,R,Me),Z.transparent===!0&&Z.side===Cn&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,v.renderBufferDirect(J,X,Q,Z,R,Me),Z.side=bi,Z.needsUpdate=!0,v.renderBufferDirect(J,X,Q,Z,R,Me),Z.side=Cn):v.renderBufferDirect(J,X,Q,Z,R,Me),R.onAfterRender(v,X,J,Q,Z,Me)}function Zo(R,X,J){X.isScene!==!0&&(X=Re);const Q=ne.get(R),Z=p.state.lights,Me=p.state.shadowsArray,Ce=Z.state.version,Ie=ae.getParameters(R,Z.state,Me,X,J),Be=ae.getProgramCacheKey(Ie);let qe=Q.programs;Q.environment=R.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(R.isMeshStandardMaterial?N:y).get(R.envMap||Q.environment),qe===void 0&&(R.addEventListener("dispose",ve),qe=new Map,Q.programs=qe);let He=qe.get(Be);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===Ce)return qh(R,Ie),He}else Ie.uniforms=ae.getUniforms(R),R.onBuild(J,Ie,v),R.onBeforeCompile(Ie,v),He=ae.acquireProgram(Ie,Be),qe.set(Be,He),Q.uniforms=Ie.uniforms;const Ve=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Se.uniform),qh(R,Ie),Q.needsLights=Bg(R),Q.lightsStateVersion=Ce,Q.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMap.value=Z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotShadowMap.value=Z.state.spotShadowMap,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMap.value=Z.state.pointShadowMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function Yh(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=$a.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function qh(R,X){const J=ne.get(R);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Og(R,X,J,Q,Z){X.isScene!==!0&&(X=Re),T.resetTextureUnits();const Me=X.fog,Ce=Q.isMeshStandardMaterial?X.environment:null,Ie=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ft,Be=(Q.isMeshStandardMaterial?N:y).get(Q.envMap||Ce),qe=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!J.morphAttributes.position,Tt=!!J.morphAttributes.normal,mn=!!J.morphAttributes.color;let Dt=Ji;Q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const li=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=li!==void 0?li.length:0,je=ne.get(Q),Fl=p.state.lights;if(le===!0&&(me===!0||R!==x)){const En=R===x&&Q.id===C;Se.setState(Q,R,En)}let xt=!1;Q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Fl.state.version||je.outputColorSpace!==Ie||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||je.envMap!==Be||Q.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==He||je.morphTargets!==Ve||je.morphNormals!==Tt||je.morphColors!==mn||je.toneMapping!==Dt||V.isWebGL2===!0&&je.morphTargetsCount!==dt)&&(xt=!0):(xt=!0,je.__version=Q.version);let rr=je.currentProgram;xt===!0&&(rr=Zo(Q,X,Z));let jh=!1,Js=!1,Bl=!1;const kt=rr.getUniforms(),sr=je.uniforms;if(W.useProgram(rr.program)&&(jh=!0,Js=!0,Bl=!0),Q.id!==C&&(C=Q.id,Js=!0),jh||x!==R){kt.setValue(j,"projectionMatrix",R.projectionMatrix),kt.setValue(j,"viewMatrix",R.matrixWorldInverse);const En=kt.map.cameraPosition;En!==void 0&&En.setValue(j,Ue.setFromMatrixPosition(R.matrixWorld)),V.logarithmicDepthBuffer&&kt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&kt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),x!==R&&(x=R,Js=!0,Bl=!0)}if(Z.isSkinnedMesh){kt.setOptional(j,Z,"bindMatrix"),kt.setOptional(j,Z,"bindMatrixInverse");const En=Z.skeleton;En&&(V.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),kt.setValue(j,"boneTexture",En.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(kt.setOptional(j,Z,"batchingTexture"),kt.setValue(j,"batchingTexture",Z._matricesTexture,T));const zl=J.morphAttributes;if((zl.position!==void 0||zl.normal!==void 0||zl.color!==void 0&&V.isWebGL2===!0)&&Oe.update(Z,J,rr),(Js||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,kt.setValue(j,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(sr.envMap.value=Be,sr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Js&&(kt.setValue(j,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&Fg(sr,Bl),Me&&Q.fog===!0&&re.refreshFogUniforms(sr,Me),re.refreshMaterialUniforms(sr,Q,Y,H,Te),$a.upload(j,Yh(je),sr,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($a.upload(j,Yh(je),sr,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&kt.setValue(j,"center",Z.center),kt.setValue(j,"modelViewMatrix",Z.modelViewMatrix),kt.setValue(j,"normalMatrix",Z.normalMatrix),kt.setValue(j,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const En=Q.uniformsGroups;for(let kl=0,zg=En.length;kl<zg;kl++)if(V.isWebGL2){const Kh=En[kl];he.update(Kh,rr),he.bind(Kh,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function Fg(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Bg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,X,J){ne.get(R.texture).__webglTexture=X,ne.get(R.depthTexture).__webglTexture=J;const Q=ne.get(R);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const J=ne.get(R);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,J=0){b=R,w=X,E=J;let Q=!0,Z=null,Me=!1,Ce=!1;if(R){const Be=ne.get(R);Be.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(j.FRAMEBUFFER,null),Q=!1):Be.__webglFramebuffer===void 0?T.setupRenderTarget(R):Be.__hasExternalTextures&&T.rebindTextures(R,ne.get(R.texture).__webglTexture,ne.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ce=!0);const He=ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[X])?Z=He[X][J]:Z=He[X],Me=!0):V.isWebGL2&&R.samples>0&&T.useMultisampledRTT(R)===!1?Z=ne.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?Z=He[J]:Z=He,A.copy(R.viewport),F.copy(R.scissor),k=R.scissorTest}else A.copy(oe).multiplyScalar(Y).floor(),F.copy(fe).multiplyScalar(Y).floor(),k=ue;if(W.bindFramebuffer(j.FRAMEBUFFER,Z)&&V.drawBuffers&&Q&&W.drawBuffers(R,Z),W.viewport(A),W.scissor(F),W.setScissorTest(k),Me){const Be=ne.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,J)}else if(Ce){const Be=ne.get(R.texture),qe=X||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Be.__webglTexture,J||0,qe)}C=-1},this.readRenderTargetPixels=function(R,X,J,Q,Z,Me,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){W.bindFramebuffer(j.FRAMEBUFFER,Ie);try{const Be=R.texture,qe=Be.format,He=Be.type;if(qe!==Ln&&ye.convert(qe)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===Vo&&(D.has("EXT_color_buffer_half_float")||V.isWebGL2&&D.has("EXT_color_buffer_float"));if(He!==Qi&&ye.convert(He)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===vi&&(V.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-Q&&J>=0&&J<=R.height-Z&&j.readPixels(X,J,Q,Z,ye.convert(qe),ye.convert(He),Me)}finally{const Be=b!==null?ne.get(b).__webglFramebuffer:null;W.bindFramebuffer(j.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(R,X,J=0){const Q=Math.pow(2,-J),Z=Math.floor(X.image.width*Q),Me=Math.floor(X.image.height*Q);T.setTexture2D(X,0),j.copyTexSubImage2D(j.TEXTURE_2D,J,0,0,R.x,R.y,Z,Me),W.unbindTexture()},this.copyTextureToTexture=function(R,X,J,Q=0){const Z=X.image.width,Me=X.image.height,Ce=ye.convert(J.format),Ie=ye.convert(J.type);T.setTexture2D(J,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,J.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Q,R.x,R.y,Z,Me,Ce,Ie,X.image.data):X.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Q,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Ce,X.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,Q,R.x,R.y,Ce,Ie,X.image),Q===0&&J.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(R,X,J,Q,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=R.max.x-R.min.x+1,Ce=R.max.y-R.min.y+1,Ie=R.max.z-R.min.z+1,Be=ye.convert(Q.format),qe=ye.convert(Q.type);let He;if(Q.isData3DTexture)T.setTexture3D(Q,0),He=j.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)T.setTexture2DArray(Q,0),He=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ve=j.getParameter(j.UNPACK_ROW_LENGTH),Tt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),mn=j.getParameter(j.UNPACK_SKIP_PIXELS),Dt=j.getParameter(j.UNPACK_SKIP_ROWS),li=j.getParameter(j.UNPACK_SKIP_IMAGES),dt=J.isCompressedTexture?J.mipmaps[Z]:J.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,dt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,dt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,R.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,R.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?j.texSubImage3D(He,Z,X.x,X.y,X.z,Me,Ce,Ie,Be,qe,dt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(He,Z,X.x,X.y,X.z,Me,Ce,Ie,Be,dt.data)):j.texSubImage3D(He,Z,X.x,X.y,X.z,Me,Ce,Ie,Be,qe,dt),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ve),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,mn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Dt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,li),Z===0&&Q.generateMipmaps&&j.generateMipmap(He),W.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),W.unbindTexture()},this.resetState=function(){w=0,E=0,b=null,W.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bh?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?Lr:J_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?mt:Ft}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class QA extends vg{}QA.prototype.isWebGL1Renderer=!0;let e1=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class xg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new I;class Xo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yg extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const oo=new I,cs=new I,us=new I,hs=new xe,ao=new xe,Mg=new Ye,wa=new I,lo=new I,Ra=new I,dp=new xe,Nc=new xe,pp=new xe;class t1 extends ft{constructor(e=new yg){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xg(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Xo(n,3,0,!1)),ls.setAttribute("uv",new Xo(n,2,3,!1))}this.geometry=ls,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Mg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Ca(wa.set(-.5,-.5,0),us,o,cs,r,s),Ca(lo.set(.5,-.5,0),us,o,cs,r,s),Ca(Ra.set(.5,.5,0),us,o,cs,r,s),dp.set(0,0),Nc.set(1,0),pp.set(1,1);let a=e.ray.intersectTriangle(wa,lo,Ra,!1,oo);if(a===null&&(Ca(lo.set(-.5,.5,0),us,o,cs,r,s),Nc.set(0,1),a=e.ray.intersectTriangle(wa,Ra,lo,!1,oo),a===null))return;const l=e.ray.origin.distanceTo(oo);l<e.near||l>e.far||t.push({distance:l,point:oo.clone(),uv:xn.getInterpolation(oo,wa,lo,Ra,dp,Nc,pp,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ca(i,e,t,n,r,s){hs.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ao.x=s*hs.x-r*hs.y,ao.y=r*hs.x+s*hs.y):ao.copy(hs),i.copy(e),i.x+=ao.x,i.y+=ao.y,i.applyMatrix4(Mg)}const mp=new I,_p=new at,gp=new at,n1=new I,vp=new Ye,Pa=new I,Uc=new oi,xp=new Ye,Oc=new js;class i1 extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uc.copy(this.boundingSphere),Uc.applyMatrix4(r),e.ray.intersectsSphere(Uc)!==!1&&(xp.copy(r).invert(),Oc.copy(e.ray).applyMatrix4(xp),!(this.boundingBox!==null&&Oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;_p.fromBufferAttribute(r.attributes.skinIndex,e),gp.fromBufferAttribute(r.attributes.skinWeight,e),mp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=gp.getComponent(s);if(o!==0){const a=_p.getComponent(s);vp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(n1.copy(mp).applyMatrix4(vp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Sg extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class r1 extends Bt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Nt,u=Nt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yp=new Ye,s1=new Ye;class Dh{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:s1;yp.multiplyMatrices(a,t[s]),yp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new r1(t,e,e,Ln,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sg),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Iu extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new Ye,Mp=new Ye,La=[],Sp=new wi,o1=new Ye,co=new nn,uo=new oi;class a1 extends nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Iu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,o1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Sp.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(Sp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),uo.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fs),Mp.multiplyMatrices(n,fs),co.matrixWorld=Mp,co.raycast(e,La);for(let o=0,a=La.length;o<a;o++){const l=La[o];l.instanceId=s,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Iu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ih extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tp=new I,Ep=new I,bp=new Ye,Fc=new js,Da=new oi;class Nh extends ft{constructor(e=new rn,t=new Ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Tp.fromBufferAttribute(t,r-1),Ep.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Tp.distanceTo(Ep);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,e.ray.intersectsSphere(Da)===!1)return;bp.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(bp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=m,M=S-1;v<M;v+=d){const w=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,E),Fc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,M=S-1;v<M;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Fc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ap=new I,wp=new I;class Tg extends Nh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ap.fromBufferAttribute(t,r),wp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ap.distanceTo(wp);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l1 extends Nh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Eg extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rp=new Ye,Nu=new js,Ia=new oi,Na=new I;class bg extends ft{constructor(e=new rn,t=new Eg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,e.ray.intersectsSphere(Ia)===!1)return;Rp.copy(r).invert(),Nu.copy(e.ray).applyMatrix4(Rp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Na.fromBufferAttribute(h,p),Cp(Na,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Na.fromBufferAttribute(h,g),Cp(Na,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cp(i,e,t,n,r,s,o){const a=Nu.distanceSqToPoint(i);if(a<t){const l=new I;Nu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new xe:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,r=[],s=[],o=[],a=new I,l=new Ye;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Rt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Rt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ag extends Ri{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new xe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c1 extends Ag{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ua=new I,Bc=new Uh,zc=new Uh,kc=new Uh;class Uu extends Ri{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ua.subVectors(r[0],r[1]).add(r[0]),c=Ua);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ua.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Bc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),zc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),kc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),zc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),kc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Bc.calc(l),zc.calc(l),kc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pp(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function u1(i,e){const t=1-i;return t*t*e}function h1(i,e){return 2*(1-i)*i*e}function f1(i,e){return i*i*e}function Ao(i,e,t,n){return u1(i,e)+h1(i,t)+f1(i,n)}function d1(i,e){const t=1-i;return t*t*t*e}function p1(i,e){const t=1-i;return 3*t*t*i*e}function m1(i,e){return 3*(1-i)*i*i*e}function _1(i,e){return i*i*i*e}function wo(i,e,t,n,r){return d1(i,e)+p1(i,t)+m1(i,n)+_1(i,r)}class g1 extends Ri{constructor(e=new xe,t=new xe,n=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,r.x,s.x,o.x,a.x),wo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v1 extends Ri{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,r.x,s.x,o.x,a.x),wo(e,r.y,s.y,o.y,a.y),wo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x1 extends Ri{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends Ri{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends Ri{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ao(e,r.x,s.x,o.x),Ao(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wg extends Ri{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ao(e,r.x,s.x,o.x),Ao(e,r.y,s.y,o.y),Ao(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S1 extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Pp(a,l.x,c.x,u.x,h.x),Pp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new xe().fromArray(r))}return this}}var T1=Object.freeze({__proto__:null,ArcCurve:c1,CatmullRomCurve3:Uu,CubicBezierCurve:g1,CubicBezierCurve3:v1,EllipseCurve:Ag,LineCurve:x1,LineCurve3:y1,QuadraticBezierCurve:M1,QuadraticBezierCurve3:wg,SplineCurve:S1});class Oh extends rn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;S(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function S(){const M=new I,w=new I;let E=0;const b=(t-e)/n;for(let C=0;C<=s;C++){const x=[],A=C/s,F=A*(t-e)+e;for(let k=0;k<=r;k++){const $=k/r,U=$*l+a,z=Math.sin(U),H=Math.cos(U);w.x=F*z,w.y=-A*n+p,w.z=F*H,h.push(w.x,w.y,w.z),M.set(z,b,H).normalize(),f.push(M.x,M.y,M.z),d.push($,1-A),x.push(g++)}_.push(x)}for(let C=0;C<r;C++)for(let x=0;x<s;x++){const A=_[x][C],F=_[x+1][C],k=_[x+1][C+1],$=_[x][C+1];u.push(A,F,$),u.push(F,k,$),E+=6}c.addGroup(m,E,0),m+=E}function v(M){const w=g,E=new xe,b=new I;let C=0;const x=M===!0?e:t,A=M===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,p*A,0),f.push(0,A,0),d.push(.5,.5),g++;const F=g;for(let k=0;k<=r;k++){const U=k/r*l+a,z=Math.cos(U),H=Math.sin(U);b.x=x*H,b.y=p*A,b.z=x*z,h.push(b.x,b.y,b.z),f.push(0,A,0),E.x=z*.5+.5,E.y=H*.5*A+.5,d.push(E.x,E.y),g++}for(let k=0;k<r;k++){const $=w+k,U=F+k;M===!0?u.push(U,U+1,$):u.push(U+1,U,$),C+=3}c.addGroup(m,C,M===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Oa=new I,Fa=new I,Hc=new I,Ba=new xn;class E1 extends rn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ws*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Ba;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Ba.getNormal(Hc),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){const v=(S+1)%3,M=h[S],w=h[v],E=Ba[u[S]],b=Ba[u[v]],C=`${M}_${w}`,x=`${w}_${M}`;x in f&&f[x]?(Hc.dot(f[x].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(b.x,b.y,b.z)),f[x]=null):C in f||(f[C]={index0:c[S],index1:c[v],normal:Hc.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];Oa.fromBufferAttribute(a,_),Fa.fromBufferAttribute(a,p),d.push(Oa.x,Oa.y,Oa.z),d.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new jt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fh extends rn{constructor(e=new wg(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new xe;let u=new I;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function _(){for(let v=0;v<t;v++)p(v);p(s===!1?t:0),S(),m()}function p(v){u=e.getPointAt(v/t,u);const M=o.normals[v],w=o.binormals[v];for(let E=0;E<=r;E++){const b=E/r*Math.PI*2,C=Math.sin(b),x=-Math.cos(b);l.x=x*M.x+C*w.x,l.y=x*M.y+C*w.y,l.z=x*M.z+C*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let M=1;M<=r;M++){const w=(r+1)*(v-1)+(M-1),E=(r+1)*v+(M-1),b=(r+1)*v+M,C=(r+1)*(v-1)+M;g.push(w,E,C),g.push(E,b,C)}}function S(){for(let v=0;v<=t;v++)for(let M=0;M<=r;M++)c.x=v/t,c.y=M/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fh(new T1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bh extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q_,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends Bh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function za(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function b1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function A1(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Lp(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Rg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ko{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w1 extends Ko{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Td,endingEnd:Td}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ed:s=e,a=2*t-n;break;case bd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ed:o=e,l=2*n-t;break;case bd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*_+.5*g,M=d*p-d*_;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+S*o[c+w]+v*o[l+w]+M*o[h+w];return s}}class R1 extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class C1 extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new C1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new R1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&b1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===uc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Hs;class $s extends ai{}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Go;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Cg extends ai{}Cg.prototype.ValueTypeName="color";class Ws extends ai{}Ws.prototype.ValueTypeName="number";class P1 extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)si.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Fr extends ai{InterpolantFactoryMethodLinear(e){return new P1(this.times,this.values,this.getValueSize(),e)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=Hs;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends ai{}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Go;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends ai{}Xs.prototype.ValueTypeName="vector";class L1{constructor(e,t=-1,n,r=SM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(I1(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ai.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=A1(l);l=Lp(l,1,u),c=Lp(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];Rg(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let S=0;S!==f[g].morphTargets.length;++S){const v=f[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}r.push(new Ws(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Xs,d+".position",f,"pos",r),n(Fr,d+".quaternion",f,"rot",r),n(Xs,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function D1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return Cg;case"quaternion":return Fr;case"bool":case"boolean":return $s;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function I1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=D1(i.type);if(i.times===void 0){const t=[],n=[];Rg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class N1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const U1=new N1;class Vr{constructor(e){this.manager=e!==void 0?e:U1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class O1 extends Error{constructor(e,t){super(e),this.response=t}}class Pg extends Vr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:r});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=pi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:v,value:M})=>{if(v)m.close();else{_+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,b=u.length;E<b;E++){const C=u[E];C.onProgress&&C.onProgress(w)}m.enqueue(M),S()}})}}});return new Response(p)}else throw new O1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Yi.add(e,c);const u=pi[e];delete pi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lg extends Vr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Wo("img");function l(){u(),Yi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class F1 extends Vr{constructor(e){super(e)}load(e,t,n,r){const s=new Rh;s.colorSpace=mt;const o=new Lg(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Ou extends Vr{constructor(e){super(e)}load(e,t,n,r){const s=new Bt,o=new Lg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class zh extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vc=new Ye,Dp=new I,Ip=new I;class kh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ip),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B1 extends kh{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class z1 extends zh{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new B1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Np=new Ye,ho=new I,Gc=new I;class k1 extends kh{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(ho),Gc.copy(n.position),Gc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Gc),n.updateMatrixWorld(),r.makeTranslation(-ho.x,-ho.y,-ho.z),Np.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Np)}}class H1 extends zh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new k1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class V1 extends kh{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G1 extends zh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new V1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ro{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class W1 extends Vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Yi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Yi.add(e,l),s.manager.itemStart(e)}}const Hh="\\[\\]\\.:\\/",X1=new RegExp("["+Hh+"]","g"),Vh="[^"+Hh+"]",Y1="[^"+Hh.replace("\\.","")+"]",q1=/((?:WC+[\/:])*)/.source.replace("WC",Vh),j1=/(WCOD+)?/.source.replace("WCOD",Y1),K1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),$1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),Z1=new RegExp("^"+q1+j1+K1+$1+"$"),J1=["material","materials","bones","map"];class Q1{constructor(e,t,n){const r=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X1,"")}static parseTrackName(e){const t=Z1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);J1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Q1;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ew{constructor(e,t,n=0,r=1/0){this.ray=new js(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(Up),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fu(e[r],this,n,t);return n.sort(Up),n}}function Up(i,e){return i.distance-e.distance}function Fu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Fu(r[s],e,t,!0)}}class Op{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);const tw="/three_smart_city/assets/1-p-0OqYBW.jpg",nw="/three_smart_city/assets/2-unEArbQU.jpg",iw="/three_smart_city/assets/3-ruWVvMIJ.jpg",rw="/three_smart_city/assets/4-K9maQeb2.jpg",sw="/three_smart_city/assets/5-j3rK8uKA.jpg",ow="/three_smart_city/assets/6-nAPJwtsS.jpg",aw="/three_smart_city/assets/city-ITBTlLRv.glb",Fp={type:"change"},Wc={type:"start"},Bp={type:"end"},ka=new js,zp=new ki,lw=Math.cos(70*tg.DEG2RAD);class cw extends Hr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",_e),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fp),n.update(),s=r.NONE},this.update=function(){const P=new I,he=new si().setFromUnitVectors(e.up,new I(0,1,0)),we=he.clone().invert(),Ee=new I,de=new si,O=new I,pe=2*Math.PI;return function(De=null){const Pe=n.object.position;P.copy(Pe).sub(n.target),P.applyQuaternion(he),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&k(A(De)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let $e=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite($e)&&isFinite(Ze)&&($e<-Math.PI?$e+=pe:$e>Math.PI&&($e-=pe),Ze<-Math.PI?Ze+=pe:Ze>Math.PI&&(Ze-=pe),$e<=Ze?a.theta=Math.max($e,Math.min(Ze,a.theta)):a.theta=a.theta>($e+Ze)/2?Math.max($e,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=oe(a.radius):a.radius=oe(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(we),Pe.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let vt=!1;if(n.zoomToCursor&&E){let St=null;if(n.object.isPerspectiveCamera){const tt=P.length();St=oe(tt*c);const bt=tt-St;n.object.position.addScaledVector(M,bt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const tt=new I(w.x,w.y,0);tt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),vt=!0;const bt=new I(w.x,w.y,0);bt.unproject(n.object),n.object.position.sub(bt).add(tt),n.object.updateMatrixWorld(),St=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(St).add(n.object.position):(ka.origin.copy(n.object.position),ka.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ka.direction))<lw?e.lookAt(n.target):(zp.setFromNormalAndCoplanarPoint(n.object.up,n.target),ka.intersectPlane(zp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),vt=!0);return c=1,E=!1,vt||Ee.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o||O.distanceToSquared(n.target)>0?(n.dispatchEvent(Fp),Ee.copy(n.object.position),de.copy(n.object.quaternion),O.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ze),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",N),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",N),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Op,l=new Op;let c=1;const u=new I,h=new xe,f=new xe,d=new xe,g=new xe,_=new xe,p=new xe,m=new xe,S=new xe,v=new xe,M=new I,w=new xe;let E=!1;const b=[],C={};let x=!1;function A(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function F(P){const he=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*he)}function k(P){l.theta-=P}function $(P){l.phi-=P}const U=function(){const P=new I;return function(we,Ee){P.setFromMatrixColumn(Ee,0),P.multiplyScalar(-we),u.add(P)}}(),z=function(){const P=new I;return function(we,Ee){n.screenSpacePanning===!0?P.setFromMatrixColumn(Ee,1):(P.setFromMatrixColumn(Ee,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(we),u.add(P)}}(),H=function(){const P=new I;return function(we,Ee){const de=n.domElement;if(n.object.isPerspectiveCamera){const O=n.object.position;P.copy(O).sub(n.target);let pe=P.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),U(2*we*pe/de.clientHeight,n.object.matrix),z(2*Ee*pe/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(we*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),z(Ee*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(P,he){if(!n.zoomToCursor)return;E=!0;const we=n.domElement.getBoundingClientRect(),Ee=P-we.left,de=he-we.top,O=we.width,pe=we.height;w.x=Ee/O*2-1,w.y=-(de/pe)*2+1,M.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function oe(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function fe(P){h.set(P.clientX,P.clientY)}function ue(P){ie(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function ee(P){g.set(P.clientX,P.clientY)}function le(P){f.set(P.clientX,P.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const he=n.domElement;k(2*Math.PI*d.x/he.clientHeight),$(2*Math.PI*d.y/he.clientHeight),h.copy(f),n.update()}function me(P){S.set(P.clientX,P.clientY),v.subVectors(S,m),v.y>0?Y(F(v.y)):v.y<0&&q(F(v.y)),m.copy(S),n.update()}function Te(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_),n.update()}function be(P){ie(P.clientX,P.clientY),P.deltaY<0?q(F(P.deltaY)):P.deltaY>0&&Y(F(P.deltaY)),n.update()}function Ne(P){let he=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),he=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),he=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),he=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),he=!0;break}he&&(P.preventDefault(),n.update())}function Ue(P){if(b.length===1)h.set(P.pageX,P.pageY);else{const he=ye(P),we=.5*(P.pageX+he.x),Ee=.5*(P.pageY+he.y);h.set(we,Ee)}}function Re(P){if(b.length===1)g.set(P.pageX,P.pageY);else{const he=ye(P),we=.5*(P.pageX+he.x),Ee=.5*(P.pageY+he.y);g.set(we,Ee)}}function Ge(P){const he=ye(P),we=P.pageX-he.x,Ee=P.pageY-he.y,de=Math.sqrt(we*we+Ee*Ee);m.set(0,de)}function j(P){n.enableZoom&&Ge(P),n.enablePan&&Re(P)}function L(P){n.enableZoom&&Ge(P),n.enableRotate&&Ue(P)}function D(P){if(b.length==1)f.set(P.pageX,P.pageY);else{const we=ye(P),Ee=.5*(P.pageX+we.x),de=.5*(P.pageY+we.y);f.set(Ee,de)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const he=n.domElement;k(2*Math.PI*d.x/he.clientHeight),$(2*Math.PI*d.y/he.clientHeight),h.copy(f)}function V(P){if(b.length===1)_.set(P.pageX,P.pageY);else{const he=ye(P),we=.5*(P.pageX+he.x),Ee=.5*(P.pageY+he.y);_.set(we,Ee)}p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_)}function W(P){const he=ye(P),we=P.pageX-he.x,Ee=P.pageY-he.y,de=Math.sqrt(we*we+Ee*Ee);S.set(0,de),v.set(0,Math.pow(S.y/m.y,n.zoomSpeed)),Y(v.y),m.copy(S);const O=(P.pageX+he.x)*.5,pe=(P.pageY+he.y)*.5;ie(O,pe)}function te(P){n.enableZoom&&W(P),n.enablePan&&V(P)}function ne(P){n.enableZoom&&W(P),n.enableRotate&&D(P)}function T(P){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",N)),Oe(P),P.pointerType==="touch"?Se(P):B(P))}function y(P){n.enabled!==!1&&(P.pointerType==="touch"?se(P):G(P))}function N(P){Le(P),b.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",N)),n.dispatchEvent(Bp),s=r.NONE}function B(P){let he;switch(P.button){case 0:he=n.mouseButtons.LEFT;break;case 1:he=n.mouseButtons.MIDDLE;break;case 2:he=n.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Wr.DOLLY:if(n.enableZoom===!1)return;ue(P),s=r.DOLLY;break;case Wr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ee(P),s=r.PAN}else{if(n.enableRotate===!1)return;fe(P),s=r.ROTATE}break;case Wr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;fe(P),s=r.ROTATE}else{if(n.enablePan===!1)return;ee(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Wc)}function G(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;le(P);break;case r.DOLLY:if(n.enableZoom===!1)return;me(P);break;case r.PAN:if(n.enablePan===!1)return;Te(P);break}}function K(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(Wc),be(ae(P)),n.dispatchEvent(Bp))}function ae(P){const he=P.deltaMode,we={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(he){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return P.ctrlKey&&!x&&(we.deltaY*=10),we}function re(P){P.key==="Control"&&(x=!0,document.addEventListener("keyup",ce,{passive:!0,capture:!0}))}function ce(P){P.key==="Control"&&(x=!1,document.removeEventListener("keyup",ce,{passive:!0,capture:!0}))}function _e(P){n.enabled===!1||n.enablePan===!1||Ne(P)}function Se(P){switch(Ae(P),b.length){case 1:switch(n.touches.ONE){case Xr.ROTATE:if(n.enableRotate===!1)return;Ue(P),s=r.TOUCH_ROTATE;break;case Xr.PAN:if(n.enablePan===!1)return;Re(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Xr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(P),s=r.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Wc)}function se(P){switch(Ae(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;D(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;V(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ne(P),n.update();break;default:s=r.NONE}}function ze(P){n.enabled!==!1&&P.preventDefault()}function Oe(P){b.push(P.pointerId)}function Le(P){delete C[P.pointerId];for(let he=0;he<b.length;he++)if(b[he]==P.pointerId){b.splice(he,1);return}}function Ae(P){let he=C[P.pointerId];he===void 0&&(he=new xe,C[P.pointerId]=he),he.set(P.pageX,P.pageY)}function ye(P){const he=P.pointerId===b[0]?b[1]:b[0];return C[he]}n.domElement.addEventListener("contextmenu",ze),n.domElement.addEventListener("pointerdown",T),n.domElement.addEventListener("pointercancel",N),n.domElement.addEventListener("wheel",K,{passive:!1}),document.addEventListener("keydown",re,{passive:!0,capture:!0}),this.update()}}function kp(i,e){if(e===TM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ru||e===Z_){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Ru)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class uw extends Vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mw(t)}),this.register(function(t){return new Ew(t)}),this.register(function(t){return new bw(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new ww(t)}),this.register(function(t){return new Rw(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ro.extractUrlBase(e);o=Ro.resolveURL(c,this.path)}else o=Ro.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Pg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dg){try{o[Je.KHR_BINARY_GLTF]=new Cw(e)}catch(h){r&&r(h);return}s=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Vw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new dw;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new Pw(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new Lw;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new Dw;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function hw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fw{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ft);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new G1(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new H1(u),c.distance=h;break;case"spot":c=new z1(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class dw{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ft),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,mt))}return Promise.all(r)}}class pw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class mw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(s)}}class _w{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class gw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class vw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class xw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],Ft),Promise.all(s)}}class yw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Mw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],Ft),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(s)}}class Sw{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Tw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Ew{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class bw{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Aw{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ww{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class Rw{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==wn.TRIANGLES&&c.mode!==wn.TRIANGLE_STRIP&&c.mode!==wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Ye,p=new I,m=new si,S=new I(1,1,1),v=new a1(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,_.compose(p,m,S));for(const M in l)if(M==="_COLOR_0"){const w=l[M];v.instanceColor=new Iu(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);ft.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Dg="glTF",fo=12,Hp={JSON:1313821514,BIN:5130562};class Cw{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-fo,s=new DataView(e,fo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Hp.JSON){const c=new Uint8Array(e,fo+o,a);this.content=n.decode(c)}else if(l===Hp.BIN){const c=fo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Pw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Bu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Bu[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Cs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(d)},a,c,Ft,f)})})}}class Lw{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Dw{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Ig extends Ko{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,S=1-p,v=m-f+h;for(let M=0;M!==a;M++){const w=o[_+M+a],E=o[_+M+l]*u,b=o[g+M+a],C=o[g+M]*u;s[M]=S*w+v*E+p*b+m*C}return s}}const Iw=new si;class Nw extends Ig{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Iw.fromArray(s).normalize().toArray(s),s}}const wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vp={9728:Nt,9729:on,9984:wu,9985:G_,9986:Ka,9987:Ur},Gp={33071:Pn,33648:Ho,10497:Nr},Xc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Uw={CUBICSPLINE:void 0,LINEAR:Hs,STEP:Go},Yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ow(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),i.DefaultMaterial}function pr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fw(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Bw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zw(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qc(t.attributes):e=i.indices+":"+qc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+qc(i.targets[n]);return e}function qc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hw=new Ye;class Vw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Ou(this.options.manager):this.textureLoader=new W1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return pr(s,a,r),Hi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Ro.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Xc[r.type],a=Cs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new qt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Xc[r.type],c=Cs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let v=t.cache.get(S);v||(_=new c(a,m*d,r.count*d/u),v=new xg(_,d/u),t.cache.add(S,v)),p=new Xo(v,l,f%d/u,g)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),p=new qt(_,l,g);if(r.sparse!==void 0){const m=Xc.SCALAR,S=Cs[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,w=new S(o[1],v,r.sparse.count*m),E=new c(o[2],M,r.sparse.count*l);a!==null&&(p=new qt(p.array.slice(),p.itemSize,p.normalized));for(let b=0,C=w.length;b<C;b++){const x=w[b];if(p.setX(x,E[b*l]),l>=2&&p.setY(x,E[b*l+1]),l>=3&&p.setZ(x,E[b*l+2]),l>=4&&p.setW(x,E[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Vp[f.magFilter]||on,u.minFilter=Vp[f.minFilter]||Ur,u.wrapS=Gp[f.wrapS]||Nr,u.wrapT=Gp[f.wrapT]||Nr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Bt(_);p.needsUpdate=!0,f(p)}),t.load(Ro.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||kw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Eg,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ih,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Bh}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const h=r[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ft),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Cn);const u=s.alphaMode||Yc.OPAQUE;if(u===Yc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Yc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new xe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==yi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yi){const h=s.emissiveFactor;a.emissive=new Fe().setRGB(h[0],h[1],h[2],Ft)}return s.emissiveTexture!==void 0&&o!==yi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,mt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Hi(h,s),t.associations.set(h,{materials:e}),s.extensions&&pr(r,h,s),h})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Wp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=zw(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Wp(new rn,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Ow(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=o[d];let m;const S=c[d];if(p.mode===wn.TRIANGLES||p.mode===wn.TRIANGLE_STRIP||p.mode===wn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new i1(_,S):new nn(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===wn.TRIANGLE_STRIP?m.geometry=kp(m.geometry,Z_):p.mode===wn.TRIANGLE_FAN&&(m.geometry=kp(m.geometry,Ru));else if(p.mode===wn.LINES)m=new Tg(_,S);else if(p.mode===wn.LINE_STRIP)m=new Nh(_,S);else if(p.mode===wn.LINE_LOOP)m=new l1(_,S);else if(p.mode===wn.POINTS)m=new bg(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Bw(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Hi(m,s),p.extensions&&pr(r,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&pr(r,h[0],s),h[0];const f=new Sr;s.extensions&&pr(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(tg.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ph(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ye;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dh(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],g=r.samplers[d.sampler],_=d.target,p=_.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,S=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let S=0,v=f.length;S<v;S++){const M=f[S],w=d[S],E=g[S],b=_[S],C=p[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const x=n._createAnimationTracks(M,w,E,b,C);if(x)for(let A=0;A<x.length;A++)m.push(x[A])}return new L1(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Hw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Sg:c.length>1?u=new Sr:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Hi(u,s),s.extensions&&pr(n,u,s),s.matrix!==void 0){const h=new Ye;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Sr;n.name&&(s.name=r.createUniqueName(n.name)),Hi(s,n),n.extensions&&pr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof Xn||f instanceof Bt)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Oi[s.path]===Oi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Oi[s.path]){case Oi.weights:c=Ws;break;case Oi.rotation:c=Fr;break;case Oi.position:case Oi.scale:c=Xs;break;default:switch(n.itemSize){case 1:c=Ws;break;case 2:case 3:default:c=Xs;break}break}const u=r.interpolation!==void 0?Uw[r.interpolation]:Hs,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Oi[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=zu(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Fr?Nw:Ig;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gw(i,e,t){const n=e.attributes,r=new wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=zu(Cs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=zu(Cs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new oi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Wp(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Bu[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return it.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Hi(i,e),Gw(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Fw(i,e.targets,t):i})}const Ww="/three_smart_city/assets/z_11-f95mvjMU.png";var Xw=`attribute float aSize;\r
varying float vSize;

uniform float uTime;

void main(){\r
  vec4 viewPosition = viewMatrix * modelMatrix * vec4(position,1.0);\r
  gl_Position = projectionMatrix * viewPosition;\r
  vSize = aSize - uTime;\r
  
  if(vSize < 0.0){\r
    
    vSize = vSize + 1000.0;\r
  }\r
  
  vSize = (vSize - 500.0) * 0.01;\r
  gl_PointSize = vSize;\r
}`,Yw=`varying float vSize;\r
void main(){\r
  float distanceToCenter = distance(gl_PointCoord,vec2(0.5,0.5));\r
  float strength = 1.0 - (distanceToCenter*2.0);\r
 if(vSize<=0.0){\r
        gl_FragColor = vec4(1,0,0,0);\r
    }else{\r
        gl_FragColor = vec4(1,1,0,strength);\r
    }\r
}`,qw=`varying vec3 vPosition;

void main(){\r
  vec4 viewPosition = viewMatrix * modelMatrix * vec4(position,1.0);\r
  gl_Position = projectionMatrix * viewPosition;\r
    vPosition = position;\r
}`,jw=`varying vec3 vPosition;

uniform float uDiffHeight;

void main(){\r
  
  float mixColor = (vPosition.y + uDiffHeight / 2.0) / uDiffHeight;\r
        gl_FragColor = vec4(0.5,0.84,0.9,1.0-mixColor);\r
}`,Kw=`varying vec2 vUv;\r
varying vec3 vPosition;\r
void main(){\r
  vec4 viewPosition = viewMatrix * modelMatrix * vec4(position,1.0);\r
  gl_Position = projectionMatrix * viewPosition;\r
  vPosition = position;\r
  vUv = uv;\r
}`,$w=`varying vec2 vUv;\r
varying vec3 vPosition;

uniform float uTime;

mat2 rotate2d(float _angle){\r
  return mat2(cos(_angle),-sin(_angle),sin(_angle),cos(_angle));\r
}\r
void main(){\r
  vec2 newUv = rotate2d(uTime*6.28)*(vUv-0.5) + 0.5;\r
  
  float alpha = 1.0 - step(0.5,distance(newUv,vec2(0.5)));\r
  
  float angle = atan(newUv.x-0.5, newUv.y-0.5);\r
  float strength = (angle + 3.14)/ 6.28;\r
  gl_FragColor = vec4(1,0.6,0,alpha * strength);\r
}`;const Zw="/three_smart_city/assets/warning_fire-NqOkwQS8.png",Jw="/three_smart_city/assets/warning_police-iSY4-emy.png",Qw="/three_smart_city/assets/warning_electric-0s7eR4iO.png",eR=eh({__name:"Scene",props:{eventList:{type:Array,default:()=>[],required:!0},currentEventId:{type:String,default:""}},setup(i){const e=i,t={0:Zw,1:Jw,2:Qw},n=C=>{switch(C){case"火警":return 0;case"治安":return 1;case"电力":return 2;default:return 0}},r=C=>{C.material.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        //#end#
    `),s(x,C),o(x),a(x),l(x)}},s=(C,x)=>{x.geometry.computeBoundingBox();const{min:A,max:F}=x.geometry.boundingBox;C.uniforms.uTopColor={value:new Fe("#aaaeff")},C.uniforms.uDiffHeight={value:F.y-A.y},C.vertexShader=C.vertexShader.replace("#include <common>",`
      #include <common>
      varying vec3 vPosition;
    `),C.vertexShader=C.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      vPosition = position;
    `),C.fragmentShader=C.fragmentShader.replace("#include <common>",`
      #include <common>

      uniform vec3 uTopColor;
      uniform float uDiffHeight;
      varying vec3 vPosition;
    `),C.fragmentShader=C.fragmentShader.replace("//#end#",`

      vec4 distGradColor = gl_FragColor;

      // 设置混合的百分比
      float gradMix = (vPosition.y+uDiffHeight/2.0)/uDiffHeight;

      // 计算出混合颜色
      vec3 gradMixColor = mix(distGradColor.xyz,uTopColor,gradMix);
      gl_FragColor = vec4(gradMixColor,1);
        //#end#

      `)},o=(C,x=new xe(0,0))=>{C.uniforms.uSpreadCenter={value:x},C.uniforms.uSpreadTime={value:-2e3},C.uniforms.uSpreadWidth={value:40},C.fragmentShader=C.fragmentShader.replace("#include <common>",`
      #include <common>

      uniform vec2 uSpreadCenter;
      uniform float uSpreadTime;
      uniform float uSpreadWidth;
      `),C.fragmentShader=C.fragmentShader.replace("//#end#",`
    // 扩散半径
     float spreadRadius = distance(vPosition.xz,uSpreadCenter);
    //  扩散范围的函数 0-1的值 -x²抛物线，
    float spreadIndex = -(spreadRadius-uSpreadTime)*(spreadRadius-uSpreadTime)+uSpreadWidth;
    // 大于0时混合计算
    if(spreadIndex>0.0){
        gl_FragColor = mix(gl_FragColor,vec4(1,1,1,1),spreadIndex/uSpreadWidth);
    }

    //#end#
    `),Hn.to(C.uniforms.uSpreadTime,{value:800,duration:3,ease:"none",repeat:-1})},a=C=>{C.uniforms.uLightLineTime={value:-1500},C.uniforms.uLightLineWidth={value:200},C.fragmentShader=C.fragmentShader.replace("#include <common>",`
        #include <common>
        uniform float uLightLineTime;
        uniform float uLightLineWidth;
        `),C.fragmentShader=C.fragmentShader.replace("//#end#",`
      float LightLineMix = -(vPosition.x+vPosition.z-uLightLineTime)*(vPosition.x+vPosition.z-uLightLineTime)+uLightLineWidth;

      if(LightLineMix>0.0){
          gl_FragColor = mix(gl_FragColor,vec4(0.8,1.0,1.0,1),LightLineMix /uLightLineWidth);

      }
      //#end#
      `),Hn.to(C.uniforms.uLightLineTime,{value:1500,duration:5,ease:"none",repeat:-1})},l=C=>{C.uniforms.uToTopTime={value:0},C.uniforms.uToTopWidth={value:40},C.fragmentShader=C.fragmentShader.replace("#include <common>",`
          #include <common>


          uniform float uToTopTime;
          uniform float uToTopWidth;
          `),C.fragmentShader=C.fragmentShader.replace("//#end#",`
        float ToTopMix = -(vPosition.y-uToTopTime)*(vPosition.y-uToTopTime)+uToTopWidth;

        if(ToTopMix>0.0){
            gl_FragColor = mix(gl_FragColor,vec4(0.8,0.8,1,1),ToTopMix /uToTopWidth);

        }

        //#end#
        `),Hn.to(C.uniforms.uToTopTime,{value:500,duration:3,ease:"none",repeat:-1})},c=Jc(null),u=new e1,f=new F1().load([tw,nw,iw,rw,sw,ow]);u.background=f,u.environment=f;const d=new Qt(75,window.innerHeight/window.innerHeight,1,5e4);d.position.set(5,10,15);const g=new vg({antialias:!0});g.setSize(window.innerWidth,window.innerHeight),g.shadowMap.enabled=!0;const _=new cw(d,g.domElement);_.enableDamping=!0,_.maxPolarAngle=Math.PI/2,_.minPolarAngle=0;const p=()=>{_.update(),requestAnimationFrame(p),g.render(u,d)};d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),new uw().load(aw,C=>{C.scene.traverse(x=>{if(x.type=="Mesh"){const A=new yi({color:new Fe(790067)});if(x.material=A,r(x),x.name=="Layerbuildings"){const F=new E1(x.geometry),k=new Ih({color:16777215}),$={geometry:F,material:k,mesh:new Tg(F,k)},U=x.scale.x*1.0001;$.mesh.scale.set(U,U,U),u.add($.mesh)}}}),u.add(C.scene)}),window.addEventListener("resize",()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight),g.setPixelRatio(window.devicePixelRatio)}),th(()=>{c.value.appendChild(g.domElement);const C=new S;u.add(C.mesh),p()});class S{constructor(){Kt(this,"mesh");Kt(this,"texture");const x=[new I(0,0,0),new I(5,5,0),new I(14,0,0)],A=new Uu(x),F=new Fh(A,100,.4,2,!1),k=new Ou;this.texture=k.load(Ww),this.texture.repeat.set(1,2),this.texture.wrapS=Nr,this.texture.wrapT=Ho;const $=new yi({map:this.texture,transparent:!0});this.mesh=new nn(F,$),Hn.to(this.texture.offset,{x:-1,duration:1,repeat:-1,ease:"none"})}remove(){this.mesh.remove(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class v{constructor(x,A){Kt(this,"id");Kt(this,"mesh");Kt(this,"shaderMaterial");this.id=`flyLineShader${A}`;const F=[new I(0,0,0),new I(x.x/2,4,x.z/2),new I(x.x,0,x.z)],$=new Uu(F).getPoints(1e3),U=new rn().setFromPoints($);this.shaderMaterial=new ii({uniforms:{uTime:{value:0}},vertexShader:Xw,fragmentShader:Yw,transparent:!0,depthWrite:!1,blending:Su});const z=new Float32Array($.length);for(let H=0;H<z.length;H++)z[H]=H;U.setAttribute("aSize",new qt(z,1)),this.mesh=new bg(U,this.shaderMaterial),Hn.to(this.shaderMaterial.uniforms.uTime,{value:1e3,duration:1,repeat:-1,ease:"none"})}remove(){this.mesh.remove(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class M{constructor(x,A){Kt(this,"id");Kt(this,"mesh");Kt(this,"material");this.id=`lightWall${A}`;const F=new Oh(2,2,2,32,1,!0);this.material=new ii({uniforms:{uDiffHeight:{value:0}},vertexShader:qw,fragmentShader:jw,transparent:!0,side:Cn}),this.mesh=new nn(F,this.material),this.mesh.position.set(x.x,1.5,x.z),this.mesh.geometry.computeBoundingBox();const{min:k,max:$}=this.mesh.geometry.boundingBox;this.material.uniforms.uDiffHeight={value:$.y-k.y},Hn.to(this.mesh.scale,{x:1.2,z:1.2,duration:1,repeat:-1,yoyo:!0})}remove(){this.mesh.remove(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class w{constructor(x,A){Kt(this,"id");Kt(this,"mesh");Kt(this,"material");this.id=`lightRadar${A}`;const F=new Ul(2,2);this.material=new ii({uniforms:{uTime:{value:0}},vertexShader:Kw,fragmentShader:$w,transparent:!0,side:Cn}),this.mesh=new nn(F,this.material),this.mesh.position.set(x.x,.4,x.z),this.mesh.rotation.x=Math.PI/2,Hn.to(this.material.uniforms.uTime,{value:1,duration:2,repeat:-1,ease:"none"})}remove(){this.mesh.remove(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class E{constructor(x,A,F){Kt(this,"id");Kt(this,"mesh");Kt(this,"raycaster");this.id=`warningSprite${F}`;const $=new Ou().load(t[x]),U=new yg({map:$,transparent:!0,depthTest:!1});this.mesh=new t1(U),this.mesh.position.set(A.x,3.5,A.z),this.raycaster=new ew,window.addEventListener("click",z=>{if(z.mesh=this.mesh,z.eventId=this.id,this.raycaster.setFromCamera(new xe(z.clientX/window.innerWidth*2-1,-(z.clientY/window.innerHeight*2-1)),d),this.raycaster.intersectObject(this.mesh).length>0){const Y=e.eventList.findIndex(q=>new RegExp(`${q.id}$`).test(z.eventId));if(console.log(Y),Y!==-1){const{x:q,y:ie}=e.eventList[Y].position;Hn.to(_.target,{x:q/5-10,z:ie/5-10,duration:1})}}})}remove(){this.mesh.remove(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const b=[];return go(()=>e.eventList,C=>{b.forEach(x=>x.remove()),C.forEach(({name:x,position:A,id:F})=>{const k=n(x),$={x:A.x/5-10,z:A.y/5-10};if(k===0){const z=new M($,F);b.push(z),u.add(z.mesh)}else if(k===1){const z=new v($,F);b.push(z),u.add(z.mesh)}else if(k===2){const z=new w($,F);b.push(z),u.add(z.mesh)}const U=new E(k,$,F);b.push(U),u.add(U.mesh)})},{deep:!0,immediate:!0}),go(()=>e.currentEventId,C=>{if(C){const x=new RegExp(`${C}$`);b.forEach(F=>{x.test(F.id)?F.mesh.visible=!0:F.mesh.visible=!1});const A=e.eventList.findIndex(F=>F.id===C);if(A!==-1){const{x:F,y:k}=e.eventList[A].position;Hn.to(_.target,{x:F/5-10,z:k/5-10,duration:1})}}}),(C,x)=>(vr(),ds("div",{class:"scene",ref_key:"threeRef",ref:c},null,512))}}),Ng=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},tR=Ng(eR,[["__scopeId","data-v-4345c17e"]]),Gh=i=>(N0("data-v-9c7f8310"),i=i(),U0(),i),nR={class:"home"},iR=Gh(()=>yt("header",null,"智慧城市管理系统平台",-1)),rR={class:"main"},sR={class:"left"},oR=["src"],aR=Gh(()=>yt("div",{class:"footerBoder"},null,-1)),lR={class:"right"},cR={class:"cityEvent list"},uR=Gh(()=>yt("h3",null,[yt("span",null,"事件列表")],-1)),hR=["onClick"],fR=["src"],dR=eh({__name:"home",setup(i){const e={电力:Py,火警:Ly,治安:Dy},t=Ml({iot:{number:0},event:{number:0},power:{number:0},test:{number:0}}),n=Jc([]),r=Jc(""),s=()=>{n.value=px(),r.value=""},o=(l=!0)=>{const c=dx();Object.keys(c).forEach(u=>{const{name:h,unit:f,number:d}=c[u];t[u].name=h,t[u].unit=f,l?Hn.to(t[u],{number:d,duration:1}):t[u].number=d})},a=l=>{r.value=l};return th(()=>{s(),o(!1),setInterval(()=>{s(),o()},3e3)}),(l,c)=>(vr(),ds(Rn,null,[yt("div",nR,[iR,yt("div",rR,[yt("div",sR,[(vr(!0),ds(Rn,null,af(t,(u,h)=>(vr(),ds("div",{class:"cityEvent",key:h},[yt("h3",null,[yt("span",null,Qs(u.name),1)]),yt("h1",null,[yt("img",{src:_m(Cy),class:"icon"},null,8,oR),yt("span",null,Qs(u.number.toFixed(0))+"（"+Qs(u.unit)+"）",1)]),aR]))),128))]),yt("div",lR,[yt("div",cR,[uR,yt("ul",null,[(vr(!0),ds(Rn,null,af(n.value,u=>(vr(),ds("li",{class:xl({active:r.value==u.id}),onClick:h=>a(u.id),key:u.id},[yt("h1",null,[yt("div",null,[yt("img",{class:"icon",src:e[u.name]},null,8,fR),yt("span",null,Qs(u.name),1)])]),yt("p",null,Qs(u.type),1)],10,hR))),128))])])])])]),Si(tR,{"event-list":n.value,currentEventId:r.value},null,8,["event-list","currentEventId"])],64))}}),pR=Ng(dR,[["__scopeId","data-v-9c7f8310"]]),mR=eh({__name:"App",setup(i){return(e,t)=>(vr(),Ev(pR))}});cx(mR).mount("#app");
