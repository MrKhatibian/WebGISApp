// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../request ../core/Collection ../core/Error ../core/MapUtils ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Layer ./catalog/CatalogDynamicGroupLayer ./catalog/CatalogFootprintLayer ./graphics/sources/FeatureLayerSource ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/EditBusLayer ./mixins/FeatureLayerBase ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/commonProperties ./support/featureLayerUtils ./support/FeatureType ./support/fieldProperties ./support/lazyLayerLoader ./support/versionUtils ../portal/Portal ../portal/PortalItem ../portal/support/urlUtils ../rest/support/Query".split(" "),
function(e,z,A,n,B,c,C,p,f,q,Y,Z,D,t,v,w,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,r,S,T,U,V,x,W,X,m){function y(a,b,g,d){a=a.write({},d);null==a?d=!0:(d=Object.keys(a),d=!d.length||1===d.length&&"id"===d[0]);d||(b[g]=a)}async function u(a){if("portalItem"in a&&a.portalItem){try{await a.load()}catch{}a.portalItem=null;"group"===a.type&&await Promise.allSettled([...a.layers.map(b=>u(b)),...a.tables.map(b=>u(b))])}}q=T.defineFieldProperties();c=class extends K.FeatureLayerBase(J.EditBusLayer(H.BlendLayer(M.OrderedLayer(Q.TemporalLayer(P.ScaleRangeLayer(O.RefreshableLayer(G.ArcGISService(L.OperationalLayer(N.PortalLayer(c.MultiOriginJSONMixin(I.CustomParametersMixin(F.APIKeyMixin(t))))))))))))){constructor(a){super(a);
this._portals=new Map;this._layerToFootprint=new WeakMap;this.drawOrderField="cd_draworder";this.dynamicGroupLayer=new v({parent:this});this.floorInfo=this.fieldsIndex=this.fields=this.elevationInfo=null;this.footprintLayer=new w({parent:this});this.itemNameField="cd_itemname";this.itemSourceField="cd_itemsource";this.itemTypeField="cd_itemtype";this.layers=new A([this.dynamicGroupLayer,this.footprintLayer]);this.maxScaleField="cd_maxscale";this.minScaleField="cd_minscale";this.outFields=this.orderBy=
null;this.supportedSourceTypes=new Set(["Catalog Layer"]);this.source=new E({layer:this,supportedSourceTypes:this.supportedSourceTypes});this.type="catalog";this.types=this.typeIdField=null}load(a){const b=null!=a?a.signal:null,g=this.loadFromPortal({supportedTypes:["Feature Service"]},a).catch(C.throwIfAbortError).then(async()=>{const {url:d,source:h,portalItem:k}=this;if(!d)throw new n("catalog-layer:missing-url","Catalog layer must be created with a url");if(null==this.layerId){var l=await this._fetchFirstValidLayerId(b);
if(null!=l)this.layerId=l;else throw new n("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:d});}await h.load({signal:b});({sourceJSON:l}=h);l&&(this.sourceJSON=l,this.read(l,{origin:"service",portalItem:k,portal:k?.portal,url:this.parsedUrl}))}).then(()=>{const d=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],h=d.filter(k=>!this.fieldsIndex.has(k));if(h.length)throw new n("catalog-layer:missing-fields","There are missing fields to operate properly",
{requiredFields:d,missingFields:h});}).then(()=>r.ensureLayerCredential(this,"load",a));this.addResolvingPromise(g);return Promise.resolve(this)}destroy(){this.footprintLayer.destroy();this.dynamicGroupLayer.destroy();for(const a of this._portals.values())a.destroy();this._portals.clear()}get createQueryVersion(){this.commitProperty("definitionExpression");this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("capabilities");return(this._get("createQueryVersion")??
0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const a=p.urlToObject(this.url);null!=a&&null!=this.layerId&&(a.path=p.join(a.path,this.layerId.toString()));return a}async applyEdits(a,b){return r.applyEdits(this,a,b)}on(a,b){return super.on(a,b)}async createLayerFromFootprint(a){const b=await this._createLayer(a);this._configureLayer(b,a);this._layerToFootprint.set(b,
a);return b}createFootprintFromLayer(a){return this._layerToFootprint.get(a)?.clone()}createQuery(){const a=new m,b=this.capabilities?.query;a.returnGeometry=!0;b&&(a.compactGeometryEnabled=b.supportsCompactGeometry,a.defaultSpatialReferenceEnabled=b.supportsDefaultSpatialReference);a.outFields=["*"];const {timeOffset:g,timeExtent:d}=this;a.timeExtent=null!=g&&null!=d?d.offset(-g.value,g.unit):d||null;a.where=this.definitionExpression||"1\x3d1";return a}getFeatureType(a){return r.getFeatureType(this.types,
this.typeIdField,a)}getField(a){return this.fieldsIndex.get(a)}getFieldDomain(a,b){return(b=this.getFeatureType(b?.feature))&&(b=b.domains&&b.domains[a])&&"inherited"!==b.type?b:this.getField(a)?.domain}async hasDataChanged(){return r.hasDataChanged(this)}async queryFeatures(a,b){const g=await this.load();a=await g.source.queryFeatures(m.from(a)??g.createQuery(),b);if(a?.features)for(const d of a.features)d.layer=d.sourceLayer=g.footprintLayer;return a}async queryObjectIds(a,b){return(await this.load()).source.queryObjectIds(m.from(a)??
this.createQuery(),b)}async queryFeatureCount(a,b){return(await this.load()).source.queryFeatureCount(m.from(a)??this.createQuery(),b)}async queryExtent(a,b){return(await this.load()).source.queryExtent(m.from(a)??this.createQuery(),b)}serviceSupportsSpatialReference(a){return this.loaded&&V.serviceSupportsSpatialReference(this,a)}read(a,b){super.read(a,b);if(a){const {footprintLayer:g,dynamicGroupLayer:d}=a;g&&this.footprintLayer.read(g,b);d&&this.dynamicGroupLayer.read(d,b)}}async _fetchFirstValidLayerId(a){({data:a}=
await z(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:a}));if(Array.isArray(a?.layers))return a.layers.find(({type:b})=>this.supportedSourceTypes.has(b))?.id}async _createLayer(a){a=a.getAttribute(this.itemSourceField);if(!a)throw new n("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);a=JSON.parse(a);if("object"===typeof a&&null!=a&&"itemId"in a&&"portalUrl"in a){const {itemId:g,portalUrl:d}=
a,h=X.normalizeArcGISOnlineOrgDomain(d);var b=this.portalItem?.portal;const k=x.getDefault();a=!0;b&&p.hasSamePortal(d,b.url)||(p.hasSamePortal(d,k.url)?b=k:(b=B.getOrCreateMapValue(this._portals,h,()=>new x({url:h})),a=!1));b=await t.fromPortalItem(new W({id:g,portal:b}));a||await u(b);return b}return"object"===typeof a&&null!=a&&"url"in a?t.fromArcGISServerUrl({url:a.url}):new (await U.layerLookupMap.UnsupportedLayer())}_configureLayer(a,b){var g=b.getAttribute(this.itemNameField);g&&(a.title=g);
g=b.getAttribute(this.maxScaleField);null!=g&&"maxScale"in a&&(a.maxScale=g);b=b.getAttribute(this.minScaleField);null!=b&&"minScale"in a&&(a.minScale=b)}};e.__decorate([f.property({readOnly:!0})],c.prototype,"createQueryVersion",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"drawOrderField",void 0);e.__decorate([f.property({type:v,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:y}}})],c.prototype,"dynamicGroupLayer",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,
"editingEnabled",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"effectiveEditingEnabled",null);e.__decorate([f.property({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],c.prototype,"elevationInfo",void 0);e.__decorate([f.property({...q.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],c.prototype,"fields",void 0);e.__decorate([f.property(q.fieldsIndex)],c.prototype,"fieldsIndex",void 0);e.__decorate([f.property({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",
read:!1,write:!1}}}})],c.prototype,"floorInfo",void 0);e.__decorate([f.property({type:w,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:y}}})],c.prototype,"footprintLayer",void 0);e.__decorate([f.property(R.id)],c.prototype,"id",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"itemNameField",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"itemSourceField",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"itemTypeField",void 0);e.__decorate([f.property({readOnly:!0})],
c.prototype,"layers",void 0);e.__decorate([f.property({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"maxScaleField",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"minScaleField",void 0);e.__decorate([f.property({value:"CatalogLayer",type:["CatalogLayer"]})],c.prototype,"operationalLayerType",void 0);e.__decorate([f.property({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],
c.prototype,"orderBy",void 0);e.__decorate([f.property(q.outFields)],c.prototype,"outFields",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"parsedUrl",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"source",void 0);e.__decorate([f.property({json:{read:!1}})],c.prototype,"type",void 0);e.__decorate([f.property({type:String})],c.prototype,"typeIdField",void 0);e.__decorate([f.property({type:[S]})],c.prototype,"types",void 0);return c=e.__decorate([D.subclass("esri.layers.CatalogLayer")],
c)});