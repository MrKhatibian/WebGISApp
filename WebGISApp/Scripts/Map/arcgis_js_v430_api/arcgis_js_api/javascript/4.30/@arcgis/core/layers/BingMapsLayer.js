/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import t from"../request.js";import s from"../core/Error.js";import{J as r}from"../chunks/jsonMap.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import a from"../geometry/SpatialReference.js";import l from"./BaseTileLayer.js";import{BlendLayer as p}from"./mixins/BlendLayer.js";import{OperationalLayer as m}from"./mixins/OperationalLayer.js";import u from"./support/LOD.js";import c from"./support/TileInfo.js";import h from"../geometry/Point.js";import"../chunks/ensureType.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../config.js";import"../chunks/unitUtils.js";import"../chunks/assets.js";import"../core/urlUtils.js";import"../kernel.js";import"../chunks/writer.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./Layer.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../core/Evented.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"./mixins/RefreshableLayer.js";import"../chunks/layerContainerType.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"./mixins/ScaleRangeLayer.js";import"../chunks/imageBitmapUtils.js";import"../chunks/TileKey.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/utils3.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/commonProperties2.js";import"../chunks/persistableUrlUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";const g=new r({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let j=class extends(p(m(o(l)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new c({size:[256,256],dpi:96,origin:new h({x:-20037508.342787,y:20037508.342787,spatialReference:a.WebMercator}),spatialReference:a.WebMercator,lods:[new u({level:1,resolution:78271.5169639999,scale:295828763.795777}),new u({level:2,resolution:39135.7584820001,scale:147914381.897889}),new u({level:3,resolution:19567.8792409999,scale:73957190.948944}),new u({level:4,resolution:9783.93962049996,scale:36978595.474472}),new u({level:5,resolution:4891.96981024998,scale:18489297.737236}),new u({level:6,resolution:2445.98490512499,scale:9244648.868618}),new u({level:7,resolution:1222.99245256249,scale:4622324.434309}),new u({level:8,resolution:611.49622628138,scale:2311162.217155}),new u({level:9,resolution:305.748113140558,scale:1155581.108577}),new u({level:10,resolution:152.874056570411,scale:577790.554289}),new u({level:11,resolution:76.4370282850732,scale:288895.277144}),new u({level:12,resolution:38.2185141425366,scale:144447.638572}),new u({level:13,resolution:19.1092570712683,scale:72223.819286}),new u({level:14,resolution:9.55462853563415,scale:36111.909643}),new u({level:15,resolution:4.77731426794937,scale:18055.954822}),new u({level:16,resolution:2.38865713397468,scale:9027.977411}),new u({level:17,resolution:1.19432856685505,scale:4513.988705}),new u({level:18,resolution:.597164283559817,scale:2256.994353}),new u({level:19,resolution:.298582141647617,scale:1128.497176}),new u({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return g.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,s){if(!this.loaded||null==this.bingMetadata)return null;const r=this.bingMetadata.resourceSets[0].resources[0],o=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],i=this._getQuadKey(e,t,s);return r.imageUrl.replace("{subdomain}",o).replace("{quadkey}",i)}async fetchAttributionData(){return this.load().then((()=>null==this.bingMetadata?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return t(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new s("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new s("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new s("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new s("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return t(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new s("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new s("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,s){let r="";for(let o=e;o>0;o--){let e=0;const i=1<<o-1;s&i&&(e+=1),t&i&&(e+=2),r+=e.toString()}return r}};e([i({json:{read:!1,write:!1},value:null})],j.prototype,"bingMetadata",null),e([i({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],j.prototype,"type",void 0),e([i({type:c})],j.prototype,"tileInfo",void 0),e([i({type:String,readOnly:!0,json:{read:!1,write:!1}})],j.prototype,"copyright",null),e([i({type:String,json:{write:!1,read:!1}})],j.prototype,"key",void 0),e([i({type:g.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:g.read}}})],j.prototype,"style",void 0),e([i({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],j.prototype,"operationalLayerType",null),e([i({type:String,json:{write:!1,read:!1}})],j.prototype,"culture",void 0),e([i({type:String,json:{write:!1,read:!1}})],j.prototype,"region",void 0),e([i({type:String,json:{write:!0,read:!0}})],j.prototype,"portalUrl",void 0),e([i({type:Boolean,json:{write:!1,read:!1}})],j.prototype,"hasAttributionData",void 0),e([i({type:String,readOnly:!0})],j.prototype,"bingLogo",null),j=e([n("esri.layers.BingMapsLayer")],j);const d=j;export{d as default};