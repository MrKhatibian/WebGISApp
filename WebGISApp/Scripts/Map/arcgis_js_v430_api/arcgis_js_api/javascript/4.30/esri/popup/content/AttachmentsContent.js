// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./Content".split(" "),function(b,c,a,h,k,e,f){var d;a=d=class extends f{constructor(g){super(g);this.description=null;this.displayType="auto";this.title=null;this.type="attachments"}clone(){return new d({description:this.description,displayType:this.displayType,title:this.title})}};b.__decorate([c.property({type:String,json:{write:!0}})],
a.prototype,"description",void 0);b.__decorate([c.property({type:["auto","preview","list"],json:{write:!0}})],a.prototype,"displayType",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);b.__decorate([c.property({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=b.__decorate([e.subclass("esri.popup.content.AttachmentsContent")],a)});