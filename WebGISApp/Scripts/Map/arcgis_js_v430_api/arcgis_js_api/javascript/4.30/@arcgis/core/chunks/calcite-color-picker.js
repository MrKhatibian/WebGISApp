/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as a}from"../widgets/Widget.js";import{a as o,i as s,b as n,r as l,n as r,o as c,h,c as d,e as p,f as u,g as m,p as C,j as g,k as f,t as b,l as v,m as y,d as x}from"./color-picker-swatch.js";import{j as w,d as S,g as k}from"./dom.js";import{c as j,d as I,u as F,I as D}from"./interactive.js";import{i as A}from"./key.js";import{s as E,a as P,c as O}from"./loadable.js";import{c as H,d as L}from"./locale2.js";import{r as R,c as T,a as K}from"./math.js";import{u as N,s as z,c as U,d as M}from"./t9n.js";import{d as $}from"./icon.js";import{d as V}from"./input-message.js";import{d as B}from"./input-number.js";import{d as W}from"./input-text.js";import{d as X}from"./progress.js";import{d as q}from"./button.js";import{d as _}from"./loader.js";import{d as G}from"./tab.js";import{d as J}from"./tab-nav.js";import{d as Y}from"./tab-title.js";import{d as Z}from"./tabs.js";import{t as Q}from"./throttle2.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./guid.js";import"./observers.js";import"./form.js";import"./label2.js";import"./component.js";import"./Validation.js";import"./input.js";import"./core.js";import"./debounce.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const ee="channel",te="scope--color-field",ie="color-mode-container",ae="control",oe="control-and-scope",se="control-section",ne="scope--hue",le="hue-slider",re="scope--opacity",ce="opacity-slider",he="saved-colors-section",de="scope",pe="section",ue="slider",me="section--split",Ce=o("#007AC2"),ge="calcite-color-",fe={r:255,g:255,b:255},be={h:360,s:100,v:100},ve=be.h-1,ye=100,xe={s:{slider:{height:12,width:104},colorField:{height:80,width:160},thumb:{radius:10}},m:{slider:{height:12,width:204},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:12,width:384},colorField:{height:200,width:464},thumb:{radius:10}}},we=o(),Se=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerHexInputChange=i(this,"calciteColorPickerHexInputChange",6),this.onHexInputBlur=()=>{const e=this.hexInputNode,t=e.value,i=`#${t}`,{allowEmpty:a,internalColor:o}=this,r=a&&!t,c=s(i);this.onHexInputChange(),r||n(i)&&c||(e.value=a&&!o?"":this.formatHexForInternalInput(l(o.object())))},this.onOpacityInputBlur=()=>{const e=this.opacityInputNode,t=e.value,{allowEmpty:i,internalColor:a}=this;i&&!t||(e.value=i&&!a?"":this.formatOpacityForInternalInput(a))},this.onHexInputChange=()=>{let e=this.hexInputNode.value;if(e){const t=r(e,!1);n(t)&&this.alphaChannel&&this.internalColor&&(e=`${t+r(this.internalColor.hexa(),!0).slice(-2)}`)}this.internalSetValue(e,this.value)},this.onOpacityInputChange=()=>{const e=this.opacityInputNode;let t;if(e.value){const i=c(Number(e.value));t=this.internalColor?.alpha(i).hexa()}else t=e.value;this.internalSetValue(t,this.value)},this.onInputKeyDown=e=>{const{altKey:t,ctrlKey:i,metaKey:a,shiftKey:o}=e,{alphaChannel:s,hexInputNode:n,internalColor:l,value:r}=this,{key:c}=e,d=e.composedPath();if("Tab"===c||"Enter"===c)return d.includes(n)?this.onHexInputChange():this.onOpacityInputChange(),void("Enter"===c&&e.preventDefault());const u="ArrowDown"===c||"ArrowUp"===c,m=this.value;if(u){if(!r)return this.internalSetValue(this.previousNonNullValue,m),void e.preventDefault();const t="ArrowUp"===c?1:-1,i=o?10:1;return this.internalSetValue(h(this.nudgeRGBChannels(l,i*t,d.includes(n)?"rgb":"a"),s),m),void e.preventDefault()}const C=t||i||a,g=1===c.length,f=p.test(c);!g||C||f||e.preventDefault()},this.onHexInputPaste=e=>{const t=e.clipboardData.getData("text");n(t)&&(e.preventDefault(),this.hexInputNode.value=t.slice(1))},this.previousNonNullValue=this.value,this.storeHexInputRef=e=>{this.hexInputNode=e},this.storeOpacityInputRef=e=>{this.opacityInputNode=e},this.allowEmpty=!1,this.alphaChannel=!1,this.hexLabel="Hex",this.messages=void 0,this.numberingSystem=void 0,this.scale="m",this.value=r(h(we,this.alphaChannel),this.alphaChannel,!0),this.internalColor=we}connectedCallback(){const{allowEmpty:e,alphaChannel:t,value:i}=this;if(i){const e=r(i,t);n(e,t)&&this.internalSetValue(e,e,!1)}else e&&this.internalSetValue(null,null,!1)}componentWillLoad(){E(this)}componentDidLoad(){P(this)}handleValueChange(e,t){this.internalSetValue(e,t,!1)}render(){const{alphaChannel:e,hexLabel:t,internalColor:i,messages:o,scale:s,value:n}=this,l=this.formatHexForInternalInput(n),r=this.formatOpacityForInternalInput(i),c="l"===s?"m":"s";return a("div",{key:"ce81e626a720cd37d45facd4ca1f9dd748df094c",class:"container"},a("calcite-input-text",{key:"a26b153eb8f2e9943106c515de68a5adeec24e2b",class:"hex-input",label:o?.hex||t,maxLength:6,onCalciteInputTextChange:this.onHexInputChange,onCalciteInternalInputTextBlur:this.onHexInputBlur,onKeyDown:this.onInputKeyDown,onPaste:this.onHexInputPaste,prefixText:"#",scale:c,value:l,ref:this.storeHexInputRef}),e?a("calcite-input-number",{class:"opacity-input",key:"opacity-input",label:o?.opacity,max:ye,maxLength:3,min:0,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.onOpacityInputChange,onCalciteInternalInputNumberBlur:this.onOpacityInputBlur,onKeyDown:this.onInputKeyDown,scale:c,suffixText:"%",value:r,ref:this.storeOpacityInputRef}):null)}async setFocus(){return await O(this),w(this.hexInputNode)}internalSetValue(e,t,i=!0){if(e){const{alphaChannel:t}=this,a=r(e,t,t);if(n(a,t)){const{internalColor:e}=this,s=o(a),n=r(h(s,t),t),l=!e||n!==r(h(e,t),t);return this.internalColor=s,this.previousNonNullValue=n,this.value=n,void(l&&i&&this.calciteColorPickerHexInputChange.emit())}}else if(this.allowEmpty)return this.internalColor=null,this.value=null,void(i&&this.calciteColorPickerHexInputChange.emit());this.value=t}formatHexForInternalInput(e){return e?e.replace("#","").slice(0,6):""}formatOpacityForInternalInput(e){return e?`${d(e.alpha())}`:""}nudgeRGBChannels(e,t,i){let a;const s=e.array(),n=s.slice(0,3);if("rgb"===i)a=[...n.map((e=>e+t)),this.alphaChannel?s[3]:void 0];else{const i=c(d(e.alpha())+t);a=[...n,i]}return o(a)}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],alphaChannel:[4,"alpha-channel"],hexLabel:[1,"hex-label"],messages:[16],numberingSystem:[1,"numbering-system"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]},void 0,{value:["handleValueChange"]}]);function ke(){"undefined"!=typeof customElements&&["calcite-color-picker-hex-input","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-progress"].forEach((e=>{switch(e){case"calcite-color-picker-hex-input":customElements.get(e)||customElements.define(e,Se);break;case"calcite-icon":customElements.get(e)||$();break;case"calcite-input-message":customElements.get(e)||V();break;case"calcite-input-number":customElements.get(e)||B();break;case"calcite-input-text":customElements.get(e)||W();break;case"calcite-progress":customElements.get(e)||X()}}))}ke();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */
const je=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerChange=i(this,"calciteColorPickerChange",6),this.calciteColorPickerInput=i(this,"calciteColorPickerInput",6),this.internalColorUpdateContext=null,this.mode=u.HEX,this.shiftKeyChannelAdjustment=0,this.handleTabActivate=e=>{this.channelMode=e.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleColorFieldScopeKeyDown=e=>{const{key:t}=e,i={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};i[t]&&(e.preventDefault(),this.scopeOrientation="ArrowDown"===t||"ArrowUp"===t?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+i[t].x||0,this.colorFieldScopeTop+i[t].y||0,!1))},this.handleHueScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:i}=e,a={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(a[i]){e.preventDefault();const o=a[i]*t,s=this.baseColorFieldColor.hue(),n=this.baseColorFieldColor.hue(s+o);this.internalColorSet(n,!1)}},this.handleHexInputChange=e=>{e.stopPropagation();const{isClearable:t,color:i}=this,a=e.target.value;!t||a?a!==(i&&r(h(i,m(this.mode))))&&this.internalColorSet(o(a)):this.internalColorSet(null)},this.handleSavedColorSelect=e=>{const t=e.currentTarget;this.internalColorSet(o(t.color))},this.handleChannelInput=e=>{const t=e.currentTarget,i=Number(t.getAttribute("data-channel-index")),a=3===i?ye:"rgb"===this.channelMode?fe[Object.keys(fe)[i]]:be[Object.keys(be)[i]];let o;if(this.isClearable&&!t.value)o="";else{const e=Number(t.value)+this.shiftKeyChannelAdjustment;o=T(e,0,a).toString()}t.value=o,""!==o&&0!==this.shiftKeyChannelAdjustment&&this.handleChannelChange(e)},this.handleChannelChange=e=>{const t=e.currentTarget,i=Number(t.getAttribute("data-channel-index")),a=[...this.channels];if(this.isClearable&&!t.value)return this.channels=[null,null,null,null],void this.internalColorSet(null);const o=3===i,s=Number(t.value);a[i]=o?c(s):s,this.updateColorFromChannels(a)},this.handleSavedColorKeyDown=e=>{A(e.key)&&(e.preventDefault(),this.handleSavedColorSelect(e))},this.handleColorFieldPointerDown=e=>{if(!S(e))return;const{offsetX:t,offsetY:i}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.colorFieldRenderingContext,bounds:this.colorFieldRenderingContext.canvas.getBoundingClientRect()},this.captureColorFieldColor(t,i),this.colorFieldScopeNode.focus()},this.handleHueSliderPointerDown=e=>{if(!S(e))return;const{offsetX:t}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.hueSliderRenderingContext,bounds:this.hueSliderRenderingContext.canvas.getBoundingClientRect()},this.captureHueSliderColor(t),this.hueScopeNode.focus()},this.handleOpacitySliderPointerDown=e=>{if(!S(e))return;const{offsetX:t}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.opacitySliderRenderingContext,bounds:this.opacitySliderRenderingContext.canvas.getBoundingClientRect()},this.captureOpacitySliderValue(t),this.opacityScopeNode.focus()},this.globalPointerUpHandler=e=>{if(!S(e))return;const t=this.activeCanvasInfo;this.activeCanvasInfo=null,this.drawColorControls(),t&&this.calciteColorPickerChange.emit()},this.globalPointerMoveHandler=e=>{const{activeCanvasInfo:t,el:i}=this;if(!i.isConnected||!t)return;const{context:a,bounds:o}=t;let s,n;const{clientX:l,clientY:r}=e;a.canvas.matches(":hover")?(s=l-o.x,n=r-o.y):(s=l<o.x+o.width&&l>o.x?l-o.x:l<o.x?0:o.width,n=r<o.y+o.height&&r>o.y?r-o.y:r<o.y?0:o.height),a===this.colorFieldRenderingContext?this.captureColorFieldColor(s,n,!1):a===this.hueSliderRenderingContext?this.captureHueSliderColor(s):a===this.opacitySliderRenderingContext&&this.captureOpacitySliderValue(s)},this.storeColorFieldScope=e=>{this.colorFieldScopeNode=e},this.storeHueScope=e=>{this.hueScopeNode=e},this.renderChannelsTabTitle=e=>{const{channelMode:t,messages:i}=this,o=e===t,s="rgb"===e?i.rgb:i.hsv;return a("calcite-tab-title",{class:"color-mode","data-color-mode":e,key:e,onCalciteTabsActivate:this.handleTabActivate,selected:o},s)},this.renderChannelsTab=e=>{const{isClearable:t,channelMode:i,channels:o,messages:s,alphaChannel:n}=this,l=e===i,r="rgb"===e?[s.red,s.green,s.blue]:[s.hue,s.saturation,s.value],c=k(this.el),h=n?o:o.slice(0,3);return a("calcite-tab",{class:ae,key:e,selected:l},a("div",{class:"channels",dir:"ltr"},h.map(((e,i)=>{const a=3===i;return a&&(e=t&&!e?e:d(e)),this.renderChannel(e,i,r[i],c,a?"%":"")}))))},this.renderChannel=(e,t,i,o,s)=>a("calcite-input-number",{class:ee,"data-channel-index":t,dir:o,key:t,label:i,lang:this.effectiveLocale,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.handleChannelChange,onCalciteInputNumberInput:this.handleChannelInput,onKeyDown:this.handleKeyDown,scale:"l"===this.scale?"m":"s",style:{marginLeft:t>0&&("s"!==this.scale||!this.alphaChannel||3!==t)?"-1px":""},suffixText:s,value:e?.toString()}),this.deleteColor=()=>{const e=h(this.color,this.alphaChannel);if(!(this.savedColors.indexOf(e)>-1))return;const t=this.savedColors.filter((t=>t!==e));this.savedColors=t;const i=`${ge}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(t))},this.saveColor=()=>{const e=h(this.color,this.alphaChannel);if(this.savedColors.indexOf(e)>-1)return;const t=[...this.savedColors,e];this.savedColors=t;const i=`${ge}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(t))},this.drawColorControls=Q(((e="all")=>{"all"!==e&&"color-field"!==e||!this.colorFieldRenderingContext||this.drawColorField(),"all"!==e&&"hue-slider"!==e||!this.hueSliderRenderingContext||this.drawHueSlider(),this.alphaChannel&&("all"===e||"opacity-slider"===e)&&this.opacitySliderRenderingContext&&this.drawOpacitySlider()}),16),this.captureColorFieldColor=(e,t,i=!0)=>{const{dimensions:{colorField:{height:a,width:o}}}=this,s=Math.round(be.s/o*e),n=Math.round(be.v/a*(a-t));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(s).value(n),i)},this.initColorField=e=>{this.colorFieldRenderingContext=e.getContext("2d"),this.updateCanvasSize("color-field"),this.drawColorControls()},this.initHueSlider=e=>{this.hueSliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("hue-slider"),this.drawHueSlider()},this.initOpacitySlider=e=>{e&&(this.opacitySliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("opacity-slider"),this.drawOpacitySlider())},this.storeOpacityScope=e=>{this.opacityScopeNode=e},this.handleOpacityScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:i}=e,a={ArrowUp:.01,ArrowRight:.01,ArrowDown:-.01,ArrowLeft:-.01};if(a[i]){e.preventDefault();const o=a[i]*t,s=this.baseColorFieldColor.alpha(),n=this.baseColorFieldColor.alpha(s+o);this.internalColorSet(n,!1)}},this.allowEmpty=!1,this.alphaChannel=!1,this.channelsDisabled=!1,this.clearable=!1,this.color=Ce,this.disabled=!1,this.format="auto",this.hideChannels=!1,this.hexDisabled=!1,this.hideHex=!1,this.hideSaved=!1,this.savedDisabled=!1,this.scale="m",this.storageId=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.value=r(h(Ce,this.alphaChannel)),this.defaultMessages=void 0,this.channelMode="rgb",this.channels=this.toChannels(Ce),this.dimensions=xe.m,this.effectiveLocale="",this.messages=void 0,this.savedColors=[],this.colorFieldScopeTop=void 0,this.colorFieldScopeLeft=void 0,this.hueScopeLeft=void 0,this.opacityScopeLeft=void 0,this.scopeOrientation=void 0}handleAllowEmptyOrClearableChange(){this.isClearable=this.clearable||this.allowEmpty}handleAlphaChannelChange(e){const{format:t}=this;e&&"auto"!==t&&!m(t)&&(console.warn(`ignoring alphaChannel as the current format (${t}) does not support alpha`),this.alphaChannel=!1)}handleColorChange(e,t){this.drawColorControls(),this.updateChannelsFromColor(e),this.previousColor=t}handleFormatOrAlphaChannelChange(){this.setMode(this.format),this.internalColorSet(this.color,!1,"internal")}handleScaleChange(e="m"){this.updateDimensions(e),this.updateCanvasSize("all"),this.drawColorControls()}onMessagesChange(){}handleValueChange(e,t){const{isClearable:i,format:a}=this;let s=!1;if(!i||e){const i=C(e);if(!i||"auto"!==a&&i!==a)return this.showIncompatibleColorWarning(e,a),void(this.value=t);s=this.mode!==i,this.setMode(i,null===this.internalColorUpdateContext)}const n=this.activeCanvasInfo;if("initial"===this.internalColorUpdateContext)return;if("user-interaction"===this.internalColorUpdateContext)return this.calciteColorPickerInput.emit(),void(n||this.calciteColorPickerChange.emit());const l=i&&!e?null:o(null!=e&&"object"==typeof e&&m(this.mode)?g(e):e),r=!f(l,this.color);(s||r)&&this.internalColorSet(l,this.alphaChannel&&!(this.mode.endsWith("a")||this.mode.endsWith("a-css")),"internal")}get baseColorFieldColor(){return this.color||this.previousColor||Ce}effectiveLocaleChange(){N(this,this.effectiveLocale)}handleChannelKeyUpOrDown(e){this.shiftKeyChannelAdjustment=0;const{key:t}=e;if("ArrowUp"!==t&&"ArrowDown"!==t||!e.composedPath().some((e=>e.classList?.contains(ee))))return;const{shiftKey:i}=e;if(e.preventDefault(),!this.color)return this.internalColorSet(this.previousColor),void e.stopPropagation();this.shiftKeyChannelAdjustment="ArrowUp"===t&&i?9:"ArrowDown"===t&&i?-9:0}async setFocus(){await O(this),this.el.focus()}async componentWillLoad(){E(this),this.handleAllowEmptyOrClearableChange();const{isClearable:e,color:t,format:i,value:a}=this,s=e&&!a,n=C(a),l=s||"auto"===i&&n||i===n,r=s?null:l?o(a):t;l||this.showIncompatibleColorWarning(a,i),this.setMode(i,!1),this.internalColorSet(r,!1,"initial"),this.updateDimensions(this.scale);const c=`${ge}${this.storageId}`;this.storageId&&localStorage.getItem(c)&&(this.savedColors=JSON.parse(localStorage.getItem(c))),await z(this)}connectedCallback(){j(this),H(this),U(this)}componentDidLoad(){P(this)}disconnectedCallback(){window.removeEventListener("pointermove",this.globalPointerMoveHandler),window.removeEventListener("pointerup",this.globalPointerUpHandler),I(this),L(this),M(this)}componentDidRender(){F(this)}render(){const{channelsDisabled:e,color:t,colorFieldScopeLeft:i,colorFieldScopeTop:o,dimensions:{slider:{width:s},thumb:{radius:n}},hexDisabled:l,hideChannels:r,hideHex:c,hideSaved:p,hueScopeLeft:u,messages:m,alphaChannel:C,opacityScopeLeft:g,savedColors:f,savedDisabled:b,scale:v,scopeOrientation:y}=this,x=t?h(t,C):null,w=n,S=u??s*Ce.hue()/be.h,k=n,j=g??s*d(Ce.alpha())/ye,I=null===t,F="vertical"===y,A=l||c,E=e||r,P=b||p,[O,H]=this.getAdjustedScopePosition(i,o),[L,R]=this.getAdjustedScopePosition(S,w),[T,K]=this.getAdjustedScopePosition(j,k);return a(D,{key:"5f347cb136350e7661b7b479ee86a16bb85414c3",disabled:this.disabled},a("div",{key:"0294cbc1d16db228c22a2ae1bd061d9a683c1378",class:"container"},a("div",{key:"f7531da7e77293d52f5f8220443258e40f07f2d3",class:oe},a("canvas",{key:"6738d5bc8ec0f77c01eaac72b6b89edeea39abd3",class:"color-field",onPointerDown:this.handleColorFieldPointerDown,ref:this.initColorField}),a("div",{key:"932e10e761c6e8732e3412b049c895df18c4358f","aria-label":F?m.value:m.saturation,"aria-valuemax":F?be.v:be.s,"aria-valuemin":"0","aria-valuenow":(F?t?.saturationv():t?.value())||"0",class:{[de]:!0,[te]:!0},onKeyDown:this.handleColorFieldScopeKeyDown,role:"slider",style:{top:`${H||0}px`,left:`${O||0}px`},tabindex:"0",ref:this.storeColorFieldScope})),a("div",{key:"1d1e670478df18f1a8ad35d9ca217b378e103468",class:"preview-and-sliders"},a("calcite-color-picker-swatch",{key:"e65dd58f2aebb184db914c3a2c4e9782eb4b1e7c",class:"preview",color:x,scale:"l"}),a("div",{key:"98fb46881b6c40899b8fdfa4afeb521356d1e250",class:"sliders"},a("div",{key:"7367b44dcc87a8cfbd5cd913ebee690eeabfcb92",class:oe},a("canvas",{key:"4fe31f39350ac02fe527452da248b07b573dadac",class:{[ue]:!0,[le]:!0},onPointerDown:this.handleHueSliderPointerDown,ref:this.initHueSlider}),a("div",{key:"47048d9a779471169b1c4ec14d70a1a258914b1a","aria-label":m.hue,"aria-valuemax":be.h,"aria-valuemin":"0","aria-valuenow":t?.round().hue()||Ce.round().hue(),class:{[de]:!0,[ne]:!0},onKeyDown:this.handleHueScopeKeyDown,role:"slider",style:{top:`${R}px`,left:`${L}px`},tabindex:"0",ref:this.storeHueScope})),C?a("div",{class:oe},a("canvas",{class:{[ue]:!0,[ce]:!0},onPointerDown:this.handleOpacitySliderPointerDown,ref:this.initOpacitySlider}),a("div",{"aria-label":m.opacity,"aria-valuemax":ye,"aria-valuemin":0,"aria-valuenow":(t||Ce).round().alpha(),class:{[de]:!0,[re]:!0},onKeyDown:this.handleOpacityScopeKeyDown,role:"slider",style:{top:`${K}px`,left:`${T}px`},tabindex:"0",ref:this.storeOpacityScope})):null)),A&&E?null:a("div",{class:{[se]:!0,[pe]:!0}},a("div",{class:"hex-and-channels-group"},A?null:a("div",{class:"color-hex-options"},a("calcite-color-picker-hex-input",{allowEmpty:this.isClearable,alphaChannel:C,class:ae,messages:m,numberingSystem:this.numberingSystem,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:v,value:x})),E?null:a("calcite-tabs",{class:{[ie]:!0,[me]:!0},scale:"l"===v?"m":"s"},a("calcite-tab-nav",{slot:"title-group"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv")))),P?null:a("div",{class:{[he]:!0,[pe]:!0}},a("div",{class:"header"},a("label",null,m.saved),a("div",{class:"saved-colors-buttons"},a("calcite-button",{appearance:"transparent",class:"delete-color",disabled:I,iconStart:"minus",kind:"neutral",label:m.deleteColor,onClick:this.deleteColor,scale:v,type:"button"}),a("calcite-button",{appearance:"transparent",class:"save-color",disabled:I,iconStart:"plus",kind:"neutral",label:m.saveColor,onClick:this.saveColor,scale:v,type:"button"}))),f.length>0?a("div",{class:"saved-colors"},[...f.map((e=>a("calcite-color-picker-swatch",{class:"saved-color",color:e,key:e,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:v,tabIndex:0})))]):null)))}handleKeyDown(e){"Enter"===e.key&&e.preventDefault()}showIncompatibleColorWarning(e,t){console.warn(`ignoring color value (${e}) as it is not compatible with the current format (${t})`)}setMode(e,t=!0){const i="auto"===e?this.mode:e;this.mode=this.ensureCompatibleMode(i,t)}ensureCompatibleMode(e,t){const{alphaChannel:i}=this,a=m(e);if(i&&!a){const i=b(e);return t&&console.warn(`setting format to (${i}) as the provided one (${e}) does not support alpha`),i}if(!i&&a){const i=v(e);return t&&console.warn(`setting format to (${i}) as the provided one (${e}) does not support alpha`),i}return e}captureHueSliderColor(e){const{dimensions:{slider:{width:t}}}=this,i=ve/t*e;this.internalColorSet(this.baseColorFieldColor.hue(i),!1)}captureOpacitySliderValue(e){const{dimensions:{slider:{width:t}}}=this,i=c(ye/t*e);this.internalColorSet(this.baseColorFieldColor.alpha(i),!1)}internalColorSet(e,t=!0,i="user-interaction"){t&&f(e,this.color)||(this.internalColorUpdateContext=i,this.color=e,this.value=this.toValue(e),this.internalColorUpdateContext=null)}toValue(e,t=this.mode){if(!e)return null;if(t.includes("hex")){const i=t===u.HEXA;return r(h(e.round(),i),i)}if(t.includes("-css")){const i=e[t.replace("-css","").replace("a","")]().round().string();return(t.endsWith("a")||t.endsWith("a-css"))&&1===e.alpha()?`${i.slice(0,3)}a(${i.slice(4,-1)}, ${e.alpha()})`:i}const i=e[v(t)]().round().object();return t.endsWith("a")?y(i):i}getSliderCapSpacing(){const{dimensions:{slider:{height:e},thumb:{radius:t}}}=this;return 2*t-e}updateDimensions(e="m"){this.dimensions=xe[e]}drawColorField(){const e=this.colorFieldRenderingContext,{dimensions:{colorField:{height:t,width:i}}}=this;e.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string(),e.fillRect(0,0,i,t);const a=e.createLinearGradient(0,0,i,0);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,i,t);const o=e.createLinearGradient(0,0,0,t);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=o,e.fillRect(0,0,i,t),this.drawActiveColorFieldColor()}setCanvasContextSize(e,{height:t,width:i}){if(!e)return;const a=window.devicePixelRatio||1;e.width=i*a,e.height=t*a,e.style.height=`${t}px`,e.style.width=`${i}px`,e.getContext("2d").scale(a,a)}updateCanvasSize(e="all"){const{dimensions:t}=this;"all"!==e&&"color-field"!==e||this.setCanvasContextSize(this.colorFieldRenderingContext?.canvas,t.colorField);const i={width:t.slider.width,height:t.slider.height+2*(t.thumb.radius-t.slider.height/2)};"all"!==e&&"hue-slider"!==e||this.setCanvasContextSize(this.hueSliderRenderingContext?.canvas,i),"all"!==e&&"opacity-slider"!==e||this.setCanvasContextSize(this.opacitySliderRenderingContext?.canvas,i)}drawActiveColorFieldColor(){const{color:e}=this;if(!e)return;const t=e.hsv(),{dimensions:{colorField:{height:i,width:a},thumb:{radius:o}}}=this,s=t.saturationv()/(be.s/a),n=i-t.value()/(be.v/i);requestAnimationFrame((()=>{this.colorFieldScopeLeft=s,this.colorFieldScopeTop=n})),this.drawThumb(this.colorFieldRenderingContext,o,s,n,t,!1)}drawThumb(e,t,i,a,o,s){const n=2*Math.PI;if(e.beginPath(),e.arc(i,a,t,0,n),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),s&&o.alpha()<1){const o=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.beginPath(),e.arc(i,a,t-3,0,n),e.fillStyle=o,e.fill()}e.globalCompositeOperation="source-atop",e.beginPath(),e.arc(i,a,t-3,0,n);const l=s?o.alpha():1;e.fillStyle=o.rgb().alpha(l).string(),e.fill(),e.globalCompositeOperation="source-over"}drawActiveHueSliderColor(){const{color:e}=this;if(!e)return;const t=e.hsv().saturationv(100).value(100),{dimensions:{slider:{width:i},thumb:{radius:a}}}=this,o=t.hue()/(ve/i),s=a,n=this.getSliderBoundX(o,i,a);requestAnimationFrame((()=>{this.hueScopeLeft=n})),this.drawThumb(this.hueSliderRenderingContext,a,n,s,t,!1)}drawHueSlider(){const e=this.hueSliderRenderingContext,{dimensions:{slider:{height:t,width:i},thumb:{radius:a}}}=this,s=a-t/2,n=e.createLinearGradient(0,0,i,0),l=["red","yellow","lime","cyan","blue","magenta","#ff0004"],r=1/(l.length-1);let c=0;l.forEach((e=>{n.addColorStop(c,o(e).string()),c+=r})),e.clearRect(0,0,i,t+2*this.getSliderCapSpacing()),this.drawSliderPath(e,t,i,0,s),e.fillStyle=n,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveHueSliderColor()}drawOpacitySlider(){const e=this.opacitySliderRenderingContext,{baseColorFieldColor:t,dimensions:{slider:{height:i,width:a},thumb:{radius:o}}}=this,s=o-i/2;e.clearRect(0,0,a,i+2*this.getSliderCapSpacing());const n=e.createLinearGradient(0,s,a,0),l=t.rgb().alpha(0),r=t.rgb().alpha(.5),c=t.rgb().alpha(1);n.addColorStop(0,l.string()),n.addColorStop(.5,r.string()),n.addColorStop(1,c.string()),this.drawSliderPath(e,i,a,0,s);const h=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.fillStyle=h,e.fill(),e.fillStyle=n,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveOpacitySliderColor()}drawSliderPath(e,t,i,a,o){const s=t/2+1;e.beginPath(),e.moveTo(a+s,o),e.lineTo(a+i-s,o),e.quadraticCurveTo(a+i,o,a+i,o+s),e.lineTo(a+i,o+t-s),e.quadraticCurveTo(a+i,o+t,a+i-s,o+t),e.lineTo(a+s,o+t),e.quadraticCurveTo(a,o+t,a,o+t-s),e.lineTo(a,o+s),e.quadraticCurveTo(a,o,a+s,o),e.closePath()}getCheckeredBackgroundPattern(){if(this.checkerPattern)return this.checkerPattern;const e=document.createElement("canvas");e.width=10,e.height=10;const t=e.getContext("2d");return t.fillStyle="#ccc",t.fillRect(0,0,10,10),t.fillStyle="#fff",t.fillRect(0,0,5,5),t.fillRect(5,5,5,5),this.checkerPattern=e,e}drawActiveOpacitySliderColor(){const{color:e}=this;if(!e)return;const t=e,{dimensions:{slider:{width:i},thumb:{radius:a}}}=this,o=d(t.alpha())/(ye/i),s=a,n=this.getSliderBoundX(o,i,a);requestAnimationFrame((()=>{this.opacityScopeLeft=n})),this.drawThumb(this.opacitySliderRenderingContext,a,n,s,t,!0)}getSliderBoundX(e,t,i){const a=K(e,t,i);return 0===a?e:-1===a?R(e,0,t,i,2*i):R(e,0,t,t-2*i,t-i)}updateColorFromChannels(e){this.internalColorSet(o(e,this.channelMode))}updateChannelsFromColor(e){this.channels=e?this.toChannels(e):[null,null,null,null]}toChannels(e){const{channelMode:t}=this,i=e[t]().array().map(((e,t)=>3===t?e:Math.floor(e)));return 3===i.length&&i.push(1),i}getAdjustedScopePosition(e,t){return[e-.5,t-.5]}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleFormatOrAlphaChannelChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:inline-block;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          );outline-offset:11px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index="3"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index="3"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index="3"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-color-picker",{allowEmpty:[516,"allow-empty"],alphaChannel:[4,"alpha-channel"],channelsDisabled:[4,"channels-disabled"],clearable:[516],color:[1040],disabled:[516],format:[513],hideChannels:[516,"hide-channels"],hexDisabled:[4,"hex-disabled"],hideHex:[516,"hide-hex"],hideSaved:[516,"hide-saved"],savedDisabled:[516,"saved-disabled"],scale:[513],storageId:[513,"storage-id"],messageOverrides:[1040],numberingSystem:[513,"numbering-system"],value:[1025],messages:[1040],defaultMessages:[32],channelMode:[32],channels:[32],dimensions:[32],effectiveLocale:[32],savedColors:[32],colorFieldScopeTop:[32],colorFieldScopeLeft:[32],hueScopeLeft:[32],opacityScopeLeft:[32],scopeOrientation:[32],setFocus:[64]},[[2,"keydown","handleChannelKeyUpOrDown"],[2,"keyup","handleChannelKeyUpOrDown"]],{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleFormatOrAlphaChannelChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}]);function Ie(){"undefined"!=typeof customElements&&["calcite-color-picker","calcite-button","calcite-color-picker-hex-input","calcite-color-picker-swatch","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-loader","calcite-progress","calcite-tab","calcite-tab-nav","calcite-tab-title","calcite-tabs"].forEach((e=>{switch(e){case"calcite-color-picker":customElements.get(e)||customElements.define(e,je);break;case"calcite-button":customElements.get(e)||q();break;case"calcite-color-picker-hex-input":customElements.get(e)||ke();break;case"calcite-color-picker-swatch":customElements.get(e)||x();break;case"calcite-icon":customElements.get(e)||$();break;case"calcite-input-message":customElements.get(e)||V();break;case"calcite-input-number":customElements.get(e)||B();break;case"calcite-input-text":customElements.get(e)||W();break;case"calcite-loader":customElements.get(e)||_();break;case"calcite-progress":customElements.get(e)||X();break;case"calcite-tab":customElements.get(e)||G();break;case"calcite-tab-nav":customElements.get(e)||J();break;case"calcite-tab-title":customElements.get(e)||Y();break;case"calcite-tabs":customElements.get(e)||Z()}}))}Ie();const Fe=je,De=Ie;export{Fe as CalciteColorPicker,De as defineCustomElement};