// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/screenUtils ../../../../../../../geometry/GeometryCursor ./ComplexFillMeshWriter ./meshWriterUtils ./OutlineFillMeshWriter ../shaders/ComplexOutlineFillShader ../shaders/constants ../../../../../../webgl/enums".split(" "),function(l,f,m,g,n,k,e,p,d){const h=g.complexFillVertexSpec,q={createComputedParams:a=>a,optionalAttributes:h.optionalAttributes,attributes:{...h.attributes,bitset:{type:d.DataType.UNSIGNED_BYTE,count:1,pack:a=>g.packComplexFillBitset(a)},
aux1:{count:1,type:d.DataType.HALF_FLOAT,pack:a=>g.getPatternSize(a).width},aux2:{count:1,type:d.DataType.HALF_FLOAT,pack:a=>g.getPatternSize(a).height},aux3:{count:2,type:d.DataType.HALF_FLOAT,pack:({offsetX:a,offsetY:b})=>[f.pt2px(a),f.pt2px(b)]},aux4:{count:2,type:d.DataType.UNSIGNED_BYTE,pack:({scaleX:a,scaleY:b})=>[a*e.packPrecision,b*e.packPrecision]}}},r={createComputedParams:a=>a,optionalAttributes:h.optionalAttributes,attributes:{...h.attributes,color:k.outlineFillVertexSpec_Outline.attributes.color,
bitset:{type:d.DataType.UNSIGNED_BYTE,count:1,pack:a=>n.packBitset([[p.bitsetTypeFillOutline,!0]])},aux1:{count:1,type:d.DataType.HALF_FLOAT,pack:a=>f.pt2px(.5*a.width)},aux2:{count:1,type:d.DataType.HALF_FLOAT,pack:a=>f.pt2px(.5*a.referenceWidth)},aux3:{count:2,type:d.DataType.HALF_FLOAT,packTessellation:({extrusionOffsetX:a,extrusionOffsetY:b})=>[a,b]},aux4:{count:2,type:d.DataType.UNSIGNED_BYTE,packTessellation:({normalX:a,normalY:b})=>[a*e.packPrecision+e.signedToUnsignedByte,b*e.packPrecision+
e.signedToUnsignedByte]}}};class t extends k.OutlineFillOutlineMeshWriter{constructor(){super(...arguments);this.vertexSpec=r}}class u extends k.OutlineFillMeshWriter{constructor(){super(...arguments);this.vertexSpec=q}_createOutlineWriter(a,b,c,v){return new t(a,b,c,v)}_write(a,b,c){c=c?.asOptimized()??b.readGeometryForDisplay();if(c=this._clip(c))a.recordStart(this.instanceId,this.attributeLayout,this.evaluatedMeshParams.sprite?.textureBinding),this._writeGeometry(a,b,c),this._lineMeshWriter.writeLineVertices(a,
m.GeometryCursor.fromOptimizedCIM(c,"esriGeometryPolyline"),b),a.recordEnd()}ensurePacked(a,b,c){super.ensurePacked(a,b,c);this._lineMeshWriter.ensurePacked(a,b,c)}enqueueRequest(a,b,c){super.enqueueRequest(a,b,c);this._lineMeshWriter.enqueueRequest(a,b,c)}async loadDependencies(){await Promise.all([super.loadDependencies(),this._lineMeshWriter.loadDependencies()])}}l.ComplexOutlineFillMeshWriter=u;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});