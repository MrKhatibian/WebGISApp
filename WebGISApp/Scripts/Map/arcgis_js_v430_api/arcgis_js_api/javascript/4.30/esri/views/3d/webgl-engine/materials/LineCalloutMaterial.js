// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/string ../../../../core/libs/gl-matrix-2/factories/vec2f32 ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ../lib/VertexAttribute ./internal/bufferWriterUtils ../shaders/LineCalloutTechnique ../shaders/LineCalloutTechniqueConfiguration".split(" "),function(h,u,d,v,p,w,q,k,c,l,x,y){class m extends q.Material{get uniqueMaterialIdentifier(){return this._uniqueMaterialIdentifier}constructor(a){super(a,
new r);this.produces=new Map([[k.RenderSlot.LINE_CALLOUTS,b=>b===p.ShaderOutput.Color],[k.RenderSlot.LINE_CALLOUTS_HUD_DEPTH,b=>b===p.ShaderOutput.Color]]);this._configuration=new y.LineCalloutTechniqueConfiguration;this._uniqueMaterialIdentifier=m.uniqueMaterialIdentifier(this.parameters)}passParameters(){return this.parameters}getConfiguration(a,b){a=b?.slot!==k.RenderSlot.LINE_CALLOUTS;this._configuration.occlusionTestEnabled=this.parameters.occlusionTest;this._configuration.hasVerticalOffset=
null!=this.parameters.verticalOffset;this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective;this._configuration.depthHudEnabled=a;this._configuration.depthHudAlignStartEnabled=!!this.parameters.depthHUDAlignStart;this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.multipassEnabled=b.multipassEnabled;return this._configuration}intersect(){}createGLMaterial(a){return new z(a)}createBufferWriter(){return new A}validateParameters(a){a=
m.uniqueMaterialIdentifier(a);a!==this._uniqueMaterialIdentifier&&(this._uniqueMaterialIdentifier=a)}static uniqueMaterialIdentifier({renderOccluded:a,isDecoration:b,horizontalScreenOffset:g,color:e,size:f,occlusionTest:B,shaderPolygonOffset:C,depthHUDAlignStart:D,centerOffsetUnits:E,hasSlicePlane:F,screenSizePerspective:G,verticalOffset:n,borderColor:H}){return u.safeToString`${a}:${b}:${g}:[${e}]:${f}:${B}:${C}:${D}:${E}:${F}:${null!=G}:{${n.screenLength}:${n.minWorldLength}:${n.maxWorldLength}}:[${H}]`}}
class z extends w{beginSlot(a){return this.ensureTechnique(x.LineCalloutTechnique,a)}}class r extends q.MaterialParameters{constructor(){super(...arguments);this.horizontalScreenOffset=0;this.color=[0,0,0,1];this.size=1;this.occlusionTest=!1;this.shaderPolygonOffset=1E-5;this.depthHUDAlignStart=!1;this.centerOffsetUnits="world";this.hasSlicePlane=!1}}const I=v.newLayout().vec3f(c.VertexAttribute.POSITION).vec3f(c.VertexAttribute.NORMAL).vec2f(c.VertexAttribute.UV0).vec4f(c.VertexAttribute.CENTEROFFSETANDDISTANCE),
t=[d.fromValues(0,0),d.fromValues(1,0),d.fromValues(0,1),d.fromValues(1,0),d.fromValues(1,1),d.fromValues(0,1)];class A{constructor(){this.vertexBufferLayout=I}elementCount(a){return 6*a.attributes.get(c.VertexAttribute.POSITION).indices.length}write(a,b,g,e,f){l.writePosition(g.attributes.get(c.VertexAttribute.POSITION),a,e.position,f,6);l.writeNormal(g.attributes.get(c.VertexAttribute.NORMAL),b,e.normal,f,6);l.writeBufferVec4(g.attributes.get(c.VertexAttribute.CENTEROFFSETANDDISTANCE),e.centerOffsetAndDistance,
f,6);for(a=0;a<t.length;++a)e.uv0.setVec(f+a,t[a])}}h.LineCalloutMaterial=m;h.Parameters=r;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});