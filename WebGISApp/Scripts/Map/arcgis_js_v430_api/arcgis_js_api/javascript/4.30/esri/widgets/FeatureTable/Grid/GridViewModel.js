// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Evented ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../support/tableUtils".split(" "),function(c,h,k,b,d,n,p,q,m,l){b=class extends b.EventedAccessor{constructor(a){super(a);this.cellPartNameGenerator=(e,f)=>{let g="";f?.item&&this.rowHighlightIds.includes(f.item.objectId)&&(g+=
" highlight");e=this.findColumn(e?.path);if(!e)return g;e.invalid&&(g+=" invalid");e.textWrap&&(g+=" text-wrap");"editInfo"in e&&e.editInfo&&e.editInfo.rowData?.index===f.index&&(g+=" editing");return g};this.columnReorderingEnabled=this.columnPerformanceModeEnabled=!0;this.columns=new h;this.dataProvider=async(e,f)=>{const {store:g}=this;f&&(g?(e=await g.fetchItems(e),f(e)):f&&f([]))};this.multipleSelectionEnabled=!0;this.multiSortEnabled=!1;this.pageSize=50;this.store=this.rowDetailsRenderer=null}get actionColumn(){return this.columns.find(a=>
a.fieldName===l.uniqueColumnNames.action)}get attachmentsColumn(){return this.columns.find(a=>a.fieldName===l.uniqueColumnNames.attachments)}get columnMenuIsOpen(){return this.columns.some(a=>a.menuIsOpen)}get editing(){return this.editorColumns.some(a=>a.editInfo)}get editorColumns(){return this.columns.toArray().filter(a=>"editable"in a)}get fieldColumns(){return this.columns.toArray().filter(a=>"field"in a)}get filterBySelectionEnabled(){return!!this._get("filterBySelectionEnabled")}set filterBySelectionEnabled(a){this._set("filterBySelectionEnabled",
a)}get highlightIds(){return this._get("highlightIds")||new h}set highlightIds(a){a=Array.isArray(a)?new h(a):a;this.multipleSelectionEnabled||a.splice(1,a.length-1);this._set("highlightIds",k.referenceSetter(a,this._get("highlightIds"),h))}get relationshipColumns(){return this.columns.toArray().filter(a=>"relationshipId"in a)}get rowHighlightIds(){return this._get("rowHighlightIds")||new h}set rowHighlightIds(a){this._set("rowHighlightIds",k.referenceSetter(a,this._get("rowHighlightIds"),h))}get size(){return this.filterBySelectionEnabled&&
!this.highlightIds.length?0:this.store?.count||0}get state(){return this.store?.state??"disabled"}closeColumnMenus(){this.columns.forEach(a=>a.closeMenu())}sortColumn(a,e){a&&(a=this.findColumn(a))&&(a.direction=e)}hideColumn(a){a=this.findColumn(a);!1===a?.hidden&&(a.hidden=!0)}showColumn(a){a=this.findColumn(a);a?.hidden&&(a.hidden=!1)}showAllColumns(){this.columns.forEach(a=>{a.hidden&&(a.hidden=!1)})}findColumn(a){const e=[];this.columns.forEach(f=>{e.push(f);"columns"in f&&f.columns?.forEach(g=>
e.push(g))});return e.find(f=>f.fieldName===a)}getRowItemAt(a){return this.store?.getLocalItemAt(a)}refresh(){this.store&&(this.store.reset(),this.store.load())}toggleColumnVisibility(a){if(a=this.findColumn(a))a.hidden=!a.hidden}};c.__decorate([d.property()],b.prototype,"actionColumn",null);c.__decorate([d.property()],b.prototype,"attachmentsColumn",null);c.__decorate([d.property()],b.prototype,"cellPartNameGenerator",void 0);c.__decorate([d.property()],b.prototype,"columnMenuIsOpen",null);c.__decorate([d.property()],
b.prototype,"columnPerformanceModeEnabled",void 0);c.__decorate([d.property()],b.prototype,"columnReorderingEnabled",void 0);c.__decorate([d.property()],b.prototype,"columns",void 0);c.__decorate([d.property()],b.prototype,"dataProvider",void 0);c.__decorate([d.property()],b.prototype,"editing",null);c.__decorate([d.property()],b.prototype,"editorColumns",null);c.__decorate([d.property()],b.prototype,"fieldColumns",null);c.__decorate([d.property()],b.prototype,"filterBySelectionEnabled",null);c.__decorate([d.property()],
b.prototype,"highlightIds",null);c.__decorate([d.property()],b.prototype,"multipleSelectionEnabled",void 0);c.__decorate([d.property()],b.prototype,"multiSortEnabled",void 0);c.__decorate([d.property()],b.prototype,"pageSize",void 0);c.__decorate([d.property()],b.prototype,"relationshipColumns",null);c.__decorate([d.property()],b.prototype,"rowHighlightIds",null);c.__decorate([d.property()],b.prototype,"rowDetailsRenderer",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"size",null);
c.__decorate([d.property()],b.prototype,"store",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);return b=c.__decorate([m.subclass("esri.widgets.FeatureTable.Grid.GridViewModel")],b)});