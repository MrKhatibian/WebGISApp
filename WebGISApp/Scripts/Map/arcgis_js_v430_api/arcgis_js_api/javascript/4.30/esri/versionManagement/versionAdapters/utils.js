// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../layers/catalog/catalogUtils","./FeatureLayerVersionAdapter","./NetworkVersionAdapter","./SubTypeGroupLayerVersionAdapter"],function(e,f,h,k,l){function g(a){return"networkServiceUrl"in a?new k.NetworkVersionAdapter(a):"feature"!==a.type||f.isLayerFromCatalog(a)?"subtype-group"!==a.type||f.isLayerFromCatalog(a)?null:new l.SubTypeGroupLayerVersionAdapter(a):new h.FeatureLayerVersionAdapter(a)}e.createVersionAdapters=function(a){const b=[];for(const c of a)if("group"===c.type){a=
c;a=a.allTables.concat(a.allLayers);for(const d of a)("feature"===d.type||"subtype-group"===d.type)&&(a=g(d))&&b.push(a)}else(a=g(c))&&b.push(a);return b};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});