/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import r from"./Symbol3DLayer.js";import{s as i}from"../chunks/utils4.js";import{S as p}from"../chunks/Symbol3DMaterial.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/writer.js";import"./edges/Edges3D.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";var c;let m=c=class extends r{constructor(s){super(s),this.type="extrude",this.size=1,this.material=null,this.castShadows=!0,this.edges=null}clone(){return new c({edges:this.edges?.clone(),enabled:this.enabled,material:this.material?.clone(),castShadows:this.castShadows,size:this.size})}};s([e({Extrude:"extrude"},{readOnly:!0})],m.prototype,"type",void 0),s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],m.prototype,"size",void 0),s([o({type:p,json:{write:!0}})],m.prototype,"material",void 0),s([o({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],m.prototype,"castShadows",void 0),s([o(i)],m.prototype,"edges",void 0),m=c=s([t("esri.symbols.ExtrudeSymbol3DLayer")],m);const a=m;export{a as default};