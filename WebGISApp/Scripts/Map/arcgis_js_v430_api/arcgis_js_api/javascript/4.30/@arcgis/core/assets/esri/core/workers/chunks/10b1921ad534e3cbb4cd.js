"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2349],{42349:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(6407),n=r(99063),l=r(1985),s=r(50472),i=r(89157),o=r(72604),c=r(57492),u=r(30861);r(32773),r(20266),r(90740),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(29298),r(58498),r(45371),r(80959),r(1178),r(29512),r(64604),r(82408),r(73509),r(28276),r(49877),r(44600),r(2160),r(7969),r(69763),r(93804),r(18683),r(56273),r(64752),r(48844),r(29208),r(59192),r(69277),r(70580),r(75191),r(24319),r(62092),r(43059),r(89935),r(49813);const y={FeatureLayer:!0,SceneLayer:!0};async function d(e){const{properties:a,url:c}=e,d={...a,url:c},p=await async function(e,a){let r=(0,l.p)(e);if(null==r&&(r=await async function(e,a){const r=await(0,u.f)(e,{customParameters:a});let t=null,s=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",s=r.id??null):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":m(r)?(t="SceneServer",s=r.id):r.hasOwnProperty("layers")&&m(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=s?(0,l.b)(e):null;return{title:null!=o&&r.name||(0,n.e7)(e),serverType:t,sublayer:s,url:{path:null!=o?o.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:d}=r;let f;const w={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},p="FeatureServer"===c,b="SceneServer"===c,v={parsedUrl:r,Constructor:null,layerId:p||b?d??void 0:void 0,layers:[],tables:[]};switch(c){case"MapServer":if(null!=d){const{type:r}=await(0,u.f)(e,{customParameters:a});switch(f="FeatureLayer",r){case"Catalog Layer":f="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new t.A("arcgis-layers:unsupported",`fromUrl() not supported for "${r}" layers`)}}else f=await async function(e,a){return(await(0,u.f)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,u.f)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;f=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.f)(r.url.path,{customParameters:a});if(f="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)f="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.s[e]&&(f=o.s[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(f="FeatureLayer",null!=d){const r=await(0,u.f)(e,{customParameters:a});v.sourceJSON=r,f=(0,i.g)(r.type)}break;default:f=w[c]}if(y[f]&&null==d){const r=await async function(e,a,r){let t,n,l=!1;switch(a){case"FeatureServer":{const a=await(0,i.f)(e,{customParameters:r});l=!!a.layersJSON,t=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){const r=await(0,u.f)(e,{customParameters:a}),t=r.layers?.[0];if(!t)return{serviceInfo:r};try{const{serverUrl:t}=await(0,s.f)(e),n=await(0,u.f)(t,{customParameters:a}).catch((()=>null));return n&&(r.tables=n.tables),{serviceInfo:r,tableServerUrl:t}}catch{return{serviceInfo:r}}}(e,r);t=a.serviceInfo,n=a.tableServerUrl;break}default:t=await(0,u.f)(e,{customParameters:r})}const o=t?.layers,c=t?.tables;return{layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:l?o:[],tableInfos:l?c:[]}}(e,c,a);if(p&&(v.sublayerInfos=r.layerInfos,v.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)v.layers=r.layers,v.tables=r.tables,p&&r.layerInfos?.length&&(v.sublayerConstructorProvider=await async function(e){if(!e.length)return;const a=new Set,r=[];for(const{type:t}of e)a.has(t)||(a.add(t),r.push(h((0,i.g)(t))));const t=await Promise.all(r),n=new Map;return Array.from(a).forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(p||b){const e=r.layerInfos?.[0]??r.tableInfos?.[0];if(v.layerId=r.layers[0]?.id??r.tables[0]?.id,v.sourceJSON=e,p){const a=e?.type;f=(0,i.g)(a)}}}return v.Constructor=await h(f),v}(c,a?.customParameters),{Constructor:b,layerId:v,sourceJSON:S,parsedUrl:L,layers:P,tables:g}=p;if(P.length+g.length===0)return null!=v&&(d.layerId=v),null!=S&&(d.sourceJSON=S),new b(d);const I=new(0,(await Promise.all([r.e(7820),r.e(1751)]).then(r.bind(r,64132))).default)({title:L.title});return await async function(e,a,r){const t=a.sublayerConstructorProvider;for(const{id:n,serverUrl:l}of a.layers){const s=f(a.sublayerInfos,n),i=w(l,n,s,(s&&t?.(s))??a.Constructor,r);e.add(i)}if(a.tables.length){const t=await h("FeatureLayer");a.tables.forEach((({id:n,serverUrl:l})=>{const s=w(l,n,f(a.tableInfos,n),t,r);e.tables.add(s)}))}}(I,p,d),I}function f(e,a){return e?e.find((({id:e})=>e===a)):null}function w(e,a,r,t,n){const l={...n,layerId:a};return null!=e&&(l.url=e),null!=r&&(l.sourceJSON=r),"sublayerTitleMode"in t.prototype&&(l.sublayerTitleMode="service-name"),new t(l)}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function h(e){return(0,c.l[e])()}},50472:(e,a,r)=>{r.d(a,{f:()=>u});var t=r(29512),n=r(64604),l=r(6407),s=r(80959),i=r(1985),o=r(82408),c=r(43059);async function u(e,a){const r=(0,i.p)(e);if(!r)throw new l.A("invalid-url","Invalid scene service url");const u={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const r=new c.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,s.QP)(e)}return null}(e);null!=l&&(r.portal=new o.A({url:l}));try{return r.load({signal:e.signal})}catch(e){return(0,s.QP)(e),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new c.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,s.QP)(e),null}}(u);if(!f?.url)throw new l.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=f;const w=await d(f.url,u);return w.portalItem=f,w}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,i.p)(e);if(!r)throw new l.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const o=y(a),c=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,u=(c?.layers?.[0]||c?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...u},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},f=d("anonymous").catch((()=>d("no-prompt"))),[w,m]=await Promise.all([f,o]),h=m?.layers,p=w.data&&w.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(h)){for(let e=0;e<Math.min(h.length,p.length);e++)if(h[e].id===s)return{serverUrl:t,layerId:p[e].id}}else if(null!=s&&s<p.length)return{serverUrl:t,layerId:p[s].id};throw new Error("could not find matching associated sublayer")}},89157:(e,a,r)=>{r.d(a,{f:()=>l,g:()=>d});var t=r(30861);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function l(e,a){const{loadContext:r,...n}=a||{},l=r?await r.fetchServiceMetadata(e,n):await(0,t.f)(e,n);y(l),o(l);const s={serviceJSON:l};if((l.currentVersion??0)<10.5)return s;const i=`${e}/layers`,c=r?await r.fetchServiceMetadata(i,n):await(0,t.f)(i,n);return y(c),o(c),s.layersJSON={layers:c.layers,tables:c.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function i(e){return"Table"===e.type}function o(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(i)}function c(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function y(e){e.layers?.forEach(c),e.tables?.forEach(u)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},57492:(e,a,r)=>{r.d(a,{l:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(7820),r.e(6391)]).then(r.bind(r,56391))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(9292),r.e(2283),r.e(7125),r.e(2606),r.e(3101),r.e(7076),r.e(7427),r.e(5414)]).then(r.bind(r,75414))).default,CSVLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(9292),r.e(2283),r.e(7125),r.e(3279)]).then(r.bind(r,55963))).default,CatalogLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9292),r.e(2283),r.e(8140),r.e(3609),r.e(8380),r.e(3378)]).then(r.bind(r,38030))).default,DimensionLayer:async()=>(await r.e(3972).then(r.bind(r,3972))).default,ElevationLayer:async()=>(await Promise.all([r.e(1354),r.e(5026)]).then(r.bind(r,95026))).default,FeatureLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(9292),r.e(2283),r.e(7125),r.e(9081)]).then(r.bind(r,77125))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(9292),r.e(7634)]).then(r.bind(r,93390))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(7820),r.e(4048),r.e(1029),r.e(8340)]).then(r.bind(r,18340))).default,GroupLayer:async()=>(await Promise.all([r.e(7820),r.e(4132)]).then(r.bind(r,64132))).default,ImageryLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(8140),r.e(2138),r.e(38),r.e(3409)]).then(r.bind(r,71489))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(2138),r.e(38),r.e(6082),r.e(5383)]).then(r.bind(r,25383)).then((e=>e.I))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(9583).then(r.bind(r,29583))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(3101),r.e(327),r.e(403)]).then(r.bind(r,70403))).default,KMLLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(2397),r.e(633)]).then(r.bind(r,80633))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(8896),r.e(7837),r.e(3551),r.e(6702),r.e(4305)]).then(r.bind(r,54305))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(327),r.e(4395)]).then(r.bind(r,49991))).default,LinkChartLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(8896),r.e(7837),r.e(3551),r.e(6702),r.e(5075)]).then(r.bind(r,35075))).default,MapImageLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(9292),r.e(8140),r.e(3609),r.e(5820),r.e(739)]).then(r.bind(r,90739))).default,MapNotesLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(9292),r.e(2283),r.e(7125),r.e(4450)]).then(r.bind(r,45318))).default,MediaLayer:async()=>(await Promise.all([r.e(7820),r.e(605)]).then(r.bind(r,50605))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(9292),r.e(3649),r.e(9932)]).then(r.bind(r,59932))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(7820),r.e(4133),r.e(7390)]).then(r.bind(r,17390))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(9292),r.e(2283),r.e(7125),r.e(2227)]).then(r.bind(r,31647)).then((e=>e.O))).default,PointCloudLayer:async()=>(await Promise.all([r.e(5702),r.e(3101),r.e(7775)]).then(r.bind(r,17775))).default,RouteLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(2397),r.e(7927)]).then(r.bind(r,17927))).default,SceneLayer:async()=>(await Promise.all([r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(2606),r.e(9811),r.e(3101),r.e(327),r.e(7076),r.e(993),r.e(7427),r.e(287)]).then(r.bind(r,70287))).default,StreamLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(1849)]).then(r.bind(r,72669))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(9292),r.e(2283),r.e(2461)]).then(r.bind(r,2461))).default,TileLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(9292),r.e(8140),r.e(3609),r.e(1354),r.e(5820),r.e(2161)]).then(r.bind(r,62161))).default,UnknownLayer:async()=>(await r.e(2817).then(r.bind(r,82817))).default,UnsupportedLayer:async()=>(await r.e(6114).then(r.bind(r,56114))).default,VectorTileLayer:async()=>(await Promise.all([r.e(7820),r.e(1354),r.e(1514),r.e(1302),r.e(1656)]).then(r.bind(r,1656))).default,VideoLayer:async()=>(await Promise.all([r.e(7820),r.e(2405)]).then(r.bind(r,92405))).default,VoxelLayer:async()=>(await Promise.all([r.e(5702),r.e(3101),r.e(327),r.e(3471)]).then(r.bind(r,43471))).default,WFSLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(4225),r.e(5059)]).then(r.bind(r,12353))).default,WMSLayer:async()=>(await Promise.all([r.e(7820),r.e(5702),r.e(4048),r.e(1029),r.e(9323)]).then(r.bind(r,9323))).default,WMTSLayer:async()=>(await Promise.all([r.e(7820),r.e(4133),r.e(6825)]).then(r.bind(r,36825))).default,WebTileLayer:async()=>(await Promise.all([r.e(7820),r.e(4133)]).then(r.bind(r,64133)).then((e=>e.a))).default}},30861:(e,a,r)=>{r.d(a,{f:()=>n});var t=r(64604);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);