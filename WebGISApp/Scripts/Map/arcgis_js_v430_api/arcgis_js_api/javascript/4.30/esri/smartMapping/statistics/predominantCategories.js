// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../core/Error","./support/utils","../support/binningUtils","../support/adapters/support/layerUtils"],function(f,g,h,c){async function k(a){if(!(a&&a.layer&&a.view&&a.fields))throw new f("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");a.forBinning&&h.verifyBinningParams(a,"predominant-categories");const {layer:d,...e}=a;var b=a.forBinning?c.binningCapableLayerTypes:c.defaultSupportedLayerTypes;a=c.createLayerAdapter(d,b,a.forBinning);
if(!a)throw new f("predominant-categories:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(b).join(", "));b={layerAdapter:a,...e};await Promise.all([b.view.when(),a.load({signal:b.signal})]);if(a=g.verifyBasicFieldValidity(a,b.fields,"predominant-categories:invalid-parameters"))throw a;return b}return async function(a){const {layerAdapter:d,...e}=await k(a);return d.predominantCategories(e)}});