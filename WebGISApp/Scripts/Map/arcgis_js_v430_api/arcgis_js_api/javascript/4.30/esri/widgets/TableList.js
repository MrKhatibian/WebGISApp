// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/Collection ../core/deprecate ../core/Identifiable ../core/Logger ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../support/actions/actionUtils ./Widget ./LayerList/support/layerListUtils ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./TableList/css ./TableList/ListItem ./TableList/TableListViewModel ./TableList/TableListVisibleElements ./TableList/support/tableListUtils".split(" "),
function(t,f,e,w,F,x,g,P,Q,G,A,H,y,I,z,R,B,J,h,n,K,C,D,u){const L=e.ofType(K);e=class extends F.IdentifiableMixin(H){constructor(a,b){super(a,b);this._focusPanelFlowItem=this._focusRootFlowItem=!1;this._selectedDragItemLayerUid=this._lastDragDetail=null;this._rootGroupUid=`table-${this.uid}`;this.dragEnabled=this.collapsed=!1;this.filterText=this.filterPlaceholder="";this.headingLevel=2;this.messagesCommon=this.messages=this.listItemCanReceiveFunction=this.listItemCanGiveFunction=null;this.minDragEnabledItems=
y.minDragEnabledItems;this.minFilterItems=y.minFilterItems;this.selectedItems=new L;this.selectionMode="none";this.viewModel=new C;this.visibleElements=new D;this._canMove=({dragEl:c,fromEl:d,toEl:k},l)=>{l="pull"===l?this.listItemCanGiveFunction:this.listItemCanReceiveFunction;c=u.getItem(c);if(!c?.sortable)return!1;const r=u.getItem(d);var p=y.getLayerType(d);const m=u.getItem(k),v=y.getLayerType(k);p=!!p&&!!v&&p===v;c={selected:c,from:r,to:m};k=k.group;return d.group&&k&&"function"===typeof l?
l.call(null,c):p};this._onCalciteListOrderChange=c=>{const {_lastDragDetail:d}=this,{toEl:k,fromEl:l,dragEl:r,newIndex:p}=c;l&&k&&(d?.newIndex!==p||d?.dragEl!==r||d?.toEl!==k||d?.fromEl!==l)&&(this._lastDragDetail=c,c=Array.from(l.children).filter(m=>m?.matches("calcite-list-item")).map(m=>m.value),u.sortTablesToIds(this.map?.tables,c))}}loadDependencies(){return I.loadCalciteComponents({action:()=>new Promise((a,b)=>t(["../chunks/calcite-action"],a,b)),"action-group":()=>new Promise((a,b)=>t(["../chunks/calcite-action-group"],
a,b)),"action-menu":()=>new Promise((a,b)=>t(["../chunks/calcite-action-menu"],a,b)),button:()=>new Promise((a,b)=>t(["../chunks/calcite-button"],a,b)),flow:()=>new Promise((a,b)=>t(["../chunks/calcite-flow"],a,b)),"flow-item":()=>new Promise((a,b)=>t(["../chunks/calcite-flow-item"],a,b)),icon:()=>new Promise((a,b)=>t(["../chunks/calcite-icon"],a,b)),list:()=>new Promise((a,b)=>t(["../chunks/calcite-list"],a,b)),"list-item":()=>new Promise((a,b)=>t(["../chunks/calcite-list-item"],a,b)),notice:()=>
new Promise((a,b)=>t(["../chunks/calcite-notice"],a,b))})}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get icon(){return"table"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(a){this.viewModel.listItemCreatedFunction=
a}get map(){return this.viewModel.map}set map(a){this.viewModel.map=a}get multipleSelectionEnabled(){w.deprecatedProperty(x.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0});return"multiple"===this.selectionMode}set multipleSelectionEnabled(a){w.deprecatedProperty(x.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0});this.selectionMode=a?"multiple":this.selectionEnabled?"single":"none"}get selectionEnabled(){w.deprecatedProperty(x.getLogger(this),
"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0});return"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(a){w.deprecatedProperty(x.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0});this.selectionMode=(this.dragEnabled=a)?this.multipleSelectionEnabled?"multiple":"single":"none"}get tableItems(){return this.viewModel.tableItems}get tables(){return this.viewModel.tables}set tables(a){this.viewModel.tables=
a}triggerAction(a,b){return this.viewModel.triggerAction(a,b)}render(){var a=this.viewModel?.state;a={[z.globalCss.hidden]:"loading"===a,[z.globalCss.disabled]:"disabled"===a};const b=this.tableItems?.filter(c=>!c.hidden&&(this.visibleElements.errors||!c.error));return h.tsx("div",{class:this.classes(n.css.base,z.globalCss.widget,z.globalCss.panel,a)},b?.length?this._renderItems(b):this._renderNoItems())}_renderNoItemsMessage(){return h.tsx("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return h.tsx("div",
{class:n.css.itemMessage,key:"esri-layer-list__no-items"},h.tsx("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(a){return a?.toArray().filter(({panel:b})=>b?.open&&!b.disabled&&b.flowEnabled).map(({title:b,panel:c})=>{const d=()=>this._handlePanelFlowItemBack(c);return h.tsx("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:b,heading:c.title,headingLevel:this.headingLevel,
key:`flow-panel-${c.uid}`,onCalciteFlowItemBack:k=>{k.preventDefault();d()}},c.render(),h.tsx("calcite-button",{appearance:"transparent",onclick:d,slot:"footer-actions",width:"full"},this.messagesCommon.back))})}_handlePanelFlowItemBack(a){a.open=!1;this._focusRootFlowItem=!0}_focusRootFlowItemNode(a){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame(()=>a?.setFocus()))}_focusPanelFlowItemNode(a){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame(()=>
a?.setFocus()))}_renderItems(a){const {visible:b,collapsed:c,visibleElements:{closeButton:d,collapseButton:k,heading:l,flow:r},_dragEnabled:p,_filterEnabled:m,_rootGroupUid:v,selectionMode:M,messages:E,filterPlaceholder:N,filterText:O}=this;a=[h.tsx("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:d,closed:!b,collapsed:c,collapsible:k,heading:l?E.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>
this.visible=!1},h.tsx("calcite-list",{canPull:q=>this._canMove(q,"pull"),canPut:q=>this._canMove(q,"put"),"data-layer-type":v,dragEnabled:p,filterEnabled:m,filterPlaceholder:N,filterText:m?O:"",group:v,key:"root-list",label:E.widgetLabel,selectionAppearance:"border",selectionMode:M,onCalciteListChange:q=>this._handleCalciteListChange(q),onCalciteListDragEnd:q=>this._handleCalciteListDragEnd(q.detail),onCalciteListFilter:q=>this.filterText=q.target?.filterText??"",onCalciteListOrderChange:q=>this._onCalciteListOrderChange(q.detail)},
a?.toArray().map(q=>this._renderItem(q)),a?.length&&m?h.tsx("div",{class:n.css.filterNoResults,slot:"filter-no-results"},h.tsx("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(a)];return b?r?h.tsx("calcite-flow",{key:"root-flow"},a):a:null}_handleCalciteListDragEnd(a){const {fromEl:b,dragEl:c,oldIndex:d}=a;b.insertBefore(c,b.children[d])}_renderItemMessage(a){return a.error?h.tsx("div",{class:n.css.itemMessage,key:"esri-layer-list__error",
slot:"content-bottom"},h.tsx("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},h.tsx("div",{slot:"message"},this.messages.tableError))):null}_renderItem(a){const {_selectedDragItemLayerUid:b,selectionMode:c,selectedItems:d,messages:k}=this,l=a.title||k.untitledTable,r=this._filterActions(a.actionsSections),p=this._countActions(r);return h.tsx("calcite-list-item",{afterCreate:m=>this._focusSelectedDragEl(m,a),afterUpdate:m=>this._focusSelectedDragEl(m,
a),class:n.css.item,"data-item":a,"data-layer-id":a.layer.id,dragDisabled:!a.sortable,dragSelected:a.layer.uid===b,id:a.layer?.uid,key:`list-item-${a.layer.uid}`,label:l,metadata:{title:l},selected:"none"!==c?d.includes(a):!1,title:l,value:a.layer?.uid,onCalciteListItemDragHandleChange:m=>this._handleCalciteListItemDragHandleChange(m,a)},h.tsx("div",{class:n.css.itemContent,slot:"content"},l),this._renderItemStatus(a),this._renderItemTemporaryIcon(a),this._renderItemMessage(a),this._renderPanel(a.panel),
this._renderPanelAction(a.panel),1<p?this._renderActionsSections(a,r):1===p?this._renderAction({item:a,action:this._getSingleAction(r),textEnabled:!1}):null)}_renderItemTemporaryIcon(a){return this.visibleElements.temporaryTableIndicators&&!a.layer.persistenceEnabled?h.tsx("calcite-icon",{class:n.css.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}_renderItemStatus(a){const {visibleElements:b}=this;if(!b.statusIndicators)return null;
({publishing:a}=a);return h.tsx("calcite-icon",{class:this.classes({[n.css.statusIndicator]:!0,[n.css.publishing]:a}),icon:"stop-square",key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderPanel(a){return!a?.open||a.disabled||a.flowEnabled?null:h.tsx("div",{class:n.css.itemContentBottom,key:`content-panel-${a.uid}`,slot:"content-bottom"},a.render())}_renderPanelAction(a){if(!a?.visible)return null;const {open:b,title:c,disabled:d}=a;return h.tsx("calcite-action",{active:b,appearance:"transparent",
disabled:d,icon:A.getActionIcon(a),key:`action-${a.uid}`,onclick:()=>this._togglePanel(a),scale:"s",slot:"actions-end",text:c??"",title:c??void 0},this._renderFallbackIcon(a))}_renderActionsSections(a,b){const c=this.messagesCommon.options;return h.tsx("calcite-action-menu",{appearance:"transparent",class:n.css.actionMenu,key:"item-action-menu",label:this.messagesCommon.menu,open:a.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:d=>
a.actionsOpen=d.target.open},h.tsx("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:c,title:c}),b.toArray().map((d,k)=>this._renderActionSection(a,d,k)))}_renderActionSection(a,b,c){return h.tsx("calcite-action-group",{class:n.css.actionGroup,key:`action-section-${c}`},b.toArray().map(d=>this._renderAction({item:a,action:d,textEnabled:!0})))}_renderFallbackIcon(a){const {className:b,icon:c}=a;if(c)return null;a="image"in a?a.image:void 0;const d={[n.css.itemActionIcon]:!!b,
[n.css.itemActionImage]:!!a};b&&(d[b]=!0);return a||b?h.tsx("span",{"aria-hidden":"true",class:this.classes(n.css.itemActionIcon,d),key:"icon",styles:A.getActionStyles(a)}):null}_renderAction(a){const {item:b,action:c,textEnabled:d}=a;if(!c)return null;const {active:k,disabled:l,title:r,type:p,indicator:m}=c;return h.tsx("calcite-action",{active:"toggle"===p?c.value:!1,appearance:"transparent",disabled:l,icon:A.getActionIcon(c),indicator:m,key:`action-${c.uid}`,loading:k,onclick:()=>this._triggerAction(b,
c),scale:"s",slot:d?void 0:"actions-end",text:r??"",textEnabled:d,title:r??void 0},this._renderFallbackIcon(c))}_filterActions(a){return a.map(b=>b.filter(c=>c.visible))}_getSingleAction(a){return a.reduce(b=>b).find(b=>b&&("button"===b.type||"toggle"===b.type))}_countActions(a){return a.reduce((b,c)=>b+c.length,0)}_focusSelectedDragEl(a,b){this._selectedDragItemLayerUid===b.layer.uid&&requestAnimationFrame(()=>a?.setFocus())}_handleCalciteListItemDragHandleChange(a,b){a.stopPropagation();this._selectedDragItemLayerUid=
a.target.dragSelected?b.layer.uid:null}_handleCalciteListChange(a){const {selectionMode:b,selectedItems:c}=this;"none"!==b&&(a=a.target.selectedItems.map(d=>u.getItem(d)).filter(Boolean),c.removeAll(),c.addMany(a))}_togglePanel(a){a.open=!a.open;a.open&&(this._focusPanelFlowItem=!0)}_triggerAction(a,b){b&&a&&("toggle"===b.type&&(b.value=!b.value),this.triggerAction(b,a))}};f.__decorate([g.property()],e.prototype,"_focusRootFlowItem",void 0);f.__decorate([g.property()],e.prototype,"_focusPanelFlowItem",
void 0);f.__decorate([g.property()],e.prototype,"_dragEnabled",null);f.__decorate([g.property()],e.prototype,"_filterEnabled",null);f.__decorate([g.property()],e.prototype,"collapsed",void 0);f.__decorate([g.property()],e.prototype,"dragEnabled",void 0);f.__decorate([g.property()],e.prototype,"filterPlaceholder",void 0);f.__decorate([g.property()],e.prototype,"filterText",void 0);f.__decorate([g.property()],e.prototype,"headingLevel",void 0);f.__decorate([g.property()],e.prototype,"icon",null);f.__decorate([g.property()],
e.prototype,"label",null);f.__decorate([g.property()],e.prototype,"listItemCanGiveFunction",void 0);f.__decorate([g.property()],e.prototype,"listItemCanReceiveFunction",void 0);f.__decorate([g.property()],e.prototype,"listItemCreatedFunction",null);f.__decorate([g.property()],e.prototype,"map",null);f.__decorate([g.property(),B.messageBundle("esri/widgets/TableList/t9n/TableList")],e.prototype,"messages",void 0);f.__decorate([g.property(),B.messageBundle("esri/t9n/common")],e.prototype,"messagesCommon",
void 0);f.__decorate([g.property()],e.prototype,"minDragEnabledItems",void 0);f.__decorate([g.property()],e.prototype,"minFilterItems",void 0);f.__decorate([g.property()],e.prototype,"multipleSelectionEnabled",null);f.__decorate([g.property()],e.prototype,"selectionEnabled",null);f.__decorate([g.property()],e.prototype,"selectedItems",void 0);f.__decorate([g.property()],e.prototype,"selectionMode",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"tableItems",null);f.__decorate([g.property()],
e.prototype,"tables",null);f.__decorate([J.vmEvent("trigger-action"),g.property({type:C})],e.prototype,"viewModel",void 0);f.__decorate([g.property({type:D,nonNullable:!0})],e.prototype,"visibleElements",void 0);return e=f.__decorate([G.subclass("esri.widgets.TableList")],e)});