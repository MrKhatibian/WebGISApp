/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../geometry.js";import{i as t}from"../core/lang.js";import{i as e}from"./mat2d.js";import{c as r,a as s}from"./mat2df64.js";import{r as a,i as o}from"./quat.js";import{c as i}from"./quatf64.js";import{b as n,d as l,c as h,n as m,e as c,t as f}from"./vec3.js";import{c as p}from"./vec3f64.js";import{A as d}from"./Axis.js";import u from"../geometry/Point.js";function w(t,e,r=null){return null!=r?[t,e,r]:[t,e]}function R(t,e,r=null){return null!=r?{x:t,y:e,z:r}:{x:t,y:e}}class g{constructor(t){this.spatialReference=t}mapToLocalMultiple(e){return e.map((t=>this.mapToLocal(t))).filter(t)}get doUnnormalization(){return!1}}class W extends g{constructor(t,a,o=null){super(a),this._defaultZ=o,this.transform=r(),this.transformInv=r(),this.transform=s(t),e(this.transformInv,this.transform)}makeMapPoint(t,e){return w(t,e,this._defaultZ)}mapToLocal(t){return R(this.transform[0]*t[0]+this.transform[2]*t[1]+this.transform[4],this.transform[1]*t[0]+this.transform[3]*t[1]+this.transform[5])}localToMap(t){return w(this.transformInv[0]*t.x+this.transformInv[2]*t.y+this.transformInv[4],this.transformInv[1]*t.x+this.transformInv[3]*t.y+this.transformInv[5],this._defaultZ)}}class v extends g{constructor(t,e){super(t.spatialReference),this.view=t,this.defaultZ=null,this.pWS=p(),this.tangentFrameUpWS=p(),this.tangentFrameRightWS=p(),this.tangentFrameForwardWS=p(),this.localFrameRightWS=p(),this.localFrameUpWS=p(),this.worldToLocalTransform=i(),this.localToWorldTransform=i(),this.scale=1,this.scale=t.resolution,this.referenceMapPoint=e,this.defaultZ=e.hasZ?e.z:null;const r=t.state.camera.viewRight;this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint,this.pWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,d.X,this.tangentFrameRightWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,d.Y,this.tangentFrameUpWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,d.Z,this.tangentFrameForwardWS);const s=p();n(s,this.tangentFrameForwardWS,l(r,this.tangentFrameForwardWS)),h(this.localFrameRightWS,r,s),m(this.localFrameRightWS,this.localFrameRightWS),c(this.localFrameUpWS,this.tangentFrameForwardWS,this.localFrameRightWS),a(this.worldToLocalTransform,this.localFrameRightWS,this.tangentFrameRightWS),o(this.localToWorldTransform,this.worldToLocalTransform)}get doUnnormalization(){return"global"===this.view.viewingMode}makeMapPoint(t,e){return w(t,e,this.defaultZ)}mapToLocal(t){const e=p();this.view.renderCoordsHelper.toRenderCoords(new u({x:t[0],y:t[1],spatialReference:this.spatialReference}),e),f(e,e,this.worldToLocalTransform);const r=this.view.renderCoordsHelper.fromRenderCoords(e,new u({spatialReference:this.view.spatialReference}));return null!=r?R(r.x/this.scale,r.y/this.scale):null}localToMap(t){const e=p();this.view.renderCoordsHelper.toRenderCoords(new u({x:t.x*this.scale,y:t.y*this.scale,spatialReference:this.spatialReference}),e),f(e,e,this.localToWorldTransform);const r=this.view.renderCoordsHelper.fromRenderCoords(e,new u({spatialReference:this.view.spatialReference}));return null!=r?w(r.x,r.y,this.defaultZ):null}}function F(t,e){if("2d"===t.type)return new W(t.state.transform,t.spatialReference,e.length>2?e[2]:null);if("3d"===t.type){const r=e.length>2?new u({x:e[0],y:e[1],z:e[2],spatialReference:t.spatialReference}):new u({x:e[0],y:e[1],spatialReference:t.spatialReference});return new v(t,r)}return null}export{W as A,F as c,R as m};