// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){class g{constructor(a,c){this._editGeometry=a;this._newPositions=c}apply(){const a=null==this._originalPositions?"apply":"redo";if(!this._originalPositions){const c=this._editGeometry.coordinateHelper;this._originalPositions=this._editGeometry.allVertices.map(d=>c.clone(d.pos))}this._apply(a,this._newPositions)}undo(){this._originalPositions&&this._apply("undo",this._originalPositions)}accumulate(a){return a instanceof g?(this._newPositions=a._newPositions,this._apply("apply",
this._newPositions),!0):!1}_apply(a,c){const d=this._editGeometry.coordinateHelper,e=this._editGeometry.allVertices;for(let b=0;b<e.length;b++)d.copy(c[b],e[b].pos);this._editGeometry.components.forEach(b=>b.unnormalizeVertexPositions());this._editGeometry.notifyChanges({operation:a,updatedVertices:e})}}f.SetAllVertexPositions=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});