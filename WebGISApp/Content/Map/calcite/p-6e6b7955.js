/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{d as e,a as t}from"./p-66edac25.js";import{s as o}from"./p-5df740ec.js";import{i as s}from"./p-cd85d59d.js";function c(){const{classList:o}=document.body;const s=window.matchMedia("(prefers-color-scheme: dark)").matches;const c=()=>o.contains(e)||o.contains(t)&&s?"dark":"light";const n=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:e}}));const r=e=>{a!==e&&n(e);a=e};let a=c();n(a);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>r(e.matches?"dark":"light")));new MutationObserver((()=>r(c()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function n(){if(s()){if(document.readyState==="interactive"){c()}else{document.addEventListener("DOMContentLoaded",(()=>c()),{once:true})}}o()}const r=n;export{r as g};
//# sourceMappingURL=p-6e6b7955.js.map