// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/jsonMap ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./support/FieldInfoFormat".split(" "),function(b,e,a,c,l,m,n,f,g,h){var d;a=d=class extends a.JSONSupport{constructor(k){super(k);this.fieldName=null;this.format=void 0;this.isEditable=!0;this.label=null;this.stringFieldOption="text-box";this.tooltip=this.statisticType=
null;this.visible=!0}clone(){return new d({fieldName:this.fieldName,format:this.format?.clone(),isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"fieldName",void 0);b.__decorate([c.property({type:h,json:{write:!0}})],a.prototype,"format",void 0);b.__decorate([c.property({type:Boolean,json:{write:{alwaysWriteDefaults:!0},
default:!0}})],a.prototype,"isEditable",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([f.enumeration(new e.JSONMap({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],a.prototype,"stringFieldOption",void 0);b.__decorate([c.property({type:"count sum min max avg stddev var".split(" "),json:{write:!0}})],a.prototype,"statisticType",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,
"tooltip",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"visible",void 0);return a=d=b.__decorate([g.subclass("esri.popup.FieldInfo")],a)});