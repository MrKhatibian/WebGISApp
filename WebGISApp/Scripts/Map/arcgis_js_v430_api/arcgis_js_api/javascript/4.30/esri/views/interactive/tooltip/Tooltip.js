// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/events ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../support/themeUtils ./css ./content/tooltipContentFactory ../../../widgets/support/widgetUtils".split(" "),function(c,d,l,m,h,g,f,w,x,y,n,p,q,r,t){function u(a){if("fixed"!==a.positionMode||a.position){var {style:b}=
a.container,e=a.position??a.screenPoint;null!=e&&null!=a.content?(b.display="block",a=t.isRTL(a.container),e=`translate(${Math.round(e.x)+k[0]*(a?-1:1)}px, ${Math.round(e.y)+k[1]}px)`,b.transform=a?`translate(-100%, 0) ${e}`:e):b.display="none"}}var v=`${q.base}`;c.Tooltip=class extends l.EventedAccessor{constructor(a){super(a);this.content=this.position=this.info=null;a=document.createElement("div");a.classList.add(v);p.setCalciteThemeClass(a);this.contentContainer=a}initialize(){const {contentContainer:a}=
this;this.addHandles([g.watch(()=>this.view.overlay?.surface,b=>{a.remove();b?.appendChild(a)},g.syncAndInitial),g.watch(()=>this.info,(b,e)=>{if(null!=this.content&&null!=b&&null!=e&&b.type===e.type)this.content.info=b;else if(this.content=h.destroyMaybe(this.content),b=r.tooltipContentFactory(this,b))this.content=b,b.container&&a.appendChild(b.container),this.exitInputMode()},g.syncAndInitial),g.watch(()=>({container:this.contentContainer,content:this.content,screenPoint:this._screenPoint,positionMode:this.positionMode,
position:this.position}),u,g.syncAndInitial),m.on(this.contentContainer,"paste",b=>{this.emit("paste",b)})])}destroy(){this.info=null;this.content=h.destroyMaybe(this.content);this.contentContainer.remove()}get positionMode(){return"input"===this.content?.mode?"fixed":"follow-cursor"}get mode(){return this.content?.mode??"feedback"}get _screenPoint(){const {inputManager:a}=this.view;return a?.multiTouchActive?null:a?.latestPointerLocation}get visible(){return"none"!==this.contentContainer?.style.display}clear(){this.info=
null}async enterInputMode(a){await this.content?.enterInputMode(a)}async exitInputMode(a){await this.content?.exitInputMode(a)}};d.__decorate([f.property({nonNullable:!0})],c.Tooltip.prototype,"view",void 0);d.__decorate([f.property()],c.Tooltip.prototype,"info",void 0);d.__decorate([f.property()],c.Tooltip.prototype,"positionMode",null);d.__decorate([f.property()],c.Tooltip.prototype,"position",void 0);d.__decorate([f.property()],c.Tooltip.prototype,"content",void 0);d.__decorate([f.property()],
c.Tooltip.prototype,"mode",null);d.__decorate([f.property()],c.Tooltip.prototype,"contentContainer",void 0);d.__decorate([f.property()],c.Tooltip.prototype,"_screenPoint",null);c.Tooltip=d.__decorate([n.subclass("esri.views.interactive.tooltip.Tooltip")],c.Tooltip);const k=[20,20];Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});