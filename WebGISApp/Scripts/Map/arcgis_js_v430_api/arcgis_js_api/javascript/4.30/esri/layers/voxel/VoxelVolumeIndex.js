// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,g,h,k,f){var d;a=d=class extends a.JSONSupport{constructor(){super(...arguments);this.apronWidth=1;this.brickSize=[32,32,32];this.maxLodLevel=0;this.nodeSize=[4,4,4]}isValid(){const e=new d;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&this.brickSize&&
this.nodeSize&&Array.isArray(this.brickSize)&&Array.isArray(this.nodeSize)&&3===this.brickSize.length&&3===this.nodeSize.length&&32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]?!0:!1}};b.__decorate([c.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"apronWidth",void 0);b.__decorate([c.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"brickSize",void 0);
b.__decorate([c.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"maxLodLevel",void 0);b.__decorate([c.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"nodeSize",void 0);return a=d=b.__decorate([f.subclass("esri.layers.voxel.VoxelVolumeIndex")],a)});