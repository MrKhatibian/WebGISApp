// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ./graphicUtils ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/ModelDirtyTypes".split(" "),function(m,q,n,e,r,t,u,l){class v{constructor(a,b,f,h){this.graphics3DSymbolLayer=a;this.renderGeometries=b;this.boundingBox=f;this._drapeSourceRenderer=h;this.type="draped";this.stage=null;this.isElevationSource=this._addedToStage=
this._visible=!1}initialize(a){this.stage=a.stage}setVisibility(a){if(null!=this.stage&&this._visible!==a)if((this._visible=a)&&!this._addedToStage)this._addedToStage=!0,this._drapeSourceRenderer.addGeometries(this.renderGeometries,l.DirtyOperation.ADD);else if(a||this._addedToStage){for(const b of this.renderGeometries)b.visible=this._visible;this._drapeSourceRenderer.modifyGeometries(this.renderGeometries,l.DirtyState.VISIBILITY)}}destroy(){this.stage&&this._addedToStage&&this._drapeSourceRenderer.removeGeometries(this.renderGeometries,
l.DirtyOperation.REMOVE);this._visible=this._addedToStage=!1;this.stage=null}getCenterObjectSpace(a=n.create()){return q.set(a,0,0,0)}getBoundingBoxObjectSpace(a=e.create()){return e.empty(a)}addObjectState(a,b){a===u.Object3DState.Highlight&&(this.renderGeometries.forEach(f=>{const h=f.geometry.addHighlight();b.addRenderGeometry(f,h,this)}),this._addedToStage&&this._drapeSourceRenderer.modifyGeometries(this.renderGeometries,l.DirtyState.HIGHLIGHT))}removeObjectState(a){this.renderGeometries.forEach(b=>
{a.removeRenderGeometry(b)})}removeRenderGeometryObjectState(a,b){a.geometry.removeHighlight(b);this._addedToStage&&this._drapeSourceRenderer.modifyGeometries(this.renderGeometries,l.DirtyState.HIGHLIGHT)}computeAttachmentOrigin(a){for(const b of this.renderGeometries)b.geometry.computeAttachmentOrigin(k)&&(a.draped.origin[0]+=k[0],a.draped.origin[1]+=k[1],a.draped.num++)}async getProjectedBoundingBox(a,b,f,h,c){e.empty(c);for(let g=0;g<this.renderGeometries.length;g++)this._getRenderGeometryProjectedBoundingRect(this.renderGeometries[g],
a,p,f),e.expandWithRect(c,p);if(b){e.center(c,k);let g;a=t.demResolutionForBoundingBox(c,b.service.spatialReference,b);try{g=await b.service.queryElevation(k[0],k[1],h,a,"ground")}catch(w){}null!=g&&(c[2]=Math.min(c[2],g),c[5]=Math.max(c[5],g))}return c}_getRenderGeometryProjectedBoundingRect(a,b,f,h){if(this.boundingBox)e.set(d,this.boundingBox);else{a=a.boundingSphere;const c=a[3];d[0]=a[0]-c;d[1]=a[1]-c;d[2]=a[2]-c;d[3]=a[0]+c;d[4]=a[1]+c;d[5]=a[2]+c}b(d,0,2);this.calculateRelativeScreenBounds&&
h.push({location:e.center(d),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()});return e.toRect(d,f)}}const p=r.create(),d=e.create(),k=n.create();m.Graphics3DDrapedGraphicLayer=v;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});