// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/TransparencyPassType ../materials/DefaultTechniqueConfiguration".split(" "),function(e,b,f,g,h,k,l,c,d,m,n){class a extends n.DefaultTechniqueConfiguration{constructor(){super(...arguments);
this.output=f.ShaderOutput.Color;this.alphaDiscardMode=d.AlphaDiscardMode.Opaque;this.doubleSidedMode=k.NormalsDoubleSidedMode.None;this.pbrMode=l.PBRMode.Disabled;this.cullFace=d.CullFaceOptions.None;this.transparencyPassType=m.TransparencyPassType.NONE;this.normalType=g.NormalType.Attribute;this.textureCoordinateType=h.TextureCoordinateAttributeType.None;this.customDepthTest=d.DepthTestFunction.Less;this.hasSlicePlane=this.hasVerticalOffset=this.hasSymbolColors=this.hasVertexColors=this.spherical=
!1;this.hasSliceHighlight=!0;this.doublePrecisionRequiresObfuscation=this.instancedDoublePrecision=this.objectAndLayerIdColorInstanced=this.instancedColor=this.instanced=this.textureAlphaPremultiplied=this.receiveAmbientOcclusion=this.receiveShadows=this.vvColor=this.vvSize=this.offsetBackfaces=this.hasModelTransformation=this.multipassEnabled=this.hasOccludees=this.hasVertexTangents=this.hasScreenSizePerspective=this.hasNormalTexture=this.hasOcclusionTexture=this.hasEmissionTexture=this.hasMetallicRoughnessTexture=
this.hasColorTexture=!1;this.writeDepth=!0;this.transparent=!1;this.enableOffset=!0;this.hasMetallicRoughnessTextureTransform=this.hasOcclusionTextureTransform=this.hasNormalTextureTransform=this.hasEmissionTextureTransform=this.hasColorTextureTransform=this.snowCover=this.cullAboveGround=!1}}b.__decorate([c.parameter({count:f.ShaderOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:d.AlphaDiscardMode.COUNT})],a.prototype,"alphaDiscardMode",void 0);b.__decorate([c.parameter({count:k.NormalsDoubleSidedMode.COUNT})],
a.prototype,"doubleSidedMode",void 0);b.__decorate([c.parameter({count:l.PBRMode.COUNT})],a.prototype,"pbrMode",void 0);b.__decorate([c.parameter({count:d.CullFaceOptions.COUNT})],a.prototype,"cullFace",void 0);b.__decorate([c.parameter({count:m.TransparencyPassType.COUNT})],a.prototype,"transparencyPassType",void 0);b.__decorate([c.parameter({count:g.NormalType.COUNT})],a.prototype,"normalType",void 0);b.__decorate([c.parameter({count:h.TextureCoordinateAttributeType.COUNT})],a.prototype,"textureCoordinateType",
void 0);b.__decorate([c.parameter({count:d.DepthTestFunction.COUNT})],a.prototype,"customDepthTest",void 0);b.__decorate([c.parameter()],a.prototype,"spherical",void 0);b.__decorate([c.parameter()],a.prototype,"hasVertexColors",void 0);b.__decorate([c.parameter()],a.prototype,"hasSymbolColors",void 0);b.__decorate([c.parameter()],a.prototype,"hasVerticalOffset",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"hasSliceHighlight",void 0);
b.__decorate([c.parameter()],a.prototype,"hasColorTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasMetallicRoughnessTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasEmissionTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasOcclusionTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasNormalTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSizePerspective",void 0);b.__decorate([c.parameter()],a.prototype,"hasVertexTangents",void 0);b.__decorate([c.parameter()],
a.prototype,"hasOccludees",void 0);b.__decorate([c.parameter()],a.prototype,"multipassEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"hasModelTransformation",void 0);b.__decorate([c.parameter()],a.prototype,"offsetBackfaces",void 0);b.__decorate([c.parameter()],a.prototype,"vvSize",void 0);b.__decorate([c.parameter()],a.prototype,"vvColor",void 0);b.__decorate([c.parameter()],a.prototype,"receiveShadows",void 0);b.__decorate([c.parameter()],a.prototype,"receiveAmbientOcclusion",void 0);
b.__decorate([c.parameter()],a.prototype,"textureAlphaPremultiplied",void 0);b.__decorate([c.parameter()],a.prototype,"instanced",void 0);b.__decorate([c.parameter()],a.prototype,"instancedColor",void 0);b.__decorate([c.parameter()],a.prototype,"objectAndLayerIdColorInstanced",void 0);b.__decorate([c.parameter()],a.prototype,"instancedDoublePrecision",void 0);b.__decorate([c.parameter()],a.prototype,"doublePrecisionRequiresObfuscation",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",
void 0);b.__decorate([c.parameter()],a.prototype,"transparent",void 0);b.__decorate([c.parameter()],a.prototype,"enableOffset",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveGround",void 0);b.__decorate([c.parameter()],a.prototype,"snowCover",void 0);b.__decorate([c.parameter()],a.prototype,"hasColorTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasEmissionTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasNormalTextureTransform",void 0);b.__decorate([c.parameter()],
a.prototype,"hasOcclusionTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasMetallicRoughnessTextureTransform",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"occlusionPass",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasVvInstancing",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"useCustomDTRExponentForWater",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"supportsTextureAtlas",void 0);b.__decorate([c.parameter({constValue:!0})],
a.prototype,"useFillLights",void 0);e.DefaultMaterialTechniqueConfiguration=a;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});