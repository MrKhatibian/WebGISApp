// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./Grid/Column ./support/tableUtils".split(" "),function(b,c,a,v,w,p,q,r){a=class extends q{constructor(t){super(t);this.autoWidth=!1;this.callback=()=>{};this.fieldName=r.uniqueColumnNames.action;this.flexGrow=0;this.frozenToEnd=!0;this.disabled=null;this.headerRenderFunction=()=>{};this.icon="pencil";this.renderFunction=
({root:d,rowData:e})=>{if(e){var {index:g,item:{feature:h}}=e,{callback:u,disabled:f,icon:k,effectiveLabel:l}=this;e=f instanceof Function?f({feature:h,index:g}):!!f;var n=m=>{m.stopPropagation();u({index:g,feature:h,native:m})};d.firstChild?(d=d.firstChild,d.disabled=e,d.icon=k,d.text=l,d.onclick=n):(e=this.createCalciteAction({className:"esri-column__action",disabled:e,icon:k,text:l,onclick:n}),this.removeCellContent(d),d.appendChild(e))}};this.sortable=this.resizable=!1;this.width="50px"}};b.__decorate([c.property({readOnly:!0})],
a.prototype,"autoWidth",void 0);b.__decorate([c.property()],a.prototype,"callback",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"fieldName",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"flexGrow",void 0);b.__decorate([c.property()],a.prototype,"frozenToEnd",void 0);b.__decorate([c.property()],a.prototype,"disabled",void 0);b.__decorate([c.property()],a.prototype,"headerRenderFunction",void 0);b.__decorate([c.property()],a.prototype,"icon",void 0);b.__decorate([c.property()],
a.prototype,"renderFunction",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"resizable",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"sortable",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"width",void 0);return a=b.__decorate([p.subclass("esri.widgets.FeatureTable.ActionColumn")],a)});