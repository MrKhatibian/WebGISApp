/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../analysis/AreaMeasurementAnalysis.js";import{watch as i,sync as e,syncAndInitial as o}from"../../core/reactiveUtils.js";import{D as n}from"../../chunks/unitUtils.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{d as p}from"../../chunks/defaultUnit.js";import{d as l}from"../../chunks/maybe.js";import{m}from"../../chunks/memoize.js";import{ignoreAbortErrors as u}from"../../core/promiseUtils.js";import{U as h}from"../../chunks/UpdatingHandles.js";import c from"../../geometry/Point.js";import{c as d}from"../../chunks/hydratedFeatures.js";import{i as j}from"../../chunks/measurementUtils.js";import{S as g}from"../../chunks/SnappingVisualizer3D.js";import{s as y,h as k}from"../../chunks/dragEventPipeline3D.js";import _ from"../../Color.js";import{h as b,l as f,d as w}from"../../chunks/colorUtils2.js";import S from"../../core/Handles.js";import{s as v}from"../../chunks/screenUtils.js";import{c as V}from"../../chunks/vec3f64.js";import{c as M,R as D,M as P}from"../../chunks/RenderObject.js";import{L as U}from"../../chunks/LaserlineVisualElement.js";import{d as x}from"../../chunks/GeometryUtil.js";import{M as C,c as O}from"../../chunks/InteractiveToolBase.js";import{n as L}from"../../chunks/ToolIntersector.js";import{A}from"../../chunks/AnalysisToolBase.js";import{E as I,a as T,c as E}from"../../chunks/EditGeometryOperations.js";import{S as H}from"../../chunks/SnappingContext.js";import{c as R}from"../../chunks/SnappingDragPipelineStep.js";import{a as F}from"../../chunks/SnappingManagerPool.js";import{S as B}from"../../chunks/SnappingOperation.js";import{b as G}from"../../chunks/snappingUtils.js";import{c as z}from"../../chunks/screenUtils2.js";import{I as W}from"../../chunks/InteractiveAnalysisViewModel.js";import"../../chunks/Analysis.js";import"../../core/Accessor.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/Clonable.js";import"../../chunks/ensureType.js";import"../../core/Error.js";import"../../config.js";import"../../core/Identifiable.js";import"../../core/JSONSupport.js";import"../../geometry/Polygon.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/zmUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/getDefaultUnitForView.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../geometry.js";import"../../geometry/Multipoint.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/colorUtils.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/dehydratedPoint.js";import"../../chunks/sphere.js";import"../../chunks/mat4.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/ray.js";import"../../chunks/plane.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/vec2f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geodesicAreaMeasurementUtils.js";import"../../chunks/quantityUtils.js";import"../../geometry/geometryEngine.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/hydrated.js";import"../../geometry/support/geodesicUtils.js";import"../../chunks/geodesicConstants.js";import"../../chunks/viewUtils.js";import"../../chunks/vec2.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/projectVectorToVector.js";import"../../chunks/projectBuffer.js";import"../../chunks/projectPointToVector.js";import"../../geometry/projection.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/ExtendedLineVisualElement.js";import"../../chunks/vec4f32.js";import"../../chunks/frustum.js";import"../../chunks/lineSegment.js";import"../../chunks/EngineVisualElement.js";import"../../chunks/RenderGeometry.js";import"../../chunks/ViewingMode.js";import"../../chunks/debugFlags2.js";import"../../chunks/IntegerPassUniform.js";import"../../chunks/compilerUtils.js";import"../../chunks/NormalAttribute.glsl.js";import"../../chunks/Matrix4PassUniform.js";import"../../chunks/interfaces3.js";import"../../chunks/BindType.js";import"../../chunks/VertexAttribute.js";import"../../chunks/VertexPosition.glsl.js";import"../../chunks/Matrix3DrawUniform.js";import"../../chunks/StencilUtils.js";import"../../chunks/Indices.js";import"../../chunks/basicInterfaces.js";import"../../chunks/Util.js";import"../../chunks/Material.js";import"../../chunks/triangle.js";import"../../chunks/doublePrecisionUtils.js";import"../../chunks/mat3.js";import"../../chunks/ShaderTechniqueConfiguration.js";import"../../chunks/requestImageUtils.js";import"../../chunks/enums.js";import"../../chunks/Texture.js";import"../../chunks/GLObjectType.js";import"../../chunks/renderState.js";import"../../views/3d/webgl/RenderCamera.js";import"../../chunks/axisAngleDegrees.js";import"../../chunks/quat.js";import"../../chunks/weather.js";import"../../views/3d/environment/CloudyWeather.js";import"../../views/3d/environment/FoggyWeather.js";import"../../views/3d/environment/RainyWeather.js";import"../../views/3d/environment/SnowyWeather.js";import"../../views/3d/environment/SunnyWeather.js";import"../../chunks/Scheduler.js";import"../../core/signal.js";import"../../chunks/debugFlags.js";import"../../chunks/ScreenSpacePass.glsl.js";import"../../chunks/Float4DrawUniform.js";import"../../chunks/NestedMap.js";import"../../chunks/VertexArrayObject2.js";import"../../chunks/VertexArrayObject.js";import"../../chunks/Attribute.js";import"../../chunks/RibbonLineMaterial.js";import"../../chunks/Octree.js";import"../../chunks/InterleavedLayout.js";import"../../chunks/BufferView.js";import"../../chunks/types.js";import"../../chunks/floatRGBA.js";import"../../chunks/Intersector.js";import"../../chunks/Intersector2.js";import"../../chunks/boundedPlane.js";import"../../chunks/verticalOffsetUtils.js";import"../../chunks/orientedBoundingBox.js";import"../../chunks/spatialReferenceEllipsoidUtils.js";import"../../chunks/computeTranslationToOriginAndRotation.js";import"../../chunks/glUtil.js";import"../../chunks/VertexElementDescriptor.js";import"../../chunks/MemCache.js";import"../../chunks/BufferObject.js";import"../../chunks/VisualElement.js";import"../../chunks/PointVisualElement.js";import"../../chunks/Object3DVisualElement.js";import"../../chunks/ElevationContext.js";import"../../chunks/ElevationProvider.js";import"../../chunks/HUDMaterial.js";import"../../chunks/VerticalOffset.glsl.js";import"../../chunks/GLTextureMaterial.js";import"../../chunks/RayIntersections.js";import"../../chunks/OutputHighlight.glsl.js";import"../../chunks/RightAngleQuadVisualElement.js";import"../../chunks/ColorMaterial.js";import"../../chunks/TriangleMaterial.js";import"../../chunks/normalizedPoint.js";import"../../chunks/Settings2.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/SnappingVisualizer.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/ray2.js";import"../../chunks/interfaces.js";import"../../chunks/graphicUtils.js";import"../../chunks/DoubleArray.js";import"../../chunks/CameraSpace.glsl.js";import"../../chunks/vec3f32.js";import"../../chunks/meshVertexSpaceUtils.js";import"../../geometry/support/MeshGeoreferencedVertexSpace.js";import"../../geometry/support/MeshLocalVertexSpace.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/dehydratedFeatureComparison.js";import"../../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../../views/interactive/snapping/SnappingOptions.js";import"../../chunks/SnappingManager.js";import"../../layers/support/FeatureFilter.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/floorFilterUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/layerViewUtils.js";import"../../chunks/Cyclical.js";import"../../chunks/angularMeasurementUtils.js";import"../../chunks/InputManager.js";import"../../chunks/Queue.js";import"../../chunks/keybindings.js";import"../../chunks/utils6.js";import"../../chunks/InteractiveToolViewModel.js";class q{constructor(t,s=null){this.screenPoint=t,this.result=s}}class Q{constructor(t,s){this.scenePoint=t,this.mapPoint=s}}class N{constructor(t){this.vertexManipulators=[],this._destroyed=!1,this._isManipulatorsOwner=!0,this._visible=!0,this._listenerHandles=null,this._tempHandlePosition=V();const{analysisViewData:s,manipulators:i,toolState:e,view:o,visible:n}=t;this._analysisViewData=s,this._toolState=e,null!=i?(this._manipulators=i,this._isManipulatorsOwner=!1):this._manipulators=new C,this._view=o,this._intersector=L(o.state.viewingMode);const r=M(this._handleColor),a=[new D(x(r,1,32,32))],p=new P({view:o,renderObjects:a});p.available=!1,p.radius=X,p.interactive=!1,this._manipulators.add(p),this._cursorManipulator=p,this._cursorManipulatorMaterial=r,this._laserLine=new U({view:o,attached:!0,style:{glowWidth:K,glowFalloff:J,innerWidth:Z},isDecoration:!0}),this._updateVisibility(n??!0)}destroy(){this._listenerHandles=l(this._listenerHandles),this._isManipulatorsOwner?this._manipulators=l(this._manipulators):this._manipulators=null,this._laserLine=l(this._laserLine),this._destroyed=!0}get destroyed(){return this._destroyed}get visible(){return this._visible}set visible(t){t?this.show():this.hide()}get testData(){}show(){this._setVisibility(!0)}hide(){this._setVisibility(!1)}_setVisibility(t){this._destroyed||this._visible===t||this._updateVisibility(t)}_updateVisibility(t){this._visible=t,this._laserLine.visible=t,t?(this._initializeListeners(),this._updateAll()):(this._destroyListeners(),this.vertexManipulators.forEach((({manipulator:t})=>this._removeVertexManipulator(t))),this.vertexManipulators=[],this._view.cursor=null)}vertexHandleAt(t,s){const i=this._manipulators.intersect(t,s);return i?.metadata}pick(t){const s=this._view.spatialReference,i=v(t.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(i,this._intersector);const e=this._intersector.results.min,o=V();if(!e.getIntersectionPoint(o))return null;const n=this._view.renderCoordsHelper.fromRenderCoords(o,new c({spatialReference:s}));return null==n?null:new Q(o,n)}_updateAll(){this._visible&&(this._updateVertexManipulators(),this._updateLaserLine())}_createVertexManipulator(){const t=M(this._handleColor),s=[new D(x(t,1,32,32))],i=new P({view:this._view,renderObjects:s});return i.radius=X,this._manipulators.add(i),{manipulator:i,material:t}}_removeVertexManipulator(t){this._manipulators.remove(t)}_updateVertexManipulators(){const{viewData:t}=this._analysisViewData,s=this._analysisViewData.path?this._analysisViewData.path.vertices:[],i=this.vertexManipulators;!function(t,s,i,e){for(;t.length<s;)t.push(i());if(e)for(;t.length>s;)e(t.pop());else t.length=s}(i,s.length,(()=>this._createVertexManipulator()),(({manipulator:t})=>this._removeVertexManipulator(t))),i.forEach((({manipulator:i},e)=>{i.metadata=s[e],i.renderLocation=t.positionsRender[e],i.cursor=0===e&&"drawing"===this._toolState.polygonState?"crosshair":null})),"drawing"===this._toolState.polygonState&&null!=this._analysisViewData.stagedPoint?(this._cursorManipulator.available=!0,this._cursorManipulator.location=this._analysisViewData.stagedPoint):this._cursorManipulator.available=!1}get _handleColor(){return b(this._view.effectiveTheme.accentColor,.5)}_getFocusPoint(){const{lastDraggedVertex:t}=this._analysisViewData;switch(this._toolState.polygonState){case"drawing":return null!=this._analysisViewData.stagedPoint?this._analysisViewData.stagedPoint:null!=t?this._analysisViewData.path.getVertexPositionAsPoint(t):this._analysisViewData.path.lastPoint;case"editing":return null!=t?this._analysisViewData.path.getVertexPositionAsPoint(t):null;default:return this._analysisViewData.stagedPoint}}_updateLaserLine(){const t="measured"!==this._toolState.polygonState&&this._toolState.active,s=this._getFocusPoint();if(t&&null!=s){const t=this._tempHandlePosition;this._view.renderCoordsHelper.toRenderCoords(s,t),this._laserLine.heightManifoldTarget=t}else this._laserLine.heightManifoldTarget=null}_initializeListeners(){this._listenerHandles=new S,this._listenerHandles.add([i((()=>this._toolState.polygonState),(()=>this._updateLaserLine())),i((()=>this._analysisViewData.viewData),(()=>this._updateAll()),e),i((()=>({lastDraggedVertex:this._analysisViewData.lastDraggedVertex,cursorPoint:this._analysisViewData.stagedPoint})),(()=>this._updateLaserLine())),i((()=>this._toolState.active),(()=>this._updateAll())),i((()=>this._view.effectiveTheme.accentColor),(t=>{const s=b(t,.5);for(const{material:t}of this.vertexManipulators)t.setParameters({color:s});this._cursorManipulatorMaterial.setParameters({color:s});const i=_.toUnitRGB(t),e=_.toUnitRGB(w(t)),o=.75*t.a,n=this._laserLine,r=n.style;n.style={...r,glowColor:i,innerColor:e,globalAlpha:o}}),{initial:!0,equals:f})])}_destroyListeners(){this._listenerHandles=l(this._listenerHandles)}}const K=8,J=8,Z=1,X=5;let Y=class extends A{constructor(t){super(t),this._updatingHandles=new h,this.polygonState="initial",this.manipulators=new C,this._getSnappingContext=m((t=>new H({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new I(new T("point",E(!0,!1,this.view.spatialReference)),this.view.state.viewingMode),visualizer:new g})))}initialize(){const{view:t,analysisViewData:s,manipulators:e,visible:n}=this;this.measurementView=new N({view:t,analysisViewData:s,toolState:this,manipulators:e,visible:n});const r=F(t);this._snappingManagerResult=r,this.addHandles(r),this._snappingOperation=new B({view:t}),this._updatingHandles.add((()=>this.stagedPoint),(t=>{this.analysisViewData.stagedPoint=null!=t?d(t,new c):null}),o),G(this,(()=>{const t=this.view.inputManager.latestPointerType??"mouse",s=this._getSnappingContext(t);this._updatingHandles.addPromise(u(this._snappingOperation.snapAgainNearPreviousMapPoint(this._snappingManager,s)))})),this._setupManipulators(),this.addHandles([i((()=>this.state),(t=>{"measured"===t&&this.finishToolCreation()}),o),this.analysisViewData.path.on("change",(()=>{const t=this.analysisViewData.path;"initial"!==this.polygonState||t.isEmptyPolygon||(t.isValidPolygon?this.polygonState="measured":this.polygonState="drawing")}))])}destroy(){this.measurementView.destroy(),this._set("measurementView",null),this._updatingHandles=l(this._updatingHandles)}get _snappingManager(){return this._snappingManagerResult.snappingManager}get state(){return 0===this.analysisViewData.path.numVertices?"ready":this.analysisViewData.path.isValidPolygon&&"editing"!==this.polygonState?"measured":"measuring"}get cursor(){return"ready"===this.state||"drawing"===this.polygonState?"crosshair":null}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}get stagedPoint(){return this._snappingOperation.stagedPoint}set stagedPoint(t){this._snappingOperation.stagedPoint=t}get snappingOptions(){return this._snappingManager.options}finishMeasurement(){const{path:t}=this.analysisViewData;t.numVertices<3?(t.clear(),this.polygonState="initial"):(t.close(),this.polygonState="measured"),this._resetSnappingState()}onShow(){this.measurementView.show()}onHide(){this.measurementView.hide()}onDeactivate(){this._resetSnappingState()}onInputEvent(t){switch(t.type){case"immediate-double-click":this._handleImmediateDoubleClick(t);break;case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t);break;case"drag":this._handleDrag(t);break;case"key-down":this._handleKeyDown(t)}}_setupManipulators(){const t=t=>t.events.on("grab-changed",(()=>{if(this.analysisViewData.path.isValidPolygon){const t=this.manipulators.some((t=>t.manipulator.grabbing));this.polygonState=t?"editing":"measured"}})),s=s=>{this.addHandles([O(s,((t,s,i,e)=>{const o=k(t),n=t.metadata,r=this._snappingManager,a=this._getSnappingContext(e),p=this._updatingHandles,{snappingStep:l,cancelSnapping:m}=R({snappingManager:r,snappingContext:a,updatingHandles:p});i=i.next(o).next((s=>(this.analysisViewData.lastDraggedVertex=null,this.analysisViewData.path.setVertexPosition(n,u),t.location=u,s))).next(m),s.next(o).next(y(this.view)).next(...l).next((s=>{t.location=s.mapEnd,this.analysisViewData.lastDraggedVertex="end"===s.action?null:n,this.analysisViewData.path.setVertexPosition(n,d(s.mapEnd))}));const u=d(this.analysisViewData.path.getVertexPositionAsPoint(n))})),t(s)],s)};this.manipulators.forEach((({manipulator:t})=>{s(t)})),this.addHandles([this.manipulators.on("after-add",(({item:{manipulator:t}})=>{s(t)})),this.manipulators.on("after-remove",(({item:{manipulator:t}})=>this.removeHandles(t)))])}_handleImmediateDoubleClick(t){j(t)&&("drawing"===this.polygonState&&this.finishMeasurement(),t.stopPropagation())}_handleDrag(t){"editing"===this.polygonState&&t.stopPropagation()}_handleImmediateClick(t){if(!j(t))return;const s=z(t),{pointerType:i}=t;if(this.active)switch(this.polygonState){case"initial":if(this._addVertexAt(s,i))return this.stagedPoint=null,this.polygonState="drawing",void t.stopPropagation();break;case"drawing":{const e=this.measurementView.vertexHandleAt(s,i);if(null==e){if(this._addVertexAt(s,i))return this.stagedPoint=null,void t.stopPropagation()}else 0===e.index&&(this.finishMeasurement(),t.stopPropagation());break}}"mouse"===t.pointerType&&this._hoverAt(s)}_handlePointerMove(t){if("mouse"===t.pointerType){const s=z(t);this._hoverAt(s)}}_handleKeyDown(t){const{path:s}=this.analysisViewData;"Enter"===t.key&&"drawing"===this.polygonState&&s.numVertices>=3&&(this.stagedPoint=null,this.finishMeasurement(),t.stopPropagation())}_hoverAt(t){const{polygonState:s}=this;if(!this.active||"initial"!==s&&"drawing"!==s)this.stagedPoint=null;else{const s=this._pick(t);if(null!=s?.mapPoint){const t=this._getSnappingContext("mouse");this._updatingHandles.addPromise(u(this._snappingOperation.snap({point:s.mapPoint},this._snappingManager,t)))}}}_addVertexAt(t,s){const i=this._pick(t);if(null!=i?.mapPoint){const{mapPoint:t}=i,e=this._getSnappingContext(s),o=this._snappingOperation.update({point:t},this._snappingManager,e),n=d(o,new c);return this.analysisViewData.path.add(n),!0}return!1}_pick(t){const s=new q(t);return this.measurementView.pick(s)}_resetSnappingState(){this._snappingManager.doneSnapping(),this._snappingOperation.abort(),this._snappingOperation.stagedPoint=null}get test(){}};t([r({readOnly:!0})],Y.prototype,"state",null),t([r()],Y.prototype,"polygonState",void 0),t([r({readOnly:!0})],Y.prototype,"cursor",null),t([r()],Y.prototype,"measurementView",void 0),t([r({constructOnly:!0})],Y.prototype,"view",void 0),t([r({constructOnly:!0})],Y.prototype,"analysis",void 0),t([r({constructOnly:!0})],Y.prototype,"analysisViewData",void 0),t([r({readOnly:!0})],Y.prototype,"manipulators",void 0),t([r()],Y.prototype,"updating",null),t([r()],Y.prototype,"stagedPoint",null),t([r()],Y.prototype,"snappingOptions",null),Y=t([a("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],Y);const $=Y;let tt=class extends W{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="AreaMeasurement3DViewModel is only supported in 3D views.",this._userUnitOptions=null,this._userUnit=null}initialize(){this.addHandles(i((()=>({analysis:this.analysis,unit:this.unit})),(({analysis:t,unit:s})=>{null!=t&&(t.unit=s)}),o))}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get measurement(){if(null==this.tool||this.disabled||this.tool.destroyed)return null;const{analysisView:t}=this;if(null==t)return null;const s=t.analysisVisualization,i=s.viewData,e=i.validMeasurement,o="euclidean"===i.mode,n=0===i.intersectingSegments.size,r=n?e?"available":"unavailable":"invalid";return{mode:o?"euclidean":"geodesic",area:{text:n&&e?s.areaLabel:null,state:r},perimeterLength:{text:n&&e?s.perimeterLengthLabel:null,state:r}}}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null}get unit(){return null!=this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new s}constructTool(){return new $({view:this.view,analysis:this.analysis,analysisViewData:this.analysisView,visible:this.visible})}_findSelectableUnit(t,s){const{unitOptions:i}=this;return i.includes(t)?t:null!=s?this._findSelectableUnit(s):i[0]}_filteredOrAllUnits(t){if(null==t)return n.slice();const s=t.filter((t=>n.includes(t)));return 0===s.length?n.slice():s}};t([r({type:s})],tt.prototype,"analysis",void 0),t([r({readOnly:!0})],tt.prototype,"state",null),t([r({readOnly:!0})],tt.prototype,"measurement",null),t([r()],tt.prototype,"unitOptions",null),t([r()],tt.prototype,"unit",null),t([r(p)],tt.prototype,"defaultUnit",void 0),t([r()],tt.prototype,"_userUnit",void 0),tt=t([a("esri.widgets.AreaMeasurement3D.AreaMeasurement3DViewModel")],tt);const st=tt;export{st as default};