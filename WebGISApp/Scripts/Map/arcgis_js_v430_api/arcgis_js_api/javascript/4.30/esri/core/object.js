// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./lang"],function(h,p){function k(a,c){if(null==a&&null==c)return!1;if(null==a||null==c)return!0;if("object"===typeof a){if(Array.isArray(a)){if(a.length!==c.length)return!0;for(var b=0;b<a.length;b++)if(k(a[b],c[b]))return!0;return!1}if(Object.keys(a).length!==Object.keys(c).length)return!0;for(b in a)if(k(a[b],c[b]))return!0;return!1}return a!==c}function l(a,c,b){for(const d of a){if(null==b)return;if(!(d in b))if(c)b[d]={};else return;b=b[d]}return b}function m(a,c,b){return c?
Object.keys(c).reduce((d,f)=>{let g=d[f],e=c[f];if(g===e)return d;if(void 0===g)return d[f]=p.clone(e),d;if(Array.isArray(e)||Array.isArray(d))g=g?Array.isArray(g)?d[f]=g.concat():d[f]=[g]:d[f]=[],e&&(Array.isArray(e)||(e=[e]),b?e.forEach(n=>{g.includes(n)||g.push(n)}):d[f]=e.concat());else if(e&&"object"===typeof e)d[f]=m(g,e,b);else if(!d.hasOwnProperty(f)||c.hasOwnProperty(f))d[f]=e;return d},a||{}):a}h.deepMerge=function(a,c,b=!1){return m(a,c,b)};h.getDeepValue=function(a,c){if(null!=c)return c[a]||
l(a.split("."),!1,c)};h.notDeepEqual=k;h.setDeepValue=function(a,c,b){const d=a.split(".");a=d.pop();(b=l(d,!0,b))&&a&&(b[a]=c)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});