/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e,{d as o}from"../core/Accessor.js";import{L as s}from"../chunks/Logger.js";import{watch as i,initial as r,on as n,whenOnce as p}from"../core/reactiveUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import m from"../support/actions/ActionButton.js";import u from"./Features.js";import c from"./Widget.js";import h from"./Popup/PopupViewModel.js";import{g as d}from"../chunks/globalCss.js";import{a as j}from"../chunks/widgetUtils.js";import{m as g}from"../chunks/messageBundle.js";import{v as b}from"../chunks/vmEvent.js";import{t as y}from"../chunks/jsxFactory.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/throttle.js";import"../chunks/geometryUtils2.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/scaleUtils.js";import"../chunks/actionUtils.js";import"./Feature.js";import"./Attachments.js";import"../chunks/unitFormatUtils.js";import"../chunks/ByteSizeUnit.js";import"../chunks/Cyclical.js";import"../chunks/quantityUtils.js";import"./Attachments/AttachmentsViewModel.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../chunks/featureUtils.js";import"../chunks/layerUtils2.js";import"../chunks/utils2.js";import"../chunks/basemapUtils.js";import"../Basemap.js";import"../chunks/loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"../chunks/writeUtils.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/legacyIcon.js";import"../chunks/domUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"./Feature/FeatureViewModel.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/executeQueryJSON.js";import"../chunks/utils8.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils9.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedGeometry.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"../layers/support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../chunks/OverrideHelper.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/utils7.js";import"../chunks/quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/layerContainerType.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"../chunks/formUtils.js";import"../layers/Layer.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/commonProperties2.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/featureLayerUtils.js";import"../chunks/featureQueryAll.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"../layers/support/Subtype.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"../layers/mixins/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../chunks/OrderByInfo.js";import"../layers/mixins/PortalLayer.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/interfaces2.js";import"../chunks/FeatureRelationshipViewModel.js";import"../chunks/featureFormUtils.js";import"../chunks/Heading.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/themeUtils.js";import"../chunks/uriUtils.js";import"../chunks/a11yUtils.js";import"../renderers/support/utils.js";import"../chunks/numberUtils.js";import"../chunks/utils11.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/colorRampUtils2.js";import"../chunks/utils14.js";import"../chunks/Spinner.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Features/FeaturesViewModel.js";import"../chunks/ReactiveSet.js";import"../chunks/LayerConstants.js";import"../symbols/support/symbolUtils.js";import"../chunks/mat2df32.js";import"../chunks/mat2d.js";import"../chunks/webStyleSymbolUtils.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"./support/GoTo.js";const k="esri-popup",f=`${k}--is-docked`,v={base:k,baseHidden:`${k}--hidden`,main:`${k}__main-container`,shadow:`${k}--shadow`,isDocked:f,isDockedTopLeft:`${f}-top-left`,isDockedTopCenter:`${f}-top-center`,isDockedTopRight:`${f}-top-right`,isDockedBottomLeft:`${f}-bottom-left`,isDockedBottomCenter:`${f}-bottom-center`,isDockedBottomRight:`${f}-bottom-right`,alignTopCenter:`${k}--aligned-top-center`,alignBottomCenter:`${k}--aligned-bottom-center`,alignTopLeft:`${k}--aligned-top-left`,alignBottomLeft:`${k}--aligned-bottom-left`,alignTopRight:`${k}--aligned-top-right`,alignBottomRight:`${k}--aligned-bottom-right`,pointer:`${k}__pointer`,pointerDirection:`${k}__pointer-direction`};let w=class extends e{constructor(){super(...arguments),this.actionBar=!0,this.closeButton=!0,this.collapseButton=!0,this.featureNavigation=!0,this.featureListLayerTitle=!0,this.heading=!0,this.spinner=!0}};t([l({type:Boolean,nonNullable:!0})],w.prototype,"actionBar",void 0),t([l({type:Boolean,nonNullable:!0})],w.prototype,"closeButton",void 0),t([l({type:Boolean,nonNullable:!0})],w.prototype,"collapseButton",void 0),t([l({type:Boolean,nonNullable:!0})],w.prototype,"featureNavigation",void 0),t([l({type:Boolean,nonNullable:!0})],w.prototype,"featureListLayerTitle",void 0),t([l({type:Boolean,nonNullable:!0})],w.prototype,"heading",void 0),t([l({type:Boolean,nonNullable:!0})],w.prototype,"spinner",void 0),w=t([a("esri.widgets.Popup.PopupVisibleElements")],w);const _=w,E={buttonEnabled:!0,position:"auto",breakpoint:{width:544}};let M=class extends c{constructor(t,e){super(t,e),this._dockAction=new m({id:"popup-dock-action"}),this._featuresWidget=new u({responsiveActionsEnabled:!0}),this._containerNode=null,this._mainContainerNode=null,this._pointerOffsetInPx=16,this.alignment="auto",this.dockEnabled=!1,this.headingLevel=2,this.messages=null,this.viewModel=new h,this.visibleElements=new _}initialize(){this.addHandles([i((()=>[this.viewModel?.view?.widthBreakpoint,this.dockEnabled]),(()=>this._handleDockIcon()),r),i((()=>[this.dockEnabled,this.messages?.undock,this.messages?.dock]),(()=>this._handleDockEnabled()),r),i((()=>this.dockOptions),(t=>{const{_dockAction:e}=this,o=this._featuresWidget.headerActions;o.remove(e),t.buttonEnabled&&o.add(e)}),r),i((()=>this.viewModel?.screenLocation),(()=>this._positionContainer())),i((()=>[this.viewModel?.active,this.dockEnabled]),(()=>this._toggleScreenLocationEnabled())),i((()=>[this.viewModel?.screenLocation,this.viewModel?.view?.padding,this.viewModel?.view?.size,this.viewModel?.active,this.viewModel?.location,this.alignment]),(()=>this.reposition())),i((()=>this.viewModel?.view?.size),((t,e)=>this._updateDockEnabledForViewSize(t,e))),i((()=>this.viewModel?.view),((t,e)=>this._viewChange(t,e))),i((()=>this.viewModel?.view?.ready),((t,e)=>this._viewReadyChange(t??!1,e??!1))),i((()=>this.viewModel),(()=>this._featuresWidget.viewModel=this.viewModel),r),i((()=>this._featureNavigationTop),(t=>this._featuresWidget.featureNavigationTop=t),r),i((()=>this.headingLevel),(t=>this._featuresWidget.headingLevel=t),r),i((()=>this.visibleElements.actionBar),(t=>this._featuresWidget.visibleElements.actionBar=!!t),r),i((()=>this.visibleElements.closeButton),(t=>this._featuresWidget.visibleElements.closeButton=!!t),r),i((()=>this.visibleElements.collapseButton),(t=>this._featuresWidget.visibleElements.collapseButton=!!t),r),i((()=>this.visibleElements.heading),(t=>this._featuresWidget.visibleElements.heading=!!t),r),i((()=>this.visibleElements.spinner),(t=>this._featuresWidget.visibleElements.spinner=!!t),r),i((()=>this.visibleElements.featureNavigation),(t=>this._featuresWidget.visibleElements.featureNavigation=!!t),r),i((()=>this.visibleElements.featureListLayerTitle),(t=>this._featuresWidget.visibleElements.featureListLayerTitle=!!t),r),n((()=>this._featuresWidget),"trigger-header-action",(t=>{t.action===this._dockAction&&(this.dockEnabled=!this.dockEnabled)}))])}normalizeCtorArgs(t){const e={...t};return null!=t?.visibleElements&&(e.visibleElements=new _(t.visibleElements),null!=t.collapseEnabled&&(e.visibleElements.collapseButton=t.collapseEnabled),null!=t.spinnerEnabled&&(e.visibleElements.spinner=t.spinnerEnabled)),e}destroy(){this._dockAction.destroy(),this._featuresWidget?.destroy()}get _featureNavigationTop(){const{currentAlignment:t,currentDockPosition:e}=this;return"bottom-left"===t||"bottom-center"===t||"bottom-right"===t||"top-left"===e||"top-center"===e||"top-right"===e}get actions(){return this.viewModel.actions}set actions(t){this.viewModel.actions=t}get active(){return this.viewModel.active}get autoCloseEnabled(){return this.viewModel.autoCloseEnabled}set autoCloseEnabled(t){this.viewModel.autoCloseEnabled=t}get defaultPopupTemplateEnabled(){return this.viewModel.defaultPopupTemplateEnabled}set defaultPopupTemplateEnabled(t){this.viewModel.defaultPopupTemplateEnabled=t}get content(){return this.viewModel.content}set content(t){this.viewModel.content=t}get collapsed(){return this._featuresWidget.collapsed}set collapsed(t){this._featuresWidget.collapsed=t}get collapseEnabled(){return o(s.getLogger(this),"collapseEnabled",{replacement:"PopupVisibleElements.collapseButton",version:"4.29"}),this.visibleElements.collapseButton}set collapseEnabled(t){o(s.getLogger(this),"collapseEnabled",{replacement:"PopupVisibleElements.collapseButton",version:"4.29"}),this.visibleElements.collapseButton=t}get currentAlignment(){return this._getCurrentAlignment()}get currentDockPosition(){return this._getCurrentDockPosition()}get dockOptions(){return this._get("dockOptions")||E}set dockOptions(t){const e={...E},o=this.viewModel?.view?.breakpoints,s={};o&&(s.width=o.xsmall,s.height=o.xsmall);const i={...e,...t},r={...e.breakpoint,...s},{breakpoint:n}=i;"object"==typeof n?i.breakpoint={...r,...n}:n&&(i.breakpoint=r),this._set("dockOptions",i),this._setCurrentDockPosition(),this.reposition()}get featureCount(){return this.viewModel.featureCount}get featureMenuOpen(){return this.viewModel.featureMenuOpen}set featureMenuOpen(t){this.viewModel.featureMenuOpen=t}get features(){return this.viewModel.features}set features(t){this.viewModel.features=t}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(t){this.viewModel.goToOverride=t}get highlightEnabled(){return this.viewModel.highlightEnabled}set highlightEnabled(t){this.viewModel.highlightEnabled=t}get icon(){return"popup"}set icon(t){this._overrideIfSome("icon",t)}get location(){return this.viewModel.location}set location(t){this.viewModel.location=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get promises(){return this.viewModel.promises}set promises(t){this.viewModel.promises=t}get selectedFeature(){return this.viewModel.selectedFeature}get selectedFeatureIndex(){return this.viewModel.selectedFeatureIndex}set selectedFeatureIndex(t){this.viewModel.selectedFeatureIndex=t}get selectedFeatureWidget(){return this._featuresWidget.selectedFeatureWidget}get spinnerEnabled(){return o(s.getLogger(this),"spinnerEnabled",{replacement:"PopupVisibleElements.spinner",version:"4.29"}),this.visibleElements.spinner}set spinnerEnabled(t){o(s.getLogger(this),"spinnerEnabled",{replacement:"PopupVisibleElements.spinner",version:"4.29"}),this.visibleElements.spinner=t}get title(){return this.viewModel.title}set title(t){this.viewModel.title=t}get updateLocationEnabled(){return this.viewModel.updateLocationEnabled}set updateLocationEnabled(t){this.viewModel.updateLocationEnabled=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}blur(){const{active:t}=this.viewModel;t||s.getLogger(this).warn("Popup can only be blurred when currently active."),this._featuresWidget.blur()}clear(){return this.viewModel.clear()}close(){this.visible=!1}fetchFeatures(t,e){return this.viewModel.fetchFeatures(t,e)}focus(){const{active:t}=this.viewModel;t||s.getLogger(this).warn("Popup can only be focused when currently active."),this.reposition(),requestAnimationFrame((()=>{this._featuresWidget.focus()}))}next(){return this.viewModel.next()}open(t){const e=!!t&&!!t.featureMenuOpen,o={collapsed:!!t&&!!t.collapsed,featureMenuOpen:e};this.set(o),this.viewModel.open(t),this._shouldFocus(t)}previous(){return this.viewModel.previous()}reposition(){this.renderNow(),this._positionContainer(),this._setCurrentAlignment()}triggerAction(t){return this.viewModel.triggerAction(t)}render(){const{dockEnabled:t,currentAlignment:e,currentDockPosition:o}=this,{active:s,screenLocation:i}=this.viewModel,r=s&&t,n=s&&!t,p=this.selectedFeature?.layer?.title,l=this.selectedFeature?.layer?.id,a={[v.alignTopCenter]:"top-center"===e,[v.alignBottomCenter]:"bottom-center"===e,[v.alignTopLeft]:"top-left"===e,[v.alignBottomLeft]:"bottom-left"===e,[v.alignTopRight]:"top-right"===e,[v.alignBottomRight]:"bottom-right"===e,[v.isDocked]:r,[v.shadow]:n,[v.isDockedTopLeft]:"top-left"===o,[v.isDockedTopCenter]:"top-center"===o,[v.isDockedTopRight]:"top-right"===o,[v.isDockedBottomLeft]:"bottom-left"===o,[v.isDockedBottomCenter]:"bottom-center"===o,[v.isDockedBottomRight]:"bottom-right"===o};return y("div",{afterCreate:this._positionContainer,afterUpdate:this._positionContainer,bind:this,class:this.classes(v.base,a,{[v.baseHidden]:!i&&!t}),"data-layer-id":l,"data-layer-title":p,role:"presentation"},s?[this._renderMainContainer(),this._renderPointer()]:null)}_renderPointer(){return this.dockEnabled?null:y("div",{class:v.pointer,key:"popup-pointer",role:"presentation"},y("div",{class:this.classes(v.pointerDirection,v.shadow)}))}_renderMainContainer(){const{dockEnabled:t}=this,e={[v.shadow]:t};return y("div",{afterCreate:this._setMainContainerNode,afterUpdate:this._setMainContainerNode,bind:this,class:this.classes(v.main,d.widget,e)},this._featuresWidget.render())}async _shouldFocus(t){t?.shouldFocus&&(await p((()=>!0===this.viewModel?.active)),this.focus())}_isOutsideView(t){const{popupHeight:e,popupWidth:o,screenLocation:s,side:i,view:r}=t;if(isNaN(o)||isNaN(e)||!r||!s)return!1;const n=r.padding;return"right"===i&&s.x+o/2>r.width-n.right||"left"===i&&s.x-o/2<n.left||"top"===i&&s.y-e<n.top||"bottom"===i&&s.y+e>r.height-n.bottom}_calculateAutoAlignment(t){if("auto"!==t)return t;const{_pointerOffsetInPx:e,_containerNode:o,_mainContainerNode:s,viewModel:i}=this,{screenLocation:r,view:n}=i;if(null==r||!n||!o)return"top-center";function p(t){return parseInt(t.replaceAll(/[^-\d.]/g,""),10)}const l=s?window.getComputedStyle(s,null):null,a=l?p(l.getPropertyValue("max-height")):0,m=l?p(l.getPropertyValue("height")):0,{height:u,width:c}=o.getBoundingClientRect(),h=c+e,d=Math.max(u,a,m)+e,j=this._isOutsideView({popupHeight:d,popupWidth:h,screenLocation:r,side:"right",view:n}),g=this._isOutsideView({popupHeight:d,popupWidth:h,screenLocation:r,side:"left",view:n}),b=this._isOutsideView({popupHeight:d,popupWidth:h,screenLocation:r,side:"top",view:n}),y=this._isOutsideView({popupHeight:d,popupWidth:h,screenLocation:r,side:"bottom",view:n});return g?b?"bottom-right":"top-right":j?b?"bottom-left":"top-left":b?y?"top-center":"bottom-center":"top-center"}_callCurrentAlignment(t){return"function"==typeof t?t.call(this):t}_getCurrentAlignment(){const{alignment:t,dockEnabled:e}=this;return e||!this.viewModel.active?null:this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(t)))}_setCurrentAlignment(){this._set("currentAlignment",this._getCurrentAlignment())}_setCurrentDockPosition(){this._set("currentDockPosition",this._getCurrentDockPosition())}_calculatePositionResult(t){const e=["left","right"];return j(this.container)&&e.reverse(),t?.replace(/leading/gi,e[0]).replaceAll(/trailing/gi,e[1])}_callDockPosition(t){return"function"==typeof t?t.call(this):t}_getDockPosition(){return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition(this.dockOptions?.position)))}_getCurrentDockPosition(){return this.dockEnabled&&this.viewModel.active?this._getDockPosition():null}_calculateAutoDockPosition(t){if("auto"!==t)return t;const e=this.viewModel?.view,o=j(this.container)?"top-left":"top-right";if(!e)return o;const s=e.padding||{left:0,right:0,top:0,bottom:0},i=e.width-s.left-s.right,{breakpoints:r}=e;return r&&i<=r.xsmall?"bottom-center":o}_getDockIcon(){const t=this._getDockPosition();if(this.dockEnabled)return"minimize";switch(t){case"top-left":case"bottom-left":return"dock-left";case"top-center":return"maximize";case"bottom-center":return"dock-bottom";default:return"dock-right"}}_handleDockIcon(){this._dockAction.icon=this._getDockIcon()}_handleDockEnabled(){this._dockAction.title=this.dockEnabled?this.messages?.undock:this.messages?.dock}_setMainContainerNode(t){this._mainContainerNode=t}_positionContainer(t=this._containerNode){if(t&&(this._containerNode=t),!this._containerNode)return;const{screenLocation:e}=this.viewModel,{width:o}=this._containerNode.getBoundingClientRect(),s=this._calculatePositionStyle(e,o);s&&Object.assign(this._containerNode.style,s)}_calculateFullWidth(t){const{currentAlignment:e,_pointerOffsetInPx:o}=this;return"top-left"===e||"bottom-left"===e||"top-right"===e||"bottom-right"===e?t+o:t}_calculateAlignmentPosition(t,e,o,s){const{currentAlignment:i,_pointerOffsetInPx:r}=this;if(!o)return;const{padding:n}=o,p=s/2,l=o.height-e,a=o.width-t;return"bottom-center"===i?{top:e+r-n.top,left:t-p-n.left}:"top-left"===i?{bottom:l+r-n.bottom,right:a+r-n.right}:"bottom-left"===i?{top:e+r-n.top,right:a+r-n.right}:"top-right"===i?{bottom:l+r-n.bottom,left:t+r-n.left}:"bottom-right"===i?{top:e+r-n.top,left:t+r-n.left}:"top-center"===i?{bottom:l+r-n.bottom,left:t-p-n.left}:void 0}_calculatePositionStyle(t,e){const{dockEnabled:o,view:s}=this;if(!s)return;if(o)return{left:"",top:"",right:"",bottom:""};if(null==t||!e)return;const i=this._calculateFullWidth(e),r=this._calculateAlignmentPosition(t.x,t.y,s,i);return r?{top:void 0!==r.top?`${r.top}px`:"auto",left:void 0!==r.left?`${r.left}px`:"auto",bottom:void 0!==r.bottom?`${r.bottom}px`:"auto",right:void 0!==r.right?`${r.right}px`:"auto"}:void 0}_viewChange(t,e){t&&e&&(this.close(),this.clear())}_viewReadyChange(t,e){t?this._wireUpView():e&&(this.close(),this.clear())}_wireUpView(){this._setDockEnabledForViewSize(this.dockOptions)}_dockingThresholdCrossed(t,e,o){const[s,i]=t,[r,n]=e,{width:p=0,height:l=0}=o??{};return s<=p&&r>p||s>p&&r<=p||i<=l&&n>l||i>l&&n<=l}_updateDockEnabledForViewSize(t,e){if(!t||!e)return;const o=this.viewModel?.view?.padding||{left:0,right:0,top:0,bottom:0},s=o.left+o.right,i=o.top+o.bottom,r=[],n=[];r[0]=t[0]-s,r[1]=t[1]-i,n[0]=e[0]-s,n[1]=e[1]-i;const{dockOptions:p}=this,l=p.breakpoint;this._dockingThresholdCrossed(r,n,l)&&this._setDockEnabledForViewSize(p),this._setCurrentDockPosition()}_toggleScreenLocationEnabled(){const{dockEnabled:t,viewModel:e}=this;if(!e)return;const o=e.active&&!t;e.screenLocationEnabled=o}_shouldDockAtCurrentViewSize(t){const e=t.breakpoint,o=this.viewModel?.view?.ui;if(!o)return!1;const{width:s,height:i}=o;if(isNaN(s)||isNaN(i))return!1;if(!e)return!1;const r=e.hasOwnProperty("width")&&s<=(e.width??0),n=e.hasOwnProperty("height")&&i<=(e.height??0);return r||n}_setDockEnabledForViewSize(t){t.breakpoint&&(this.dockEnabled=this._shouldDockAtCurrentViewSize(t))}};t([l({readOnly:!0})],M.prototype,"_featureNavigationTop",null),t([l()],M.prototype,"actions",null),t([l({readOnly:!0})],M.prototype,"active",null),t([l()],M.prototype,"alignment",void 0),t([l()],M.prototype,"autoCloseEnabled",null),t([l()],M.prototype,"defaultPopupTemplateEnabled",null),t([l()],M.prototype,"content",null),t([l()],M.prototype,"collapsed",null),t([l()],M.prototype,"collapseEnabled",null),t([l({readOnly:!0})],M.prototype,"currentAlignment",null),t([l({readOnly:!0})],M.prototype,"currentDockPosition",null),t([l()],M.prototype,"dockOptions",null),t([l()],M.prototype,"dockEnabled",void 0),t([l({readOnly:!0})],M.prototype,"featureCount",null),t([l()],M.prototype,"featureMenuOpen",null),t([l()],M.prototype,"features",null),t([l()],M.prototype,"goToOverride",null),t([l()],M.prototype,"headingLevel",void 0),t([l()],M.prototype,"highlightEnabled",null),t([l()],M.prototype,"icon",null),t([l()],M.prototype,"location",null),t([l()],M.prototype,"label",null),t([l(),g("esri/widgets/Popup/t9n/Popup")],M.prototype,"messages",void 0),t([l()],M.prototype,"promises",null),t([l({readOnly:!0})],M.prototype,"selectedFeature",null),t([l()],M.prototype,"selectedFeatureIndex",null),t([l({readOnly:!0})],M.prototype,"selectedFeatureWidget",null),t([l()],M.prototype,"spinnerEnabled",null),t([l()],M.prototype,"title",null),t([l()],M.prototype,"updateLocationEnabled",null),t([l()],M.prototype,"view",null),t([l({type:h}),b(["triggerAction","trigger-action"])],M.prototype,"viewModel",void 0),t([l()],M.prototype,"visible",null),t([l({type:_,nonNullable:!0})],M.prototype,"visibleElements",void 0),M=t([a("esri.widgets.Popup")],M);const C=M;export{C as default};