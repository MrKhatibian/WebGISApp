// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/has","./AFetchLoadStrategy"],function(d,e,f){class g extends f.AFetchLoadStrategy{constructor(){super(...arguments);this._chunksById=new Map}unload(a){this._removeChunks(a.tile)}_addChunk(a){const b=a.tile.id;this._chunksById.has(b)||this._chunksById.set(b,[]);const c=a.size();if(c||a.first||a.end)e("esri-2d-update-debug")&&console.debug(`Chunk[${a.chunkId}] ATileLoadStrategy.addChunk [count=${c}]`),this._chunksById.get(b).push(a),this._store.insert(a)}_removeChunks(a){const b=
this._chunksById.get(a.key.id)??[];for(const c of b)e("esri-2d-update-debug")&&console.debug(`Tile[${a.key.id}] Chunk[${c.chunkId}] ATileLoadStrategy.removeChunk`),this._store.remove(c);this._chunksById.delete(a.key.id)}}d.ATileLoadStrategy=g;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});