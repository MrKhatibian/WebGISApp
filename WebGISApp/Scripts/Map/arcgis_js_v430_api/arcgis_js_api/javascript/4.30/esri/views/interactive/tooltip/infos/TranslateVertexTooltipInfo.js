// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/quantityUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ./SketchTooltipInfo".split(" "),function(a,b,d,c,h,k,l,e,f){a.TranslateVertexTooltipInfo=class extends f.SketchTooltipInfo{constructor(g){super(g);this.type="translate-vertex";this.distance=d.zeroMeters;this.totalLength=this.area=this.elevation=null}clear(){this.distance=
d.zeroMeters;this.totalLength=this.area=this.elevation=null}};b.__decorate([c.property()],a.TranslateVertexTooltipInfo.prototype,"type",void 0);b.__decorate([c.property()],a.TranslateVertexTooltipInfo.prototype,"distance",void 0);b.__decorate([c.property()],a.TranslateVertexTooltipInfo.prototype,"elevation",void 0);b.__decorate([c.property()],a.TranslateVertexTooltipInfo.prototype,"area",void 0);b.__decorate([c.property()],a.TranslateVertexTooltipInfo.prototype,"totalLength",void 0);a.TranslateVertexTooltipInfo=
b.__decorate([e.subclass("esri.views.interactive.tooltip.infos.TranslateVertexTooltipInfo")],a.TranslateVertexTooltipInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});