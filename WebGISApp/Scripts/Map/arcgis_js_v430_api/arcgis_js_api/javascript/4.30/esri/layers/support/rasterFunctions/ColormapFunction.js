// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../rasterFormats/pixelRangeUtils ./BaseRasterFunction ./ColormapFunctionArguments ./colormaps ../../../renderers/support/colorRampUtils ../../../rest/support/colorRamps".split(" "),function(c,d,b,u,v,m,n,p,q,r,g,t){b=class extends p{constructor(){super(...arguments);this.functionName="Colormap";this.functionArguments=
null;this.rasterArgumentNames=["raster"];this.isNoopProcess=!0}_bindSourceRasters(){var a=this.sourceRasterInfos[0];if(1<a.bandCount)return{success:!1,supportsGPU:!1,error:"colormap-function: source data must be single band"};let {colormap:e,colormapName:k,colorRamp:h,colorRampName:l}=this.functionArguments;if(!e?.length)if(h)this.colorRamp=h,e=g.convertColorRampToColormap(h,{interpolateAlpha:!0});else if(l){var f=g.getColorRampJSON(l);f&&(e=g.convertColorRampToColormap(f),this.colorRamp=t.fromJSON(f))}else k&&
(e=r.getColormapByName(k));if(!e?.length)return{success:!1,supportsGPU:!1,error:"colormap-function: missing colormap argument"};f=this._getOutputPixelType(a.pixelType);this.outputPixelType=f.startsWith("f")?"s32":f;a=a.clone();a.pixelType=this.outputPixelType;a.colormap=e;a.bandCount=1;this.rasterInfo=a;return{success:!0,supportsGPU:!0}}_processPixels(a){a=a.pixelBlocks?.[0];if(!a||n.isIntegerPixelType(a.pixelType))return a;a=a.clone();a.clamp(this.outputPixelType);return a}};c.__decorate([d.property({json:{write:!0,
name:"rasterFunction"}})],b.prototype,"functionName",void 0);c.__decorate([d.property({type:q,json:{write:!0,name:"rasterFunctionArguments"}})],b.prototype,"functionArguments",void 0);c.__decorate([d.property()],b.prototype,"rasterArgumentNames",void 0);c.__decorate([d.property()],b.prototype,"isNoopProcess",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"indexedColormap",void 0);c.__decorate([d.property()],b.prototype,"colorRamp",void 0);return b=c.__decorate([m.subclass("esri.layers.support.rasterFunctions.ColormapFunction")],
b)});