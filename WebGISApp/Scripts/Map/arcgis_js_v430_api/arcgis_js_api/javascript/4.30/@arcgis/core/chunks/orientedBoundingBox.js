/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{g as t,e as a}from"./mat3.js";import{f as s,c as e}from"./mat3f64.js";import{c as i}from"./mat4f64.js";import{a as n,c as r,m as o}from"./quat.js";import{I as h,c}from"./quatf64.js";import{b as u,i as f,s as d,t as m,z as l,A as _,B as g,r as j,x as b,w as M,v as P,l as p,o as x,C as S,D as z}from"./vec3.js";import{c as I,f as w,Z as q,b as A}from"./vec3f64.js";import{t as V}from"./vec4.js";import{c as y}from"./vec4f64.js";import{ae as N,r as v}from"./unitUtils.js";import{g as C}from"./spatialReferenceEllipsoidUtils.js";import{c as F}from"./computeTranslationToOriginAndRotation.js";import{p as T,g as Q}from"./projectBuffer.js";import{s as E,v as H,g as R}from"./plane.js";import{V as Y}from"./ViewingMode.js";import{c as B}from"./vec2f64.js";import{V as G}from"./Attribute.js";const O=1e-6,D=I(),W=I(),Z=I(),U=I(),X=I(),J=I(),k=I(),K=I(),L=I(),$=I(),tt=[0,0,0],at=B(),st=I(),et=I(),it=I(),nt=I(),rt=I(),ot=I();function ht(t,a,s,e,i,n){if(Tt(a)<O)return;Ct(st,s,a),Ct(et,e,a),Ct(it,i,a),ut(t,a,at),rt[1]=at[0],nt[1]=at[1],ot[1]=nt[1]-rt[1];const r=[s,e,i],o=[st,et,it];for(let s=0;s<3;++s){ut(t,r[s],at),rt[0]=at[0],nt[0]=at[1],ut(t,o[s],at),rt[2]=at[0],nt[2]=at[1],ot[0]=nt[0]-rt[0],ot[2]=nt[2]-rt[2];const e=At(ot);e<n.quality&&(vt(n.b0,r[s]),vt(n.b1,a),vt(n.b2,o[s]),n.quality=e)}}const ct=I();function ut(t,a,s){const{data:e,size:i}=t;s[0]=Number.POSITIVE_INFINITY,s[1]=Number.NEGATIVE_INFINITY;for(let t=0;t<e.length;t+=i){const i=e[t]*a[0]+e[t+1]*a[1]+e[t+2]*a[2];s[0]=Math.min(s[0],i),s[1]=Math.max(s[1],i)}}function ft(t,a,s){s.center=t,s.halfSize=u(a,a,.5),s.quaternion=h}const dt=I(),mt=I(),lt=I(),_t=I(),gt=I(),jt=I();function bt(t,a,s){vt(dt,a),Math.abs(a[0])>Math.abs(a[1])&&Math.abs(a[0])>Math.abs(a[2])?dt[0]=0:Math.abs(a[1])>Math.abs(a[2])?dt[1]=0:dt[2]=0,Tt(dt)<O&&(dt[0]=dt[1]=dt[2]=1),Ct(mt,a,dt),Ft(mt,mt),Ct(lt,a,mt),Ft(lt,lt),Mt(t,a,mt,lt,_t,gt),yt(jt,gt,_t),It(a,mt,lt,_t,gt,jt,s)}function Mt(t,a,s,e,i,n){ut(t,a,at),i[0]=at[0],n[0]=at[1],ut(t,s,at),i[1]=at[0],n[1]=at[1],ut(t,e,at),i[2]=at[0],n[2]=at[1]}const Pt=I(),pt=I(),xt=I(),St=s(1,0,0,0,1,0,0,0,1),zt=c();function It(t,a,s,e,i,n,r){St[0]=t[0],St[1]=t[1],St[2]=t[2],St[3]=a[0],St[4]=a[1],St[5]=a[2],St[6]=s[0],St[7]=s[1],St[8]=s[2],r.quaternion=function(t,a){const s=a[0]+a[4]+a[8];if(s>0){let e=Math.sqrt(s+1);t[3]=.5*e,e=.5/e,t[0]=(a[5]-a[7])*e,t[1]=(a[6]-a[2])*e,t[2]=(a[1]-a[3])*e}else{let s=0;a[4]>a[0]&&(s=1),a[8]>a[3*s+s]&&(s=2);const e=(s+1)%3,i=(s+2)%3;let n=Math.sqrt(a[3*s+s]-a[3*e+e]-a[3*i+i]+1);t[s]=.5*n,n=.5/n,t[3]=(a[3*e+i]-a[3*i+e])*n,t[e]=(a[3*e+s]+a[3*s+e])*n,t[i]=(a[3*i+s]+a[3*s+i])*n}return t}(zt,St),Vt(Pt,e,i),Nt(Pt,Pt,.5),Nt(pt,t,Pt[0]),Nt(xt,a,Pt[1]),Vt(pt,pt,xt),Nt(xt,s,Pt[2]),r.center=f(pt,pt,xt),r.halfSize=u(Pt,n,.5)}class wt{constructor(t){this.minVert=new Array(7),this.maxVert=new Array(7),this.buffer=new ArrayBuffer(448);let a=0;this.minProj=new Float64Array(this.buffer,a,7),a+=56,this.maxProj=new Float64Array(this.buffer,a,7),a+=56;for(let t=0;t<7;++t)this.minVert[t]=new Float64Array(this.buffer,a,3),a+=24;for(let t=0;t<7;++t)this.maxVert[t]=new Float64Array(this.buffer,a,3),a+=24;for(let t=0;t<7;++t)this.minProj[t]=Number.POSITIVE_INFINITY,this.maxProj[t]=Number.NEGATIVE_INFINITY;const s=new Array(7),e=new Array(7),{data:i,size:n}=t;for(let t=0;t<i.length;t+=n){let a=i[t];a<this.minProj[0]&&(this.minProj[0]=a,s[0]=t),a>this.maxProj[0]&&(this.maxProj[0]=a,e[0]=t),a=i[t+1],a<this.minProj[1]&&(this.minProj[1]=a,s[1]=t),a>this.maxProj[1]&&(this.maxProj[1]=a,e[1]=t),a=i[t+2],a<this.minProj[2]&&(this.minProj[2]=a,s[2]=t),a>this.maxProj[2]&&(this.maxProj[2]=a,e[2]=t),a=i[t]+i[t+1]+i[t+2],a<this.minProj[3]&&(this.minProj[3]=a,s[3]=t),a>this.maxProj[3]&&(this.maxProj[3]=a,e[3]=t),a=i[t]+i[t+1]-i[t+2],a<this.minProj[4]&&(this.minProj[4]=a,s[4]=t),a>this.maxProj[4]&&(this.maxProj[4]=a,e[4]=t),a=i[t]-i[t+1]+i[t+2],a<this.minProj[5]&&(this.minProj[5]=a,s[5]=t),a>this.maxProj[5]&&(this.maxProj[5]=a,e[5]=t),a=i[t]-i[t+1]-i[t+2],a<this.minProj[6]&&(this.minProj[6]=a,s[6]=t),a>this.maxProj[6]&&(this.maxProj[6]=a,e[6]=t)}for(let t=0;t<7;++t){let a=s[t];vt(this.minVert[t],i,a),a=e[t],vt(this.maxVert[t],i,a)}}}class qt{constructor(){this.b0=w(1,0,0),this.b1=w(0,1,0),this.b2=w(0,0,1),this.quality=0}}function At(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function Vt(t,a,s){t[0]=a[0]+s[0],t[1]=a[1]+s[1],t[2]=a[2]+s[2]}function yt(t,a,s){t[0]=a[0]-s[0],t[1]=a[1]-s[1],t[2]=a[2]-s[2]}function Nt(t,a,s){t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s}function vt(t,a,s=0){t[0]=a[s],t[1]=a[s+1],t[2]=a[s+2]}function Ct(t,a,s){const e=a[0],i=a[1],n=a[2],r=s[0],o=s[1],h=s[2];t[0]=i*h-n*o,t[1]=n*r-e*h,t[2]=e*o-i*r}function Ft(t,a){const s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2];if(s>0){const e=1/Math.sqrt(s);t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e}}function Tt(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function Qt(t,a){const s=a[0]-t[0],e=a[1]-t[1],i=a[2]-t[2];return s*s+e*e+i*i}function Et(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]}class Ht{constructor(t=q,a=ha,s=h){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new Ht;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new Ht;return a._data=t.slice(),a}static fromJSON(t){return new Ht(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return d(E.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return d(E.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return n(H.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=Rt,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let e=0;e<8;++e){const i=t[e];i[0]=(1&e?-1:1)*s[3],i[1]=(2&e?-1:1)*s[4],i[2]=(4&e?-1:1)*s[5],m(i,i,a),i[0]+=s[0],i[1]+=s[1],i[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){Gt[0]=this._data[0]-t[0],Gt[1]=this._data[1]-t[1],Gt[2]=this._data[2]-t[2];const a=this.getQuaternion(Yt);return r(Rt,a),m(Gt,Gt,Rt),l(Gt,Gt),Ot[0]=Math.min(Gt[0],this._data[3]),Ot[1]=Math.min(Gt[1],this._data[4]),Ot[2]=Math.min(Gt[2],this._data[5]),_(Ot,Gt)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;Gt[0]=s[0]-t[0],Gt[1]=s[1]-t[1],Gt[2]=s[2]-t[2];const e=t[3],i=e+a;return!(g(Gt)>i*i)&&(Rt[0]=-s[6],Rt[1]=-s[7],Rt[2]=-s[8],Rt[3]=s[9],m(Gt,Gt,Rt),l(Gt,Gt),Ot[0]=Math.min(Gt[0],s[3]),Ot[1]=Math.min(Gt[1],s[4]),Ot[2]=Math.min(Gt[2],s[5]),_(Ot,Gt)<e*e)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(R(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const e=this._data,i=Rt;i[0]=-e[6],i[1]=-e[7],i[2]=-e[8],i[3]=e[9],Gt[0]=t[0]-e[0],Gt[1]=t[1]-e[1],Gt[2]=t[2]-e[2];const n=m(Gt,Gt,Rt),r=m(Ot,a,Rt);let o=-1/0,h=1/0;const c=this.getHalfSize(aa);for(let t=0;t<3;t++){const a=n[t],e=r[t],i=c[t]+s;if(Math.abs(e)>1e-6){const t=(i-a)/e,s=(-i-a)/e;o=Math.max(o,Math.min(t,s)),h=Math.min(h,Math.max(t,s))}else if(a>i||a<-i)return!1}return o<=h}projectedArea(s,e,i,n){const o=this.getQuaternion(Yt);r(Rt,o),Gt[0]=s[0]-this._data[0],Gt[1]=s[1]-this._data[1],Gt[2]=s[2]-this._data[2],m(Gt,Gt,Rt);const h=this.getHalfSize(aa),c=Gt[0]<-h[0]?-1:Gt[0]>h[0]?1:0,u=Gt[1]<-h[1]?-1:Gt[1]>h[1]?1:0,l=Gt[2]<-h[2]?-1:Gt[2]>h[2]?1:0,_=Math.abs(c)+Math.abs(u)+Math.abs(l);if(0===_)return 1/0;const g=1===_?4:6,b=6*(c+3*u+9*l+13);t(sa,o),a(sa,sa,h);const M=this.getCenter($t);for(let t=0;t<g;t++){const a=Ut[b+t];d(Gt,((1&a)<<1)-1,(2&a)-1,((4&a)>>1)-1),j(Gt,Gt,sa),f(Dt,M,Gt),Dt[3]=1,V(Dt,Dt,e);const s=1/Math.max(1e-6,Dt[3]);Zt[2*t]=Dt[0]*s,Zt[2*t+1]=Dt[1]*s}const P=2*g-2;let p=Zt[0]*(Zt[3]-Zt[P+1])+Zt[P]*(Zt[1]-Zt[P-1]);for(let t=2;t<P;t+=2)p+=Zt[t]*(Zt[t+3]-Zt[t-1]);return Math.abs(p)*i*n*.125}projectedRadius(t){const a=this.getQuaternion(Yt);return r(Rt,a),m(Gt,t,Rt),Math.abs(Gt[0]*this._data[3])+Math.abs(Gt[1]*this._data[4])+Math.abs(Gt[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(R(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(R(t))}toAaBoundingBox(a){const s=this.getQuaternion(Yt),e=t(sa,s),i=this._data[3]*Math.abs(e[0])+this._data[4]*Math.abs(e[3])+this._data[5]*Math.abs(e[6]),n=this._data[3]*Math.abs(e[1])+this._data[4]*Math.abs(e[4])+this._data[5]*Math.abs(e[7]),r=this._data[3]*Math.abs(e[2])+this._data[4]*Math.abs(e[5])+this._data[5]*Math.abs(e[8]);a[0]=this._data[0]-i,a[1]=this._data[1]-n,a[2]=this._data[2]-r,a[3]=this._data[0]+i,a[4]=this._data[1]+n,a[5]=this._data[2]+r}transform(t,a,s,e=0,i=C(s),n=C(a),h=Q(a,n)){if(s===i)a.isGeographic?function(t,a,s,e,i=C(s)){const n=v(s),o=1+Math.max(0,e)/(n.radius+t.centerZ);t.getCenter(Lt),Lt[2]+=e,T(Lt,s,0,Lt,i,0,1),a.center=Lt;const h=t.getQuaternion(Yt);a.quaternion=h,r(Rt,h),d(na,0,0,1),m(na,na,Rt);const c=t.getHalfSize(aa);d(na,c[0]*Math.abs(na[0]),c[1]*Math.abs(na[1]),c[2]*Math.abs(na[2])),u(na,na,n.inverseFlattening),f(na,c,na),a.halfSize=u(na,na,o)}(this,t,a,e,n):function(t,a,s,e,i=C(s),n=Q(s,i)){t.getCorners(ia),t.getCenter(Lt),Lt[2]+=e,F(s,Lt,ea,i),a.setCenter(ea[12],ea[13],ea[14]);const h=2*Math.sqrt(1+ea[0]+ea[5]+ea[10]);Rt[0]=(ea[6]-ea[9])/h,Rt[1]=(ea[8]-ea[2])/h,Rt[2]=(ea[1]-ea[4])/h,Rt[3]=.25*h;const c=t.getQuaternion(Yt);a.quaternion=o(Rt,Rt,c),r(Rt,Rt),d(ra,0,0,0);const u=a.getCenter(ta);for(const t of ia)t[2]+=e,n(t,0,t,0),b(na,t,u),m(na,na,Rt),l(na,na),M(ra,ra,na);a.halfSize=ra}(this,t,a,e,n,h);else if(a.isWGS84&&(s.isWebMercator||N(s)))!function(t,a,s,e,i){a.getCenter($t),$t[2]+=i;const n=C(s);T($t,t,0,$t,n,0,1),Jt(n,a,$t,s,e)}(a,this,s,t,e);else if(a.isWebMercator&&N(s))!function(t,a,s,e,i){a.getCenter($t),$t[2]+=i,Jt(t,a,$t,s,e)}(a,this,s,t,e);else{const i=this.getCenter($t);i[2]+=e,T(i,a,0,i,s,0,1),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(Yt),t.halfSize=this.getHalfSize(aa))}}}const Rt=c(),Yt=c(),Bt=c(),Gt=I(),Ot=I(),Dt=y();function Wt(t,a=new Ht){return function(t,a){const{data:s,size:e}=t,i=s.length/e;if(i<=0)return;const n=new wt(t);Vt(D,n.minProj,n.maxProj),Nt(D,D,.5),yt(W,n.maxProj,n.minProj);const r=At(W),o=new qt;o.quality=r,i<14&&(t=new G(new Float64Array(n.buffer,112,42),3));const h=I(),c=I(),u=I(),f=I(),d=I(),m=I(),l=I();switch(function(t,a,s,e,i,n,r,o,h,c){if(function(t,a,s){let e=Qt(t.maxVert[0],t.minVert[0]),i=0;for(let a=1;a<7;++a){const s=Qt(t.maxVert[a],t.minVert[a]);s>e&&(e=s,i=a)}vt(a,t.minVert[i]),vt(s,t.maxVert[i])}(t,e,i),Qt(e,i)<O)return 1;yt(r,e,i),Ft(r,r);const u=function(t,a,s,e){const{data:i,size:n}=t;let r=Number.NEGATIVE_INFINITY,o=0;for(let t=0;t<i.length;t+=n){tt[0]=i[t]-a[0],tt[1]=i[t+1]-a[1],tt[2]=i[t+2]-a[2];const e=s[0]*tt[0]+s[1]*tt[1]+s[2]*tt[2],n=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],h=tt[0]*tt[0]+tt[1]*tt[1]+tt[2]*tt[2]-e*e/n;h>r&&(r=h,o=t)}return vt(e,i,o),r}(a,e,r,n);return u<O?2:(yt(o,i,n),Ft(o,o),yt(h,n,e),Ft(h,h),Ct(s,o,r),Ft(s,s),ht(a,s,r,o,h,c),0)}(n,t,l,h,c,u,f,d,m,o)){case 1:return void ft(D,W,a);case 2:return void bt(t,f,a)}!function(t,a,s,e,i,n,r,o,h){(function(t,a,s,e,i){!function(t,a,s,e,i){const{data:n,size:r}=t;vt(e,n),vt(i,e),s[0]=Et(ct,a),s[1]=s[0];for(let t=r;t<n.length;t+=r){const r=n[t]*a[0]+n[t+1]*a[1]+n[t+2]*a[2];r<s[0]&&(s[0]=r,vt(e,n,t)),r>s[1]&&(s[1]=r,vt(i,n,t))}}(t,a,at,i,e);const n=Et(s,a);at[1]-O<=n&&(e[0]=void 0),at[0]+O>=n&&(i[0]=void 0)})(t,a,s,Z,U),void 0!==Z[0]&&(yt(X,Z,s),Ft(X,X),yt(J,Z,e),Ft(J,J),yt(k,Z,i),Ft(k,k),Ct(K,J,n),Ft(K,K),Ct(L,k,r),Ft(L,L),Ct($,X,o),Ft($,$),ht(t,K,n,J,X,h),ht(t,L,r,k,J,h),ht(t,$,o,X,k,h)),void 0!==U[0]&&(yt(X,U,s),Ft(X,X),yt(J,U,e),Ft(J,J),yt(k,U,i),Ft(k,k),Ct(K,J,n),Ft(K,K),Ct(L,k,r),Ft(L,L),Ct($,X,o),Ft($,$),ht(t,K,n,J,X,h),ht(t,L,r,k,J,h),ht(t,$,o,X,k,h))}(t,l,h,c,u,f,d,m,o),Mt(t,o.b0,o.b1,o.b2,_t,gt);const _=I();yt(_,gt,_t),o.quality=At(_),o.quality<r?It(o.b0,o.b1,o.b2,_t,gt,_,a):ft(D,W,a)}(t,a),a}const Zt=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Ut=(()=>{const t=new Int8Array(162);let a=0;const s=s=>{for(let e=0;e<s.length;e++)t[a+e]=s[e];a+=6};return s([6,2,3,1,5,4]),s([0,2,3,1,5,4]),s([0,2,3,7,5,4]),s([0,1,3,2,6,4]),s([0,1,3,2,0,0]),s([0,1,5,7,3,2]),s([0,1,3,7,6,4]),s([0,1,3,7,6,2]),s([0,1,5,7,6,2]),s([0,1,5,4,6,2]),s([0,1,5,4,0,0]),s([0,1,3,7,5,4]),s([0,2,6,4,0,0]),s([0,0,0,0,0,0]),s([1,3,7,5,0,0]),s([2,3,7,6,4,0]),s([2,3,7,6,0,0]),s([2,3,1,5,7,6]),s([0,1,5,7,6,2]),s([0,1,5,7,6,4]),s([0,1,3,7,6,4]),s([4,5,7,6,2,0]),s([4,5,7,6,0,0]),s([4,5,1,3,7,6]),s([0,2,3,7,5,4]),s([6,2,3,7,5,4]),s([6,2,3,1,5,4]),t})();function Xt(t,a,s,e,i){const n=t.getQuaternion(Yt);i.quaternion=n,r(Rt,n);const o=t.getCenter($t),h=t.getHalfSize(aa);if(e===Y.Global){m(na,o,Rt),l(ra,na),P(oa,ra,h),b(oa,ra,oa);const e=p(oa);f(oa,ra,h);const n=p(oa);if(e<s)i.center=o,d(na,s,s,s),i.halfSize=f(na,h,na);else{const r=n>0?1+a/n:1,o=e>0?1+s/e:1,c=(o+r)/2,f=(o-r)/2;u(oa,ra,f),i.halfSize=x(oa,oa,h,c),u(oa,ra,c),x(oa,oa,h,f),S(na,na),z(na,oa,na);const d=t.getQuaternion(Bt);i.center=m(na,na,d)}}else{i.center=x(na,o,A,(s+a)/2);const t=m(na,A,Rt);l(t,t),i.halfSize=x(ra,h,t,(s-a)/2)}return i}function Jt(a,s,e,i,n){const r=s.getQuaternion(Yt),o=t(sa,r),h=s.getHalfSize(aa);for(let t=0;t<8;++t){for(let a=0;a<3;++a)Lt[a]=h[a]*(t&1<<a?-1:1);for(let a=0;a<3;++a){let s=e[a];for(let t=0;t<3;++t)s+=Lt[t]*o[3*t+a];kt[3*t+a]=s}}T(kt,a,0,kt,i,0,8),Wt(Kt,n)}const kt=new Array(24),Kt=new G(kt,3),Lt=I(),$t=I(),ta=I(),aa=I(),sa=e(),ea=i(),ia=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],na=I(),ra=I(),oa=I(),ha=w(-1,-1,-1);export{Ht as O,Wt as a,Xt as c};