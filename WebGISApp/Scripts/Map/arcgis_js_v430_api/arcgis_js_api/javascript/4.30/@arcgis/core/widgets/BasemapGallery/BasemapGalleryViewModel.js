/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Basemap.js";import s from"../../core/Collection.js";import r from"../../core/Loadable.js";import{watch as i,on as o,when as a}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import{cast as p}from"../../core/accessorSupport/decorators/cast.js";import{i as l}from"../../core/lang.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import{canProjectWithoutEngine as m,isLoaded as u,load as h}from"../../geometry/projection.js";import{f}from"../../chunks/unitUtils.js";import{k as d}from"../../chunks/basemapUtils.js";import y from"../../core/Error.js";import{throwIfAborted as j}from"../../core/promiseUtils.js";import{p as b,q as g,r as w}from"../../chunks/layerUtils2.js";import{s as k,V as v}from"../../chunks/ViewingMode.js";import{g as B,c as R}from"../../chunks/terrainUtils.js";import{T as U}from"../../chunks/TerrainConst.js";import{i as I}from"../../chunks/spatialReferenceSupport.js";import L from"./support/BasemapGalleryItem.js";import P from"./support/LocalBasemapsSource.js";import S from"./support/PortalBasemapsSource.js";import"../../request.js";import"../../config.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../chunks/collectionUtils.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../chunks/writer.js";import"../../geometry/SpatialReference.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../portal/Portal.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/locale.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../core/Promise.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/messages.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/vec3f64.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/utils3.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../layers/support/LOD.js";import"../../layers/support/TileInfo.js";import"../../chunks/TileKey.js";import"../../core/Identifiable.js";async function _(e,t={}){const{basemap:s,view:r}=e;await s.load(t),function(e){if(0===e.baseLayers.length&&0===e.referenceLayers.length)return;const t=e.baseLayers.concat(e.referenceLayers).toArray().filter((e=>!g(e))).map((e=>function(e){return new y("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}(e)));if(t.length)throw t[0]}(s),await async function(e,t,s){if(0===e.baseLayers.length)return;const r=e.baseLayers.at(0);if(w(r)){try{await r.load(s)}catch(e){const t="basemap-compatibility:unknown-error",s="Unknown basemap compatibility error",{name:r=t,message:i=s,details:o}=e;throw new y(r,i,o)}!function(e,t){const s=t.state.viewingMode;if(!s)return;let r,i;if("wmts"===e?.type){const o=B(e,t.spatialReference,s);if(null==o.tileInfo)throw new y("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");r=o.tileInfo,i=o.fullExtent}else r=e.tileInfo,i=e.fullExtent;if(null==r)return;if(!I(r.spatialReference,s))throw new y(`basemapgalleryitem:spatial-reference-unsupported-${k(s)}`,`Basemap spatial reference is unsupported in ${k(s)} mode`);const o="vector-tile"===e?.type?r.getCompatibleForVTL(256):null;if(s===v.Global){let t=R(r,i,null,s);if(t&&"vector-tile"===e?.type&&null!=i&&o&&!R(o,i,null,s)&&(t=null),t){const e=r.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new y(`basemapgalleryitem:tiling-scheme-unsupported-${e}-global`,"Basemap tiling scheme is unsupported in global mode",{error:t})}}else if(U.checkUnsupported(r))throw new y("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const a=t.basemapTerrain?.tilingScheme;if(a&&!a.compatibleWith(r)&&("vector-tile"!==e?.type||!o||!a.compatibleWith(o)))throw new y("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(r,t)}}(s,r,t),j(t)}async function E(e,t={}){const{basemap:s,view:r}=e;j(t);const i=s.baseLayers.find((e=>"unknown"===e.type))?.loadError;if(null!=i)throw i;if(!r||"spatialReferenceLocked"in r&&!r.spatialReferenceLocked)return;if(await s.load(t),j(t),0===s.baseLayers.length)return;const o=s.baseLayers.at(0);if(!b(o))return;if(s.spatialReference){if(r.spatialReference.equals(s.spatialReference))return;T()}await o.load(t),j(t);const a=(("supportedSpatialReferences"in o?o.supportedSpatialReferences:null)||["tileInfo"in o?o.tileInfo?.spatialReference:null]).filter(l);0!==a.length&&a.every((e=>!r.spatialReference.equals(e)))&&T()}function T(){throw new y("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}const x=s.ofType(L);let F=class extends r{constructor(e){super(e),this._loadingProjectionEngine=!1,this.items=new x,this.source=new S,this.view=null}initialize(){const e=()=>this._recreateItems();this.addHandles([i((()=>"ready"===this.state?this.compatibilityFunction:null),(()=>this._updateItems())),o((()=>this.source?.basemaps),"change",e,{onListenerAdd:e}),a((()=>this.view),(()=>{this.source instanceof S&&(this.source.viewType=this.view?.type)}),{once:!0})])}destroy(){const e=this.source.basemaps.find((e=>e===this.activeBasemap));e&&this.source.basemaps.remove(e),this.source?.destroy()}get activeBasemap(){return this.view?.map?.basemap??null}set activeBasemap(e){const s=this.view;if(!s?.map)return;const r="string"==typeof e?t.fromId(e):e;if(!r||!s.ready)return s.map.basemap=r,void this._clearOverride("activeBasemap");const i=r.spatialReference||this.items?.find((e=>this.basemapEquals(r,e.basemap)))?.spatialReference;if(i&&"spatialReferenceLocked"in s&&!s.spatialReferenceLocked){const t=s.spatialReference;if(null!=i&&!f(t,i)&&!m(s.spatialReference,i)&&!u())return this._override("activeBasemap",r),this._loadingProjectionEngine=!0,void h().then((()=>{this._get("activeBasemap")===e&&(s.map.basemap=e,s.spatialReference=i,this._clearOverride("activeBasemap"))}),(()=>{})).then((()=>{this._loadingProjectionEngine=!1}));s.map.basemap=r,this._clearOverride("activeBasemap"),null==i||f(s.spatialReference,i)||(s.spatialReference=i)}else s.map.basemap=r,this._clearOverride("activeBasemap")}get activeBasemapIndex(){const{state:e,activeBasemap:t}=this;return"ready"!==e?-1:this._findBasemapIndex(t)}get compatibilityFunction(){return"3d"===this.view?.type?_:E}set compatibilityFunction(e){this._overrideIfSome("compatibilityFunction",e)}castSource(e){return Array.isArray(e)||s.isCollection(e)?new P({basemaps:Array.isArray(e)?new s(e):e}):function(e){return e&&"esri.portal.Portal"===e.declaredClass}(e)?new S({portal:e}):function(e){return e&&!(e instanceof S)&&(!!e.portal||!!e.query)}(e)?new S(e):function(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}(e)?e:null}get state(){return this.view?.ready&&this.source?this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(e,t){return d(e,t)}refresh(){this._recreateItems()}load(){return this.loadSource()}loadSource(e){return this.addResolvingPromise(r.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)}_findBasemapIndex(e){const{items:t}=this,s=t.findIndex((t=>t.basemap===e));return-1===s?t.findIndex((t=>this.basemapEquals(t.basemap,e))):s}_recreateItems(){const e=this.source?.basemaps??[],{view:t,compatibilityFunction:s}=this,r=new Map(this.items.map((e=>[e.basemap,e]))),i=e.map((e=>{const i=r.get(e);return i?(r.delete(e),i):new L({basemap:e,compatibilityFunction:s,view:t})}));this.items.removeAll(),this.items.addMany(i),r.forEach((e=>e.destroy()))}_updateItems(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view}};e([n()],F.prototype,"_loadingProjectionEngine",void 0),e([n()],F.prototype,"activeBasemap",null),e([n({readOnly:!0})],F.prototype,"activeBasemapIndex",null),e([n()],F.prototype,"compatibilityFunction",null),e([n({readOnly:!0,type:x})],F.prototype,"items",void 0),e([n()],F.prototype,"source",void 0),e([p("source")],F.prototype,"castSource",null),e([n({readOnly:!0})],F.prototype,"state",null),e([n()],F.prototype,"view",void 0),F=e([c("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],F);const O=F;export{O as default};