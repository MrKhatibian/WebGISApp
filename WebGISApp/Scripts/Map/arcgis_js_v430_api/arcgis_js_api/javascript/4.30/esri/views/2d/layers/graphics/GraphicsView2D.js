// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/has ../../../../core/Identifiable ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/jsonUtils ../../../../layers/support/FieldsIndex ../../../../symbols/cim/CIMSymbolHelper ../../../../symbols/cim/OverrideHelper ../../../../symbols/support/defaults ../../engine/webgl/definitions ../../engine/webgl/FeatureTile ../../engine/webgl/mesh/MeshData ../../engine/webgl/mesh/factories/ResourceProxy ../../engine/webgl/shaderGraph/techniques/createGraphicSymbolMeshSchemas ../features/schema/processor/StorageSchema ../features/support/AttributeStore ../features/support/ComputedAttributeStorage ../features/support/FeatureMetadata ../features/support/GraphicsReader ./GraphicStore ../support/FeatureCommandQueue ../support/UpdateTracking2D".split(" "),
function(h,g,x,l,y,z,u,A,k,S,B,C,q,D,v,E,t,F,G,H,I,J,K,L,M,N,O,P,Q,R){class n{static getOrCreate(a,b,c){let d=b.get(a.id);d||(d=new n(a,c),b.set(a.id,d));return d}static fromItems(a,b,c){a=new n(a,c);a.addedOrModified.push(...b);return a}constructor(a,b){this.tile=a;this.metadata=b;this.addedOrModified=[];this.removed=[]}get reader(){this._reader||(this._reader=O.GraphicsReader.from(this.addedOrModified,this.tile,this.metadata));return this._reader}}g=class extends y.IdentifiableMixin(g){constructor(a){super(a);
this._attached=!1;this._tiles=new Map;this._controller=new AbortController;this._hashToSymbolInfo=new Map;this._lastCleanup=performance.now();this._cleanupRequired=!0;this.lastUpdateId=-1;this.renderer=null;this._updateTracking=new R.UpdateTracking2D({debugName:"GraphicsView2D"});this.updateRequested=!1;this.defaultPointSymbolEnabled=!0;this._commandQueue=new Q({process:b=>{switch(b.type){case "update":return this._update();default:throw Error("InternalError: Unsupported command");}}});this.graphicUpdateHandler=
this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy();this.renderer=this.view=null;this._set("graphics",null);this._controller.abort();this._graphicStore.clear();this._attributeStore=null;this._hashToSymbolInfo.clear();this._updateTracking.destroy();this._commandQueue.destroy()}_initAttributeStore(){this._storage=new M.ComputedAttributeStorage({spatialReference:this.view.spatialReference,fields:new D});this._attributeStore=new L.AttributeStore({isLocal:!0,update:b=>{l("esri-2d-update-debug")&&
console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:b});this.container.attributeView.requestUpdate(b);this.container.requestRender();l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:b})}});const a=K.createStorageSchema(null,[]);this._attributeStore.update(a,this._storage,null);this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore();this._metadata=
N.GraphicsMetadata.create(this.view.spatialReference);this._resourceProxy=new I.ResourceProxy({fetch:a=>Promise.all(a.map(b=>this.view.stage.textureManager.rasterizeItem(b))),fetchDictionary:a=>{throw Error("InternalError: Graphics do not support Dictionary requests");}});this.addHandles([A.watch(()=>this._effectiveRenderer,()=>this._pushUpdate()),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{this.addHandles([this.graphics.on("change",()=>this._pushUpdate())]);
this._graphicStore=new P(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore);this._attached=!0;this.requestUpdate();this._pushUpdate()})]);this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);this._onTileUpdate({added:this.view.graphicsTileStore.tiles,removed:[]})}get _effectiveRenderer(){return"function"===typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const a=
!this._attached||this._updateTracking.updating;l("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${a}\n  -> attaching ${!this._attached}\n  -> updateTracking ${this._updateTracking.updating}`);return a}hitTest(a){if(!this.view||this.view.suspended)return[];const {resolution:b,rotation:c}=this.view.state;a=this._graphicStore.hitTest(a.x,a.y,2,b,c);const d=new Set(a),e=this.graphics.items.reduce((f,m)=>{d.has(m.uid)&&f.set(m.uid,m);return f},new Map);return a.map(f=>e.get(f)).filter(x.isSome)}requestUpdate(){this.updateRequested||
(this.updateRequested=!0,this.requestUpdateCallback());this.notifyChange("updating")}processUpdate(a){this.updateRequested&&(this.updateRequested=!1,this.update(a))}viewChange(){this.requestUpdate()}setHighlight(a){const b=[];for(const {objectId:c,highlightFlags:d}of a){const e=this._graphicStore.getItem(c)?.displayId;b.push({objectId:c,highlightFlags:d,displayId:e})}this._attributeStore.setHighlight(b,a);this._pushUpdate()}graphicUpdateHandler(a){this._pushUpdate()}update(a){this.updateRequested=
!1;this._attached&&this._graphicStore.updateLevel(a.state.resolution)}pushUpdate(){this._pushUpdate()}_pushUpdate(){u.ignoreAbortErrors(this._commandQueue.push({type:"update"}))}async _update(){try{l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const a=await this._graphicStore.update(this.graphics,c=>this._getSymbolForGraphic(c),c=>this._ensureSymbolResource(c));if(!a.hasAnyUpdate()){this._attributeStore.sendUpdates();return}a.removed.length&&(this._cleanupRequired=
!0);l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,a);const b=this._createTileMessages(a);await this._fetchResources(b);this._write(b);for(const c of a.added)this._setFilterState(c);for(const c of a.updated)this._setFilterState(c);l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,a);this._attributeStore.sendUpdates();l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,a)}catch(a){}this._cleanupSharedResources()}_createTileMessages(a){const b=
new Map;for(var c of a.added){var d=this.view.graphicsTileStore.getIntersectingTiles(c.bounds);for(const e of d)n.getOrCreate(e,b,this._metadata).addedOrModified.push(c)}for(const e of a.updated){c=this.view.graphicsTileStore.getIntersectingTiles(e.prevBounds);d=this.view.graphicsTileStore.getIntersectingTiles(e.bounds);for(const f of c)n.getOrCreate(f,b,this._metadata).removed.push(e.displayId);for(const f of d)n.getOrCreate(f,b,this._metadata).addedOrModified.push(e)}for(const e of a.removed){a=
this.view.graphicsTileStore.getIntersectingTiles(e.bounds);for(const f of a)n.getOrCreate(f,b,this._metadata).removed.push(e.displayId)}return Array.from(b.values())}async _fetchResources(a){for(const {tile:b,reader:c}of a){l("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${b.id}] GraphicsView fetchResources`,a);const d=c.getCursor();for(;d.next();)for(const e of d.getMeshWriters())e.enqueueRequest(this._resourceProxy,d,b.createArcadeEvaluationOptions(this.view.timeZone))}await this._resourceProxy.fetchEnqueuedResources()}_write(a){for(const b of a){l("esri-2d-update-debug")&&
console.debug(`Id[${this.layerId}] Tile[${b.tile.id}] GraphicsView write`,b);a=this._writeMeshes(b);let c=this._tiles.get(b.tile.key);c||=this._createFeatureTile(b.tile.key);l("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${b.tile.id}] GraphicsView onTileData`,b);this.container.onTileData(c,{type:"update",modify:a,remove:b.removed,end:!1,attributeEpoch:this._attributeStore.epoch});this.container.requestRender()}}_writeMeshes(a){const b=new H.MeshData(a.tile.id),c=a.reader.getCursor();
for(;c.next();){b.entityStart(c.getDisplayId(),c.getZOrder());for(const d of c.getMeshWriters())d.write(b,this._resourceProxy,c,a.tile.createArcadeEvaluationOptions(this.view.timeZone),a.tile.level);b.entityEnd()}return{...b.serialize().message,tileId:a.tile.id}}_setFilterState(a){const b=a.displayId,c=this._attributeStore.getHighlightFlags(a.objectId);this._attributeStore.setData(b,0,0,c|(a.visible?F.filterFlag0:0))}_getSymbolForGraphic(a){return null!=a.symbol?a.symbol:null!=this._effectiveRenderer?
this._effectiveRenderer.getSymbol(a):this._getNullSymbol(a)}async _ensureSymbolResource(a){if(a.symbol){var b=await this._getSymbolInfo(a.symbol);if(b){var c=b.linearCIM.filter(d=>"text"===d.type);0<c.length?(c=await this._getTextResources(a,c),a.symbolResource={symbolInfo:b,textInfo:c}):a.symbolResource={symbolInfo:b}}}}_getSymbolInfo(a){const b=a.hash();this._hashToSymbolInfo.has(b)||this._hashToSymbolInfo.set(b,this._createSymbolInfo(b,a).catch(c=>null));return this._hashToSymbolInfo.get(b)}async _createSymbolInfo(a,
b){b=await this._convertToCIMSymbol(b);const c=await this._createLinearCIM(b),d=await this._createMeshWriters(b,c);return{hash:a,cimSymbol:b,linearCIM:c,meshWriters:d}}async _convertToCIMSymbol(a){a=v.symbolToCIM(a);return"web-style"===a.type?(await a.fetchCIMSymbol()).data:a}async _createLinearCIM(a){await Promise.all(v.CIMSymbolHelper.fetchResources(a.symbol,this._cimResourceManager,[]));return this.view.stage.cimAnalyzer.analyzeSymbolReference(a,!1)}async _createMeshWriters(a,b){u.throwIfAborted(this._controller.signal);
const c=this.view.stage.meshWriterRegistry;a=await J.createGraphicSymbolMeshSchemas(a,b,this.container.instanceStore);return Promise.all(a.map(d=>c.createMeshWriter(this._storage,this._resourceProxy,{tileInfo:this.view.featuresTilingScheme.tileInfo},d)))}_onTileUpdate(a){if(a.added&&0<a.added.length)for(const b of a.added)this._updateTracking.addPromise(this._addTile(b));if(a.removed&&0<a.removed.length)for(const b of a.removed)this._removeTile(b.key)}_createFeatureTile(a){var b=this.view.featuresTilingScheme.getTileBounds(C.create(),
a);const c=this.view.featuresTilingScheme.getTileResolution(a.level);b=new G.FeatureTile(a,c,b[0],b[3]);this._tiles.set(a,b);this.container.addChild(b);return b}async _addTile(a){if(this._attached){var b=this._graphicStore.queryItems(a);if(b.length){var c=this._createFeatureTile(a.key);a=n.fromItems(a,b,this._metadata);await this._fetchResources([a]);a=this._writeMeshes(a);c.onMessage({type:"append",append:a,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch})}}}_removeTile(a){if(this._tiles.has(a)){var b=
this._tiles.get(a);this.container.removeChild(b);b.destroy();this._tiles.delete(a)}}_getNullSymbol(a){a=a.geometry;return q.isPolyline(a)?t.errorPolylineSymbol2D:q.isPolygon(a)||q.isExtent(a)?t.errorPolygonSymbol2D:this.defaultPointSymbolEnabled?t.errorPointSymbol2D:null}async _getTextResources(a,b){var c=[];const d=[];for(var e=0;e<b.length;e++){const m=b[e],{resource:p,overrides:w}=m.textRasterizationParam;if(0<w?.length){var f=E.OverrideHelper.resolveSymbolOverrides({type:"CIMSymbolReference",
primitiveOverrides:w,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:p.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:p.symbol,textString:p.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},a,this.view.spatialReference,null,q.getJsonType(a.projectedGeometry),null,null);f.then(r=>{({textString:r}=r.symbolLayers[0].markerGraphics[0]);d.push({type:"cim-rasterization-info",
resource:{type:"text",textString:r||"",font:p.font}});m.text=p.textString=r||""});c.push(f)}else d.push({type:"cim-rasterization-info",resource:p})}0<c.length&&await Promise.all(c);a=d.map(m=>this.view.stage.textureManager.rasterizeItem(m));a=await Promise.all(a);z.assertIsSome(a);c=new Map;for(e=0;e<b.length;e++)f=b[e],c.set(f.textRasterizationParam.resource.symbol,{text:f.text,glyphMosaicItems:a[e]});return c}_cleanupSharedResources(){if(this._cleanupRequired){var a=performance.now();if(!(5E3>a-
this._lastCleanup)){this._cleanupRequired=!1;this._lastCleanup=a;a=new Set;for(var b of this._graphicStore.items())a.add(b.symbolResource?.symbolInfo.hash);b=new Set(this._hashToSymbolInfo.keys());for(const c of b.values())a.has(c)||this._hashToSymbolInfo.delete(c)}}}};h.__decorate([k.property()],g.prototype,"_effectiveRenderer",null);h.__decorate([k.property({constructOnly:!0})],g.prototype,"layerId",void 0);h.__decorate([k.property({constructOnly:!0})],g.prototype,"requestUpdateCallback",void 0);
h.__decorate([k.property()],g.prototype,"container",void 0);h.__decorate([k.property({constructOnly:!0})],g.prototype,"graphics",void 0);h.__decorate([k.property()],g.prototype,"renderer",void 0);h.__decorate([k.property()],g.prototype,"_updateTracking",void 0);h.__decorate([k.property()],g.prototype,"updating",null);h.__decorate([k.property()],g.prototype,"view",void 0);h.__decorate([k.property()],g.prototype,"updateRequested",void 0);h.__decorate([k.property()],g.prototype,"defaultPointSymbolEnabled",
void 0);return g=h.__decorate([B.subclass("esri.views.2d.layers.graphics.GraphicsView2D")],g)});