// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../Graphic ../../../core/arrayUtils ../../../core/iteratorUtils ./clippingUtils ../../support/screenUtils".split(" "),function(r,y,t,u,z,v){function w(b,c,d,f,k,m){return e=>{if(e instanceof y){if(e.layer===b)m?.();else{var g=b.allLayerViews.find(h=>h.layer===e.layer);g&&k?.(g)}f(p(e))}else"layer"in e&&"element"in e||("subtype-sublayer"===e.type?(g=b.allLayerViews.find(h=>h.layer===e.parent))&&d(e,g):(g=b.allLayerViews.find(h=>h.layer===e))&&c(g))}}function x(b,c){if(b)if(u.isIterable(b))for(const d of b)if(u.isIterable(d))for(const f of d)c(f);
else c(d);else c(b)}function p(b){const c=b.getObjectId();return c?`${b.layer?.uid??b.sourceLayer?.uid??"MapView"}/${c}`:`"MapView/${b.uid}`}function q({layer:b},c){"subtype-group"===b?.type&&b.sublayers.forEach(d=>{c(d)})}r.hitTest=async function(b,c,d){const f=v.isSupportedScreenPointEvent(c)?v.createScreenPointFromSupportedEvent(b,c):c;if(!b.ready||isNaN(f.x)||isNaN(f.y))return{screenPoint:f,results:[]};let k=new Set;const m=new Set;let e=!1,g=null,h=null;d?.include?x(d.include,w(b,a=>{k.add(a);
q(a,l=>m.add(l))},(a,l)=>{m.add(a);k.add(l)},a=>{g||=new Set;g.add(a)},a=>k.add(a),()=>e=!0)):(e=!0,k=new Set(b.allLayerViews),k.forEach(a=>{q(a,l=>m.add(l))}));d?.exclude&&x(d.exclude,w(b,a=>{k.delete(a);q(a,l=>m.delete(l))},a=>m.delete(a),a=>{h||=new Set;h.add(a)}));const n=b.toMap(f);d=b.allLayerViews.filter(a=>!a.suspended&&k.has(a)&&a.clips.every(l=>z.clipContainsPoint(b,l,f,n))).reverse();c=e?b.graphicsView.hitTest(n).map(a=>({type:"graphic",graphic:a,layer:null,mapPoint:n})):[];d=await Promise.all(d.map(a=>
a.hitTest(n,f)).toArray());c=[...c,...d].filter(t.isSome).flat().filter(t.isSome);c=c.filter(a=>"graphic"===a.type&&"subtype-group"===a.layer?.type?m.has(a.graphic.layer):!0);g&&(c=c.filter(a=>!("graphic"in a)||!a.graphic||g?.has(p(a.graphic))));h&&(c=c.filter(a=>!("graphic"in a)||!a.graphic||!h?.has(p(a.graphic))));return{screenPoint:f,results:c}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});