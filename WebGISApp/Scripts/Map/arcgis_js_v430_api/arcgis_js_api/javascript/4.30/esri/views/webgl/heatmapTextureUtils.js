// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","./enums"],function(e,f,a){class g{constructor(b,h,d,c){this.dataType=b;this.samplingMode=h;this.pixelFormat=d;this.internalFormat=c}}e.HeatmapTextureConfiguration=g;e.loadHeatmapTextureConfiguration=function(b,h){const {textureFloatLinear:d,colorBufferFloat:c}=b.capabilities,l=c?.textureFloat,k=c?.textureHalfFloat,m=c?.floatBlend;b=b.driverTest.floatBufferBlend.result;if(!l&&!k)throw new f("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
if(!(m&&b||k))throw new f("heatmap:missing-float-blend",`HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float.${b?"":" This device claims support for EXT_float_blend, but does not actually support it."}`);const n=!!c?.R32F,p=!!c?.R16F;if(l&&m&&b&&d)return d||h.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),new g(a.PixelType.FLOAT,d?a.TextureSamplingMode.LINEAR:a.TextureSamplingMode.NEAREST,n?a.PixelFormat.RED:a.PixelFormat.RGBA,
n?a.SizedPixelFormat.R32F:a.PixelFormat.RGBA);if(k)return new g(a.PixelType.HALF_FLOAT,a.TextureSamplingMode.LINEAR,p?a.PixelFormat.RED:a.PixelFormat.RGBA,p?a.SizedPixelFormat.R16F:a.PixelFormat.RGBA);throw new f("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});