// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/libs/gl-matrix-2/math/mat3 ../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../core/libs/gl-matrix-2/math/mat4 ../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../projection ../../spatialReferenceEllipsoidUtils ../../projection/computeTranslationToOriginAndRotation ../../projection/projectBuffer ../DoubleArray ../Ellipsoid ../spatialReferenceUtils ../webMercatorUtils ../buffer/BufferView ../../../chunks/vec3 ../../../chunks/vec4".split(" "),
function(h,D,x,M,E,u,y,v,N,z,J,A,F,O,G,P,m,w,Q){function K(a,b,c,e,d){b=b===h.VectorType.NORMAL?3:4;const g=[0,0];for(let k=0,p=1;k<a.length;k+=b,p+=3){e(c[p],g);const r=a[k]*g[0],l=a[k+1]*g[1],H=a[k+2],I=1/Math.sqrt(r*r+l*l+H*H);d[k]=r*I;d[k+1]=l*I;d[k+2]=H*I;4===b&&(d[k+3]=a[k+3])}return d}function L(a,b,c,e,d){J.computeTranslationToOriginAndRotation(e,c,q,e);a===t.FROM_PCPF&&E.invert(q,q);switch(b){case h.VectorType.NORMAL:return x.normalFromMat4(d,q);case h.VectorType.TANGENT:return x.fromMat4(d,
q)}}function B(a,b,c,e,d,g,k){if(b){var p=e.count,r=z.getSphericalPCPF(g);if(g.isWGS84||G.isCGCS2000(g)||G.isMars(g)||G.isMoon(g))for(e=0;e<p;e++)d.getVec(e,C),b.getVec(e,n),y.transformMat3(n,n,L(a,c,C,r,f)),k.setVec(e,n);else for(g=0;g<p;g++){d.getVec(g,C);b.getVec(g,n);var l=P.y2lat(e.get(g,1));l=Math.cos(l);c===h.VectorType.TANGENT!==(a===t.TO_PCPF)&&(l=1/l);L(a,c,C,r,f);a===t.TO_PCPF?(f[0]*=l,f[1]*=l,f[2]*=l,f[3]*=l,f[4]*=l,f[5]*=l):(f[0]*=l,f[3]*=l,f[6]*=l,f[1]*=l,f[4]*=l,f[7]*=l);y.transformMat3(n,
n,f);y.normalize(n,n);k.setVec(g,n)}return k}}function R({vertexSpace:a,transform:b,inSpatialReference:c,outSpatialReference:e,localMode:d,outPositions:g,positions:k}){const p=a.origin??v.ZEROS;a=null!=a.origin?b?.localMatrix??u.IDENTITY:u.IDENTITY;b=z.getSphericalPCPF(c);d=e.isWebMercator&&d||!N.canProjectWithoutEngine(c,b)?c:b;J.computeTranslationToOriginAndRotation(c,p,q,d);E.multiply(q,q,a);c=g??F.newDoubleArray(k.length);w.transformMat4(c,k,q);A.projectBuffer(c,d,0,c,e,0,c.length/3);return c}
function S({vertexSpace:a,transform:b,outPositions:c,positions:e,inSpatialReference:d,outSpatialReference:g}){b=null!=a.origin?b?.localMatrix??u.IDENTITY:u.IDENTITY;c=c??F.newDoubleArray(e.length);E.equals(b,u.IDENTITY)?F.copyInto(c,e):w.transformMat4(c,e,b);a=a.origin??v.ZEROS;if(!y.exactEquals(a,v.ZEROS)){const [k,p,r]=a;for(a=0;a<c.length;a+=3)c[a]+=k,c[a+1]+=p,c[a+2]+=r}return A.projectBuffer(c,d,0,c,g,0,c.length/3)?c:null}h.VectorType=void 0;(function(a){a[a.NORMAL=0]="NORMAL";a[a.TANGENT=1]=
"TANGENT"})(h.VectorType||(h.VectorType={}));var t;(function(a){a[a.TO_PCPF=0]="TO_PCPF";a[a.FROM_PCPF=1]="FROM_PCPF"})(t||={});const C=v.create(),n=v.create(),q=u.create(),f=M.create();h.loadProjectErrorMessage="Projection may be possible after calling projection.load().";h.logProjectionError=function(a,b,c,e){a.error(`Failed to project from (wkid:${b.wkid}) to (wkid:${c.wkid}).${e?" ":""}${e}`)};h.project=function(a){return"local"===a.vertexSpace.type?R(a):S(a)};h.projectFromPCPF=function(a,b,c){return A.projectBuffer(a,
z.getSphericalPCPF(c),0,b,c,0,a.length/3)?b:null};h.projectNormalFromPCPF=function(a,b,c,e,d){return B(t.FROM_PCPF,m.BufferViewVec3f.fromTypedArray(a),h.VectorType.NORMAL,m.BufferViewVec3f64.fromTypedArray(b),m.BufferViewVec3f64.fromTypedArray(c),e,m.BufferViewVec3f.fromTypedArray(d))?d:null};h.projectNormalToPCPF=function(a,b,c,e,d){return B(t.TO_PCPF,m.BufferViewVec3f.fromTypedArray(a),h.VectorType.NORMAL,m.BufferViewVec3f64.fromTypedArray(b),m.BufferViewVec3f64.fromTypedArray(c),e,m.BufferViewVec3f.fromTypedArray(d))?
d:null};h.projectTangentFromPCPF=function(a,b,c,e,d){if(!B(t.FROM_PCPF,m.BufferViewVec3f.fromTypedArray(a,16),h.VectorType.TANGENT,m.BufferViewVec3f64.fromTypedArray(b),m.BufferViewVec3f64.fromTypedArray(c),e,m.BufferViewVec3f.fromTypedArray(d,16)))return null;for(b=3;b<a.length;b+=4)d[b]=a[b];return d};h.projectTangentToPCPF=function(a,b,c,e,d){if(!B(t.TO_PCPF,m.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),h.VectorType.TANGENT,m.BufferViewVec3f64.fromTypedArray(b),m.BufferViewVec3f64.fromTypedArray(c),
e,m.BufferViewVec3f.fromTypedArray(d,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(b=3;b<a.length;b+=4)d[b]=a[b];return d};h.projectToPCPF=function(a,b,c){return A.projectBuffer(a,b,0,c,z.getSphericalPCPF(b),0,a.length/3)?c:null};h.transformNormal=function(a,b,c){x.normalFromMat4(f,c);w.transformMat3(b,a,f);D.hasScaling(f)&&w.normalize(b,b);return b};h.transformTangent=function(a,b,c){x.fromMat4(f,c);Q.transformMat3(b,a,f);D.hasScaling(f)&&w.normalize(b,b,4);return b};h.transformVectorENUPlateCarree=
function(a,b,c,e){const d=b===h.VectorType.NORMAL;return K(a,b,c,(g,k)=>{g=Math.cos(D.deg2rad(g));k[0]=d?g:1/g;k[1]=1},e)};h.transformVectorWMPlateCarree=function(a,b,c,e){const d=b===h.VectorType.NORMAL;return K(a,b,c,(g,k)=>{g=Math.cosh(-g/O.earth.radius);k[0]=1;k[1]=d?g:1/g},e)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});