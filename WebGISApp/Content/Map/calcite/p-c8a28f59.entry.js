/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{r as e,c as t,h as i,g as n,H as c}from"./p-818852ac.js";import{c as o}from"./p-83d5b046.js";import{c as a,d as r}from"./p-34587f3f.js";import{e as d,g as s,t as l,a as h}from"./p-d1368708.js";import{C as m}from"./p-66edac25.js";import{g as p}from"./p-89725cbd.js";import{s as g,a as f,c as v}from"./p-7f68206e.js";import"./p-cd85d59d.js";import"./p-1d0d4f4f.js";const b={accordion:"accordion",transparent:"accordion--transparent"};const u=":host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-accordion-border-color, var(--calcite-color-border-2));background-color:var(--calcite-accordion-background-color, var(--calcite-color-foreground-1))}.accordion--transparent{--calcite-accordion-border-color:transparent;border-color:var(--calcite-color-transparent);background-color:var(--calcite-color-transparent)}:host([scale=s]){--calcite-internal-accordion-item-spacing-unit:0.25rem;--calcite-internal-accordion-icon-margin:0.5rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-accordion-item-spacing-unit:0.5rem;--calcite-internal-accordion-icon-margin:0.75rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-accordion-item-spacing-unit:0.75rem;--calcite-internal-accordion-icon-margin:1rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([hidden]){display:none}[hidden]{display:none}";const x=u;const k=class{constructor(i){e(this,i);this.calciteInternalAccordionChange=t(this,"calciteInternalAccordionChange",6);this.mutationObserver=o("mutation",(()=>this.updateAccordionItems()));this.appearance="solid";this.iconPosition="end";this.iconType="chevron";this.scale="m";this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:true});this.updateAccordionItems()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const e=this.appearance==="transparent";return i("div",{key:"1399ab312fad432bde78fdedd0435848b53109ef",class:{[b.transparent]:e,[b.accordion]:!e}},i("slot",{key:"3ab7863d23eabb6c5ce499de42dab74df885ccdd"}))}updateActiveItemOnChange(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem});e.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach((e=>{e.iconPosition=this.iconPosition;e.iconType=this.iconType;e.scale=this.scale}));document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return n(this)}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}};k.style=x;const y={actionsStart:"actions-start",actionsEnd:"actions-end"};const w={actionsEnd:"actions-end",actionsStart:"actions-start",content:"content",description:"description",expandIcon:"expand-icon",header:"header",headerContainer:"header-container",headerContent:"header-content",headerText:"header-text",heading:"heading",icon:"icon",iconEnd:"icon--end",iconStart:"icon--start"};const C={section:"section",sectionToggle:"section-toggle"};const I=".icon-position--end,.icon-position--start{--calcite-internal-accordion-item-icon-rotation:calc(90deg * -1);--calcite-internal-accordion-item-active-icon-rotation:0deg;--calcite-internal-accordion-item-icon-rotation-rtl:90deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:0deg}:host{position:relative;display:flex;flex-direction:column;text-decoration-line:none;color:var(--calcite-accordion-text-color, var(--calcite-color-text-3));border-width:0}.icon-position--start{--calcite-internal-accordion-item-flex-direction:row-reverse;--calcite-internal-accordion-item-icon-spacing-start:0;--calcite-internal-accordion-item-icon-spacing-end:var(--calcite-internal-accordion-icon-margin)}.icon-position--end{--calcite-internal-accordion-item-flex-direction:row;--calcite-internal-accordion-item-icon-spacing-start:var(--calcite-internal-accordion-icon-margin);--calcite-internal-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-internal-accordion-item-icon-rotation:0deg;--calcite-internal-accordion-item-active-icon-rotation:180deg;--calcite-internal-accordion-item-icon-rotation-rtl:0deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}.content,.header{border-block-end-width:var(--calcite-border-width-sm);border-block-end-style:solid;border-color:var(--calcite-accordion-border-color, var(--calcite-color-border-2))}.header-content,.content{padding:var(--calcite-accordion-item-content-space, var(--calcite-internal-accordion-item-padding, var(--calcite-internal-accordion-item-spacing-unit, 0.5rem 0.75rem)))}.header{display:flex;align-items:stretch}.header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.header-content{flex-grow:1;cursor:pointer;outline-color:transparent;flex-direction:var(--calcite-internal-accordion-item-flex-direction)}.header-content:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.header-content:focus,.header-content:hover,.header-content:active{color:var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2))}.header-content:focus .expand-icon,.header-content:focus .heading,.header-content:hover .expand-icon,.header-content:hover .heading,.header-content:active .expand-icon,.header-content:active .heading{color:var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1))}.header-container{inline-size:100%}.header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}.heading,.description{display:flex;inline-size:100%}.heading{font-weight:var(--calcite-font-weight-medium)}.actions-start,.actions-end{display:flex;align-items:center}.icon{display:flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-end)}.icon--start{margin-inline-end:var(--calcite-internal-accordion-icon-margin)}.icon--end{margin-inline-end:var(--calcite-internal-accordion-icon-margin);margin-inline-start:var(--calcite-internal-accordion-icon-margin)}.expand-icon{color:var(--calcite-accordion-text-color, var(--calcite-color-text-3));margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-internal-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-icon-rotation-rtl))}.description{margin-block-start:0.25rem}.content{display:none;padding-block-start:0px;text-align:initial}:host(:not(:focus):not(:hover):not([expanded])) .heading{color:var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2))}:host([expanded]){color:var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1))}:host([expanded]) .header{border-block-end-color:transparent}:host([expanded]) .expand-icon{color:var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2));transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation-rtl))}:host([expanded]) .description{color:var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2))}:host([expanded]) .content{display:block}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}.header-content:hover .heading,.header-content:focus .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}";const A=I;const z=class{constructor(i){e(this,i);this.calciteInternalAccordionItemSelect=t(this,"calciteInternalAccordionItemSelect",6);this.calciteInternalAccordionItemClose=t(this,"calciteInternalAccordionItemClose",6);this.storeHeaderEl=e=>{this.headerEl=e};this.itemHeaderClickHandler=()=>this.emitRequestedItem();this.expanded=false;this.heading=undefined;this.description=undefined;this.iconStart=undefined;this.iconEnd=undefined;this.iconFlipRtl=undefined;this.iconPosition=undefined;this.iconType=undefined;this.accordionParent=undefined;this.scale=undefined}connectedCallback(){a(this)}componentWillLoad(){g(this)}componentDidLoad(){f(this)}disconnectedCallback(){r(this)}renderActionsStart(){const{el:e}=this;return d(e,y.actionsStart)?i("div",{class:w.actionsStart},i("slot",{name:y.actionsStart})):null}renderActionsEnd(){const{el:e}=this;return d(e,y.actionsEnd)?i("div",{class:w.actionsEnd},i("slot",{name:y.actionsEnd})):null}render(){const{iconFlipRtl:e}=this;const t=s(this.el);const n=this.iconStart?i("calcite-icon",{class:{[w.icon]:true,[w.iconStart]:true},flipRtl:e==="both"||e==="start",icon:this.iconStart,key:"icon-start",scale:p(this.scale)}):null;const o=this.iconEnd?i("calcite-icon",{class:{[w.iconEnd]:true,[w.icon]:true},flipRtl:e==="both"||e==="end",icon:this.iconEnd,key:"icon-end",scale:p(this.scale)}):null;const{description:a}=this;return i(c,{key:"814d4825cae2104f75b2f9929536082846cf57bd"},i("div",{key:"2db2128ea0666b97849c6dae790540f233c9d0c1",class:{[`icon-position--${this.iconPosition}`]:true,[`icon-type--${this.iconType}`]:true}},i("div",{key:"64fe888d6f47db3f9338327280b3e321bb770518",class:{[w.header]:true,[m.rtl]:t==="rtl"}},this.renderActionsStart(),i("div",{key:"9b76d09efa231d1840c913245832a10bedd8ea4b","aria-controls":C.section,"aria-expanded":l(this.expanded),class:w.headerContent,id:C.sectionToggle,onClick:this.itemHeaderClickHandler,ref:this.storeHeaderEl,role:"button",tabindex:"0"},i("div",{key:"59c73bc01a0321f23b296b12fa4bd9476084ce4b",class:w.headerContainer},n,i("div",{key:"c9d3551a823a31d4cc54934f780272e437f38ef1",class:w.headerText},i("span",{key:"350ea0660f827ced975b326287dc285ad1417b4c",class:w.heading},this.heading),a?i("span",{class:w.description},a):null),o),i("calcite-icon",{key:"497edd46ef65a4ac27a844f7c6c5de5cfb2cb0e7",class:w.expandIcon,icon:this.iconType==="chevron"?"chevronDown":this.iconType==="caret"?"caretDown":this.expanded?"minus":"plus",scale:p(this.scale)})),this.renderActionsEnd()),i("section",{key:"1b7cd480d664d6b3f65c145e19c5866107d19413","aria-labelledby":C.sectionToggle,class:w.content,id:C.section},i("slot",{key:"1156f3056966f11ee0836a5185cce700911c8c8b"}))))}keyDownHandler(e){if(e.target===this.el){switch(e.key){case" ":case"Enter":this.emitRequestedItem();e.preventDefault();break}}}updateActiveItemOnChange(e){const[t]=e.composedPath();const i=h(this.el,"calcite-accordion");if(t!==i){return}this.determineActiveItem(i.selectionMode,e.detail.requestedAccordionItem);e.stopPropagation()}accordionItemSyncHandler(e){const[t]=e.composedPath();const i=this.el;const n=i.parentElement===t;if(n){return}const c=h(i,"calcite-accordion");if(t!==c){return}i.iconPosition=c.iconPosition;i.iconType=c.iconType;i.scale=c.scale;e.stopPropagation()}async setFocus(){await v(this);this.headerEl.focus()}determineActiveItem(e,t){switch(e){case"multiple":if(this.el===t){this.expanded=!this.expanded}break;case"single":this.expanded=this.el===t?!this.expanded:false;break;case"single-persist":this.expanded=this.el===t;break}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return n(this)}};z.style=A;export{k as calcite_accordion,z as calcite_accordion_item};
//# sourceMappingURL=p-c8a28f59.entry.js.map