"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9566],{55359:(e,t,i)=>{i.d(t,{q:()=>r});var s=i(57219);class r{constructor(e,t){this._storage=new s.F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t,i=1){this._storage.put(this,e,t,i,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}},57219:(e,t,i)=>{i.d(t,{F:()=>l,Mn:()=>n});var s,r,o=i(3694);(r=s||(s={}))[r.ALL=0]="ALL",r[r.SOME=1]="SOME";class n{constructor(e,t,i){this.name=e,this._storage=t,this.id=a+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),i&&(this._storage.registerRemoveFunc(this.id,i),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(e){return this._storage.getSize(this,e)}resetHitRate(){this._hit=this._miss=0}put(e,t,i,s=0){this._storage.put(this,e,t,i,s)}pop(e){const t=this._storage.pop(this,e);return void 0===t?++this._miss:++this._hit,t}get(e){const t=this._storage.get(this,e);return void 0===t?++this._miss:++this._hit,t}peek(e){return this._storage.peek(this,e)}updateSize(e,t,i){this._storage.updateSize(this,e,t,i)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class l{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new o.A,this._users=new o.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){const i=this._db.get(e.id+t);return i?.size??0}put(e,t,i,r,o){t=e.id+t;const n=this._db.get(t);if(n&&(this._size-=n.size,e.size-=n.size,this._db.delete(t),n.entry!==i&&this._notifyRemove(t,n.entry,n.size,s.ALL)),r>this._maxSize)return void this._notifyRemove(t,i,r,s.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!r||r<0)return console.warn(`Refusing to cache entry with size ${r} for key ${t}`),void this._notifyRemove(t,i,0,s.ALL);const l=1+Math.max(o,-4)- -3;this._db.set(t,new c(i,r,l)),this._size+=r,e.size+=r,this._checkSize()}updateSize(e,t,i,r){t=e.id+t;const o=this._db.get(t);if(o&&o.entry===i){for(this._size-=o.size,e.size-=o.size;r>this._maxSize;){const e=this._notifyRemove(t,i,r,s.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);r=e}o.size=r,this._size+=r,e.size+=r,this._checkSize()}}pop(e,t){t=e.id+t;const i=this._db.get(t);if(i)return this._size-=i.size,e.size-=i.size,this._db.delete(t),++this._hit,i.entry;++this._miss}get(e,t){t=e.id+t;const i=this._db.get(t);if(void 0!==i)return this._db.delete(t),i.lives=i.lifetime,this._db.set(t,i),++this._hit,i.entry;++this._miss}peek(e,t){const i=this._db.get(e.id+t);return i?++this._hit:++this._miss,i?.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,s)=>{const r=e.lifetime;i[r]=(i[r]||0)+e.size,this._users.forAll((i=>{const{id:r,name:o}=i;if(s.startsWith(r)){const i=t[o]||0;t[o]=i+e.size}}))}));const s={};this._users.forAll((e=>{const i=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){const r=t[i]||0;t[i]=r,s[i]=Math.round(100*e.hitRate)+"%"}else s[i]="0%"}));const r=Object.keys(t);r.sort(((e,i)=>t[i]-t[e])),r.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+s[i]));for(let t=i.length-1;t>=0;--t){const s=i[t];s&&(e["Priority "+(t+-3-1)]=Math.round(s/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){const t=e.id;this._db.forEach(((e,i)=>{i.startsWith(t)&&(this._size-=e.size,this._db.delete(i),this._notifyRemove(i,e.entry,e.size,s.ALL))})),e.size=0}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,e.size,s.ALL))),this._users.forAll((e=>e.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i,s){let r;return this._removeFuncs.some((o=>{if(e.startsWith(o[0])){const e=o[1](t,s,i);return"number"==typeof e&&(r=e),!0}return!1})),r}_checkSize(){this._users.forAll((e=>this._checkSizeLimits(e))),this._checkSizeLimits()}_checkSizeLimits(e){const t=e??this;if(t.maxSize<0||t.size<=t.maxSize)return;const i=e?.id;let s=!0;for(;s;){s=!1;for(const[r,o]of this._db)if(0===o.lifetime&&(!i||r.startsWith(i))){if(this._purgeItem(r,o,e),t.size<=.9*t.maxSize)return;s||=this._db.has(r)}}for(const[s,r]of this._db)if((!i||s.startsWith(i))&&(this._purgeItem(s,r,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t,i=this._users.find((t=>e.startsWith(t.id)))){if(this._db.delete(e),t.lives<=1){this._size-=t.size,i&&(i.size-=t.size);const r=this._notifyRemove(e,t.entry,t.size,s.SOME);null!=r&&r>0&&(this._size+=r,i&&(i.size+=r),t.lives=t.lifetime,t.size=r,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let a=0;class c{constructor(e,t,i){this.entry=e,this.size=t,this.lifetime=i,this.lives=i}}},6797:(e,t,i)=>{i.d(t,{Mj:()=>h,Ui:()=>d,w2:()=>m});var s=i(69622),r=i(5503),o=i(88620);const n=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function l(e){return e instanceof s.A}function a(e){return e instanceof r.A?Object.keys(e.items):l(e)?(0,o.oY)(e).keys():e?Object.keys(e):[]}function c(e,t){return e instanceof r.A?e.items[t]:e[t]}function f(e){return e?e.declaredClass:null}function u(e,t){const i=e.diff;if(i&&"function"==typeof i)return i(e,t);const s=a(e),r=a(t);if(0===s.length&&0===r.length)return;if(!s.length||!r.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const o=r.filter((e=>!s.includes(e))),h=s.filter((e=>!r.includes(e))),m=s.filter((i=>r.includes(i)&&c(e,i)!==c(t,i))).concat(o,h).sort(),d=f(e);if(d&&n.has(d)&&m.length)return{type:"complete",oldValue:e,newValue:t};let y;const p=l(e)&&l(t);for(const s of m){const r=c(e,s),o=c(t,s);let n;if((p||"function"!=typeof r&&"function"!=typeof o)&&r!==o&&(null!=r||null!=o)){if(i&&i[s]&&"function"==typeof i[s])n=i[s]?.(r,o);else if(r instanceof Date&&o instanceof Date){if(r.getTime()===o.getTime())continue;n={type:"complete",oldValue:r,newValue:o}}else n="object"==typeof r&&"object"==typeof o&&f(r)===f(o)?u(r,o):{type:"complete",oldValue:r,newValue:o};null!=n&&(null!=y?y.diff[s]=n:y={type:"partial",diff:{[s]:n}})}}return y}function h(e,t){return function(e,t){if(null==e)return!1;const i=t.split(".");let s=e;for(const e of i){if("complete"===s.type)return!0;if("partial"!==s.type)return!1;{const t=s.diff[e];if(!t)return!1;s=t}}return!0}(e,t)}function m(e,t){if(!e)return!1;if("partial"===e.type){const i=Object.keys(e.diff);return 1===i.length&&i[0]===t}return!1}function d(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&f(e)!==f(t)?{type:"complete",oldValue:e,newValue:t}:u(e,t)}},28076:(e,t,i)=>{i.d(t,{D:()=>s});const s={CIMVectorMarker:{scalesymbolsproportionally:!1,respectframe:!0,anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMPictureMarker:{scalex:1,texturefilter:"Draft",anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMTextSymbol:{angle:0,anglex:0,angley:0,halosize:1,height:10,horizontalalignment:"Left",kerning:!0,letterspacing:0,letterwidth:100,ligatures:!0,linegap:0,offsetx:0,offsety:0,strikethrough:!1,textcase:"Normal",textstring:"",underline:!1,verticalalignment:"Bottom",enable:!0,colorlocked:!1},CIMSolidStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMPictureStroke:{texturefilter:"Draft",capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMGradientStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMSolidFill:{enable:!0,colorlocked:!1},CIMPictureFill:{offsetx:0,offsety:0,rotation:0,scalex:1,height:10,texturefilter:"Draft",enable:!0,colorlocked:!1},CIMHatchFill:{offsetx:0,offsety:0,rotation:0,separation:4,enable:!0,colorlocked:!1},CIMGeometricEffectAddControlPoints:{angletolerance:120},CIMGeometricEffectArrow:{arrowtype:"OpenEnded",width:5},CIMGeometricEffectBuffer:{size:1},CIMGeometricEffectCut:{begincut:1,endcut:1,middlecut:0,invert:!1},CIMGeometricEffectDashes:{customendingoffset:0,linedashending:"NoConstraint",offsetalongline:0},CIMGeometricEffectDonut:{method:"Mitered",option:"Accurate",width:2},CIMGeometricEffectJog:{angle:225,length:20,position:50},CIMGeometricEffectControlMeasureLine:{rule:"FullGeometry"},CIMGeometricEffectMove:{offsetx:1,offsety:-1},CIMGeometricEffectOffset:{method:"Square",offset:1,option:"Fast"},CIMGeometricEffectRotate:{angle:15},CIMGeometricEffectScale:{xscalefactor:1.15,yscalefactor:1.15},CIMGeometricEffectWave:{amplitude:2,period:3,seed:1,waveform:"Sinus"},CIMMarkerPlacementAlongLine:{customendingoffset:0,endings:"WithHalfGap",offsetalongline:0,placeperpart:!0,angletoline:!0,offset:0},CIMMarkerPlacementAtExtremities:{extremityplacement:"Both",offsetalongline:0,angletoline:!0,offset:0},CIMMarkerPlacementAtRatioPositions:{beginposition:0,endposition:0,flipfirst:!0,angletoline:!0,offset:0},CIMMarkerPlacementInsidePolygon:{gridangle:0,gridtype:"Fixed",offsetx:0,offsety:0,randomness:100,seed:0,shiftoddrows:!1,stepx:16,stepy:16,clipping:"ClipAtBoundary"},CIMMarkerPlacementOnLine:{relativeto:"LineMiddle",startpointoffset:0,angletoline:!0,offset:0},CIMMarkerPlacementOnVertices:{placeperpart:!0,placeoncontrolpoints:!0,placeonendpoints:!0,placeonregularvertices:!0,angletoline:!0,offset:0},CIMMarkerPlacementPolygonCenter:{method:"OnPolygon",offsetx:0,offsety:0,clipatboundary:!1},CIMAnimatedSymbolProperties:{playanimation:!1,reverseanimation:!1,randomizestarttime:!1,randomizestartseed:0,starttimeoffset:0,duration:3,endingduration:3,useendingduration:!1,repeattype:"Loop",repeatdelay:0}}},93397:(e,t,i)=>{i.d(t,{$w:()=>f,Bu:()=>M,DW:()=>d,FM:()=>l,K3:()=>I,Kn:()=>h,MO:()=>x,Nl:()=>_,O2:()=>S,UE:()=>b,YC:()=>w,YF:()=>C,_1:()=>p,_d:()=>m,bs:()=>k,gQ:()=>n,jn:()=>a,pM:()=>y,pV:()=>u,pk:()=>L,rB:()=>A,xo:()=>g,zb:()=>z});var s=i(28076);const r=" /-,\n";function o(e){let t=e.length;for(;t--;)if(!r.includes(e.charAt(t)))return!1;return!0}function n(e,t){const i=[];let s=0,r=-1;do{if(r=e.indexOf("[",s),r>=s){if(r>s){const t=e.substr(s,r-s);i.push([t,null,o(t)])}if(s=r+1,r=e.indexOf("]",s),r>=s){if(r>s){const o=t[e.substr(s,r-s)];o&&i.push([null,o,!1])}s=r+1}}}while(-1!==r);if(s<e.length-1){const t=e.substr(s);i.push([t,null,o(t)])}return i}function l(e,t,i,s){let r="",o=null;for(const s of t){const[t,n,l]=s;if(t)l?o=t:(o&&(r+=o,o=null),r+=t);else{let t=n;null!=i&&(t=x(n,i));const s=e.attributes[t];s&&(o&&(r+=o,o=null),r+=s)}}return function(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}(r,s)}function a(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function c(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const f=(e,t=0)=>null==e||isNaN(e)?t:e;function u(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function h(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function m(e){let t="normal",i="normal";if(e){const s=e.toLowerCase();s.includes("italic")?t="italic":s.includes("oblique")&&(t="oblique"),s.includes("bold")?i="bold":s.includes("light")&&(i="lighter")}return{style:t,weight:i}}function d(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function y(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=y(t);if(null!=e)return e}break;case"CIMTextSymbol":return y(e.symbol);case"CIMSolidFill":return e.color}return null}function p(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const e of t){const t=p(e);if(null!=t)return t}break}case"CIMTextSymbol":return p(e.symbol);case"CIMSolidStroke":return e.color}}function g(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=g(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return g(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function M(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function _(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function S(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}const b=e=>e.includes("data:image/svg+xml");function C(e){return e?e.charAt(0).toLowerCase()+e.substring(1):e}function z(e,t,i,s,r,o){const{infos:n}=o;let l=1,a=0,c=0,f=0;for(const{offsetX:e,offsetY:t,rotation:i,size:s,frameHeight:r,rotateClockWise:o}of n)c=P(e,t,a,l,c),f=v(e,t,a,l,f),r&&(l*=s/r),a=R(i,o,a);const u=P(s,r,a,l,c),h=v(s,r,a,l,f);return{size:e*l,rotation:R(t,i,a),offsetX:u,offsetY:h}}function I(e){return e?.dashTemplate&&"string"==typeof e.dashTemplate&&(e.dashTemplate=e.dashTemplate.split(" ").map(Number)),e}function k(e){if(null==e)return"Normal";switch(e.type){case"CIMTextSymbol":return e.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const t=e.symbolLayers;if(!t)return"Normal";for(const e of t)if("CIMVectorMarker"===e.type)return k(e)}break;case"CIMVectorMarker":{const t=e.markerGraphics;if(!t)return"Normal";for(const e of t)if(e.symbol)return k(e.symbol)}}return"Normal"}function w(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let t=0;if(e.symbolLayers)for(const i of e.symbolLayers)if(i)switch(i.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=i.size??s.D.CIMVectorMarker.size;e>t&&(t=e);break}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers)for(const i of e.symbolLayers)if(i)switch(i.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=i.width;null!=e&&e>t&&(t=e);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(i.markerPlacement&&c(i.markerPlacement)){const e=i.size??s.D.CIMVectorMarker.size;e>t&&(t=e)}break;case"CIMPictureFill":{const e=i.height;null!=e&&e>t&&(t=e)}}return t}}}function x(e,t){if(null!==t){const i=t.get(e);return i?i.name:e}return e}function L(e){return e.map((e=>({...e,propertyName:C(e.propertyName)})))}function A(e){const t={};for(const i in e){const s=e[i];t[C(i)]=s}return t}function v(e,t,i,s,r){const o=i*Math.PI/180;if(o){const i=Math.cos(o);return(Math.sin(o)*e+i*t)*s+r}return t*s+r}function P(e,t,i,s,r){const o=i*Math.PI/180;return o?(Math.cos(o)*e-Math.sin(o)*t)*s+r:e*s+r}function R(e,t,i){return t?i-e:i+e}},59868:(e,t,i)=>{i.d(t,{A7:()=>c,Cx:()=>f,Hk:()=>u,UK:()=>a}),i(44208);var s=i(94985),r=i(31593),o=i(53930),n=i(68249),l=i(93470);const a=o.A.fromJSON(l.Cb),c=r.A.fromJSON(l.yM),f=s.A.fromJSON(l.WR),u=n.A.fromJSON(l.JZ);o.A.fromJSON(l.nC),r.A.fromJSON(l.HW),s.A.fromJSON(l.b6)},93470:(e,t,i)=>{i.d(t,{Cb:()=>o,HW:()=>f,JR:()=>r,JZ:()=>a,WR:()=>l,b6:()=>u,fT:()=>s,nC:()=>c,yM:()=>n});const s=[252,146,31,255],r=[153,153,153,255],o={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},l={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},c={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},f={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);