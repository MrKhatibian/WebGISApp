// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../Viewpoint ../../core/Accessor ../../core/has ../../core/maybe ../../core/scheduling ../../core/screenUtils ../../core/time ../../core/accessorSupport/decorators/property ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/factories/vec2f64 ../ViewAnimation ./PaddedViewState ./unitBezier ./viewpointUtils ./pointToPoint/Camera ../animation/pointToPoint/Animation ../animation/pointToPoint/Settings ../../geometry/Point".split(" "),
function(l,g,x,y,m,z,A,q,r,p,I,J,B,C,t,D,u,h,v,E,w,F){function G(a,b,c,d){if(null!=b?.duration)return!0;const {time:e,isLinear:n}=a;a=b?.speedFactor||1;b=b?.maxDuration??w.defaultSettings2D.maxDuration/a;m("esri-goto-debug")&&(console.log("speed factor:",a),console.log("adjusted duration:\t\t",e),console.log("adjusted max duration:\t",b),console.log("is linear:",n));if(e>b)return m("esri-goto-debug")&&console.warn(`failed "auto" heuristic: animations must be shorter than ${b/1E3}s`),!1;if(n){var f=
C.create();const k=q.createScreenPoint(...d.toScreen(f,...c.center));f=q.createScreenPoint(...c.toScreen(f,...d.center));c=null!=f&&f.x>-1*c.size[0]&&f.x<2*c.size[0]&&f.y>-1*c.size[1]&&f.y<2*c.size[1];d=null!=k&&k.x>-1*d.size[0]&&k.x<2*d.size[0]&&k.y>-1*d.size[1]&&k.y<2*d.size[1];m("esri-goto-debug")&&(console.log("dest is within 1.5 screens at start view:",c),console.log("start is within 1.5 screens at dest view:",d));if(e>2E3/a&&!c&&!d)return m("esri-goto-debug")&&console.warn(`failed "auto" heuristic: linear animations must be...\n  - shorter than ${2/
a}s, or\n  - shorter than ${b/1E3}s and the destination is close enough to the starting screen, or\n  - shorter than ${b/1E3}s and the start point is close enough to the destination screen`),!1}return!0}class H{constructor(a){this._view=a;this._animation=new E.Animation(()=>new v.Camera(this._view));this._current=new v.Camera(this._view)}get _source(){return this._animation.definition.source}get _target(){return this._animation.definition.target}get duration(){return this._animation.time}get animation(){return this._animation}update(a,
b,c={}){h.copy(this._current.viewpoint,a);h.copy(this._source.viewpoint,a);h.copy(this._target.viewpoint,b);this._animation.update(this._source,this._target,c)}applyRatio(a,b){this._animation.cameraAt(b,this._current);h.copy(a,this._current.viewpoint)}}g=class extends y{constructor(a){super(a);this._animation=null;this._destinationViewState=new D;this.updateFunction=null;this.easing=u.easingFunctions.ease;this.viewpoint=new x({targetGeometry:new F,scale:0,rotation:0});this._updateTask=A.addFrameTask({postRender:this._postRender.bind(this)});
this._updateTask.pause();this._transition=new H(a.view)}destroy(){this._updateTask=z.removeMaybe(this._updateTask)}get animation(){return this._animation}set animation(a){this._animation=a;this.view.animation=a}animate(a,b,c){this.stop();h.copy(this.viewpoint,b);const d=("string"===typeof c?.easing?u.parse(c.easing):c?.easing)||this.easing,e=a.target;this._transition.update(this.viewpoint,e,{apex:{maximumDistance:Math.min(64*Math.min(b.scale,e.scale),this.view.constraints.effectiveMinScale),desiredSlope:5E-8},
duration:c?.duration,maxDuration:"auto"===c?.animationMode?r.Milliseconds(Infinity):c?.maxDuration??w.defaultSettings2D.maxDuration,speedFactor:c?.speedFactor,easing:"function"===typeof d?n=>d(n):void 0});"auto"===c?.animationMode&&(this._destinationViewState.copy(this.view.state),this._destinationViewState.viewpoint=e,G(this._transition.animation,c,this.view.state,this._destinationViewState)||this._transition.update(this.viewpoint,e,{duration:r.Milliseconds(0)}));b=()=>{this.animation===a&&this._updateTask&&
("finished"===a.state&&(this._transition.applyRatio(this.viewpoint,1),this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())),this.updateFunction=this.animation=null)};a.when(b,b);this._startTime=performance.now();this._updateTask.resume();return this.animation=a}animateContinuous(a,b){this.stop();this.updateFunction=b;this.viewpoint=a;const c=new t({target:a.clone()});a=()=>{this.animation===c&&this._updateTask&&(this.updateFunction=this.animation=null)};c.when(a,a);this._startTime=
performance.now();this._updateTask.resume();return this.animation=c}stop(){this.animation&&(this.animation.stop(),this.updateFunction=this.animation=null)}_postRender(a){var b=this.animation;b&&b.state!==t.State.STOPPED?(this.updateFunction?(this.updateFunction(this.viewpoint,a.deltaTime),this.animation?.update(this.viewpoint)):(a=performance.now()-this._startTime,b=this._transition.duration,a=0<b?a/b:1,b=1<=a,this._transition.applyRatio(this.viewpoint,a),b&&this.animation?.finish()),this.view.state&&
(this.view.state.viewpoint=this.viewpoint.clone())):this._updateTask.pause()}};l.__decorate([p.property()],g.prototype,"easing",void 0);l.__decorate([p.property()],g.prototype,"view",void 0);l.__decorate([p.property()],g.prototype,"viewpoint",void 0);return g=l.__decorate([B.subclass("esri.views.2d.AnimationManager")],g)});