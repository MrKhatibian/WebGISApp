/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{IdentifiableMixin as s}from"../../core/Identifiable.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import o from"../Widget.js";import{isWidget as i}from"../support/widget.js";import{t as n}from"../../chunks/jsxFactory.js";import"../../config.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/Error.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../core/promiseUtils.js";import"../../chunks/maybe.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Evented.js";import"../../core/Promise.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/uuid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/themeUtils.js";let p=class extends(s(o)){constructor(t,s){super(t,s),this.className=null,this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}get disabled(){return!(this.content&&this.listItem)}set disabled(t){this._overrideIfSome("disabled",t)}get icon(){const{image:t}=this,s=this._getFirstWidget();return this._get("icon")??(!t&&s?s.icon:null)}set icon(t){this._overrideIfSome("icon",t)}get title(){return this._get("title")||(this._getFirstWidget()?.label??"")}set title(t){this._override("title",t)}render(){return n("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(t){const{disabled:s,open:e}=this;return t&&!s&&e?"string"==typeof t?n("div",{innerHTML:t,key:t}):i(t)?n("div",{key:"content-widget"},t.render()):t instanceof HTMLElement?n("div",{afterCreate:this._attachToNode,bind:t,key:"content-element"}):null:null}_renderContents(){const{content:t,open:s}=this;return s?Array.isArray(t)?t.map((t=>this._renderContent(t))):this._renderContent(t):null}_attachToNode(t){t.appendChild(this)}_getWidget(t){return i(t)?t:null}_getFirstWidget(){const{content:t}=this;return Array.isArray(t)?t.map((t=>this._getWidget(t))).find((t=>t)):this._getWidget(t)}};t([e()],p.prototype,"className",void 0),t([e()],p.prototype,"content",void 0),t([e()],p.prototype,"disabled",null),t([e()],p.prototype,"flowEnabled",void 0),t([e()],p.prototype,"icon",null),t([e()],p.prototype,"image",void 0),t([e()],p.prototype,"listItem",void 0),t([e()],p.prototype,"open",void 0),t([e()],p.prototype,"title",null),t([e()],p.prototype,"visible",void 0),p=t([r("esri.widgets.TableList.ListItemPanel")],p);const c=p;export{c as default};