// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/Error ../../core/accessorSupport/originUtils ./utils ../support/arcgisLayerUrl ../support/fetchService ../support/layerUtils ../support/lazyLayerLoader ../../portal/support/portalItemUtils".split(" "),function(n,t,m,w,l,p,x,G,H,h){function q(a){return{isValid:G.isLayerWithFeatureLayerSource(a)&&("feature"===a.type?!a.dynamicDataSource:!0),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function u(a){const b=[],c=
[];for(const {layer:e,layerJSON:d}of a)e.isTable?c.push(d):b.push(d);return{layers:b,tables:c}}async function y(a,b){return/\/\d+\/?$/.test(a.url)?u([b[0]]):z(b,a)}async function z(a,b){a.reverse();if(!b)return u(a);b=await I(b,a);for(var c of a){var e=c.layerJSON,d=b;c.layer.isTable?r(d.tables,e):r(d.layers,e)}c=[];e=[];for(const {layer:f}of a){const {isTable:g,layerId:k}=f;g?e.push(k):c.push(k)}A(b.layers,c);A(b.tables,e);return b}async function I(a,b){a=await a.fetchData("json");if(J(a))return a;
a||={};K(a);const {layer:{url:c,customParameters:e,apiKey:d}}=b[0];await L(a,{url:c??"",customParameters:e,apiKey:d},b.map(f=>f.layer.layerId));return a}function J(a){return!!(a&&Array.isArray(a.layers)&&Array.isArray(a.tables))}function K(a){a.layers||(a.layers=[]);a.tables||(a.tables=[])}function A(a,b){if(!(2>a.length)){var c=[];for(const {id:e}of a)c.push(e);t.equals(c.sort(B),b.slice().sort(B))&&a.sort((e,d)=>{e=b.indexOf(e.id);d=b.indexOf(d.id);return e<d?-1:e>d?1:0})}}function B(a,b){return a<
b?-1:a>b?1:0}async function L(a,b,c){const {url:e,customParameters:d,apiKey:f}=b,{serviceJSON:g,layersJSON:k}=await x.fetchFeatureService(e,{customParameters:d,apiKey:f});b=C(a.layers,g.layers,c);c=C(a.tables,g.tables,c);a.layers=b.itemResources;a.tables=c.itemResources;c=[...b.added,...c.added];b=k?[...k.layers,...k.tables]:[];await M(a,c,e,b)}function C(a,b,c){const e=t.difference(a,b,(d,f)=>d.id===f.id);a=a.filter(d=>!e.removed.some(f=>f.id===d.id));b=e.added;b.forEach(({id:d})=>{a.push({id:d})});
return{itemResources:a,added:b.filter(({id:d})=>!c.includes(d))}}async function M(a,b,c,e){const d=await N(b);b=b.map(({id:f,type:g})=>new (d.get(g))({url:c,layerId:f,sourceJSON:e.find(({id:k})=>k===f)}));await Promise.allSettled(b.map(f=>f.load()));b.forEach(f=>{const {layerId:g,loaded:k,defaultPopupTemplate:D}=f;if(k&&null!=D){var v={id:g,popupInfo:D.toJSON()};"ArcGISFeatureLayer"!==f.operationalLayerType&&(v.layerType=f.operationalLayerType);f.isTable?r(a.tables,v):r(a.layers,v)}})}async function N(a){const b=
[];a.forEach(({type:d})=>{d=x.getLayerModuleType(d);b.push((0,H.layerLookupMap[d])())});const c=await Promise.all(b),e=new Map;a.forEach(({type:d},f)=>{e.set(d,c[f])});return e}function r(a,b){const c=a.findIndex(({id:e})=>e===b.id);-1===c?a.push(b):a[c]=b}function E(a,b){if(!a.length)throw new m(`${b}:missing-parameters`,"'layers' array should contain at least one feature layer");}function O(a,b){a=a.map(c=>c.portalItem.id);if(1<(new Set(a)).size)throw new m(`${b}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item");
}function F(a,b){a=a.map(c=>c.layerId);if((new Set(a)).size!==a.length)throw new m(`${b}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service");}async function P(a){E(a,"feature-layer-utils-saveall");await Promise.all(a.map(b=>b.load()));for(const b of a)l.ensureLayerConfig(b,"feature-layer-utils-saveall",q),l.ensureItemConfig({layer:b,itemType:"Feature Service",errorNamePrefix:"feature-layer-utils-saveall"});O(a,"feature-layer-utils-saveall");
F(a,"feature-layer-utils-saveall")}async function Q(a,b){const {url:c,layerId:e,title:d,fullExtent:f,isTable:g}=a;a=p.parse(c);b.url=("FeatureServer"===a?.serverType?c:`${c}/${e}`)??null;b.title||(b.title=d);b.extent=null;g||null==f||(b.extent=await h.getWGS84ExtentForItem(f));h.removeTypeKeyword(b,h.typeKeyword.METADATA);h.removeTypeKeyword(b,h.typeKeyword.MULTI_LAYER);h.addTypeKeyword(b,h.typeKeyword.SINGLE_LAYER);g&&h.addTypeKeyword(b,h.typeKeyword.TABLE)}function R(a,b){for(const d of a){var c=
d.parsedUrl.path;const f=p.parse(c);if(!f?.url.path)throw new m(`${b}:invalid-parameters`,l.createErrorMessage(d,`has unsupported url pattern: ${c}`),{layer:d});c=f?.serverType;if("FeatureServer"!==c&&"MapServer"!==c)throw new m(`${b}:invalid-parameters`,l.createErrorMessage(d,`has unsupported server type: ${c}`),{layer:d});if("MapServer"===c&&1<a.length)throw new m(`${b}:invalid-parameters`,"Only one layer or table in a map service can be saved");}const e=p.parse(a[0].parsedUrl.path)?.url.path;if(!a.every(d=>
p.parse(d.parsedUrl.path)?.url.path===e))throw new m(`${b}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service");}async function S(a){E(a,"feature-layer-utils-saveall-as");await Promise.all(a.map(b=>b.load()));for(const b of a)l.ensureLayerConfig(b,"feature-layer-utils-saveall-as",q);R(a,"feature-layer-utils-saveall-as");F(a,"feature-layer-utils-saveall-as")}async function T(a,b){let c=0,e=0;for(var {isTable:d}of b)d?e++:c++;d=b[0].parsedUrl.path;
const f=p.parse(d);a.url="FeatureServer"===f?.serverType?f.url.path:d;a.title||(a.title=f.title);a.extent=null;0<c&&(d=b.map(g=>g.fullExtent).filter(t.isSome).reduce((g,k)=>g.clone().union(k)))&&(a.extent=await h.getWGS84ExtentForItem(d));h.removeTypeKeyword(a,h.typeKeyword.METADATA);h.toggleTypeKeyword(a,h.typeKeyword.MULTI_LAYER,1<b.length);h.toggleTypeKeyword(a,h.typeKeyword.SINGLE_LAYER,1===b.length);h.toggleTypeKeyword(a,h.typeKeyword.TABLE,0<e&&0===c);l.setCommonItemProperties(a)}n.save=async function(a,
b){return l.save({layer:a,itemType:"Feature Service",validateLayer:q,createItemData:(c,e)=>y(e,[c]),errorNamePrefix:"feature-layer-utils-save"},b)};n.saveAll=async function(a,b){await P(a);const c=a[0].portalItem,e=l.createJSONContextForWrite(c),d=await Promise.all(a.map(g=>l.getLayerJSON(g,e,b))),f=await y(c,a.map((g,k)=>({layer:g,layerJSON:d[k]})));l.setCommonItemProperties(c);await c.update({data:f});await Promise.all(a.slice(1).map(g=>g.portalItem.reload()));w.updateOrigins(e);return c.clone()};
n.saveAllAs=async function(a,b,c){await S(a);b=l.getPortalItem({itemType:"Feature Service",errorNamePrefix:"feature-layer-utils-saveall-as",newItem:b});const e=l.createJSONContextForWrite(b),d=await Promise.all(a.map(g=>l.getLayerJSON(g,e,c))),f=await z(a.map((g,k)=>({layer:g,layerJSON:d[k]})));await T(b,a);await l.addItem(b,f,c);for(const g of a)g.portalItem=b.clone();w.updateOrigins(e);return b};n.saveAs=async function(a,b,c){return l.saveAs({layer:a,itemType:"Feature Service",validateLayer:q,createItemData:(e,
d)=>Promise.resolve(u([e])),errorNamePrefix:"feature-layer-utils-save-as",newItem:b,setItemProperties:Q},c)};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});