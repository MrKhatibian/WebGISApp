/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{J as s}from"../chunks/jsonMap.js";import{clone as o}from"../core/lang.js";import{t}from"../chunks/screenUtils.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{e as i}from"../chunks/enumeration.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import l from"./LineSymbol.js";import p from"./LineSymbolMarker.js";import"../config.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"./Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/lineMarkers.js";var m;const h=new s({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let a=m=class extends l{constructor(...r){super(...r),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(r,s,o,e,i,n){if(r&&"string"!=typeof r)return r;const l={};return null!=r&&(l.style=r),null!=s&&(l.color=s),null!=o&&(l.width=t(o)),null!=e&&(l.cap=e),null!=i&&(l.join=i),null!=n&&(l.miterLimit=t(n)),l}clone(){return new m({color:o(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:this.marker?.clone()})}hash(){return`${super.hash()}.${this.color?.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${this.marker?.hash()}`}};r([i({esriSLS:"simple-line"},{readOnly:!0})],a.prototype,"type",void 0),r([e({type:h.apiValues,json:{read:h.read,write:h.write}})],a.prototype,"style",void 0),r([e({type:["butt","round","square"],json:{write:{overridePolicy:(r,s,o)=>({enabled:"round"!==r&&null==o?.origin})}}})],a.prototype,"cap",void 0),r([e({type:["miter","round","bevel"],json:{write:{overridePolicy:(r,s,o)=>({enabled:"round"!==r&&null==o?.origin})}}})],a.prototype,"join",void 0),r([e({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":p}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],a.prototype,"marker",void 0),r([e({type:Number,json:{read:!1,write:!1}})],a.prototype,"miterLimit",void 0),a=m=r([n("esri.symbols.SimpleLineSymbol")],a);const c=a;export{c as default};