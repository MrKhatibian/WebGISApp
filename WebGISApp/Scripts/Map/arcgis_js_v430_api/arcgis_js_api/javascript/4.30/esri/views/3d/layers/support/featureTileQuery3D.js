// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/SetUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../layers/graphics/dehydratedFeatures ../../../../rest/query/operations/query ../../support/PBFDecoder".split(" "),function(r,d,l,w,t,x,e,A,B,C,m,u,v,y){let f=class extends l{constructor(a){super(a)}get implicitFields(){if(!this.layer.outFields?.includes("*"))return new Set;
const a=new Set(this.layerView.requiredFields),c=new Set(this.layerView.availableFields);return x.difference(c,a)}get queryFeaturesDehydrated(){const {layer:a}=this;var c=a.capabilities;c=c&&c.query;const b=a.parsedUrl;if(c&&c.supportsFormatPBF){null==this._decoder&&(this._decoder=new y.PBFDecoder(this.controller));const p={sourceSpatialReference:a.spatialReference?.toJSON()??null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:1024};return(q,g)=>v.runQuery(b,
q,"pbf",this._createRequestOptions(g)).then(z=>{t.throwIfAborted(g);return null!=this._decoder?this._decoder.invoke({buffer:z.data,options:p},g.signal):Promise.reject(t.createAbortError())})}return(p,q)=>v.executeQuery(b,p,a.spatialReference,this._createRequestOptions(q)).then(g=>u.fromFeatureSetJSON(g.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:1024}))}queryFeatureCount(a,c){return this.layer.queryFeatureCount(a,c)}destroy(){this._decoder=w.destroyMaybe(this._decoder)}_createRequestOptions(a){return{...a,
query:{...this.layer.customParameters,token:this.layer.apiKey,...a?.query}}}};d.__decorate([e.property({constructOnly:!0})],f.prototype,"layer",void 0);d.__decorate([e.property({constructOnly:!0})],f.prototype,"layerView",void 0);d.__decorate([e.property({constructOnly:!0})],f.prototype,"controller",void 0);d.__decorate([e.property({readOnly:!0})],f.prototype,"implicitFields",null);d.__decorate([e.property({readOnly:!0})],f.prototype,"queryFeaturesDehydrated",null);f=d.__decorate([m.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],
f);let h=class extends l{constructor(a){super(a)}queryFeaturesDehydrated(a,c){return this.layer.queryFeatures(a,c)}queryFeatureCount(a,c){return this.layer.queryFeatureCount(a,c)}};d.__decorate([e.property({constructOnly:!0})],h.prototype,"layer",void 0);d.__decorate([e.property({readOnly:!0})],h.prototype,"queryFeaturesDehydrated",null);h=d.__decorate([m.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],h);let n=class extends l{constructor(a){super(a)}queryFeaturesDehydrated(a,
c){return this.layer.queryFeatures(a,c)}};d.__decorate([e.property({constructOnly:!0})],n.prototype,"layer",void 0);n=d.__decorate([m.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileOGCServiceQuery3D")],n);let k=class extends l{constructor(a){super(a)}queryFeaturesDehydrated(a,c){return this.source.queryFeaturesJSON(a,c).then(u.fromFeatureSetJSON,b=>{if(b&&"query-features-json:unsupported"===b.name)return this.layer.queryFeatures(a,c);throw b;})}queryFeatureCount(a,c){return this.layer.queryFeatureCount(a,
c)}};d.__decorate([e.property({constructOnly:!0})],k.prototype,"layer",void 0);d.__decorate([e.property({constructOnly:!0})],k.prototype,"source",void 0);k=d.__decorate([m.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],k);r.createFeatureTileQuery3D=function(a,c){const {layer:b}=a;return"feature"===b.type&&"feature-layer"===b.source.type||"catalog-footprint"===b.type?"infoFor3D"in b&&null!=b.infoFor3D?new h({layer:b}):new f({layer:b,layerView:a,controller:c}):
"feature"===b.type&&"memory"===b.source.type||"csv"===b.type||"geojson"===b.type||"oriented-imagery"===b.type||"wfs"===b.type?new k({layer:b,source:b.source}):"ogc-feature"===b.type?new n({layer:b}):null};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});