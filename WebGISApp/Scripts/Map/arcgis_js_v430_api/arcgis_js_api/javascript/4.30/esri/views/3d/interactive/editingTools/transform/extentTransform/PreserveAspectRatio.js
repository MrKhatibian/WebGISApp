// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/has","../../../../analysis/Slice/sliceToolUtils","../../../../../interactive/dragEventPipeline"],function(c,h,e,f){function d(a){const b=e.isDiagonalResizeHandle(a.handle)?Math.max(Math.abs(a.factor1),Math.abs(a.factor2)):0===a.handle.direction[0]?Math.abs(a.factor2):Math.abs(a.factor1);a.factor1=0>a.factor1?-b:b;a.factor2=0>a.factor2?-b:b}class g{constructor(){this._next=this._lastDragEvent=null;this._enabled=!1}get enabled(){return this._enabled}set enabled(a){if(this._enabled!==
a&&null!=this._lastDragEvent&&null!=this._next){const b={...this._lastDragEvent,action:"update"};a&&d(b);this._next.execute(b)}this._enabled=a}createDragEventPipelineStep(){this._lastDragEvent=null;const a=new f.EventPipeline;this._next=a;return[b=>{this._lastDragEvent="end"!==b.action?{...b}:null;this._enabled&&d(b);return b},a]}get test(){}}c.PreserveAspectRatio=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});