// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/maybe","./gamepad/GamepadSource","../support/screenUtils"],function(h,d,l,m,n){const k=d("edge"),p=d("chrome"),q=d("ff"),r=d("safari");class e{constructor(a,b){this._input=b;this._active={};this._callback=()=>{};this._activePointerCaptures=new Set;this._keyDownState=new Set;this._eventId=1;this._browserTouchPanningEnabled=!1;this._element=a;a.getAttribute("tabindex")||a.setAttribute("tabindex","0");this._eventHandlers={"key-down":this._handleKey,"key-up":this._handleKey,
"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost};this._updateTouchAction();this._element.addEventListener("keydown",this._preventAltKeyDefault);this._gamepadSource=new m.GamepadSource(a,this._input);this._gamepadSource.onEvent=
c=>this._callback("gamepad",c)}destroy(){this._callback=()=>{};this.activeEvents=null;this._activePointerCaptures.forEach(a=>{this._releasePointerCaptureSafe(a)});this._gamepadSource=l.destroyMaybe(this._gamepadSource);this._activePointerCaptures=null;this._removeTouchAction();this._element.removeEventListener("keydown",this._preventAltKeyDefault)}get browserTouchPanningEnabled(){return this._browserTouchPanningEnabled}set browserTouchPanningEnabled(a){this._browserTouchPanningEnabled=a;this._updateTouchAction();
this._updateTouchEventHandling()}set onEventReceived(a){this._callback=a}set activeEvents(a){for(const b in this._active)a&&a.has(b)||(this._element.removeEventListener(f[b],this._active[b]),delete this._active[b]);a&&a.forEach(b=>{if(!this._active[b]&&f[b]){const c=(this._eventHandlers[b]||this._handleDefault).bind(this,b);this._element.addEventListener(f[b],c);this._active[b]=c}});this._gamepadSource.hasEventListeners=a?.has("gamepad")??!1}setPointerCapture(a,b){b?this._setPointerCatpureSafe(a.pointerId):
(this._releasePointerCaptureSafe(a.pointerId),this._activePointerCaptures.delete(a.pointerId))}_updateTouchAction(){this._element.classList.remove(this._browserTouchPanningEnabled?"esri-view-surface--touch-none":"esri-view-surface--touch-pan");this._element.classList.add(this._browserTouchPanningEnabled?"esri-view-surface--touch-pan":"esri-view-surface--touch-none")}_updateTouchEventHandling(){this._browserTouchPanningEnabled?this._element.addEventListener("touchmove",this._preventMultiTouchPanning):
this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)}_removeTouchAction(){this._element.classList.remove("esri-view-surface--touch-none");this._element.classList.remove("esri-view-surface--touch-pan");this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)}_setPointerCatpureSafe(a){try{this._element.setPointerCapture(a),this._activePointerCaptures.add(a)}catch{}}_releasePointerCaptureSafe(a){try{this._element.hasPointerCapture&&!this._element.hasPointerCapture(a)||
this._element.releasePointerCapture(a)}catch(b){}}_updateNormalizedPointerLikeEvent(a,b){a=n.createScreenPointFromNativeEvent(this._element,a);e.test.disableSubpixelCoordinates&&(a.x=Math.round(a.x),a.y=Math.round(a.y));b.x=a.x;b.y=a.y;return b}_handleKey(a,b){const {key:c}=b;c&&"key-up"===a&&this._keyDownState.delete(c);b={native:b,key:c,repeat:!!c&&this._keyDownState.has(c)};c&&"key-down"===a&&this._keyDownState.add(b.key);this._callback(a,b)}_handlePointer(a,b){b=this._updateNormalizedPointerLikeEvent(b,
{native:b,x:0,y:0,pointerType:b.pointerType,button:b.button,buttons:b.buttons,eventId:this._eventId++});this._callback(a,b)}_handlePointerPreventDefault(a,b){const c=this._updateNormalizedPointerLikeEvent(b,{native:b,x:0,y:0,pointerType:b.pointerType,button:b.button,buttons:b.buttons,eventId:this._eventId++});b.preventDefault();this._callback(a,c)}_handleMouseWheel(a,b){let c=b.deltaY;switch(b.deltaMode){case 0:k&&(c=c/document.documentElement.clientHeight*600);break;case 1:c*=30;break;case 2:c*=
900}k?c*=.7:p||r?c*=.6:q&&(c*=1.375);const g=Math.abs(c);100<g&&(c=c/g*200/(1+Math.exp(-.02*(g-100))));b=this._updateNormalizedPointerLikeEvent(b,{native:b,x:0,y:0,deltaY:c});this._callback(a,b)}_handlePointerCaptureLost(a,b){this._activePointerCaptures.delete(b.pointerId);this._handleDefault(a,b)}_handleDefault(a,b){const c={native:b};b.preventDefault();this._callback(a,c)}_preventAltKeyDefault(a){"Alt"===a.key&&a.preventDefault()}_preventMultiTouchPanning(a){1<a.touches.length&&a.preventDefault()}}
e.test={disableSubpixelCoordinates:!1};const f={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture","context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"};h.BrowserEventSource=e;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});