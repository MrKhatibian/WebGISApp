// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../icons ../../../chunks/componentsUtils ../../support/Heading ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(e,h,n,p,q,w,c){function r({radios:a,onRadioSelection:b,defaultRadioSelection:l}){return a?.length?c.tsx("calcite-radio-button-group",{name:"PromptChoiceList"},a.map(f=>c.tsx("calcite-label",{layout:"inline"},c.tsx("calcite-radio-button",{checked:f.value===l,value:f.value,onCalciteRadioButtonChange:()=>b?.(f.value)}),f.label))):void 0}function t(a){requestAnimationFrame(()=>
a.setFocus())}const d={base:"esri-editor__prompt",header:"esri-editor__prompt__header",heading:"esri-editor__prompt__header__heading",message:"esri-editor__prompt__message",divider:"esri-editor__prompt__divider",actions:"esri-editor__prompt__actions"};h.Prompt=function({actions:a,context:b,headingLevel:l,message:f,title:u,...v}){const {primary:m,secondary:k}=a;switch(b){case "danger":var g="danger";break;case "info":g="brand";break;default:g="neutral"}a=c.tsx("calcite-button",{afterCreate:t,appearance:"solid",
"data-testid":"primary-prompt-button",key:"prompt-primary-button",kind:g,onclick:m.action,width:k?"half":"full"},m.label);g=k&&c.tsx("calcite-button",{appearance:"outline","data-testid":"secondary-prompt-button",key:"prompt-secondary-button",kind:g,onclick:k.action,width:"half"},k.label);return c.tsx("calcite-scrim",{"data-testid":"prompt",key:"prompt"},c.tsx("div",{class:`${d.base}--${b}`},c.tsx("div",{class:d.header},c.tsx("calcite-icon",{icon:n.warningIcon}),c.tsx(q.Heading,{class:d.heading,level:l},
u)),c.tsx("div",{class:d.message},f),r(v)??c.tsx("div",{class:d.divider}),c.tsx("div",{class:d.actions},g,a)))};h.css=d;h.loadPromptComponents=()=>p.loadCalciteComponents({button:()=>new Promise((a,b)=>e(["../../../chunks/calcite-button"],a,b)),icon:()=>new Promise((a,b)=>e(["../../../chunks/calcite-icon"],a,b)),scrim:()=>new Promise((a,b)=>e(["../../../chunks/calcite-scrim"],a,b)),label:()=>new Promise((a,b)=>e(["../../../chunks/calcite-label"],a,b)),"radio-button":()=>new Promise((a,b)=>e(["../../../chunks/calcite-radio-button"],
a,b)),"radio-button-group":()=>new Promise((a,b)=>e(["../../../chunks/calcite-radio-button-group"],a,b))});Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});