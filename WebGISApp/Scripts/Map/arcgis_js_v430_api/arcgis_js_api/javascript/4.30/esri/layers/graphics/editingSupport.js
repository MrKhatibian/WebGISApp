// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../Graphic ../../core/Collection ../../core/Error ../../core/lang ../../core/Logger ../../core/promiseUtils ../../core/urlUtils ../../core/uuid ../../geometry/support/normalizeUtils ../../geometry/support/spatialReferenceUtils ../mixins/EditBusLayer ../support/fieldUtils ../support/infoFor3D ../support/layerUtils".split(" "),function(l,E,F,g,G,H,I,J,K,L,p,u,M,v,q){function w(a){return"object"===typeof a&&null!=a&&"objectId"in a&&!!a.objectId}function x(a){return"object"===typeof a&&
null!=a&&"globalId"in a&&!!a.globalId}async function N(a,b,e,f){await a.load();if(null==b?.applyEdits)throw new g(`${a.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:a});if(!q.getEffectiveEditingEnabled(a))throw new g(`${a.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:a});const {edits:d,options:c}=await O(a,e,f);return d.addFeatures?.length||d.updateFeatures?.length||d.deleteFeatures?.length||d.addAttachments?.length||d.updateAttachments?.length||
d.deleteAttachments?.length?{edits:d,results:await b.applyEdits(d,c)}:{edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function O(a,b,e){const f=q.getEffectiveLayerCapabilities(a),d=null!=a.infoFor3D;y(b,f,e,!(!b||!(b.addFeatures||b.updateFeatures||b.deleteFeatures)),!(!b||!(b.addAttachments||b.updateAttachments||b.deleteAttachments)),`${a.type}-layer`);if(!f.data.isVersioned&&
e?.gdbVersion)throw new g(`${a.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!f.editing.supportsRollbackOnFailure&&e?.rollbackOnFailureEnabled)throw new g(`${a.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...e};null!=c.rollbackOnFailureEnabled||f.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=
!0);c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&H.getLogger("esri.layers.graphics.editingSupport").warn(`${a.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),c.rollbackOnFailureEnabled=!0);if(!f.editing.supportsReturnServiceEditsInSourceSpatialReference&&
c.returnServiceEditsInSourceSR)throw new g(`${a.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new g(`${a.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");b=z(b,
f,`${a.type}-layer`);const k=e?.globalIdUsed||d,m=a.fields.filter(h=>"big-integer"===h.type||"oid"===h.type&&8<=(h.length||0));if(k){const {globalIdField:h}=a;if(null==h)throw new g(`${a.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");b.addFeatures.forEach(n=>{({attributes:n}=n);null==n[h]&&(n[h]=K.generateBracedUUID())})}b.addFeatures.forEach(h=>{r(h,a,k,m);A(h,a)});b.updateFeatures.forEach(h=>{r(h,a,k,m);A(h,a);const n=q.getEffectiveLayerCapabilities(a);if("geometry"in
h&&null!=h.geometry&&!n?.editing.supportsGeometryUpdate)throw new g(`${a.type}-layer:unsupported-operation`,"Layer does not support geometry updates.");});b.deleteFeatures.forEach(h=>{r(h,a,k,m)});b.addAttachments.forEach(h=>B(h,a));b.updateAttachments.forEach(h=>B(h,a));d&&await P(b,a);return{edits:await C(b),options:c}}function r(a,b,e,f){if(e){if("attributes"in a&&!a.attributes[b.globalIdField])throw new g(`${b.type}-layer:invalid-parameter`,`Feature should have '${b.globalIdField}' when 'globalIdUsed' is true`);
if(!("attributes"in a||a.globalId))throw new g(`${b.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true");}if(f.length&&"attributes"in a)for(const d of f)if(e=a.attributes[d.name],void 0!==e&&!M.isValidFieldValue(d,e))throw new g(`${b.type}-layer:invalid-parameter`,`Big-integer field '${d.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:a});if("geometry"in a&&null!=a.geometry){if(a.geometry.hasZ&&!1===b.capabilities?.data.supportsZ)throw new g(`${b.type}-layer:z-unsupported`,
"Layer does not support z values while feature has z values.");if(a.geometry.hasM&&!1===b.capabilities?.data.supportsM)throw new g(`${b.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.");}}function A(a,b){if("geometry"in a&&"mesh"===a.geometry?.type&&null!=b.infoFor3D&&null!=b.spatialReference){({geometry:a}=a);const {spatialReference:e,vertexSpace:f}=a;a=b.spatialReference;const d="local"===f.type,c=p.isGeographic(a),k=p.equals(a,e),m=k||p.isWGS84(a)&&(p.isWGS84(e)||
p.isWebMercator(e));if(!(d&&c&&m||!d&&!c&&k))throw new g(`${b.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${f.type} vertex space and a spatial reference wkid:${e.wkid} to a layer with a spatial reference wkid:${a.wkid} is not supported.`);}}function B(a,b){const {feature:e,attachment:f}=a;if(!e||"attributes"in e&&!e.attributes[b.globalIdField])throw new g(`${b.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in e||e.globalId))throw new g(`${b.type}-layer:invalid-parameter`,
"Attachment should have reference to 'globalId' of the parent feature");if(!f.globalId)throw new g(`${b.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!f.data&&!f.uploadId)throw new g(`${b.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(f.data instanceof File&&f.data.name||f.name))throw new g(`${b.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!b.capabilities?.editing.supportsUploadWithItemId&&
f.uploadId)throw new g(`${b.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"===typeof f.data&&(a=J.dataComponents(f.data))&&!a.isBase64)throw new g(`${b.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string");}async function C(a){const b=a.addFeatures??[],e=a.updateFeatures??[];var f=b.concat(e).map(k=>k.geometry);f=await L.normalizeCentralMeridian(f);const d=
b.length,c=e.length;f.slice(0,d).forEach((k,m)=>b[m].geometry=k);f.slice(d,d+c).forEach((k,m)=>e[m].geometry=k);return a}function D(a){return{addFeatures:Array.from(a?.addFeatures??[]),updateFeatures:Array.from(a?.updateFeatures??[]),deleteFeatures:a&&F.isCollection(a.deleteFeatures)?a.deleteFeatures.toArray():a.deleteFeatures||[],addAttachments:a.addAttachments||[],updateAttachments:a.updateAttachments||[],deleteAttachments:a.deleteAttachments||[]}}function z(a,b,e){a=D(a);if(a.addFeatures?.length&&
!b.operations.supportsAdd)throw new g(`${e}:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures?.length&&!b.operations.supportsUpdate)throw new g(`${e}:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures?.length&&!b.operations.supportsDelete)throw new g(`${e}:unsupported-operation`,"Layer does not support deleting features.");a.addFeatures=a.addFeatures.map(t);a.updateFeatures=a.updateFeatures.map(t);a.addAssetFeatures=[];return a}
function y(a,b,e,f,d,c){if(!a||!f&&!d)throw new g(`${c}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!b.editing.supportsGlobalId&&e?.globalIdUsed)throw new g(`${c}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!b.editing.supportsGlobalId&&d)throw new g(`${c}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
if(!e?.globalIdUsed&&d)throw new g(`${c}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");}function t(a){const b=new E;a.attributes||(a.attributes={});b.geometry=a.geometry;b.attributes=a.attributes;return b}async function P(a,b){if(null!=b.infoFor3D){var {infoFor3D:e}=b,f=v.getMimeTypeFormatId("model/gltf-binary",e.supportedFormats)??v.getFilenameFormatId("glb",e.supportedFormats);if(!f||!e.editFormats.includes(f))throw new g(`${b.type}-layer:binary-gltf-asset-not-supported`,
"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");a.addAssetFeatures??(a.addAssetFeatures=[]);({addAssetFeatures:b}=a);for(const d of a.addFeatures??[])"mesh"===d?.geometry?.type&&b.push(d);for(const d of a.updateFeatures??[])"mesh"===d?.geometry?.type&&b.push(d)}}l.applyEdits=async function(a,b,e,f={}){var d="gdbVersion"in a?a.gdbVersion:null;d=f.gdbVersion??d;u.isEditBusLayer(a)&&a.url?d=u.emitApplyEditsEvent(a.url,a.layerId,d,"original-and-current-features"===
f.returnServiceEditsOption):(d=I.createResolver(),d.promise.then(c=>{(c.addedFeatures.length||c.updatedFeatures.length||c.deletedFeatures.length||c.addedAttachments.length||c.updatedAttachments.length||c.deletedAttachments.length)&&a.emit("edits",c)}),a.emit("apply-edits",{result:d.promise}));try{const {results:c,edits:k}=await N(a,b,e,f);b=h=>h.filter(n=>!n.error).map(G.clone);const m={edits:k,addedFeatures:b(c.addFeatureResults),updatedFeatures:b(c.updateFeatureResults),deletedFeatures:b(c.deleteFeatureResults),
addedAttachments:b(c.addAttachmentResults),updatedAttachments:b(c.updateAttachmentResults),deletedAttachments:b(c.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:c.editMoment?new Date(c.editMoment):null,globalIdToObjectId:f.globalIdToObjectId};c.editedFeatureResults?.length&&(m.editedFeatures=c.editedFeatureResults);d.resolve(m);return c}catch(c){throw d.reject(c),c;}};l.checkEditingCapabilities=y;l.isFeatureIdentifierArrayWithGlobalId=function(a){return a.every(x)};l.isFeatureIdentifierArrayWithObjectId=
function(a){return a.every(w)};l.isFeatureIdentifierWithGlobalId=x;l.isFeatureIdentifierWithObjectId=w;l.normalizeCollections=D;l.normalizeEdits=z;l.normalizeGeometries=C;l.shallowCloneFeature=t;l.uploadAssets=function(a,b,e,f){if(null==b?.applyEdits)throw new g(`${a.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:a});if(!b.uploadAssets)throw new g(`${a.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:a});
return b.uploadAssets(e,f)};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});