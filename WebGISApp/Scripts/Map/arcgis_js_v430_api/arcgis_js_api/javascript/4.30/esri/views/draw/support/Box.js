// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Evented ../../../core/maybe ../../../core/quantityUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/coordsUtils ../../../geometry/support/rotate ../../../symbols/SimpleFillSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover ./HighlightHelper ./layerUtils ./settings ../../interactive/sketch/SketchOptions ../../interactive/tooltip/Tooltip ../../interactive/tooltip/infos/ExtentRotateTooltipInfo ../../interactive/tooltip/infos/ExtentScaleTooltipInfo ../../interactive/tooltip/infos/TranslateTooltipInfo ../../support/automaticLengthMeasurementUtils ../../support/extentUtils ../../../geometry/Point ../../../geometry/Polygon ../../../geometry/Polyline".split(" "),
function(q,l,F,m,N,X,w,r,ua,va,wa,Y,G,O,P,L,Q,Z,H,t,aa,ba,ca,da,R,ea,fa,ha,ia,ja,ka,x,la,ma){function D(a,b=2){return Number.parseFloat(a.toFixed(b))}class na{constructor(a,b,c,d){this.graphics=a;this.mover=b;this.dx=c;this.dy=d;this.type="move-start"}}class oa{constructor(a,b,c,d){this.graphics=a;this.mover=b;this.dx=c;this.dy=d;this.type="move"}}class S{constructor(a,b,c,d){this.graphics=a;this.mover=b;this.dx=c;this.dy=d;this.type="move-stop"}}class pa{constructor(a,b,c){this.graphics=a;this.mover=
b;this.angle=c;this.type="rotate-start"}}class qa{constructor(a,b,c){this.graphics=a;this.mover=b;this.angle=c;this.type="rotate"}}class T{constructor(a,b,c){this.graphics=a;this.mover=b;this.angle=c;this.type="rotate-stop"}}class ra{constructor(a,b,c,d){this.graphics=a;this.mover=b;this.xScale=c;this.yScale=d;this.type="scale-start"}}class sa{constructor(a,b,c,d){this.graphics=a;this.mover=b;this.xScale=c;this.yScale=d;this.type="scale"}}class U{constructor(a,b,c,d){this.graphics=a;this.mover=b;
this.xScale=c;this.yScale=d;this.type="scale-stop"}}l=da.settings.transformGraphics;const ta={centerIndicator:new H({style:"cross",size:l.center.size,color:l.center.color}),fill:{default:new Q({color:l.fill.color,outline:{color:l.fill.outlineColor,join:"round",width:1}}),active:new Q({color:l.fill.stagedColor,outline:{color:l.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new H({style:"square",size:l.vertex.size,color:l.vertex.color,outline:{color:l.vertex.outlineColor,width:1}}),
hover:new H({style:"square",size:l.vertex.hoverSize,color:l.vertex.hoverColor,outline:{color:l.vertex.hoverOutlineColor,width:1}})},rotator:{default:new H({style:"circle",size:l.vertex.size,color:l.vertex.color,outline:{color:l.vertex.outlineColor,width:1}}),hover:new H({style:"circle",size:l.vertex.hoverSize,color:l.vertex.hoverColor,outline:{color:l.vertex.hoverOutlineColor,width:1}})},rotatorLine:new Z({color:l.line.color,width:1})};m=class extends m.EventedAccessor{constructor(a){super(a);this._activeHandleGraphic=
null;this._graphicAttributes={esriSketchTool:"box"};this._backgroundGraphic=this._centerGraphic=this._mover=null;this._vertexGraphics=[];this._rotateHandleGraphic=null;this._rotateGraphicOffset=20;this._angleOfRotation=0;this._startInfo=this._rotateLineGraphic=null;this._totalDy=this._totalDx=0;this._yScale=this._xScale=1;this.tooltip=null;this.type="box";this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},
onGraphicClick(){}};this.enableScaling=this.enableRotation=this.enableMovement=!0;this.graphics=[];this.highlightsEnabled=!0;this.layer=null;this.preserveAspectRatio=!1;this.showCenterGraphic=!0;this.symbols=ta;this.sketchOptions=new R;this.view=null;this._getBounds=(()=>{const b=G.create();return(c,d)=>{c[0]=Number.POSITIVE_INFINITY;c[1]=Number.POSITIVE_INFINITY;c[2]=Number.NEGATIVE_INFINITY;c[3]=Number.NEGATIVE_INFINITY;for(const e of d){if(!e)continue;let g,h,f;"point"===e.type?(d=h=e.x,g=f=e.y):
"multipoint"===e.type?(d=P.geometryToCoordinates(e),[d,g,h,f]=O.getRingsOrPathsBounds(b,[d])):"extent"===e.type?[d,g,h,f]=[e.xmin,e.ymin,e.xmax,e.ymax]:(d=P.geometryToCoordinates(e),[d,g,h,f]=O.getRingsOrPathsBounds(b,d));c[0]=Math.min(d,c[0]);c[1]=Math.min(g,c[1]);c[2]=Math.max(h,c[2]);c[3]=Math.max(f,c[3])}return c}})()}initialize(){const a=this.view;this._highlightHelper=new ba({view:a});this._setup();this.addHandles([w.when(()=>a?.ready,()=>{const {layer:b,view:c}=this;ca.addUniqueLayer(c,b)},
{once:!0,initial:!0}),w.watch(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),w.watch(()=>a?.scale,()=>{this._updateRotateGraphic();this._updateRotateLineGraphic()}),w.watch(()=>this.graphics,()=>this.refresh()),w.watch(()=>this.layer,(b,c)=>{c&&this._resetGraphics(c);this.refresh()}),w.watch(()=>this.highlightsEnabled,()=>{this._highlightHelper?.removeAll();this._setUpHighlights()}),
w.watch(()=>this.sketchOptions.tooltips.effectiveEnabled,b=>{this.tooltip=b?new ea.Tooltip({view:this.view}):N.destroyMaybe(this.tooltip)},w.syncAndInitial),w.watch(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),w.initial),this.on("move-start",b=>this.callbacks?.onMoveStart?.(b)),this.on("move",b=>this.callbacks?.onMove?.(b)),this.on("move-stop",b=>this.callbacks?.onMoveStop?.(b)),this.on("rotate-start",b=>this.callbacks?.onRotateStart?.(b)),this.on("rotate",b=>this.callbacks?.onRotate?.(b)),
this.on("rotate-stop",b=>this.callbacks?.onRotateStop?.(b)),this.on("scale-start",b=>this.callbacks?.onScaleStart?.(b)),this.on("scale",b=>this.callbacks?.onScale?.(b)),this.on("scale-stop",b=>this.callbacks?.onScaleStop?.(b))])}destroy(){this._reset();this.tooltip=N.destroyMaybe(this.tooltip)}get state(){const a=this.view?.ready??!1,b=this.graphics.length&&this.layer;return a&&b?"active":a?"ready":"disabled"}isUIGraphic(a){return this._vertexGraphics.includes(a)||a===this._backgroundGraphic||a===
this._centerGraphic||a===this._rotateHandleGraphic||a===this._rotateLineGraphic}move(a,b){if(this._mover&&this.graphics.length){for(const c of this.graphics){const d=t.cloneMove(c.geometry,a,b,this.view);c.geometry=d}this.refresh();this.emit("move-stop",new S(this.graphics,null,a,b))}}scale(a,b){if(this._mover&&this.graphics.length){for(const c of this.graphics){const d=t.scale(c.geometry,a,b);c.geometry=d}this.refresh();this.emit("scale-stop",new U(this.graphics,null,a,b))}}rotate(a,b){if(this._mover&&
this.graphics.length){b||=new x(this._vertexGraphics[1].geometry.x,this._vertexGraphics[3].geometry.y,this.view.spatialReference);for(const c of this.graphics){const d=L(c.geometry,a,b);c.geometry=d}this.refresh();this.emit("rotate-stop",new T(this.graphics,null,a))}}refresh(){this._reset();this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper?.removeAll();this._resetGraphicStateVars();
this._resetGraphics();this._updateTooltip();this._mover&&this._mover.destroy();this._mover=null;this.view.cursor="default"}_resetGraphicStateVars(){this._activeHandleGraphic=this._startInfo=null;this._totalDy=this._totalDx=0;this._yScale=this._xScale=1;this._angleOfRotation=0}_resetGraphics(a){if(a=a||this.layer)a.removeMany(this._vertexGraphics),a.remove(this._backgroundGraphic),a.remove(this._centerGraphic),a.remove(this._rotateHandleGraphic),a.remove(this._rotateLineGraphic);this._vertexGraphics.forEach(b=>
!b.destroyed&&b.destroy());!this._backgroundGraphic.destroyed&&this._backgroundGraphic.destroy();!this._centerGraphic.destroyed&&this._centerGraphic.destroy();!this._rotateHandleGraphic.destroyed&&this._rotateHandleGraphic.destroy();!this._rotateLineGraphic.destroyed&&this._rotateLineGraphic.destroy();this._vertexGraphics=[];this._rotateLineGraphic=this._rotateHandleGraphic=this._centerGraphic=this._backgroundGraphic=null}_setupMover(){let a=[];this.enableScaling&&(a=a.concat(this._vertexGraphics));
this.enableMovement&&(a=a.concat(this.graphics,this._backgroundGraphic));this.enableRotation&&a.push(this._rotateHandleGraphic);this.showCenterGraphic&&a.push(this._centerGraphic);this._mover=new aa({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:a,callbacks:{onGraphicClick:b=>this._onGraphicClickCallback(b),onGraphicMoveStart:b=>this._onGraphicMoveStartCallback(b),onGraphicMove:b=>this._onGraphicMoveCallback(b),onGraphicMoveStop:b=>this._onGraphicMoveStopCallback(b),
onGraphicPointerOver:b=>this._onGraphicPointerOverCallback(b),onGraphicPointerOut:b=>this._onGraphicPointerOutCallback(b)}})}_getStartInfo(a){const [b,c,d,e]=this._getBoxBounds(G.create()),g=Math.abs(d-b),h=Math.abs(e-c),{x:f,y:n}=a.geometry;return{width:g,height:h,centerX:(d+b)/2,centerY:(e+c)/2,startX:f,startY:n,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(a=>this._getGraphicInfo(a))}_getGraphicInfo(a){a=
a.geometry;const [b,c,d,e]=this._getBounds(G.create(),[a]);return{width:Math.abs(d-b),height:Math.abs(e-c),centerX:(d+b)/2,centerY:(e+c)/2,geometry:a}}_onGraphicClickCallback(a){a.viewEvent.stopPropagation();this.emit("graphic-click",a);if(this.callbacks.onGraphicClick)this.callbacks.onGraphicClick(a)}_onGraphicMoveStartCallback(a){const {_angleOfRotation:b,_xScale:c,_yScale:d,_backgroundGraphic:e,_vertexGraphics:g,_rotateHandleGraphic:h,symbols:f}=this,n=a.graphic;this._resetGraphicStateVars();this._hideGraphicsBeforeUpdate();
e.symbol=f.fill.active;this._startInfo=this._getStartInfo(n);this._updateTooltip(n,a.viewEvent);n===h?(this.view.cursor="grabbing",this.emit("rotate-start",new pa(this.graphics,n,b))):g.includes(n)?(this._activeHandleGraphic=n,this.emit("scale-start",new ra(this.graphics,n,c,d))):this.emit("move-start",new na(this.graphics,n,a.dx,a.dy))}_onGraphicMoveCallback(a){const b=a.graphic;if(this._startInfo)if(this._vertexGraphics.includes(b))this._scaleGraphic(b),this._updateTooltip(b,a.viewEvent),this.emit("scale",
new sa(this.graphics,b,this._xScale,this._yScale));else if(b===this._rotateHandleGraphic)this._rotateGraphic(b),this._updateTooltip(b,a.viewEvent),this.emit("rotate",new qa(this.graphics,b,this._angleOfRotation));else{const {dx:c,dy:d}=a;this._totalDx+=c;this._totalDy+=d;this._moveGraphic(b,c,d);this._updateTooltip(b,a.viewEvent);this.emit("move",new oa(this.graphics,b,c,d))}}_onGraphicMoveStopCallback(a){a=a.graphic;if(this._startInfo){var {_angleOfRotation:b,_totalDx:c,_totalDy:d,_xScale:e,_yScale:g,
_vertexGraphics:h,_rotateHandleGraphic:f}=this;this.refresh();a===f?(this.view.cursor="pointer",this.emit("rotate-stop",new T(this.graphics,a,b))):h.includes(a)?this.emit("scale-stop",new U(this.graphics,a,e,g)):this.emit("move-stop",new S(this.graphics,a,c,d))}else this.refresh()}_onGraphicPointerOverCallback(a){const {_backgroundGraphic:b,_vertexGraphics:c,graphics:d,_rotateHandleGraphic:e,symbols:g,view:h}=this;var f=a.graphic;this._hoveredGraphic=f;if(f===e)e.symbol=g.rotator.hover,h.cursor="pointer",
this._updateTooltip(f);else if(d.includes(f)||f===b)h.cursor="move";else if(c.includes(f)){this._updateTooltip(f);a.graphic.symbol=g.handles.hover;f=h.rotation;a=a.index;8>a&&(a=0<=f&&45>f?a%8:45<=f&&90>f?(a+1)%8:90<=f&&135>f?(a+2)%8:135<=f&&180>f?(a+3)%8:180<=f&&225>f?(a+4)%8:225<=f&&270>f?(a+5)%8:270<=f&&315>f?(a+6)%8:(a+7)%8);switch(a){case 0:a="nwse-resize";break;case 1:a="ns-resize";break;case 2:a="nesw-resize";break;case 3:a="ew-resize";break;case 4:a="nwse-resize";break;case 5:a="ns-resize";
break;case 6:a="nesw-resize";break;case 7:a="ew-resize";break;default:a="pointer"}h.cursor=a}else h.cursor="pointer"}_onGraphicPointerOutCallback(a){const {_vertexGraphics:b,_rotateHandleGraphic:c,symbols:d,view:e}=this;this._hoveredGraphic=null;a.graphic===c?c.symbol=d.rotator.default:b.includes(a.graphic)&&(a.graphic.symbol=d.handles.default);e.cursor="default";this._updateTooltip()}_scaleGraphic(a){const {_startInfo:b,_vertexGraphics:c,preserveAspectRatio:d,view:e}=this,{centerX:g,centerY:h,graphicInfos:f,
height:n,startX:y,startY:C,width:M}=b,{resolution:E,transform:p}=e.state;var k=c.indexOf(a);1!==k&&5!==k||this._updateX(a,g);3!==k&&7!==k||this._updateY(a,h);const {x:I,y:J}=a.geometry;var z=p[0]*I+p[2]*J+p[4],B=p[1]*I+p[3]*J+p[5];a=f?.map(K=>K.geometry)??[];var A=a.every(K=>"point"===K.type);if(0!==M&&0!==n||!A)if(d){var v=D(p[0]*g+p[2]*h+p[4],2);k=D(p[1]*g+p[3]*h+p[5],2);A=D(p[0]*y+p[2]*C+p[4],2);const K=D(p[1]*y+p[3]*C+p[5],2);v=t.getScaleRatio(v,k,A,K,z,B);if(0===v||Infinity===Math.abs(v))v=1;
this._xScale=this._yScale=v;for(var u of a)v=a.indexOf(u),this.graphics[v].geometry=t.scale(u,this._xScale,this._yScale,[g,h]);this._updateBackgroundGraphic()}else{A=I-y;u=C-J;if(1===k||5===k)A=0;else if(3===k||7===k)u=0;if(0!==A||0!==u){z=(M+(y>g?A:-1*A))/M;B=(n+(C<h?u:-1*u))/n;if(1===k||5===k||0===z||Infinity===Math.abs(z))z=1;if(3===k||7===k||0===B||Infinity===Math.abs(B))B=1;this._xScale=z;this._yScale=B;k=(g+A/2-g)/E;u=(h+u/2-h)/E;z=t.scale(b.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=
t.cloneMove(z,k,u,e,!0);var {centerX:V,centerY:W}=this._getGraphicInfo(this._backgroundGraphic);u=(V-g)/E;k=-1*(W-h)/E;for(v of a)z=a.indexOf(v),B=t.scale(v,this._xScale,this._yScale,[g,h]),this.graphics[z].geometry=t.cloneMove(B,u,k,e,!0);this._centerGraphic.geometry=new x(V,W,e.spatialReference)}}else{v=D((I-y)/E);u=D((C-J)/E);for(k=0;k<a.length;k++)this.graphics[k].geometry=t.cloneMove(a[k],v,u,e,!0);this._centerGraphic.geometry=new x(I,J,e.spatialReference);this._backgroundGraphic.geometry=t.cloneMove(b.box,
v,u,e,!0)}}_rotateGraphic(a){const {centerX:b,centerY:c,startX:d,startY:e,box:g,rotate:h}=this._startInfo;var f=this.view.spatialReference,n=new x(d,e,f);f=new x(b,c,f);this._angleOfRotation=t.getRotationAngle(n,a.geometry,f);a=this._startInfo.graphicInfos?.map(y=>y.geometry)??[];for(const y of a){n=a.indexOf(y);const C=L(y,this._angleOfRotation,f);this.graphics[n].geometry=C}this._backgroundGraphic.geometry=L(g,this._angleOfRotation,f);this._rotateHandleGraphic.geometry=L(h,this._angleOfRotation,
f)}_moveGraphic(a,b,c){if(this.graphics.includes(a)){this._backgroundGraphic.geometry=t.cloneMove(this._backgroundGraphic.geometry,b,c,this.view);for(const d of this.graphics)d!==a&&(d.geometry=t.cloneMove(d.geometry,b,c,this.view))}else a===this._centerGraphic&&(this._backgroundGraphic.geometry=t.cloneMove(this._backgroundGraphic.geometry,b,c,this.view));if(a===this._backgroundGraphic||a===this._centerGraphic)for(const d of this.graphics)d.geometry=t.cloneMove(d.geometry,b,c,this.view)}_setUpHighlights(){this.highlightsEnabled&&
this.graphics.length&&this._highlightHelper?.add(this.graphics)}_setupGraphics(){const {_graphicAttributes:a,symbols:b}=this;this._centerGraphic=new F({symbol:b.centerIndicator,attributes:a});this.showCenterGraphic&&this.layer.add(this._centerGraphic);this._backgroundGraphic=new F({symbol:b.fill.default,attributes:a});this.layer.add(this._backgroundGraphic);this._rotateLineGraphic=new F({symbol:b.rotatorLine,attributes:a});this._rotateHandleGraphic=new F({symbol:b.rotator.default,attributes:a});this.enableRotation&&
!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let c=0;8>c;c++)this._vertexGraphics.push(new F({symbol:b.handles.default,attributes:a}));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateSymbolsForTheme(){const a=this.view.effectiveTheme.accentColor;this.symbols={...this.symbols,fill:{active:this.symbols.fill.active?.clone().set("outline.color",a),default:this.symbols.fill.default?.clone().set("outline.color",a)},handles:{...this.symbols.handles,
default:this.symbols.handles.default.clone().set("outline.color",a)},rotator:{...this.symbols.rotator,default:this.symbols.rotator.default.clone().set("outline.color",a)},rotatorLine:this.symbols.rotatorLine.clone().set("color",a)};for(const b of this._vertexGraphics)b.symbol=b===this._hoveredGraphic?this.symbols.handles.hover:this.symbols.handles.default;this._backgroundGraphic.symbol=this.symbols.fill.default;this._rotateHandleGraphic.symbol=this._rotateHandleGraphic===this._hoveredGraphic?this.symbols.rotator.hover:
this.symbols.rotator.default;this._rotateLineGraphic.symbol=this.symbols.rotatorLine}_updateGraphics(){this._updateBackgroundGraphic();this._updateHandleGraphics();this._updateCenterGraphic();this._updateRotateGraphic();this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1;this._rotateHandleGraphic.visible=!1;this._rotateLineGraphic.visible=!1;this._vertexGraphics.forEach(a=>a.visible=!1)}_updateHandleGraphics(){const a=this._getCoordinates(!0);this._vertexGraphics.forEach((b,
c)=>{const [d,e]=a[c];this._updateXY(b,d,e)})}_updateBackgroundGraphic(){const a=this._getCoordinates();this._backgroundGraphic.geometry=new la({rings:a,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const [a,b,c,d]=this._getBoxBounds(G.create());this._centerGraphic.geometry=new x((c+a)/2,(d+b)/2,this.view.spatialReference)}_updateRotateGraphic(){if(this._vertexGraphics.length){var {x:a,y:b}=this._vertexGraphics[1].geometry;this._rotateHandleGraphic.geometry=new x(a,b+this.view.state.resolution*
this._rotateGraphicOffset,this.view.spatialReference)}}_updateRotateLineGraphic(){if(this._vertexGraphics.length&&this._rotateHandleGraphic?.geometry){var a=this._vertexGraphics[1].geometry,b=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new ma({paths:[[a.x,a.y],[b.x,b.y]],spatialReference:this.view.spatialReference})}}_updateXY(a,b,c){a.geometry=new x(b,c,this.view.spatialReference)}_updateX(a,b){a.geometry=new x(b,a.geometry.y,this.view.spatialReference)}_updateY(a,b){a.geometry=
new x(a.geometry.x,b,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(a=>null!=a?.geometry&&"extent"===a.geometry.type)}_getBoxBounds(a){const b=this.graphics.map(c=>c.geometry);return this._getBounds(a,b)}_getCoordinates(a){const [b,c,d,e]=this._getBoxBounds(G.create());if(a){a=(b+d)/2;const g=(e+c)/2;return[[b,e],[a,e],[d,e],[d,g],[d,c],[a,c],[b,c],[b,g]]}return[[b,e],[d,e],[d,c],[b,c]]}_updateTooltip(a,b){if(null!=this.tooltip)if(a){var {_backgroundGraphic:c,graphics:d,
_vertexGraphics:e,_rotateHandleGraphic:g}=this;a===g?this._updateRotateTooltip():e.includes(a)?this._updateScaleTooltip():(d.includes(a)||a===c)&&this._updateMoveTooltip(b)}else this.tooltip.clear()}_updateRotateTooltip(){null!=this.tooltip&&(this.tooltip.info=new fa.ExtentRotateTooltipInfo({sketchOptions:this.sketchOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const {tooltip:a,_xScale:b,_yScale:c,sketchOptions:d,view:e}=this;if(null!=a){var g=this._getCoordinates();g=ka.autoSize2D({topLeft:g[0],
topRight:g[1],bottomRight:g[2],bottomLeft:g[3],spatialReference:e.spatialReference});if(null!=g){var {xSize:h,ySize:f}=g;a.info=new ha.ExtentScaleTooltipInfo({sketchOptions:d,xScale:Math.abs(b),yScale:Math.abs(c),xSize:h,ySize:f})}}}_updateMoveTooltip(a){const {tooltip:b,sketchOptions:c,view:d}=this;if(null!=b){var e=new ia.TranslateTooltipInfo({sketchOptions:c});if(a){const {x:g,y:h}=a.origin;a=d.toMap(a);const f=d.toMap({x:g,y:h});a=ja.autoDistanceBetweenPoints2D(f,a);e.distance=null!=a?a:X.zeroMeters}b.info=
e}}};q.__decorate([r.property()],m.prototype,"tooltip",void 0);q.__decorate([r.property({readOnly:!0})],m.prototype,"type",void 0);q.__decorate([r.property()],m.prototype,"callbacks",void 0);q.__decorate([r.property()],m.prototype,"enableMovement",void 0);q.__decorate([r.property()],m.prototype,"enableRotation",void 0);q.__decorate([r.property()],m.prototype,"enableScaling",void 0);q.__decorate([r.property()],m.prototype,"graphics",void 0);q.__decorate([r.property()],m.prototype,"highlightsEnabled",
void 0);q.__decorate([r.property()],m.prototype,"layer",void 0);q.__decorate([r.property()],m.prototype,"preserveAspectRatio",void 0);q.__decorate([r.property()],m.prototype,"showCenterGraphic",void 0);q.__decorate([r.property({readOnly:!0})],m.prototype,"state",null);q.__decorate([r.property()],m.prototype,"symbols",void 0);q.__decorate([r.property({type:R})],m.prototype,"sketchOptions",void 0);q.__decorate([r.property({constructOnly:!0})],m.prototype,"view",void 0);return m=q.__decorate([Y.subclass("esri.views.draw.support.Box")],
m)});