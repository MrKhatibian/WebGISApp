// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../TimeExtent ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils ../../layers/support/source/DataLayerSource ./FullTextSearch ./QuantizationParameters ./spatialRelationships ./StatisticDefinition ../../geometry/SpatialReference ../../geometry/Point".split(" "),
function(b,r,t,k,u,v,c,w,p,x,f,y,z,A,B,C,D,E,q,F){var h;k=new k.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let a=h=class extends u.JSONSupport{static from(d){return y.ensureClass(h,d)}constructor(d){super(d);this.aggregateIds=null;this.cacheHint=void 0;this.compactGeometryEnabled=!1;this.datumTransformation=null;this.defaultSpatialReferenceEnabled=
!1;this.dynamicDataSource=this.distance=void 0;this.geometry=this.gdbVersion=this.fullText=this.formatOf3DObjects=null;this.geometryPrecision=void 0;this.historicMoment=this.having=this.groupByFieldsForStatistics=null;this.maxAllowableOffset=void 0;this.maxRecordCountFactor=1;this.multipatchOption=null;this.num=void 0;this.resultType=this.relationParameter=this.rangeValues=this.quantizationParameters=this.pixelSize=this.parameterValues=this.outStatistics=this.outSpatialReference=this.outFields=this.orderByFields=
this.objectIds=null;this.returnDistinctValues=this.returnCentroid=!1;this.returnExceededLimitFeatures=!0;this.returnQueryGeometry=this.returnGeometry=!1;this.returnZ=this.returnM=void 0;this.sourceSpatialReference=null;this.spatialRelationship="intersects";this.start=void 0;this.timeExtent=this.text=this.sqlFormat=null;this.timeReferenceUnknownClient=!1;this.where=this.units=null}castDatumTransformation(d){return"number"===typeof d||"object"===typeof d?d:null}writeHistoricMoment(d,e){e.historicMoment=
d&&d.getTime()}writeParameterValues(d,e){if(d){const l={};for(const m in d){const g=d[m];Array.isArray(g)?l[m]=g.map(n=>n instanceof Date?n.getTime():n):l[m]=g instanceof Date?g.getTime():g}e.parameterValues=l}}writeStart(d,e){e.resultOffset=this.start;e.resultRecordCount=this.num||10;e.where="1\x3d1"}writeWhere(d,e){e.where=d||"1\x3d1"}clone(){return new h(v.clone({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,
defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:null!=this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,
num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,
returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};a.MAX_MAX_RECORD_COUNT_FACTOR=5;b.__decorate([c.property({json:{write:!0}})],
a.prototype,"aggregateIds",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"cacheHint",void 0);b.__decorate([c.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"compactGeometryEnabled",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"datumTransformation",void 0);b.__decorate([w.cast("datumTransformation")],a.prototype,"castDatumTransformation",null);b.__decorate([c.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"defaultSpatialReferenceEnabled",
void 0);b.__decorate([c.property({type:Number,json:{write:{overridePolicy(d){return{enabled:0<d}}}}})],a.prototype,"distance",void 0);b.__decorate([c.property({type:A.DataLayerSource,json:{write:!0}})],a.prototype,"dynamicDataSource",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"formatOf3DObjects",void 0);b.__decorate([c.property({type:[B],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.fullText&&0<this.fullText.length}}}}})],a.prototype,"fullText",
void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);b.__decorate([c.property({types:r.geometryTypes,json:{read:z.fromJSON,write:!0}})],a.prototype,"geometry",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"groupByFieldsForStatistics",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"having",void 0);
b.__decorate([c.property({type:Date})],a.prototype,"historicMoment",void 0);b.__decorate([f.writer("historicMoment")],a.prototype,"writeHistoricMoment",null);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);b.__decorate([c.property({type:Number,cast(d){return 1>d?1:d>a.MAX_MAX_RECORD_COUNT_FACTOR?a.MAX_MAX_RECORD_COUNT_FACTOR:d},json:{write:{overridePolicy(d){return{enabled:1<d}}}}})],a.prototype,"maxRecordCountFactor",void 0);b.__decorate([c.property({type:["xyFootprint"],
json:{write:!0}})],a.prototype,"multipatchOption",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],a.prototype,"num",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"objectIds",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"orderByFields",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"outFields",void 0);b.__decorate([c.property({type:q,json:{name:"outSR",write:!0}})],a.prototype,
"outSpatialReference",void 0);b.__decorate([c.property({type:[E],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&0<this.outStatistics.length}}}}})],a.prototype,"outStatistics",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"parameterValues",void 0);b.__decorate([f.writer("parameterValues")],a.prototype,"writeParameterValues",null);b.__decorate([c.property({type:F,json:{write:!0}})],a.prototype,"pixelSize",void 0);b.__decorate([c.property({type:C,
json:{write:!0}})],a.prototype,"quantizationParameters",void 0);b.__decorate([c.property({type:[Object],json:{write:!0}})],a.prototype,"rangeValues",void 0);b.__decorate([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],a.prototype,"relationParameter",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"resultType",void 0);b.__decorate([c.property({type:Boolean,
json:{default:!1,write:!0}})],a.prototype,"returnCentroid",void 0);b.__decorate([c.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"returnDistinctValues",void 0);b.__decorate([c.property({type:Boolean,json:{default:!0,write:!0}})],a.prototype,"returnExceededLimitFeatures",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnGeometry",void 0);b.__decorate([c.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"returnQueryGeometry",void 0);
b.__decorate([c.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"returnM",void 0);b.__decorate([c.property({type:Boolean,json:{write:{overridePolicy(d){return{enabled:d}}}}})],a.prototype,"returnZ",void 0);b.__decorate([c.property({type:q,json:{write:!0}})],a.prototype,"sourceSpatialReference",void 0);b.__decorate([p.enumeration(D.spatialRelKebabDict,{ignoreUnknown:!1,name:"spatialRel"})],a.prototype,"spatialRelationship",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"resultOffset"}}})],
a.prototype,"start",void 0);b.__decorate([f.writer("start"),f.writer("num")],a.prototype,"writeStart",null);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"sqlFormat",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"text",void 0);b.__decorate([c.property({type:t,json:{write:!0}})],a.prototype,"timeExtent",void 0);b.__decorate([c.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"timeReferenceUnknownClient",void 0);b.__decorate([p.enumeration(k,
{ignoreUnknown:!1}),c.property({json:{write:{overridePolicy(d){return{enabled:!!d&&null!=this.distance&&0<this.distance}}}}})],a.prototype,"units",void 0);b.__decorate([c.property({type:String,json:{write:{overridePolicy(d){return{enabled:null!=d||null!=this.start&&0<this.start}}}}})],a.prototype,"where",void 0);b.__decorate([f.writer("where")],a.prototype,"writeWhere",null);return a=h=b.__decorate([x.subclass("esri.rest.support.Query")],a)});