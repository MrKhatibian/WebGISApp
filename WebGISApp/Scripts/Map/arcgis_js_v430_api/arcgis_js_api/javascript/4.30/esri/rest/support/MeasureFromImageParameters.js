// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils".split(" "),function(c,h,a,k,e,p,q,l,m,f){var d;a=d=class extends a.JSONSupport{constructor(){super(...arguments);this.geometry=null;this.rasterId=void 0}writeGeometry(b,g,n){null!=b&&(g.geometryType=f.getJsonType(b),
g[n]={...b.toJSON(),spatialReference:void 0})}clone(){const b=k.clone({geometry:this.geometry,rasterId:this.rasterId});return new d(b)}};c.__decorate([e.property({types:h.geometryTypes,json:{name:"fromGeometry",read:f.fromJSON,write:!0}})],a.prototype,"geometry",void 0);c.__decorate([m.writer("geometry")],a.prototype,"writeGeometry",null);c.__decorate([e.property({json:{write:!0}})],a.prototype,"rasterId",void 0);return a=d=c.__decorate([l.subclass("esri.rest.support.MeasureFromImageParameters")],
a)});