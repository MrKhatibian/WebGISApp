// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/deprecate ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/ensureType ../../geometry/Point ./DimensionalDefinition ./RasterFunction".split(" "),function(c,n,b,t,f,p,e,u,k,v,w,q,x,
y,r){var l;const g=b.strict()({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),m=b.strict()({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"});b=l=class extends t.JSONSupport{constructor(a){super(a);this.ascending=!0;this.where=this.viewpoint=this.sortValue=this.sortField=
this.operation=this.objectIds=this.multidimensionalDefinition=this.method=this.lockRasterIds=this.itemRasterFunction=null}readAscending(a,d){return null!=d.ascending?d.ascending:null!=d.sortAscending?d.sortAscending:!0}get itemRenderingRule(){n.deprecatedProperty(p.getLogger(this),"itemRenderingRule",{replacement:"itemRasterFunction",version:"4.27",warnOnce:!0});return this._get("itemRasterFunction")}set itemRenderingRule(a){n.deprecatedProperty(p.getLogger(this),"itemRenderingRule",{replacement:"itemRasterFunction",
version:"4.27",warnOnce:!0});this._set("itemRasterFunction",a)}readMethod(a,d){a=d.mosaicMethod||d.defaultMosaicMethod;switch(a?a.toLowerCase().replace("esrimosaic",""):""){case "byattribute":case "attribute":a="esriMosaicAttribute";break;case "lockraster":a="esriMosaicLockRaster";break;case "center":a="esriMosaicCenter";break;case "northwest":a="esriMosaicNorthwest";break;case "nadir":a="esriMosaicNadir";break;case "viewpoint":a="esriMosaicViewpoint";break;case "seamline":a="esriMosaicSeamline";
break;case "none":a="esriMosaicNone";break;default:a="esriMosaicNone"}return m.fromJSON(a)}writeMultidimensionalDefinition(a,d,z){null!=a&&(a=a.filter(({variableName:h,dimensionName:A})=>h&&"*"!==h||A),a.length&&(d[z]=a.map(h=>h.toJSON())))}readOperation(a,d){a=d.mosaicOperation;d=d.mosaicOperator?.toLowerCase();d=a||(d?g.toJSON(d):null);return g.fromJSON(d)||"first"}castSortValue(a){return null==a||"string"===typeof a||"number"===typeof a?a:`${a}`}clone(){return new l({ascending:this.ascending,itemRasterFunction:f.clone(this.itemRasterFunction),
lockRasterIds:f.clone(this.lockRasterIds),method:this.method,multidimensionalDefinition:f.clone(this.multidimensionalDefinition),objectIds:f.clone(this.objectIds),operation:this.operation,sortField:this.sortField,sortValue:this.sortValue,viewpoint:f.clone(this.viewpoint),where:this.where})}};c.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"ascending",void 0);c.__decorate([k.reader("ascending",["ascending","sortAscending"])],b.prototype,"readAscending",null);c.__decorate([e.property({type:r,
json:{name:"itemRenderingRule",write:!0}})],b.prototype,"itemRasterFunction",void 0);c.__decorate([e.property({type:r})],b.prototype,"itemRenderingRule",null);c.__decorate([e.property({type:[q.Integer],json:{write:{overridePolicy(){return{enabled:"lock-raster"===this.method}}}}})],b.prototype,"lockRasterIds",void 0);c.__decorate([e.property({type:String,json:{type:m.jsonValues,write:{target:"mosaicMethod",writer:m.write}}})],b.prototype,"method",void 0);c.__decorate([k.reader("method",["mosaicMethod",
"defaultMosaicMethod"])],b.prototype,"readMethod",null);c.__decorate([e.property({type:[y],json:{write:!0}})],b.prototype,"multidimensionalDefinition",void 0);c.__decorate([w.writer("multidimensionalDefinition")],b.prototype,"writeMultidimensionalDefinition",null);c.__decorate([e.property({type:[q.Integer],json:{name:"fids",write:!0}})],b.prototype,"objectIds",void 0);c.__decorate([e.property({json:{type:g.jsonValues,read:{reader:g.read},write:{target:"mosaicOperation",writer:g.write}}})],b.prototype,
"operation",void 0);c.__decorate([k.reader("operation",["mosaicOperation","mosaicOperator"])],b.prototype,"readOperation",null);c.__decorate([e.property({type:String,json:{write:{overridePolicy(){return{enabled:"attribute"===this.method}}}}})],b.prototype,"sortField",void 0);c.__decorate([e.property({type:[String,Number],json:{write:{allowNull:!0,overridePolicy(){return{enabled:"attribute"===this.method,allowNull:!0}}}}})],b.prototype,"sortValue",void 0);c.__decorate([u.cast("sortValue")],b.prototype,
"castSortValue",null);c.__decorate([e.property({type:x,json:{write:!0}})],b.prototype,"viewpoint",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"where",void 0);return b=l=c.__decorate([v.subclass("esri.layers.support.MosaicRule")],b)});