"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8628,3069,6247],{13069:(e,t,r)=>{r.d(t,{lk:()=>s,vD:()=>i,yS:()=>a});const n="randomUUID"in crypto;function s(){if(n)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function a(){return`{${s().toUpperCase()}}`}function i(){return`{${s()}}`}},17136:(e,t,r)=>{r.d(t,{el:()=>I});var n=r(92602),s=r(49186),a=r(53966),i=r(39829),o=r(82799),l=r(80754),d=r(21325),u=r(28735),c=(r(59456),r(78888)),p=r(65864),h=r(2272),f=r(84952),m=r(92300);const y=()=>a.A.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function b(e){return"polyline"===e[0].type}function w(e,t,r){if(t){const t=function(e,t){if(!(e instanceof o.A||e instanceof i.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw y().error(e),new s.A(e)}const r=(0,l.r8)(e),n=[];for(const e of r){const r=[];n.push(r),r.push([e[0][0],e[0][1]]);for(let n=0;n<e.length-1;n++){const s=e[n][0],a=e[n][1],i=e[n+1][0],o=e[n+1][1],l=Math.sqrt((i-s)*(i-s)+(o-a)*(o-a)),d=(o-a)/l,u=(i-s)/l,c=l/t;if(c>1){for(let e=1;e<=c-1;e++){const n=e*t,i=u*n+s,o=d*n+a;r.push([i,o])}const e=(l+Math.floor(c-1)*t)/2,n=u*e+s,i=d*e+a;r.push([n,i])}r.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.A({rings:n,spatialReference:e.spatialReference}):new o.A({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,u.ci)(t,!0)}return r&&(e=(0,l.kS)(e,r)),e}function A(e,t,r){if(Array.isArray(e)){const n=e[0];if(n>t){const r=(0,l.kd)(n,t);e[0]=n+r*(-2*t)}else if(n<r){const t=(0,l.kd)(n,r);e[0]=n+t*(-2*r)}}else{const n=e.x;if(n>t){const r=(0,l.kd)(n,t);e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=(0,l.kd)(n,r);e=e.clone().offset(t*(-2*r),0)}}return e}function F(e,t){let r=-1;for(let n=0;n<t.cutIndexes.length;n++){const s=t.cutIndexes[n],a=t.geometries[n],i=(0,l.r8)(a);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const n=t[e][0];r=n>r?n:r}r=Number(r.toFixed(9));const n=-360*(0,l.kd)(r,180);for(let r=0;r<t.length;r++){const t=a.getPoint(e,r);a.setPoint(e,r,t.clone().offset(n,0))}return!0}}))}if(s===r){if(g(e))for(const t of(0,l.r8)(a))e[s]=e[s].addRing(t);else if(b(e))for(const t of(0,l.r8)(a))e[s]=e[s].addPath(t)}else r=s,e[s]=a}return e}async function I(e,t,r){if(!Array.isArray(e))return I([e],t);t&&"string"!=typeof t&&y().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const s="string"==typeof t?t:t?.url??n.A.geometryServiceUrl;let a,g,b,v,S,R,E,$,M=0;const k=[],j=[];for(const t of e)if(null!=t)if(a||(a=t.spatialReference,g=(0,d.Vp)(a),b=a.isWebMercator,R=b?102100:4326,v=l.j7[R].maxX,S=l.j7[R].minX,E=l.j7[R].plus180Line,$=l.j7[R].minus180Line),g)if("mesh"===t.type)j.push(t);else if("point"===t.type)j.push(A(t.clone(),v,S));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>A(e,v,S))),j.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,g);j.push(e.rings?new i.A(e):e)}else if(t.extent){const e=t.extent,r=(0,l.kd)(e.xmin,S)*(2*v);let n=0===r?t.clone():(0,l.kS)(t.clone(),r);e.offset(r,0);let{xmin:s,xmax:a}=e;s=Number(s.toFixed(9)),a=Number(a.toFixed(9)),e.intersects(E)&&a!==v?(M=a>M?a:M,n=w(n,b),k.push(n),j.push("cut")):e.intersects($)&&s!==S?(M=a*(2*v)>M?a*(2*v):M,n=w(n,b,360),k.push(n),j.push("cut")):j.push(n)}else j.push(t.clone());else j.push(t);else j.push(t);let O=(0,l.kd)(M,v),L=-90;const U=O,x=new o.A;for(;O>0;){const e=360*O-180;x.addPath([[e,L],[e,-1*L]]),L*=-1,O--}if(k.length>0&&U>0){const t=F(k,await async function(e,t,r,n){const s=(0,h.Dl)(e),a=t[0].spatialReference,i={...n,responseType:"json",query:{...s.query,f:"json",sr:(0,d.YX)(a),target:JSON.stringify({geometryType:(0,p.$B)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},o=await(0,c.A)(s.path+"/cut",i),{cutIndexes:l,geometries:u=[]}=o.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,p.rS)(e);return t.spatialReference=a,t}))}}(s,k,x,r)),n=[],a=[];for(let r=0;r<j.length;r++){const s=j[r];if("cut"!==s)a.push(s);else{const s=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&s.rings.length>=i.rings.length?(n.push(s),a.push("simplify")):a.push(b?(0,u.Gh)(s):s)}}if(!n.length)return a;const i=await async function(e,t,r){const n="string"==typeof e?(0,f.An)(e):e,s=t[0].spatialReference,a=(0,p.$B)(t[0]),i={...r,query:{...n.query,f:"json",sr:(0,d.YX)(s),geometries:JSON.stringify((0,m.X)(t))}},{data:o}=await(0,c.A)(n.path+"/simplify",i);return(0,m.V)(o.geometries,a,s)}(s,n,r),o=[];for(let e=0;e<a.length;e++){const t=a[e];"simplify"!==t?o.push(t):o.push(b?(0,u.Gh)(i.shift()):i.shift())}return o}const V=[];for(let e=0;e<j.length;e++){const t=j[e];if("cut"!==t)V.push(t);else{const e=k.shift();V.push(!0===b?(0,u.Gh)(e):e)}}return V}},80754:(e,t,r)=>{r.d(t,{j7:()=>i,kS:()=>l,kd:()=>o,r8:()=>d});var n=r(82799),s=r(16930),a=r(65864);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:s.A.WebMercator}),minus180Line:new n.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:s.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.A({paths:[[[180,-180],[180,180]]],spatialReference:s.A.WGS84}),minus180Line:new n.A({paths:[[[-180,-180],[-180,180]]],spatialReference:s.A.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=d(e);for(const e of r)for(const r of e)r[0]+=t;return e}function d(e){return(0,a.Bi)(e)?e.rings:e.paths}},78628:(e,t,r)=>{r.d(t,{applyEdits:()=>I,r3:()=>w,uploadAssets:()=>k,zp:()=>F});var n=r(52106),s=r(5503),a=r(49186),i=r(4718),o=r(53966),l=r(74887),d=r(84952),u=r(13069),c=r(17136),p=r(21325),h=r(47685),f=r(30524),m=r(20557),y=r(83531);function g(e){return null!=e?.applyEdits}function b(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function w(e){return e.every(b)}function A(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(A)}async function I(e,t,r,n={}){let d;const c="gdbVersion"in e?e.gdbVersion:null,p=n.gdbVersion??c;if((0,h.Mk)(e)&&e.url)d=(0,h.Zk)(e.url,e.layerId,p,"original-and-current-features"===n.returnServiceEditsOption);else{d=(0,l.Tw)(),d.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:d.promise};e.emit("apply-edits",t)}try{const{results:l,edits:c}=await async function(e,t,r,n){if(await e.load(),!g(t))throw new a.A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,y.tk)(e))throw new a.A(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,r){const n=(0,y.BR)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),d=null!=e.infoFor3D;if(function(e,t,r,n,s,i){if(!e||!n&&!s)throw new a.A(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new a.A(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new a.A(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&s)throw new a.A(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,n,r,!!i,!!l,`${e.type}-layer`),!n.data.isVersioned&&r?.gdbVersion)throw new a.A(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!n.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new a.A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...r};if(null!=c.rollbackOnFailureEnabled||n.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&o.A.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),c.rollbackOnFailureEnabled=!0),!n.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new a.A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new a.A(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,r){const n=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&s.A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(n.addFeatures?.length&&!t.operations.supportsAdd)throw new a.A(`${r}:unsupported-operation`,"Layer does not support adding features.");if(n.updateFeatures?.length&&!t.operations.supportsUpdate)throw new a.A(`${r}:unsupported-operation`,"Layer does not support updating features.");if(n.deleteFeatures?.length&&!t.operations.supportsDelete)throw new a.A(`${r}:unsupported-operation`,"Layer does not support deleting features.");return n.addFeatures=n.addFeatures.map($),n.updateFeatures=n.updateFeatures.map($),n.addAssetFeatures=[],n}(t,n,`${e.type}-layer`),h=r?.globalIdUsed||d,f=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new a.A(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:r}=e;null==r[t]&&(r[t]=(0,u.yS)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n),S(e,t)}(t,e,h,f))),p.updateFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n),S(e,t);const s=(0,y.BR)(t);if("geometry"in e&&null!=e.geometry&&!s?.editing.supportsGeometryUpdate)throw new a.A(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h,f))),p.deleteFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n)}(t,e,h,f))),p.addAttachments.forEach((t=>R(t,e))),p.updateAttachments.forEach((t=>R(t,e))),d&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,n=(0,m.R_)("model/gltf-binary",r.supportedFormats)??(0,m.E1)("glb",r.supportedFormats);if(!n||!r.editFormats.includes(n))throw new a.A(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const t of e.addFeatures??[])M(t)&&s.push(t);for(const t of e.updateFeatures??[])M(t)&&s.push(t)}(p,e),{edits:await E(p),options:c}}(e,r,n);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,n),p=e=>e.filter((e=>!e.error)).map(i.o8),h={edits:c,addedFeatures:p(l.addFeatureResults),updatedFeatures:p(l.updateFeatureResults),deletedFeatures:p(l.deleteFeatureResults),addedAttachments:p(l.addAttachmentResults),updatedAttachments:p(l.updateAttachmentResults),deletedAttachments:p(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:n.globalIdToObjectId};return l.editedFeatureResults?.length&&(h.editedFeatures=l.editedFeatureResults),d.resolve(h),l}catch(e){throw d.reject(e),e}}function v(e,t,r,n){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new a.A(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new a.A(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(n.length&&"attributes"in e)for(const r of n){const n=e.attributes[r.name];if(void 0!==n&&!(0,f.OG)(r,n))throw new a.A(`${t.type}-layer:invalid-parameter`,`Big-integer field '${r.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new a.A(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new a.A(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function S(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:r}=e,{spatialReference:n,vertexSpace:s}=r,i=t.spatialReference,o="local"===s.type,l=(0,p.EA)(i),d=(0,p.aI)(i,n),u=d||(0,p.oT)(i)&&((0,p.oT)(n)||(0,p.K8)(n));if(!(o&&l&&u||!o&&!l&&d))throw new a.A(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${s.type} vertex space and a spatial reference wkid:${n.wkid} to a layer with a spatial reference wkid:${i.wkid} is not supported.`)}}function R(e,t){const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new a.A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new a.A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new a.A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new a.A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name||n.name))throw new a.A(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&n.uploadId)throw new a.A(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){const e=(0,d.r$)(n.data);if(e&&!e.isBase64)throw new a.A(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function E(e){const t=e.addFeatures??[],r=e.updateFeatures??[],n=t.concat(r).map((e=>e.geometry)),s=await(0,c.el)(n),a=t.length,i=r.length;return s.slice(0,a).forEach(((e,r)=>t[r].geometry=e)),s.slice(a,a+i).forEach(((e,t)=>r[t].geometry=e)),e}function $(e){const t=new n.A;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function M(e){return"mesh"===e?.geometry?.type}function k(e,t,r,n){if(!g(t))throw new a.A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new a.A(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,n)}},47685:(e,t,r)=>{r.d(t,{Mk:()=>h,Zk:()=>c,w6:()=>y});var n=r(90237),s=r(65529),a=r(4718),i=r(74887),o=r(10107),l=(r(44208),r(53966),r(40608)),d=r(20816);const u=new s.A.EventEmitter;function c(e,t,r=null,n=!1){const s=(0,i.Tw)();return n=null==t||n,u.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:r,mayReceiveServiceEdits:n,result:s.promise}),s}const p=Symbol();function h(e){return null!=e&&"object"==typeof e&&p in e}function f(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function m(e,t,r){const n=new URL(e).host,s=d.Z3.get(n),a=e=>!e||e===s;return a(t)&&a(r)||t===r}const y=e=>{var t;let r=class extends e{constructor(...e){super(...e),this[t]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:r,gdbVersion:n,mayReceiveServiceEdits:s,result:i}=e,o=t===this.url,l=null!=r&&null!=this.layerId&&r===this.layerId,d=f(this),u=f(this)&&m(t,n,this.gdbVersion);if(!o||d&&!u||!l&&!s)return;const c=i.then((e=>{if(this.lastEditsEventDate=new Date,l&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,a.o8)(e)),e;const r=e.editedFeatures?.find((({layerId:e})=>e===this.layerId));if(r){const{adds:t,updates:n,deletes:s}=r.editedFeatures,i={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:t?t.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],deletedFeatures:s?s.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],updatedFeatures:n?n.map((({current:{attributes:e}})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],editedFeatures:(0,a.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,a.o8)(e.historicMoment)};return this.emit("edits",i),i}const s={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,a.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,a.o8)(e.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(t,n,s.historicMoment)&&this.emit("edits",s),s})).then((e=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(t,n,e.historicMoment)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:r,moment:n}=e,s=t===this.url,a=f(this),i=f(this)&&m(t,r,this.gdbVersion),o=f(this)&&!m(t,this.gdbVersion,null);s&&a&&i&&o&&"historicMoment"in this&&this.historicMoment!==n&&(this.historicMoment=n)},this.when().then((()=>{this.addHandles(function(e){return u.on("apply-edits",new WeakRef(e))}(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(function(e){return u.on("update-moment",new WeakRef(e))}(this._updateMomentHandler))}),(()=>{}))}_shouldUpdateHistoricMoment(e,t,r){return"historicMoment"in this&&this.historicMoment!==r&&(0,d.w5)(e,t)}};return t=p,(0,n._)([(0,o.MZ)()],r.prototype,"lastEditsEventDate",void 0),r=(0,n._)([(0,l.$)("esri.layers.mixins.EditBusLayer")],r),r}},20557:(e,t,r)=>{r.d(t,{E1:()=>o,Fm:()=>l,JZ:()=>f,R_:()=>i,fu:()=>s,oF:()=>a,rq:()=>d});const n=[["binary","application/octet-stream","bin",""]];function s(e,t){return null!=c(t.name,e?.supportedFormats??[])}function a(e,t){if(!e)return!1;const r=d(t,e.supportedFormats??[]);return null!=r&&e.editFormats.includes(r)}function i(e,t){return p(function(e,t){const r=e.toLowerCase();return u(t).find((e=>h(e)===r))}(e,t))}function o(e,t){return p(c(e,t))}function l(e,t){return h(function(e,t){return u(t).find((t=>p(t)===e))}(e,t))}function d(e,t){return o(e.name,t)??i(e.type,t)}function u(e){return[...n,...e]}function c(e,t){const r=e.toLowerCase();return u(t).find((e=>function(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}(e).some((e=>r.endsWith(e)))))}function p(e){return e?.[0]}function h(e){return e?.[1].toLowerCase()}function f(e){return e.tables?.find((e=>"assetMaps"===e.role))}},92300:(e,t,r)=>{r.d(t,{V:()=>a,X:()=>s});var n=r(65864);function s(e){return{geometryType:(0,n.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function a(e,t,r){const s=(0,n.xD)(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=r,t}))}},2272:(e,t,r)=>{r.d(t,{Dl:()=>i,jV:()=>a,lF:()=>o}),r(92602),r(70333);var n=r(4718),s=r(84952);function a(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,s.An)(e):(0,n.o8)(e)}function o(e,t,r){const n={};for(const s in e){if("declaredClass"===s)continue;const a=e[s];if(null!=a&&"function"!=typeof a)if(Array.isArray(a))n[s]=a.map((e=>o(e)));else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r?.[s]);n[s]=t?e:JSON.stringify(e)}else n[s]=t?a:JSON.stringify(a);else n[s]=a}return n}r(926)},20816:(e,t,r)=>{r.d(t,{TA:()=>s,We:()=>o,Z3:()=>a,ZJ:()=>l,w5:()=>d});var n=r(78888);const s=(0,r(13069).vD)(),a=new Map,i=new Map;async function o(e,t,r){if(!e||!r)return!1;if(!t)return!0;const s=new URL(e).host;let i=a.get(s);if(!i){const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");i=(await(0,n.A)(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return i===t}async function l(e,t,n=!1){if(!e||!t)return!0;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=i.get(a)?.entries();if(o)for(const[e,i]of o)if(i.name===t){const t=!i.stack?.hasForwardEdits();if(!t&&n){const[{deleteForwardEdits:t},{default:n}]=await Promise.all([r.e(2186).then(r.bind(r,32186)),r.e(2558).then(r.bind(r,32558))]),o=await t(a,e,new n({sessionId:s,moment:i.moment}));return o.success&&i.stack?.clearForwardEdits(),o.success}return t}return!0}function d(e,t){if(!e)return!1;const r=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),n=i.get(r)?.entries();if(n)for(const[e,r]of n)if(r.name===t)return"edit"===r.lockType;return!1}new Map}}]);