// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){class e{constructor(){this._formatterCache=new Map;this._commonDateTimeFormatterOptions={year:"numeric",month:"2-digit",day:"2-digit",timeZoneName:"shortOffset"}}get name(){return"native"}create(a){return new Date(a)}increase(a){return new Date(a.getTime()+864E5)}formatToIsoDateString(a){const b=a.getFullYear(),c=a.getMonth()+1;a=a.getDate();return`${b}-${c.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}`}isoToTimeZone(a,b){a=this._toDate(a);b=this._getFormatter(b).formatToParts(a);
[b]=b.filter(({type:c})=>"timeZoneName"===c).map(({value:c})=>c);b=this._getTimeZoneOffsetInMins(b);b=a.getMinutes()-(a.getTimezoneOffset()-b);a.setMinutes(b);return a}same(a,b){return a.getTime()===b.getTime()}_toDate(a){return new Date(a)}_getFormatter(a){let b=this._formatterCache.get(a);b||(b=new Intl.DateTimeFormat("en-US",{timeZone:a,...this._commonDateTimeFormatterOptions}),this._formatterCache.set(a,b));return b}_getTimeZoneOffsetInMins(a){const [b,...c]=a.slice(3),[f,g]=c.join("").split(":");
return("+"===b?1:-1)*(60*Number(f)+Number(g||0))}}d.DateEngine=e;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});