// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../symbols ../../../layers/support/LabelClass ../../../layers/support/LabelExpressionInfo ../../../renderers/support/UniqueValueInfo ../../support/clusterUtils ../../../symbols/TextSymbol".split(" "),function(d,q,h,k,l,m,n){function g(b){return`\n  $feature["${b}"];\n  var value = $feature["${b}"];\n  var num = Count(Text(Round(value)));\n  var label = When(\n    num < 4, Text(value, "#.#"),\n    num == 4, Text(value / Pow(10, 3), "#.0k"),\n    num <= 6, Text(value / Pow(10, 3), "#k"),\n    num == 7, Text(value / Pow(10, 6), "#.0m"),\n    num > 7, Text(value / Pow(10, 6), "#m"),\n    Text(value, "#,###")\n  );\n  return label;\n  `}
d.createLabelClass=function(b,c=!1){const a=new n({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});return new h({symbol:a,deconflictionStrategy:"none",labelPlacement:c?"always-horizontal":"center-center",labelExpressionInfo:new k({expression:b})})};d.createLabelExpressionForAggregateField=function(b,c,a,p){const e=a.name;return"mode"===a.statisticType?(b="getFieldDomain"in b?b.getFieldDomain(a.onStatisticField):null,a=null,"coded-value"===b?.type?
a=b.codedValues.map(f=>new l({value:f.code,label:f.name})):"unique-value"===c?.type&&null!=c.field&&c.field.toLowerCase()===e.toLowerCase()&&(a=(c.uniqueValueInfos??[]).map(f=>f.clone())),a?m.getPredominantTypeExpression(a,e,p):`Text($feature["${e}"])`):g(e)};d.createNumericLabelExpression=g;d.getAggregateFieldInfo=function(b,c){c=c.featureReduction;if("fields"in c)for(const a of c.fields)if(a.name.toLowerCase()===b.toLowerCase())return a;return null};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});