/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{d as t}from"../core/Accessor.js";import{L as s}from"../chunks/Logger.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import i,{l as p}from"./Widget.js";import l from"./Locate/LocateViewModel.js";import{g as n}from"../chunks/globalCss.js";import"../chunks/widgetUtils.js";import{m}from"../chunks/messageBundle.js";import{v as a}from"../chunks/vmEvent.js";import{t as c}from"../chunks/jsxFactory.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/ensureType.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/actions.js";import"../chunks/legacyIcon.js";import"./support/GeolocationPositioning.js";import"../Graphic.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/geolocationUtils.js";import"../chunks/project.js";import"../chunks/utils8.js";import"../chunks/utils9.js";import"../rest/support/ProjectParameters.js";import"./support/GoTo.js";let u=class extends i{constructor(o,t){super(o,t),this.messages=null,this.messagesCommon=null,this.viewModel=new l,this._locate=()=>{const{viewModel:o}=this;"locating"===o.state?o.cancelLocate():o.locate().catch((()=>{}))}}loadDependencies(){return p({button:()=>import("../chunks/calcite-button.js"),loader:()=>import("../chunks/calcite-loader.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(o){this.viewModel.geolocationOptions=o}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(o){this.viewModel.goToLocationEnabled=o}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(o){this.viewModel.goToOverride=o}get graphic(){return this.viewModel.graphic}set graphic(o){this.viewModel.graphic=o}get icon(){return"gps-off"}set icon(o){this._overrideIfSome("icon",o)}get label(){return this.messages?.widgetLabel??""}set label(o){this._overrideIfSome("label",o)}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(o){this.viewModel.popupEnabled=o}get rotationEnabled(){return t(s.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0}),this.viewModel.rotationEnabled}set rotationEnabled(o){t(s.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0}),this.viewModel.rotationEnabled=o}get scale(){return this.viewModel.scale}set scale(o){this.viewModel.scale=o}get view(){return this.viewModel.view}set view(o){this.viewModel.view=o}cancelLocate(){this.viewModel.cancelLocate()}locate(){return this.viewModel.locate()}render(){const{viewModel:o,icon:t}=this,{state:s}=o,e="locating"===s,r=e?this.messagesCommon.cancel:this.messages.title,i="feature-unsupported"===s,p=this._localizeError(this.viewModel?.error);return c("div",{class:this.classes("esri-locate",n.widget)},!i&&c("calcite-button",{class:n.widgetButton,disabled:"disabled"===s,iconStart:e?void 0:t,kind:"neutral",label:r,onclick:this._locate,title:r},e?c("calcite-loader",{inline:!0,label:""}):null),p?c("calcite-tooltip",{open:!0,overlayPositioning:"fixed",referenceElement:this.container},p):null)}_localizeError(o){return o instanceof GeolocationPositionError?o.code===GeolocationPositionError.PERMISSION_DENIED?this.messages?.permissionError:o.code===GeolocationPositionError.TIMEOUT?this.messages?.timeoutError:this.messages?.positionUnavailable:o instanceof Error?o.message:void 0}};o([e()],u.prototype,"geolocationOptions",null),o([e()],u.prototype,"goToLocationEnabled",null),o([e()],u.prototype,"goToOverride",null),o([e()],u.prototype,"graphic",null),o([e()],u.prototype,"icon",null),o([e()],u.prototype,"label",null),o([e(),m("esri/widgets/Locate/t9n/Locate")],u.prototype,"messages",void 0),o([e(),m("esri/t9n/common")],u.prototype,"messagesCommon",void 0),o([e()],u.prototype,"popupEnabled",null),o([e()],u.prototype,"rotationEnabled",null),o([e()],u.prototype,"scale",null),o([e()],u.prototype,"view",null),o([e({type:l}),a(["locate","locate-error"])],u.prototype,"viewModel",void 0),u=o([r("esri.widgets.Locate")],u);const j=u;export{j as default};