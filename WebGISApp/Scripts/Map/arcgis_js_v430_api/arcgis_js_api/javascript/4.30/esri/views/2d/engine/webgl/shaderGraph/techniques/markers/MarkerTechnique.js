// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../enums ../FeatureTechnique ../featureTechniqueUtils ../TechniqueType ./MarkerShader".split(" "),function(e,g,h,b,k,l){class m extends h.FeatureTechnique{constructor(){super(...arguments);this.type=k.TechniqueType.Marker;this.shaders={geometry:new l.MarkerShader};this.symbologyPlane=g.FeatureSymbologyDrawOrder.MARKER}render(a,c){const {context:n,painter:d}=a,f=c.instance.getInput();d.setShader({shader:this.shaders.geometry,uniforms:{...b.resolveDynamicUniforms(a,c.target,f.uniforms),
...b.getFeatureUniforms(a,c.target),mosaicInfo:d.textureManager.getMosaicInfo(n,c.textureKey,!0)},defines:{...b.getSelectionDefines(a)},optionalAttributes:f.optionalAttributes,useComputeBuffer:b.isHittest(a)});d.setPipelineState(b.getFeaturePipelineState(a));d.submitDraw(a,c)}}e.MarkerTechnique=m;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});