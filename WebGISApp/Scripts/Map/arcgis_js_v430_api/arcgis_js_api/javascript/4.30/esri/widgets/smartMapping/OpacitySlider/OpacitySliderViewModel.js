// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Color ../../../core/Logger ../../../core/has ../../../core/RandomLCG ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../SmartMappingSliderViewModel".split(" "),function(h,b,c,n,p,q,k,l){c=class extends l{constructor(a){super(a)}getStopInfo(a){const {min:m,max:d,stops:e}=this;if(!e?.length)return[];const f=this._getColorForStops(a)?.toRgb();return e.map(g=>({color:new b(f&&[...f,g.opacity]),offset:(d-g.value)/(d-m)}))}_getColorForStops(a){return a?
a instanceof b?a:b.fromString(a):null}};return c=h.__decorate([k.subclass("esri.widgets.smartMapping.OpacitySlider.OpacitySliderViewModel")],c)});