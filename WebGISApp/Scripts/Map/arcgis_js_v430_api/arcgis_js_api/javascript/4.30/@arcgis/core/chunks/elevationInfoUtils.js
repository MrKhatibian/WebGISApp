/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{v as e,l as n}from"./unitUtils.js";import{g as t}from"./unitConversionUtils.js";function o(e){return e?R:j}function r(e,n){return n?.mode?n.mode:o(e).mode}function u(e,n){return null!=n?n:o(e)}function s(e,n){return r(null!=e&&e.hasZ,n)}function i(e,n){return u(null!=e&&!!e.hasZ,n)}function a(e){const n=g(e);return s(e.geometry,n)}function l(e){const n=g(e),t=s(e.geometry,n),o=null!=n&&"on-the-ground"!==t?$(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function f(e){return v(l(e))}function c(e){return v(e)||d(e)}function d(e){return"0"===e?.featureExpressionInfo?.expression}function v(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const n=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||"0"===n)}function g(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(t,o){if(!t?.offset)return 0;const{offset:r,unit:u}=t;if("decimal-degrees"===u)return 0;const s="unknown"!==u&&u?u:"meters",i=e(o);return i?n(r,s,i):0}function m(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=h(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function p(e,n,t,o=null){return E(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function x(e,n,t,o,r=null){return E(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function E(e,n,t,o,r,u,s=null){if(null==u)return;const i=null!=s?s.mode:"absolute-height";if("on-the-ground"===i)return 0;const{absoluteZ:a}=b(n,t,o,r,e,u);return function(e,n,t,o,r,u,s,i){const a=h(s,r);switch(i){case"absolute-height":return e-a;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+a);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+a)}}(a,n,t,o,r,e,s,i)}function b(e,n,t,o,r,u){const s=h(u,o);switch(u.mode){case"absolute-height":return{absoluteZ:t+s,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+s,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+s,elevation:u}}}}function I(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function y(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function Z(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function P(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function w(e,n){n&&e.warn(".elevationInfo=",n)}function $(e){return(e?.offset??0)*t(e?.unit)}const R={mode:"absolute-height",offset:0},j={mode:"on-the-ground",offset:null};export{R as a,x as b,E as c,s as d,y as e,P as f,p as g,c as h,m as i,u as j,l as k,w as l,I as m,a as n,j as o,$ as p,i as q,v as r,Z as s,f as t,h as u,r as v,d as w,b as z};