/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import o from"../Extent.js";import r from"../Geometry.js";import s from"../Multipoint.js";import t from"../Point.js";import i from"../Polygon.js";import e from"../Polyline.js";import"../../chunks/tslib.es6.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../SpatialReference.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"./webMercatorUtils.js";import"../../chunks/reader.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";function n(o){return void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax}function m(o){return void 0!==o.points}function c(o){return void 0!==o.x&&void 0!==o.y}function p(o){return void 0!==o.paths}function u(o){return void 0!==o.rings}function j(j){return null==j?null:j instanceof r?j:c(j)?t.fromJSON(j):p(j)?e.fromJSON(j):u(j)?i.fromJSON(j):m(j)?s.fromJSON(j):n(j)?o.fromJSON(j):null}function l(o){return o?c(o)?"esriGeometryPoint":p(o)?"esriGeometryPolyline":u(o)?"esriGeometryPolygon":n(o)?"esriGeometryEnvelope":m(o)?"esriGeometryMultipoint":null:null}const a={esriGeometryPoint:t,esriGeometryPolyline:e,esriGeometryPolygon:i,esriGeometryEnvelope:o,esriGeometryMultipoint:s};function h(o){return o&&a[o]||null}export{j as fromJSON,h as getGeometryType,l as getJsonType,n as isExtent,m as isMultipoint,c as isPoint,u as isPolygon,p as isPolyline};