// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../fields/fields ./SketchTooltipInfo ./TooltipInfoWithCoordinates".split(" "),function(a,b,c,l,m,n,e,d,f,g){a.DrawPolylineTooltipInfo=class extends g.TooltipInfoWithCoordinates(f.SketchTooltipInfo){constructor(h){super(h);this.type="draw-polyline";this.direction=d.makeDirectionField();
this.distance=d.makeLengthField({title:k=>k.messages.sketch.distance});this.totalLength=d.makeTotalLengthField();this.xyMode="direction-distance"}get allFields(){return[this.direction,this.distance,this.longitude,this.latitude,this.x,this.y,this.elevation,this.totalLength]}};b.__decorate([c.property()],a.DrawPolylineTooltipInfo.prototype,"helpMessage",void 0);b.__decorate([c.property()],a.DrawPolylineTooltipInfo.prototype,"xyMode",void 0);b.__decorate([c.property()],a.DrawPolylineTooltipInfo.prototype,
"allFields",null);a.DrawPolylineTooltipInfo=b.__decorate([e.subclass("esri.views.interactive.tooltip.infos.DrawPolylineTooltipInfo")],a.DrawPolylineTooltipInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});