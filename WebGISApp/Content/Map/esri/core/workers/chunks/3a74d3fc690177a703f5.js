"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4850],{76412:(e,t,n)=>{n.d(t,{a:()=>v,b:()=>b,c:()=>y,f:()=>A,g:()=>w,j:()=>S,n:()=>F}),n(44208),n(53966);var r=n(34727),o=n(58083),i=n(38954),s=n(51850),a=n(87317),c=n(91829),l=n(34304),u=n(88582),d=n(71351),f=n(44280),p=n(32114);const h=y();function y(){return(0,c.vt)()}const g=a.e,m=a.e;function v(e,t){return(0,a.c)(t,e)}function b(e){return e[3]}function w(e){return e}function A(e,t,n,r){return(0,c.fA)(e,t,n,r)}function C(e,t,n){if(null==t)return!1;if(!T(e,t,M))return!1;let{t0:r,t1:o}=M;if((r<0||o<r&&o>0)&&(r=o),r<0)return!1;if(n){const{origin:e,direction:o}=t;n[0]=e[0]+o[0]*r,n[1]=e[1]+o[1]*r,n[2]=e[2]+o[2]*r}return!0}const M={t0:0,t1:0};function T(e,t,n){const{origin:r,direction:o}=t,i=U;i[0]=r[0]-e[0],i[1]=r[1]-e[1],i[2]=r[2]-e[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===s)return!1;const a=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),c=a*a-4*s*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-e[3]*e[3]);if(c<0)return!1;const l=Math.sqrt(c);return n.t0=(-a-l)/(2*s),n.t1=(-a+l)/(2*s),!0}const U=(0,s.vt)();function S(e,t){return C(e,t,null)}function O(e,t,n){const r=p.rq.get(),s=p.Rc.get();(0,i.b)(r,t.origin,t.direction);const a=b(e);(0,i.b)(n,r,t.origin),(0,i.j)(n,n,1/(0,i.l)(n)*a);const c=x(e,t.origin),l=(0,f.g7)(t.origin,n);return(0,o.$0)(s,l+c,r),(0,i.h)(n,n,s),n}function I(e,t,n){const r=(0,i.f)(p.rq.get(),t,e),o=(0,i.j)(p.rq.get(),r,e[3]/(0,i.l)(r));return(0,i.g)(n,o,e)}function x(e,t){const n=(0,i.f)(p.rq.get(),t,e),o=(0,i.l)(n),s=b(e),a=s+Math.abs(s-o);return(0,r.XM)(s/a)}const _=(0,s.vt)();function E(e,t,n,o){const s=(0,i.f)(_,t,e);switch(n){case u._.X:{const e=(0,r.jU)(s,_)[2];return(0,i.s)(o,-Math.sin(e),Math.cos(e),0)}case u._.Y:{const e=(0,r.jU)(s,_),t=e[1],n=e[2],a=Math.sin(t);return(0,i.s)(o,-a*Math.cos(n),-a*Math.sin(n),Math.cos(t))}case u._.Z:return(0,i.n)(o,s);default:return}}function P(e,t){const n=(0,i.f)(N,t,e);return(0,i.l)(n)-e[3]}function F(e,t){const n=(0,i.a)(e,t),r=b(e);return n<=r*r}const N=(0,s.vt)(),V=y();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:h,altitudeAt:P,angleToSilhouette:x,axisAt:E,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,n){return C(e,t,n)?n:((0,d.oC)(t,e,n),I(e,n,n))},closestPointOnSilhouette:O,containsPoint:F,copy:v,create:y,distanceToSilhouette:function(e,t){const n=(0,i.f)(p.rq.get(),t,e),r=(0,i.q)(n),o=e[3]*e[3];return Math.sqrt(Math.abs(r-o))},elevate:function(e,t,n){return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),n[3]=e[3]+t,n},equals:m,exactEquals:g,fromCenterAndRadius:function(e,t){return(0,c.fA)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:A,getCenter:w,getRadius:b,intersectLine:function(e,t,n){const r=(0,d.Cr)(t,n);if(!T(e,r,M))return[];const{origin:o,direction:a}=r,{t0:c,t1:u}=M,f=t=>{const n=(0,s.vt)();return(0,i.r)(n,o,a,t),I(e,n,n)};return Math.abs(c-u)<(0,l.FD)()?[f(c)]:[f(c),f(u)]},intersectRay:C,intersectRayClosestSilhouette:function(e,t,n){if(C(e,t,n))return n;const r=O(e,t,p.rq.get());return(0,i.g)(n,t.origin,(0,i.j)(p.rq.get(),t.direction,(0,i.p)(t.origin,r)/(0,i.l)(t.direction))),n},intersectsRay:S,projectPoint:I,setAltitudeAt:function(e,t,n,r){const o=P(e,t),s=E(e,t,u._.Z,N),a=(0,i.j)(N,s,n-o);return(0,i.g)(r,t,a)},setExtent:function(e,t,n){return e!==n&&v(e,n),n},tmpSphere:V,union:function(e,t,n=(0,c.vt)()){const r=(0,i.p)(e,t),o=e[3],s=t[3];return r+s<o?((0,a.c)(n,e),n):r+o<s?((0,a.c)(n,t),n):((0,i.o)(n,e,t,(r+s-o)/(2*r)),n[3]=(r+o+s)/2,n)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},4341:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(26390);class o{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,i));e++)this._items.push(this._allocator())}}const i=1024},65806:(e,t,n)=>{n.d(t,{g:()=>s});var r=n(51850),o=n(57251),i=n(9762);function s(e,t,n,r){if((0,o.canProjectWithoutEngine)(e.spatialReference,n)){a[0]=e.x,a[1]=e.y;const o=e.z;return a[2]=o??r??0,(0,i.projectBuffer)(a,e.spatialReference,0,t,n,0,1)}const s=(0,o.tryProjectWithZConversion)(e,n);return!!s&&(t[0]=s?.x,t[1]=s?.y,t[2]=s?.z??r??0,!0)}const a=(0,r.vt)()},71351:(e,t,n)=>{n.d(t,{Cr:()=>l,LV:()=>c,oC:()=>u,vt:()=>s}),n(4576);var r=n(4341),o=n(38954),i=n(51850);function s(e){return e?a((0,i.o8)(e.origin),(0,i.o8)(e.direction)):a((0,i.vt)(),(0,i.vt)())}function a(e,t){return{origin:e,direction:t}}function c(e,t){const n=d.get();return n.origin=e,n.direction=t,n}function l(e,t,n=s()){return(0,o.c)(n.origin,e),(0,o.f)(n.direction,t,e),n}function u(e,t,n){const r=(0,o.m)(e.direction,(0,o.f)(n,t,e.origin));return(0,o.g)(n,e.origin,(0,o.j)(n,e.direction,r)),n}n(32114);const d=new r.I((()=>s()));(0,i.vt)()},20437:(e,t,n)=>{n.d(t,{A:()=>g});var r,o=n(90237),i=n(66552),s=n(25482),a=n(10107),c=n(56507),l=(n(87811),n(44208),n(93223)),u=n(36005),d=n(40608),f=n(72088),p=n(98453);const h=new i.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let y=r=class extends s.oY{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?.value??null}readValueType(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?h.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],y.prototype,"alias",void 0),(0,o._)([(0,a.MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],y.prototype,"defaultValue",void 0),(0,o._)([(0,a.MZ)()],y.prototype,"description",void 0),(0,o._)([(0,u.w)("description")],y.prototype,"readDescription",null),(0,o._)([(0,a.MZ)({types:f.gK,json:{read:{reader:f.rS},write:!0}})],y.prototype,"domain",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"editable",void 0),(0,o._)([(0,a.MZ)({type:c.jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],y.prototype,"length",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],y.prototype,"nullable",void 0),(0,o._)([(0,l.e)(p.m)],y.prototype,"type",void 0),(0,o._)([(0,a.MZ)()],y.prototype,"valueType",void 0),(0,o._)([(0,u.w)("valueType",["description"])],y.prototype,"readValueType",null),(0,o._)([(0,a.MZ)({type:Boolean,json:{read:!1}})],y.prototype,"visible",void 0),y=r=(0,o._)([(0,d.$)("esri.layers.support.Field")],y);const g=y},72088:(e,t,n)=>{n.d(t,{rS:()=>T,gK:()=>M}),n(44208);var r,o=n(90237),i=n(4718),s=n(10107),a=(n(53966),n(93223)),c=n(40608),l=n(25482);n(87811);let u=r=class extends l.oY{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};(0,o._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"name",void 0),(0,o._)([(0,s.MZ)({type:[String,Number],json:{write:!0}})],u.prototype,"code",void 0),u=r=(0,o._)([(0,c.$)("esri.layers.support.CodedValue")],u);const d=new(n(66552).J)({inherited:"inherited",codedValue:"coded-value",range:"range"});let f=class extends l.oY{constructor(e){super(e),this.name=null,this.type=null}};(0,o._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,o._)([(0,a.e)(d)],f.prototype,"type",void 0),f=(0,o._)([(0,c.$)("esri.layers.support.Domain")],f);const p=f;var h;let y=h=class extends p{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new h({codedValues:(0,i.o8)(this.codedValues),name:this.name})}};(0,o._)([(0,s.MZ)({type:[u],json:{write:!0}})],y.prototype,"codedValues",void 0),(0,o._)([(0,a.e)({codedValue:"coded-value"})],y.prototype,"type",void 0),y=h=(0,o._)([(0,c.$)("esri.layers.support.CodedValueDomain")],y);const g=y;var m;n(49186);let v=m=class extends p{constructor(e){super(e),this.type="inherited"}clone(){return new m}};(0,o._)([(0,a.e)({inherited:"inherited"})],v.prototype,"type",void 0),v=m=(0,o._)([(0,c.$)("esri.layers.support.InheritedDomain")],v);const b=v;var w;let A=w=class extends p{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new w({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,o._)([(0,s.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],A.prototype,"maxValue",void 0),(0,o._)([(0,s.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],A.prototype,"minValue",void 0),(0,o._)([(0,a.e)({range:"range"})],A.prototype,"type",void 0),A=w=(0,o._)([(0,c.$)("esri.layers.support.RangeDomain")],A);const C=A,M={key:"type",base:p,typeMap:{range:A,"coded-value":g,inherited:b}};function T(e){if(!e?.type)return null;switch(e.type){case"range":return C.fromJSON(e);case"codedValue":return g.fromJSON(e);case"inherited":return b.fromJSON(e)}return null}},98453:(e,t,n)=>{n.d(t,{m:()=>r});const r=new(n(66552).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},46851:(e,t,n)=>{n.d(t,{MA:()=>f,m0:()=>m,wH:()=>y});var r=n(49186),o=n(4718),i=n(53966),s=n(37203),a=n(46540);const c=()=>i.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function l(e,t,n){let o="",i=0;for(;i<n;){const s=e[t+i];if(s<128)o+=String.fromCharCode(s),i++;else if(s>=192&&s<224){if(i+1>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&s)<<6|63&e[t+i+1];o+=String.fromCharCode(a),i+=2}else if(s>=224&&s<240){if(i+2>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&s)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(s>=240&&s<248))throw new r.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&s)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function u(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],s=i.valueType||i.type,a=b[s];n.fields[i.property]=a(e,r),r+=v[s].BYTES_PER_ELEMENT}return n.byteCount=r,n}function d(e,t,n){const o=[];let i,s,a=0;for(s=0;s<e;s+=1){if(i=t[s],i>0){if(o.push(l(n,a,i-1)),0!==n[a+i-1])throw new r.A("string-array-error","Invalid string array: missing null termination.")}else o.push(null);a+=i}return o}function f(e,t){return new(0,v[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function p(e,t,n){const i=null!=t.header?u(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},s={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let e=0;e<t.ordering.length;e++){const n=t.ordering[e],c=(0,o.o8)(t[n]);if(c.count=i.fields.count??0,"String"===c.valueType){if(c.byteOffset=a,c.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==c.encoding)throw new r.A("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding});if(c.timeEncoding&&"ECMA_ISO8601"!==c.timeEncoding)throw new r.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:c.timeEncoding})}else{if(!w(c.valueType))throw new r.A("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const e=A(c.valueType);a+=a%e!=0?e-a%e:0,c.byteOffset=a,c.byteCount=e*c.valuesPerElement*c.count}}a+=c.byteCount??0,s.entries[n]=c}return s.byteCount=a-s.byteOffset,s}function h(e,t,n){if(t!==e&&c().error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new r.A("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function y(e,t){const n=u(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,s=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const n={...t.vertexAttributes[e],byteOffset:r,count:s},i=g[e]||"_"+e;o.vertexAttributes[i]=n,r+=A(n.valueType)*n.valuesPerElement*s}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:a};o.faces[e]=n,r+=A(n.valueType)*n.valuesPerElement*a}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:A(n.valueType))*n.valuesPerElement*c}}return h(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const g={position:a.r.POSITION,normal:a.r.NORMAL,color:a.r.COLOR,uv0:a.r.UV0,region:a.r.UVREGION};function m(e,t,n){if("lepcc-rgb"===e.encoding)return(0,s.mb)(t);if("lepcc-intensity"===e.encoding)return(0,s.Ax)(t);if(null!=e.encoding&&""!==e.encoding)throw new r.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(c().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(c().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const o=p(t,e,n);h(o.byteOffset+o.byteCount,t.byteLength,"attribute");const i=o.entries.attributeValues||o.entries.objectIds;if(i){if("String"===i.valueType){const e=o.entries.attributeByteCounts,n=f(t,e),r=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,n){return d(e,t,n).map((e=>{const t=e?Date.parse(e):null;return null==t||Number.isNaN(t)?null:t}))}(e.count,n,r):d(e.count,n,r)}return f(t,i)}throw new r.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const v={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},b={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function w(e){return v.hasOwnProperty(e)}function A(e){return w(e)?v[e].BYTES_PER_ELEMENT:0}},28030:(e,t,n)=>{n.d(t,{Q7:()=>U,s1:()=>A}),n(59456);var r=n(78888),o=(n(4576),n(49186),n(44208),n(34275)),i=(n(58083),n(9093)),s=(n(38954),n(51850)),a=(n(57251),n(98764),n(16930));n(65806),a.A.WGS84;var c=n(19419),l=(n(76412),n(61956),n(46851));n(73941),n(48353),n(68197);var u,d=n(91829);!function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.TRANSPARENT=1]="TRANSPARENT",e[e.OPAQUE=2]="OPAQUE"}(u||(u={})),n(21818),n(34727);const f=[1/256,1/65536,1/16777216,1/4294967296];!function(e,t=0){let n=0;for(let r=0;r<4;r++)n+=e[t+r]*f[r]}(new Uint8ClampedArray([255,255,255,255])),n(42583),n(49255),n(26835);var p,h,y,g,m=n(39589);n(46263),m.n,m.n,n(2597),n(15976),n(46540),(h=p||(p={}))[h.Uniform=0]="Uniform",h[h.Varying=1]="Varying",h[h.COUNT=2]="COUNT",n(96336),n(26425),n(40710),n(33079),n(20304),n(98353),n(35644),n(40095),function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"}(y||(y={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(g||(g={}));(0,d.fA)(0,0,0,.2),u.OPAQUE;(0,d.fA)(0,0,0,.2),u.OPAQUE,n(66104);var v,b,w=n(57005);async function A(e,t,n,o,i,s,a,c){const u=[];for(const r of t)if(r&&i.includes(r.name)){const t=`${e}/nodes/${n}/attributes/${r.key}/0`;u.push({url:t,storageInfo:r})}const d=await Promise.allSettled(u.map((e=>(0,r.A)(e.url,{responseType:"array-buffer",query:{...a,token:s},signal:c?.signal}).then((t=>(0,l.m0)(e.storageInfo,t.data)))))),f=[];for(const e of o){const t={};for(let n=0;n<d.length;n++){const r=d[n];if("fulfilled"===r.status){const o=r.value;t[u[n].storageInfo.name]=T(o,e)}}f.push(t)}return f}(0,c.vt)(),(b=v||(v={}))[b.OUTSIDE=0]="OUTSIDE",b[b.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",b[b.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",b[b.INSIDE=3]="INSIDE";const C=-32768,M=-(2**31);function T(e,t){if(!e)return null;const n=e[t];return(0,o.IY)(e)?n===C?null:n:(0,o._G)(e)?n===M?null:n:n!=n?null:n}function U(e){null!=e&&(e[3]=-1)}!function(e){y.Solid}({color:[0,0,0,0],opacity:0}),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,c.vt)(),(0,c.vt)(),new w.ab,(0,s.vt)(),new Array(72),(0,i.vt)()},37203:(e,t,n)=>{n.d(t,{Ax:()=>m,Me:()=>l,mb:()=>h});var r=n(49186);const o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function s(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,o),checksum:t.getUint32(n+i.checksumOffset,o)}}const a={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function c(e,t){return{sizeLo:e.getUint32(t+a.sizeLo,o),sizeHi:e.getUint32(t+a.sizeHi,o),minX:e.getFloat64(t+a.minX,o),minY:e.getFloat64(t+a.minY,o),minZ:e.getFloat64(t+a.minZ,o),maxX:e.getFloat64(t+a.maxX,o),maxY:e.getFloat64(t+a.maxY,o),maxZ:e.getFloat64(t+a.maxZ,o),errorX:e.getFloat64(t+a.errorX,o),errorY:e.getFloat64(t+a.errorY,o),errorZ:e.getFloat64(t+a.errorZ,o),count:e.getUint32(t+a.count,o),reserved:e.getUint32(t+a.reserved,o)}}function l(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:l}=s(e,t,n);if(n+=i.byteCount,"LEPCC     "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(l>1)throw new r.A("lepcc-decode-error","Unknown version");const d=c(t,n);if(n+=a.byteCount,d.sizeHi*2**32+d.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const f=new Float64Array(3*d.count),p=[],h=[],y=[],g=[];if(n=u(e,n,p),n=u(e,n,h),n=u(e,n,y),n=u(e,n,g),n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad length");let m=0,v=0;for(let e=0;e<p.length;e++){v+=p[e];let t=0;for(let n=0;n<h[e];n++){t+=y[m];const e=g[m];f[3*m]=Math.min(d.maxX,d.minX+2*d.errorX*t),f[3*m+1]=Math.min(d.maxY,d.minY+2*d.errorY*v),f[3*m+2]=Math.min(d.maxZ,d.minZ+2*d.errorZ*e),m++}}return{errorX:d.errorX,errorY:d.errorY,errorZ:d.errorZ,result:f}}function u(e,t,n){const r=[];t=d(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=d(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function d(e,t,n){const i=new DataView(e,t),s=i.getUint8(0),a=31&s,c=!!(32&s),l=(192&s)>>6;let u=0;if(0===l)u=i.getUint32(1,o),t+=5;else if(1===l)u=i.getUint16(1,o),t+=3;else{if(2!==l)throw new r.A("lepcc-decode-error","Bad count type");u=i.getUint8(1),t+=2}if(c)throw new r.A("lepcc-decode-error","LUT not implemented");const d=Math.ceil(u*a/8),f=new Uint8Array(e,t,d);let p=0,h=0,y=0;const g=-1>>>32-a;for(let e=0;e<u;e++){for(;h<a;)p|=f[y]<<h,h+=8,y+=1;n[e]=p&g,p>>>=a,h-=a,h+a>32&&(p|=f[y-1]>>8-h)}return t+y}const f={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function p(e,t){return{sizeLo:e.getUint32(t+f.sizeLo,o),sizeHi:e.getUint32(t+f.sizeHi,o),count:e.getUint32(t+f.count,o),colorMapCount:e.getUint16(t+f.colorMapCount,o),lookupMethod:e.getUint8(t+f.lookupMethod),compressionMethod:e.getUint8(t+f.compressionMethod)}}function h(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:a}=s(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(a>1)throw new r.A("lepcc-decode-error","Unknown version");const c=p(t,n);if(n+=f.byteCount,c.sizeHi*2**32+c.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");if((2===c.lookupMethod||1===c.lookupMethod)&&0===c.compressionMethod){if(3*c.colorMapCount+c.count+n!==e.byteLength||c.colorMapCount>256)throw new r.A("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*c.colorMapCount),o=new Uint8Array(e,n+3*c.colorMapCount,c.count),i=new Uint8Array(3*c.count);for(let e=0;e<c.count;e++){const n=o[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===c.lookupMethod&&0===c.compressionMethod){if(3*c.count+n!==e.byteLength||0!==c.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(c.lookupMethod<=2&&1===c.compressionMethod){if(n+3!==e.byteLength||1!==c.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");const o=t.getUint8(n),i=t.getUint8(n+1),s=t.getUint8(n+2),a=new Uint8Array(3*c.count);for(let e=0;e<c.count;e++)a[3*e]=o,a[3*e+1]=i,a[3*e+2]=s;return a}throw new r.A("lepcc-decode-error","Bad method "+c.lookupMethod+","+c.compressionMethod)}const y={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function g(e,t){return{sizeLo:e.getUint32(t+y.sizeLo,o),sizeHi:e.getUint32(t+y.sizeHi,o),count:e.getUint32(t+y.count,o),scaleFactor:e.getUint16(t+y.scaleFactor,o),bitsPerPoint:e.getUint8(t+y.bitsPerPoint),reserved:e.getUint8(t+y.reserved)}}function m(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:a}=s(e,t,n);if(n+=i.byteCount,"Intensity "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(a>1)throw new r.A("lepcc-decode-error","Unknown version");const c=g(t,n);if(n+=y.byteCount,c.sizeHi*2**32+c.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const l=new Uint16Array(c.count);if(8===c.bitsPerPoint){if(c.count+n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,c.count);for(let e=0;e<c.count;e++)l[e]=t[e]*c.scaleFactor}else if(16===c.bitsPerPoint){if(2*c.count+n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,c.count);for(let e=0;e<c.count;e++)l[e]=t[e]*c.scaleFactor}else{const t=[];if(d(e,n,t)!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");for(let e=0;e<c.count;e++)l[e]=t[e]*c.scaleFactor}return l}},66104:(e,t,n)=>{var r,o;n.d(t,{k5:()=>r}),n(34727),(o=r||(r={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},42583:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(66104),o=n(2597);function i(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(r.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(r.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(r.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(r.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},49255:(e,t,n)=>{var r;function o(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function i(e){return function(e){return function(e){return a(e)||s(e)}(e)||c(e)}(e)||e===r.Normal}function s(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function a(e){return e===r.Color}function c(e){return e===r.Depth}n.d(t,{PJ:()=>o,V:()=>r,XY:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.ViewshedShadow=6]="ViewshedShadow",e[e.Highlight=7]="Highlight",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(r||(r={}))},96336:(e,t,n)=>{n.d(t,{W:()=>r,Y:()=>c});var r,o,i=n(21818),s=n(2597),a=n(46540);function c(e,t){switch(t.normalType){case r.Compressed:e.attributes.add(a.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(s.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(a.r.NORMAL,"vec3"),e.vertex.code.add(s.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(s.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Xb)(t.normalType);case r.COUNT:case r.Ground:}}(o=r||(r={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"},26425:(e,t,n)=>{n.d(t,{u:()=>o});var r=n(2597);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(r.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(r.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},26835:(e,t,n)=>{n(2597)},40710:(e,t,n)=>{n.d(t,{W:()=>i});var r=n(39589),o=n(46263);class i extends r.n{constructor(e,t){super(e,"vec3",o.c.Draw,((n,r,o,i)=>n.setUniform3fv(e,t(r,o,i))))}}},33079:(e,t,n)=>{n.d(t,{t:()=>i});var r=n(39589),o=n(46263);class i extends r.n{constructor(e,t){super(e,"vec3",o.c.Pass,((n,r,o)=>n.setUniform3fv(e,t(r,o))))}}},20304:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(39589),o=n(46263);class i extends r.n{constructor(e,t){super(e,"float",o.c.Pass,((n,r,o)=>n.setUniform1f(e,t(r,o))))}}},98353:(e,t,n)=>{n.d(t,{h:()=>i});var r=n(39589),o=n(46263);class i extends r.n{constructor(e,t){super(e,"mat3",o.c.Draw,((n,r,o)=>n.setUniformMatrix3fv(e,t(r,o))))}}},35644:(e,t,n)=>{n.d(t,{k:()=>i});var r=n(39589),o=n(46263);class i extends r.n{constructor(e,t){super(e,"mat3",o.c.Pass,((n,r,o)=>n.setUniformMatrix3fv(e,t(r,o))))}}},40095:(e,t,n)=>{n.d(t,{X:()=>i});var r=n(39589),o=n(46263);class i extends r.n{constructor(e,t){super(e,"mat4",o.c.Pass,((n,r,o)=>n.setUniformMatrix4fv(e,t(r,o))))}}},15976:(e,t,n)=>{n.d(t,{o:()=>i});var r=n(39589),o=n(46263);class i extends r.n{constructor(e,t){super(e,"sampler2D",o.c.Draw,((n,r,o)=>n.bindTexture(e,t(r,o))))}}},39589:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(46263);class o{constructor(e,t,n,o,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={[r.c.Pass]:null,[r.c.Draw]:null},o)switch(n){case r.c.Pass:this.bind[r.c.Pass]=o;break;case r.c.Draw:this.bind[r.c.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},2597:(e,t,n)=>{n.d(t,{H:()=>o,Y:()=>r});const r=class{};function o(e,...t){let n="";for(let r=0;r<t.length;r++)n+=e[r]+t[r];return n+=e[e.length-1],n}var i;(i=o||(o={})).int=function(e){return Math.round(e).toString()},i.float=function(e){return e.toPrecision(8)}},46263:(e,t,n)=>{var r;n.d(t,{c:()=>r}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(r||(r={}))}}]);