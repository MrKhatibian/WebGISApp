// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/mathUtils","../../../../chunks/vec32","../../../../core/libs/gl-matrix-2/factories/vec3f64","../../../../geometry/support/FloatArray"],function(h,n,p,q,t){function k(a,d,c,b,e,f=2){var g=1/(Math.abs(c)+Math.abs(b)+Math.abs(e));c*=g;b*=g;g=0>=e?(0<=b?1:-1)*(1-Math.abs(c)):b;d*=f;a[d]=l(0>=e?(0<=c?1:-1)*(1-Math.abs(b)):c);a[d+1]=l(g)}function r(a,d,c,b=2){b*=c;c=m(d[b]);d=m(d[b+1]);b=1-Math.abs(c)-Math.abs(d);a[2]=b;0>b?(a[0]=(0<=c?1:-1)*(1-Math.abs(d)),a[1]=(0<=
d?1:-1)*(1-Math.abs(c))):(a[0]=c,a[1]=d);p.normalize(a,a)}function l(a){return n.clamp(Math.round(32767*a),-32767,32767)}function m(a){return n.clamp(a/32767,-1,1)}h.compressAndTransformNormals=function(a,d){const c=a.length/3,b=new Int16Array(2*c);let e=0;const f=q.create();for(let g=0;g<c;++g)f[0]=a[e++],f[1]=a[e++],f[2]=a[e++],p.transformMat3(f,f,d),k(b,g,f[0],f[1],f[2]);return b};h.compressNormal=k;h.compressNormals=function(a){const d=a.length/3,c=new Int16Array(2*d);let b=0;for(let e=0;e<d;++e)k(c,
e,a[b++],a[b++],a[b++]);return c};h.decodeInt16=m;h.decompressNormal=r;h.decompressNormals=function(a,d=2){const c=a.length/d,b=t.newFloatArray(3*c),e=q.create();let f=0;for(let g=0;g<c;++g)r(e,a,g,d),b[f++]=e[0],b[f++]=e[1],b[f++]=e[2];return b};h.encodeInt16=l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});