// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Logger ../../core/Error ../../renderers/support/AuthoringInfo ../../renderers/support/HeatmapColorStop ../../renderers/support/heatmapUtils ./support/utils ../statistics/heatmapStatistics ../support/utils ../support/adapters/support/layerUtils ../symbology/heatmap".split(" "),
function(l,m,R,S,T,E,U,V,W,X,Y,Z,u,v,h,F,n,G,H,e,p){async function I(a){if(!a?.layer||!a.view)throw new u("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required");a={...a,layer:a.layer,view:a.view};a.radius??(a.radius=null==a.blurRadius?18:F.gaussianBlurRadiusPxToKernelDensityRadiusPt(a.blurRadius));a.minRatio??(a.minRatio=.01);a.maxRatio??(a.maxRatio=1);a.fadeRatio??(a.fadeRatio=.2);a.fadeToTransparent??(a.fadeToTransparent=!0);var b=[e.LayerType.CSVLayer,e.LayerType.FeatureLayer,
e.LayerType.GeoJSONLayer,e.LayerType.OGCFeatureLayer,e.LayerType.OrientedImageryLayer,e.LayerType.StreamLayer,e.LayerType.WFSLayer],d=e.createLayerAdapter(a.layer,b);if(!d)throw new u("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+e.getLayerTypeLabels(b).join(", "));a.layer=d;await d.load(null!=a.signal?{signal:a.signal}:null);b=await H.getFieldsList({field:a.field});if(d=n.verifyBasicFieldValidity(d,b,"heatmap-renderer:invalid-parameters"))throw d;return a}async function J(a){let b=
a.scheme,d=null;var c=null;c=await n.getBasemapInfo(a.basemap,a.view);d=null!=c.basemapId?c.basemapId:null;c=null!=c.basemapTheme?c.basemapTheme:null;if(b)return{scheme:p.cloneScheme(b),basemapId:d,basemapTheme:c};if(a=p.getSchemes({basemapTheme:c}))b=a.primaryScheme,d=a.basemapId,c=a.basemapTheme;return{scheme:b,basemapId:d,basemapTheme:c}}async function K(a,b){const {field:d,basemap:c,radius:k,fadeToTransparent:g,heatmapScheme:f,view:L}=b,{scheme:w,basemapId:M,basemapTheme:N}=await J({basemap:c,
scheme:f,view:L}),q=w.colors,x=q.length,y=null==a.min,z=y?[0,.04]:[a.min,a.max];let A;const B=b.fadeRatio??0,r=b.minRatio??0,O=((b.maxRatio??0)-r)/(x-1);b=q[0];const C=g?r:.01,t=[new h({ratio:0,color:new m([b.r,b.g,b.b,0])}),new h({ratio:.01,color:new m([b.r,b.g,b.b,0])}),new h({ratio:C,color:new m([b.r,b.g,b.b,C])})];n.createColors(q,x).forEach((P,Q)=>{t.push(new h({ratio:r+O*Q,color:P}))});g&&(D(t,B),A=new v({fadeRatio:B}));return{renderer:new E({authoringInfo:A,radius:k,colorStops:t,field:d,minDensity:z[0],
maxDensity:z[1]}),statistics:a,defaultValuesUsed:y,scheme:p.cloneScheme(w),basemapId:M,basemapTheme:N}}function D(a,b){const d=10*(1-b)+1,c=a.length-3,k=a[2].color.a;a.forEach((g,f)=>{2>=f||({color:g}=g,f=(f-3)/c,g.a=0===b?1:Math.min(Math.max(f*d+f+k,k),1))})}l.createRenderer=async function(a){a=await I(a);const b=a.statistics??await G({layer:a.layer,field:a.field,radius:a.radius,view:a.view,signal:a.signal});return K(b,a)};l.updateRenderer=function(a){const {fadeRatio:b,renderer:d}=a;a=d.clone();
const c=null==b?a?.authoringInfo?.fadeRatio||0:b;D(a.colorStops,c);a.authoringInfo?a.authoringInfo.fadeRatio=c:a.authoringInfo=new v({fadeRatio:c});return a};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});