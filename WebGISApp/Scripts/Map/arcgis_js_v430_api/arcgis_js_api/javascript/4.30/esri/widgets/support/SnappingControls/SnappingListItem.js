// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/arrayUtils ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../../LayerList/ListItem ../../LayerList/support/layerListUtils ./snappingLayerListUtils".split(" "),function(b,c,k,l,e,r,t,m,n,p,q){var h;b.SnappingListItem=h=class extends n{constructor(a){super(a);this.children=new l;this.parent=null}get enabled(){const {children:a}=
this;if(0===a.length)return null!=this.featureSource?this.featureSource.enabled?"enabled":"disabled":"disabled";let d=!1,f=!1;for(const g of a){if("indeterminate"===g.enabled)return g.enabled;"enabled"===g.enabled?d=!0:"disabled"===g.enabled&&(f=!0);if(f&&d)return"indeterminate"}return f?"disabled":"enabled"}get childLayerIds(){return this.children.toArray().flatMap(a=>[a.layer.id,...a.childLayerIds])}get featureSource(){const {layer:a,getFeatureSnappingSources:d}=this;return d().find(f=>f.layer===
a)}_initializeChildLayers(a){a&&(a=a.filter(q.isValidSnappingLayer),super._initializeChildLayers(a))}_createChildItems(a){return a.map(d=>p.canDisplayLayer(d)?new h({layer:d,parent:this,view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null).filter(k.isSome).reverse()}};c.__decorate([e.property()],b.SnappingListItem.prototype,"enabled",null);c.__decorate([e.property()],b.SnappingListItem.prototype,"children",void 0);c.__decorate([e.property()],b.SnappingListItem.prototype,
"childLayerIds",null);c.__decorate([e.property()],b.SnappingListItem.prototype,"featureSource",null);c.__decorate([e.property({constructOnly:!0})],b.SnappingListItem.prototype,"getFeatureSnappingSources",void 0);c.__decorate([e.property()],b.SnappingListItem.prototype,"parent",void 0);b.SnappingListItem=h=c.__decorate([m.subclass("esri.widgets.support.SnappingControls.SnappingListItem")],b.SnappingListItem);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});