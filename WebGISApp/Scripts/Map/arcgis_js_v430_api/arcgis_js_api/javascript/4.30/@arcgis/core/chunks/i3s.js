/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{g as e}from"./_commonjsHelpers.js";var r,n,t,i={exports:{}};r=i,n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,t=function(e={}){var r,t,i=void 0!==e?e:{};i.ready=new Promise(((e,n)=>{r=e,t=n}));var o=Object.assign({},i),a="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var c,s="";(a||u)&&(u?s=self.location.href:"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),n&&(s=n),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(c=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var f,l,d=i.print||console.log.bind(console),p=i.printErr||console.warn.bind(console);Object.assign(i,o),o=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(f=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&S("no native wasm support detected");var h,v,m,g,y,_,w,b,A,T=!1;function C(){var e=l.buffer;i.HEAP8=h=new Int8Array(e),i.HEAP16=m=new Int16Array(e),i.HEAP32=y=new Int32Array(e),i.HEAPU8=v=new Uint8Array(e),i.HEAPU16=g=new Uint16Array(e),i.HEAPU32=_=new Uint32Array(e),i.HEAPF32=w=new Float32Array(e),i.HEAPF64=b=new Float64Array(e)}var P,E,W=[],k=[],j=[],F=0,R=null;function S(e){i.onAbort&&i.onAbort(e),p(e="Aborted("+e+")"),T=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}function x(e){return e.startsWith("data:application/octet-stream;base64,")}function U(e){try{if(e==P&&f)return new Uint8Array(f);if(c)return c(e);throw"both async and sync fetching of the wasm failed"}catch(e){S(e)}}function I(e,r,n){return function(e){return f||!a&&!u||"function"!=typeof fetch?Promise.resolve().then((()=>U(e))):fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>U(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(n,(e=>{p("failed to asynchronously prepare wasm: "+e),S(e)}))}function O(e){for(;e.length>0;)e.shift()(i)}x(P="i3s.wasm")||(E=P,P=i.locateFile?i.locateFile(E,s):s+E);var z=[];function D(e){var r=z[e];return r||(e>=z.length&&(z.length=e+1),z[e]=r=A.get(e)),r}function H(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){_[this.ptr+4>>2]=e},this.get_type=function(){return _[this.ptr+4>>2]},this.set_destructor=function(e){_[this.ptr+8>>2]=e},this.get_destructor=function(){return _[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,h[this.ptr+12|0]=e},this.get_caught=function(){return 0!=h[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,h[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=h[this.ptr+13|0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){_[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return _[this.ptr+16>>2]},this.get_exception_ptr=function(){if(We(this.get_type()))return _[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}var V={};function M(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function B(e){return this.fromWireType(y[e>>2])}var q={},N={},L={};function G(e,r){var n,t,i=(t=function(e){this.name=r,this.message=e;var n=new Error(e).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))},n=function(e){if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+e:e}(n=r),{[n]:function(){return t.apply(this,arguments)}}[n]);return i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},i}var X=void 0;function Z(e){throw new X(e)}function $(e,r,n){function t(r){var t=n(r);t.length!==e.length&&Z("Mismatched type converter count");for(var i=0;i<e.length;++i)re(e[i],t[i])}e.forEach((function(e){L[e]=r}));var i=new Array(r.length),o=[],a=0;r.forEach(((e,r)=>{N.hasOwnProperty(e)?i[r]=N[e]:(o.push(e),q.hasOwnProperty(e)||(q[e]=[]),q[e].push((()=>{i[r]=N[e],++a===o.length&&t(i)})))})),0===o.length&&t(i)}function J(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var K=void 0;function Q(e){for(var r="",n=e;v[n];)r+=K[v[n++]];return r}var Y=void 0;function ee(e){throw new Y(e)}function re(e,r,n={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(e||ee('type "'+t+'" must have a positive integer typeid pointer'),N.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;ee("Cannot register type '"+t+"' twice")}if(N[e]=r,delete L[e],q.hasOwnProperty(e)){var i=q[e];delete q[e],i.forEach((e=>e()))}}var ne=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(e){return this.allocated[e]},this.allocate=function(e){let r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},this.free=function(e){this.allocated[e]=void 0,this.freelist.push(e)}};function te(e){e>=ne.reserved&&0==--ne.get(e).refcount&&ne.free(e)}var ie=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return ne.allocate({refcount:1,value:e})}};function oe(e,r){switch(r){case 2:return function(e){return this.fromWireType(w[e>>2])};case 3:return function(e){return this.fromWireType(b[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function ae(e,r){var n,t,o,a=(e=Q(e)).includes("j")?(n=e,t=r,o=[],function(){return o.length=0,Object.assign(o,arguments),function(e,r,n){return e.includes("j")?function(e,r,n){var t=i["dynCall_"+e];return n&&n.length?t.apply(null,[r].concat(n)):t.call(null,r)}(e,r,n):D(r).apply(null,n)}(n,t,o)}):D(r);return"function"!=typeof a&&ee("unknown function pointer with signature "+e+": "+r),a}var ue=void 0;function ce(e){var r=Pe(e),n=Q(r);return Ce(r),n}function se(e,r,n){switch(r){case 0:return n?function(e){return h[e]}:function(e){return v[e]};case 1:return n?function(e){return m[e>>1]}:function(e){return g[e>>1]};case 2:return n?function(e){return y[e>>2]}:function(e){return _[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}var fe="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function le(e,r,n){for(var t=r+n,i=r;e[i]&&!(i>=t);)++i;if(i-r>16&&e.buffer&&fe)return fe.decode(e.subarray(r,i));for(var o="";r<i;){var a=e[r++];if(128&a){var u=63&e[r++];if(192!=(224&a)){var c=63&e[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&e[r++])<65536)o+=String.fromCharCode(a);else{var s=a-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}var de="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function pe(e,r){for(var n=e,t=n>>1,i=t+r/2;!(t>=i)&&g[t];)++t;if((n=t<<1)-e>32&&de)return de.decode(v.subarray(e,n));for(var o="",a=0;!(a>=r/2);++a){var u=m[e+2*a>>1];if(0==u)break;o+=String.fromCharCode(u)}return o}function he(e,r,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var t=r,i=(n-=2)<2*e.length?n/2:e.length,o=0;o<i;++o){var a=e.charCodeAt(o);m[r>>1]=a,r+=2}return m[r>>1]=0,r-t}function ve(e){return 2*e.length}function me(e,r){for(var n=0,t="";!(n>=r/4);){var i=y[e+4*n>>2];if(0==i)break;if(++n,i>=65536){var o=i-65536;t+=String.fromCharCode(55296|o>>10,56320|1023&o)}else t+=String.fromCharCode(i)}return t}function ge(e,r,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var t=r,i=t+n-4,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),y[r>>2]=a,(r+=4)+4>i)break}return y[r>>2]=0,r-t}function ye(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);t>=55296&&t<=57343&&++n,r+=4}return r}var _e={};function we(e){var r=l.buffer;try{return l.grow(e-r.byteLength+65535>>>16),C(),1}catch(e){}}var be=[null,[],[]];X=i.InternalError=G(Error,"InternalError"),function(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);K=e}(),Y=i.BindingError=G(Error,"BindingError"),ne.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),ne.reserved=ne.allocated.length,i.count_emval_handles=function(){for(var e=0,r=ne.reserved;r<ne.allocated.length;++r)void 0!==ne.allocated[r]&&++e;return e},ue=i.UnboundTypeError=G(Error,"UnboundTypeError");var Ae={__call_sighandler:function(e,r){D(e)(r)},__cxa_throw:function(e,r,n){throw new H(e).init(r,n),e},_embind_finalize_value_object:function(e){var r=V[e];delete V[e];var n=r.rawConstructor,t=r.rawDestructor,i=r.fields;$([e],i.map((e=>e.getterReturnType)).concat(i.map((e=>e.setterArgumentType))),(e=>{var o={};return i.forEach(((r,n)=>{var t=r.fieldName,a=e[n],u=r.getter,c=r.getterContext,s=e[n+i.length],f=r.setter,l=r.setterContext;o[t]={read:e=>a.fromWireType(u(c,e)),write:(e,r)=>{var n=[];f(l,e,s.toWireType(n,r)),M(n)}}})),[{name:r.name,fromWireType:function(e){var r={};for(var n in o)r[n]=o[n].read(e);return t(e),r},toWireType:function(e,r){for(var i in o)if(!(i in r))throw new TypeError('Missing field:  "'+i+'"');var a=n();for(i in o)o[i].write(a,r[i]);return null!==e&&e.push(t,a),a},argPackAdvance:8,readValueFromPointer:B,destructorFunction:t}]}))},_embind_register_bigint:function(e,r,n,t,i){},_embind_register_bool:function(e,r,n,t,i){var o=J(n);re(e,{name:r=Q(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:i},argPackAdvance:8,readValueFromPointer:function(e){var t;if(1===n)t=h;else if(2===n)t=m;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+r);t=y}return this.fromWireType(t[e>>o])},destructorFunction:null})},_embind_register_emval:function(e,r){re(e,{name:r=Q(r),fromWireType:function(e){var r=(e=>(e||ee("Cannot use deleted val. handle = "+e),ne.get(e).value))(e);return te(e),r},toWireType:function(e,r){return ie(r)},argPackAdvance:8,readValueFromPointer:B,destructorFunction:null})},_embind_register_float:function(e,r,n){var t=J(n);re(e,{name:r=Q(r),fromWireType:function(e){return e},toWireType:function(e,r){return r},argPackAdvance:8,readValueFromPointer:oe(r,t),destructorFunction:null})},_embind_register_function:function(e,r,n,t,o,a,u){var c=function(e,r){for(var n=[],t=0;t<e;t++)n.push(_[r+4*t>>2]);return n}(r,n);e=Q(e),o=ae(t,o),function(e,r,n){i.hasOwnProperty(e)?((void 0===n||void 0!==i[e].overloadTable&&void 0!==i[e].overloadTable[n])&&ee("Cannot register public name '"+e+"' twice"),function(e,r,n){if(void 0===e[r].overloadTable){var t=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||ee("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[t.argCount]=t}}(i,e,e),i.hasOwnProperty(n)&&ee("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),i[e].overloadTable[n]=r):(i[e]=r,void 0!==n&&(i[e].numArguments=n))}(e,(function(){!function(e,r){var n=[],t={};throw r.forEach((function e(r){t[r]||N[r]||(L[r]?L[r].forEach(e):(n.push(r),t[r]=!0))})),new ue(e+": "+n.map(ce).join([", "]))}("Cannot call "+e+" due to unbound types",c)}),r-1),$([],c,(function(n){var t=[n[0],null].concat(n.slice(1));return function(e,r,n){i.hasOwnProperty(e)||Z("Replacing nonexistant public symbol"),void 0!==i[e].overloadTable&&void 0!==n?i[e].overloadTable[n]=r:(i[e]=r,i[e].argCount=n)}(e,function(e,r,n,t,i,o){var a=r.length;a<2&&ee("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&!1,c=!1,s=1;s<r.length;++s)if(null!==r[s]&&void 0===r[s].destructorFunction){c=!0;break}var f="void"!==r[0].name,l=a-2,d=new Array(l),p=[],h=[];return function(){var n;arguments.length!==l&&ee("function "+e+" called with "+arguments.length+" arguments, expected "+l+" args!"),h.length=0,p.length=u?2:1,p[0]=i,u&&(n=r[1].toWireType(h,this),p[1]=n);for(var o=0;o<l;++o)d[o]=r[o+2].toWireType(h,arguments[o]),p.push(d[o]);return function(e){if(c)M(h);else for(var t=u?1:2;t<r.length;t++){var i=1===t?n:d[t-2];null!==r[t].destructorFunction&&r[t].destructorFunction(i)}if(f)return r[0].fromWireType(e)}(t.apply(null,p))}}(e,t,0,o,a),r-1),[]}))},_embind_register_integer:function(e,r,n,t,i){r=Q(r);var o=J(n),a=e=>e;if(0===t){var u=32-8*n;a=e=>e<<u>>>u}var c=r.includes("unsigned");re(e,{name:r,fromWireType:a,toWireType:c?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:8,readValueFromPointer:se(r,o,0!==t),destructorFunction:null})},_embind_register_memory_view:function(e,r,n){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function i(e){var r=_,n=r[e>>=2],i=r[e+1];return new t(r.buffer,i,n)}re(e,{name:n=Q(n),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(e,r){var n="std::string"===(r=Q(r));re(e,{name:r,fromWireType:function(e){var r,t,i=_[e>>2],o=e+4;if(n)for(var a=o,u=0;u<=i;++u){var c=o+u;if(u==i||0==v[c]){var s=(t=a)?le(v,t,c-a):"";void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),a=c+1}}else{var f=new Array(i);for(u=0;u<i;++u)f[u]=String.fromCharCode(v[o+u]);r=f.join("")}return Ce(e),r},toWireType:function(e,r){var t;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var i="string"==typeof r;i||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||ee("Cannot pass non-string to std::string"),t=n&&i?function(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);t<=127?r++:t<=2047?r+=2:t>=55296&&t<=57343?(r+=4,++n):r+=3}return r}(r):r.length;var o=Te(4+t+1),a=o+4;if(_[o>>2]=t,n&&i)!function(e,r,n,t){if(!(t>0))return 0;for(var i=n+t-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(n>=i)break;r[n++]=a}else if(a<=2047){if(n+1>=i)break;r[n++]=192|a>>6,r[n++]=128|63&a}else if(a<=65535){if(n+2>=i)break;r[n++]=224|a>>12,r[n++]=128|a>>6&63,r[n++]=128|63&a}else{if(n+3>=i)break;r[n++]=240|a>>18,r[n++]=128|a>>12&63,r[n++]=128|a>>6&63,r[n++]=128|63&a}}r[n]=0}(r,v,a,t+1);else if(i)for(var u=0;u<t;++u){var c=r.charCodeAt(u);c>255&&(Ce(a),ee("String has UTF-16 code units that do not fit in 8 bits")),v[a+u]=c}else for(u=0;u<t;++u)v[a+u]=r[u];return null!==e&&e.push(Ce,o),o},argPackAdvance:8,readValueFromPointer:B,destructorFunction:function(e){Ce(e)}})},_embind_register_std_wstring:function(e,r,n){var t,i,o,a,u;n=Q(n),2===r?(t=pe,i=he,a=ve,o=()=>g,u=1):4===r&&(t=me,i=ge,a=ye,o=()=>_,u=2),re(e,{name:n,fromWireType:function(e){for(var n,i=_[e>>2],a=o(),c=e+4,s=0;s<=i;++s){var f=e+4+s*r;if(s==i||0==a[f>>u]){var l=t(c,f-c);void 0===n?n=l:(n+=String.fromCharCode(0),n+=l),c=f+r}}return Ce(e),n},toWireType:function(e,t){"string"!=typeof t&&ee("Cannot pass non-string to C++ string type "+n);var o=a(t),c=Te(4+o+r);return _[c>>2]=o>>u,i(t,c+4,o+r),null!==e&&e.push(Ce,c),c},argPackAdvance:8,readValueFromPointer:B,destructorFunction:function(e){Ce(e)}})},_embind_register_value_object:function(e,r,n,t,i,o){V[e]={name:Q(r),rawConstructor:ae(n,t),rawDestructor:ae(i,o),fields:[]}},_embind_register_value_object_field:function(e,r,n,t,i,o,a,u,c,s){V[e].fields.push({fieldName:Q(r),getterReturnType:n,getter:ae(t,i),getterContext:o,setterArgumentType:a,setter:ae(u,c),setterContext:s})},_embind_register_void:function(e,r){re(e,{isVoid:!0,name:r=Q(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,r){}})},_emval_decref:te,_emval_incref:function(e){e>4&&(ne.get(e).refcount+=1)},_emval_new_cstring:function(e){return ie(void 0===(n=_e[r=e])?Q(r):n);var r,n},_emval_take_value:function(e,r){var n,t;void 0===(t=N[n=e])&&ee("_emval_take_value has unknown type "+ce(n));var i=(e=t).readValueFromPointer(r);return ie(i)},abort:function(){S("")},emscripten_memcpy_big:function(e,r,n){v.copyWithin(e,r,r+n)},emscripten_resize_heap:function(e){var r,n=v.length,t=2147483648;if((e>>>=0)>t)return!1;for(var i=1;i<=4;i*=2){var o=n*(1+.2/i);if(o=Math.min(o,e+100663296),we(Math.min(t,(r=Math.max(e,o))+(65536-r%65536)%65536)))return!0}return!1},fd_close:function(e){return 52},fd_seek:function(e,r,n,t,i){return 70},fd_write:function(e,r,n,t){for(var i,o,a,u=0,c=0;c<n;c++){var s=_[r>>2],f=_[r+4>>2];r+=8;for(var l=0;l<f;l++)i=e,o=v[s+l],a=void 0,a=be[i],0===o||10===o?((1===i?d:p)(le(a,0)),a.length=0):a.push(o);u+=f}return _[t>>2]=u,0}};!function(){var e,r,n,o,a={env:Ae,wasi_snapshot_preview1:Ae};function u(e,r){var n,t=e.exports;return i.asm=t,l=i.asm.memory,C(),A=i.asm.__indirect_function_table,n=i.asm.__wasm_call_ctors,k.unshift(n),function(e){if(F--,i.monitorRunDependencies&&i.monitorRunDependencies(F),0==F&&R){var r=R;R=null,r()}}(),t}if(F++,i.monitorRunDependencies&&i.monitorRunDependencies(F),i.instantiateWasm)try{return i.instantiateWasm(a,u)}catch(e){p("Module.instantiateWasm callback failed with error: "+e),t(e)}(e=f,r=P,n=a,o=function(e){u(e.instance)},e||"function"!=typeof WebAssembly.instantiateStreaming||x(r)||"function"!=typeof fetch?I(r,n,o):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,n).then(o,(function(e){return p("wasm streaming compile failed: "+e),p("falling back to ArrayBuffer instantiation"),I(r,n,o)}))))).catch(t)}();var Te=function(){return(Te=i.asm.malloc).apply(null,arguments)},Ce=function(){return(Ce=i.asm.free).apply(null,arguments)},Pe=function(){return(Pe=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Ee,We=function(){return(We=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function ke(){function e(){Ee||(Ee=!0,i.calledRun=!0,T||(O(k),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)e=i.postRun.shift(),j.unshift(e);var e;O(j)}()))}F>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)e=i.preRun.shift(),W.unshift(e);var e;O(W)}(),F>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),e()}),1)):e()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},R=function e(){Ee||ke(),Ee||(R=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return ke(),e.ready},r.exports=t;const o=e(i.exports),a=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));export{a as i};