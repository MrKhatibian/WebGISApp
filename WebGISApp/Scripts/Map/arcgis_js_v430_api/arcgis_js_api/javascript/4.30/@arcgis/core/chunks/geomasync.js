/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{version as n}from"../kernel.js";import{M as t,p as e,O as r,P as i,Q as a,C as o,A as s,E as l,t as c,u,H as f,x as m,R as d,T as p,U as w,V as h,z as y,W as j,X as g,Y as v,y as P,Z as I,D as A,_ as F,$ as b,a0 as R,a1 as x,a2 as O,a3 as N}from"./arcadeUtils.js";import{c as S,a as U,b as D}from"./TimeOnly.js";import{g as T}from"./portalUtils.js";import{g as k}from"./unitUtils.js";import C from"../geometry/Extent.js";import M from"../geometry/Geometry.js";import{disjoint as Z,intersects as L,touches as z,crosses as J,within as E,contains as q,overlaps as B,equals as Q,relate as W,intersect as G,union as V,difference as H,symmetricDifference as X,clip as Y,cut as $,planarArea as _,geodesicArea as K,planarLength as nn,geodesicLength as tn,distance as en,densify as rn,geodesicDensify as an,generalize as on,buffer as sn,geodesicBuffer as ln,offset as cn,rotate as un,simplify as fn,isSimple as mn,convexHull as dn,nearestCoordinate as pn,nearestVertex as wn}from"../geometry/geometryEngineAsync.js";import hn from"../geometry/Multipoint.js";import yn from"../geometry/Point.js";import jn from"../geometry/Polygon.js";import gn from"../geometry/Polyline.js";import{fromJSON as vn}from"../geometry/support/jsonUtils.js";import Pn from"../portal/Portal.js";import{l as In}from"./utils21.js";import"../core/lang.js";import"../core/urlUtils.js";import"../config.js";import"../core/Error.js";import"./Logger.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../geometry.js";import"../geometry/SpatialReference.js";import"./writer.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"./typeUtils.js";import"../geometry/support/webMercatorUtils.js";import"./reader.js";import"./zmUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./ImmutableArray.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./datetime.js";import"./number2.js";import"./locale.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./timeZoneUtils.js";import"./number.js";import"./substitute.js";import"./messages.js";import"./hash.js";import"./uuid.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"./SimpleObservable.js";import"../core/workers/RemoteClient.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";function An(t){return 0===n.indexOf("4.")?jn.fromExtent(t):new jn({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function Fn(n,t,r){if(e(n,2,2,t,r),n[0]instanceof M&&n[1]instanceof M);else if(n[0]instanceof M&&null===n[1]);else if(n[1]instanceof M&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new s(t,l.InvalidParameter,r)}async function bn(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=O(n.spatialReference)/k(n.spatialReference));let r=0;if("polyline"===n.type)for(const t of n.paths)for(let n=1;n<t.length;n++)r+=N(t[n],t[n-1],e);else if("polygon"===n.type)for(const t of n.rings){for(let n=1;n<t.length;n++)r+=N(t[n],t[n-1],e);(t[0][0]!==t[t.length-1][0]||t[0][1]!==t[t.length-1][1]||void 0!==t[0][2]&&t[0][2]!==t[t.length-1][2])&&(r+=N(t[0],t[t.length-1],e))}else"extent"===n.type&&(r+=2*N([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*N([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs(d(n.zmax,0)*e-d(n.zmin,0)*e));const i=new gn({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return nn(i,t)}function Rn(n){"async"===n.mode&&(n.functions.disjoint=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null===a[0]||null===a[1]||Z(a[0],a[1]))))},n.functions.intersects=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null!==a[0]&&null!==a[1]&&L(a[0],a[1]))))},n.functions.touches=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null!==a[0]&&null!==a[1]&&z(a[0],a[1]))))},n.functions.crosses=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null!==a[0]&&null!==a[1]&&J(a[0],a[1]))))},n.functions.within=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null!==a[0]&&null!==a[1]&&E(a[0],a[1]))))},n.functions.contains=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null!==a[0]&&null!==a[1]&&q(a[0],a[1]))))},n.functions.overlaps=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null!==a[0]&&null!==a[1]&&B(a[0],a[1]))))},n.functions.equals=function(t,o){return n.standardFunctionAsync(t,o,((n,s,l)=>(e(l,2,2,t,o),l[0]===l[1]||(l[0]instanceof M&&l[1]instanceof M?Q(l[0],l[1]):(r(l[0])&&r(l[1])||!!(i(l[0])&&i(l[1])||a(l[0])&&a(l[1])))&&l[0].equals(l[1])))))},n.functions.relate=function(r,i){return n.standardFunctionAsync(r,i,((n,a,c)=>{if(c=t(c),e(c,3,3,r,i),c[0]instanceof M&&c[1]instanceof M)return W(c[0],c[1],o(c[2]));if(c[0]instanceof M&&null===c[1])return!1;if(c[1]instanceof M&&null===c[0])return!1;if(null===c[0]&&null===c[1])return!1;throw new s(r,l.InvalidParameter,i)}))},n.functions.intersection=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null===a[0]||null===a[1]?null:G(a[0],a[1]))))},n.functions.union=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>{const o=[];if(0===(a=t(a)).length)throw new s(e,l.WrongNumberOfParameters,r);if(1===a.length)if(c(a[0])){const n=t(a[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof M))throw new s(e,l.InvalidParameter,r);o.push(n[t])}}else{if(!u(a[0])){if(a[0]instanceof M)return f(S(a[0]),e.spatialReference);if(null===a[0])return null;throw new s(e,l.InvalidParameter,r)}{const n=t(a[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof M))throw new s(e,l.InvalidParameter,r);o.push(n[t])}}}else for(let n=0;n<a.length;n++)if(null!==a[n]){if(!(a[n]instanceof M))throw new s(e,l.InvalidParameter,r);o.push(a[n])}return 0===o.length?null:V(o)}))},n.functions.difference=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null===a[0]?null:null===a[1]?S(a[0]):H(a[0],a[1]))))},n.functions.symmetricdifference=function(e,r){return n.standardFunctionAsync(e,r,((n,i,a)=>(Fn(a=t(a),e,r),null===a[0]&&null===a[1]?null:null===a[0]?S(a[1]):null===a[1]?S(a[0]):X(a[0],a[1]))))},n.functions.clip=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,2,r,i),!(o[1]instanceof C)&&null!==o[1])throw new s(r,l.InvalidParameter,i);if(null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return null===o[1]?null:Y(o[0],o[1])}))},n.functions.cut=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,2,r,i),!(o[1]instanceof gn)&&null!==o[1])throw new s(r,l.InvalidParameter,i);if(null===o[0])return[];if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return null===o[1]?[S(o[0])]:$(o[0],o[1])}))},n.functions.area=function(r,i){return n.standardFunctionAsync(r,i,(async(n,a,o)=>{if(e(o,1,2,r,i),null===(o=t(o))[0])return 0;if(m(o[0])){const n=await o[0].sumArea(U(d(o[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new s(r,l.Cancelled,i);return n}if(c(o[0])||u(o[0])){const n=p(o[0],r.spatialReference);return null===n?0:_(n,U(d(o[1],-1)))}if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return _(o[0],U(d(o[1],-1)))}))},n.functions.areageodetic=function(r,i){return n.standardFunctionAsync(r,i,(async(n,a,o)=>{if(e(o,1,2,r,i),null===(o=t(o))[0])return 0;if(m(o[0])){const n=await o[0].sumArea(U(d(o[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new s(r,l.Cancelled,i);return n}if(c(o[0])||u(o[0])){const n=p(o[0],r.spatialReference);return null===n?0:K(n,U(d(o[1],-1)))}if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return K(o[0],U(d(o[1],-1)))}))},n.functions.length=function(r,i){return n.standardFunctionAsync(r,i,(async(n,a,o)=>{if(e(o,1,2,r,i),null===(o=t(o))[0])return 0;if(m(o[0])){const n=await o[0].sumLength(D(d(o[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new s(r,l.Cancelled,i);return n}if(c(o[0])||u(o[0])){const n=w(o[0],r.spatialReference);return null===n?0:nn(n,D(d(o[1],-1)))}if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return nn(o[0],D(d(o[1],-1)))}))},n.functions.length3d=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(e(o,1,2,r,i),null===(o=t(o))[0])return 0;if(c(o[0])||u(o[0])){const n=w(o[0],r.spatialReference);return null===n?0:!0===n.hasZ?bn(n,D(d(o[1],-1))):nn(n,D(d(o[1],-1)))}if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return!0===o[0].hasZ?bn(o[0],D(d(o[1],-1))):nn(o[0],D(d(o[1],-1)))}))},n.functions.lengthgeodetic=function(r,i){return n.standardFunctionAsync(r,i,(async(n,a,o)=>{if(e(o,1,2,r,i),null===(o=t(o))[0])return 0;if(m(o[0])){const n=await o[0].sumLength(D(d(o[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new s(r,l.Cancelled,i);return n}if(c(o[0])||u(o[0])){const n=w(o[0],r.spatialReference);return null===n?0:tn(n,D(d(o[1],-1)))}if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return tn(o[0],D(d(o[1],-1)))}))},n.functions.distance=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{o=t(o),e(o,2,3,r,i);let f=o[0];(c(o[0])||u(o[0]))&&(f=h(o[0],r.spatialReference));let m=o[1];if((c(o[1])||u(o[1]))&&(m=h(o[1],r.spatialReference)),!(f instanceof M))throw new s(r,l.InvalidParameter,i);if(!(m instanceof M))throw new s(r,l.InvalidParameter,i);return en(f,m,D(d(o[2],-1)))}))},n.functions.distancegeodetic=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{o=t(o),e(o,2,3,r,i);const c=o[0],u=o[1];if(!(c instanceof yn))throw new s(r,l.InvalidParameter,i);if(!(u instanceof yn))throw new s(r,l.InvalidParameter,i);const f=new gn({paths:[],spatialReference:c.spatialReference});return f.addPath([c,u]),tn(f,D(d(o[2],-1)))}))},n.functions.densify=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,3,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);const c=y(o[1]);if(isNaN(c))throw new s(r,l.InvalidParameter,i);if(c<=0)throw new s(r,l.InvalidParameter,i);return o[0]instanceof jn||o[0]instanceof gn?rn(o[0],c,D(d(o[2],-1))):o[0]instanceof C?rn(An(o[0]),c,D(d(o[2],-1))):o[0]}))},n.functions.densifygeodetic=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,3,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);const c=y(o[1]);if(isNaN(c))throw new s(r,l.InvalidParameter,i);if(c<=0)throw new s(r,l.InvalidParameter,i);return o[0]instanceof jn||o[0]instanceof gn?an(o[0],c,D(d(o[2],-1))):o[0]instanceof C?an(An(o[0]),c,D(d(o[2],-1))):o[0]}))},n.functions.generalize=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,4,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);const c=y(o[1]);if(isNaN(c))throw new s(r,l.InvalidParameter,i);return on(o[0],c,j(d(o[2],!0)),D(d(o[3],-1)))}))},n.functions.buffer=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,3,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);const c=y(o[1]);if(isNaN(c))throw new s(r,l.InvalidParameter,i);return 0===c?S(o[0]):sn(o[0],c,D(d(o[2],-1)))}))},n.functions.buffergeodetic=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,3,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);const c=y(o[1]);if(isNaN(c))throw new s(r,l.InvalidParameter,i);return 0===c?S(o[0]):ln(o[0],c,D(d(o[2],-1)))}))},n.functions.offset=function(r,i){return n.standardFunctionAsync(r,i,((n,a,c)=>{if(c=t(c),e(c,2,6,r,i),null===c[0])return null;if(!(c[0]instanceof jn||c[0]instanceof gn))throw new s(r,l.InvalidParameter,i);const u=y(c[1]);if(isNaN(u))throw new s(r,l.InvalidParameter,i);const f=y(d(c[4],10));if(isNaN(f))throw new s(r,l.InvalidParameter,i);const m=y(d(c[5],0));if(isNaN(m))throw new s(r,l.InvalidParameter,i);return cn(c[0],u,D(d(c[2],-1)),o(d(c[3],"round")).toLowerCase(),f,m)}))},n.functions.rotate=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,3,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);const c=o[0]instanceof C?jn.fromExtent(o[0]):o[0],u=y(o[1]);if(isNaN(u))throw new s(r,l.InvalidParameter,i);const f=d(o[2],null);if(null===f)return un(c,u);if(f instanceof yn)return un(c,u,f);throw new s(r,l.InvalidParameter,i)}))},n.functions.centroid=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,1,1,r,i),null===o[0])return null;let m=o[0];if((c(o[0])||u(o[0]))&&(m=h(o[0],r.spatialReference)),null===m)return null;if(!(m instanceof M))throw new s(r,l.InvalidParameter,i);return m instanceof yn?f(S(m),r.spatialReference):m instanceof jn?m.centroid:m instanceof gn?g(m):m instanceof hn?v(m):m instanceof C?m.center:null}))},n.functions.measuretocoordinate=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,2,r,i),null===o[0])return null;let f=o[0];if((c(o[0])||u(o[0]))&&(f=w(o[0],r.spatialReference)),null===f)return null;if(!(f instanceof M))throw new s(r,l.InvalidParameter,i);if(!(f instanceof gn))throw new s(r,l.InvalidParameter,i);if(P(!1===o[1]))throw new s(r,l.InvalidParameter,i);const m=I(f,o[1]);return m?A.convertObjectToArcadeDictionary(m,F(r),!1,!0):null}))},n.functions.pointtocoordinate=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,2,r,i),null===o[0])return null;let f=o[0];if((c(o[0])||u(o[0]))&&(f=w(o[0],r.spatialReference)),null===f)return null;if(!(f instanceof M))throw new s(r,l.InvalidParameter,i);if(!(f instanceof gn))throw new s(r,l.InvalidParameter,i);const m=o[1];if(null===m)return null;if(!(m instanceof yn))throw new s(r,l.InvalidParameter,i);if(P(!1===o[1]))throw new s(r,l.InvalidParameter,i);const d=b(f,m);return d?A.convertObjectToArcadeDictionary(d,F(r),!1,!0):null}))},n.functions.distancetocoordinate=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,2,2,r,i),null===o[0])return null;let f=o[0];if((c(o[0])||u(o[0]))&&(f=w(o[0],r.spatialReference)),null===f)return null;if(!(f instanceof M))throw new s(r,l.InvalidParameter,i);if(!(f instanceof gn))throw new s(r,l.InvalidParameter,i);if(P(!1===o[1]))throw new s(r,l.InvalidParameter,i);const m=R(f,o[1]);return m?A.convertObjectToArcadeDictionary(m,F(r),!1,!0):null}))},n.functions.multiparttosinglepart=function(r,i){return n.standardFunctionAsync(r,i,(async(n,a,o)=>{if(o=t(o),e(o,1,1,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);if(o[0]instanceof yn)return[f(S(o[0]),r.spatialReference)];if(o[0]instanceof C)return[f(S(o[0]),r.spatialReference)];const c=await fn(o[0]);if(c instanceof jn){const n=[],t=[];for(let e=0;e<c.rings.length;e++)if(c.isClockwise(c.rings[e])){const t=vn({rings:[c.rings[e]],hasZ:!0===c.hasZ,hasM:!0===c.hasM,spatialReference:c.spatialReference.toJSON()});n.push(t)}else t.push({ring:c.rings[e],pt:c.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(c instanceof gn){const n=[];for(let t=0;t<c.paths.length;t++){const e=vn({paths:[c.paths[t]],hasZ:!0===c.hasZ,hasM:!0===c.hasM,spatialReference:c.spatialReference.toJSON()});n.push(e)}return n}if(o[0]instanceof hn){const n=[],t=f(S(o[0]),r.spatialReference);for(let e=0;e<t.points.length;e++)n.push(t.getPoint(e));return n}return null}))},n.functions.issimple=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,1,1,r,i),null===o[0])return!0;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return mn(o[0])}))},n.functions.simplify=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,1,1,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return fn(o[0])}))},n.functions.convexhull=function(r,i){return n.standardFunctionAsync(r,i,((n,a,o)=>{if(o=t(o),e(o,1,1,r,i),null===o[0])return null;if(!(o[0]instanceof M))throw new s(r,l.InvalidParameter,i);return dn(o[0])}))},n.functions.getuser=function(t,r){return n.standardFunctionAsync(t,r,(async(n,i,a)=>{e(a,0,2,t,r);let c=d(a[1],""),u=!0===c;if(c=!0===c||!1===c?"":o(c),0===a.length||a[0]instanceof x){let n;n=t.services?.portal?t.services.portal:Pn.getDefault(),a.length>0&&(n=T(a[0],n));const e=await In(n,c,u);if(e){const n=JSON.parse(JSON.stringify(e));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return A.convertObjectToArcadeDictionary(n,F(t))}return null}let f=null;if(m(a[0])&&(f=a[0]),f){if(u=!1,c)return null;await f.load();const n=await f.getOwningSystemUrl();if(!n){if(!c){const n=await f.getIdentityUser();return n?A.convertObjectToArcadeDictionary({username:n},F(t)):null}return null}let e;e=t.services?.portal?t.services.portal:Pn.getDefault(),e=T(new x(n),e);const r=await In(e,c,u);if(r){const n=JSON.parse(JSON.stringify(r));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return A.convertObjectToArcadeDictionary(n,F(t))}return null}throw new s(t,l.InvalidParameter,r)}))},n.functions.nearestcoordinate=function(r,i){return n.standardFunctionAsync(r,i,(async(n,a,o)=>{if(o=t(o),e(o,2,2,r,i),!(o[0]instanceof M||null===o[0]))throw new s(r,l.InvalidParameter,i);if(!(o[1]instanceof yn||null===o[1]))throw new s(r,l.InvalidParameter,i);if(null===o[0]||null===o[1])return null;const c=await pn(o[0],o[1]);return null===c?null:A.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},F(r),!1,!0)}))},n.functions.nearestvertex=function(r,i){return n.standardFunctionAsync(r,i,(async(n,a,o)=>{if(o=t(o),e(o,2,2,r,i),!(o[0]instanceof M||null===o[0]))throw new s(r,l.InvalidParameter,i);if(!(o[1]instanceof yn||null===o[1]))throw new s(r,l.InvalidParameter,i);if(null===o[0]||null===o[1])return null;const c=await wn(o[0],o[1]);return null===c?null:A.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},F(r),!1,!0)}))})}export{Rn as registerFunctions};