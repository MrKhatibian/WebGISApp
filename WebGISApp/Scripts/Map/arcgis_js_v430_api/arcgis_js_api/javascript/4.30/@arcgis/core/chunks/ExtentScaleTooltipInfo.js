/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{S as s}from"./Tooltip.js";import{m as i,z as r}from"./quantityUtils.js";import{b as p}from"./automaticLengthMeasurementUtils.js";let a=class extends s{constructor(t){super(t),this.type="extent-rotate",this.angle=0}};function l({topLeft:t,topRight:o,bottomRight:e,bottomLeft:s,spatialReference:r}){const a=i(p(s,e,r),p(t,o,r));if(null==a)return null;const l=i(p(e,o,r),p(s,t,r));return null==l?null:{xSize:a,ySize:l}}t([o()],a.prototype,"type",void 0),t([o()],a.prototype,"angle",void 0),a=t([e("esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo")],a);let n=class extends s{constructor(t){super(t),this.type="extent-scale",this.xScale=0,this.yScale=0,this.xSize=r,this.ySize=r}};t([o()],n.prototype,"type",void 0),t([o()],n.prototype,"xScale",void 0),t([o()],n.prototype,"yScale",void 0),t([o()],n.prototype,"xSize",void 0),t([o()],n.prototype,"ySize",void 0),n=t([e("esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo")],n);export{a as E,l as a,n as b};