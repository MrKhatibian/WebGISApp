// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(g,k){function f(a){return 1<a&&5>a&&1!==~~(a/10)}function b(a,c,l,d){var e=a+" ";switch(l){case "s":return c||d?"p\u00e1r sekund":"p\u00e1r sekundami";case "m":return c?"minuta":d?"minutu":"minutou";case "mm":return c||d?e+(f(a)?"minuty":"minut"):e+"minutami";case "h":return c?"hodina":d?"hodinu":"hodinou";case "hh":return c||d?e+(f(a)?"hodiny":"hodin"):e+"hodinami";case "d":return c||d?"den":"dnem";case "dd":return c||d?e+(f(a)?"dny":"dn\u00ed"):
e+"dny";case "M":return c||d?"m\u011bs\u00edc":"m\u011bs\u00edcem";case "MM":return c||d?e+(f(a)?"m\u011bs\u00edce":"m\u011bs\u00edc\u016f"):e+"m\u011bs\u00edci";case "y":return c||d?"rok":"rokem";case "yy":return c||d?e+(f(a)?"roky":"let"):e+"lety"}}var h={name:"cs",weekdays:"ned\u011ble pond\u011bl\u00ed \u00fater\u00fd st\u0159eda \u010dtvrtek p\u00e1tek sobota".split(" "),weekdaysShort:"ne po \u00fat st \u010dt p\u00e1 so".split(" "),weekdaysMin:"ne po \u00fat st \u010dt p\u00e1 so".split(" "),
months:"leden \u00fanor b\u0159ezen duben kv\u011bten \u010derven \u010dervenec srpen z\u00e1\u0159\u00ed \u0159\u00edjen listopad prosinec".split(" "),monthsShort:"led \u00fano b\u0159e dub kv\u011b \u010dvn \u010dvc srp z\u00e1\u0159 \u0159\u00edj lis pro".split(" "),weekStart:1,yearStart:4,ordinal:function(a){return a+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"p\u0159ed %s",
s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b}};k.d.locale(h,null,!0);g.default=h;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});