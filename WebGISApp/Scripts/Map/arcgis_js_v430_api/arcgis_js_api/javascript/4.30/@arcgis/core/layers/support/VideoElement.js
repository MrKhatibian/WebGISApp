/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../core/Error.js";import{a as e}from"../../core/promiseUtils.js";import{L as s}from"../../chunks/Logger.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import n from"./MediaElementBase.js";import"../../config.js";import"../../chunks/handleUtils.js";import"../../chunks/maybe.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../core/Identifiable.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"./ControlPointsGeoreference.js";import"../../core/Clonable.js";import"../../chunks/perspectiveUtils.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/vec2.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/screenUtils.js";import"../../chunks/vec2f64.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Polygon.js";import"../../geometry/Extent.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/projection.js";import"../../chunks/SimpleObservable.js";import"../../geometry/Multipoint.js";import"../../geometry/Polyline.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/GeoreferenceBase.js";import"./CornersGeoreference.js";import"./ExtentAndRotationGeoreference.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";let p=class extends n{constructor(o){super(o),this.autoplay=!0,this.content=null,this.type="video"}load(){const o=this.video;if("string"==typeof o){const t=document.createElement("video");t.src=o,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,this.addResolvingPromise(this._loadVideo(t).then((()=>{this._set("content",t)})))}else o instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(o).then((()=>{this._set("content",o)}))):this.addResolvingPromise(Promise.reject(new t("video-element:invalid-video-type","Invalid video type",{video:o})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(o){"not-loaded"===this.loadStatus?this._set("video",o):s.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(o){return new Promise(((t,s)=>{const r=e(o,"canplay",(()=>{this.removeHandles("canplay"),this.autoplay?o.play().then(t,s):t()}));this.addHandles(r,"canplay"),"anonymous"!==o.crossOrigin&&(o.crossOrigin="anonymous",o.src?.includes("blob:")||(o.src=o.src))}))}};o([r()],p.prototype,"autoplay",void 0),o([r({readOnly:!0})],p.prototype,"content",void 0),o([r({readOnly:!0})],p.prototype,"contentWidth",null),o([r({readOnly:!0})],p.prototype,"contentHeight",null),o([r()],p.prototype,"video",null),p=o([i("esri.layers.support.VideoElement")],p);const m=p;export{m as default};