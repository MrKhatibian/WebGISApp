/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{r as i,h as t,H as e,g as n}from"./p-818852ac.js";import{g as o,d as s}from"./p-d1368708.js";import{c as a,u as c,d as l,I as r}from"./p-34a03696.js";import{s as d,a as h,c as p}from"./p-7f68206e.js";import{C as b}from"./p-66edac25.js";import"./p-1d0d4f4f.js";import"./p-cd85d59d.js";const f=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-color-text-link);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-color-brand-underline), var(--calcite-color-brand-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const u=f;const k=class{constructor(t){i(this,t);this.childElClickHandler=i=>{if(!i.isTrusted){i.stopPropagation()}};this.storeTagRef=i=>{this.childEl=i};this.disabled=false;this.download=false;this.href=undefined;this.iconEnd=undefined;this.iconFlipRtl=undefined;this.iconStart=undefined;this.rel=undefined;this.target=undefined}connectedCallback(){a(this)}componentWillLoad(){d(this)}componentDidLoad(){h(this)}componentDidRender(){c(this)}disconnectedCallback(){l(this)}render(){const{download:i,el:n}=this;const s=o(n);const a=this.href?"a":"span";const c=t("calcite-icon",{key:"98cdfc979033eb5e339557d4d1a2143c9db9481d",class:"calcite-link--icon icon-start",flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:"s"});const l=t("calcite-icon",{key:"df0cfff6b187899330ec32a74132ca9d6ccb71f6",class:"calcite-link--icon icon-end",flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:"s"});const d=a;const h=a==="span"?"link":null;const p=a==="span"?0:null;return t(e,{key:"e0db07bcdf54a1558d2ee5f7d72dc6b3c9b7b4fc",role:"presentation"},t(r,{key:"84e1d20ffe03e7776560fa3f3bcc51a0e17c39ca",disabled:this.disabled},t(d,{key:"3d37687afd90675d8aab80bce396e765d81b580e",class:{[b.rtl]:s==="rtl"},download:d==="a"&&(i===""||i)?i:null,href:d==="a"&&this.href,onClick:this.childElClickHandler,ref:this.storeTagRef,rel:d==="a"&&this.rel,role:h,tabIndex:p,target:d==="a"&&this.target},this.iconStart?c:null,t("slot",{key:"14a04fe0a03318cfa130744530bff8d68450c317"}),this.iconEnd?l:null)))}clickHandler(i){if(this.disabled){return}if(!i.isTrusted){this.childEl.click()}}async setFocus(){await p(this);s(this.childEl)}get el(){return n(this)}};k.style=u;export{k as calcite_link};
//# sourceMappingURL=p-6865dae3.entry.js.map