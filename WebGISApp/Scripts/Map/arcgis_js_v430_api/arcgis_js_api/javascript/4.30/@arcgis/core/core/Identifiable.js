/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{subclass as s}from"./accessorSupport/decorators/subclass.js";import"./lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/tracking.js";import"../chunks/ensureType.js";import"./Error.js";let r=0;const t=t=>{let i=class extends t{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+r++})}};return i=e([s("esri.core.Identifiable")],i),i},i=t=>{let i=class extends t{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:r++})}};return i=e([s("esri.core.Identifiable.NumericIdentifiable")],i),i};let o=class extends(t(class{})){};o=e([s("esri.core.Identifiable")],o);export{o as Identifiable,t as IdentifiableMixin,i as NumericIdentifiableMixin};