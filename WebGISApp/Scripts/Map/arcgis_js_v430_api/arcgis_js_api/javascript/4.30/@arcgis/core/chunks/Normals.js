/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";import{r as a,n}from"./vec3.js";import{c as s}from"./vec3f64.js";import"../core/lang.js";function r(t,a,n,s,r,o=2){const c=1/(Math.abs(n)+Math.abs(s)+Math.abs(r)),e=n*c,f=s*c,i=r<=0?(e>=0?1:-1)*(1-Math.abs(f)):e,u=r<=0?(f>=0?1:-1)*(1-Math.abs(e)):f,b=a*o;t[b]=h(i),t[b+1]=h(u)}function o(t){const a=t.length/3,n=new Int16Array(2*a);let s=0;for(let o=0;o<a;++o)r(n,o,t[s++],t[s++],t[s++]);return n}function c(t,n){const o=t.length/3,c=new Int16Array(2*o);let e=0;const h=s();for(let s=0;s<o;++s)h[0]=t[e++],h[1]=t[e++],h[2]=t[e++],a(h,h,n),r(c,s,h[0],h[1],h[2]);return c}function e(t,a,s,r=2){const o=s*r,c=f(a[o]),e=f(a[o+1]),h=1-Math.abs(c)-Math.abs(e);t[2]=h,h<0?(t[0]=(c>=0?1:-1)*(1-Math.abs(e)),t[1]=(e>=0?1:-1)*(1-Math.abs(c))):(t[0]=c,t[1]=e),n(t,t)}function h(a){return t(Math.round(32767*a),-32767,32767)}function f(a){return t(a/32767,-1,1)}export{r as a,o as b,c,e as d};