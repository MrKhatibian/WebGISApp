/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{g as o,t as r}from"../../chunks/perspectiveUtils.js";import{c as s}from"../../chunks/screenUtils.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{c as n}from"../../chunks/mat3f64.js";import{g as p}from"../../chunks/vec2.js";import{c}from"../../chunks/vec2f64.js";import m from"../../geometry/Point.js";import l from"../../geometry/Polygon.js";import{projectOrLoad as u}from"../../geometry/projection.js";import{G as a}from"../../chunks/GeoreferenceBase.js";import"../../chunks/mat3.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/zmUtils.js";import"../../chunks/SimpleObservable.js";import"../../geometry/Multipoint.js";import"../../geometry/Polyline.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../core/Clonable.js";const j=c();let h=class extends a{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:r,bottomRight:s}=this;if(null==t||null==o||null==r||null==s)return null;const e=t.spatialReference;return o=this.projectOrWarn(o,e),r=this.projectOrWarn(r,e),s=this.projectOrWarn(s,e),null==o||null==r||null==s?null:new l({rings:[[[r.x,r.y],[t.x,t.y],[o.x,o.y],[s.x,s.y],[r.x,r.y]]],spatialReference:e})}set coords(t){const{topLeft:o}=this;if(null==o)return;const r=o.spatialReference;if(null==(t=this.projectOrWarn(t,r)))return;const{rings:[[s,e,i,n]]}=t;this.bottomLeft=new m({x:s[0],y:s[1],spatialReference:r}),this.topLeft=new m({x:e[0],y:e[1],spatialReference:r}),this.topRight=new m({x:i[0],y:i[1],spatialReference:r}),this.bottomRight=new m({x:n[0],y:n[1],spatialReference:r})}toSourceNormalized(t){const{topLeft:e,topRight:i,bottomRight:c,bottomLeft:m}=this;if(null==t||null==e||null==i||null==c||null==m)return null;const l=e.spatialReference;t=t.normalize();const a=u(t,l).geometry;if(null==a)return null;p(j,a.x,a.y);const h=o(n(),[e.x,e.y,m.x,m.y,i.x,i.y,c.x,c.y],[0,0,0,1,1,0,1,1]);return r(j,j,h),s(j[0],j[1])}};t([e({clonable:!1})],h.prototype,"coords",null),t([e({type:m})],h.prototype,"bottomLeft",void 0),t([e({type:m})],h.prototype,"bottomRight",void 0),t([e({type:m})],h.prototype,"topLeft",void 0),t([e({type:m})],h.prototype,"topRight",void 0),h=t([i("esri.layers.support.CornersGeoreference")],h);const f=h;export{f as default};