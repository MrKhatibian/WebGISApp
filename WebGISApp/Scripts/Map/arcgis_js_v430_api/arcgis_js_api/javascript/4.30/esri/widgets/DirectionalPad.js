// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./Compass/utils ./DirectionalPad/constants ./DirectionalPad/css ./DirectionalPad/DirectionalPadViewModel ./DirectionalPad/utils ./DirectionalPad/VisibleElements ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(l,
f,q,h,d,B,C,r,t,u,m,k,v,w,n,x,p,y,z,e){d=class extends t{constructor(a,c){super(a,c);this._buttonsContainer=null;this._buttons={};this.messages=null;this.visibleElements=new n;this.viewModel=new v;this.visualScale="s";this._rotateIcon=b=>({"--rotation":`rotate(${b}deg)`});this._afterButtonContainerCreate=b=>{this._buttonsContainer=b;this._buttonsContainer.addEventListener("contextmenu",this._onContextMenu,{capture:!0})};this._afterButtonContainerRemoved=()=>{this._buttonsContainer?.removeEventListener("contextmenu",
this._onContextMenu,{capture:!0});this._buttonsContainer=null};this._afterButtonCreate=(b,g)=>{this._buttons[b]=g};this._afterButtonRemoved=b=>{this._buttons[b]=void 0};this._onContextMenu=b=>b.preventDefault();this._onButtonPointerDown=b=>{if(null!==this._buttonsContainer){var g=b.target?.shadowRoot?.querySelector("button");g?.hasPointerCapture(b.pointerId)&&g.releasePointerCapture(b.pointerId);g=w.findElementCenter(this._buttonsContainer);this.viewModel.beginFollowingPointer(b,g)}};this._onKeyDown=
(b,{key:g})=>{y.isActivationKey(g)&&this.viewModel.moveOnce(b)};this._onSliderInput=({target:b})=>{"number"===typeof b.value&&(this.viewModel.rotation=b.value)};this._onRotationReset=()=>{this.viewModel.rotation=0}}loadDependencies(){return x.loadCalciteComponents({action:()=>new Promise((a,c)=>l(["../chunks/calcite-action"],a,c)),"action-group":()=>new Promise((a,c)=>l(["../chunks/calcite-action-group"],a,c)),"action-pad":()=>new Promise((a,c)=>l(["../chunks/calcite-action-pad"],a,c)),icon:()=>new Promise((a,
c)=>l(["../chunks/calcite-icon"],a,c)),slider:()=>new Promise((a,c)=>l(["../chunks/calcite-slider"],a,c))})}initialize(){this.addHandles(q.watch(()=>this.viewModel.angle,()=>{this._buttonsContainer?.contains(document.activeElement)&&(null==this.viewModel.angle?this.container?.focus():this._buttons[this.viewModel.angle]?.setFocus())}))}get disabled(){return this.viewModel.disabled}set disabled(a){this.viewModel.disabled=a}get icon(){return"move"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??
""}set label(a){this._overrideIfSome("label",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}get speed(){return this.viewModel.speed}set speed(a){this.viewModel.speed=a}get _rotationEnabled(){return this.view?.ready?this.view.constraints.rotationEnabled:!0}render(){const {label:a,disabled:c,viewModel:b}=this,g=this.classes(k.css.base,p.globalCss.widget,c?p.globalCss.disabled:null);return e.tsx("div",{"aria-label":a,class:g,tabIndex:-1},b.supported?this._renderContent():
this._renderUnsupportedMessage())}_renderUnsupportedMessage(){return e.tsx("section",{class:k.css.error,key:"unsupported"},e.tsx("p",null,this.messages.unsupported))}_renderContent(){return[this.visibleElements.directionalButtons?this._renderDirectionalButtons():void 0,this.visibleElements.rotationSlider?this._renderRotation():void 0]}_renderDirectionalButtons(){return e.tsx("calcite-action-pad",{expandDisabled:!0,key:"directional-buttons-container",layout:"grid"},e.tsx("calcite-action-group",{afterCreate:this._afterButtonContainerCreate,
afterRemoved:this._afterButtonContainerRemoved,class:k.css.buttonsContainer,dir:"ltr"},m.directionalPadAngles.slice(0,4).map(a=>this._renderButton(a)),this._renderCompass(),m.directionalPadAngles.slice(4).map(a=>this._renderButton(a))))}_renderButton(a){const {label:c,iconName:b}=m.directionalPadArrows[a],g=this.messages[c];return e.tsx("calcite-action",{active:this.viewModel.angle===a,afterCreate:A=>this._afterButtonCreate(a,A),afterRemoved:()=>this._afterButtonRemoved(a),alignment:"center",class:k.css.button,
"data-angle":a.toString(),disabled:this.disabled,key:a,onkeydown:this._onKeyDown.bind(void 0,a),onpointerdown:this._onButtonPointerDown,scale:this.visualScale,text:g,title:g},e.tsx("calcite-icon",{icon:b,scale:this.visualScale}))}_renderCompass(){const a=this.disabled||u.canShowNorth(this.view)?"compass-needle":"arrow-up",c=0===this.viewModel.rotation,b=this.messages.resetHeading;return e.tsx("calcite-action",{alignment:"center",class:k.css.compassButton,disabled:this.disabled||!this._rotationEnabled||
c,key:"compass",onclick:this._onRotationReset,scale:this.visualScale,styles:this._rotateIcon(this.viewModel.rotation),text:b,title:b},!c&&e.tsx("calcite-icon",{icon:a,scale:this.visualScale}))}_renderRotation(){return e.tsx("calcite-action-pad",{expandDisabled:!0,key:"slider-container",layout:"horizontal"},e.tsx("calcite-action-group",{class:k.css.rotationContainer},this.visibleElements.rotationResetButton?this._renderRotationResetButton():null,this._renderRotationSlider()))}_renderRotationResetButton(){const a=
this.messages.resetHeading;return e.tsx("calcite-action",{alignment:"center",class:k.css.rotationReset,disabled:this.disabled||!this._rotationEnabled,onclick:this._onRotationReset,scale:this.visualScale,text:a,title:a},e.tsx("calcite-icon",{flipRtl:!0,icon:"rotate",scale:this.visualScale}))}_renderRotationSlider(){return e.tsx("div",{class:k.css.rotationSliderContainer},e.tsx("calcite-slider",{"aria-label":this.messages.heading,disabled:this.disabled||!this._rotationEnabled,labelHandles:!0,max:360,
min:0,required:!0,scale:this.visualScale,value:Math.round(this.viewModel.rotation),onCalciteSliderInput:this._onSliderInput}))}};f.__decorate([h.property()],d.prototype,"_buttonsContainer",void 0);f.__decorate([h.property()],d.prototype,"_buttons",void 0);f.__decorate([h.property()],d.prototype,"disabled",null);f.__decorate([h.property()],d.prototype,"icon",null);f.__decorate([h.property()],d.prototype,"label",null);f.__decorate([h.property(),z.messageBundle("esri/widgets/DirectionalPad/t9n/DirectionalPad")],
d.prototype,"messages",void 0);f.__decorate([h.property({type:n,nonNullable:!0})],d.prototype,"visibleElements",void 0);f.__decorate([h.property()],d.prototype,"view",null);f.__decorate([h.property()],d.prototype,"viewModel",void 0);f.__decorate([h.property()],d.prototype,"visualScale",void 0);f.__decorate([h.property()],d.prototype,"speed",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"_rotationEnabled",null);return d=f.__decorate([r.subclass("esri.widgets.DirectionalPad")],d)});