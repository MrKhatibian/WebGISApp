/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import o from"../core/Evented.js";import{watch as i,sync as s}from"../core/reactiveUtils.js";import{a as l,s as r,b as n}from"./screenUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{p as h}from"./vec2.js";import{j as p}from"./vec3.js";import{c as m}from"./vec3f64.js";import{canProjectWithoutEngine as y,project as u}from"../geometry/projection.js";import{p as b}from"./projectPointToVector.js";import{n as g}from"./elevationInfoUtils.js";import{g as d}from"./defaults.js";import{E as f}from"./ElevationInfo.js";import{i as _}from"./drapedUtils.js";function v(t){let e=0,o=0,i=0;return t?("cim"===t.type&&t.data.symbol&&"symbolLayers"in t.data.symbol&&t.data.symbol.symbolLayers&&t.data.symbol.symbolLayers.map((t=>{"CIMVectorMarker"===t.type&&t.anchorPoint&&(Math.abs(t.anchorPoint.x)>e&&(e=t.anchorPoint.x),Math.abs(t.anchorPoint.y)>o&&(o=t.anchorPoint.y),null!=t.size&&t.size>i&&(i=t.size))})),e=l(e),o=l(o),i=l(i),{offsetX:e,offsetY:o,size:i}):{offsetX:e,offsetY:o,size:i}}let S=class extends e{set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const{layer:t}=this.graphic,e=t&&"elevationInfo"in t?t.elevationInfo:null,o=g(this.graphic),i=e?e.offset:0;return new f({mode:o,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new o.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic;if(!1===e.visible)return null;const o=e.geometry;if(null==o)return null;const i=this._get("focusedSymbol"),s=null!=i?i:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,o,s):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),null!=this.layer&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),null!=this.layer&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=i((()=>this.graphic?.symbol),(t=>{null!=t&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&null!=this.focusedSymbol&&(this.graphic.symbol=this.focusedSymbol))}),s)}detachSymbolChanged(){null!=this._graphicSymbolChangedHandle&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&null!=this.focusedSymbol?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,o,i){if(null==(i=i||d(o)))return null;let s=this._circleCollisionCache;if("point"===o.type&&"cim"===i.type&&"CIMPointSymbol"===i.data.symbol?.type&&i.data.symbol.symbolLayers){const{offsetX:s,offsetY:l,size:n}=v(i),a=r(e,j),c=n/2,p=t.toScreen(o),m=p.x+s,y=p.y+l;return h(a,[m,y])<c*c?1:null}if("point"!==o.type||"simple-marker"!==i.type)return _(e,o,t)?1:null;if(null==s||!s.originalPoint.equals(o)){const e=o,r=t.spatialReference;if(y(e.spatialReference,r)){const t=u(e,r);s={originalPoint:e.clone(),mapPoint:t,radiusPx:l(i.size)},this._circleCollisionCache=s}}if(null!=s){const o=r(e,j),n=t.toScreen?.(s.mapPoint);if(!n)return null;const a=s.radiusPx,c=n.x+l(i.xoffset),p=n.y-l(i.yoffset);return h(o,[c,p])<a*a?1:null}return null}_intersectDistance3D(t,e,o){const i=t.toMap(e,{include:[o]});return i&&b(i,C,t.renderSpatialReference)?p(C,t.state.camera.eye):null}};t([a({constructOnly:!0,nonNullable:!0})],S.prototype,"graphic",null),t([a()],S.prototype,"elevationInfo",null),t([a({constructOnly:!0,nonNullable:!0})],S.prototype,"view",void 0),t([a({value:null})],S.prototype,"focusedSymbol",null),t([a({constructOnly:!0})],S.prototype,"layer",void 0),t([a()],S.prototype,"interactive",void 0),t([a()],S.prototype,"selectable",void 0),t([a()],S.prototype,"grabbable",void 0),t([a({value:!1})],S.prototype,"grabbing",null),t([a()],S.prototype,"dragging",void 0),t([a()],S.prototype,"hovering",null),t([a({value:!1})],S.prototype,"selected",null),t([a()],S.prototype,"cursor",void 0),S=t([c("esri.views.interactive.GraphicManipulator")],S);const C=m(),j=n();export{S as G,v as g};