// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../Extent ../Geometry ../Multipoint ../Point ../Polygon ../Polyline".split(" "),function(b,h,p,k,l,m,n){function c(a){return void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax}function d(a){return void 0!==a.points}function e(a){return void 0!==a.x&&void 0!==a.y}function f(a){return void 0!==a.paths}function g(a){return void 0!==a.rings}const q={esriGeometryPoint:l,esriGeometryPolyline:n,esriGeometryPolygon:m,esriGeometryEnvelope:h,esriGeometryMultipoint:k};b.fromJSON=
function(a){return null==a?null:a instanceof p?a:e(a)?l.fromJSON(a):f(a)?n.fromJSON(a):g(a)?m.fromJSON(a):d(a)?k.fromJSON(a):c(a)?h.fromJSON(a):null};b.getGeometryType=function(a){return a&&q[a]||null};b.getJsonType=function(a){return a?e(a)?"esriGeometryPoint":f(a)?"esriGeometryPolyline":g(a)?"esriGeometryPolygon":c(a)?"esriGeometryEnvelope":d(a)?"esriGeometryMultipoint":null:null};b.isExtent=c;b.isMultipoint=d;b.isPoint=e;b.isPolygon=g;b.isPolyline=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});