// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../core/screenUtils","../../../../../../../symbols/cim/enums","../../../../../../../symbols/cim/utils","../../../definitions"],function(z,g,C,D,A){class v{static from(b){return"width"in b?this.fromSimpleMeshParams(b):this.fromComplexMeshParams(b)}static fromSimpleMeshParams(b){const a=new v(b.sprite,b.color,b.outlineColor,b.minPixelBuffer,b.placement,b.scaleInfo,b.effects),{type:d,width:k,height:c,angle:l,alignment:h,outlineSize:n,referenceSize:p,sprite:f,overrideOutlineColor:e}=
b;a.rawWidth=g.pt2px(k);a.rawHeight=g.pt2px(c);a.angle=l;a.alignment=h;a.outlineSize=g.pt2px(n);a.referenceSize=g.pt2px(p);a.overrideOutlineColor=e;a.offsetX=g.pt2px(b.offsetX);a.offsetY=g.pt2px(b.offsetY);"simple"!==d||f.sdf||(a.rawWidth=f.width,a.rawHeight=f.height);a.sizeRatio=f.sdf?2:1;a._computeSize(b,!1);return a}static fromComplexMeshParams(b){const a=new v(b.sprite,b.color,b.outlineColor,b.minPixelBuffer,b.placement,b.scaleInfo,b.effects);let {alignment:d,transforms:k,size:c,scaleX:l,anchorX:h,
anchorY:n,angle:p,colorLocked:f,frameHeight:e,widthRatio:q,offsetX:r,offsetY:t,outlineSize:w,referenceSize:E,scaleFactor:u,sizeRatio:F,isAbsoluteAnchorPoint:G,rotateClockwise:x,scaleSymbolsProportionally:B,sprite:y}=b;if(k&&0<k.infos.length){var m=D.applyParentTransform(c,p,x,r,t,k);c=m.size;p=m.rotation;r=m.offsetX;t=m.offsetY;x=!1}u&&(c*=u,r*=u,t*=u);m=y.width/y.height*l;a.alignment=d;a.rawHeight=g.pt2px(c);a.rawWidth=a.rawHeight*m;a.referenceSize=g.pt2px(E);a.sizeRatio=F;a.angle=p;a.rotateClockwise=
x;a.anchorX=h;a.anchorY=n;a.offsetX=g.pt2px(r);a.offsetY=g.pt2px(t);G&&c&&(a.anchorX=y.sdf?h/(c*q):h/(c*m),a.anchorY=n/c);m=B&&e?c/e:1;a.outlineSize=0===w||isNaN(w)?0:g.pt2px(w)*m;a.scaleSymbolsProportionally=B;a.colorLocked=f;a._computeSize(b,!0);return a}constructor(b,a,d,k,c,l,h){this.sprite=b;this.color=a;this.outlineColor=d;this.minPixelBuffer=k;this.placement=c;this.scaleInfo=l;this.effects=h;this.referenceSize=this.outlineSize=this.angle=this.rawHeight=this.rawWidth=0;this.sizeRatio=1;this.alignment=
C.Alignment.SCREEN;this.colorLocked=this.overrideOutlineColor=this.scaleSymbolsProportionally=!1;this.offsetY=this.offsetX=this.texYmax=this.texXmax=this.texYmin=this.texXmin=this.computedHeight=this.computedWidth=this.anchorY=this.anchorX=0;this.rotateClockwise=!0}get boundsInfo(){return{size:Math.max(this.computedHeight,this.computedWidth),offsetX:this.offsetX,offsetY:this.offsetY}}_computeSize(b,a){const {sprite:d,hasSizeVV:k}=b;var c=!!d.sdf;const {rawWidth:l,rawHeight:h,sizeRatio:n,outlineSize:p}=
this;b=l*n;const f=h*n;if(c&&!k){var e=p+2;this.computedWidth=Math.min((a&&l>h?b:l)+e,b);this.computedHeight=Math.min(h+e,f)}else this.computedWidth=b,this.computedHeight=f;a=c?Math.max(d.width,d.height)/Math.max(b,f):1;e=.5*(b-this.computedWidth)*a;var q=.5*(f-this.computedHeight)*a;a=d.rect.x+A.spritePadding+e;c=d.rect.y+A.spritePadding+q;e=a+d.width-2*e;q=c+d.height-2*q;this.texXmin=Math.floor(a);this.texYmin=Math.floor(c);this.texXmax=Math.ceil(e);this.texYmax=Math.ceil(q);this.computedWidth*=
(this.texXmax-this.texXmin)/(e-a);this.computedHeight*=(this.texYmax-this.texYmin)/(q-c);this.anchorX*=b/this.computedWidth;this.anchorY*=f/this.computedHeight}}z.ComputedMarkerParams=v;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});