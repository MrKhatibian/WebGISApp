/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../intl.js";import t from"../core/Collection.js";import{L as s}from"../chunks/Logger.js";import{watch as o,when as i}from"../core/reactiveUtils.js";import{t as r}from"../chunks/throttle.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{g as a}from"../chunks/geometryUtils2.js";import{s as p,a as u}from"../chunks/actionUtils.js";import c,{F as m,c as d}from"./Feature.js";import{S as h}from"../chunks/Spinner.js";import j,{l as y}from"./Widget.js";import"../chunks/widgetUtils.js";import{m as v}from"../chunks/messageBundle.js";import{t as f,a as g}from"../chunks/jsxFactory.js";import b from"./Features/FeaturesViewModel.js";import w from"../core/Accessor.js";import{A as _}from"../chunks/actions.js";import{g as k}from"../chunks/globalCss.js";import{H as M}from"../chunks/Heading.js";import{v as F}from"../chunks/vmEvent.js";import{s as I}from"../chunks/substitute.js";import{f as C}from"../chunks/number.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../config.js";import"../chunks/locale.js";import"../chunks/handleUtils.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../chunks/maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/utils.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/ensureType.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/assets.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/scaleUtils.js";import"./Attachments.js";import"../chunks/unitFormatUtils.js";import"../chunks/ByteSizeUnit.js";import"../chunks/Cyclical.js";import"../chunks/quantityUtils.js";import"./Attachments/AttachmentsViewModel.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../chunks/featureUtils.js";import"../chunks/layerUtils2.js";import"../chunks/utils2.js";import"../chunks/basemapUtils.js";import"../Basemap.js";import"../chunks/loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"../chunks/writeUtils.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/legacyIcon.js";import"../chunks/domUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"./Feature/FeatureViewModel.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/executeQueryJSON.js";import"../chunks/utils8.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils9.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedGeometry.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"../layers/support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../chunks/OverrideHelper.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/utils7.js";import"../chunks/quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/layerContainerType.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"../chunks/formUtils.js";import"../layers/Layer.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/commonProperties2.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/featureLayerUtils.js";import"../chunks/featureQueryAll.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"../layers/support/Subtype.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"../layers/mixins/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../chunks/OrderByInfo.js";import"../layers/mixins/PortalLayer.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/interfaces2.js";import"../chunks/FeatureRelationshipViewModel.js";import"../chunks/featureFormUtils.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/themeUtils.js";import"../chunks/uriUtils.js";import"../chunks/a11yUtils.js";import"../renderers/support/utils.js";import"../chunks/numberUtils.js";import"../chunks/utils11.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/colorRampUtils2.js";import"../chunks/utils14.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"../chunks/ReactiveSet.js";import"../chunks/LayerConstants.js";import"../symbols/support/symbolUtils.js";import"../chunks/mat2df32.js";import"../chunks/mat2d.js";import"../chunks/webStyleSymbolUtils.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/layerViewUtils.js";import"./support/GoTo.js";const S="esri-features",R={icon:`${S}__icon`,actionImage:`${S}__action-image`,base:S,container:`${S}__container`,contentContainer:`${S}__content-container`,contentFeature:`${S}__content-feature`,flowItemCollapsed:`${S}__flow-item--collapsed`,header:`${S}__header`,footer:`${S}__footer`,featureMenuObserver:`${S}__feature-menu-observer`,actionExit:`${S}__action--exit`,loader:`${S}__loader`,featuresHeading:`${S}__heading`,paginationActionBar:`${S}__pagination-action-bar`,paginationPrevious:`${S}__pagination-previous`,paginationNext:`${S}__pagination-next`};let x=class extends j{constructor(e,t){super(e,t),this.messages=null,this.closed=!1,this.closable=!0,this._handleOpenRelatedFeature=e=>{this.emit("open-related-feature",{feature:e})}}loadDependencies(){return y({action:()=>import("../chunks/calcite-action.js"),"flow-item":()=>import("../chunks/calcite-flow-item.js")})}render(){const{flowItems:e}=this,t=e?.toArray();return f(g,null,t?.map((e=>this._renderRelatedRecordsFlowItem(e))))}_handleCloseClick(){this.emit("close")}_handleExitClick(){this.emit("exit")}_handleRelatedRecordsBackClick(){const e=this.flowItems?.pop();e&&("showAllEnabled"in e.viewModel&&(e.viewModel.showAllEnabled=!1),e&&(e.viewModel=null,e.destroy()))}_renderRelatedRecordsFlowItem(e){const{messages:t,closable:s,closed:o}=this,i="graphic"in e&&!e.isTable&&e.graphic?.geometry,r=t.exitRelatedRecords,n=t.selectFeature;return f("calcite-flow-item",{bind:this,closable:s,closed:o,description:this._getRelatedRecordsFlowItemDescription(e),heading:e.title??"",key:`flow-item-${e.viewModel.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),this._handleRelatedRecordsBackClick()},onCalciteFlowItemClose:this._handleCloseClick},f("calcite-action",{appearance:"transparent",bind:this,class:R.actionExit,icon:"move-up",key:"exit-related-records-action",onclick:this._handleExitClick,slot:"header-actions-start",text:r,title:r}),i?f("calcite-action",{appearance:"transparent",bind:this,icon:"zoom-to-object",key:"open-related-feature-action",onclick:()=>this._handleOpenRelatedFeature(e),slot:"header-actions-end",text:n,title:n}):null,f("div",{class:R.container},e.render()))}_getRelatedRecordsFlowItemDescription(e){return"featureCountDescription"in e?e.featureCountDescription:e.viewModel.description??""}};e([n()],x.prototype,"flowItems",void 0),e([n(),v("esri/widgets/Features/t9n/Features")],x.prototype,"messages",void 0),e([n()],x.prototype,"closed",void 0),e([n()],x.prototype,"closable",void 0),x=e([l("esri.widgets.Features.FeaturesRelatedRecords")],x);const U=x;let A=class extends w{constructor(){super(...arguments),this.actionBar=!0,this.closeButton=!0,this.collapseButton=!1,this.featureNavigation=!0,this.featureListLayerTitle=!0,this.flow=!0,this.heading=!0,this.spinner=!0}};e([n({type:Boolean,nonNullable:!0})],A.prototype,"actionBar",void 0),e([n({type:Boolean,nonNullable:!0})],A.prototype,"closeButton",void 0),e([n({type:Boolean,nonNullable:!0})],A.prototype,"collapseButton",void 0),e([n({type:Boolean,nonNullable:!0})],A.prototype,"featureNavigation",void 0),e([n({type:Boolean,nonNullable:!0})],A.prototype,"featureListLayerTitle",void 0),e([n({type:Boolean,nonNullable:!0})],A.prototype,"flow",void 0),e([n({type:Boolean,nonNullable:!0})],A.prototype,"heading",void 0),e([n({type:Boolean,nonNullable:!0})],A.prototype,"spinner",void 0),A=e([l("esri.widgets.Features.FeaturesVisibleElements")],A);const L=A,T="selected-index",O="features-spinner";function N(e){return e?.declaredClass.startsWith("esri.layers.")??!1}let E=class extends(m(j)){constructor(e,s){super(e,s),this._featureMenuIntersectionObserverCallback=([e])=>{e?.isIntersecting&&null!=this.viewModel.featurePage&&this.viewModel.featurePage++},this._featureMenuIntersectionObserver=new IntersectionObserver(this._featureMenuIntersectionObserverCallback,{root:window.document}),this._featureMenuIntersectionObserverNode=null,this._focusOn=null,this._spinner=null,this._feature=null,this._relatedRecordsFlowItems=new t,this._relatedRecordsWidget=new U({flowItems:this._relatedRecordsFlowItems}),this._rootFlowItemNode=null,this._featureMenuViewportNode=null,this._actionBarMenuNode=null,this.collapsed=!1,this.featureNavigationTop=!1,this.headerActions=new _,this.headingLevel=2,this.messages=null,this.messagesCommon=null,this.responsiveActionsEnabled=!1,this.viewModel=new b,this.visibleElements=new L,this._renderAction=(e,t)=>{const s=this._getActionTitle(e),{type:o,active:i,uid:r,disabled:n,indicator:l}=e;return e.visible?f("calcite-action",{active:"toggle"===o&&e.value,appearance:"solid",bind:this,"data-action-uid":r,disabled:n,icon:this._getActionIcon(e),indicator:l,key:`action-${t}`,loading:i,onclick:this._triggerAction,scale:"s",text:s,title:this._hideActionText?s:void 0},this._getFallbackIcon(e)):null},this._openFeatureMenu=()=>{this.featureMenuOpen=!0,this._focusOn="menu-flow-item"},this._previousFeature=()=>{this.viewModel.selectedFeatureIndex--},this._nextFeature=()=>{this.viewModel.selectedFeatureIndex++},this._handleFeatureMenuBack=()=>{this.featureMenuOpen&&(this._focusOn="root-flow-item",this.featureMenuOpen=!1)},this._focusFlowItemNode=e=>{this._focusOn===e&&requestAnimationFrame((async()=>{switch(e){case"menu-flow-item":await(this._featureMenuViewportNode?.setFocus());break;case"root-flow-item":await(this._rootFlowItemNode?.setFocus())}this._focusOn=null}))},this._focusFlowItemNodeThrottled=r(this._focusFlowItemNode,50),this._displaySpinnerThrottled=r((()=>this._displaySpinner()),0),this._addSelectedFeatureIndexHandle(),this.addHandles([this._displaySpinnerThrottled,this._focusFlowItemNodeThrottled,o((()=>this.viewModel?.active),(()=>this._toggleScreenLocationEnabled())),o((()=>this.viewModel?.active),(e=>this._relatedRecordsWidget.closed=!e)),o((()=>this.visibleElements?.closeButton),(e=>this._relatedRecordsWidget.closable=e)),o((()=>this.visibleElements?.spinner),(e=>this._spinnerEnabledChange(e))),o((()=>this.viewModel?.view),((e,t)=>this._viewChange(e,t))),o((()=>this.viewModel?.view?.ready),((e,t)=>this._viewReadyChange(e??!1,t??!1))),o((()=>[this.viewModel?.waitingForResult,this.viewModel?.location]),(()=>{this._hideSpinner(),this._displaySpinnerThrottled()})),o((()=>this.viewModel?.screenLocation),(()=>this._closeOpenActionMenu())),o((()=>this.selectedFeatureWidget),(()=>this._destroyRelatedRecordsFlowItemWidgets())),o((()=>{const e=this.selectedFeatureWidget?.viewModel;return[e?.title,e?.state]}),(()=>this._setTitleFromFeatureWidget())),o((()=>{const e=this.selectedFeatureWidget?.viewModel;return[e?.content,e?.state]}),(()=>this._setContentFromFeatureWidget())),o((()=>this.viewModel?.featureViewModels),(()=>this._featureMenuViewportScrollTop())),this._relatedRecordsWidget.on("close",(()=>this.close())),this._relatedRecordsWidget.on("exit",(()=>this._destroyRelatedRecordsFlowItemWidgets())),this._relatedRecordsWidget.on("open-related-feature",(({feature:e})=>this._openRelatedFeature(e)))])}loadDependencies(){return y({action:()=>import("../chunks/calcite-action.js"),"action-bar":()=>import("../chunks/calcite-action-bar.js"),"action-group":()=>import("../chunks/calcite-action-group.js"),button:()=>import("../chunks/calcite-button.js"),flow:()=>import("../chunks/calcite-flow.js"),"flow-item":()=>import("../chunks/calcite-flow-item.js"),list:()=>import("../chunks/calcite-list.js"),"list-item":()=>import("../chunks/calcite-list-item.js"),"list-item-group":()=>import("../chunks/calcite-list-item-group.js"),loader:()=>import("../chunks/calcite-loader.js")})}destroy(){this._destroyRelatedRecordsFlowItemWidgets(),this._destroySelectedFeatureWidget(),this._destroySpinner(),this._unobserveFeatureMenuObserver(),this._featureMenuIntersectionObserver?.disconnect(),this._relatedRecordsWidget?.destroy()}get _hideActionText(){if(!this.responsiveActionsEnabled)return!1;const e=this.view?.widthBreakpoint;return"xsmall"===e||"small"===e||"medium"===e}get _featureNavigationVisible(){return this.viewModel.active&&this.viewModel.featureCount>1&&this.visibleElements.featureNavigation}get _isCollapsed(){return this._collapseEnabled&&this.collapsed}get _collapseEnabled(){return this.visibleElements.collapseButton&&!!this.title&&!!this.content}get active(){return this.viewModel.active}get content(){return this.viewModel.content}set content(e){this.viewModel.content=e}get icon(){return null}get featureMenuOpen(){return this.viewModel.featureMenuOpen}set featureMenuOpen(e){this.viewModel.featureMenuOpen=e}get features(){return this.viewModel.features}set features(e){this.viewModel.features=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get location(){return this.viewModel.location}set location(e){this.viewModel.location=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get promises(){return this.viewModel.promises}set promises(e){this.viewModel.promises=e}get selectedFeature(){return this.viewModel.selectedFeature}get selectedFeatureIndex(){return this.viewModel.selectedFeatureIndex}set selectedFeatureIndex(e){this.viewModel.selectedFeatureIndex=e}get selectedFeatureWidget(){const{_feature:e,headingLevel:t,_relatedRecordsFlowItems:s,timeZone:o,spatialReference:i,map:r}=this,{selectedFeatureViewModel:n}=this.viewModel,l={title:!1};return n?(e?(e.viewModel=n,e.visibleElements=l):this._feature=new c({flowItems:s,headingLevel:t+1,timeZone:o,spatialReference:i,map:r,viewModel:n,visibleElements:l}),this._feature):null}get spatialReference(){return this.viewModel.spatialReference}set spatialReference(e){this.viewModel.spatialReference=e}get title(){return this.viewModel.title}set title(e){this.viewModel.title=e}get timeZone(){return this.viewModel.timeZone}set timeZone(e){this.viewModel.timeZone=e}get updateLocationEnabled(){return this.viewModel.updateLocationEnabled}set updateLocationEnabled(e){this.viewModel.updateLocationEnabled=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}blur(){const{active:e}=this.viewModel;e?this._rootFlowItemNode?.blur():s.getLogger(this).warn("Features can only be blurred when currently active.")}clear(){return this.viewModel.clear()}close(){this.viewModel.visible=!1}fetchFeatures(e,t){return this.viewModel.fetchFeatures(e,t)}focus(){const{active:e}=this.viewModel;e?this._setFocusOn():s.getLogger(this).warn("Features can only be focused when currently active.")}next(){return this.viewModel.next()}open(e){this.removeHandles(T);const t={collapsed:e?.collapsed??!1};this.set(t),this.viewModel.open(e),this.addHandles(i((()=>!this.viewModel.waitingForResult),(()=>this._addSelectedFeatureIndexHandle()),{once:!0}))}previous(){return this.viewModel.previous()}triggerAction(e){return this.viewModel.triggerAction(e)}render(){return f("div",{bind:this,class:this.classes(R.base,k.widget,k.panel),onkeydown:this._onMainKeydown},this._renderHeader(),this._renderContentContainer())}_renderFeatureNavigation(){return[this._renderPagination(),this._renderFeatureMenuButton()]}_renderHeader(){return!this.featureMenuOpen&&this.featureNavigationTop&&this._featureNavigationVisible?f("div",{class:R.header,key:"header-actions"},this._renderFeatureNavigation()):null}_renderFooter(){return this.featureMenuOpen||this.featureNavigationTop||!this._featureNavigationVisible?null:f("div",{class:R.footer,key:"footer-actions",slot:"footer"},this._renderFeatureNavigation())}_renderFeatureMenuButton(){const{messages:e,viewModel:t}=this,{featureCount:s,selectedFeatureIndex:o,pendingPromisesCount:i}=t;return f("calcite-action",{appearance:"solid",bind:this,icon:"list",key:"feature-menu-button",label:e.selectFeature,loading:i>0,onclick:this._openFeatureMenu,scale:"s",text:I(e.pageText,{index:C(o+1),total:C(s)}),textEnabled:!0,title:e.selectFeature})}_renderPagination(){const{previous:e,next:t}=this.messagesCommon.pagination;return f("calcite-action-bar",{class:R.paginationActionBar,expandDisabled:!0,key:"pagination-action-bar",layout:"horizontal",overflowActionsDisabled:!0,scale:"s"},f("calcite-action-group",{scale:"s"},f("calcite-action",{appearance:"solid",class:R.paginationPrevious,icon:"chevron-left",iconFlipRtl:!0,label:e,onclick:this._previousFeature,scale:"s",text:e,title:e}),f("calcite-action",{appearance:"solid",icon:"chevron-right",iconFlipRtl:!0,label:t,onclick:this._nextFeature,scale:"s",text:t,title:t})))}_renderFeatureMenuItem(e){const{selectedFeatureViewModel:t,featureViewModels:s}=this.viewModel,o=e===t,i=s.indexOf(e);return f("calcite-list-item",{bind:this,"data-feature-index":i,key:`feature-menu-item-${e.uid}`,onblur:this._removeActiveFeature,onfocus:this._setActiveFeature,onmouseleave:this._removeActiveFeature,onmouseover:this._setActiveFeature,selected:o,onCalciteListItemSelect:this._selectFeature},f("span",{innerHTML:e.title||this.messagesCommon.untitled,slot:"content"}))}_groupResultsByLayer(){const{featureViewModels:e}=this.viewModel,t=new Map;return e.forEach((e=>{const s=e?.graphic;if(!s)return;const{layer:o,sourceLayer:i}=s,r=(N(o)?o:null)||(N(i)?i:null),n=t.get(r)??[];t.set(r,[...n,e])})),t}_renderFeatureMenu(){const{featureViewModels:e}=this.viewModel,t=this._groupResultsByLayer();return e.length?f("calcite-list",{selectionAppearance:"icon",selectionMode:"single"},Array.from(t.keys(),(e=>{const s=t.get(e)?.map((e=>this._renderFeatureMenuItem(e))),o=e?e.title??this.messagesCommon.untitled:null;return this.visibleElements.featureListLayerTitle&&null!==o?f("calcite-list-item-group",{heading:o,key:e?.uid||"map-graphics"},s):s}))):null}_renderHeaderAction(e,t){const s=e.title||"";return e.visible?f("calcite-action",{active:"toggle"===e.type&&e.value,appearance:"solid",bind:this,"data-action-uid":e.uid,disabled:e.disabled,icon:e.icon??void 0,indicator:e.indicator,key:`header-action-${t}`,loading:e.active,onclick:this._triggerHeaderAction,slot:"header-actions-end",text:s,title:s}):null}_renderHeaderActions(){return this.headerActions.map(((e,t)=>this._renderHeaderAction(e,t))).toArray()}_renderContentFeature(){const{headingLevel:e,visibleElements:t,_isCollapsed:s,_collapseEnabled:o,featureNavigationTop:i}=this,{title:r,active:n}=this.viewModel,l=t.heading&&r?r:"";return f("calcite-flow-item",{afterCreate:this._storeRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,class:this.classes({[R.contentFeature]:!0,[R.flowItemCollapsed]:s}),closable:t.closeButton,closed:!n,collapsed:s,collapseDirection:i?"down":"up",collapsible:o,headingLevel:e,key:"root-flow-item",onCalciteFlowItemClose:this.close,onCalciteFlowItemToggle:this._handleCollapseToggle},l?f(M,{class:this.classes(R.featuresHeading,k.heading),innerHTML:l,key:"header-content",level:this.headingLevel,slot:"header-content"}):null,this._renderHeaderActions(),this._renderActionBar(),s?null:f("div",{class:this.classes(R.container,R.contentContainer)},this._renderContent()),this._renderFooter())}_renderFeatureMenuContainer(){const{viewModel:e,featureMenuOpen:t,messages:s,messagesCommon:o}=this,{active:i,featureViewModels:r,pendingPromisesCount:n}=e;return t?f("calcite-flow-item",{afterCreate:this._storeFeatureMenuFlowItemNode,afterUpdate:this._focusFeatureMenuFlowItemNode,bind:this,closable:!1,closed:!i,description:I(s.total,{total:r.length}),heading:s.selectFeature,key:"feature-menu",loading:e.waitingForContents,onCalciteFlowItemBack:e=>{e.preventDefault(),this._handleFeatureMenuBack()}},n>0?f("calcite-loader",{class:R.loader,inline:!0,key:"feature-menu-loader",label:o.loading,slot:"header-actions-end"}):null,f("div",{class:R.container},this._renderFeatureMenu()),f("div",{afterCreate:this._featureMenuIntersectionObserverCreated,bind:this,class:R.featureMenuObserver}),f("calcite-button",{appearance:"transparent",onclick:this._handleFeatureMenuBack,slot:"footer-actions",width:"full"},o.back)):null}_renderContentContainer(){const e=[this._renderContentFeature(),this._renderFeatureMenuContainer(),this._relatedRecordsWidget.render()];return this.visibleElements.flow?f("calcite-flow",{key:"content-container"},e):e}_getFallbackIcon(e){const{className:t,icon:s}=e;if(s)return null;const o=p({action:e,feature:this.selectedFeature}),i={[R.icon]:!!t,[R.actionImage]:!!o};return t&&(i[t]=!0),o||t?f("span",{"aria-hidden":"true",class:this.classes(R.icon,i),key:"icon",styles:u(o)}):null}_renderActionBar(){return!this._isCollapsed&&this.visibleElements.actionBar&&this.viewModel.allActions?.length?f("calcite-action-bar",{expandDisabled:!0,expanded:!this._hideActionText,key:"header-action-bar",scale:"s",slot:"action-bar"},f("calcite-action-group",{afterCreate:e=>this._actionBarMenuNode=e,overlayPositioning:"fixed",scale:"s"},this._renderActions())):null}_renderActions(){return this.viewModel.allActions.toArray().map(this._renderAction)}_renderContent(){const e=this.viewModel?.content;return e?"string"==typeof e?f("div",{class:d.contentNode,innerHTML:e,key:e}):this.renderNodeContent(e):null}_setFocusOn(){this.renderNow(),requestAnimationFrame((()=>{this._focusOn=this.featureMenuOpen?"menu-flow-item":"root-flow-item"}))}_handleCollapseToggle(){this.collapsed=!this.collapsed}async _openRelatedFeature(e){await e.viewModel.updateGeometry();const t=e.graphic,s=t?.geometry;if(null==s||null==t)return;this._destroyRelatedRecordsFlowItemWidgets(),await this.viewModel.zoomTo({target:s});const o=a(s);this.open({features:[t],location:null!=o?o:void 0})}_focusRootFlowItemNode(){this._focusFlowItemNodeThrottled("root-flow-item")}_focusFeatureMenuFlowItemNode(){this._focusFlowItemNodeThrottled("menu-flow-item")}_storeRootFlowItemNode(e){this._rootFlowItemNode=e,this._focusFlowItemNodeThrottled("root-flow-item")}_storeFeatureMenuFlowItemNode(e){this._featureMenuViewportNode=e,this._focusFlowItemNodeThrottled("menu-flow-item")}_setActiveFeature(e){const{viewModel:t}=this,s=e.currentTarget["data-feature-index"];t.activeFeature=t.features?.[s]||null}_removeActiveFeature(){this.viewModel.activeFeature=null}_selectFeature(e){const t=e.currentTarget["data-feature-index"];isNaN(t)||(this.viewModel.selectedFeatureIndex=t),this._handleFeatureMenuBack()}_unobserveFeatureMenuObserver(){this._featureMenuIntersectionObserverNode&&this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode)}_featureMenuIntersectionObserverCreated(e){this._unobserveFeatureMenuObserver(),this._featureMenuIntersectionObserver.observe(e),this._featureMenuIntersectionObserverNode=e}_getActionIcon(e){return e.icon?e.icon:e.image||e.className?void 0:"question"}_getActionTitle(e){const{messages:t,selectedFeature:s,messagesCommon:o}=this,{id:i}=e,r=s?.attributes,n=e.title??"",l="zoom-to-feature"===i?I(n,{messages:t}):"remove-selected-feature"===i?I(n,{messages:o}):"zoom-to-clustered-features"===i||"browse-clustered-features"===i?I(n,{messages:t}):e.title;return l&&r?I(l,r):l??""}_onMainKeydown(e){const{key:t}=e;"ArrowLeft"===t&&(e.stopPropagation(),this._handleFeatureMenuBack(),this.previous()),"ArrowRight"===t&&(e.stopPropagation(),this._handleFeatureMenuBack(),this.next())}_featureMenuViewportScrollTop(){this._featureMenuViewportNode&&this._featureMenuViewportNode.scrollContentTo({top:0})}_setContentFromFeatureWidget(){const{selectedFeatureWidget:e}=this;e&&(this.viewModel.content=e)}_setTitleFromFeatureWidget(){const{selectedFeatureWidget:e,messagesCommon:t}=this,s=e?.viewModel;e&&(this.viewModel.title="error"===s?.state?t?.errorMessage:s?.title||"")}_addSelectedFeatureIndexHandle(){const e=o((()=>this.viewModel?.selectedFeatureIndex),((e,t)=>this._selectedFeatureIndexUpdated(e,t)));this.addHandles(e,T)}_selectedFeatureIndexUpdated(e,t){const{featureCount:s}=this.viewModel;s&&e!==t&&-1!==e&&(this._destroyRelatedRecordsFlowItemWidgets(),this._rootFlowItemNode&&this._rootFlowItemNode.scrollContentTo({top:0}))}_triggerHeaderAction(e){const t=e.currentTarget;if(t.disabled)return;const s=t.dataset.actionUid,o=this.headerActions.find((({uid:e})=>e===s));o&&!o.disabled&&("toggle"===o?.type&&(o.value=!o.value),this.emit("trigger-header-action",{action:o}))}_triggerAction(e){const t=e.currentTarget;if(t.disabled)return;const s=t.dataset.actionUid,{allActions:o}=this.viewModel,i=o.findIndex((e=>e.uid===s)),r=o.at(i);r&&"toggle"===r.type&&(r.value=!r.value),this.viewModel.triggerAction(i)}_createSpinner(e){e&&(this._spinner=new h({view:e}),e.ui.add(this._spinner,{key:O,position:"manual",internal:!0}))}_wireUpView(e){this._destroySpinner(),e&&this.visibleElements?.spinner&&this._createSpinner(e)}_hideSpinner(){const{_spinner:e}=this;e&&(e.location=null,e.hide())}_viewReadyChange(e,t){e?this._wireUpView(this.viewModel?.view):t&&this.viewModel.clear()}_viewChange(e,t){e&&t&&this.viewModel.clear()}_destroySelectedFeatureWidget(){const{_feature:e}=this;e&&(e.viewModel=null,!e.destroyed&&e.destroy()),this._feature=null}_closeOpenActionMenu(){const{_actionBarMenuNode:e}=this;e&&(e.menuOpen=!1)}_destroyRelatedRecordsFlowItemWidgets(){this._relatedRecordsFlowItems.drain((e=>{"showAllEnabled"in e.viewModel&&(e.viewModel.showAllEnabled=!1),e.viewModel=null,e.destroy()}))}_toggleScreenLocationEnabled(){const{viewModel:e}=this;e&&(e.screenLocationEnabled=e.active)}_displaySpinner(){const{_spinner:e}=this;if(!e)return;const{location:t,waitingForResult:s}=this.viewModel;s&&t?e.show({location:t}):e.hide()}_destroySpinner(){const{_spinner:e,view:t}=this;e&&(t?.ui?.remove(e,O),e.destroy(),this._spinner=null)}_spinnerEnabledChange(e){this._destroySpinner(),e&&this._createSpinner(this.viewModel?.view)}};e([n()],E.prototype,"_focusOn",void 0),e([n()],E.prototype,"_relatedRecordsFlowItems",void 0),e([n()],E.prototype,"_hideActionText",null),e([n()],E.prototype,"_featureNavigationVisible",null),e([n()],E.prototype,"_isCollapsed",null),e([n()],E.prototype,"_collapseEnabled",null),e([n({readOnly:!0})],E.prototype,"active",null),e([n()],E.prototype,"collapsed",void 0),e([n()],E.prototype,"content",null),e([n()],E.prototype,"icon",null),e([n()],E.prototype,"featureMenuOpen",null),e([n()],E.prototype,"featureNavigationTop",void 0),e([n()],E.prototype,"features",null),e([n()],E.prototype,"goToOverride",null),e([n({type:_})],E.prototype,"headerActions",void 0),e([n()],E.prototype,"headingLevel",void 0),e([n()],E.prototype,"location",null),e([n()],E.prototype,"label",null),e([n()],E.prototype,"map",null),e([n(),v("esri/widgets/Features/t9n/Features")],E.prototype,"messages",void 0),e([n(),v("esri/t9n/common")],E.prototype,"messagesCommon",void 0),e([n()],E.prototype,"promises",null),e([n()],E.prototype,"responsiveActionsEnabled",void 0),e([n({readOnly:!0})],E.prototype,"selectedFeature",null),e([n()],E.prototype,"selectedFeatureIndex",null),e([n({readOnly:!0})],E.prototype,"selectedFeatureWidget",null),e([n()],E.prototype,"spatialReference",null),e([n()],E.prototype,"title",null),e([n()],E.prototype,"timeZone",null),e([n()],E.prototype,"updateLocationEnabled",null),e([n()],E.prototype,"view",null),e([n({type:b}),F(["triggerAction","trigger-action"])],E.prototype,"viewModel",void 0),e([n({type:L,nonNullable:!0})],E.prototype,"visibleElements",void 0),e([n()],E.prototype,"visible",null),E=e([l("esri.widgets.Features")],E);const B=E;export{B as default};