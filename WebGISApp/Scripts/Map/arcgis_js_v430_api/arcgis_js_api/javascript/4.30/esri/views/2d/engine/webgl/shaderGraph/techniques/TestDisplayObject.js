// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../DisplayObject ../../DisplayEntity ../../cpuMapped/MappedMesh ../../util/Reader ../../util/serializationUtils ../../../../../webgl/enums".split(" "),function(g,l,m,n,p,q,h){class k extends l.DisplayObject{static fromMeshData(a,d,e){const c=new Map;for(const b of a.data){const f=new n.MappedMesh(d,b.layout);f.append(b);f.upload();c.set(b.instanceId,f)}a=new p(a.entities);a=q.deserializeList(a,m,{})??[];return new k(a,c,e)}constructor(a,d,e){super();this.displayObjects=a;this._instanceIdToMesh=
d;this._store=e}draw(a,d){if(null==this._activeInstanceId)throw Error("InternalError: No active instanceId");for(const e of this.displayObjects)for(const c of e.records){if(c.instanceId!==this._activeInstanceId)continue;const b=a.context,f=this._instanceIdToMesh.get(this._activeInstanceId).getGeometryVAO(b,d),r=c.indexStart*Uint32Array.BYTES_PER_ELEMENT;b.bindVAO(f);b.drawElements(h.PrimitiveType.TRIANGLES,c.indexCount,h.DataType.UNSIGNED_INT,r);b.bindVAO(null)}}getStencilReference(){return 0}getAttributePrecisionPackFactors(){return{}}destroy(){for(const a of this._instanceIdToMesh.values())a.destroy();
this._instanceIdToMesh.clear()}setActiveMesh(a){this._activeInstanceId=a}getInput(){if(null==this._activeInstanceId)throw Error("InternalError: No active instanceId");return this._store.getInstance(this._activeInstanceId).getInput()}_createTransforms(){throw Error("Method not implemented.");}}g.TestDisplayObject=k;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});