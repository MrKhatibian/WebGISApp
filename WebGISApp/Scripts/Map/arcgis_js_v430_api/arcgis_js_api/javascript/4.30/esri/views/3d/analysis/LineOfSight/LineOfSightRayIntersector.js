// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/screenUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/ray ../../../../geometry/support/vectorStacks ../../../../layers/graphics/dehydratedFeatures ./LineOfSightIntersectionResult ../../layers/i3s/Intersector ../../support/geometryUtils/ray ../../terrain/Intersector ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/intersectorUtilsConversions ../../../../geometry/Point".split(" "),
function(k,r,K,x,y,u,L,M,N,z,g,h,l,A,B,p,v,C,D,E,m,F,G){k.LineOfSightRayIntersector=class extends x{constructor(b){super(b);this._terrainIntersectionOptionsLayerUids=new Set(["terrain"])}initialize(){this.intersector=E.newIntersector(this.view.state.viewingMode);this.intersector.options.hud=!1;this.intersector.options.store=m.StoreResults.MIN}getScreenPointIntersection(b){b=y.screenPointObjectToArray(b,A.sv2d.get());b=C.fromScreen(this.view.state.camera,b,t);return this._getRayIntersection(b)}_getRayIntersection(b,
e){if(null==b||null==this.view.sceneIntersectionHelper)return null;var {intersector:c}=this;c.options.store=m.StoreResults.MIN;this.view.sceneIntersectionHelper.intersectToolIntersectorRay(b,c,e);var a=c.results.min;c=h.create();if(!a.getIntersectionPoint(c)||null!=e?.maxDistance&&g.squaredDistance(c,b.origin)>e.maxDistance**2)return null;e=this.view.renderCoordsHelper.fromRenderCoords(c,new G({spatialReference:this.view.spatialReference}));const f=h.clone(a.normal);if(v.isI3sIntersectorResult(a))return new p.LineOfSightIntersectionResult({type:m.IntersectorType.OBJECT,
id:`${a.target.layerUid}/${a.target.nodeIndex}/${a.target.componentIndex}`,mapPoint:e,renderPoint:c,normal:f,ray:l.copy(b),graphic:null});if(v.isTiles3DIntersectorResult(a))return new p.LineOfSightIntersectionResult({type:m.IntersectorType.OBJECT,id:`${a.target.layerUid}/${a.target.graphicUid}`,mapPoint:e,renderPoint:c,normal:f,ray:l.copy(b),graphic:null});if(D.isTerrainIntersectorResult(a))return new p.LineOfSightIntersectionResult({type:m.IntersectorType.TERRAIN,id:a.target.lij.slice(),mapPoint:e,
renderPoint:c,normal:f,ray:l.copy(b),graphic:null});a=F.toGraphic(a,this.view);if(null!=a){const q=a.layer;var d=a.sourceLayer;if(d)switch(d.type){case "scene":d=B.getObjectId(a,d.objectIdField);break;default:d=a.uid}else d=a.uid;return new p.LineOfSightIntersectionResult({type:m.IntersectorType.OBJECT,id:`${q?.uid}/${d}`,mapPoint:e,renderPoint:c,normal:f,ray:l.copy(b),graphic:a})}return null}updateFromGroundIntersection(b,e,c){var a=H;const f=I,d=J,q=w;g.copy(f,b);this.view.renderCoordsHelper.worldUpAtPosition(f,
d);g.normalize(d,d);var n=this.view.basemapTerrain.visibleElevationBounds;n=(0<=e?1:-1)*((n?Math.abs(n.max-n.min):100)+Math.abs(e));g.scale(q,d,n);g.add(a,f,q);l.fromPoints(a,f,t);a=this._getRayIntersection(t,{include:this._terrainIntersectionOptionsLayerUids,maxDistance:n});if(null!=a)return b=w,g.scale(b,d,e),g.add(c,a.renderPoint,b),h.clone(a.normal);g.copy(c,b);return null}};r.__decorate([u.property()],k.LineOfSightRayIntersector.prototype,"view",void 0);r.__decorate([u.property()],k.LineOfSightRayIntersector.prototype,
"intersector",void 0);k.LineOfSightRayIntersector=r.__decorate([z.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],k.LineOfSightRayIntersector);const H=h.create(),I=h.create(),J=h.create(),w=h.create(),t=l.create();Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});