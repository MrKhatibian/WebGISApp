"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2931],{38961:(e,t,r)=>{r.d(t,{A:()=>p});var s=r(90237),i=r(5503),o=(r(60999),r(49186),r(53966),r(14012),r(80559)),n=r(10107),l=r(40608);let a=class extends i.A{constructor(e){super(e),this.getCollections=null}initialize(){this.addHandles((0,o.fm)((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const e=null!=this.getCollections?this.getCollections():null;if(null==e)return void this.removeAll();let t=0;for(const r of e)null!=r&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new i.A(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction??(e=>!!e);for(const s of t)if(s){if(r(s)){const t=this.indexOf(s,e);t>=0?t!==e&&this.reorder(s,e):this.add(s,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(s);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,s._)([(0,n.MZ)()],a.prototype,"getCollections",void 0),(0,s._)([(0,n.MZ)()],a.prototype,"getChildrenFunction",void 0),(0,s._)([(0,n.MZ)()],a.prototype,"itemFilterFunction",void 0),a=(0,s._)([(0,l.$)("esri.core.CollectionFlattener")],a);const p=a},88303:(e,t,r)=>{r.r(t),r.d(t,{default:()=>He});var s=r(90237),i=r(5503),o=r(38961),n=r(49186),l=r(4718),a=r(81583),p=r(53966),y=r(92071),u=r(74887),d=r(84952),c=r(10107),h=(r(44208),r(36005)),f=r(40608),g=r(16930),m=r(4146),v=r(52106),_=r(13874),b=(r(86162),r(94409),r(65345),r(42980),r(39290),r(92438),r(96576),r(93618),r(65494),r(15036)),w=r(78888),M=r(66552),S=r(92474),Z=r(61893),x=(r(87811),r(93223)),F=r(5443),O=r(13600),A=r(4902),j=r(56507),T=r(10873);let L=class extends((0,A.sA)(y.L)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,s._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],L.prototype,"title",void 0),(0,s._)([(0,h.w)("service","title",["alias","name"])],L.prototype,"readTitle",null),(0,s._)([(0,c.MZ)()],L.prototype,"layer",void 0),(0,s._)([(0,c.MZ)({type:j.jz,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],L.prototype,"id",void 0),(0,s._)([(0,h.w)("service","id")],L.prototype,"readIdOnlyOnce",null),(0,s._)([(0,c.MZ)((0,T.Qo)(String))],L.prototype,"modelName",void 0),(0,s._)([(0,c.MZ)((0,T.Qo)(Boolean))],L.prototype,"isEmpty",void 0),(0,s._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],L.prototype,"legendEnabled",void 0),(0,s._)([(0,c.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],L.prototype,"visible",void 0),(0,s._)([(0,c.MZ)({type:Number,json:{write:!0}})],L.prototype,"opacity",void 0),L=(0,s._)([(0,f.$)("esri.layers.buildingSublayers.BuildingSublayer")],L);const I=L;var R=r(4071),P=r(17036),B=r(95466),q=r(30524),N=r(83898),E=r(50805),C=r(61956),k=r(30291),$=r(88625),Q=r(28030),z=r(45671);const D=(0,P.p)();let G=class extends(S.A.LoadableMixin((0,Z.g)(I))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new B.A(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return null!=r&&"number"==typeof s?new O.default({portalItem:r,customParameters:this.customParameters,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,N.F)(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,p.A.getLogger(this),t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,k.tn)(this,e)}async _fetchService(e){const t=(await(0,w.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:R.P,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new C.A;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,q.hL)(this.fieldsIndex,await(0,z.TO)(this,(0,z.D8)(this)));return(0,Q.s1)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.A("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new v.A({attributes:r[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.A("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.A("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,s._)([(0,c.MZ)({readOnly:!0})],G.prototype,"parsedUrl",null),(0,s._)([(0,c.MZ)({type:E.W4,readOnly:!0})],G.prototype,"nodePages",void 0),(0,s._)([(0,c.MZ)({type:[E.uV],readOnly:!0})],G.prototype,"materialDefinitions",void 0),(0,s._)([(0,c.MZ)({type:[E.Ot],readOnly:!0})],G.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,c.MZ)({type:[E.L0],readOnly:!0})],G.prototype,"geometryDefinitions",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],G.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],G.prototype,"store",void 0),(0,s._)([(0,c.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],G.prototype,"rootNode",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],G.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,c.MZ)(D.fields)],G.prototype,"fields",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],G.prototype,"fieldsIndex",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:O.default})],G.prototype,"associatedLayer",void 0),(0,s._)([(0,h.w)("service","associatedLayer",["associatedLayerID"])],G.prototype,"readAssociatedLayer",null),(0,s._)([(0,c.MZ)(D.outFields)],G.prototype,"outFields",void 0),(0,s._)([(0,c.MZ)({type:String,readOnly:!0})],G.prototype,"objectIdField",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String,json:{read:!1}})],G.prototype,"displayField",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String})],G.prototype,"apiKey",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String})],G.prototype,"customParameters",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:F.A})],G.prototype,"fullExtent",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:g.A})],G.prototype,"spatialReference",null),(0,s._)([(0,c.MZ)({readOnly:!0})],G.prototype,"version",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:$.A})],G.prototype,"elevationInfo",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],G.prototype,"minScale",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],G.prototype,"maxScale",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],G.prototype,"effectiveScaleRange",null),(0,s._)([(0,c.MZ)({type:["hide","show"],json:{write:!0}})],G.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)({types:b.X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],G.prototype,"renderer",void 0),(0,s._)([(0,c.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],G.prototype,"definitionExpression",void 0),(0,s._)([(0,c.MZ)(T.M6)],G.prototype,"popupEnabled",void 0),(0,s._)([(0,c.MZ)({type:_.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],G.prototype,"popupTemplate",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],G.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],G.prototype,"defaultPopupTemplate",null),(0,s._)([(0,c.MZ)()],G.prototype,"types",null),(0,s._)([(0,c.MZ)()],G.prototype,"typeIdField",null),(0,s._)([(0,c.MZ)({json:{write:!1}}),(0,x.e)(new M.J({"3DObject":"3d-object",Point:"point"}))],G.prototype,"layerType",void 0),(0,s._)([(0,c.MZ)()],G.prototype,"geometryType",null),(0,s._)([(0,c.MZ)()],G.prototype,"profile",null),(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],G.prototype,"capabilities",null),(0,s._)([(0,c.MZ)({readOnly:!0})],G.prototype,"statisticsInfo",void 0),G=(0,s._)([(0,f.$)("esri.layers.buildingSublayers.BuildingComponentSublayer")],G);const J=G;var K,U=r(67076);const V={type:i.A,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:Y}}},read:!1}};function Y(e,t,r){if(e&&Array.isArray(e))return new i.A(e.map((e=>{const t=function(e){return"group"===e.layerType?H:J}(e);if(t){const s=new t;return s.read(e,r),s}return r?.messages&&e&&r.messages.push(new U.A("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let H=K=class extends I{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,a.L)(this,(e=>K.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var X;(0,s._)([(0,c.MZ)({type:["hide","show","hide-children"],json:{write:!0}})],H.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)(V)],H.prototype,"sublayers",void 0),H=K=(0,s._)([(0,f.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")],H),(X=H||(H={})).sublayersProperty=V,X.readSublayers=Y,X.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const W=H;var ee=r(52136),te=r(18768),re=r(69208),se=r(16131),ie=r(8303),oe=r(25036),ne=r(58947),le=r(92009),ae=r(25482),pe=r(13069);let ye=class extends ae.oY{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,c.MZ)({type:String,readOnly:!0,json:{write:!0}})],ye.prototype,"type",void 0),ye=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfo")],ye);const ue=ye;var de;let ce=de=class extends ae.oY{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new de({filterType:this.filterType,filterValues:(0,l.o8)(this.filterValues)})}};(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],ce.prototype,"filterType",void 0),(0,s._)([(0,c.MZ)({type:[String],json:{write:!0}})],ce.prototype,"filterValues",void 0),ce=de=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfoType")],ce);const he=ce;var fe;const ge=i.A.ofType(he);let me=fe=class extends ae.oY{clone(){return new fe({filterTypes:(0,l.o8)(this.filterTypes)})}};(0,s._)([(0,c.MZ)({type:ge,json:{write:!0}})],me.prototype,"filterTypes",void 0),me=fe=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],me);const ve=me;var _e;const be=i.A.ofType(ve);let we=_e=class extends ue{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _e({filterBlocks:(0,l.o8)(this.filterBlocks)})}};(0,s._)([(0,c.MZ)({type:["checkbox"]})],we.prototype,"type",void 0),(0,s._)([(0,c.MZ)({type:be,json:{write:!0}})],we.prototype,"filterBlocks",void 0),we=_e=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],we);const Me=we;let Se=class extends ae.oY{};(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],Se.prototype,"type",void 0),Se=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterMode")],Se);const Ze=Se;var xe;let Fe=xe=class extends Ze{constructor(){super(...arguments),this.type="solid"}clone(){return new xe}};(0,s._)([(0,c.MZ)({type:["solid"],readOnly:!0,json:{write:!0}})],Fe.prototype,"type",void 0),Fe=xe=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterModeSolid")],Fe);const Oe=Fe;var Ae,je=r(51734);let Te=Ae=class extends Ze{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Ae({edges:(0,l.o8)(this.edges)})}};(0,s._)([(0,x.e)({wireFrame:"wire-frame"})],Te.prototype,"type",void 0),(0,s._)([(0,c.MZ)(je.J)],Te.prototype,"edges",void 0),Te=Ae=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterModeWireFrame")],Te);const Le=Te;var Ie;let Re=Ie=class extends Ze{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ie}};(0,s._)([(0,c.MZ)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Re.prototype,"type",void 0),Re=Ie=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterModeXRay")],Re);const Pe=Re;var Be;const qe={nonNullable:!0,types:{key:"type",base:Ze,typeMap:{solid:Oe,"wire-frame":Le,"x-ray":Pe}},json:{read:e=>{switch(e?.type){case"solid":return Oe.fromJSON(e);case"wireFrame":return Le.fromJSON(e);case"x-ray":return Pe.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Ne=Be=class extends ae.oY{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Oe,this.title=""}clone(){return new Be({filterExpression:this.filterExpression,filterMode:(0,l.o8)(this.filterMode),title:this.title})}};(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"filterExpression",void 0),(0,s._)([(0,c.MZ)(qe)],Ne.prototype,"filterMode",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"title",void 0),Ne=Be=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilterBlock")],Ne);const Ee=Ne;var Ce;const ke=i.A.ofType(Ee);let $e=Ce=class extends ae.oY{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,pe.lk)(),this.name=null}clone(){return new Ce({description:this.description,filterBlocks:(0,l.o8)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,l.o8)(this.filterAuthoringInfo)})}};(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],$e.prototype,"description",void 0),(0,s._)([(0,c.MZ)({type:ke,json:{write:{enabled:!0,isRequired:!0}}})],$e.prototype,"filterBlocks",void 0),(0,s._)([(0,c.MZ)({types:{key:"type",base:ue,typeMap:{checkbox:Me}},json:{read:e=>"checkbox"===e?.type?Me.fromJSON(e):null,write:!0}})],$e.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,c.MZ)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],$e.prototype,"id",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],$e.prototype,"name",void 0),$e=Ce=(0,s._)([(0,f.$)("esri.layers.support.BuildingFilter")],$e);const Qe=$e;let ze=class extends ae.oY{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,c.MZ)({type:String})],ze.prototype,"fieldName",void 0),(0,s._)([(0,c.MZ)({type:String})],ze.prototype,"modelName",void 0),(0,s._)([(0,c.MZ)({type:String})],ze.prototype,"label",void 0),(0,s._)([(0,c.MZ)({type:Number})],ze.prototype,"min",void 0),(0,s._)([(0,c.MZ)({type:Number})],ze.prototype,"max",void 0),(0,s._)([(0,c.MZ)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],ze.prototype,"mostFrequentValues",void 0),(0,s._)([(0,c.MZ)({type:[Number]})],ze.prototype,"subLayerIds",void 0),ze=(0,s._)([(0,f.$)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],ze);let De=class extends(S.A.LoadableMixin((0,Z.g)(ae.oY))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.A.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,w.A)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,c.MZ)({constructOnly:!0,type:String})],De.prototype,"url",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:[ze],json:{read:{source:"summary"}}})],De.prototype,"fields",null),De=(0,s._)([(0,f.$)("esri.layers.support.BuildingSummaryStatistics")],De);const Ge=De;var Je=r(24212);const Ke=i.A.ofType(Qe),Ue=(0,l.o8)(W.sublayersProperty),Ve=Ue.json?.origins;Ve&&(Ve["web-scene"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Ve["portal-item"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let Ye=class extends((0,ne.w6)((0,te.b)((0,se.q)((0,ie.A)((0,oe.j)((0,y.P)((0,re.d)((0,ee.p)(m.A))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new Ke,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=W.readSublayers(e,t,r);return W.forEachSublayer(s,(e=>e.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(s,this._sublayerOverrides),this._sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){W.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages?.push(new n.A("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];W.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,l.o8)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this._sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,d.fj)(this.parsedUrl?.path,t.statisticsHRef);return new Ge({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.QP).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,a.g)(this,(e=>{W.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(ne.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(ne.Xh.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new n.A("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,le.L)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(e){p.A.getLogger(this).warn("Associated feature service item could not be loaded",e)}}_validateElevationInfo(){const e=this.elevationInfo,t="Building scene layers";(0,Je.XF)(p.A.getLogger(this),(0,Je.B)(t,"absolute-height",e)),(0,Je.XF)(p.A.getLogger(this),(0,Je.tW)(t,e))}};(0,s._)([(0,c.MZ)({type:["BuildingSceneLayer"]})],Ye.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],Ye.prototype,"allSublayers",void 0),(0,s._)([(0,c.MZ)(Ue)],Ye.prototype,"sublayers",void 0),(0,s._)([(0,h.w)("service","sublayers")],Ye.prototype,"readSublayers",null),(0,s._)([(0,c.MZ)({type:Ke,nonNullable:!0,json:{write:!0}})],Ye.prototype,"filters",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],Ye.prototype,"activeFilterId",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:Ge})],Ye.prototype,"summaryStatistics",void 0),(0,s._)([(0,h.w)("summaryStatistics",["statisticsHRef"])],Ye.prototype,"readSummaryStatistics",null),(0,s._)([(0,c.MZ)({type:[String],json:{read:!1}})],Ye.prototype,"outFields",void 0),(0,s._)([(0,c.MZ)(T.Fm)],Ye.prototype,"fullExtent",void 0),(0,s._)([(0,c.MZ)(T.fV)],Ye.prototype,"legendEnabled",void 0),(0,s._)([(0,c.MZ)({type:["show","hide","hide-children"]})],Ye.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)((0,T.Qo)(g.A))],Ye.prototype,"spatialReference",void 0),(0,s._)([(0,c.MZ)(T.Yj)],Ye.prototype,"elevationInfo",null),(0,s._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],Ye.prototype,"type",void 0),(0,s._)([(0,c.MZ)()],Ye.prototype,"associatedFeatureServiceItem",void 0),Ye=(0,s._)([(0,f.$)("esri.layers.BuildingSceneLayer")],Ye);const He=Ye},33143:(e,t,r)=>{r.d(t,{A:()=>c});var s=r(90237),i=r(69540),o=r(25482),n=r(10107),l=(r(44208),r(53966),r(87811),r(36005)),a=r(40608),p=r(43937),y=r(72088),u=r(29005);let d=class extends((0,i.O)(o.oY)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,y.rS)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,s._)([(0,n.MZ)({json:{write:!0}})],d.prototype,"id",void 0),(0,s._)([(0,n.MZ)({json:{write:!0}})],d.prototype,"name",void 0),(0,s._)([(0,n.MZ)({json:{write:!0}})],d.prototype,"domains",void 0),(0,s._)([(0,l.w)("domains")],d.prototype,"readDomains",null),(0,s._)([(0,p.K)("domains")],d.prototype,"writeDomains",null),(0,s._)([(0,n.MZ)({type:[u.A],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,s._)([(0,a.$)("esri.layers.support.FeatureType")],d);const c=d},58501:(e,t,r)=>{r.d(t,{q:()=>i});var s=r(62815);function i(e,t,r){if(!r?.features||!r.hasZ)return;const i=(0,s.N)(r.geometryType,t,e.outSpatialReference);if(null!=i)for(const e of r.features)i(e.geometry)}},22671:(e,t,r)=>{r.d(t,{A:()=>_});var s,i=r(90237),o=r(59456),n=r(52106),l=r(66552),a=r(25482),p=r(4718),y=r(10107),u=(r(44208),r(53966),r(36005)),d=r(40608),c=r(43937),h=r(16930),f=r(65864),g=r(20437);const m=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=s=class extends a.oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=h.A.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const i=e[t],o=n.A.fromJSON(i),l=i.geometry?.spatialReference;null==o.geometry||l||(o.geometry.spatialReference=r);const a=i.aggregateGeometries,p=o.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],s=a[e],i=s?.spatialReference;null==t||i||(t.spatialReference=r)}s.push(o)}return s}writeGeometryType(e,t,r,s){if(e)return void m.write(e,t,r,s);const{features:i}=this;if(i)for(const e of i)if(null!=e?.geometry)return void m.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,f.rS)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=h.A.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,p.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e?.[r];s.geometry=t?.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,i]}=e,o=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((i-e)/r)));for(let e=0,t=o.length;e<t;e++)n?.(o[e].geometry)||(o.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,i],scale:[o,n]}=r;let l=null,a=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;l=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;a=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(e,(e=>e*o+s),(e=>i-e*n),l,a);for(const{geometry:e}of t)null!=e&&p&&p(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,i;const o=[];for(let n=0,l=e.length;n<l;n++){const l=e[n];if(n>0){const e=t(l[0]),n=r(l[1]);e===s&&n===i||(o.push([e-s,n-i]),s=e,i=n)}else s=t(l[0]),i=r(l[1]),o.push([s,i])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,f.Bi)(e)?e.rings:e.paths,i=[];for(let e=0,o=s.length;e<o;e++){const o=s[e],n=this._quantizePoints(o,t,r);n&&i.push(n)}return i.length>0?((0,f.Bi)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,s,i){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),s&&(e.z=s(e.z))}:"polyline"===e||"polygon"===e?e=>{const o=(0,f.Bi)(e)?e.rings:e.paths;let n,l;for(let e=0,s=o.length;e<s;e++){const s=o[e];for(let e=0,i=s.length;e<i;e++){const i=s[e];e>0?(n+=i[0],l+=i[1]):(n=i[0],l=i[1]),i[0]=t(n),i[1]=r(l)}}if(s&&i)for(let e=0,t=o.length;e<t;e++){const t=o[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=s(r[2]),r[3]=i(r[3])}}else if(s)for(let e=0,t=o.length;e<t;e++){const t=o[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=s(r[2])}}else if(i)for(let e=0,t=o.length;e<t;e++){const t=o[e];for(let e=0,r=t.length;e<r;e++){const r=t[e];r[2]=i(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),s&&null!=e.zmax&&null!=e.zmin&&(e.zmax=s(e.zmax),e.zmin=s(e.zmin)),i&&null!=e.mmax&&null!=e.mmin&&(e.mmax=i(e.mmax),e.mmin=i(e.mmin))}:"multipoint"===e?e=>{const o=e.points;let n,l;for(let e=0,s=o.length;e<s;e++){const s=o[e];e>0?(n+=s[0],l+=s[1]):(n=s[0],l=s[1]),s[0]=t(n),s[1]=r(l)}if(s&&i)for(let e=0,t=o.length;e<t;e++){const t=o[e];t[2]=s(t[2]),t[3]=i(t[3])}else if(s)for(let e=0,t=o.length;e<t;e++){const t=o[e];t[2]=s(t[2])}else if(i)for(let e=0,t=o.length;e<t;e++){const t=o[e];t[2]=i(t[2])}}:null}};(0,i._)([(0,y.MZ)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,y.MZ)({type:[n.A],json:{write:!0}})],v.prototype,"features",void 0),(0,i._)([(0,u.w)("features")],v.prototype,"readFeatures",null),(0,i._)([(0,y.MZ)({type:[g.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,i._)([(0,y.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:m.read}}})],v.prototype,"geometryType",void 0),(0,i._)([(0,c.K)("geometryType")],v.prototype,"writeGeometryType",null),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,i._)([(0,y.MZ)({types:o.yR,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,i._)([(0,u.w)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,i._)([(0,y.MZ)({type:h.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,i._)([(0,c.K)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,i._)([(0,y.MZ)({json:{write:!0}})],v.prototype,"transform",void 0),v=s=(0,i._)([(0,d.$)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const _=v}}]);