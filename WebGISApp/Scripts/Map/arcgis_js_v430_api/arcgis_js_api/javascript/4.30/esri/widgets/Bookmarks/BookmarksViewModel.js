// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Viewpoint ../../core/Collection ../../core/Error ../../core/Evented ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../webdoc/support/SlideThumbnail ../../webmap/Bookmark ../support/GoTo".split(" "),function(f,w,c,k,x,g,y,E,F,z,A,t,B){const u=c.ofType(t),C={width:128,height:128,format:"png"},l={takeScreenshot:!0,captureViewpoint:!0,captureRotation:!0,
captureScale:!0,captureTimeExtent:!0},v={time:!0};c=class extends B.GoToMixin(x.EventedAccessor){constructor(a){super(a);this.capabilities={...v};this.view=this.activeBookmark=null}destroy(){this.view=null;this._set("activeBookmark",null)}castCapabilities(a){return{...v,...a}}get bookmarks(){return this.view?.map?.bookmarks??new u}set bookmarks(a){this._overrideIfSome("bookmarks",a)}set defaultCreateOptions(a){this._set("defaultCreateOptions",{...l,...a})}get defaultCreateOptions(){return l}set defaultEditOptions(a){this._set("defaultEditOptions",
{...l,...a})}get defaultEditOptions(){return l}get state(){const {view:a}=this;return a&&!a.ready?"loading":"ready"}async createBookmark(a){const {view:b,defaultCreateOptions:e,capabilities:d}=this;if(!b)throw new k("create-bookmark:invalid-view","Cannot create a bookmark without a view.");const {takeScreenshot:h,screenshotSettings:n,captureViewpoint:p,captureRotation:q,captureScale:r,captureTimeExtent:m}={...e,...a};a=h?await this._createThumbnail(n):void 0;const D=d.time&&m&&null!=b.timeExtent?
b.timeExtent.clone():void 0;return new t({...(a&&{thumbnail:a}),...(m&&{timeExtent:D}),...(p&&{viewpoint:this._createViewpoint({view:b,captureScale:r,captureRotation:q})})})}async editBookmark(a,b){if(!a)return a;const {view:e,defaultEditOptions:d}=this;if(!e)throw new k("edit-bookmark:invalid-view","Cannot edit a bookmark without a view.");const {takeScreenshot:h,screenshotSettings:n,captureViewpoint:p,captureRotation:q,captureScale:r,captureTimeExtent:m}={...d,...b};if(b=h?await this._createThumbnail(n):
void 0)a.thumbnail=b;p&&(a.viewpoint=this._createViewpoint({view:e,captureScale:r,captureRotation:q}));m&&null!=e.timeExtent&&(a.timeExtent=e.timeExtent.clone());this.emit("bookmark-edit",{bookmark:a});return a}goTo(a){const {capabilities:b,view:e}=this;if(!e)throw new k("go-to:invalid-view","Cannot go to a bookmark without a view");var d=a?.viewpoint;if(!d)throw new k("go-to:invalid-bookmark","Cannot go to a bookmark that does not contain a 'viewpoint'.",{bookmark:a});this._set("activeBookmark",
a);d=this.callGoTo({target:d});const h=a?.timeExtent;b.time&&h&&(e.timeExtent=h);this.emit("bookmark-select",{bookmark:a});d.catch(()=>{}).then(()=>this._set("activeBookmark",null));return d}async _createThumbnail(a){const {view:b}=this;if(!b)throw new k("bookmark:invalid-view","Cannot create slide thumbnail without a view");a=await b.takeScreenshot({...C,...a});return new A.SlideThumbnail({url:a.dataUrl})}_createViewpoint({view:a,captureRotation:b,captureScale:e}){const d=a.viewpoint?.clone();return new w({targetGeometry:a.extent?.clone(),
rotation:(b?d?.rotation:null)??0,scale:(e?d?.scale:null)??0})}};f.__decorate([g.property()],c.prototype,"capabilities",void 0);f.__decorate([y.cast("capabilities")],c.prototype,"castCapabilities",null);f.__decorate([g.property({readOnly:!0})],c.prototype,"activeBookmark",void 0);f.__decorate([g.property({type:u})],c.prototype,"bookmarks",null);f.__decorate([g.property()],c.prototype,"defaultCreateOptions",null);f.__decorate([g.property()],c.prototype,"defaultEditOptions",null);f.__decorate([g.property({readOnly:!0})],
c.prototype,"state",null);f.__decorate([g.property()],c.prototype,"view",void 0);return c=f.__decorate([z.subclass("esri.widgets.Bookmarks.BookmarksViewModel")],c)});