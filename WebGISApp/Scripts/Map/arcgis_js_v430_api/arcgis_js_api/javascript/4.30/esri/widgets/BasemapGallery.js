// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../assets ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../support/basemapUtils ./Widget ./BasemapGallery/BasemapGalleryViewModel ./BasemapGallery/css ../chunks/componentsUtils ./support/globalCss ./support/Heading ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(r,e,
v,w,g,c,G,H,x,q,y,z,f,A,l,B,C,D,d,E){c=class extends y{constructor(a,b){super(a,b);this.disabled=!1;this.headingLevel=2;this.messages=null;this.viewModel=new z;this._focusBasemapItemEnabled=!1;this._container=null;this._width=0;this._onContainerCreated=h=>{this._container=h}}initialize(){this.addHandles([E.onResize(()=>this._container,({contentRect:a})=>{this._width=a.width}),w.when(()=>this.source,()=>this.viewModel.loadSource(),{sync:!0,initial:!0})])}loadDependencies(){return A.loadCalciteComponents({scrim:()=>
new Promise((a,b)=>r(["../chunks/calcite-scrim"],a,b)),chip:()=>new Promise((a,b)=>r(["../chunks/calcite-chip"],a,b))})}get activeBasemap(){return this.viewModel.activeBasemap}set activeBasemap(a){this.viewModel.activeBasemap=a}get icon(){return"basemap"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get source(){return this.viewModel.source}set source(a){this.viewModel.source=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=
a}render(){var a="loading"===this.source.state;const b=this.viewModel.items,h={[f.css.sourceLoading]:a,[l.globalCss.disabled]:this.disabled||"disabled"===this.viewModel.state};var k=this._width;200>=k||420<=k?h[f.css.layoutGrid]=!0:280>k&&(h[f.css.narrowItems]=!0);k=a?d.tsx("div",{class:f.css.loader,key:"loader"}):null;a=a?null:0<b.length?d.tsx("ul",{"aria-disabled":this.disabled,"aria-label":this.label,bind:this,class:f.css.itemContainer,key:"item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},
b.map((m,n)=>this._renderBasemapGalleryItem(m,n)).toArray()):d.tsx("div",{class:l.globalCss.empty,key:"empty-message"},d.tsx(B.Heading,{level:this.headingLevel},this.messages.noBasemaps));return d.tsx("div",{afterCreate:this._onContainerCreated,class:this.classes(f.css.base,l.globalCss.widget,l.globalCss.panel,h),key:"container"},0===this._width?null:[k,a])}_getRoundRobinIndex(a,b){return(a+b)%b}_handleKeyDown(a){const {key:b}=a;if(["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(b)){a.preventDefault();
var {items:h,activeBasemapIndex:k}=this.viewModel;a="ArrowUp"===b||"ArrowLeft"===b?this._getRoundRobinIndex(Math.max(k-1,-1),h.length):this._getRoundRobinIndex(k+1,h.length);a=h.at(a);"ready"===a?.state&&(this.viewModel.activeBasemap=a.basemap);this._focusBasemapItemEnabled=!0}}_focusBasemapItem(a){this._focusBasemapItemEnabled&&0===a.tabIndex&&(a.focus(),this._focusBasemapItemEnabled=!1)}_handleClick(a){a=a.currentTarget["data-item"];"ready"===a.state&&(this.viewModel.activeBasemap=a.basemap)}_renderBasemapGalleryItem(a,
b){const h=q.getBasemapThumbnailUrl(a.basemap)||v.getAssetUrl("esri/themes/base/images/basemap-toggle-64.svg"),k=a.basemap.title;var m=a.basemap.portalItem?.snippet;m=a.error?.message||m||k;const {viewModel:{state:n,activeBasemapIndex:t}}=this,p=t===b;b=p||-1===t&&0===b?0:-1;const F="loading"===n,u=`basemapgallery-item-${a.uid}`;return d.tsx("li",{afterUpdate:this._focusBasemapItem,"aria-checked":p.toString(),"aria-disabled":(this.disabled||"disabled"===n).toString(),"aria-labelledby":u,bind:this,
class:this.classes(f.css.item,{[f.css.selectedItem]:p,[f.css.itemError]:"error"===a.state}),"data-item":a,key:a.uid,onclick:this._handleClick,onkeydown:this._handleClick,role:"radio",tabIndex:b,title:m},d.tsx("img",{alt:"",class:f.css.itemThumbnail,src:h}),d.tsx("div",{class:f.css.itemContent,key:"content"},d.tsx("div",{class:f.css.itemTitle,key:"title"},d.tsx("span",{id:u},k)),q.isBasemap3D(a.basemap)?this._renderTags(a.basemap):null),"loading"===a.state||p&&F?d.tsx("calcite-scrim",null,d.tsx("span",
{"aria-hidden":"true",class:l.globalCss.loaderAnimation,key:"loader",role:"presentation"})):null)}_renderTags(a){return d.tsx("div",{class:f.css.itemTagsContainer,key:"tag"},this._render3DTag(),q.isBasemapInBeta(a)?this._renderBetaTag():null)}_render3DTag(){const {messages:a}=this;return d.tsx("calcite-chip",{key:"tag-3d",scale:"s",value:a.tag3D},this.messages.tag3D)}_renderBetaTag(){const {messages:a}=this;return d.tsx("calcite-chip",{appearance:"outline-fill",key:"tag-beta",scale:"s",value:a.tagBeta},
this.messages.tagBeta)}};e.__decorate([g.property()],c.prototype,"activeBasemap",null);e.__decorate([g.property()],c.prototype,"disabled",void 0);e.__decorate([g.property()],c.prototype,"headingLevel",void 0);e.__decorate([g.property()],c.prototype,"icon",null);e.__decorate([g.property()],c.prototype,"label",null);e.__decorate([g.property(),D.messageBundle("esri/widgets/BasemapGallery/t9n/BasemapGallery")],c.prototype,"messages",void 0);e.__decorate([g.property()],c.prototype,"source",null);e.__decorate([g.property()],
c.prototype,"view",null);e.__decorate([g.property()],c.prototype,"viewModel",void 0);e.__decorate([g.property()],c.prototype,"_focusBasemapItemEnabled",void 0);e.__decorate([g.property()],c.prototype,"_container",void 0);e.__decorate([g.property()],c.prototype,"_width",void 0);e.__decorate([C.accessibleHandler()],c.prototype,"_handleClick",null);return c=e.__decorate([x.subclass("esri.widgets.BasemapGallery")],c)});