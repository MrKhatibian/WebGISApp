// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/math/vec2 ../../core/libs/gl-matrix-2/factories/vec2f64 ./viewpointUtils ./ViewState".split(" "),function(d,f,n,g,v,w,x,p,k,t,u,q){var l,m;let e=l=class extends f{constructor(){super(...arguments);this.bottom=this.right=this.top=this.left=0}clone(){return new l({left:this.left,
top:this.top,right:this.right,bottom:this.bottom})}};d.__decorate([g.property()],e.prototype,"left",void 0);d.__decorate([g.property()],e.prototype,"top",void 0);d.__decorate([g.property()],e.prototype,"right",void 0);d.__decorate([g.property()],e.prototype,"bottom",void 0);e=l=d.__decorate([p.subclass("esri.views.2d.PaddedViewState.Padding")],e);f=m=class extends q{constructor(...a){super(...a);this.paddedViewState=new q;this._updateContent=(()=>{const c=t.create();return()=>{var b=this._get("size");
const h=this._get("padding");if(b&&h){var r=this.paddedViewState;k.set(c,h.left+h.right,h.top+h.bottom);k.subtract(c,b,c);k.copy(r.size,c);if(b=r.viewpoint)this.viewpoint=b}}})();this.addHandles(n.watch(()=>[this.size,this.padding],()=>this._updateContent(),n.sync));this.padding=new e;this.size=[0,0]}set padding(a){this._set("padding",a||new e)}set viewpoint(a){if(a){this.paddedViewState.viewpoint=a;const b=this._viewpoint2D;if(this._get("padding")){var c=a.clone();u.addPadding(c,a,this._get("size"),
this._get("padding"));a=c.targetGeometry;b.center[0]=a.x;b.center[1]=a.y;b.rotation=c.rotation;b.scale=c.scale;b.spatialReference=a.spatialReference}else c=a.targetGeometry,b.center[0]=c.x,b.center[1]=c.y,b.rotation=a.rotation,b.scale=a.scale,b.spatialReference=c.spatialReference;this._update()}}clone(){return new m({padding:this.padding.clone(),size:this.size.slice(),viewpoint:this.paddedViewState.viewpoint.clone(),pixelRatio:this.pixelRatio})}};d.__decorate([g.property()],f.prototype,"paddedViewState",
void 0);d.__decorate([g.property({type:e})],f.prototype,"padding",null);d.__decorate([g.property()],f.prototype,"viewpoint",null);return f=m=d.__decorate([p.subclass("esri.views.2d.PaddedViewState")],f)});