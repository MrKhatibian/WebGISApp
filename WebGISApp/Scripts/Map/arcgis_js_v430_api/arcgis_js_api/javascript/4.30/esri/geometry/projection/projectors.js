// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/mathUtils ../../core/unitUtils ../ellipsoidUtils ../support/Ellipsoid ../support/geodesicConstants ../support/spatialReferenceUtils ../support/SupportedGCSWkids".split(" "),function(a,G,ha,H,n,ia,z,ja){function S(b,c,d=K()){return null==b||null==c?null:T(b,c,d).projector}function L(b,c){if(!b)return a.ProjectionID.UNKNOWN;if(c.spatialReference===b)return c.spatialReferenceId;c.spatialReference=b;"metersPerUnit"in c&&(c.metersPerUnit=ha.getMetersPerUnitForSR(b,1));return H.isSphericalECEF(b)?
c.spatialReferenceId=a.ProjectionID.SPHERICAL_ECEF:z.isWGS84(b)?c.spatialReferenceId=a.ProjectionID.WGS84:z.isWebMercator(b)?c.spatialReferenceId=a.ProjectionID.WEB_MERCATOR:z.isPlateCarree(b)?c.spatialReferenceId=a.ProjectionID.PLATE_CARREE:b.wkt===H.WGS84ECEFSpatialReferenceLike.wkt?c.spatialReferenceId=a.ProjectionID.WGS84_ECEF:b.wkid===ja.SupportedGCSWkids.CGCS2000?c.spatialReferenceId=a.ProjectionID.CGCS2000:b.wkt===H.SphericalPCPFMarsLike.wkt?c.spatialReferenceId=a.ProjectionID.SPHERICAL_MARS_PCPF:
b.wkt===H.SphericalPCPFMoonLike.wkt?c.spatialReferenceId=a.ProjectionID.SPHERICAL_MOON_PCPF:z.isMars(b)?c.spatialReferenceId=a.ProjectionID.GCSMARS2000:z.isMoon(b)?c.spatialReferenceId=a.ProjectionID.GCSMOON2000:c.spatialReferenceId=a.ProjectionID.UNKNOWN}function k(b,c,d,e){b!==d&&(d[e++]=b[c++],d[e++]=b[c++],d[e]=b[c])}function A(b,c,d,e){d[e]=b[c]/t*B;d[e+1]=B*(U-2*Math.atan(Math.exp(-b[c+1]/t)));d[e+2]=b[c+2]}function V(b,c,d,e){const f=b[c]/t,g=U-2*Math.atan(Math.exp(-b[c+1]/t));b=t+b[c+2];c=
Math.cos(g)*b;d[e]=Math.cos(f)*c;d[e+1]=Math.sin(f)*c;d[e+2]=Math.sin(g)*b}function W(b,c,d,e){A(b,c,d,e);u(d,e,d,e)}function X(b,c,d,e,f){var g=.4999999*I;g=G.clamp(C*b[c+1],-g,g);g=Math.sin(g);d[e++]=C*b[c]*f.radius;d[e++]=f.halfSemiMajorAxis*Math.log((1+g)/(1-g));d[e]=b[c+2]}function r(b,c,d,e){X(b,c,d,e,n.earth)}function v(b,c,d,e){d[e]=b[c]*Y;d[e+1]=b[c+1]*Y;d[e+2]=b[c+2]}function D(b,c,d,e){d[e]=b[c]*M;d[e+1]=b[c+1]*M;d[e+2]=b[c+2]}function Z(b,c,d,e){A(b,c,d,e);v(d,e,d,e)}function N(b,c,d,
e,f){f+=b[c+2];const g=C*b[c+1];b=C*b[c];c=Math.cos(g)*f;d[e]=Math.cos(b)*c;d[e+1]=Math.sin(b)*c;d[e+2]=Math.sin(g)*f}function O(b,c,d,e){N(b,c,d,e,n.moon.radius)}function P(b,c,d,e){N(b,c,d,e,n.mars.radius)}function E(b,c,d,e){N(b,c,d,e,n.earth.radius)}function J(b,c,d,e,f){var g=b[c];const h=b[c+1];c=b[c+2];b=Math.sqrt(g*g+h*h+c*c);c=G.asinClamped(c/(0===b?1:b));g=Math.atan2(h,g);d[e++]=B*g;d[e++]=B*c;d[e]=b-f}function Q(b,c,d,e){J(b,c,d,e,n.moon.radius)}function R(b,c,d,e){J(b,c,d,e,n.mars.radius)}
function w(b,c,d,e){J(b,c,d,e,n.earth.radius)}function aa(b,c,d,e){w(b,c,d,e);r(d,e,d,e)}function ba(b,c,d,e){w(b,c,d,e);u(d,e,d,e)}function u(b,c,d,e){var f=n.earth;const g=C*b[c];var h=C*b[c+1];b=b[c+2];c=Math.sin(h);h=Math.cos(h);const x=f.radius/Math.sqrt(1-f.eccentricitySquared*c*c);d[e++]=(x+b)*h*Math.cos(g);d[e++]=(x+b)*h*Math.sin(g);d[e++]=(x*(1-f.eccentricitySquared)+b)*c}function y(b,c,d,e){var f=ia.earthEllipsoidConstants,g=b[c],h=b[c+1];b=b[c+2];let x;c=Math.abs(b);var q=g*g+h*h;var F=
Math.sqrt(q);var l=q+b*b;var m=Math.sqrt(l);g=Math.atan2(h,g);var p=b*b/l;l=q/l;h=f.a2/m;q=f.a3-f.a4/m;.3<l?(p=c/m*(1+l*(f.a1+h+p*q)/m),m=Math.asin(p),h=p*p,l=Math.sqrt(1-h)):(l=F/m*(1-p*(f.a5-h-l*q)/m),m=Math.acos(l),h=1-l*l,p=Math.sqrt(h));x=1-n.earth.eccentricitySquared*h;h=n.earth.radius/Math.sqrt(x);f=f.a6*h;h=F-h*l;q=c-f*p;c=l*h+p*q;F=l*q-p*h;f=F/(f/x+c);m+=f;0>b&&(m=-m);d[e++]=B*g;d[e++]=B*m;d[e]=c+F*f/2}function ca(b,c,d,e){y(b,c,d,e);E(d,e,d,e)}function da(b,c,d,e){y(b,c,d,e);r(d,e,d,e)}
function T(b,c,d){if(null==b||null==c||d.source.spatialReference===b&&d.dest.spatialReference===c)return d;const e=L(b,d.source),f=L(c,d.dest);e===a.ProjectionID.UNKNOWN&&f===a.ProjectionID.UNKNOWN?z.equals(b,c)?d.projector=k:d.projector=null:d.projector=ea[e][f];return d}function K(){return{source:{spatialReference:null,spatialReferenceId:a.ProjectionID.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:a.ProjectionID.UNKNOWN,metersPerUnit:1},projector:k}}a.ProjectionID=void 0;
(function(b){b[b.UNKNOWN=0]="UNKNOWN";b[b.SPHERICAL_ECEF=1]="SPHERICAL_ECEF";b[b.WGS84=2]="WGS84";b[b.WEB_MERCATOR=3]="WEB_MERCATOR";b[b.WGS84_ECEF=4]="WGS84_ECEF";b[b.CGCS2000=5]="CGCS2000";b[b.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF";b[b.GCSMARS2000=7]="GCSMARS2000";b[b.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF";b[b.GCSMOON2000=9]="GCSMOON2000";b[b.LON_LAT=10]="LON_LAT";b[b.PLATE_CARREE=11]="PLATE_CARREE"})(a.ProjectionID||(a.ProjectionID={}));const ea={[a.ProjectionID.WGS84]:{[a.ProjectionID.CGCS2000]:k,
[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:k,[a.ProjectionID.SPHERICAL_ECEF]:E,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:r,[a.ProjectionID.PLATE_CARREE]:v,[a.ProjectionID.WGS84]:k,[a.ProjectionID.WGS84_ECEF]:u},[a.ProjectionID.CGCS2000]:{[a.ProjectionID.CGCS2000]:k,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:k,
[a.ProjectionID.SPHERICAL_ECEF]:E,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:r,[a.ProjectionID.PLATE_CARREE]:v,[a.ProjectionID.WGS84]:k,[a.ProjectionID.WGS84_ECEF]:u},[a.ProjectionID.GCSMARS2000]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:k,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:k,[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:P,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,
[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.GCSMOON2000]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:k,[a.ProjectionID.LON_LAT]:k,[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:O,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,
[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.WEB_MERCATOR]:{[a.ProjectionID.CGCS2000]:A,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:A,[a.ProjectionID.SPHERICAL_ECEF]:V,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:k,[a.ProjectionID.PLATE_CARREE]:Z,[a.ProjectionID.WGS84]:A,[a.ProjectionID.WGS84_ECEF]:W},[a.ProjectionID.WGS84_ECEF]:{[a.ProjectionID.CGCS2000]:y,
[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:y,[a.ProjectionID.SPHERICAL_ECEF]:ca,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:da,[a.ProjectionID.PLATE_CARREE]:function(b,c,d,e){y(b,c,d,e);v(d,e,d,e)},[a.ProjectionID.WGS84]:y,[a.ProjectionID.WGS84_ECEF]:k},[a.ProjectionID.SPHERICAL_ECEF]:{[a.ProjectionID.CGCS2000]:w,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,
[a.ProjectionID.LON_LAT]:w,[a.ProjectionID.SPHERICAL_ECEF]:k,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:aa,[a.ProjectionID.PLATE_CARREE]:function(b,c,d,e){w(b,c,d,e);v(d,e,d,e)},[a.ProjectionID.WGS84]:w,[a.ProjectionID.WGS84_ECEF]:ba},[a.ProjectionID.SPHERICAL_MARS_PCPF]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:R,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:R,[a.ProjectionID.SPHERICAL_ECEF]:null,
[a.ProjectionID.SPHERICAL_MARS_PCPF]:k,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.SPHERICAL_MOON_PCPF]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:Q,[a.ProjectionID.LON_LAT]:Q,[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:k,
[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.UNKNOWN]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:null,[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:k,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,
[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.LON_LAT]:{[a.ProjectionID.CGCS2000]:k,[a.ProjectionID.GCSMARS2000]:k,[a.ProjectionID.GCSMOON2000]:k,[a.ProjectionID.LON_LAT]:k,[a.ProjectionID.SPHERICAL_ECEF]:E,[a.ProjectionID.SPHERICAL_MARS_PCPF]:P,[a.ProjectionID.SPHERICAL_MOON_PCPF]:O,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:r,[a.ProjectionID.PLATE_CARREE]:v,[a.ProjectionID.WGS84]:k,[a.ProjectionID.WGS84_ECEF]:u},[a.ProjectionID.PLATE_CARREE]:{[a.ProjectionID.CGCS2000]:D,
[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:D,[a.ProjectionID.SPHERICAL_ECEF]:function(b,c,d,e){D(b,c,d,e);E(d,e,d,e)},[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:function(b,c,d,e){D(b,c,d,e);r(d,e,d,e)},[a.ProjectionID.PLATE_CARREE]:k,[a.ProjectionID.WGS84]:D,[a.ProjectionID.WGS84_ECEF]:function(b,c,d,e){D(b,c,d,e);u(d,e,d,e)}}},ka={spatialReference:null,
spatialReferenceId:a.ProjectionID.UNKNOWN},la={spatialReference:null,spatialReferenceId:a.ProjectionID.UNKNOWN},fa=K(),C=G.deg2rad(1),B=G.rad2deg(1),I=Math.PI,U=.5*I,t=n.earth.radius,Y=t*I/180,M=180/(t*I);a.classifySpatialReference=L;a.copy3=k;a.createEmptyProjectorCache=K;a.destClassificationCache=la;a.getProjector=S;a.getProjectorName=function(b,c){switch(S(b,c,fa)){case k:return"copy3";case E:return"wgs84ToSphericalECEF";case r:return"wgs84ToWebMercator";case v:return"wgs84ToPlateCarree";case u:return"wgs84ToWGS84ECEF";
case A:return"webMercatorToWGS84";case V:return"webMercatorToSphericalECEF";case W:return"webMercatorToWGS84ECEF";case Z:return"webMercatorToPlateCarree";case y:return"wgs84ECEFToWGS84";case ca:return"wgs84ECEFToSphericalECEF";case da:return"wgs84ECEFToWebMercator";case w:return"sphericalECEFToWGS84";case aa:return"sphericalECEFToWebMercator";case R:return"sphericalMarsPCPFToMars2000";case Q:return"sphericalMoonPCPFToMoon2000";case ba:return"sphericalECEFToWGS84ECEF";case P:return"mars2000ToSphericalPCPF";
case O:return"moon2000ToSphericalPCPF";default:return null}};a.invPlateCarreeScale=M;a.lonLatToWebMercatorComparable=X;a.populateProjectorCache=T;a.projectionTable=ea;a.projectorCache=fa;a.sourceClassificationCache=ka;a.sphericalPCPFtoLonLatElevation=J;a.wgs84ToWebMercator=r;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});