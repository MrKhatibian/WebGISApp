// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../SnappingDomain ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(b,g,e,h,f,k){class l extends h.SnappingCandidate{constructor({targetPoint:a,constraint:c,previousVertex:d,otherVertex:m,otherVertexType:n,isDraped:p,selfSnappingType:q,objectId:r,domain:t}){super(a,c,p,t??g.SnappingDomain.SELF);this.previousVertex=d;this.otherVertex=m;this.otherVertexType=n;this.selfSnappingType=q??b.SelfSnappingRightAngleType.None;
this.objectId=r??null}get hints(){const a=this.previousVertex,c=this.otherVertexType===b.OtherVertexType.CENTER?this.otherVertex:this.targetPoint,d=this.otherVertexType===b.OtherVertexType.CENTER?this.targetPoint:this.otherVertex;return[new f.LineSnappingHint(e.LineSegmentHintType.TARGET,c,d,this.isDraped,this.domain),new f.LineSnappingHint(e.LineSegmentHintType.REFERENCE,a,c,this.isDraped,this.domain),new k.RightAngleSnappingHint(this.previousVertex,c,d,this.isDraped,this.domain)]}}b.OtherVertexType=
void 0;(function(a){a[a.NEXT=0]="NEXT";a[a.CENTER=1]="CENTER"})(b.OtherVertexType||(b.OtherVertexType={}));b.SelfSnappingRightAngleType=void 0;(function(a){a[a.None=0]="None";a[a.LastVertex=1]="LastVertex";a[a.FirstVertex=2]="FirstVertex";a[a.ExistingEdge=3]="ExistingEdge"})(b.SelfSnappingRightAngleType||(b.SelfSnappingRightAngleType={}));b.RightAngleSnappingCandidate=l;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});