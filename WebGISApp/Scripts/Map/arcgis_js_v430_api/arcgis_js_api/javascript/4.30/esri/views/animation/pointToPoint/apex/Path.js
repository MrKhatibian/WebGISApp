// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../easing","../Path","../Segment","./planning"],function(k,l,m,h,n){class p extends m.Path{constructor(a,c){super();this._preallocSegments=[new h.Segment,new h.Segment,new h.Segment];this._descensionSegment=this._ascensionSegment=null;this.update(a,c)}update(a,c){a&&(this.definition?this.definition.copyFrom(a):this.definition=a.clone(),a=c?.apex?n.optimalDistance(a,c.apex):null,this.segments.length=0,this._descensionSegment=this._ascensionSegment=null,a?this._updateWithApex(a,
c?.apex):this._updateWithoutApex())}segmentInterpolateComponentsAt(a,c,b){a.interpolateComponentsAt(c,b);a===this._ascensionSegment?b.zoom=l.outQuad(b.zoom):a===this._descensionSegment&&(b.zoom=l.inQuad(b.zoom))}_updateWithApex(a,c){const [b,d,e]=this._preallocSegments,f=c?.ascensionFactor??.5;c=Math.min(1-f,null!=c?.ascensionFactor&&null!=c.descensionFactor?c.descensionFactor:.5);const g=1-f-c;b.definition?b.definition.copyFrom(this.definition):b.definition=this.definition.clone();b.definition.compared.targetZoom=
a;b.definition.compared.pan=this.definition.compared.pan*f;b.definition.compared.rotate=this.definition.compared.rotate*f;b.definition.segmentEnd=f;b.update();this._ascensionSegment=b;this.segments.push(b);0<g&&(d.definition?d.definition.copyFrom(this.definition):d.definition=this.definition.clone(),d.definition.copyFrom(this.definition),d.definition.compared.sourceZoom=a,d.definition.compared.targetZoom=a,d.definition.compared.pan=this.definition.compared.pan*g,d.definition.compared.rotate=this.definition.compared.rotate*
g,d.definition.segmentStart=b.definition.segmentEnd,d.definition.segmentEnd=b.definition.segmentEnd+g,d.update(),this.segments.push(d));e.definition?e.definition.copyFrom(this.definition):e.definition=this.definition.clone();e.definition.compared.sourceZoom=a;e.definition.compared.pan=this.definition.compared.pan*c;e.definition.compared.rotate=this.definition.compared.rotate*c;e.definition.segmentStart=f+g;e.update();this._descensionSegment=e;this.segments.push(e)}_updateWithoutApex(){const [a]=this._preallocSegments;
a.update(this.definition);this.segments.push(a)}}k.Path=p;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});