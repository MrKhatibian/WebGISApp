// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../support/elevationInfoUtils ../sketch/normalizedPoint ./Settings ./SnappingAlgorithm ./snappingUtils ./candidates/ParallelLineSnappingCandidate ../support/viewUtils ../../support/geometry2dUtils".split(" "),function(x,y,B,t,b,z,C,u,D,v,w){class E extends C.SnappingAlgorithm{snapNewVertex(e,a){var c=a.editGeometryOperations.data.components[0],d=c.edges.length,f=c.vertices.length;const h=
[];if(2>d)return h;const {view:g}=this,k=v.vectorToScreenPoint(e,a.spatialReference,t.absoluteHeightElevationInfo,g);f=b.fromAnyMapPoint(c.vertices[f-1].pos,g,a);const n=b.fromAnyMapPoint(c.vertices[0].pos,g,a);d=c=c.edges[d-1];do{if(this.edgeExceedsShortLineThreshold(d,a)){const p=u.editEdgeToSnappingEdge(d,g,a);this._checkEdgeForParallelLines(p,f,e,k,a,h);this._checkEdgeForParallelLines(p,n,e,k,a,h)}d=d.leftVertex.leftEdge}while(d&&d!==c);return h}snapExistingVertex(e,a){const c=[],d=a.vertexHandle;
var f=d.component;if(3>f.edges.length)return c;const {view:h}=this,g=v.vectorToScreenPoint(e,a.spatialReference,t.absoluteHeightElevationInfo,h),k=d.leftEdge,n=d.rightEdge,p=f.vertices[0],l=b.fromAnyMapPoint(p.pos,h,a),A=f.vertices[f.vertices.length-1],F=b.fromAnyMapPoint(A.pos,h,a);let m=f=f.edges[0];do{if(m!==k&&m!==n&&this.edgeExceedsShortLineThreshold(m,a)){const r=u.editEdgeToSnappingEdge(m,h,a);k&&this._checkEdgeForParallelLines(r,b.fromAnyMapPoint(k.leftVertex.pos,h,a),e,g,a,c);n&&this._checkEdgeForParallelLines(r,
b.fromAnyMapPoint(n.rightVertex.pos,h,a),e,g,a,c);d===p?this._checkEdgeForParallelLines(r,F,e,g,a,c):d===A&&this._checkEdgeForParallelLines(r,l,e,g,a,c)}m=m.rightVertex.rightEdge}while(m&&m!==f);return c}_checkEdgeForParallelLines(e,a,c,d,f,h){var g=e.left;const k=e.right;w.projectPointToLine(q,b.asVec2(a),b.asVec2(g),b.asVec2(k));if(!(y.squaredDistance(q,b.asVec2(a))<z.defaults.parallelLineThreshold)){w.projectPointToLine(q,b.asVec2(c),b.asVec2(g),b.asVec2(k),b.asVec2(a));var {spatialReference:n,
pointer:p}=f;c=b.markAsTarget(b.fromValues(q[0],q[1],c[2]));if(u.squaredScreenDistance(d,v.vectorToScreenPoint(c,n,t.absoluteHeightElevationInfo,this.view))<this.squaredProximityThreshold(p)&&!this.isVertical(c,a,f)&&!this.isVertical(g,k,f)){a:{d=e.left;g=e.right;for(l of h)if(w.projectPointToLine(q,b.asVec2(g),b.asVec2(l.constraint.start),b.asVec2(l.constraint.end),b.asVec2(d)),y.squaredDistance(q,b.asVec2(g))<z.defaults.parallelLineThreshold){l.addReferenceLine(e);var l=!0;break a}l=!1}l||h.push(new D.ParallelLineSnappingCandidate({referenceLine:e,
lineStart:a,targetPoint:c,isDraped:"on-the-ground"===f.elevationInfo?.mode}))}}}}const q=B.create();x.ParallelLineSnapper=E;Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});