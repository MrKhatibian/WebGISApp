// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./DataModel ./ServiceDefinition".split(" "),function(b,a,c,h,k,l,d,e,f){a=class extends a.JSONSupport{constructor(g){super(g);this.serviceDefinition=this.dataModel=null}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"url",void 0);b.__decorate([c.property({type:e,json:{write:!0}})],
a.prototype,"dataModel",void 0);b.__decorate([c.property({type:f,json:{write:!0}})],a.prototype,"serviceDefinition",void 0);return a=b.__decorate([d.subclass("esri.rest.knowledgeGraph.KnowledgeGraph")],a)});