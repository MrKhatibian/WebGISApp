// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../core/Error ../../../../core/Logger ../../../../core/reactiveUtils ../../../../core/libs/gl-matrix-2/factories/mat3f32 ../DisplayObject ./Mesh2D ../../support/clippingUtils ../../../webgl/VertexArrayObject".split(" "),function(g,h,k,l,m,c,n,p){class d extends m.DisplayObject{constructor(b,a){super();this._clip=a;this._cache={};this.stage=b;this._handle=k.watch(()=>a.version,()=>this._invalidate());this.ready()}static fromClipArea(b,a){return new d(b,a)}_destroyGL(){null!=this._cache.mesh&&
(this._cache.mesh.destroy(),this._cache.mesh=null);null!=this._cache.vao&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL();this._handle.remove()}getVAO(b,a,q,r){const [e,f]=a.size;if("geometry"===this._clip.type||this._lastWidth!==e||this._lastHeight!==f)this._lastWidth=e,this._lastHeight=f,this._destroyGL();if(null==this._cache.vao){a=this._createMesh(a,this._clip);const t=a.getIndexBuffer(b),u=a.getVertexBuffers(b);this._cache.mesh=a;this._cache.vao=new p.VertexArrayObject(b,
q,r,u,t)}return this._cache.vao}_createTransforms(){return{displayViewScreenMat3:l.create()}}_invalidate(){this._destroyGL();this.requestRender()}_createMesh(b,a){switch(a.type){case "rect":return c.fromScreenExtent(n.createScreenExtent(a,b.size[0],b.size[1]));case "path":return c.fromPath(a);case "geometry":return c.fromGeometry(b,a);default:return h.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new g("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),
c.fromScreenExtent({xmin:0,ymin:0,xmax:1,ymax:1})}}}return d});