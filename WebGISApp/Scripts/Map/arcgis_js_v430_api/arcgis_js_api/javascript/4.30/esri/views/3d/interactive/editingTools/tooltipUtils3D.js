// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/handleUtils ../../../../core/reactiveUtils ./manipulatedObjectUtils ../../../interactive/editGeometry/interfaces ../../../interactive/tooltip/tooltipCommonUtils ../../../support/euclideanLengthMeasurementUtils".split(" "),function(k,t,l,n,u,m,v){function w(a,d,{callbacks:c}){const e=n.manipulatedObjectGeometry(d);switch(e?.type){case "mesh":p(a,e.origin,d,c);"orientation"in a&&"scale"in a&&m.updateMeshTransformFromTooltipInfo(a,e,c);break;case "point":p(a,e,d,c)}}
function p(a,d,c,e){const {dx:f,dy:h,dz:b}=m.getXYZDeltasFromTooltipInfo(a,d);if(0!==f||0!==h||0!==b)e.onMoveStart?.(),c.operations?.move(f,h,b,u.AccumulationBehavior.NEW_STEP),e.onMove?.(f,h,b),e.onMoveStop?.()}function q(a,d){const c=n.manipulatedObjectGeometry(d);if(a&&c&&("mesh"===c.type||"point"===c.type)){var e="mesh"===c.type,f=e?c.origin:c;a.setLocationFromPoint(f);r(a,f,d);"transform-mesh"===a.type&&e&&m.updateTooltipInfoFromMeshTransform(a,c);a.clearInputValues()}}function r(a,d,c){a.elevation.actual=
v.elevationFromPoint(d);a.elevation.visible=!!c.operations?.data.coordinateHelper.hasZ();a.elevation.readOnly=!1;a.elevation.showAsZ=!0}k.connectTooltipToManipulatedObject=function(a,d,c){function e(){const b=c();return{...b,activeTooltipInfo:b.sketchOptions.tooltips.effectiveEnabled?b.activeTooltipInfo:null}}function f({activeTooltipInfo:b,sketchOptions:g}){h=!0;b&&(b.sketchOptions=g,q(b,d));a.info=b;h=!1}let h=!1;return t.handlesGroup([l.watch(e,f,l.syncAndInitial),l.watch(()=>{const b=e(),{activeTooltipInfo:g}=
b;if(g)return{context:b,activeTooltipInfo:g,key:g.key,geometry:n.manipulatedObjectGeometry(d)}},(b,g)=>{b&&!h&&g&&g.key!==b.key&&w(b.activeTooltipInfo,d,b.context)},l.sync),d.on("committed",()=>f(e())),m.connectPasteEvent(a)])};k.updateElevationFromPoint=r;k.updateTooltipInfoFromManipulatedObject=q;k.updateXYZFromTooltipInfo=p;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});