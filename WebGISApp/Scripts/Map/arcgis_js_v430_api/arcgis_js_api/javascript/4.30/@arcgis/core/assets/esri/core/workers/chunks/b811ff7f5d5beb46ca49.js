"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3101,5485,3049],{8368:(e,t,r)=>{r.d(t,{A:()=>l});var s=r(32816),o=r(20266),n=r(29298),i=(r(32773),r(69421)),a=r(1985);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.p)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.s)(e,o.L.getLogger(this)))}};return(0,s._)([(0,n.MZ)()],t.prototype,"title",null),(0,s._)([(0,n.MZ)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,i.$)("esri.layers.mixins.ArcGISService")],t),t}},33125:(e,t,r)=>{r.d(t,{f:()=>n});var s=r(64604),o=r(6407);async function n(e,t,r,n,i,a,l){let p=null;if(null!=r){const t=`${e}/nodepages/`,o=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,s.A)(o,{query:{f:"json",...n,token:i},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",o,e),p=e}}if(!t)return null;const u=t?.split("/").pop(),c=`${e}/nodes/`,d=c+u;try{return{type:"node",rootNode:(await(0,s.A)(d,{query:{f:"json",...n,token:i},responseType:"json",signal:l})).data,urlPrefix:c}}catch(e){throw new o.A("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e,url:d})}}},79697:(e,t,r)=>{r.d(t,{a:()=>n,c:()=>i});var s=r(99063),o=r(82408);function n(e,t){return{...a(e,t),readResourcePaths:[]}}function i(e,t,r){const o=(0,s.An)(e.itemUrl);return{...a(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function a(e,t){return{origin:t,url:(0,s.An)(e.itemUrl),portal:e.portal||o.A.getDefault(),portalItem:e}}},73341:(e,t,r)=>{function s(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{i:()=>s})},54203:(e,t,r)=>{r.d(t,{u:()=>o});var s=r(73341);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,s.i)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},75485:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>a,bg:()=>d,cL:()=>c,fetchResources:()=>i,removeAllResources:()=>p,removeResource:()=>l});var s=r(64604),o=r(6407),n=r(99063);async function i(e,t={},r){await e.load(r);const s=(0,n.fj)(e.itemUrl,"resources"),{start:o=1,num:i=10,sortOrder:a="asc",sortField:l="resource"}=t,p={query:{start:o,num:i,sortOrder:a,sortField:l,token:e.apiKey},signal:r?.signal},u=await e.portal.request(s,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,t,r,s){const i=new Map;for(const{resource:e,content:s,compress:n,access:a}of t){if(!e.hasPath())throw new o.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[t,l]=u(e.path),p=`${t}/${n??""}/${a??""}`;i.has(p)||i.set(p,{prefix:t,compress:n,access:a,files:[]}),i.get(p).files.push({fileName:l,content:s})}await e.load(s);const a=(0,n.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:t,compress:r,access:o,files:n}of i.values()){const i=25;for(let l=0;l<n.length;l+=i){const p=n.slice(l,l+i),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),o&&u.append("access",o);let c=0;for(const{fileName:e,content:t}of p)u.append("file"+ ++c,t,e);u.append("f","json"),await e.portal.request(a,{method:"post",body:u,signal:s?.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new o.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const s=(0,n.fj)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function p(e,t){await e.load(t);const r=(0,n.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}async function c(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,s.A)(e.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[r,,s]=function(e){const[t,r]=function(e){const t=(0,n.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,o]=u(t);return[s,o,r]}(e.path);return e.portalItem.resourceFromPath((0,n.fj)(r,t+s))}r(90740),r(32773),r(29512),r(80959),r(13671),r(20266),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(91047),r(36544),r(29298),r(58498),r(45371)},335:(e,t,r)=>{r.d(t,{s:()=>a,u:()=>l});var s=r(6407),o=r(80959),n=r(93049),i=r(75485);async function a(e,t,r){const s=await p(e,t,r);await u(s,t,r)}async function l(e,t,r,s,o){const n=await p(r,s,o);await e.update({data:t}),await u(n,s,o)}async function p(e,t,a){if(!t?.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const p=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,c=[];p.forEach((t=>{l.delete(t),e.paths.push(t)}));const d=[],h=[],y=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),p.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:s,finish:o}=r,a=(0,i.bg)(t,(0,n.g)());e.paths.push(a.path),d.push({resource:a,content:await(0,i.cL)(s),compress:r.compress}),o&&y.push((()=>o(a)))}else{e.paths.push(r.resource.path),h.push({resource:r.resource,content:await(0,i.cL)(r.content),compress:r.compress});const t=r.finish;t&&y.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,i.cL)(r.content),compress:r.compress});const e=r.finish;e&&y.push((()=>e(r.resource)))}if(d.length||h.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,75485));await e(t.portalItem,d,"add",a),await e(t.portalItem,h,"update",a)}if(y.forEach((e=>e())),0===c.length)return l;const f=await(0,o.Ol)(c);if((0,o.Te)(a),f.length>0)throw new s.A("save:resources","Failed to save one or more resources",{errors:f});return l}async function u(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await(0,o.Lx)(s)}},36915:(e,t,r)=>{r.d(t,{v:()=>i});var s=r(90740),o=r(6407),n=r(64604);function i(e){if(s.A.apiKey&&(0,n.s)(e.portal.url))throw new o.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},8410:(e,t,r)=>{r.d(t,{b:()=>o,e:()=>i});var s=r(6407);async function o(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const n=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){let o=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new s.A(e,t,r)));if(e.blockedRelativeUrls&&(o=o.concat(e.blockedRelativeUrls.map((e=>new s.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:s}=r;e&&(o=o.filter((({name:e})=>!(n.has(e)||t.includes(e))))),s&&(o=o.filter((e=>"web-document-write:property-required"!==e.name)))}if(o.length>0)throw new s.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}},93049:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>i,g:()=>o});const s="randomUUID"in crypto;function o(){if(s)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function n(){return`{${o().toUpperCase()}}`}function i(){return`{${o()}}`}},67315:(e,t,r)=>{r.d(t,{p:()=>i});var s=r(32816),o=r(29298),n=(r(32773),r(20266),r(69421));r(36544),r(93181),r(13671),r(40499),r(6407),r(90740),r(91047);const i=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,o.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,n.$)("esri.layers.mixins.APIKeyMixin")],t),t}},26024:(e,t,r)=>{r.d(t,{Xh:()=>K,w6:()=>R});var s=r(32816),o=r(64604),n=r(6407),i=r(20266),a=r(80959),l=r(99063),p=r(29298),u=(r(32773),r(49877)),c=r(69421),d=r(56273),h=r(54203),y=r(44600),f=r(32826),m=r(7969),g=r(1985),v=r(98238),w=r(33125),S=r(82408),I=r(43059),x=r(79697),_=r(335),A=r(36915),b=r(8410);r(90740),r(29512),r(99924),r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(36544),r(2160),r(69763),r(93804),r(18683),r(64752),r(48844),r(29208),r(1178),r(49755),r(30011),r(55270),r(50214),r(59192),r(78016),r(54483),r(95779),r(13262),r(346),r(16699),r(26809),r(2589),r(18527),r(94345),r(36533),r(84200),r(97827),r(91695),r(18169),r(48402),r(67504),r(92517),r(77037),r(54131),r(19869),r(64524),r(73509),r(28276),r(69277),r(70580),r(75191),r(24319),r(62092),r(89935),r(49813),r(93049),r(75485);const R=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,a.sg)((async(e,t,r)=>{switch(e){case K.SAVE:return this._save(t);case K.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return P(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const s=null==e.spatialReference?{...e,spatialReference:P(t)}:e;return y.A.fromJSON(s,r)}const s=t.store,o=P(t);return null==o||null==s?.extent||!Array.isArray(s.extent)||s.extent.some((e=>e<U))?null:new y.A({xmin:s.extent[0],ymin:s.extent[1],xmax:s.extent[2],ymax:s.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,s=null!=r.version?r.version.toString():"";return this.parseVersionString(s)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,g.t)(this.url,t.name):t.name;let s=t.name;if(!s&&this.url){const e=(0,g.p)(this.url);null!=e&&(s=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(s=r+" - "+s),(0,g.d)(s)}set url(e){if(null==e)return void this._set("url",e);const t=(0,g.e)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:i.L.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,s){(0,g.w)(this,e,"layers",t,s)}get parsedUrl(){const e=this._get("url"),t=(0,l.An)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.f)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,i.L.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new n.A("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const s=r.obb.halfSize,o=r.obb.center[2],i=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=o-i,this.fullExtent.zmax=o+i}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],s=t[3],{fullExtent:o}=this;o&&(o.zmin=r-s,o.zmax=r+s)}}async _fetchService(e){if(null==this.url)throw new n.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,o.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,o.A)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const s=t.data;this.read(s,this._getServiceContext()),this.validateLayer(s)}async _fetchVoxelServiceLayer(e){const t=(await(0,o.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const r={...E,...t};let s=I.default.from(e);if(!s)throw new n.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,A.v)(s),s.id&&(s=s.clone(),s.id=null);const o=s.portal||S.A.getDefault();await this._ensureLoadBeforeSave(),s.type=j,s.portal=o;const i=(0,x.c)(s,"portal-item",!0),a={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(a,i,r),this.url&&(s.url=this.url),s.title||(s.title=this.title),O(s,r,M.newItem),await o.signIn(),await(o.user?.addItem({item:s,folder:r?.folder,data:a})),await(0,_.s)(this.resourceReferences,i),this.portalItem=s,(0,h.u)(i),i.portalItem=s,s}async _save(e){const t={...E,...e};if(!this.portalItem)throw new n.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,A.v)(this.portalItem),this.portalItem.type!==j)throw new n.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${j}"`);await this._ensureLoadBeforeSave();const r=(0,x.c)(this.portalItem,"portal-item",!0),s={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(s,r,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),O(this.portalItem,t,M.existingItem),await(0,_.u)(this.portalItem,s,this.resourceReferences,r),(0,h.u)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const s=r?.validationOptions;(0,b.e)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:s?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]})}};return(0,s._)([(0,p.MZ)(v.i)],t.prototype,"id",void 0),(0,s._)([(0,p.MZ)({type:m.A})],t.prototype,"spatialReference",void 0),(0,s._)([(0,u.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,s._)([(0,p.MZ)({type:y.A})],t.prototype,"fullExtent",void 0),(0,s._)([(0,u.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,s._)([(0,p.MZ)({readOnly:!0,type:f.A})],t.prototype,"heightModelInfo",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,s._)([(0,p.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,s._)([(0,p.MZ)({readOnly:!0})],t.prototype,"version",void 0),(0,s._)([(0,u.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,s._)([(0,p.MZ)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,s._)([(0,p.MZ)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,s._)([(0,p.MZ)({type:String})],t.prototype,"title",void 0),(0,s._)([(0,u.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,s._)([(0,u.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,s._)([(0,p.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,s._)([(0,p.MZ)(v.u)],t.prototype,"url",null),(0,s._)([(0,d.w)("url")],t.prototype,"writeUrl",null),(0,s._)([(0,p.MZ)()],t.prototype,"parsedUrl",null),(0,s._)([(0,p.MZ)({readOnly:!0})],t.prototype,"store",void 0),(0,s._)([(0,p.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,s._)([(0,c.$)("esri.layers.mixins.SceneService")],t),t},U=-1e38;function P(e){if(null!=e.spatialReference)return m.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,s=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=s?new m.A(s):null}function O(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const s=t.getTypeKeywords();for(const t of s)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===M.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var M,N;(N=M||(M={}))[N.existingItem=0]="existingItem",N[N.newItem=1]="newItem";const j="Scene Service",E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var K;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(K||(K={}))}}]);