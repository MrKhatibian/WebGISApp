/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import{IdentifiableMixin as i}from"../core/Identifiable.js";import{R as o}from"../chunks/ReactiveMap.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{isLayerFromCatalog as l}from"../layers/catalog/catalogUtils.js";import{g as r,a}from"../chunks/actionUtils.js";import c,{l as m}from"./Widget.js";import p from"./CatalogLayerList/CatalogLayerListViewModel.js";import d from"../core/Accessor.js";import u from"./LayerList/ListItem.js";import{m as h,d as g,l as y,k as v,h as _,o as b}from"../chunks/layerListUtils.js";import{g as f}from"../chunks/globalCss.js";import"../chunks/widgetUtils.js";import{m as I}from"../chunks/messageBundle.js";import{v as k}from"../chunks/vmEvent.js";import{t as L}from"../chunks/jsxFactory.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./LayerList/ListItemPanel.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/themeUtils.js";let j=class extends d{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryLayerIndicators=!1}};e([s({type:Boolean,nonNullable:!0})],j.prototype,"closeButton",void 0),e([s({type:Boolean,nonNullable:!0})],j.prototype,"collapseButton",void 0),e([s({type:Boolean,nonNullable:!0})],j.prototype,"errors",void 0),e([s({type:Boolean,nonNullable:!0})],j.prototype,"filter",void 0),e([s({type:Boolean,nonNullable:!0})],j.prototype,"flow",void 0),e([s({type:Boolean,nonNullable:!0})],j.prototype,"heading",void 0),e([s({type:Boolean,nonNullable:!0})],j.prototype,"statusIndicators",void 0),e([s({type:Boolean,nonNullable:!0})],j.prototype,"temporaryLayerIndicators",void 0),j=e([n("esri.widgets.CatalogLayerList.CatalogLayerListVisibleElements")],j);const w=j,A="esri-catalog-layer-list",C=`${A}__item`,M={base:A,actionMenu:`${A}__action-menu`,actionGroup:`${A}__action-group`,filterNoResults:`${A}__filter-no-results`,item:C,itemActive:`${C}--active`,itemContent:`${C}-content`,itemContentBottom:`${C}-content-bottom`,itemMessage:`${C}-message`,itemInvisible:`${C}--invisible`,itemActionIcon:`${C}-action-icon`,itemActionImage:`${C}-action-image`,itemTemporaryIcon:`${C}-temporary-icon`,itemTableIcon:`${C}-table-icon`,statusIndicator:`${A}__status-indicator`,publishing:`${A}__publishing`,updating:`${A}__updating`,connectionStatus:`${A}__connection-status`,connectionStatusConnected:`${A}__connection-status--connected`,visibleToggle:`${A}__visible-toggle`,visibleIcon:`${A}__visible-icon`},T=t.ofType(u);let F=class extends(i(c)){constructor(e,t){super(e,t),this._activeItem=null,this._tooltipReferenceMap=new o,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._rootGroupUid=`operational-${this.uid}`,this.collapsed=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.messages=null,this.messagesLayerList=null,this.messagesCommon=null,this.minFilterItems=h,this.selectedItems=new T,this.selectionMode="none",this.viewModel=new p,this.visibilityAppearance="default",this.visibleElements=new w,this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=e=>{if("default"!==this.visibilityAppearance)return;const t=Array.from(e.composedPath()).find((e=>e.classList?.contains(M.item)));this._activeItem=g(t)}}loadDependencies(){return m({action:()=>import("../chunks/calcite-action.js"),"action-group":()=>import("../chunks/calcite-action-group.js"),"action-menu":()=>import("../chunks/calcite-action-menu.js"),button:()=>import("../chunks/calcite-button.js"),flow:()=>import("../chunks/calcite-flow.js"),"flow-item":()=>import("../chunks/calcite-flow-item.js"),icon:()=>import("../chunks/calcite-icon.js"),list:()=>import("../chunks/calcite-list.js"),"list-item":()=>import("../chunks/calcite-list-item.js"),notice:()=>import("../chunks/calcite-notice.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}destroy(){this._tooltipReferenceMap.clear()}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get catalogItems(){return this.viewModel.catalogItems}set catalogItems(e){this.viewModel.catalogItems=e}get catalogLayer(){return this.viewModel.catalogLayer}set catalogLayer(e){this.viewModel.catalogLayer=e}get icon(){return"catalog-dataset"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const e=this.viewModel?.state,t={[f.hidden]:"loading"===e,[f.disabled]:"disabled"===e},i=this.catalogItems?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return L("div",{class:this.classes(M.base,f.widget,f.panel,t)},i?.length?[this._renderItemTooltips(i),this._renderItems(i)]:this._renderNoItems())}_renderItemTooltip(e){const{_tooltipReferenceMap:t,messagesLayerList:i}=this;return e?L("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:t.get(e.layer.uid)},i.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){return e.incompatible?this._renderItemTooltip(e):e.children?.filter((e=>!e.hidden)).toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderItemTooltips(e){return e?.toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderNoItemsMessage(){return L("div",{slot:"message"},this.messagesLayerList.noItemsToDisplay)}_renderNoItems(){return L("div",{class:M.itemMessage,key:"esri-layer-list__no-items"},L("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?e.flatten((e=>e.children)).filter((({hidden:e,panel:t})=>!e&&t?.open&&!t.disabled&&t.flowEnabled)).toArray().map((({title:e,panel:t})=>{const i=()=>this._handlePanelFlowItemBack(t);return L("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:e,heading:t.title,headingLevel:this.headingLevel,key:`flow-panel-${t.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),i()}},t.render(),L("calcite-button",{appearance:"transparent",onclick:i,slot:"footer-actions",width:"full"},this.messagesCommon.back))})):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_renderItems(e){const{visible:t,collapsed:i,_filterEnabled:o,_rootGroupUid:s,visibleElements:{closeButton:n,collapseButton:l,heading:r,flow:a},selectionMode:c,filterText:m,filterPlaceholder:p,messages:d}=this,u=[L("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:n,closed:!t,collapsed:i,collapsible:l,heading:r?d.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},L("calcite-list",{afterCreate:e=>{e.addEventListener("focusin",this._setActiveItem),e.addEventListener("focusout",this._clearActiveItem)},afterRemoved:e=>{e.removeEventListener("focusin",this._setActiveItem),e.removeEventListener("focusout",this._clearActiveItem)},"data-layer-type":s,filterEnabled:o,filterPlaceholder:p,filterText:o?m:"",group:s,key:"root-list",label:d.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:c,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListFilter:e=>this.filterText=e.target?.filterText??""},e?.toArray().map((e=>this._renderItem(e))),e?.length&&o?L("div",{class:M.filterNoResults,slot:"filter-no-results"},L("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?a?L("calcite-flow",{key:"root-flow"},u):u:null}_renderChildList(e,t=[]){const{_rootGroupUid:i,viewModel:{listModeDisabled:o},selectionMode:s}=this,{children:n}=e,l=y(e),r=!(!o&&v(e.layer)||l||"group"!==e.layer?.type);return l||r?L("calcite-list",{"data-item":e,"data-layer-type":i,group:`${i}-${e.layer.uid}`,key:`child-list-${e.layer.uid}`,selectionAppearance:"border",selectionMode:s},n?.filter((e=>!e.hidden)).toArray().map((i=>this._renderItem(i,e,[...t,e.title])))):null}_renderItemMessage(e){return e.error?L("div",{class:M.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},L("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},L("div",{slot:"message"},this.messagesLayerList.layerError))):e.incompatible?L("div",{class:M.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},L("calcite-notice",{afterCreate:t=>this._setTooltipReference(t,e),afterRemoved:()=>this._removeTooltipReference(e),bind:this,icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},L("div",{slot:"message"},this.messagesLayerList.layerIncompatible))):null}_getLayerTitle(e){return e.title||this.messagesLayerList.untitledLayer}_renderItem(e,t,i){const{_activeItem:o,selectionMode:s,selectedItems:n,messagesLayerList:l}=this,r=this._getLayerTitle(e),a=e.visibleAtCurrentTimeExtent?e.visibleAtCurrentScale?r:`${r} (${l.layerInvisibleAtScale})`:`${r} (${l.layerInvisibleAtTime})`,c=this._filterActions(e.actionsSections),m=this._countActions(c);return L("calcite-list-item",{class:this.classes(M.item,{[M.itemActive]:o===e}),"data-item":e,"data-layer-id":e.layer.id,id:e.layer.uid,key:`list-item-${e.layer.uid}`,label:r,metadata:{parentTitles:i,title:r},open:e.open,selected:"none"!==s&&n.includes(e),title:a,value:e.layer.uid,onCalciteListItemSelect:i=>this._handleCalciteListItemSelect(i,e,t),onCalciteListItemToggle:t=>this._handleCalciteListItemToggle(t,e)},L("div",{class:this.classes({[M.itemContent]:!0,[M.itemInvisible]:!e.visibleAtCurrentScale||!e.visibleAtCurrentTimeExtent}),slot:"content"},r),this._renderItemStatus(e,t),this._renderItemToggle(e,t),this._renderItemTemporaryIcon(e),this._renderChildList(e,i),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),m>1?this._renderActionsSections(e,c):1===m?this._renderAction({item:e,action:this._getSingleAction(c),textEnabled:!1}):null)}_renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:o,publishing:s,updating:n}=e,l=n&&!t,r=!!o;return L("calcite-icon",{class:this.classes({[M.statusIndicator]:!0,[M.publishing]:s,[M.updating]:l,[M.connectionStatus]:r,[M.connectionStatusConnected]:r&&"connected"===o}),icon:_({connectionStatus:o,publishing:s}),key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryLayerIndicators&&"persistenceEnabled"in e.layer&&(l(e.layer)||!e.layer.persistenceEnabled)?L("calcite-icon",{class:M.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messagesLayerList.temporary}):null}_renderItemToggle(e,t){const{messagesLayerList:i,visibilityAppearance:o}=this,{visible:s}=e,n=t?.visibilityMode;if("inherited"===n)return null;const l=b({visible:s,exclusive:"exclusive"===n,visibilityAppearance:o}),r="checkbox"===o,a=i.layerVisibility;return L("calcite-action",{appearance:"transparent",class:M.visibleToggle,icon:r?l:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(e,t),scale:"s",slot:r?"actions-start":"actions-end",text:a,title:a},r?null:L("calcite-icon",{class:this.classes({[M.visibleIcon]:"exclusive"!==n&&s}),icon:l,scale:"s"}))}_renderPanel(e){return!e?.open||e.disabled||e.flowEnabled?null:L("div",{class:M.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!e?.visible)return null;const{open:t,title:i,disabled:o}=e;return L("calcite-action",{active:t,appearance:"transparent",disabled:o,icon:r(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){const i=this.messagesCommon.options;return L("calcite-action-menu",{appearance:"transparent",class:M.actionMenu,key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:t=>e.actionsOpen=t.target.open},L("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:i,title:i}),t.toArray().map(((t,i)=>this._renderActionSection(e,t,i))))}_renderActionSection(e,t,i){return L("calcite-action-group",{class:M.actionGroup,key:`action-section-${i}`},t.toArray().map((t=>this._renderAction({item:e,action:t,textEnabled:!0}))))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const o="image"in e?e.image:void 0,s={[M.itemActionIcon]:!!t,[M.itemActionImage]:!!o};return t&&(s[t]=!0),o||t?L("span",{"aria-hidden":"true",class:this.classes(M.itemActionIcon,s),key:"icon",styles:a(o)}):null}_renderAction(e){const{item:t,action:i,textEnabled:o}=e;if(!i)return null;const{active:s,disabled:n,title:l,type:a,indicator:c}=i;return L("calcite-action",{active:"toggle"===a&&i.value,appearance:"transparent",disabled:n,icon:r(i),indicator:c,key:`action-${i.uid}`,loading:s,onclick:()=>this._triggerAction(t,i),scale:"s",slot:o?void 0:"actions-end",text:l??"",textEnabled:o,title:l??void 0},this._renderFallbackIcon(i))}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.layer.uid,e)}_removeTooltipReference(e){this._tooltipReferenceMap.delete(e.layer.uid)}_getSingleAction(e){return e.reduce((e=>e)).find((e=>e&&("button"===e.type||"toggle"===e.type)))}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.triggerAction(t,e))}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const o=e.target.selectedItems.map((e=>g(e))).filter(Boolean);i.removeAll(),i.addMany(o)}_handleCalciteListItemToggle(e,t){e.stopPropagation(),t.open=e.target.open}_handleCalciteListItemSelect(e,t,i){g(e.target)===t&&"none"===this.selectionMode&&"inherited"!==i?.visibilityMode&&this._toggleVisibility(t,i)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_toggleVisibility(e,t){if(!e)return;const i=t?.visibilityMode;"exclusive"===i&&e.visible||(e.visible=!e.visible)}};e([s()],F.prototype,"_activeItem",void 0),e([s()],F.prototype,"_tooltipReferenceMap",void 0),e([s()],F.prototype,"_focusRootFlowItem",void 0),e([s()],F.prototype,"_focusPanelFlowItem",void 0),e([s()],F.prototype,"_filterEnabled",null),e([s()],F.prototype,"catalogItems",null),e([s()],F.prototype,"catalogLayer",null),e([s()],F.prototype,"collapsed",void 0),e([s()],F.prototype,"filterPlaceholder",void 0),e([s()],F.prototype,"filterText",void 0),e([s()],F.prototype,"headingLevel",void 0),e([s()],F.prototype,"icon",null),e([s()],F.prototype,"label",null),e([s()],F.prototype,"listItemCreatedFunction",null),e([s(),I("esri/widgets/CatalogLayerList/t9n/CatalogLayerList")],F.prototype,"messages",void 0),e([s(),I("esri/widgets/LayerList/t9n/LayerList")],F.prototype,"messagesLayerList",void 0),e([s(),I("esri/t9n/common")],F.prototype,"messagesCommon",void 0),e([s()],F.prototype,"minFilterItems",void 0),e([s()],F.prototype,"selectedItems",void 0),e([s()],F.prototype,"selectionMode",void 0),e([s()],F.prototype,"view",null),e([k("trigger-action"),s({type:p})],F.prototype,"viewModel",void 0),e([s()],F.prototype,"visibilityAppearance",void 0),e([s({type:w,nonNullable:!0})],F.prototype,"visibleElements",void 0),F=e([n("esri.widgets.CatalogLayerList")],F);const $=F;export{$ as default};