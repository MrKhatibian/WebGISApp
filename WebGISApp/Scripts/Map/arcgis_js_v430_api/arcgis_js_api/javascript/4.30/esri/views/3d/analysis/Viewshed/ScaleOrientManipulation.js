// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Handles ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/boundedPlane ../../../../geometry/support/ray ../Slice/sliceToolConfig ./ArrowManipulator ./viewshedToolConfig ./viewshedToolUtils ../../interactive/editingTools/dragEventPipeline3D ../../interactive/editingTools/ManipulatorType ../../interactive/editingTools/manipulations/Manipulation ../../../interactive/dragEventPipeline".split(" "),
function(z,F,G,d,q,h,n,A,H,I,u,m,v,J,p,K,t){class L extends K.Manipulation{constructor(a){super();this._handles=new F;this._interactive=!0;this._tool=a.tool;this._view=a.view;this._manipulatorHeading=new u.ArrowManipulator(this._view,!0,m.scaleOrientArcAngle,m.scaleOrientHandleRadius);this._manipulatorTilt=new u.ArrowManipulator(this._view,!0,m.scaleOrientArcAngle,m.scaleOrientHandleRadius);this._manipulatorDistance=new u.ArrowManipulator(this._view,!1,m.scaleOrientArcAngle,m.scaleOrientHandleRadius);
this.forEachManipulator(b=>{this._tool.manipulators.add(b);this._handles.add(b.events.on("grab-changed",()=>this._updateManipulatorInteractivity()))})}destroy(){this._handles.destroy();this.forEachManipulator(a=>{this._tool.manipulators.remove(a);a.destroy()});this._view=this._tool=this._manipulatorDistance=this._manipulatorTilt=this._manipulatorHeading=null}get interactive(){return this._interactive}set interactive(a){this._interactive!==a&&(this._interactive=a,this._updateManipulatorInteractivity())}createHeadingDragPipeline(a,
b){return t.createManipulatorDragEventPipeline(this._manipulatorHeading,(e,c,k,f,g)=>{({_view:f}=this);g=Math.sin(G.deg2rad(b.tiltParallelToSurface))*b.farDistanceRenderSpace;g=h.add(w,b.observerRenderSpace,h.scale(B,b.upVector,g));const l=h.cross(B,b.northVector,b.upVector);g=A.fromValues(g,b.northVector,l);c=v.screenToCircleAngle(c,f,g).next(x=>({...x,manipulatorType:p.ManipulatorType.ROTATE}));a(e,c,k)})}createTiltDragPipeline(a,b){return t.createManipulatorDragEventPipeline(this._manipulatorTilt,
(e,c,k,f,g)=>{f=A.fromValues(b.observerRenderSpace,b.targetDirection,b.tiltedUpVector);c=v.screenToCircleAngle(c,this._view,f).next(l=>({...l,manipulatorType:p.ManipulatorType.ROTATE}));a(e,c,k)})}createDistanceDragPipeline(a,b){return t.createManipulatorDragEventPipeline(this._manipulatorDistance,(e,c,k,f,g)=>{f=H.fromValues(b.observerRenderSpace,b.targetDirection);c=c.next(t.dragAtLocation(this._view,e.location)).next(J.screenToRenderRay(this._view,f)).next(l=>({...l,manipulatorType:p.ManipulatorType.SCALE}));
a(e,c,k)})}updateManipulators(a){var {target:b}=a;this._manipulatorHeading.location=b;this._manipulatorTilt.location=b;this._manipulatorDistance.location=b;b=q.create();{const {verticalFieldOfView:x,horizontalFieldOfView:M}=a;var e=180<x;const C=180<M;var c=a.farDistanceRenderSpace;if(e&&C)c=Math.max(1,c);else{a.arcCentersPoints(c,D);var {left:k,right:f,top:g,bottom:l}=D;e=e?h.distance(k,f):C?h.distance(l,k):Math.sqrt(Math.min(h.squaredDistance(l,g),h.squaredDistance(k,f)));c=Math.max(1,Math.min(c,
1.9*e))}}d.multiply(b,d.fromScaling(r,h.set(w,c,c,c)),b);d.multiply(b,v.getViewshedRotationMatrix(a,r),b);a=h.scale(w,a.targetDirection,m.scaleOrientHandleRadius*I.displayFocusMultiplier*c);d.multiply(b,d.fromTranslation(r,a),b);a=d.fromZRotation(r,-y);d.mul(a,a,d.fromYRotation(E,-y));this._manipulatorHeading.modelTransform=d.mul(q.create(),b,a);a=d.fromYRotation(r,y);d.mul(a,a,d.fromZRotation(E,Math.PI));this._manipulatorTilt.modelTransform=d.multiply(q.create(),b,a);this._manipulatorDistance.modelTransform=
b}_updateManipulatorInteractivity(){const a=!this.grabbing;this.forEachManipulator(b=>{b.interactive=a&&this._interactive||b.grabbing})}forEachManipulator(a){a(this._manipulatorHeading,p.ManipulatorType.ROTATE);a(this._manipulatorTilt,p.ManipulatorType.ROTATE);a(this._manipulatorDistance,p.ManipulatorType.SCALE)}}const D={top:n.create(),bottom:n.create(),left:n.create(),right:n.create()},r=q.create(),E=q.create(),w=n.create(),B=n.create(),y=Math.PI/2;z.ScaleOrientManipulation=L;Object.defineProperty(z,
Symbol.toStringTag,{value:"Module"})});