// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Identifiable ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../support/basemapUtils".split(" "),function(c,b,h,k,e,d,n,p,q,l,m){b=class extends h.IdentifiableMixin(b){constructor(a){super(a);this.error=this.compatibilityFunction=null;this.state="loading";
this.view=null}initialize(){const a=()=>this.refresh();this.addHandles([e.watch(()=>this.basemap?.loadStatus,a),e.watch(()=>this.compatibilityFunction,a),e.watch(()=>this.view&&"basemapTerrain"in this.view&&this.view.basemapTerrain?.tilingScheme,a),e.watch(()=>this.view?.ready,a),e.watch(()=>this.view?.spatialReference,a)]);this.refresh()}destroy(){this._cancelRefresh();this.view=this.compatibilityFunction=this.basemap=null}get _spatialReferenceTask(){return m.findSpatialReference(this.view,this.basemap)}set basemap(a){a&&
a.load().catch(()=>{});this._set("basemap",a)}get spatialReference(){return this._spatialReferenceTask.spatialReference}refresh(){this._cancelRefresh();this._set("state","loading");var a=this.basemap?.loadStatus;if("loaded"===a||"failed"===a)if(this.compatibilityFunction){a=new AbortController;var {signal:f}=a;this.compatibilityFunction(this,{signal:f}).then(()=>e.whenOnce(()=>!this._spatialReferenceTask.updating,f)).then(()=>{this._set("state","ready");this._set("error",null)}).catch(g=>{k.isAbortError(g)||
(this._set("state","error"),this._set("error",g))});this._refreshController=a}else"loaded"===a?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError))}_cancelRefresh(){this._refreshController&&(this._refreshController.abort(),this._refreshController=null)}};c.__decorate([d.property({readOnly:!0})],b.prototype,"_spatialReferenceTask",null);c.__decorate([d.property()],b.prototype,"basemap",null);c.__decorate([d.property()],b.prototype,
"compatibilityFunction",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"error",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"spatialReference",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",void 0);c.__decorate([d.property()],b.prototype,"view",void 0);return b=c.__decorate([l.subclass("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],b)});