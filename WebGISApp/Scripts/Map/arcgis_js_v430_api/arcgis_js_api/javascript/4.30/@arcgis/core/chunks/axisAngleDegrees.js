/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{r,d as s}from"./mathUtils.js";import{g as t}from"./mat4.js";import{g as n,s as a,m as o}from"./quat.js";import{c as u}from"./quatf64.js";import{p as f,e as c,n as i,q as m}from"./vec3.js";import{U as e,a as p,b as j}from"./vec3f64.js";import{c as g}from"./vec4f64.js";function q(r=y){return[r[0],r[1],r[2],r[3]]}function v(r,s,t=q()){return f(t,r),t[3]=s,t}function b(r,s,t=g()){return c(t,r,s),i(t,t),t[3]=-m(r,s),t}function d(s,a=q()){const o=t(z,s);return w(a,r(n(a,o))),a}function h(s,t,u=q()){return a(z,s,k(s)),a(A,t,k(t)),o(z,A,z),w(u,r(n(u,z)))}function U(r,s,t,n=q()){return v(e,r,B),v(p,s,C),v(j,t,D),h(B,C,B),h(B,D,n),n}function l(r){return r}function x(r){return r[3]}function k(r){return s(r[3])}function w(r,s){return r[3]=s,r}const y=[0,0,1,0],z=u(),A=u();q();const B=q(),C=q(),D=q();export{l as a,x as b,k as c,q as d,d as e,v as f,U as g,b as h,y as u};