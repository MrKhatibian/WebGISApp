/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,c as a,h as i,a as n}from"../widgets/Widget.js";import{B as c}from"./dom.js";import{g as l}from"./guid.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const s="container",o=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalTabRegister=a(this,"calciteInternalTabRegister",6),this.guid=`calcite-tab-title-${l()}`,this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const e=this.el.id||this.guid;return i(n,{key:"71074d2c26a860d7934fbd9b236f9a264ab3c34f","aria-labelledby":this.labeledBy,id:e},i("div",{key:"3fcf14f4aaddf9ad579c26c962ad75803febcea0",class:{[s]:!0,[`scale-${this.scale}`]:!0},role:"tabpanel",tabIndex:this.selected?0:-1},i("section",{key:"ba967be2e5121636d81754ec959452160bc4bb0d",class:"content"},i("slot",{key:"fae921d6fe2ae713bddc83adacbcf7e418aa1b7c"}))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}disconnectedCallback(){document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(e){e.composedPath().find((e=>"CALCITE-TABS"===e.tagName))===this.parentTabsEl&&(this.tab?this.selected=this.tab===e.detail.tab:this.getTabIndex().then((t=>{this.selected=t===e.detail.tab})),e.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call(c(this.el.parentElement.children).filter((e=>e.matches("calcite-tab"))),this.el)}async updateAriaInfo(e=[],t=[]){this.labeledBy=t[e.indexOf(this.el.id)]||null}get el(){return this}static get style(){return":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tab",{tab:[513],selected:[1540],scale:[1],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"]]]);function d(){"undefined"!=typeof customElements&&["calcite-tab"].forEach((e=>{"calcite-tab"===e&&(customElements.get(e)||customElements.define(e,o))}))}d();export{o as T,d};