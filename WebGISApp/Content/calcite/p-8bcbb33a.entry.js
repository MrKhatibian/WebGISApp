/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */
import{r as t,h as e,H as i,g as o,c as n,e as s,F as a}from"./p-818852ac.js";import{C as c,s as r,k as l,g as d,D as h,t as b,H as u}from"./p-d1368708.js";import{g as f}from"./p-1d0d4f4f.js";import{a as p,b as v,d as g}from"./p-a9154150.js";import{c as m}from"./p-83d5b046.js";import{c as k,d as x}from"./p-d918698d.js";import{c as y,s as w,d as T,u as z}from"./p-99528bdd.js";import{C}from"./p-66edac25.js";import{c as I,d as S,I as H,u as A}from"./p-34a03696.js";import{g as L}from"./p-89725cbd.js";import{i as j}from"./p-cd85d59d.js";import"./p-24a311c0.js";const B={container:"container",content:"content"};const W=":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([hidden]){display:none}[hidden]{display:none}";const F=W;const E=class{constructor(e){t(this,e);this.guid=`calcite-tab-title-${f()}`;this.tab=undefined;this.selected=false;this.scale="m";this.labeledBy=undefined}render(){const t=this.el.id||this.guid;return e(i,{key:"781e0b82d69d7ea6b2bd6e15ed0d1c5248f24d05","aria-labelledby":this.labeledBy,id:t},e("div",{key:"58a6be23b29e8bee598ecf0cd97ef0578fd4e197",class:{[B.container]:true,[`scale-${this.scale}`]:true},role:"tabpanel",tabIndex:this.selected?0:-1},e("section",{key:"fbff1dec6ca2494f2485528679c14b4b0741abd8",class:B.content},e("slot",{key:"fc52db6fd58bd87f137e887837df5c08772809a3"}))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(t){const e=t.composedPath().find((t=>t.tagName==="CALCITE-TABS"));if(e!==this.parentTabsEl){return}if(this.tab){this.selected=this.tab===t.detail.tab}else{this.getTabIndex().then((e=>{this.selected=e===t.detail.tab}))}t.stopPropagation()}async getTabIndex(){return Array.prototype.indexOf.call(c(this.el.parentElement.children).filter((t=>t.matches("calcite-tab"))),this.el)}async updateAriaInfo(t=[],e=[]){this.labeledBy=e[t.indexOf(this.el.id)]||null}get el(){return o(this)}};E.style=F;const O={chevronRight:"chevron-right",chevronLeft:"chevron-left"};const R={container:"tab-nav",containerHasEndTabTitleOverflow:"tab-nav--end-overflow",containerHasStartTabTitleOverflow:"tab-nav--start-overflow",scrollButton:"scroll-button",scrollButtonContainer:"scroll-button-container",scrollBackwardContainerButton:"scroll-button-container--backward",scrollForwardContainerButton:"scroll-button-container--forward",tabTitleSlotWrapper:"tab-titles-slot-wrapper"};const D=':host{--calcite-internal-tab-nav-gradient-start-side:left;--calcite-internal-tab-nav-gradient-end-side:right;position:relative;display:flex}.scale-s{--calcite-internal-tab-nav-scroller-button-width:24px;min-block-size:1.5rem}.scale-m{--calcite-internal-tab-nav-scroller-button-width:32px;min-block-size:2rem}.scale-l{--calcite-internal-tab-nav-scroller-button-width:44px;min-block-size:2.75rem}.calcite--rtl{--calcite-internal-tab-nav-gradient-start-side:right;--calcite-internal-tab-nav-gradient-end-side:left}.tab-nav--start-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--start-overflow.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%), linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%)}.tab-nav::-webkit-scrollbar{display:none;-ms-overflow-style:none;scrollbar-width:none}:host([layout=center]) ::slotted(calcite-tab-title){display:flex;flex-grow:1;flex-shrink:0;min-inline-size:auto;white-space:nowrap}:host([layout=center]) ::slotted(calcite-tab-title[selected]){overflow:unset}:host(:not([bordered])) .scale-l{--calcite-internal-tab-nav-gap:var(--calcite-size-xxl)}:host(:not([bordered])) .scale-m{--calcite-internal-tab-nav-gap:var(--calcite-size-xl)}:host(:not([bordered])) .scale-s{--calcite-internal-tab-nav-gap:var(--calcite-size-lg)}:host(:not([bordered])) .tab-titles-slot-wrapper{gap:var(--calcite-internal-tab-nav-gap)}:host([layout=center]:not([bordered])) .tab-titles-slot-wrapper{padding-inline:var(--calcite-spacing-xxl)}.tab-nav,.tab-titles-slot-wrapper{display:flex;inline-size:100%;justify-content:flex-start;overflow:hidden;white-space:nowrap}.scroll-button-container{position:absolute;inset-block:0px}.scroll-button-container calcite-button{--calcite-offset-invert-focus:1;--calcite-color-text-1:var(--calcite-color-text-3);block-size:100%}.scroll-button-container calcite-button:hover{--calcite-color-text-1:unset;--calcite-color-foreground-1:var(--calcite-color-transparent-hover);--calcite-color-foreground-3:var(--calcite-color-transparent)}.scroll-button-container--forward{inset-inline-end:0;z-index:var(--calcite-z-index)}.scroll-button-container--backward{inset-inline-start:0;z-index:var(--calcite-z-index)}:host(:not([bordered])) .scroll-button-container--backward::before,:host(:not([bordered])) .scroll-button-container--forward::before{background-color:var(--calcite-color-border-3);content:"";inline-size:var(--calcite-border-width-sm);inset-block-start:var(--calcite-border-width-md);inset-block-end:var(--calcite-border-width-md);position:absolute}:host(:not([bordered])) .scroll-button-container--backward::before{inset-inline-end:0}:host(:not([bordered])) .scroll-button-container--forward::before{inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}';const P=D;const $=class{constructor(i){t(this,i);this.calciteTabChange=n(this,"calciteTabChange",6);this.calciteInternalTabNavSlotChange=n(this,"calciteInternalTabNavSlotChange",7);this.calciteInternalTabChange=n(this,"calciteInternalTabChange",6);this.effectiveDir="ltr";this.lastScrollWheelAxis="x";this.resizeObserver=m("resize",(()=>{this.updateScrollingState()}));this.onTabTitleWheel=t=>{t.preventDefault();const{deltaX:e,deltaY:i}=t;const o=Math.abs(e);const n=Math.abs(i);let s;if(o===n){s=this.lastScrollWheelAxis==="x"?e:i}else if(o>n){s=e;this.lastScrollWheelAxis="x"}else{s=i;this.lastScrollWheelAxis="y"}const a=(this.effectiveDir==="rtl"?-1:1)*s;t.currentTarget.scrollBy(a,0)};this.onSlotChange=t=>{this.intersectionObserver?.disconnect();const e=r(t,"calcite-tab-title");e.forEach((t=>{this.intersectionObserver?.observe(t)}));this.calciteInternalTabNavSlotChange.emit(e)};this.storeTabTitleWrapperRef=t=>{this.tabTitleContainerEl=t;this.intersectionObserver=m("intersection",(()=>this.updateScrollingState()),{root:t,threshold:[0,.5,1]})};this.scrollToTabTitles=t=>{s((()=>{const e=this.tabTitleContainerEl;const i=e.getBoundingClientRect();const o=Array.from(this.el.querySelectorAll("calcite-tab-title"));const{effectiveDir:n}=this;if(t==="forward"){o.reverse()}let s=null;o.forEach((e=>{const o=e.getBoundingClientRect();const a=i.x+i.width;const c=o.x+o.width;if(t==="forward"&&n==="ltr"||t==="backward"&&n==="rtl"){const t=o.x>a;if(t){s=e}else{const t=c>a&&o.x>i.x;if(t){s=e}}}else{const t=c<i.x;if(t){s=e}else{const t=c<a&&o.x<i.x;if(t){s=e}}}}));if(s){const{scrollerButtonWidth:i}=this;const o=t==="forward"&&n==="ltr"||t==="backward"&&n==="rtl"?-i:s.offsetWidth-e.clientWidth+i;const a=s.offsetLeft+o;e.scrollTo({left:a,behavior:"smooth"})}}))};this.scrollToNextTabTitles=()=>this.scrollToTabTitles("forward");this.scrollToPreviousTabTitles=()=>this.scrollToTabTitles("backward");this.handleTabFocus=(t,e,i)=>{const o=l(this.enabledTabTitles,e,i);this.scrollTabTitleIntoView(o,"instant");t.stopPropagation()};this.onTabTitleScroll=()=>{this.updateScrollingState()};this.renderScrollButton=t=>{const{bordered:i,messages:o,hasOverflowingStartTabTitle:n,hasOverflowingEndTabTitle:s,scale:a}=this;const c=t==="end";return e("div",{class:{[R.scrollButtonContainer]:true,[R.scrollBackwardContainerButton]:!c,[R.scrollForwardContainerButton]:c},hidden:c&&!s||!c&&!n,key:t},e("calcite-button",{appearance:i?"outline-fill":"transparent","aria-label":c?o.nextTabTitles:o.previousTabTitles,class:{[R.scrollButton]:true},iconFlipRtl:"both",iconStart:c?O.chevronRight:O.chevronLeft,kind:"neutral",onClick:c?this.scrollToNextTabTitles:this.scrollToPreviousTabTitles,scale:a,tabIndex:-1}))};this.storageId=undefined;this.syncId=undefined;this.selectedTitle=null;this.scale="m";this.layout="inline";this.position="bottom";this.bordered=false;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale="";this.hasOverflowingStartTabTitle=false;this.hasOverflowingEndTabTitle=false;this.selectedTabId=undefined}selectedTitleChanged(){this.calciteInternalTabChange.emit({tab:this.selectedTabId})}onMessagesChange(){}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs");this.resizeObserver?.observe(this.el);k(this);y(this)}async componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}await w(this)}componentDidLoad(){this.scrollTabTitleIntoView(this.selectedTitle,"instant")}componentWillRender(){const{parentTabsEl:t}=this;this.layout=t?.layout;this.bordered=t?.bordered;this.effectiveDir=d(this.el)}componentDidRender(){if(this.tabTitles.length&&this.tabTitles.every((t=>!t.selected))&&!this.selectedTabId){this.tabTitles[0].getTabIdentifier().then((t=>{this.calciteInternalTabChange.emit({tab:t})}))}}disconnectedCallback(){this.resizeObserver?.disconnect();x(this);T(this)}render(){return e(i,{key:"e2e130cc399d8bb88201f283de2eef17a46882fc",role:"tablist"},e("div",{key:"2beae02bec71c759201063e4820ce19cacd1c432",class:{[R.container]:true,[R.containerHasStartTabTitleOverflow]:!!this.hasOverflowingStartTabTitle,[R.containerHasEndTabTitleOverflow]:!!this.hasOverflowingEndTabTitle,[`scale-${this.scale}`]:true,[`position-${this.position}`]:true,[C.rtl]:this.effectiveDir==="rtl"}},this.renderScrollButton("start"),e("div",{key:"609a5b8efc1bd46810217ab17256aaad7432586b",class:{[R.tabTitleSlotWrapper]:true},onScroll:this.onTabTitleScroll,onWheel:this.onTabTitleWheel,ref:this.storeTabTitleWrapperRef},e("slot",{key:"7436f2fcacf2b483a77c741a2449f783c9c4c148",onSlotchange:this.onSlotChange})),this.renderScrollButton("end")))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){const e=t.target;this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(e);t.stopPropagation();this.selectedTitle=e;this.scrollTabTitleIntoView(e)}scrollTabTitleIntoView(t,e="smooth"){if(!t){return}s((()=>{const i=this.effectiveDir==="ltr";const o=this.tabTitleContainerEl;const n=o.getBoundingClientRect();const s=t.getBoundingClientRect();const a=o.scrollLeft;const c=i?this.hasOverflowingStartTabTitle:this.hasOverflowingEndTabTitle;const r=i?this.hasOverflowingEndTabTitle:this.hasOverflowingStartTabTitle;if(s.left<n.left+(c?this.scrollerButtonWidth:0)){const t=a+(s.left-n.left)-this.scrollerButtonWidth;o.scrollTo({left:t,behavior:e})}else if(s.right>n.right-(r?this.scrollerButtonWidth:0)){const t=a+(s.right-n.right)+this.scrollerButtonWidth;o.scrollTo({left:t,behavior:e})}}))}activateTabHandler(t){this.calciteTabChange.emit();t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e);t.stopPropagation()}async updateTabTitles(t){if(t.target.selected){this.selectedTabId=t.detail;this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}}globalInternalTabChangeHandler(t){if(this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab){this.selectedTabId=t.detail.tab}t.stopPropagation()}effectiveLocaleChange(){z(this,this.effectiveLocale)}async selectedTabIdChanged(){if(localStorage&&this.storageId&&this.selectedTabId!==undefined&&this.selectedTabId!==null){localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId))}this.calciteInternalTabChange.emit({tab:this.selectedTabId})}get scrollerButtonWidth(){const{scale:t}=this;return parseInt(t==="s"?p:t==="m"?v:g)}updateScrollingState(){const t=this.tabTitleContainerEl;if(!t){return}let e;let i;const o=t.scrollLeft;const n=t.clientWidth;const s=t.scrollWidth;if(this.effectiveDir==="ltr"){e=o>0;i=o+n<s}else{e=o<0;i=o!==-(s-n)}this.hasOverflowingStartTabTitle=e;this.hasOverflowingEndTabTitle=i}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map((t=>t.getTabIdentifier()))).then((e=>this.tabTitles[e.indexOf(t)]))}get tabTitles(){return h(this.el,"calcite-tab-title")}get enabledTabTitles(){return h(this.el,"calcite-tab-title:not([disabled])").filter((t=>!t.closed))}handleTabTitleClose(t){const{tabTitles:e}=this;const i=t.selected;const o=e.reduce(((t,e,i)=>!e.closed?[...t,i]:t),[]);const n=o.length;if(n===1&&e[o[0]].closable){e[o[0]].closable=false;this.selectedTabId=o[0];if(i){e[o[0]].activateTab()}}else if(n>1){const i=e.findIndex((e=>e===t));const s=o.find((t=>t>i));if(this.selectedTabId===i){this.selectedTabId=s?s:n-1;e[this.selectedTabId].activateTab()}}requestAnimationFrame((()=>{e[this.selectedTabId].focus()}))}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{selectedTitle:["selectedTitleChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],selectedTabId:["selectedTabIdChanged"]}}};$.style=P;const N={closeButton:"close-button",container:"container",containerBottom:"container--bottom",content:"content",contentHasText:"content--has-text",iconEnd:"icon-end",iconPresent:"icon-present",iconStart:"icon-start",titleIcon:"calcite-tab-title--icon",scale:t=>`scale-${t}`,selectedIndicator:"selected-indicator"};const M={close:"x"};const _=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}.content{position:relative;margin-block-end:0.125rem;box-sizing:border-box;display:flex;block-size:100%;align-items:center;justify-content:center}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-s .close-button{inline-size:1.25rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-m .close-button{inline-size:1.75rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.scale-l .close-button{inline-size:2rem}:host([closable]) .content{border-block-end-color:transparent}:host([layout=inline]) .content,:host([layout=center]) .content{padding-inline:0.25rem}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.selected-indicator{position:absolute;display:block;block-size:0.125rem;inline-size:100%;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%}.container--bottom .selected-indicator{inset-block-end:unset;inset-block-start:0}:host([bordered]) .selected-indicator{inset-block-start:0;inset-block-end:unset;inset-inline-start:-1px;inset-inline-end:0;inline-size:calc(100% + var(--calcite-spacing-base))}:host([bordered]) .container:not(.container--bottom){border-block-end:1px solid transparent}:host([bordered]:not([selected]):hover) .container:not(.container--bottom){border-block-end:1px solid var(--calcite-color-border-1)}:host([bordered]:not([selected]):hover:not(:focus)) .selected-indicator{background-color:var(--calcite-color-foreground-2)}:host([bordered]:not([selected]):hover:not(:focus)) .container:not(.container--bottom) .selected-indicator{box-shadow:inset 0 1px var(--calcite-color-border-1)}:host([bordered]:not([selected]):hover:not(:focus)) .container.container--bottom .selected-indicator{box-shadow:inset 0 -1px var(--calcite-color-border-1)}:host([bordered][selected]) .container::after{position:absolute;display:block;block-size:0.125rem;inline-size:100%;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inset-block-end:-1px;inset-inline-start:0;inset-inline-end:0;inline-size:100%;background:var(--calcite-color-foreground-1);content:""}:host([bordered][selected]) .container.container--bottom::after{inset-block-start:-1px}:host([bordered][selected]:hover) .container::after{background:var(--calcite-color-foreground-2)}:host([bordered][selected]:focus) .container::after{background:transparent}:host([bordered]) .container--bottom .selected-indicator{inset-block-start:unset;inset-block-end:0}:host([selected]) .selected-indicator,:host([selected]:hover) .selected-indicator{background-color:var(--calcite-color-brand)}:host(:hover) .selected-indicator{background-color:var(--calcite-color-border-3)}:host(:focus) .selected-indicator,:host(:active) .selected-indicator{background-color:var(--calcite-color-brand)}@media (forced-colors: active){.selected-indicator{background-color:highlight}}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-color-text-1)}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-color-border-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:var(--calcite-spacing-sm)}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:var(--calcite-spacing-sm)}.close-button{display:flex;block-size:100%;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-start:var(--calcite-spacing-sm);margin-inline-end:var(--calcite-spacing-px);block-size:calc(100% - var(--calcite-spacing-xxs))}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand))}.close-button:focus,.close-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button:active{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:var(--calcite-spacing-sm)}:host([bordered]) .container:not(.container--bottom) .close-button{block-size:calc(100% - var(--calcite-spacing-px));margin-block-start:-1px}:host([bordered]) .container .close-button calcite-icon{margin-block-start:var(--calcite-spacing-px)}:host([bordered]) .container .close-button:focus,:host([bordered]) .container .close-button:hover,:host([bordered]) .container .close-button:active{box-shadow:0 2px 0 0 var(--calcite-color-foreground-3)}:host([bordered]) .container.container--bottom .close-button{box-shadow:0 -2px 0 0 transparent}:host([bordered]) .container.container--bottom .close-button calcite-icon{margin-block-end:var(--calcite-spacing-px)}:host([bordered]) .container.container--bottom .close-button:focus,:host([bordered]) .container.container--bottom .close-button:hover,:host([bordered]) .container.container--bottom .close-button:active{box-shadow:0 -2px 0 0 var(--calcite-color-foreground-3)}:host([bordered][selected]){box-shadow:inset 0 -1px var(--calcite-color-foreground-1)}:host([bordered]:not([selected])) .container .close-button{box-shadow:0 2px 0 0 transparent}:host([bordered]:hover) .container{background-color:var(--calcite-color-foreground-2)}:host([bordered]) .container{border-inline:var(--calcite-spacing-px) solid transparent}:host([selected][bordered]) .container{border-inline-color:var(--calcite-color-border-1)}:host([layout=inline][bordered]) .scale-m .content,:host([layout=center][bordered]) .scale-m .content{padding-inline:0.75rem}:host([layout=inline][bordered]) .scale-s .content,:host([layout=center][bordered]) .scale-s .content{padding-inline:0.5rem}:host([layout=inline][bordered]) .scale-l .content,:host([layout=center][bordered]) .scale-l .content{padding-inline:1rem}:host([layout=inline][closable]) .scale-s .content,:host([layout=inline][closable]) .scale-m .content,:host([layout=inline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered]) .container--bottom{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][selected]) .container--bottom{border-block-start-style:none}.close-button{z-index:var(--calcite-z-index)}}:host([hidden]){display:none}[hidden]{display:none}';const q=_;const J=class{constructor(e){t(this,e);this.calciteTabsActivate=n(this,"calciteTabsActivate",6);this.calciteInternalTabsActivate=n(this,"calciteInternalTabsActivate",6);this.calciteTabsClose=n(this,"calciteTabsClose",6);this.calciteInternalTabsClose=n(this,"calciteInternalTabsClose",6);this.calciteInternalTabsFocusNext=n(this,"calciteInternalTabsFocusNext",6);this.calciteInternalTabsFocusPrevious=n(this,"calciteInternalTabsFocusPrevious",6);this.calciteInternalTabsFocusFirst=n(this,"calciteInternalTabsFocusFirst",6);this.calciteInternalTabsFocusLast=n(this,"calciteInternalTabsFocusLast",6);this.calciteInternalTabTitleRegister=n(this,"calciteInternalTabTitleRegister",6);this.calciteInternalTabIconChanged=n(this,"calciteInternalTabIconChanged",6);this.closeClickHandler=()=>{this.closeTabTitleAndNotify()};this.mutationObserver=m("mutation",(()=>this.updateHasText()));this.resizeObserver=m("resize",(()=>{this.calciteInternalTabIconChanged.emit()}));this.guid=`calcite-tab-title-${f()}`;this.selected=false;this.closable=false;this.closed=false;this.disabled=false;this.iconEnd=undefined;this.iconFlipRtl=undefined;this.iconStart=undefined;this.layout=undefined;this.position="top";this.scale="m";this.bordered=false;this.tab=undefined;this.messages=undefined;this.messageOverrides=undefined;this.controls=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined;this.hasText=false}selectedHandler(){if(this.selected){this.activateTab(false)}}onMessagesChange(){}connectedCallback(){I(this);k(this);y(this);this.setupTextContentObserver();this.parentTabNavEl=this.el.closest("calcite-tab-nav");this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){this.mutationObserver?.disconnect();document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}));this.resizeObserver?.disconnect();S(this);x(this);T(this)}async componentWillLoad(){await w(this);if(j()){this.updateHasText()}if(this.tab&&this.selected){this.activateTab(false)}}componentWillRender(){if(this.parentTabsEl){this.layout=this.parentTabsEl.layout;this.bordered=this.parentTabsEl.bordered}}render(){const{el:t,closed:o}=this;const n=t.id||this.guid;const s=e("calcite-icon",{key:"20ea18dabdb4cabe8a032d0799f3c757bc90c91d",class:{[N.titleIcon]:true,[N.iconStart]:true},flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:L(this.scale)});const a=e("calcite-icon",{key:"ebd3913a334a959e8962addd45e5077ee82f2ca8",class:{[N.titleIcon]:true,[N.iconEnd]:true},flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:L(this.scale)});return e(i,{key:"58a72fa4a6e961c3414dfe224a4e235892784707","aria-controls":this.controls,"aria-selected":b(this.selected),id:n,role:"tab",tabIndex:this.selected&&!this.disabled?0:-1},e(H,{key:"fe7662ade3001579b664772b4672d6bebd06a82b",disabled:this.disabled},e("div",{key:"ea226b71436922de6bae2e8e542ae0adf08add1b",class:{[N.container]:true,[N.containerBottom]:this.position==="bottom",[N.iconPresent]:!!this.iconStart||!!this.iconEnd,[N.scale(this.scale)]:true},hidden:o,ref:t=>this.resizeObserver?.observe(t)},e("div",{key:"737609daa04d9dc18b46872c49b82cf211ba9b5a",class:{[N.content]:true,[N.contentHasText]:this.hasText}},this.iconStart?s:null,e("slot",{key:"fb500a910e5c6bfcd8571e2d109331dd88f2544d"}),this.iconEnd?a:null),this.renderCloseButton(),e("div",{key:"3fd13c6f459e05cea88c40809b7220369866a2b9",class:N.selectedIndicator}))))}renderCloseButton(){const{closable:t,messages:i}=this;return t?e("button",{"aria-label":i.close,class:N.closeButton,disabled:false,key:N.closeButton,onClick:this.closeClickHandler,ref:t=>this.closeButtonEl=t,title:i.close,type:"button"},e("calcite-icon",{icon:M.close,scale:L(this.scale)})):null}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){A(this)}internalTabChangeHandler(t){const e=t.composedPath().find((t=>t.tagName==="CALCITE-TABS"));if(e!==this.parentTabsEl){return}if(this.tab){this.selected=this.tab===t.detail.tab}else{this.getTabIndex().then((e=>{this.selected=e===t.detail.tab}))}t.stopPropagation()}onClick(){this.activateTab()}keyDownHandler(t){switch(t.key){case" ":case"Enter":if(!t.composedPath().includes(this.closeButtonEl)){this.activateTab();t.preventDefault()}break;case"ArrowRight":t.preventDefault();if(d(this.el)==="ltr"){this.calciteInternalTabsFocusNext.emit()}else{this.calciteInternalTabsFocusPrevious.emit()}break;case"ArrowLeft":t.preventDefault();if(d(this.el)==="ltr"){this.calciteInternalTabsFocusPrevious.emit()}else{this.calciteInternalTabsFocusNext.emit()}break;case"Home":t.preventDefault();this.calciteInternalTabsFocusFirst.emit();break;case"End":t.preventDefault();this.calciteInternalTabsFocusLast.emit();break}}async getTabIndex(){return Array.prototype.indexOf.call(c(this.el.parentElement.children).filter((t=>t.matches("calcite-tab-title"))),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],e=[]){this.controls=t[e.indexOf(this.el.id)]||null}async activateTab(t=true){if(this.disabled||this.closed){return}const e={tab:this.tab};this.calciteInternalTabsActivate.emit(e);if(t){requestAnimationFrame((()=>this.calciteTabsActivate.emit()))}}effectiveLocaleChange(){z(this,this.effectiveLocale)}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:true,subtree:true})}closeTabTitleAndNotify(){this.closed=true;this.calciteInternalTabsClose.emit({tab:this.tab});this.calciteTabsClose.emit()}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};J.style=q;const U={titleGroup:"title-group"};const G=":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1);background-color:var(--calcite-color-foreground-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1), inset 0 -1px 0 var(--calcite-color-border-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-color-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-color-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}";const V=G;const X=class{constructor(e){t(this,e);this.defaultSlotChangeHandler=t=>{this.tabs=r(t,"calcite-tab")};this.setDefaultSlotRef=t=>this.slotEl=t;this.layout="inline";this.position="top";this.scale="m";this.bordered=false;this.titles=[];this.tabs=[]}handleInheritableProps(){this.updateItems()}calciteInternalTabNavSlotChangeHandler(t){t.stopPropagation();if(t.detail.length!==this.titles.length){this.titles=t.detail}}titlesWatcher(){this.updateAriaSettings();this.updateItems()}tabsWatcher(){this.updateAriaSettings();this.updateItems()}async updateAriaSettings(){let t;let e;const i=u(this.slotEl,"calcite-tab");if(i.some((t=>t.tab))||this.titles.some((t=>t.tab))){t=i.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id));e=this.titles.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id))}else{const o=await Promise.all(i.map((t=>t.getTabIndex())));const n=await Promise.all(this.titles.map((t=>t.getTabIndex())));t=o.reduce(((t,e,o)=>{t[e]=i[o].id;return t}),[]);e=n.reduce(((t,e,i)=>{t[e]=this.titles[i].id;return t}),[])}i.forEach((i=>i.updateAriaInfo(t,e)));this.titles.forEach((i=>i.updateAriaInfo(t,e)))}updateItems(){const{position:t,scale:e}=this;const i=this.el.querySelector("calcite-tab-nav");if(i){i.position=t;i.scale=e}Array.from(this.el.querySelectorAll("calcite-tab")).forEach((t=>{if(t.parentElement===this.el){t.scale=e}}));Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach((i=>{i.position=t;i.scale=e}))}connectedCallback(){this.updateItems()}async componentWillLoad(){this.updateItems()}disconnectedCallback(){}render(){return e(a,{key:"300872682f4f969586b06b6bbfa5cccb5a005e03"},e("slot",{key:"9b8c09c2f93725349a98d13fb0167c88b82ef413",name:U.titleGroup}),e("section",{key:"bf1b19251ca8ab3ba4c3c3fa15995889d71d9355"},e("slot",{key:"e1008e065225b4f0cb1b4fbe2ec91ab761db1144",onSlotchange:this.defaultSlotChangeHandler,ref:this.setDefaultSlotRef})))}get el(){return o(this)}static get watchers(){return{position:["handleInheritableProps"],scale:["handleInheritableProps"],titles:["titlesWatcher"],tabs:["tabsWatcher"]}}};X.style=V;export{E as calcite_tab,$ as calcite_tab_nav,J as calcite_tab_title,X as calcite_tabs};
//# sourceMappingURL=p-8bcbb33a.entry.js.map