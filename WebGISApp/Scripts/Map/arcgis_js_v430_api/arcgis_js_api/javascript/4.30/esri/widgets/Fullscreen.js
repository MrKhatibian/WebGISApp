// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./Fullscreen/FullscreenViewModel ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(l,c,d,b,t,u,m,n,f,p,g,v,q,h){b=class extends n{constructor(a,e){super(a,e);this.messages=null;this.viewModel=new f;this._toggle=()=>{this.viewModel.toggle()}}loadDependencies(){return p.loadCalciteComponents({button:()=>
new Promise((a,e)=>l(["../chunks/calcite-button"],a,e))})}get element(){return this.viewModel.element}set element(a){this.viewModel.element=a}get fullscreenTitle(){const a=this.viewModel?.state;return"active"===a?this.messages.exit:"ready"===a?this.messages.enter:""}get icon(){const a=this.viewModel?.state;return"ready"===a||"disabled"===a||"feature-unsupported"===a?"zoom-out-fixed":"zoom-in-fixed"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",
a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}render(){const {fullscreenTitle:a,icon:e}=this,k=this.viewModel?.state,r="feature-unsupported"===k;return h.tsx("div",{class:this.classes("esri-fullscreen",g.globalCss.widget)},!r&&h.tsx("calcite-button",{class:g.globalCss.widgetButton,disabled:"disabled"===k,iconStart:e,kind:"neutral",label:a,onclick:this._toggle,title:a}))}};c.__decorate([d.property()],b.prototype,"element",null);c.__decorate([d.property({readOnly:!0})],
b.prototype,"fullscreenTitle",null);c.__decorate([d.property()],b.prototype,"icon",null);c.__decorate([d.property()],b.prototype,"label",null);c.__decorate([d.property(),q.messageBundle("esri/widgets/Fullscreen/t9n/Fullscreen")],b.prototype,"messages",void 0);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:f})],b.prototype,"viewModel",void 0);return b=c.__decorate([m.subclass("esri.widgets.Fullscreen")],b)});