// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/RandomLCG ../../../definitions ../../../meshing/SimpleMesh ../mesh/utils ../../../../../../webgl/enums ../../../../../../webgl/FramebufferObject ../../../../../../webgl/Renderbuffer ../../../../../../webgl/RenderbufferDescriptor ../../../../../../webgl/Texture ../../../../../../webgl/TextureDescriptor".split(" "),function(k,m,h,n,p,f,q,r,t,u,l){class v{constructor(){this._dotTextureSize=0;this._dotMesh=this._dotTextures=null}destroy(){this._disposeTextures();
this._dotFBO&&this._dotFBO.dispose();this._dotMesh&&this._dotMesh.destroy()}getFBO(c){if(null==this._dotFBO){var a=h.tileSize;const b=h.tileSize,d=new l.TextureDescriptor(a,b);d.samplingMode=f.TextureSamplingMode.NEAREST;d.wrapMode=f.TextureWrapMode.CLAMP_TO_EDGE;a=new r.Renderbuffer(c,new t.RenderbufferDescriptor(f.RenderbufferFormat.DEPTH_STENCIL,a,b));this._dotFBO=new q.FramebufferObject(c,d,a)}return this._dotFBO}getDotDensityMesh(c){if(null==this._dotMesh){var a=h.tileSize;const b=a*a,d=new Int16Array(2*
b);for(let e=0;e<a;e++)for(let g=0;g<a;g++)d[2*(g+e*a)]=g,d[2*(g+e*a)+1]=e;a=[{count:2,type:f.DataType.UNSIGNED_SHORT,name:"a_position",offset:0}];a={hash:p.vertexLayoutHash(a),attributes:a,stride:4};this._dotMesh=n.SimpleMesh.create(c,{primitive:f.PrimitiveType.POINTS,vertex:d,count:b,layout:a})}return this._dotMesh}getDotDensityTextures(c,a,b){if(this._dotTextureSize!==a||this._seed!==b)this._disposeTextures(),this._dotTextureSize=a,this._seed=b;null===this._dotTextures&&(b=new m(b),this._dotTextures=
[this._allocDotDensityTexture(c,a,b),this._allocDotDensityTexture(c,a,b)]);return this._dotTextures}_disposeTextures(){if(this._dotTextures){for(let c=0;c<this._dotTextures.length;c++)this._dotTextures[c].dispose();this._dotTextures=null}}_allocDotDensityTexture(c,a,b){const d=new Float32Array(a*a*4);for(let e=0;e<d.length;e++)d[e]=b.getFloat();b=new l.TextureDescriptor;b.dataType=f.PixelType.FLOAT;b.samplingMode=f.TextureSamplingMode.NEAREST;b.width=a;b.height=a;return new u.Texture(c,b,d)}}k.DotDensityResources=
v;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});