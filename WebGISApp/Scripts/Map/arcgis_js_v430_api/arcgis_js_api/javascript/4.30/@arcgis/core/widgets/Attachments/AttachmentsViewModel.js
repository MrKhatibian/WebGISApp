/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../Graphic.js";import s from"../../core/Accessor.js";import o from"../../core/Collection.js";import i from"../../core/Error.js";import{watch as r,initial as a}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import{cast as p}from"../../core/accessorSupport/decorators/cast.js";import"../../core/lang.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import l from"../../rest/query/support/AttachmentInfo.js";import c from"../../rest/support/AttachmentQuery.js";import{a as h}from"../../chunks/featureUtils.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/promiseUtils.js";import"../../chunks/maybe.js";import"../../chunks/writer.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";const u={editing:!1,operations:{add:!0,update:!0,delete:!0}},d=o.ofType(l);let j=class extends s{constructor(t){super(t),this._getAttachmentsPromise=null,this._attachmentLayer=null,this.capabilities={...u},this.activeAttachmentInfo=null,this.activeFileInfo=null,this.attachmentInfos=new d,this.fileInfos=new o,this.graphic=null,this.mode="view",this.filesEnabled=!1,this.addHandles(r((()=>this.graphic),(()=>this._graphicChanged()),a))}destroy(){this._attachmentLayer=null,this.graphic=null}castCapabilities(t){return{...u,...t}}get state(){return this._getAttachmentsPromise?"loading":this.graphic?"ready":"disabled"}get supportsResizeAttachments(){const{graphic:t}=this;if(!t)return!1;const e=t.layer||t.sourceLayer;return e?.loaded&&"capabilities"in e&&e.capabilities&&"operations"in e.capabilities&&"supportsResizeAttachments"in e.capabilities.operations&&e.capabilities.operations.supportsResizeAttachments||!1}async getAttachments(){const{_attachmentLayer:t,attachmentInfos:e}=this;if(!t||"function"!=typeof t.queryAttachments)throw new i("invalid-layer","getAttachments(): A valid layer is required.");const s=this._getObjectId(),o=new c({objectIds:[s],returnMetadata:!0}),r=[],a=t.queryAttachments(o).then((t=>t[s]||r)).catch((()=>r));this._getAttachmentsPromise=a,this.notifyChange("state");const n=await a;return e.destroyAll(),n.length&&e.addMany(n),this._getAttachmentsPromise=null,this.notifyChange("state"),n}async addAttachment(t,e=this.graphic){const{_attachmentLayer:s,attachmentInfos:o,capabilities:r}=this;if(!e)throw new i("invalid-graphic","addAttachment(): A valid graphic is required.",{graphic:e});if(!t)throw new i("invalid-attachment","addAttachment(): An attachment is required.",{attachment:t});if(!r.operations?.add)throw new i("invalid-capabilities","addAttachment(): add capabilities are required.");if(!s||"function"!=typeof s.addAttachment)throw new i("invalid-layer","addAttachment(): A valid layer is required.");const a=s.addAttachment(e,t).then((t=>this._queryAttachment(t.objectId,e))),n=await a;return o.add(n),n}async deleteAttachment(t){const{_attachmentLayer:e,attachmentInfos:s,graphic:o,capabilities:r}=this;if(!t)throw new i("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",{attachmentInfo:t});if(!r.operations?.delete)throw new i("invalid-capabilities","deleteAttachment(): delete capabilities are required.");if(!e||"function"!=typeof e.deleteAttachments)throw new i("invalid-layer","deleteAttachment(): A valid layer is required.");if(!o)throw new i("invalid-graphic","deleteAttachment(): A graphic is required.");const a=e.deleteAttachments(o,[t.id]).then((()=>t)),n=await a;return s.remove(n),n.destroy(),n}async updateAttachment(t,e=this.activeAttachmentInfo){const{_attachmentLayer:s,attachmentInfos:o,graphic:r,capabilities:a}=this;if(!t)throw new i("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:t});if(!e)throw new i("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:e});if(!a.operations?.update)throw new i("invalid-capabilities","updateAttachment(): Update capabilities are required.");const n=o.indexOf(e);if(!s||"function"!=typeof s.updateAttachment)throw new i("invalid-layer","updateAttachment(): A valid layer is required.");if(!r)throw new i("invalid-graphic","updateAttachment(): A graphic is required.");const p=s.updateAttachment(r,e.id,t).then((t=>this._queryAttachment(t.objectId))),m=await p;return o.splice(n,1,m),m}async commitFiles(){return await Promise.all(this.fileInfos.items.map((t=>this.addAttachment(t.form)))),this.fileInfos.removeAll(),this.getAttachments()}addFile(t,e){if(!t||!e)return null;const s={file:t,form:e};return this.fileInfos.add(s),s}updateFile(t,e,s=this.activeFileInfo){if(!t||!e||!s)return null;const o=this.fileInfos.indexOf(s);return o>-1&&this.fileInfos.splice(o,1,{file:t,form:e}),this.fileInfos.items[o]}deleteFile(t){const e=this.fileInfos.find((e=>e.file===t));return e?(this.fileInfos.remove(e),e):null}async _queryAttachment(t,e){const{_attachmentLayer:s}=this;if(!t||!s?.queryAttachments)throw new i("invalid-attachment-id","Could not query attachment.");const o=this._getObjectId(e),r=new c({objectIds:[o],attachmentsWhere:`AttachmentId=${t}`,returnMetadata:!0});return s.queryAttachments(r).then((t=>t[o][0]))}_getObjectId(t=this.graphic){return t?.getObjectId()??null}_graphicChanged(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch((()=>{})))}_setAttachmentLayer(){const{graphic:t}=this,e=h(t);this._attachmentLayer=e?"scene"===e.type&&null!=e.associatedLayer?e.associatedLayer:e:null}};t([n()],j.prototype,"capabilities",void 0),t([p("capabilities")],j.prototype,"castCapabilities",null),t([n()],j.prototype,"activeAttachmentInfo",void 0),t([n()],j.prototype,"activeFileInfo",void 0),t([n({readOnly:!0,type:d})],j.prototype,"attachmentInfos",void 0),t([n()],j.prototype,"fileInfos",void 0),t([n({type:e})],j.prototype,"graphic",void 0),t([n()],j.prototype,"mode",void 0),t([n({readOnly:!0})],j.prototype,"state",null),t([n()],j.prototype,"filesEnabled",void 0),t([n({readOnly:!0})],j.prototype,"supportsResizeAttachments",null),j=t([m("esri.widgets.Attachments.AttachmentsViewModel")],j);const y=j;export{y as default};