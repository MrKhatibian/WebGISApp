// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../core/Error","./support/utils","../support/binningUtils","../support/utils","../support/adapters/support/layerUtils"],function(c,f,t,n,e){async function u(b){if(!b?.layer||!b.field&&!b.valueExpression)throw new c("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(b.valueExpression&&!b.view)throw new c("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");b.forBinning&&t.verifyBinningParams(b,"class-breaks");
const {layer:g,...h}=b;var a=b.forBinning?e.binningCapableLayerTypes:e.featureCapableLayerTypes;b=e.createLayerAdapter(g,a,b.forBinning);if(!b)throw new c("class-breaks:invalid-parameters","'layer' must be one of these types: "+e.getLayerTypeLabels(a).join(", "));a={layerAdapter:b,...h};a.normalizationType=n.getNormalizationType(a);a.numClasses=a.numClasses||5;await b.load(null!=a.signal?{signal:a.signal}:null);var d=a.field;const k=a.minValue,l=a.maxValue,v=null!=k||null!=l,p=a.classificationMethod,
q="percent-of-total"===a.normalizationType,r=!1!==a.analyzeData;d=d?b.getField(d):null;var m=await n.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(m=f.verifyBasicFieldValidity(b,m,"class-breaks:invalid-parameters"))throw m;if(d&&(b=f.verifyNumericField(b,d,"class-breaks:invalid-parameters")))throw b;if(a.valueExpression&&a.normalizationType)throw new c("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");
if(v)if(r){if(q&&null==a.normalizationTotal)throw new c("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified");}else{if(null==k||null==l)throw new c("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(k>=l)throw new c("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(p&&"equal-interval"!==p)throw new c("class-breaks:invalid-parameters",
"'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(q&&null==a.normalizationTotal)throw new c("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false");}else if(!r)throw new c("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(b=f.verifyFilterValidty(a.filter,"class-breaks:invalid-parameters"))throw b;return a}
return async function(b){const {layerAdapter:g,...h}=await u(b);return g.classBreaks(h)}});