"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9186],{71903:(e,t,i)=>{var l;i.d(t,{u:()=>l}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(l||(l={}))},89186:(e,t,i)=>{i.d(t,{f:()=>p});var l=i(90237),s=(i(59456),i(10107)),o=(i(44208),i(53966),i(87811),i(36005)),n=i(40608),r=i(87045),a=i(65509),c=i(25943),h=i(16930);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){const l=t.capabilities?.includes("Tilemap");let{minLOD:s,maxLOD:o,minScale:n,maxScale:h}=t;if(null==s&&null==o&&0!==n&&0!==h){const e=e=>Math.round(1e4*e)/1e4;n=e(n||t.tileInfo.lods[0].scale),h=e(h||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);s=t>=n?i.level:s,o=t>=h?i.level:o}}if(l)return new c.d({layer:this,minLOD:s,maxLOD:o});if(t.tileInfo){const e=new r.A;return e.read(t.tileInfo,i),new a.A(e,s,o)}return null}};return(0,l._)([(0,s.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,s.MZ)()],t.prototype,"minScale",void 0),(0,l._)([(0,o.w)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,s.MZ)()],t.prototype,"maxScale",void 0),(0,l._)([(0,o.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,s.MZ)({type:h.A})],t.prototype,"spatialReference",void 0),(0,l._)([(0,s.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,s.MZ)({type:r.A})],t.prototype,"tileInfo",void 0),(0,l._)([(0,s.MZ)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,o.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,s.MZ)()],t.prototype,"version",void 0),t=(0,l._)([(0,n.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},91806:(e,t,i)=>{i.d(t,{A:()=>h});var l,s=i(90237),o=i(25482),n=i(10107),r=i(56507),a=(i(87811),i(44208),i(40608));let c=l=class extends o.oY{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new l({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,s._)([(0,n.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"cols",void 0),(0,s._)([(0,n.MZ)({type:r.jz,json:{write:!0}})],c.prototype,"level",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),(0,s._)([(0,n.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"origin",void 0),(0,s._)([(0,n.MZ)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),(0,s._)([(0,n.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"rows",void 0),(0,s._)([(0,n.MZ)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=l=(0,s._)([(0,a.$)("esri.layers.support.LOD")],c);const h=c},87045:(e,t,i)=>{i.d(t,{A:()=>M});var l,s=i(90237),o=i(66552),n=i(25482),r=i(83047),a=i(10107),c=i(56507),h=(i(87811),i(44208),i(36005)),p=i(40608),u=i(43937),f=i(86738),d=i(16930),v=i(19419),m=i(21325),w=i(28735),y=i(91806),g=i(72802);const _=new o.J({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let A=l=class extends n.oY{static create(e={}){const{resolutionFactor:t=1,scales:i,size:s=256,spatialReference:o=d.A.WebMercator,numLODs:n=24}=e;if(!(0,m.fn)(o)){const e=[];if(i)for(let t=0;t<i.length;t++){const l=i[t];e.push(new y.A({level:t,scale:l,resolution:l}))}else{let t=5e-4;for(let i=n-1;i>=0;i--)e.unshift(new y.A({level:i,scale:t,resolution:t})),t*=2}return new l({dpi:96,lods:e,origin:new f.A(0,0,o),size:[s,s],spatialReference:o})}const a=(0,m.Vp)(o),c=e.origin?new f.A({x:e.origin.x,y:e.origin.y,spatialReference:o}):new f.A(a?{x:a.origin[0],y:a.origin[1],spatialReference:o}:{x:0,y:0,spatialReference:o}),h=1/(39.37*(0,r.GA)(o)*96),p=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],l=t*h;p.push(new y.A({level:e,scale:t,resolution:l}))}else{let e=(0,m.EA)(o)?512/s*591657527.5917094:256/s*591657527.591555;const i=Math.ceil(n/t);p.push(new y.A({level:0,scale:e,resolution:e*h}));for(let l=1;l<i;l++){const i=e/2**t,s=i*h;p.push(new y.A({level:l,scale:i,resolution:s})),e=i}}return new l({dpi:96,lods:p,origin:c,size:[s,s],spatialReference:o})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=(0,m.Vp)(e);return e.isWrappable&&!!i&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return f.A.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const l=[],s=this._levelToLOD={};e&&(t=-1/0,i=1/0,e.forEach((e=>{l.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,s[e.level]=e}))),this._set("scales",l),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const i=Math.floor(e),l=i+1;return t[i]/(t[i]/t[l])**(e-i)}scaleToZoom(e){const t=this.scales,i=t.length-1;let l=0;for(;l<i;l++){const i=t[l],s=t[l+1];if(i<=e)return l;if(s===e)return l+1;if(i>e&&s<e)return l+Math.log(i/e)/Math.log(i/s)}return l}tileAt(e,t,i,l){const s=this.lodAt(e);if(!s)return null;let o,n;if("number"==typeof t)o=t,n=i;else if((0,m.aI)(t.spatialReference,this.spatialReference))o=t.x,n=t.y,l=i;else{const e=(0,w.Cv)(t,this.spatialReference);if(null==e)return null;o=e.x,n=e.y,l=i}const r=s.resolution*this.size[0],a=s.resolution*this.size[1];return l||(l=new g.U(null,0,0,0,(0,v.vt)())),l.level=e,l.row=Math.floor((this.origin.y-n)/a+.001),l.col=Math.floor((o-this.origin.x)/r+.001),this.updateTileInfo(l),l}updateTileInfo(e,t=l.ExtrapolateOptions.NONE){let i=this.lodAt(e.level);if(!i&&t===l.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const s=e.level-i.level,o=i.resolution*this.size[0]/2**s,n=i.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,v.vt)()),e.extent[0]=this.origin.x+e.col*o,e.extent[1]=this.origin.y-(e.row+1)*n,e.extent[2]=e.extent[0]+o,e.extent[3]=e.extent[1]+n}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const i=this.lodAt(t.level);if(null==i)return null;const{resolution:l}=i,s=l*this.size[0],o=l*this.size[1];return e[0]=this.origin.x+t.col*s,e[1]=this.origin.y-(t.row+1)*o,e[2]=e[0]+s,e[3]=e[1]+o,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return l.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||256===this.size[0]&&512===e)return null;const t=(512===this.size[0]&&256===e?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&0===t)return this;const i=[],s=this.lods.length-t;for(let e=0;e<s;e++){const l=e+t,{scale:s,resolution:o}=l>=0?this.lods[l]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};i.push(new y.A({level:e,scale:s,resolution:o}))}return new l({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:i})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const l=e[i];this._upsampleLevels[l.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/l.resolution:0},t=l}}};var b,O;(0,s._)([(0,a.MZ)({type:Number,json:{write:!0}})],A.prototype,"compressionQuality",void 0),(0,s._)([(0,a.MZ)({type:Number,json:{write:!0}})],A.prototype,"dpi",void 0),(0,s._)([(0,a.MZ)({type:String,json:{read:_.read,write:_.write,origins:{"web-scene":{read:!1,write:!1}}}})],A.prototype,"format",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],A.prototype,"isWrappable",null),(0,s._)([(0,a.MZ)({type:f.A,json:{write:!0}})],A.prototype,"origin",void 0),(0,s._)([(0,h.w)("origin")],A.prototype,"readOrigin",null),(0,s._)([(0,a.MZ)({type:[y.A],value:null,json:{write:!0}})],A.prototype,"lods",null),(0,s._)([(0,a.MZ)({readOnly:!0})],A.prototype,"scales",void 0),(0,s._)([(0,a.MZ)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],A.prototype,"size",void 0),(0,s._)([(0,h.w)("size",["rows","cols"])],A.prototype,"readSize",null),(0,s._)([(0,u.K)("size",{cols:{type:c.jz},rows:{type:c.jz}})],A.prototype,"writeSize",null),(0,s._)([(0,a.MZ)({type:d.A,json:{write:!0}})],A.prototype,"spatialReference",void 0),A=l=(0,s._)([(0,p.$)("esri.layers.support.TileInfo")],A),(O=(b=A||(A={})).ExtrapolateOptions||(b.ExtrapolateOptions={}))[O.NONE=0]="NONE",O[O.POWER_OF_TWO=1]="POWER_OF_TWO";const M=A},65509:(e,t,i)=>{i.d(t,{A:()=>o});var l=i(49186),s=i(74887);class o{constructor(e,t=0,i=e.lods[e.lods.length-1].level){this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){const l=this.tileInfo?.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,o){await(0,s.NO)(o);const n=this.getAvailability(e,t,i);if("unavailable"===n)throw new l.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return n}async fetchAvailabilityUpsample(e,t,i,l,o){await(0,s.NO)(o),l.level=e,l.row=t,l.col=i;const n=this.tileInfo;return n.updateTileInfo(l),this.fetchAvailability(e,t,i,o).catch((e=>{if((0,s.zf)(e))throw e;if(n.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,o);throw e}))}}},72802:(e,t,i)=>{i.d(t,{U:()=>l});class l{constructor(e,t,i,l,s=void 0){this.id=e,this.level=t,this.row=i,this.col=l,this.extent=s}}},25943:(e,t,i)=>{i.d(t,{d:()=>O});var l,s=i(90237),o=i(78888),n=i(69622),r=i(71903),a=i(49186),c=i(36563),h=(i(44208),i(55359)),p=i(3694),u=i(74887),f=i(36708),d=i(11932),v=i(84952),m=i(10107),w=(i(53966),i(87811),i(40608)),y=i(72802),g=i(4718),_=i(34275);class A{constructor(e){!function(e){if(!e?.location)throw new a.A("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new a.A("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new a.A("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new a.A("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new a.A("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}(e);const{location:t,data:i}=e;this.location=Object.freeze((0,g.o8)(t));const l=this.location.width,s=this.location.height;let o=!0,n=!0;const r=function(e,t=!1){return e<=_.y9?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(l*s/32));let c=0;for(let e=0;e<i.length;e++){const t=e%32;i[e]?(n=!1,r[c]|=1<<t):o=!1,31===t&&++c}n?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=r,this.byteSize=40+(0,_.Ek)(r))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%32,s=i>>5,o=this._availability;return s<0||s>o.length?"unknown":o[s]&1<<l?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||o.A,{row:l,col:s,width:n,height:r}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(422===e?.details?.httpStatus)return{location:{top:l,left:s,width:n,height:r},valid:!0,data:new Array(n*r).fill(0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==s||e.location.width!==n||e.location.height!==r))throw new a.A("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:s,width:n,height:r}});return A.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new A(e))}}function b(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let O=l=class extends n.A{constructor(e){super(e),this._pendingTilemapRequests={},this.request=o.A,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new h.q(2*r.u.MEGABYTES),this.addHandles((0,f.wB)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),f.Vh))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new a.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this._fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof A){const s=l.getAvailability(t,i);if("unavailable"===s)throw new a.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}if((0,u.zf)(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,l,s){l.level=e,l.row=t,l.col=i;const o=this.layer.tileInfo;o.updateTileInfo(l);const n=this.fetchAvailability(e,t,i,s).catch((e=>{if((0,u.zf)(e))throw e;if(o.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,s);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,s,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,s,o,n){if(!this._prefetchingEnabled||null==e)return;const r=`prefetch-${e}`;if(this.hasHandles(r))return;const a=new AbortController;n.then((()=>a.abort()),(()=>a.abort()));let h=!1;const p=(0,c.hA)((()=>{h||(h=!0,a.abort())}));if(this.addHandles(p,r),await(0,d.md)(10,a.signal).catch((()=>{})),h||(h=!0,this.removeHandles(r)),(0,u.G4)(a))return;const f=new y.U(e,t,i,s),v={...o,signal:a.signal},m=this.layer.tileInfo;for(let e=0;l._prefetches.length<l._maxPrefetch&&m.upsampleTile(f);++e){const e=this.fetchAvailability(f.level,f.row,f.col,v);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_fetchTilemap(e,t,i,l){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new a.A("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,i,s);if(o)return Promise.resolve(o);const n=l?.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,u.u7)(n,(()=>t((0,u.NK)())));const i=b(s);let o=this._pendingTilemapRequests[i];if(!o){o=A.fromDefinition(s,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=o,o.then(e,e)}o.then(e,t)}))}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,v.x0)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const s=b(l);return this._tilemapCache.get(s)}get test(){}};O._maxPrefetch=4,O._prefetches=new p.A({initialSize:l._maxPrefetch}),(0,s._)([(0,m.MZ)({constructOnly:!0})],O.prototype,"layer",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],O.prototype,"minLOD",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],O.prototype,"maxLOD",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],O.prototype,"request",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],O.prototype,"size",void 0),O=l=(0,s._)([(0,w.$)("esri.layers.support.TilemapCache")],O)}}]);