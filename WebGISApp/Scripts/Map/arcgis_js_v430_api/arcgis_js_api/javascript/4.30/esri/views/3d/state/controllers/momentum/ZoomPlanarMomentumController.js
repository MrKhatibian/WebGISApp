// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../camera/constraintUtils/InteractionType ./MomentumController ../../utils/navigationUtils".split(" "),function(b,d,f,p,q,r,k,g,h,l,m,n){b.ZoomPlanarMomentumController=class extends m.MomentumController{set zoomCenter(a){this._set("zoomCenter",
h.clone(a))}constructor(a){super(a);this.interactionType=l.InteractionType.ZOOM;this.constraintOptions.interactionDirection=h.create()}momentumStep(a,e){const {interactionDirection:c}=this.constraintOptions;c&&(g.copy(c,e.eye),a=this.momentum.valueDelta(0,a),n.applyZoomToPoint(e,this.zoomCenter,a,this.view.state.constraints.minimumPoiDistance),g.direction(c,e.eye,c))}};d.__decorate([f.property({constructOnly:!0})],b.ZoomPlanarMomentumController.prototype,"momentum",void 0);d.__decorate([f.property({constructOnly:!0})],
b.ZoomPlanarMomentumController.prototype,"zoomCenter",null);b.ZoomPlanarMomentumController=d.__decorate([k.subclass("esri.views.3d.state.controllers.momentum.ZoomPlanarMomentumController")],b.ZoomPlanarMomentumController);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});