// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/math/vec2 ../../../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../../../chunks/vec32 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../../chunks/boundedPlane ../../../../../../geometry/support/plane ../../../../../../geometry/support/vectorStacks ../../../../analysis/Slice/ResizeManipulator ../../../../analysis/Slice/sliceToolUtils ../../dragEventPipeline3D ../../ManipulatorType ./extentUtils ../../../../support/geometryUtils/ray ../../../../../interactive/dragEventPipeline ../../../../../interactive/editGeometry/interfaces ../../../../../interactive/editGeometry/operations/UpdateVertices ../../../../../interactive/tooltip/infos/ExtentScaleTooltipInfo".split(" "),
function(v,k,w,h,B,x,C,p,D,q,E,F,z,G,H,A,I,J){class K{get _object(){return this._tool.object}get _operations(){return this._object.operations}get zMax(){if(!this._zMaxDirty||!this._operations)return this._zMax;var a=this._operations.data;if(a.geometry.hasZ){const d=a.coordinateHelper;this._zMax=Number.NEGATIVE_INFINITY;for(const b of a.components)for(const c of b.vertices)a=d.getZ(c.pos)??0,this._zMax=Math.max(a,this._zMax)}else this._zMax=0;this._zMaxDirty=!1;return this._zMax}constructor(a,d,b){this._tool=
a;this._bounds=d;this._preserveAspectRatioStep=b;this._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}];this._scaleTooltipInfo=null;this._displayBoundsStart=x.create();this._displayBoundsMarginStart=0;this._startScale=w.create();this._endScale=w.create();this._sizeStart=null;this._zMax=0;this._zMaxDirty=!0;const c=this._tool,n=c.view;this.resizeManipulators=this._resizeHandles.map(f=>
{const e=new D.ResizeManipulator(n,f);c.addHandles([e.events.on("grab-changed",g=>this._onResizeGrab(g)),this._createResizeDragPipeline(e,f)]);return e});c.manipulators.addMany(this.resizeManipulators);c.addHandles([c.events.on("scale-start",f=>{k.set(this._startScale,f.xScale,f.yScale);k.set(this._endScale,f.xScale,f.yScale)}),c.events.on("scale",f=>{k.set(this._endScale,f.xScale,f.yScale)}),c.events.on("scale-stop",()=>{k.set(this._startScale,0,0);k.set(this._endScale,0,0)})]);this._operations&&
c.addHandles(this._operations.data.on("change",()=>{"resize"!==c.inputState?.type&&(this._zMaxDirty=!0)}))}destroy(){this.forEachManipulator(a=>{this._tool.manipulators.remove(a);a.destroy()})}forEachManipulator(a){this.resizeManipulators.forEach(d=>a(d,F.ManipulatorType.SCALE))}updateManipulators(a,d){this.resizeManipulators.forEach((b,c)=>{q.updateResizeHandle(b,this._resizeHandles[c],a,d)})}getUpdatedTooltipInfo(){return this.resizeManipulators.some(a=>a.focused)?this._computeScaleTooltipInfo():
null}_computeScaleTooltipInfo(){var a=this._tool;a=this._scaleTooltipInfo??(this._scaleTooltipInfo=new J.ExtentScaleTooltipInfo({sketchOptions:a.sketchOptions}));const d=z.mapPlaneAutoSize2D(this._bounds.mapBounds,this.zMax,this._bounds.spatialReference);if(null==d)return null;a.xSize=d.xSize;a.ySize=d.ySize;null!=this._sizeStart&&this.resizeManipulators.some(b=>b.dragging)?(a.xScale=d.xSize.value/this._sizeStart.xSize.value,a.yScale=d.ySize.value/this._sizeStart.ySize.value):(a.xScale=1,a.yScale=
1);return a}_onResizeGrab({action:a,screenPoint:d}){const b=this._tool,c=this._bounds;"start"===a&&d&&(a=G.fromScreenNormalized(b.view.state.camera,d),C.intersectRay(c.displayBounds.plane,a,p.sv3d.get())&&(c.backupMapBounds(),x.copy(c.displayBounds,this._displayBoundsStart),this._displayBoundsMarginStart=c.displayBoundsMargin,this._sizeStart=z.mapPlaneAutoSize2D(c.mapBoundsStart,this.zMax,c.spatialReference),b.inputState={type:"resize"}))}_createResizeDragPipeline(a,d){const {_tool:b,_object:c}=this;
return H.createManipulatorDragEventPipeline(a,(n,f,e)=>{null!=b.inputState&&(f.next(g=>{"start"===g.action&&b.events.emit("scale-start",{object:c,xScale:1,yScale:1});return g}).next(E.screenToRenderPlane(b.view,this._displayBoundsStart.plane)).next(g=>({...g,handle:d})).next(this._resizeDragRenderPlaneToFactors()).next(...this._preserveAspectRatioStep()).next(this._resizeDragUpdateGeometry()).next(g=>{const r={object:c,xScale:g.factor1,yScale:g.factor2};switch(g.action){case "start":case "update":b.events.emit("scale",
r);break;case "end":b.inputState=null,b.events.emit("scale-stop",r)}return g}),e.next(()=>{null!=b.inputState&&b.events.emit("scale-stop",{object:c,xScale:1,yScale:1});b.cancel()}))})}_resizeDragRenderPlaneToFactors(){const a=this._bounds;return d=>{const b=this._displayBoundsStart,c=d.handle.direction,n=a.displayBoundsMargin,f=this._displayBoundsMarginStart;var e=h.copy(p.sv3d.get(),b.origin);h.scaleAndAdd(e,e,b.basis1,-c[0]);h.scaleAndAdd(e,e,b.basis2,-c[1]);const g=h.subtract(p.sv3d.get(),d.renderEnd,
e),r=h.subtract(p.sv3d.get(),d.renderStart,e),L=q.isDiagonalResizeHandle(d.handle);e=q.calculateDiagonalResizeHandleScale(b);const M=q.calculateDiagonalResizeHandleScale(a.displayBounds)/e;e=(l,y)=>{if(0===l)return 1;let m=h.length(y),t=.5*l*h.dot(y,g)/m;const u=0>t?-1:1;L&&(l=m-.5*l*h.dot(y,r)/m,t+=l*u*M);l=m<1.5*f?1:1E-6;m=Math.max(m-f,1E-6);0<u&&(t-=n);return u*Math.max(t/m*u,l)};return{...d,factor1:e(c[0],b.basis1),factor2:e(c[1],b.basis2)}}}_resizeDragUpdateGeometry(){const a=this._bounds;return d=>
{var b=h.copy(B.create(),a.mapBoundsStart.origin);h.scaleAndAdd(b,b,a.mapBoundsStart.basis1,-d.handle.direction[0]);h.scaleAndAdd(b,b,a.mapBoundsStart.basis2,-d.handle.direction[1]);const c=k.set(w.create(),a.mapBoundsStart.basis1[0],a.mapBoundsStart.basis1[1]);k.normalize(c,c);const n="start"===d.action?A.AccumulationBehavior.NEW_STEP:A.AccumulationBehavior.ACCUMULATE_STEPS;this._operations&&(b=this._operations.scale(b,c,d.factor1,d.factor2,n,I.AccumulationType.REPLACE),x.copy(a.mapBoundsStart,a.mapBounds),
a.updateMapBoundsFromOperation(b));return d}}}v.ExtentScale=K;v.scaleEpsilon=1E-6;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});