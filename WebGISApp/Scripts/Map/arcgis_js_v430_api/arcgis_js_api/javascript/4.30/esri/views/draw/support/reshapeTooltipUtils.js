// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/handleUtils ../../../core/quantityUtils ../../../core/reactiveUtils ../../../core/screenUtils ../../../geometry/Point ../../interactive/tooltip/tooltipCommonUtils ../../interactive/tooltip/infos/MovePointTooltipInfo ../../interactive/tooltip/infos/SelectedVertexTooltipInfo ../../interactive/tooltip/infos/TranslateTooltipInfo ../../interactive/tooltip/infos/TranslateVertexTooltipInfo ../../support/automaticAreaMeasurementUtils ../../support/automaticLengthMeasurementUtils ../../support/euclideanLengthMeasurementUtils".split(" "),
function(g,x,y,k,z,A,p,B,C,D,E,q,l,F){function G(a,{graphic:b}){r(a,b,b?.geometry)}function H(a,{graphic:b,selectedVertex:c}){r(a,b,c?.geometry);b=b?.geometry;switch(b?.type){case "polygon":a.geometryType="polygon";a.totalLength.visible=!1;a.area.actual=q.autoArea2D(b);break;case "polyline":a.geometryType="polyline",a.totalLength.actual=l.autoLength2D(b),a.area.visible=!1}}function r(a,b,c){b&&"point"===c?.type&&(a.setLocationFromPoint(c),a.elevation.actual=F.elevationFromPoint(c),a.elevation.visible=
!!b.geometry?.hasZ,a.elevation.readOnly=!1,a.elevation.showAsZ=!0)}function I(a){function b(e,t){const h=t?.geometry;if(h&&"point"===h.type){var {dx:m,dy:n,dz:u}=p.getXYZDeltasFromTooltipInfo(e,h);if(0!==m||0!==n||0!==u){var {x:J,y:K,z:v,m:L,spatialReference:M}=h;e=new A({x:J+m,y:K+n,z:null!=v?v+u:void 0,m:L,spatialReference:M});a.updateGeometry(t,e,h,m,n)}}}const {activeTooltipInfo:c,graphic:f,selectedVertex:d}=a;switch(c?.type){case "move-point":return b(c,f);case "selected-vertex":return b(c,d)}}
function w(a,b,c){if(c){var {x:f,y:d}=c.origin;c=b.toMap(c);b=b.toMap(z.createScreenPoint(f,d));b=l.autoDistanceBetweenPoints2D(b,c);a.distance=null!=b?b:y.zeroMeters}}g.connectTooltip=function(a,b){function c(){const d=b();return{...d,activeTooltipInfo:d.sketchOptions.tooltips.effectiveEnabled?d.activeTooltipInfo:null}}let f=!1;return x.handlesGroup([k.watch(()=>{const d=c();return{context:d,geometry:d.graphic?.geometry,vertexGeometry:d.selectedVertex?.geometry}},({context:d})=>{f=!0;a:{const e=
d.activeTooltipInfo;if(e){switch(e?.type){case "move-point":G(e,d);break a;case "selected-vertex":H(e,d);break a}e.sketchOptions=d.sketchOptions}}a.info=d.activeTooltipInfo;f=!1},k.syncAndInitial),k.watch(()=>{const d=c(),{activeTooltipInfo:e}=d;if(e&&"key"in e)return{context:d,key:e.key}},(d,e)=>{d&&!f&&e&&d.key!==e.key&&I(d.context)},k.sync),p.connectPasteEvent(a)])};g.createTooltipInfos=function(a){a={sketchOptions:a,viewType:"2d"};return{movePoint:new B.MovePointTooltipInfo(a),selectedVertex:new C.SelectedVertexTooltipInfo(a),
translateGraphic:new D.TranslateTooltipInfo(a),translateVertices:new E.TranslateVertexTooltipInfo(a)}};g.updateTranslateTooltipInfo=function(a,b,c){a.clear();w(a,b,c)};g.updateTranslateVertexTooltipInfo=function(a,b,c,f){a.clear();"polygon"===c?.type?a.area=q.autoArea2D(c):"polyline"===c?.type&&(a.totalLength=l.autoLength2D(c));w(a,b,f)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});