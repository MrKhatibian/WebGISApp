// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec32","../../../../core/libs/gl-matrix-2/factories/vec3f64"],function(l,e,h){function y(a,b,c){a=e.dot(a,b)-c;return 1E-5>=Math.abs(a)}function z(a,b,c){const d=h.create(),f=h.create();e.sub(f,b,a);b=h.create();e.sub(b,c,a);e.cross(d,f,b);e.normalize(d,d);return d}function x(a,b,c,d){const f=[b,c,d];b=z(b,c,d);c=e.dot(f[0],b);if(!y(a,b,c))return!1;for(a=0;3>a;++a){b=f[a];var g=f[(a+1)%3];c=f[(a+2)%3];d=h.create();e.sub(d,g,b);e.normalize(d,d);g=h.create();e.sub(g,
c,b);const k=e.dot(g,d);g=h.create();e.scaleAndAdd(g,b,d,k);d=h.create();e.sub(d,c,g);e.normalize(d,d);b=e.dot(b,d);if(!(-1E-4<=e.dot(d,g)-b))return!1}return!0}function A(a){const b=h.create();e.sub(b,a[1],a[0]);e.normalize(b,b);const c=h.create();e.sub(c,a[2],a[0]);e.normalize(c,c);a=h.create();e.cross(a,b,c);e.normalize(a,a);return a}function B(a,b,c){const d=h.create();e.sub(d,c,b);e.normalize(d,d);c=h.create();e.sub(c,a,b);a=e.dot(c,d);c=h.create();e.scaleAndAdd(c,b,d,a);return c}function v(a,
b,c){const d=h.create();e.sub(d,c,b);const f=e.len(d);e.normalize(d,d);var g=h.create();e.sub(g,a,b);g=e.dot(g,d);if(0>g)return e.dist(b,a);if(g>f)return e.dist(c,a);c=h.create();e.scaleAndAdd(c,b,d,g);return e.dist(c,a)}function C(a,b,c){return e.dot(a,b)-c}function D(a,b,c){const d=h.create(),f=h.create();e.sub(f,b,a);b=h.create();e.sub(b,c,a);e.cross(d,f,b);e.normalize(d,d);a=e.dot(d,a);return{normal:d,d:a}}function E(a,b,c,d){const {normal:f,d:g}=D(b,c,d),k=C(a,f,g),m=h.create();e.scaleAndAdd(m,
a,f,-k);return x(m,b,c,d)?k:Math.min(v(a,b,c),v(a,c,d),v(a,d,b))}function F(a){return 128>a?Uint8Array:32768>a?Uint16Array:-2147483648>a?Uint32Array:Array}l.binarySearchSortedArray=function(a,b){var c=a.length;if(0===c)return 0;if(b<a[0])return-1;if(b>=a[c-1])return c;let d=0;for(--c;1<c-d;){const f=Math.floor(.5*(c+d));b>=a[f]?d=f:c=f}return d};l.calculateNormalFromVertices=A;l.createUintArray=function(a,b){return new (F(a))(b)};l.distancePointLine=function(a,b,c){b=B(a,b,c);return e.dist(b,a)};
l.distancePointPlane=C;l.distancePointSegment=v;l.distancePointTriangle=E;l.elevationAlignVertexGlobal=function(a,b,c,d){const [f,g,k]=d??a;c=k-c;b/=Math.sqrt(f*f+g*g+c*c);a[0]+=f*b;a[1]+=g*b;a[2]+=c*b};l.elevationAlignVertexLocal=function(a,b){a[2]+=b};l.generateTriangleAabbsGlobal=function(a,b,c,d,f,g,k){g-=k;b-=a;const m=new Float64Array(4*b);for(let w=0;w<b;++w){var n=3*(w+a),p=f*c[n+0],t=g/(d[p+2]-k);const G=d[p+0]*t;p=d[p+1]*t;var u=f*c[n+1],q=g/(d[u+2]-k);t=d[u+0]*q;u=d[u+1]*q;q=f*c[n+2];var r=
g/(d[q+2]-k);n=d[q+0]*r;q=d[q+1]*r;r=4*w;m[r+0]=Math.min(G,t,n);m[r+1]=Math.min(p,u,q);m[r+2]=Math.max(G,t,n);m[r+3]=Math.max(p,u,q)}return m};l.generateTriangleAabbsLocal=function(a,b,c,d,f){b-=a;const g=new Float64Array(4*b);for(let t=0;t<b;++t){var k=3*(t+a),m=f*c[k+0];const u=d[m+0];m=d[m+1];var n=f*c[k+1];const q=d[n+0];n=d[n+1];var p=f*c[k+2];k=d[p+0];p=d[p+1];const r=4*t;g[r+0]=Math.min(u,q,k);g[r+1]=Math.min(m,n,p);g[r+2]=Math.max(u,q,k);g[r+3]=Math.max(m,n,p)}return g};l.getConstructorForValueCount=
F;l.getNearestPointOnLine=B;l.getRayTriangleIntersectionDistance=function(a,b,c){const d=h.create();e.sub(d,b,a);var f=A(c);const g=e.dot(f,c[0]),k=e.dot(f,a)-g;b=e.dot(f,b)-g;if(0<k*b)return Infinity;f=h.create();e.scaleAndAdd(f,a,d,(0-k)/(b-k));return x(f,c[0],c[1],c[2])?0:E(f,c[0],c[1],c[2])};l.getTriangleNormal=z;l.getTrianglePlane=D;l.isPointInPlane=y;l.isPointInTriangle=x;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});