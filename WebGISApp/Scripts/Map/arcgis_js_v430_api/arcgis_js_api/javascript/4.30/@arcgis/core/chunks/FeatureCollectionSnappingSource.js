/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{m as i}from"./memoize.js";import{throwIfAborted as r,whenOrAbort as o}from"../core/promiseUtils.js";import{watch as s,initial as p,on as n}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{m as l}from"./elevationInfoUtils.js";import{m as j,a as y}from"./snappingUtils.js";import{m as c,c as g}from"./queryEngineUtils.js";import{g as u,a as d,b as h}from"./symbologySnappingCandidates.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/Error.js";import"../config.js";import"./asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./vec2.js";import"./vec2f64.js";import"./vec4.js";import"./vec4f64.js";import"./geodesicConstants.js";import"../geometry/support/geodesicUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./plane.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./mathUtils2.js";import"./sphere.js";import"./mat4.js";import"./ray.js";import"./normalizedPoint.js";import"./dehydratedPoint.js";import"./geometry2dUtils.js";import"../core/sql.js";import"./timeUtils.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./enumeration.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FullTextSearch.js";import"../core/Clonable.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./InputManager.js";import"./Queue.js";import"../core/signal.js";import"./keybindings.js";import"./utils6.js";import"./SnappingManager.js";import"../geometry/projection.js";import"./projectBuffer.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Settings2.js";import"../Color.js";import"./colorUtils.js";import"./RightAngleSnappingHint.js";import"./UpdatingHandles.js";import"../layers/support/FeatureFilter.js";import"./floorFilterUtils.js";import"./layerUtils2.js";import"./layerViewUtils.js";import"./viewUtils.js";import"./quantityUtils.js";import"../geometry/geometryEngine.js";import"./geometryEngineBase.js";import"./_commonjsHelpers.js";import"./hydrated.js";import"./screenUtils.js";import"./Cyclical.js";import"./angularMeasurementUtils.js";import"./projectVectorToVector.js";import"./projectPointToVector.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./VertexSnappingCandidate.js";import"./PointSnappingHint.js";import"./LRUCache.js";import"./MemCache.js";let v=class extends e{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:t}=this,{layer:e}=this.layerSource,i=null!=t&&"3d"===t.type;return i&&"subtype-group"!==e.type?u(i,{elevationInfo:e.elevationInfo,alignPointsInFeatures:async(i,r)=>(await o(t.whenLayerView(e),r)).elevationAlignPointsInFeatures(i,r)}):u()}get _snappingElevationFilter(){const{view:t}=this,e=null!=t&&"3d"===t.type&&"subtype-group"!==this.layerSource.layer.type;return d(e)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:e}=this.layerSource;return null!=t&&"3d"===t.type&&"subtype-group"!==e.type?h(this._symbologySnappingSupported,(async(i,o)=>{const s=await t.whenLayerView(e);return r(o),s.queryForSymbologySnapping({candidates:i,spatialReference:t.spatialReference},o)})):h()}get _symbologySnappingSupported(){return null!=this._layerView3D&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:t}=this,{layer:e}=this.layerSource;null!=t&&"3d"===t.type&&"subtype-group"!==e.type&&(t.whenLayerView(e).then((t=>this._layerView3D=t)),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:i}=e;l(t,i)&&this._snappingElevationAligner.notifyElevationSourceChange()})),s((()=>e.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),p),s((()=>null!=this._layerView3D?this._layerView3D.layer?.renderer:null),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),p),n((()=>this._layerView3D?.layer),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))]))}constructor(t){super(t),this.view=null,this._layerView3D=null,this._memoizedMakeGetGroundElevation=i(c)}refresh(){}async fetchCandidates(t,e){const{layer:i}=this.layerSource,o=i.source;if(!o?.querySnapping)return[];const s=j(i),p=y(t,this.view?.type??"2d",s),n=await o.querySnapping(p,{signal:e});r(e);const a=t.coordinateHelper.spatialReference,m=await this._snappingElevationAligner.alignCandidates(n.candidates,a,e);r(e);const l=await this._symbologySnappingFetcher.fetch(m,e);r(e);const c=0===l.length?m:[...m,...l],u=this._snappingElevationFilter.filter(p,c),d=this._memoizedMakeGetGroundElevation(this.view,a);return u.map((t=>g(t,d)))}};t([a({constructOnly:!0})],v.prototype,"layerSource",void 0),t([a({constructOnly:!0})],v.prototype,"view",void 0),t([a()],v.prototype,"_snappingElevationAligner",null),t([a()],v.prototype,"_snappingElevationFilter",null),t([a()],v.prototype,"_symbologySnappingFetcher",null),t([a()],v.prototype,"_layerView3D",void 0),t([a()],v.prototype,"_symbologySnappingSupported",null),v=t([m("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],v);export{v as FeatureCollectionSnappingSource};