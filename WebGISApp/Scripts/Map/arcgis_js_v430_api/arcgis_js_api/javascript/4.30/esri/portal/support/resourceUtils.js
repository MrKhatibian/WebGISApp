// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../core/Error","../../core/urlUtils"],function(h,u,r,k){function t(a){const b=a.lastIndexOf("/");return-1===b?[".",a]:[a.slice(0,b),a.slice(b+1)]}function q(a){{const e=k.getPathExtension(a);a=null==e?[a,""]:[a.slice(0,a.length-e.length-1),`.${e}`]}const [b,c]=a,[f,d]=t(b);return[f,d,c]}h.addOrUpdateResources=async function(a,b,c,f){var d=new Map;for(const {resource:e,content:n,compress:l,access:m}of b){if(!e.hasPath())throw new r(`portal-item-resource-${c}:invalid-path`,
"Resource does not have a valid path");const [g,p]=t(e.path);b=`${g}/${l??""}/${m??""}`;d.has(b)||d.set(b,{prefix:g,compress:l,access:m,files:[]});d.get(b).files.push({fileName:p,content:n})}await a.load(f);c=k.join(a.userItemUrl,"add"===c?"addResources":"updateResources");for(const {prefix:e,compress:n,access:l,files:m}of d.values())for(d=0;d<m.length;d+=25){b=m.slice(d,d+25);const g=new FormData;e&&"."!==e&&g.append("resourcesPrefix",e);n&&g.append("compress","true");l&&g.append("access",l);let p=
0;for(const {fileName:v,content:w}of b)g.append(`file${++p}`,w,v);g.append("f","json");await a.portal.request(c,{method:"post",body:g,signal:f?.signal})}};h.contentToBlob=async function(a){return"blob"===a.type?a.blob:"json"===a.type?new Blob([a.jsonString],{type:"application/json"}):(await u(a.url,{responseType:"blob"})).data};h.fetchResources=async function(a,b={},c){await a.load(c);const f=k.join(a.itemUrl,"resources"),{start:d=1,num:e=10,sortOrder:n="asc",sortField:l="resource"}=b;b=await a.portal.request(f,
{query:{start:d,num:e,sortOrder:n,sortField:l,token:a.apiKey},signal:c?.signal});return{total:b.total,nextStart:b.nextStart,resources:b.resources.map(({created:m,size:g,resource:p})=>({created:new Date(m),size:g,resource:a.resourceFromPath(p)}))}};h.getSiblingOfSameType=function(a,b){if(!a.hasPath())return null;const [c,,f]=q(a.path);return a.portalItem.resourceFromPath(k.join(c,b+f))};h.getSiblingOfSameTypeI=function(a,b){if(!a.hasPath())return null;const [c,,f]=q(a.path);return a.portalItem.resourceFromPath(k.join(c,
b+f))};h.removeAllResources=async function(a,b){await a.load(b);const c=k.join(a.userItemUrl,"removeResources");return a.portal.request(c,{method:"post",query:{deleteAll:!0},signal:b?.signal})};h.removeResource=async function(a,b,c){if(!b.hasPath())throw new r("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await a.load(c);const f=k.join(a.userItemUrl,"removeResources");await a.portal.request(f,{method:"post",query:{resource:b.path},signal:c?.signal});b.portalItem=
null};h.splitPrefixFileNameAndExtension=q;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});