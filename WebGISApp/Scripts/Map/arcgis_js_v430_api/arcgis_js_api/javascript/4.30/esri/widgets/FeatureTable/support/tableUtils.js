// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function g(a){return null!=a&&"object"===typeof a&&"createQuery"in a&&"getField"in a&&"queryFeatureCount"in a&&"queryFeatures"in a&&"queryObjectIds"in a&&"capabilities"in a&&"fields"in a&&"fieldsIndex"in a&&"id"in a&&"load"in a&&"objectIdField"in a&&"type"in a&&"when"in a}function f(a){return g(a)&&"relationships"in a&&"queryRelatedFeatures"in a&&"queryRelatedFeaturesCount"in a}function h(a){return null!=a&&"object"===typeof a&&"type"in a&&"map-image"===a.type}c.findRelatedLayer=
function(a,e,{relatedTableId:k}){if(e?.map){var n="scene"===a.type&&a.associatedLayer?a.associatedLayer.url:a.url,l=b=>f(b)&&b!==a?"sublayer"===b.type&&b.layer?.url===a.url?b.id===k:n===b.url&&b.layerId===k:!1;if("sublayer"===a.type&&h(a.parent)){var d=m=>f(m)&&m!==a&&m.id===k;const b=a.parent;d=b.sublayers?.find(d)||b.subtables?.find(d);if(f(d))return d}d=[...e.map.allLayers,...e.map.allTables];e=null;for(const b of d)if(h(b)){if(d=b.sublayers?.find(l)||b.subtables?.find(l)){e=d;break}}else if(l(b)){e=
b;break}if(f(e))return e}};c.isIFeatureTableSupportedLayer=g;c.isIFeatureTableSupportedLayerWithAttachments=function(a){return g(a)&&"queryAttachments"in a};c.isIFeatureTableSupportedLayerWithEditing=function(a){return g(a)&&"editingEnabled"in a&&"applyEdits"in a};c.isIFeatureTableSupportedLayerWithRelationships=f;c.isMapImageLayer=h;c.isSelectionFilter=function(a){return a&&"selection"===a.type};c.isTemplateObjectWithType=function(a){return null!=a&&"object"===typeof a&&"type"in a&&null!==a.type&&
("column"===a.type||"field"===a.type||"group"===a.type)};c.uniqueColumnNames={action:"EsriFeatureTableActionColumn",attachments:"EsriFeatureTableAttachmentsColumn",relationship:"EsriFeatureTableRelationshipColumn"};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});