// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/libs/gl-matrix-2/factories/mat3f64","../attributes/TextureCoordinateAttribute.glsl","../../shaderModules/interfaces","../../shaderModules/Matrix3PassUniform"],function(e,f,h,c,g){e.colorTextureUV=function(a,b){b.hasColorTextureTransform?(a.vertex.uniforms.add(new g.Matrix3PassUniform("colorTextureTransformMatrix",d=>d.colorTextureTransformMatrix??f.IDENTITY)),a.varyings.add("colorUV","vec2"),a.vertex.code.add(c.glsl`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(c.glsl`void forwardColorUV(){}`)};e.emissiveTextureUV=function(a,b){b.hasEmissionTextureTransform&&b.textureCoordinateType!==h.TextureCoordinateAttributeType.None?(a.vertex.uniforms.add(new g.Matrix3PassUniform("emissiveTextureTransformMatrix",d=>d.emissiveTextureTransformMatrix??f.IDENTITY)),a.varyings.add("emissiveUV","vec2"),a.vertex.code.add(c.glsl`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(c.glsl`void forwardEmissiveUV(){}`)};e.metallicRoughnessTextureUV=function(a,b){b.hasMetallicRoughnessTextureTransform&&b.textureCoordinateType!==h.TextureCoordinateAttributeType.None?(a.vertex.uniforms.add(new g.Matrix3PassUniform("metallicRoughnessTextureTransformMatrix",d=>d.metallicRoughnessTextureTransformMatrix??f.IDENTITY)),a.varyings.add("metallicRoughnessUV","vec2"),a.vertex.code.add(c.glsl`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(c.glsl`void forwardMetallicRoughnessUV(){}`)};e.normalTextureUV=function(a,b){b.hasNormalTextureTransform&&b.textureCoordinateType!==h.TextureCoordinateAttributeType.None?(a.vertex.uniforms.add(new g.Matrix3PassUniform("normalTextureTransformMatrix",d=>d.normalTextureTransformMatrix??f.IDENTITY)),a.varyings.add("normalUV","vec2"),a.vertex.code.add(c.glsl`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(c.glsl`void forwardNormalUV(){}`)};e.occlusionTextureUV=function(a,b){b.hasOcclusionTextureTransform&&b.textureCoordinateType!==h.TextureCoordinateAttributeType.None?(a.vertex.uniforms.add(new g.Matrix3PassUniform("occlusionTextureTransformMatrix",d=>d.occlusionTextureTransformMatrix??f.IDENTITY)),a.varyings.add("occlusionUV","vec2"),a.vertex.code.add(c.glsl`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(c.glsl`void forwardOcclusionUV(){}`)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});