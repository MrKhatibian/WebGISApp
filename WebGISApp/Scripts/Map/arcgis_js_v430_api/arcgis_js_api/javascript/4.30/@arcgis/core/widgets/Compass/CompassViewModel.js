/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../core/Accessor.js";import{h as s}from"../../core/lang.js";import{watch as e,initial as r}from"../../core/reactiveUtils.js";import{M as i}from"../../core/scheduling.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{c as p}from"../../chunks/utils20.js";import{GoToMixin as h}from"../support/GoTo.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../chunks/asyncUtils.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";let c=class extends(h(o)){constructor(t){super(t),this.orientation={x:0,y:0,z:0},this.view=null,this._updateForCamera=this._updateForCamera.bind(this),this._updateForRotation=this._updateForRotation.bind(this),this._updateRotationWatcher=this._updateRotationWatcher.bind(this)}initialize(){this.addHandles(e((()=>this.view),this._updateRotationWatcher,r))}destroy(){this.view=null}get canShowNorth(){return p(this.view)}get state(){return!this.view?.ready||"2d"===this.view.type&&!this.view.constraints.rotationEnabled?"disabled":this.canShowNorth?"compass":"rotation"}reset(){this.view?.ready&&("2d"===this.view?.type?this.callGoTo({target:{rotation:0},options:{animationMode:"always",duration:i(s("mapview-essential-goto-duration"))}}):this.callGoTo({target:{heading:0}}))}_updateForRotation(t){null!=t&&this._set("orientation",{z:t})}_updateForCamera(t){if(!t)return;const o=-t.heading;this._set("orientation",{x:0,y:0,z:o})}_updateRotationWatcher(t){this.removeAllHandles(),t&&this.addHandles("2d"===t.type?e((()=>t?.rotation),this._updateForRotation,r):e((()=>t?.camera),this._updateForCamera,r))}};t([a({readOnly:!0})],c.prototype,"canShowNorth",null),t([a({readOnly:!0})],c.prototype,"orientation",void 0),t([a({readOnly:!0})],c.prototype,"state",null),t([a()],c.prototype,"view",void 0),c=t([n("esri.widgets.Compass.CompassViewModel")],c);const d=c;export{d as default};