// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./guid","./utils2"],function(c,a,g,d){function e(){"undefined"!==typeof customElements&&["calcite-combobox-item-group"].forEach(b=>{switch(b){case "calcite-combobox-item-group":customElements.get(b)||customElements.define(b,f)}})}const f=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.guid=g.guid();this.afterEmptyGroup=!1;this.label=this.ancestors=void 0;this.scale="m"}connectedCallback(){this.ancestors=
d.getAncestors(this.el)}render(){const {el:b,scale:h}=this,k=d.getDepth(b);return a.h("ul",{key:"f97f7287323229be32779d451a7e816b016c02b4","aria-labelledby":this.guid,class:{list:!0,[`scale--${h}`]:!0},role:"group"},a.h("li",{key:"e7aa9b0a2955562d9687c294b3b39eafbd04c5a2",class:{label:!0},id:this.guid,role:"presentation",style:{"--calcite-combobox-item-spacing-indent-multiplier":`${k}`}},a.h("span",{key:"5b02b92d24c05a93a5aeeda140f7422c50fb52b0",class:"title"},this.label)),a.h("slot",{key:"1a2e106d97304df29b2cbf5841e65726e55960ae"}))}get el(){return this}static get style(){return".scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-color-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-color-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-combobox-item-group",{afterEmptyGroup:[516,"after-empty-group"],ancestors:[1040],label:[1],scale:[1]}]);e();c.CalciteComboboxItemGroup=f;c.defineCustomElement=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});