/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{r as t,c as e,h as i,H as s,g as o}from"./p-818852ac.js";import{q as n,A as r,t as a}from"./p-d1368708.js";import{c,b as l,a as h,r as f,F as d}from"./p-ee0df82a.js";import{g as u}from"./p-1d0d4f4f.js";import{o as p}from"./p-812540ca.js";import{F as m}from"./p-c9b03547.js";import"./p-66edac25.js";import"./p-cd85d59d.js";import"./p-df9ca505.js";const b={container:"container"};const g=300;const w=500;const v="aria-describedby";function y(t){const{referenceElement:e}=t;return(typeof e==="string"?n(t,{id:e}):e)||null}class k{constructor(){this.registeredElements=new WeakMap;this.registeredShadowRootCounts=new WeakMap;this.hoverOpenTimeout=null;this.hoverCloseTimeout=null;this.activeTooltip=null;this.registeredElementCount=0;this.queryTooltip=t=>{const{registeredElements:e}=this;const i=t.find((t=>e.has(t)));return e.get(i)};this.keyDownHandler=t=>{if(t.key==="Escape"&&!t.defaultPrevented){const{activeTooltip:e}=this;if(e?.open){this.clearHoverTimeout();this.closeActiveTooltip();const i=y(e);if(i instanceof Element&&i.contains(t.target)){t.preventDefault()}}}};this.pointerMoveHandler=t=>{const e=t.composedPath();const{activeTooltip:i}=this;const s=this.queryTooltip(e);if(this.pathHasOpenTooltip(s,e)){this.clearHoverTimeout();return}if(s){this.openHoveredTooltip(s)}else if(i?.open){this.closeHoveredTooltip()}};this.clickHandler=t=>{const e=t.composedPath();const i=this.queryTooltip(e);if(this.pathHasOpenTooltip(i,e)){this.clearHoverTimeout();return}this.closeActiveTooltip();if(!i){return}this.clearHoverTimeout();if(i.closeOnClick){this.toggleTooltip(i,false);return}this.toggleTooltip(i,true)};this.blurHandler=()=>{this.closeActiveTooltip()};this.focusInHandler=t=>{const e=t.composedPath();const i=this.queryTooltip(e);if(this.pathHasOpenTooltip(i,e)){this.clearHoverTimeout();return}this.closeTooltipIfNotActive(i);if(!i){return}this.toggleFocusedTooltip(i,true)};this.openHoveredTooltip=t=>{this.hoverOpenTimeout=window.setTimeout((()=>{if(this.hoverOpenTimeout===null){return}this.clearHoverCloseTimeout();this.closeTooltipIfNotActive(t);this.toggleTooltip(t,true)}),this.activeTooltip?.open?0:g)};this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout((()=>{if(this.hoverCloseTimeout===null){return}this.closeActiveTooltip()}),w)}}registerElement(t,e){this.registeredElementCount++;this.registeredElements.set(t,e);const i=this.getReferenceElShadowRootNode(t);if(i){this.registerShadowRoot(i)}if(this.registeredElementCount===1){this.addListeners()}}unregisterElement(t){const e=this.getReferenceElShadowRootNode(t);if(e){this.unregisterShadowRoot(e)}if(this.registeredElements.delete(t)){this.registeredElementCount--}if(this.registeredElementCount===0){this.removeListeners()}}pathHasOpenTooltip(t,e){const{activeTooltip:i}=this;return i?.open&&e.includes(i)||t?.open&&e.includes(t)}addShadowListeners(t){t.addEventListener("focusin",this.focusInHandler,{capture:true})}removeShadowListeners(t){t.removeEventListener("focusin",this.focusInHandler,{capture:true})}addListeners(){window.addEventListener("keydown",this.keyDownHandler,{capture:true});window.addEventListener("pointermove",this.pointerMoveHandler,{capture:true});window.addEventListener("click",this.clickHandler,{capture:true});window.addEventListener("focusin",this.focusInHandler,{capture:true});window.addEventListener("blur",this.blurHandler)}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler,{capture:true});window.removeEventListener("pointermove",this.pointerMoveHandler,{capture:true});window.removeEventListener("click",this.clickHandler,{capture:true});window.removeEventListener("focusin",this.focusInHandler,{capture:true});window.removeEventListener("blur",this.blurHandler)}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout);this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout);this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout();this.clearHoverCloseTimeout()}closeTooltipIfNotActive(t){if(this.activeTooltip!==t){this.closeActiveTooltip()}}closeActiveTooltip(){const{activeTooltip:t}=this;if(t?.open){this.toggleTooltip(t,false)}}toggleFocusedTooltip(t,e){if(e){this.clearHoverTimeout()}this.toggleTooltip(t,e)}toggleTooltip(t,e){t.open=e;this.activeTooltip=e?t:null}registerShadowRoot(t){const{registeredShadowRootCounts:e}=this;const i=e.get(t);const s=Math.min((typeof i==="number"?i:0)+1,1);if(s===1){this.addShadowListeners(t)}e.set(t,s)}unregisterShadowRoot(t){const{registeredShadowRootCounts:e}=this;const i=e.get(t);const s=Math.max((typeof i==="number"?i:1)-1,0);if(s===0){this.removeShadowListeners(t)}e.set(t,s)}getReferenceElShadowRootNode(t){return t instanceof Element?r(t):null}}const x=":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}";const E=x;const H=new k;const T=class{constructor(i){t(this,i);this.calciteTooltipBeforeClose=e(this,"calciteTooltipBeforeClose",6);this.calciteTooltipClose=e(this,"calciteTooltipClose",6);this.calciteTooltipBeforeOpen=e(this,"calciteTooltipBeforeOpen",6);this.calciteTooltipOpen=e(this,"calciteTooltipOpen",6);this.guid=`calcite-tooltip-${u()}`;this.hasLoaded=false;this.openTransitionProp="opacity";this.setTransitionEl=t=>{this.transitionEl=t};this.setUpReferenceElement=(t=true)=>{this.removeReferences();this.effectiveReferenceElement=y(this.el);c(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:i,effectiveReferenceElement:s}=this;if(t&&i&&!s){console.warn(`${e.tagName}: reference-element id "${i}" was not found.`,{el:e})}this.addReferences()};this.getId=()=>this.el.id||this.guid;this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}const e=this.getId();if("setAttribute"in t){t.setAttribute(v,e)}H.registerElement(t,this.el)};this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}if("removeAttribute"in t){t.removeAttribute(v)}H.unregisterElement(t)};this.closeOnClick=false;this.label=undefined;this.offsetDistance=l;this.offsetSkidding=0;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.referenceElement=undefined;this.effectiveReferenceElement=undefined;this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(true)}offsetSkiddingHandler(){this.reposition(true)}openHandler(){p(this);this.reposition(true)}overlayPositioningHandler(){this.reposition(true)}placementHandler(){this.reposition(true)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(true);if(this.open){p(this)}}async componentWillLoad(){if(this.open){p(this)}}componentDidLoad(){if(this.referenceElement&&!this.effectiveReferenceElement){this.setUpReferenceElement()}this.hasLoaded=true}disconnectedCallback(){this.removeReferences();h(this,this.effectiveReferenceElement,this.el)}async reposition(t=false){const{el:e,effectiveReferenceElement:i,placement:s,overlayPositioning:o,offsetDistance:n,offsetSkidding:r,arrowEl:a}=this;return f(this,{floatingEl:e,referenceEl:i,overlayPositioning:o,placement:s,offsetDistance:n,offsetSkidding:r,arrowEl:a,type:"tooltip"},t)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:t,label:e,open:o,floatingLayout:n}=this;const r=t&&o;const c=!r;return i(s,{key:"d189a57bce7fe93c1849a831e365f087e43d8623","aria-hidden":a(c),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":c,id:this.getId(),role:"tooltip"},i("div",{key:"b23b791dffa0536f818158db19c028082e13b63f",class:{[d.animation]:true,[d.animationActive]:r},ref:this.setTransitionEl},i(m,{key:"612554abba2e6ad14eb7f4436d9df9d56ab14075",floatingLayout:n,ref:t=>this.arrowEl=t}),i("div",{key:"9b9148345f27e5d6b9b16195cce60cf8238be59e",class:b.container},i("slot",{key:"9a60e176af5b7c53bb87562ca82115e44581b6ca"}))))}get el(){return o(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};T.style=E;export{T as calcite_tooltip};
//# sourceMappingURL=p-a215e09b.entry.js.map