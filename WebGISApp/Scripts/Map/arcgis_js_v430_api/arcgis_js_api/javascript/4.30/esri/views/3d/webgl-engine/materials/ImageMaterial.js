// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry/support/buffer/BufferView ../core/shaderLibrary/ShaderOutput ../lib/basicInterfaces ../lib/GLTextureMaterial ../lib/Material ../lib/OrderIndependentTransparency ../lib/RenderSlot ../lib/Util ../lib/VertexAttribute ./DefaultBufferWriter ./DefaultLayouts ./TriangleMaterial ./internal/bufferWriterUtils ../shaders/ImageMaterialTechnique".split(" "),function(g,r,c,t,u,v,w,d,x,k,y,z,A,l,h){class B extends A.TriangleMaterial{constructor(a){super(a,new m);this.supportsEdges=
!0;this.produces=new Map([[d.RenderSlot.OPAQUE_MATERIAL,b=>c.isOIDorHighlight(b)||c.isColor(b)&&!this.parameters.transparent],[d.RenderSlot.TRANSPARENT_MATERIAL,b=>c.isColor(b)&&this.parameters.transparent&&this.parameters.writeDepth],[d.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,b=>c.isColor(b)&&this.parameters.transparent&&!this.parameters.writeDepth],[d.RenderSlot.DRAPED_MATERIAL,b=>c.isColor(b)||c.isOIDorHighlight(b)]]);this._vertexAttributeLocations=h.vertexAttributeLocations;this._configuration=
new h.ImageMaterialTechniqueConfiguration}getConfiguration(a,b){this._configuration.output=a;this._configuration.cullFace=this.parameters.cullFace;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.transparent=this.parameters.transparent;this._configuration.writeDepth=this.parameters.writeDepth;this._configuration.hasOccludees=this.parameters.hasOccludees;this._configuration.transparencyPassType=b.transparencyPassType;this._configuration.enableOffset=b.camera.relativeElevation<
w.OITPolygonOffsetLimit;this._configuration.multipassEnabled=b.multipassEnabled;this._configuration.cullAboveGround=b.multipassTerrain.cullAboveGround;this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation;return this._configuration}createGLMaterial(a){return new C(a)}createBufferWriter(){const a=z.PositionUVLayout.clone();this.parameters.perspectiveInterpolation&&a.f32(k.VertexAttribute.PERSPECTIVEDIVIDE);return new D(a)}}class C extends u.GLTextureMaterial{constructor(a){super({...a,
...a.material.parameters})}_updateParameters(a){this.updateTexture(this._material.parameters.textureId);this._material.setParameters(this.textureBindParameters);return this.ensureTechnique(h.ImageMaterialTechnique,a)}_updateOccludeeState(a){a.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:a.hasOccludees}),this._updateParameters(a))}beginSlot(a){this._output===c.ShaderOutput.Color&&this._updateOccludeeState(a);return this._updateParameters(a)}}class D extends y.DefaultBufferWriter{write(a,
b,E,n,p){for(const e of this.vertexBufferLayout.fields.keys()){const f=E.attributes.get(e);if(f)if(e===k.VertexAttribute.PERSPECTIVEDIVIDE){x.assert(1===f.size);const q=n.getField(e,r.BufferViewFloat);q&&l.writeBufferFloat(f,q,p)}else l.writeDefaultAttribute(e,f,a,b,n,p)}}}class m extends v.MaterialParameters{constructor(){super(...arguments);this.transparent=!1;this.writeDepth=!0;this.hasSlicePlane=!1;this.cullFace=t.CullFaceOptions.None;this.hasOccludees=!1;this.opacity=1;this.textureId=null;this.initTextureTransparent=
!0;this.perspectiveInterpolation=!1}}g.ImageMaterial=B;g.Parameters=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});