/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r,{h as e}from"./Accessor.js";import t from"./Handles.js";import{L as o}from"../chunks/Logger.js";import{property as n}from"./accessorSupport/decorators/property.js";import{subclass as i}from"./accessorSupport/decorators/subclass.js";import{U as a}from"../chunks/UpdatingHandles.js";import"./lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"./scheduling.js";import"./promiseUtils.js";import"./Error.js";import"../config.js";import"../chunks/ensureType.js";import"./reactiveUtils.js";import"../chunks/asyncUtils.js";import"./Collection.js";import"./Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";const p="esri.core.HandleOwner";e(o.getLogger(p),p.replaceAll(".","/"),{replacement:"esri/core/Accessor",warnOnce:!0,version:"4.28"});const l=r=>{let e=class extends r{constructor(){super(...arguments),this._handles=new t,this._updatingHandles=new a}destroy(){this.destroyed||(this._handles.destroy(),this._updatingHandles.destroy())}get handles(){return this._handles}get updatingHandles(){return this._updatingHandles}};return s([n({readOnly:!0})],e.prototype,"handles",null),s([n({readOnly:!0})],e.prototype,"updatingHandles",null),e=s([i(p)],e),e};let c=class extends(l(r)){};c=s([i("esri.core.HandleOwner")],c);export{c as HandleOwner};