// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/deprecate ../../../core/Evented ../../../core/handleUtils ../../../core/Logger ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../layers/support/layerUtils ../../../views/draw/support/layerUtils ../../../views/support/layerViewUtils ../Selector2D/SelectionOperation".split(" "),function(f,l,c,u,m,n,v,g,y,
z,w,p,q,k,x){c=class extends c.EventedAccessor{constructor(a){super(a);this.sources=this.activeOperation=this._operationHandlesGroup=null}initialize(){this.addHandles([v.watch(()=>this._sources,a=>{this.activeOperation&&(this.activeOperation.sources=a)})])}destroy(){this._operationHandlesGroup=n.removeMaybe(this._operationHandlesGroup)}get _sources(){const {sources:a,view:d}=this;return d&&a?.length?a.flatMap(b=>{if(k.isSelectableLayerView2D(b))return b;if(p.isKnowledgeGraphLayer(b)||p.isLinkChartLayer(b)){var e=
b.layers||[];const h=e.map(r=>{const t=q.findLayerView(d,r)||void 0;return k.isSelectableLayerView2D(t)?t:r});return h.length?h.toArray():e.length?e.toArray():b}e=q.findLayerView(d,b)||void 0;return k.isSelectableLayerView2D(e)?e:b}):[]}get layers(){l.deprecatedProperty(m.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."});return this.sources}set layers(a){l.deprecatedProperty(m.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."});this.sources=
a}get state(){const {_sources:a,view:d}=this;return this.activeOperation?"active":d?.ready&&(a?.length||d?.selectionManager.sources.length)?"ready":"disabled"}cancel(){"active"===this.state&&(this.activeOperation?.cancel(),this._set("activeOperation",null))}activate(a){const {_sources:d,state:b,view:e}=this;if("disabled"!==b&&(d?.length||e?.selectionManager.sources.length)&&this.view)return"active"===b&&this.cancel(),a=new x({view:this.view,sources:d,options:a}),this._operationHandlesGroup=u.handlesGroup([a.selection.on("change",
h=>this.emit("selection-change",h)),a.once("complete",h=>this._onOperationComplete(h))]),this._set("activeOperation",a),a}_onOperationComplete(a){this._operationHandlesGroup=n.removeMaybe(this._operationHandlesGroup);this._set("activeOperation",null);this.emit("complete",a)}};f.__decorate([g.property()],c.prototype,"_sources",null);f.__decorate([g.property({readOnly:!0})],c.prototype,"activeOperation",void 0);f.__decorate([g.property()],c.prototype,"layers",null);f.__decorate([g.property()],c.prototype,
"sources",void 0);f.__decorate([g.property({readOnly:!0})],c.prototype,"state",null);f.__decorate([g.property()],c.prototype,"view",void 0);return c=f.__decorate([w.subclass("esri.widgets.support.SelectionToolbar.SelectionToolbarViewModel")],c)});