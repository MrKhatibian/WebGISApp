// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/GeometryCursor","../enums","../GeometryWalker"],function(p,t,n,g){class k{static local(){null===k.instance&&(k.instance=new k);return k.instance}execute(a,b,d,c,e){return new u(a,b,d)}}k.instance=null;class u{constructor(a,b,d){this._inputGeometries=a;this._height=(void 0!==b.amplitude?b.amplitude:2)*d;this._period=(void 0!==b.period?b.period:3)*d;this._style=b.waveform;0>=this._height&&(this._height=Math.abs(this._height));0>=this._period&&(this._period=Math.abs(this._period));
this._pattern=new g.DashPattern;this._pattern.addValue(this._period);this._pattern.addValue(this._period);this._walker=new g.GeometryWalker;this._walker.updateTolerance(d)}next(){for(var a=this._inputGeometries.next();a;){if(0===this._height||0===this._period||(a=this._processGeom(a)))return a;a=this._inputGeometries.next()}return null}_processGeom(a){const b=t.GeometryCursor.createEmptyOptimizedCIM(a.geometryType);for(;a.nextPath();){b.startPath();const d=a.pathLength();if(this._walker.init(a,this._pattern))switch(this._style){default:this._constructCurve(b,
d,!1);break;case n.GeometricEffectWaveform.Square:this._constructSquare(b,d);break;case n.GeometricEffectWaveform.Triangle:this._constructTriangle(b,d);break;case n.GeometricEffectWaveform.Random:this._constructCurve(b,d,!0)}else for(;a.nextPoint();)b.pushXY(a.x,a.y)}return b}_constructCurve(a,b,d){var c=Math.round(b/this._period);0===c&&(c=1);const e=this._period/16,f=1/(16*c+1);b=2*Math.PI*b/(b/c);c=2*Math.PI*Math.random();const v=2*Math.PI*Math.random(),w=2*Math.PI*Math.random(),x=.75-Math.random()/
2,y=.75-Math.random()/2,h=new g.Pos;this._walker.curPointAndAngle(h);a.pushPoint(h.pt);let q=0;for(;;)if(this._walker.nextPointAndAngle(e,h)){const m=q;q+=f;let l;if(d){const r=this._height/2*(1+.3*Math.sin(x*b*m+c));l=r*Math.sin(b*m+v);l+=r*Math.sin(y*b*m+w);l/=2}else l=.5*this._height*Math.sin(.5*b*m);a.pushXY(h.pt[0]-l*h.sa,h.pt[1]+l*h.ca)}else{a.pushPoint(this._walker.getPathEnd());break}}_constructSquare(a,b){Math.round(b/this._period);for(b=!0;;){let d=!1;if(this._walker.curPositionIsValid()){const c=
new g.Pos;this._walker.curPointAndAngle(c);const e=new g.Pos;if(this._walker.nextPointAndAngle(this._period,e)){const f=new g.Pos;this._walker.nextPointAndAngle(this._period,f)&&(b?(a.pushPoint(c.pt),b=!1):a.pushPoint(c.pt),a.pushXY(c.pt[0]-this._height/2*c.sa,c.pt[1]+this._height/2*c.ca),a.pushXY(e.pt[0]-this._height/2*e.sa,e.pt[1]+this._height/2*e.ca),a.pushXY(e.pt[0]+this._height/2*e.sa,e.pt[1]-this._height/2*e.ca),a.pushXY(f.pt[0]+this._height/2*f.sa,f.pt[1]-this._height/2*f.ca),d=!0)}}if(!d){a.pushPoint(this._walker.getPathEnd());
break}}}_constructTriangle(a,b){Math.round(b/this._period);for(b=!0;;){let d=!1;if(this._walker.curPositionIsValid()){const c=new g.Pos;this._walker.curPointAndAngle(c);const e=new g.Pos;if(this._walker.nextPointAndAngle(this._period/2,e)){const f=new g.Pos;this._walker.nextPointAndAngle(this._period,f)&&(this._walker.nextPosition(this._period/2)&&(b?(a.pushPoint(c.pt),b=!1):a.pushPoint(c.pt),a.pushXY(e.pt[0]-this._height/2*e.sa,e.pt[1]+this._height/2*e.ca),a.pushXY(f.pt[0]+this._height/2*f.sa,f.pt[1]-
this._height/2*f.ca)),d=!0)}}if(!d){a.pushPoint(this._walker.getPathEnd());break}}}}p.EffectWave=k;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});