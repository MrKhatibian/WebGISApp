// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/screenUtils ../../../../vectorTiles/GeometryUtils ./meshWriterUtils ./PatternFillMeshWriter ../shaders/constants ../../../../../../webgl/enums".split(" "),function(e,f,p,q,g,l,d){function h(a){const {sprite:b,aspectRatio:k,scaleProportionally:r}=a;var c=f.pt2px(a.height);a=0<c?c:b.height;c*=k;0>=c?c=b.width:r&&(c*=b.width/b.height);return{width:c,height:a}}function m(a){const {applyRandomOffset:b,sampleAlphaOnly:k}=a;return q.packBitset([[l.bitsetFillRandomPatternOffset,
b],[l.bitsetGenericConsiderAlphaOnly,k]])}const n={createComputedParams:a=>a,optionalAttributes:g.patternFillVertexSpec.optionalAttributes,attributes:{...g.patternFillVertexSpec.attributes,bitset:{count:1,type:d.DataType.UNSIGNED_BYTE,pack:m},width:{count:1,type:d.DataType.HALF_FLOAT,pack:a=>h(a).width},height:{count:1,type:d.DataType.HALF_FLOAT,pack:a=>h(a).height},offset:{count:2,type:d.DataType.HALF_FLOAT,pack:({offsetX:a,offsetY:b})=>[f.pt2px(a),-f.pt2px(b)]},scale:{count:2,type:d.DataType.UNSIGNED_BYTE,
packPrecisionFactor:16,pack:({scaleX:a,scaleY:b})=>[a,b]},angle:{count:1,type:d.DataType.UNSIGNED_BYTE,pack:({angle:a})=>p.degToByte(a)}}};class t extends g.PatternFillMeshWriter{constructor(){super(...arguments);this.vertexSpec=n}}e.ComplexFillMeshWriter=t;e.complexFillVertexSpec=n;e.getPatternSize=h;e.packComplexFillBitset=m;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});