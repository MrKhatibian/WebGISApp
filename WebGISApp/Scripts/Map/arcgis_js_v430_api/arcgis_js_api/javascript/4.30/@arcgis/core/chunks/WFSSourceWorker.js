/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{c as t}from"./asyncUtils.js";import e from"../core/Error.js";import{L as r}from"./Logger.js";import{throwIfAborted as s,isAbortError as o}from"../core/promiseUtils.js";import{W as i}from"../core/accessorSupport/decorators/subclass.js";import{f as a}from"./unitUtils.js";import{b as p,a as n}from"./featureConversionUtils.js";import{F as m}from"./FeatureStore.js";import{c as l,p as u}from"./projectionSupport.js";import{Q as c}from"./QueryEngine.js";import{v as j,c as h}from"./geojson.js";import{m as d}from"./sourceUtils.js";import{getGetFeatureSpatialReference as y,getFeatureCount as g,getFeature as f}from"../layers/ogc/wfsUtils.js";import _ from"../layers/support/FieldsIndex.js";import{u as C}from"./timeZoneUtils.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/lang.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../config.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"../core/Evented.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./_commonjsHelpers.js";import"./timeSupport.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils8.js";import"./utils9.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./json.js";import"./MemCache.js";import"./LRUCache.js";import"../core/sql/WhereClause.js";import"./TimeOnly.js";import"./UnknownTimeZone.js";import"./datetime.js";import"./locale.js";import"./fieldType.js";import"./QueryEngineCapabilities.js";import"./quantizationUtils.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./number.js";import"./substitute.js";import"./messages.js";import"./utils12.js";import"./screenUtils.js";import"./timeUtils.js";import"./heatmapUtils.js";import"./vec4.js";import"./vec4f64.js";import"./utils2.js";import"./basemapUtils.js";import"../Basemap.js";import"../core/Collection.js";import"./shared.js";import"./collectionUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"./loadAll.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./persistableUrlUtils.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./layerUtils2.js";import"./utils3.js";import"./colorUtils.js";import"./mat4.js";import"./utils10.js";import"./generateRendererUtils.js";import"./enumeration.js";import"./SnappingCandidate.js";import"./Scheduler.js";import"../core/reactiveUtils.js";import"../core/signal.js";import"./debugFlags.js";import"./date2.js";import"./xmlUtils.js";import"./arcgisLayerUrl.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";const x="esri.layers.WFSLayer";class R{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,r={}){const{getFeatureUrl:o,getFeatureOutputFormat:i,fields:a,geometryType:p,featureType:n,maxRecordCount:u,maxTotalRecordCount:j,maxPageCount:h,objectIdField:d,customParameters:g}=t,{spatialReference:f,getFeatureSpatialReference:x}=y(o,n,t.spatialReference);try{await l(x,f)}catch{throw new e("unsupported-projection","Projection not supported",{inSpatialReference:x,outSpatialReference:f})}s(r),this._customParameters=g,this._featureType=n,this._fieldsIndex=_.fromLayerJSON({fields:a,dateFieldsTimeReference:a.some((t=>"esriFieldTypeDate"===t.type))?{timeZoneIANA:C}:null}),this._geometryType=p,this._getFeatureUrl=o,this._getFeatureOutputFormat=i,this._getFeatureSpatialReference=x,this._maxRecordCount=u,this._maxTotalRecordCount=j,this._maxPageCount=h,this._objectIdField=d,this._spatialReference=f;let R=await this._snapshotFeatures(r);if(R.errors.length>0&&(this._supportsPagination=!1,R=await this._snapshotFeatures(r),R.errors.length>0))throw R.errors[0];return this._queryEngine=new c({fieldsIndex:this._fieldsIndex,geometryType:p,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:f,timeInfo:null,featureStore:new m({geometryType:p,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(R.features),{warnings:w(R),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new e("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(e){return this._customParameters=e.customParameters,this._maxRecordCount=e.maxRecordCount,this._maxTotalRecordCount=e.maxTotalRecordCount,this._maxPageCount=e.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=t((t=>this._snapshotFeatures({signal:t}))),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(t.features);for(const e of w(t))r.getLogger(x).warn(new i("wfs-layer:refresh-warning",e.message,e.details));t.errors?.length&&r.getLogger(x).warn(new i("wfs-layer:refresh-error","Refresh completed with errors",{errors:t.errors}))}),(()=>{this._queryEngine.featureStore.clear()})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(t){const e=t?.signal,r=this._maxTotalRecordCount,i=this._maxPageCount,a=this._supportsPagination?await g(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0;let p=[];const n=[];if(null==a)try{p=await this._singleQuery(e)}catch(t){o(t)||n.push(t)}else{const t=Math.min(a,r),s=function*(t,e,r){for(let s=0;s<e;s++)yield t._pageQuery(s,r)}(this,Math.max(1,Math.min(Math.ceil(t/this._maxRecordCount),i)),e);await Promise.allSettled(Array.from({length:10}).map((()=>async function(t,e,r){let s=t.next();for(;!s.done;){try{const t=await s.value;e.push(...t)}catch(t){o(t)||r.push(t)}s=t.next()}}(s,p,n))))}return s(e),{features:p,totalRecordCount:a,maxTotalRecordCount:r,maxPageCount:i,errors:n}}async _singleQuery(t){const e=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})}async _pageQuery(t,e){const r=t*this._maxRecordCount,s=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:r,count:this._maxRecordCount,signal:e});return this._processGeoJSON(s,{startIndex:r,signal:e})}_processGeoJSON(t,e){j(t,this._getFeatureSpatialReference.wkid);const{startIndex:r,signal:o}=e;s(o);const i=h(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!a(this._spatialReference,this._getFeatureSpatialReference))for(const t of i)null!=t.geometry&&(t.geometry=p(u(n(t.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let m=r??1;for(const t of i){const e={};d(this._fieldsIndex,e,t.attributes,!0),t.attributes=e,null==e[this._objectIdField]&&(t.objectId=e[this._objectIdField]=m++)}return i}}function w(t){const e=[];return null!=t.totalRecordCount&&(t.features.length<t.totalRecordCount&&e.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${t.features.length} of ${t.totalRecordCount} in ${t.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:t.features.length,totalRecordCount:t.totalRecordCount}}),t.totalRecordCount>t.maxTotalRecordCount&&e.push({name:"wfs-layer:large-dataset",message:`The number of ${t.totalRecordCount} features exceeds the maximum allowed of ${t.maxTotalRecordCount}.`,details:{recordCount:t.features.length,totalRecordCount:t.totalRecordCount,maxTotalRecordCount:t.maxTotalRecordCount}})),e}export{R as default};