// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(J,n){function R(c,e){var d=Object.keys(c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(c);e&&(h=h.filter(function(k){return Object.getOwnPropertyDescriptor(c,k).enumerable}));d.push.apply(d,h)}return d}function S(c){for(var e=1;e<arguments.length;e++){var d=null!=arguments[e]?arguments[e]:{};e%2?R(Object(d),!0).forEach(function(h){var k=d[h];a:if("object"===typeof h&&null!==h){var A=h[Symbol.toPrimitive];if(void 0!==A){h=A.call(h,"string");
if("object"!==typeof h)break a;throw new TypeError("@@toPrimitive must return a primitive value.");}h=String(h)}h="symbol"===typeof h?h:String(h);h in c?Object.defineProperty(c,h,{value:k,enumerable:!0,configurable:!0,writable:!0}):c[h]=k}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):R(Object(d)).forEach(function(h){Object.defineProperty(c,h,Object.getOwnPropertyDescriptor(d,h))})}return c}var T={activateTrap:function(c,e){if(0<c.length){var d=c[c.length-
1];d!==e&&d.pause()}d=c.indexOf(e);-1!==d&&c.splice(d,1);c.push(e)},deactivateTrap:function(c,e){e=c.indexOf(e);-1!==e&&c.splice(e,1);0<c.length&&c[c.length-1].unpause()}},D=function(c){return"Tab"===(null===c||void 0===c?void 0:c.key)||9===(null===c||void 0===c?void 0:c.keyCode)},ea=function(c){return D(c)&&!c.shiftKey},fa=function(c){return D(c)&&c.shiftKey},U=function(c,e){var d=-1;c.every(function(h,k){return e(h)?(d=k,!1):!0});return d},E=function(c){for(var e=arguments.length,d=Array(1<e?e-
1:0),h=1;h<e;h++)d[h-1]=arguments[h];return"function"===typeof c?c.apply(void 0,d):c},K=function(c){return c.target.shadowRoot&&"function"===typeof c.composedPath?c.composedPath()[0]:c.target},ha=[],ka=function(c,e){var d=(null===e||void 0===e?void 0:e.document)||document,h=(null===e||void 0===e?void 0:e.trapStack)||ha,k=S({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:ea,isKeyBackward:fa},e),A=[],x=[],q=[],N=null,w=null,t=!1,y=!1,O=void 0,L=void 0,u=function(m,
g,a){return m&&void 0!==m[g]?m[g]:k[a||g]},C=function(m,g){var a="function"===typeof(null===g||void 0===g?void 0:g.composedPath)?g.composedPath():void 0;return x.findIndex(function(b){var f=b.container;b=b.tabbableNodes;return f.contains(m)||(null===a||void 0===a?void 0:a.includes(f))||b.find(function(l){return l===m})})},F=function(m){var g=k[m];if("function"===typeof g){for(var a=arguments.length,b=Array(1<a?a-1:0),f=1;f<a;f++)b[f-1]=arguments[f];g=g.apply(void 0,b)}!0===g&&(g=void 0);if(!g){if(void 0===
g||!1===g)return g;throw Error("`".concat(m,"` was specified but was not a node, or did not return a node"));}a=g;if("string"===typeof g&&(a=d.querySelector(g),!a))throw Error("`".concat(m,"` as selector refers to no known node"));return a},G=function(){var m=F("initialFocus");if(!1===m)return!1;void 0!==m&&n.isFocusable(m,k.tabbableOptions)||(m=0<=C(d.activeElement)?d.activeElement:(m=q[0])&&m.firstTabbableNode||F("fallbackFocus"));if(!m)throw Error("Your focus-trap needs to have at least one focusable element");
return m},H=function(){x=A.map(function(m){var g=n.tabbable(m,k.tabbableOptions),a=n.focusable(m,k.tabbableOptions),b=0<g.length?g[0]:void 0,f=0<g.length?g[g.length-1]:void 0,l=a.find(function(r){return n.isTabbable(r)}),p=a.slice().reverse().find(function(r){return n.isTabbable(r)}),v=!!g.find(function(r){return 0<n.getTabIndex(r)});return{container:m,tabbableNodes:g,focusableNodes:a,posTabIndexesFound:v,firstTabbableNode:b,lastTabbableNode:f,firstDomTabbableNode:l,lastDomTabbableNode:p,nextTabbableNode:function(r){var V=
1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,W=g.indexOf(r);return 0>W?V?a.slice(a.indexOf(r)+1).find(function(P){return n.isTabbable(P)}):a.slice(0,a.indexOf(r)).reverse().find(function(P){return n.isTabbable(P)}):g[W+(V?1:-1)]}}});q=x.filter(function(m){return 0<m.tabbableNodes.length});if(0>=q.length&&!F("fallbackFocus"))throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(x.find(function(m){return m.posTabIndexesFound})&&
1<x.length)throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");},ia=function a(g){if(g=g.activeElement)return g.shadowRoot&&null!==g.shadowRoot.activeElement?a(g.shadowRoot):g},B=function b(a){!1!==a&&a!==ia(document)&&(a&&a.focus?(a.focus({preventScroll:!!k.preventScroll}),w=a,a.tagName&&"input"===a.tagName.toLowerCase()&&"function"===typeof a.select&&a.select()):
b(G()))},X=function(a){var b=F("setReturnFocus",a);return b?b:!1===b?!1:a},Y=function(a){var b=a.target,f=a.event;a=a.isBackward;var l=void 0===a?!1:a;b=b||K(f);H();a=null;if(0<q.length){var p=C(b,f),v=0<=p?x[p]:void 0;0>p?a=l?q[q.length-1].lastTabbableNode:q[0].firstTabbableNode:l?(l=U(q,function(r){return b===r.firstTabbableNode}),0>l&&(v.container===b||n.isFocusable(b,k.tabbableOptions)&&!n.isTabbable(b,k.tabbableOptions)&&!v.nextTabbableNode(b,!1))&&(l=p),0<=l?(f=q[0===l?q.length-1:l-1],a=0<=
n.getTabIndex(b)?f.lastTabbableNode:f.lastDomTabbableNode):D(f)||(a=v.nextTabbableNode(b,!1))):(l=U(q,function(r){return b===r.lastTabbableNode}),0>l&&(v.container===b||n.isFocusable(b,k.tabbableOptions)&&!n.isTabbable(b,k.tabbableOptions)&&!v.nextTabbableNode(b))&&(l=p),0<=l?(f=q[l===q.length-1?0:l+1],a=0<=n.getTabIndex(b)?f.firstTabbableNode:f.firstDomTabbableNode):D(f)||(a=v.nextTabbableNode(b)))}else a=F("fallbackFocus");return a},M=function(a){var b=K(a);0<=C(b,a)||(E(k.clickOutsideDeactivates,
a)?z.deactivate({returnFocus:k.returnFocusOnDeactivate}):E(k.allowOutsideClick,a)||a.preventDefault())},Z=function(a){var b=K(a),f=0<=C(b,a);if(f||b instanceof Document)f&&(w=b);else{a.stopImmediatePropagation();a=!0;if(w)if(0<n.getTabIndex(w)){if(b=C(w),b=x[b].tabbableNodes,0<b.length&&(f=b.findIndex(function(p){return p===w}),0<=f))if(k.isKeyForward(L)){if(f+1<b.length){var l=b[f+1];a=!1}}else 0<=f-1&&(l=b[f-1],a=!1)}else x.some(function(p){return p.tabbableNodes.some(function(v){return 0<n.getTabIndex(v)})})||
(a=!1);else a=!1;a&&(l=Y({target:w,isBackward:k.isKeyBackward(L)}));l?B(l):B(w||G())}L=void 0},ja=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!1;L=a;if(b=Y({event:a,isBackward:b}))D(a)&&a.preventDefault(),B(b)},aa=function(a){"Escape"!==(null===a||void 0===a?void 0:a.key)&&"Esc"!==(null===a||void 0===a?void 0:a.key)&&27!==(null===a||void 0===a?void 0:a.keyCode)||!1===E(k.escapeDeactivates,a)?(k.isKeyForward(a)||k.isKeyBackward(a))&&ja(a,k.isKeyBackward(a)):(a.preventDefault(),
z.deactivate())},ba=function(a){var b=K(a);0<=C(b,a)||E(k.clickOutsideDeactivates,a)||E(k.allowOutsideClick,a)||(a.preventDefault(),a.stopImmediatePropagation())},ca=function(){if(t)return T.activateTrap(h,z),O=k.delayInitialFocus?setTimeout(function(){B(G())},0):B(G()),d.addEventListener("focusin",Z,!0),d.addEventListener("mousedown",M,{capture:!0,passive:!1}),d.addEventListener("touchstart",M,{capture:!0,passive:!1}),d.addEventListener("click",ba,{capture:!0,passive:!1}),d.addEventListener("keydown",
aa,{capture:!0,passive:!1}),z},da=function(){if(t)return d.removeEventListener("focusin",Z,!0),d.removeEventListener("mousedown",M,!0),d.removeEventListener("touchstart",M,!0),d.removeEventListener("click",ba,!0),d.removeEventListener("keydown",aa,!0),z};e=function(a){a.some(function(b){return Array.from(b.removedNodes).some(function(f){return f===w})})&&B(G())};var Q="undefined"!==typeof window&&"MutationObserver"in window?new MutationObserver(e):void 0,I=function(){Q&&(Q.disconnect(),t&&!y&&A.map(function(a){Q.observe(a,
{subtree:!0,childList:!0})}))};var z={get active(){return t},get paused(){return y},activate:function(a){if(t)return this;var b=u(a,"onActivate"),f=u(a,"onPostActivate"),l=u(a,"checkCanFocusTrap");l||H();t=!0;y=!1;N=d.activeElement;null===b||void 0===b||b();a=function(){l&&H();ca();I();null===f||void 0===f||f()};if(l)return l(A.concat()).then(a,a),this;a();return this},deactivate:function(a){if(!t)return this;var b=S({onDeactivate:k.onDeactivate,onPostDeactivate:k.onPostDeactivate,checkCanReturnFocus:k.checkCanReturnFocus},
a);clearTimeout(O);O=void 0;da();y=t=!1;I();T.deactivateTrap(h,z);var f=u(b,"onDeactivate"),l=u(b,"onPostDeactivate");a=u(b,"checkCanReturnFocus");var p=u(b,"returnFocus","returnFocusOnDeactivate");null===f||void 0===f||f();b=function(){setTimeout(function(){p&&B(X(N));null===l||void 0===l||l()},0)};if(p&&a)return a(X(N)).then(b,b),this;b();return this},pause:function(a){if(y||!t)return this;var b=u(a,"onPause");a=u(a,"onPostPause");y=!0;null===b||void 0===b||b();da();I();null===a||void 0===a||a();
return this},unpause:function(a){if(!y||!t)return this;var b=u(a,"onUnpause");a=u(a,"onPostUnpause");y=!1;null===b||void 0===b||b();H();ca();I();null===a||void 0===a||a();return this},updateContainerElements:function(a){A=[].concat(a).filter(Boolean).map(function(b){return"string"===typeof b?d.querySelector(b):b});t&&H();I();return this}};z.updateContainerElements(c);return z};const la=globalThis.calciteConfig?.focusTrapStack||[];J.activateFocusTrap=function(c,e){c.focusTrapDisabled||c.focusTrap?.activate(e)};
J.connectFocusTrap=function(c,e){const {el:d}=c,h=e?.focusTrapEl||d;h&&(c.focusTrap=ka(h,{clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:h,setReturnFocus:k=>{n.focusElement(k);return!1},...e?.focusTrapOptions,document:d.ownerDocument,tabbableOptions:n.tabbableOptions,trapStack:la}))};J.deactivateFocusTrap=function(c,e){c.focusTrap?.deactivate(e)};J.updateFocusTrapElements=function(c){c.focusTrap?.updateContainerElements(c.el)}});