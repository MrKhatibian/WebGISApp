// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./DisjointTimerQuery","./load","./LoseContext"],function(c,e,a,f){class g{constructor(b,d){this._gl=b;this._textureFloatLinear=this._textureNorm16=this._loseContext=this._colorBufferFloat=this._textureFilterAnisotropic=this._compressedTextureS3TC=this._compressedTextureETC=null;this._disabledExtensions=d.disabledExtensions||{};this._debugWebGLExtensions=d.debugWebGLExtensions||{}}get compressedTextureETC(){this._compressedTextureETC??(this._compressedTextureETC=a.loadCompressedTextureETC(this._gl,
this._disabledExtensions));return this._compressedTextureETC}get compressedTextureS3TC(){this._compressedTextureS3TC??(this._compressedTextureS3TC=a.loadCompressedTextureS3TC(this._gl,this._disabledExtensions));return this._compressedTextureS3TC}get textureFilterAnisotropic(){this._textureFilterAnisotropic??(this._textureFilterAnisotropic=a.loadTextureFilterAnisotropicCapability(this._gl,this._disabledExtensions));return this._textureFilterAnisotropic}get disjointTimerQuery(){this._disjointTimerQuery??
(this._disjointTimerQuery=e.createDisjointTimerQuery(this._gl,this._disabledExtensions));return this._disjointTimerQuery}get colorBufferFloat(){this._colorBufferFloat??(this._colorBufferFloat=a.loadColorBufferFloat(this._gl,this._disabledExtensions));return this._colorBufferFloat}get loseContext(){this._loseContext??(this._loseContext=f.load(this._gl,this._debugWebGLExtensions));return this._loseContext}get textureNorm16(){this._textureNorm16??(this._textureNorm16=a.loadTextureNorm16(this._gl,this._disabledExtensions));
return this._textureNorm16}get textureFloatLinear(){this._textureFloatLinear??(this._textureFloatLinear=a.loadBooleanExtension(this._gl,this._disabledExtensions,"textureFloatLinear",!1,["OES_texture_float_linear"]));return this._textureFloatLinear}enable(b){return this[b]}}c.Capabilities=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});