// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../sketch/constraints ../../sketch/normalizedPoint ../SnappingDomain ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/ParallelSnappingHint".split(" "),function(f,d,k,l,m,n,g,p,h,q){class r extends p.SnappingCandidate{constructor({referenceLine:a,lineStart:c,targetPoint:b,isDraped:t}){const e=k.clone(c),{left:u,right:v}=a;d.subtract(e,d.add(e,e,v),u);super(b,new l.VerticalPlaneConstraint(c,
m.fromVec3(e)),t,n.SnappingDomain.SELF);this._referenceLines=[{edge:a,fadeLeft:!0,fadeRight:!0}]}get hints(){return[new h.LineSnappingHint(g.LineSegmentHintType.TARGET,this.constraint.start,this.targetPoint,this.isDraped,this.domain),new q.ParallelSnappingHint(this.constraint.start,this.targetPoint,this.isDraped,this.domain),...this._referenceLines.map(a=>new h.LineSnappingHint(g.LineSegmentHintType.REFERENCE,a.edge.left,a.edge.right,this.isDraped,this.domain,a.fadeLeft,a.fadeRight))]}addReferenceLine(a){const c=
{edge:a,fadeLeft:!0,fadeRight:!0};this._referenceLines.forEach(b=>{d.exactEquals(a.right,b.edge.left)&&(b.fadeLeft=!1,c.fadeRight=!1);d.exactEquals(a.right,b.edge.right)&&(b.fadeRight=!1,c.fadeRight=!1);d.exactEquals(a.left,b.edge.right)&&(b.fadeRight=!1,c.fadeLeft=!1);d.exactEquals(a.left,b.edge.left)&&(b.fadeLeft=!1,c.fadeLeft=!1)});this._referenceLines.push(c)}}f.ParallelLineSnappingCandidate=r;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});