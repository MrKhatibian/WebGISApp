// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../CIMCursor","../CurveHelper","../enums"],function(n,r,t,l){class d{static local(){null===d.instance&&(d.instance=new d);return d.instance}execute(a,b,c,h,e){return new u(a,b,c)}}d.instance=null;class u extends r.PathTransformationCursor{constructor(a,b,c){super(a,!1,!0);this._curveHelper=new t.CurveHelper;this._placePerPart=b.placePerPart??!1;this._angleToLine=void 0!==b.angleToLine?b.angleToLine:!0;this._offset=void 0!==b.offset?b.offset*c:0;this._type=b.extremityPlacement;this._position=
void 0!==b.offsetAlongLine?b.offsetAlongLine*c:0;this._beginProcessed=!1}processMultiPath(a){return this._placePerPart?super.processMultiPath(a):this.processPath(a)}processPath(a){let b;switch(this._type){default:this._beginProcessed?(b=this._atExtremities(a,this._position,!1),this.iteratePath=this.iterateMultiPath=this._beginProcessed=!1):(b=this._atExtremities(a,this._position,!0),this.iteratePath=this.iterateMultiPath=this._beginProcessed=!0);break;case l.ExtremityPlacement.JustBegin:b=this._atExtremities(a,
this._position,!0);break;case l.ExtremityPlacement.JustEnd:b=this._atExtremities(a,this._position,!1);case l.ExtremityPlacement.None:}return b}_atExtremities(a,b,c){this._placePerPart||(c?a.seekPath(0):a.seekPath(a.totalSize-1));c||a.seekPathEnd();if(c?a.nextPoint():a.prevPoint()){let h=0,[e,k]=[0,0],[f,g]=[a.x,a.y];for(;c?a.nextPoint():a.prevPoint();){e=f;k=g;f=a.x;g=a.y;const m=this._curveHelper.getLength(e,k,f,g);if(h+m>b){a=(b-h)/m;const [p,q]=this._curveHelper.getAngleCS(e,k,f,g,a);a=this._curveHelper.getCoord2D(e,
k,f,g,a);this.internalPlacement.setTranslate(a[0]-this._offset*q,a[1]+this._offset*p);this._angleToLine&&this.internalPlacement.setRotateCS(-p,-q);return this.internalPlacement}h+=m}}return null}}n.PlacementAtExtremities=d;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});