/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{c as r}from"../../chunks/mat4f64.js";import{c as s}from"../../chunks/computeTranslationToOriginAndRotation.js";import{p as o}from"../../chunks/projectBuffer.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/mat4.js";import"../../chunks/unitUtils.js";import"../../core/lang.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/geodesicConstants.js";var e,t;!function(r){r.OPAQUE="opaque-color",r.TRANSPARENT="transparent-color",r.COMPOSITE="composite-color",r.FINAL="final-color"}(e||(e={})),function(r){r.ANTIALIASING="aa-color",r.HIGHLIGHTS="highlight-color",r.MAGNIFIER="magnifier-color"}(t||(t={}));const c=null;function n(r,s,e,t,c,n,i){return t=t||r.spatialReference,o(s,t,e,c,r.renderCoordsHelper.spatialReference,n,i)?c:null}function i(r,s,e,t,c,n,i){return n=n||r.spatialReference,o(s,r.renderCoordsHelper.spatialReference,e,t,n,c,i)?t:null}function p(o,e,t,c){return c||(c=r()),t=t||o.spatialReference,s(t,e,c,o.renderCoordsHelper.spatialReference)?c:null}export{t as InternalRenderCategory,e as RenderCategory,i as fromRenderCoordinates,p as renderCoordinateTransformAt,n as toRenderCoordinates,c as webgl};