// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/hydratedFeatures ../../../layers/support/timeSupport ../../../rest/support/Query ./support/projectExtentUtils ../webgl-engine/lib/UpdatePolicy".split(" "),function(f,d,g,h,e,t,u,v,k,l,m,n,p,q){f.FeatureLikeLayerView3D=c=>{c=class extends c{constructor(){super(...arguments);
this.updatePolicy=q.UpdatePolicy.SYNC;this.slicePlaneEnabled=!1;this.fullExtentInLocalViewSpatialReference=null;this.supportsHeightUnitConversion=!0}initialize(){const a=this.layer;"isTable"in a&&a.isTable?this.addResolvingPromise(Promise.reject(new g("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:a}))):(this.addResolvingPromise(this._validateGeometryType()),this.addResolvingPromise((async()=>{this.fullExtentInLocalViewSpatialReference=await p.toViewIfLocal(this);
const b=this.createGraphicsPipeline();this.graphicsPipeline=b;await b.when()})()),this.notifyChange("updating"))}destroy(){this.graphicsPipeline=h.destroyMaybe(this.graphicsPipeline)}get dataUpdating(){return!!this.graphicsPipeline?.dataUpdating}get legendEnabled(){return this.canResume()&&this.graphicsPipeline?.legendEnabled}get visibleAtCurrentScale(){return!(this.graphicsPipeline?.scaleVisibilitySuspended??!1)}get symbologySnappingSupported(){return this.graphicsPipeline.symbologySnappingSupported}get hasAllFeatures(){return this.graphicsPipeline.hasAllFeatures}get hasAllFeaturesInView(){return this.graphicsPipeline.hasAllFeaturesInView}get hasFullGeometries(){return this.graphicsPipeline.hasFullGeometries}get timeExtent(){return m.combineTimeExtent(this.layer,
this.view?.timeExtent,this._get("timeExtent"))}get queryEngine(){return this.graphicsPipeline.queryEngine}getHit(a){var b=this.graphicsPipeline.findGraphic(r=>r.uid===a);if(null==b)return null;b=l.hydrateGraphic(b,this.layer);return{type:"graphic",graphic:b,layer:b.layer}}whenGraphicBounds(a,b){return this.graphicsPipeline?.whenGraphicBounds(a,b)}computeAttachmentOrigin(a,b){return this.graphicsPipeline?.computeAttachmentOrigin(a,b)}async elevationAlignPointsInFeatures(a,b){return this.graphicsPipeline.elevationAlignPointsInFeatures(a,
b)}async queryForSymbologySnapping(a,b){return this.graphicsPipeline.queryForSymbologySnapping(a,b)}queryFeatures(a,b){return this.queryEngine.executeQuery(this._ensureQuery(a),b?.signal)}queryObjectIds(a,b){return this.queryEngine.executeQueryForIds(this._ensureQuery(a),b?.signal)}queryFeatureCount(a,b){return this.queryEngine.executeQueryForCount(this._ensureQuery(a),b?.signal)}queryExtent(a,b){return this.queryEngine.executeQueryForExtent(this._ensureQuery(a),b?.signal)}_ensureQuery(a){return null==
a?this.createQuery():n.from(a)}highlight(a){return this.graphicsPipeline.highlight(a)}maskOccludee(a){return this.graphicsPipeline.maskOccludee(a)}getSuspendInfo(){return{...super.getSuspendInfo(),...this.graphicsPipeline.suspendInfo}}isUpdating(){return!this.graphicsPipeline||this.graphicsPipeline.destroyed?!1:!(!this.graphicsPipeline?.updating&&this.view?.basemapTerrain?.ready)}async _validateGeometryType(){switch(this.layer.geometryType){case "multipatch":case "multipoint":throw new g("featurelayerview3d:unsupported-geometry-type",
"Unsupported geometry type ${geometryType}",{geometryType:this.layer.geometryType});}}get performanceInfo(){return this.graphicsPipeline.performanceInfo}};d.__decorate([e.property()],c.prototype,"graphicsPipeline",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"dataUpdating",null);d.__decorate([e.property()],c.prototype,"suspended",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"legendEnabled",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"visibleAtCurrentScale",
null);d.__decorate([e.property()],c.prototype,"updating",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"updatePolicy",void 0);d.__decorate([e.property({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"suspendInfo",void 0);d.__decorate([e.property()],c.prototype,"symbologySnappingSupported",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"hasAllFeatures",null);d.__decorate([e.property({readOnly:!0})],c.prototype,
"hasAllFeaturesInView",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"hasFullGeometries",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"timeExtent",null);return c=d.__decorate([k.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],c)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});