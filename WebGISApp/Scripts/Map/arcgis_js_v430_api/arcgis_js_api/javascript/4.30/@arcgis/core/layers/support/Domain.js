/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{J as s}from"../../chunks/jsonMap.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{e as t}from"../../chunks/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/ensureType.js";const i=new s({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends o{constructor(r){super(r),this.name=null,this.type=null}};r([e({type:String,json:{write:!0}})],c.prototype,"name",void 0),r([t(i)],c.prototype,"type",void 0),c=r([p("esri.layers.support.Domain")],c);const n=c;export{n as default};