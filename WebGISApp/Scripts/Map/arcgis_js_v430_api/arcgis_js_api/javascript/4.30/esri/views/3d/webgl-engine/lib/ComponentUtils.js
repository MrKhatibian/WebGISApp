// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/arrayUtils"],function(g,n){function l(a=!0){return{isVisibleBit:!a,data:new Uint32Array(0)}}g.defaultVisibilities=l;g.getVisibility=function(a,e){if(null==a)return!0;const {isVisibleBit:c,data:d}=a,b=8*d.BYTES_PER_ELEMENT;return e<d.length*b?(a=e/b|0,0!==(d[a]&1<<e-a*b)===c):!a.isVisibleBit};g.updateVisibilityWithCount=function(a,e,c,d){if(c>=e)return a;null==a&&(a=l());let b=a.data;const h=8*b.BYTES_PER_ELEMENT,f=c/h|0,m=c-h*f,k=b;d=d===a.isVisibleBit;c<k.length*
h||!d||(c=Math.max(f+1,Math.ceil(k.length*n.reallocGrowthFactor)),c=Math.min(c,((e-1)/h|0)+1),b=new Uint32Array(c),b.set(k));f<b.length&&(b[f]=b[f]&~(1<<m)|(d?1:0)<<m);a.data=b;return a};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});