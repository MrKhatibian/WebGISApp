// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/TransparencyPassType ../materials/DefaultTechniqueConfiguration".split(" "),function(e,b,f,c,g,h){e.CapType=void 0;(function(d){d[d.BUTT=0]="BUTT";d[d.SQUARE=1]="SQUARE";d[d.ROUND=2]="ROUND";d[d.COUNT=3]="COUNT"})(e.CapType||(e.CapType={}));class a extends h.DefaultTechniqueConfiguration{constructor(){super(...arguments);this.output=f.ShaderOutput.Color;this.capType=
e.CapType.BUTT;this.transparencyPassType=g.TransparencyPassType.NONE;this.stippleOffColorEnabled=this.stippleEnabled=this.draped=this.writeDepth=this.hasPolygonOffset=this.hasSlicePlane=this.occluder=!1;this.stipplePreferContinuous=!0;this.objectAndLayerIdColorInstanced=this.wireframe=this.cullAboveGround=this.multipassEnabled=this.hasOccludees=this.innerColorEnabled=this.falloffEnabled=this.vvOpacity=this.vvColor=this.vvSize=this.applyMarkerOffset=this.roundJoins=!1}}b.__decorate([c.parameter({count:f.ShaderOutput.COUNT})],
a.prototype,"output",void 0);b.__decorate([c.parameter({count:e.CapType.COUNT})],a.prototype,"capType",void 0);b.__decorate([c.parameter({count:g.TransparencyPassType.COUNT})],a.prototype,"transparencyPassType",void 0);b.__decorate([c.parameter()],a.prototype,"occluder",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"hasPolygonOffset",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",void 0);b.__decorate([c.parameter()],
a.prototype,"draped",void 0);b.__decorate([c.parameter()],a.prototype,"stippleEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"stippleOffColorEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"stipplePreferContinuous",void 0);b.__decorate([c.parameter()],a.prototype,"roundJoins",void 0);b.__decorate([c.parameter()],a.prototype,"applyMarkerOffset",void 0);b.__decorate([c.parameter()],a.prototype,"vvSize",void 0);b.__decorate([c.parameter()],a.prototype,"vvColor",void 0);b.__decorate([c.parameter()],
a.prototype,"vvOpacity",void 0);b.__decorate([c.parameter()],a.prototype,"falloffEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"innerColorEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"hasOccludees",void 0);b.__decorate([c.parameter()],a.prototype,"multipassEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveGround",void 0);b.__decorate([c.parameter()],a.prototype,"wireframe",void 0);b.__decorate([c.parameter()],a.prototype,"objectAndLayerIdColorInstanced",
void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"occlusionPass",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasVvInstancing",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasSliceTranslatedView",void 0);e.RibbonLineTechniqueConfiguration=a;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});