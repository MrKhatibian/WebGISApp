// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../Color","../support/HighlightOptions"],function(b,d,e){const c={selection(a){return new e({color:new d([a.color.r/2,a.color.g/2,a.color.b/2,a.color.a])})},highlight(a){return a},popup(a){return new e({color:new d([a.color.g,a.color.b,a.color.r,a.color.a])})}},g=Object.keys(c);b.getHighlightBits=function(a){if(!a)return 0;let f=1;for(const h in c){if(h===a)break;f<<=1}return f};b.highlightConfigurator=c;b.highlightReasons=g;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});