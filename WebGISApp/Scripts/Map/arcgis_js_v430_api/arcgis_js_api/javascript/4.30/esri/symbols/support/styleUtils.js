// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../core/Error ../../core/promiseUtils ../../core/urlUtils ../../portal/Portal ../../portal/PortalQueryParams ../../support/featureFlags".split(" "),function(c,n,k,p,l,q,r,t){async function u(a,b){try{return{data:(await m(a,b)).data,baseUrl:l.removeFile(a),styleUrl:a}}catch(d){return p.throwIfAbortError(d),null}}function v(a,b,d){b=null!=b.portal?b.portal:q.getDefault();let e;const f=`${b.url} - ${b.user?.username} - ${a}`;c.cachedStyles[f]||(c.cachedStyles[f]=w(a,
b,d).then(g=>{e=g;return g.fetchData()}).then(g=>({data:g,baseUrl:e.itemUrl??"",styleName:a})));return c.cachedStyles[f]}function w(a,b,d){return b.load(d).then(()=>{const e=new r({disableExtraQuery:!0,query:`owner:${"esri_en"} AND type:${"Style"} AND typekeywords:"${a}"`});return b.queryItems(e,d)}).then(({results:e})=>{let f=null;const g=a.toLowerCase();if(e&&Array.isArray(e))for(const h of e)if(h.typeKeywords?.some(x=>x.toLowerCase()===g)&&"Style"===h.type&&"esri_en"===h.owner){f=h;break}if(!f)throw new k("symbolstyleutils:style-not-found",
`The style '${a}' could not be found`,{styleName:a});return f.load(d)})}function m(a,b){b={responseType:"json",query:{f:"json"},...b};return n(l.normalize(a),b)}c.cachedStyles={};c.Style2DUrlTemplate="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f\x3djson";c.cleanupStyleUtilsCache=function(){c.cachedStyles&&(c.cachedStyles={})};c.fetchStyle=function(a,b,d){return null!=a?.styleUrl?u(a.styleUrl,d):null!=a?.styleName?v(a.styleName,
b,d):Promise.reject(new k("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))};c.makeCIMSymbolRef=function(a){return null===a||"CIMSymbolReference"===a.type?a:{type:"CIMSymbolReference",symbol:a}};c.requestJSON=m;c.symbolUrlFromStyleItem=function(a,b,d=["gltf"]){if("cimRef"===b)return encodeURI(a.cimRef);if(a.formatInfos&&!t.enableWebStyleForceWOSR())for(const e of d)if(b=a.formatInfos.find(f=>f.type===e))return b.href;return encodeURI(a.webRef)};
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});