/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{p as t}from"./arcgisLayerUrl.js";import{f as r}from"./fetchService.js";import{g as o,p as a,a as s,b as i,c as n,i as p,d as l,l as c,L as m}from"./portalLayers.js";import{populateGroupLayer as u}from"./layersCreator.js";import{l as y}from"./lazyLayerLoader.js";import d from"../portal/Portal.js";import{a as j}from"./jsonContext.js";import{h as f}from"./portalItemUtils.js";import{l as g}from"./styleUtils2.js";import{f as h}from"./requestPresets.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./persistableUrlUtils.js";import"../kernel.js";import"./associatedFeatureServiceUtils.js";import"../request.js";import"../portal/PortalItem.js";import"./assets.js";import"../core/Loadable.js";import"../core/Promise.js";import"./reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./layerUtils2.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../geometry/projection.js";import"./vec3f64.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./asyncUtils.js";async function w(t,p){const l=t.instance.portalItem;if(l?.id)return await l.load(p),function(t){const r=t.instance.portalItem;if(!r?.type||!t.supportedTypes.includes(r.type))throw new e("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:t.supportedTypes.join(", ")})}(t),t.validateItem&&t.validateItem(l),async function(t,p){const l=t.instance,y=l.portalItem;if(!y)return;const{url:d,title:w}=y,I=j(y,"portal-item");if("group"===l.type)return async function(t,p,l){const y=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:d,type:g}=y;if("Group Layer"===g){if(!f(y,"Map"))throw new e("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function(e){const t=e.portalItem,r=await t.fetchData("json");if(!r)return;const o=j(t,"web-map");e.read(r,o),await u(e,r,{context:o}),e.resourceReferences={portalItem:t,paths:o.readResourcePaths??[]}}(t)}return t.read({title:d},p),async function(t,p){let l;const{portalItem:u}=t;if(!u)return;const y=u.type,d=p.layerModuleTypeMap;switch(y){case"Feature Service":case"Feature Collection":l=d.FeatureLayer;break;case"Stream Service":l=d.StreamLayer;break;case"Scene Service":l=d.SceneLayer;break;default:throw new e("portal:unsupported-item-type-as-group",`The item type '${y}' is not supported as a 'IGroupLayer'`)}const j=new m;let[f,g]=await Promise.all([l(),S(p,j)]),w=()=>f;if("Feature Service"===y){const e=o(g)?.customParameters;g=u.url?await a(g,u.url,j):{},w=await async function(e,t){const{layers:r}=e;if(!r?.length)return;const o=new Set,a=[];for(const{layerType:e}of r){const r=e??"ArcGISFeatureLayer";if(o.has(r))continue;o.add(r);const s=t[c(r)];a.push(s())}const s=await Promise.all(a),i=new Map;return Array.from(o).forEach(((e,t)=>{i.set(e,s[t])})),({layerType:e})=>{const t=e??"ArcGISFeatureLayer";return i.get(t)}}(g,d)||w;const s=await async function(e,t){const{layersJSON:o}=await r(e,t);if(!o)return null;const a=[...o.layers,...o.tables];return e=>a.find((t=>t.id===e.id))}(u.url,{customParameters:e,loadContext:j});return await b(t,w,g,s)}return"Scene Service"===y&&u.url&&(g=await s(u,g,j)),i(g)>0?await b(t,w,g):await async function(e,t){const{portalItem:r}=e;if(!r?.url)return;const o=await h(r.url);o&&b(e,t,{layers:o.layers?.map(n),tables:o.tables?.map(n)})}(t,w)}(t,l)}(l,I,t);d&&"media"!==l.type&&l.read({url:d},I);const L=new m,P=await S(t,L,p);return P&&l.read(P,I),l.resourceReferences={portalItem:y,paths:I.readResourcePaths??[]},"subtype-group"!==l.type&&l.read({title:w},I),g(l,I)}(t,p)}async function b(e,t,r,o){let a=r.layers||[];const s=r.tables||[];if("Feature Collection"===e.portalItem?.type?(a.forEach(((e,t)=>{e.id=t,"Table"===e?.layerDefinition?.type&&s.push(e)})),a=a.filter((e=>"Table"!==e?.layerDefinition?.type))):(a.reverse(),s.reverse()),a.forEach((a=>{const s=o?.(a);if(s||!o){const o=I(e,t(a),r,a,s);e.add(o)}})),s.length){const t=await y.FeatureLayer();s.forEach((a=>{const s=o?.(a);if(s||!o){const o=I(e,t,r,a,s);e.tables.add(o)}}))}}function I(e,t,r,o,a){const s=e.portalItem,i={portalItem:s.clone(),layerId:o.id};null!=o.url&&(i.url=o.url);const n=new t(i);if("sourceJSON"in n&&(n.sourceJSON=a),"subtype-group"!==n.type&&"catalog"!==n.type&&(n.sublayerTitleMode="service-name"),"Feature Collection"===s.type){const e={origin:"portal-item",portal:s.portal||d.getDefault()};n.read(o,e);const t=r.showLegend;null!=t&&n.read({showLegend:t},e)}return n}async function S(e,r,a){if(!1===e.supportsData)return;const s=e.instance,n=s.portalItem;if(!n)return;let c=null;try{c=await n.fetchData("json",a)}catch(e){}if(function(e){return"stream"!==e.type&&"layerId"in e}(s)){let e=null;const a=await async function(e,r,a){if(r?.layers&&r?.tables)return i(r);const s=t(e.url);if(!s)return 1;const n=await a.fetchServiceMetadata(s.url.path,{customParameters:o(r)?.customParameters}).catch((()=>null));return(r?.layers?.length??n?.layers?.length??0)+(r?.tables?.length??n?.tables?.length??0)}(n,c,r);if((c?.layers||c?.tables)&&a>0){if(null==s.layerId){const e=p(s.type),t=e?l(c,e)[0]:o(c);t&&(s.layerId=t.id)}e=function(e,t){const{layerId:r}=t,o=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return o&&function(e,t){const r="layerType"in e&&e.layerType,{type:o}=t;return!("feature"===o&&r&&"ArcGISFeatureLayer"!==e.layerType||"catalog"===o&&!r||"oriented-imagery"===o&&!r||"subtype-group"===o&&!r)}(o,t)?o:null}(c,s),"OrientedImageryLayer"===e?.layerType&&"oriented-imagery"===s.type&&s.supportedSourceTypes.add("Feature Layer"),e&&null!=c.showLegend&&(e.showLegend=c.showLegend)}return a>1&&"sublayerTitleMode"in s&&"service-name"!==s.sublayerTitleMode&&(s.sublayerTitleMode="item-title-and-service-name"),e}return c}export{w as load};