// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Error ../../../core/handleUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../rest/support/FeatureSet ./FeatureLayerView2D ./support/handleNoEngineError ../../layers/StreamLayerView".split(" "),function(f,m,n,l,h,b,v,w,q,p,r,t,u){b=class extends u(r){constructor(){super(...arguments);this.pipelineConnectionStatus=
"disconnected";this.pipelineErrorString=null}initialize(){this.addHandles([l.watch(()=>this.layer.customParameters,async a=>{(await this.getWorker()).streamMessenger.updateCustomParameters(a)}),this.layer.on("send-message-to-socket",async a=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(a)}),this.layer.on("send-message-to-client",async a=>{(await this.getWorker()).streamMessenger.sendMessageToClient(a);this._isUserPaused&&"type"in a&&"clear"===a.type&&this.incrementSourceRefreshVersion()}),
l.watch(()=>this.layer.purgeOptions,()=>this._update()),l.watch(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor");this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new m("stream-controller",this.pipelineErrorString):null}on(a,c){if(Array.isArray(a))return n.handlesGroup(a.map(g=>this.on(g,c)));const k=["data-received","message-received"].includes(a);k&&this.getWorker().then(g=>g.streamMessenger.enableEvent(a,!0));const d=super.on(a,
c),e=this;return n.makeHandle(()=>{d.remove();k&&(e._workerProxy.closed||e.hasEventListener(a)||e.getWorker().then(g=>g.streamMessenger.enableEvent(a,!1)))})}async queryLatestObservations(a,c){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new m("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const k=await this.getWorker();return t.handleNoEngineError(k.features.executeQueryForLatestObservations(this._cleanUpQuery(a),
c).then(d=>{d=p.fromJSON(d);d.features.forEach(e=>{e.layer=this.layer;e.sourceLayer=this.layer});return d}),new p({features:[]}))}detach(){super.detach();this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(a=>
a.streamMessenger.disconnect());this._doPause()}_doConnect(){this.getWorker().then(a=>a.streamMessenger.connect());this.resume()}_doClear(){this.getWorker().then(a=>a.streamMessenger.clear());null==this._refreshInterval&&this.incrementSourceRefreshVersion()}_createClientOptions(){const a=this;return{...super._createClientOptions(),get container(){return a.featureContainer},setProperty:c=>{this.set(c.propertyName,c.value)}}}};f.__decorate([h.property()],b.prototype,"pipelineConnectionStatus",void 0);
f.__decorate([h.property()],b.prototype,"pipelineErrorString",void 0);f.__decorate([h.property({readOnly:!0})],b.prototype,"connectionError",null);f.__decorate([h.property({readOnly:!0})],b.prototype,"_streamConnectionStatus",null);return b=f.__decorate([q.subclass("esri.views.2d.layers.StreamLayerView2D")],b)});