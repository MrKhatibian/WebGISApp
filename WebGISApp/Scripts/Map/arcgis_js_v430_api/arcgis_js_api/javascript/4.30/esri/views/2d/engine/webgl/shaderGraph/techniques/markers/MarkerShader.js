// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../chunks/tslib.es6 ../../GraphShaderModule ../../graph/glsl ./markerConstants ../shaders/AFeatureShader ../shaders/constants ../shaders/hittestUtils ../shaders/MosaicInfo ../shaders/utils ../shaders/VisualVariableColor ../shaders/VisualVariableOpacity ../shaders/VisualVariableRotation ../shaders/VisualVariableSizeMinMaxValue ../shaders/VisualVariableSizeScaleStops ../shaders/VisualVariableSizeStops ../shaders/VisualVariableSizeUnitValue ../shaders/vvUtils".split(" "),
function(B,h,k,b,z,D,F,l,M,y,N,O,P,Q,R,S,T,C){function x(a,c,d,f){return c.multiply(a.x).add(d.multiply(a.y)).add(f.multiply(a.z))}function E(a){return a.multiply(a).divide(128)}class v extends D.FeatureVertexInput{}h.__decorate([k.location(3,b.Vec4)],v.prototype,"color",void 0);h.__decorate([k.location(4,b.Vec4)],v.prototype,"outlineColor",void 0);h.__decorate([k.location(5,b.Vec2)],v.prototype,"offset",void 0);h.__decorate([k.location(6,b.Vec2)],v.prototype,"textureUV",void 0);h.__decorate([k.location(7,
b.Vec4)],v.prototype,"sizing",void 0);h.__decorate([k.location(8,b.Float)],v.prototype,"placementAngle",void 0);h.__decorate([k.location(9,b.Float)],v.prototype,"sizeRatio",void 0);h.__decorate([k.location(10,b.Vec2)],v.prototype,"zoomRange",void 0);class A extends k.ComputeVertexInput{}h.__decorate([k.location(12,b.Vec2)],A.prototype,"offsetNextVertex1",void 0);h.__decorate([k.location(13,b.Vec2)],A.prototype,"offsetNextVertex2",void 0);h.__decorate([k.location(14,b.Vec2)],A.prototype,"textureUVNextVertex1",
void 0);h.__decorate([k.location(15,b.Vec2)],A.prototype,"textureUVNextVertex2",void 0);class G extends D.FeatureFragmentInput{}class t extends D.AFeatureShader{constructor(){super(...arguments);this.computeAttributes={offset:["offsetNextVertex1","offsetNextVertex2"],textureUV:["textureUVNextVertex1","textureUVNextVertex2"]}}vertex(a,c){var d=E(a.sizing.x),f=E(a.sizing.y),g=E(a.sizing.z),p=a.placementAngle;const w=y.getBit(a.bitset,z.MarkerConstants.bitset.isSDF),u=y.getBit(a.bitset,z.MarkerConstants.bitset.isMapAligned);
var n=y.getBit(a.bitset,z.MarkerConstants.bitset.scaleSymbolsProportionally),e=y.getBitBool(a.bitset,z.MarkerConstants.bitset.colorLocked),m=C.getVisualVariableOpacity(this,a.id);e=C.getVisualVariableColor(this,a.id,a.color,e).multiply(m);m=this.view.displayViewScreenMat3.multiply(new b.Vec3(a.pos.xy,1));g=C.getVisualVariableSize(this,a.id,g).divide(g);d=d.multiply(g);var q=a.offset.xy.multiply(g);n=f.multiply(n.multiply(g.subtract(1)).add(1));n=b.min(n,b.max(d.subtract(.99),new b.Float(0)));f=b.max(n,
new b.Float(1));n=b.min(n,new b.Float(1));p=b.Mat3.fromRotation(p.multiply(F.c256ToRad));var r=C.getVisualVariableRotation(this,a.id);p=this._getViewRotationMatrix(u).multiply(r).multiply(p).multiply(new b.Vec3(q.xy,0));q=this.clip(a.id,a.zoomRange);m=new b.Vec4(m.xy.add(p.xy),q,1);p=a.textureUV.divide(this.mosaicInfo.size);n=a.outlineColor.multiply(n);q=y.getBit(a.bitset,z.MarkerConstants.bitset.overrideOutlineColor);r=a.sizeRatio.multiply(d).multiply(.5);return{glPosition:m,color:e,textureUV:p,
outlineColor:n,outlineSize:f,distanceToPx:r,isSDF:w,overrideOutlineColor:q,...this.maybeRunHittest(a,c,{pos:a.pos,size:d,sizeCorrection:g,isMapAligned:u,outlineSize:f,distanceToPx:r,isSDF:w})}}fragment(a){const c=this._getColor(a.textureUV,a);return this.getFragmentOutput(c,a)}hittest(a,c,d){return b.ifElse(b.lessThan(d.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(a,c,d),this._hittestMarker(a,c,d))}_getViewRotationMatrix(a){const c=this.view.displayViewMat3,d=this.view.displayMat3,
f=(new b.Float(1)).subtract(a);return c.multiply(a).add(d.multiply(f))}_getViewScreenMatrix(a){const c=this.view.viewMat3.multiply(this.view.tileMat3),d=this.view.tileMat3,f=(new b.Float(1)).subtract(a);return c.multiply(a).add(d.multiply(f))}_getColor(a,c){return b.ifElse(b.equal(c.isSDF,new b.Float(1)),this._getSDFColor(a,c),this._getSpriteColor(a,c))}_getSpriteColor(a,c){return b.texture2D(this.mosaicInfo.texture,a).multiply(c.color)}_getSDFColor(a,c){a=b.texture2D(this.mosaicInfo.texture,a);var d=
(new b.Float(.5)).subtract(y.rgba2float(a)).multiply(c.distanceToPx).multiply(F.softEdgeRatio);a=b.clamp((new b.Float(.5)).subtract(d),new b.Float(0),new b.Float(1));a=c.color.multiply(a);var f=c.outlineSize;this.highlight&&(f=b.max(f,c.overrideOutlineColor.multiply(4)));f=f.multiply(.5);d=b.abs(d).subtract(f);d=b.clamp((new b.Float(.5)).subtract(d),new b.Float(0),new b.Float(1));c=b.mix(c.outlineColor,c.color,c.overrideOutlineColor).multiply(d);return(new b.Float(1)).subtract(c.a).multiply(a).add(c)}_hittestSmallMarker(a,
c,d){const {position:f,distance:g,smallSymbolDistance:p}=this.hittestRequest;a=g.subtract(p);const {viewMat3:w,tileMat3:u}=this.view;c=w.multiply(u).multiply(new b.Vec3(d.pos,1)).xy;d=d.size.multiply(.5);return b.distance(c,f).subtract(d).add(a)}_hittestMarker(a,c,d){const {pos:f,sizeCorrection:g,isMapAligned:p}=d;var w=new b.Vec3(a.offset.multiply(g),0),u=new b.Vec3(c.offsetNextVertex1.multiply(g),0),n=new b.Vec3(c.offsetNextVertex2.multiply(g),0);const {viewMat3:e,tileMat3:m}=this.view;var q=e.multiply(m).multiply(new b.Vec3(f,
1)),r=this._getViewScreenMatrix(p);w=q.add(r.multiply(w)).xy;u=q.add(r.multiply(u)).xy;n=q.add(r.multiply(n)).xy;q=this.hittestRequest.distance;r=l.distPointTriangle(this.hittestRequest.position,f,u,n);return b.ifElse(b.greaterThan(r,q),r,this._hittestSamples(w,u,n,a,c,d))}_hittestSamples(a,c,d,f,g,p){const {outlineSize:w,isSDF:u,distanceToPx:n}=p;var e=this.hittestRequest.position;const m=this.hittestRequest.distance;p=l.xyToBarycentric(e.add(new b.Vec2(b.negate(m),b.negate(m))),a,c,d);const q=l.xyToBarycentric(e.add(new b.Vec2(0,
b.negate(m))),a,c,d),r=l.xyToBarycentric(e.add(new b.Vec2(m,b.negate(m))),a,c,d),H=l.xyToBarycentric(e.add(new b.Vec2(b.negate(m),0)),a,c,d),I=l.xyToBarycentric(e,a,c,d),J=l.xyToBarycentric(e.add(new b.Vec2(m,0)),a,c,d),K=l.xyToBarycentric(e.add(new b.Vec2(b.negate(m),m)),a,c,d),L=l.xyToBarycentric(e.add(new b.Vec2(0,m)),a,c,d);a=l.xyToBarycentric(e.add(new b.Vec2(m,m)),a,c,d);f=f.textureUV.divide(this.mosaicInfo.size);c=g.textureUVNextVertex1.divide(this.mosaicInfo.size);g=g.textureUVNextVertex2.divide(this.mosaicInfo.size);
d={color:new b.Vec4(1),outlineColor:new b.Vec4(1),overrideOutlineColor:new b.Float(1),outlineSize:w,distanceToPx:n,isSDF:u};e=new b.Float(0);e=e.add(l.inTriangle(p).multiply(this._getColor(x(p,f,c,g),d).a));e=e.add(l.inTriangle(q).multiply(this._getColor(x(q,f,c,g),d).a));e=e.add(l.inTriangle(r).multiply(this._getColor(x(r,f,c,g),d).a));e=e.add(l.inTriangle(H).multiply(this._getColor(x(H,f,c,g),d).a));e=e.add(l.inTriangle(I).multiply(this._getColor(x(I,f,c,g),d).a));e=e.add(l.inTriangle(J).multiply(this._getColor(x(J,
f,c,g),d).a));e=e.add(l.inTriangle(K).multiply(this._getColor(x(K,f,c,g),d).a));e=e.add(l.inTriangle(L).multiply(this._getColor(x(L,f,c,g),d).a));e=e.add(l.inTriangle(a).multiply(this._getColor(x(a,f,c,g),d).a));return b.step(e,new b.Float(.05)).multiply(l.failHittest(this.hittestRequest))}}h.__decorate([k.option(N.VisualVariableColor)],t.prototype,"visualVariableColor",void 0);h.__decorate([k.option(O.VisualVariableOpacity)],t.prototype,"visualVariableOpacity",void 0);h.__decorate([k.option(P.VisualVariableRotation)],
t.prototype,"visualVariableRotation",void 0);h.__decorate([k.option(Q.VisualVariableSizeMinMaxValue)],t.prototype,"visualVariableSizeMinMaxValue",void 0);h.__decorate([k.option(R.VisualVariableSizeScaleStops)],t.prototype,"visualVariableSizeScaleStops",void 0);h.__decorate([k.option(S.VisualVariableSizeStops)],t.prototype,"visualVariableSizeStops",void 0);h.__decorate([k.option(T.VisualVariableSizeUnitValue)],t.prototype,"visualVariableSizeUnitValue",void 0);h.__decorate([k.uniform(M.MosaicInfo)],
t.prototype,"mosaicInfo",void 0);h.__decorate([h.__param(0,k.input(v)),h.__param(1,k.input(A))],t.prototype,"vertex",null);h.__decorate([h.__param(0,k.input(G))],t.prototype,"fragment",null);B.MarkerFragmentInput=G;B.MarkerShader=t;B.MarkerVertexInput=v;Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});