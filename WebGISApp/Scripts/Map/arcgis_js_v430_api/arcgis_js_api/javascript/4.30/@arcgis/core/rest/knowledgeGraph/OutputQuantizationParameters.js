/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let e=class extends r{constructor(o){super(o),this.extent=null,this.quantizeMode=null,this.tolerance=null}};o([s()],e.prototype,"extent",void 0),o([s()],e.prototype,"quantizeMode",void 0),o([s()],e.prototype,"tolerance",void 0),e=o([t("esri.rest.knowledgeGraph.OutputQuantizationParameters")],e);const i=e;export{i as default};