/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{r as t,L as r}from"./Logger.js";import{g as e}from"../config.js";import{f as n}from"./date.js";import{f as s}from"./number.js";const i=()=>r.getLogger("esri.intl.substitute");function o(r,o,u={}){const{format:f={}}=u;return t(r,(t=>function(t,r,o){let u,f;const c=t.indexOf(":");if(-1===c?u=t.trim():(u=t.slice(0,c).trim(),f=t.slice(c+1).trim()),!u)return"";const m=e(u,r);if(null==m)return"";const l=(f?o?.[f]:null)??o?.[u];return l?function(t,r){switch(r.type){case"date":return n(t,r.intlOptions);case"number":return s(t,r.intlOptions);default:return i().warn("missing format descriptor for key {key}"),a(t)}}(m,l):f?function(t,r){switch(r.toLowerCase()){case"dateformat":return n(t);case"numberformat":return s(t);default:return i().warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?n(t):/^numberformat/i.test(r)?s(t):a(t)}}(m,f):a(m)}(t,o,f)))}function a(t){switch(typeof t){case"string":return t;case"number":return s(t);case"boolean":return""+t;default:return t instanceof Date?n(t):""}}export{o as s};