// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/sql ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/support/scaleUtils ./floorFilterUtils ./sublayerUtils".split(" "),function(c,e,l,m,g,u,v,w,n,p,k,q){const r={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",
maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};c.ExportImageParameters=class extends l{constructor(a){super(a);this.floors=null;this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const a=this.visibleSublayers.map(b=>{const f=k.getLayerFloorFilterClause(this.floors,b);return b.toExportImageJSON(f)});return a.length?JSON.stringify(a):null}get hasDynamicLayers(){return this.layer&&q.isExportDynamic(this.visibleSublayers,
this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(a){this._get("layer")!==a&&(this._set("layer",a),this.removeHandles("layer"),a&&this.addHandles([a.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),a.on("sublayer-update",b=>this.notifyChange(r[b.propertyName]))],"layer"))}get layers(){const a=this.visibleSublayers;return a?a.length?"show:"+a.map(b=>b.id).join(","):"show:-1":null}get layerDefs(){const a=!!this.floors?.length,b=this.visibleSublayers.filter(f=>null!=f.definitionExpression||
a&&null!=f.floorInfo);return b.length?JSON.stringify(b.reduce((f,h)=>{var d=k.getLayerFloorFilterClause(this.floors,h);d=m.sqlAnd(d,h.definitionExpression);null!=d&&(f[h.id]=d);return f},{})):null}get version(){this.commitProperty("layers");this.commitProperty("layerDefs");this.commitProperty("dynamicLayers");const a=this.layer;a&&(a.commitProperty("dpi"),a.commitProperty("imageFormat"),a.commitProperty("imageTransparency"),a.commitProperty("gdbVersion"));return(this._get("version")||0)+1}get visibleSublayers(){const a=
[];if(!this.layer)return a;var b=this.layer.sublayers;const f=this.scale,h=d=>{d.visible&&(0===f||p.isInScaleRange(f,d.minScale,d.maxScale))&&(d.sublayers?d.sublayers.forEach(h):a.unshift(d))};b&&b.forEach(h);b=this._get("visibleSublayers");return!b||b.length!==a.length||b.some((d,t)=>a[t]!==d)?a:b}toJSON(){var a=this.layer;a={dpi:a.dpi,format:a.imageFormat,transparent:a.imageTransparency,gdbVersion:a.gdbVersion||null};this.hasDynamicLayers&&this.dynamicLayers?a.dynamicLayers=this.dynamicLayers:a=
{...a,layers:this.layers,layerDefs:this.layerDefs};return a}};e.__decorate([g.property({readOnly:!0})],c.ExportImageParameters.prototype,"dynamicLayers",null);e.__decorate([g.property()],c.ExportImageParameters.prototype,"floors",void 0);e.__decorate([g.property({readOnly:!0})],c.ExportImageParameters.prototype,"hasDynamicLayers",null);e.__decorate([g.property()],c.ExportImageParameters.prototype,"layer",null);e.__decorate([g.property({readOnly:!0})],c.ExportImageParameters.prototype,"layers",null);
e.__decorate([g.property({readOnly:!0})],c.ExportImageParameters.prototype,"layerDefs",null);e.__decorate([g.property({type:Number})],c.ExportImageParameters.prototype,"scale",void 0);e.__decorate([g.property({readOnly:!0})],c.ExportImageParameters.prototype,"version",null);e.__decorate([g.property({readOnly:!0})],c.ExportImageParameters.prototype,"visibleSublayers",null);c.ExportImageParameters=e.__decorate([n.subclass("esri.layers.support.ExportImageParameters")],c.ExportImageParameters);Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});