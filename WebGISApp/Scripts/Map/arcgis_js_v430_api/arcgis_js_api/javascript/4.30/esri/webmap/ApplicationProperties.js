// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/subclass ../webdoc/applicationProperties/Viewing".split(" "),function(b,a,e,c,k,l,f,g){var d;a=d=class extends a.JSONSupport{constructor(h){super(h);this.viewing=this.offline=this.editing=null}clone(){return new d(e.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))}};b.__decorate([c.property({json:{write:!0}})],
a.prototype,"editing",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"offline",void 0);b.__decorate([c.property({type:g,json:{write:!0}})],a.prototype,"viewing",void 0);return a=d=b.__decorate([f.subclass("esri.webmap.ApplicationProperties")],a)});