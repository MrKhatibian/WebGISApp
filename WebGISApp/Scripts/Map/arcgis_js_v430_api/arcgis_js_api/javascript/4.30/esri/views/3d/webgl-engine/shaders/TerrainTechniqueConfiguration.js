// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/terrain/Overlay.glsl ../core/shaderLibrary/terrain/TileBlendInput ../core/shaderTechnique/ShaderTechniqueConfiguration ../materials/DefaultTechniqueConfiguration".split(" "),function(d,b,e,k,l,f,g,h,c,m){class a extends m.DefaultTechniqueConfiguration{constructor(){super(...arguments);
this.output=e.ShaderOutput.Color;this.overlayMode=g.OverlayMode.Disabled;this.tileBlendInput=h.TileBlendInput.LayerOnly;this.invisible=this.hasCloudsReflections=this.hasScreenSpaceReflections=this.renderOccluded=this.textureFadingEnabled=this.backfaceCullingEnabled=this.hasSlicePlane=this.receiveShadows=this.doublePrecisionRequiresObfuscation=this.spherical=!1;this.opaque=!0;this.receiveAmbientOcclusion=this.screenSizePerspective=this.visualizeNormals=this.tileBorders=!1;this.pbrMode=f.PBRMode.Simplified}}
b.__decorate([c.parameter({count:e.ShaderOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:g.OverlayMode.COUNT})],a.prototype,"overlayMode",void 0);b.__decorate([c.parameter({count:h.TileBlendInput.COUNT})],a.prototype,"tileBlendInput",void 0);b.__decorate([c.parameter()],a.prototype,"spherical",void 0);b.__decorate([c.parameter()],a.prototype,"doublePrecisionRequiresObfuscation",void 0);b.__decorate([c.parameter()],a.prototype,"receiveShadows",void 0);b.__decorate([c.parameter()],
a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"backfaceCullingEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"textureFadingEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"renderOccluded",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSpaceReflections",void 0);b.__decorate([c.parameter()],a.prototype,"hasCloudsReflections",void 0);b.__decorate([c.parameter()],a.prototype,"invisible",void 0);b.__decorate([c.parameter()],a.prototype,"opaque",
void 0);b.__decorate([c.parameter()],a.prototype,"tileBorders",void 0);b.__decorate([c.parameter()],a.prototype,"visualizeNormals",void 0);b.__decorate([c.parameter()],a.prototype,"screenSizePerspective",void 0);b.__decorate([c.parameter()],a.prototype,"receiveAmbientOcclusion",void 0);b.__decorate([c.parameter({count:f.PBRMode.COUNT})],a.prototype,"pbrMode",void 0);b.__decorate([c.parameter({constValue:k.NormalType.Compressed})],a.prototype,"normalType",void 0);b.__decorate([c.parameter({constValue:l.TextureCoordinateAttributeType.Compressed})],
a.prototype,"textureCoordinateType",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"highStepCount",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"useCustomDTRExponentForWater",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"useFillLights",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasColorTexture",void 0);d.TerrainTechniqueConfiguration=a;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});