// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/screenUtils ../../../../chunks/earcut ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/DoubleArray ../../../../geometry/support/FloatArray ./elevationAlignmentUtils ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./interfaces ./lineUtils ./polygonUtils ../support/FastSymbolUpdates ../support/patternUtils ../support/uvUtils ../../support/engineContent/line ../../support/renderInfoUtils/polygon ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/PatternMaterial ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(w,E,F,G,f,x,n,k,H,I,J,K,r,L,l,m,y,z,A,B,M,C,N,O,P){const Q=["polyline","polygon","extent"],D=new m.ConvertOptions({size:!1,color:!0,rotation:!1,opacity:!1});class t extends J.Graphics3DSymbolLayer{constructor(b,a,c,d){super(b,a,c,d);this._needsUV=!1}async doLoad(){this._fastUpdates=m.initFastSymbolUpdatesState(this._context.renderer,D)}_createMaterials(){if(!(0<this._materials.length)){var b=this._getCombinedOpacityAndColor(this.symbolLayer?.material?.color);this._materials[e.Fill]=y.createMaterial(this.symbolLayer,
{color:b,forceTransparentMode:this.needsDrivenTransparentPass,polygonOffset:!1,hasVertexColors:!0,writeLinearDepth:!0,draped:this.draped,hasSlicePlane:this._context.slicePlaneEnabled,...this._fastUpdates?.materialParameters});this._needsUV=this._materials[e.Fill]instanceof O.PatternMaterial;b=this.symbolLayer.outline;if(null!=b?.size&&0<b.size&&null!=b.color&&(null==b.pattern||"style"!==b.pattern.type||"none"!==b.pattern.style)){const a=N.getStipplePatternForLinePattern(b.pattern);this._materials[e.Outline]=
new P.RibbonLineMaterial({width:F.pt2px(b.size),color:this._getOutlineColor(),hasPolygonOffset:!0,hasSlicePlane:this._context.slicePlaneEnabled,isClosed:!0,stipplePattern:a,cap:L.parseCapType(b.patternCap||"butt")})}this._context.stage.addMany(this._materials)}}destroy(){super.destroy();this._context.stage.removeMany(this._materials);this._materials.length=0}createGraphics3DGraphic(b){const a=b.graphic;if(!this._validateGeometry(a.geometry,Q,this.symbolLayer.type))return null;b=this._getVertexOpacityAndColor(b.renderingInfo,
255);const c=this.setGraphicElevationContext(a);this.ensureDrapedStatus("on-the-ground"===c.mode);this._createMaterials();return this.draped?this._createAsOverlay(a,b):this._createAs3DShape(a,b,c)}applyRendererDiff(b,a){for(const c in b.diff)switch(c){case "visualVariables":if(m.updateFastSymbolUpdatesState(this._fastUpdates,a,D))this._materials[e.Fill]?.setParameters(this._fastUpdates.materialParameters);else return r.ApplyRendererDiffResult.RecreateSymbol;break;default:return r.ApplyRendererDiffResult.RecreateSymbol}return r.ApplyRendererDiffResult.FastUpdate}layerOpacityChanged(){if(null!=
this._materials[e.Fill]){var b=this._materials[e.Fill].parameters.color;const a=this._getCombinedOpacity(this.symbolLayer?.material?.color);this._materials[e.Fill].setParameters({color:[b[0],b[1],b[2],a],forceTransparentMode:this.needsDrivenTransparentPass})}null!=this._materials[e.Outline]&&(b=this._materials[e.Outline].parameters.color,this._materials[e.Outline].setParameters({color:[b[0],b[1],b[2],this._getOutlineOpacity()]}))}layerElevationInfoChanged(b,a,c){const d=this._elevationContext.mode;
c=k.elevationModeChangeUpdateType(t.elevationModeChangeTypes,c,d);if(c!==k.SymbolUpdateType.UPDATE)return c;const g=k.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(b,a,()=>g)}slicePlaneEnabledChanged(){this._materials[e.Fill]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});this._materials[e.Outline]&&this._materials[e.Outline].setParameters({hasSlicePlane:this._context.slicePlaneEnabled});return!0}physicalBasedRenderingChanged(){return!0}_createAs3DShape(b,
a,c){const d=l.geometryAsPolygon(b.geometry);if(!d)return null;var g=B.geometryToRenderInfo(d,this._context.elevationProvider,this._context.renderCoordsHelper,c);a=new R(g,a,this._context.layer.uid,b.uid);g=a.renderData.position.length/3;this._needsUV&&(a.uvMapSpace=n.newFloatArray(4*g,!0),a.boundingRect=x.newDoubleArray(9*g,!0),z.createMapSpaceUVCoords(a.uvMapSpace,a.boundingRect,a.renderData.position,this._context.renderCoordsHelper));a.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(a);
this._createAs3DShapeFill(b,a);this._materials[e.Outline]&&this._createAs3DShapeOutline(a);this._logGeometryCreationWarnings(a.renderData,d.rings,"rings","FillSymbol3DLayer");if(0===a.outGeometries.length)return null;b=new M.Object3D({geometries:a.outGeometries,castShadow:!1,layerUid:this._context.layer.uid,graphicUid:b.uid});b=new I.Graphics3DObject3DGraphicLayer(this,b,a.outGeometries,null,null,y.uvElevationAligner,c);b.alignedSampledElevation=a.renderData.sampledElevation;b.needsElevationUpdates=
k.needsElevationUpdates2D(c.mode);return b}_createAs3DShapeFill(b,a){var c=a.renderData.polygons;for(const {position:d,mapPositions:g,holeIndices:u,index:p,count:q}of c){if(null!=this._context.clippingExtent&&(f.empty(h),f.expandWithBuffer(h,g),!f.intersectsClippingArea(h,this._context.clippingExtent)))continue;c=l.createIndices3D(g,u,this._context.elevationProvider.spatialReference);if(0===c.length)continue;const v=this._fastUpdates?.visualVariables.color;c=l.createColorGeometry({material:this._materials[e.Fill],
indices:c,mapPositions:g,attributeData:{position:d,color:v?null:a.color,colorFeature:v?m.getAttributeValue(v.field,b):null,uvMapSpace:this._needsUV?n.floatSubArray(a.uvMapSpace,4*p,4*q):null,boundingRect:this._needsUV?x.doubleSubArray(a.boundingRect,9*p,9*q):null,objectAndLayerIdColor:a.objectAndLayerIdColor}});a.outGeometries.push(c)}}_createAs3DShapeOutline(b){if(null!=this._materials[e.Outline]){var a=b.renderData.outlines;for(const {mapPositions:c,position:d}of a){if(null!=this._context.clippingExtent&&
(f.empty(h),f.expandWithBuffer(h,c),!f.intersectsClippingArea(h,this._context.clippingExtent)))continue;a=A.createGeometry(this._materials[e.Outline],{overlayInfo:null,removeDuplicateStartEnd:!0,mapPositions:c,attributeData:{position:d}},b.objectAndLayerIdColor);b.outGeometries.push(a)}}}_createAsOverlay(b,a){const c=l.geometryAsPolygon(b.geometry);if(null==c)return null;this._materials[e.Fill].renderPriority=this._renderPriority+this._renderPriorityStep/2;null!=this._materials[e.Outline]&&(this._materials[e.Outline].renderPriority=
this._renderPriority);var d=B.geometryToRenderInfoDraped(c,this._context.overlaySR);a=new S(d,a,this._context.layer.uid,b.uid);d=a.renderData.position.length/3;this._needsUV&&(a.uvMapSpace=n.newFloatArray(4*d,!0),z.createMapSpaceUVCoordsDraped(a.uvMapSpace,a.renderData.position,this._context.overlaySR,this._context.graphicsCoreOwner.view.state.viewingMode));a.outBoundingBox=f.empty();a.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(a);this._createAsOverlayFill(b,a);
this._materials[e.Outline]&&this._createAsOverlayOutline(a);this._logGeometryCreationWarnings(a.renderData,c.rings,"rings","FillSymbol3DLayer");return 0===a.outGeometries.length?null:new H.Graphics3DDrapedGraphicLayer(this,a.outGeometries,a.outBoundingBox,this._context.drapeSourceRenderer)}_createAsOverlayFill(b,a){var c=a.renderData.polygons;for(const {position:g,holeIndices:u,index:p,count:q}of c){var d=f.empty(h);f.expandWithBuffer(d,g);f.intersectsClippingArea(d,this._context.clippingExtent)&&
(c=G.earcut(g,u,3),0!==c.length&&(f.expandWithAABB(a.outBoundingBox,d),d=this._fastUpdates?.visualVariables.color,c=l.createColorGeometry({material:this._materials[e.Fill],indices:c,attributeData:{position:g,color:d?null:a.color,colorFeature:d?m.getAttributeValue(d.field,b):null,uvMapSpace:this._needsUV?n.floatSubArray(a.uvMapSpace,4*p,4*q):null,objectAndLayerIdColor:a.objectAndLayerIdColor}}),a.outGeometries.push(new C.RenderGeometry(c,a))))}}_createAsOverlayOutline(b){if(null!=this._materials[e.Outline]){var a=
b.renderData.outlines;for(let d=0;d<a.length;++d){var {position:c}=a[d];f.empty(h);f.expandWithBuffer(h,c);f.intersectsClippingArea(h,this._context.clippingExtent)&&(f.expandWithAABB(b.outBoundingBox,h),c=A.createGeometry(this._materials[e.Outline],{overlayInfo:{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper},removeDuplicateStartEnd:!0,attributeData:{position:c}},b.objectAndLayerIdColor),b.outGeometries.push(new C.RenderGeometry(c,b)))}}}_getOutlineOpacity(){const b=
this.symbolLayer?.outline?.color;return(this.draped?1:this._getLayerOpacity())*(null!=b?b.a:0)}_getOutlineColor(){const b=this.symbolLayer?.outline?.color,a=this._getOutlineOpacity();return K.mixinColorAndOpacity(null!=b?E.toUnitRGB(b):null,a)}test(){return{...super.test(),createAsOverlay:(b,a)=>this._createAsOverlay(b,a),createAs3DShape:(b,a,c)=>this._createAs3DShape(b,a,c)}}}t.elevationModeChangeTypes={definedChanged:k.SymbolUpdateType.RECREATE,staysOnTheGround:k.SymbolUpdateType.NONE,onTheGroundChanged:k.SymbolUpdateType.RECREATE};
const h=f.create();class R extends l.PolygonCreationDataBase{constructor(b,a,c,d){super(b,c,d);this.color=a}}class S extends l.PolygonCreationDataBase{constructor(b,a,c,d){super(b,c,d);this.color=a}}var e;(function(b){b[b.Fill=0]="Fill";b[b.Outline=1]="Outline"})(e||={});w.Graphics3DPolygonFillSymbolLayer=t;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});