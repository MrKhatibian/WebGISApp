// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/asyncUtils ../../../../core/handleUtils ../../../../core/memoize ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/support/UpdatingHandles ../../../../layers/support/layerUtils ../../../../support/elevationInfoUtils ../../../2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D ../../../3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D ../snappingUtils ./queryEngineUtils ./WorkerTileTreeDebugger ./featureServiceSource/FeatureServiceSnappingSourceWorkerHandle ./featureServiceSource/FeatureServiceTilesSimple ../../../support/debugFlags".split(" "),
function(z,e,h,A,B,w,C,m,f,l,N,O,P,D,E,F,G,H,I,J,x,K,u,L,M){e.FeatureServiceSnappingSource=class extends A{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find(a=>a.layer===this._layer)}get _isSuspended(){return F.isSubtypeGroupLayer(this._layer)&&!this.layerSource.sublayerSources.some(a=>a.enabled&&a.layer.visible)?!0:this.view?!1!==this._layerView?.suspended||
!this.layerSource.enabled:!1}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const {view:a,_layerView:c,layerSource:b}=this,{layer:g}=b,{fieldsIndex:d,timeInfo:n,floorInfo:p,subtypeField:v}=g;var k=c&&"filter"in c?c.filter:null;const q=k?.where&&"1\x3d1"!==k.where?this._getOrLoadWhereFields(k.where,d):[];if(k?.timeExtent&&n){const {startField:t,endField:y}=n;k=d.get(t)?.name??t;var r=d.get(y)?.name??y;k&&q.push(k);r&&q.push(r)}a?.map&&J.isUtilityNetworkWebMap(a.map)&&
a.map.utilityNetworks?.find(t=>t.isUtilityLayer(g))&&(k=g.fieldsIndex.get("assetGroup")?.name,r=g.fieldsIndex.get("assetType")?.name,k&&r&&(q.push(k),q.push(r)));g&&p?.floorField&&a?.floors?.length&&(k=d.get(p.floorField)?.name??p.floorField)&&q.push(k);v&&(k=d.get(v)?.name??v)&&q.push(k);return new Set(q)}get configuration(){var {view:a}=this;const {apiKey:c,customParameters:b}=this._layer;a=null!=a?a.type:"2d";return{filter:this._layer.createQuery(),customParameters:c?{...b,token:c}:b,viewType:a}}get availability(){return this._workerHandle?.availability??
0}get _layer(){return this.layerSource.layer}constructor(a){super(a);this._updatingHandles=new E.UpdatingHandles;this._debug=this._workerHandle=null;this._memoizedMakeGetGroundElevation=C.memoize(x.makeGetGroundElevation)}initialize(){let a;const c=this.view;if(null==c||c.destroyed)this._tilesOfInterest=new L.FeatureServiceTilesSimple({layer:this._layer}),a=this._workerHandle=new u.FeatureServiceSnappingSourceWorkerHandle;else switch(c.type){case "2d":this._tilesOfInterest=new H.FeatureServiceTiles2D({view:c,
layer:this._layer});a=this._workerHandle=new u.FeatureServiceSnappingSourceWorkerHandle;break;case "3d":const {resourceController:b}=c,g=this._layer;this._tilesOfInterest=new I.FeatureServiceTiles3D({view:c});a=this._workerHandle=new u.FeatureServiceSnappingSourceWorkerHandle({schedule:d=>b.immediate.schedule(d),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(d,n)=>{const p=await c.whenLayerView(g);m.throwIfAborted(n);return p.elevationAlignPointsInFeatures(d,
n)},queryForSymbologySnapping:async(d,n)=>{const p=await c.whenLayerView(g);m.throwIfAborted(n);return p.queryForSymbologySnapping(d,n)}});this.addHandles([c.elevationProvider.on("elevation-change",({context:d})=>{const {elevationInfo:n}=g;G.elevationContextAffectsAlignment(d,n)&&m.ignoreAbortErrors(a.notifyElevationSourceChange())}),f.watch(()=>g.elevationInfo,()=>m.ignoreAbortErrors(a.notifyElevationSourceChange()),f.initial),f.watch(()=>this._layerView?.layer?.renderer,()=>m.ignoreAbortErrors(a.notifySymbologyChange()),
f.initial),f.watch(()=>this._layerView?.symbologySnappingSupported??!1,d=>m.ignoreAbortErrors(a.setSymbologySnappingSupported(d)),f.initial),f.on(()=>this._layerView?.layer,["edits","apply-edits","graphic-update"],()=>a.notifySymbologyChange())])}this.addHandles([w.destroyHandle(a)]);m.ignoreAbortErrors(a.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null));this._updatingHandles.add(()=>this._updateTilesParameters,()=>m.ignoreAbortErrors(a.updateTiles(this._updateTilesParameters,
null)),f.initial);this.addHandles([f.watch(()=>this.configuration,b=>m.ignoreAbortErrors(a.configure(b,null)),f.sync),f.watch(()=>this._outFields,b=>m.ignoreAbortErrors(a.updateOutFields(b)),f.initial),f.watch(()=>this._isSuspended,b=>m.ignoreAbortErrors(a.setSuspended(b)),f.syncAndInitial)]);null!=c&&this.addHandles(f.watch(()=>M.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,b=>{b&&!this._debug?(this._debug=new K.WorkerTileTreeDebugger({view:c,handle:a}),this.addHandles(w.destroyHandle(this._debug),
"debug")):!b&&this._debug&&this.removeHandles("debug")},f.initial));this.addHandles(this.layerSource.layer.on("apply-edits",b=>{m.ignoreAbortErrors(a.applyEdits(b,null))}))}destroy(){this._updatingHandles.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(a,c){const {coordinateHelper:b,point:g}=a;this._tilesOfInterest.pointOfInterest=b.arrayToPoint(g);const d=this._memoizedMakeGetGroundElevation(this.view,b.spatialReference);return(await this._workerHandle.fetchCandidates({...a},
c)).candidates.map(n=>x.convertSnappingCandidate(n,d))}getDebugInfo(a){return this._workerHandle.getDebugInfo(a)}_getOrLoadWhereFields(a,c){const {_whereModule:b}=this;if(!this._loadWhereModuleTask&&!b)return this._loadWhereModuleTask=a=B.createTask(async()=>this._whereModule=(await new Promise((g,d)=>z(["../../../../core/sql/WhereClause"],g,d))).WhereClause),this._updatingHandles.addPromise(a.promise),[];if(!b)return[];try{return b.create(a,c).fieldNames}catch(g){return[]}}};h.__decorate([l.property({constructOnly:!0})],
e.FeatureServiceSnappingSource.prototype,"spatialReference",void 0);h.__decorate([l.property({constructOnly:!0})],e.FeatureServiceSnappingSource.prototype,"layerSource",void 0);h.__decorate([l.property({constructOnly:!0})],e.FeatureServiceSnappingSource.prototype,"view",void 0);h.__decorate([l.property()],e.FeatureServiceSnappingSource.prototype,"_tilesOfInterest",void 0);h.__decorate([l.property({readOnly:!0})],e.FeatureServiceSnappingSource.prototype,"_updateTilesParameters",null);h.__decorate([l.property()],
e.FeatureServiceSnappingSource.prototype,"_layerView",null);h.__decorate([l.property()],e.FeatureServiceSnappingSource.prototype,"_isSuspended",null);h.__decorate([l.property({readOnly:!0})],e.FeatureServiceSnappingSource.prototype,"updating",null);h.__decorate([l.property()],e.FeatureServiceSnappingSource.prototype,"_outFields",null);h.__decorate([l.property({readOnly:!0})],e.FeatureServiceSnappingSource.prototype,"configuration",null);h.__decorate([l.property({readOnly:!0})],e.FeatureServiceSnappingSource.prototype,
"availability",null);h.__decorate([l.property()],e.FeatureServiceSnappingSource.prototype,"_loadWhereModuleTask",void 0);h.__decorate([l.property()],e.FeatureServiceSnappingSource.prototype,"_whereModule",void 0);e.FeatureServiceSnappingSource=h.__decorate([D.subclass("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],e.FeatureServiceSnappingSource);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});