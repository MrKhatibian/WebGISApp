/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{s}from"../../chunks/substitute.js";import i from"./Grid/Column.js";import{a as r}from"../../chunks/tableUtils.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../core/Evented.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/uriUtils.js";import"../../chunks/widgetUtils.js";let l=class extends i{constructor(t){super(t),this.flexGrow=1,this.icon="link",this.layer=null,this.relatedLayer=null,this.relationshipId=null,this.renderFunction=({root:t,rowData:e})=>{if(!e)return;const o=e.item,{layer:i,relatedLayer:l}=this;if(!o?.feature||!r(i)||!r(l))return;const{messages:n}=this,{index:a}=e,{feature:p}=o,{collapsed:c,showRelatedTableCallback:h,relationshipId:d}=this,u=o.relatedRecords,m=u?.find((t=>t.relationshipId===d))?.count??0,j=!c&&h&&n?.recordsCount?s(n.recordsCount,{count:m}):`${m}`,b=t=>{t.preventDefault(),c||this.showRelatedTableCallback?.({feature:p,index:a,layer:i,relatedLayer:l,relationshipId:d})},y=c?"":"chevron-right";if(t.firstChild){const e=t.firstChild;return e.textContent=j,e.onclick=b,void(e.iconEnd=y)}const k=this.createCalciteButton({className:"esri-column__show-related-records-button",iconEnd:y,iconFlipRtl:"both",scale:"m",textContent:j,onclick:b});this.removeCellContent(t),t.appendChild(k)},this.resizable=!0,this.showRelatedTableCallback=null,this.textAlign="center",this.width="200px"}get _relationshipLabel(){return this.label||this.originRelationship?.name||this.layer.title||""}get collapsed(){return this._get("collapsed")||!1}set collapsed(t){t?this.set({flexGrow:0,resizable:!1,width:"80px"}):this.set({flexGrow:1,resizable:!0,width:"200px"}),this._set("collapsed",t)}get effectiveLabel(){return this.collapsed?"":this._relationshipLabel}get iconNode(){const{icon:t}=this;return t?this.createCalciteIcon({icon:t,textLabel:this._relationshipLabel}):null}get originRelationship(){const t=this.relationshipId;return this.relatedLayer.relationships?.find((({id:e})=>e===t))}get relationship(){const t=this.relationshipId;return this.layer.relationships?.find((({id:e})=>e===t))}};t([e()],l.prototype,"_relationshipLabel",null),t([e()],l.prototype,"collapsed",null),t([e()],l.prototype,"effectiveLabel",null),t([e()],l.prototype,"flexGrow",void 0),t([e()],l.prototype,"icon",void 0),t([e()],l.prototype,"iconNode",null),t([e()],l.prototype,"layer",void 0),t([e()],l.prototype,"originRelationship",null),t([e()],l.prototype,"relatedLayer",void 0),t([e()],l.prototype,"relationship",null),t([e()],l.prototype,"relationshipId",void 0),t([e()],l.prototype,"renderFunction",void 0),t([e()],l.prototype,"resizable",void 0),t([e()],l.prototype,"showRelatedTableCallback",void 0),t([e()],l.prototype,"textAlign",void 0),t([e()],l.prototype,"width",void 0),l=t([o("esri.widgets.FeatureTable.RelationshipColumn")],l);const n=l;export{n as default};