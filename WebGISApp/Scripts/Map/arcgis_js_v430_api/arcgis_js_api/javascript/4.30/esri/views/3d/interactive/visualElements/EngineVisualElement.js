// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./DrapedVisualElementResources","./VisualElement","./VisualElementResources"],function(b,c,d,e){class f extends d.VisualElement{constructor(a){super(a);this._isDraped=!1;this.object3dResources=new e.VisualElementResources(this.createObject3DResourceFactory(a.view));this.drapedResources=new c.DrapedVisualElementResources(this.createDrapedResourceFactory(a.view));this.isDraped=a.isDraped??!1}get isDraped(){return this._isDraped}set isDraped(a){a!==this._isDraped&&(this._isDraped=
a,this.object3dResources.attached=this.attached&&!a,this.drapedResources.attached=this.attached&&a)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(a){this.drapedResources.renderGroup=a}createResources(){this.object3dResources.attached=!this._isDraped;this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1;this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate();this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry();
this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy();this.drapedResources.destroy();super.destroy()}updateVisibility(a){this.object3dResources.visible=a;this.drapedResources.visible=a}}b.EngineVisualElement=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});