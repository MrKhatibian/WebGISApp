/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{g as t}from"./guid.js";import{C as n}from"../widgets/Widget.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */
var e=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],r=e.join(","),o="undefined"==typeof Element,i=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!o&&Element.prototype.getRootNode?function(t){var n;return null==t||null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null==t?void 0:t.ownerDocument},u=function t(n,e){var r;void 0===e&&(e=!0);var o=null==n||null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},l=function(t,n,e){if(u(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(r));return n&&i.call(t,r)&&o.unshift(t),o.filter(e)},c=function t(n,e,o){for(var a=[],l=Array.from(n);l.length;){var c=l.shift();if(!u(c,!1))if("SLOT"===c.tagName){var s=c.assignedElements(),f=t(s.length?s:c.children,!0,o);o.flatten?a.push.apply(a,f):a.push({scopeParent:c,candidates:f})}else{i.call(c,r)&&o.filter(c)&&(e||!n.includes(c))&&a.push(c);var d=c.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(c),p=!u(d,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(c));if(d&&p){var h=t(!0===d?c.children:d.children,!0,o);o.flatten?a.push.apply(a,h):a.push({scopeParent:c,candidates:h})}else l.unshift.apply(l,c.children)}}return a},s=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},f=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var n,e=null==t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e}(t))&&!s(t)?0:t.tabIndex},d=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},p=function(t){return"INPUT"===t.tagName},h=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},m=function(t,n){return!(n.disabled||u(n)||function(t){return p(t)&&"hidden"===t.type}(n)||function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=i.call(t,"details>summary:first-of-type")?t.parentElement:t;if(i.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return h(t)}else{if("function"==typeof r){for(var u=t;t;){var l=t.parentElement,c=a(t);if(l&&!l.shadowRoot&&!0===r(l))return h(t);t=t.assignedSlot?t.assignedSlot:l||c===t.ownerDocument?l:c.host}t=u}if(function(t){var n,e,r,o,i=t&&a(t),u=null===(n=i)||void 0===n?void 0:n.host,l=!1;if(i&&i!==t)for(l=!!(null!==(e=u)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(u)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!l&&u;){var c,s,f;l=!(null===(s=u=null===(c=i=a(u))||void 0===c?void 0:c.host)||void 0===s||null===(f=s.ownerDocument)||void 0===f||!f.contains(u))}return l}(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1}(n,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!i.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1}(n))},g=function(t,n){return!(function(t){return function(t){return p(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n,e=t.form||a(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]}(n,t.form);return!o||o===t}(t)}(n)||f(n)<0||!m(t,n))},y=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},v=function t(n){var e=[],r=[];return n.forEach((function(n,o){var i=!!n.scopeParent,a=i?n.scopeParent:n,u=function(t,n){var e=f(t);return e<0&&n&&!s(t)?0:e}(a,i),l=i?t(n.candidates):a;0===u?i?e.push.apply(e,l):e.push(a):r.push({documentOrder:o,tabIndex:u,item:n,isScope:i,content:l})})),r.sort(d).reduce((function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t}),[]).concat(e)},S=function(t,n){var e;return e=(n=n||{}).getShadowRoot?c([t],n.includeContainer,{filter:g.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:y}):l(t,n.includeContainer,g.bind(null,n)),v(e)},w=function(t,n){return(n=n||{}).getShadowRoot?c([t],n.includeContainer,{filter:m.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):l(t,n.includeContainer,m.bind(null,n))},b=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==i.call(t,r)&&g(n,t)},E=e.concat("iframe").join(","),A=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==i.call(t,E)&&m(n,t)};const N={getShadowRoot:!0};function R(n){return n?n.id=n.id||`${n.tagName.toLowerCase()}-${t()}`:""}function x(t){return Array.isArray(t)?t:Array.from(t)}function C(t){const e=$(t,`.${n.darkMode}, .${n.lightMode}`);return e?.classList.contains("calcite-mode-dark")?"dark":"light"}function I(t){const n=$(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function T(t){return t?parseFloat(getComputedStyle(t).inlineSize):0}function D(t){return t.getRootNode()}function O(t){const n=D(t);return"host"in n?n:null}function k(t,n){if(!t)return 0;const e=document.createElement("canvas").getContext("2d");return e.font=n,e.measureText(t).width}function L(t){return t.host||null}function q(t,{selector:n,id:e}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const o=D(r),i=e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null,a=L(o);return i||(a?t(a):null)}(t)}function $(t,n){return function t(e){return e?e.closest(n)||t(L(D(e))):null}(t)}function j(t,n){return F(t,n)}function F(t,n){if(!t)return;const e=n(t);if(void 0!==e)return e;const{parentNode:r}=t;return F(r instanceof ShadowRoot?r.host:r,n)}function P(t,n){return!!j(n,(n=>n===t||void 0))}async function B(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function M(t){if(t)return S(t,N)[0]??t}function U(t){M(t)?.focus()}const z=":not([slot])";function X(t,n,e){n&&!Array.isArray(n)&&"string"!=typeof n&&(e=n,n=null);const r=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:z;return e?.all?function(t,n,e){let r=n===z?G(t,z):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t)),r=e?.matches?r.filter((t=>t?.matches(e.matches))):r;const o=e?.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,r,e):function(t,n,e){let r=n===z?G(t,z)[0]||null:t.querySelector(n);r=e&&!1===e.direct||r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;const o=e?.selector;return o?r?.querySelector(o):r}(t,r,e)}function G(t,n){return t?Array.from(t.children||[]).filter((t=>t?.matches(n))):[]}function V(t,n){return Array.from(t.children).filter((t=>t.matches(n)))}function W(t,n,e){return"string"==typeof n&&""!==n?n:""===n?t[e]:void 0}function Y(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function _(t){return Boolean(t).toString()}function H(t){return J(t)||function(t){return!!function(t){return function(t){return t.target.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function J(t){return!!K(t).length}function K(t){return t.target.assignedElements({flatten:!0})}function Q(t){return!(!t.isPrimary||0!==t.button)}function Z(t){return 0===t.detail}const tt=(t,n,e,r=!0)=>{const o=t.indexOf(n),i=0===o,a=o===t.length-1;let u;return r&&(e="previous"===e&&i?"last":"next"===e&&a?"first":e),u="previous"===e?t[o-1]||t[r?t.length-1:o]:"next"===e?t[o+1]||t[r?0:o]:"last"===e?t[t.length-1]:t[0],B(u),u};function nt(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}export{k as A,x as B,V as C,Y as D,C as E,$ as a,X as b,P as c,Q as d,J as e,U as f,I as g,R as h,nt as i,B as j,N as k,A as l,S as m,w as n,b as o,f as p,q,H as r,W as s,_ as t,Z as u,K as v,M as w,O as x,tt as y,T as z};