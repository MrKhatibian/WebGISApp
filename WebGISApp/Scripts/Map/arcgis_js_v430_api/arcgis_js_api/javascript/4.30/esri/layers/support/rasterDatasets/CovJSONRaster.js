// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Error ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./BaseRaster ./covJSONParser ./InMemoryRaster ../rasterFunctions/stretchUtils ../../../rest/support/FeatureSet".split(" "),function(h,e,n,f,y,z,q,r,k,t,u,v){f=class extends r{constructor(){super(...arguments);this.datasetFormat="CovJSON"}async open(a){await this.init();const {extent:d,
pixelBlocks:c,multidimensionalInfo:b,attributeTable:g,bandNames:l}=await this._fetchData(a),{statistics:m,histograms:w}=u.computeStatisticsHistograms(c[0]);a=l?.map(x=>({BandName:x}));a={DataType:g?"Thematic":b?"Scientific":"Generic",BandProperties:a};a=new t({source:{extent:d,pixelBlocks:c,attributeTable:g?v.fromJSON(g):null,multidimensionalInfo:b,statistics:m,histograms:w,keyProperties:a,isPseudoSpatialReference:!1}});await a.open();this._inMemoryRaster=a;const p=this.source?"":this.url.slice(this.url.lastIndexOf("/")+
1);this._set("datasetName",p.slice(0,p.indexOf(".")));this._set("rasterInfo",a.rasterInfo)}fetchRawTile(a,d,c,b={}){return this._inMemoryRaster.fetchRawTile(a,d,c,b)}async _fetchData(a){a=this.source??(await this.request(this.url,{signal:a?.signal})).data;if("coverage"!==a.type?.toLowerCase()||"grid"!==a.domain?.domainType?.toLowerCase())throw new e("imagery-tile-layer:open-coverage-json","Only coverage with Grid domain type is supported");if(!a.ranges)throw new e("imagery-tile-layer:open-coverage-json",
"Missing ranges in the grid coverage data");if(!a.domain.referencing?.length)throw new e("imagery-tile-layer:open-coverage-json","Missing domain referencing in the grid coverage data");const d=Object.values(a.ranges);for(let c=0;c<d.length;c++){const {axisNames:b,shape:g,type:l,values:m}=d[c];if(!("ndarray"===l.toLowerCase()&&m?.length&&b?.length&&g?.length))throw new e("imagery-tile-layer:open-coverage-json","Only ranges with valid NdArray, axisNames, shape, and inline values are supported");if(!k.isXAxis(b[b.length-
1])||!k.isYAxis(b[b.length-2]))throw new e("imagery-tile-layer:open-coverage-json","Only row-major ordered pixel values are supported. X axis must be the last axis.");}return k.parseGridCoverage(a)}};h.__decorate([n.property({type:String,json:{write:!0}})],f.prototype,"datasetFormat",void 0);h.__decorate([n.property({constructOnly:!0})],f.prototype,"source",void 0);return f=h.__decorate([q.subclass("esri.layers.support.rasterDatasets.CovJSONRaster")],f)});