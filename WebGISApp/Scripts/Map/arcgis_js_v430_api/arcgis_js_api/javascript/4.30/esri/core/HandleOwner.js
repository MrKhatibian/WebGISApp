// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ./Accessor ./deprecate ./Handles ./Logger ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass ./support/UpdatingHandles".split(" "),function(b,c,g,d,h,k,e,f,l){d.deprecatedModule(k.getLogger("esri.core.HandleOwner"),"esri/core/HandleOwner",{replacement:"esri/core/Accessor",warnOnce:!0,version:"4.28"});d=a=>{a=class extends a{constructor(){super(...arguments);this._handles=new h;this._updatingHandles=new l.UpdatingHandles}destroy(){this.destroyed||
(this._handles.destroy(),this._updatingHandles.destroy())}get handles(){return this._handles}get updatingHandles(){return this._updatingHandles}};c.__decorate([e.property({readOnly:!0})],a.prototype,"handles",null);c.__decorate([e.property({readOnly:!0})],a.prototype,"updatingHandles",null);return a=c.__decorate([f.subclass("esri.core.HandleOwner")],a)};b.HandleOwner=class extends d(g){};b.HandleOwner=c.__decorate([f.subclass("esri.core.HandleOwner")],b.HandleOwner);Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});