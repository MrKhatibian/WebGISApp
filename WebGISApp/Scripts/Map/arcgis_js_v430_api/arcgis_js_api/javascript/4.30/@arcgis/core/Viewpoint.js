/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"./chunks/tslib.es6.js";import r from"./Camera.js";import{geometryTypes as o}from"./geometry.js";import{JSONSupport as e}from"./core/JSONSupport.js";import{property as s}from"./core/accessorSupport/decorators/property.js";import{cast as i}from"./core/accessorSupport/decorators/cast.js";import"./core/lang.js";import{subclass as m}from"./core/accessorSupport/decorators/subclass.js";import{fromJSON as p}from"./geometry/support/jsonUtils.js";import"./CameraLayout.js";import"./core/Clonable.js";import"./core/Accessor.js";import"./core/Handles.js";import"./chunks/Logger.js";import"./config.js";import"./chunks/maybe.js";import"./chunks/metadata.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/ObservableBase.js";import"./chunks/tracking.js";import"./core/scheduling.js";import"./core/promiseUtils.js";import"./core/Error.js";import"./chunks/ensureType.js";import"./chunks/Cyclical.js";import"./chunks/mathUtils.js";import"./chunks/vec3.js";import"./chunks/vec3f64.js";import"./chunks/common.js";import"./chunks/reader.js";import"./chunks/writer.js";import"./geometry/Point.js";import"./geometry/Geometry.js";import"./geometry/SpatialReference.js";import"./chunks/unitUtils.js";import"./chunks/jsonMap.js";import"./chunks/assets.js";import"./request.js";import"./kernel.js";import"./core/urlUtils.js";import"./geometry/support/webMercatorUtils.js";import"./geometry/Extent.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/coordsUtils.js";import"./chunks/Axis.js";import"./chunks/extentUtils.js";import"./chunks/aaBoundingRect.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";var c;let n=c=class extends e{constructor(t){super(t),this.rotation=0,this.scale=0,this.targetGeometry=null,this.camera=null}castRotation(t){return(t%=360)<0&&(t+=360),t}clone(){return new c({rotation:this.rotation,scale:this.scale,targetGeometry:null!=this.targetGeometry?this.targetGeometry.clone():null,camera:null!=this.camera?this.camera.clone():null})}};t([s({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"rotation",void 0),t([i("rotation")],n.prototype,"castRotation",null),t([s({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:l}}}}})],n.prototype,"scale",void 0),t([s({types:o,json:{read:p,write:!0,origins:{"web-scene":{read:p,write:{overridePolicy:l}}}}})],n.prototype,"targetGeometry",void 0),t([s({type:r,json:{write:!0}})],n.prototype,"camera",void 0),n=c=t([m("esri.Viewpoint")],n);const a=n;function l(){return{enabled:!this.camera}}export{a as default};