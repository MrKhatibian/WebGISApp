// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/arrayUtils ../../../core/Collection ../../../core/CollectionFlattener ../../../core/handleUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../../../rest/support/DirectionLine ../../../rest/support/DirectionPoint ../../../rest/support/PointBarrier ../../../rest/support/PolygonBarrier ../../../rest/support/PolylineBarrier ../../../rest/support/RouteInfo ../../../rest/support/Stop ../engine/highlightReasons ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),
function(g,h,k,q,n,l,p,e,I,r,t,u,v,w,x,y,z,A,B,C,D,E){function m(a){return a instanceof t||a instanceof u||a instanceof v||a instanceof w||a instanceof x||a instanceof y||a instanceof z}function F(a){return k.isCollection(a)&&a.length&&m(a.at(0))}function G(a){return Array.isArray(a)&&0<a.length&&m(a[0])}const H="route-info direction-line direction-point polygon-barrier polyline-barrier point-barrier stop".split(" "),f={graphic:null,property:null,oldValue:null,newValue:null};e=class extends B.LayerView2DMixin(E){constructor(){super(...arguments);
this._graphics=new k;this._highlightIds=new Map;this._networkFeatureMap=new Map;this._networkGraphicMap=new Map}get _routeItems(){return new q({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new k([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,a=>this._routeItemsChanged(a),
l.initial)}destroy(){this._networkFeatureMap.clear();this._networkGraphicMap.clear();this._graphics.removeAll();this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(a,b){return this._graphicsView.hitTest(a).filter(({popupTemplate:c})=>!!c)}highlight(a){const b=(m(a)?[this._getNetworkFeatureUid(a)]:G(a)?a.map(c=>this._getNetworkFeatureUid(c)):F(a)?a.map(c=>this._getNetworkFeatureUid(c)).toArray():[a.uid]).filter(h.isSome);
if(!b.length)return n.makeHandle();this._addHighlight(b);return n.makeHandle(()=>this._removeHighlight(b))}async hitTest(a,b){if(this.suspended)return null;b=this._graphicsView.hitTest(a).filter(h.isSome).map(d=>this._networkGraphicMap.get(d));if(!b.length)return null;const {layer:c}=this;return b.reverse().map(d=>({type:"route",layer:c,mapPoint:a,networkFeature:d}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(a){this._graphicsView.processUpdate(a)}viewChange(){this._graphicsView.viewChange()}_addHighlight(a){for(const b of a)this._highlightIds.has(b)?
(a=this._highlightIds.get(b),this._highlightIds.set(b,a+1)):this._highlightIds.set(b,1);this._updateHighlight()}_createGraphic(a){a=a.toGraphic();a.layer=this.layer;a.sourceLayer=this.layer;return a}_createGraphicsView(){const a=this.view,b=new C(a.featuresTilingScheme);this._graphicsView=new D({container:b,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:a});this.container.addChild(b);this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container);
this._graphicsView.destroy()}_getDrawOrder(a){a=this._networkGraphicMap.get(a);return H.indexOf(a.type)}_getNetworkFeatureUid(a){return this._networkFeatureMap.has(a)?this._networkFeatureMap.get(a).uid:null}_removeHighlight(a){for(const b of a)this._highlightIds.has(b)&&(a=this._highlightIds.get(b)-1,0===a?this._highlightIds.delete(b):this._highlightIds.set(b,a));this._updateHighlight()}_routeItemsChanged(a){if(a.removed.length){this._graphics.removeMany(a.removed.map(b=>{const c=this._networkFeatureMap.get(b);
this._networkFeatureMap.delete(b);this._networkGraphicMap.delete(c);return c}));for(const b of a.removed)this.removeHandles(b)}if(a.added.length){this._graphics.addMany(a.added.map(b=>{const c=this._createGraphic(b);if(null==c.symbol)return null;this._networkFeatureMap.set(b,c);this._networkGraphicMap.set(c,b);return c}).filter(h.isSome));for(const b of a.added)this.addHandles([l.watch(()=>b.geometry,(c,d)=>{this._updateGraphic(b,"geometry",c,d)}),l.watch(()=>b.symbol,(c,d)=>{this._updateGraphic(b,
"symbol",c,d)})],b);this._graphics.sort((b,c)=>this._getDrawOrder(b)-this._getDrawOrder(c))}}_updateGraphic(a,b,c,d){this._networkFeatureMap.has(a)?(a=this._networkFeatureMap.get(a),a[b]=c,f.graphic=a,f.property=b,f.oldValue=d,f.newValue=c,this._graphicsView.graphicUpdateHandler(f)):(b=this._createGraphic(a),this._networkFeatureMap.set(a,b),this._networkGraphicMap.set(b,a),this._graphics.add(b))}_updateHighlight(){const a=Array.from(this._highlightIds.keys()),b=A.getHighlightBits("highlight");this._graphicsView.setHighlight(a.map(c=>
({objectId:c,highlightFlags:b})))}};g.__decorate([p.property()],e.prototype,"_graphics",void 0);g.__decorate([p.property()],e.prototype,"_routeItems",null);return e=g.__decorate([r.subclass("esri.views.2d.layers.RouteLayerView2D")],e)});