// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./form ./label2 ./dom ./locale ./observers ./loadable ./t9n ./interactive ./guid ./Validation ./input ./icon ./input-message ./throttle".split(" "),function(l,b,m,n,p,e,v,f,g,h,w,x,y,z,A,B){function t(){"undefined"!==typeof customElements&&["calcite-text-area","calcite-icon","calcite-input-message"].forEach(a=>{switch(a){case "calcite-text-area":customElements.get(a)||customElements.define(a,u);break;case "calcite-icon":customElements.get(a)||z.defineCustomElement();
break;case "calcite-input-message":customElements.get(a)||A.defineCustomElement()}})}const u=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTextAreaInput=b.createEvent(this,"calciteTextAreaInput",7);this.calciteTextAreaChange=b.createEvent(this,"calciteTextAreaChange",7);this.guid=w.guid();this.handleInput=a=>{this.value=a.target.value;this.calciteTextAreaInput.emit()};this.handleChange=()=>{this.calciteTextAreaChange.emit()};this.contentSlotChangeHandler=
()=>{this.value||this.el.childNodes.forEach(a=>{"#text"===a.nodeName&&(this.value=a.nodeValue.trim())})};this.renderCharacterLimit=()=>this.maxLength?(this.localizedCharacterLengthObj=this.getLocalizedCharacterLength(),b.h("span",{class:"character-limit"},b.h("span",{class:{["character--over-limit"]:this.isCharacterLimitExceeded()}},this.localizedCharacterLengthObj.currentLength),"/",this.localizedCharacterLengthObj.maxLength)):null;this.resizeObserver=v.createObserver("resize",async()=>{await f.componentLoaded(this);
const {textAreaHeight:a,textAreaWidth:c,elHeight:d,elWidth:q,footerHeight:r,footerWidth:k}=this.getHeightAndWidthOfElements();0<k&&k!==c&&(this.footerEl.style.width=`${c}px`);q===c&&d===a+(r||0)||this.setHeightAndWidthToAuto()});this.setTextAreaEl=a=>{this.textAreaEl=a;this.resizeObserver.observe(a)};this.setHeightAndWidthToAuto=B.throttle(()=>{if("vertical"===this.resize||"both"===this.resize)this.el.style.height="auto";if("horizontal"===this.resize||"both"===this.resize)this.el.style.width="auto"},
100,{leading:!1});this.columns=void 0;this.disabled=!1;this.form=void 0;this.groupSeparator=!1;this.validationIcon=this.validationMessage=this.messages=this.maxLength=this.minLength=this.label=void 0;this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1};this.placeholder=this.numberingSystem=this.name=void 0;this.required=this.readOnly=!1;this.resize="both";this.rows=void 0;this.scale=
"m";this.status="idle";this.value="";this.wrap="soft";this.startSlotHasElements=this.endSlotHasElements=this.defaultMessages=this.messageOverrides=void 0;this.effectiveLocale=""}handleGlobalAttributesChanged(){b.forceUpdate(this)}onMessagesChange(){}connectedCallback(){h.connectInteractive(this);n.connectLabel(this);m.connectForm(this);e.connectLocalized(this);g.connectMessages(this)}async componentWillLoad(){f.setUpLoadableComponent(this);await g.setUpMessages(this)}componentDidLoad(){f.setComponentLoaded(this)}componentDidRender(){h.updateHostInteraction(this);
this.setTextAreaHeight()}disconnectedCallback(){h.disconnectInteractive(this);n.disconnectLabel(this);m.disconnectForm(this);e.disconnectLocalized(this);g.disconnectMessages(this);this.resizeObserver?.disconnect()}render(){const a=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return b.h(b.Host,{key:"d457e39960155acef2958e6ed809b1a3ac334028"},b.h(h.InteractiveContainer,{key:"a3bfe30414830e1a793ab7e8231a126e6963906f",disabled:this.disabled},b.h("textarea",{key:"9280d823986f44fd3f37db84f929422682e08c87",
"aria-describedby":this.guid,"aria-invalid":p.toAriaBoolean(this.isCharacterLimitExceeded()),"aria-label":n.getLabelText(this),autofocus:this.el.autofocus,class:{readonly:this.readOnly,["text-area--invalid"]:this.isCharacterLimitExceeded(),["footer--slotted"]:this.endSlotHasElements&&this.startSlotHasElements,["block-size--full"]:!a,["border--color"]:!a},cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readOnly:this.readOnly,
required:this.required,rows:this.rows,value:this.value,wrap:this.wrap,ref:this.setTextAreaEl}),b.h("span",{key:"67ad3b8be9f7a1da183a9a8f05d40557691f5b6d",class:{content:!0}},b.h("slot",{key:"598e54e3b4e6fb108b641e5d50888adcb1593005",onSlotchange:this.contentSlotChangeHandler})),b.h("footer",{key:"70160fd9f9288f8befc82cca7b772b565b2ff657",class:{footer:!0,readonly:this.readOnly,hide:!a},ref:c=>this.footerEl=c},b.h("div",{key:"f278301adeb9a8906b42f1b16ac0557abcb51eca",class:{container:!0,["footer--end-only"]:!this.startSlotHasElements&&
this.endSlotHasElements}},b.h("slot",{key:"859857da2ed571c082b308e8208597e0abbf086a",name:"footer-start",onSlotchange:c=>this.startSlotHasElements=p.slotChangeHasAssignedElement(c)}),b.h("slot",{key:"fa96f64697076dc3c2a2e0941a01e427ea553e0c",name:"footer-end",onSlotchange:c=>this.endSlotHasElements=p.slotChangeHasAssignedElement(c)})),this.renderCharacterLimit()),b.h(m.HiddenFormInputSlot,{key:"2dcd561348977e56afe823f9ecc00d88fa25d112",component:this}),this.isCharacterLimitExceeded()&&b.h("span",
{key:"f2d28c3a4c40751a0336b8837de48eaa0e1efa98","aria-hidden":!0,"aria-live":"polite",class:"assistive-text",id:this.guid},this.replacePlaceHoldersInMessages()),this.validationMessage&&"invalid"===this.status?b.h(x.Validation,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}async setFocus(){await f.componentFocusable(this);this.textAreaEl.focus()}async selectText(){await f.componentLoaded(this);this.textAreaEl.select()}effectiveLocaleChange(){g.updateMessages(this,
this.effectiveLocale)}onLabelClick(){this.setFocus()}getLocalizedCharacterLength(){const a=this.value?this.value.length.toString():"0",c=this.maxLength.toString();if("latn"===this.numberingSystem)return{currentLength:a,maxLength:c};e.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator};return{currentLength:e.numberStringFormatter.localize(a),maxLength:e.numberStringFormatter.localize(c)}}syncHiddenFormInput(a){a.setCustomValidity("");
this.isCharacterLimitExceeded()&&a.setCustomValidity(this.replacePlaceHoldersInMessages());y.syncHiddenFormInput("textarea",this,a)}setTextAreaHeight(){const {textAreaHeight:a,elHeight:c,footerHeight:d}=this.getHeightAndWidthOfElements();0<d&&a+d!=c&&(this.textAreaEl.style.height=`${c-d}px`)}getHeightAndWidthOfElements(){const {height:a,width:c}=this.textAreaEl.getBoundingClientRect(),{height:d,width:q}=this.el.getBoundingClientRect(),{height:r,width:k}=this.footerEl?.getBoundingClientRect();return{textAreaHeight:a,
textAreaWidth:c,elHeight:d,elWidth:q,footerHeight:r,footerWidth:k}}replacePlaceHoldersInMessages(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}isCharacterLimitExceeded(){return this.value?.length>this.maxLength}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],
effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:var(--calcite-font-family);color:var(--calcite-color-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-color-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-status-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-status-danger)}:host([resize\x3dnone]) textarea{resize:none}:host([resize\x3dhorizontal]) textarea{resize:horizontal}:host([resize\x3dvertical]) textarea{resize:vertical}:host([scale\x3ds]){font-size:var(--calcite-font-size--2)}:host([scale\x3ds]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale\x3ds]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale\x3ds]) textarea,:host([scale\x3ds]) .footer,:host([scale\x3ds]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale\x3dm]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale\x3dm]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale\x3dm]) textarea,:host([scale\x3dm]) .footer,:host([scale\x3dm]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale\x3dl]){font-size:var(--calcite-font-size-0)}:host([scale\x3dl]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale\x3dl]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale\x3dl]) textarea,:host([scale\x3dl]) .footer,:host([scale\x3dl]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}:host([status\x3dinvalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status\x3dinvalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.readonly{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-color-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale\x3dm]) .validation-container,:host([scale\x3dl]) .validation-container{padding-block-start:0.5rem}:host([scale\x3ds]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-text-area",{columns:[514],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],label:[1],minLength:[514,"min-length"],maxLength:[514,"max-length"],messages:[1040],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],numberingSystem:[1,"numbering-system"],placeholder:[1],readOnly:[516,"read-only"],required:[516],resize:[513],rows:[514],scale:[513],status:[513],value:[1025],wrap:[513],messageOverrides:[1040],defaultMessages:[32],
endSlotHasElements:[32],startSlotHasElements:[32],effectiveLocale:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);t();l.CalciteTextArea=u;l.defineCustomElement=t;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});