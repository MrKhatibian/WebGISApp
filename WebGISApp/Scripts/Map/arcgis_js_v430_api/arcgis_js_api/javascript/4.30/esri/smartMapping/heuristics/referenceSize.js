// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../core/Error ../../core/screenUtils ../../geometry/support/extentUtils ../statistics/spatialStatistics ../support/binningUtils ../support/adapters/support/layerUtils".split(" "),function(g,k,l,p,q,h){async function r(a){const {view:b}=a;if(!(a&&b&&a.layer))throw new g("reference-size:missing-parameters","'view' and 'layer' parameters are required");a.forBinning&&q.verifyBinningParams(a,"reference-size");const {layer:d,...e}=a;var c=a.forBinning?h.binningCapableLayerTypes:h.featureCapableLayerTypes;
const f=h.createLayerAdapter(d,c,a.forBinning);if(!f)throw new g("reference-size:invalid-parameters","'reference-size' must be one of these types: "+h.getLayerTypeLabels(c).join(", "));c={layerAdapter:f,...e,view:b};await b.when();await f.load(null!=c.signal?{signal:c.signal}:null);if(!a.forBinning&&"polygon"!==f.geometryType)throw new g("reference-size:not-supported",`reference-size is not supported for geometryType: ${f.geometryType}`);return c}function m(a){let b=0;for(const d of a)b+=d;return b/
a.length}function n(a,b){const d=b??m(a);b=a.reduce((e,c)=>e+(c-d)**2,0);return Math.sqrt(b/a.length)}async function t(a,b){b=await p({features:a,geometryType:b});if(!(b&&"avgSize"in b&&b.avgSize))throw new g("reference-size:insufficient-info","average polygon size is invalid");b=b.avgSize;var d=[],e=[];for(var c of a){var f=l.getGeometryExtent(c.geometry);f?(a=Math.abs(f.xmax-f.xmin),f=Math.abs(f.ymax-f.ymin),d.push(a/f),e.push(Math.sqrt(a*f))):(d.push(0),e.push(0))}c=Number(m(d).toFixed(2));d=Number(n(d,
c).toFixed(2));e=n(e);e=Number((e/b).toFixed(2));return{isGrid:.1>=d&&.75<=c&&1.25>=c&&.1>=e,avgSize:b}}async function u(a,b){const {view:d}=b;if(b.forBinning){a=l.getGeometryExtent(a[Math.floor(a.length/2)].geometry);if(!a)throw new g("reference-size:insufficient-info","Extent is invalid");return{size:k.px2pt(Math.min(Math.abs(a.xmax-a.xmin),Math.abs(a.ymax-a.ymin))/d.resolution),isGrid:!0}}const {isGrid:e,avgSize:c}=await t(a,b.layerAdapter.geometryType);return{size:k.px2pt((e?.9*c:.75*c)/d.resolution),
isGrid:e}}return async function(a){a=await r(a);const b=await a.layerAdapter.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...a},"json");if(!b?.length)throw new g("reference-size:insufficient-info","No features are available to calculate statistics");return u(b,a)}});