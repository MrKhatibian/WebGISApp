// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../Graphic ../../UndoRedo ../../core/asyncUtils ../../core/Evented ../../core/handleUtils ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/coordinateFormatter ../../layers/GraphicsLayer ../../layers/graphics/dehydratedFeatureComparison ./support/CreateOperationGeometry ./support/createUtils ./support/surfaceCoordinateSystems ./support/tooltipUtils ../interactive/InteractiveToolBase ../interactive/sketch/SketchOptions ../interactive/tooltip/Tooltip ../interactive/tooltip/tooltipCommonUtils ../../core/accessorSupport/trackingUtils".split(" "),
function(b,d,E,F,G,H,v,w,z,e,S,T,U,I,J,K,L,M,m,N,p,O,A,P,B,C){b.DrawGraphicTool=class extends H.EventedMixin(O.InteractiveToolBase){constructor(a){super(a);this._createOperationGeometry=this._coordinateFormatterLoadTask=this._graphic=null;this.defaultZ=0;this.geometryType=this.directionOptions=null;this.hasZ=!0;this.snappingManager=this.geometryToPlace=null;this.snapToScene=!1;this.sketchOptions=new A}initialize(){const {view:a}=this;this.internalGraphicsLayer=new K({listMode:"hide",internal:!0});
this.view.map.layers.add(this.internalGraphicsLayer);const c=this.drawOperation=this.makeDrawOperation();this.tooltipInfos=p.createTooltipInfos(a.type,this.sketchOptions);const n=this.tooltip=new P.Tooltip({view:a});p.initializeConstraints(this._tooltipsContext);this._coordinateFormatterLoadTask=G.createTask(()=>J.load());this.addHandles([c.on("vertex-add",g=>this.onVertexAdd(g)),c.on("vertex-remove",g=>this.onVertexRemove(g)),c.on("vertex-update",g=>this.onVertexUpdate(g)),c.on("cursor-update",g=>
this.onCursorUpdate(g)),c.on("cursor-remove",()=>this._updateGraphic()),c.on("complete",g=>this.onComplete(g)),this._coordinateFormatterLoadTask,n.on("paste",g=>B.pasteLocation(g,this.activeTooltipInfo)),z.watch(()=>this.cursor,g=>{c.cursor=g},z.syncAndInitial),C.autorun(()=>{const {activeTooltipInfo:g,sketchOptions:u}=this;p.updateTooltipInfo(g,this._tooltipsContext);n.info=u.tooltips.effectiveEnabled?g:null}),C.autorun(()=>{c.constraintZ=p.getConstraintZ(this._tooltipsContext)})]);this.finishToolCreation()}destroy(){this.drawOperation=
w.destroyMaybe(this.drawOperation);this.tooltip=w.destroyMaybe(this.tooltip);this._destroyAllVisualizations();this.view.map.remove(this.internalGraphicsLayer);this.internalGraphicsLayer=w.destroyMaybe(this.internalGraphicsLayer);this._set("view",null)}get _drawSpatialReference(){return this.drawOperation.coordinateHelper.spatialReference}get _tooltipsContext(){return{createOperationGeometry:this._createOperationGeometry,defaultZ:this.defaultZ,directionOptions:this.directionOptions,drawOperation:this.drawOperation,
forceUniformSize:this.forceUniformSize,geometryType:this.geometryType,graphic:this.graphic,sketchOptions:this.sketchOptions,tooltipInfos:this.tooltipInfos,view:this.view}}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(a){this._set("centered",a);this._updateGraphic()}get cursor(){return this._get("cursor")}set cursor(a){this._set("cursor",a)}set enabled(a){this.drawOperation.interactive=a;this._set("enabled",a)}set forceUniformSize(a){this._set("forceUniformSize",
a);this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(a){this._set("graphicSymbol",a);null!=this._graphic&&(this._graphic.symbol=a)}set mode(a){const c=this.drawOperation;c&&(c.drawingMode=a);this._set("mode",a)}get updating(){return this.drawOperation?.updating??!1}get undoRedo(){const {view:{type:a,map:c}}=this;return"2d"===a&&c&&"undoRedo"in c&&c.undoRedo instanceof F.UndoRedo?c.undoRedo:null}set undoRedo(a){this._override("undoRedo",a)}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(a){if(!this.destroyed&&
!B.enterInputModeIfAvailable(a,this.tooltip))this.drawOperation.onInputEvent(a)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo();0===this.drawOperation.numCommittedVertices&&p.initializeConstraints(this._tooltipsContext)}_destroyAllVisualizations(){this.removeHandles(h.outline);this.removeHandles(h.regularVertices);this.removeHandles(h.activeVertex);this.removeHandles(h.activeEdge);this.removeHandles(x)}_createOrUpdateGraphic(a){if(null!=this._graphic)return this.updateGraphicGeometry(a),
this._graphic;const c=new E({...this.graphicProperties,symbol:this.graphicSymbol});this._graphic=c;this.updateGraphicGeometry(a);this.internalGraphicsLayer.add(c);this.addHandles(this.initializeGraphic(c));this.notifyChange("graphic");this.addHandles(v.makeHandle(()=>{this.internalGraphicsLayer.remove(c);this._graphic===c&&(this._graphic=null)}),x);return c}updateGraphicGeometry(a){this._graphic.geometry=a}_getCreateOperationGeometry(a={operationComplete:!1}){if(null!=this.drawOperation){var {coordinateHelper:c,
view:n,visualizationCursorVertex:g,lastVertex:u,committedVertices:D,geometryIncludingUncommittedVertices:Q,numCommittedVertices:R}=this.drawOperation;if(0<R||null!=g){var k=a.operationComplete?D:Q,r=k.length,l=null!=g?c.pointToArray(g):null,q=this._drawSpatialReference,t="3d"===n.type&&"global"===n.viewingMode,f=new M.CreateOperationGeometry;f.committedVertices=D;f.cursorVertex=l;var {geometryType:y}=this;switch(y){case "point":case "mesh":f.full=c.arrayToPoint(k[0]);break;case "multipoint":f.full=
0<r?m.createMultipoint(k,q):null;break;case "polyline":case "polygon":0<r&&(f.full="polygon"===y?m.createPolygon([k],q,t,!0):m.createPolyline([k],q,t),f.cursorEdge=null!=l&&u&&!L.pointEquals(g,u)?m.createPolyline([[l,c.pointToArray(u)]],q,t):null,f.outline=1<r?f.full:null);break;case "circle":case "rectangle":f.committedVertices=f.cursorVertex=null;if(!r)break;l=N.createViewAlignedCoordinateSystem(n,k[0]);q=k[0];t=l.makeMapPoint(q[0]+48*n.resolution,q[1]);"circle"===y?1===r&&a.operationComplete?f.circle=
m.createCircle([q,t],l,!0):2===r&&(this.forceUniformSize?f.circle=m.createCircle(k,l,this.centered):f.rectangle=m.createEllipse(k,l,this.centered)):1===r&&a.operationComplete?f.rectangle=m.createSquare([q,t],l,!0):2===r&&(f.rectangle=this.forceUniformSize?m.createSquare(k,l,this.centered):m.createRectangle(k,l,this.centered));f.full=null!=f.circle?f.circle.geometry:f.rectangle?.geometry;f.outline="polygon"===f.full?.type?f.full:null;break;default:return null}return f}}}initializeGraphic(a){return v.makeHandle()}onComplete(a){if(this.drawOperation){this._updateGraphic();
var c=null;if(this.drawOperation.isCompleted){const n=this._getCreateOperationGeometry({operationComplete:!0});null!=n&&(c=this._createOrUpdateGraphic(n.full))}this._createOperationGeometry=null;this.emit("complete",{graphic:c,...a})}}onCursorUpdate(a){this._updateGraphic();this.emit("cursor-update",a)}onDeactivate(){const {drawOperation:a}=this;a&&(a.isCompleted||a.cancel())}onOutlineChanged(a){return v.makeHandle()}onCursorEdgeChanged(a){return v.makeHandle()}onVertexAdd(a){p.unlockConstraintsOnVertexAddOrRemove(this._tooltipsContext);
this._updateGraphic();p.lockElevationOnVertexAdd(a.vertices.at(0)?.coordinates,this._tooltipsContext);this.emit("vertex-add",a)}onVertexRemove(a){p.unlockConstraintsOnVertexAddOrRemove(this._tooltipsContext);this._updateGraphic();this.emit("vertex-remove",a)}onVertexUpdate(a){this._updateGraphic();this.emit("vertex-update",a)}_updateGraphic(){const a=this._getCreateOperationGeometry();this._createOperationGeometry=a;null==a?this._destroyAllVisualizations():(null!=a.cursorEdge?this.addHandles(this.onCursorEdgeChanged(a.cursorEdge),
h.activeEdge):this.removeHandles(h.activeEdge),null!=a.outline?this.addHandles(this.onOutlineChanged(a.outline),h.outline):this.removeHandles(h.outline),null!=a.committedVertices?this.addHandles(this.onRegularVerticesChanged(a.committedVertices),h.regularVertices):this.removeHandles(h.regularVertices),null!=a.cursorVertex?this.addHandles(this.onActiveVertexChanged(a.cursorVertex),h.activeVertex):this.removeHandles(h.activeVertex),null!=a.full?this._createOrUpdateGraphic(a.full):this.removeHandles(x))}get activeTooltipInfo(){return this._coordinateFormatterLoadTask?.finished?
p.getActiveTooltipInfo(this._tooltipsContext):null}};d.__decorate([e.property()],b.DrawGraphicTool.prototype,"_coordinateFormatterLoadTask",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"_createOperationGeometry",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"_tooltipsContext",null);d.__decorate([e.property({value:!0})],b.DrawGraphicTool.prototype,"centered",null);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"cursor",null);d.__decorate([e.property({nonNullable:!0})],
b.DrawGraphicTool.prototype,"defaultZ",void 0);d.__decorate([e.property({constructOnly:!0})],b.DrawGraphicTool.prototype,"directionOptions",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"drawOperation",void 0);d.__decorate([e.property({value:!0})],b.DrawGraphicTool.prototype,"enabled",null);d.__decorate([e.property({value:!0})],b.DrawGraphicTool.prototype,"forceUniformSize",null);d.__decorate([e.property({constructOnly:!0})],b.DrawGraphicTool.prototype,"geometryType",void 0);d.__decorate([e.property()],
b.DrawGraphicTool.prototype,"graphic",null);d.__decorate([e.property({constructOnly:!0})],b.DrawGraphicTool.prototype,"graphicProperties",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"graphicSymbol",null);d.__decorate([e.property({constructOnly:!0})],b.DrawGraphicTool.prototype,"hasZ",void 0);d.__decorate([e.property({constructOnly:!0})],b.DrawGraphicTool.prototype,"geometryToPlace",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"mode",null);d.__decorate([e.property()],
b.DrawGraphicTool.prototype,"snappingManager",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"snapToScene",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"tooltip",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"tooltipInfos",void 0);d.__decorate([e.property({constructOnly:!0,type:A})],b.DrawGraphicTool.prototype,"sketchOptions",void 0);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"updating",null);d.__decorate([e.property({constructOnly:!0,
nonNullable:!0})],b.DrawGraphicTool.prototype,"view",void 0);d.__decorate([e.property({constructOnly:!0})],b.DrawGraphicTool.prototype,"undoRedo",null);d.__decorate([e.property()],b.DrawGraphicTool.prototype,"activeTooltipInfo",null);b.DrawGraphicTool=d.__decorate([I.subclass("esri.views.draw.DrawGraphicTool")],b.DrawGraphicTool);const x=Symbol("create-operation-graphic"),h={outline:Symbol("outline-visual"),regularVertices:Symbol("regular-vertices-visual"),activeVertex:Symbol("active-vertex-visual"),
activeEdge:Symbol("active-edge-visual")};b.geometryTypeToDrawOperationGeometryType=function(a){switch(a){case "point":case "polyline":case "polygon":case "multipoint":return a;case "circle":case "rectangle":return"segment";case "mesh":return"point"}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});