/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{c as i}from"./asyncUtils.js";import{m as o,d as s}from"./handleUtils.js";import{m as r}from"./memoize.js";import{debounce as n,whenOrAbort as a,throwIfAborted as l,ignoreAbortErrors as p}from"../core/promiseUtils.js";import{watch as d,sync as m,initial as u,on as c,syncAndInitial as y}from"../core/reactiveUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import{i as f}from"../core/lang.js";import"./Logger.js";import{subclass as g}from"../core/accessorSupport/decorators/subclass.js";import{U as j}from"./UpdatingHandles.js";import{u as S}from"./layerUtils2.js";import{m as b}from"./elevationInfoUtils.js";import{T as v}from"./TileKey.js";import{s as w}from"./vec3.js";import{c as _}from"./vec3f64.js";import{c as I,d as k,g as O}from"./boundedPlane.js";import{s as H}from"./layerViewUtils.js";import{V as C}from"./FeatureTileDescriptor3D.js";import{e as T}from"./snappingUtils.js";import{m as F,c as P}from"./queryEngineUtils.js";import U from"../geometry/Polygon.js";import{t as M,f as D}from"./aaBoundingRect.js";import{T as E}from"./TileTreeDebugger.js";import{a as x}from"./maybe.js";import{W as L}from"./WorkerHandle.js";import{f as R}from"./typeUtils.js";import{m as V}from"./dehydratedPoint.js";import z from"../geometry/Point.js";import N from"../layers/support/LOD.js";import A from"../layers/support/TileInfo.js";import{d as W}from"./debugFlags.js";import"../core/Handles.js";import"./metadata.js";import"./utils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/Error.js";import"../config.js";import"../core/Collection.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../request.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./common.js";import"./mathUtils.js";import"./ray.js";import"./plane.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./vec4f64.js";import"./mathUtils2.js";import"./mat4.js";import"./Axis.js";import"./lineSegment.js";import"./vec2.js";import"./vec4.js";import"./geodesicConstants.js";import"../geometry/support/geodesicUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polyline.js";import"./extentUtils.js";import"../geometry/support/jsonUtils.js";import"./coordsUtils.js";import"./sphere.js";import"./normalizedPoint.js";import"./geometry2dUtils.js";import"../core/sql.js";import"./timeUtils.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./enumeration.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FullTextSearch.js";import"../core/Clonable.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./InputManager.js";import"./Queue.js";import"../core/signal.js";import"./keybindings.js";import"./utils6.js";import"./SnappingManager.js";import"../geometry/projection.js";import"./projectBuffer.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Settings2.js";import"../Color.js";import"./colorUtils.js";import"./RightAngleSnappingHint.js";import"../layers/support/FeatureFilter.js";import"./floorFilterUtils.js";import"./viewUtils.js";import"./quantityUtils.js";import"../geometry/geometryEngine.js";import"./geometryEngineBase.js";import"./_commonjsHelpers.js";import"./hydrated.js";import"./screenUtils.js";import"./Cyclical.js";import"./angularMeasurementUtils.js";import"./projectVectorToVector.js";import"./projectPointToVector.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./VertexSnappingCandidate.js";import"./PointSnappingHint.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../intl.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";function q(e,t){return k(t.extent,G),O(G,w(J,e.x,e.y,0))}const G=I(),J=_();let B=class extends t{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>q(t,e)-q(t,i))),e}_scaleEnabled(){return H(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,o=[];for(const{row:s,colFrom:r,colTo:n}of e)for(let e=r;e<=n;e++){const r=t.normalizeCol(e),n=new v(null,i,s,r);this.tileInfo.updateTileInfo(n),o.push(n)}return o}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(d((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),m))}};e([h({readOnly:!0})],B.prototype,"tiles",null),e([h({readOnly:!0})],B.prototype,"_scaleEnabled",null),e([h({readOnly:!0})],B.prototype,"tilesCoveringView",null),e([h({readOnly:!0})],B.prototype,"tileInfo",null),e([h({readOnly:!0})],B.prototype,"tileSize",null),e([h({constructOnly:!0})],B.prototype,"view",void 0),e([h({constructOnly:!0})],B.prototype,"layer",void 0),e([h()],B.prototype,"pointOfInterest",void 0),B=e([g("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],B);let Z=class extends t{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(null!=t){const i=e.map((e=>q(t,e)));for(let o=1;o<i.length;o++)if(i[o-1]>i[o])return e.sort(((e,i)=>q(t,e)-q(t,i))),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map($)}get tileInfo(){return this.view.featureTiles?.tilingScheme?.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return null!=e?e:this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(d((()=>this.view.featureTiles),(e=>{this.removeHandles(K),e&&this.addHandles(e.addClient(),K)}),u))}_filterTiles(e){return null==e?[]:e.filter((e=>{const t=e.measures;if(t.visibility===C.VISIBLE_ON_SURFACE){const e=t.screenRect;return Math.abs(e[3]-e[1])>Q}return!1}))}};function $({lij:[e,t,i],extent:o}){return new v(`${e}/${t}/${i}`,e,t,i,o)}e([h({readOnly:!0})],Z.prototype,"tiles",null),e([h({readOnly:!0})],Z.prototype,"tilesCoveringView",null),e([h({readOnly:!0})],Z.prototype,"tileInfo",null),e([h({readOnly:!0})],Z.prototype,"tileSize",null),e([h({constructOnly:!0})],Z.prototype,"view",void 0),e([h()],Z.prototype,"pointOfInterest",void 0),e([h()],Z.prototype,"_effectivePointOfInterest",null),Z=e([g("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],Z);const Q=50,K="feature-tiles";let X=class extends E{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles(o((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)}));const i=i=>{const o=t.get(i),s=e.get(i)??"?";return o?`${o}:${s}\n${i}`:`store:${s}\n${i}`},o=new Map;return this._debugInfo.storedTiles.forEach((e=>{o.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{o.set(e.data.id,e.data)})),Array.from(o.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:U.fromExtent(M(e.extent,this.view.spatialReference)),label:i(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};e([h({constructOnly:!0})],X.prototype,"handle",void 0),X=e([g("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],X);let Y=class extends t{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new j,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:i}of e.pointsInFeatures)for(const{z:e}of i)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=n((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=x(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new te(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",(({updating:e})=>this._workerHandleUpdating=e)),this._workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const i="multipatch"===(o=e.layer).geometryType||"mesh"===o.geometryType?null:{url:o.parsedUrl?.path??"",fieldsIndex:o.fieldsIndex.toJSON(),geometryType:R.toJSON(o.geometryType),capabilities:o.capabilities,objectIdField:o.objectIdField,globalIdField:o.globalIdField,spatialReference:o.spatialReference.toJSON(),timeInfo:o.timeInfo?.toJSON()};var o;if(null==i)return;const s={configuration:ee(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",s,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=ee(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:o,coordinateHelper:s}=e,r={...e,point:V(i[0],i[1],i[2],s.spatialReference.toJSON()),filter:o?.toJSON()};return this._workerHandle.invoke(r,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){const i=this._editId++,o={id:i};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",o,t));const s=await this._updatingHandles.addPromise(a(e.result,t)),r={id:i,edits:{addedFeatures:s.addedFeatures?.map((({objectId:e})=>e)).filter(f)??[],deletedFeatures:s.deletedFeatures?.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t})))??[],updatedFeatures:s.updatedFeatures?.map((({objectId:e})=>e)).filter(f)??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",r,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function ee(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}e([h({constructOnly:!0})],Y.prototype,"schedule",void 0),e([h({constructOnly:!0})],Y.prototype,"hasZ",void 0),e([h({constructOnly:!0})],Y.prototype,"elevationAlignPointsInFeatures",void 0),e([h({constructOnly:!0})],Y.prototype,"queryForSymbologySnapping",void 0),e([h({readOnly:!0})],Y.prototype,"updating",null),e([h({readOnly:!0})],Y.prototype,"availability",void 0),e([h()],Y.prototype,"_workerHandleUpdating",void 0),Y=e([g("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],Y);class te extends L{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}let ie=class extends t{get tiles(){return[new v("0/0/0",0,0,0,D(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new A({origin:new z({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new N({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};e([h({readOnly:!0})],ie.prototype,"tiles",null),e([h({readOnly:!0})],ie.prototype,"tileInfo",null),e([h({readOnly:!0})],ie.prototype,"tileSize",null),e([h({constructOnly:!0})],ie.prototype,"layer",void 0),e([h()],ie.prototype,"pointOfInterest",void 0),ie=e([g("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],ie);let oe=class extends t{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){return!(!S(this._layer)||this.layerSource.sublayerSources.some((e=>e.enabled&&e.layer.visible)))||!(!this.view||!1===this._layerView?.suspended&&this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:i}=this,{layer:o}=i,{fieldsIndex:s,timeInfo:r,floorInfo:n,subtypeField:a}=o,l=t&&"filter"in t?t.filter:null,p=l?.where&&"1=1"!==l.where?this._getOrLoadWhereFields(l.where,s):[];if(l?.timeExtent&&r){const{startField:e,endField:t}=r,i=s.get(e)?.name??e,o=s.get(t)?.name??t;i&&p.push(i),o&&p.push(o)}if(e?.map&&T(e.map)&&e.map.utilityNetworks?.find((e=>e.isUtilityLayer(o)))){const e=o.fieldsIndex.get("assetGroup")?.name,t=o.fieldsIndex.get("assetType")?.name;e&&t&&(p.push(e),p.push(t))}if(o&&n?.floorField&&e?.floors?.length){const e=s.get(n.floorField)?.name??n.floorField;e&&p.push(e)}if(a){const e=s.get(a)?.name??a;e&&p.push(e)}return new Set(p)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:i}=this._layer,o=null!=e?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...i,token:t}:i,viewType:o}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new j,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=r(F)}initialize(){let e;const t=this.view;if(null==t||t.destroyed)this._tilesOfInterest=new ie({layer:this._layer}),e=this._workerHandle=new Y;else switch(t.type){case"2d":this._tilesOfInterest=new B({view:t,layer:this._layer}),e=this._workerHandle=new Y;break;case"3d":{const{resourceController:i}=t,o=this._layer;this._tilesOfInterest=new Z({view:t}),e=this._workerHandle=new Y({schedule:e=>i.immediate.schedule(e),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(e,i)=>{const s=await t.whenLayerView(o);return l(i),s.elevationAlignPointsInFeatures(e,i)},queryForSymbologySnapping:async(e,i)=>{const s=await t.whenLayerView(o);return l(i),s.queryForSymbologySnapping(e,i)}}),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:i}=o;b(t,i)&&p(e.notifyElevationSourceChange())})),d((()=>o.elevationInfo),(()=>p(e.notifyElevationSourceChange())),u),d((()=>this._layerView?.layer?.renderer),(()=>p(e.notifySymbologyChange())),u),d((()=>this._layerView?.symbologySnappingSupported??!1),(t=>p(e.setSymbologySnappingSupported(t))),u),c((()=>this._layerView?.layer),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}this.addHandles([s(e)]),p(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>p(e.updateTiles(this._updateTilesParameters,null))),u),this.addHandles([d((()=>this.configuration),(t=>p(e.configure(t,null))),m),d((()=>this._outFields),(t=>p(e.updateOutFields(t))),u),d((()=>this._isSuspended),(t=>p(e.setSuspended(t))),y)]),null!=t&&this.addHandles(d((()=>W.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(i=>{i&&!this._debug?(this._debug=new X({view:t,handle:e}),this.addHandles(s(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")}),u)),this.addHandles(this.layerSource.layer.on("apply-edits",(t=>{p(e.applyEdits(t,null))})))}destroy(){this._updatingHandles.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:o}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(o);const s=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>P(e,s)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:o}=this;if(!this._loadWhereModuleTask&&!o){const e=i((async()=>{const e=await import("../core/sql/WhereClause.js").then((e=>e.W));return this._whereModule=e.WhereClause,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!o)return[];try{return o.create(e,t).fieldNames}catch(e){return[]}}};e([h({constructOnly:!0})],oe.prototype,"spatialReference",void 0),e([h({constructOnly:!0})],oe.prototype,"layerSource",void 0),e([h({constructOnly:!0})],oe.prototype,"view",void 0),e([h()],oe.prototype,"_tilesOfInterest",void 0),e([h({readOnly:!0})],oe.prototype,"_updateTilesParameters",null),e([h()],oe.prototype,"_layerView",null),e([h()],oe.prototype,"_isSuspended",null),e([h({readOnly:!0})],oe.prototype,"updating",null),e([h()],oe.prototype,"_outFields",null),e([h({readOnly:!0})],oe.prototype,"configuration",null),e([h({readOnly:!0})],oe.prototype,"availability",null),e([h()],oe.prototype,"_loadWhereModuleTask",void 0),e([h()],oe.prototype,"_whereModule",void 0),oe=e([g("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],oe);export{oe as FeatureServiceSnappingSource};