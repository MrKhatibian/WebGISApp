// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../geometry ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/data/projectionSupport ../aggregation/ComputedAggregateField ./AAggregateStrategy ./AProcessorStrategy ../sources/FeatureSourceMessage ../support/ComputedAttributeStorage ../support/FeatureFilter ../support/FeatureMetadata ../support/FeatureSetReaderJSON ../../../tiling/TileKey ../../../../../geometry/SpatialReference".split(" "),
function(n,G,p,w,x,y,z,A,q,B,C,D,r,E,F){class t extends A.ASendState{constructor(a,b){super(a);this.bins=new Map;this.featureCache=new Map;this.done=!1;this._store=b}reset(){this.destroy();this.done=!1}destroy(){const a=this.subscription.tile.key.level;for(const b of this.featureCache.keys())this._store.releaseDisplayIdForObjectId(`${b}.${a}`);this.bins.clear();this.featureCache.clear();this.handledChunks.clear()}get tile(){return this.subscription.tile}*featuresWorldSpace(){for(const a of this.featureCache.values()){const b=
a.clone();b.geometry&&p.unquantizeOptimizedGeometry(b.geometry,b.geometry,!1,!1,this.subscription.tile.transform);yield b}}}class u extends z.AAggregateStrategy{static async create(a,b,c,g,d){const h=new B.ComputedAttributeStorage({spatialReference:b}),f=await Promise.all(a.fields.map(async k=>y.ComputedAggregateField.create(h,k))),e=a.featureFilter?await C.create({geometryType:c.metadata.geometryType,hasM:!1,hasZ:!1,timeInfo:c.metadata.timeInfo,fieldsIndex:c.metadata.fieldsIndex,spatialReference:b,
filterJSON:a.featureFilter}):null;"geohash"===a.index.type&&await x.checkProjectionSupport(b,F.WGS84);return new u(a,e,d,f,b,c,g)}constructor(a,b,c,g,d,h,f){super(h,f,d,g);this._schema=a;this._featureFilter=b;this._timeZone=c;this._metadata=new D.FeatureMetadata({geometryType:"esriGeometryPolygon",objectIdField:"aggregateId",fields:a.fields,globalIdField:null,spatialReference:h.metadata.spatialReference,subtypeField:null,subtypes:null,timeInfo:null,timeReferenceUnknownClient:null,typeIdField:null,
types:null})}createState(a){return new t(a,this._attributeStore)}async *applyLocalEdit(a){for(const b of this._sendStates.values())b.reset(),yield new q.FeatureTileAppendMessage(b.subscription,r.FeatureSetReaderJSON.empty(this._source.metadata),!0,!1,{})}displayMap(a,b,c){a=new Map(a.map(h=>[b(h),h]));const g=[];for(const h of this._sendStates.values())for(const f of h.featuresWorldSpace()){const {objectId:e,displayId:k}=f;var d=a.get(e);null!=d&&(d=c(k,d,e),g.push(d),a.delete(e))}return g}getDisplayFeatures(a){a=
new Set(a);const b=new Set,c=[];for(const g of this._sendStates.values())for(const d of g.featuresWorldSpace())a.has(d.displayId)&&!b.has(d.objectId)&&(d.geometry&&c.push({...p.convertToFeature(d,this._metadata.geometryType,!1,!1),displayId:d.displayId}),b.add(d.objectId));return{features:[],aggregates:c}}getFeatureObjectIdsForAggregate(a){for(const b of this._sendStates.values())for(const c of b.bins.values())if(c.id===a)return Array.from(c.containedObjectIds);return[]}async *updateChunks(){if(this._source.chunks().length)for(const a of this._sendStates.values())yield*this._update(a,
this._source)}forEachAggregateWorldSpace(a){for(const b of this._sendStates.values())for(const c of b.featuresWorldSpace())a(c)}_createIndexOptions(a){switch(this._schema.index.type){case "geohash":return{type:"geohash",fields:this.aggregateFields,featureFilter:this._featureFilter,geohashLevel:this._schema.index.fixBinLevel,spatialReference:this.spatialReference,timeZone:this._timeZone,scale:a.scale};case "grid":const b=this._schema.index.fixedBinLevel;a=null!=b?a.tileInfoView.getLODInfoAt(b).scale:
a.scale;return{type:"grid",fields:this.aggregateFields,cellSize:this._schema.index.size,featureFilter:this._featureFilter,spatialReference:this.spatialReference,timeZone:this._timeZone,scale:a}}}async *_update(a,b){const {handledChunks:c,subscription:g,bins:d,featureCache:h}=a;var f=g.tile;if(!a.done){for(var e of b.chunks())if(!c.has(e.chunkId)){c.add(e.chunkId);var k=e.queryInfo;if("tileId"in k&&(k=new E(k.tileId),k.level!==f.level||k.world!==f.key.world))continue;e.getAggregateIndex(this._createIndexOptions(a.tile)).putBounded(d,
a.tile.extent,a.tile.resolution)}f=[];e=g.tile.transform;k=g.tile.key.level;for(var l of d.values()){let m=h.get(l.id);if(m)m.attributes=l.getAttributes();else{const v=l.getGeometry(this.spatialReference,e);m=new w.OptimizedFeature(v,l.getAttributes(),null);v||(m.centroid=l.getGeometricCentroid(this.spatialReference,e));m.objectId=l.id;m.displayId=this._attributeStore.createDisplayIdForObjectId(`${m.objectId}.${k}`);h.set(l.id,m)}f.push(m)}this.events.emit("changed");a.done=!b.updateTracking.updating;
b=r.FeatureSetReaderJSON.fromOptimizedFeatures(f,this._metadata,e);l=b.getCursor();for(f=a.subscription.tile.createArcadeEvaluationOptions(this._timeZone);l.next();)this._attributeStore.setAttributeData(l.getDisplayId(),l,f);yield new q.FeatureTileUpdateMessage(a.subscription,b,[],a.done,{})}}}n.BinningState=t;n.BinningStrategy=u;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});