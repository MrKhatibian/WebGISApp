/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import o,{l as r}from"./Widget.js";import i from"./Compass/CompassViewModel.js";import{g as c}from"../chunks/globalCss.js";import"../chunks/widgetUtils.js";import{m as n}from"../chunks/messageBundle.js";import{t as p}from"../chunks/jsxFactory.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../chunks/maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/utils20.js";import"./support/GoTo.js";const m="esri-compass",a={base:m,iconContainer:`${m}__icon-container`};let l=class extends o{constructor(s,e){super(s,e),this.messages=null,this.viewModel=new i,this._reset=()=>{this.viewModel.reset()},this._toRotationTransform=s=>({transform:`rotateZ(${s.z}deg)`})}loadDependencies(){return r({button:()=>import("../chunks/calcite-button.js"),icon:()=>import("../chunks/calcite-icon.js")})}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(s){this.viewModel.goToOverride=s}get icon(){return"rotation"===this.viewModel.state?"arrow-up":"compass-needle"}set icon(s){this._overrideIfSome("icon",s)}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}reset(){return this.viewModel.reset()}render(){const{orientation:s,state:e}=this.viewModel,{messages:t}=this;return p("div",{class:this.classes(a.base,c.widget)},p("calcite-button",{class:c.widgetButton,disabled:"disabled"===e,kind:"neutral",label:t.reset,onclick:this._reset,round:!0,scale:"s",title:t.reset},p("div",{"aria-hidden":"true",class:a.iconContainer,title:t.reset},p("calcite-icon",{icon:this.icon,styles:this._toRotationTransform(s)}))))}};s([e()],l.prototype,"goToOverride",null),s([e()],l.prototype,"icon",null),s([e()],l.prototype,"label",null),s([e(),n("esri/widgets/Compass/t9n/Compass")],l.prototype,"messages",void 0),s([e()],l.prototype,"view",null),s([e({type:i})],l.prototype,"viewModel",void 0),l=s([t("esri.widgets.Compass")],l);const u=l;export{u as default};