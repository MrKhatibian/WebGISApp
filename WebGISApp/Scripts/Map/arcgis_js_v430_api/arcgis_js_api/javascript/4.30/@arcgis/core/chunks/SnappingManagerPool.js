/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{m as e}from"./handleUtils.js";import{n}from"../core/scheduling.js";import t from"../core/Collection.js";import{watch as i,initial as r}from"../core/reactiveUtils.js";import o from"../views/interactive/snapping/FeatureSnappingLayerSource.js";import{d as a}from"./Settings2.js";import s from"../views/interactive/snapping/SnappingOptions.js";import{S as p,a as c}from"./SnappingManager.js";const u=new Map;function f(f){if(!u.has(f)){const e=function(e,n){const p=new s({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:n?.distance??a.distance,touchSensitivityMultiplier:n?.touchSensitivityMultiplier??a.touchSensitivityMultiplier});return{...i((()=>e.map?.allLayers?.toArray()??[]),(e=>{p.featureSources=new t(e.map((e=>new o({layer:e}))))}),r),options:p}}(f,{distance:10}),n=function(e,n){return new p({view:e,options:n,snappingEnginesFactory:(n,t)=>[new c({view:e,spatialReference:e.spatialReference,options:t})]})}(f,e.options);u.set(f,{referenceCount:0,snappingManager:n,remove:()=>{e.remove(),n.destroy()}})}const l=u.get(f);l.referenceCount++;const m=e((()=>function(e,t){t.referenceCount--,t.referenceCount>0||n((()=>{0===t.referenceCount&&(t.remove(),u.delete(e))}))}(f,l)));return{snappingManager:l.snappingManager,...m}}export{f as a};