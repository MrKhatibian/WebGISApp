// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/quantityUtils ./parsingAndFormattingUtils ./TooltipField ./TooltipFieldElevation ./TooltipFieldOrientation ../../../support/angularMeasurementUtils".split(" "),function(e,d,f,k,n,p,g){function m(c){return new k.TooltipField({name:"distance",actual:d.zeroMeters,parse:f.makeQuantityParser((a,b)=>d.createLength(Math.max(a,0),b.inputUnitInfos.length.unit)),format:(a,b)=>b.formatters.length(a),formatForInputMode:(a,b)=>b.formatters.scalar(d.toUnit(a,b.inputUnitInfos.length.unit)),
suffix:a=>a.inputUnitInfos.length.abbreviation,title:a=>a.messages.sketch.distance,...c})}function l(c,a){return new k.TooltipField({actual:d.createScalar(0),parse:f.makeQuantityParser(b=>d.createScalar(b)),format:(b,h)=>h.formatters.scalar(b),formatForInputMode:(b,h)=>h.formatters.scalar(b),title:b=>b.messages.sketch[c],...a})}e.makeAreaField=function(c){return new k.TooltipField({name:"area",actual:d.zeroSquareMeters,parse:f.makeQuantityParser((a,b)=>d.createArea(a,b.inputUnitInfos.area.unit)),
format:(a,b)=>b.formatters.area(a),formatForInputMode:(a,b)=>b.formatters.scalar(d.toUnit(a,b.inputUnitInfos.area.unit)),suffix:a=>a.inputUnitInfos.area.abbreviation,title:a=>a.messages.sketch.area,readOnly:!0,...c})};e.makeDirectionField=function(c){return new k.TooltipField({name:"direction",actual:d.zeroDegrees,parse:f.makeQuantityParser((a,b)=>d.createAngle(a,b.inputUnitInfos.direction.unit,"geographic")),format:(a,b)=>{const h=b.sketchOptions.values.effectiveDirectionMode;a=g.getNormalizedDirection(a,
h);switch(h){case g.DirectionMode.Absolute:return b.formatters.direction(a);case g.DirectionMode.Relative:return b.formatters.directionRelative(a);case g.DirectionMode.RelativeBilateral:return b.formatters.directionRelativeBilateral(a)}},formatForInputMode:(a,b)=>{a=g.getNormalizedDirection(a,b.sketchOptions.values.effectiveDirectionMode);return b.formatters.scalar(d.toUnit(a,b.inputUnitInfos.direction.unit))},suffix:a=>a.inputUnitInfos.direction.abbreviation,title:a=>{const b=a.sketchOptions.values.effectiveDirectionMode,
{absolute:h,relative:q}=a.messages.sketch.direction;switch(b){case g.DirectionMode.Absolute:return h;case g.DirectionMode.Relative:case g.DirectionMode.RelativeBilateral:return q}},...c})};e.makeElevationField=function(c){return new n.TooltipFieldElevation(c)};e.makeLatitudeField=function(c){return new k.TooltipField({name:"y",actual:d.zeroDegrees,parse:f.parseLatitude,format:(a,b)=>b.formatters.latitudeDecimalDegrees(a),formatForInputMode:a=>f.formatLatitudeDecimalDegreesForInputMode(a),suffix:a=>
a.inputUnitInfos.longitudeLatitude.abbreviation,title:a=>a.messages.sketch.latitude,...c})};e.makeLengthField=m;e.makeLongitudeField=function(c){return new k.TooltipField({name:"x",actual:d.zeroDegrees,parse:f.parseLongitude,format:(a,b)=>b.formatters.longitudeDecimalDegrees(a),formatForInputMode:a=>f.formatLongitudeDecimalDegreesForInputMode(a),suffix:a=>a.inputUnitInfos.longitudeLatitude.abbreviation,title:a=>a.messages.sketch.longitude,...c})};e.makeOrientationField=function(c){return new p.TooltipFieldOrientation(c)};
e.makeScaleField=function(c){return l("scale",{name:"scale",actual:null,parse:f.makeQuantityParser(a=>d.createScalar(Math.abs(a))),...c})};e.makeTotalLengthField=function(){return m({format:(c,a)=>a.formatters.totalLength(c),title:c=>c.messages.sketch.totalLength,readOnly:!0})};e.makeXField=function(c){return l("x",{name:"x",...c})};e.makeYField=function(c){return l("y",{name:"y",...c})};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});