/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{IdentifiableMixin as t}from"../../core/Identifiable.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let i=class extends(t(r)){constructor(s){super(s),this.items=null,this.label=null}get id(){return this.label}findByTemplate(s){return this.items.find((r=>r.template===s))}};s([e()],i.prototype,"items",void 0),s([e()],i.prototype,"label",void 0),s([e()],i.prototype,"id",null),i=s([o("esri.widgets.FeatureTemplates.TemplateItemGroup")],i);const p=i;export{p as default};