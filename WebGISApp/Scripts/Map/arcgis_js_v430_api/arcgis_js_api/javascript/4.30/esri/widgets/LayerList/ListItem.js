// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/arrayUtils ../../core/Collection ../../core/Identifiable ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/get ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionSlider ../../support/actions/ActionToggle ./ListItemPanel ./support/layerListUtils".split(" "),
function(d,c,t,m,u,g,e,v,p,w,n,x,y,z,A,q,k){var l;p=m.ofType({key:"type",defaultKeyValue:"button",base:x,typeMap:{button:y,toggle:A,slider:z}});const r=m.ofType(p);c=l=class extends u.IdentifiableMixin(c){constructor(a){super(a);this.actionsSections=new r;this.checkPublishStatusEnabled=this.actionsOpen=!1;this.children=new (m.ofType(l));this.childrenSortable=!0;this.hidden=!1;this.listItemCreatedFunction=this.layer=null;this.open=this.listModeDisabled=!1;this.view=this.parent=this.panel=null}initialize(){this.addHandles([g.watch(()=>
[this.layer,this.layer?.listMode,this.listModeDisabled],()=>this._watchLayerProperties(this.layer),g.initial),g.watch(()=>this.checkPublishStatusEnabled,a=>this._updateChildrenPublishing(a),g.initial),g.watch(()=>this.view,a=>this._updateChildrenView(a),g.initial),g.watch(()=>this.panel,a=>this._setListItemOnPanel(a),g.initial)]);"function"===typeof this.listItemCreatedFunction&&this.listItemCreatedFunction.call(null,{item:this})}destroy(){this.panel?.destroy();this.children.destroyAll();this.view=
null}get connectionStatus(){const {layerView:a,publishing:b}=this;if(!b&&a&&"connectionStatus"in a)return a.connectionStatus}get error(){return this.layer?.loadError}get incompatible(){const {layerView:a}=this;return a&&"spatialReferenceSupported"in a?!a.spatialReferenceSupported:!1}get layerView(){const {layer:a,view:b}=this;if(!a||!b||"sublayer"===a.type)return null;const f="subtype-sublayer"===a.type?a.parent:a;return b.allLayerViews.find(h=>h.layer===f)??null}castPanel(a){this.panel?.open&&!a.hasOwnProperty("open")&&
(a.open=!0);return a?new q(a):null}get sortable(){return"knowledge-graph-sublayer"===this.layer?.type?!1:this._get("sortable")}set sortable(a){this._set("sortable",a)}get title(){const a=n.get(this,"layer.layer");return(!a||a&&n.get(this,"layer.layer.loaded"))&&n.get(this,"layer.title")||n.get(this,"layer.attributes.title")||""}set title(a){this._override("title",a)}get publishing(){const {layer:a,checkPublishStatusEnabled:b}=this;return b&&a&&"publishingInfo"in a&&"publishing"===a.publishingInfo?.status}get updating(){const {layerView:a,
connectionStatus:b,layer:f,publishing:h}=this;return h||b?!1:a?a.updating:"loading"===f?.loadStatus||!1}get visible(){return this.layer?.visible}set visible(a){const b=this.layer;b&&(b.visible=a)}get visibleAtCurrentScale(){return this.layerView?.visibleAtCurrentScale??!0}get visibleAtCurrentTimeExtent(){return this.layerView?.visibleAtCurrentTimeExtent??!0}get visibilityMode(){return k.findLayerVisibilityMode(this.layer)}clone(){return new l({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,
checkPublishStatusEnabled:this.checkPublishStatusEnabled,children:this.children.clone(),childrenSortable:this.childrenSortable,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,listModeDisabled:this.listModeDisabled,open:this.open,panel:this.panel,parent:this.parent,sortable:this.sortable,title:this.title,view:this.view,visible:this.visible})}_setListItemOnPanel(a){a&&(a.listItem=this)}_updateChildrenPublishing(a){const b=this.children;b&&b.forEach(f=>f.checkPublishStatusEnabled=
a)}_updateChildrenView(a){const b=this.children;b&&b.forEach(f=>f.view=a)}_createChildren(a){const {listModeDisabled:b,children:f}=this;a=a.filter(h=>!f.some(B=>B.layer===h));f.addMany(this._createChildItems(a,b))}_destroyChildren(a){const {children:b}=this,f=b.filter(h=>!a.includes(h.layer));b.destroyMany(f)}_sortChildren(a){this.children.sort((b,f)=>a.indexOf(f.layer)-a.indexOf(b.layer))}_destroyAllChildren(){this.removeHandles("child-list-mode");this.children.destroyAll()}_watchChildLayerListMode(a){this.removeHandles("child-list-mode");
this.listModeDisabled||this.addHandles(a.toArray().map(b=>g.watch(()=>b.listMode,()=>this._compileChildren(a))),"child-list-mode")}_compileChildren(a){const b=this.listModeDisabled?a:a?.filter(f=>"hide"!==k.findLayerListMode(f));b?.length?(this._createChildren(b),this._destroyChildren(b),this._sortChildren(b),this._watchChildLayerListMode(a)):this._destroyAllChildren()}_watchSublayerChanges(a){a&&this.addHandles(a.on("change",()=>this._compileChildren(a)),"layer")}_initializeChildLayers(a){this._compileChildren(a);
this._watchSublayerChanges(a)}_createChildItems(a,b){return a.map(f=>b||k.canDisplayLayer(f)?new l({layer:f,checkPublishStatusEnabled:this.checkPublishStatusEnabled,listItemCreatedFunction:this.listItemCreatedFunction,listModeDisabled:this.listModeDisabled,parent:this,view:this.view}):null).filter(t.isSome).reverse()}_watchLayerProperties(a){this.removeHandles("layer");this.removeHandles("child-list-mode");if(a)if("hide-children"===(!this.listModeDisabled&&k.findLayerListMode(a)))this.children.destroyAll();
else{var b=k.getNormalizedChildLayerProperty(a);b&&this.addHandles(g.watch(()=>a[b],f=>{a.hasOwnProperty(b)&&this._initializeChildLayers(f)},g.initial),"layer")}}};d.__decorate([e.property({type:r})],c.prototype,"actionsSections",void 0);d.__decorate([e.property()],c.prototype,"actionsOpen",void 0);d.__decorate([e.property()],c.prototype,"checkPublishStatusEnabled",void 0);d.__decorate([e.property({type:m})],c.prototype,"children",void 0);d.__decorate([e.property()],c.prototype,"childrenSortable",
void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"connectionStatus",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"error",null);d.__decorate([e.property()],c.prototype,"hidden",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"incompatible",null);d.__decorate([e.property()],c.prototype,"layer",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"layerView",null);d.__decorate([e.property()],c.prototype,"listItemCreatedFunction",void 0);d.__decorate([e.property({nonNullable:!0})],
c.prototype,"listModeDisabled",void 0);d.__decorate([e.property()],c.prototype,"open",void 0);d.__decorate([e.property({type:q})],c.prototype,"panel",void 0);d.__decorate([v.cast("panel")],c.prototype,"castPanel",null);d.__decorate([e.property()],c.prototype,"parent",void 0);d.__decorate([e.property({value:!0})],c.prototype,"sortable",null);d.__decorate([e.property()],c.prototype,"title",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"publishing",null);d.__decorate([e.property({readOnly:!0})],
c.prototype,"updating",null);d.__decorate([e.property()],c.prototype,"view",void 0);d.__decorate([e.property()],c.prototype,"visible",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"visibleAtCurrentTimeExtent",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"visibilityMode",null);return c=l=d.__decorate([w.subclass("esri.widgets.LayerList.ListItem")],c)});