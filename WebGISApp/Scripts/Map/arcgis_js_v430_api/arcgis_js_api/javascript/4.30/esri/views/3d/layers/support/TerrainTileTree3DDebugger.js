// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/reactiveUtils ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/aaBoundingRect ../../../support/TileTreeDebugger ../../../../geometry/Polygon".split(" "),function(b,e,l,d,m,n,p,q,f,g,h,k){b.TerrainTileTree3DDebugger=class extends h.TileTreeDebugger{constructor(a){super(a);this.enablePolygons=
!1}initialize(){d.watch(()=>this.enabled,a=>this.view.basemapTerrain.renderPatchBorders=a,d.initial)}getTiles(){const a=null!=this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map(c=>({...c,lij:c.lij,geometry:k.fromExtent(g.toExtent(c.extent,a))}))}};b.TerrainTileTree3DDebugger=e.__decorate([f.subclass("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],b.TerrainTileTree3DDebugger);Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});