/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{a as n}from"./p-818852ac.js";import{g as t}from"./p-d918698d.js";import{i as s}from"./p-cd85d59d.js";const o={};async function c(t,s){const c=`${s}_${t}`;if(o[c]){return o[c]}o[c]=fetch(n(`./assets/${s}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){a()}return n.json()})).catch((()=>a()));return o[c]}function a(){throw new Error("could not fetch component message bundle")}function i(n){n.messages={...n.defaultMessages,...n.messageOverrides}}function r(){}async function e(n){n.defaultMessages=await f(n,n.effectiveLocale);i(n)}async function f(n,o){if(!s()){return{}}const{el:a}=n;const i=a.tagName.toLowerCase();const r=i.replace("calcite-","");return c(t(o,"t9n"),r)}async function u(n,t){n.defaultMessages=await f(n,t);i(n)}function m(n){n.onMessagesChange=p}function d(n){n.onMessagesChange=r}function p(){i(this)}export{m as c,d,e as s,u};
//# sourceMappingURL=p-99528bdd.js.map