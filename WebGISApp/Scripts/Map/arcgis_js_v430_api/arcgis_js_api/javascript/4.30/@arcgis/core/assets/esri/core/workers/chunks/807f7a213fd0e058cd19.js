"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8281],{46728:(n,e,t)=>{t.d(e,{e:()=>s});var r=t(69763);Math.PI;const l=r.h.radius,i=r.h.eccentricitySquared,s={a1:l*i,a2:l*i*l*i,a3:l*i*i/2,a4:l*i*l*i*2.5,a5:l*i+l*i*i/2,a6:1-i};r.h.radius,r.h.flattening,r.s.radius,r.s.flattening,r.t.radius,r.t.flattening,r.t.radius},47387:(n,e,t)=>{t.r(e),t.d(e,{P:()=>r,a:()=>x,b:()=>o,c:()=>C,d:()=>v,e:()=>j,f:()=>k,g:()=>a,h:()=>f,i:()=>Z,j:()=>L,k:()=>c,l:()=>_,m:()=>D,p:()=>Q,s:()=>H,w:()=>h});var r,l,i=t(16699),s=t(69763),u=t(46728);(l=r||(r={}))[l.UNKNOWN=0]="UNKNOWN",l[l.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",l[l.WGS84=2]="WGS84",l[l.WEB_MERCATOR=3]="WEB_MERCATOR",l[l.WGS84_ECEF=4]="WGS84_ECEF",l[l.CGCS2000=5]="CGCS2000",l[l.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",l[l.GCSMARS2000=7]="GCSMARS2000",l[l.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",l[l.GCSMOON2000=9]="GCSMOON2000",l[l.LON_LAT=10]="LON_LAT",l[l.PLATE_CARREE=11]="PLATE_CARREE";const o={[r.WGS84]:{[r.CGCS2000]:f,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:f,[r.SPHERICAL_ECEF]:N,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:h,[r.PLATE_CARREE]:p,[r.WGS84]:f,[r.WGS84_ECEF]:m},[r.CGCS2000]:{[r.CGCS2000]:f,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:f,[r.SPHERICAL_ECEF]:N,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:h,[r.PLATE_CARREE]:p,[r.WGS84]:f,[r.WGS84_ECEF]:m},[r.GCSMARS2000]:{[r.CGCS2000]:null,[r.GCSMARS2000]:f,[r.GCSMOON2000]:null,[r.LON_LAT]:f,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:O,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.GCSMOON2000]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:f,[r.LON_LAT]:f,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:M,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.WEB_MERCATOR]:{[r.CGCS2000]:E,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:E,[r.SPHERICAL_ECEF]:R,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:f,[r.PLATE_CARREE]:A,[r.WGS84]:E,[r.WGS84_ECEF]:S},[r.WGS84_ECEF]:{[r.CGCS2000]:w,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:w,[r.SPHERICAL_ECEF]:T,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:y,[r.PLATE_CARREE]:function(n,e,t,r){w(n,e,t,r),p(t,r,t,r)},[r.WGS84]:w,[r.WGS84_ECEF]:f},[r.SPHERICAL_ECEF]:{[r.CGCS2000]:g,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:g,[r.SPHERICAL_ECEF]:f,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:F,[r.PLATE_CARREE]:function(n,e,t,r){g(n,e,t,r),p(t,r,t,r)},[r.WGS84]:g,[r.WGS84_ECEF]:I},[r.SPHERICAL_MARS_PCPF]:{[r.CGCS2000]:null,[r.GCSMARS2000]:W,[r.GCSMOON2000]:null,[r.LON_LAT]:W,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:f,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.SPHERICAL_MOON_PCPF]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:G,[r.LON_LAT]:G,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:f,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.UNKNOWN]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:f,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.LON_LAT]:{[r.CGCS2000]:f,[r.GCSMARS2000]:f,[r.GCSMOON2000]:f,[r.LON_LAT]:f,[r.SPHERICAL_ECEF]:N,[r.SPHERICAL_MARS_PCPF]:O,[r.SPHERICAL_MOON_PCPF]:M,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:h,[r.PLATE_CARREE]:p,[r.WGS84]:f,[r.WGS84_ECEF]:m},[r.PLATE_CARREE]:{[r.CGCS2000]:P,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:P,[r.SPHERICAL_ECEF]:function(n,e,t,r){P(n,e,t,r),N(t,r,t,r)},[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:function(n,e,t,r){P(n,e,t,r),h(t,r,t,r)},[r.PLATE_CARREE]:f,[r.WGS84]:P,[r.WGS84_ECEF]:function(n,e,t,r){P(n,e,t,r),m(t,r,t,r)}}};function a(n,e,t=j()){return null==n||null==e?null:k(n,e,t).projector}function c(n,e){switch(a(n,e,x)){case f:return"copy3";case N:return"wgs84ToSphericalECEF";case h:return"wgs84ToWebMercator";case p:return"wgs84ToPlateCarree";case m:return"wgs84ToWGS84ECEF";case E:return"webMercatorToWGS84";case R:return"webMercatorToSphericalECEF";case S:return"webMercatorToWGS84ECEF";case A:return"webMercatorToPlateCarree";case w:return"wgs84ECEFToWGS84";case T:return"wgs84ECEFToSphericalECEF";case y:return"wgs84ECEFToWebMercator";case g:return"sphericalECEFToWGS84";case F:return"sphericalECEFToWebMercator";case W:return"sphericalMarsPCPFToMars2000";case G:return"sphericalMoonPCPFToMoon2000";case I:return"sphericalECEFToWGS84ECEF";case O:return"mars2000ToSphericalPCPF";case M:return"moon2000ToSphericalPCPF";default:return null}}function C(n,e){return n?e.spatialReference===n?e.spatialReferenceId:(e.spatialReference=n,"metersPerUnit"in e&&(e.metersPerUnit=(0,s.g)(n,1)),(0,s.ad)(n)?e.spatialReferenceId=r.SPHERICAL_ECEF:(0,s.i)(n)?e.spatialReferenceId=r.WGS84:(0,s.b)(n)?e.spatialReferenceId=r.WEB_MERCATOR:(0,s.ae)(n)?e.spatialReferenceId=r.PLATE_CARREE:n.wkt===s.W.wkt?e.spatialReferenceId=r.WGS84_ECEF:n.wkid===s.aa.CGCS2000?e.spatialReferenceId=r.CGCS2000:n.wkt===s.T.wkt?e.spatialReferenceId=r.SPHERICAL_MARS_PCPF:n.wkt===s.U.wkt?e.spatialReferenceId=r.SPHERICAL_MOON_PCPF:(0,s.O)(n)?e.spatialReferenceId=r.GCSMARS2000:(0,s.Q)(n)?e.spatialReferenceId=r.GCSMOON2000:e.spatialReferenceId=r.UNKNOWN):r.UNKNOWN}function f(n,e,t,r){n!==t&&(t[r++]=n[e++],t[r++]=n[e++],t[r]=n[e])}function E(n,e,t,r){t[r]=K*(n[e]/B),t[r+1]=K*(z-2*Math.atan(Math.exp(-n[e+1]/B))),t[r+2]=n[e+2]}function R(n,e,t,r){const l=n[e]/B,i=z-2*Math.atan(Math.exp(-n[e+1]/B)),s=B+n[e+2],u=Math.cos(i)*s;t[r]=Math.cos(l)*u,t[r+1]=Math.sin(l)*u,t[r+2]=Math.sin(i)*s}function S(n,e,t,r){E(n,e,t,r),m(t,r,t,r)}function _(n,e,t,r,l){const s=.4999999*b,u=(0,i.c)(U*n[e+1],-s,s),o=Math.sin(u);t[r++]=U*n[e]*l.radius,t[r++]=l.halfSemiMajorAxis*Math.log((1+o)/(1-o)),t[r]=n[e+2]}function h(n,e,t,r){_(n,e,t,r,s.h)}function p(n,e,t,r){t[r]=n[e]*q,t[r+1]=n[e+1]*q,t[r+2]=n[e+2]}function P(n,e,t,r){t[r]=n[e]*Z,t[r+1]=n[e+1]*Z,t[r+2]=n[e+2]}function A(n,e,t,r){E(n,e,t,r),p(t,r,t,r)}function d(n,e,t,r,l){const i=l+n[e+2],s=U*n[e+1],u=U*n[e],o=Math.cos(s)*i;t[r]=Math.cos(u)*o,t[r+1]=Math.sin(u)*o,t[r+2]=Math.sin(s)*i}function M(n,e,t,r){d(n,e,t,r,s.s.radius)}function O(n,e,t,r){d(n,e,t,r,s.t.radius)}function N(n,e,t,r){d(n,e,t,r,s.h.radius)}function L(n,e,t,r,l){const s=n[e],u=n[e+1],o=n[e+2],a=Math.sqrt(s*s+u*u+o*o),c=(0,i.g)(o/(0===a?1:a)),C=Math.atan2(u,s);t[r++]=K*C,t[r++]=K*c,t[r]=a-l}function G(n,e,t,r){L(n,e,t,r,s.s.radius)}function W(n,e,t,r){L(n,e,t,r,s.t.radius)}function g(n,e,t,r){L(n,e,t,r,s.h.radius)}function F(n,e,t,r){g(n,e,t,r),h(t,r,t,r)}function I(n,e,t,r){g(n,e,t,r),m(t,r,t,r)}function m(n,e,t,r){!function(n,e,t,r,l){const i=U*n[e],s=U*n[e+1],u=n[e+2],o=Math.sin(s),a=Math.cos(s),c=l.radius/Math.sqrt(1-l.eccentricitySquared*o*o);t[r++]=(c+u)*a*Math.cos(i),t[r++]=(c+u)*a*Math.sin(i),t[r++]=(c*(1-l.eccentricitySquared)+u)*o}(n,e,t,r,s.h)}function w(n,e,t,r){const l=u.e,i=n[e],o=n[e+1],a=n[e+2];let c,C,f,E,R,S,_,h,p,P,A,d,M,O,N,L,G,W,g,F,I;c=Math.abs(a),C=i*i+o*o,f=Math.sqrt(C),E=C+a*a,R=Math.sqrt(E),F=Math.atan2(o,i),S=a*a/E,_=C/E,O=l.a2/R,N=l.a3-l.a4/R,_>.3?(h=c/R*(1+_*(l.a1+O+S*N)/R),g=Math.asin(h),P=h*h,p=Math.sqrt(1-P)):(p=f/R*(1-S*(l.a5-O-_*N)/R),g=Math.acos(p),P=1-p*p,h=Math.sqrt(P)),A=1-s.h.eccentricitySquared*P,d=s.h.radius/Math.sqrt(A),M=l.a6*d,O=f-d*p,N=c-M*h,G=p*O+h*N,L=p*N-h*O,W=L/(M/A+G),g+=W,I=G+L*W/2,a<0&&(g=-g),t[r++]=K*F,t[r++]=K*g,t[r]=I}function T(n,e,t,r){w(n,e,t,r),N(t,r,t,r)}function y(n,e,t,r){w(n,e,t,r),h(t,r,t,r)}function k(n,e,t){if(null==n||null==e||t.source.spatialReference===n&&t.dest.spatialReference===e)return t;const l=C(n,t.source),i=C(e,t.dest);return l===r.UNKNOWN&&i===r.UNKNOWN?(0,s.f)(n,e)?t.projector=f:t.projector=null:t.projector=o[l][i],t}function j(){return{source:{spatialReference:null,spatialReferenceId:r.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:r.UNKNOWN,metersPerUnit:1},projector:f}}const H={spatialReference:null,spatialReferenceId:r.UNKNOWN},v={spatialReference:null,spatialReferenceId:r.UNKNOWN},x=j(),U=(0,i.d)(1),K=(0,i.r)(1),b=Math.PI,z=.5*b,B=s.h.radius,q=B*b/180,Z=180/(B*b);function Q(n,e,t,r,l,i,s=1){const u=a(e,l,x);if(null==u)return!1;if(u===f){if(n===r&&t===i)return!0;const e=t+3*s;for(let l=t,s=i;l<e;l++,s++)r[s]=n[l];return!0}const o=t+3*s;for(let e=t,l=i;e<o;e+=3,l+=3)u(n,e,r,l);return!0}const D=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:Q},Symbol.toStringTag,{value:"Module"}))},64102:(n,e,t)=>{t.d(e,{g:()=>l});var r=t(69763);function l(n,e,t){if(null==e||null==t||t.vcsWkid||(0,r.f)(e,t)||(0,r.x)(e)||(0,r.x)(t))return null;const l=(0,r.y)(e)/(0,r.y)(t);if(1===l)return null;switch(n){case"point":case"esriGeometryPoint":return n=>{return e=n,t=l,void(null!=e?.z&&(e.z*=t));var e,t};case"polyline":case"esriGeometryPolyline":return n=>function(n,e){if(n)for(const t of n.paths)for(const n of t)n.length>2&&(n[2]*=e)}(n,l);case"polygon":case"esriGeometryPolygon":return n=>function(n,e){if(n)for(const t of n.rings)for(const n of t)n.length>2&&(n[2]*=e)}(n,l);case"multipoint":case"esriGeometryMultipoint":return n=>function(n,e){if(n)for(const t of n.points)t.length>2&&(t[2]*=e)}(n,l);case"extent":case"esriGeometryEnvelope":return n=>{return t=l,void((e=n)&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t));var e,t};default:return null}}},78281:(n,e,t)=>{t.r(e),t.d(e,{a:()=>rn,canProjectWithoutEngine:()=>K,getTransformation:()=>y,getTransformations:()=>k,initializeProjection:()=>z,isEqualBaseGCS:()=>b,isLoaded:()=>L,isLoadedOrLoad:()=>G,isLoadedOrLoadFor:()=>W,load:()=>F,p:()=>p,project:()=>I,projectExtent:()=>$,projectMany:()=>m,projectMultipoint:()=>Q,projectOrLoad:()=>w,projectOrLoadMany:()=>T,projectPoint:()=>q,projectPolygon:()=>X,projectPolyline:()=>J,projectWithZConversion:()=>U,projectWithoutEngine:()=>B,requiresLoad:()=>g,test:()=>v,tryProjectWithZConversion:()=>x,unload:()=>H});var r=t(6407),l=t(80959),i=t(91047),s=t(44945),u=t(2589),o=t(69763),a=t(44600),c=t(36533),C=t(64752),f=t(84200),E=t(67504),R=t(7969),S=t(47387),_=t(58590),h=t(64102);function p(n,e,t,r,l,i){return P[0]=n,P[1]=e,P[2]=t,(0,S.p)(P,r,0,l,i,0,1)}t(32773),t(20266),t(90740),t(13671),t(93181),t(58498),t(93804),t(18683),t(64604),t(29512),t(99063),t(99924),t(32816),t(41390),t(69421),t(40499),t(36544),t(29298),t(45371),t(2160),t(49877),t(56273),t(29208),t(48844),t(97827),t(91695),t(18169),t(48402),t(16699),t(26809),t(18527),t(46728);const P=(0,u.c)();let A=null,d=null,M=null,O={};const N=new s.S;function L(){return!!A&&(0,o.F)()}function G(){return!!L()||((0,i.t)(N),F(),!1)}function W(n,e){return!n||!e||K(n,e)||G()}function g(n,e){return!K(n,e)&&!L()}function F(n){return null==M&&(M=Promise.all([(0,o.H)(),Promise.all([t.e(9257),t.e(7138)]).then(t.bind(t,89257)).then((n=>n.g)),t.e(4415).then(t.bind(t,54415))])),M.then((([,e,{hydratedAdapter:t}])=>{(0,l.Te)(n),d=t,A=e.default,A._enableProjection(o.ac),N.notify()}))}function I(n,e,t=null,r=null){return Array.isArray(n)?0===n.length?[]:m(d,n,n[0].spatialReference,e,t,r):m(d,[n],n.spatialReference,e,t,r)[0]}function m(n,e,t,r,l=null,i=null){if(null==t||null==r)return e;if(K(t,r,l))return e.map((n=>B(n,t,r)));if(null==l&&(0,o.ad)(t))return e.map((n=>B(n,t,R.A.WGS84))).map((n=>x(n,r)));if(null==l&&(0,o.ad)(r))return e.map((n=>x(n,R.A.WGS84))).map((n=>B(n,R.A.WGS84,r)));if(null==l){const n=_.A.cacheKey(t,r);void 0!==O[n]?l=O[n]:(null==(l=y(t,r,void 0))&&(l=new _.A),O[n]=l)}if(null==A||null==n)throw new j;return null!=i?A._project(n,e,t,r,l,i):A._project(n,e,t,r,l)}function w(n,e){const t=T([n],e);return null!=t.pending?{pending:t.pending,geometry:null}:null!=t.geometries?{pending:null,geometry:t.geometries[0]}:{pending:null,geometry:null}}function T(n,e){if(!L())for(const t of n)if(null!=t&&!(0,o.f)(t.spatialReference,e)&&(0,o.k)(t.spatialReference)&&(0,o.k)(e)&&!K(t.spatialReference,e))return(0,i.t)(N),{pending:F(),geometries:null};return{pending:null,geometries:n.map((n=>null==n?null:(0,o.f)(n.spatialReference,e)?n:(0,o.k)(n.spatialReference)&&(0,o.k)(e)?x(n,e):null))}}function y(n,e,t=null){if(null==n||null==e)return null;if(null==A||null==d)throw new j;const r=A._getTransformation(d,n,e,t,t?.spatialReference);return null!==r?_.A.fromGE(r):null}function k(n,e,t=null){if(null==A||null==d)throw new j;const r=A._getTransformationBySuitability(d,n,e,t,t?.spatialReference);if(null!==r){const n=[];for(const e of r)n.push(_.A.fromGE(e));return n}return[]}class j extends r.A{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function H(){A=null,d=null,M=null,O={}}const v={get loadPromise(){return M}};function x(n,e){try{const t=I(n,e);if(null==t)return null;"xmin"in n&&"xmin"in t&&(t.zmin=n.zmin,t.zmax=n.zmax);const r=(0,h.g)(t.type,n.spatialReference,e);return null!=r&&r(t),t}catch(n){if(!(n instanceof j))throw n;return null}}async function U(n,e,t){const r=n.spatialReference;return null!=r&&null!=e&&await z(r,e,null,t),x(n,e)}function K(n,e,t){return!t&&(!!(0,o.f)(n,e)||(0,o.k)(n)&&(0,o.k)(e)&&!!(0,S.g)(n,e,S.a))}function b(n,e){if((0,o.f)(n,e))return!0;if(!(0,o.k)(n)||!(0,o.k)(e))return!1;const t=(0,o.i)(n)||(0,o.b)(n)||(0,o.N)(n),r=(0,o.i)(e)||(0,o.b)(e)||(0,o.N)(e);return t&&r}async function z(n,e,t,r){if(L())return(0,l.NO)(r);if(Array.isArray(n)){for(const{source:e,dest:t,geographicTransformation:l}of n)if(e&&t&&!K(e,t,l))return F(r)}else if(n&&e&&!K(n,e,t))return F(r);return(0,l.NO)(r)}function B(n,e,t){return n?"x"in n?Z(n,e,new C.A,t,0):"xmin"in n?nn(n,e,new a.A,t,0):"rings"in n?Y(n,e,new f.A,t,0):"paths"in n?V(n,e,new E.A,t,0):"points"in n?D(n,e,new c.A,t,0):null:null}function q(n,e,t=e.spatialReference,r=0){return null!=t&&null!=n.spatialReference&&null!=Z(n,n.spatialReference,e,t,r)}function Z(n,e,t,r,l){tn[0]=n.x,tn[1]=n.y;const i=n.z;return tn[2]=void 0!==i?i:l,(0,S.p)(tn,e,0,tn,r,0,1)?(t.x=tn[0],t.y=tn[1],t.spatialReference=r,void 0!==i||(0,o.x)(r)?(t.z=tn[2],t.hasZ=!0):(t.z=void 0,t.hasZ=!1),void 0===n.m?(t.m=void 0,t.hasM=!1):(t.m=n.m,t.hasM=!0),t):null}function Q(n,e,t=e.spatialReference,r=0){return null!=n.spatialReference&&null!=t&&null!=D(n,n.spatialReference,e,t,r)}function D(n,e,t,r,l){const{points:i,hasZ:s,hasM:u}=n,a=[],c=i.length,C=[];for(const n of i)C.push(n[0],n[1],s?n[2]:l);if(!(0,S.p)(C,e,0,C,r,0,c))return null;const f=s||(0,o.x)(r);for(let n=0;n<c;++n){const e=3*n,t=C[e],r=C[e+1];f&&u?a.push([t,r,C[e+2],i[n][3]]):f?a.push([t,r,C[e+2]]):u?a.push([t,r,i[n][2]]):a.push([t,r])}return t.points=a,t.spatialReference=r,t.hasZ=s,t.hasM=u,t}function J(n,e,t=e.spatialReference,r=0){return null!=n.spatialReference&&null!=t&&null!=V(n,n.spatialReference,e,t,r)}function V(n,e,t,r,l){const{paths:i,hasZ:s,hasM:u}=n,a=[];if(!en(i,s??!1,u??!1,e,a,r,l))return null;const c=s||(0,o.x)(r);return t.paths=a,t.spatialReference=r,t.hasZ=c,t.hasM=u,t}function X(n,e,t=e.spatialReference,r=0){return null!=n.spatialReference&&null!=t&&null!=Y(n,n.spatialReference,e,t,r)}function Y(n,e,t,r,l){const{rings:i,hasZ:s,hasM:u}=n,a=[];if(!en(i,s??!1,u??!1,e,a,r,l))return null;const c=s||(0,o.x)(r);return t.rings=a,t.spatialReference=r,t.hasZ=c,t.hasM=u,t}function $(n,e,t=e.spatialReference,r=0){return null!=n.spatialReference&&null!=t&&null!=nn(n,n.spatialReference,e,t,r)}function nn(n,e,t,r,l){const{xmin:i,ymin:s,xmax:u,ymax:a,hasZ:c,hasM:C}=n;if(!p(i,s,c?n.zmin:l,e,tn,r))return null;const f=c||(0,o.x)(r);return t.xmin=tn[0],t.ymin=tn[1],f&&(t.zmin=tn[2]),p(u,a,c?n.zmax:l,e,tn,r)?(t.xmax=tn[0],t.ymax=tn[1],f&&(t.zmax=tn[2]),C&&(t.mmin=n.mmin,t.mmax=n.mmax),t.spatialReference=r,t):null}function en(n,e,t,r,l,i,s=0){const u=new Array;for(const t of n)for(const n of t)u.push(n[0],n[1],e?n[2]:s);if(!(0,S.p)(u,r,0,u,i,0,u.length/3))return!1;let a=0;l.length=0;const c=e||(0,o.x)(i);for(const e of n){const n=new Array;for(const r of e)c&&t?n.push([u[a++],u[a++],u[a++],r[3]]):c?n.push([u[a++],u[a++],u[a++]]):t?(n.push([u[a++],u[a++],r[2]]),a++):(n.push([u[a++],u[a++]]),a++);l.push(n)}return!0}const tn=(0,u.c)(),rn=Object.freeze(Object.defineProperty({__proto__:null,canProjectWithoutEngine:K,getTransformation:y,getTransformations:k,initializeProjection:z,isEqualBaseGCS:b,isLoaded:L,isLoadedOrLoad:G,isLoadedOrLoadFor:W,load:F,project:I,projectExtent:$,projectMany:m,projectMultipoint:Q,projectOrLoad:w,projectOrLoadMany:T,projectPoint:q,projectPolygon:X,projectPolyline:J,projectWithZConversion:U,projectWithoutEngine:B,requiresLoad:g,test:v,tryProjectWithZConversion:x,unload:H},Symbol.toStringTag,{value:"Module"}))},58590:(n,e,t)=>{t.d(e,{A:()=>i});let r=0;class l{static fromGE(n){const e=new l;return e._wkt=n.wkt,e._wkid=n.wkid,e._isInverse=n.isInverse,e}constructor(n){this.uid=r++,n?(this._wkt=null!=n.wkt?n.wkt:null,this._wkid=null!=n.wkid?n.wkid:-1,this._isInverse=null!=n.isInverse&&!0===n.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(n){this._wkt=n,this.uid=r++}get wkid(){return this._wkid}set wkid(n){this._wkid=n,this.uid=r++}get isInverse(){return this._isInverse}set isInverse(n){this._isInverse=n,this.uid=r++}getInverse(){const n=new l;return n._wkt=this.wkt,n._wkid=this._wkid,n._isInverse=!this.isInverse,n}}class i{static cacheKey(n,e){return[n.wkid?.toString()??"-1",n.wkt?.toString()??"",n.wkt2?.toString()??"",e.wkid?.toString()??"-1",e.wkt?.toString()??"",e.wkt2?.toString()??""].join()}static fromGE(n){const e=new i;let t="";for(const r of n.steps){const n=l.fromGE(r);e.steps.push(n),t+=n.uid.toString()+","}return e._cachedProjection={},e._gtlistentry=null,e._chain=t,e}constructor(n){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,n?.steps)for(const e of n.steps)e instanceof l?this.steps.push(e):this.steps.push(new l({wkid:e.wkid,wkt:e.wkt,isInverse:e.isInverse}))}getInverse(){const n=new i;n.steps=[];for(let e=this.steps.length-1;e>=0;e--){const t=this.steps[e];n.steps.push(t.getInverse())}return n}getGTListEntry(){let n="";for(const e of this.steps)n+=e.uid.toString()+",";return n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n),this._gtlistentry}assignCachedGe(n,e,t){this._cachedProjection[i.cacheKey(n,e)]=t}getCachedGeTransformation(n,e){let t="";for(const n of this.steps)t+=n.uid.toString()+",";t!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=t);const r=this._cachedProjection[i.cacheKey(n,e)];return void 0===r?null:r}}}}]);