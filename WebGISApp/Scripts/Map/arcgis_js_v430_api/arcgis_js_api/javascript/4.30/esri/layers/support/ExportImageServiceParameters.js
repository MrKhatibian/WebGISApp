// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./imageryRendererUtils ./MosaicRule ./rasterEnums ./RasterFunction".split(" "),function(c,d,p,e,t,u,v,q,l,g,r,m,n){c.ExportImageServiceParameters=class extends p.JSONSupport{constructor(){super(...arguments);this.layer=null;this.pixelType=this.compression=
void 0;this.lercVersion=2}get adjustAspectRatio(){return this.layer.adjustAspectRatio}writeAdjustAspectRatio(a,b,f){10.3>this.layer.version||(b[f]=a)}get bandIds(){return this.layer.bandIds}get compressionQuality(){return this.layer.compressionQuality}writeCompressionQuality(a,b,f){this.format&&this.format.toLowerCase().includes("jpg")&&null!=a&&(b[f]=a)}get compressionTolerance(){return this.layer.compressionTolerance}writeCompressionTolerance(a,b,f){"lerc"===this.format&&null!=a&&(b[f]=a)}get format(){return"vector-field"===
this.layer.renderer?.type?"lerc":this.layer.format}get interpolation(){return this.layer.interpolation}get noData(){return this.layer.noData}get noDataInterpretation(){return this.layer.noDataInterpretation}writeLercVersion(a,b,f){"lerc"===this.format&&10.5<=this.layer.version&&(b[f]=a)}get version(){const a=this.layer;a.commitProperty("bandIds");a.commitProperty("format");a.commitProperty("compressionQuality");a.commitProperty("compressionTolerance");a.commitProperty("interpolation");a.commitProperty("noData");
a.commitProperty("noDataInterpretation");a.commitProperty("mosaicRule");a.commitProperty("rasterFunction");a.commitProperty("adjustAspectRatio");a.commitProperty("pixelFilter");a.commitProperty("definitionExpression");a.commitProperty("multidimensionalSubset");return(this._get("version")||0)+1}set version(a){this._set("version",a)}get mosaicRule(){var a=this.layer;let b=a.mosaicRule;a=a.definitionExpression;b?a&&a!==b.where&&(b=b.clone(),b.where=a):a&&(b=new r({where:a}));return b}get rasterFunction(){const a=
this.layer;var {rasterFunction:b}=a;const f=a.pixelFilter,k=!a.format||a.format.includes("jpg")||a.format.includes("png");b=this._addResampleRasterFunction(b);var h=a.multidimensionalSubset?.areaOfInterest;h&&(h=new n({functionName:"Clip",functionArguments:{ClippingGeometry:h.toJSON(),ClippingType:1}}),b=g.combineRenderingRules(h,b));k&&!f&&"vector-field"!==a.renderer?.type&&(b=this.combineRendererWithRenderingRule(b));return b}combineRendererWithRenderingRule(a){const b=this.layer,{rasterInfo:f,
renderer:k}=b;a=a||b.rasterFunction;return k&&g.isSupportedRendererType(k)?g.combineRenderingRules(g.convertRendererToRenderingRule(k,{rasterAttributeTable:f.attributeTable,pixelType:f.pixelType,dataType:f.dataType,bandNames:f.bandInfos.map(({name:h})=>h),convertColorRampToColormap:10.6>b.version,convertToRFT:!!a?.rasterFunctionDefinition,bandCount:f.bandCount}),a):a}_addResampleRasterFunction(a){if("vector-field"!==this.layer.renderer?.type||"Resample"===a?.functionName)return a;let b=new n({functionName:"Resample",
functionArguments:{ResamplingType:"esriImageServiceDataTypeVector-UV"===this.layer.serviceDataType?7:10,InputCellSize:this.layer.serviceRasterInfo.pixelSize}});b=a?.rasterFunctionDefinition?new n({rasterFunctionDefinition:g.convertRenderingRuleToRFT(b)}):b;return g.combineRenderingRules(b,a)}};d.__decorate([e.property()],c.ExportImageServiceParameters.prototype,"layer",void 0);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"adjustAspectRatio",null);d.__decorate([l.writer("adjustAspectRatio")],
c.ExportImageServiceParameters.prototype,"writeAdjustAspectRatio",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"bandIds",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"compression",void 0);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"compressionQuality",null);d.__decorate([l.writer("compressionQuality")],c.ExportImageServiceParameters.prototype,"writeCompressionQuality",
null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"compressionTolerance",null);d.__decorate([l.writer("compressionTolerance")],c.ExportImageServiceParameters.prototype,"writeCompressionTolerance",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"format",null);d.__decorate([e.property({type:String,json:{read:{reader:m.interpolationKebab.read},write:{writer:m.interpolationKebab.write}}})],c.ExportImageServiceParameters.prototype,
"interpolation",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"noData",null);d.__decorate([e.property({type:String,json:{read:{reader:m.noDataInterpretationKebab.read},write:{writer:m.noDataInterpretationKebab.write}}})],c.ExportImageServiceParameters.prototype,"noDataInterpretation",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"pixelType",void 0);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,
"lercVersion",void 0);d.__decorate([l.writer("lercVersion")],c.ExportImageServiceParameters.prototype,"writeLercVersion",null);d.__decorate([e.property({type:Number})],c.ExportImageServiceParameters.prototype,"version",null);d.__decorate([e.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"mosaicRule",null);d.__decorate([e.property({json:{write:!0,name:"renderingRule"}})],c.ExportImageServiceParameters.prototype,"rasterFunction",null);c.ExportImageServiceParameters=d.__decorate([q.subclass("esri.layers.support.ExportImageServiceParameters")],
c.ExportImageServiceParameters);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});