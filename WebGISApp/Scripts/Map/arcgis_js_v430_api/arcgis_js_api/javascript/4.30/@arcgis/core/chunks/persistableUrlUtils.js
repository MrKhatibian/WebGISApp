/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{id as e}from"../kernel.js";import{makeAbsolute as t,makeRelative as r,isAbsolute as s,normalize as o,isDataProtocol as n,changeDomain as l,hasSameOrigin as a,n as c,splitPathExtension as i,getAppUrl as u}from"../core/urlUtils.js";function p(e,s){const o=s?.url?.path;if(e&&o&&(e=t(e,o,{preserveProtocolRelative:!0}),s.portalItem&&s.readResourcePaths)){const t=r(e,s.portalItem.itemUrl);null!=t&&v.test(t)&&s.readResourcePaths.push(s.portalItem.resourceFromPath(t).path)}return(e=I(e,s?.portal))&&d.test(e)?R(e):e}function m(e,l,a=y.YES){if(null==(e=e&&d.test(e)?w(e):e))return e;!s(e)&&l?.blockedRelativeUrls&&l.blockedRelativeUrls.push(e);let c=t(e);if(l){const t=l.verifyItemRelativeUrls?.rootPath||l.url?.path;if(t){const s=I(t,l.portal),o=I(c,l.portal);c=r(o,s,s),null!=c&&c!==o&&c!==e&&l.verifyItemRelativeUrls&&l.verifyItemRelativeUrls.writtenUrls.push(c)}}return c=x(c,l?.portal),s(c)&&(c=o(c)),l?.resources&&l?.portalItem&&!s(c)&&!n(c)&&a===y.YES&&l.resources.toKeep.push({resource:l.portalItem.resourceFromPath(c),compress:!1}),c}function f(e,t,r){return p(e,r)}function h(e,t,r,s){const o=m(e,s);void 0!==o&&(t[r]=o)}const d=/\/items\/([^/]+)\/resources\/(.*)/,v=/^\.\/resources\//;function U(e){const t=e?.match(d)??null;return t?.[1]??null}function g(e){const t=e?.match(d)??null;if(null==t)return null;const r=t[2],s=r.lastIndexOf("/");if(-1===s){const{path:e,extension:t}=i(r);return{prefix:null,filename:e,extension:t}}const{path:o,extension:n}=i(r.slice(s+1));return{prefix:r.slice(0,s),filename:o,extension:n}}function x(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?l(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function I(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const r=`${t.urlKey}.${t.customBaseUrl}`,s=u();return a(s,`${s.scheme}://${r}`)?l(e,t.portalHostname,r):l(e,r,t.portalHostname)}function R(t){if(!t)return t||null;let r=t;return r&&e&&!e.findCredential(r)&&(r=c(r),r=r.replace(/^https?:\/\/www\.arcgis\.com/,"https://cdn.arcgis.com"),r=r.replace(/^https?:\/\/devext\.arcgis\.com/,"https://cdndev.arcgis.com"),r=r.replace(/^https?:\/\/qaext\.arcgis\.com/,"https://cdnqa.arcgis.com")),r}function w(t){if(!t)return t||null;let r=t;return r=r.replace(/^https?:\/\/cdn\.arcgis\.com/,"https://www.arcgis.com"),r=r.replace(/^https?:\/\/cdndev\.arcgis\.com/,"https://devext.arcgis.com"),r=r.replace(/^https?:\/\/cdnqa\.arcgis\.com/,"https://qaext.arcgis.com"),r&&e&&!e.findCredential(r)&&(r=c(r)),r}var y;!function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"}(y||(y={}));const P=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return y},ensureMainOnlineDomain:x,fromCDNUrl:w,fromJSON:p,itemIdFromResourceUrl:U,prefixAndFilenameFromResourceUrl:g,read:f,toCDNUrl:R,toJSON:m,write:h},Symbol.toStringTag,{value:"Module"}));export{y as M,m as a,P as b,x as e,p as f,U as i,g as p,f as r,R as t,h as w};