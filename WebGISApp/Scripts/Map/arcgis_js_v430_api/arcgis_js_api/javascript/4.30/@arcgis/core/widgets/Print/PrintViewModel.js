/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{id as e}from"../../kernel.js";import o from"../../request.js";import{clone as s,i}from"../../core/lang.js";import r from"../../core/Collection.js";import a from"../../core/Error.js";import{J as l}from"../../chunks/jsonMap.js";import p from"../../core/Loadable.js";import{isAbortError as n}from"../../core/promiseUtils.js";import{R as m}from"../../chunks/ReactiveMap.js";import{watch as u,initial as h}from"../../core/reactiveUtils.js";import{c}from"../../chunks/screenUtils.js";import{u as y,l as d,g as f,a1 as j}from"../../chunks/unitUtils.js";import{property as v}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as b}from"../../core/accessorSupport/decorators/subclass.js";import{f as g,c as k}from"../../chunks/date.js";import{a as T}from"../../chunks/locale.js";import w from"../../portal/Portal.js";import I from"../../portal/PortalQueryParams.js";import{r as _}from"../../core/urlUtils.js";import{submitJob as S,execute as x}from"../../rest/geoprocessor.js";import{execute as P,getTasks as O,getMode as L}from"../../rest/print.js";import{a as C,f as U}from"../../chunks/layoutTemplate.js";import D from"../../rest/support/PrintParameters.js";import E from"../../rest/support/PrintTemplate.js";import{d as M}from"../../chunks/viewpointUtils.js";import{V as F}from"../../chunks/InputManager.js";import H from"../../core/Accessor.js";import"../../chunks/widgetUtils.js";import{t as W}from"../../chunks/jsxFactory.js";import A from"./CustomTemplate.js";import $ from"./TemplateOptions.js";import R from"../../geometry/Extent.js";import"../../chunks/ensureType.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/Handles.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/assets.js";import"../../geometry/Multipoint.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/Promise.js";import"../../chunks/asyncUtils.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../rest/geoprocessor/GPOptions.js";import"../../rest/support/JobInfo.js";import"../../chunks/enumeration.js";import"../../chunks/utils8.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils9.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../layers/support/MapImage.js";import"../../rest/support/ArealUnit.js";import"../../chunks/networkEnums.js";import"../../rest/support/DataFile.js";import"../../rest/support/FeatureSet.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../rest/support/LinearUnit.js";import"../../rest/support/ParameterValue.js";import"../../rest/support/RasterData.js";import"../../rest/support/GPMessage.js";import"../../chunks/floorFilterUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/layerViewUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../Viewpoint.js";import"../../Camera.js";import"../../CameraLayout.js";import"../../chunks/Cyclical.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df64.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/Queue.js";import"../../core/signal.js";import"../../chunks/jsxWidgetSupport.js";let V=class extends H{constructor(t){super(t),this.strokeDash=[],this.strokeWidth=2,this.strokeColor=[0,0,0,1],this.strokeBackgroundColor=[0,0,0,0],this.fillColor=[0,0,0,0],this.backgroundFillColor=[0,0,0,.5],this.visible=!0,this.isDecoration=!1,this.boxWidth=0,this.boxHeight=0,this.backgroundWidth=0,this.backgroundHeight=0,this.padding={left:0,top:0,right:0,bottom:0}}get _strokeStyle(){return`rgba(${this.strokeColor.join()})`}get _strokeBackgroundStyle(){return`rgba(${this.strokeBackgroundColor.join()})`}get _fillStyle(){return`rgba(${this.fillColor.join()})`}get _backgroundFillStyle(){return`rgba(${this.backgroundFillColor.join()})`}render(){const{backgroundWidth:t,backgroundHeight:e,boxWidth:o,boxHeight:s,padding:i}=this,r=i.left,a=i.top,l=this.x??r+t/2-o/2,p=this.y??a+e/2-s/2,n=l+o,m=p+s;return W("div",{classes:{"esri-box-overlay-item":!0},styles:{left:"0px",top:"0px",width:"100%",height:"100%",visibility:this.visible?"visible":"hidden"}},W("svg",{styles:{width:"100%",height:"100%"}},W("path",{d:`M ${r} ${a} L ${t+r} ${a} L ${t+r} ${e+a} L ${r} ${e+a} Z M ${l} ${p} L ${l} ${m} L ${n} ${m} L ${n} ${p} Z`,fill:this._backgroundFillStyle,stroke:this._strokeBackgroundStyle,"stroke-width":this.strokeWidth}),W("rect",{fill:this._fillStyle,height:s,stroke:this._strokeStyle,"stroke-dasharray":this.strokeDash.join(" ")||void 0,"stroke-width":this.strokeWidth,width:o,x:l,y:p})))}renderCanvas(){}};t([v()],V.prototype,"strokeDash",void 0),t([v()],V.prototype,"strokeWidth",void 0),t([v()],V.prototype,"strokeColor",void 0),t([v()],V.prototype,"strokeBackgroundColor",void 0),t([v()],V.prototype,"fillColor",void 0),t([v()],V.prototype,"backgroundFillColor",void 0),t([v()],V.prototype,"visible",void 0),t([v()],V.prototype,"isDecoration",void 0),t([v()],V.prototype,"boxWidth",void 0),t([v()],V.prototype,"boxHeight",void 0),t([v()],V.prototype,"backgroundWidth",void 0),t([v()],V.prototype,"backgroundHeight",void 0),t([v()],V.prototype,"x",void 0),t([v()],V.prototype,"y",void 0),t([v()],V.prototype,"padding",void 0),t([v({readOnly:!0})],V.prototype,"_strokeStyle",null),t([v({readOnly:!0})],V.prototype,"_strokeBackgroundStyle",null),t([v({readOnly:!0})],V.prototype,"_fillStyle",null),t([v({readOnly:!0})],V.prototype,"_backgroundFillStyle",null),V=t([b("esri.views.overlay.BoxOverlayItem")],V);const B=V,G=new Set(["GISProfessionalStdUT","GISProfessionalAdvUT"]),z=/(\/GPServer\/).+/i,N=new l({inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers"}),q=r.ofType(A);let J=class extends p{constructor(t){super(t),this._serviceTemplateCustomTextElements=null,this._layoutToTemplateInfo=new m,this._isFreeHand=!1,this._freeHandWidth=0,this._freehandHeight=0,this._asyncPrintTaskUrl=null,this._layoutInfoTaskUrl=null,this.allowedFormats="all",this.allowedLayouts="all",this.browseTemplates=new q,this.defaultTemplates=new q,this.error=null,this.extraParameters=null,this.includeDefaultTemplates=!0,this.portal=w.getDefault(),this.portalTemplateIds=[],this.showPrintAreaEnabled=!1,this.printServiceUrl=null,this.printTimeout=12e4,this.templatesInfo=null,this.updateDelay=1e3,this.view=null,this.templateCustomTextElements=null,this.templateOptions=new $}initialize(){this.addHandles(u((()=>this.showPrintAreaEnabled),(t=>{t?this._enablePrintPreview():(this.removeHandles("overlay-handler"),this.view?.overlay?.removeItem(this._getOverlayItem()))})))}destroy(){this.removeHandles("overlay-handler"),this.view&&(this._overlayItem&&(this.view.overlay?.removeItem(this._overlayItem),this._overlayItem.destroy(),this._overlayItem=null),this.view=null)}get effectivePrintServiceUrl(){return this.printServiceUrl??null}get effectiveTemplateCustomTextElements(){if(!this._serviceTemplateCustomTextElements)return{};const t=s(this._serviceTemplateCustomTextElements);return this.templateCustomTextElements&&Object.keys(this.templateCustomTextElements).forEach((e=>{const o=t[e];if(o){const t=this.templateCustomTextElements?.[e];o.forEach((e=>{const[o]=Object.entries(e)[0];t?.forEach((t=>{const[s,i]=Object.entries(t)[0];o===s&&(e[o]=i)}))}))}})),Object.freeze(t)}get layoutTemplateInfo(){const t=this.templateOptions.layoutItem?.id??this.templateOptions.layout;return t?this._layoutToTemplateInfo.get(t):null}get state(){return"loading"===this.loadStatus?"initializing":"failed"===this.loadStatus||this.error?"error":"loaded"===this.loadStatus&&this.view?.ready?"ready":"disabled"}get layoutTemplateNorthArrowInfo(){return this.layoutTemplateInfo?.layoutOptions?.mapSurroundInfos?this.layoutTemplateInfo.layoutOptions.mapSurroundInfos.find((t=>"CIMMarkerNorthArrow"===t.type)):null}async load(t){return this.addResolvingPromise(this._loadResources(t).catch((t=>this.error=t))),this}async print(t){const{view:e,extraParameters:o,updateDelay:s}=this;if(!e)throw new a("print:view-required","view is not set");!function(t){if(t.layoutOptions??={},t.layoutOptions.customTextElements??=[],!t.layoutOptions.customTextElements.find((t=>"date"in t))){const{customTextElements:e}=t.layoutOptions;let o=g(Date.now(),k("short-date"));"ar"===T()&&(o="‏"+o),e.push({date:o})}}(t);const i=this._getOverlayItem(),r=t.scalePreserved||!this.showPrintAreaEnabled?void 0:M(new R,e.viewpoint,"MAP_ONLY"===t.layout?[t.exportOptions.width,t.exportOptions.height]:[i.boxWidth,i.boxHeight]),l=new D({view:e,template:t,extent:r,extraParameters:o,updateDelay:s});try{const e=!!t.layoutItem?.id&&(this.portalTemplateIds.includes(t.layoutItem.id)||this.browseTemplates.some((e=>e.layoutItem?.id===t.layoutItem?.id)));return await P(e&&this._asyncPrintTaskUrl?this._asyncPrintTaskUrl:this.effectivePrintServiceUrl,l,{timeout:this.printTimeout})}catch(t){throw new a("print:export-error","An error occurred while exporting the web map.",{error:t})}}toPrintTemplate({attributionEnabled:t,author:e,copyright:o,customTextElements:s,dpi:i,forceFeatureAttributes:r,format:l,height:p,includeTables:n,layout:m,layoutItem:u,legendEnabled:h,northArrowEnabled:c,scale:y,scaleEnabled:d,title:f,width:j}){if(!m)throw new a("print:layout-required","layout is not set");const v=new E({attributionVisible:t,forceFeatureAttributes:r,format:l,includeTables:n,layout:m,layoutItem:u,layoutOptions:{authorText:e||"",copyrightText:o||"",customTextElements:s,titleText:f||""},outScale:y??0,scalePreserved:d});j&&(v.exportOptions.width=j),p&&(v.exportOptions.height=p),i&&(v.exportOptions.dpi=i),!h&&v.layoutOptions&&(v.layoutOptions.legendLayers=[]);const b=this.layoutTemplateNorthArrowInfo;return b&&b.visible!==c&&v.layoutOptions&&(v.layoutOptions.elementOverrides={[b.name]:{visible:c}}),v}async fetchLayoutTemplateInfo(t,e){if(!t.layoutItem?.id)return;const o=await this._fetchPortalLayoutTemplateInfo(t.layoutItem,e);this._layoutToTemplateInfo.set(t.layoutItem.id,o),t.layoutTemplateInfo=o;const{hasLegend:i,mapSurroundInfos:r,customTextElements:a}=o.layoutOptions,l=r.some((({type:t,visible:e})=>"CIMMarkerNorthArrow"===t&&e));t.layoutOptions={legend:i,northArrow:l};const p=s(this._serviceTemplateCustomTextElements)??{};p[t.layoutItem.id]=a,this._serviceTemplateCustomTextElements=Object.freeze(p)}getLayoutTemplateInfo(t){return this._layoutToTemplateInfo.get(t)}async addPortalTemplate(t){const e=new A({label:t.title,layoutItem:t});this.browseTemplates.add(e)}removePortalTemplate(t){t.layoutItem?.id&&this.templateOptions.layoutItem?.id===t.layoutItem.id&&(this.templateOptions.layout=this.defaultTemplates.length||this.browseTemplates.length?null:this.templatesInfo?.layout?.defaultValue,this.templateOptions.layoutItem=null),this._layoutToTemplateInfo.delete(t.layoutItem.id),this.browseTemplates.remove(t)}async _loadResources(t){let e=[];if(this.printServiceUrl)this._set("effectivePrintServiceUrl",this.printServiceUrl),await this._updateLayoutInfoTaskUrl(this.effectivePrintServiceUrl);else{if(this.destroyed)return;try{await this.portal.load(t)}catch(t){throw new a("print:could-not-load-portal","Cannot load print resource information from portal",{error:t,url:this.effectivePrintServiceUrl})}if(this.portal.helperServices){const{asyncPrintTask:t,layoutInfoTask:o,printTask:s}=this.portal.helperServices;s&&(this._set("effectivePrintServiceUrl",s.url),e=s.templates?.map((t=>A.fromJSON(t)))??[]),this._asyncPrintTaskUrl=t?.url,await this._updateLayoutInfoTaskUrl(o?.url||this.effectivePrintServiceUrl)}}this.defaultTemplates.addMany(e);const o=this.effectivePrintServiceUrl?.toLowerCase().split("/");if(!o?.includes("gpserver"))throw new a("print:invalid-print-service-url","Can't fetch print templates information from provided URL",{url:this.effectivePrintServiceUrl});const[s,i,r]=await Promise.all([this._getPrintServiceLayouts(t),this._getPrintServiceTemplates(t),this._getPortalCustomTemplates(t)]);if(this._processPrintServiceLayouts(s),this._processPrintServiceTemplates(i),this._processPortalTemplates(r),this.templateOptions.layoutItem?.id){const e=this.templateOptions.layoutItem.id;let o=this.defaultTemplates.find((t=>t.layoutItem?.id===e));o||(o=new A({label:this.templateOptions.layoutItem.title,layoutItem:this.templateOptions.layoutItem})),await this.fetchLayoutTemplateInfo(o,t),this.templateOptions.layout=e}this._updateOverLayItem()}async _updateLayoutInfoTaskUrl(t,e){if(!t)return;const o=(await O(t,e)).find((t=>t.includes("Get Layout Templates Info")));o&&(this._layoutInfoTaskUrl=t.replace(z,`$1${encodeURI(o)}`))}async _getPortalCustomTemplates(t){if(this.printServiceUrl||!this.portal)return[];const{layoutGroupQuery:e,user:o}=this.portal,s=_.test(this.portal.url),i=o?.userLicenseTypeId,r=i&&G.has(i);if(!e||s&&!r)return[];const a=new I({query:e,disableExtraQuery:!0}),l=await this.portal.queryGroups(a,t);if(!l.total)return[];const p=l.results[0],n=new I({num:100,query:"type:Layout",sortField:p.sortField,sortOrder:p.sortOrder??void 0}),m=(await p.queryItems(n,t)).results;return m.length?m.map((t=>new A({label:t.title,layoutItem:t}))):[]}async _fetchPortalLayoutTemplateInfo(t,o){const{id:s}=t,i=this._layoutInfoTaskUrl;if(!i)throw new a("print:invalid-layout-info-task-url","Can't fetch layout template info",{url:i});"public"!==t.access&&e&&await e.getCredential(i);const r={Layout_Item_ID:JSON.stringify({id:s})};return(await this._fetchLayoutTemplateInfos(r,o))[0]}async _fetchLayoutTemplateInfos(t,e){const o=this._layoutInfoTaskUrl;if(!o)throw new a("print:invalid-layout-info-task-url","Can't fetch layout template info",{url:o});if("async"===await L(o)){const s=await S(o,t,void 0,e||void 0);return await s.waitForJobCompletion({interval:1e3}),(await s.fetchResultData("Output_JSON")).value}return(await x(o,t,null,e)).results[0].value}_processPortalTemplates(t){if(t){this.defaultTemplates.addMany(t);for(const e of t)e.layoutItem?.id&&this.portalTemplateIds.push(e.layoutItem.id)}}_processPrintServiceTemplates(t){this._set("templatesInfo",t)}async _getPrintServiceLayouts(t){let e=[];try{e=await this._fetchLayoutTemplateInfos(void 0,t)}catch{}return e}_processPrintServiceLayouts(t){const e={};for(const o of t){const{layoutTemplate:t,layoutOptions:s}=o,i=C(t);this._layoutToTemplateInfo.set(i,o),e[i]=s.customTextElements}this._serviceTemplateCustomTextElements=Object.freeze(e)}async _getPrintServiceTemplates(t){let e;try{({data:e}=await o(this.effectivePrintServiceUrl,{...t,query:{f:"json"},timeout:this.printTimeout}))}catch(t){throw n(t)?t:new a("print:unavailable-service-info","Can't fetch templates info from service",{error:t})}const{parameters:s}=e,i=s.find((({name:t})=>"Format"===t)),r=s.find((({name:t})=>"Layout_Template"===t));return{format:this._getFormat(i),layout:this._getLayout(r)}}_getFormat(t){const e="all"===this.allowedFormats?t.choiceList:t.choiceList.filter((t=>this.allowedFormats.includes(U(t)))),o=(e.length?e:t.choiceList).map(U).filter(i),s=U(t.defaultValue),r=o.includes(s)?s:o[0];return{choiceList:o,defaultValue:r}}_getLayout(t){const e=t.choiceList.filter((t=>"map_only"!==t.toLowerCase())),o="all"===this.allowedLayouts?e:e.filter((t=>this.allowedLayouts.includes(C(t)))),s=(o.length?o:e).map(C).filter(i),r=C(t.defaultValue),a=s.includes(r)?r:s.find((t=>/(?=.*letter)(?=.*landscape)/i.test(t)))??s.find((t=>/(?=.*a4)(?=.*landscape)/i.test(t)))??s[0];return{choiceList:s,defaultValue:a}}_getOverlayItem(){return this._overlayItem||(this._overlayItem=new B({strokeDash:[5],strokeWidth:2,strokeColor:[30,144,255,255]})),this._overlayItem}_enablePrintPreview(){if(!this.view?.overlay)return;const t=this.templateOptions,e=this._getOverlayItem();this.addHandles([u((()=>[t.width,t.height,t.scaleEnabled,t.scale,t.layout,t.layoutItem,this.view?.scale,this.view?.size,this.view?.state.paddedViewState.size,this.view?.state.padding]),(()=>this._updateOverLayItem()),h),this.view?.on("drag",["Shift"],(t=>this._handleDrag(t)),F.WIDGET),this.view?.on("key-down",["Escape"],(()=>this._resetDrag()),F.WIDGET)],"overlay-handler"),this.view.overlay.addItem(e)}_updateOverLayItem(){if(!this.view)return;const t=this.templateOptions,e=this._getOverlayItem(),o=t.layoutItem?.id??t.layout,s=this.view,i=s.spatialReference,[r,a]=s.state.paddedViewState.size,l=s.state.padding;let p=0,n=0;if("MAP_ONLY"===o)null!=t.width&&null!=t.height&&(p=t.width,n=t.height);else if(o){const{webMapFrameSize:e,pageUnits:s}=this._layoutToTemplateInfo.get(o)??{};let l=!1;if(e&&s)if(this._isFreeHand){const t=e[0]/e[1];p=this._freeHandWidth,n=this._freehandHeight,p>n?n=p/t:p=n*t}else{const t=N.fromJSON(s.toLowerCase()),o=i.unit;y(t)===y(o)?(p=d(e[0],t,o),n=d(e[1],t,o)):(l=!0,p=e[0],n=e[1])}if(!this._isFreeHand)if(t.scaleEnabled&&t.scale){const e=l?Math.min(r/p,a/n):f(i)*j*t.dpi;p*=e,n*=e}else if(0===p||0===n)p=r,n=a;else{const t=(r-.1*r)/p,e=(a-.1*a)/n,o=Math.min(t,e);p*=o,n*=o}}const{scaleEnabled:m,scale:u}=t,h=m&&u?u/this.view.scale:1;e.boxWidth=p*h||r,e.boxHeight=n*h||a,l&&(e.padding=l),e.backgroundWidth=r??0,e.backgroundHeight=a??0}_resetDrag(){this._isFreeHand=!1,this._updateOverLayItem()}_handleDrag(t){switch(t.action){case"start":this._start();break;case"update":this._update(t);break;case"end":this._end()}t.stopPropagation()}_start(){this._isFreeHand=!0}_update(t){const e=this._getOverlayItem(),{x:o,y:s}=t,{x:i,y:r}=t.origin;o>i?(e.x=i,e.boxWidth=o-i):(e.x=o,e.boxWidth=i-o),s>r?(e.y=r,e.boxHeight=s-r):(e.y=s,e.boxHeight=r-s)}_end(){const t=this._getOverlayItem();if(!this.view||null==t.x||null==t.y)return;const e=this.view,o=e.toMap(c(t.x+.5*t.boxWidth,t.y+.5*t.boxHeight));t.x=null,t.y=null,e.goTo({center:o}),this._freeHandWidth=t.boxWidth,this._freehandHeight=t.boxHeight,"MAP_ONLY"===this.templateOptions.layout&&(this.templateOptions.width=this._freeHandWidth,this.templateOptions.height=this._freehandHeight),this.templateOptions.scale=this.view.scale,this._updateOverLayItem()}};t([v()],J.prototype,"_serviceTemplateCustomTextElements",void 0),t([v()],J.prototype,"_layoutToTemplateInfo",void 0),t([v()],J.prototype,"allowedFormats",void 0),t([v()],J.prototype,"allowedLayouts",void 0),t([v({type:q})],J.prototype,"browseTemplates",void 0),t([v({type:q})],J.prototype,"defaultTemplates",void 0),t([v()],J.prototype,"error",void 0),t([v()],J.prototype,"extraParameters",void 0),t([v()],J.prototype,"includeDefaultTemplates",void 0),t([v({readOnly:!0})],J.prototype,"effectivePrintServiceUrl",null),t([v()],J.prototype,"effectiveTemplateCustomTextElements",null),t([v()],J.prototype,"layoutTemplateInfo",null),t([v({type:w})],J.prototype,"portal",void 0),t([v()],J.prototype,"portalTemplateIds",void 0),t([v()],J.prototype,"showPrintAreaEnabled",void 0),t([v()],J.prototype,"printServiceUrl",void 0),t([v()],J.prototype,"printTimeout",void 0),t([v({readOnly:!0})],J.prototype,"state",null),t([v({readOnly:!0})],J.prototype,"templatesInfo",void 0),t([v()],J.prototype,"updateDelay",void 0),t([v()],J.prototype,"view",void 0),t([v()],J.prototype,"templateCustomTextElements",void 0),t([v({type:$})],J.prototype,"templateOptions",void 0),t([v()],J.prototype,"layoutTemplateNorthArrowInfo",null),J=t([b("esri.widgets.Print.PrintViewModel")],J);const Q=J;export{Q as default};