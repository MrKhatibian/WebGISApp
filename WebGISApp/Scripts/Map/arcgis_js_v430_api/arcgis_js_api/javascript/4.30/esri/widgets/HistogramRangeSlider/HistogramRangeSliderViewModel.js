// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../Slider/SliderViewModel ../smartMapping/support/utils".split(" "),function(d,f,c,p,q,m,n,k){c=class extends n{constructor(a){super(a);this.bins=this.average=null;this.hasTimeData=!1;this.labelFormatFunction=g=>{if(this.hasTimeData)return k.formatDateLabel(g);const {max:h,min:e,precision:b}=this;return k.formatNumberLabel(parseFloat(g.toFixed(10<
h-e?2:b)))};this.rangeType="equal";this.standardDeviation=null}generateWhereClause(a){const {rangeType:g,state:h,values:e}=this;if("ready"!==h||!e?.length||null==a)return null;const b=e[0],l=1<e.length?e[e.length-1]:null;switch(g){case "equal":return`${a} = ${b}`;case "not-equal":return`${a} <> ${b}`;case "less-than":return`${a} < ${b}`;case "greater-than":return`${a} > ${b}`;case "at-least":return`${a} >= ${b}`;case "at-most":return`${a} <= ${b}`;case "between":return`${a} BETWEEN ${b} AND ${l}`;
case "not-between":return`${a} NOT BETWEEN ${b} AND ${l}`;default:return null}}};d.__decorate([f.property()],c.prototype,"average",void 0);d.__decorate([f.property()],c.prototype,"bins",void 0);d.__decorate([f.property()],c.prototype,"hasTimeData",void 0);d.__decorate([f.property()],c.prototype,"labelFormatFunction",void 0);d.__decorate([f.property()],c.prototype,"rangeType",void 0);d.__decorate([f.property()],c.prototype,"standardDeviation",void 0);return c=d.__decorate([m.subclass("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],
c)});