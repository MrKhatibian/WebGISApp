/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{h as t,f as e}from"../widgets/Widget.js";import{g as o}from"./dom.js";import{S as n}from"./action-group.js";import{S as i}from"./action-menu.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const l=150,r=t=>t.reduce(((t,e)=>t+e),0)/t.length,a=t=>{const e=t.filter((t=>t.slot!==n.menuActions)),o=e?.length;return{actionWidth:o?r(e.map((t=>t.clientWidth||0))):0,actionHeight:o?r(e.map((t=>t.clientHeight||0))):0}},c=({layout:t,actionCount:e,actionWidth:o,width:n,actionHeight:i,height:l,groupCount:r})=>Math.max(e-(({width:t,actionWidth:e,layout:o,height:n,actionHeight:i,groupCount:l})=>{const r="horizontal"===o?t:n,a="horizontal"===o?e:i;return Math.floor((r-2*l)/a)})({width:n,actionWidth:o,layout:t,height:l,actionHeight:i,groupCount:r}),0),s=t=>Array.from(t.querySelectorAll("calcite-action")).filter((t=>!t.closest("calcite-action-menu")||t.slot===i.trigger)),h=({actionGroups:t,expanded:o,overflowCount:i})=>{let l=i;t.reverse().forEach((t=>{let i=0;const r=s(t).reverse();r.forEach((t=>{t.slot===n.menuActions&&(t.removeAttribute("slot"),t.textEnabled=o)})),l>0&&r.some((t=>(r.filter((t=>!t.slot)).length>1&&r.length>2&&!t.closest("calcite-action-menu")&&(t.textEnabled=!0,t.setAttribute("slot",n.menuActions),i++,i>1&&l--),l<1))),e(t)}))};function u({el:t,expanded:e}){s(t).filter((t=>t.slot!==n.menuActions)).forEach((t=>t.textEnabled=e)),t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t=>t.expanded=e))}const d=({expanded:e,expandText:n,collapseText:i,toggle:l,el:r,position:a,tooltip:c,ref:s,scale:h})=>{const u="rtl"===o(r),d=e?i:n,p=["chevrons-left","chevrons-right"];u&&p.reverse();const f="end"===function(t,e){return t||e.closest("calcite-shell-panel")?.position||"start"}(a,r),g=f?p[1]:p[0],m=f?p[0]:p[1],x=t("calcite-action",{icon:e?g:m,onClick:l,scale:h,text:d,textEnabled:e,title:e||c?null:d,ref:t=>(({tooltip:t,referenceElement:e,expanded:o,ref:n})=>(t&&(t.referenceElement=!o&&e?e:null),n&&n(e),e))({tooltip:c,referenceElement:t,expanded:e,ref:s})});return x};export{d as E,l as a,c as b,a as g,h as o,s as q,u as t};