// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/Handles ../../../../core/mathUtils ../../../../core/reactiveUtils ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../Slice/sliceToolConfig ./FieldOfViewManipulation ./viewshedToolConfig ../../interactive/Manipulator3D ../../interactive/RenderObject ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/materials/ColorMaterial ../../../interactive/interfaces".split(" "),
function(n,x,y,z,p,e,q,A,h,r,B,t,C,f,D,k,E,F,g){function u(a,c,b){const d=v(a);b*=2;a&&(b*=r.displayFocusMultiplier);a=d/2;return k.createExtrudedTriangle(c,d,a,a,b,0)}function v(a){let c=t.scaleOrientArrowTipLength;a&&(c*=t.scaleOrientArrowTipFocusMultiplier);return c}class G extends C.Manipulator3D{constructor(a,c,b,d){super({view:a,autoScaleRenderObjects:!1,worldSized:!0,radius:5});this._handles=new y;this._setupManipulatorVisual(c,b,d)}destroy(){this._handles.remove();super.destroy()}_setupManipulatorVisual(a,
c,b){var d=this._createMaterial();const l=z.deg2rad(c);c=a?1:Math.sin(l);c=a?B.createArcPolylineVertices(0,l,c,[-c,0,0]):[h.fromValues(0,0,0),h.fromValues(0,0,c)];const H=k.createTubeGeometry(d,c,b,16,!1),I=k.createTubeGeometry(d,c,b*r.displayFocusMultiplier,16,!1),w=u(!1,d,b);d=u(!0,d,b);b=q.create();e.fromTranslation(b,c[c.length-1]);e.mul(b,b,e.fromXRotation(m,Math.PI/2));e.mul(b,b,e.fromYRotation(m,Math.PI/2));a&&e.mul(b,b,e.fromXRotation(m,-l));w.transformation=b;d.transformation=b;this.renderObjects=
[new f.RenderObject(H,g.ManipulatorStateFlags.Unfocused),new f.RenderObject(I,g.ManipulatorStateFlags.Focused),new f.RenderObject(w,g.ManipulatorStateFlags.Unfocused),new f.RenderObject(d,g.ManipulatorStateFlags.Focused)];a=h.fromValues(0,v(!0),0);a=A.transformMat4(a,a,b);this.collisionType={type:"line",paths:[[...c,a]]}}_createMaterial(){const a=new F.ColorMaterial({cullFace:D.CullFaceOptions.Back,renderOccluded:E.RenderOccludedFlag.OccludeAndTransparent,isDecoration:!0,writeLinearDepth:!0});this._handles.add(p.watch(()=>
x.toUnitRGBA(this.view.effectiveTheme.accentColor),c=>a.setParameters({color:c}),p.initial));return a}}const m=q.create();n.ArrowManipulator=G;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});