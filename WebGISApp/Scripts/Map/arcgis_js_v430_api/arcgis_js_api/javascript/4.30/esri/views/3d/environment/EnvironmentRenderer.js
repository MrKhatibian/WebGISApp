// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/has ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/ellipsoidUtils ../../../geometry/support/spatialReferenceUtils ../../ViewingMode ./AtmosphereType ./ChapmanAtmosphere ./CloudsComposition ./CloudsData ./CloudsGenerator ./CloudsParameters ./CloudsPresets ./Fog ./LocalAtmosphere ./MarsAtmosphere ./Precipitation ./Stars ./weather ../webgl-engine/effects/RenderPlugin ../webgl-engine/lib/RenderSlot ../webgl-engine/lib/Update".split(" "),
function(d,e,O,m,f,h,g,P,Q,B,n,w,x,u,C,k,D,E,y,F,p,G,z,H,I,J,K,L,v,q,M){d.EnvironmentRenderer=class extends v.SyncRenderPlugin{constructor(a){super(a);this.produces=new Map([[q.RenderSlot.OPAQUE_ENVIRONMENT,()=>!(null===this._atmosphere&&null===this._stars)],[q.RenderSlot.TRANSPARENT_ENVIRONMENT,()=>null!==this._atmosphere]]);this._atmosphere=this._context=null;this._oldWeatherParameters=new r;this._newWeatherParameters=new r;this._fadedWeatherParameters=new r;this._weatherParameters=this._newWeatherParameters}initialize(){this.view._stage.addRenderPlugin(this)}destroy(){this.removeHandles();
this.uninitializeRenderContext();null!=this.view?._stage&&this.view._stage.removeRenderPlugin(this);this._set("view",null)}get atmosphere(){return this._atmosphere}get _atmosphereType(){return null!=this.atmosphere?this.atmosphere.type:k.AtmosphereType.None}consumes(){return this._atmosphereType===k.AtmosphereType.Realistic?v.ConsumesDepth:v.ConsumesNone}updateAnimation(a){return null!=this._precipitation?this._precipitation.update(a):!1}get updating(){return null!=this._stars&&this._stars.updating||
null!=this._clouds&&this._clouds.running}get weatherVisible(){return n.length(this.view.state.camera.eye)-x.getReferenceEllipsoid(this.view.spatialReference).radius<=L.weatherHeightLimit}get usedMemory(){return this._clouds?.usedMemory??0}get _stars(){const a=this.view,b=a.environment?.starsEnabled??!1,c=this._get("_stars");return b&&null!=this._context?null!=c?c:new K.Stars({view:a,requestRender:()=>this._setNeedsRender()}):(f.destroyMaybe(c),null)}get _precipitation(){const a=this._get("_precipitation");
if(!this._precipitationEnabled||null==this._context)return f.destroyMaybe(a),null;const b=this.view,c=this._context;if(null!=a&&a.context===c)return a;f.destroyMaybe(a);return new J.Precipitation({context:c,view:b})}get _clouds(){const a=this._get("_clouds");if(!this.weatherEnabled||null==this._context)return f.destroyMaybe(a),null;if(null!=a)return a;const b=this.view,c=this._context;f.destroyMaybe(a);return new F.CloudsGenerator({context:c,view:b,requestRender:()=>this._setNeedsRender()})}get _cloudsComposition(){const a=
this._get("_cloudsComposition");if(!this.weatherEnabled||null==this._context)return f.destroyMaybe(a),null;const b=this.view.state.viewingMode,c=this._context.renderContext.rctx,t=x.getReferenceEllipsoid(this.view.spatialReference).radius;if(null!=a&&a.viewingMode===b&&a.planetRadius===t)return a;f.destroyMaybe(a);return new E.CloudsComposition({rctx:c,viewingMode:b,planetRadius:t,requestRender:()=>this._setNeedsRender()})}get _fog(){const a=this._get("_fog");return this.weatherEnabled&&null!=this._context?
null!=a?a:new z.Fog({context:this._context,view:this.view,rctx:this._context.renderContext.rctx,viewingMode:this.view.state.viewingMode}):(f.destroyMaybe(a),null)}get weatherEnabled(){return!!this.view?.environmentManager?.weatherEnabled}get _precipitationEnabled(){return this.weatherEnabled&&("rainy"===this.view.environment.weather.type||"snowy"===this.view.environment.weather.type)}initializeRenderContext(a=null){this._context=a;a=()=>this._setNeedsRender();this.addHandles([h.watch(()=>({viewingMode:this.view.state.viewingMode,
enabled:this.view.environment.atmosphereEnabled}),b=>this._updateAtmosphere(b),h.syncAndInitial),h.watch(()=>this._stars,a),h.watch(()=>this._precipitation,a),h.watch(()=>this._clouds,()=>this._updateWeather(),h.initial),h.watch(()=>this._fog,()=>this._updateFogHaze(),h.initial),h.watch(()=>this.view.state.mode,()=>this._setNeedsRender(),h.sync),h.watch(()=>this._weatherUpdateParameters,()=>{this._updateWeather();this._updateFogHaze()},h.syncAndInitial)])}uninitializeRenderContext(){this._context=
null;this._atmosphere=f.destroyMaybe(this._atmosphere);this._set("_stars",f.destroyMaybe(this._stars));this._set("_precipitation",f.destroyMaybe(this._precipitation));this._set("_clouds",f.destroyMaybe(this._clouds));this._set("_cloudsComposition",f.destroyMaybe(this._cloudsComposition));this._set("_fog",f.destroyMaybe(this._fog))}prepareRender(a){a.bindParameters.cloudsFade.data=y.isReadyCloudsData(this._clouds)?this._clouds:null;"local"!==this.view.viewingMode&&null!=a.bindParameters.cloudsFade.data?.cubeMap&&
(this._updateWeatherFading(a.bindParameters,a.time),a.bindParameters.cloudsFade.renderingStage===y.CloudsRenderingStages.FINISHED&&null!=this._clouds&&0===this._clouds.coverage&&!1===this._clouds.running&&(this._clouds.destroyFrameBufferCube(),a.bindParameters.cloudsFade.data=null))}renderNode(a){switch(a.bindParameters.slot){case q.RenderSlot.OPAQUE_ENVIRONMENT:this._stars?.render(a);null!=this.atmosphere&&(this.atmosphere.render(a,this.view?._stage?.renderer?.fullResolutionAtmosphere),this._cloudsComposition&&
null!=a.bindParameters.cloudsFade.data&&(this.weatherVisible&&null!=this._clouds&&this._clouds.updateWeatherTile(),this._cloudsComposition.render(a)),a.bindParameters.cloudsFade.isFading&&this._context&&null!=a.bindParameters.cloudsFade.data?.cubeMap&&this._context.requestRender());break;case q.RenderSlot.TRANSPARENT_ENVIRONMENT:if(null!=this.atmosphere&&(this.atmosphere.renderHaze(a,this._weatherParameters.hazeAmount,this.view?._stage?.renderer?.fullResolutionAtmosphere),0<this._weatherParameters.fog.amount&&
null!=this._fog&&this._fog.render(a,this._weatherParameters.fog),this._precipitation)){const b=this.view.environment.weather;"rainy"!==b.type&&"snowy"!==b.type||this._precipitation.render(a,b.precipitation,b.type)}}}updateLightSources(a,b,c,t){if(null!=this._context){const l=this._context.renderContext;l.bindParameters.oldLighting.copyFrom(l.bindParameters.lighting);l.bindParameters.newLighting.noonFactor=b;l.bindParameters.newLighting.globalFactor=c;l.bindParameters.newLighting.set(a);t===M.Update.Faded||
l.bindParameters.weatherFading?l.bindParameters.fadeLighting(0):l.bindParameters.fadeLighting(1);this._context.requestRender()}}get _weatherUpdateParameters(){const a=this.weatherEnabled?this.view.environment.weather:null;return null==a?null:"rainy"===a.type||"snowy"===a.type?{type:a.type,weatherAdjustment:a.cloudCover,effect:a.precipitation}:{type:a.type,weatherAdjustment:"foggy"===a.type?a.fogStrength:a.cloudCover}}_updateWeatherFading(a,b){a.cloudsFade.updateFading(a.camera,this.view.state.mode,
b,this.view.qualitySettings.fadeDuration);a.cloudsFade.updateParallax(a.camera);a.weatherFading&&(a.cloudsFade.fadeMode===p.FadeMode.CROSS_FADE||a.cloudsFade.fadeMode===p.FadeMode.FADE_IN?a.fadeLighting(a.cloudsFade.fadeFactor):a.fadeLighting(0),this._updateFogAtmoshpere(a))}_updateFogAtmoshpere(a){a.cloudsFade.fadeMode===p.FadeMode.CROSS_FADE||a.cloudsFade.fadeMode===p.FadeMode.FADE_IN?this._fadeWeather(a.cloudsFade.fadeFactor):this._fadeWeather(0)}_fadeWeather(a){const {_newWeatherParameters:b,
_oldWeatherParameters:c}=this;1<=a?this._weatherParameters=b:(this._fadedWeatherParameters.lerp(c,b,a),this._weatherParameters=this._fadedWeatherParameters)}_updateWeather(){const a=this._weatherUpdateParameters;null!=a&&null!=this._clouds&&(this._clouds.applyPreset(G.cloudPresets[a.type],a.weatherAdjustment),this._setNeedsRender())}_setNeedsRender(){null!=this._context&&this._context.requestRender()}_updateFogHaze(){const a=this._weatherUpdateParameters;if(null!=this._fog&&null!=a&&null!=this._context){var b=
this._context.renderContext.bindParameters;this._oldWeatherParameters.copyFrom(this._weatherParameters);switch(a.type){case "foggy":this._newWeatherParameters.fog.strength=m.lerp(3E-5,.005,a.weatherAdjustment**3);n.copy(this._newWeatherParameters.fog.color,A);this._newWeatherParameters.fog.amount=1;this._newWeatherParameters.hazeAmount=1;this._setNeedsRender();break;case "rainy":this._newWeatherParameters.fog.strength=m.lerp(4E-6,2E-4,(a.effect??0)**3);n.copy(this._newWeatherParameters.fog.color,
N);this._newWeatherParameters.fog.amount=1;this._newWeatherParameters.hazeAmount=0;this._setNeedsRender();break;case "snowy":this._newWeatherParameters.fog.strength=m.lerp(4E-6,2E-4,(a.effect??0)**3);n.copy(this._newWeatherParameters.fog.color,A);this._newWeatherParameters.fog.amount=1;this._newWeatherParameters.hazeAmount=1;this._setNeedsRender();break;default:this._newWeatherParameters.fog.strength=0,this._newWeatherParameters.fog.amount=0,this._newWeatherParameters.hazeAmount=1,this._setNeedsRender()}b.weatherFading?
this._fadeWeather(0):this._fadeWeather(1)}}_updateAtmosphere(a){a=this._selectAtmosphereType(a);if(a===k.AtmosphereType.None||!this._context)this._atmosphere=f.destroyMaybe(this._atmosphere);else if(!this._atmosphere||this._atmosphere.type!==a)if(this._atmosphere=f.destroyMaybe(this._atmosphere),a=this._getAtmosphereClass(a))this._atmosphere=new a(this.view,this._context);this._setNeedsRender()}_getAtmosphereClass(a){switch(a){case k.AtmosphereType.Realistic:return D.ChapmanAtmosphere;case k.AtmosphereType.Local:return H.LocalAtmosphere;
case k.AtmosphereType.Mars:return I;default:case k.AtmosphereType.None:return null}}_selectAtmosphereType(a){const {enabled:b,viewingMode:c}=a;return!b||u.isMoon(this.view.spatialReference)?k.AtmosphereType.None:c===C.ViewingMode.Local?k.AtmosphereType.Local:null!=this._context&&u.isEarth(this.view.spatialReference)?k.AtmosphereType.Realistic:u.isMars(this.view.spatialReference)?k.AtmosphereType.Mars:k.AtmosphereType.None}get test(){}};e.__decorate([g.property({constructOnly:!0})],d.EnvironmentRenderer.prototype,
"view",void 0);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"atmosphere",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_atmosphereType",null);e.__decorate([g.property({type:Boolean,readOnly:!0})],d.EnvironmentRenderer.prototype,"updating",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"weatherVisible",null);e.__decorate([g.property()],d.EnvironmentRenderer.prototype,"_context",void 0);e.__decorate([g.property()],
d.EnvironmentRenderer.prototype,"_atmosphere",void 0);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_stars",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_precipitation",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_clouds",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_cloudsComposition",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_fog",
null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"weatherEnabled",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_precipitationEnabled",null);e.__decorate([g.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"_weatherUpdateParameters",null);d.EnvironmentRenderer=e.__decorate([B.subclass("esri.views.3d.environment.EnvironmentRenderer")],d.EnvironmentRenderer);class r{constructor(){this.fog=new z.FogParameters;this.hazeAmount=1}copyFrom(a){this.fog.amount=
a.fog.amount;this.hazeAmount=a.hazeAmount;this.fog.strength=a.fog.strength;n.copy(this.fog.color,a.fog.color)}lerp(a,b,c){this.fog.amount=m.lerp(a.fog.amount,b.fog.amount,c);this.hazeAmount=m.lerp(a.hazeAmount,b.hazeAmount,c);this.fog.strength=m.lerp(a.fog.strength,b.fog.strength,c);n.lerp(this.fog.color,a.fog.color,b.fog.color,c)}}const N=w.fromValues(.5,.5,.5),A=w.fromValues(1.5,1.5,1.5);d.WeatherParameters=r;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});