// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../Dictionary","../executionError","../../chunks/languageUtils","../featureset/support/shared"],function(l,k,g,b,m){function n(e,c){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?k.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:m.layerFieldEsriConstants[e.field.type],codedValues:e.domain.codedValues.map(d=>({name:d.name,code:d.code}))},b.defaultTimeZone(c)):k.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,
dataType:m.layerFieldEsriConstants[e.field.type],min:e.domain.minValue,max:e.domain.maxValue},b.defaultTimeZone(c)):null}l.registerFunctions=function(e){"async"===e.mode&&(e.functions.domain=function(c,d){return e.standardFunctionAsync(c,d,async(f,h,a)=>{b.pcCheck(a,2,3,c,d);if(b.isFeature(a[0]))return f=b.featureFullDomain(a[0],b.toString(a[1]),void 0===a[2]?void 0:a[2]),n(f,c);if(b.isFeatureSet(a[0]))return await a[0]._ensureLoaded(),f=b.getDomain(b.toString(a[1]),a[0],null,void 0===a[2]?void 0:
a[2]),n(f,c);throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);})},e.functions.subtypes=function(c,d){return e.standardFunctionAsync(c,d,async(f,h,a)=>{b.pcCheck(a,1,1,c,d);if(b.isFeature(a[0]))return(f=b.featureSubtypes(a[0]))?k.convertObjectToArcadeDictionary(f,b.defaultTimeZone(c)):null;if(b.isFeatureSet(a[0]))return await a[0]._ensureLoaded(),(f=a[0].subtypeMetaData())?k.convertObjectToArcadeDictionary(f,b.defaultTimeZone(c)):null;throw new g.ArcadeExecutionError(c,
g.ExecutionErrorCodes.InvalidParameter,d);})},e.functions.domainname=function(c,d){return e.standardFunctionAsync(c,d,async(f,h,a)=>{b.pcCheck(a,2,4,c,d);if(b.isFeature(a[0]))return b.featureDomainValueLookup(a[0],b.toString(a[1]),a[2],void 0===a[3]?void 0:a[3]);if(b.isFeatureSet(a[0]))return await a[0]._ensureLoaded(),f=b.getDomain(b.toString(a[1]),a[0],null,void 0===a[3]?void 0:a[3]),b.getDomainValue(f,a[2]);throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);})},e.signatures.push({name:"domainname",
min:2,max:4}),e.functions.domaincode=function(c,d){return e.standardFunctionAsync(c,d,async(f,h,a)=>{b.pcCheck(a,2,4,c,d);if(b.isFeature(a[0]))return b.featureDomainCodeLookup(a[0],b.toString(a[1]),a[2],void 0===a[3]?void 0:a[3]);if(b.isFeatureSet(a[0]))return await a[0]._ensureLoaded(),f=b.getDomain(b.toString(a[1]),a[0],null,void 0===a[3]?void 0:a[3]),b.getDomainCode(f,a[2]);throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);})},e.signatures.push({name:"domaincode",min:2,
max:4}),e.functions.text=function(c,d){return e.standardFunctionAsync(c,d,async(f,h,a)=>{b.pcCheck(a,1,2,c,d);if(b.isFeatureSet(a[0])){h=b.defaultUndefined(a[1],"");if(""===h)return a[0].castToText();if("schema"===h.toLowerCase())return a[0].convertToText("schema",f.abortSignal);if("featureset"===h.toLowerCase())return a[0].convertToText("featureset",f.abortSignal);throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);}return b.toStringExplicit(a[0],a[1])})},e.functions.gdbversion=
function(c,d){return e.standardFunctionAsync(c,d,async(f,h,a)=>{b.pcCheck(a,1,1,c,d);if(b.isFeature(a[0]))return a[0].gdbVersion();if(b.isFeatureSet(a[0]))return(await a[0].load()).gdbVersion;throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);})},e.functions.schema=function(c,d){return e.standardFunctionAsync(c,d,async(f,h,a)=>{b.pcCheck(a,1,1,c,d);if(b.isFeatureSet(a[0]))return await a[0].load(),k.convertObjectToArcadeDictionary(a[0].schema(),b.defaultTimeZone(c));if(b.isFeature(a[0]))return(f=
b.featureSchema(a[0]))?k.convertObjectToArcadeDictionary(f,b.defaultTimeZone(c)):null;throw new g.ArcadeExecutionError(c,g.ExecutionErrorCodes.InvalidParameter,d);})})};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});