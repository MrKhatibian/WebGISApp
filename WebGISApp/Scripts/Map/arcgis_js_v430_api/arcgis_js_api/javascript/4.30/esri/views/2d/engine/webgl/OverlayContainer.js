// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../core/libs/gl-matrix-2/math/mat3 ../../../../core/libs/gl-matrix-2/factories/mat3f32 ../../../../core/libs/gl-matrix-2/factories/vec2f32 ../../../../core/libs/gl-matrix-2/factories/vec3f32 ../../../../geometry/support/normalizeUtils ../../../../geometry/support/spatialReferenceUtils ../../viewpointUtils ../brushes ./enums ./WGLContainer".split(" "),function(l,x,y,z,A,B,C,D,E,F){class G extends F{constructor(){super(...arguments);this._viewStateId=-1;this._dvsMat3=x.create()}get dvsMat3(){return this._dvsMat3}beforeRender(a){this._updateMatrices(a);
this._updateOverlays(a,this.children);for(const c of this.children)c.beforeRender(a)}prepareRenderPasses(a){const c=a.registerRenderPass({name:"overlay",brushes:[D.brushes.overlay],target:()=>this.children,drawPhase:E.WGLDrawPhase.MAP});return[...super.prepareRenderPasses(a),c]}_updateMatrices(a){var {state:c}=a;const {id:q,size:f,pixelRatio:m,resolution:n,rotation:t,viewpoint:u,displayMat3:p}=c;if(this._viewStateId!==q){a=Math.PI/180*t;var b=m*f[0],d=m*f[1];this._localOrigin=u.targetGeometry.clone();
var {x:g,y:h}=this._localOrigin;c=A.normalizeMapX(g,c.spatialReference);this._localOrigin.x=c;this._localOrigin.y=h;c=n*b;var k=n*d,e=l.identity(this._dvsMat3);l.multiply(e,e,p);l.translate(e,e,y.fromValues(b/2,d/2));l.scale(e,e,z.fromValues(b/c,-d/k,1));l.rotate(e,e,-a);this._viewStateId=q}}_updateOverlays(a,c){({state:a}=a);const {rotation:q,spatialReference:f,worldScreenWidth:m,size:n,viewpoint:t}=a,u=this._localOrigin;let p=0;var b=B.getInfo(f);if(b&&f.isWrappable){var d=180/Math.PI*q;var g=Math.round(n[0]*
Math.abs(Math.cos(d))+n[1]*Math.abs(Math.sin(d)));const [k,e]=b.valid;b=C.getWorldWidth(f);const {x:w,y:H}=t.targetGeometry;d=[0,0];a.toScreen(d,[w,H]);const r=[0,0];g=g>m?.5*m:.5*g;var h=Math.floor((w+.5*b)/b);const I=k+h*b;h=e+h*b;const v=[d[0]+g,0];a.toMap(r,v);r[0]>h&&(p=b);v[0]=d[0]-g;a.toMap(r,v);r[0]<I&&(p=-b);d={worldWidth:b,xBounds:[k,e]}}for(const k of c)k.updateDrawCoords(u,p,f,d)}}return G});