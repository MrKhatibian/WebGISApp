// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../Viewpoint ../core/Error ../core/Identifiable ../core/JSONSupport ../core/lang ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/ensureType ../webdoc/support/SlideThumbnail ../webdoc/support/timeProperties".split(" "),function(c,m,p,b,q,r,n,f,t,u,v,w,x,g,y){var l;b=l=class extends b.IdentifiableMixin(q.JSONSupport){constructor(a){super(a);
this.name=null;this.thumbnail=new g.SlideThumbnail;this.timeExtent=null}castThumbnail(a){return"string"===typeof a?new g.SlideThumbnail({url:a}):x.ensureType(g.SlideThumbnail,a)}set viewpoint(a){const {targetGeometry:d,scale:e}=a;null!=d&&"point"===d.type&&null==e&&n.getLogger(this).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",a);this._set("viewpoint",a)}readViewpoint(a,d){const {extent:e,viewpoint:h}=d;return m.fromJSON(h||{targetGeometry:e})}writeViewpoint(a,
d,e,h){if(a){var {targetGeometry:k}=a;null!=k&&"extent"!==k.type?h?.messages?h.messages.push(new p("property:unsupported","Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.")):n.getLogger(this).error("Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent."):(null!=k&&(d.extent=k.toJSON()),d[e]=a.toJSON())}}clone(){return new l(r.clone({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))}};
c.__decorate([f.property({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],b.prototype,"name",void 0);c.__decorate([f.property({type:g.SlideThumbnail,json:{write:{overridePolicy(a){return{enabled:!(!a||!a.url)}}}}})],b.prototype,"thumbnail",void 0);c.__decorate([t.cast("thumbnail")],b.prototype,"castThumbnail",null);c.__decorate([f.property(y.timeExtent)],b.prototype,"timeExtent",void 0);c.__decorate([f.property({type:m,nonNullable:!0,json:{write:!0}})],b.prototype,"viewpoint",null);c.__decorate([u.reader("viewpoint",
["extent","viewpoint"])],b.prototype,"readViewpoint",null);c.__decorate([w.writer("viewpoint")],b.prototype,"writeViewpoint",null);return b=l=c.__decorate([v.subclass("esri.webmap.Bookmark")],b)});