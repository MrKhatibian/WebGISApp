// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../lib/GLTextureMaterial ../lib/Material ../lib/RenderSlot ../lib/VertexAttribute ./VisualVariablePassParameters ../shaders/LineMarkerTechnique ../shaders/LineMarkerTechniqueConfiguration ../shaders/RibbonLineTechniqueConfiguration".split(" "),function(z,v,B,K,l,L,w,m,f,M,C,x,D){class N extends w.Material{constructor(b){super(b,new E);
this.produces=new Map([[m.RenderSlot.OPAQUE_MATERIAL,a=>a===l.ShaderOutput.Highlight||l.isColor(a)&&this.parameters.renderOccluded===w.RenderOccludedFlag.OccludeAndTransparentStencil],[m.RenderSlot.OPAQUE_NO_SSAO_DEPTH,a=>l.isDepth(a)],[m.RenderSlot.OCCLUDER_MATERIAL,a=>l.isColorHighlightOrDepth(a)&&this.parameters.renderOccluded===w.RenderOccludedFlag.OccludeAndTransparentStencil],[m.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL,a=>l.isColorHighlightOrDepth(a)&&this.parameters.renderOccluded===w.RenderOccludedFlag.OccludeAndTransparentStencil],
[m.RenderSlot.TRANSPARENT_MATERIAL,a=>l.isColor(a)&&this.parameters.writeDepth],[m.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>l.isColor(a)&&!this.parameters.writeDepth],[m.RenderSlot.DRAPED_MATERIAL,a=>a===l.ShaderOutput.Color||a===l.ShaderOutput.Highlight]]);this._vertexAttributeLocations=C.vertexAttributeLocations;this._configuration=new x.LineMarkerTechniqueConfiguration;this._layout=this.createLayout()}getConfiguration(b,a){this._configuration.output=b;this._configuration.space=a.slot===
m.RenderSlot.DRAPED_MATERIAL?x.LineMarkerSpace.Draped:this.parameters.worldSpace?x.LineMarkerSpace.World:x.LineMarkerSpace.Screen;this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments;this._configuration.hasCap=this.parameters.cap!==D.CapType.BUTT;this._configuration.anchor=this.parameters.anchor;this._configuration.hasTip=this.parameters.hasTip;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.hasOccludees=this.parameters.hasOccludees;this._configuration.writeDepth=
this.parameters.writeDepth;this._configuration.vvSize=!!this.parameters.vvSize;this._configuration.vvColor=!!this.parameters.vvColor;this._configuration.vvOpacity=!!this.parameters.vvOpacity;this._configuration.occluder=this.parameters.renderOccluded===w.RenderOccludedFlag.OccludeAndTransparentStencil;this._configuration.transparencyPassType=a.transparencyPassType;this._configuration.multipassEnabled=a.multipassEnabled;this._configuration.cullAboveGround=a.multipassTerrain.cullAboveGround;return this._configuration}intersect(){}createLayout(){const b=
K.newLayout().vec3f(f.VertexAttribute.POSITION).vec3f(f.VertexAttribute.PREVPOSITION).vec2f(f.VertexAttribute.UV0);this.parameters.worldSpace&&b.vec3f(f.VertexAttribute.NORMAL);this.parameters.vvSize?b.f32(f.VertexAttribute.SIZEFEATUREATTRIBUTE):b.f32(f.VertexAttribute.SIZE);this.parameters.vvColor?b.f32(f.VertexAttribute.COLORFEATUREATTRIBUTE):b.vec4f(f.VertexAttribute.COLOR);this.parameters.vvOpacity&&b.f32(f.VertexAttribute.OPACITYFEATUREATTRIBUTE);return b}createBufferWriter(){return new O(this._layout,
this.parameters)}createGLMaterial(b){return new P(b)}}class P extends L.GLTextureMaterial{constructor(){super(...arguments);this._markerPrimitive=null}dispose(){super.dispose();this._markerTextures.release(this._markerPrimitive);this._markerPrimitive=null}_updateParameters(b){const a=this._material.parameters.markerPrimitive;a!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(a,this._markerPrimitive)}),this._markerPrimitive=a);this._material.setParameters(this.textureBindParameters);
return this.ensureTechnique(C.LineMarkerTechnique,b)}_updateOccludeeState(b){b.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:b.hasOccludees})}beginSlot(b){this._output===l.ShaderOutput.Color&&this._updateOccludeeState(b);return this._updateParameters(b)}}class E extends M.VisualVariablePassParameters{constructor(){super(...arguments);this.width=0;this.color=[1,1,1,1];this.markerPrimitive="arrow";this.placement="end";this.cap=D.CapType.BUTT;this.anchor=
x.LineMarkerAnchor.Center;this.hideOnShortSegments=this.worldSpace=this.hasTip=!1;this.writeDepth=!0;this.hasOccludees=this.vvFastUpdate=this.hasSlicePlane=!1;this.markerTexture=null}}class O{constructor(b,a){this.vertexBufferLayout=b;this._parameters=a}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(b,a,g,p,Q){const n=g.attributes.get(f.VertexAttribute.POSITION).data,F=n.length/3;let y=[1,0,0];a=g.attributes.get(f.VertexAttribute.NORMAL);this._parameters.worldSpace&&null!=
a&&(y=a.data);let G=1,H=0;this._parameters.vvSize?H=g.attributes.get(f.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0]:g.attributes.has(f.VertexAttribute.SIZE)&&(G=g.attributes.get(f.VertexAttribute.SIZE).data[0]);let q=[1,1,1,1],I=0;this._parameters.vvColor?I=g.attributes.get(f.VertexAttribute.COLORFEATUREATTRIBUTE).data[0]:g.attributes.has(f.VertexAttribute.COLOR)&&(q=g.attributes.get(f.VertexAttribute.COLOR).data);let J=0;this._parameters.vvOpacity&&(J=g.attributes.get(f.VertexAttribute.OPACITYFEATUREATTRIBUTE).data[0]);
const d=new Float32Array(p.buffer);let e=this.vertexBufferLayout.stride/4*Q;const t=(c,r,h,k)=>{d[e++]=c[0];d[e++]=c[1];d[e++]=c[2];d[e++]=r[0];d[e++]=r[1];d[e++]=r[2];d[e++]=h[0];d[e++]=h[1];this._parameters.worldSpace&&(d[e++]=y[0],d[e++]=y[1],d[e++]=y[2]);this._parameters.vvSize?d[e++]=H:d[e++]=G;this._parameters.vvColor?d[e++]=I:(c=Math.min(4*k,q.length-4),d[e++]=q[c],d[e++]=q[c+1],d[e++]=q[c+2],d[e++]=q[c+3]);this._parameters.vvOpacity&&(d[e++]=J)};let A;(function(c){c[c.ASCENDING=1]="ASCENDING";
c[c.DESCENDING=-1]="DESCENDING"})(A||={});g=(c,r)=>{const h=v.set(R,n[3*c],n[3*c+1],n[3*c+2]),k=S;let u=c+r;do v.set(k,n[3*u],n[3*u+1],n[3*u+2]),u+=r;while(v.equals(h,k)&&0<=u&&u<F);b&&(v.transformMat4(h,h,b),v.transformMat4(k,k,b));t(h,k,[-1,-1],c);t(h,k,[1,-1],c);t(h,k,[1,1],c);t(h,k,[-1,-1],c);t(h,k,[1,1],c);t(h,k,[-1,1],c)};p=this._parameters.placement;"begin"!==p&&"begin-end"!==p||g(0,A.ASCENDING);"end"!==p&&"begin-end"!==p||g(F-1,A.DESCENDING)}}const R=B.create(),S=B.create();z.LineMarkerMaterial=
N;z.Parameters=E;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});