/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{m as t}from"../chunks/handleUtils.js";import e from"./Error.js";import{L as n}from"../chunks/Logger.js";import{r}from"../chunks/maybe.js";import"./lang.js";import"../config.js";const o=(i=globalThis,{setTimeout:(e,n)=>{const r=i.setTimeout(e,n);return t((()=>i.clearTimeout(r)))}});var i;function u(t){return function(t){return null!=t&&"object"==typeof t&&"on"in t&&"function"==typeof t.on}(t)||s(t)}function s(t){return null!=t&&"object"==typeof t&&"addEventListener"in t&&"function"==typeof t.addEventListener}function c(e,n,r){if(!u(e))throw new TypeError("target is not a Evented or EventTarget object");return s(e)?function(e,n,r,o){if(Array.isArray(n)){const i=n.slice();for(const t of i)e.addEventListener(t,r,o);return t((()=>{for(const t of i)e.removeEventListener(t,r,o)}))}return e.addEventListener(n,r,o),t((()=>e.removeEventListener(n,r,o)))}(e,n,r):e.on(n,r)}function a(t,e,n){if(!u(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(e,n);const r=c(t,e,(e=>{r.remove(),n.call(t,e)}));return r}function l(t,e,n){let r=!1;const o=c(t,e,(e=>{r||n.call(t,e)}));return{resume(){r=!1},pause(){r=!0},remove(){o.remove()}}}async function f(t,e){const n=t.slice(),r=await Promise.all(t.map(((t,n)=>e(t,n))));return n.filter(((t,e)=>r[e]))}function m(t="Aborted"){return new e("AbortError",t)}function p(t,e="Aborted"){if(w(t))throw m(e)}function h(t){return t instanceof AbortSignal?t:t?.signal}function w(t){const e=h(t);return null!=e&&e.aborted}function v(t){if(T(t))throw t}function d(t){if(!T(t))throw t}function b(t,e){const n=h(t);if(null!=n){if(!n.aborted)return a(n,"abort",(()=>e()));e()}}function y(t,e){const n=h(t);if(null!=n)return p(n),a(n,"abort",(()=>e(m())))}function g(t,e){return null==h(e)?t:new Promise(((n,o)=>{let i=b(e,(()=>o(m())));const u=()=>{i=r(i)};t.then(u,u),t.then(n,o)}))}function j(t,n,r){return Promise.race([t,C(n).then((()=>{throw new e("timeout",`Did not resolve within ${n} milliseconds (${r??"timeout"})`)}))])}function T(t){return"AbortError"===t?.name}async function E(t){try{return await t}catch(t){if(!T(t))throw t;return}}async function A(t,e=n.getLogger("esri")){try{return await t}catch(t){T(t)||e.error(t)}}async function P(t){if(!t)return;if("function"!=typeof t.forEach){const e=Object.keys(t),n=e.map((e=>t[e])),r=await P(n),o={};return e.map(((t,e)=>o[t]=r[e])),o}const e=t;return Promise.allSettled(e).then((t=>Array.from(e,((e,n)=>{const r=t[n];return"fulfilled"===r.status?{promise:e,value:r.value}:{promise:e,error:r.reason}}))))}async function L(t){return(await P(t)).filter((t=>!!t.value)).map((t=>t.value))}async function k(t){return(await Promise.allSettled(t)).filter((t=>"fulfilled"===t.status)).map((t=>t.value))}async function S(t){return(await Promise.allSettled(t)).filter((t=>"rejected"===t.status)).map((t=>t.reason))}function C(t,e=void 0,n){const r=new AbortController;return b(n,(()=>r.abort())),new Promise(((n,o)=>{let i=setTimeout((()=>{i=0,n(e)}),t);b(r,(()=>{i&&(clearTimeout(i),o(m()))}))}))}function U(t,n,r,o){const i=r&&"abort"in r?r:null;null!=o||i||(o=r);let u=setTimeout((()=>{u=0,i?.abort()}),n);const s=()=>o||new e("promiseUtils:timeout","The wrapped promise did not resolve within "+n+" ms");return t.then((t=>{if(0===u)throw s();return clearTimeout(u),t}),(t=>{throw clearTimeout(u),0===u?s():t}))}function $(t,e){const n=new AbortController,r=setTimeout((()=>n.abort()),e);return b(t,(()=>{n.abort(),clearTimeout(r)})),{...t,signal:n.signal}}function x(t){return t&&"function"==typeof t.then}function D(t){return x(t)?t:Promise.resolve(t)}function O(t,e=-1){let n,r,o,i,u=null;const s=(...c)=>{if(n){r=c,i&&i.reject(m()),i=q();const t=i.promise;if(u){const t=u;u=null,t.abort()}return t}if(o=i||q(),i=null,e>0){const r=new AbortController;n=D(t(...c,r.signal));const o=n;C(e).then((()=>{n===o&&(i?r.abort():u=r)}))}else n=1,n=D(t(...c));const a=()=>{const t=r;r=o=n=u=null,null!=t&&s(...t)},l=n,f=o;return l.then(a,a),l.then(f.resolve,f.reject),f.promise};return s}function q(){let t,e;const n=new Promise(((n,r)=>{t=n,e=r})),r=e=>{t(e)};return r.resolve=e=>t(e),r.reject=t=>e(t),r.timeout=(t,e)=>o.setTimeout((()=>r.reject(e)),t),r.promise=n,r}function z(t,e){return t.then(e,e)}function B(t,e){e.then(t.resolve,t.reject)}async function F(t){await Promise.resolve(),p(t)}export{a,C as after,S as allSettledErrors,k as allSettledValues,z as always,o as c,m as createAbortError,q as createResolver,O as debounce,P as eachAlways,L as eachAlwaysValues,f as filter,u as i,E as ignoreAbortErrors,T as isAbortError,w as isAborted,x as isPromiseLike,A as logOnError,c as o,b as onAbort,y as onAbortOrThrow,l as p,B as settleWithPromise,h as signalFromSignalOrOptions,v as throwIfAbortError,p as throwIfAborted,d as throwIfNotAbortError,U as timeout,F as waitTick,D as when,g as whenOrAbort,j as whenOrTimeout,$ as wrapAbortWithTimeout};