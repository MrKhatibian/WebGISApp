/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{t as r}from"../chunks/screenUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{e as t}from"../chunks/enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"./Symbol.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";let p=class extends i{constructor(s){super(s),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}};s([t({esriSLS:"simple-line"},{readOnly:!0})],p.prototype,"type",void 0),s([o({type:Number,cast:r,json:{write:!0}})],p.prototype,"width",void 0),p=s([e("esri.symbols.LineSymbol")],p);const c=p;export{c as default};