// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../geometry/GeometryCursor ../../../geometry/geometryCursorCollectUtils ../CIMEffects ../CurveHelper ../enums ../../../geometry/SpatialReference".split(" "),function(k,t,e,m,n,l,p,q){class d{static local(){null===d.instance&&(d.instance=new d);return d.instance}execute(b,a,c,f,g,h){return new r(b,a,c,f,g,h)}}d.instance=null;class r{constructor(b,a,c,f,g,h){this._inputGeometries=b;this._tileKey=f;this._geometryEngine=g;this._curveHelper=new l.CurveHelper;this._size=
(void 0!==a.size?a.size:1)*c;this._maxInflateSize=h*c;this._offsetFlattenError=l.pixelTolerance*c}next(){for(var b;b=this._inputGeometries.next();){if(0===this._size)return b;if("esriGeometryEnvelope"===b.geometryType)if(0<this._size){var a=e.GeometryCursor.createEmptyOptimizedCIM(b.geometryType),c=m.collectMultipath(b)[0];if(c=this._curveHelper.offset(c,this._size,p.GeometricEffectOffsetMethod.Rounded,4,this._offsetFlattenError))return a.pushPath(c),a}else if(0>this._size&&(a=b.asJSON(),0<Math.min(a.xmax-
a.xmin,a.ymax-a.ymin)+2*this._size))return e.GeometryCursor.fromJSONCIM({xmin:a.xmin-this._size,xmax:a.xmax+this._size,ymin:a.ymin-this._size,ymax:a.ymax+this._size});a=this._geometryEngine;if(null==a)break;if(b=this._tileKey?n.clipCursorToTileExtent(b,this._maxInflateSize):b)return(b=a.buffer(q.WebMercator,b.asJSON(),this._size,1))?e.GeometryCursor.fromJSONCIM(b):null}return null}}k.EffectBuffer=d;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});