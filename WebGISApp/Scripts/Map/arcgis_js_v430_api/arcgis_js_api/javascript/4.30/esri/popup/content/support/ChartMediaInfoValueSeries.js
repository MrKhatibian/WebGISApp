// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,g,h,k,e){var d;a=d=class extends a{constructor(f){super(f);this.value=this.tooltip=this.fieldName=this.color=null}clone(){return new d({color:this.color?.clone(),fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};b.__decorate([c.property()],
a.prototype,"color",void 0);b.__decorate([c.property()],a.prototype,"fieldName",void 0);b.__decorate([c.property()],a.prototype,"tooltip",void 0);b.__decorate([c.property()],a.prototype,"value",void 0);return a=d=b.__decorate([e.subclass("esri.popup.content.support.ChartMediaInfoValueSeries")],a)});