// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/mathUtils ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../geometry/support/lineSegment ../../core/shaderModules/interfaces ../../core/shaderTechnique/ReloadableShaderModule ../../core/shaderTechnique/ShaderTechnique ../../lib/DefaultVertexAttributeLocations ../../lib/Program ../../../../../chunks/Laserlines.glsl ../../../../webgl/enums ../../../../webgl/renderState".split(" "),function(h,b,k,a,f,l,m,n,p,q,r,g,c){class t extends l.NoParameters{constructor(){super(...arguments);
this.innerColor=a.fromValues(1,1,1);this.innerWidth=1;this.glowColor=a.fromValues(1,.5,0);this.glowFalloff=this.glowWidth=8;this.globalAlpha=.75;this.globalAlphaContrastBoost=2;this.angleCutoff=k.deg2rad(6);this.pointDistanceOrigin=a.create();this.pointDistanceTarget=a.create();this.lineVerticalPlaneSegment=f.create();this.intersectsLineSegment=f.create();this.intersectsLineRadius=3;this.heightManifoldTarget=a.create();this.lineStartWorld=a.create();this.lineEndWorld=a.create()}}class d extends n.ShaderTechnique{initializeProgram(e){return new q.Program(e.rctx,
d.shader.get().build(this.configuration),p.Default3D)}initializePipeline(){return c.makePipelineState({blending:c.simpleBlendingParams(g.BlendFactor.ONE,g.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:c.defaultColorWriteParams})}}d.shader=new m.ReloadableShaderModule(r.LaserlinesShader,()=>new Promise((e,u)=>h(["../../shaders/Laserlines.glsl"],e,u)));b.LaserlinePassParameters=t;b.LaserlineTechnique=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});