// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../Viewpoint ../../core/Collection ../../core/mathUtils ../../core/unitUtils ../../core/libs/gl-matrix-2/math/common ../../core/libs/gl-matrix-2/math/mat2d ../../core/libs/gl-matrix-2/factories/mat2df64 ../../core/libs/gl-matrix-2/math/vec2 ../../core/libs/gl-matrix-2/factories/vec2f64 ../../geometry/Extent ../../geometry/Geometry ../../geometry/Point ../../geometry/projection ../../geometry/SpatialReference ../../geometry/support/normalizeUtils ../../geometry/support/spatialReferenceUtils".split(" "),
function(k,C,ca,da,O,D,t,A,g,n,P,Q,R,v,S,E,x){function F(a,b){return b.type?g.set(a,b.x,b.y):g.copy(a,b)}function G(a,b,c=0){var d=a.width,e=a.height;0!==c&&(d=da.deg2rad(c),c=Math.abs(Math.cos(d)),e=Math.abs(Math.sin(d)),d=a.width*c+a.height*e,e=a.width*e+a.height*c);return Math.max(d/Math.max(1,b[0]),e/Math.max(1,b[1]))*T(a.spatialReference)}async function y(a,b,c,d){if(!a||Array.isArray(a)&&!a.length)return null;ca.isCollection(a)&&(a=a.toArray());if(Array.isArray(a)&&a.length&&"object"===typeof a[0]){var e=
a.every(p=>"attributes"in p);var f=a.some(p=>!p.geometry),m=a;if(e&&f&&b&&b.allLayerViews){e=new Map;for(var r of a)a=r.layer,f=e.get(a)||[],m=r.attributes[a.objectIdField],null!=m&&f.push(m),e.set(a,f);const p=[];e.forEach((H,U)=>{const I=b.allLayerViews.find(z=>z.layer.id===U.id);if(I&&"queryFeatures"in I){const z=U.createQuery();z.objectIds=H;z.returnGeometry=!0;p.push(I.queryFeatures(z))}});r=await Promise.all(p);a=[];for(var h of r)if(h&&h.features&&h.features.length)for(var l of h.features)null!=
l.geometry&&a.push(l.geometry);m=a}for(var q of m)d=await y(q,b,c,d);return d}if(Array.isArray(a)&&2===a.length&&"number"===typeof a[0]&&"number"===typeof a[1])e=new R(a);else if(a instanceof Q)e=a;else if("geometry"in a)if(a.geometry)e=a.geometry;else if(a.layer){const p=a.layer;(h=b.allLayerViews.find(H=>H.layer.id===p.id))&&"queryFeatures"in h&&(l=p.createQuery(),l.objectIds=[a.attributes[p.objectIdField]],l.returnGeometry=!0,e=(await h.queryFeatures(l))?.features?.[0]?.geometry)}if(null==e)return null;
switch(e.type){case "point":h=new P({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});break;case "extent":case "multipoint":case "polygon":case "polyline":h=E.getDenormalizedExtent(e);break;default:h=e.extent}if(!h)return null;v.isLoaded()||v.canProjectWithoutEngine(h.spatialReference,c)||await v.load();h=v.project(h,c);if(!h)return null;d?(l=h.center,q=l.clone(),q.x=E.getClosestDenormalizedXToReference(l.x,d.center.x,c),q.x!==l.x&&h.centerAt(q),d=d.union(h)):d=h;return d}
function ea(a){if(a&&(!Array.isArray(a)||"number"!==typeof a[0])&&("object"===typeof a||Array.isArray(a)&&"object"===typeof a[0])){if("layer"in a&&null!=a.layer?.minScale&&null!=a.layer.maxScale){var b=a.layer;return{min:b.minScale,max:b.maxScale}}if(Array.isArray(a)&&a.length&&a.every(c=>"layer"in c)){let c=b=0;for(const d of a)a=d.layer,a?.minScale&&a.maxScale&&(b=a.minScale<b?a.minScale:b,c=a.maxScale>c?a.maxScale:c);return b&&c?{min:b,max:c}:null}}}function V(a,b){return x.equals(a.wkid?a:a.spatialReference||
S.WGS84,b)?a:v.project(a,b)}function u(a,b){const c=a.targetGeometry,d=b.targetGeometry;c.x=d.x;c.y=d.y;c.spatialReference=d.spatialReference;a.scale=b.scale;a.rotation=b.rotation;return a}function W(a,b,c){return c?g.set(a,.5*(b[0]-c.right+c.left),.5*(b[1]-c.bottom+c.top)):g.scale(a,b,.5)}function w(a){return a.scale*X(a.targetGeometry?.spatialReference)}function X(a){return null!=a&&x.isValid(a)?1/(39.37*O.getMetersPerUnitForSR(a)*96):1}function T(a){return x.isValid(a)?39.37*O.getMetersPerUnitForSR(a)*
96:1}function Y(a){return(a=x.getInfo(a))?a.valid[1]-a.valid[0]:0}const fa=180/Math.PI,ha=function(){const a=n.create();return function(b,c,d){const e=c.targetGeometry;F(a,e);c=.5*w(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=e.spatialReference;return b}}(),J=function(){const a=n.create();return function(b,c,d){return g.sub(b,g.scale(b,c,.5),W(a,c,d))}}(),Z=function(){const a=A.create(),b=n.create();return function(c,d,e,f){const m=w(d);d=D.toRadian(d.rotation)||
0;g.set(b,m,m);t.fromScaling(a,b);t.rotate(a,a,d);t.translate(a,a,J(b,e,f));t.translate(a,a,[0,f.top-f.bottom]);return g.set(c,a[4],a[5])}}(),K=function(){const a=n.create(),b=n.create(),c=n.create();return function(d,e,f,m,r,h){g.negate(a,e);g.scale(b,f,.5*h);g.set(c,1/m*h,-1/m*h);t.fromTranslation(d,b);r&&t.rotate(d,d,r);t.scale(d,d,c);t.translate(d,d,a);return d}}(),L=function(){const a=n.create();return function(b,c,d,e){const f=w(c),m=D.toRadian(c.rotation)||0;F(a,c.targetGeometry);return K(b,
a,d,f,m,e)}}(),ia=function(){const a=n.create();return function(b,c,d,e){const f=w(c);F(a,c.targetGeometry);return K(b,a,d,f,0,e)}}(),ja=function(){const a=n.create(),b=n.create(),c=[0,0,0];return function(d,e,f){g.subtract(a,d,e);g.normalize(a,a);g.subtract(b,d,f);g.normalize(b,b);g.cross(c,a,b);d=Math.acos(g.dot(a,b)/(g.length(a)*g.length(b)))*fa;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}(),ka=function(){const a=n.create();return function(b,c,d,e){const f=b.targetGeometry;u(b,c);Z(a,c,d,e);f.x+=
a[0];f.y+=a[1];return b}}(),aa=function(){return function(a,b,c){u(a,b);b=a.targetGeometry;b.x=c.x;b.y=c.y;b.spatialReference=c.spatialReference;return a}}(),la=function(){const a=n.create();return function(b,c,d,e,f){f||="center";g.sub(a,d,e);g.scale(a,a,.5);d=a[0];e=a[1];switch(f){case "center":g.set(a,0,0);break;case "left":g.set(a,-d,0);break;case "top":g.set(a,0,e);break;case "right":g.set(a,d,0);break;case "bottom":g.set(a,0,-e);break;case "top-left":g.set(a,-d,e);break;case "bottom-left":g.set(a,
-d,-e);break;case "top-right":g.set(a,d,e);break;case "bottom-right":g.set(a,d,-e)}B(b,c,a);return b}}(),ma=function(){const a=n.create();return function(b,c,d,e,f){u(b,c);isNaN(d)||0===d||(M(a,e,c,f),b.scale=c.scale*d,N(a,a,b,f),B(b,b,g.set(a,a[0]-e[0],e[1]-a[1])));return b}}(),ba=function(){const a=n.create();return function(b,c,d,e,f,m){u(b,c);isNaN(d)||0===d||(M(a,f,c,m),b.scale=c.scale*d,b.rotation+=e,N(a,a,b,m),B(b,b,g.set(a,a[0]-f[0],f[1]-a[1])));return b}}(),na=function(){const a=n.create(),
b=n.create();return function(c,d,e,f,m,r,h){J(b,r,h);g.add(a,m,b);return f?ba(c,d,e,f,a,r):ma(c,d,e,a,r)}}(),M=function(){const a=A.create();return function(b,c,d,e){var f=g.transformMat2d;L(a,d,e,1);d=t.invert(a,a);return f.call(g,b,c,d)}}(),N=function(){const a=A.create();return function(b,c,d,e){return g.transformMat2d(b,c,L(a,d,e,1))}}(),B=function(){const a=n.create(),b=A.create();return function(c,d,e){u(c,d);const f=w(d),m=c.targetGeometry;t.fromRotation(b,D.toRadian(d.rotation)||0);t.scale(b,
b,n.fromValues(f,f));g.transformMat2d(a,e,b);m.x+=a[0];m.y+=a[1];return c}}();k.addPadding=ka;k.angleBetween=ja;k.centerAt=aa;k.copy=u;k.create=async function(a,b){if(!a||!b)return new C({targetGeometry:new R,scale:0,rotation:0});var c=b.spatialReference;const {constraints:d,padding:e,viewpoint:f,size:m}=b,r=[e?m[0]-e.left-e.right:m[0],e?m[1]-e.top-e.bottom:m[1]];let h=null;a instanceof C?h=a:a.viewpoint?h=a.viewpoint:a.target&&"esri.Viewpoint"===a.target.declaredClass&&(h=a.target);let l=null;h?.targetGeometry?
l=h.targetGeometry:a instanceof P?l=a:a instanceof Q?l=await y(a,b,c):a&&(l=await y(a.center,b,c)||await y(a.target,b,c)||await y(a,b,c));!l&&f?.targetGeometry?l=f.targetGeometry:!l&&b.extent&&(l=b.extent);c||(c=b.spatialReference||b.extent||l,c=c.wkid?c:c.spatialReference||S.WGS84);v.isLoaded()||x.equals(l.spatialReference,c)||v.canProjectWithoutEngine(l.spatialReference,c)||await v.load();var q=V(l,c);q="center"in q?q.center:q;!1!==b.pickClosestTarget&&"point"===q.type&&"point"===f.targetGeometry?.type&&
(q.x=E.getClosestDenormalizedXToReference(q.x,f.targetGeometry.x,q.spatialReference));b=0;h?b=h.rotation:a.hasOwnProperty("rotation")?b=a.rotation:f&&(b=f.rotation);let p=0;p=null!=h?.targetGeometry&&"point"===h.targetGeometry.type?h.scale:"scale"in a&&a.scale?a.scale:"zoom"in a&&-1!==a.zoom&&d&&d.effectiveLODs?d.zoomToScale(a.zoom):Array.isArray(l)||"point"===l.type||"extent"===l.type&&0===l.width&&0===l.height?f.scale:G(V(l.extent,c),r,b);if(a=ea(a.target??a))a.min&&a.min<p?p=a.min:a.max&&a.max>
p&&(p=a.max);a=new C({targetGeometry:q,scale:p,rotation:b});d&&(a=d.fit(a),d.constrainByGeometry(a),d.rotationEnabled||(a.rotation=f.rotation));return a};k.extentToScale=G;k.getAnchor=W;k.getExtent=ha;k.getMatrix=K;k.getPaddingMapTranslation=Z;k.getPaddingScreenTranslation=J;k.getResolution=w;k.getResolutionToScaleFactor=T;k.getScaleToResolutionFactor=X;k.getTransform=L;k.getTransformNoRotation=ia;k.getWorldScreenWidth=function(a,b){return Math.round(Y(a)/b)};k.getWorldWidth=Y;k.padAndScaleAndRotateBy=
na;k.resize=la;k.rotateBy=function(a,b,c){u(a,b);a.rotation+=c;return a};k.rotateTo=function(a,b,c){u(a,b);a.rotation=c;return a};k.scaleAndRotateBy=ba;k.scaleTo=function(a,b,c){u(a,b);a.scale=c;return a};k.setExtent=function(a,b,c,d,e){aa(a,b,c.center);a.scale=G(c,d);e?.constraints?.constrain(a);return a};k.toMap=M;k.toScreen=N;k.translateBy=B;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});