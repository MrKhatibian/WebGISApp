"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3784],{35902:(e,t,r)=>{r.d(t,{A:()=>h});var n,s,i=r(13226),o=r(16699),a=r(36544);function l(e){return(0,o.c)((0,a.c)(e),0,255)}function u(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}function c(e,t){const r=e.toString(16).padStart(2,"0");return t?r.substring(0,1):r}r(26809),r(2589),r(18527),r(32773),r(20266),r(90740);class f{static blendColors(e,t,r,n=new f){return n.r=Math.round(e.r+(t.r-e.r)*r),n.g=Math.round(e.g+(t.g-e.g)*r),n.b=Math.round(e.b+(t.b-e.b)*r),n.a=e.a+(t.a-e.a)*r,n._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);if(r){const e=r[2].split(/\s*,\s*/),n=r[1];if("rgb"===n&&3===e.length||"rgba"===n&&4===e.length){const r=e[0];if("%"===r.charAt(r.length-1)){const r=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(r[3]=parseFloat(e[3])),f.fromArray(r,t)}return f.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===n&&3===e.length||"hsla"===n&&4===e.length)return f.fromArray((0,i.h)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new f){if("#"!==e[0]||isNaN(Number(`0x${e.substring(1)}`)))return null;switch(e.length){case 4:case 5:{const r=parseInt(e.substring(1,2),16),n=parseInt(e.substring(2,3),16),s=parseInt(e.substring(3,4),16),i=5===e.length?15:parseInt(e.substring(4),16);return f.fromArray([r+16*r,n+16*n,s+16*s,(i+16*i)/255],t)}case 7:case 9:{const r=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16),i=7===e.length?255:parseInt(e.substring(7),16);return f.fromArray([r,n,s,i/255],t)}default:return null}}static fromArray(e,t=new f){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=(0,i.i)(e)?(0,i.g)(e):null;return r&&f.fromArray(r,t)||f.fromRgb(e,t)||f.fromHex(e,t)}static fromJSON(e){return null!=e?new f([e[0],e[1],e[2],(e[3]??255)/255]):void 0}static toUnitRGB(e){return null!=e?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return null!=e?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?f.fromString(e,this):Array.isArray(e)?f.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof f||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(e){const t=e?.capitalize??!1,r=e?.digits??6,n=3===r||4===r,s=4===r||8===r,i=`#${c(this.r,n)}${c(this.g,n)}${c(this.b,n)}${s?c(Math.round(255*this.a),n):""}`;return t?i.toUpperCase():i}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=f.AlphaMode.ALWAYS){const t=l(this.r),r=l(this.g),n=l(this.b);return e===f.AlphaMode.ALWAYS||1!==this.a?[t,r,n,l(255*this.a)]:[t,r,n]}clone(){return new f(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return null!=e&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a=n}}f.prototype.declaredClass="esri.Color",(s=(n=f||(f={})).AlphaMode||(n.AlphaMode={}))[s.ALWAYS=0]="ALWAYS",s[s.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const h=f},66136:(e,t,r)=>{r.d(t,{A:()=>y});var n,s=r(32816),i=r(99924),o=r(4734),a=r(29298),l=(r(32773),r(20266),r(49877)),u=r(69421),c=r(56273),f=r(78016);r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(50214),r(93804),r(59192),r(54483),r(36544);let h=n=class extends i.oY{static get allTime(){return d}static get empty(){return p}static fromArray(e){return new n({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(n.allTime)}get isEmpty(){return this.equals(n.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new n({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,n=e.start?.getTime()??e.start,s=e.end?.getTime()??e.end;return t===n&&r===s}expandTo(e,t=f.s){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,o.t)(r,e,t));let s=this.end;if(s){const r=(0,o.t)(s,e,t);s=s.getTime()===r.getTime()?r:(0,o.o)(r,1,e,t)}return new n({start:r,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return n.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,s=e.start?.getTime()??-1/0,i=e.end?.getTime()??1/0;let o,a;return s>=t&&s<=r?o=s:t>=s&&t<=i&&(o=t),r>=s&&r<=i?a=r:i>=t&&i<=r&&(a=i),null==o||null==a||isNaN(o)||isNaN(a)?n.empty:new n({start:o===-1/0?null:new Date(o),end:a===1/0?null:new Date(a)})}offset(e,t,r=f.s){if(this.isEmpty||this.isAllTime)return this.clone();const s=new n,{start:i,end:a}=this;return null!=i&&(s.start=(0,o.o)(i,e,t,r)),null!=a&&(s.end=(0,o.o)(a,e,t,r)),s}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return d.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new n({start:t,end:r})}};(0,s._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"end",void 0),(0,s._)([(0,l.r)("end")],h.prototype,"readEnd",null),(0,s._)([(0,c.w)("end")],h.prototype,"writeEnd",null),(0,s._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],h.prototype,"isAllTime",null),(0,s._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],h.prototype,"isEmpty",null),(0,s._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"start",void 0),(0,s._)([(0,l.r)("start")],h.prototype,"readStart",null),(0,s._)([(0,c.w)("start")],h.prototype,"writeStart",null),h=n=(0,s._)([(0,u.$)("esri.TimeExtent")],h);const d=new h,p=new h({start:void 0,end:void 0}),y=h},22522:(e,t,r)=>{r.d(t,{a:()=>i,c:()=>a,d:()=>o,n:()=>s,t:()=>l});var n=r(32773);function s(e,t=!1){return e<=n.n?t?new Array(e).fill(0):new Array(e):new Float64Array(e)}function i(e){return((0,n.d)(e)?e.length:e.byteLength/8)<=n.n?Array.from(e):new Float64Array(e)}function o(e,t,r){return Array.isArray(e)?e.slice(t,t+r):e.subarray(t,t+r)}function a(e,t){for(let r=0;r<t.length;++r)e[r]=t[r];return e}function l(e){return Array.isArray(e)?new Float64Array(e):e}},15393:(e,t,r)=>{r.r(t),r.d(t,{M:()=>u,S:()=>U,a:()=>T,f:()=>N,i:()=>L,s:()=>E});var n,s,i,o,a,l,u,c,f=r(16699),h=r(7969),d=r(22522),p=r(2895),y=r(29312),g=r(19907),m=r(18683);function b(e){return(0,m.g)(`esri/libs/i3s/${e}`)}let w,A,S;function E(e){if(!S)return;const t=e.modifications,r=S._malloc(8*t.length),n=new Float64Array(S.HEAPU8.buffer,r,t.length);for(let e=0;e<t.length;++e)n[e]=t[e];S.setModifications(e.context,r,t.length,e.isGeodetic),S._free(r)}function M(e,t,r){const{context:n,globalTrafo:s,mbs:i,obbData:o,elevationOffset:a,geometryBuffer:u,geometryDescriptor:c,indexToVertexProjector:f,vertexToRenderProjector:h}=t,d=e._malloc(u.byteLength),p=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),y=new Uint8Array(e.HEAPU8.buffer,d,u.byteLength);y.set(new Uint8Array(u));const g=new Float64Array(e.HEAPU8.buffer,p,33);O(g,[NaN,NaN,NaN]);let m=g.byteOffset+3*g.BYTES_PER_ELEMENT,b=new Float64Array(g.buffer,m);O(b,s),m+=16*g.BYTES_PER_ELEMENT,b=new Float64Array(g.buffer,m),O(b,i),m+=4*g.BYTES_PER_ELEMENT,o&&(b=new Float64Array(g.buffer,m),O(b,o));const w=c,A={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:w.featureIndex},S=e.process(n,!!t.obbData,d,y.byteLength,w,A,p,a,f,h,t.normalReferenceFrame);if(e._free(p),e._free(d),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const E=S.componentOffsets.length>0?S.componentOffsets.slice():null,M=S.featureIds.length>0?S.featureIds.slice():null,T=S.anchorIds.length>0?Array.from(S.anchorIds):null,N=S.anchors.length>0?Array.from(S.anchors):null,_=S.interleavedVertedData.slice().buffer,L=S.indicesType===l.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),v=S.positions.slice(),F=S.positionIndicesType===l.Int16?new Uint16Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/2).slice():new Uint32Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/4).slice(),U={layout:t.layouts[0],interleavedVertexData:_,indices:L,hasColors:S.hasColors,hasModifications:S.hasModifications,positionData:{data:v,indices:F}};return M&&r.push(M.buffer),E&&r.push(E.buffer),r.push(_),r.push(L.buffer),r.push(v.buffer),r.push(F.buffer),{componentOffsets:E,featureIds:M,anchorIds:T,anchors:N,transformedGeometry:U,obb:S.obb,globalTrafo:s}}function T(e){return 0===e?s.Unmodified:1===e?s.PotentiallyModified:2===e?s.Culled:s.Unknown}function N(e){if(!S)return;const{context:t,buffer:r}=e,n=S._malloc(r.byteLength),s=r.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(S.HEAPU8.buffer,n,s),o=new Float64Array(r);i.set(o),S.filterOBBs(t,n,s),o.set(i),S._free(n)}function _(e){S&&0===S.destroy(e)&&(S=null)}function O(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function L(){S||await v()}function v(){return S?Promise.resolve(S):(A||(A=(w||(w=new Promise((e=>r.e(6937).then(r.bind(r,96937)).then((e=>e.i)).then((({default:t})=>{const r=t({locateFile:b,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),w).then((e=>(S=e,A=null,S)))),A)}r(62482),r(5611),r(36117),(c=n||(n={}))[c.Unmodified=0]="Unmodified",c[c.Culled=1]="Culled",c[c.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(s||(s={})),function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(i||(i={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(o||(o={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(a||(a={})),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(l||(l={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(u||(u={}));const F={transform:(e,t)=>S&&M(S,e,t),destroy:_},U=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:function(e){_(e)},dracoDecompressPointCloudData:async function(e){S=await v();const t=[e.geometryBuffer],{geometryBuffer:r}=e,n=r.byteLength,s=S._malloc(n),i=new Uint8Array(S.HEAPU8.buffer,s,n);i.set(new Uint8Array(r));const o=S.dracoDecompressPointCloudData(s,i.byteLength);if(S._free(s),o.error.length>0)throw new Error(`i3s.wasm: ${o.error}`);const a=o.featureIds?.length>0?o.featureIds.slice():null,l=o.positions.slice();return a&&t.push(a.buffer),t.push(l.buffer),{result:{positions:l,featureIds:a},transferList:t}},filterObbsForModifications:async function(e){await v(),N(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}},filterObbsForModificationsSync:N,initialize:L,interpretObbModificationResults:T,process:async function(e){S=await v();const t=[e.geometryBuffer];return{result:M(S,e,t),transferList:t}},project:async function(e){const{localMatrix:t,origin:n,positions:s,vertexSpace:i,localMode:o}=e,a=h.A.fromJSON(e.inSpatialReference),l=h.A.fromJSON(e.outSpatialReference);let u;const[{projectBuffer:c},{initializeProjection:f}]=await Promise.all([Promise.resolve().then(r.bind(r,47387)).then((e=>e.m)),Promise.resolve().then(r.bind(r,78281)).then((e=>e.a))]);await f(a,l);const g=[0,0,0];if(!c(n,a,0,g,l,0,1))throw new Error("Failed to project");if("georeferenced"===i.type&&null==i.origin){if(u=new Float64Array(s.length),!c(s,a,0,u,l,0,u.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===i.type?p.A.fromJSON(i):y.A.fromJSON(i),{project:n}=await r.e(9811).then(r.bind(r,49811)),c=n({positions:s,transform:t?{localMatrix:t}:void 0,vertexSpace:e,inSpatialReference:a,outSpatialReference:l,localMode:o});if(!c)throw new Error("Failed to project");u=(0,d.t)(c)}const m=u.length,[b,w,A]=g;for(let e=0;e<m;e+=3)u[e]-=b,u[e+1]-=w,u[e+2]-=A;return{result:{projected:u,original:s,projectedOrigin:g},transferList:[u.buffer,s.buffer]}},setLegacySchema:async function(e){S=await v(),S.setLegacySchema(e.context,e.jsonSchema)},setModifications:async function(e){await v(),E(e)},setModificationsSync:E,test:F,transformNormals:async function({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return(0,g.t)(r,t,e),(0,f.h)(e)&&(0,g.n)(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}},Symbol.toStringTag,{value:"Module"}))},73502:(e,t,r)=>{function n(e){}r.d(t,{n:()=>n}),r(32773)},19907:(e,t,r)=>{function n(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,n=3,s=n){if(e.length/n!==Math.ceil(t.length/s))return e;const i=e.length/n,o=r[0],a=r[1],l=r[2],u=r[4],c=r[5],f=r[6],h=r[8],d=r[9],p=r[10],y=r[12],g=r[13],m=r[14];let b=0,w=0;for(let r=0;r<i;r++){const r=t[b],i=t[b+1],A=t[b+2];e[w]=o*r+u*i+h*A+y,e[w+1]=a*r+c*i+d*A+g,e[w+2]=l*r+f*i+p*A+m,b+=s,w+=n}return e}function i(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,n=3,s=n){if(e.length/n!==Math.ceil(t.length/s))return;const i=e.length/n,o=r[0],a=r[1],l=r[2],u=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8];let y=0,g=0;for(let r=0;r<i;r++){const r=t[y],i=t[y+1],m=t[y+2];e[g]=o*r+u*i+h*m,e[g+1]=a*r+c*i+d*m,e[g+2]=l*r+f*i+p*m,y+=s,g+=n}}function a(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,n=3,s=n){const i=Math.min(e.length/n,t.length/s);let o=0,a=0;for(let l=0;l<i;l++)e[a]=r*t[o],e[a+1]=r*t[o+1],e[a+2]=r*t[o+2],o+=s,a+=n;return e}function u(e,t,r,n=3,s=n){const i=e.length/n;if(i!==Math.ceil(t.length/s))return e;let o=0,a=0;for(let l=0;l<i;l++)e[a]=t[o]+r[0],e[a+1]=t[o+1]+r[1],e[a+2]=t[o+2]+r[2],o+=s,a+=n;return e}function c(e,t){f(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function f(e,t,r=3,n=r){const s=Math.min(e.length/r,t.length/n);let i=0,o=0;for(let a=0;a<s;a++){const s=t[i],a=t[i+1],l=t[i+2],u=s*s+a*a+l*l;if(u>0){const t=1/Math.sqrt(u);e[o]=t*s,e[o+1]=t*a,e[o+2]=t*l}i+=n,o+=r}}r.d(t,{a:()=>s,b:()=>u,c:()=>n,d:()=>i,e:()=>c,f:()=>l,n:()=>f,s:()=>a,t:()=>o}),r(32773),r(20266)},52731:(e,t,r)=>{r.d(t,{O:()=>u,P:()=>c});var n=r(32816),s=r(41390),i=r(32773),o=(r(20266),r(57732)),a=r(93181),l=r(69421);r(29298),r(36544),r(40499),r(6407),r(90740),r(58498),r(13671),r(91047),r(45371),r(80959);const u=e=>{let t=class extends e{clone(){const e=(0,a.g)(this);(0,o.b)(e,"unable to clone instance of non-accessor class");const t=e.metadata,r=e.store,n={},l=new Map;for(const e in t){const o=t[e],a=r?.originOf(e),u=o.clonable;if(o.readOnly||!1===u||a!==s.O.USER&&a!==s.O.DEFAULTS&&a!==s.O.WEB_MAP&&a!==s.O.WEB_SCENE)continue;const c=this[e];let f=null;f="function"==typeof u?u(c):"reference"===u?c:(0,i.TU)(c),null!=c&&null==f||(a===s.O.DEFAULTS?l.set(e,f):n[e]=f)}const u=new(0,Object.getPrototypeOf(this).constructor)(n);if(l.size){const e=(0,a.g)(u)?.store;if(e)for(const[t,r]of l)e.set(t,r,s.O.DEFAULTS)}return u}};return t=(0,n._)([(0,l.$)("esri.core.Clonable")],t),t};let c=class extends(u(s.T)){};c=(0,n._)([(0,l.$)("esri.core.Clonable")],c)},2895:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(32816),s=r(52731),i=r(99924),o=r(29298),a=(r(32773),r(20266),r(88663)),l=r(69421);r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544),r(93804);let u=class extends((0,s.O)(i.oY)){constructor(e){super(e),this.type="georeferenced",this.origin=null}};(0,n._)([(0,a.e)({georeferenced:"georeferenced"},{readOnly:!0})],u.prototype,"type",void 0),(0,n._)([(0,o.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,n._)([(0,l.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],u);const c=u},29312:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(32816),s=r(52731),i=r(99924),o=r(29298),a=(r(32773),r(20266),r(88663)),l=r(69421),u=r(2589);r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544),r(93804);let c=class extends((0,s.O)(i.oY)){constructor(e){super(e),this.type="local",this.origin=(0,u.c)()}};(0,n._)([(0,a.e)({local:"local"},{readOnly:!0})],c.prototype,"type",void 0),(0,n._)([(0,o.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],c.prototype,"origin",void 0),c=(0,n._)([(0,l.$)("esri.geometry.support.MeshLocalVertexSpace")],c);const f=c}}]);