// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/colorUtils ../../../../../core/Cyclical ../../../../../core/Evented ../../../../../core/has ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/quantityUtils ../../../../../core/reactiveUtils ../../../../../core/scheduling ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../geometry/support/plane ../../../../../geometry/support/ray ../../../../../geometry/support/vectorStacks ../../Manipulator3D ../../manipulatorUtils ../../RenderObject ../dragEventPipeline3D ../ManipulatorType ../manipulations/config ../../../webgl-engine/lib/basicInterfaces ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Material ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/dragEventPipeline ../../../../interactive/interfaces ../../../../interactive/tooltip/Tooltip ../../../../interactive/tooltip/infos/TransformAbsoluteTooltipInfo ../../../../interactive/tooltip/infos/TransformRotateTooltipInfo ../../../../interactive/tooltip/infos/TransformScaleTooltipInfo".split(" "),
function(w,A,Y,Z,aa,ba,wa,J,T,G,B,ca,da,C,xa,ya,ea,H,fa,x,K,L,M,r,ha,ia,y,ja,ka,f,la,Q,ma,na,oa,D,pa,qa,ra,sa){function ta(a,b){var d=x.subtract(r.sv3d.get(),b.renderStart,a.origin);a=x.subtract(r.sv3d.get(),b.renderEnd,a.origin);d=x.length(d);a=x.length(a);return 0===d?0:a/d}function ua(a,b,d,c){const {renderStart:e,renderEnd:q}=a;var m=N(e,c,r.sv3d.get());a=N(q,c,r.sv3d.get());if(x.squaredDistance(m,a)<f.dragThresholdPx*f.dragThresholdPx)return null;const h=x.subtract(r.sv3d.get(),e,d);b=x.cross(r.sv3d.get(),
h,L.getNormal(b));b=x.add(r.sv3d.get(),e,b);d=N(d,c,r.sv3d.get());c=N(b,c,r.sv3d.get());b=x.subtract(r.sv3d.get(),c,m);c=x.subtract(r.sv3d.get(),m,d);m=M.wrap(m,b);c=M.wrap(d,c);return M.distance2(m,a)<M.distance2(c,a)?"rotate":"scale"}function N(a,b,d){b.projectToScreen(a,R);return x.set(d,R[0],R[1],0)}function U(a,b){let d=null,c=1;const e=()=>c;return{start:()=>{c=a.getScale();d=a.getScale;a.getScale=e;b()},update:q=>{c+=((c+1)/2-c)*Math.min(q*f.ringResetAnimationSpeedFactor,1);b();return.01>Math.abs(c-
1)?I.STOP:I.CONTINUE},destroy:()=>{d&&(a.getScale=d);b()}}}function va(a,b,d){let c=0,e=null;const q=()=>!1;return{start:()=>{e=a.getFocused;a.getFocused=q;c=0;b()},update:m=>{c+=m;return!e?.()||c>=d.delayMs?I.STOP:I.CONTINUE},destroy:()=>{e&&(a.getFocused=e);b()}}}function O(a){switch(a){case "integer":case "long":return 0;default:return null}}var g;(function(a){a.ScaleIn=D.ManipulatorStateCustomFlags.Custom2;a.ScaleOut=D.ManipulatorStateCustomFlags.Custom3;a.RotateLeft=D.ManipulatorStateCustomFlags.Custom4;
a.RotateRight=D.ManipulatorStateCustomFlags.Custom5;a.Unlocked=D.ManipulatorStateCustomFlags.Custom7;a.DelayedFocused=D.ManipulatorStateCustomFlags.Custom8;a.TouchInput=D.ManipulatorStateCustomFlags.Custom12})(g||={});w.ScaleRotateTransform=class extends Y{get angle(){return this.adapter.angle}get scale(){return this.adapter.scale}set location(a){this._ringManipulator.location=a}set elevationAlignedLocation(a){this._ringManipulator.elevationAlignedLocation=a}get grabbing(){return this._ringManipulator.grabbing}set interactive(a){this._ringManipulator.interactive=
a}get updating(){return!!this._activeAnimation}get tooltipEffectiveEnabled(){return this.sketchOptions.tooltips.effectiveEnabled&&this.tooltipEnabled}constructor(a){super(a);this.mode=null;this.tooltipEnabled=!0;this._activeAnimation=this._scaleRotateDragData=null;this._ringIndicatorDelayMs=f.ringIndicatorDelayMs;this._rotateTooltipInfo=this._scaleTooltipInfo=this._absoluteTooltipInfo=null;this.events=new ba;this.getFocused=()=>this._ringManipulator.focused;this.getScale=()=>"scale"===this._scaleRotateDragData?.mode?
this.adapter.scale:1}initialize(){this.tooltip=new pa.Tooltip({view:this.tool.view});this._createManipulator();this._updateDragState();this._updateManipulatorTransform();this.addHandles([B.when(()=>!this.tooltipEffectiveEnabled,()=>this.tooltip.clear(),B.initial),B.watch(()=>{const {adapter:a}=this,{info:b}=this.tooltip;return b===this._absoluteTooltipInfo&&this.getFocused()?[b,a.size,a.orientationClockwise]:[null]},([a])=>{a&&this._updateFocusTooltip()}),B.watch(()=>{const {adapter:a}=this;return[a.angle,
a.scale]},()=>this._updateManipulatorTransform())])}destroy(){this._activeAnimation?.frameTask.remove();this._activeAnimation=null;this.tool.manipulators.remove(this._ringManipulator);this._ringManipulator=null;this.tooltip=T.destroyMaybe(this.tooltip)}startAnimation(a){this.cancelActiveAnimation();a.start();const b=ca.addFrameTask({update:({deltaTime:d})=>{a.update(d)&&this.cancelActiveAnimation()}});this._activeAnimation={...a,frameTask:b}}cancelActiveAnimation(){this._activeAnimation?.frameTask.remove();
this._activeAnimation=T.destroyMaybe(this._activeAnimation)}forEachManipulator(a){a(this._ringManipulator,ka.ManipulatorType.SCALE_ROTATE)}_createManipulator(){const a=this._createRingManipulator();this._ringManipulator=a;this.tool.manipulators.add(a);const b=this.tool.object,d=oa.createManipulatorDragEventPipeline(a,(c,e,q)=>{this._scaleRotateDragData=null;const m=this.adapter.startInteraction(),h={mode:"none",origin:K.clone(c.renderLocation),initialAngle:this.adapter.angle,angle:0,angleDir:0,scaleDir:0};
this._scaleRotateDragData=h;this._updateDragState();const n=r.sv3d.get();this.tool.view.renderCoordsHelper.worldUpAtPosition(c.renderLocation,n);e.next(ja.screenToRenderPlane(this.tool.view,L.fromPositionAndNormal(c.renderLocation,n,L.create()))).next(k=>{var l=L.getNormal(k.plane);l=ia.calculateInputRotationTransform(k.renderStart,k.renderEnd,h.origin,l);var p=aa.cyclicalPI.shortestSignedDiff(h.angle,l);h.angleDir=J.clamp(h.angleDir+p,-f.rotateIndicatorDirectionBuffer,f.rotateIndicatorDirectionBuffer);
h.angle=l;p=ta(h,k);h.scaleDir=J.clamp(h.scaleDir+(p-this.adapter.scale),-f.scaleIndicatorDirectionBuffer,f.scaleIndicatorDirectionBuffer);this._onScaleChanged();if("none"===h.mode){const u=this.mode||ua(k,k.plane,h.origin,this.tool.view.state.camera);if(null!=u){switch(u){case "rotate":this.tool.events.emit("rotate-start",{object:b,angle:0});this.tool.events.emit("record-undo",{updates:[this.adapter.createUndoRecord()]});break;case "scale":this.tool.events.emit("scale-start",{object:b,xScale:1,yScale:1}),
this.tool.events.emit("record-undo",{updates:[this.adapter.createUndoRecord()]})}h.mode=u}}switch(h.mode){case "rotate":m.state.angle=h.initialAngle+l;break;case "scale":m.state.scale=p,this._onScaleChanged()}this._updateDragState();this._updateManipulatorTransform();switch(k.action){case "start":case "update":switch(h.mode){case "rotate":this.tool.events.emit("rotate",{object:b,angle:J.rad2deg(h.angle)});break;case "scale":this.tool.events.emit("scale",{object:b,xScale:p,yScale:p})}break;case "end":switch(h.mode){case "rotate":this.tool.events.emit("rotate-stop",
{object:b,angle:J.rad2deg(h.angle)});break;case "scale":this.tool.events.emit("scale-stop",{object:b,xScale:p,yScale:p})}}"end"===k.action&&(this.startAnimation(U(this,()=>this._onScaleChanged())),this._scaleRotateDragData=null,this._updateDragState(),m.done());return k}).next(this._updateTooltipPipelineStep(h));q.next(()=>{m.cancel();if(null!=this._scaleRotateDragData){switch(this._scaleRotateDragData.mode){case "rotate":this.tool.events.emit("rotate-stop",{object:b,angle:0});break;case "scale":this.tool.events.emit("scale-stop",
{object:b,xScale:1,yScale:1})}this.startAnimation(U(this,()=>this._onScaleChanged()));this._scaleRotateDragData=null;this._updateDragState()}this._updateFocusTooltip()})});this.addHandles([d,a.events.on("focus-changed",c=>{"focus"===c.action?this.startAnimation(va(this,()=>this._updateDelayedFocusedState(),{delayMs:this._ringIndicatorDelayMs})):this._updateDelayedFocusedState()}),a.events.on("immediate-click",c=>{c.stopPropagation()}),B.watch(()=>this.tool.object.visible,c=>this._ringManipulator.available=
c,B.initial)])}_updateTooltipPipelineStep(a){return b=>{const {sketchOptions:d}=this;var {visualVariables:c}=d.tooltips;if(!this.tooltipEffectiveEnabled)return b;if("end"===b.action)return this._updateFocusTooltip(),b;var {tooltip:e}=this;switch(a.mode){case "scale":e.info=this._scaleTooltipInfo??(this._scaleTooltipInfo=new sa.TransformScaleTooltipInfo({sketchOptions:d}));const {size:q,scale:m}=this.adapter;c=c?.size;e=e.info;e.sketchOptions=d;e.scale=G.createScalar(m);e.size=null!=q?G.createLength(q,
"meters"):void 0;e.sizePrecision=O(c?.valueType);e.sizeUnit=c?.unit;break;case "rotate":e.info=this._rotateTooltipInfo??(this._rotateTooltipInfo=new ra.TransformRotateTooltipInfo({sketchOptions:d}));const {orientationClockwise:h,relativeAngleClockwise:n}=this.adapter;c=c?.rotation;const k=O(c?.valueType);e=e.info;e.sketchOptions=d;e.rotation=null!=n?G.createAngle(n,"radians","geographic"):void 0;e.rotationPrecision=k;e.rotationType=c?.rotationType??"geographic";e.orientation=null!=h?G.createAngle(h,
"radians","geographic"):void 0;e.orientationPrecision=k}return b}}_updateFocusTooltip(){const {sketchOptions:a,tooltip:b}=this;var {visualVariables:d}=a.tooltips;if(this.tooltipEffectiveEnabled)if(this.getFocused()){const e=d?.rotation;d=d?.size;var c=this.mode;const {size:q,orientationClockwise:m}=this.adapter,h=null!=m&&(null==c||"rotate"===c);c=null!=q&&(null==c||"scale"===c);b.info=this._absoluteTooltipInfo??(this._absoluteTooltipInfo=new qa.TransformAbsoluteTooltipInfo({sketchOptions:a}));const n=
b.info;n.sketchOptions=a;n.orientation=h?G.createAngle(m,"radians","geographic"):void 0;n.orientationPrecision=O(e?.valueType);n.rotationType=e?.rotationType??"geographic";n.size=c?G.createLength(q,"meters"):void 0;n.sizeUnit=d?.unit;n.sizePrecision=O(d?.valueType)}else b.clear()}_onScaleChanged(){this.events.emit("scale-changed");this._updateManipulatorTransform()}_updateDelayedFocusedState(){this._ringManipulator.updateStateEnabled(g.DelayedFocused,this.getFocused());this._updateFocusTooltip()}_updateDragState(){this._ringManipulator.updateStateEnabled(g.Unlocked,
!(null!=this._scaleRotateDragData&&"none"!==this._scaleRotateDragData?.mode));if(null!=this._scaleRotateDragData)switch(this._scaleRotateDragData.mode){case "rotate":this._ringManipulator.updateStateEnabled(g.ScaleIn|g.ScaleOut,!1);this._ringManipulator.updateStateEnabled(g.RotateLeft,0>this._scaleRotateDragData.angleDir);this._ringManipulator.updateStateEnabled(g.RotateRight,0<=this._scaleRotateDragData.angleDir);break;case "scale":this._ringManipulator.updateStateEnabled(g.RotateLeft|g.RotateRight,
!1),this._ringManipulator.updateStateEnabled(g.ScaleIn,0>this._scaleRotateDragData.scaleDir),this._ringManipulator.updateStateEnabled(g.ScaleOut,0<=this._scaleRotateDragData.scaleDir)}else this._ringManipulator.updateStateEnabled(g.ScaleIn|g.ScaleOut|g.RotateLeft|g.RotateRight,!1)}_updateManipulatorTransform(){const a=H.fromRotation(r.sm4d.get(),this.adapter.angle,K.fromValues(0,0,1));if(null!=a){var b=this.getScale();b=H.fromScaling(r.sm4d.get(),x.set(r.sv3d.get(),b,b,b));this._ringManipulator.modelTransform=
H.multiply(r.sm4d.get(),b,a)}}_createRingManipulator(){var a=(v,E,P)=>{const V=[],W=Math.ceil(f.geometrySegments*(E-v)/(2*Math.PI));for(let S=0;S<W+1;S++){const X=v+S*(E-v)/W;V.push(K.fromValues(P*Math.cos(X),P*Math.sin(X),0))}return V};const b=this._createMaterial(1);var d=(v,E,P=b)=>Q.createPathExtrusionGeometry(P,[[-E/2,0],[E/2,0],[E/2,f.ringHeight/2],[-E/2,f.ringHeight/2]],v,[],[],!1),c=a(0,2*Math.PI,f.ringRadius),e=d(c,f.ringThickness),q=[],m=[];const h=[];for(var n=0;2>n;n++){var k=n*Math.PI-
Math.PI/4,l=Math.PI/2-f.rotateIndicatorArcLength,p=k+l;k=k+Math.PI/2-l;l=a(p,k,f.innerIndicatorRadius);var u=d(l,f.indicatorThickness);h.push(l);h.push(a(p,k,f.outerIndicatorRadius-f.ringThickness/2));q.push(u);m.push(u.instantiate());for(u=0;2>u;u++){var F=0===u,t=fa.create();if(F){H.scale(t,t,[1,-1,1]);H.rotate(t,t,-p,[0,0,1]);var z=Math.round(f.rotateIndicatorArrowPlacementPercentage*(l.length-1));t[12]=l[z][0];t[13]=l[z][1];t[14]=l[z][2]}else H.rotate(t,t,k,[0,0,1]),z=Math.round((1-f.rotateIndicatorArrowPlacementPercentage)*
(l.length-1)),t[12]=l[z][0],t[13]=l[z][1],t[14]=l[z][2];z=Q.createExtrudedTriangle(b,f.rotateIndicatorArrowTipLength,0,f.rotateIndicatorArrowTipRadius,f.ringHeight);Q.transformInPlace(z,t);(F?q:m).push(z)}}n=[];for(p=0;2>p;p++)k=p*Math.PI-Math.PI/4,l=Math.PI/2-f.scaleIndicatorArcLength,k=a(k+l,k+Math.PI/2-l,f.outerIndicatorRadius),n.push(d(k,f.indicatorThickness));F=this._createMaterial(.66);p=this._createMaterial(.5);l=this._createMaterial(.33);k=a(0,2*Math.PI,f.ringRadius+f.scaleIndicatorOffset1);
u=a(0,2*Math.PI,f.ringRadius+f.scaleIndicatorOffset2);k=d(k,f.indicatorThickness,F);u=d(u,f.indicatorThickness,l);t=a(0,2*Math.PI,f.ringRadius-f.scaleIndicatorOffset1);a=a(0,2*Math.PI,f.ringRadius-f.scaleIndicatorOffset2);F=d(t,f.indicatorThickness,F);d=d(a,f.indicatorThickness,l);e=[new y.RenderObject(e,g.DelayedFocused),new y.RenderObject(e.instantiate({material:p}),D.ManipulatorStateFlags.None)];this.mode&&"scale"!==this.mode||(e=e.concat([...n.map(v=>new y.RenderObject(v,g.DelayedFocused|g.Unlocked)),
new y.RenderObject(k,g.DelayedFocused|g.ScaleIn),new y.RenderObject(u,g.DelayedFocused|g.ScaleIn),new y.RenderObject(F,g.DelayedFocused|g.ScaleOut),new y.RenderObject(d,g.DelayedFocused|g.ScaleOut)]));this.mode&&"rotate"!==this.mode||(e=e.concat([...m.map(v=>new y.RenderObject(v.instantiate(),g.DelayedFocused|g.Unlocked)),...q.map(v=>new y.RenderObject(v,g.DelayedFocused|g.RotateLeft)),...m.map(v=>new y.RenderObject(v,g.DelayedFocused|g.RotateRight))]));c=[c,...h];return new ha.Manipulator3D({view:this.tool.view,
renderObjects:e,autoScaleRenderObjects:!1,worldOriented:!0,radius:f.ringThickness,focusMultiplier:1,touchMultiplier:1.5,elevationInfo:this.tool.object.elevationInfo,collisionType:{type:"ribbon",paths:c,direction:K.fromValues(0,0,1)}})}_createMaterial(a){const b=new na.ColorMaterial({cullFace:la.CullFaceOptions.Back,renderOccluded:ma.RenderOccludedFlag.Transparent,isDecoration:!0});this.addHandles(B.watch(()=>({color:Z.multiplyOpacityToUnitRGBA(this.tool.view.effectiveTheme.accentColor,a)}),d=>b.setParameters(d),
B.initial));return b}get test(){}};A.__decorate([C.property({constructOnly:!0})],w.ScaleRotateTransform.prototype,"tool",void 0);A.__decorate([C.property({constructOnly:!0})],w.ScaleRotateTransform.prototype,"adapter",void 0);A.__decorate([C.property({constructOnly:!0})],w.ScaleRotateTransform.prototype,"sketchOptions",void 0);A.__decorate([C.property()],w.ScaleRotateTransform.prototype,"mode",void 0);A.__decorate([C.property()],w.ScaleRotateTransform.prototype,"tooltipEnabled",void 0);A.__decorate([C.property()],
w.ScaleRotateTransform.prototype,"_activeAnimation",void 0);A.__decorate([C.property()],w.ScaleRotateTransform.prototype,"updating",null);A.__decorate([C.property()],w.ScaleRotateTransform.prototype,"tooltipEffectiveEnabled",null);w.ScaleRotateTransform=A.__decorate([ea.subclass("esri.views.3d.interactive.editingTools.transform.ScaleRotateTransform")],w.ScaleRotateTransform);var I;(function(a){a[a.CONTINUE=0]="CONTINUE";a[a.STOP=1]="STOP"})(I||={});const R=da.createScreenPointArray();Object.defineProperty(w,
Symbol.toStringTag,{value:"Module"})});