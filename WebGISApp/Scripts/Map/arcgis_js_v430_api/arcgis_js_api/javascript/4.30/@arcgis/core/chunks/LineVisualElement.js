/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{c as e}from"./mat4.js";import{c as t}from"./mat4f64.js";import{s as r,h as s}from"./vec3.js";import{Z as o,c as i}from"./vec3f64.js";import{f as a,a as n}from"./vec4f64.js";import{O as l}from"./Object3DVisualElement.js";import{l as m,c as p}from"./line.js";import{R as h}from"./Material.js";import{R as d}from"./RibbonLineMaterial.js";class f extends l{constructor(e,t){super(e),this._hasExternalMaterial=!1,this._hasExternalMaterial=null!=t,this._material=null!=t?t:new d({width:1,color:a(1,0,1,1),stippleOffColor:null,stipplePattern:null,stipplePreferContinuous:!0,isClosed:!1,falloff:0,innerColor:null,innerWidth:1,hasPolygonOffset:!1,renderOccluded:h.OccludeAndTransparent,isDecoration:!!e.isDecoration,writeDepth:!0}),this.applyProperties(e)}setGeometryFromRenderSpacePoint(e,t=1e3){this.geometry=[[[e[0]-t,e[1],e[2]],[e[0]+t,e[1],e[2]]],[[e[0],e[1]-t,e[2]],[e[0],e[1]+t,e[2]]],[[e[0],e[1],e[2]-t],[e[0],e[1],e[2]+t]]]}setGeometryFromExtent(e){const t=this.view.spatialReference,s=i(),o=i(),a=100,n=[];r(s,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(s,t,o),n.push([o[0],o[1],o[2]]),r(s,e[2],e[1],a),this.view.renderCoordsHelper.toRenderCoords(s,t,o),n.push([o[0],o[1],o[2]]),r(s,e[2],e[3],a),this.view.renderCoordsHelper.toRenderCoords(s,t,o),n.push([o[0],o[1],o[2]]),r(s,e[0],e[3],a),this.view.renderCoordsHelper.toRenderCoords(s,t,o),n.push([o[0],o[1],o[2]]),r(s,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(s,t,o),n.push([o[0],o[1],o[2]]),r(s,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(s,t,o),n.push([o[0],o[1],o[2]]),this.geometry=[n]}setGeometryFromFrustum(e){const t=[];e.lines.forEach((e=>{t.push([e.origin[0],e.origin[1],e.origin[2]]),t.push([e.endpoint[0],e.endpoint[1],e.endpoint[2]])})),this.geometry=[t]}setGeometryFromBoundedPlane(e){const t=[],r=e.origin,s=e.basis1,o=e.basis2,a=.5,n=i(),l=i(),m=i(),p=i();n[0]=r[0]-s[0]*a-o[0]*a,n[1]=r[1]-s[1]*a-o[1]*a,n[2]=r[2]-s[2]*a-o[2]*a,l[0]=r[0]-s[0]*a+o[0]*a,l[1]=r[1]-s[1]*a+o[1]*a,l[2]=r[2]-s[2]*a+o[2]*a,m[0]=r[0]+s[0]*a+o[0]*a,m[1]=r[1]+s[1]*a+o[1]*a,m[2]=r[2]+s[2]*a+o[2]*a,p[0]=r[0]+s[0]*a-o[0]*a,p[1]=r[1]+s[1]*a-o[1]*a,p[2]=r[2]+s[2]*a-o[2]*a,t.push([n[0],n[1],n[2]]),t.push([l[0],l[1],l[2]]),t.push([m[0],m[1],m[2]]),t.push([p[0],p[1],p[2]]),t.push([n[0],n[1],n[2]]),this.geometry=[t]}setGeometryFromSegment(t){const r=t.endRenderSpace;this.transform=e(u,r);const{points:s}=t.createRenderGeometry(r,this.view.renderCoordsHelper);this.geometry=[s]}setGeometryFromSegments(t,r=o){this.transform=e(u,r),this.geometry=t.map((e=>e.createRenderGeometry(r,this.view.renderCoordsHelper).points))}getTransformedGeometry(){return null==this._geometry?null:this._geometry.map((e=>e.map((e=>s(i(),e,this.transform)))))}get renderOccluded(){return this._material.parameters.renderOccluded}set renderOccluded(e){this._material.setParameters({renderOccluded:e})}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._material.parameters.width}set width(e){this._material.setParameters({width:e})}get color(){return this._material.parameters.color}set color(e){const t=1===e[3];this._material.setParameters({color:n(e),writeDepth:t})}get innerWidth(){return this._material.parameters.innerWidth}set innerWidth(e){this._material.setParameters({innerWidth:e})}get innerColor(){return this._material.parameters.innerColor}set innerColor(e){this._material.setParameters({innerColor:null!=e?n(e):null})}get stipplePattern(){return this._material.parameters.stipplePattern}set stipplePattern(e){null!=this._material&&this._material.setParameters({stipplePattern:e})}get stippleOffColor(){return this._material.parameters.stippleOffColor}set stippleOffColor(e){this._material.setParameters({stippleOffColor:null!=e?n(e):null})}get stipplePreferContinuous(){return this._material.parameters.stipplePreferContinuous}set stipplePreferContinuous(e){this._material.setParameters({stipplePreferContinuous:e})}get falloff(){return this._material.parameters.falloff}set falloff(e){this._material.setParameters({falloff:e})}get polygonOffset(){return this._material.parameters.hasPolygonOffset}set polygonOffset(e){this._material.setParameters({hasPolygonOffset:e})}createExternalResources(){}destroyExternalResources(){}createGeometries(e){for(const t of m(this.geometry)){const r=p(this._material,t);e.addGeometry(r)}}forEachExternalMaterial(e){this._hasExternalMaterial||e(this._material)}}const u=t();export{f as L};