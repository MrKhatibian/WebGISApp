// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./AreaMeasurement2D/AreaMeasurement2DViewModel ./support/globalCss ./support/MeasurementWidgetContent ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(c,n,d,b,B,C,p,q,g,h,r,D,e,k){b=class extends q{constructor(a,f){super(a,f);this.messagesCommon=this.messagesUnits=
this.messages=null;this.viewModel=new g}get active(){return this.viewModel.active}get icon(){return"measure-area"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get unit(){return this.viewModel.unit}set unit(a){this.viewModel.unit=a}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(a){this.viewModel.unitOptions=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}get visible(){return this.viewModel.visible}set visible(a){this.viewModel.visible=
a}render(){const {messages:a,messagesCommon:f,messagesUnits:t,unit:u,unitOptions:v,viewModel:l,visible:w}=this,{active:x,measurementLabel:m,state:y,supported:z}=l;return k.tsx("div",{"aria-label":a.widgetLabel,class:this.classes("esri-area-measurement-2d",h.globalCss.widget,h.globalCss.panel),key:this,role:"presentation"},w?k.tsx(r.MeasurementWidgetContent,{active:x,measurementItems:[{key:"area",title:t?.measures.area,value:m?.area},{key:"perimeter",title:a.perimeter,value:m?.perimeter}],messages:{...a,
notApplicable:f.notApplicable},newMeasurementButtonClass:"esri-area-measurement-2d__clear-button",state:y,supported:z,unit:u,unitOptions:v,onNewMeasurementClick:()=>{n.ignoreAbortErrors(l.start())},onUnitChange:A=>{this.unit=A}}):null)}};c.__decorate([d.property({readOnly:!0})],b.prototype,"active",null);c.__decorate([d.property()],b.prototype,"icon",null);c.__decorate([d.property()],b.prototype,"label",null);c.__decorate([d.property(),e.messageBundle("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],
b.prototype,"messages",void 0);c.__decorate([d.property(),e.messageBundle("esri/core/t9n/Units")],b.prototype,"messagesUnits",void 0);c.__decorate([d.property(),e.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);c.__decorate([d.property()],b.prototype,"uiStrings",void 0);c.__decorate([d.property()],b.prototype,"unit",null);c.__decorate([d.property()],b.prototype,"unitOptions",null);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:g})],b.prototype,
"viewModel",void 0);c.__decorate([d.property({type:Boolean})],b.prototype,"visible",null);return b=c.__decorate([p.subclass("esri.widgets.AreaMeasurement2D")],b)});