"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7579],{17579:(t,e,r)=>{r.r(e),r.d(e,{executeTopFeaturesQuery:()=>l});var i=r(69033),o=r(87218),s=r(8824),n=r(32074);async function l(t,e,r,l){const u=(0,i.p)(t),p={...l},{data:a}=await(0,o.e)(u,n.A.from(e),r,p);return s.A.fromJSON(a)}r(90740),r(32773),r(29512),r(99063),r(6407),r(20266),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(29298),r(58498),r(45371),r(80959),r(64604),r(77037),r(44600),r(2160),r(49877),r(7969),r(69763),r(93804),r(18683),r(56273),r(64752),r(48844),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(48402),r(16699),r(26809),r(2589),r(18527),r(67504),r(3952),r(339),r(79281),r(94345),r(92517),r(13978),r(68140),r(48689),r(53564),r(71868),r(64102),r(27281),r(72393),r(52731),r(17745),r(81272),r(44945),r(30011),r(55270),r(50214),r(59192),r(78016),r(54483),r(95779),r(13262),r(346),r(51961),r(62399),r(64995),r(33150),r(58173),r(66110),r(67520),r(27532),r(88663),r(48103),r(65085),r(33611),r(84857),r(60373),r(98187),r(35902),r(13226),r(16794),r(52357),r(11090),r(49319),r(93546),r(29570),r(34592),r(79825),r(95101),r(67578),r(14896),r(95611),r(98089),r(91366),r(80473),r(43435),r(73435),r(4048),r(85232),r(93471),r(53252),r(34039),r(70061),r(3495),r(97906),r(64524),r(65023),r(31424),r(74676),r(53610),r(29447),r(78273),r(49475),r(32368),r(7391),r(22529),r(43534),r(38094),r(67723),r(47239),r(59858),r(63728),r(1178),r(7182),r(47788),r(19297),r(82408),r(73509),r(28276),r(69277),r(70580),r(75191),r(24319),r(62092),r(4157),r(62401),r(89322),r(20138),r(53370),r(46946),r(3816),r(71992),r(80167),r(4478),r(91808),r(7161),r(55586),r(35121),r(92229),r(18344),r(64884),r(23351),r(51222),r(42870),r(67321),r(73067),r(54512),r(53103),r(19648),r(42948),r(44864),r(95637),r(59930),r(45862),r(72762),r(71613),r(17872),r(66136),r(4734),r(78481)},87218:(t,e,r)=>{r.d(e,{a:()=>c,b:()=>h,c:()=>m,e:()=>y});var i=r(64604),o=r(99063),s=r(77037),n=r(3952),l=r(69763),u=r(68140),p=r(71868);const a="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,s.$B)(r),o.inSR=(0,l.Y)(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=(0,l.Y)(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function y(t,e,r,i){const o=await w(t,e,"json",i);return(0,p.a)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,s={},l={}){const p="string"==typeof t?(0,o.An)(t):t,a=e.geometry?[e.geometry]:[];return s.responseType="json",(0,n.el)(a,null,s).then((t=>{const n=t?.[0];null!=n&&((e=e.clone()).geometry=n);const a=(0,u.m)({...p.query,f:r,...l,...d(e,l)});return(0,i.A)((0,o.fj)(p.path,"queryTopFeatures"),{...s,query:{...a,...s.query}})}))}},32074:(t,e,r)=>{r.d(e,{A:()=>j});var i,o=r(32816),s=r(94345),n=r(66136),l=r(93804),u=r(99924),p=r(32773),a=r(29298),d=r(36544),y=r(69421),c=r(56273),h=r(77037),m=r(78481),w=r(7969);r(44600),r(20266),r(90740),r(2160),r(49877),r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(69763),r(18683),r(64604),r(29512),r(99063),r(64752),r(48844),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(48402),r(16699),r(26809),r(2589),r(18527),r(67504),r(92517),r(4734),r(50214),r(59192),r(78016),r(54483);const F=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),v=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let S=i=class extends u.oY{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new i((0,p.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],S.prototype,"cacheHint",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],S.prototype,"distance",void 0),(0,o._)([(0,a.MZ)({types:s.yR,json:{read:h.rS,write:!0}})],S.prototype,"geometry",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],S.prototype,"geometryPrecision",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],S.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],S.prototype,"num",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],S.prototype,"objectIds",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],S.prototype,"orderByFields",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],S.prototype,"outFields",void 0),(0,o._)([(0,a.MZ)({type:w.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],S.prototype,"outSpatialReference",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],S.prototype,"resultType",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],S.prototype,"returnGeometry",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],S.prototype,"returnM",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],S.prototype,"returnZ",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],S.prototype,"start",void 0),(0,o._)([(0,c.w)("start"),(0,c.w)("num")],S.prototype,"writeStart",null),(0,o._)([(0,a.MZ)({type:String,json:{read:{source:"spatialRel",reader:F.read},write:{target:"spatialRel",writer:F.write}}})],S.prototype,"spatialRelationship",void 0),(0,o._)([(0,a.MZ)({type:n.A,json:{write:!0}})],S.prototype,"timeExtent",void 0),(0,o._)([(0,a.MZ)({type:m.A,json:{write:!0}})],S.prototype,"topFilter",void 0),(0,o._)([(0,a.MZ)({type:String,json:{read:v.read,write:{writer:v.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],S.prototype,"units",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],S.prototype,"where",void 0),S=i=(0,o._)([(0,y.$)("esri.rest.support.TopFeaturesQuery")],S),S.from=(0,d.e)(S);const j=S},78481:(t,e,r)=>{r.d(e,{A:()=>p});var i,o=r(32816),s=r(99924),n=r(29298),l=(r(32773),r(20266),r(69421));r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544);let u=i=class extends s.oY{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,n.MZ)({type:[String],json:{write:!0}})],u.prototype,"groupByFields",void 0),(0,o._)([(0,n.MZ)({type:Number,json:{write:!0}})],u.prototype,"topCount",void 0),(0,o._)([(0,n.MZ)({type:[String],json:{write:!0}})],u.prototype,"orderByFields",void 0),u=i=(0,o._)([(0,l.$)("esri.rest.support.TopFilter")],u);const p=u}}]);