/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../Graphic.js";import{i as n}from"../core/Handles.js";import{b as i,s as r}from"./screenUtils.js";import{c as t}from"./vec3f64.js";import{p as s}from"./projectVectorToVector.js";import{f as o}from"./LayerConstants.js";import{j as a}from"./layerUtils2.js";import{d as c}from"./debugFlags2.js";import{g as l}from"./ElevationProvider.js";import{n as d,S as u,i as p,I as m}from"./Intersector2.js";import{t as f,a as g}from"./intersectorUtilsConversions.js";import{t as h}from"./verticalOffsetUtils.js";import y from"../geometry/SpatialReference.js";import E from"../geometry/Point.js";async function U(e,n,r,t){const s=r?b(e,r):t,o=i(n.x,n.y);s.requiresGroundFeedback=!0,s.enableDraped=!0;const l=d(e.state.viewingMode);l.options.selectionMode=!0,l.options.store=u.ALL,e.sceneIntersectionHelper.intersectIntersectorScreen(o,l,s);const m=function(e,n,i){const r=new Array;let t=null;for(let s=0;s<n.length;s++){const o=n[s],c=f(o,e);if(null!=c&&(c===e.map.ground||"type"in c&&a(c.type)))break;const l=g(o,e);if(null==l)continue;if("graphic"===l.type){if(null==t&&s!==n.length-1&&(t=new Set),null!=t){const e=S(l.graphic);if(t.has(e))continue;t.add(e)}if(!L(i,l.graphic))continue}const d=j(e,o),u=o.distanceInRenderSpace;if("media"===l.type){const e=l.element.toSource(d);r.push({...l,mapPoint:d,distance:u,sourcePoint:e})}else r.push({...l,mapPoint:d,distance:u})}return r}(e,l.results.all,s.graphics),h=l.results.ground,y=f(h,e),E=null!=y&&"type"in y&&a(y.type)?y:null,U={screenPoint:n,results:m,ground:{mapPoint:j(e,h),distance:p(h)?h.distanceInRenderSpace:0,layer:E}};return c.SCENEVIEW_HITTEST_RETURN_INTERSECTOR&&(U.intersector=l),U}function I(e,n,i,t){const s=i?b(e,i):t,o=!(!s.graphics?.include&&!s.graphics?.exclude),a=!(!s.mediaElements?.include&&!s.mediaElements?.exclude),c=r(n);s.enableDraped=s.include&&!s.include.has(h)||s.exclude?.has(h);const l=e.sceneIntersectionHelper,p=d(e.state.viewingMode);if(p.options.selectionMode=!0,p.options.store=o||a?u.ALL:u.MIN,p.options.hud=!i?.excludeHud,l.intersectIntersectorScreen(c,p,s),o||a){for(const n of p.results.all){const i=g(n,e);if(null==i)return j(e,n);if(o&&("graphic"!==i.type||L(s.graphics,i.graphic)))return j(e,n);if(a&&("media"!==i.type||x(s.mediaElements,i.element)))return j(e,n)}return null}return j(e,p.results.min)}function j(e,n,i){return n.getIntersectionPoint(v)?(i=R(e,v,i),n.intersector===m.TERRAIN&&e.basemapTerrain&&(i.z=l(e.basemapTerrain,i)??0),i):null}function S(e){const n=e.sourceLayer,i=e.layer,r=n&&"objectIdField"in n?n:i&&"objectIdField"in i?i:n;if(r){const n=r.objectIdField??o,i=e.attributes?.[n];if(i)return`o-${r.id}-${i}`}return`u-${e.uid}`}function L(e,n){return x(e,S(n))}function x(e,n){return null==e||(null==e.include||e.include.has(n))&&(null==e.exclude||!e.exclude.has(n))}function R(e,n,i){let r=e.spatialReference||y.WGS84;return s(n,e.renderSpatialReference,v,r)?n=v:(r=y.WGS84,s(n,e.renderSpatialReference,v,r)&&(n=v)),i?(i.x=n[0],i.y=n[1],i.z=n[2],i.spatialReference=r):i=new E(n,r),i}function b(e,n){const i=w(e,n.include,D.INCLUDE),r=w(e,n.exclude,D.EXCLUDE);return{include:i.layerUids,exclude:r.layerUids,graphics:{include:i.graphicUids,exclude:r.graphicUids},mediaElements:{include:i.mediaElements,exclude:r.mediaElements}}}function w(i,r,t,s={layerUids:void 0,graphicUids:void 0,mediaElements:void 0}){if(!r)return s;if(r instanceof e)!function(e,n){e.graphicUids||(e.graphicUids=new Set),e.graphicUids.add(n)}(s,S(r)),t===D.INCLUDE&&(null!=i.graphicsView&&r.layer===i?C(s,i.graphicsView.processor.layer.id):r.layer&&C(s,r.layer.uid));else if("layer"in r&&"element"in r)!function(e,n){e.mediaElements||(e.mediaElements=new Set),e.mediaElements.add(n)}(s,r.element),t===D.INCLUDE&&C(s,r.layer.uid);else if(n(r))for(const e of r)e===i.graphics&&null!=i.graphicsView?C(s,i.graphicsView.processor.layer.id):e===i.map.ground?C(s,h):w(i,e,t,s);else"uid"in r&&C(s,r.uid);return s}function C(e,n){e.layerUids||(e.layerUids=new Set),e.layerUids.add(n)}const v=t();var D;!function(e){e[e.INCLUDE=0]="INCLUDE",e[e.EXCLUDE=1]="EXCLUDE"}(D||(D={}));export{R as c,b as e,U as h,I as t};