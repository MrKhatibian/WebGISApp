/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,c as n,h as s,a as i}from"../widgets/Widget.js";import{e as o,w as l,g as a,t as c}from"./dom.js";import{c as r,u as d,d as h,I as m}from"./interactive.js";import{c as p,d as u}from"./locale2.js";import{u as g,c as C,s as f,d as b}from"./t9n.js";import{s as v,a as S,c as I}from"./loadable.js";import{g as j,a as E,b as y,u as x}from"./utils32.js";import{a as L,I as k,C as A,S as w}from"./resources4.js";import{d as D}from"./action.js";import{d as H}from"./handle.js";import{d as M}from"./icon.js";import{d as F}from"./loader.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./guid.js";import"./key.js";import"./observers.js";import"./component.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const P=new Map,B=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=n(this,"calciteListItemSelect",6),this.calciteListItemClose=n(this,"calciteListItemClose",6),this.calciteListItemDragHandleChange=n(this,"calciteListItemDragHandleChange",6),this.calciteListItemToggle=n(this,"calciteListItemToggle",6),this.calciteInternalListItemSelect=n(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemSelectMultiple=n(this,"calciteInternalListItemSelectMultiple",6),this.calciteInternalListItemActive=n(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=n(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=n(this,"calciteInternalListItemChange",6),this.dragHandleSelectedChangeHandler=e=>{this.dragSelected=e.target.selected,this.calciteListItemDragHandleChange.emit(),e.stopPropagation()},this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()},this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)},this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)},this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)},this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)},this.handleCloseClick=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=o(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=o(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=o(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=o(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=o(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=o(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.handleToggleClick=()=>{this.toggle()},this.toggle=(e=!this.open)=>{this.open=e,this.calciteListItemToggle.emit()},this.handleItemClick=e=>{e.defaultPrevented||this.toggleSelected(e.shiftKey)},this.toggleSelected=e=>{const{selectionMode:t,selected:n}=this;this.disabled||("multiple"===t||"single"===t?this.selected=!n:"single-persist"===t&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&"multiple"===t}),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:t}=e,n=e.composedPath(),{containerEl:s,actionsStartEl:i,actionsEndEl:o,open:l,openable:a}=this,c=this.getGridCells(),r=c.findIndex((e=>n.includes(e)));if("Enter"!==t||n.includes(i)||n.includes(o)){if("ArrowRight"===t){e.preventDefault();const t=r+1;-1===r?!l&&a?(this.toggle(!0),this.focusCell(null)):c[0]&&this.focusCell(c[0]):c[r]&&c[t]&&this.focusCell(c[t])}else if("ArrowLeft"===t){e.preventDefault();const t=r-1;-1===r?(this.focusCell(null),l&&a?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):0===r?(this.focusCell(null),s.focus()):c[r]&&c[t]&&this.focusCell(c[t])}}else e.preventDefault(),this.toggleSelected(e.shiftKey)},this.focusCellNull=()=>{this.focusCell(null)},this.handleCellFocusIn=e=>{this.setFocusCell(e,l(e),!0)},this.setFocusCell=(e,t,n)=>{const{parentListEl:s}=this;n&&P.set(s,null);const i=this.getGridCells();i.forEach((e=>{e.tabIndex=-1,e.removeAttribute(L)})),e&&(e.tabIndex=e===t?0:-1,e.setAttribute(L,""),n&&P.set(s,i.indexOf(e)))},this.focusCell=(e,t=!0)=>{const n=l(e);this.setFocusCell(e,n,t),n?.focus()},this.active=!1,this.bordered=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.dragSelected=!1,this.filterHidden=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){g(this,this.effectiveLocale)}connectedCallback(){r(this),p(this),C(this);const{el:e}=this;this.parentListEl=e.closest("calcite-list"),this.level=j(e)+1,this.setSelectionDefaults()}async componentWillLoad(){v(this),await f(this)}componentDidLoad(){S(this)}componentDidRender(){d(this)}disconnectedCallback(){h(this),u(this),b(this)}async setFocus(){await I(this);const{containerEl:e,parentListEl:t}=this,n=P.get(t);if("number"!=typeof n)e?.focus();else{const t=this.getGridCells();t[n]?this.focusCell(t[n]):e?.focus()}}renderSelected(){const{selected:e,selectionMode:t,selectionAppearance:n}=this;return"none"===t||"border"===n?null:s("td",{class:{[A.selectionContainer]:!0,[A.selectionContainerSingle]:"single"===t||"single-persist"===t},key:"selection-container",onClick:this.handleItemClick},s("calcite-icon",{icon:e?"multiple"===t?k.selectedMultiple:k.selectedSingle:"multiple"===t?k.unselectedMultiple:k.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:e,dragHandle:t,dragSelected:n,dragDisabled:i,setPosition:o,setSize:l}=this;return t?s("td",{"aria-label":e,class:A.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,role:"gridcell",ref:e=>this.handleGridEl=e},s("calcite-handle",{disabled:i,label:e,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:n,setPosition:o,setSize:l})):null}renderOpen(){const{el:e,open:t,openable:n,messages:i}=this,o=a(e),l=t?k.open:"rtl"===o?k.closedRTL:k.closedLTR,c=t?i.collapse:i.expand;return n?s("td",{class:A.openContainer,key:"open-container",onClick:this.handleToggleClick,title:c},s("calcite-icon",{icon:l,key:l,scale:"s"})):null}renderActionsStart(){const{label:e,hasActionsStart:t}=this;return s("td",{"aria-label":e,class:A.actionsStart,hidden:!t,key:"actions-start-container",onFocusin:this.focusCellActionsStart,role:"gridcell",ref:e=>this.actionsStartEl=e},s("slot",{name:w.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:e,hasActionsEnd:t,closable:n,messages:i}=this;return s("td",{"aria-label":e,class:A.actionsEnd,hidden:!(t||n),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,role:"gridcell",ref:e=>this.actionsEndEl=e},s("slot",{name:w.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?s("calcite-action",{appearance:"transparent",icon:k.close,key:"close-action",label:i.close,onClick:this.handleCloseClick,text:i.close}):null)}renderContentStart(){const{hasContentStart:e}=this;return s("div",{class:A.contentStart,hidden:!e},s("slot",{name:w.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:e}=this;return s("div",{class:A.customContent,hidden:!e},s("slot",{name:w.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:e}=this;return s("div",{class:A.contentEnd,hidden:!e},s("slot",{name:w.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:e}=this;return s("div",{class:A.contentBottom,hidden:!e},s("slot",{name:w.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return s("div",{class:{[A.nestedContainer]:!0,[A.nestedContainerHidden]:this.openable&&!this.open}},s("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){const{label:e,description:t,hasCustomContent:n}=this;return n||!e&&!t?null:s("div",{class:A.content,key:"content"},e?s("div",{class:A.label,key:"label"},e):null,t?s("div",{class:A.description,key:"description"},t):null)}renderContentContainer(){const{description:e,label:t,selectionMode:n,hasCustomContent:i}=this,o=i||!!t||!!e,l=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return s("td",{"aria-label":t,class:{[A.contentContainer]:!0,[A.contentContainerSelectable]:"none"!==n,[A.contentContainerHasCenterContent]:o},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,role:"gridcell",ref:e=>this.contentEl=e},l)}render(){const{openable:e,open:t,level:n,setPosition:o,setSize:l,active:a,label:r,selected:d,selectionAppearance:h,selectionMode:p,closed:u,filterHidden:g,bordered:C,disabled:f}=this,b="none"!==p&&"border"===h,v=b&&d,S=b&&!d;return s(i,{key:"15651b0bef6af7db01d650ff74b732db28758292"},s(m,{key:"a0a4c2b6587a5c173710235518bf97aafc7d3b2a",disabled:f},s("div",{key:"f4dceb92cd6164d4d5445a9977aebfa9ae4073ff",class:{[A.wrapper]:!0,[A.wrapperBordered]:C}},s("tr",{key:"105d3b31fde1dabc1b606b25e28f9f7535367503","aria-expanded":e?c(t):null,"aria-label":r,"aria-level":n,"aria-posinset":o,"aria-selected":c(d),"aria-setsize":l,class:{[A.container]:!0,[A.containerHover]:!0,[A.containerBorder]:b,[A.containerBorderSelected]:v,[A.containerBorderUnselected]:S},hidden:u||g,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,role:"row",tabIndex:a?0:-1,ref:e=>this.containerEl=e},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),s("div",{key:"2018e3a2e07547caca69c18ce58a3e19ae66b3e8",class:A.indent},this.renderDefaultContainer())))}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const t=E(e),n=y(e);x(t),this.openable=!!t.length||!!n.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter((e=>e&&!e.hidden))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.indent{display:flex;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:flex;flex-direction:column}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-block:0px;color:var(--calcite-color-border-input);padding-inline:var(--calcite-spacing-md) var(--calcite-spacing-xxs)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item",{active:[4],bordered:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragDisabled:[516,"drag-disabled"],dragHandle:[4,"drag-handle"],dragSelected:[1540,"drag-selected"],filterHidden:[516,"filter-hidden"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]],{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function z(){"undefined"!=typeof customElements&&["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,B);break;case"calcite-action":customElements.get(e)||D();break;case"calcite-handle":customElements.get(e)||H();break;case"calcite-icon":customElements.get(e)||M();break;case"calcite-loader":customElements.get(e)||F()}}))}z();const O=B,U=z;export{O as CalciteListItem,U as defineCustomElement};