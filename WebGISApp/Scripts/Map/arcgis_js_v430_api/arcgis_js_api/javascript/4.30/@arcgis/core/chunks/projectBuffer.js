/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{r as n,c as e,d as l,g as C}from"./mathUtils.js";import{s as E,t,h as a,f as S,g as u,ad as r,i as R,b as s,ae as _,W as P,aa as A,T as c,U as M,O as o,Q as O}from"./unitUtils.js";import{e as i}from"./geodesicConstants.js";var N;!function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",n[n.WGS84=2]="WGS84",n[n.WEB_MERCATOR=3]="WEB_MERCATOR",n[n.WGS84_ECEF=4]="WGS84_ECEF",n[n.CGCS2000=5]="CGCS2000",n[n.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",n[n.GCSMARS2000=7]="GCSMARS2000",n[n.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",n[n.GCSMOON2000=9]="GCSMOON2000",n[n.LON_LAT=10]="LON_LAT",n[n.PLATE_CARREE=11]="PLATE_CARREE"}(N||(N={}));const L={[N.WGS84]:{[N.CGCS2000]:f,[N.GCSMARS2000]:null,[N.GCSMOON2000]:null,[N.LON_LAT]:f,[N.SPHERICAL_ECEF]:g,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:h,[N.PLATE_CARREE]:d,[N.WGS84]:f,[N.WGS84_ECEF]:v},[N.CGCS2000]:{[N.CGCS2000]:f,[N.GCSMARS2000]:null,[N.GCSMOON2000]:null,[N.LON_LAT]:f,[N.SPHERICAL_ECEF]:g,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:h,[N.PLATE_CARREE]:d,[N.WGS84]:f,[N.WGS84_ECEF]:v},[N.GCSMARS2000]:{[N.CGCS2000]:null,[N.GCSMARS2000]:f,[N.GCSMOON2000]:null,[N.LON_LAT]:f,[N.SPHERICAL_ECEF]:null,[N.SPHERICAL_MARS_PCPF]:m,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:null,[N.PLATE_CARREE]:null,[N.WGS84]:null,[N.WGS84_ECEF]:null},[N.GCSMOON2000]:{[N.CGCS2000]:null,[N.GCSMARS2000]:null,[N.GCSMOON2000]:f,[N.LON_LAT]:f,[N.SPHERICAL_ECEF]:null,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:B,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:null,[N.PLATE_CARREE]:null,[N.WGS84]:null,[N.WGS84_ECEF]:null},[N.WEB_MERCATOR]:{[N.CGCS2000]:T,[N.GCSMARS2000]:null,[N.GCSMOON2000]:null,[N.LON_LAT]:T,[N.SPHERICAL_ECEF]:I,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:f,[N.PLATE_CARREE]:K,[N.WGS84]:T,[N.WGS84_ECEF]:p},[N.WGS84_ECEF]:{[N.CGCS2000]:z,[N.GCSMARS2000]:null,[N.GCSMOON2000]:null,[N.LON_LAT]:z,[N.SPHERICAL_ECEF]:Q,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:D,[N.PLATE_CARREE]:function(n,e,l,C){z(n,e,l,C),d(l,C,l,C)},[N.WGS84]:z,[N.WGS84_ECEF]:f},[N.SPHERICAL_ECEF]:{[N.CGCS2000]:k,[N.GCSMARS2000]:null,[N.GCSMOON2000]:null,[N.LON_LAT]:k,[N.SPHERICAL_ECEF]:f,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:y,[N.PLATE_CARREE]:function(n,e,l,C){k(n,e,l,C),d(l,C,l,C)},[N.WGS84]:k,[N.WGS84_ECEF]:x},[N.SPHERICAL_MARS_PCPF]:{[N.CGCS2000]:null,[N.GCSMARS2000]:q,[N.GCSMOON2000]:null,[N.LON_LAT]:q,[N.SPHERICAL_ECEF]:null,[N.SPHERICAL_MARS_PCPF]:f,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:null,[N.PLATE_CARREE]:null,[N.WGS84]:null,[N.WGS84_ECEF]:null},[N.SPHERICAL_MOON_PCPF]:{[N.CGCS2000]:null,[N.GCSMARS2000]:null,[N.GCSMOON2000]:j,[N.LON_LAT]:j,[N.SPHERICAL_ECEF]:null,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:f,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:null,[N.PLATE_CARREE]:null,[N.WGS84]:null,[N.WGS84_ECEF]:null},[N.UNKNOWN]:{[N.CGCS2000]:null,[N.GCSMARS2000]:null,[N.GCSMOON2000]:null,[N.LON_LAT]:null,[N.SPHERICAL_ECEF]:null,[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:f,[N.WEB_MERCATOR]:null,[N.PLATE_CARREE]:null,[N.WGS84]:null,[N.WGS84_ECEF]:null},[N.LON_LAT]:{[N.CGCS2000]:f,[N.GCSMARS2000]:f,[N.GCSMOON2000]:f,[N.LON_LAT]:f,[N.SPHERICAL_ECEF]:g,[N.SPHERICAL_MARS_PCPF]:m,[N.SPHERICAL_MOON_PCPF]:B,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:h,[N.PLATE_CARREE]:d,[N.WGS84]:f,[N.WGS84_ECEF]:v},[N.PLATE_CARREE]:{[N.CGCS2000]:U,[N.GCSMARS2000]:null,[N.GCSMOON2000]:null,[N.LON_LAT]:U,[N.SPHERICAL_ECEF]:function(n,e,l,C){U(n,e,l,C),g(l,C,l,C)},[N.SPHERICAL_MARS_PCPF]:null,[N.SPHERICAL_MOON_PCPF]:null,[N.UNKNOWN]:null,[N.WEB_MERCATOR]:function(n,e,l,C){U(n,e,l,C),h(l,C,l,C)},[N.PLATE_CARREE]:f,[N.WGS84]:U,[N.WGS84_ECEF]:function(n,e,l,C){U(n,e,l,C),v(l,C,l,C)}}};function G(n,e,l=V()){return null==n||null==e?null:J(n,e,l).projector}function W(n,e){switch(G(n,e,Z)){case f:return"copy3";case g:return"wgs84ToSphericalECEF";case h:return"wgs84ToWebMercator";case d:return"wgs84ToPlateCarree";case v:return"wgs84ToWGS84ECEF";case T:return"webMercatorToWGS84";case I:return"webMercatorToSphericalECEF";case p:return"webMercatorToWGS84ECEF";case K:return"webMercatorToPlateCarree";case z:return"wgs84ECEFToWGS84";case Q:return"wgs84ECEFToSphericalECEF";case D:return"wgs84ECEFToWebMercator";case k:return"sphericalECEFToWGS84";case y:return"sphericalECEFToWebMercator";case q:return"sphericalMarsPCPFToMars2000";case j:return"sphericalMoonPCPFToMoon2000";case x:return"sphericalECEFToWGS84ECEF";case m:return"mars2000ToSphericalPCPF";case B:return"moon2000ToSphericalPCPF";default:return null}}function F(n,e){return n?e.spatialReference===n?e.spatialReferenceId:(e.spatialReference=n,"metersPerUnit"in e&&(e.metersPerUnit=u(n,1)),r(n)?e.spatialReferenceId=N.SPHERICAL_ECEF:R(n)?e.spatialReferenceId=N.WGS84:s(n)?e.spatialReferenceId=N.WEB_MERCATOR:_(n)?e.spatialReferenceId=N.PLATE_CARREE:n.wkt===P.wkt?e.spatialReferenceId=N.WGS84_ECEF:n.wkid===A.CGCS2000?e.spatialReferenceId=N.CGCS2000:n.wkt===c.wkt?e.spatialReferenceId=N.SPHERICAL_MARS_PCPF:n.wkt===M.wkt?e.spatialReferenceId=N.SPHERICAL_MOON_PCPF:o(n)?e.spatialReferenceId=N.GCSMARS2000:O(n)?e.spatialReferenceId=N.GCSMOON2000:e.spatialReferenceId=N.UNKNOWN):N.UNKNOWN}function f(n,e,l,C){n!==l&&(l[C++]=n[e++],l[C++]=n[e++],l[C]=n[e])}function T(n,e,l,C){l[C]=nn*(n[e]/Cn),l[C+1]=nn*(ln-2*Math.atan(Math.exp(-n[e+1]/Cn))),l[C+2]=n[e+2]}function I(n,e,l,C){const E=n[e]/Cn,t=ln-2*Math.atan(Math.exp(-n[e+1]/Cn)),a=Cn+n[e+2],S=Math.cos(t)*a;l[C]=Math.cos(E)*S,l[C+1]=Math.sin(E)*S,l[C+2]=Math.sin(t)*a}function p(n,e,l,C){T(n,e,l,C),v(l,C,l,C)}function H(n,l,C,E,t){const a=.4999999*en,S=e($*n[l+1],-a,a),u=Math.sin(S);C[E++]=$*n[l]*t.radius,C[E++]=t.halfSemiMajorAxis*Math.log((1+u)/(1-u)),C[E]=n[l+2]}function h(n,e,l,C){H(n,e,l,C,a)}function d(n,e,l,C){l[C]=n[e]*En,l[C+1]=n[e+1]*En,l[C+2]=n[e+2]}function U(n,e,l,C){l[C]=n[e]*tn,l[C+1]=n[e+1]*tn,l[C+2]=n[e+2]}function K(n,e,l,C){T(n,e,l,C),d(l,C,l,C)}function w(n,e,l,C,E){const t=E+n[e+2],a=$*n[e+1],S=$*n[e],u=Math.cos(a)*t;l[C]=Math.cos(S)*u,l[C+1]=Math.sin(S)*u,l[C+2]=Math.sin(a)*t}function B(n,e,l,C){w(n,e,l,C,E.radius)}function m(n,e,l,C){w(n,e,l,C,t.radius)}function g(n,e,l,C){w(n,e,l,C,a.radius)}function b(n,e,l,E,t){const a=n[e],S=n[e+1],u=n[e+2],r=Math.sqrt(a*a+S*S+u*u),R=C(u/(0===r?1:r)),s=Math.atan2(S,a);l[E++]=nn*s,l[E++]=nn*R,l[E]=r-t}function j(n,e,l,C){b(n,e,l,C,E.radius)}function q(n,e,l,C){b(n,e,l,C,t.radius)}function k(n,e,l,C){b(n,e,l,C,a.radius)}function y(n,e,l,C){k(n,e,l,C),h(l,C,l,C)}function x(n,e,l,C){k(n,e,l,C),v(l,C,l,C)}function v(n,e,l,C){!function(n,e,l,C,E){const t=$*n[e],a=$*n[e+1],S=n[e+2],u=Math.sin(a),r=Math.cos(a),R=E.radius/Math.sqrt(1-E.eccentricitySquared*u*u);l[C++]=(R+S)*r*Math.cos(t),l[C++]=(R+S)*r*Math.sin(t),l[C++]=(R*(1-E.eccentricitySquared)+S)*u}(n,e,l,C,a)}function z(n,e,l,C){const E=i,t=n[e],S=n[e+1],u=n[e+2];let r,R,s,_,P,A,c,M,o,O,N,L,G,W,F,f,T,I,p,H,h;r=Math.abs(u),R=t*t+S*S,s=Math.sqrt(R),_=R+u*u,P=Math.sqrt(_),H=Math.atan2(S,t),A=u*u/_,c=R/_,W=E.a2/P,F=E.a3-E.a4/P,c>.3?(M=r/P*(1+c*(E.a1+W+A*F)/P),p=Math.asin(M),O=M*M,o=Math.sqrt(1-O)):(o=s/P*(1-A*(E.a5-W-c*F)/P),p=Math.acos(o),O=1-o*o,M=Math.sqrt(O)),N=1-a.eccentricitySquared*O,L=a.radius/Math.sqrt(N),G=E.a6*L,W=s-L*o,F=r-G*M,T=o*W+M*F,f=o*F-M*W,I=f/(G/N+T),p+=I,h=T+f*I/2,u<0&&(p=-p),l[C++]=nn*H,l[C++]=nn*p,l[C]=h}function Q(n,e,l,C){z(n,e,l,C),g(l,C,l,C)}function D(n,e,l,C){z(n,e,l,C),h(l,C,l,C)}function J(n,e,l){if(null==n||null==e||l.source.spatialReference===n&&l.dest.spatialReference===e)return l;const C=F(n,l.source),E=F(e,l.dest);return C===N.UNKNOWN&&E===N.UNKNOWN?S(n,e)?l.projector=f:l.projector=null:l.projector=L[C][E],l}function V(){return{source:{spatialReference:null,spatialReferenceId:N.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:N.UNKNOWN,metersPerUnit:1},projector:f}}const X={spatialReference:null,spatialReferenceId:N.UNKNOWN},Y={spatialReference:null,spatialReferenceId:N.UNKNOWN},Z=V(),$=l(1),nn=n(1),en=Math.PI,ln=.5*en,Cn=a.radius,En=Cn*en/180,tn=180/(Cn*en);function an(n,e,l,C,E,t,a=1){const S=G(e,E,Z);if(null==S)return!1;if(S===f){if(n===C&&l===t)return!0;const e=l+3*a;for(let E=l,a=t;E<e;E++,a++)C[a]=n[E];return!0}const u=l+3*a;for(let e=l,E=t;e<u;e+=3,E+=3)S(n,e,C,E);return!0}const Sn=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:an},Symbol.toStringTag,{value:"Module"}));export{N as P,Z as a,L as b,F as c,Y as d,V as e,J as f,G as g,f as h,tn as i,b as j,W as k,H as l,Sn as m,an as p,X as s,h as w};