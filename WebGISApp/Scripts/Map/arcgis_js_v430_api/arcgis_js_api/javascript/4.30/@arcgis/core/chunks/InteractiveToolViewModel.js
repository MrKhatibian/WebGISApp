/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{L as o}from"./Logger.js";import{watch as s,syncAndInitial as i,when as r}from"../core/reactiveUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";let p=class extends e{constructor(t){super(t),this.tool=null,this._loggedUnsupportedErrorOnce=!1,null!=t?.visible&&(this.visible=t.visible)}initialize(){this.addHandles(s((()=>({ready:null!=this.view&&this.view.ready,supported:this.supported})),(({ready:t,supported:e})=>{!t||e||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)}),i))}destroy(){this.removeTool(),this.view=null}get active(){return null!=this.tool&&this.tool.active}get disabled(){return null==this.view||!this.view.ready||!this.supported}get supported(){return null==this.view||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(t){if(t===this.view)return;this.removeTool(),this._set("view",t);const e="tools";this.removeHandles(e),null!=t&&this.addHandles(t.tools.on("after-remove",(t=>{t.item===this.tool&&this._set("tool",null)})),e)}set visible(t){this._set("visible",t),null!=this.tool&&(this.tool.visible=t)}createTool(t={interactive:!1}){if(this.removeTool(),null==this.view||!this.view.ready||!this.supported)return;const e=this.constructTool();e.created?(this._set("tool",e),this.view.tools.add(e)):t.interactive?(this._set("tool",e),this.view.addAndActivateTool(e),r((()=>e.created),(()=>{e.active&&null!=this.view&&(this.view.activeTool=null)}),{initial:!0,once:!0})):e.destroy()}removeTool(){const t=this.tool;if(null==t)return;const e=this.view?.tools;null!=e?e.remove(t):t.destroy(),this._set("tool",null)}logError(...t){o.getLogger(this).error(...t)}};t([l({constructOnly:!0})],p.prototype,"tool",void 0),t([l()],p.prototype,"active",null),t([l()],p.prototype,"disabled",null),t([l()],p.prototype,"supported",null),t([l({value:null})],p.prototype,"view",null),t([l({type:Boolean,value:!0})],p.prototype,"visible",null),p=t([n("esri.widgets.support.InteractiveToolViewModel")],p);export{p as I};