"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9838],{46130:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(76553);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,a.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},76553:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},59838:(e,t,r)=>{r.d(t,{save:()=>d,saveAs:()=>y});var a=r(71530),n=r(10407);const i="Image Service",o="imagery-layer-save",s="imagery-layer-save-as",l="imagery-tile-layer-save",p="imagery-tile-layer-save-as";function u(e){if("imagery"===e.type)return{isValid:!0};const{raster:t}=e,r="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return{isValid:"RasterTileServer"===r?.datasetFormat&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function m(e,t){const{parsedUrl:r,title:a,fullExtent:i}=e;t.url=r.path,t.title||=a;try{t.extent=await(0,n.sQ)(i)}catch{t.extent=void 0}(0,n.OM)(t,n.mm.METADATA),"imagery-tile"===e.type&&(0,n.LG)(t,n.mm.TILED_IMAGERY)}async function d(e,t){const r="imagery"===e.type?o:l;return(0,a.UN)({layer:e,itemType:i,validateLayer:u,createItemData:c,errorNamePrefix:r},t)}async function y(e,t,r){const n="imagery"===e.type?s:p;return(0,a.Uh)({layer:e,itemType:i,validateLayer:u,createItemData:c,errorNamePrefix:n,newItem:t,setItemProperties:m},r)}},71530:(e,t,r)=>{r.d(t,{UN:()=>h,Uh:()=>I});var a=r(49186),n=r(46130),i=r(20655),o=r(80812),s=r(88788),l=r(10407),p=r(49864),u=r(26121);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:i}=e;if((0,p.X)(t),function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:i,layer:o}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),i){const e=i(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function y(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,m(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,m(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:n})}function f(e){const{newItem:t,itemType:r}=e;let a=o.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=i.A.getDefault(),d({...e,item:a}),a}function w(e){return(0,s.m)(e,"portal-item")}async function v(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function g(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:i,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e),y(e);const p=r.portalItem,u=i?i(p):w(p),m=await v(r,u,{...t,supplementalUnsupportedErrors:l}),d=await a({layer:r,layerJSON:m},p);return await(o?.(r,p)),g(p),await p.update({data:d}),(0,n.v)(u),await(s?.(p,u)),p}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:i,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e);const p=f(e),u=i?i(p):w(p),m=await v(r,u,{...t,supplementalUnsupportedErrors:l}),d=await a({layer:r,layerJSON:m},p);return await o(r,p),g(p),await async function(e,t,r){const a=e.portal;await a.signIn(),await(a.user?.addItem({item:e,data:t,folder:r?.folder}))}(p,d,t),r.portalItem=p,(0,n.v)(u),await(s?.(p,u)),p}},88788:(e,t,r)=>{r.d(t,{m:()=>o,v:()=>i});var a=r(84952),n=r(20655);function i(e,t){return{...s(e,t),readResourcePaths:[]}}function o(e,t,r){const n=(0,a.An)(e.itemUrl);return{...s(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function s(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},49864:(e,t,r)=>{r.d(t,{X:()=>o});var a=r(92602),n=r(49186),i=r(926);function o(e){if(a.A.apiKey&&(0,i.Q)(e.portal.url))throw new n.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},26121:(e,t,r)=>{r.d(t,{c:()=>o,d:()=>n});var a=r(49186);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,t,r){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new a.A(e,t,r)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((({name:e})=>!(i.has(e)||t.includes(e))))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);