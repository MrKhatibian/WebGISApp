/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import{clone as s}from"../../core/lang.js";import{f as r}from"../../chunks/messages.js";import o,{A as i,a as t}from"../../renderers/support/AuthoringInfo.js";import{createRenderer as n}from"./type.js";import{a as l,f as a,v as p,b as m}from"../../chunks/utils18.js";import{v as u}from"../../chunks/binningUtils.js";import{b as c,f as d,c as j,g as h}from"../../chunks/layerUtils3.js";import{getColors as y,cloneScheme as f,getSchemes as b,flatten2DArray as k}from"../symbology/relationship.js";import{c as g}from"../../chunks/utils11.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/handleUtils.js";import"../../core/promiseUtils.js";import"../../chunks/maybe.js";import"../../chunks/locale.js";import"../../chunks/tslib.es6.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/reader.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/enumeration.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/LegendOptions.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/PointCloudStretchRenderer.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/writer.js";import"../../renderers/PointCloudUniqueValueRenderer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/Renderer.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/Version.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../chunks/OverrideHelper.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/utils7.js";import"../../chunks/quantizationUtils.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../renderers/support/jsonUtils.js";import"../../renderers/support/utils.js";import"../../chunks/numberUtils.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/colorRampUtils2.js";import"../../chunks/utils14.js";import"../../chunks/timeUtils.js";import"../heuristics/sizeRange.js";import"../../chunks/scaleUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/spatialStatistics.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/utils12.js";import"../../chunks/utils10.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/executeQuery.js";import"../../chunks/infoFor3D.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils8.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils9.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/statsWorker.js";import"../../chunks/utils15.js";import"../statistics/uniqueValues.js";import"../symbology/type.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils19.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../statistics/classBreaks.js";import"../statistics/summaryStatistics.js";import"../../views/support/colorUtils.js";const S=new Set(["equal-interval","natural-breaks","quantile"]),v=new Set(["HH","HL","LH","LL"]),w={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]},I={2:["L","H"],3:["L","M","H"],4:["L","M1","M2","H"]},C=e=>({minValue:e.minValue,maxValue:e.maxValue});function M(e,r){const o=s(w[e]);return k(o,r)}function V(e,s,r,o){const{field:i,normalizationField:t}=e,{field:n,normalizationField:l}=s,a=r.map((e=>[e.minValue,e.maxValue])),p=o.map((e=>[e.minValue,e.maxValue])),m=a.length,u=I[m];return`\n  var field1 = $feature['${i}'];\n  var field2 = $feature['${n}'];\n  var hasNormField1 = ${t?"true":"false"};\n  var hasNormField2 = ${l?"true":"false"};\n  var normField1 = ${t?`$feature['${t}']`:"null"};\n  var normField2 = ${l?`$feature['${l}']`:"null"};\n\n  if (\n    IsEmpty(field1) ||\n    IsEmpty(field2) ||\n    (hasNormField1 && (IsEmpty(normField1) || normField1 == 0)) ||\n    (hasNormField2 && (IsEmpty(normField2) || normField2 == 0))\n  ) {\n    return null;\n  }\n\n  var value1 = IIf(hasNormField1, (field1 / normField1), field1);\n  var value2 = IIf(hasNormField2, (field2 / normField2), field2);\n\n  var breaks1 = ${JSON.stringify(a)};\n  var breaks2 = ${JSON.stringify(p)};\n  var classCodes = ${JSON.stringify(u)};\n\n  function getClassCode(value, breaks) {\n    var code = null;\n\n    for (var i in breaks) {\n      var info = breaks[i];\n      if (value >= info[0] && value <= info[1]) {\n        code = classCodes[i];\n        break;\n      }\n    }\n\n    return code;\n  }\n\n  var code1 = getClassCode(value1, breaks1);\n  var code2 = getClassCode(value2, breaks2);\n\n  var classValue = IIf(IsEmpty(code1) || IsEmpty(code2), null, code1 + code2);\n  return classValue;\n  `}async function U(s){const r=await async function(s){if(!s?.renderer||!s.numClasses)throw new e("update-relationship-renderer:missing-parameters","'renderer' and 'numClasses' parameters are required");const{field1:r,field2:o,renderer:i,numClasses:t,colors:n}=s,l=t**2;if((r||o)&&!(r&&o&&r.field&&o.field))throw new e("update-relationship-renderer:missing-parameters","'field1' and 'field2' parameters are required");if(r&&!r.classBreakInfos||o&&!o.classBreakInfos)throw new e("update-relationship-renderer:missing-parameters","'field1.classBreakInfos' and 'field2.classBreakInfos' are required");if(!i.authoringInfo)throw new e("update-relationship-renderer:missing-parameters","'renderer.authoringInfo' is required");if(i.uniqueValueInfos?.length!==l)throw new e("update-relationship-renderer:invalid-parameters",`Renderer must have ${l} unique value infos to support ${t} classes`);if(n&&n.length!==l)throw new e("update-relationship-renderer:invalid-parameters",`The scheme must have ${l} colors`);return s}(s),{field1:n,field2:a,renderer:p,numClasses:m,focus:u,colors:c}=r,d=p.clone();d.valueExpression=V(n,a,n.classBreakInfos,a.classBreakInfos);const j=d.uniqueValueInfos??[];if(function(e,s,r){const o=M(s,r);e.sort(((e,s)=>{const r=o.indexOf(e.value),i=o.indexOf(s.value);let t=0;return r<i?t=-1:r>i&&(t=1),t}))}(j,m,u),c){const e=l(c,c.length);j.forEach(((s,r)=>g(s.symbol,e[r])))}return function(e,s){e.authoringInfo??=new o;const r=e.authoringInfo;r.numClasses=s.numClasses,r.focus=s.focus||null,r.focus||delete r.focus;const{field1:n,field2:l}=s;r.field1=new i({field:n.field,normalizationField:n.normalizationField,label:n.label,classBreakInfos:n.classBreakInfos.map((e=>new t(C(e))))}),r.field2=new i({field:l.field,normalizationField:l.normalizationField,label:l.label,classBreakInfos:l.classBreakInfos.map((e=>new t(C(e))))}),e.authoringInfo=r}(d,r),d}async function L(s){const l=await async function(s){if(!(s?.layer&&s.view&&s.field1&&s.field2))throw new e("relationship-renderer:missing-parameters","'layer', 'view', 'field1' and 'field2' parameters are required");s.forBinning&&u(s,"relationship-renderer");const r={...s,layer:s.layer,field1:s.field1,field2:s.field2};if(r.symbolType??="2d",r.defaultSymbolEnabled??=!0,r.classificationMethod??="quantile",r.numClasses??=3,r.focus??=null,!S.has(r.classificationMethod))throw new e("relationship-renderer:invalid-parameters",`classification method ${r.classificationMethod} is not supported`);if(r.numClasses<2||r.numClasses>4)throw new e("relationship-renderer:invalid-parameters","'numClasses' must be 2, 3 or 4");if(s.focus&&!v.has(s.focus))throw new e("relationship-renderer:invalid-parameters","'focus' must be 'HH', 'HL', 'LH', 'LL' or null");const o=s.forBinning?c:d,i=j(r.layer,o,s.forBinning);if(!i)throw new e("relationship-renderer:invalid-parameters","'layer' must be one of these types: "+h(o).join(", "));r.layer=i;const t=null!=r.signal?{signal:r.signal}:null;await i.load(t);const n=i.geometryType,l=r.symbolType.includes("3d");if(r.outlineOptimizationEnabled="polygon"===n&&r.outlineOptimizationEnabled,r.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&r.sizeOptimizationEnabled,"mesh"===n)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==n)throw new e("relationship-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(l&&"polygon"===n)throw new e("relationship-renderer:not-supported","3d symbols are not supported for polygon layers");if(r.symbolType.includes("3d-volumetric")&&(!r.view||"3d"!==r.view.type))throw new e("relationship-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const{field1:a,field2:m}=r,y=[a.field,m.field];a.normalizationField&&y.push(a.normalizationField),m.normalizationField&&y.push(m.normalizationField);const f=p(i,y,"relationship-renderer:invalid-parameters");if(f)throw f;return r}(s),{layer:k,classificationMethod:g,field1:w,field2:I,numClasses:C,view:U,signal:L}=l,F={layer:k,classificationMethod:g,field:w.field,normalizationField:w.normalizationField,normalizationType:w.normalizationField?"field":null,minValue:w.minValue,maxValue:w.maxValue,analyzeData:!(null!=w.minValue&&null!=w.maxValue),numClasses:C,view:U,signal:L},z={layer:k,classificationMethod:g,field:I.field,normalizationField:I.normalizationField,normalizationType:I.normalizationField?"field":null,minValue:I.minValue,maxValue:I.maxValue,analyzeData:!(null!=I.minValue&&null!=I.maxValue),numClasses:C,view:U,signal:L},[x,T]=await Promise.all([a(F),a(z)]);if(!x||!T)throw new e("relationship-renderer:error","error when calculating class breaks");return async function(s,l,a){const p=await r("esri/smartMapping/t9n/smartMapping"),{basemap:u,classificationMethod:c,field1:d,field2:j,focus:h,numClasses:k,signal:g}=s,S=s.layer,v=l.classBreakInfos,w=a.classBreakInfos;if(k!==v.length||v.length!==w.length)throw new e("relationship-renderer:error","incompatible class breaks");const I=function(e,s){return M(e,s).map((e=>({value:e,count:0})))}(k,h),C=V(s.field1,s.field2,v,w),U=await async function(e){let s=e.relationshipScheme,r=null,o=null;const i=await m(e.basemap,e.view);if(r=null!=i.basemapId?i.basemapId:null,o=null!=i.basemapTheme?i.basemapTheme:null,s)return{scheme:f(s),basemapId:r,basemapTheme:o};const t=b({basemapTheme:o,geometryType:e.geometryType,theme:e.theme,worldScale:e.worldScale,view:e.view});return t&&(s=t.primaryScheme,r=t.basemapId,o=t.basemapTheme),{scheme:s,basemapId:r,basemapTheme:o}}({basemap:u,geometryType:S.geometryType,theme:"default",relationshipScheme:s.relationshipScheme,worldScale:!!s.symbolType?.includes("3d-volumetric"),view:s.view}),L=U.scheme,F=await n({layer:S,basemap:u,valueExpression:C,valueExpressionTitle:p.relationship.legendTitle,numTypes:-1,sortEnabled:!1,defaultSymbolEnabled:s.defaultSymbolEnabled,typeScheme:{colors:y(L,k,h),...L},statistics:{uniqueValueInfos:I},legendOptions:s.legendOptions,outlineOptimizationEnabled:s.outlineOptimizationEnabled,sizeOptimizationEnabled:s.sizeOptimizationEnabled,symbolType:s.symbolType,colorMixMode:s.colorMixMode,edgesType:s.edgesType,view:s.view,signal:g}),z=F.renderer,x=z.uniqueValueInfos,T=p.relationship;for(const e of x??[])e.label=T[e.value];const R=new o({type:"relationship",classificationMethod:c,numClasses:k,focus:h,field1:new i({field:d.field,normalizationField:d.normalizationField,label:d.label,classBreakInfos:v.map((({minValue:e,maxValue:s})=>new t({minValue:e,maxValue:s})))}),field2:new i({field:j.field,normalizationField:j.normalizationField,label:j.label,classBreakInfos:w.map((({minValue:e,maxValue:s})=>new t({minValue:e,maxValue:s})))})});return z.authoringInfo=R,{renderer:z,classBreaks:{field1:l,field2:a},uniqueValueInfos:F.uniqueValueInfos,relationshipScheme:L,basemapId:F.basemapId,basemapTheme:F.basemapTheme}}(l,x.result,T.result)}export{L as createRenderer,U as updateRenderer};