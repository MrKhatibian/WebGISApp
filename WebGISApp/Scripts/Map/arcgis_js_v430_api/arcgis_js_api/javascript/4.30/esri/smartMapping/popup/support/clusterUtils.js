// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../intl/substitute ../../../layers/support/fieldUtils ../../../popup/content/AttachmentsContent ../../../popup/content/Content ../../../popup/content/CustomContent ../../../popup/content/ExpressionContent ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/RelationshipContent ../../../popup/content/TextContent ../../../popup/ExpressionInfo ../../../popup/FieldInfo ../../../popup/support/FieldInfoFormat ./utils ../../support/clusterUtils ../../../views/2d/layers/support/clusterUtils".split(" "),
function(t,u,H,M,N,O,P,Q,R,S,v,I,J,A,B,n,C){function w(a){const {fieldName:c,label:d,type:b}=a;a=null!=b&&H.numericTypes.includes(b);a=new J({fieldName:c,label:d,visible:!0,format:a?new A({places:"integer"===b||"small-integer"===b?0:2,digitSeparator:!0}):void 0});"date"===b&&(a.format=new A({dateFormat:"short-date-short-time"}));return a}function p(a,c){a=a?c.getField(a):null;return null!=a?a.alias||a.name:void 0}function D(a,c,d,b){const {attributeInfo:g,statisticType:h}=c,{field:m,normalizationField:f}=
g;c="";let e;"avg"===h?e=f?b.clusters.avgNormFieldSummary:b.clusters.avgFieldSummary:"type"===h&&(e=b.clusters.predominantFieldSummary);e&&(b=g.valueExpression?g.valueExpressionTitle:p(m,a),a=f&&p(f,a),c=u.substitute(e,{fieldLabel:b||"",normFieldLabel:a||"",fieldValue:"{"+d+"}"}));return c}function E(a){return{fieldInfo:w({fieldName:n.clusterCountField,label:a.clusters.numFeatures,type:"integer"}),fieldSummary:new v({text:u.substitute(a.clusters.countSummary,{count:`{${n.clusterCountField}}`})})}}
t.getContentAndInfos=async function(a,c,d){if(!C.isClusterCompatibleRenderer(c))return null;var b=n.getStatisticInfos(a,c);const g=d.clusters.predominantNoneValue;c="unique-value"===c.type?c.uniqueValueInfos??[]:[];const {fieldInfo:h,fieldSummary:m}=E(d),f=[m],e=[h],F=[];for(const q of b){const {statisticType:x,attributeInfo:K}=q;b=n.getClusterField(K,x);var k=void 0,l=a;const {attributeInfo:y,statisticType:G}=q,{field:L,normalizationField:z}=y;var r="";"avg"===G?k=z?d.clusters.avgNormFieldLabel:
d.clusters.avgFieldLabel:"type"===G&&(k=d.clusters.predominantFieldLabel);k&&(r=y.valueExpression?y.valueExpressionTitle:p(L,l),l=z&&p(z,l),r=u.substitute(k,{fieldLabel:r||"",normFieldLabel:l||""}));k=r;"avg"===x?(f.push(new v({text:D(a,q,b,d)})),e.push(w({fieldName:b,label:k,type:"double"}))):"type"===x&&(l=`expression/${b}`,f.push(new v({text:D(a,q,l,d)})),F.push(new I({name:b,title:k,returnType:"string",expression:n.getPredominantTypeExpression(c,b,g)})),e.push(w({fieldName:l})))}return{fieldInfos:e,
expressionInfos:F,content:f}};t.getContentAndInfosForPieChart=async function(a,c,d){if(!C.isClusterCompatibleRenderer(c))return null;const {fieldInfo:b,fieldSummary:g}=E(d);d=[g];const h=[b],m=[],{fieldInfos:f,expressionInfos:e}=await B.getFieldAndExpressionInfos({renderer:c,layer:a,isFeatureReduction:!0});a=await B.getContentFromFieldInfos(a,{fieldInfos:f,expressionInfos:e},!0);d.push(...a);h.push(...f);m.push(...e);return{fieldInfos:h,expressionInfos:m,content:d}};Object.defineProperty(t,Symbol.toStringTag,
{value:"Module"})});