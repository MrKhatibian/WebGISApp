/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{i as t}from"../core/Accessor.js";import{P as e}from"../core/scheduling.js";import{p as n,a as o,b as i,i as s,m as r}from"./vec3.js";import{c as h,f as a}from"./vec3f64.js";import{i as l}from"./frustum.js";import{w as d}from"./ray.js";import{c as u,a as c,i as f,g as m,b as _}from"./sphere.js";import{r as p}from"./Util.js";class b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new g,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),g.clearPool(),v[0]=null,q.prune(),K.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=g.acquire();for(let o=0;o<e;o++){const e=t[o];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}g.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=g.acquire();for(const o of t){const t=e??u(this.objectToBoundingSphere(o),y);B(t[3])?(n.init(this._root),O(o,t,n)):this._degenerateObjects.delete(o)}g.release(n),this._shrink()}update(t,e){if(!B(e[3])&&this._isDegenerate(t))return;const n=function(t){return v[0]=t,v}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const o=d(t,e);S(this._root,(t=>{if(!function(t,e){return z(m(e.bounds),2*-e.halfSize,w),z(m(e.bounds),2*e.halfSize,P),p(t.origin,t.direction,w,P)}(o,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,o){const i=d(t,e);S(this._root,(t=>{if(!function(t,e,n){return z(m(e.bounds),2*-e.halfSize,w),z(m(e.bounds),2*e.halfSize,P),n.applyToMinMax(w,P),p(t.origin,t.direction,w,P)}(i,t,o))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),!0}))}forEach(t){S(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,o=(()=>!0),r=1/0){let h=1/0,a=1/0,d=null;const u=M(t,e),c=i=>{if(--r,!o(i))return;const s=this.objectToBoundingSphere(i);if(!l(n,s))return;const u=A(t,e,m(s)),c=u-s[3],f=u+s[3];c<h&&(h=c,a=f,d=i)};return j(this._root,(o=>{if(r<=0||!l(n,o.bounds))return!1;if(i(E,u,o.halfSize),s(E,E,m(o.bounds)),A(t,e,E)>a)return!1;const h=o.node;return h.terminals.forAll((t=>c(t))),null!==h.residents&&h.residents.forAll((t=>c(t))),!0}),t,e),d}forEachInDepthRange(t,e,n,o,r,h,a){let d=-1/0,u=1/0;const c={setRange:t=>{n===b.DepthOrder.FRONT_TO_BACK?(d=Math.max(d,t.near),u=Math.min(u,t.far)):(d=Math.max(d,-t.far),u=Math.min(u,-t.near))}};c.setRange(o);const f=A(e,n,t),_=M(e,n),p=M(e,-n),g=t=>{if(!a(t))return;const o=this.objectToBoundingSphere(t),i=m(o),s=A(e,n,i)-f,_=s-o[3],p=s+o[3];_>u||p<d||!l(h,o)||r(t,c)};j(this._root,(t=>{if(!l(h,t.bounds))return!1;if(i(E,_,t.halfSize),s(E,E,m(t.bounds)),A(e,n,E)-f>u)return!1;if(i(E,p,t.halfSize),s(E,E,m(t.bounds)),A(e,n,E)-f<d)return!1;const o=t.node;return o.terminals.forAll((t=>g(t))),null!==o.residents&&o.residents.forAll((t=>g(t))),!0}),e,n)}forEachNode(t){S(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=c(e),o=m(e),i=e=>{const i=this.objectToBoundingSphere(e),s=c(i),h=n+s;return!(r(m(i),o)-h*h<=0)||t(e)};let s=!0;const h=t=>{s&&(s=i(t))};S(this._root,(t=>{const e=c(t.bounds),i=n+e;if(r(m(t.bounds),o)-i*i>0)return!1;const a=t.node;return a.terminals.forAll(h),s&&null!==a.residents&&a.residents.forAll(h),s})),s&&this.forEachDegenerateObject(h)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||f(n,t)}_intersectsObjectWithOffset(t,e,n){const o=this.objectToBoundingSphere(e);return!(o[3]>0)||f(n.applyToBoundingSphere(o),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const o=g.acquire().init(t);this._add(e.at(n),o),g.release(o)}}_grow(t,e){if(0!==e&&(N(t,e,(t=>this.objectToBoundingSphere(t)),k),B(k[3])&&!this._fitsInsideTree(k)))if(x(this._root.node))u(k,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(k);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(k,t):this._growRootAsSubNode(t),g.release(t)}}_rebuildTree(t,e){n(m(I),m(e.bounds)),I[3]=e.halfSize,N([t,I],2,(t=>t),L);const o=g.acquire().init(this._root);this._root.initFrom(null,L,L[3]),this._root.increaseHalfSize(1.25),S(o,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),g.release(o)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return S(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let o=-1/0;const i=this._root.bounds,s=this._root.halfSize;for(let t=0;t<3;t++){const r=i[t]-s-(n[t]-e),h=n[t]+e-(i[t]+s),a=Math.max(0,Math.ceil(r/(2*s))),l=Math.max(0,Math.ceil(h/(2*s)))+1,d=2**Math.ceil(Math.log(a+l)*Math.LOG2E);o=Math.max(o,d),H[t].min=a,H[t].max=l}for(let t=0;t<3;t++){let e=H[t].min,n=H[t].max;const r=(o-(e+n))/2;e+=Math.ceil(r),n+=Math.floor(r);const h=i[t]-s-e*s*2;C[t]=h+(n+e)*s}const r=o*s;return C[3]=r*F,g.acquire().initFrom(null,C,r,0)}_growRootAsSubNode(t){const e=this._root.node;n(m(k),m(this._root.bounds)),k[3]=this._root.halfSize,this._root.init(t),t.advanceTo(k,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,o=0;for(;o<e.length&&null==t;)n=o++,t=e[n];for(;o<e.length;)if(e[o++])return-1;return n}_isDegenerate(t){return!B(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),o=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:o}}static fromJSON(t){const e=new b((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class g{constructor(){this.bounds=_(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,o=this.depth){return this.node=null!=t?t:g.createEmptyNode(),e&&u(e,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*F}advance(t){let e=this.node.children[t];e||(e=g.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=D[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const o=this._childIndex(t);e&&e(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new e({shrink:!0}),residents:new e({shrink:!0})}}static acquire(){return g._pool.acquire()}static release(t){g._pool.release(t)}static clearPool(){g._pool.prune()}}function S(t,e){let n=g.acquire().init(t);const o=[n];for(;0!==o.length;){if(n=o.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&o.push(g.acquire().init(n).advance(t));g.release(n)}}function j(t,e,n,o=b.DepthOrder.FRONT_TO_BACK){let i=g.acquire().init(t);const s=[i];for(function(t,e,n){if(!K.length)for(let t=0;t<8;++t)K.push({index:0,distance:0});for(let n=0;n<8;++n){const o=D[n];K.data[n].index=n,K.data[n].distance=A(t,e,o)}K.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)n[t]=K.data[t].index}(n,o,J);0!==s.length;){if(i=s.pop(),e(i)&&!i.isLeaf())for(let t=7;t>=0;--t){const e=J[t];i.node.children[e]&&s.push(g.acquire().init(i).advance(e))}g.release(i)}}function O(t,n,o){q.clear();const i=o.advanceTo(n,((t,e)=>{q.push(t.node),q.push(e)}))?o.node.terminals:o.node.residents;if(i.removeUnordered(t),0===i.length)for(let t=q.length-2;t>=0&&(s=q.data[t],(r=q.data[t+1])>=0&&(s.children[r]=null),x(s)&&(null===s.residents&&(s.residents=new e({shrink:!0})),1));t-=2);var s,r}function x(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}function T(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function z(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function N(t,e,n,i){if(1===e){const e=n(t[0]);u(e,i)}else{w[0]=1/0,w[1]=1/0,w[2]=1/0,P[0]=-1/0,P[1]=-1/0,P[2]=-1/0;for(let o=0;o<e;o++){const e=n(t[o]);B(e[3])&&(r=e,(s=w)[0]=Math.min(s[0],r[0]-r[3]),s[1]=Math.min(s[1],r[1]-r[3]),s[2]=Math.min(s[2],r[2]-r[3]),T(P,e))}o(m(i),w,P,.5),i[3]=Math.max(P[0]-w[0],P[1]-w[1],P[2]-w[2])/2}var s,r}function M(t,e){let n,o=1/0;for(let i=0;i<8;++i){const s=A(t,e,R[i]);s<o&&(o=s,n=R[i])}return n}function A(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function B(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}g._pool=new t(g),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(b||(b={}));const D=[a(-1,-1,-1),a(1,-1,-1),a(-1,1,-1),a(1,1,-1),a(-1,-1,1),a(1,-1,1),a(-1,1,1),a(1,1,1)],R=[a(-1,-1,-1),a(-1,-1,1),a(-1,1,-1),a(-1,1,1),a(1,-1,-1),a(1,-1,1),a(1,1,-1),a(1,1,1)],F=Math.sqrt(3),v=[null],C=_(),E=h(),w=h(),P=h(),q=new e,y=_(),k=_(),I=_(),L=_(),H=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],K=new e,J=[0,0,0,0,0,0,0,0],W=b;export{W as O};