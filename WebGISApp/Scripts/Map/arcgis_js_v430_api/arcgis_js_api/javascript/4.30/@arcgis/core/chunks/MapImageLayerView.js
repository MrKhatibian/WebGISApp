/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{E as o}from"./ExportImageParameters.js";import{c as s}from"./timeSupport2.js";const i=i=>{let a=class extends i{initialize(){this.exportImageParameters=new o({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return s(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return e([t()],a.prototype,"exportImageParameters",void 0),e([t({readOnly:!0})],a.prototype,"floors",null),e([t({readOnly:!0})],a.prototype,"exportImageVersion",null),e([t()],a.prototype,"layer",void 0),e([t()],a.prototype,"suspended",void 0),e([t({readOnly:!0})],a.prototype,"timeExtent",null),a=e([r("esri.views.layers.MapImageLayerView")],a),a};export{i as M};