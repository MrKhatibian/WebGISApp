// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../lib/StencilUtils ../../../../chunks/NativeLine.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(k,h,l,m,n,p,q,d,r,b,c){class f extends n.ShaderTechnique{initializeProgram(a){return new q.Program(a.rctx,f.shader.get().build(this.configuration),p.Default3D)}initializePipeline(){const a=
this.configuration,e=c.separateBlendingParams(b.BlendFactor.SRC_ALPHA,b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA,b.BlendFactor.ONE_MINUS_SRC_ALPHA),g=(t,u=null,v=null)=>c.makePipelineState({blending:u,depthTest:d.depthCompareLess,depthWrite:v,colorWrite:c.defaultColorWriteParams,stencilWrite:a.hasOccludees?d.stencilWriteMaskOn:null,stencilTest:a.hasOccludees?t?d.stencilToolMaskBaseParams:d.stencilBaseAllZerosParams:null});return a.output===l.ShaderOutput.Color?(this._occludeePipelineState=
g(!0,a.transparent?e:null,c.defaultDepthWriteParams),g(!1,a.transparent?e:null,c.defaultDepthWriteParams)):g(!1)}get primitiveType(){return b.PrimitiveType.LINES}getPipeline(a){return a?this._occludeePipelineState:super.getPipeline()}}f.shader=new m.ReloadableShaderModule(r.NativeLine,()=>new Promise((a,e)=>k(["./NativeLine.glsl"],a,e)));h.NativeLineTechnique=f;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});