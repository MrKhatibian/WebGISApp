/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import r from"../core/Collection.js";import{h as t,m as s}from"./handleUtils.js";import{L as i}from"./Logger.js";import{debounce as a,ignoreAbortErrors as o}from"../core/promiseUtils.js";import{sqlAnd as n}from"../core/sql.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";const l=Symbol(),y=y=>{let u=class extends y{constructor(){super(...arguments),this.layerViews=new r,this._debouncedUpdate=a((async()=>{const{layer:e,parent:r}=this,t=r?.footprintLayerView;let s=[];const i=this._createQuery();if(i&&t){const{features:r}=await t.queryFeatures(i);this.suspended||(s=r.map((r=>e.acquireLayer(r))))}this.removeHandles(l),this.addHandles(s,l)}))}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some((e=>e.updating))}enableLayerUpdates(){return t([this._updatingHandles.addWhen((()=>!1===this.parent?.footprintLayerView?.dataUpdating),(()=>this.updateLayers())),this._updatingHandles.add((()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended]),(()=>this.updateLayers())),s((()=>this.removeHandles(l)))])}updateLayers(){this.suspended?this.removeHandles(l):this._updatingHandles.addPromise(o(this._debouncedUpdate()).catch((e=>{i.getLogger(this).error(e)})))}_createQuery(){const e=this.parent?.footprintLayerView,r=this.layer?.parent;if(!e||!r||r.destroyed)return null;const{layer:{maximumVisibleSublayers:t},view:{scale:s}}=this;if(!t)return null;const{itemTypeField:i,itemSourceField:a,itemNameField:o,minScaleField:d,maxScaleField:p,objectIdField:l,orderBy:y}=r,u=n(`${d} IS NULL OR ${s} <= ${d} OR ${d} = 0`,`${p} IS NULL OR ${s} >= ${p}`),m=y?.find((e=>e.field&&!e.valueExpression)),c=e.createQuery();if(c.returnGeometry=!1,c.num=t,c.outFields=[l,a,o],c.where=n(c.where,u),null!=this.unsupportedItemTypes){const e=`${i} NOT IN (${this.unsupportedItemTypes.map((e=>`'${e}'`))})`;c.where=n(c.where,e)}return m?.field&&(c.orderByFields=[`${m.field} ${"descending"===m.order?"DESC":"ASC"}`],c.outFields.push(m.field)),c}};return e([d({readOnly:!0})],u.prototype,"creatingLayerViews",null),e([d()],u.prototype,"layer",void 0),e([d()],u.prototype,"layerViews",void 0),e([d({readOnly:!0})],u.prototype,"unsupportedItemTypes",void 0),e([d()],u.prototype,"parent",void 0),e([d({readOnly:!0})],u.prototype,"isUpdating",null),u=e([p("esri.views.layers.CatalogDynamicGroupLayerView")],u),u};export{y as C};