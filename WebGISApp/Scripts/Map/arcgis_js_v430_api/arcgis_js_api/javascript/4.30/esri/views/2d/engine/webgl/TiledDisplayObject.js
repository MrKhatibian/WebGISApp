// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/math/mat3","../DisplayObject","../../tiling/TileKey"],function(f,g,k,l){class m extends k.DisplayObject{constructor(a,b,c,e,d,h,n=d,p=h){super();this.tileDebugInfoTexture=null;this.debugInfo={display:{length:0,minOrderedLength:0,minUnorderedLength:0,triangleCount:0},memory:{bytesUsed:0,bytesReserved:0}};this._destroyed=!1;this.key=new l(a);this.resolution=b;this.x=c;this.y=e;this.width=d;this.height=h;this.rangeX=n;this.rangeY=p}destroy(){this.tileDebugInfoTexture&&
(this.tileDebugInfoTexture.dispose(),this.tileDebugInfoTexture=null);this._destroyed=!0}get debugSlot(){let a=this;for(;a.parent!==this._stage;){if(!a.parent)return 0;a=a.parent}return this._stage.children.indexOf(a)}setTransform(a){const b=this.resolution/(a.resolution*a.pixelRatio),c=this.transforms.tileMat3,[e,d]=a.toScreenNoRotation([0,0],[this.x,this.y]);g.set(c,this.width/this.rangeX*b,0,0,0,this.height/this.rangeY*b,0,e,d,1);g.multiply(this.transforms.displayViewScreenMat3,a.displayViewMat3,
c)}get destroyed(){return this._destroyed}}f.TiledDisplayObject=m;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});