// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass".split(" "),function(c,d,f,e,g,l,m,n,h){c.StreamMessenger=class extends f{constructor(a){super();this._connection=a;this._enabledEventTypes=new Set;this._updateInfo={websocket:0,client:0};this._lastTime=
performance.now();this._queuedCommands=[];this.addHandles([e.watch(()=>this._strategy?.connectionStatus??"disconnected",b=>{this._layerView.setProperty({propertyName:"pipelineConnectionStatus",value:b})},{initial:!0}),e.watch(()=>this._strategy?.errorString||null,b=>this._layerView.setProperty({propertyName:"pipelineErrorString",value:b}),{initial:!0})])}destroy(){this._strategy=null;this.removeAllHandles()}get _layerView(){return this._connection.layerView}set strategy(a){null==this._strategy&&this._resetUpdateInfo(performance.now());
this.removeHandles("event-handles");null!=a&&(this.addHandles([a.events.on("data-received",b=>this._onFeature(b)),a.events.on("message-received",b=>this._onWebSocketMessage(b)),a.events.on("features-updated",b=>this._onUpdate(b)),a.events.on("tick",()=>this._onTick())],"event-handles"),this._queuedCommands.forEach(b=>b(a)),this._queuedCommands=[]);this._strategy=a}updateCustomParameters(a){null!=a&&this._callOrEnqueue(b=>b.updateCustomParameters(a))}sendMessageToSocket(a){this._callOrEnqueue(b=>b.sendMessageToSocket(a))}sendMessageToClient(a){this._callOrEnqueue(b=>
b.sendMessageToClient(a))}enableEvent(a,b){b?this._enabledEventTypes.add(a):this._enabledEventTypes.delete(a)}disconnect(){this._strategy?.disconnect()}connect(){this._strategy?.connect()}clear(){this._strategy?.clear()}_onWebSocketMessage(a){this._enabledEventTypes.has("message-received")&&this._layerView.emitEvent({name:"message-received",event:a})}_onFeature(a){this._updateInfo.websocket++;this._enabledEventTypes.has("data-received")&&this._layerView.emitEvent({name:"data-received",event:{attributes:a.attributes,
centroid:a.centroid,geometry:a.geometry}})}_onUpdate(a){this._updateInfo.client+=a}_onTick(){const a=performance.now();var b=a-this._lastTime;if(2500<b){const k=Math.round(this._updateInfo.client/(b/1E3));b=Math.round(this._updateInfo.websocket/(b/1E3));this._resetUpdateInfo(a);this._layerView.emitEvent({name:"update-rate",event:{client:k,websocket:b}})}}_resetUpdateInfo(a){this._lastTime=a;this._updateInfo.client=0;this._updateInfo.websocket=0}_callOrEnqueue(a){null!=this._strategy?a(this._strategy):
this._queuedCommands.push(a)}};d.__decorate([g.property()],c.StreamMessenger.prototype,"_strategy",void 0);c.StreamMessenger=d.__decorate([h.subclass("esri.views.2d.layers.features.sources.StreamMessenger")],c.StreamMessenger);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});