// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./TransparencyPassType","../../../webgl/enums","../../../webgl/renderState"],function(b,d,a,e){const h=e.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),f=e.separateBlendingParams(a.BlendFactor.ONE,a.BlendFactor.ZERO,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA),g={factor:-1,units:-2};b.OITPolygonOffset=g;b.OITPolygonOffsetLimit=5E5;b.blendingColorAlpha=f;b.blendingDefault=h;b.getOITPolygonOffset=
function(c){return c?g:null};b.oitBlending=function(c){return c===d.TransparencyPassType.FrontFace?null:f};b.oitDepthTest=function(c,k=a.CompareFunction.LESS){return c===d.TransparencyPassType.NONE||c===d.TransparencyPassType.FrontFace?k:a.CompareFunction.LEQUAL};b.oitDepthWrite=function(c){return c===d.TransparencyPassType.FrontFace?e.defaultDepthWriteParams:null};b.oitDrawBuffers=function(c){return c===d.TransparencyPassType.ColorAlpha?{buffers:[a.ColorAttachment.COLOR_ATTACHMENT0,a.ColorAttachment.COLOR_ATTACHMENT1]}:
null};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});