/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import{f as t}from"./maybe.js";import{t as i}from"../core/lang.js";import{R as r}from"./enums.js";import{b as s}from"./Texture.js";const n=()=>e.getLogger("esri.views.webgl.VertexArrayObject");let o=class{constructor(e,t,i,r,s=null){this._context=e,this._locations=t,this._layout=i,this._buffers=r,this._indexBuffer=s,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*i}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=t(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&n().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(r.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(r.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:i}=this;e||n().error("Vertex buffer dictionary is empty!");const r=this._context.gl;for(const i in e){const r=e[i];r||n().error("Vertex buffer is uninitialized!");const o=t[i];o||n().error("Vertex element descriptor is empty!"),s(this._context,this._locations,r,o)}null!=i&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}};export{o as V};