// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../PopupTemplate ../../core/Error ../../intl/messages ../../intl/substitute ../../popup/ExpressionInfo ../../popup/FieldInfo ../../popup/support/FieldInfoFormat ./support/utils ../statistics/support/predominanceUtils".split(" "),function(x,p,y,z,n,r,t,v,D,m){function q(a,b){return{fieldInfo:new t({fieldName:"expression/predominant-category"}),expressionInfo:new r({name:"predominant-category",title:b.predominantCategory,expression:m.getArcadeForPredominantCategoryAlias(a)})}}function u(a,
b){a=m.fieldNamesFromFieldInfos(a);return{fieldInfo:new t({fieldName:"expression/predominant-value",format:new v({digitSeparator:!0,places:1})}),expressionInfo:new r({name:"predominant-value",title:b.predominantCategoryValue,expression:m.getArcadeForPredominantCategoryValue(a),returnType:"number"})}}function w(a,b){a=m.fieldNamesFromFieldInfos(a);return{fieldInfo:new t({fieldName:"expression/predominant-strength",format:new v({digitSeparator:!0,places:0})}),expressionInfo:new r({name:"predominant-strength",
title:b.strengthOfPredominance,expression:m.getArcadeForStrengthOfPredominance(a),returnType:"number"})}}function A(a,b){const {renderer:c,fieldInfos:d}=a,g=q(d,b),e=u(d,b),f=w(d,b);a=new t({fieldName:"expression/predominant-categories-list"});var h=new r({name:"predominant-categories-list",title:b.listOfCategories,expression:m.getArcadeForOrderedFields(d)});a=new p({expressionInfos:[g.expressionInfo,e.expressionInfo,f.expressionInfo,h],fieldInfos:[g.fieldInfo,e.fieldInfo,f.fieldInfo,a],title:c.legendOptions?.title??
b.competingFields,content:[{type:"text",text:n.substitute(b.predominantCategoryStrengthContent,{expression1:`{${e.fieldInfo.fieldName}}`,expression2:`<b>{${g.fieldInfo.fieldName}}</b>`,expression3:`<b>{${f.fieldInfo.fieldName}}%</b>`})},{type:"text",text:`{${a.fieldName}}`}]});return{name:"predominant-categories-list",title:b.orderedListOfValues,value:a}}function E(a,b){const {renderer:c,fieldInfos:d}=a;a=q(d,b);const g=u(d,b),e=w(d,b);a=new p({expressionInfos:[g.expressionInfo,a.expressionInfo,e.expressionInfo],
fieldInfos:[g.fieldInfo,a.fieldInfo,e.fieldInfo],title:c.legendOptions?.title??b.competingFields,content:[{type:"text",text:n.substitute(b.predominantCategoryStrengthContent,{expression1:`{${g.fieldInfo.fieldName}}`,expression2:`<b>{${a.fieldInfo.fieldName}}</b>`,expression3:`<b>{${e.fieldInfo.fieldName}}%</b>`})},{type:"media",mediaInfos:{type:"pie-chart",value:{fields:d.map(f=>f.fieldName)}}}]});return{name:"predominant-category-chart",title:b.predominantCategoryWithChart,value:a}}function F(a,
b){a=a.authoringInfo;a="predominance"===a?.type?a.fields:[];if(!a?.length)throw new y("predominance-popup:insufficient-info","unable to find input fields in authoringInfo");return a.map(c=>D.getFieldInfo(b,c))}async function B(a){const {layer:b,renderer:c}=a;await b.load();a=c||b.renderer;if("unique-value"!==a?.type)throw new y("predominance-popup:invalid-parameters","renderer.type must be 'unique-value'");const d=F(a,b);return{renderer:a,fieldInfos:d}}async function C(a){const [b,c]=await Promise.all([B(a),
z.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);a=q(b.fieldInfos,c);a=new p({expressionInfos:[a.expressionInfo],fieldInfos:[a.fieldInfo],content:n.substitute(c.predominantCategoryContent,{expression:`<b>{${a.fieldInfo.fieldName}}</b>`})});a={name:"predominant-category",title:c.predominantCategory,value:a};var {fieldInfos:d}=b;var g=q(d,c);d=u(d,c);g=new p({expressionInfos:[d.expressionInfo,g.expressionInfo],fieldInfos:[d.fieldInfo,g.fieldInfo],content:n.substitute(c.predominantCategoryValueContent,
{expression1:`<b>{${g.fieldInfo.fieldName}}</b>`,expression2:`<b>{${d.fieldInfo.fieldName}}</b>`})});g={name:"predominant-category-value",title:c.predominantCategoryValue,value:g};({fieldInfos:h}=b);d=q(h,c);var e=u(h,c);var f=m.fieldNamesFromFieldInfos(h);var h=new t({fieldName:"expression/predominant-margin",format:new v({digitSeparator:!0,places:0})});f=new r({name:"predominant-margin",title:c.marginOfVictory,expression:m.getArcadeForPredominanceMargin(f),returnType:"number"});d=new p({expressionInfos:[e.expressionInfo,
d.expressionInfo,f],fieldInfos:[e.fieldInfo,d.fieldInfo,h],title:n.substitute(c.mostCommon,{expression:"{expression/predominant-category}"}),content:n.substitute(c.predominantCategoryValueMarginContent,{expression1:`<b>{${d.fieldInfo.fieldName}}</b>`,expression2:`<b>{${e.fieldInfo.fieldName}}</b>`,expression3:`<b>{${h.fieldName}}</b>`})});d={name:"predominant-category-value-margin",title:c.marginOfVictory,value:d};({fieldInfos:k}=b);e=q(k,c);h=u(k,c);f=w(k,c);var l=m.fieldNamesFromFieldInfos(k);var k=
new t({fieldName:"expression/predominant-total",format:new v({digitSeparator:!0,places:0})});l=new r({name:"predominant-total",title:c.sumOfCategories,expression:m.getArcadeForSumOfFields(l),returnType:"number"});e=new p({expressionInfos:[h.expressionInfo,e.expressionInfo,l,f.expressionInfo],fieldInfos:[h.fieldInfo,e.fieldInfo,k,f.fieldInfo],content:n.substitute(c.predominantCategoryTotalStrengthContent,{expression1:`{${h.fieldInfo.fieldName}}`,expression2:`<b>{${e.fieldInfo.fieldName}}</b>`,expression3:`<b>{${f.fieldInfo.fieldName}}%</b>`,
expression4:`{${k.fieldName}}`})});e={name:"predominant-category-total-strength",title:c.predominantCategoryWithTotalAndStrength,value:e};h=A(b,c);({fieldInfos:l}=b);f=q(l,c);k=u(l,c);l=w(l,c);f=new p({expressionInfos:[k.expressionInfo,f.expressionInfo,l.expressionInfo],fieldInfos:[k.fieldInfo,f.fieldInfo,l.fieldInfo],content:n.substitute(c.predominantCategoryStrengthContent,{expression1:`{${k.fieldInfo.fieldName}}`,expression2:`<b>{${f.fieldInfo.fieldName}}</b>`,expression3:`<b>{${l.fieldInfo.fieldName}}%</b>`})});
return[a,g,d,e,h,{name:"predominant-category-strength",title:c.strengthOfPredominance,value:f},E(b,c)]}x.getAllTemplates=C;x.getTemplates=async function(a){const [b,c]=await Promise.all([B(a),z.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),d=A(b,c);a=await C(a);return{primaryTemplate:d,secondaryTemplates:a.filter(g=>g.name!==d.name)}};Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});