/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../PopupTemplate.js";import{ClonableMixin as t}from"../core/Clonable.js";import e from"../core/Error.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{debounce as i,throwIfAbortError as p}from"../core/promiseUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{w as n}from"../chunks/writer.js";import l from"./Layer.js";import{ArcGISImageService as u}from"./mixins/ArcGISImageService.js";import{A as j}from"../chunks/ArcGISService.js";import{BlendLayer as c}from"./mixins/BlendLayer.js";import{CustomParametersMixin as y}from"./mixins/CustomParametersMixin.js";import{OperationalLayer as h}from"./mixins/OperationalLayer.js";import{PortalLayer as d}from"./mixins/PortalLayer.js";import{RefreshableLayer as k}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as g}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as b}from"./mixins/TemporalLayer.js";import{a as f,p as S}from"../chunks/commonProperties2.js";import{s as I}from"../chunks/versionUtils.js";import{createPopupTemplate as R}from"../support/popupUtils.js";import{S as v}from"../chunks/interfaces2.js";import"../core/Collection.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/Evented.js";import"../config.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../Graphic.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rasterRenderers.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils2.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../renderers/FlowRenderer.js";import"../renderers/RasterColormapRenderer.js";import"../renderers/support/ColormapInfo.js";import"../chunks/colorRampUtils.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../renderers/RasterShadedReliefRenderer.js";import"../renderers/RasterStretchRenderer.js";import"../chunks/stretchRendererUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/VectorFieldRenderer.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils8.js";import"../chunks/utils9.js";import"../chunks/vectorFieldUtils.js";import"./support/PixelBlock.js";import"../chunks/pixelRangeUtils.js";import"../chunks/utils11.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"./support/DimensionalDefinition.js";import"./support/RasterFunction.js";import"./support/MosaicRule.js";import"./support/Field.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../chunks/imageBitmapUtils.js";import"./support/MultidimensionalSubset.js";import"./support/RasterInfo.js";import"./support/RasterBandInfo.js";import"./support/RasterSensorInfo.js";import"../chunks/RasterJobHandler.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/multidimensionalUtils.js";import"../chunks/RasterSymbolizer.js";import"../chunks/stretchUtils.js";import"../chunks/rasterRendererHelper.js";import"../chunks/generateRendererUtils.js";import"../rest/imageService.js";import"../rest/support/FindImagesParameters.js";import"../rest/support/FindImagesResult.js";import"../rest/support/ImageInspectionInfo.js";import"../rest/support/CameraInfoMixin.js";import"../rest/support/ImageAngleParameters.js";import"../rest/support/ImageAngleResult.js";import"../rest/support/ImageAreaParameters.js";import"../rest/support/BaseImageMeasureParameters.js";import"../rest/support/ImageAreaResult.js";import"../rest/support/BaseImageMeasureResult.js";import"../rest/support/ImageBoundaryParameters.js";import"../rest/support/ImageBoundaryResult.js";import"../rest/support/ImageDistanceParameters.js";import"../rest/support/ImageDistanceResult.js";import"../rest/support/ImageGPSInfoParameters.js";import"../chunks/spatialRelationships.js";import"../rest/support/ImageGPSInfoResult.js";import"../rest/support/CameraInfo.js";import"../rest/support/ImageGPSInfo.js";import"../rest/support/ImageHeightParameters.js";import"../rest/support/ImageHeightResult.js";import"../rest/support/ImageHistogramParameters.js";import"../rest/support/ImageIdentifyParameters.js";import"../rest/support/ImageIdentifyResult.js";import"../rest/support/FeatureSet.js";import"../rest/support/ImagePixelLocationParameters.js";import"../rest/support/ImagePixelLocationResult.js";import"../rest/support/ImagePointParameters.js";import"../rest/support/ImagePointResult.js";import"../rest/support/ImageSampleParameters.js";import"../rest/support/ImageSampleResult.js";import"../rest/support/ImageSample.js";import"../rest/support/ImageToMapMultirayParameters.js";import"../rest/support/ImageToMapParameters.js";import"../rest/support/ImageUrlParameters.js";import"../rest/support/ImageUrlResult.js";import"../rest/support/MapToImageParameters.js";import"../rest/support/MeasureAreaFromImageResult.js";import"../rest/support/MeasureFromImageParameters.js";import"../rest/support/MeasureLengthFromImageResult.js";import"../chunks/DataLayerSource.js";import"../chunks/executeQueryJSON.js";import"../chunks/query.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedGeometry.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/Query.js";import"../chunks/FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../chunks/executeForIds.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../chunks/fetchRasterInfo.js";import"../chunks/dataUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/layerContainerType.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";let U=class extends(c(b(g(h(d(u(k(y(j(o(t(l)))))))))))){constructor(...s){super(...s),this.isReference=null,this.operationalLayerType="ArcGISImageServiceLayer",this.popupEnabled=!0,this.popupTemplate=null,this.type="imagery",this._debouncedSaveOperations=i((async(s,r,t)=>{const{save:e,saveAs:o}=await import("../chunks/imageryUtils.js");switch(s){case v.SAVE:return e(this,r);case v.SAVE_AS:return o(this,t,r)}}))}normalizeCtorArgs(s,r){return"string"==typeof s?{url:s,...r}:s}load(s){const r=null!=s?s.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},s).catch(p).then((()=>this._fetchService(r)))),Promise.resolve(this)}get legendEnabled(){return!this._isPreviewLayer&&(this._get("legendEnabled")??!0)}set legendEnabled(s){this._set("legendEnabled",s)}get listMode(){return this._isPreviewLayer?"hide":this._get("listMode")}set listMode(s){this._set("listMode",s)}writeOperationalLayerType(s,r,t){const e="vector-field"===this.renderer?.type;r[t]=e?"ArcGISImageServiceVectorLayer":"ArcGISImageServiceLayer"}get defaultPopupTemplate(){return this.createPopupTemplate()}get _isPreviewLayer(){return!(!this.raster||!this.url?.toLowerCase().includes("/rasterrendering/imageserver"))}createPopupTemplate(s){const r=this.rasterFields,t=this.title,e=new Set;let o=!1,i=!1;this.capabilities&&(o=this.capabilities.operations.supportsQuery&&this.fields&&this.fields.length>0,i="esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType);const p=new Set;o&&p.add("raster.itempixelvalue");for(const s of r){const r=s.name.toLowerCase();p.has(r)||r.includes("raster.servicepixelvalue.")||e.add(s.name)}i&&e.add("raster.magnitude").add("raster.direction");const m=R({fields:r,title:t},{...s,visibleFieldNames:e});return m?.fieldInfos&&this.rasterInfo?.pixelType.startsWith("f")&&m.fieldInfos.forEach((({format:s,fieldName:r})=>{s&&r&&/^raster\.(item|service)pixelvalue/i.test(r)&&(s.places=2)})),m}queryFeatures(s,r){return this.queryRasters(s,r).then((s=>{if(s?.features)for(const r of s.features)r.layer=r.sourceLayer=this;return s}))}queryFeatureCount(s,r){return this.queryRasterCount(s,r)}redraw(){this.emit("redraw")}async save(s){return this._debouncedSaveOperations(v.SAVE,s)}async saveAs(s,r){return this._debouncedSaveOperations(v.SAVE_AS,r,s)}serviceSupportsSpatialReference(s){return I(this,s)}write(s,r){if(!this._isPreviewLayer)return super.write(s,r);if(r?.messages){const s=`${r.origin}/${r.layerContainerType||"operational-layers"}`;r.messages.push(new e("layer:unsupported",`Imagery preview layer (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${s}'`,{layer:this}))}return null}};s([m(f)],U.prototype,"legendEnabled",null),s([m({type:["show","hide"]})],U.prototype,"listMode",null),s([m({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],U.prototype,"isReference",void 0),s([m({type:["ArcGISImageServiceLayer"],json:{origins:{"web-map":{type:["ArcGISImageServiceLayer","ArcGISImageServiceVectorLayer"],read:!1,write:{target:"layerType",ignoreOrigin:!0}}}}})],U.prototype,"operationalLayerType",void 0),s([n("web-map","operationalLayerType")],U.prototype,"writeOperationalLayerType",null),s([m(S)],U.prototype,"popupEnabled",void 0),s([m({type:r,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],U.prototype,"popupTemplate",void 0),s([m({readOnly:!0})],U.prototype,"defaultPopupTemplate",null),s([m({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),s([m({readOnly:!0})],U.prototype,"_isPreviewLayer",null),U=s([a("esri.layers.ImageryLayer")],U);const P=U;export{P as default};