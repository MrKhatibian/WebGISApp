// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../Widget ./ButtonMenuViewModel ../../../../chunks/componentsUtils ../../../support/globalCss ../../../support/widgetUtils ../../../support/jsxFactory".split(" "),function(m,e,h,d,x,y,p,q,r,t,u,l,c){d=class extends q{constructor(a,b){super(a,b);this._popover=null;this.disabled=
!1;this.iconClass="";this.viewModel=new r}loadDependencies(){return t.loadCalciteComponents({button:()=>new Promise((a,b)=>m(["../../../../chunks/calcite-button"],a,b)),popover:()=>new Promise((a,b)=>m(["../../../../chunks/calcite-popover"],a,b))})}destroy(){this._popover=null}get items(){return this.viewModel.items}set items(a){this.viewModel.items=a}get open(){return this.viewModel.open}set open(a){this.viewModel.open=a}render(){const {open:a}=this,b=`${this.id}-button`;return c.tsx("div",{class:this.classes("esri-button-menu",
u.globalCss.widget),key:"menu"},c.tsx("calcite-button",{appearance:"transparent",bind:this,class:this.classes("esri-button-menu__button",a&&"esri-button-menu__button--selected"),disabled:this.disabled,iconStart:a?"x":"ellipsis",id:b,kind:"neutral",label:this.label||"button",onclick:()=>this._toggleOpen(a),tabIndex:0}),c.tsx("calcite-popover",{afterCreate:l.storeNode,afterUpdate:()=>this._popover?.reposition(),autoClose:!0,bind:this,"data-node-ref":"_popover",label:this.label||"menu",open:a,overlayPositioning:"fixed",
pointerDisabled:!0,referenceElement:b,onCalcitePopoverClose:this._onPopoverClose},this._renderMenuContent()))}_onPopoverClose(){this.open=!1}_renderMenuContent(){const {id:a,open:b}=this;return c.tsx("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:"esri-button-menu__content",hidden:!b,key:"esri-button-menu-content"},c.tsx("ul",{"aria-labelledby":`${a}-button`,bind:this,class:"esri-button-menu__item-wrapper",id:`${a}-menu`,role:"menu"},this.items?.length?this._renderItems():null))}_renderItems(){return this.items?.map((a,
b)=>this._renderItem(a,b))}_renderItem(a,b,f){const g=null!=f?`${this.id}-menu-item-${b}-${f}`:`${this.id}-menu-item-${b}`,n=`${g}-label`,v=this.classes("esri-button-menu__item",a.selectionEnabled?"esri-button-menu__item--selectable":null,a.selectionEnabled&&a.selected?"esri-button-menu__item--selected":null);return c.tsx("li",{afterCreate:this._afterMenuItemCreate,bind:this,class:v,"data-item-index":b,"data-item-subIndex":f,for:g,key:g,onclick:k=>this._handleMenuItemInteraction(k,a),onkeydown:k=>
this._handleMenuItemKeydown(k,a),role:"menuitem",tabIndex:this.disabled?-1:0},c.tsx("input",{checked:a.selected,class:"esri-button-menu__checkbox",disabled:!0,id:g,name:g,tabIndex:-1,type:"checkbox"}),c.tsx("label",{class:"esri-button-menu__item-label",for:g,id:n},c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-button-menu__icon",a.iconClass)}),c.tsx("span",{class:"esri-button-menu__item-label-content"},l.renderingSanitizer.sanitize(a.label))),c.tsx("ul",{"aria-labelledby":n,class:"esri-button-menu__embedded-content-wrapper",
id:`${this.id}-submenu`,role:"menu"},a?.items?.map((k,w)=>this._renderItem(k,b,w))))}_handleMenuItemInteraction(a,b){b.selected=!b.selected;b.open=!(!b.selected||!b.items);b.autoCloseMenu&&this.set("open",!1);b.clickFunction&&b.clickFunction({event:a,item:b});a.stopPropagation()}_handleMenuItemKeydown(a,b){const {key:f}=a;l.isActivationKey(f)&&this._handleMenuItemInteraction(a,b);"Escape"===f&&(this.open=!1,a.preventDefault(),a.stopPropagation())}_afterMenuContentNodeCreate(a){a.focus()}_toggleOpen(a){this.open=
!a}_afterMenuItemCreate(a){0===a["data-item-index"]&&a.focus()}};e.__decorate([h.property()],d.prototype,"disabled",void 0);e.__decorate([h.property()],d.prototype,"iconClass",void 0);e.__decorate([h.property()],d.prototype,"items",null);e.__decorate([h.property()],d.prototype,"open",null);e.__decorate([h.property()],d.prototype,"viewModel",void 0);return d=e.__decorate([p.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],d)});