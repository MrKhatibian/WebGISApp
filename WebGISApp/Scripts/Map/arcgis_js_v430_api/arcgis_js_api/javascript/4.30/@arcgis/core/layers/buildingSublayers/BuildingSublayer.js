/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{IdentifiableMixin as s}from"../../core/Identifiable.js";import{a as o}from"../../chunks/MultiOriginJSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{I as e}from"../../chunks/ensureType.js";import"../../core/lang.js";import{r as i}from"../../chunks/reader.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{r as n}from"../../chunks/commonProperties2.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/JSONSupport.js";import"../../chunks/layerContainerType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/ElevationInfo.js";import"../support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/opacityUtils.js";let m=class extends(s(o)){constructor(t){super(t),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(t,s){return"string"==typeof s.alias?s.alias:"string"==typeof s.name?s.name:""}readIdOnlyOnce(t){return-1!==this.id?this.id:"number"==typeof t?t:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],m.prototype,"title",void 0),t([i("service","title",["alias","name"])],m.prototype,"readTitle",null),t([r()],m.prototype,"layer",void 0),t([r({type:e,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"id",void 0),t([i("service","id")],m.prototype,"readIdOnlyOnce",null),t([r(n(String))],m.prototype,"modelName",void 0),t([r(n(Boolean))],m.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],m.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],m.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],m.prototype,"opacity",void 0),m=t([p("esri.layers.buildingSublayers.BuildingSublayer")],m);const c=m;export{c as default};