/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../request.js";import r from"../../core/Error.js";import{g as o}from"../../chunks/imageUtils.js";import{isAbsolute as s,isDataProtocol as i,isBlobProtocol as n,dataToBlob as m,join as p}from"../../core/urlUtils.js";import{g as a}from"../../chunks/uuid.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{r as l}from"../../chunks/reader.js";import{subclass as u}from"../../core/accessorSupport/decorators/subclass.js";import{w as h}from"../../chunks/writer.js";import j,{i as g}from"./MediaElementBase.js";import{g as d}from"../../chunks/resourceExtension.js";import{f,a as y,i as k,M as v}from"../../chunks/persistableUrlUtils.js";import"../../config.js";import"../../kernel.js";import"../../core/promiseUtils.js";import"../../chunks/handleUtils.js";import"../../chunks/maybe.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../core/Identifiable.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/MultiOriginJSONSupport.js";import"./ControlPointsGeoreference.js";import"../../core/Clonable.js";import"../../chunks/perspectiveUtils.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/vec2.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/screenUtils.js";import"../../chunks/vec2f64.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Polygon.js";import"../../geometry/Extent.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/projection.js";import"../../chunks/SimpleObservable.js";import"../../geometry/Multipoint.js";import"../../geometry/Polyline.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/GeoreferenceBase.js";import"./CornersGeoreference.js";import"./ExtentAndRotationGeoreference.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";let b=class extends j{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if("string"==typeof t){const e=o(t).then((t=>{this._set("content",t)}));this.addResolvingPromise(e)}else if(t instanceof HTMLImageElement){const e=t.decode().then((()=>{this._set("content",t)}));this.addResolvingPromise(e)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new r("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,e,r){return f(e.url,r)}writeImage(t,r,o,c){if(null==t)return;const l=c?.portalItem,u=c?.resources;if(!l||!u)return void("string"==typeof t&&(r[o]=y(t,c)));const h=function(t){return"string"==typeof t&&!i(t)&&!n(t)}(t)?t:null;if(h){if(null==k(h))return void(r[o]=h);const t=y(h,{...c,verifyItemRelativeUrls:c?.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},v.NO);if(l&&t&&!s(t))return u.toKeep.push({resource:l.resourceFromPath(t),compress:!1}),void(r[o]=t)}r[o]="<pending>",u.pendingOperations.push(async function(t){return"string"==typeof t?i(t)?m(t):(await e(t,{responseType:"blob"})).data:new Promise((e=>function(t){if(t instanceof HTMLCanvasElement)return t;const e=t instanceof HTMLImageElement?t.naturalWidth:t.width,r=t instanceof HTMLImageElement?t.naturalHeight:t.height,o=document.createElement("canvas"),s=o.getContext("2d");return o.width=e,o.height=r,t instanceof HTMLImageElement?s.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&s.putImageData(t,0,0),o}(t).toBlob(e)))}(t).then((t=>{const e=function(t,e){const r=a(),o=`${p("media",r)}.${d({type:"blob",blob:t})}`;return e.resourceFromPath(o)}(t,l);r[o]=e.itemRelativeUrl,u.toAdd.push({resource:e,content:{type:"blob",blob:t},compress:!1,finish:t=>{this.image=t.url}})})))}write(t,e){const r=super.write(t,e);return"mediaType"in r&&!r.url&&delete r.mediaType,r}};t([c()],b.prototype,"animationOptions",void 0),t([c({readOnly:!0})],b.prototype,"content",void 0),t([c({readOnly:!0})],b.prototype,"contentWidth",null),t([c({readOnly:!0})],b.prototype,"contentHeight",null),t([c({json:{name:"url",type:String,write:{overridePolicy:(t,e,r)=>({enabled:!g(r?.layer,r?.origin)})}}})],b.prototype,"image",void 0),t([l("image",["url"])],b.prototype,"readImage",null),t([h("image")],b.prototype,"writeImage",null),t([c({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],b.prototype,"type",void 0),b=t([u("esri.layers.support.ImageElement")],b);const U=b;export{U as default};