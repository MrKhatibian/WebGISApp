"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5613],{22429:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(24183);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},92009:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(70333),n=t(78888),s=t(49186),i=t(74887),l=t(60694),c=t(20655),u=t(80812);async function o(e,a){const t=(0,l.qg)(e);if(!t)throw new s.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const t=new u.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=r.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,i.QP)(e)}return null}(e);null!=s&&(t.portal=new c.A({url:s}));try{return t.load({signal:e.signal})}catch(e){return(0,i.QP)(e),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const r=new u.default({portal:t.portal,id:t.id});return await r.load(),r}catch(e){return(0,i.QP)(e),null}}(o);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=f;const m=await d(f.url,o);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const t=(0,l.qg)(e);if(!t)throw new s.A("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,i=a.layerId;if(null==i)return{serverUrl:r};const c=y(a),u=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,d=e=>{const t={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(r,t)},f=d("anonymous").catch((()=>d("no-prompt"))),[m,w]=await Promise.all([f,c]),h=w?.layers,p=m.data&&m.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(h)){for(let e=0;e<Math.min(h.length,p.length);e++)if(h[e].id===i)return{serverUrl:r,layerId:p[e].id}}else if(null!=i&&i<p.length)return{serverUrl:r,layerId:p[i].id};throw new Error("could not find matching associated sublayer")}},23154:(e,a,t)=>{t.d(a,{K:()=>d,Q:()=>s});var r=t(24183);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,a){const{loadContext:t,...n}=a||{},s=t?await t.fetchServiceMetadata(e,n):await(0,r.V)(e,n);y(s),c(s);const i={serviceJSON:s};if((s.currentVersion??0)<10.5)return i;const l=`${e}/layers`,u=t?await t.fetchServiceMetadata(l,n):await(0,r.V)(l,n);return y(u),c(u),i.layersJSON={layers:u.layers,tables:u.tables},i}function i(e){const{type:a}=e;return!!a&&n.has(a)}function l(e){return"Table"===e.type}function c(e){e.layers=e.layers?.filter(i),e.tables=e.tables?.filter(l)}function u(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function y(e){e.layers?.forEach(u),e.tables?.forEach(o)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},4513:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(3161),t.e(9257)]).then(t.bind(t,17029))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(9558),t.e(620),t.e(3600),t.e(2944),t.e(8947),t.e(4850),t.e(7110),t.e(2931)]).then(t.bind(t,88303))).default,CSVLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(9558),t.e(620),t.e(3600),t.e(4174)]).then(t.bind(t,72256))).default,CatalogLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(9558),t.e(620),t.e(893),t.e(3622),t.e(2593),t.e(6107)]).then(t.bind(t,79003))).default,DimensionLayer:async()=>(await t.e(1493).then(t.bind(t,71493))).default,ElevationLayer:async()=>(await Promise.all([t.e(9186),t.e(5204)]).then(t.bind(t,5111))).default,FeatureLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(9558),t.e(620),t.e(3600),t.e(9377)]).then(t.bind(t,13600))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(3839)]).then(t.bind(t,17625))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(3161),t.e(1147),t.e(1874),t.e(6184)]).then(t.bind(t,63201))).default,GroupLayer:async()=>(await Promise.all([t.e(3161),t.e(7481)]).then(t.bind(t,85989))).default,ImageryLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(893),t.e(2876),t.e(8742),t.e(4135)]).then(t.bind(t,5159))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(2876),t.e(8488),t.e(8742),t.e(9082)]).then(t.bind(t,97327))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(1528).then(t.bind(t,61528))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(8947),t.e(964),t.e(8003)]).then(t.bind(t,84453))).default,KMLLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(5494),t.e(2469)]).then(t.bind(t,79465))).default,KnowledgeGraphLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(835),t.e(3097),t.e(1932),t.e(6289),t.e(8692)]).then(t.bind(t,28692))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(964),t.e(7272)]).then(t.bind(t,42452))).default,LinkChartLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(835),t.e(3097),t.e(1932),t.e(6289),t.e(9519)]).then(t.bind(t,49519))).default,MapImageLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(9558),t.e(893),t.e(3622),t.e(591),t.e(7656)]).then(t.bind(t,7656))).default,MapNotesLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(9558),t.e(620),t.e(3600),t.e(8739)]).then(t.bind(t,35079))).default,MediaLayer:async()=>(await Promise.all([t.e(3161),t.e(7899)]).then(t.bind(t,87899))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(3089),t.e(4591)]).then(t.bind(t,87152))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(3161),t.e(7430),t.e(349)]).then(t.bind(t,40349))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(9558),t.e(620),t.e(3600),t.e(3740)]).then(t.bind(t,16230))).default,PointCloudLayer:async()=>(await Promise.all([t.e(2829),t.e(8947),t.e(171)]).then(t.bind(t,76742))).default,RouteLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(5494),t.e(3920)]).then(t.bind(t,97550))).default,SceneLayer:async()=>(await Promise.all([t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(3030),t.e(2944),t.e(8947),t.e(964),t.e(4850),t.e(1535),t.e(7110),t.e(1737)]).then(t.bind(t,13899))).default,StreamLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(4761)]).then(t.bind(t,60683))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(9558),t.e(620),t.e(7e3)]).then(t.bind(t,70048))).default,TileLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(9558),t.e(893),t.e(3622),t.e(9186),t.e(591),t.e(1756)]).then(t.bind(t,71756))).default,UnknownLayer:async()=>(await t.e(146).then(t.bind(t,146))).default,UnsupportedLayer:async()=>(await t.e(5165).then(t.bind(t,45165))).default,VectorTileLayer:async()=>(await Promise.all([t.e(3161),t.e(9186),t.e(9976),t.e(8705),t.e(9885)]).then(t.bind(t,64152))).default,VideoLayer:async()=>(await Promise.all([t.e(3161),t.e(6875)]).then(t.bind(t,86875))).default,VoxelLayer:async()=>(await Promise.all([t.e(2829),t.e(8947),t.e(964),t.e(1389)]).then(t.bind(t,16183))).default,WFSLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(1132),t.e(9566),t.e(1956),t.e(5494),t.e(4796),t.e(5894),t.e(4322),t.e(9511)]).then(t.bind(t,16350))).default,WMSLayer:async()=>(await Promise.all([t.e(3161),t.e(2829),t.e(1147),t.e(1874),t.e(5181)]).then(t.bind(t,51904))).default,WMTSLayer:async()=>(await Promise.all([t.e(3161),t.e(7430),t.e(309)]).then(t.bind(t,20309))).default,WebTileLayer:async()=>(await Promise.all([t.e(3161),t.e(7430)]).then(t.bind(t,47314))).default}},66964:(e,a,t)=>{t.d(a,{Ju:()=>u,K8:()=>d,XH:()=>o,_r:()=>s,bO:()=>i,iK:()=>y,nu:()=>f,pJ:()=>l,rc:()=>c});var r=t(92009),n=t(23154);function s(e){const a={id:e.id,name:e.name},t=(0,n.K)(e.type);return"FeatureLayer"!==t&&(a.layerType=t),a}async function i(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:l(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(s),e.tables=e.tables||r?.tables?.map(s)}return e}function l(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function c(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function u(e,a){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?e===a:"ArcGISFeatureLayer"===a))}function o(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function y(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function d(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function f(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const r=await t.fetchServiceMetadata(e.url);a.layers=r.layers?.map(s)}const{serverUrl:n,portalItem:i}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:l(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&i){const e=await i.fetchData();if(e?.tables)a.tables=e.tables.map(s);else{const r=await t.fetchServiceMetadata(n,{customParameters:l(e)?.customParameters});a.tables=r?.tables?.map(s)}}if(a.tables)for(const e of a.tables)e.url=`${n}/${e.id}`;return a}},45613:(e,a,t)=>{t.d(a,{fromItem:()=>d,n:()=>f});var r=t(49186),n=t(92009),s=t(23154),i=t(22429),l=t(83531),c=t(4513),u=t(80812),o=t(66964),y=t(10407);async function d(e){let{portalItem:a}=e;!a||a instanceof u.default||(a=new u.default(a));const t=await async function(e){await e.load();const a=new i.v;return async function(e){const a=e.className,t=c.S[a];return{constructor:await t(),properties:e.properties}}(await f(e,a))}(a);return new(0,t.constructor)({portalItem:a,...t.properties})}async function f(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,y.Y)(e,"Map Notes"),t=(0,y.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,y.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,o.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await m(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),n=r?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),i=s.cacheType?.toLowerCase(),l=s.capabilities?.toLowerCase().includes("tilesonly");return"map"===i||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await m(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await(0,n.L)(e.url,{sceneLayerItem:e}),r=await a.fetchServiceMetadata(t);return r?.tables??[]}catch{return[]}}));if("object"==typeof t){const r={};let n;if(null!=t.id?(r.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(l.XX))if(e.typeKeywords.includes(a))return{className:l.XX[a]};const s=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{className:l.XX[s?.layerType]||"SceneLayer",properties:r}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===t?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function m(e,a,t){const{url:r,type:n}=e,i="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(i){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{id:t.id,className:(0,s.K)(t.type),sourceJSON:t}}return{}}await e.load();let l=await a.fetchItemData(e);if(i){const e=await(0,o.bO)(l,r,a),t=w(e);if("object"==typeof t){const a=(0,o.rc)(e,t.id);t.className=(0,o.K8)(a?.layerType)}return t}if("Scene Service"===n&&(l=await(0,o.nu)(e,l,a)),(0,o.XH)(l)>0)return w(l);const c=await a.fetchServiceMetadata(r);return t&&(c.tables=await t()),w(c)}function w(e){return 1===(0,o.XH)(e)&&{id:(0,o.pJ)(e)?.id}}},24183:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(78888);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}}}]);