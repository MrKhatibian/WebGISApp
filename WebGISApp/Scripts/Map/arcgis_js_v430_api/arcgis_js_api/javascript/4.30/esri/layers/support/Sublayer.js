// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../geometry ../../PopupTemplate ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../renderers/support/types ../../request ../../symbols ../../core/Collection ../../core/Error ../../core/has ../../core/Identifiable ../../core/lang ../../core/Loadable ../../core/Logger ../../core/MultiOriginJSONSupport ../../core/sql ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/ensureType ../../core/accessorSupport/PropertyOrigin ../../core/accessorSupport/utils ../graphics/sources/support/QueryTask ./featureLayerUtils ./FeatureType ./Field ./FieldsIndex ./fieldUtils ./LabelClass ./labelingInfo ./LayerFloorInfo ./Relationship ./serviceCapabilitiesUtils ./source/DataLayerSource ./source/MapLayerSource ../../rest/utils ../../rest/support/AttachmentQuery ../../rest/support/Query ../../support/popupUtils ../../geometry/Extent ../../geometry/SpatialReference ../../geometry/support/typeUtils".split(" "),
function(I,e,d,J,pa,qa,ra,sa,ta,ua,va,wa,xa,F,K,L,M,l,N,O,u,P,v,Q,R,S,f,T,p,U,t,r,k,y,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,G,z,ha,ia,ja,ka,la,ma,A){function B(a,b,c){a=this.originIdOf(b)>=k.nameToId(c.origin);return{ignoreOrigin:!0,allowNull:a,enabled:c?"map-image"===c.layer?.type&&(c.writeSublayerStructure||a):!1}}function C(a,b,c){return{enabled:c?"tile"===c.layer?.type&&(c.origin&&this.originIdOf(b)>=k.nameToId(c.origin)||this._isOverridden(b)):!1}}function n(a,b,c){return{ignoreOrigin:!0,enabled:c&&c.writeSublayerStructure||
!1}}function w(a,b,c){return{ignoreOrigin:!0,enabled:c?c.writeSublayerStructure||this.originIdOf(b)>=k.nameToId(c.origin):!1}}var x;let na=0;const oa=new Set("layer parent loaded loadStatus loadError loadWarnings".split(" "));d=x=class extends Q.MultiOriginJSONMixin(O.IdentifiableMixin(P)){constructor(a){super(a);this.capabilities=void 0;this.maxScaleRange={minScale:0,maxScale:0};this.globalIdField=this.geometryType=this.fullExtent=this.fields=null;this.isTable=!1;this.legendEnabled=!0;this.parent=
this.objectIdField=null;this.popupEnabled=!0;this.typeIdField=this.title=this.spatialReference=this.sourceJSON=this.relationships=this.popupTemplate=null;this.type="sublayer";this._lastParsedUrl=this.types=null}async load(a){this.addResolvingPromise((async()=>{const {layer:b,url:c}=this;if(!b&&!c)throw new l("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const g=b?await b.fetchSublayerInfo(this,a):(await K(c,{responseType:"json",query:{f:"json"},
...a})).data;g&&(this.sourceJSON=g,this.read({layerDefinition:g},{origin:"service",layer:b,url:ha.parseUrl(c)}))})());return this}readCapabilities(a,b){b=b.layerDefinition||b;const {operations:{supportsQuery:c,supportsQueryAttachments:g},query:{supportsFormatPBF:h,supportsOrderBy:m,supportsPagination:q},data:{supportsAttachment:D},queryRelated:E}=fa.getFeatureLayerCapabilities(b,this.url);return{exportMap:{supportsModification:!!b.canModifyLayer},operations:{supportsQuery:c,supportsQueryAttachments:g},
data:{supportsAttachment:D},query:{supportsFormatPBF:h,supportsOrderBy:m,supportsPagination:q},queryRelated:E}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(a){this._setAndNotifyLayer("definitionExpression",a)}get effectiveScaleRange(){const {minScale:a,maxScale:b}=this;return{minScale:a,maxScale:b}}readMaxScaleRange(a,b){b=b.layerDefinition||b;return{minScale:b.minScale??0,maxScale:b.maxScale??0}}get fieldsIndex(){return new Z(this.fields||[])}set floorInfo(a){this._setAndNotifyLayer("floorInfo",
a)}readGlobalIdFieldFromService(a,b){b=b.layerDefinition||b;if(b.globalIdField)return b.globalIdField;if(b.fields)for(const c of b.fields)if("esriFieldTypeGlobalID"===c.type)return c.name}get id(){const a=this._get("id");return null==a?na++:a}set id(a){this._get("id")!==a&&(!1===this.layer?.capabilities?.exportMap?.supportsDynamicLayers?this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"):this._set("id",a))}readIsTable(a,b){return"Table"===b.type}set labelingInfo(a){this._setAndNotifyLayer("labelingInfo",
a)}writeLabelingInfo(a,b,c,g){a&&a.length&&(b.layerDefinition={drawingInfo:{labelingInfo:a.map(h=>h.write({},g))}})}set labelsVisible(a){this._setAndNotifyLayer("labelsVisible",a)}set layer(a){this._set("layer",a);this.sublayers?.forEach(b=>b.layer=a)}set listMode(a){this._set("listMode",a)}set minScale(a){this._setAndNotifyLayer("minScale",a)}readMinScale(a,b){return b.minScale||b.layerDefinition?.minScale||0}set maxScale(a){this._setAndNotifyLayer("maxScale",a)}readMaxScale(a,b){return b.maxScale||
b.layerDefinition?.maxScale||0}readObjectIdFieldFromService(a,b){b=b.layerDefinition||b;return b.objectIdField?b.objectIdField:b.fields?.find(c=>"esriFieldTypeOID"===c.type)?.name}set opacity(a){this._setAndNotifyLayer("opacity",a)}readOpacity(a,b){({layerDefinition:a}=b);return 1-.01*(a?.transparency??a?.drawingInfo?.transparency??0)}writeOpacity(a,b,c,g){b.layerDefinition={drawingInfo:{transparency:100-100*a}}}writeParent(a,b){b.parentLayerId=this.parent&&this.parent!==this.layer?r.ensureInteger(this.parent.id):
-1}get queryTask(){if(!this.layer)return null;const {capabilities:a,fieldsIndex:b,layer:c,url:g}=this,{spatialReference:h}=c,m="gdbVersion"in c?c.gdbVersion:void 0,q=N("featurelayer-pbf")&&a?.query.supportsFormatPBF;return new V({fieldsIndex:b,gdbVersion:m,pbfSupported:q,queryAttachmentsSupported:a?.operations?.supportsQueryAttachments??!1,sourceSpatialReference:h,url:g})}set renderer(a){aa.fixRendererFields(a,this.fieldsIndex);if(a)for(const b of a.getSymbols())if(L.isSymbol3D(b)){v.getLogger(this).warn("Sublayer renderer should use 2D symbols");
break}this._setAndNotifyLayer("renderer",a)}get source(){return this._get("source")||new z.MapLayerSource({mapLayerId:this.id})}set source(a){this._setAndNotifyLayer("source",a)}set sublayers(a){this._handleSublayersChange(a,this._get("sublayers"));this._set("sublayers",a)}castSublayers(a){return r.ensureType(M.ofType(x),a)}writeSublayers(a,b,c){this.sublayers?.length&&(b[c]=this.sublayers.map(g=>g.id).toArray().reverse())}readTitle(a,b){return b.layerDefinition?.name??b.name}readTypeIdField(a,b){b=
b.layerDefinition||b;let c=b.typeIdField;c&&b.fields&&(c=c.toLowerCase(),a=b.fields.find(g=>g.name.toLowerCase()===c))&&(c=a.name);return c}get url(){const a=this.layer?.parsedUrl??this._lastParsedUrl;var b=this.source;if(!a)return null;this._lastParsedUrl=a;if("map-layer"===b?.type)return`${a.path}/${b.mapLayerId}`;b={layer:JSON.stringify({source:this.source})};return`${a.path}/dynamicLayer?${S.objectToQuery(b)}`}set url(a){this._overrideIfSome("url",a)}set visible(a){this._setAndNotifyLayer("visible",
a)}writeVisible(a,b,c,g){b[c]=this.getAtOrigin("defaultVisibility","service")||a}clone(){const {store:a}=y.getProperties(this),b=new x;y.getProperties(b).store=a.clone(oa);this.commitProperty("url");b._lastParsedUrl=this._lastParsedUrl;return b}createPopupTemplate(a){return ka.createPopupTemplate(this,a)}createQuery(){return new ja({returnGeometry:!0,where:this.definitionExpression||"1\x3d1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;var a=(await new Promise((g,h)=>
I(["../FeatureLayer"],m=>g(Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}))),h))).default;const {layer:b,url:c}=this;if(c&&this.originIdOf("url")>k.OriginId.SERVICE)a=new a({url:c});else if(b?.parsedUrl){const g=b.parsedUrl;a=new a({url:g.path});g&&this.source&&("map-layer"===this.source.type?a.layerId=this.source.mapLayerId:a.dynamicDataSource=this.source)}else throw new l("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");
null!=b?.refreshInterval&&(a.refreshInterval=b.refreshInterval);this.definitionExpression&&(a.definitionExpression=this.definitionExpression);this.floorInfo&&(a.floorInfo=u.clone(this.floorInfo));this.originIdOf("labelingInfo")>k.OriginId.SERVICE&&(a.labelingInfo=u.clone(this.labelingInfo));this.originIdOf("labelsVisible")>k.OriginId.DEFAULTS&&(a.labelsVisible=this.labelsVisible);this.originIdOf("legendEnabled")>k.OriginId.DEFAULTS&&(a.legendEnabled=this.legendEnabled);this.originIdOf("visible")>
k.OriginId.DEFAULTS&&(a.visible=this.visible);this.originIdOf("minScale")>k.OriginId.DEFAULTS&&(a.minScale=this.minScale);this.originIdOf("maxScale")>k.OriginId.DEFAULTS&&(a.maxScale=this.maxScale);this.originIdOf("opacity")>k.OriginId.DEFAULTS&&(a.opacity=this.opacity);this.originIdOf("popupTemplate")>k.OriginId.DEFAULTS&&(a.popupTemplate=u.clone(this.popupTemplate));this.originIdOf("renderer")>k.OriginId.SERVICE&&(a.renderer=u.clone(this.renderer));"data-layer"===this.source?.type&&(a.dynamicDataSource=
this.source.clone());this.originIdOf("title")>k.OriginId.DEFAULTS&&(a.title=this.title);"map-image"===b?.type&&b.originIdOf("customParameters")>k.OriginId.DEFAULTS&&(a.customParameters=b.customParameters);"tile"===b?.type&&b.originIdOf("customParameters")>k.OriginId.DEFAULTS&&(a.customParameters=b.customParameters);return a}getField(a){return this.fieldsIndex.get(a)}getFeatureType(a){return W.getFeatureType(this.types,this.typeIdField,a)}getFieldDomain(a,b){return(b=this.getFeatureType(b?.feature))&&
(b=b.domains&&b.domains[a])&&"inherited"!==b.type?b:this._getLayerDomain(a)}async queryAttachments(a,b){await this.load();a=ia.from(a);const c=this.capabilities;if(!c?.data?.supportsAttachment)throw new l("queryAttachments:not-supported","this layer doesn't support attachments");const {attachmentTypes:g,objectIds:h,globalIds:m,num:q,size:D,start:E,where:H}=a;if(!c?.operations?.supportsQueryAttachments&&(0<g?.length||0<m?.length||0<D?.length||q||E||H))throw new l("queryAttachments:option-not-supported",
"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",a);if(!(h?.length||m?.length||H))throw new l("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",a);return this.queryTask.executeAttachmentQuery(a,b)}async queryFeatureCount(a=this.createQuery(),b){await this.load();if(!this.capabilities.operations.supportsQuery)throw new l("queryFeatureCount:not-supported","this layer doesn't support queries.");
if(!this.url)throw new l("queryFeatureCount:not-supported","this layer has no url.");return await this.queryTask.executeForCount(a,{...b,query:{...this.layer?.customParameters,token:this.layer?.apiKey}})}async queryFeatures(a=this.createQuery(),b){await this.load();if(!this.capabilities.operations.supportsQuery)throw new l("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new l("queryFeatures:not-supported","this layer has no url.");a=await this.queryTask.execute(a,
{...b,query:{...this.layer?.customParameters,token:this.layer?.apiKey}});if(a?.features)for(const c of a.features)c.sourceLayer=this;return a}async queryObjectIds(a=this.createQuery(),b){await this.load();if(!this.capabilities.operations.supportsQuery)throw new l("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new l("queryObjectIds:not-supported","this layer has no url.");return await this.queryTask.executeForIds(a,{...b,query:{...this.layer?.customParameters,
token:this.layer?.apiKey}})}async queryRelatedFeatures(a,b){await this.load();if(!this.capabilities.operations.supportsQuery)throw new l("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new l("queryRelatedFeatures:not-supported","this layer has no url.");return await this.queryTask.executeRelationshipQuery(a,{...b,query:{...this.layer?.customParameters,token:this.layer?.apiKey}})}async queryRelatedFeaturesCount(a,b){await this.load();if(!this.capabilities.operations.supportsQuery)throw new l("queryRelatedFeaturesCount:not-supported",
"this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new l("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new l("queryRelatedFeaturesCount:not-supported","this layer has no url.");return await this.queryTask.executeRelationshipQueryForCount(a,{...b,query:{...this.layer?.customParameters,token:this.layer?.apiKey}})}toExportImageJSON(a){const b={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,
type:"mapLayer"}};a=R.sqlAnd(a,this.definitionExpression);null!=a&&(b.definitionExpression=a);const c=["renderer","labelingInfo","opacity","labelsVisible"].reduce((g,h)=>{g[h]=this.originIdOf(h);return g},{});if(Object.keys(c).some(g=>c[g]>k.OriginId.SERVICE)){a=b.drawingInfo={};c.renderer>k.OriginId.SERVICE&&(a.renderer=this.renderer?this.renderer.toJSON():null);c.labelsVisible>k.OriginId.SERVICE&&(a.showLabels=this.labelsVisible);if(this.labelsVisible&&c.labelingInfo>k.OriginId.SERVICE)if(this.labelingInfo){!this.loaded&&
this.labelingInfo?.some(h=>!h.labelPlacement)&&v.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' `+"and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.",{sublayer:this});let g=this.labelingInfo;null!=this.geometryType&&(g=ca.validateLabelingInfo(this.labelingInfo,A.featureGeometryTypeKebabDictionary.toJSON(this.geometryType)));a.showLabels=!0;a.labelingInfo=
g.filter(h=>h.labelPlacement).map(h=>h.toJSON({origin:"service",layer:this.layer}))}else a.showLabels=!1;c.opacity>k.OriginId.SERVICE&&(a.transparency=100-100*this.opacity);this._assignDefaultSymbolColors(a.renderer)}return b}_assignDefaultSymbolColors(a){this._forEachSimpleMarkerSymbols(a,b=>{b.color||"esriSMSX"!==b.style&&"esriSMSCross"!==b.style||(b.color=b.outline?.color?b.outline.color:[0,0,0,0])})}_forEachSimpleMarkerSymbols(a,b){if(a){const c=("uniqueValueInfos"in a?a.uniqueValueInfos:"classBreakInfos"in
a?a.classBreakInfos:null)??[];for(const g of c)"esriSMS"===g.symbol?.type&&b(g.symbol);"symbol"in a&&"esriSMS"===a.symbol?.type&&b(a.symbol);"defaultSymbol"in a&&"esriSMS"===a.defaultSymbol?.type&&b(a.defaultSymbol)}}_setAndNotifyLayer(a,b){const c=this.layer,g=this._get(a);let h,m;switch(a){case "definitionExpression":case "floorInfo":h="supportsSublayerDefinitionExpression";break;case "minScale":case "maxScale":case "visible":h="supportsSublayerVisibility";break;case "labelingInfo":case "labelsVisible":case "opacity":case "renderer":case "source":h=
"supportsDynamicLayers",m="supportsModification"}const q=y.getProperties(this).getDefaultOrigin();if("service"!==q){if(h&&!1===this.layer?.capabilities?.exportMap?.[h]){this._logLockedError(a,`capability not available 'layer.capabilities.exportMap.${h}'`);return}if(m&&!1===this.capabilities?.exportMap[m]){this._logLockedError(a,`capability not available 'capabilities.exportMap.${m}'`);return}}"source"===a&&"not-loaded"!==this.loadStatus?this._logLockedError(a,"'source' can't be changed after calling sublayer.load()"):
(this._set(a,b),"service"!==q&&g!==b&&c&&c.emit&&c.emit("sublayer-update",{propertyName:a,target:this}))}_handleSublayersChange(a,b){b&&(b.forEach(c=>{c.parent=null;c.layer=null}),this.removeAllHandles());a&&(a.forEach(c=>{c.parent=this;c.layer=this.layer}),this.addHandles([a.on("after-add",({item:c})=>{c.parent=this;c.layer=this.layer}),a.on("after-remove",({item:c})=>{c.parent=null;c.layer=null}),a.on("before-changes",c=>{(this.layer?.capabilities?.exportMap?.supportsSublayersChanges??!0)||(v.getLogger(this).error(new l("sublayer:sublayers-non-modifiable",
"Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),c.preventDefault())})]))}_logLockedError(a,b){const {layer:c,declaredClass:g}=this;v.getLogger(g).error(new l("sublayer:locked",`Property '${String(a)}' can't be changed on Sublayer from the layer '${c?.id}'`,{reason:b,sublayer:this,layer:c}))}_getLayerDomain(a){return this.fieldsIndex.get(a)?.domain??null}};d.test={isMapImageLayerOverridePolicy:a=>a===n||a===B,isTileImageLayerOverridePolicy:a=>
a===C};e.__decorate([f.property({readOnly:!0})],d.prototype,"capabilities",void 0);e.__decorate([p.reader("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],d.prototype,"readCapabilities",null);e.__decorate([f.property()],d.prototype,"defaultPopupTemplate",null);e.__decorate([f.property({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:B}}})],d.prototype,"definitionExpression",null);e.__decorate([f.property({readOnly:!0})],
d.prototype,"effectiveScaleRange",null);e.__decorate([p.reader("service","maxScaleRange",["minScale","maxScale"])],d.prototype,"readMaxScaleRange",null);e.__decorate([f.property({type:[Y],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],d.prototype,"fields",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"fieldsIndex",null);e.__decorate([f.property({type:da,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",
overridePolicy:B},origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"floorInfo",null);e.__decorate([f.property({type:la,json:{read:{source:"layerDefinition.extent"}}})],d.prototype,"fullExtent",void 0);e.__decorate([f.property({type:A.featureGeometryTypeKebabDictionary.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:A.featureGeometryTypeKebabDictionary.read}}}}})],d.prototype,"geometryType",void 0);e.__decorate([f.property({type:String})],d.prototype,"globalIdField",
void 0);e.__decorate([p.reader("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],d.prototype,"readGlobalIdFieldFromService",null);e.__decorate([f.property({type:r.Integer,json:{write:{ignoreOrigin:!0}}})],d.prototype,"id",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"isTable",void 0);e.__decorate([p.reader("service","isTable",["type"])],d.prototype,"readIsTable",null);e.__decorate([f.property({value:null,type:[ba],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},
write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:n}}})],d.prototype,"labelingInfo",null);e.__decorate([t.writer("labelingInfo")],d.prototype,"writeLabelingInfo",null);e.__decorate([f.property({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:n}}})],d.prototype,"labelsVisible",null);e.__decorate([f.property({value:null})],d.prototype,"layer",null);e.__decorate([f.property({type:String,
json:{write:{overridePolicy:C}}})],d.prototype,"layerItemId",void 0);e.__decorate([f.property({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:w}}})],d.prototype,"legendEnabled",void 0);e.__decorate([f.property({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],d.prototype,"listMode",null);e.__decorate([f.property({type:Number,value:0,json:{write:{overridePolicy:n}}})],
d.prototype,"minScale",null);e.__decorate([p.reader("minScale",["minScale","layerDefinition.minScale"])],d.prototype,"readMinScale",null);e.__decorate([f.property({type:Number,value:0,json:{write:{overridePolicy:n}}})],d.prototype,"maxScale",null);e.__decorate([p.reader("maxScale",["maxScale","layerDefinition.maxScale"])],d.prototype,"readMaxScale",null);e.__decorate([f.property()],d.prototype,"objectIdField",void 0);e.__decorate([p.reader("service","objectIdField",["layerDefinition.objectIdField",
"layerDefinition.fields"])],d.prototype,"readObjectIdFieldFromService",null);e.__decorate([f.property({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:n}}})],d.prototype,"opacity",null);e.__decorate([p.reader("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],d.prototype,"readOpacity",null);e.__decorate([t.writer("opacity")],d.prototype,"writeOpacity",null);e.__decorate([f.property({json:{type:r.Integer,write:{target:"parentLayerId",
writerEnsuresNonNull:!0,overridePolicy:n}}})],d.prototype,"parent",void 0);e.__decorate([t.writer("parent")],d.prototype,"writeParent",null);e.__decorate([f.property({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader(a,b){return!b.disablePopup}},write:{target:"disablePopup",overridePolicy:w,writer(a,b,c){b[c]=!a}}}})],d.prototype,"popupEnabled",void 0);e.__decorate([f.property({type:J,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:w}}})],d.prototype,"popupTemplate",
void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"queryTask",null);e.__decorate([f.property({type:[ea],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],d.prototype,"relationships",void 0);e.__decorate([f.property({types:F.rendererTypes,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:n},origins:{"web-scene":{types:F.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:n}}}}})],d.prototype,
"renderer",null);e.__decorate([f.property({types:{key:"type",base:null,typeMap:{"data-layer":G.DataLayerSource,"map-layer":z.MapLayerSource}},cast(a){if(a){if("mapLayerId"in a)return r.ensureClass(z.MapLayerSource,a);if("dataSource"in a)return r.ensureClass(G.DataLayerSource,a)}return a},json:{name:"layerDefinition.source",write:{overridePolicy:n}}})],d.prototype,"source",null);e.__decorate([f.property()],d.prototype,"sourceJSON",void 0);e.__decorate([f.property({type:ma,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],
d.prototype,"spatialReference",void 0);e.__decorate([f.property({value:null,json:{type:[r.Integer],write:{target:"subLayerIds",allowNull:!0,overridePolicy:n}}})],d.prototype,"sublayers",null);e.__decorate([T.cast("sublayers")],d.prototype,"castSublayers",null);e.__decorate([t.writer("sublayers")],d.prototype,"writeSublayers",null);e.__decorate([f.property({type:String,json:{name:"name",write:{overridePolicy:w}}})],d.prototype,"title",void 0);e.__decorate([p.reader("service","title",["name","layerDefinition.name"])],
d.prototype,"readTitle",null);e.__decorate([f.property({type:String})],d.prototype,"typeIdField",void 0);e.__decorate([f.property({json:{read:!1},readOnly:!0,value:"sublayer"})],d.prototype,"type",void 0);e.__decorate([p.reader("typeIdField",["layerDefinition.typeIdField"])],d.prototype,"readTypeIdField",null);e.__decorate([f.property({type:[X],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],d.prototype,"types",void 0);e.__decorate([f.property({type:String,json:{name:"layerUrl",
write:{overridePolicy:C}}})],d.prototype,"url",null);e.__decorate([f.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:n}}})],d.prototype,"visible",null);e.__decorate([t.writer("visible")],d.prototype,"writeVisible",null);return d=x=e.__decorate([U.subclass("esri.layers.support.Sublayer")],d)});