/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../geometry.js";import{g as e}from"./unitUtils.js";import t from"../geometry/Extent.js";function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){return"number"==typeof e?e:e?.stops?.length?function(e){let t=0,n=0;for(let r=0;r<e.length;r++){const s=e[r].size;"number"==typeof s&&(t+=s,n++)}return t/n}(e.stops):t}function s(e){const t=e?.renderer,s=e?.pointerType,a="touch"===s?9:6;if(!t)return a;const o="visualVariables"in t?function(e,t){if(!t)return e;const n=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:n,minSize:s}=t;return(r(n,e)+r(s,e))/2}));let s=0;const a=n.length;if(0===a)return e;for(let e=0;e<a;e++)s+=n[e];const o=Math.floor(s/a);return Math.max(o,e)}(a,t.visualVariables):a;if("simple"===t.type)return n(o,t.symbol);if("unique-value"===t.type){let e=o;return t.uniqueValueInfos?.forEach((t=>{e=n(e,t.symbol)})),e}if("class-breaks"===t.type){let e=o;return t.classBreakInfos.forEach((t=>{e=n(e,t.symbol)})),e}return"dot-density"===t.type||t.type,o}function a(n,r,s,a=new t){let o=0;if("2d"===s.type)o=r*(s.resolution??0);else if("3d"===s.type){const t=s.overlayPixelSizeInMapUnits(n),a=s.basemapSpatialReference;o=null==a||a.equals(s.spatialReference)?r*t:e(a)/e(s.spatialReference)}const i=n.x-o,f=n.y-o,l=n.x+o,u=n.y+o,{spatialReference:c}=s;return a.xmin=Math.min(i,l),a.ymin=Math.min(f,u),a.xmax=Math.max(i,l),a.ymax=Math.max(f,u),a.spatialReference=c,a}function o(e,t,n){const r=n.toMap(e);return null!=r&&a(r,s(),n,i).intersects(t)}const i=new t;export{a,s as c,o as i};