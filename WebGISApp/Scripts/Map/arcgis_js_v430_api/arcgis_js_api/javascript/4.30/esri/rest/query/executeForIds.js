// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/query","../support/Query"],function(c,d,e,f){c.executeForIds=async function(a,b,g){a=d.parseUrl(a);({data:b}=await e.executeQueryForIds(a,f.from(b),g));return b.objectIds};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});