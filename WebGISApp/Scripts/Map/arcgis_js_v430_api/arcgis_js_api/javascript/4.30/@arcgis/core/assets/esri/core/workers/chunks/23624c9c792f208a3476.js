"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4302,3049,1921],{99781:(e,t,n)=>{n.d(t,{E:()=>I,a:()=>m,b:()=>h,c:()=>u,d:()=>w,e:()=>g,i:()=>f});var r=n(32816),a=n(81272),s=n(32773),i=n(80959),o=n(29298),l=(n(20266),n(69421)),d=n(64604);const u=(0,n(93049).b)(),c=new Map,p=new Map;async function h(e,t,n){if(!e||!n)return!1;if(!t)return!0;const r=new URL(e).host;let a=c.get(r);if(!a){const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");a=(await(0,d.A)(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return a===t}async function f(e,t,r=!1){if(!e||!t)return!0;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),s=p.get(a)?.entries();if(s)for(const[e,i]of s)if(i.name===t){const t=!i.stack?.hasForwardEdits();if(!t&&r){const[{deleteForwardEdits:t},{default:r}]=await Promise.all([n.e(7931).then(n.bind(n,87931)),n.e(951).then(n.bind(n,10951))]),s=await t(a,e,new r({sessionId:u,moment:i.moment}));return s.success&&i.stack?.clearForwardEdits(),s.success}return t}return!0}function m(e,t){if(!e)return!1;const n=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),r=p.get(n)?.entries();if(r)for(const[e,n]of r)if(n.name===t)return"edit"===n.lockType;return!1}new Map;const y=new a.A.EventEmitter;function g(e,t,n=null,r=!1){const a=(0,i.Tw)();return r=null==t||r,y.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:n,mayReceiveServiceEdits:r,result:a.promise}),a}const b=Symbol();function w(e){return null!=e&&"object"==typeof e&&b in e}function A(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function F(e,t,n){const r=new URL(e).host,a=c.get(r),s=e=>!e||e===a;return s(t)&&s(n)||t===n}const I=e=>{var t;let n=class extends e{constructor(...e){super(...e),this[t]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:n,gdbVersion:r,mayReceiveServiceEdits:a,result:i}=e,o=t===this.url,l=null!=n&&null!=this.layerId&&n===this.layerId,d=A(this),u=A(this)&&F(t,r,this.gdbVersion);if(!o||d&&!u||!l&&!a)return;const c=i.then((e=>{if(this.lastEditsEventDate=new Date,l&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,s.o8)(e)),e;const n=e.editedFeatures?.find((({layerId:e})=>e===this.layerId));if(n){const{adds:t,updates:r,deletes:a}=n.editedFeatures,i={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:t?t.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],deletedFeatures:a?a.map((({attributes:e})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:e}})=>({objectId:this.objectIdField&&e[this.objectIdField],globalId:this.globalIdField&&e[this.globalIdField]}))):[],editedFeatures:(0,s.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.o8)(e.historicMoment)};return this.emit("edits",i),i}const a={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,s.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.o8)(e.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(t,r,a.historicMoment)&&this.emit("edits",a),a})).then((e=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(t,r,e.historicMoment)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:n,moment:r}=e,a=t===this.url,s=A(this),i=A(this)&&F(t,n,this.gdbVersion),o=A(this)&&!F(t,this.gdbVersion,null);a&&s&&i&&o&&"historicMoment"in this&&this.historicMoment!==r&&(this.historicMoment=r)},this.when().then((()=>{this.addHandles(function(e){return y.on("apply-edits",new WeakRef(e))}(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(function(e){return y.on("update-moment",new WeakRef(e))}(this._updateMomentHandler))}),(()=>{}))}_shouldUpdateHistoricMoment(e,t,n){return"historicMoment"in this&&this.historicMoment!==n&&m(e,t)}};return t=b,(0,r._)([(0,o.MZ)()],n.prototype,"lastEditsEventDate",void 0),n=(0,r._)([(0,l.$)("esri.layers.mixins.EditBusLayer")],n),n}},1921:(e,t,n)=>{n.d(t,{applyEdits:()=>I,r3:()=>w,uploadAssets:()=>L,zp:()=>F});var r=n(27281),a=n(17745),s=n(6407),i=n(32773),o=n(20266),l=n(80959),d=n(99063),u=n(93049),c=n(3952),p=n(69763),h=n(99781),f=n(30011),m=n(80488),y=n(72604);function g(e){return null!=e?.applyEdits}function b(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function w(e){return e.every(b)}function A(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(A)}async function I(e,t,n,r={}){let d;const c="gdbVersion"in e?e.gdbVersion:null,p=r.gdbVersion??c;if((0,h.d)(e)&&e.url)d=(0,h.e)(e.url,e.layerId,p,"original-and-current-features"===r.returnServiceEditsOption);else{d=(0,l.Tw)(),d.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:d.promise};e.emit("apply-edits",t)}try{const{results:l,edits:c}=await async function(e,t,n,r){if(await e.load(),!g(t))throw new s.A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,y.h)(e))throw new s.A(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,n){const r=(0,y.g)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),d=null!=e.infoFor3D;if(function(e,t,n,r,a,i){if(!e||!r&&!a)throw new s.A(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&n?.globalIdUsed)throw new s.A(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&a)throw new s.A(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!n?.globalIdUsed&&a)throw new s.A(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,n,!!i,!!l,`${e.type}-layer`),!r.data.isVersioned&&n?.gdbVersion)throw new s.A(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&n?.rollbackOnFailureEnabled)throw new s.A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...n};if(null!=c.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&o.L.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),c.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new s.A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new s.A(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,n){const r=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&a.A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(r.addFeatures?.length&&!t.operations.supportsAdd)throw new s.A(`${n}:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s.A(`${n}:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s.A(`${n}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map($),r.updateFeatures=r.updateFeatures.map($),r.addAssetFeatures=[],r}(t,r,`${e.type}-layer`),h=n?.globalIdUsed||d,f=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new s.A(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:n}=e;null==n[t]&&(n[t]=(0,u.a)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,n,r){v(e,t,n,r),S(e,t)}(t,e,h,f))),p.updateFeatures.forEach((t=>function(e,t,n,r){v(e,t,n,r),S(e,t);const a=(0,y.g)(t);if("geometry"in e&&null!=e.geometry&&!a?.editing.supportsGeometryUpdate)throw new s.A(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h,f))),p.deleteFeatures.forEach((t=>function(e,t,n,r){v(e,t,n,r)}(t,e,h,f))),p.addAttachments.forEach((t=>R(t,e))),p.updateAttachments.forEach((t=>R(t,e))),d&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:n}=t,r=(0,m.a)("model/gltf-binary",n.supportedFormats)??(0,m.b)("glb",n.supportedFormats);if(!r||!n.editFormats.includes(r))throw new s.A(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:a}=e;for(const t of e.addFeatures??[])M(t)&&a.push(t);for(const t of e.updateFeatures??[])M(t)&&a.push(t)}(p,e),{edits:await E(p),options:c}}(e,n,r);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,n,r),p=e=>e.filter((e=>!e.error)).map(i.o8),h={edits:c,addedFeatures:p(l.addFeatureResults),updatedFeatures:p(l.updateFeatureResults),deletedFeatures:p(l.deleteFeatureResults),addedAttachments:p(l.addAttachmentResults),updatedAttachments:p(l.updateAttachmentResults),deletedAttachments:p(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:r.globalIdToObjectId};return l.editedFeatureResults?.length&&(h.editedFeatures=l.editedFeatureResults),d.resolve(h),l}catch(e){throw d.reject(e),e}}function v(e,t,n,r){if(n){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.A(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s.A(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const n of r){const r=e.attributes[n.name];if(void 0!==r&&!(0,f.OG)(n,r))throw new s.A(`${t.type}-layer:invalid-parameter`,`Big-integer field '${n.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.A(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.A(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function S(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:n}=e,{spatialReference:r,vertexSpace:a}=n,i=t.spatialReference,o="local"===a.type,l=(0,p.c)(i),d=(0,p.f)(i,r),u=d||(0,p.i)(i)&&((0,p.i)(r)||(0,p.b)(r));if(!(o&&l&&u||!o&&!l&&d))throw new s.A(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${a.type} vertex space and a spatial reference wkid:${r.wkid} to a layer with a spatial reference wkid:${i.wkid} is not supported.`)}}function R(e,t){const{feature:n,attachment:r}=e;if(!n||"attributes"in n&&!n.attributes[t.globalIdField])throw new s.A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in n)&&!n.globalId)throw new s.A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new s.A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new s.A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new s.A(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&r.uploadId)throw new s.A(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,d.r$)(r.data);if(e&&!e.isBase64)throw new s.A(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function E(e){const t=e.addFeatures??[],n=e.updateFeatures??[],r=t.concat(n).map((e=>e.geometry)),a=await(0,c.el)(r),s=t.length,i=n.length;return a.slice(0,s).forEach(((e,n)=>t[n].geometry=e)),a.slice(s,s+i).forEach(((e,t)=>n[t].geometry=e)),e}function $(e){const t=new r.A;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function M(e){return"mesh"===e?.geometry?.type}function L(e,t,n,r){if(!g(t))throw new s.A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.A(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(n,r)}n(32816),n(94345),n(36544),n(44600),n(29298),n(93181),n(13671),n(40499),n(69421),n(91047),n(90740),n(2160),n(99924),n(41390),n(58498),n(45371),n(49877),n(7969),n(56273),n(93804),n(18683),n(64604),n(29512),n(64752),n(48844),n(29208),n(36533),n(84200),n(97827),n(91695),n(18169),n(48402),n(16699),n(26809),n(2589),n(18527),n(67504),n(92517),n(77037),n(72393),n(52731),n(51961),n(62399),n(64995),n(33150),n(58173),n(66110),n(67520),n(27532),n(88663),n(48103),n(50214),n(59192),n(78016),n(54483),n(65085),n(33611),n(84857),n(60373),n(98187),n(35902),n(13226),n(16794),n(52357),n(11090),n(49319),n(93546),n(29570),n(34592),n(79825),n(95101),n(67578),n(14896),n(95611),n(98089),n(91366),n(80473),n(43435),n(73435),n(81272),n(44945),n(55270),n(95779),n(13262),n(346),n(4048),n(85232),n(93471),n(53252),n(34039),n(70061),n(3495),n(97906),n(64524),n(65023),n(31424),n(74676),n(53610),n(29447),n(78273),n(49475),n(32368),n(7391),n(22529),n(43534),n(38094),n(67723),n(47239),n(59858),n(63728),n(1178),n(7182),n(47788),n(19297),n(82408),n(73509),n(28276),n(69277),n(70580),n(75191),n(24319),n(62092),n(4157),n(62401),n(89322),n(20138),n(53370),n(46946),n(3816),n(71992),n(80167),n(4478),n(91808),n(7161),n(55586),n(35121),n(92229),n(18344),n(64884),n(23351),n(51222),n(42870),n(67321),n(73067),n(54512),n(53103),n(19648),n(42948),n(339),n(79281),n(69033),n(13978)},80488:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>o,c:()=>f,d:()=>l,f:()=>a,g:()=>d,i:()=>s});const r=[["binary","application/octet-stream","bin",""]];function a(e,t){return null!=c(t.name,e?.supportedFormats??[])}function s(e,t){if(!e)return!1;const n=d(t,e.supportedFormats??[]);return null!=n&&e.editFormats.includes(n)}function i(e,t){return p(function(e,t){const n=e.toLowerCase();return u(t).find((e=>h(e)===n))}(e,t))}function o(e,t){return p(c(e,t))}function l(e,t){return h(function(e,t){return u(t).find((t=>p(t)===e))}(e,t))}function d(e,t){return o(e.name,t)??i(e.type,t)}function u(e){return[...r,...e]}function c(e,t){const n=e.toLowerCase();return u(t).find((e=>function(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}(e).some((e=>n.endsWith(e)))))}function p(e){return e?.[0]}function h(e){return e?.[1].toLowerCase()}function f(e){return e.tables?.find((e=>"assetMaps"===e.role))}},339:(e,t,n)=>{n.d(t,{c:()=>i,g:()=>d,o:()=>o,u:()=>l});var r=n(67504),a=n(7969),s=n(77037);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:a.A.WebMercator}),minus180Line:new r.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:a.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.A({paths:[[[180,-180],[180,180]]],spatialReference:a.A.WGS84}),minus180Line:new r.A({paths:[[[-180,-180],[-180,180]]],spatialReference:a.A.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const n=d(e);for(const e of n)for(const n of e)n[0]+=t;return e}function d(e){return(0,s.Bi)(e)?e.rings:e.paths}},79281:(e,t,n)=>{n.d(t,{c:()=>d,s:()=>u}),n(94345);var r=n(64604),a=n(77037),s=n(69763),i=n(69033),o=n(99063),l=n(13978);async function d(e,t,n,o){const l=(0,i.p)(e),d=t[0].spatialReference,u={...o,responseType:"json",query:{...l.query,f:"json",sr:(0,s.Y)(d),target:JSON.stringify({geometryType:(0,a.$B)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},c=await(0,r.A)(l.path+"/cut",u),{cutIndexes:p,geometries:h=[]}=c.data;return{cutIndexes:p,geometries:h.map((e=>{const t=(0,a.rS)(e);return t.spatialReference=d,t}))}}async function u(e,t,n){const i="string"==typeof e?(0,o.An)(e):e,d=t[0].spatialReference,u=(0,a.$B)(t[0]),c={...n,query:{...i.query,f:"json",sr:(0,s.Y)(d),geometries:JSON.stringify((0,l.e)(t))}},{data:p}=await(0,r.A)(i.path+"/simplify",c);return(0,l.d)(p.geometries,u,d)}},69033:(e,t,n)=>{n.d(t,{a:()=>s,e:()=>o,p:()=>i}),n(90740),n(29512);var r=n(32773),a=n(99063);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,a.An)(e):(0,r.o8)(e)}function o(e,t,n){const r={};for(const a in e){if("declaredClass"===a)continue;const s=e[a];if(null!=s&&"function"!=typeof s)if(Array.isArray(s))r[a]=s.map((e=>o(e)));else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(n?.[a]);r[a]=t?e:JSON.stringify(e)}else r[a]=t?s:JSON.stringify(s);else r[a]=s}return r}n(64604)},13978:(e,t,n)=>{n.d(t,{d:()=>s,e:()=>a});var r=n(77037);function a(e){return{geometryType:(0,r.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function s(e,t,n){const a=(0,r.xD)(t);return e.map((e=>{const t=a.fromJSON(e);return t.spatialReference=n,t}))}},93049:(e,t,n)=>{n.d(t,{a:()=>s,b:()=>i,g:()=>a});const r="randomUUID"in crypto;function a(){if(r)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function s(){return`{${a().toUpperCase()}}`}function i(){return`{${a()}}`}},3952:(e,t,n)=>{n.d(t,{el:()=>m});var r=n(90740),a=n(6407),s=n(20266),i=n(84200),o=n(67504),l=n(339),d=n(69763),u=n(29208),c=n(79281);n(32773),n(32816),n(29298),n(36544),n(93181),n(13671),n(40499),n(69421),n(91047),n(56273),n(44600),n(2160),n(99924),n(41390),n(58498),n(45371),n(80959),n(49877),n(7969),n(93804),n(18683),n(64604),n(29512),n(99063),n(64752),n(48844),n(97827),n(91695),n(18169),n(48402),n(16699),n(26809),n(2589),n(18527),n(77037),n(36533),n(94345),n(92517),n(69033),n(13978);const p=()=>s.L.getLogger("esri.geometry.support.normalizeUtils");function h(e,t,n){if(t){const t=function(e,t){if(!(e instanceof o.A||e instanceof i.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw p().error(e),new a.A(e)}const n=(0,l.g)(e),r=[];for(const e of n){const n=[];r.push(n),n.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const a=e[r][0],s=e[r][1],i=e[r+1][0],o=e[r+1][1],l=Math.sqrt((i-a)*(i-a)+(o-s)*(o-s)),d=(o-s)/l,u=(i-a)/l,c=l/t;if(c>1){for(let e=1;e<=c-1;e++){const r=e*t,i=u*r+a,o=d*r+s;n.push([i,o])}const e=(l+Math.floor(c-1)*t)/2,r=u*e+a,i=d*e+s;n.push([r,i])}n.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.A({rings:r,spatialReference:e.spatialReference}):new o.A({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,u.ci)(t,!0)}return n&&(e=(0,l.u)(e,n)),e}function f(e,t,n){if(Array.isArray(e)){const r=e[0];if(r>t){const n=(0,l.o)(r,t);e[0]=r+n*(-2*t)}else if(r<n){const t=(0,l.o)(r,n);e[0]=r+t*(-2*n)}}else{const r=e.x;if(r>t){const n=(0,l.o)(r,t);e=e.clone().offset(n*(-2*t),0)}else if(r<n){const t=(0,l.o)(r,n);e=e.clone().offset(t*(-2*n),0)}}return e}async function m(e,t,n){if(!Array.isArray(e))return m([e],t);t&&"string"!=typeof t&&p().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const a="string"==typeof t?t:t?.url??r.A.geometryServiceUrl;let s,y,g,b,w,A,F,I,v=0;const S=[],R=[];for(const t of e)if(null!=t)if(s||(s=t.spatialReference,y=(0,d.j)(s),g=s.isWebMercator,A=g?102100:4326,b=l.c[A].maxX,w=l.c[A].minX,F=l.c[A].plus180Line,I=l.c[A].minus180Line),y)if("mesh"===t.type)R.push(t);else if("point"===t.type)R.push(f(t.clone(),b,w));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>f(e,b,w))),R.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);R.push(e.rings?new i.A(e):e)}else if(t.extent){const e=t.extent,n=(0,l.o)(e.xmin,w)*(2*b);let r=0===n?t.clone():(0,l.u)(t.clone(),n);e.offset(n,0);let{xmin:a,xmax:s}=e;a=Number(a.toFixed(9)),s=Number(s.toFixed(9)),e.intersects(F)&&s!==b?(v=s>v?s:v,r=h(r,g),S.push(r),R.push("cut")):e.intersects(I)&&a!==w?(v=s*(2*b)>v?s*(2*b):v,r=h(r,g,360),S.push(r),R.push("cut")):R.push(r)}else R.push(t.clone());else R.push(t);else R.push(t);let E=(0,l.o)(v,b),$=-90;const M=E,L=new o.A;for(;E>0;){const e=360*E-180;L.addPath([[e,$],[e,-1*$]]),$*=-1,E--}if(S.length>0&&M>0){const t=function(e,t){let n=-1;for(let r=0;r<t.cutIndexes.length;r++){const a=t.cutIndexes[r],s=t.geometries[r],i=(0,l.g)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const r=t[e][0];n=r>n?r:n}n=Number(n.toFixed(9));const r=-360*(0,l.o)(n,180);for(let n=0;n<t.length;n++){const t=s.getPoint(e,n);s.setPoint(e,n,t.clone().offset(r,0))}return!0}}))}if(a===n){if("polygon"===e[0].type)for(const t of(0,l.g)(s))e[a]=e[a].addRing(t);else if("polyline"===e[0].type)for(const t of(0,l.g)(s))e[a]=e[a].addPath(t)}else n=a,e[a]=s}return e}(S,await(0,c.c)(a,S,L,n)),r=[],s=[];for(let n=0;n<R.length;n++){const a=R[n];if("cut"!==a)s.push(a);else{const a=t.shift(),i=e[n];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&a.rings.length>=i.rings.length?(r.push(a),s.push("simplify")):s.push(g?(0,u.Gh)(a):a)}}if(!r.length)return s;const i=await(0,c.s)(a,r,n),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(g?(0,u.Gh)(i.shift()):i.shift())}return o}const O=[];for(let e=0;e<R.length;e++){const t=R[e];if("cut"!==t)O.push(t);else{const e=S.shift();O.push(!0===g?(0,u.Gh)(e):e)}}return O}}}]);