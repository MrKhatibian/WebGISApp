"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6421],{86421:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>I});var a=n(26589),i=n(22976),r=n(97503),s=n(1223),l=n(29023),o=n(54642),u=n(80959),f=n(38896),d=n(77125),c=n(44864),m=n(82408);async function y(e,t,n){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await t.evaluateIdentifier(n,r))}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function p(e,t,n=null){for(const n in e)if(n.toLowerCase()===t.toLowerCase())return e[n];return n}function h(e){if(null===e)return null;const t={type:p(e,"type",""),name:p(e,"name","")};if("range"===t.type)t.range=p(e,"range",[]);else{t.codedValues=[];for(const n of p(e,"codedValues",[]))t.codedValues.push({name:p(n,"name",""),code:p(n,"code",null)})}return t}function w(e){if(null===e)return null;const t={},n=p(e,"wkt");null!==n&&(t.wkt=n);const a=p(e,"wkid");return null!==a&&(t.wkid=a),t}function g(e){if(null===e)return null;const t={hasZ:p(e,"hasz",!1),hasM:p(e,"hasm",!1)},n=p(e,"spatialreference");null!=n&&(t.spatialReference=w(n));const a=p(e,"x",null);if(null!==a)return t.x=a,t.y=p(e,"y",null),t.hasZ&&(t.z=p(e,"z",null)),t.hasM&&(t.m=p(e,"m",null)),t;const i=p(e,"rings",null);if(null!==i)return t.rings=i,t;const r=p(e,"paths",null);if(null!==r)return t.paths=r,t;const s=p(e,"points",null);if(null!==s)return t.points=s,t;for(const n of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const a=p(e,n,null);null!==a&&(t[n]=a)}return t}function F(e){return"utc"===e?.toLowerCase()?"UTC":"unknown"===e?.toLowerCase()?"Unknown":e}function I(e){"async"===e.mode&&(e.functions.timezone=function(t,n){return e.standardFunctionAsync(t,n,(async(e,r,s)=>{if((0,i.p)(s,1,2,t,n),(0,i.P)(s[0]))return"Unknown";if((0,i.Q)(s[0]))return"Unknown";if((0,i.x)(s[0])){if(await s[0].load(),1===s.length||null===s[1])return s[0].datesInUnknownTimezone?F("unknown"):F(s[0].dateFieldsTimeZone);if(!(s[1]instanceof i.D)||!1===s[1].hasField("type"))throw new i.A(t,i.E.InvalidParameter,n);const e=s[1].field("type");if(!1===(0,i.s)(e))throw new i.A(t,i.E.InvalidParameter,n);switch((0,i.C)(e).toLowerCase()){case"preferredtimezone":return F(s[0].preferredTimeZone);case"editfieldsinfo":return F(s[0].editFieldsInfo?.timeZone??null);case"timeinfo":return F(s[0].timeInfo?.timeZone??null);case"field":if(s[1].hasField("fieldname")&&(0,i.s)(s[1].field("fieldname")))return F(s[0].fieldTimeZone((0,i.C)(s[1].field("fieldname"))))}throw new i.A(t,i.E.InvalidParameter,n)}const l=(0,i.a4)(s[0],(0,i._)(t));if(null===l)return null;const o=l.timeZone;return"system"===o?a.A.systemTimeZoneCanonicalName:"utc"===o.toLowerCase()?"UTC":"unknown"===o.toLowerCase()?"Unknown":o}))},e.functions.sqltimestamp=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{(0,i.p)(r,1,3,t,n);const s=r[0];if((0,i.O)(s)){if(1===r.length)return s.toSQLWithKeyword();if(2===r.length)return s.changeTimeZone((0,i.C)(r[1])).toSQLWithKeyword();throw new i.A(t,i.E.InvalidParameter,n)}if((0,i.Q)(s))return s.toSQLWithKeyword();if((0,i.x)(s)){if(3!==r.length)throw new i.A(t,i.E.InvalidParameter,n);await s.load();const e=(0,i.C)(r[1]);if((0,i.Q)(r[2]))return r[2].toSQLWithKeyword();if(!1===(0,i.O)(r[2]))throw new i.A(t,i.E.InvalidParameter,n);const a=s.fieldTimeZone(e);return null===a?r[2].toSQLWithKeyword():r[2].changeTimeZone(a).toSQLWithKeyword()}throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,i.p)(r,2,4,t,n),(0,i.a5)(r[0])){const e=(0,i.C)(r[1]);let a=(0,i.R)(r[2],null);const s=(0,i.W)((0,i.R)(r[3],!0));if(null===a&&(a=["*"]),!1===(0,i.t)(a))throw new i.A(t,i.E.InvalidParameter,n);return r[0].featureSetById(e,s,a)}throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{if((0,i.p)(s,1,2,t,n),(0,i.w)(s[0])){let e=(0,i.R)(s[1],"datasource");return null===e&&(e="datasource"),e=(0,i.C)(e).toLowerCase(),(0,r.c)(s[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference??null)}throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,a,s)=>{if((0,i.p)(s,2,5,t,n),null===s[0])throw new i.A(t,i.E.PortalRequired,n);if(s[0]instanceof i.a1){const e=(0,i.C)(s[1]),a=(0,i.C)(s[2]);let o=(0,i.R)(s[3],null);const u=(0,i.W)((0,i.R)(s[4],!0));if(null===o&&(o=["*"]),!1===(0,i.t)(o))throw new i.A(t,i.E.InvalidParameter,n);let f;return f=t.services?.portal?t.services.portal:m.A.getDefault(),f=(0,l.g)(s[0],f),(0,r.a)(e,a,t.spatialReference??null,o,u,f,t.lrucache,t.interceptor)}if(!1===(0,i.s)(s[0]))throw new i.A(t,i.E.PortalRequired,n);const o=(0,i.C)(s[0]),u=(0,i.C)(s[1]);let f=(0,i.R)(s[2],null);const d=(0,i.W)((0,i.R)(s[3],!0));if(null===f&&(f=["*"]),!1===(0,i.t)(f))throw new i.A(t,i.E.InvalidParameter,n);return(0,r.a)(o,u,t.spatialReference??null,f,d,t.services?.portal??m.A.getDefault(),t.lrucache,t.interceptor)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,i.p)(r,2,4,t,n),(0,i.a5)(r[0])){const e=(0,i.C)(r[1]);let a=(0,i.R)(r[2],null);const s=(0,i.W)((0,i.R)(r[3],!0));if(null===a&&(a=["*"]),!1===(0,i.t)(a))throw new i.A(t,i.E.InvalidParameter,n);return r[0].featureSetByName(e,s,a)}throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,a,s)=>{(0,i.p)(s,1,1,t,n);const l={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if((0,i.s)(s[0])){const e=JSON.parse(s[0]);void 0!==e.layerDefinition?(l.layerDefinition=e.layerDefinition,l.featureSet=e.featureSet,e.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=e.layerDefinition.spatialReference)):(l.featureSet.features=e.features,l.featureSet.geometryType=e.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=e.objectIdFieldName??"",l.layerDefinition.typeIdField=e.typeIdFieldName,l.layerDefinition.globalIdField=e.globalIdFieldName,l.layerDefinition.fields=e.fields,e.spatialReference&&(l.layerDefinition.spatialReference=e.spatialReference))}else{if(!(s[0]instanceof i.D))throw new i.A(t,i.E.InvalidParameter,n);{const e=JSON.parse(s[0].castToText(!0)),a=p(e,"layerdefinition");if(null!==a){l.layerDefinition.geometryType=p(a,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.globalIdField=p(a,"globalidfield",""),l.layerDefinition.objectIdField=p(a,"objectidfield",""),l.layerDefinition.typeIdField=p(a,"typeidfield",""),l.layerDefinition.hasZ=!0===p(a,"hasz",!1),l.layerDefinition.hasM=!0===p(a,"hasm",!1);const t=p(a,"spatialreference");t&&(l.layerDefinition.spatialReference=w(t));const n=[];for(const e of p(a,"fields",[])){const t={name:p(e,"name",""),alias:p(e,"alias",""),type:p(e,"type",""),nullable:p(e,"nullable",!0),editable:p(e,"editable",!0),length:p(e,"length",null),domain:h(p(e,"domain"))};n.push(t)}l.layerDefinition.fields=n;const i=p(e,"featureset");if(i){const e={};for(const t of n)e[t.name.toLowerCase()]=t.name;for(const t of p(i,"features",[])){const n={},a=p(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];l.featureSet.features.push({attributes:n,geometry:g(p(t,"geometry"))})}}}else{l.layerDefinition.hasZ=!0===p(e,"hasz",!1),l.layerDefinition.hasM=!0===p(e,"hasm",!1),l.layerDefinition.geometryType=p(e,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=p(e,"objectidfieldname",""),l.layerDefinition.typeIdField=p(e,"typeidfieldname","");const a=p(e,"spatialreference");a&&(l.layerDefinition.spatialReference=w(a));const r=[],s=p(e,"fields",null);if(!(0,i.t)(s))throw new i.A(t,i.E.InvalidParameter,n);for(const e of s){const t={name:p(e,"name",""),alias:p(e,"alias",""),type:p(e,"type",""),nullable:p(e,"nullable",!0),editable:p(e,"editable",!0),length:p(e,"length",null),domain:h(p(e,"domain"))};r.push(t)}l.layerDefinition.fields=r;const o={};for(const e of r)o[e.name.toLowerCase()]=e.name;let u=p(e,"features",null);if((0,i.t)(u))for(const e of u){const t={},n=p(e,"attributes",{});for(const e in n)t[o[e.toLowerCase()]]=n[e];l.featureSet.features.push({attributes:t,geometry:g(p(e,"geometry",null))})}else u=null,l.featureSet.features=u}}}if(0==(!!(o=l).layerDefinition&&!!o.featureSet&&!1!==function(e,t){for(const t of["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(o.layerDefinition.geometryType)&&!1!==(0,i.t)(o.layerDefinition.fields)&&!1!==(0,i.t)(o.featureSet.features)))throw new i.A(t,i.E.InvalidParameter,n);var o;return l.layerDefinition.geometryType||(l.layerDefinition.geometryType="esriGeometryNull"),r.F.create(l,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(async(a,l,o)=>{if((0,i.p)(o,2,2,t,n),(0,i.t)(o[0])||(0,i.u)(o[0])){const e=[];let a,r=o[0];if(r instanceof s.I&&(r=r.toArray()),!(0,i.o)(o[1]))throw new i.A(t,i.E.InvalidParameter,n);a=o[1].createFunction(t);for(const t of r){const n=a(t);(0,u.$X)(n)?!0===await n&&e.push(t):!0===n&&e.push(t)}return e}if((0,i.x)(o[0])){const n=await o[0].load(),a=f.WhereClause.create(o[1],n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC),i=a.getVariables();if(i.length>0){const n=[];for(let a=0;a<i.length;a++){const r={name:i[a]};n.push(await e.evaluateIdentifier(t,r))}const s={};for(let e=0;e<i.length;e++)s[i[e]]=n[e];return a.parameters=s,new r.b({parentfeatureset:o[0],whereclause:a})}return new r.b({parentfeatureset:o[0],whereclause:a})}throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{if((0,i.p)(s,2,2,t,n),(0,i.x)(s[0])){const e=new r.O(s[1]);return new r.d({parentfeatureset:s[0],orderbyclause:e})}throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{if((0,i.p)(s,2,2,t,n),(0,i.x)(s[0]))return new r.T({parentfeatureset:s[0],topnum:s[1]});if((0,i.t)(s[0]))return(0,i.z)(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,(0,i.z)(s[1]));if((0,i.u)(s[0]))return(0,i.z)(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,(0,i.z)(s[1]));throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{if((0,i.p)(r,1,1,t,n),(0,i.x)(r[0])){const n=await r[0].first(e.abortSignal);if(null!==n){const e=i.I.createFromGraphicLikeObject(n.geometry,n.attributes,r[0],t.timeZone);return e._underlyingGraphic=n,e}return n}return(0,i.t)(r[0])?0===r[0].length?null:r[0][0]:(0,i.u)(r[0])?0===r[0].length()?null:r[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{(0,i.p)(s,1,2,t,n);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(s.length>1)if(s[1]instanceof i.D){if(s[1].hasField("minsize")&&(l.minsize=(0,i.z)(s[1].field("minsize"))),s[1].hasField("metadata")&&(l.returnMetadata=(0,i.W)(s[1].field("metadata"))),s[1].hasField("maxsize")&&(l.maxsize=(0,i.z)(s[1].field("maxsize"))),s[1].hasField("types")){const e=(0,i.a6)(s[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==s[1])throw new i.A(t,i.E.InvalidParameter,n);if((0,i.w)(s[0])){let e=s[0]._layer;return e instanceof d.default&&(e=(0,r.e)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,i.x)(e)?[]:(await e.load(),e.queryAttachments(s[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===s[0])return[];throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{(0,i.p)(s,2,4,t,n);const l=s[0],u=(0,i.C)(s[1]);let c=(0,i.R)(s[2],null);const m=(0,i.W)((0,i.R)(s[3],!0));if(null===c&&(c=["*"]),!1===(0,i.t)(c))throw new i.A(t,i.E.InvalidParameter,n);if(null===s[0])return null;if(!(0,i.w)(s[0]))throw new i.A(t,i.E.InvalidParameter,n);let y=l._layer;if(y instanceof d.default&&(y=(0,r.e)(y,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===y)return null;if(!1===(0,i.x)(y))return null;y=await y.load();const p=y.relationshipMetaData().filter((e=>e.name===u));if(0===p.length)return null;if(void 0!==p[0].relationshipTableId&&null!==p[0].relationshipTableId&&p[0].relationshipTableId>-1)return(0,r.f)(y,p[0],l.field(y.objectIdField),y.spatialReference,c,m,t.lrucache,t.interceptor);let h=y.serviceUrl();if(!h)return null;h="/"===h.charAt(h.length-1)?h+p[0].relatedTableId.toString():h+"/"+p[0].relatedTableId.toString();const w=await(0,r.g)(h,y.spatialReference,c,m,t.lrucache,t.interceptor);await w.load();let g=w.relationshipMetaData();if(g=g.filter((e=>e.id===p[0].id)),!1===l.hasField(p[0].keyField)||null===l.field(p[0].keyField)){const e=await y.getFeatureByObjectId(l.field(y.objectIdField),[p[0].keyField]);if(e){const t=f.WhereClause.create(g[0].keyField+"= @id",w.getFieldsIndex(),w.dateFieldsTimeZoneDefaultUTC);return t.parameters={id:e.attributes[p[0].keyField]},w.filter(t)}return new o.E({parentfeatureset:w})}const F=f.WhereClause.create(g[0].keyField+"= @id",w.getFieldsIndex(),w.dateFieldsTimeZoneDefaultUTC);return F.parameters={id:l.field(p[0].keyField)},w.filter(F)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{(0,i.p)(s,2,3,t,n);const l=s[0],o=(0,i.C)((0,i.R)(s[1],"")).toLowerCase(),u=(0,i.s)(s[2])?(0,i.C)(s[2]):null;if(null===s[0])return null;if(!(0,i.w)(s[0]))throw new i.A(t,i.E.InvalidParameter,n);let m=l._layer;if(m instanceof d.default&&(m=(0,r.e)(m,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===m)return null;if(!1===(0,i.x)(m))return null;await m.load();const y=m.serviceUrl(),p=await(0,r.h)(y,t.spatialReference);let h=null,w=null,g=!1;if(null!==u&&""!==u&&void 0!==u){for(const e of p.terminals)e.terminalName===u&&(w=e.terminalId);null===w&&(g=!0)}const F=p.associations.getFieldsIndex(),I=F.get("TOGLOBALID").name,A=F.get("FROMGLOBALID").name,E=F.get("TOTERMINALID").name,D=F.get("FROMTERMINALID").name,T=F.get("FROMNETWORKSOURCEID").name,C=F.get("TONETWORKSOURCEID").name,b=F.get("ASSOCIATIONTYPE").name,x=F.get("ISCONTENTVISIBLE").name,N=F.get("OBJECTID").name;for(const e of m.fields)if("global-id"===e.type){h=l.field(e.name);break}let S=null,L=new r.S(new c.A({name:"percentalong",alias:"percentalong",type:"double"}),f.WhereClause.create("0",p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC)),v=new r.S(new c.A({name:"side",alias:"side",type:"string"}),f.WhereClause.create("''",p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC));const $="globalid",R="globalId",P={};for(const e in p.lkp)P[e]=p.lkp[e].sourceId;const W=new r.i(new c.A({name:"classname",alias:"classname",type:"string"}),null,P);let k="";switch(o){case"midspan":{k=`((${I}='${h}') OR ( ${A}='${h}')) AND (${b} IN (5))`,W.codefield=f.WhereClause.create(`CASE WHEN (${I}='${h}') THEN ${T} ELSE ${C} END`,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,i.a8)(r.A.findField(p.associations.fields,A));e.name=$,e.alias=$,S=new r.S(e,f.WhereClause.create(`CASE WHEN (${A}='${h}') THEN ${I} ELSE ${A} END`,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC)),L=p.unVersion>=4?new r.k(r.A.findField(p.associations.fields,F.get("PERCENTALONG").name)):new r.S(new c.A({name:"percentalong",alias:"percentalong",type:"double"}),f.WhereClause.create("0",p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{k=`((${I}='${h}') OR ( ${A}='${h}')) AND (${b} IN (4,6))`,W.codefield=f.WhereClause.create(`CASE WHEN (${I}='${h}') THEN ${T} ELSE ${C} END`,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,i.a8)(r.A.findField(p.associations.fields,A));e.name=$,e.alias=$,S=new r.S(e,f.WhereClause.create(`CASE WHEN (${A}='${h}') THEN ${I} ELSE ${A} END`,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC)),v=new r.S(new c.A({name:"side",alias:"side",type:"string"}),f.WhereClause.create(`CASE WHEN (${b}=4) THEN 'from' ELSE 'to' END`,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let e=`${I}='@T'`,t=`${A}='@T'`;null!==w&&(e+=` AND ${E}=@A`,t+=` AND ${D}=@A`),k="(("+e+") OR ("+t+"))",k=(0,i.a7)(k,"@T",h??""),e=(0,i.a7)(e,"@T",h??""),null!==w&&(e=(0,i.a7)(e,"@A",w.toString()),k=(0,i.a7)(k,"@A",w.toString())),W.codefield=f.WhereClause.create("CASE WHEN "+e+` THEN ${T} ELSE ${C} END`,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC);const n=(0,i.a8)(r.A.findField(p.associations.fields,A));n.name=$,n.alias=$,S=new r.S(n,f.WhereClause.create("CASE WHEN "+e+` THEN ${A} ELSE ${I} END`,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":k=`${I}='${h}' AND ${b} = 2`,null!==w&&(k+=` AND ${E} = `+w.toString()),W.codefield=T,k="( "+k+" )",S=new r.j(r.A.findField(p.associations.fields,A),$,$);break;case"content":k=`(${A}='${h}' AND ${b} = 2)`,null!==w&&(k+=` AND ${D} = `+w.toString()),W.codefield=C,k="( "+k+" )",S=new r.j(r.A.findField(p.associations.fields,I),$,$);break;case"structure":k=`(${I}='${h}' AND ${b} = 3)`,null!==w&&(k+=` AND ${E} = `+w.toString()),W.codefield=T,k="( "+k+" )",S=new r.j(r.A.findField(p.associations.fields,A),$,R);break;case"attached":k=`(${A}='${h}' AND ${b} = 3)`,null!==w&&(k+=` AND ${D} = `+w.toString()),W.codefield=C,k="( "+k+" )",S=new r.j(r.A.findField(p.associations.fields,I),$,R);break;default:throw new i.A(t,i.E.InvalidParameter,n)}return g&&(k="1 <> 1"),new r.A({parentfeatureset:p.associations,adaptedFields:[new r.k(r.A.findField(p.associations.fields,N)),new r.k(r.A.findField(p.associations.fields,x)),S,v,W,L],extraFilter:k?f.WhereClause.create(k,p.associations.getFieldsIndex(),p.associations.dateFieldsTimeZoneDefaultUTC):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(async(a,r,s)=>{if((0,i.p)(s,3,3,t,n),!(0,i.x)(s[0]))throw new i.A(t,i.E.InvalidParameter,n);const l=await s[0].load(),u=[],d=[];let c=!1,m=[];if((0,i.s)(s[1]))m.push(s[1]);else if(s[1]instanceof i.D)m.push(s[1]);else if((0,i.t)(s[1]))m=s[1];else{if(!(0,i.u)(s[1]))throw new i.A(t,i.E.InvalidParameter,n);m=s[1].toArray()}for(const e of m)if((0,i.s)(e)){const t=f.WhereClause.create((0,i.C)(e),l.getFieldsIndex(),l.dateFieldsTimeZoneDefaultUTC),n=!0===(0,o.i)(t)?(0,i.C)(e):"%%%%FIELDNAME";u.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(c=!0)}else{if(!(e instanceof i.D))throw new i.A(t,i.E.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",r=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(c=!0),!a)throw new i.A(t,i.E.InvalidParameter,n);u.push({name:a,expression:f.WhereClause.create(r||a,l.getFieldsIndex(),l.dateFieldsTimeZoneDefaultUTC)})}}if(m=[],(0,i.s)(s[2]))m.push(s[2]);else if((0,i.t)(s[2]))m=s[2];else if((0,i.u)(s[2]))m=s[2].toArray();else{if(!(s[2]instanceof i.D))throw new i.A(t,i.E.InvalidParameter,n);m.push(s[2])}for(const e of m){if(!(e instanceof i.D))throw new i.A(t,i.E.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",s=e.hasField("expression")?e.field("expression"):"";if(!a||!r||!s)throw new i.A(t,i.E.InvalidParameter,n);d.push({name:a,statistic:r.toLowerCase(),expression:f.WhereClause.create(s,l.getFieldsIndex(),l.dateFieldsTimeZoneDefaultUTC)})}}if(c){const e={};for(const t of l.fields)e[t.name.toLowerCase()]=1;for(const t of u)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of d)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of u)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of u)await y(n.expression,e,t);for(const n of d)await y(n.expression,e,t);return s[0].groupby(u,d)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(async(a,r,s)=>{if((0,i.x)(s[0])){(0,i.p)(s,2,2,t,n);const a=await s[0].load(),r=[];let l=[];if((0,i.s)(s[1]))l.push(s[1]);else if(s[1]instanceof i.D)l.push(s[1]);else if((0,i.t)(s[1]))l=s[1];else{if(!(0,i.u)(s[1]))throw new i.A(t,i.E.InvalidParameter,n);l=s[1].toArray()}let u=!1;for(const e of l)if((0,i.s)(e)){const t=f.WhereClause.create((0,i.C)(e),a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),n=!0===(0,o.i)(t)?(0,i.C)(e):"%%%%FIELDNAME";r.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(u=!0)}else{if(!(e instanceof i.D))throw new i.A(t,i.E.InvalidParameter,n);{const s=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===s&&(u=!0),!s)throw new i.A(t,i.E.InvalidParameter,n);r.push({name:s,expression:f.WhereClause.create(l||s,a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC)})}}if(u){const e={};for(const t of a.fields)e[t.name.toLowerCase()]=1;for(const t of r)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of r)await y(n.expression,e,t);return s[0].groupby(r,[])}return function(e){if(1===e.length){if((0,i.t)(e[0]))return(0,i.aa)("distinct",e[0],-1);if((0,i.u)(e[0]))return(0,i.aa)("distinct",e[0].toArray(),-1)}return(0,i.aa)("distinct",e,-1)}(s)}))},e.functions.getfeaturesetinfo=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{if((0,i.p)(r,1,1,t,n),!(0,i.x)(r[0]))return null;const s=await r[0].getFeatureSetInfo();return s?i.D.convertObjectToArcadeDictionary({layerId:s.layerId,layerName:s.layerName,itemId:s.itemId,serviceLayerUrl:s.serviceLayerUrl,webMapLayerId:s.webMapLayerId??null,webMapLayerTitle:s.webMapLayerTitle??null,className:null,objectClassId:null},(0,i._)(t),!1,!1):null}))},e.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),e.functions.filterbysubtypecode=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{if((0,i.p)(s,2,2,t,n),(0,i.x)(s[0])){const e=await s[0].load(),a=s[1];if(!(0,i.a9)(a))throw new i.A(t,i.E.InvalidParameter,n);if(e.subtypeField){const t=f.WhereClause.create(`${e.subtypeField}= ${s[1]}`,e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC);return new r.b({parentfeatureset:s[0],whereclause:t})}if(null===e.typeIdField||""===e.typeIdField)throw new i.A(t,i.E.FeatureSetDoesNotHaveSubtypes,n);const l=f.WhereClause.create(`${e.typeIdField}= ${s[1]}`,e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC);return new r.b({parentfeatureset:s[0],whereclause:l})}throw new i.A(t,i.E.InvalidParameter,n)}))},e.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}n(20266),n(90740),n(32773),n(133),n(54483),n(59192),n(13671),n(44600),n(32816),n(29298),n(36544),n(93181),n(40499),n(6407),n(69421),n(91047),n(2160),n(99924),n(41390),n(58498),n(45371),n(49877),n(7969),n(69763),n(93804),n(18683),n(64604),n(29512),n(99063),n(56273),n(64752),n(48844),n(29208),n(94345),n(36533),n(84200),n(97827),n(91695),n(18169),n(48402),n(16699),n(26809),n(2589),n(18527),n(67504),n(92517),n(77037),n(13317),n(83637),n(47239),n(79875),n(30011),n(55270),n(50214),n(78016),n(95779),n(13262),n(346),n(93049),n(27281),n(72393),n(52731),n(17745),n(81272),n(44945),n(51961),n(62399),n(64995),n(33150),n(58173),n(66110),n(67520),n(27532),n(88663),n(48103),n(65085),n(33611),n(84857),n(60373),n(98187),n(35902),n(13226),n(16794),n(52357),n(11090),n(49319),n(93546),n(29570),n(34592),n(79825),n(95101),n(67578),n(14896),n(95611),n(98089),n(91366),n(80473),n(43435),n(73435),n(4048),n(85232),n(93471),n(53252),n(34039),n(70061),n(3495),n(97906),n(64524),n(65023),n(31424),n(74676),n(53610),n(29447),n(78273),n(49475),n(32368),n(7391),n(22529),n(43534),n(38094),n(67723),n(59858),n(63728),n(1178),n(7182),n(47788),n(19297),n(4157),n(62401),n(89322),n(20138),n(53370),n(46946),n(3816),n(73509),n(28276),n(69277),n(70580),n(75191),n(24319),n(62092),n(71992),n(80167),n(4478),n(91808),n(7161),n(55586),n(35121),n(92229),n(18344),n(64884),n(23351),n(51222),n(42870),n(67321),n(73067),n(54512),n(53103),n(19648),n(42948),n(76636),n(9623),n(81284),n(12109),n(69033),n(68140),n(3952),n(339),n(79281),n(13978),n(48689),n(53564),n(71868),n(64102),n(8824),n(95637),n(59930),n(45862),n(72762),n(71613),n(17872),n(73600),n(66136),n(4734),n(78860),n(26805),n(13983),n(38343),n(76218),n(1739),n(71492),n(81618),n(32074),n(78481),n(66322),n(78644),n(73597),n(43059),n(89935),n(49813),n(39236),n(11494),n(6801),n(41003),n(9380),n(67138),n(91381),n(60027),n(57111),n(75651),n(88614),n(1030),n(15319),n(60785),n(56487),n(6399),n(9498),n(23105),n(24079),n(38149),n(19681),n(40328),n(84539),n(65299),n(6510),n(38641),n(73502),n(19869),n(3827),n(65174),n(78328),n(72604),n(54616),n(25018),n(49011),n(23787),n(22151),n(38632),n(83002),n(24330),n(91276),n(62482),n(45476),n(69310),n(43682),n(85351),n(54481),n(1535),n(9943),n(89253),n(16677),n(17813),n(3112),n(46626),n(45560),n(56303),n(85890),n(55884),n(32397),n(2810),n(89601),n(85472),n(79323),n(74148),n(3175),n(85994),n(35935),n(23070),n(95717),n(968),n(85901),n(82458),n(37740),n(25329),n(82140),n(40988),n(42586),n(44370),n(18653),n(70534),n(45817),n(90509),n(67315),n(8368),n(1985),n(31315),n(12119),n(13201),n(12856),n(47812),n(4335),n(99781),n(25643),n(56367),n(8904),n(29201),n(32826),n(98238),n(49755),n(54131),n(58196),n(86941),n(89575),n(71895),n(27084),n(61904),n(21914),n(29755),n(97511),n(32264),n(68849),n(82842),n(10224),n(36309),n(62959),n(74159),n(90197),n(88730),n(6837),n(96625),n(38424),n(82454),n(78281),n(47387),n(46728),n(23439),n(98335),n(46935),n(96807),n(69448),n(79205),n(35619),n(38093),n(60408),n(59955),n(58396),n(20978),n(40558)},29023:(e,t,n)=>{n.d(t,{g:()=>i});var a=n(82408);function i(e,t){return null===e?t:new a.A({url:e.field("url")})}}}]);