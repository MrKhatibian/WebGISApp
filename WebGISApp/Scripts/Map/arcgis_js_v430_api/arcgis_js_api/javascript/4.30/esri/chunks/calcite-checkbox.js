// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./form ./guid ./interactive ./key ./label2 ./loadable".split(" "),function(d,a,l,e,m,c,n,f,g){function h(){"undefined"!==typeof customElements&&["calcite-checkbox"].forEach(b=>{switch(b){case "calcite-checkbox":customElements.get(b)||customElements.define(b,k)}})}const k=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalCheckboxBlur=a.createEvent(this,"calciteInternalCheckboxBlur",6);
this.calciteCheckboxChange=a.createEvent(this,"calciteCheckboxChange",6);this.calciteInternalCheckboxFocus=a.createEvent(this,"calciteInternalCheckboxFocus",6);this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";this.indeterminatePath="M13 8v1H3V8z";this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"";this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())};this.keyDownHandler=
b=>{n.isActivationKey(b.key)&&(this.toggle(),b.preventDefault())};this.clickHandler=()=>{this.disabled||this.toggle()};this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)};this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)};this.onLabelClick=()=>{this.toggle()};this.disabled=this.checked=!1;this.guid=this.form=void 0;this.indeterminate=this.hovered=!1;this.name=this.label=void 0;this.required=!1;this.scale="m";this.status="idle";this.validity={valid:!1,badInput:!1,customError:!1,
patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1};this.value=void 0}async setFocus(){await g.componentFocusable(this);this.toggleEl?.focus()}syncHiddenFormInput(b){b.type="checkbox"}connectedCallback(){this.guid=this.el.id||`calcite-checkbox-${m.guid()}`;c.connectInteractive(this);f.connectLabel(this);e.connectForm(this)}disconnectedCallback(){c.disconnectInteractive(this);f.disconnectLabel(this);e.disconnectForm(this)}componentWillLoad(){g.setUpLoadableComponent(this)}componentDidLoad(){g.setComponentLoaded(this)}componentDidRender(){c.updateHostInteraction(this)}render(){return a.h(a.Host,
{key:"6ef0c5b4fe62f003d9fe1ea6979cb5aeb564dac7",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},a.h(c.InteractiveContainer,{key:"72f94ddb0795e2e0d10aac69af05c1ce7d6e5ead",disabled:this.disabled},a.h("div",{key:"1cfc46f5a7180d6cd52962a26488c66eec14d852","aria-checked":l.toAriaBoolean(this.checked),"aria-label":f.getLabelText(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,role:"checkbox",tabIndex:this.disabled?void 0:0,ref:b=>this.toggleEl=b},a.h("svg",{key:"4956ac9d598af8267781610220896e07aad56c65",
"aria-hidden":"true",class:"check-svg",viewBox:"0 0 16 16"},a.h("path",{key:"bd650b149977569e00a99be2fbc8a836cbfd4cfe",d:this.getPath()})),a.h("slot",{key:"604e420b7fe7014a202991d0e5c992e57d540d16"})),a.h(e.HiddenFormInputSlot,{key:"9ec0eab7c20a9dffed6a1a9b517ece8b8ed1cb26",component:this})))}get el(){return this}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale\x3ds]){--calcite-checkbox-size:0.75rem}:host([scale\x3dm]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale\x3dl]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-color-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input);color:var(--calcite-color-background)}:host([status\x3dinvalid]:not([checked])) .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger)}:host([status\x3dinvalid]:not([checked])) .toggle:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.toggle::after{content:"";inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute;transform:translateX(-50%) translateY(-50%)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},
[1,"calcite-checkbox",{checked:[1540],disabled:[516],form:[513],guid:[1537],hovered:[516],indeterminate:[1540],label:[1],name:[513],required:[516],scale:[513],status:[513],validity:[1040],value:[8],setFocus:[64]}]);h();d.CalciteCheckbox=k;d.defineCustomElement=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});