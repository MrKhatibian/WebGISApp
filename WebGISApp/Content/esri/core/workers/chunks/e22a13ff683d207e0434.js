"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[893],{51624:(e,t,s)=>{s.d(t,{A:()=>c});var n,r,i=s(44208),a=s(93687);(r=n||(n={}))[r.varint=0]="varint",r[r.fixed64=1]="fixed64",r[r.delimited=2]="delimited",r[r.fixed32=5]="fixed32",r[r.unknown=99]="unknown";const o=4294967296,u=new TextDecoder("utf-8"),l=(0,i.A)("safari")||(0,i.A)("ios")?6:(0,i.A)("ff")?12:32;class c{constructor(e,t,s=0,r=(e?e.byteLength:0)){this._tag=0,this._dataType=n.unknown,this._init(e,t,s,r)}_init(e,t,s,n){this._data=e,this._dataView=t,this._pos=s,this._end=n}asUnsafe(){return this}clone(){return new c(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;if(e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128)return e;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getUint32(t+4,!0)*o;return this._skip(8),s}getSFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getInt32(t+4,!0)*o;return this._skip(8),s}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,s=this._toString(this._data,t,t+e);return this._skip(e),s}getBytes(){const e=this._getLength(),t=this._pos,s=this._toBytes(this._data,t,t+e);return this._skip(e),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,s,n){const r=this.getMessage(),i=e(r,t,s,n);return r.release(),i}processMessage(e){const t=this.getMessage(),s=e(t);return t.release(),s}getMessage(){const e=this._getLength(),t=c.pool.acquire();return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){c.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case n.varint:this._decodeVarint();break;case n.fixed64:this._skip(8);break;case n.delimited:this._skip(this._getLength());break;case n.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t=this._pos,s=0,n=0;if(this._end-t>=10)do{if(n=e[t++],s|=127&n,!(128&n))break;if(n=e[t++],s|=(127&n)<<7,!(128&n))break;if(n=e[t++],s|=(127&n)<<14,!(128&n))break;if(n=e[t++],s|=(127&n)<<21,!(128&n))break;if(n=e[t++],s+=268435456*(127&n),!(128&n))break;if(n=e[t++],s+=34359738368*(127&n),!(128&n))break;if(n=e[t++],s+=4398046511104*(127&n),!(128&n))break;if(n=e[t++],s+=562949953421312*(127&n),!(128&n))break;if(n=e[t++],s+=72057594037927940*(127&n),!(128&n))break;if(n=e[t++],s+=0x8000000000000000*(127&n),!(128&n))break;throw new Error("Varint too long!")}while(0);else{let r=1;for(;t!==this._end&&(n=e[t],128&n);)++t,s+=(127&n)*r,r*=128;if(t===this._end)throw new Error("Varint overrun!");++t,s+=n*r}return this._pos=t,s}_decodeSVarint(){const e=this._data;let t,s=0,n=0;const r=1&e[this._pos];if(n=e[this._pos++],s|=127&n,!(128&n))return r?-(s+1)/2:s/2;if(n=e[this._pos++],s|=(127&n)<<7,!(128&n))return r?-(s+1)/2:s/2;if(n=e[this._pos++],s|=(127&n)<<14,!(128&n))return r?-(s+1)/2:s/2;if(n=e[this._pos++],s|=(127&n)<<21,!(128&n))return r?-(s+1)/2:s/2;if(n=e[this._pos++],s+=268435456*(127&n),!(128&n))return r?-(s+1)/2:s/2;if(n=e[this._pos++],s+=34359738368*(127&n),!(128&n))return r?-(s+1)/2:s/2;if(n=e[this._pos++],s+=4398046511104*(127&n),!(128&n))return r?-(s+1)/2:s/2;if(t=BigInt(s),n=e[this._pos++],t+=0x2000000000000n*BigInt(127&n),!(128&n))return Number(r?-(t+1n)/2n:t/2n);if(n=e[this._pos++],t+=0x100000000000000n*BigInt(127&n),!(128&n))return Number(r?-(t+1n)/2n:t/2n);if(n=e[this._pos++],t+=0x8000000000000000n*BigInt(127&n),!(128&n))return Number(r?-(t+1n)/2n:t/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==n.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,s){if((s=Math.min(this._end,s))-t>l){const n=e.subarray(t,s);return u.decode(n)}let n="",r="";for(let i=t;i<s;++i){const t=e[i];128&t?r+="%"+t.toString(16):(n+=decodeURIComponent(r)+String.fromCharCode(t),r="")}return r.length&&(n+=decodeURIComponent(r)),n}_toBytes(e,t,s){return s=Math.min(this._end,s),new Uint8Array(e.buffer,t,s-t)}}c.pool=new a.A(c,void 0,(e=>{e._data=null,e._dataView=null}))},17136:(e,t,s)=>{s.d(t,{el:()=>w});var n=s(92602),r=s(49186),i=s(53966),a=s(39829),o=s(82799),u=s(80754),l=s(21325),c=s(28735),p=(s(59456),s(78888)),f=s(65864),d=s(2272),h=s(84952),g=s(92300);const y=()=>i.A.getLogger("esri.geometry.support.normalizeUtils");function m(e){return"polygon"===e[0].type}function _(e){return"polyline"===e[0].type}function k(e,t,s){if(t){const t=function(e,t){if(!(e instanceof o.A||e instanceof a.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw y().error(e),new r.A(e)}const s=(0,u.r8)(e),n=[];for(const e of s){const s=[];n.push(s),s.push([e[0][0],e[0][1]]);for(let n=0;n<e.length-1;n++){const r=e[n][0],i=e[n][1],a=e[n+1][0],o=e[n+1][1],u=Math.sqrt((a-r)*(a-r)+(o-i)*(o-i)),l=(o-i)/u,c=(a-r)/u,p=u/t;if(p>1){for(let e=1;e<=p-1;e++){const n=e*t,a=c*n+r,o=l*n+i;s.push([a,o])}const e=(u+Math.floor(p-1)*t)/2,n=c*e+r,a=l*e+i;s.push([n,a])}s.push([a,o])}}return function(e){return"polygon"===e.type}(e)?new a.A({rings:n,spatialReference:e.spatialReference}):new o.A({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,c.ci)(t,!0)}return s&&(e=(0,u.kS)(e,s)),e}function b(e,t,s){if(Array.isArray(e)){const n=e[0];if(n>t){const s=(0,u.kd)(n,t);e[0]=n+s*(-2*t)}else if(n<s){const t=(0,u.kd)(n,s);e[0]=n+t*(-2*s)}}else{const n=e.x;if(n>t){const s=(0,u.kd)(n,t);e=e.clone().offset(s*(-2*t),0)}else if(n<s){const t=(0,u.kd)(n,s);e=e.clone().offset(t*(-2*s),0)}}return e}function S(e,t){let s=-1;for(let n=0;n<t.cutIndexes.length;n++){const r=t.cutIndexes[n],i=t.geometries[n],a=(0,u.r8)(i);for(let e=0;e<a.length;e++){const t=a[e];t.some((s=>{if(s[0]<180)return!0;{let s=0;for(let e=0;e<t.length;e++){const n=t[e][0];s=n>s?n:s}s=Number(s.toFixed(9));const n=-360*(0,u.kd)(s,180);for(let s=0;s<t.length;s++){const t=i.getPoint(e,s);i.setPoint(e,s,t.clone().offset(n,0))}return!0}}))}if(r===s){if(m(e))for(const t of(0,u.r8)(i))e[r]=e[r].addRing(t);else if(_(e))for(const t of(0,u.r8)(i))e[r]=e[r].addPath(t)}else s=r,e[r]=i}return e}async function w(e,t,s){if(!Array.isArray(e))return w([e],t);t&&"string"!=typeof t&&y().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const r="string"==typeof t?t:t?.url??n.A.geometryServiceUrl;let i,m,_,x,T,F,q,I,R=0;const A=[],V=[];for(const t of e)if(null!=t)if(i||(i=t.spatialReference,m=(0,l.Vp)(i),_=i.isWebMercator,F=_?102100:4326,x=u.j7[F].maxX,T=u.j7[F].minX,q=u.j7[F].plus180Line,I=u.j7[F].minus180Line),m)if("mesh"===t.type)V.push(t);else if("point"===t.type)V.push(b(t.clone(),x,T));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>b(e,x,T))),V.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,m);V.push(e.rings?new a.A(e):e)}else if(t.extent){const e=t.extent,s=(0,u.kd)(e.xmin,T)*(2*x);let n=0===s?t.clone():(0,u.kS)(t.clone(),s);e.offset(s,0);let{xmin:r,xmax:i}=e;r=Number(r.toFixed(9)),i=Number(i.toFixed(9)),e.intersects(q)&&i!==x?(R=i>R?i:R,n=k(n,_),A.push(n),V.push("cut")):e.intersects(I)&&r!==T?(R=i*(2*x)>R?i*(2*x):R,n=k(n,_,360),A.push(n),V.push("cut")):V.push(n)}else V.push(t.clone());else V.push(t);else V.push(t);let U=(0,u.kd)(R,x),E=-90;const O=U,N=new o.A;for(;U>0;){const e=360*U-180;N.addPath([[e,E],[e,-1*E]]),E*=-1,U--}if(A.length>0&&O>0){const t=S(A,await async function(e,t,s,n){const r=(0,d.Dl)(e),i=t[0].spatialReference,a={...n,responseType:"json",query:{...r.query,f:"json",sr:(0,l.YX)(i),target:JSON.stringify({geometryType:(0,f.$B)(t[0]),geometries:t}),cutter:JSON.stringify(s)}},o=await(0,p.A)(r.path+"/cut",a),{cutIndexes:u,geometries:c=[]}=o.data;return{cutIndexes:u,geometries:c.map((e=>{const t=(0,f.rS)(e);return t.spatialReference=i,t}))}}(r,A,N,s)),n=[],i=[];for(let s=0;s<V.length;s++){const r=V[s];if("cut"!==r)i.push(r);else{const r=t.shift(),a=e[s];null!=a&&"polygon"===a.type&&a.rings&&a.rings.length>1&&r.rings.length>=a.rings.length?(n.push(r),i.push("simplify")):i.push(_?(0,c.Gh)(r):r)}}if(!n.length)return i;const a=await async function(e,t,s){const n="string"==typeof e?(0,h.An)(e):e,r=t[0].spatialReference,i=(0,f.$B)(t[0]),a={...s,query:{...n.query,f:"json",sr:(0,l.YX)(r),geometries:JSON.stringify((0,g.X)(t))}},{data:o}=await(0,p.A)(n.path+"/simplify",a);return(0,g.V)(o.geometries,i,r)}(r,n,s),o=[];for(let e=0;e<i.length;e++){const t=i[e];"simplify"!==t?o.push(t):o.push(_?(0,c.Gh)(a.shift()):a.shift())}return o}const G=[];for(let e=0;e<V.length;e++){const t=V[e];if("cut"!==t)G.push(t);else{const e=A.shift();G.push(!0===_?(0,c.Gh)(e):e)}}return G}},80754:(e,t,s)=>{s.d(t,{j7:()=>a,kS:()=>u,kd:()=>o,r8:()=>l});var n=s(82799),r=s(16930),i=s(65864);const a={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator}),minus180Line:new n.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.A({paths:[[[180,-180],[180,180]]],spatialReference:r.A.WGS84}),minus180Line:new n.A({paths:[[[-180,-180],[-180,180]]],spatialReference:r.A.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function u(e,t){const s=l(e);for(const e of s)for(const s of e)s[0]+=t;return e}function l(e){return(0,i.Bi)(e)?e.rings:e.paths}},92300:(e,t,s)=>{s.d(t,{V:()=>i,X:()=>r});var n=s(65864);function r(e){return{geometryType:(0,n.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function i(e,t,s){const r=(0,n.xD)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=s,t}))}},10536:(e,t,s)=>{function n(e){const t={};for(const s in e){if("declaredClass"===s)continue;const r=e[s];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){t[s]=[];for(let e=0;e<r.length;e++)t[s][e]=n(r[e])}else"object"==typeof r?r.toJSON&&(t[s]=JSON.stringify(r)):t[s]=r}return t}s.d(t,{z:()=>n})},53655:(e,t,s)=>{s.d(t,{SH:()=>R,ae:()=>x,cn:()=>_});var n=s(49186),r=s(51624),i=s(92722),a=s(69418);const o=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],u=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],l=["upperLeft","lowerLeft"];function c(e){return e>=o.length?null:o[e]}function p(e){return e>=u.length?null:u[e]}function f(e){return e>=l.length?null:l[e]}function d(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function h(e,t,s){const n=e.asUnsafe(),r=t.createPointGeometry(s);for(;n.next();)switch(n.tag()){case 3:{const e=n.getUInt32(),s=n.pos()+e;let i=0;for(;n.pos()<s;)t.addCoordinatePoint(r,n.getSInt64(),i++);break}default:n.skip()}return r}function g(e,t,s){const n=e.asUnsafe(),r=t.createGeometry(s),i=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;n.next();)switch(n.tag()){case 2:{const e=n.getUInt32(),s=n.pos()+e;let i=0;for(;n.pos()<s;)t.addLength(r,n.getUInt32(),i++);break}case 3:{const e=n.getUInt32(),s=n.pos()+e;let a=0;for(t.allocateCoordinates(r);n.pos()<s;)t.addCoordinate(r,n.getSInt64(),a),a++,a===i&&(a=0);break}default:n.skip()}return r}function y(e){const t=e.asUnsafe(),s=new i.A;let n="esriGeometryPoint";for(;t.next();)switch(t.tag()){case 2:{const e=t.getUInt32(),n=t.pos()+e;for(;t.pos()<n;)s.lengths.push(t.getUInt32());break}case 3:{const e=t.getUInt32(),n=t.pos()+e;for(;t.pos()<n;)s.coords.push(t.getSInt64());break}case 1:n=a.z[t.getEnum()];break;default:t.skip()}return{queryGeometry:s,queryGeometryType:n}}function m(e){const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function _(e){const t=e.asUnsafe(),s={type:c(0)};for(;t.next();)switch(t.tag()){case 1:s.name=t.getString();break;case 2:s.type=c(t.getEnum());break;case 3:s.alias=t.getString();break;case 4:s.sqlType=p(t.getEnum());break;case 5:default:t.skip();break;case 6:s.defaultValue=t.getString()}return s}function k(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.name=s.getString();break;case 2:t.isSystemMaintained=s.getBool();break;default:s.skip()}return t}function b(e,t,s,n){const r=t.createFeature(s);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=n[i++].name;r.attributes[t]=e.processMessage(m);break}case 2:r.geometry=e.processMessageWithArgs(g,t,s);break;case 4:r.centroid=e.processMessageWithArgs(h,t,s);break;default:e.skip()}return r}function S(e){const t=[1,1,1,1],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function w(e){const t=[0,0,0,0],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function x(e){const t={originPosition:f(0)},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.originPosition=f(s.getEnum());break;case 2:t.scale=s.processMessage(S);break;case 3:t.translate=s.processMessage(w);break;default:s.skip()}return t}function T(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.shapeAreaFieldName=s.getString();break;case 2:t.shapeLengthFieldName=s.getString();break;case 3:t.units=s.getString();break;default:s.skip()}return t}function F(e,t){const s=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:s.wkid=e.getUInt32();break;case 5:s.wkt=e.getString();break;case 2:s.latestWkid=e.getUInt32();break;case 3:s.vcsWkid=e.getUInt32();break;case 4:s.latestVcsWkid=e.getUInt32();break;default:e.skip()}return s}function q(e,t){const s=t.createFeatureResult(),n=e.asUnsafe();s.geometryType=d(t,0);let r=!1;for(;n.next();)switch(n.tag()){case 1:s.objectIdFieldName=n.getString();break;case 3:s.globalIdFieldName=n.getString();break;case 4:s.geohashFieldName=n.getString();break;case 5:s.geometryProperties=n.processMessage(T);break;case 7:s.geometryType=d(t,n.getEnum());break;case 8:s.spatialReference=n.processMessageWithArgs(F,t);break;case 10:s.hasZ=n.getBool();break;case 11:s.hasM=n.getBool();break;case 12:s.transform=n.processMessage(x);break;case 9:s.exceededTransferLimit=n.getBool();break;case 13:t.addField(s,n.processMessage(_));break;case 15:r||(t.prepareFeatures(s),r=!0),t.addFeature(s,n.processMessageWithArgs(b,t,s,s.fields));break;case 2:s.uniqueIdField=n.processMessage(k);break;default:n.skip()}return t.finishFeatureResult(s),s}function I(e,t){const s={};let n=null;for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(y);break;case 1:s.featureResult=e.processMessageWithArgs(q,t);break;default:e.skip()}return null!=n&&s.featureResult&&t.addQueryGeometry(s,n),s}function R(e,t){try{const s=2,n=new r.A(new Uint8Array(e),new DataView(e)),i={};for(;n.next();)n.tag()===s?i.queryResult=n.processMessageWithArgs(I,t):n.skip();return i}catch(e){throw new n.A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},69418:(e,t,s)=>{s.d(t,{S:()=>l,z:()=>u});var n=s(83047),r=s(21325),i=s(43334),a=s(58512),o=s(92722);const u=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class l{constructor(e){this._options=e,this.geometryTypes=u,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new a.A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e?.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||(0,r.aI)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,n.G9)(this._options.sourceSpatialReference)/(0,n.G9)(e.spatialReference);if(1!==t)for(const s of e.features){if(!(0,i.N3)(s))continue;const e=s.geometry.coords;for(let s=2;s<e.length;s+=3)e[s]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.Om}createSpatialReference(){return{wkid:0}}createGeometry(){return new o.A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new o.A}}},66208:(e,t,s)=>{s.d(t,{m:()=>r});var n=s(53655);function r(e,t){const s=(0,n.SH)(e,t),r=s.queryResult.featureResult,i=s.queryResult.queryGeometry,a=s.queryResult.queryGeometryType;if(r&&r.features&&r.features.length&&r.objectIdFieldName){const e=r.objectIdFieldName;for(const t of r.features)t.attributes&&(t.objectId=t.attributes[e])}return r&&(r.queryGeometry=i,r.queryGeometryType=a),r}},80893:(e,t,s)=>{s.d(t,{IJ:()=>h,Jf:()=>_,Pk:()=>y,eW:()=>d,gW:()=>m,kS:()=>g});var n=s(78888),r=s(84952),i=s(65864),a=s(17136),o=s(21325),u=s(10536),l=s(66208),c=s(58501);const p="Layer does not support extent calculation.";function f(e,t){const s=e.geometry,n=e.toJSON();delete n.compactGeometryEnabled,delete n.defaultSpatialReferenceEnabled;const r=n;let a,u,l;if(null!=s&&(u=s.spatialReference,l=(0,o.YX)(u),r.geometryType=(0,i.$B)(s),r.geometry=function(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const s=e.toJSON();return delete s.spatialReference,JSON.stringify(s)}(s,e.compactGeometryEnabled),r.inSR=l),n.groupByFieldsForStatistics&&(r.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(r.objectIds=n.objectIds.join(",")),n.orderByFields&&(r.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete r.outFields:n.outFields.includes("*")?r.outFields="*":r.outFields=n.outFields.join(","),n.outSR?(r.outSR=(0,o.YX)(n.outSR),a=e.outSpatialReference):s&&(n.returnGeometry||n.returnCentroid)&&(r.outSR=r.inSR,a=u),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(r.outStatistics=JSON.stringify(n.outStatistics)),n.fullText&&(r.fullText=JSON.stringify(n.fullText)),n.pixelSize&&(r.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=u&&null!=e.quantizationParameters?.extent&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete n.quantizationParameters.extent.spatialReference,r.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(r.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(r.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(r.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){const e=n.timeExtent,{start:t,end:s}=e;null==t&&null==s||(r.time=t===s?t:`${t??"null"},${s??"null"}`),delete n.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=u&&null!=a&&u.equals(a)&&(r.defaultSR=r.inSR,delete r.inSR,delete r.outSR),r}async function d(e,t,s,n){const r=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await k(e,t,"json",n);return(0,c.q)(t,s,r.data),r}async function h(e,t,s,n){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:s.createFeatureResult()};const r=await g(e,t,n),i=r;return i.data=(0,l.m)(r.data,s),i}function g(e,t,s){return k(e,t,"pbf",s)}function y(e,t,s){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):k(e,t,"json",s,{returnIdsOnly:!0})}function m(e,t,s){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):k(e,t,"json",s,{returnIdsOnly:!0,returnCountOnly:!0})}async function _(e,t,s){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const n=await k(e,t,"json",s,{returnExtentOnly:!0,returnCountOnly:!0}),r=n.data;if(r.hasOwnProperty("extent"))return n;if(r.features)throw new Error(p);if(r.hasOwnProperty("count"))throw new Error(p);return n}async function k(e,t,s,i={},o={}){const l="string"==typeof e?(0,r.An)(e):e,c=t.geometry?[t.geometry]:[],p=await(0,a.el)(c,null,{signal:i.signal}),d=p?.[0];null!=d&&((t=t.clone()).geometry=d);const h=(0,u.z)({...l.query,f:s,...o,...f(t,o)});return(0,n.A)((0,r.fj)(l.path,(g=o,null==t.formatOf3DObjects||g.returnCountOnly||g.returnExtentOnly||g.returnIdsOnly?"query":"query3d")),{...i,responseType:"pbf"===s?"array-buffer":"json",query:{...h,...i.query}});var g}},2272:(e,t,s)=>{s.d(t,{Dl:()=>a,jV:()=>i,lF:()=>o}),s(92602),s(70333);var n=s(4718),r=s(84952);function i(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function a(e){return"string"==typeof e?(0,r.An)(e):(0,n.o8)(e)}function o(e,t,s){const n={};for(const r in e){if("declaredClass"===r)continue;const i=e[r];if(null!=i&&"function"!=typeof i)if(Array.isArray(i))n[r]=i.map((e=>o(e)));else if("object"==typeof i)if(i.toJSON){const e=i.toJSON(s?.[r]);n[r]=t?e:JSON.stringify(e)}else n[r]=t?i:JSON.stringify(i);else n[r]=i}return n}s(926)}}]);