// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/asyncUtils ../../core/Collection ../../core/deprecate ../../core/Error ../../core/Evented ../../core/handleUtils ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/support/UpdatingHandles ../../layers/GraphicsLayer ../../layers/support/editableLayers ../../layers/support/layerUtils ../../portal/support/urlUtils ../../views/interactive/sketch/SketchOptions ../../views/interactive/snapping/SnappingManager ../../views/interactive/snapping/SnappingOptions ../Attachments/AttachmentsViewModel ./CreateFeaturesWorkflow ./UpdateWorkflow ./workflowUtils ./support/EditorItem ../FeatureTemplates/FeatureTemplatesViewModel ../Sketch/SketchViewModel ../Spinner/SpinnerViewModel".split(" "),
function(f,E,v,y,r,e,F,w,t,z,k,g,X,Y,G,H,I,J,A,K,L,M,B,N,O,P,C,Q,R,S,T){function p(a,b,c){w.getLogger("esri.widgets.Editor.EditorViewModel").error(new r(a,b,c))}function U(a,b){return a?.find(c=>c.layer===b)}const D=["create-features","update"];e=class extends e.EventedAccessor{constructor(a){super(a);this._sketchEventListenerHandle=null;this._sketchGraphicsLayer=new I({listMode:"hide",internal:!0});this._updateItemsTask=this._snappingManager=null;this._updatingHandles=new H.UpdatingHandles;this._featureTemplatesViewModelLocked=
!1;this.activeWorkflow=null;this._activityQueue=new v;this.editorItems=new v;this.failures=[];this.hideTemplatesForInactiveLayers=!1;this.attachmentsViewModel=new N({capabilities:{editing:!0}});this.featureTemplatesViewModel=new R({disabledItemFunction:({layer:b})=>this._itemIsSuspended(b)});this.layerInfos=null;this.ownSketchViewModel=new S({layer:this._sketchGraphicsLayer});this.sketchOptions=new L;this.snappingOptions=new B({attributeRulesEnabled:!0});this.spinnerViewModel=new T;this.pageStack=
[];this.showDiscardEditsPrompt=()=>Promise.resolve(!0);this._candidateCommitted=!1;this.back=async()=>{this.canGoBack&&(this.activeWorkflow?.hasPreviousStep?await this.activeWorkflow.back(this.showDiscardEditsPrompt):await this._cancelWorkflow({force:!this.hasPendingEdits}))};this.saveWorkflow=async()=>{const {featureFormViewModel:b}=this;if(b){b.submit();if(!b.submittable||b.hasPendingSubtypeChoice)return;const c=b.getValues();if(0<b.validateContingencyConstraints(c,{includeIncompleteViolations:!0}).length)return}await this.activeWorkflow?.save()};
this.selectFeature=(b,c=!1)=>{const d=this.activeWorkflow;this._candidateCommitted||"update"!==d?.type||(d.data.rootFeature=b,c&&(d.next(),this._candidateCommitted=!0))}}initialize(){this.addHandles([k.watch(()=>{var a=this.view;const b=a?.map?.editableLayers;a=a?.allLayerViews?.filter(c=>!!b?.includes(c.layer));return[b,a,this.layerInfos,this.allowedWorkflows]},()=>this._updateEditorItems(),k.syncAndInitial),k.watch(()=>this.hideTemplatesForInactiveLayers,()=>this.syncFeatureTemplates()),k.on(()=>
this.activeWorkflow,"cancel",()=>this.emit("workflow-cancel")),k.on(()=>this.activeWorkflow,"commit",()=>this.emit("workflow-commit")),k.on(()=>this.activeWorkflow,"complete",()=>{this.emit("workflow-commit");this._set("activeWorkflow",null)}),k.when(()=>this.view?.map,a=>a.add(this._sketchGraphicsLayer),k.initial),k.on(()=>this.editorItems,"change",()=>this._afterEditorItemsChange()),k.watch(()=>[this.canCreate,this.canUpdateVisible],()=>this._afterEditorItemsChange()),k.watch(()=>this.page,(a,b)=>
{b=[...this.pageStack];if(-1===b.indexOf(a))b.push(a);else for(;b.length&&b.at(-1)!==a;)b.pop();this.pageStack=b},k.syncAndInitial),k.when(()=>"awaiting-update-feature-candidate"===this.state,()=>this._candidateCommitted=!1),k.on(()=>this.featureTemplatesViewModel,"select",async({item:a,oldItem:b})=>{var {activeWorkflow:c}=this;if(c){if("update"===c.type&&"awaiting-feature-creation-info"===c.activeWorkflow?.stepId)return;try{await this.cancelWorkflow({force:!this.hasPendingEdits})}catch{this.featureTemplatesViewModel.select(b,
{emit:!1});return}}if(a){c={layer:a.layer,template:a.template};if(a.supportsUpload)return this.featureTemplatesViewModel.select(b,{emit:!1}),this.startCreateFeaturesWorkflow(c);this.startCreateFeaturesWorkflowAtFeatureCreation(c)}}),k.on(()=>this.view,"key-down",a=>{"Escape"===a.key&&this.activeWorkflow?.keyboardCancellationEnabled&&(a.stopPropagation(),this.back())}),k.on(()=>this.sketchViewModel,["create","delete","update"],a=>{const {activeWorkflow:b}=this,c="update"===b?.type,d=`sketch-${a.type}`;
this.emit(d,{type:d,detail:a,layer:c?b.activeWorkflow?.layer:b?.layer,parentLayer:c?b?.activeWorkflow?.parentLayer:void 0})},k.sync),k.watch(()=>this.view,a=>{this._snappingManager=t.destroyMaybe(this._snappingManager);a&&(this._snappingManager=new M.SnappingManager({view:a,options:this.snappingOptions}))},k.syncAndInitial),k.watch(()=>this.snappingOptions,a=>{this._snappingManager&&(this._snappingManager.options=a)},k.syncAndInitial)])}destroy(){this._cancelWorkflow({warnIfNoWorkflow:!1}).then(()=>
{this.view?.map?.remove(this._sketchGraphicsLayer);this.view=null});this._updateItemsTask=t.abortMaybe(this._updateItemsTask);this._updatingHandles.destroy();this._sketchEventListenerHandle=t.removeMaybe(this._sketchEventListenerHandle)}get allowedWorkflows(){return this._get("allowedWorkflows")}set allowedWorkflows(a){y.deprecatedProperty(w.getLogger(this),"allowedWorkflows",{replacement:"Editor.visibleElements",version:"4.29",warnOnce:!0});a&&0!==a.length||(a=[...D]);this._set("allowedWorkflows",
a)}get canCreate(){return this.editorItems.some(a=>a.supportsCreateFeaturesWorkflow)}get canCreateVisible(){return!!this.featureTemplatesLayers.length}get canUpdate(){return this.editorItems.some(a=>a.supportsUpdateWorkflow)}get canUpdateVisible(){return this.editorItems.some(a=>a.supportsUpdateWorkflow&&a.visible)}get featureTemplatesLayers(){const a=new v;for(const b of this.editorItems){const c=this.hideTemplatesForInactiveLayers&&!b.visible;!b.supportsCreateFeaturesWorkflow||b.isTable||c||a.push(b.layer)}return a}get editableItems(){y.deprecatedProperty(w.getLogger(this),
"editableItems",{replacement:"editorItems",version:"4.29",warnOnce:!0});return this.editorItems.map(a=>{const {capabilities:b,disabled:c,hasInvalidFormTemplate:d,layer:h}=a;a=[];const n=b.create,m=b.update,l=b.delete;n.enabled&&a.push("create");m.enabled&&a.push("update");l.enabled&&a.push("delete");return{layer:h,supports:a,suspended:c,attributeUpdatesEnabled:m.attributes,geometryUpdatesEnabled:m.geometry,attachmentsOnCreateEnabled:n.attachments.enabled,attachmentsOnUpdateEnabled:m.attachments.enabled,
hasInvalidFormTemplate:d,hasAttachments:b.attachments.enabled}})}get featureFormViewModel(){const {activeWorkflow:a}=this;return"update"===a?.type?a.activeFeatureFormViewModel:"create-features"===a?.type?a.featureFormViewModel:null}get labelOptions(){return this.sketchOptions.labels}set labelOptions(a){this.sketchOptions.labels=a}get sketchViewModel(){const {activeWorkflow:a}=this;return"update"===a?.type?a.activeSketchViewModel:"create-features"===a?.type?a.sketchViewModel:this.ownSketchViewModel}get state(){if(!this.view?.ready)return"disabled";
var a=this.attachmentsViewModel.mode;if("add"===a)return"adding-attachment";if("edit"===a)return"editing-attachment";({activeWorkflow:a}=this);return a?.stepId?"update"===a.type&&a.activeWorkflow?.stepId?a.activeWorkflow.stepId:a.stepId:"ready"}get syncing(){return 0<this._activityQueue.length}get updating(){return this._updatingHandles.updating||!0===this.activeWorkflow?.updating}get tooltipOptions(){return this.sketchOptions.tooltips}set tooltipOptions(a){this.sketchOptions.tooltips=a}get valueOptions(){return this.sketchOptions.values}set valueOptions(a){this.sketchOptions.values=
a}set view(a){this.ownSketchViewModel.view=a;this.spinnerViewModel.view=a;this._set("view",a)}get page(){const {activeWorkflow:a,state:b}=this;if("update"===a?.type&&"awaiting-feature-to-update"===a.stepId)return"ready";if("create-features"===a?.type&&0===a.numPendingFeatures){const c=a.data.upload;if(c)return"default"===c.state?"ready":"creating-features-upload-details"}return b??"disabled"}get featureFormDisabled(){const {activeWorkflow:a}=this;return"update"===a?.type&&!1===a.activeEditorItem?.capabilities.update.attributes}get canGoBack(){return null!=
this.activeWorkflow&&!this.syncing}get shouldShowDeleteButton(){const {activeWorkflow:a}=this;return!!a&&"update"===a.type&&!!a.activeEditorItem?.capabilities.delete.enabled}get hasPendingEdits(){return this.activeWorkflow?.hasPendingEdits??!1}async startCreateFeaturesWorkflowAtFeatureTypeSelection(){return this.startCreateFeaturesWorkflow()}async startCreateFeaturesWorkflowAtFeatureCreation(a){return this.startCreateFeaturesWorkflow(a,"creating-features")}async startCreateFeaturesWorkflow(a,b="awaiting-feature-creation-info"){await k.whenOnce(()=>
!this.updating);if(!this.canCreate)throw new r("editing:unsupported-workflow","Creating features is unsupported or disabled.");const c=this._createUpdatingResolver();try{await this._cancelWorkflow();const d=this._createCreateFeaturesWorkflow(a,b);this._set("activeWorkflow",d);await d.start()}catch(d){this._logErrorAndCancelWorkflow(d)}finally{c.resolve()}}async startCreateFeaturesWorkflowAtFeatureEdit(a){await k.whenOnce(()=>!this.updating);const b=this._createUpdatingResolver();try{({initialFeature:a}=
a);const c=a.sourceLayer=a.layer,d=c?this.findEditorItemForLayer(c):void 0;if(!d?.supportsCreateFeaturesWorkflow)throw new r("editing:unsupported-workflow","Creating features is unsupported or disabled for this layer.");await this._cancelWorkflow();const h=this._createCreateFeaturesWorkflow({initialFeature:a,layer:d.layer,maxFeatures:1},"creating-features");this._set("activeWorkflow",h);await h.start()}catch(c){this._logErrorAndCancelWorkflow(c)}finally{b.resolve()}}async startUpdateWorkflowAtFeatureSelection(){await k.whenOnce(()=>
!this.updating);if(this.canUpdate){var a=this._createUpdatingResolver();try{await this._cancelWorkflow();const b=this._createUpdateWorkflow();this._set("activeWorkflow",b);await b.start()}catch(b){this._logErrorAndCancelWorkflow(b)}finally{a.resolve()}}else p("editing:unsupported-workflow","Update workflow is unsupported or disabled.")}async startUpdateWorkflowAtMultipleFeatureSelection(a){await k.whenOnce(()=>!this.updating);if(this.canUpdate){var b=this._createUpdatingResolver();try{await this._cancelWorkflow();
const c=this._createUpdateWorkflow("awaiting-update-feature-candidate");c.data.candidates=a;this._set("activeWorkflow",c);await c.start()}catch(c){this._logErrorAndCancelWorkflow(c)}finally{b.resolve()}}else p("editing:unsupported-workflow","Update workflow is unsupported or disabled.")}async startUpdateWorkflowAtFeatureEdit(a){await k.whenOnce(()=>!this.updating);if(this.canUpdate){var b=this._createUpdatingResolver();try{await this._cancelWorkflow();const c=this._createUpdateWorkflow("editing-existing-feature");
c.data.rootFeature=a;this._set("activeWorkflow",c);await c.start()}catch(c){this._logErrorAndCancelWorkflow(c)}finally{b.resolve()}}else p("editing:unsupported-workflow","Update workflow is unsupported or disabled.")}async deleteFeatureFromWorkflow(){const {activeWorkflow:a}=this;a&&"update"===a.type?await a.deleteActiveFeature():p("editing:unsupported-workflow","Deleting requires an active update workflow.")}async cancelWorkflow(a){return this._cancelWorkflow({warnIfNoWorkflow:!0,...a})}findEditorItemForLayer(a){return this.editorItems.find(b=>
b.layer===a)}itemHasInvalidFormTemplate(a){return null!=a&&!0===this.findEditorItemForLayer(a.layer)?.hasInvalidFormTemplate}syncFeatureTemplates(){this._featureTemplatesViewModelLocked||(this.featureTemplatesViewModel.layers=this.featureTemplatesLayers.toArray())}async toggleUpdateWorkflow(){!this.canUpdate||this.hasPendingEdits&&!await this.showDiscardEditsPrompt()||(this.activeWorkflow&&"awaiting-feature-to-update"===this.state?await this.cancelWorkflow({force:!0}):await this.startUpdateWorkflowAtFeatureSelection())}lockFeatureTemplatesViewModel(){this._featureTemplatesViewModelLocked=
!0;return F.makeHandle(()=>{this._featureTemplatesViewModelLocked=!1;this.syncFeatureTemplates()})}async _getEditorItemCandidates(a){const {view:b}=this;if(!b?.map)return[];var {map:c}=b;const d=c.editableLayers.toArray()??[];c=c.allTables.toArray().filter(A.isFeatureLayer)??[];await Promise.allSettled([...d.map(h=>"subtype-group"===h.type?h.loadAll():Promise.resolve()),...c.map(h=>h.load())]);z.throwIfAborted(a);return[...d.reverse(),...c.reverse()].filter(h=>J.isEditableLayer(h)&&("mesh"!==h.geometryType||
"3d"===b.type)).flatMap(h=>"subtype-group"===h.type?h.sublayers.toArray():h)}_drainEditorItems(){this.editorItems.drain(a=>a.destroy())}async _updateEditorItems(){t.abortMaybe(this._updateItemsTask);const {view:a}=this,b=E.createTask(async c=>{if(a?.map&&a?.allLayerViews){var d=await this._getEditorItemCandidates(c);if(d.length){var h=[],n=[],m=[],{layerInfos:l}=this;for(const q of d){d=U(l,q);const u=await C.whenEditorLayerView(a,q).catch(()=>null);(d?h:u?n:m).push(new Q({layer:q,layerInfo:d,layerView:u}))}l?.length&&
h.sort((q,u)=>{const V=l.findIndex(({layer:x})=>x===q.layer),W=l.findIndex(({layer:x})=>x===u.layer);return V-W});h=[...h,...n,...m];c.aborted||(this._drainEditorItems(),this.editorItems.addMany(h))}else this._drainEditorItems()}});this._updatingHandles.addPromise(b.promise);this._updateItemsTask=b}_afterEditorItemsChange(){const {activeWorkflow:a}=this;this.syncFeatureTemplates();if(a){var {stepId:b}=a;"create-features"===a.type?"awaiting-feature-creation-info"!==b||this.canCreate||this._cancelWorkflow():
"update"===a.type&&("awaiting-feature-to-update"===b&&!this.canUpdateVisible||"awaiting-update-feature-candidate"===b&&!a.hasUpdatableCandidates)&&this._cancelWorkflow()}}async _cancelWorkflow(a){const b=this.activeWorkflow;b?a&&!1===a.force?(await b.cancel(a),this._set("activeWorkflow",null)):(this.emit("workflow-cancel"),this._set("activeWorkflow",null),await b.cancel(a)):a?.warnIfNoWorkflow&&p("editing:no-active-workflow","There is no active workflow to cancel.")}_createCreateFeaturesWorkflow(a,
b){return O.create({viewModel:this,creationInfo:a,sketchOptions:this.sketchOptions,snappingManager:this._snappingManager,startAt:b,applyEditsCallback:(c,d,h)=>this._applyEdits(c,d,h),addAttachmentsCallback:(c,d)=>this._addAttachments(c,d)})}_createUpdateWorkflow(a){return P.create({viewModel:this,sketchOptions:this.sketchOptions,snappingManager:this._snappingManager,startAt:a,applyEditsCallback:(b,c,d)=>this._applyEdits(b,c,d),addAttachmentsCallback:(b,c)=>this._addAttachments(b,c)})}_addAttachments(a,
b){b=b.map(c=>this._addAttachment(a,c.feature,c.attachment))??[];return Promise.all(b)}async _addAttachment(a,b,c){let d=null;if(!("addAttachment"in a)||null==a.capabilities?.attachment)throw new r("editor:attachments-not-supported","Adding attachments is not supported for this layer type");await this._queueOperation(async()=>d=await a.addAttachment?.(b,c).catch(h=>{throw h?.error||h;})??null);return d}async _applyEdits(a,b,c){let d=null;const h=a.url?await A.getOwningPortalUrl(a.url):null,n={returnServiceEditsOption:h&&
K.parseKnownArcGISOnlineDomain(h)||RegExp("/hosted/","i").test(a.url)?void 0:"original-and-current-features",...c};await this._queueOperation(async()=>{const {view:m}=this;if(!m)return null;const l=await C.whenEditorLayerView(m,a).catch(()=>null);d=await a.applyEdits(b,n);l&&await k.whenOnce(()=>!l.updating);return d});return d}_queueOperation(a){this._activityQueue.push(a);const b=(c,d)=>{c=d.indexOf(c);-1<c&&d.splice(c,1)};return a().then(c=>{if(null!=c&&"error"in c&&null!=c.error)throw c.error;
if(null!=c&&"addFeatureResults"in c){const {addFeatureResults:d,deleteFeatureResults:h,updateFeatureResults:n}=c,m=d.find(l=>!!l.error)||n.find(l=>!!l.error)||h.find(l=>!!l.error);if(m)throw m.error;}return c}).catch(c=>{p("editing:operation-error","An error occurred.",{error:c});const d={error:c,retry:()=>{b(d,this.failures);return this._queueOperation(a)},cancel:()=>{b(d,this.failures)}};this._set("failures",[...this.failures,d])}).then(()=>{b(a,this._activityQueue)})}_createUpdatingResolver(){const a=
z.createResolver();this._updatingHandles.addPromise(a.promise);return a}_logErrorAndCancelWorkflow(a){const {name:b,message:c,details:d}=a;p(b??"editing:workflow-start-failed",c??void 0,d??a);this._cancelWorkflow({force:!0})}_itemIsSuspended(a){a=this.findEditorItemForLayer(a);return null!=a&&(!a.visible||a.disabled)}};f.__decorate([g.property({readOnly:!0})],e.prototype,"activeWorkflow",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"_activityQueue",void 0);f.__decorate([g.property({value:[...D]})],
e.prototype,"allowedWorkflows",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"canCreate",null);f.__decorate([g.property()],e.prototype,"canCreateVisible",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"canUpdate",null);f.__decorate([g.property()],e.prototype,"canUpdateVisible",null);f.__decorate([g.property()],e.prototype,"featureTemplatesLayers",null);f.__decorate([g.property()],e.prototype,"editableItems",null);f.__decorate([g.property()],e.prototype,"editorItems",void 0);
f.__decorate([g.property({readOnly:!0})],e.prototype,"failures",void 0);f.__decorate([g.property()],e.prototype,"hideTemplatesForInactiveLayers",void 0);f.__decorate([g.property()],e.prototype,"attachmentsViewModel",void 0);f.__decorate([g.property()],e.prototype,"featureFormViewModel",null);f.__decorate([g.property()],e.prototype,"featureTemplatesViewModel",void 0);f.__decorate([g.property()],e.prototype,"labelOptions",null);f.__decorate([g.property()],e.prototype,"layerInfos",void 0);f.__decorate([g.property()],
e.prototype,"ownSketchViewModel",void 0);f.__decorate([g.property()],e.prototype,"sketchOptions",void 0);f.__decorate([g.property()],e.prototype,"sketchViewModel",null);f.__decorate([g.property({type:B,nonNullable:!0})],e.prototype,"snappingOptions",void 0);f.__decorate([g.property()],e.prototype,"spinnerViewModel",void 0);f.__decorate([g.property()],e.prototype,"state",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"syncing",null);f.__decorate([g.property()],e.prototype,"updating",null);
f.__decorate([g.property()],e.prototype,"tooltipOptions",null);f.__decorate([g.property()],e.prototype,"valueOptions",null);f.__decorate([g.property()],e.prototype,"view",null);f.__decorate([g.property()],e.prototype,"pageStack",void 0);f.__decorate([g.property()],e.prototype,"showDiscardEditsPrompt",void 0);f.__decorate([g.property()],e.prototype,"_candidateCommitted",void 0);f.__decorate([g.property()],e.prototype,"page",null);f.__decorate([g.property()],e.prototype,"featureFormDisabled",null);
f.__decorate([g.property()],e.prototype,"canGoBack",null);f.__decorate([g.property()],e.prototype,"shouldShowDeleteButton",null);f.__decorate([g.property()],e.prototype,"hasPendingEdits",null);return e=f.__decorate([G.subclass("esri.widgets.Editor.EditorViewModel")],e)});