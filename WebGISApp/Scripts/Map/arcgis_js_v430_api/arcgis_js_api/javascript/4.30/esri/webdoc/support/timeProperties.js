// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../TimeExtent","../../core/Error","../../core/accessorSupport/ensureType"],function(c,b,f,d){c.timeExtent={type:b,json:{read:{source:"timeExtent",reader:a=>a?Array.isArray(a)?b.fromArray(a):b.fromJSON(a):null},write:{writer:(a,g,h,e)=>{a&&(a.isEmpty?e?.messages&&e.messages.push(new f("invalid-timeExtent","TimeExtent cannot be empty")):g[h]=a.toArray())},target:{timeExtent:{type:[[d.Integer,d.Null]]}}}}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});