// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/colorUtils ../../../../../core/has ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/libs/gl-matrix-2/math/vec2 ../../../webgl/formats ../../../webgl/RenderNode ./HighlightApplyTechnique ./HighlightBlurTechnique ./HighlightDefaults ./HighlightDownsampleTechnique ./HighlightPassParameters ../../lib/basicInterfaces ../../lib/DefaultVertexAttributeLocations ../../lib/DefaultVertexBufferLayouts ../../lib/VertexArrayObject ../../../../../chunks/HighlightBlur.glsl ../../../../../chunks/HighlightDownsample.glsl ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/Util".split(" "),
function(p,t,A,C,B,n,u,O,P,D,v,w,E,F,G,x,H,I,r,J,K,L,M,m,N,y,z){p.Highlight=class extends E{constructor(c){super(c);this.produces="highlight-color";this.consumes={required:["highlight-color","highlights"]};this._passParameters=new I.HighlightPassParameters;this._downsampleDrawParameters=new m.HighlightDownsampleDrawParameters;this._blurDrawParameters=new M.HighlightBlurDrawParameters;this._blurColorFormat=C("mac")?w.ColorFormat.RGBA:w.ColorFormat.RGBA4;this._grid={coverage:null,vao:null,verticalCellCount:0,
horizontalCellCount:0,viewportWidth:0,viewportHeight:0};this._blurTechnique=c.techniques.acquire(G.HighlightBlurTechnique);this._downsampleTechnique=c.techniques.acquire(H.HighlightDownsampleTechnique);this._applyTechnique=c.techniques.acquire(F.HighlightApplyTechnique)}initialize(){this.addHandles([n.watch(()=>this.view.highlightOptions.color,c=>{this._passParameters.color=A.unitRGBAFromColor(c??x.defaultColor);this.view.highlightOptions.haloColor||(this._passParameters.haloColor=this._passParameters.color);
this.requestRender(r.RenderRequestType.UPDATE)},n.syncAndInitial),n.watch(()=>this.view.highlightOptions.haloColor,c=>{this._passParameters.haloColor=null!=c?A.unitRGBAFromColor(c):this._passParameters.color;this.requestRender(r.RenderRequestType.UPDATE)},n.syncAndInitial),n.watch(()=>this.view.highlightOptions.haloOpacity,c=>{this._passParameters.haloOpacity=c??x.defaultHaloOpacity;this._passParameters.haloOpacityOccluded=.25*this._passParameters.haloOpacity;this.requestRender(r.RenderRequestType.UPDATE)},
n.syncAndInitial),n.watch(()=>this.view.highlightOptions.fillOpacity,c=>{this._passParameters.fillOpacity=c??x.defaultFillOpacity;this._passParameters.fillOpacityOccluded=.25*this._passParameters.fillOpacity;this.requestRender(r.RenderRequestType.UPDATE)},n.syncAndInitial)])}destroy(){this._blurTechnique.release();this._downsampleTechnique.release();this._applyTechnique.release();this._grid.coverage=B.releaseMaybe(this._grid.coverage);this._grid.vao=B.disposeMaybe(this._grid.vao)}render(c){if(this.bindParameters.decorations===
r.Decorations.OFF)return c.find(({name:q})=>"highlight-color"===q);if(!(this._blurTechnique.compiled&&this._downsampleTechnique.compiled&&this._applyTechnique.compiled))return this.requestRender(r.RenderRequestType.UPDATE),c.find(({name:q})=>"highlight-color"===q);var k=c.find(({name:q})=>"highlights"===q).getTexture();const h=this.bindParameters.camera;var a=h.pixelRatio,b=Math.ceil(h.fullWidth/a);const l=Math.ceil(h.fullHeight/a);a=this.renderingContext;this._gridUpdateResources(k);this._gridComputeCoverage(k,
this.bindParameters);this._passParameters.highlightTexture=k;this._passParameters.coverageTexture=this._grid.coverage?.getTexture();const {width:d,height:e}=k.descriptor;v.set(this._passParameters.coverageRounding,d/(Math.ceil(d/m.gridCellPixelSize)*m.gridCellPixelSize),e/(Math.ceil(e/m.gridCellPixelSize)*m.gridCellPixelSize));const f=this._grid.vao;a.bindVAO(f);const g=this.fboCache.acquire(b,l,"highlight blur",this._blurColorFormat);a.unbindTexture(g.fbo?.colorTexture);a.bindFramebuffer(g.fbo);
a.setClearColor(0,0,0,0);a.clear(y.ClearBufferBit.COLOR_BUFFER_BIT);a.setViewport(0,0,b,l);this._blurDrawParameters.blurInputTexture=k;v.set(this._blurDrawParameters.blurSize,1/b,0);k=a.bindTechnique(this._blurTechnique,this.bindParameters,this._passParameters,this._blurDrawParameters);a.drawArrays(this._blurTechnique.primitiveType,0,z.vertexCount(f,"geometry"));b=this.fboCache.acquire(b,l,"highlight blur",this._blurColorFormat);a.unbindTexture(b.fbo?.colorTexture);a.bindFramebuffer(b.fbo);a.setClearColor(0,
0,0,0);a.clear(y.ClearBufferBit.COLOR_BUFFER_BIT);this._blurDrawParameters.blurInputTexture=g.getTexture();v.set(this._blurDrawParameters.blurSize,0,1/l);k.bindDraw(this._blurDrawParameters,this.bindParameters,this._passParameters);a.drawArrays(this._blurTechnique.primitiveType,0,z.vertexCount(f,"geometry"));c=c.find(({name:q})=>"highlight-color"===q);a.bindFramebuffer(c.fbo);a.setViewport4fv(h.fullViewport);this._passParameters.blurTexture=b.getTexture();a.bindTechnique(this._applyTechnique,this.bindParameters,
this._passParameters);a.drawArrays(this._applyTechnique.primitiveType,0,z.vertexCount(f,"geometry"));g.release();b.release();return c}_gridUpdateResources(c){const k=this.renderingContext,h=this._grid;var a=Math.ceil(c.descriptor.height/m.gridCellPixelSize),b=Math.ceil(c.descriptor.width/m.gridCellPixelSize);if(!h.vao||h.verticalCellCount!==a||h.horizontalCellCount!==b){h.verticalCellCount=a;h.horizontalCellCount=b;c=a+1;var l=b+1;a=1/a;b=1/b;var d=new Float32Array(24*c*l),e=0;for(let f=0;f<c;f++)for(let g=
0;g<l;g++)d[e++]=(g-.5)*b*2-1,d[e++]=(f-.5)*a*2-1,d[e++]=g*b,d[e++]=f*a,d[e++]=(g+.5)*b*2-1,d[e++]=(f-.5)*a*2-1,d[e++]=g*b,d[e++]=f*a,d[e++]=(g-.5)*b*2-1,d[e++]=(f+.5)*a*2-1,d[e++]=g*b,d[e++]=f*a,d[e++]=(g-.5)*b*2-1,d[e++]=(f+.5)*a*2-1,d[e++]=g*b,d[e++]=f*a,d[e++]=(g+.5)*b*2-1,d[e++]=(f-.5)*a*2-1,d[e++]=g*b,d[e++]=f*a,d[e++]=(g+.5)*b*2-1,d[e++]=(f+.5)*a*2-1,d[e++]=g*b,d[e++]=f*a;h.vao?.dispose();h.vao=new L.VertexArrayObject(k,J.Default3D,{geometry:K.Pos2Tex},{geometry:N.BufferObject.createVertex(k,
y.Usage.STATIC_DRAW,d)})}}_gridComputeCoverage(c,k){const h=this.renderingContext,a=this._grid;var b=c.descriptor;const l=Math.ceil(b.width/m.gridCellPixelSize);b=Math.ceil(b.height/m.gridCellPixelSize);this._downsampleDrawParameters.input=c;a.coverage?.release();a.coverage=this.fboCache.acquire(l,b,"highlight coverage",w.ColorFormat.RG);h.unbindTexture(a.coverage.fbo?.colorTexture);h.bindFramebuffer(a.coverage.fbo);h.bindTechnique(this._downsampleTechnique,k,this._passParameters,this._downsampleDrawParameters);
h.setViewport(0,0,l,b);h.screen.draw()}get test(){}};t.__decorate([u.property()],p.Highlight.prototype,"produces",void 0);t.__decorate([u.property()],p.Highlight.prototype,"consumes",void 0);t.__decorate([u.property({constructOnly:!0})],p.Highlight.prototype,"techniques",void 0);p.Highlight=t.__decorate([D.subclass("esri.views.3d.webgl-engine.effects.highlight.Highlight")],p.Highlight);Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});