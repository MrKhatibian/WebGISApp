/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import e from"../../geometry/Point.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";let i=class extends r{constructor(o){super(o),this.categories=null,this.distance=null,this.icon=null,this.location=null,this.name=null,this.placeId=null}};o([s()],i.prototype,"categories",void 0),o([s()],i.prototype,"distance",void 0),o([s()],i.prototype,"icon",void 0),o([s({type:e})],i.prototype,"location",void 0),o([s()],i.prototype,"name",void 0),o([s()],i.prototype,"placeId",void 0),i=o([t("esri.rest.support.PlaceResult")],i);const p=i;export{p as default};