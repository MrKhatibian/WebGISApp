// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../kernel ../../../core/Collection ../../../core/maybe ../../../core/reactiveUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/Extent ../../../geometry/projection ../../../geometry/SpatialReference ../../../layers/support/kmlUtils ../../../rest/utils ../../../support/GraphicsCollection ../engine/Bitmap ../engine/BitmapContainer ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView ../../support/imageReprojection".split(" "),
function(l,C,D,m,E,r,p,k,M,N,F,y,t,z,n,G,u,H,I,J,v,w,K,L){class A{constructor(){this.allSublayers=new Map;this.allPoints=[];this.allPolylines=[];this.allPolygons=[];this.allMapImages=[]}}k=class extends J.LayerView2DMixin(K){constructor(){super(...arguments);this._bitmapIndex=new Map;this._mapImageContainer=new I.BitmapContainer;this._kmlVisualData=new A;this._fetchController=null;this.allVisiblePoints=new u.GraphicsCollection;this.allVisiblePolylines=new u.GraphicsCollection;this.allVisiblePolygons=
new u.GraphicsCollection;this.allVisibleMapImages=new D}async hitTest(a,b){const d=this.layer;return[this._pointsView?.hitTest(a),this._polylinesView?.hitTest(a),this._polygonsView?.hitTest(a)].flat().filter(Boolean).map(f=>{f.layer=d;f.sourceLayer=d;return{type:"graphic",graphic:f,layer:d,mapPoint:a}})}update(a){this._polygonsView&&this._polygonsView.processUpdate(a);this._polylinesView&&this._polylinesView.processUpdate(a);this._pointsView&&this._pointsView.processUpdate(a)}attach(){this._fetchController=
new AbortController;this.container.addChild(this._mapImageContainer);this._polygonsView=new w({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)});this.container.addChild(this._polygonsView.container);this._polylinesView=new w({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)});this.container.addChild(this._polylinesView.container);
this._pointsView=new w({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme)});this.container.addChild(this._pointsView.container);this.addAttachHandles([this.allVisibleMapImages.on("change",a=>{a.added.forEach(b=>this._addMapImage(b));a.removed.forEach(b=>this._removeMapImage(b))}),E.watch(()=>this.layer.visibleSublayers,a=>{for(const [,b]of this._kmlVisualData.allSublayers)b.visibility=0;for(const b of a)if(a=
this._kmlVisualData.allSublayers.get(b.id))a.visibility=1;this._refreshCollections()})]);this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal));this._imageReprojector=new L.ImageReprojector}detach(){this._fetchController=m.abortMaybe(this._fetchController);this._mapImageContainer.removeAllChildren();this.container.removeAllChildren();this._bitmapIndex.clear();this._polygonsView=m.destroyMaybe(this._polygonsView);this._polylinesView=m.destroyMaybe(this._polylinesView);this._pointsView=
m.destroyMaybe(this._pointsView);this._imageReprojector=m.destroyMaybe(this._imageReprojector)}viewChange(){this._polygonsView.viewChange();this._polylinesView.viewChange();this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(a){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(a.href,y.fromJSON(a.extent),this.view.spatialReference).then(b=>
{const d=new H.Bitmap(b.bitmapData);d.x=b.extent.xmin;d.y=b.extent.ymax;d.resolution=b.extent.width/b.bitmapData.width;d.rotation=a.rotation;this._mapImageContainer.addChild(d);this._bitmapIndex.set(a,d)})}async _getViewDependentUrl(a,b){const {viewFormat:d,viewBoundScale:f,httpQuery:e}=a;if(null!=d){if(null==b)throw Error("Loading this network link requires a view state.");await t.load();if(null!=f&&1!==f){var c=new y(b.extent);c.expand(f)}else c=b.extent;c=t.project(c,z.WGS84);var h=t.project(c,
z.WebMercator);h=Math.max(h.width,h.height);const q={"[bboxWest]":c.xmin.toString(),"[bboxEast]":c.xmax.toString(),"[bboxSouth]":c.ymin.toString(),"[bboxNorth]":c.ymax.toString(),"[lookatLon]":c.center.x.toString(),"[lookatLat]":c.center.y.toString(),"[lookatRange]":h.toString(),"[lookatTilt]":"0","[lookatHeading]":b.rotation.toString(),"[lookatTerrainLon]":c.center.x.toString(),"[lookatTerrainLat]":c.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":c.center.x.toString(),"[cameraLat]":c.center.y.toString(),
"[cameraAlt]":h.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":(b.size[0]*b.pixelRatio).toString(),"[vertPixels]":(b.size[1]*b.pixelRatio).toString(),"[terrainEnabled]":"0","[clientVersion]":C.version,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"};h=g=>{for(const B in g){let x;for(x in q)g[B]=g[B].replace(x,q[x])}};b=r.queryToObject(d);h(b);c={};null!=e&&(c=r.queryToObject(e),h(c));a=G.parseUrl(a.href);a.query={...a.query,...b,...c};return`${a.path}?${r.objectToQuery(b)}`}return a.href}async _fetchService(a){const b=
new A;await this._loadVisualData(this.layer.url,b,a);this._kmlVisualData=b;this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll();this.allVisiblePolylines.removeAll();this.allVisiblePolygons.removeAll();this.allVisibleMapImages.removeAll();this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a));this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>
a));this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a));this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a))}_isSublayerVisible(a){a=this._kmlVisualData.allSublayers.get(a);return a?.visibility?-1===a.parentFolderId?!0:this._isSublayerVisible(a.parentFolderId):!1}_loadVisualData(a,b,d){return this._fetchParsedKML(a,d).then(async f=>{for(const e of f.sublayers){b.allSublayers.set(e.id,
e);f=e.points?await n.getGraphics(e.points):[];const c=e.polylines?await n.getGraphics(e.polylines):[],h=e.polygons?await n.getGraphics(e.polygons):[],q=e.mapImages||[];b.allPoints.push(...f.map(g=>({item:g,sublayerId:e.id})));b.allPolylines.push(...c.map(g=>({item:g,sublayerId:e.id})));b.allPolygons.push(...h.map(g=>({item:g,sublayerId:e.id})));b.allMapImages.push(...q.map(g=>({item:g,sublayerId:e.id})));e.networkLink&&(f=await this._getViewDependentUrl(e.networkLink,this.view.state),await this._loadVisualData(f,
b,d))}})}_fetchParsedKML(a,b){return n.fetchService(a,this.layer.spatialReference,this.layer.refreshInterval,b).then(d=>n.parseKML(d.data))}_removeMapImage(a){const b=this._bitmapIndex.get(a);b&&(this._mapImageContainer.removeChild(b),this._bitmapIndex.delete(a))}};l.__decorate([p.property()],k.prototype,"_pointsView",void 0);l.__decorate([p.property()],k.prototype,"_polylinesView",void 0);l.__decorate([p.property()],k.prototype,"_polygonsView",void 0);l.__decorate([p.property()],k.prototype,"updating",
void 0);return k=l.__decorate([F.subclass("esri.views.2d.layers.KMLLayerView2D")],k)});