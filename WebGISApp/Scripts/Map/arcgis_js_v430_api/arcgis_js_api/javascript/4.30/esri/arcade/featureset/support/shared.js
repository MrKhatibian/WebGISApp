// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../ArcadeDate ../../../core/sql/DateOnly ../../../core/sql/TimeOnly ../../../geometry/Extent ../../../layers/support/Field ../../../chunks/datetime".split(" "),function(b,t,u,v,w,x,y){function k(a){return a instanceof Date}function l(a){return a instanceof t.ArcadeDate}function n(a){switch(a.type){case "catalog":case "feature":case "oriented-imagery":case "subtype-group":return!0;default:return!1}}b.FeatureServiceDatabaseType=void 0;(function(a){a[a.Standardised=0]="Standardised";
a[a.StandardisedNoInterval=1]="StandardisedNoInterval";a[a.SqlServer=2]="SqlServer";a[a.Oracle=3]="Oracle";a[a.Postgres=4]="Postgres";a[a.PGDB=5]="PGDB";a[a.FILEGDB=6]="FILEGDB";a[a.NotEvaluated=7]="NotEvaluated"})(b.FeatureServiceDatabaseType||(b.FeatureServiceDatabaseType={}));b.IdState=void 0;(function(a){a[a.InFeatureSet=0]="InFeatureSet";a[a.NotInFeatureSet=1]="NotInFeatureSet";a[a.Unknown=2]="Unknown"})(b.IdState||(b.IdState={}));b.callback=function(a,c){return function(){try{a.apply(null,arguments)}catch(g){c.reject(g)}}};
b.cloneAttributes=function(a){const c={};for(const g in a)c[g]=a[g];return c};b.cloneField=function(a){return x.fromJSON(a.toJSON())};b.convertLinearUnitsToCode=function(a){if(null==a)return null;if("number"===typeof a||"number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":return 9001;case "miles":case "mile":return 9093;case "kilometers":case "kilometer":case "km":return 9036}return null};b.convertSquareUnitsToCode=function(a){if(null==a)return null;if("number"===typeof a)return a;
switch(a.toLowerCase()){case "meters":case "meter":return 109404;case "miles":case "mile":return 109439;case "kilometers":case "kilometer":case "km":return 109414}return null};b.defaultMaxRecords=1E3;b.equalityTest=function(a,c){return a===c?!0:(k(a)||l(a))&&(k(c)||l(c))?a.getTime()===c.getTime():!1};b.errback=function(a){return function(c){a.reject(c)}};b.esriFieldToJson=function(a){return a.toJSON?a.toJSON():a};b.extractServiceUrl=function(a){if(void 0===a)return"";a=a.replace(/\/featureserver\/[0-9]*/i,
"/FeatureServer");a=a.replace(/\/mapserver\/[0-9]*/i,"/MapServer");return a=a.split("?")[0]};b.isArcadeDate=l;b.isArcadeDateOnly=function(a){return a instanceof u.DateOnly};b.isArcadeTime=function(a){return a instanceof v.TimeOnly};b.isArray=function(a){return Array.isArray(a)};b.isBoolean=function(a){return"boolean"===typeof a};b.isDate=k;b.isLuxonDate=function(a){return a instanceof y.DateTime};b.isNumber=function(a){return"number"===typeof a};b.isString=function(a){return"string"===typeof a||a instanceof
String};b.isSupportedLayer=function(a){switch(a.type){case "catalog-footprint":case "subtype-sublayer":return!0;default:return n(a)}};b.isSupportedSourceLayer=n;b.layerFieldEsriConstants={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",
oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",
esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};b.layerGeometryEsriConstants=
{point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"};b.layerGeometryEsriRestConstants={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",
esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"};b.sameGeomType=function(a,c){return a===c||"point"===a&&"esriGeometryPoint"===c||"polyline"===a&&"esriGeometryPolyline"===c||"polygon"===a&&"esriGeometryPolygon"===c||"extent"===a&&"esriGeometryEnvelope"===c||"multipoint"===a&&"esriGeometryMultipoint"===c||"point"===c&&"esriGeometryPoint"===a||"polyline"===c&&"esriGeometryPolyline"===
a||"polygon"===c&&"esriGeometryPolygon"===a||"extent"===c&&"esriGeometryEnvelope"===a||"multipoint"===c&&"esriGeometryMultipoint"===a?!0:!1};b.shapeExtent=function(a){if(null==a)return null;switch(a.type){case "polygon":case "multipoint":case "polyline":return a.extent;case "point":return new w({xmin:a.x,ymin:a.y,xmax:a.x,ymax:a.y,spatialReference:a.spatialReference});case "extent":return a}return null};b.stableStringify=function(a,c){c||={};"function"===typeof c&&(c={cmp:c});const g="boolean"===
typeof c.cycles?c.cycles:!1,A=c.cmp&&function(z){return function(d){return function(h,e){return z({key:h,value:d[h]},{key:e,value:d[e]})}}}(c.cmp),m=[];return function h(d){d?.toJSON&&"function"===typeof d.toJSON&&(d=d.toJSON());if(void 0!==d){if("number"===typeof d)return isFinite(d)?""+d:"null";if("object"!==typeof d)return JSON.stringify(d);var e;if(Array.isArray(d)){var f="[";for(e=0;e<d.length;e++)e&&(f+=","),f+=h(d[e])||"null";return f+"]"}if(null===d)return"null";if(m.includes(d)){if(g)return JSON.stringify("__cycle__");
throw new TypeError("Converting circular structure to JSON");}var B=m.push(d)-1,p=Object.keys(d).sort(A?.(d));f="";for(e=0;e<p.length;e++){const q=p[e],r=h(d[q]);r&&(f&&(f+=","),f+=JSON.stringify(q)+":"+r)}m.splice(B,1);return"{"+f+"}"}}(a)};b.toEsriGeometryType=function(a){switch(a){case "point":return"esriGeometryPoint";case "polygon":return"esriGeometryPolygon";case "multipoint":return"esriGeometryMultipoint";case "polyline":return"esriGeometryPolyline";default:return"esriGeometryPoint"}};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});