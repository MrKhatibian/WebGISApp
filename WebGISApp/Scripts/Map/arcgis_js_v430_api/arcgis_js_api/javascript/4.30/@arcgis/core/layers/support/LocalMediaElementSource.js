/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import s from"../../core/Collection.js";import{r as t}from"../../chunks/collectionUtils.js";import r from"../../core/Evented.js";import o from"../../core/Loadable.js";import{L as i}from"../../chunks/Logger.js";import{EsriPromiseMixin as n}from"../../core/Promise.js";import{throwIfAborted as m}from"../../core/promiseUtils.js";import{watch as l}from"../../core/reactiveUtils.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import p,{e as h}from"../../geometry/Extent.js";import{initializeProjection as u,project as d}from"../../geometry/projection.js";import{d as j}from"../../chunks/aaBoundingRect.js";import{f}from"../../chunks/unitUtils.js";import{B as k}from"../../chunks/BoundsStore.js";import g from"./ImageElement.js";import y from"./MediaElementBase.js";import{M as x}from"../../chunks/MediaElementView.js";import _ from"./VideoElement.js";import E from"../../geometry/SpatialReference.js";import"../../chunks/ensureType.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/reader.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Multipoint.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/PooledRBush.js";import"../../chunks/quickselect.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/imageUtils.js";import"../../chunks/uuid.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../core/Identifiable.js";import"../../chunks/MultiOriginJSONSupport.js";import"./ControlPointsGeoreference.js";import"../../core/Clonable.js";import"../../chunks/perspectiveUtils.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/vec2.js";import"../../chunks/screenUtils.js";import"../../chunks/vec2f64.js";import"../../chunks/GeoreferenceBase.js";import"./CornersGeoreference.js";import"./ExtentAndRotationGeoreference.js";import"../../chunks/normalizeUtilsSync.js";import"../../chunks/normalizeUtilsCommon.js";const R={key:"type",defaultKeyValue:"image",base:y,typeMap:{image:g,video:_}},U=s.ofType(R);let M=class extends(o.LoadableMixin(n(r.EventedAccessor))){constructor(e){super(e),this._index=new k,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:s}=this;for(const t of e.added){if(this._elementViewsMap.get(t))continue;const e=new x({spatialReference:s,element:t});this._elementViewsMap.set(t,e);const r=l((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(r,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,s)=>this._elementsIndexes.set(e,s))),this.emit("refresh")},this.elements=new U}async load(e){if(m(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:E.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",t(e,this._get("elements"),U))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new p({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):i.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,s){await this.load(),await u(e.spatialReference,this.spatialReference,null,s);const t=f(e.spatialReference,this.spatialReference)?e:d(e,this.spatialReference);if(!t)return[];const r=t.normalize(),o=[];for(const e of r)this._index.forEachInBounds(j(e),(({normalizedCoords:s,element:t})=>{null!=s&&h(e,s)&&o.push(t)}));return o.sort(((e,s)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(s))),o}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,s){const t=e.normalizedBounds,r=this._index.has(e),o=null!=t;this._index.delete(e),o&&this._index.set(e,t),this.notifyChange("fullExtent"),s||(r!==o?this.emit("refresh"):this.emit("change",{element:e.element}))}};e([c()],M.prototype,"elements",null),e([c({readOnly:!0})],M.prototype,"fullExtent",null),e([c()],M.prototype,"spatialReference",null),M=e([a("esri.layers.support.LocalMediaElementSource")],M);const w=M;export{w as default};