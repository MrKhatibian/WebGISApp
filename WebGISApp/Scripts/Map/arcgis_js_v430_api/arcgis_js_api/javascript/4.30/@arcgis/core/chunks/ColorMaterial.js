/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{h as e}from"../core/lang.js";import{Z as t}from"./vec4f64.js";import{n as r}from"./InterleavedLayout.js";import{S as s,e as o,f as a,g as i}from"./Matrix4PassUniform.js";import{C as n}from"./basicInterfaces.js";import{S as l,d as p,V as c,v as u,F as h,e as d,m as f,C as v,h as m,w as g,j as C,P as O,x as y,o as T,k as _,p as A,s as P,q as b,r as E,t as S,R as w,D as j,u as D,O as I,a as L,y as N}from"./StencilUtils.js";import{V as R}from"./VertexAttribute.js";import{D as x}from"./RayIntersections.js";import{T as V}from"./TriangleMaterial.js";import{D as F}from"./Material.js";import{T as M,V as U,O as $}from"./OutputHighlight.glsl.js";import{g as B}from"./interfaces3.js";import{l as H}from"./enums.js";import{m as z,c as G,d as W,a as q}from"./renderState.js";import{_ as Q}from"./tslib.es6.js";import{p as k}from"./ShaderTechniqueConfiguration.js";const J=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new l,{vertex:r,fragment:o,attributes:a,varyings:i}=t;p(r,e),t.include(M,e),t.include(U,e),t.include(c,e),t.include(u,e),a.add(R.POSITION,"vec3"),e.vvColor&&a.add(R.COLORFEATUREATTRIBUTE,"float"),i.add("vColor","vec4"),i.add("vpos","vec3");const n=e.multipassEnabled&&e.output===s.Color;n&&i.add("depth","float"),r.uniforms.add(new h("eColor",(e=>e.color))),r.code.add(B`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${e.hasVertexColors?"vColor *= eColor;":e.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${n?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(d,e),n&&t.include(f,e),o.include(v);const C=e.output===s.Highlight;return C&&t.include($,e),e.transparencyPassType===m.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),o.code.add(B`
  void main() {
    discardBySlice(vpos);
    ${n?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${e.output===s.ObjectAndLayerIdColor?B`fColor.a = 1.0;`:""}

    if (fColor.a < ${B.float(g)}) {
      discard;
    }

    ${e.output===s.Color?B`fragColor = highlightSlice(fColor, vpos); ${e.transparencyPassType===m.ColorAlpha?B`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}`:""}
    ${C?B`outputHighlight();`:""};
    ${e.output===s.ObjectAndLayerIdColor?B`outputObjectAndLayerIdColor();`:""}
  }
  `),t}},Symbol.toStringTag,{value:"Module"}));class Y extends C{initializeProgram(e){return new O(e.rctx,Y.shader.get().build(this.configuration),F)}_createPipeline(e,t){const r=this.configuration,o=e===m.NONE,a=e===m.FrontFace;return z({blending:r.output===s.Color&&r.transparent?o?y:T(e):null,culling:G(r.cullFace),depthTest:r.draped?null:{func:_(e)},depthWrite:r.draped?null:(o||a)&&r.writeDepth?W:null,drawBuffers:r.output===s.Depth?{buffers:[H.NONE]}:A(e),colorWrite:q,stencilWrite:r.hasOccludees?P:null,stencilTest:r.hasOccludees?t?b:E:null,polygonOffset:o||a?r.polygonOffset?Z:null:S(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}Y.shader=new w(J,(()=>Promise.resolve().then((()=>J))));const Z={factor:1,units:1};class K extends j{constructor(){super(...arguments),this.output=s.Color,this.cullFace=n.None,this.transparencyPassType=m.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1}}Q([k({count:s.COUNT})],K.prototype,"output",void 0),Q([k({count:n.COUNT})],K.prototype,"cullFace",void 0),Q([k({count:m.COUNT})],K.prototype,"transparencyPassType",void 0),Q([k()],K.prototype,"hasSlicePlane",void 0),Q([k()],K.prototype,"hasVertexColors",void 0),Q([k()],K.prototype,"transparent",void 0),Q([k()],K.prototype,"polygonOffset",void 0),Q([k()],K.prototype,"enableOffset",void 0),Q([k()],K.prototype,"writeDepth",void 0),Q([k()],K.prototype,"hasOccludees",void 0),Q([k()],K.prototype,"multipassEnabled",void 0),Q([k()],K.prototype,"cullAboveGround",void 0),Q([k()],K.prototype,"objectAndLayerIdColorInstanced",void 0),Q([k()],K.prototype,"vvColor",void 0),Q([k()],K.prototype,"draped",void 0),Q([k({constValue:!1})],K.prototype,"occlusionPass",void 0),Q([k({constValue:!0})],K.prototype,"hasVvInstancing",void 0),Q([k({constValue:!1})],K.prototype,"vvSize",void 0),Q([k({constValue:!1})],K.prototype,"vvOpacity",void 0);class X extends V{constructor(e){super(e,new te),this.supportsEdges=!0,this.produces=new Map([[D.OPAQUE_MATERIAL,e=>e===s.Highlight||o(e)&&!this._isTransparent],[D.OPAQUE_NO_SSAO_DEPTH,e=>a(e)&&this.parameters.writeLinearDepth&&!this._isTransparent],[D.TRANSPARENT_MATERIAL,e=>o(e)&&this._isTransparent&&this.parameters.writeDepth],[D.TRANSPARENT_NO_SSAO_DEPTH,e=>a(e)&&this.parameters.writeLinearDepth&&this._isTransparent&&this.parameters.writeDepth],[D.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(o(e)||a(e)&&this.parameters.writeLinearDepth)&&this._isTransparent&&!this.parameters.writeDepth],[D.DRAPED_MATERIAL,e=>i(e)]]),this._configuration=new K}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<I,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}createGLMaterial(e){return new ee(e)}createBufferWriter(){const t=r().vec3f(R.POSITION);return e("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(R.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?t.f32(R.COLORFEATUREATTRIBUTE):t.vec4u8(R.COLOR),new x(t)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class ee extends L{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output===s.Color&&this._updateOccludeeState(e),this.ensureTechnique(Y,e)}}class te extends N{constructor(){super(...arguments),this.color=t,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=n.None,this.hasOccludees=!1,this.draped=!1}}export{X as C};