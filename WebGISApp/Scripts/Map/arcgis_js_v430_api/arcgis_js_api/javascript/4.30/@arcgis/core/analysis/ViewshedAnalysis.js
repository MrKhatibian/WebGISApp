/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{A as r}from"../chunks/Analysis.js";import e from"./Viewshed.js";import t from"../core/Collection.js";import{r as o,c as i}from"../chunks/collectionUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../core/Clonable.js";import"../core/Identifiable.js";import"../core/JSONSupport.js";import"../geometry.js";import"../chunks/ensureType.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/Cyclical.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";const c=t.ofType(e);let n=class extends r{constructor(s){super(s),this.type="viewshed"}get viewsheds(){return this._get("viewsheds")||new c}set viewsheds(s){this._set("viewsheds",o(s,this.viewsheds,c))}get requiredPropertiesForEditing(){return this.viewsheds.items.map((({observer:s})=>s))}clear(){this.viewsheds.removeAll()}};s([p({type:["viewshed"]})],n.prototype,"type",void 0),s([p({cast:i,type:c,nonNullable:!0})],n.prototype,"viewsheds",null),s([p({readOnly:!0})],n.prototype,"requiredPropertiesForEditing",null),n=s([m("esri.analysis.ViewshedAnalysis")],n);const j=n;export{j as default};