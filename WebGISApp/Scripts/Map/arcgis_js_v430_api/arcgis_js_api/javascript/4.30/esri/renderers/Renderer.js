// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/jsonMap ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./support/AuthoringInfo".split(" "),function(e,b,a,f,k,l,m,g,h){b=new b.JSONMap({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});a=class extends a.JSONSupport{constructor(c){super(c);
this.type=this.authoringInfo=null}async getRequiredFields(c){if(!this.collectRequiredFields)return[];const d=new Set;await this.collectRequiredFields(d,c);return Array.from(d).sort()}getSymbol(c,d){}async getSymbolAsync(c,d){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};e.__decorate([f.property({type:h,json:{write:!0}})],a.prototype,"authoringInfo",void 0);e.__decorate([f.property({type:b.apiValues,readOnly:!0,json:{type:b.jsonValues,
read:!1,write:{writer:b.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0);return a=e.__decorate([g.subclass("esri.renderers.Renderer")],a)});