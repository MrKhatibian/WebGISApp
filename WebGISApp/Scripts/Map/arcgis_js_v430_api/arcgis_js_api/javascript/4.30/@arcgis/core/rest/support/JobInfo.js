/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../request.js";import"../../core/lang.js";import{s as o}from"../../chunks/jsonMap.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{onAbort as r,createAbortError as i}from"../../core/promiseUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{e as p}from"../../chunks/enumeration.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{p as a,e as l}from"../../chunks/utils8.js";import u from"../geoprocessor/GPOptions.js";import c from"../../geometry/SpatialReference.js";import{normalizeCentralMeridian as j}from"../../geometry/support/normalizeUtils.js";import y from"../../layers/support/Field.js";import b from"../../layers/support/MapImage.js";import h from"./ArealUnit.js";import d from"./DataFile.js";import f from"./FeatureSet.js";import S from"./LinearUnit.js";import g,{d as k,m as D}from"./ParameterValue.js";import I from"./RasterData.js";import U from"./GPMessage.js";import"../../config.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/unitUtils.js";import"../../chunks/assets.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/normalizeUtilsCommon.js";import"../../geometry/support/jsonUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/simplify.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../chunks/utils9.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/networkEnums.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";async function C(t,o,e,r,i){const n={},p={},m=[];return function(t,s,o){for(const e in t){const r=t[e];if(r&&"object"==typeof r&&r instanceof f){const{features:t}=r;o[e]=[s.length,s.length+t.length],t.forEach((t=>{s.push(t.geometry)}))}}}(r,m,n),j(m).then((m=>{const{outSpatialReference:l,processExtent:u,processSpatialReference:c,returnColumnName:j,returnFeatureCollection:y,returnM:b,returnZ:h}=e,{path:d}=a(t);for(const t in n){const[s,o]=n[t];p[t]=m.slice(s,o)}const f=l?l.wkid||l:null,S=c?c.wkid||c:null,g="execute"===o?{returnColumnName:j||void 0,returnFeatureCollection:y||void 0,returnM:b||void 0,returnZ:h||void 0}:null,k=M({...u?{context:{extent:u,outSR:f,processSR:S}}:{"env:outSR":f,"env:processSR":S},...r,...g,f:"json"},null,p),D={...i,query:k};return s(`${d}/${o}`,D)}))}async function O(t,s){switch(t){case"areal-unit":return h.fromJSON(s);case"boolean":case"double":case"long":case"string":case"value-table":return s;case"date":return new Date(s);case"data-file":return d.fromJSON(s);case"linear-unit":return S.fromJSON(s);case"feature-record-set-layer":if("url"in s)return d.fromJSON(s);if("layerDefinition"in s){const t=new(0,(await import("../../layers/FeatureLayer.js")).default),{layerDefinition:o,featureSet:e}=s;return t.read({layerDefinition:o,featureSet:e},{origin:"portal-item"}),t.spatialReference=c.fromJSON(e.spatialReference??o.spatialReference??o.extent.spatialReference),t}return f.fromJSON(s);case"record-set":return"url"in s?d.fromJSON(s):f.fromJSON(s);case"raster-data":case"raster-data-layer":return"mapImage"in s?b.fromJSON(s.mapImage):I.fromJSON(s);case"field":return y.fromJSON(s)}}async function J(t){const s=k.fromJSON(t.dataType),{paramName:o}=t,e=function(t){return t.startsWith(D)}(s)?await async function(t,s){const o=function(t){return t.replace(D,"")}(t),e="composite"===o?s.map((t=>O(k.fromJSON(t.dataType),t.value))):s.map((t=>O(o,t)));return Promise.all(e)}(s,t.value):await O(s,t.value);return new g({dataType:s,paramName:o,value:e})}function M(t,s,o){for(const s in t){const o=t[s];Array.isArray(o)?t[s]=JSON.stringify(o.map((t=>M({item:t},!0).item))):o instanceof Date&&(t[s]=o.getTime())}return l(t,s,o)}var v;const w=o()({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"},{ignoreUnknown:!1});let L=v=class extends e{constructor(t){super(t),this.jobId=null,this.jobStatus=null,this.messages=null,this.progress=null,this.requestOptions=null,this.sourceUrl=null,this._timer=void 0}async cancelJob(t){const{jobId:o,sourceUrl:e}=this,{path:r}=a(e),i={...this.requestOptions,...t,query:{f:"json"}};this._clearTimer();const n=`${r}/jobs/${o}/cancel`,{data:p}=await s(n,i),{messages:m,jobStatus:l,progress:u}=v.fromJSON(p);return this.set({messages:m,jobStatus:l,progress:u}),this}destroy(){clearInterval(this._timer)}async checkJobStatus(t){const{path:o}=a(this.sourceUrl),e={...this.requestOptions,...t,query:{f:"json"}},r=`${o}/jobs/${this.jobId}`,{data:i}=await s(r,e),{messages:n,jobStatus:p,progress:m}=v.fromJSON(i);return this.set({messages:n,jobStatus:p,progress:m}),this}async fetchResultData(t,o,e){o=u.from(o||{});const{returnColumnName:r,returnFeatureCollection:i,returnM:n,returnZ:p,outSpatialReference:m}=o,{path:l}=a(this.sourceUrl),c=M({returnColumnName:r||null,returnFeatureCollection:i||null,returnM:n||null,returnZ:p||null,outSR:m,returnType:"data",f:"json"},null),j={...this.requestOptions,...e,query:c},y=`${l}/jobs/${this.jobId}/results/${t}`,{data:b}=await s(y,j);return J(b)}async fetchResultImage(t,o,e){const{path:r}=a(this.sourceUrl),i=M({...o.toJSON(),f:"json"}),n={...this.requestOptions,...e,query:i},p=`${r}/jobs/${this.jobId}/results/${t}`,{data:m}=await s(p,n);return J(m)}async fetchResultMapImageLayer(){const{path:t}=a(this.sourceUrl),s=t.indexOf("/GPServer/"),o=`${t.substring(0,s)}/MapServer/jobs/${this.jobId}`;return new(0,(await import("../../layers/MapImageLayer.js")).default)({url:o})}async waitForJobCompletion(t={}){const{interval:s=1e3,signal:o,statusCallback:e}=t;return new Promise(((t,n)=>{r(o,(()=>{this._clearTimer(),n(i())})),this._clearTimer();const p=setInterval((()=>{this._timer||n(i()),this.checkJobStatus(this.requestOptions).then((s=>{const{jobStatus:o}=s;switch(this.jobStatus=o,o){case"job-succeeded":this._clearTimer(),t(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":e&&e(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),n(this)}}))}),s);this._timer=p}))}_clearTimer(){clearInterval(this._timer),this._timer=void 0}};t([n()],L.prototype,"jobId",void 0),t([p(w,{ignoreUnknown:!1})],L.prototype,"jobStatus",void 0),t([n({type:[U]})],L.prototype,"messages",void 0),t([n()],L.prototype,"progress",void 0),t([n()],L.prototype,"requestOptions",void 0),t([n({json:{write:!0}})],L.prototype,"sourceUrl",void 0),L=v=t([m("esri.rest.support.JobInfo")],L);const P=L;export{C as c,J as d,P as default};