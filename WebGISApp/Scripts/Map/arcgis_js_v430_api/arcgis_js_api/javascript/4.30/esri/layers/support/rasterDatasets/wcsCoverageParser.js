// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry/Extent ../../../geometry/Polygon ../../ogc/crsUtils ../RasterInfo ./xmlUtilities".split(" "),function(I,z,U,V,J,b){function W(a){const c=b.getElementValues(a,"requestResponseCRSs").map(d=>d.split(":")[1]);a=b.getElementValues(a,"nativeCRSs").map(d=>d.split(":")[1]);return{requestResponseCRSs:c,nativeCRSs:a}}function Q(a,c){const d=b.getElementValues(a,"1.0.0"===c?"interpolationMethod":"InterpolationMethod"),l="1.0.0"===c?a.getAttribute("default"):b.getElementValue(a,
"InterpolationMethods/Default");return null!=l?[l].concat(d.filter(f=>f.toLowerCase()!==l.toLowerCase())):d}function K(a){return null==a?["nearest"]:a.map(c=>{c=c.toLowerCase();return c.includes("nearest")?"nearest":c.includes("linear")?"bilinear":c.includes("cubic")?"cubic":null}).filter(c=>!!c)}function L(a,c){a=b.getElementValues(a,c);return a?.length&&""!==a[0]&&!isNaN(Number(a[0]))?a.map(d=>Number(d)):null}function X(a){const c=b.getSpaceDelimitedNumericValues(a,"MinimumValue"),d=b.getSpaceDelimitedNumericValues(a,
"MaximumValue");return c.length&&d.length?c.map((l,f)=>({min:l,max:d[f],avg:-1,stddev:-1})):null}function M(a){return null==a?null:a.every(c=>c===a[0])?a[0]:a}function Y(a=null){if(!a)return{resolution:null,units:null};let c=a.toUpperCase();var d=["Y","M","D"];const l=["H","M","S"];a="Years Months Days Hours Minutes Seconds".split(" ");let f;c.includes("PT")?(c=c.slice(2),d=l.findIndex(g=>c.includes(g)),f=a[3+d]):(c=c.slice(1),d=d.findIndex(g=>c.includes(g)),-1<d&&(f=a[d]));return{resolution:parseFloat(c.substring(0,
c.length-1)),units:f}}function E(a){var c=b.getElements(a,"timeposition");if(0<c.length){a=[];for(var d=0;d<c.length;d++)a.push(new Date(b.getElementValue(c[d])));return{begin:a[0],end:a[a.length-1],values:a}}return(d=b.getElement(a,"timePeriod")||b.getElement(a,"TimePeriod"))?(c=new Date(b.getElementValue(d,"beginPosition")||b.getElementValue(d,"BeginPosition")),a=new Date(b.getElementValue(d,"endPosition")||b.getElementValue(d,"EndPosition")),d=b.getElementValue(d,"timeResolution")||b.getElementValue(d,
"TimeResolution"),d=Y(d),{begin:c,end:a,...d}):null}function Z(a){if(!a.temporalDomain)return null;const {begin:c,end:d,values:l,units:f,resolution:g}=a.temporalDomain;return{variables:[{name:"default",description:"",dimensions:[{name:"StdTime",description:"",unit:"ISO8601",values:l?.map(m=>m.getTime()),hasRegularIntervals:!l,interval:g,intervalUnit:f,extent:[c.getTime(),d.getTime()]}]}]}}function aa(a,c){if(!c.temporalDomain)return null;a=a.filter(l=>!l.identifier.toLowerCase().includes("field_1")&&
!l.axis.some(f=>f.identifier.includes("band")));const d=[];a.length&&a.forEach(l=>{const f=l.axis.map(g=>{const m=g.values.map(e=>"ISO8601"===g.uom?(e=e.trim(),e.toLowerCase().includes("z")?(new Date(e)).getTime():(new Date(e+"Z")).getTime()):parseFloat(e.trim())),h=[Math.min.apply(null,m),Math.max.apply(null,m)];return{name:g.identifier.trim(),description:"",field:g.identifier.trim(),unit:g.uom?g.uom.trim():"",hasRegularIntervals:!1,values:m,extent:h}});d.push({name:l.identifier.trim(),description:l.description?.trim()??
"",unit:"",dimensions:f,statistics:l.statistics})});if(c.temporalDomain){const {begin:l,end:f,values:g,units:m,resolution:h}=c.temporalDomain;d.some(e=>e.dimensions.some(k=>"stdtime"===k.name.toLowerCase()))||d.forEach(e=>{e.dimensions.push({name:"StdTime",description:"",unit:"ISO8601",values:g?.map(k=>k.getTime()),hasRegularIntervals:!g,interval:h,intervalUnit:m,extent:[l.getTime(),f.getTime()]})})}return d.length?{variables:d}:null}function ba(a){var c=b.getElement(a,"SpatialDomain"),d=b.getElement(c,
"GridCRS"),l=b.getElementValue(d,"GridBaseCRS");const f=b.getElementValue(d,"GridOrigin")?.split(" ").map(p=>parseFloat(p))??[0,0];d=b.getSpaceDelimitedNumericValues(d,"GridOffsets");c=b.getElements(c,"BoundingBox");let g;for(var m=0;m<c.length;m++){var h=c[m].getAttribute("crs")?.toLowerCase();if(null!=h)if(h.includes("imagecrs")){var e=b.getSpaceDelimitedNumericValues(c[m],"LowerCorner");h=b.getSpaceDelimitedNumericValues(c[m],"UpperCorner");g=h[0]-e[0]+1;e=h[1]-e[1]+1}else if(0<h.indexOf("epsg")){var k=
h.split(":");k=parseInt(k[k.length-1],10);var n=b.getSpaceDelimitedNumericValues(c[m],"LowerCorner");h=b.getSpaceDelimitedNumericValues(c[m],"UpperCorner");n=new z({xmin:n[0],ymin:n[1],xmax:h[0],ymax:h[1],spatialReference:{wkid:k}})}}c=g>e;m=n.xmax-n.xmin>n.ymax-n.ymin;h=!1;V.isAxesOrderReversedForWkid(k)&&(c===m?h=!1:(h=!0,n=new z({xmin:n.ymin,ymin:n.xmin,xmax:n.ymax,ymax:n.xmax,spatialReference:{wkid:k}})));l={columns:g,rows:e,origin:{x:f[0],y:f[1]},offset:{x:d[0],y:d[d.length-1]},gridBaseCRS:l,
envelope:n,useEPSGAxis:h};a=(a=b.getElement(a,"temporalDomain")||b.getElement(a,"TemporalDomain"))?E(a):null;return{spatialDomain:l,temporalDomain:a}}function ca(a){const c=b.getElement(a,"Envelope")||b.getElement(a,"EnvelopeWithTimePeriod");var d=c.getAttribute("srsName"),l=d.slice(d.lastIndexOf("/")+1);d=c.getAttribute("axisLabels").split(" ").map(k=>k.trim()).filter(k=>""!==k.trim());var f=b.getSpaceDelimitedNumericValues(c,"lowerCorner"),g=b.getSpaceDelimitedNumericValues(c,"upperCorner");const m=
!"y lat latitude north nor n b".split(" ").includes(d[0].toLowerCase());l=parseInt(l,10);l=isNaN(l)?null:{wkid:l};l=m?new z({xmin:f[0],ymin:f[1],xmax:g[0],ymax:g[1],spatialReference:l}):new z({xmin:f[1],ymin:f[0],xmax:g[1],ymax:g[0],spatialReference:l});f={mins:f,maxs:g};g=c.getAttribute("uomLabels").trim().split(" ");let h,e;b.isSameTagIgnoreNS(c,"EnvelopeWithTimePeriod")&&(h=new Date(b.getElementValue(a,"beginPosition")||b.getElementValue(a,"BeginPosition")),e=new Date(b.getElementValue(a,"endPosition")||
b.getElementValue(a,"EndPosition")),a=g?.findIndex(k=>"oledatetime"===k?.toLowerCase()),-1<a&&(g[a]="ISO8601"));return{envelope:l,axisLabels:d,uomLabels:g.length?g:null,envelopeAllDims:f,beginPosition:h,endPosition:e,isEastFirst:m}}function da(a,c){const d=[];a=b.getElements(a,"DataRecord");const l=[];let f=[],g;for(let m=0;m<a.length;m++){const h=b.getElements(a[m],"field"),e=[];for(let k=0;k<h.length;k++){const n=h[k].getAttribute("name"),p=b.getElementValue(h[k],"description")||"",q=b.getElement(h[k],
"uom")?.getAttribute("code")||"",r=b.getSpaceDelimitedNumericValues(h[k],"interval"),t=L(h[k],"nilValue")?.[0];if(!c||n.toLowerCase().includes("band"))l.push(n),r?.length&&(g=g||[],g.push({min:r[0],max:r[1],avg:-1,stddev:-1})),f.push(t);e.push({name:n,description:p,uom:q,allowedValues:r,nilValue:t})}d.push(e)}f.some(m=>null!=m)||(f=null);return{rangeType:d,bandNames:l,bandStats:g,bandNoDataValues:f}}function ea(a){let c=1,d="";Math.abs(a-1/24)<1/24*.01?d="Hours":.01>Math.abs(a-1)?d="Days":1>a?(c=
Math.round(24*a),d="Hours"):27.99<a&&31.01>a?d="Months":12>Math.round(a/30)?d="Months":364.99<a&&366.01>a&&(d="Years");return{interval:c,intervalUnit:d}}function fa(a,c,d){if(2>=d.axisLabels.length)return null;const l=[];for(var f=0;f<a.length;f++){var g=a[f];for(var m=0;m<g.length;m++)g[m].name.toLowerCase().includes("band")||l.push(g[m])}const h=[];if(l.length){const e=[];for(a=2;a<d.axisLabels.length;a++){m=(c.uomLabels?.length??0)>a?c.uomLabels?.[a]:"";(f=d.axisLabels[a].toLowerCase().includes("time")||
"iso8601"===m.toLowerCase()||"oledatetime"===m.toLowerCase())?(m=ea(d.offset[a]),g=m.interval,m=m.intervalUnit):g=d.offset[a];const k=[];f?(k.push((new Date).setTime(864E5*(c.envelopeAllDims.mins[a]-25569))),k.push((new Date).setTime(864E5*(c.envelopeAllDims.maxs[a]-25569)))):(k.push(c.envelopeAllDims.mins[a]),k.push(c.envelopeAllDims.maxs[a]));e.push({name:d.axisLabels[a].trim(),description:d.axisLabels[a].trim(),unit:c.uomLabels&&c.uomLabels.length>a?c.uomLabels[a].trim():"",hasRegularIntervals:!0,
extent:k,interval:g,intervalUnit:m})}l.forEach(k=>{var {allowedValues:n}=k;n=2===n?.length?[{min:n[0],max:n[1],avg:-1,stddev:-1}]:null;h.push({name:k.name.trim(),description:k.description?.trim()??"",unit:k.uom.trim(),statistics:n,dimensions:e})});if(h.length)return{variables:h}}return null}function ha(a,c){var d=b.getElement(a,"RectifiedGrid"),l=b.getSpaceDelimitedNumericValues(d,"low"),f=b.getSpaceDelimitedNumericValues(d,"high");a=[];for(var g=0;g<l.length;g++)a.push(f[g]-l[g]+1);l=b.getElementValue(d,
"axisLabels").split(" ");f=b.getSpaceDelimitedNumericValues(d,"origin/pos");g=b.getElements(d,"offsetVector");d=[];for(var m=0;m<g.length;m++){var h=b.getSpaceDelimitedNumericValues(g[m]);const e=h.findIndex(k=>0!==k);d[e]=h[e]}g=!1;c?.length&&l?.length&&(g=[...c].sort((e,k)=>e<k?-1:1).join(","),m=[...l].sort((e,k)=>e<k?-1:1).join(","),g=g===m);"y lat latitude north nor n b".split(" ").includes((g?l:c)[0].toLowerCase())?(c=a[1],m=a[0],h={y:Math.abs(d[0]),x:Math.abs(d[1])}):(c=a[0],m=a[1],h={x:Math.abs(d[0]),
y:Math.abs(d[1])});return{columns:c,rows:m,origin:f,offset:d,resolution:h,gridSamples:a,axisLabels:l,hasSameAxisLabelsAsBoundedBy:g}}function ia(a){var c=b.getElement(a,"EarthObservation");if(!c)return null;var d=b.getElement(c,"phenomenonTime");d=d?E(d):null;var l=b.getElement(c,"phenomenonTime");l=l?E(l):null;var f=b.getElementValue(c,"featureOfInterest/Footprint/multiExtentOf/MultiSurface/surfaceMembers/Polygon/exterior/LinearRing/posList");c=null;if(f&&(f=f.split(" ").map(m=>m.trim()).filter(m=>
null!=m&&""!==m),f.length)){c=[];for(var g=0;g<f.length/2;g+=2)c.push(f[g],f[g+1]);c=new U({rings:[c],spatialReference:{wkid:4326}})}f=b.getElementValue(a,"metaDataProperty/EarthObservationMetaData/identifier");g=b.getElementValue(a,"metaDataProperty/EarthObservationMetaData/acquisitionType");a=b.getElementValue(a,"metaDataProperty/EarthObservationMetaData/status");return{observation:{phenomenonTime:d,resultTime:l,footprint:c,identifier:f,acquisitionType:g,status:a}}}I.parseCoverages=function(a,c){let d=
null;d="string"===typeof a?(new DOMParser).parseFromString(a,"text/xml"):a;if("1.0.0"===c)return b.getElements(d,"CoverageOffering").map(l=>{const f={version:"1.0"};var g=[],m;for(var h=0;h<l.childNodes.length;h++){var e=l.childNodes[h];if(1===e.nodeType)if(b.isSameTagIgnoreNS(e,"description"))f.description=b.getElementValue(e);else if(b.isSameTagIgnoreNS(e,"name"))f.name=b.getElementValue(e);else if(b.isSameTagIgnoreNS(e,"label"))f.label=b.getElementValue(e);else if(b.isSameTagIgnoreNS(e,"supportedFormats"))f.supportedFormats=
b.getElementValues(e,"formats");else if(b.isSameTagIgnoreNS(e,"supportedCRSs"))f.supportedCRSs=W(e);else if(b.isSameTagIgnoreNS(e,"supportedInterpolations"))f.supportedInterpolations=Q(e,"1.0.0");else if(b.isSameTagIgnoreNS(e,"lonLatEnvelope")){var k=b.getElements(e,"pos");e=b.getSpaceDelimitedNumericValues(k[0]);k=b.getSpaceDelimitedNumericValues(k[1]);e=new z({xmin:e[0],ymin:e[1],xmax:k[0],ymax:k[1],spatialReference:{wkid:4326}});f.lonLatEnvelope=e}else if(b.isSameTagIgnoreNS(e,"rangeSet")){g=[];
k=b.getElements(e,"RangeSet");e=[];for(var n=0;n<k.length;n++){var p=b.getElementValue(k[n],"name"),q=b.getElementValue(k[n],"label"),r=[],t=L(k[n],"nullValues/singleValue");const x=b.getElements(k[n],"AxisDescription");for(let v=0;v<x.length;v++){const F=b.getElementValue(x[v],"name"),N=b.getElementValue(x[v],"label"),A=b.getElementValues(x[v],"singleValue");if(0===A.length){var y=b.getElementValue(x[v],"min");const C=b.getElementValue(x[v],"max"),O=Number(b.getElementValue(x[v],"res"))||1;if(null!==
y&&null!==C)for(y=parseInt(y,10);y<=parseInt(C,10);y+=O)A.push(y.toString())}"band"===F.toLowerCase()&&(e=A);r.push({name:F,label:N,values:A})}g.push({name:p,label:q,nullValues:t,axis:r})}k=g;g=e;f.rangeSet=k;e=k[0].nullValues;e?.length&&(m=M(e))}else b.isSameTagIgnoreNS(e,"domainSet")&&(k=b.getElement(e,"spatialDomain"),n=b.getElement(k,"Envelope")||b.getElement(k,"EnvelopeWithTimePeriod"),p=n.getAttribute("srsName").split(":"),p=p[p.length-1],q=b.getElements(n,"pos"),n=b.getSpaceDelimitedNumericValues(q[0]),
q=b.getSpaceDelimitedNumericValues(q[1]),p=parseInt(p,10),p=isNaN(p)?null:{wkid:p},n=new z({xmin:n[0],ymin:n[1],xmax:q[0],ymax:q[1],spatialReference:p}),p=b.getElement(k,"RectifiedGrid"),q=b.getElementValue(p,"low").split(" "),r=b.getElementValue(p,"high").split(" "),p=parseInt(r[0],10)-parseInt(q[0],10)+1,q=parseInt(r[1],10)-parseInt(q[1],10)+1,r=b.getSpaceDelimitedNumericValues(k,"origin/pos"),t=b.getElements(k,"offsetVector"),k=parseFloat(b.getElementValue(t[0]).split(" ")[0]),t=parseFloat(b.getElementValue(t[1]).split(" ")[1]),
k={envelope:n,columns:p,rows:q,offset:{x:k,y:t},origin:{x:r[0],y:r[1]}},e=(e=b.getElement(e,"temporalDomain")||b.getElement(e,"TemporalDomain"))?E(e):null,f.domainSet={spatialDomain:k,temporalDomain:e})}l=K(f.supportedInterpolations);const {name:P,description:w,label:G,lonLatEnvelope:H,supportedFormats:u}=f;({spatialDomain:h}=f.domainSet);e={x:Math.abs(h.offset.x),y:Math.abs(h.offset.y)};k=Z(f.domainSet);m=new J({width:h.columns,height:h.rows,pixelSize:e,extent:h.envelope,spatialReference:h.envelope.spatialReference,
bandCount:g.length||1,noDataValue:m,multidimensionalInfo:k});return{id:P,title:f.name,description:w||G,lonLatEnvelope:H,rasterInfo:m,bandNames:g,supportedFormats:u,supportedInterpolations:l,coverageDescription:f,version:"1.0.0",useEPSGAxis:!1}});a=b.getElements(d,"CoverageDescription");return"1.1.0"===c||"1.1.1"===c||"1.1.2"===c?a.map(l=>{const f=[];var g=[];const m={supportedFormats:f,supportedCRSs:g,version:"1.1"};var h=[],e;for(var k=0;k<l.childNodes.length;k++){var n=l.childNodes[k];if(1===n.nodeType){var p=
b.getNodeNameIgnoreNS(n).toLowerCase();switch(p){case "title":case "abstract":case "identifier":m[p]=b.getElementValue(n);break;case "supportedformat":p=b.getElementValue(n);f.includes(p)||f.push(p);break;case "supportedcrs":p=b.getElementValue(n);g.includes(p)||g.push(p);break;case "range":var q=void 0;h=!!m.domain?.temporalDomain;p=[];n=b.getElements(n,"Field");let H=[];for(let u=0;u<n.length;u++){const x=b.getElementValue(n[u],"Identifier"),v=b.getElementValue(n[u],"Description"),F=b.getElementValue(n[u],
"Definition"),N=b.getElementValue(n[u],"Abstract"),A=b.getElementValue(n[u],"Title"),C=L(n[u],"NullValue");var r=b.getElement(n[u],"AllowedValues");r=r?X(r):null;const O=Q(n[u],"1.1.0"),R=[],D=b.getElements(n[u],"Axis");for(let B=0;B<D.length;B++){const S=D[B].getAttribute("identifier"),ja=b.getElementValue(D[B],"UOM"),ka=b.getElementValue(D[B],"DataType"),T=b.getElementValues(D[B],"Key");if(!h||S.toLowerCase().includes("band"))H=T,q=C;R.push({identifier:S,uom:ja,dataType:ka,values:T,bandNoDataValues:q})}p.push({identifier:x,
description:v,definition:F,abstract:N,title:A,supportedInterpolations:O,axis:R,nullValues:C,statistics:r})}q={rangeSet:p,bandNames:H,bandNoDataValues:q,statistics:p[0].statistics};m.range=q.rangeSet;h=q.bandNames;({bandNoDataValues:p}=q);p?.length&&(e=M(p));q=q.statistics;break;case "domain":m.domain=ba(n)}}}l=K(m.range[0].supportedInterpolations);const {identifier:t,abstract:y,title:P,domain:w,range:G}=m;g={x:Math.abs(w.spatialDomain.offset.x),y:Math.abs(w.spatialDomain.offset.y)};if(k=aa(G,w))e=
G[0].nullValues,1===e?.length&&(e=e[0]);e=new J({width:w.spatialDomain.columns,height:w.spatialDomain.rows,pixelSize:g,extent:w.spatialDomain.envelope,spatialReference:w.spatialDomain.envelope.spatialReference,bandCount:h.length||1,noDataValue:e,statistics:q,multidimensionalInfo:k});return{id:t,title:m.title,description:y||P,lonLatEnvelope:null,bandNames:h,rasterInfo:e,supportedFormats:f,supportedInterpolations:l,coverageDescription:m,version:c,useEPSGAxis:w.spatialDomain.useEPSGAxis}}):a.map(l=>
{const f={version:"2.0"};let g=[];let m;for(let t=0;t<l.childNodes.length;t++){var h=l.childNodes[t];if(1===h.nodeType)if(b.isSameTagIgnoreNS(h,"coverageId"))f.coverageId=b.getElementValue(h);else if(b.isSameTagIgnoreNS(h,"ServiceParameters"))f.serviceParameters={supportedFormats:b.getElementValues(h,"nativeFormat")};else if(b.isSameTagIgnoreNS(h,"boundedBy"))f.boundedBy=ca(h);else if(b.isSameTagIgnoreNS(h,"rangeType")){h=da(h,2<f.boundedBy?.axisLabels.length||2<f.domainSet?.axisLabels.length);f.rangeType=
h.rangeType;g=h.bandNames;var e=h.bandStats;({bandNoDataValues:h}=h);h?.length&&(m=M(h))}else b.isSameTagIgnoreNS(h,"domainSet")?f.domainSet=ha(h,f.boundedBy?.axisLabels):b.isSameTagIgnoreNS(h,"metadata")&&(h=b.getElement(h,"EOMetadata"),f.eoMetadata=h?ia(h):null)}const {coverageId:k,boundedBy:n,domainSet:p,rangeType:q,serviceParameters:r}=f;l=fa(q,n,p);!e&&l&&(e=l?.variables[0].statistics);null!=l&&(m=q[0][0].nilValue);e=new J({width:p.columns,height:p.rows,pixelSize:p.resolution,extent:n.envelope,
spatialReference:n.envelope.spatialReference,bandCount:g.length||1,statistics:e,noDataValue:m,multidimensionalInfo:l});return{id:k,title:k,description:k,lonLatEnvelope:null,bandNames:g,rasterInfo:e,supportedFormats:r.supportedFormats,supportedInterpolations:null,coverageDescription:f,version:"2.0.1",useEPSGAxis:!1}})};I.standardizeInterpolations=K;Object.defineProperty(I,Symbol.toStringTag,{value:"Module"})});