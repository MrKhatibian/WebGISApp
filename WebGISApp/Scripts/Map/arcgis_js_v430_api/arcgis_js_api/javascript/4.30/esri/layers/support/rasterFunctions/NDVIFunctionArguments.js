// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./BaseFunctionArguments".split(" "),function(b,c,a,l,m,e,f){var d;a=d=class extends f{constructor(){super(...arguments);this.visibleBandID=0;this.infraredBandID=1;this.scientificOutput=!1}clone(){const {visibleBandID:g,infraredBandID:h,scientificOutput:k}=this;return new d({visibleBandID:g,infraredBandID:h,
scientificOutput:k})}};b.__decorate([c.property({json:{write:!0}})],a.prototype,"visibleBandID",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"infraredBandID",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"scientificOutput",void 0);return a=d=b.__decorate([e.subclass("esri.layers.support.rasterFunctions.NDVIFunctionArguments")],a)});