// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a){return a?{remove(){a&&(a(),a=void 0)}}:k}function f(a){a.forEach(d=>d?.remove())}const k={remove:()=>{}};b.abortHandle=function(a){return c(()=>a?.abort())};b.asyncHandle=function(a,d){let g=!1,e=null;a.then(h=>{g?h.remove():e=h});return c(()=>{g=!0;null!=e?e.remove():null!=d&&(d.abort(),d=null)})};b.destroyHandle=function(a){return c(null!=a?()=>a.destroy():void 0)};b.disposable=function(a){return{[Symbol.dispose](){a.remove()}}};b.handlesGroup=function(a){return c(()=>
f(a))};b.makeHandle=c;b.refHandle=function(a){return c(()=>a()?.remove())};b.removeHandles=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});