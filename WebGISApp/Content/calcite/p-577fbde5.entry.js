/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{r as e,c as o,h as t,H as i,g as s}from"./p-818852ac.js";import{d as a,t as r}from"./p-d1368708.js";import{c,d as n,H as l}from"./p-c59c22e6.js";import{c as d,d as h,u as b,I as p}from"./p-34a03696.js";import{i as m}from"./p-24a311c0.js";import{c as u,d as f,g as k}from"./p-d2d76227.js";import{c as v,s as y,a as x}from"./p-7f68206e.js";import"./p-1d0d4f4f.js";import"./p-66edac25.js";import"./p-cd85d59d.js";import"./p-89725cbd.js";const g={container:"container",track:"track",handle:"handle"};const z=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}:host(:focus) .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}.container:hover .handle,:host(:focus) .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]) .container:hover .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const w=z;const j=class{constructor(t){e(this,t);this.calciteSwitchChange=o(this,"calciteSwitchChange",6);this.keyDownHandler=e=>{if(!this.disabled&&m(e.key)){this.toggle();e.preventDefault()}};this.clickHandler=()=>{if(this.disabled){return}this.toggle()};this.setSwitchEl=e=>{this.switchEl=e};this.disabled=false;this.form=undefined;this.label=undefined;this.name=undefined;this.scale="m";this.checked=false;this.value=undefined}async setFocus(){await v(this);a(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){if(!this.disabled){this.toggle();this.setFocus()}}toggle(){this.checked=!this.checked;this.calciteSwitchChange.emit()}connectedCallback(){d(this);u(this);c(this)}componentWillLoad(){y(this)}componentDidLoad(){x(this)}disconnectedCallback(){h(this);f(this);n(this)}componentDidRender(){b(this)}render(){return t(i,{key:"2e5e3a9e0dcc88431502cd2bbea8323a1898ef9a",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},t(p,{key:"73c50c102fe522422e08835b653dc8651eca6bae",disabled:this.disabled},t("div",{key:"f0020b33ecee02265dcd4d712f729638ccabb14e","aria-checked":r(this.checked),"aria-label":k(this),class:g.container,ref:this.setSwitchEl,role:"switch",tabIndex:0},t("div",{key:"03b2f583e888ea429025b74ca43b22a4dd957ee5",class:g.track},t("div",{key:"3045c61b33731f692ecf201cb6ffea2a164f6297",class:g.handle})),t(l,{key:"f1a1c1bda4e85b357936c962175e0942dc0b0001",component:this}))))}get el(){return s(this)}};j.style=w;export{j as calcite_switch};
//# sourceMappingURL=p-577fbde5.entry.js.map