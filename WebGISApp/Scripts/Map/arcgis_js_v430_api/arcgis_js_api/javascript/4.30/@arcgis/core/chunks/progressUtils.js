/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{m as s}from"./handleUtils.js";import{h as e}from"../core/lang.js";import{g as t}from"./ensureType.js";import{m as o,M as r,S as i}from"../core/scheduling.js";const a={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function n(s,e=(s=>{}),t){return new l(s,e,t)}class l{constructor(s,e=(s=>{}),t){if(this.onProgress=e,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof s){this._weights={};for(let e=0;e<s;e++){const t=e,o=1/s;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let s=0;for(const[e,t]of this._progressMap.entries())s+=t*this._weights[e];if(1===s&&e("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[e,t]of this._timingsMap){const o=Math.round(t.end-t.start)/1e3,r=Math.round(o/s*100);console.log(this.taskName??"Task",{stepKey:e,stepTime:o,relativeTime:r})}}this.onProgress(s)}setProgress(s,o){if(this._progressMap.set(s,o),e("enable-feature:esri-3dofl-upload-timings")){const e=performance.now();this._startTime??=e;const r=t(this._timingsMap,s,(()=>({start:e,end:0})));1===o&&(r.end=e)}this.emitProgress()}simulate(s,e){return m((e=>this.setProgress(s,e)),e)}makeOnProgress(s){return e=>this.setProgress(s,e)}}function m(e=(s=>{}),t=d){const o=performance.now();e(0);const r=setInterval((()=>{const s=performance.now()-o,r=1-Math.exp(-s/t);e(r)}),f);return s((()=>{clearInterval(r),e(1)}))}function p(s,e=c){return o(i(s*g/e))}function h(s,e=u){return o(i(s*g/e))}const c=10,u=10,g=8e-6,f=r(50),d=r(1e3);export{h as a,p as e,n as m,m as s,a as u};