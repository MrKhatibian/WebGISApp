/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{r as e,h as t,g as s}from"./p-818852ac.js";import{c as i,d as a}from"./p-d918698d.js";import{u as c,c as n,s as r,d as o}from"./p-99528bdd.js";import{c as l}from"./p-83d5b046.js";import{z as d}from"./p-d1368708.js";import"./p-24a311c0.js";import"./p-cd85d59d.js";import"./p-1d0d4f4f.js";import"./p-66edac25.js";const h={scrim:"scrim",content:"content"};const f={s:72,l:480};const m=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";const p=m;const u=class{constructor(t){e(this,t);this.resizeObserver=l("resize",(()=>this.handleResize()));this.handleDefaultSlotChange=e=>{this.hasContent=d(e)};this.storeLoaderEl=e=>{this.loaderEl=e;this.handleResize()};this.loading=false;this.messages=undefined;this.messageOverrides=undefined;this.loaderScale=undefined;this.defaultMessages=undefined;this.effectiveLocale="";this.hasContent=false}onMessagesChange(){}effectiveLocaleChange(){c(this,this.effectiveLocale)}connectedCallback(){i(this);n(this);this.resizeObserver?.observe(this.el)}async componentWillLoad(){await r(this)}disconnectedCallback(){a(this);o(this);this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:s,messages:i}=this;return t("div",{key:"e31839948c0689b6daeac22f3b2471fb049c834b",class:h.scrim},s?t("calcite-loader",{label:i.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,t("div",{key:"500b2dcbdcb6c3287ea613fd0f1357de7f3ff347",class:h.content,hidden:!e},t("slot",{key:"eea29ac4a454cf3cd51933a73911b70114ab6f77",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){if(e<f.s){return"s"}else if(e>=f.l){return"l"}else{return"m"}}handleResize(){const{loaderEl:e,el:t}=this;if(!e){return}this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0)}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};u.style=p;export{u as calcite_scrim};
//# sourceMappingURL=p-d38abb70.entry.js.map