// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/tslib.es6","../core/shaderTechnique/ShaderTechniqueConfiguration","../materials/DefaultTechniqueConfiguration"],function(d,b,c,e){class a extends e.DefaultTechniqueConfiguration{constructor(){super(...arguments);this.spherical=this.screenCenterOffsetUnitsEnabled=!1;this.occlusionTestEnabled=!0;this.multipassEnabled=this.hasSlicePlane=this.depthHudAlignStartEnabled=this.depthHudEnabled=this.hasScreenSizePerspective=this.hasVerticalOffset=!1}}b.__decorate([c.parameter()],
a.prototype,"screenCenterOffsetUnitsEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"spherical",void 0);b.__decorate([c.parameter()],a.prototype,"occlusionTestEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"hasVerticalOffset",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSizePerspective",void 0);b.__decorate([c.parameter()],a.prototype,"depthHudEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"depthHudAlignStartEnabled",void 0);b.__decorate([c.parameter()],
a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"multipassEnabled",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"hasSliceInVertexProgram",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"draped",void 0);d.LineCalloutTechniqueConfiguration=a;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});