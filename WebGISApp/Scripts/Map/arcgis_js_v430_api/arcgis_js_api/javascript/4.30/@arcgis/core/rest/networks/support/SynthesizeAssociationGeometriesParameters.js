/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import{b as r}from"../../../chunks/ensureType.js";import"../../../core/lang.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../../chunks/writer.js";import n from"../../../geometry/Extent.js";import p from"../../../geometry/SpatialReference.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";var c;let a=c=class extends o{static from(t){return r(c,t)}constructor(t){super(t),this.returnAttachmentAssociations=!1,this.returnConnectivityAssociations=!1,this.returnContainmentAssociations=!1,this.extent=null,this.maxGeometryCount=null,this.outSpatialReference=null,this.gdbVersion=null,this.moment=null}writeOutSR(t,o,e){if(null!=t){const{wkid:r}=t;o[e]=JSON.stringify({wkid:r})}}};t([e({type:Boolean,json:{read:{source:"attachmentAssociations"},write:{target:"attachmentAssociations"}}})],a.prototype,"returnAttachmentAssociations",void 0),t([e({type:Boolean,json:{read:{source:"connectivityAssociations"},write:{target:"connectivityAssociations"}}})],a.prototype,"returnConnectivityAssociations",void 0),t([e({type:Boolean,json:{read:{source:"containmentAssociations"},write:{target:"containmentAssociations"}}})],a.prototype,"returnContainmentAssociations",void 0),t([e({type:n,json:{write:!0}})],a.prototype,"extent",void 0),t([e({type:Number,json:{write:!0}})],a.prototype,"maxGeometryCount",void 0),t([e({type:p,json:{write:{allowNull:!0,target:"outSR"}}})],a.prototype,"outSpatialReference",void 0),t([i("outSpatialReference")],a.prototype,"writeOutSR",null),t([e({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0),t([e({type:Date,json:{type:Number,write:{writer:(t,o)=>{o.moment=t?.getTime()}}}})],a.prototype,"moment",void 0),a=c=t([s("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")],a);const m=a;export{m as default};