// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Logger ../../../../../core/MapUtils ../../../../../core/mathUtils ../../../../../core/libs/gl-matrix-2/math/quat ../../../../../core/libs/gl-matrix-2/factories/quatf64 ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../MeshMaterialMetallicRoughness ../../vertexSpaceConversion ./buffer ./geometry ./types ./imageutils ../../../../../views/3d/glTF/internal/resourceUtils ../../../../../views/webgl/enums".split(" "),function(F,
J,K,L,M,G,H,v,N,O,I,P,g,B,C,h){function Q({position:b,normal:a,tangent:c}){D(b,3);D(a,3);D(c,4)}function D(b,a){if(null!=b)for(let c=1,d=2;c<b.length;c+=a,d+=a){const e=b[c];b[c]=b[d];b[d]=-e}}const E=()=>J.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class R{constructor(b,a){this.options=a;this._materialMap=[];this._imageMap=new Map;this._textureMap=new Map;this.gltf={asset:{version:"2.0",copyright:b.copyright,generator:b.generator},extras:{output:a.output,binChunkBuffer:null,
promises:[]}};this._addScenes(b)}_addScenes(b){this.gltf.scene=b.defaultScene;const a=this.gltf.extras,c=a.output.buffer===g.BufferOutputType.GLB||a.output.image===g.ImageOutputType.GLB;c&&(a.binChunkBuffer=new I.Buffer(this.gltf));b.forEachScene(d=>{this._addScene(d)});c&&a.binChunkBuffer.finalize()}_addScene(b){this.gltf.scenes||(this.gltf.scenes=[]);const a={};b.name&&(a.name=b.name);b.forEachNode(c=>{a.nodes||(a.nodes=[]);a.nodes.push(...this._addNodes(c))});this.gltf.scenes.push(a)}_addNodes(b){this.gltf.nodes||
(this.gltf.nodes=[]);const a={};b.name&&(a.name=b.name);var c=b.translation;H.exactEquals(c,v.ZEROS)||(a.translation=v.clone(c));c=b.rotation;M.exactEquals(c,G.IDENTITY)||(a.rotation=G.clone(c));c=b.scale;H.exactEquals(c,v.ONES)||(a.scale=v.clone(c));c=this.gltf.nodes.length;this.gltf.nodes.push(a);if(b.mesh&&b.mesh.vertexAttributes.position){b=this._createMeshes(b.mesh);c=[c];if(1===b.length)this._addMesh(a,b[0]);else for(const d of b)b={},this._addMesh(b,d),c.push(this.gltf.nodes.length),this.gltf.nodes.push(b);
return c}b.forEachNode(d=>{a.children||(a.children=[]);a.children.push(...this._addNodes(d))});return[c]}_addMesh(b,a){var c;(c=this.gltf).meshes??(c.meshes=[]);c=this.gltf.meshes.length;this.gltf.meshes.push(a);b.mesh=c}_createMeshes(b){var a=this.gltf.extras;const c=a.output.buffer===g.BufferOutputType.GLB;a=c?a.binChunkBuffer:new I.Buffer(this.gltf);var d=this.options.origin,e=b.vertexSpace.clone();e.origin=[d.x,d.y,d.z??0];e=O.convertVertexSpace({vertexAttributes:b.vertexAttributes,vertexSpace:b.vertexSpace,
transform:this.options?.ignoreLocalTransform?null:b.transform,spatialReference:b.spatialReference},e,{targetUnit:"meters"});if(!e)return[];P.smoothNormals(b,e);Q(e);const {position:n,normal:k,tangent:r}=e,{uv:u,color:l}=b.vertexAttributes;d=a.addBufferView(h.DataType.FLOAT,g.AttributeType.VEC3,g.TargetBuffer.ARRAY_BUFFER);let m;k&&(m=a.addBufferView(h.DataType.FLOAT,g.AttributeType.VEC3,g.TargetBuffer.ARRAY_BUFFER));let t;u&&(t=a.addBufferView(h.DataType.FLOAT,g.AttributeType.VEC2,g.TargetBuffer.ARRAY_BUFFER));
let p;r&&(p=a.addBufferView(h.DataType.FLOAT,g.AttributeType.VEC4,g.TargetBuffer.ARRAY_BUFFER));let q;l&&(q=a.addBufferView(h.DataType.UNSIGNED_BYTE,g.AttributeType.VEC4,g.TargetBuffer.ARRAY_BUFFER));d.startAccessor("POSITION");m&&m.startAccessor("NORMAL");t&&t.startAccessor("TEXCOORD_0");p&&p.startAccessor("TANGENT");q&&q.startAccessor("COLOR_0");e=e.position.length/3;for(var f=0;f<e;++f)d.push(n[3*f]),d.push(n[3*f+1]),d.push(n[3*f+2]),m&&null!=k&&(m.push(k[3*f]),m.push(k[3*f+1]),m.push(k[3*f+2])),
t&&null!=u&&(t.push(u[2*f]),t.push(u[2*f+1])),p&&null!=r&&(p.push(r[4*f]),p.push(r[4*f+1]),p.push(r[4*f+2]),p.push(r[4*f+3])),q&&null!=l&&(q.push(l[4*f]),q.push(l[4*f+1]),q.push(l[4*f+2]),q.push(l[4*f+3]));e=d.endAccessor();e=this._addAccessor(d.index,e);if(m){var w=m.endAccessor();w=this._addAccessor(m.index,w)}if(t){var x=t.endAccessor();x=this._addAccessor(t.index,x)}if(p){var y=p.endAccessor();y=this._addAccessor(p.index,y)}if(q){var z=q.endAccessor();z=this._addAccessor(q.index,z)}let A;f=[];
b.components&&0<b.components.length&&b.components[0].faces?(A=a.addBufferView(h.DataType.UNSIGNED_INT,g.AttributeType.SCALAR,g.TargetBuffer.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(A,b.components,f,e,w,x,y,z)):this._addMeshVertexNonIndexed(b.components,f,e,w,x,y,z);d.finalize();m&&m.finalize();t&&t.finalize();p&&p.finalize();A&&A.finalize();q&&q.finalize();c||a.finalize();return f}_addMaterial(b){if(null!==b){var a=this._materialMap.indexOf(b);if(-1!==a)return a;this.gltf.materials||(this.gltf.materials=
[]);a={};switch(b.alphaMode){case "mask":a.alphaMode=g.AlphaMode.MASK;break;case "auto":case "blend":a.alphaMode=g.AlphaMode.BLEND}.5!==b.alphaCutoff&&(a.alphaCutoff=b.alphaCutoff);b.doubleSided&&(a.doubleSided=b.doubleSided);a.pbrMetallicRoughness={};var c=d=>{d=d.toRgba();d[0]=(d[0]/255)**2.1;d[1]=(d[1]/255)**2.1;d[2]=(d[2]/255)**2.1;return d};null!=b.color&&(a.pbrMetallicRoughness.baseColorFactor=c(b.color));null!=b.colorTexture&&(a.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(b.colorTexture,
b.colorTextureTransform));null!=b.normalTexture&&(a.normalTexture=this._createTextureInfo(b.normalTexture,b.normalTextureTransform));b instanceof N?(null!=b.emissiveTexture&&(a.emissiveTexture=this._createTextureInfo(b.emissiveTexture,b.emissiveTextureTransform)),null!=b.emissiveColor&&(c=c(b.emissiveColor),a.emissiveFactor=[c[0],c[1],c[2]]),null!=b.occlusionTexture&&(a.occlusionTexture=this._createTextureInfo(b.occlusionTexture,b.occlusionTextureTransform)),null!=b.metallicRoughnessTexture&&(a.pbrMetallicRoughness.metallicRoughnessTexture=
this._createTextureInfo(b.metallicRoughnessTexture,b.metallicRoughnessTextureTransform)),a.pbrMetallicRoughness.metallicFactor=b.metallic,a.pbrMetallicRoughness.roughnessFactor=b.roughness):(a.pbrMetallicRoughness.metallicFactor=1,a.pbrMetallicRoughness.roughnessFactor=1,E().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back."));c=this.gltf.materials.length;this.gltf.materials.push(a);this._materialMap.push(b);return c}}_createTextureInfo(b,
a){b={index:this._addTexture(b)};if(!a)return b;b.extensions||(b.extensions={});b.extensions.KHR_texture_transform={scale:a.scale,offset:a.offset,rotation:L.deg2rad(a.rotation)};return b}_addTexture(b){const a=this.gltf.textures??[];this.gltf.textures=a;return K.getOrCreateMapValue(this._textureMap,b,()=>{const c={sampler:this._addSampler(b),source:this._addImage(b)},d=a.length;a.push(c);return d})}_addImage(b){var a=this._imageMap.get(b);if(null!=a)return a;this.gltf.images||(this.gltf.images=[]);
const c={};if(b.url)c.uri=b.url;else{a=b.data;c.extras=a;for(var d=0;d<this.gltf.images.length;++d)if(a===this.gltf.images[d].extras)return d;d=this.gltf.extras;switch(d.output.image){case g.ImageOutputType.GLB:const e=d.binChunkBuffer.addBufferView(h.DataType.UNSIGNED_BYTE,g.AttributeType.SCALAR);C.isEncodedMeshTexture(a)?null!=a.data&&e.writeOutToBuffer(a.data,0):(a=B.imageToArrayBuffer(a,this.options.signal).then(({data:n,type:k})=>{c.mimeType=k;return n}),d.promises.push(e.writeAsync(a).then(()=>
{e.finalize()})));c.bufferView=e.index;break;case g.ImageOutputType.DataURI:C.isEncodedMeshTexture(a)?E().warnOnce("Image export for basis compressed textures not available."):c.uri=B.imageToDataURI(a);break;default:C.isEncodedMeshTexture(a)?E().warnOnce("Image export for basis compressed textures not available."):d.promises.push(B.imageToArrayBuffer(a,this.options.signal).then(({data:n,type:k})=>{c.uri=n;c.mimeType=k}))}}a=this.gltf.images.length;this.gltf.images.push(c);this._imageMap.set(b,a);
return a}_addSampler(b){this.gltf.samplers||(this.gltf.samplers=[]);var a=h.TextureWrapMode.REPEAT;let c=h.TextureWrapMode.REPEAT;if("string"===typeof b.wrap)switch(b.wrap){case "clamp":c=a=h.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":c=a=h.TextureWrapMode.MIRRORED_REPEAT}else{switch(b.wrap.vertical){case "clamp":c=h.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":c=h.TextureWrapMode.MIRRORED_REPEAT}switch(b.wrap.horizontal){case "clamp":a=h.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":a=
h.TextureWrapMode.MIRRORED_REPEAT}}b={wrapS:a,wrapT:c};for(a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(b)===JSON.stringify(this.gltf.samplers[a]))return a;a=this.gltf.samplers.length;this.gltf.samplers.push(b);return a}_addAccessor(b,a){this.gltf.accessors||(this.gltf.accessors=[]);b={bufferView:b,byteOffset:a.byteOffset,componentType:a.componentType,count:a.count,type:a.type,min:a.min,max:a.max,name:a.name};a.normalized&&(b.normalized=!0);a=this.gltf.accessors.length;this.gltf.accessors.push(b);
return a}_addMeshVertexIndexed(b,a,c,d,e,n,k,r){const u=new Map;for(const l of a){b.startAccessor("INDICES");for(a=0;a<l.faces.length;++a)b.push(l.faces[a]);a=b.endAccessor();a={attributes:{POSITION:d},indices:this._addAccessor(b.index,a),material:this._addMaterial(l.material)};e&&"flat"!==l.shading&&(a.attributes.NORMAL=e);n&&(a.attributes.TEXCOORD_0=n);k&&"flat"!==l.shading&&(a.attributes.TANGENT=k);r&&(a.attributes.COLOR_0=r);const m=u.get(l.name);m?m.primitives.push(a):(a={name:l.name,primitives:[a]},
u.set(l.name,a),c.push(a))}}_addMeshVertexNonIndexed(b,a,c,d,e,n,k){const r={primitives:[]};a.push(r);a={attributes:{POSITION:c}};d&&(a.attributes.NORMAL=d);e&&(a.attributes.TEXCOORD_0=e);n&&(a.attributes.TANGENT=n);k&&(a.attributes.COLOR_0=k);b&&(a.material=this._addMaterial(b[0].material));r.primitives.push(a)}}F.GLTF=R;Object.defineProperty(F,Symbol.toStringTag,{value:"Module"})});