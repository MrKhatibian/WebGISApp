// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],function(c,d,g,h){async function k(a){a=await h.processRasterRendererParameters(a);const b=a.layer.supportsMultidirectionalHillshade();if("multi-directional"===a.hillshadeType&&!b)throw new d("raster-shaded-relief-renderer:not-supported","multi-directional hillshade type is only supported on 10.8.1+ servers");b&&null!=a.hillshadeType||(a.hillshadeType="traditional");return a}c.createRenderer=
async function(a){a=await k(a);const b=g.createShadedReliefRenderer(a.layer.rasterInfo,a.hillshadeType);if(null==b)throw new d("raster-shaded-relief-renderer:not-supported","Only elevation raster data is supported");const {scalingType:e,colorRamp:f}=a;null!=e&&(b.scalingType=e);void 0!==f&&(b.colorRamp=f);return{renderer:b}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});