// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../chunks/componentsUtils","../../support/widgetUtils","../../support/jsxFactory"],function(e,f,g,h,a){f.MetadataSection=function({viewModel:c}){const {metadata:b}=c;return b?a.tsx("calcite-block",{heading:"Metadata",open:!0},a.tsx("calcite-accordion",{appearance:"solid",selectionMode:"single"},a.tsx("calcite-accordion-item",{heading:"Mission Info"},a.tsx("div",{class:"esri-metadata-table"},Object.keys(b.missionInfo).map(d=>[a.tsx("div",{class:"esri-metadata-table__data"},
d),a.tsx("div",{class:"esri-metadata-table__data"},b.missionInfo[d])]))),a.tsx("calcite-accordion-item",{heading:"Platform Info"},a.tsx("div",{class:"esri-metadata-table"},Object.keys(b.platformInfo).map(d=>[a.tsx("div",{class:"esri-metadata-table__data"},d),a.tsx("div",{class:"esri-metadata-table__data"},b.platformInfo[d])]))),a.tsx("calcite-accordion-item",{heading:"Frame Info"},a.tsx("div",{class:"esri-metadata-table"},Object.keys(b.frameInfo).map(d=>[a.tsx("div",{class:"esri-metadata-table__data"},
d),a.tsx("div",{class:"esri-metadata-table__data"},b.frameInfo[d])]))))):a.tsx("calcite-tile",{class:"esri-metadata-table__empty-state",description:"Press play or move the playhead to load metadata.",heading:"Metadata not yet loaded"})};f.loadMetadataSectionComponents=()=>g.loadCalciteComponents({accordion:()=>new Promise((c,b)=>e(["../../../chunks/calcite-accordion"],c,b)),"accordion-item":()=>new Promise((c,b)=>e(["../../../chunks/calcite-accordion-item"],c,b)),block:()=>new Promise((c,b)=>e(["../../../chunks/calcite-block"],
c,b)),tile:()=>new Promise((c,b)=>e(["../../../chunks/calcite-tile"],c,b))});Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});