// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/buffer/BufferView","../../../../geometry/support/buffer/types","../../webgl-engine/lib/Util"],function(g,c,l,n){class h{constructor(a,b){this.layout=a;this.buffer="number"===typeof b?new ArrayBuffer(b*a.stride):b;for(const d of a.fields.keys())b=a.fields.get(d),this[d]=new b.constructor(this.buffer,b.offset,this.stride)}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(a,
b){return(a=this[a])&&a.elementCount===b.ElementCount&&a.elementType===b.ElementType?a:null}slice(a,b){return new h(this.layout,this.buffer.slice(a*this.stride,b*this.stride))}copyFrom(a,b=0,d=0,f=a.count){const e=this.stride;0===e%4?(a=new Uint32Array(a.buffer,b*e,f*e/4),(new Uint32Array(this.buffer,d*e,f*e/4)).set(a)):(a=new Uint8Array(a.buffer,b*e,f*e),(new Uint8Array(this.buffer,d*e,f*e)).set(a));return this}get usedMemory(){return this.byteLength}dispose(){}}class k{constructor(a=null){this._lastAligned=
this._stride=0;this._fields=new Map;a&&(this._stride=a.stride,a.fields.forEach(b=>this._fields.set(b[0],{...b[1],constructor:m.get(b[1].constructor)})))}freeze(){return this}vec2f(a,b){this._appendField(a,c.BufferViewVec2f,b);return this}vec2f64(a,b){this._appendField(a,c.BufferViewVec2f64,b);return this}vec3f(a,b){this._appendField(a,c.BufferViewVec3f,b);return this}vec3f64(a,b){this._appendField(a,c.BufferViewVec3f64,b);return this}vec4f(a,b){this._appendField(a,c.BufferViewVec4f,b);return this}vec4f64(a,
b){this._appendField(a,c.BufferViewVec4f64,b);return this}mat3f(a,b){this._appendField(a,c.BufferViewMat3f,b);return this}mat3f64(a,b){this._appendField(a,c.BufferViewMat3f64,b);return this}mat4f(a,b){this._appendField(a,c.BufferViewMat4f,b);return this}mat4f64(a,b){this._appendField(a,c.BufferViewMat4f64,b);return this}vec4u8(a,b){this._appendField(a,c.BufferViewVec4u8,b);return this}f32(a,b){this._appendField(a,c.BufferViewFloat,b);return this}f64(a,b){this._appendField(a,c.BufferViewFloat64,b);
return this}u8(a,b){this._appendField(a,c.BufferViewUint8,b);return this}u16(a,b){this._appendField(a,c.BufferViewUint16,b);return this}i8(a,b){this._appendField(a,c.BufferViewInt8,b);return this}vec2i8(a,b){this._appendField(a,c.BufferViewVec2i8,b);return this}vec2i16(a,b){this._appendField(a,c.BufferViewVec2i16,b);return this}vec2u8(a,b){this._appendField(a,c.BufferViewVec2u8,b);return this}vec4u16(a,b){this._appendField(a,c.BufferViewVec4u16,b);return this}u32(a,b){this._appendField(a,c.BufferViewUint32,
b);return this}_appendField(a,b,d){if(this._fields.has(a))n.assert(!1,`${a} already added to vertex buffer layout`);else{var f=b.ElementCount*l.elementTypeSize(b.ElementType),e=this._stride;this._stride+=f;this._fields.set(a,{size:f,constructor:b,offset:e,optional:d})}}createBuffer(a){return new h(this,a)}createView(a){return new h(this,a)}clone(){const a=new k;a._stride=this._stride;a._fields=new Map;this._fields.forEach((b,d)=>a._fields.set(d,b));a.BufferType=this.BufferType;return a}get stride(){if(this._lastAligned!==
this._fields.size){let a=1;this._fields.forEach(b=>a=Math.max(a,l.elementTypeSize(b.constructor.ElementType)));this._stride=Math.floor((this._stride+a-1)/a)*a;this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}class p{constructor(a){this.fields=[];a.fields.forEach((b,d)=>{var f=b.constructor;this.fields.push([d,{...b,constructor:`${f.ElementType}_${f.ElementCount}`}])});this.stride=a.stride}}const q=[c.BufferViewFloat,c.BufferViewVec2f,c.BufferViewVec3f,c.BufferViewVec4f,
c.BufferViewMat3f,c.BufferViewMat4f,c.BufferViewFloat64,c.BufferViewVec2f64,c.BufferViewVec3f64,c.BufferViewVec4f64,c.BufferViewMat3f64,c.BufferViewMat4f64,c.BufferViewUint8,c.BufferViewVec2u8,c.BufferViewVec3u8,c.BufferViewVec4u8,c.BufferViewUint16,c.BufferViewVec2u16,c.BufferViewVec3u16,c.BufferViewVec4u16,c.BufferViewUint32,c.BufferViewVec2u32,c.BufferViewVec3u32,c.BufferViewVec4u32,c.BufferViewInt8,c.BufferViewVec2i8,c.BufferViewVec3i8,c.BufferViewVec4i8,c.BufferViewInt16,c.BufferViewVec2i16,
c.BufferViewVec3i16,c.BufferViewVec4i16,c.BufferViewInt32,c.BufferViewVec2i32,c.BufferViewVec3i32,c.BufferViewVec4i32],m=new Map;q.forEach(a=>m.set(`${a.ElementType}_${a.ElementCount}`,a));g.InterleavedBuffer=h;g.InterleavedLayout=k;g.PackedLayout=p;g.newLayout=function(){return new k};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});