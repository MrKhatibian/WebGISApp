// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/libs/gl-matrix-2/math/mat3 ../../../../core/libs/gl-matrix-2/factories/mat3f32 ./enums ./RenderBucket ./decluttering/config ../webgl/TiledDisplayObject".split(" "),function(l,v,h,m,g,k,n,r){class p extends r.TiledDisplayObject{constructor(a,c,b,e,d,f,t,u=null){super(a,c,b,e,d,f,4096,4096);this.styleRepository=t;this._memCache=u;this.type="vector-tile";this._referenced=0;this._hasSymbolBuckets=!1;this._memoryUsedByLayerData=0;this.layerData=new Map;
this.status="loading";this.allSymbolsFadingOut=!1;this.lastOpacityUpdate=0;this.symbols=new Map;this.decluttered=this.neededForCoverage=this.isCoverage=!1;this.parentTile=null;this.childrenTiles=new Set;this.featureIndex=null;this.triangleCount=0;this._processed=!1;this._referenced=1;this.id=a.id}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<n.fadeDuration}get isHoldingForFade(){return this._hasSymbolBuckets&&
(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<n.fadeDuration)}get wasRequested(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status}setData(a){this.changeDataImpl(a);this.requestRender();this.ready();this._processed=!0}deleteLayerData(a){let c=!1;for(const b of a)if(a=this.layerData.get(b))this._memoryUsedByLayerData-=a.memoryUsed,a.type===g.BucketType.SYMBOL&&this.symbols.delete(b)&&(c=!0),a.destroy(),this.layerData.delete(b);this._memCache?.updateSize(this.key.id,
this,this._memoryUsedByLayerData);c&&(this.featureIndex?.clear(),this.emit("symbols-changed"));this.requestRender()}processed(){return this._processed}hasData(){return 0<this.layerData.size}dispose(){"unloaded"!==this.status&&(this.featureIndex=null,q.delete(this),p._destroyRenderBuckets(this.layerData),this.layerData.clear(),this._memoryUsedByLayerData=0,this.destroy(),this.status="unloaded")}release(){return 0===--this._referenced?(this.dispose(),this.stage=null,!0):!1}retain(){++this._referenced}get referenced(){return this._referenced}get usedMemory(){return this._memoryUsedByLayerData+
256}changeDataImpl(a){this.featureIndex?.clear();let c=!1;if(a){const {bucketsWithData:b,emptyBuckets:e}=a;a=this._createRenderBuckets(b);if(e&&0<e.byteLength){const d=new Uint32Array(e);for(const f of d)this._deleteLayerData(f)}for(const [d,f]of a)this._deleteLayerData(d),f.type===g.BucketType.SYMBOL&&(this.symbols.set(d,f.symbols),c=!0),this._memoryUsedByLayerData+=f.memoryUsed,this.layerData.set(d,f);this._memCache?.updateSize(this.key.id,this,this.usedMemory)}this._hasSymbolBuckets=!1;for(const [,
b]of this.layerData)b.type===g.BucketType.SYMBOL&&(this._hasSymbolBuckets=!0);c&&this.emit("symbols-changed")}attachWithContext(a){this.stage={context:a,trashDisplayObject(c){c.processDetach()},untrashDisplayObject(){return!1}}}setTransform(a){super.setTransform(a);var c=this.resolution/(a.resolution*a.pixelRatio);const b=this.width/this.rangeX*c;c*=this.height/this.rangeY;const e=[0,0];a.toScreen(e,[this.x,this.y]);const d=this.transforms.tileUnitsToPixels;h.identity(d);h.translate(d,d,e);h.rotate(d,
d,Math.PI*a.rotation/180);h.scale(d,d,[b,c,1])}_createTransforms(){return{displayViewScreenMat3:m.create(),tileMat3:m.create(),tileUnitsToPixels:m.create()}}static _destroyRenderBuckets(a){if(a){var c=new Set;for(const b of a.values())c.has(b)||(b.destroy(),c.add(b));a.clear()}}_createRenderBuckets(a){const c=new Map,b=new Map;for(const e of a){a=this._deserializeBucket(e,b);for(const d of a.layerUIDs)c.set(d,a)}return c}_deserializeBucket(a,c){let b=c.get(a);if(b)return b;switch((new Uint32Array(a))[0]){case g.BucketType.FILL:b=
new k.FillRenderBucket(a,this.styleRepository);break;case g.BucketType.LINE:b=new k.LineRenderBucket(a,this.styleRepository);break;case g.BucketType.SYMBOL:b=new k.SymbolRenderBucket(a,this.styleRepository,this);break;case g.BucketType.CIRCLE:b=new k.CircleRenderBucket(a,this.styleRepository)}c.set(a,b);return b}_deleteLayerData(a){if(this.layerData.has(a)){var c=this.layerData.get(a);this._memoryUsedByLayerData-=c.memoryUsed;c.destroy();this.layerData.delete(a)}}}const q=new Map;l.VectorTile=p;l.printAllocations=
function(){q.forEach((a,c)=>{console.log(`\n${c.key}:`);a[0].forEach(b=>console.log(b));console.log("\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d");a[1].forEach(b=>console.log(b))})};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});