/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../request.js";import{i as r,clone as i}from"../core/lang.js";import s from"../core/Collection.js";import o from"../core/Error.js";import{M as a}from"../chunks/MultiOriginJSONSupport.js";import{g as n}from"../config.js";import{throwIfAbortError as l}from"../core/promiseUtils.js";import{watch as p,on as c,sync as m}from"../core/reactiveUtils.js";import{urlToObject as u,objectToQuery as d}from"../core/urlUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{r as f}from"../chunks/reader.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import{w as g}from"../chunks/writer.js";import j from"../geometry/Extent.js";import w from"./Layer.js";import v,{W as x}from"./WebTileLayer.js";import{BlendLayer as S}from"./mixins/BlendLayer.js";import{OperationalLayer as M}from"./mixins/OperationalLayer.js";import{PortalLayer as T}from"./mixins/PortalLayer.js";import{RefreshableLayer as I}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as L}from"./mixins/ScaleRangeLayer.js";import{c as b}from"../chunks/imageBitmapUtils.js";import k from"./support/TileInfo.js";import{T as C}from"../chunks/TileInfoTilemapCache.js";import P from"./support/WMTSSublayer.js";import{o as R,af as U}from"../chunks/unitUtils.js";import E from"../geometry/Point.js";import{i as A}from"../chunks/crsUtils.js";import{v as V}from"../chunks/xmlUtils.js";import O from"./support/LOD.js";import"../kernel.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/ensureType.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../geometry/support/webMercatorUtils.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/utils3.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/layerContainerType.js";import"../chunks/commonProperties2.js";import"../chunks/persistableUrlUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";import"../chunks/layerUtils2.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/TileKey.js";import"./support/TileMatrixSet.js";import"./support/WMTSStyle.js";const F=90.71428571428571;function _(e){const t=e.replaceAll(/ows:/gi,"");if(!W("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new o("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function N(e){return e.nodeType===Node.ELEMENT_NODE}function W(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(N(i)&&i.nodeName===e)return i}return null}function B(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];N(s)&&s.nodeName===e&&r.push(s)}return r}function D(e,t){const i=[];for(let r=0;r<t.childNodes.length;r++){const s=t.childNodes[r];N(s)&&s.nodeName===e&&i.push(s)}return i.map((e=>e.textContent)).filter(r)}function K(e,t){return e.split(">").forEach((e=>{t&&(t=W(e,t))})),t&&t.textContent}function G(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=W(t,i),o=e?.textContent;if(o===r||r.split(":")&&r.split(":")[1]===o)return s=i,!0}return!1})),s}function $(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=B("ResourceURL",i),o=B("Dimension",i);let a,n,l,p;return o.length&&(a=K("Identifier",o[0]),n=D("Default",o[0])||D("Value",o[0])),o.length>1&&(l=K("Identifier",o[1]),p=D("Default",o[1])||D("Value",o[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:p}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(a&&n.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+a.length+2))}if(l&&p.length)if(t.includes("{"+l+"}"))t=t.replace("{"+l+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+l.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function q(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function(e){return e.includes("crs84")||e.includes("crs:84")?J.CRS84:e.includes("crs83")||e.includes("crs:83")?J.CRS83:e.includes("crs27")||e.includes("crs:27")?J.CRS27:null}(e);return null!=r&&(t=r),{wkid:t}}function H(e,t){const r=q(t),[i,s]=K("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),o=t.includes("epsg")&&A(r.wkid);return new E(o?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}var J,z;function Q(e,t,r,i,s){const o=q(t),a=K("Identifier",e);let n=parseFloat(K("ScaleDenominator",e));const l=X(o.wkid,n,i);n*=96/F;const p=+K("MatrixWidth",e),c=+K("MatrixHeight",e),{maxCol:m=p-1,maxRow:u=c-1,minCol:d=0,minRow:h=0}=s.get(a)??{},{x:f,y}=H(e,t);return new O({cols:[d,m],level:r,levelValue:a,origin:[f,y],scale:n,resolution:l,rows:[h,u]})}function X(e,t,r){let i;return i=R.hasOwnProperty(""+e)?R.values[R[e]]:"default028mm"===r?6370997*Math.PI/180:U(e).metersPerDegree,7*t/25e3/i}!function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"}(J||(J={}));const Y={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Z=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ee=z=class extends(S(I(L(M(T(a(w))))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([p((()=>this.activeLayer),((e,t)=>{t&&!this.sublayers?.includes(t)&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),m),c((()=>this.sublayers),"after-add",(({item:e})=>{e.layer=this,e.parent=this}),m),c((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=null,e.parent=null}),m),p((()=>this.sublayers),((e,t)=>{if(t)for(const e of t)e.layer=null,e.parent=null;if(e)for(const t of e)t.layer=this,t.parent=this}),m)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(l).then((()=>this._fetchService(e))).catch((e=>{throw l(e),new o("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new P);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,o=i?.layerIdentifier;let a=null;const n=i?.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(a=n[0]):a=n);const l=s?.format,p=s?.style;return new P({id:o,imageFormat:l,styleId:p,tileMatrixSetId:a})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const o=n("tileMatrixSet.tileInfo",s);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){const i=function(e,t){return e.map((e=>{const r=new P;return r.read(e,t),r}))}(t.layers,r);return i}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map((e=>e.tileInfo?.spatialReference)).toArray().filter(r)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new C(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,s=e.fullExtent,o=new x({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new v({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:o})}async fetchTile(e,r,i,s={}){const{signal:o}=s,a=this.getTileUrl(e,r,i),{data:n}=await t(a,{responseType:"image",signal:o});return n}async fetchImageBitmapTile(e,r,i,s={}){const{signal:o}=s;if(this.fetchTile!==z.prototype.fetchTile){const t=await this.fetchTile(e,r,i,s);return b(t,e,r,i,o)}const a=this.getTileUrl(e,r,i),{data:n}=await t(a,{responseType:"blob",signal:o});return b(n,e,r,i,o)}findSublayerById(e){return this.sublayers?.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=i?.tileInfo?.lods[e],o=s?s.levelValue||`${s.level}`:`${e}`;let a=this.resourceInfo?"":function(e,t,r,i,s,o,a,n){const l=function(e,t,r){const i=$(e,t),s=i?.filter((e=>e.format===r));return(s?.length?s:i)??[]}(e,t,i);if(!(l?.length>0))return"";const{dimensionMap:p}=e,c=p.get(t).dimensions?.[0],m=p.get(t).dimensions2?.[0];return l[a%l.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,o).replaceAll(/\{TileRow\}/gi,""+a).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,c).replaceAll(/\{dimensionValue2\}/gi,m)}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,o).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,o=$(e,t);let a="";if(o&&o.length>0){const e=s.get(t).dimensions?.[0],n=s.get(t).dimensions2?.[0];a=o[0].template,a.endsWith(".xxx")&&(a=a.slice(0,-4)),a=a.replaceAll(/\{Style\}/gi,i),a=a.replaceAll(/\{TileMatrixSet\}/gi,r),a=a.replaceAll(/\{TileMatrix\}/gi,"{level}"),a=a.replaceAll(/\{TileRow\}/gi,"{row}"),a=a.replaceAll(/\{TileCol\}/gi,"{col}"),a=a.replaceAll(/\{dimensionValue\}/gi,e),a=a.replaceAll(/\{dimensionValue2\}/gi,n)}return a}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return Y[r.toLowerCase()]&&(s=Y[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),_(t.data)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),_(t.data),this.serviceMode=r}catch(e){throw new o("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}var r;this.resourceInfo?t.data=((r=t.data).layers.forEach((e=>{e.tileMatrixSets?.forEach((e=>{const t=e.tileInfo;t&&96!==t.dpi&&(t.lods?.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=X(t.spatialReference?.wkid,r.scale*F/96,e.id)})),t.dpi=96)}))})),r):t.data=function(e,t){e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,a=W("Contents",r);if(!a)throw new o("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=W("OperationsMetadata",r),l=n?.querySelector("[name='GetTile']"),p=l?.getElementsByTagName("Get"),c=p&&Array.prototype.slice.call(p),m=t.url?.indexOf("https"),u=void 0!==m&&m>-1;let d,h,f=t.serviceMode,y=t?.url;if(c?.length&&c.some((e=>{const t=W("Constraint",e);return!t||G("AllowedValues","Value",f,t)?(y=e.attributes[0].nodeValue,!0):(!t||G("AllowedValues","Value","RESTful",t)||G("AllowedValues","Value","REST",t)?h=e.attributes[0].nodeValue:t&&!G("AllowedValues","Value","KVP",t)||(d=e.attributes[0].nodeValue),!1)})),!y)if(h)y=h,f="RESTful";else if(d)y=d,f="KVP";else{const e=W("ServiceMetadataURL",r);y=e?.getAttribute("xlink:href")}const g=y.indexOf("1.0.0/");-1===g&&"RESTful"===f?y+="/":g>-1&&(y=y.substring(0,g)),"KVP"===f&&(y+=g>-1?"":"?"),u&&(y=y.replace(/^http:/i,"https:"));const w=K("ServiceIdentification>ServiceTypeVersion",r),v=K("ServiceIdentification>AccessConstraints",r),x=v&&/^none$/i.test(v)?null:v,S=B("Layer",a),M=B("TileMatrixSet",a),T=S.map((e=>{const t=K("Identifier",e);return i.set(t,e),function(e,t,r,i,s){const o=K("Abstract",t),a=D("Format",t),n=function(e){const t=W("WGS84BoundingBox",e),r=t?K("LowerCorner",t).split(" "):["-180","-90"],i=t?K("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}(t),l=function(e){const t=[];return V(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const r=e.getAttribute("crs").toLowerCase(),i=q(r),s=r.includes("epsg")&&A(i.wkid);let o,a,n,l;V(e,{LowerCorner:e=>{[o,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([o,a]=[a,o])},UpperCorner:e=>{[n,l]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([n,l]=[l,n])}}),t.push({xmin:o,ymin:a,xmax:n,ymax:l,spatialReference:i})}}),t}(t),p=function(e,t){return B("Style",e).map((e=>{const r=W("LegendURL",e),i=W("Keywords",e),s=i?D("Keyword",i):[];let o=r?.getAttribute("xlink:href");return t&&(o=o?.replace(/^http:/i,"https:")),{abstract:K("Abstract",e),id:K("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:o,title:K("Title",e)}}))}(t,i),c=K("Title",t),m=function(e,t,r){return B("TileMatrixSetLink",t).map((t=>function(e,t,r){const i=W("TileMatrixSet",t).textContent,s=D("TileMatrix",t),o=r.find((e=>{const t=W("Identifier",e),r=t?.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),a=W("TileMatrixSetLimits",t),n=a&&B("TileMatrixLimits",a),l=new Map;if(n?.length)for(const e of n){const t=W("TileMatrix",e).textContent,r=+W("MinTileRow",e).textContent,i=+W("MaxTileRow",e).textContent,s=+W("MinTileCol",e).textContent,o=+W("MaxTileCol",e).textContent;l.set(t,{minCol:s,maxCol:o,minRow:r,maxRow:i})}const p=K("SupportedCRS",o).toLowerCase(),c=function(e,t){return H(W("TileMatrix",e),t)}(o,p),m=c.spatialReference,u=W("TileMatrix",o),d=[parseInt(K("TileWidth",u),10),parseInt(K("TileHeight",u),10)],h=[];s.length?s.forEach(((e,t)=>{const r=G("TileMatrix","Identifier",e,o);h.push(Q(r,p,t,i,l))})):B("TileMatrix",o).forEach(((e,t)=>{h.push(Q(e,p,t,i,l))}));const f=function(e,t,r,i,s){const o=W("BoundingBox",t);let a,n,l,p,c,m;if(o&&(a=K("LowerCorner",o).split(" "),n=K("UpperCorner",o).split(" ")),a&&a.length>1&&n&&n.length>1)l=parseFloat(a[0]),c=parseFloat(a[1]),p=parseFloat(n[0]),m=parseFloat(n[1]);else{const e=W("TileMatrix",t),o=parseInt(K("MatrixWidth",e),10),a=parseInt(K("MatrixHeight",e),10);l=r.x,m=r.y,p=l+o*i[0]*s.resolution,c=m-a*i[1]*s.resolution}return function(e,t,r){return"1.0.0"===e&&A(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new j(c,l,m,p,r.spatialReference):new j(l,c,p,m,r.spatialReference)}(e,o,c,d,h[0]).toJSON(),y=new k({dpi:96,spatialReference:m,size:d,origin:c,lods:h}).toJSON();return{id:i,fullExtent:f,tileInfo:y}}(e,t,r)))}(s,t,r);return{id:e,fullExtent:n,fullExtents:l,description:o,formats:a,styles:p,title:c,tileMatrixSets:m}}(t,e,M,u,w)}));return{copyright:x,dimensionMap:s,layerMap:i,layers:T,serviceMode:f,tileUrl:y}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,r){const i=this._getCapabilitiesUrl(e);return await t(i,{...r,responseType:"text"})}_getTileMatrixSetById(e){const t=this.findSublayerById(this.activeLayer.id),r=t?.tileMatrixSets?.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...i(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=u(e),i={...r.query,...t},s=d(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=u(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const e=`/${this.version}/WMTSCapabilities.xml`,r=new RegExp(e,"i");t=t.replace(r,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=u(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?i(e):{},t.forEach((t=>{e.hasOwnProperty(t)||Z.has(t)||(e[t]=r[t])})))}return e}};e([h()],ee.prototype,"dimensionMap",void 0),e([h()],ee.prototype,"layerMap",void 0),e([h({type:P,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ee.prototype,"activeLayer",void 0),e([f("service","activeLayer",["layers"])],ee.prototype,"readActiveLayerFromService",null),e([f(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ee.prototype,"readActiveLayerFromItemOrWebDoc",null),e([g(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:k},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ee.prototype,"writeActiveLayer",null),e([h({type:String,value:"",json:{write:!0}})],ee.prototype,"copyright",void 0),e([h({type:["show","hide"]})],ee.prototype,"listMode",void 0),e([h({json:{read:!0,write:!0}})],ee.prototype,"blendMode",void 0),e([h({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ee.prototype,"customParameters",void 0),e([f(["portal-item","web-document"],"customParameters")],ee.prototype,"readCustomParameters",null),e([h({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ee.prototype,"customLayerParameters",void 0),e([h({type:j,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ee.prototype,"fullExtent",void 0),e([h({readOnly:!0})],ee.prototype,"fullExtents",null),e([h({type:["WebTiledLayer"]})],ee.prototype,"operationalLayerType",void 0),e([h()],ee.prototype,"resourceInfo",void 0),e([h()],ee.prototype,"serviceMode",void 0),e([f(["portal-item","web-document"],"serviceMode",["templateUrl"])],ee.prototype,"readServiceMode",null),e([h({type:s.ofType(P)})],ee.prototype,"sublayers",void 0),e([f("service","sublayers",["layers"])],ee.prototype,"readSublayersFromService",null),e([h({readOnly:!0})],ee.prototype,"supportedSpatialReferences",null),e([h({readOnly:!0})],ee.prototype,"tilemapCache",null),e([h({json:{read:{source:"title"}}})],ee.prototype,"title",null),e([h({json:{read:!1},readOnly:!0,value:"wmts"})],ee.prototype,"type",void 0),e([h({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ee.prototype,"url",null),e([h()],ee.prototype,"version",void 0),ee=z=e([y("esri.layers.WMTSLayer")],ee);const te=ee;export{te as default};