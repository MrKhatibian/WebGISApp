// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(Za,N){var pa={exports:{}};(function($a,qa){qa=(()=>{var ra="undefined"!=typeof document?document.currentScript?.src:void 0;return function(ab={}){function bb(a){return h.locateFile?h.locateFile(a,G):G+a}function sa(){var a=V.buffer;h.HEAP8=D=new Int8Array(a);h.HEAP16=L=new Int16Array(a);h.HEAPU8=w=new Uint8Array(a);h.HEAPU16=O=new Uint16Array(a);h.HEAP32=x=new Int32Array(a);h.HEAPU32=t=new Uint32Array(a);h.HEAPF32=ta=new Float32Array(a);h.HEAPF64=ua=
new Float64Array(a)}function va(a){h.onAbort?.(a);a="Aborted("+a+")";P(a);wa=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");W(a);throw a;}function xa(a){if(a==Q&&R)return new Uint8Array(R);throw"both async and sync fetching of the wasm failed";}function cb(a){return R||"function"!=typeof fetch?Promise.resolve().then(()=>xa(a)):fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw`failed to load wasm binary file at '${a}'`;return b.arrayBuffer()}).catch(()=>
xa(a))}function ya(a,b,c){return cb(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{P(`failed to asynchronously prepare wasm: ${d}`);va(d)})}function db(a,b,c,d){return a||"function"!=typeof WebAssembly.instantiateStreaming||b.startsWith("data:application/octet-stream;base64,")||"function"!=typeof fetch?ya(b,c,d):fetch(b,{credentials:"same-origin"}).then(e=>WebAssembly.instantiateStreaming(e,c).then(d,function(g){P(`wasm streaming compile failed: ${g}`);P("falling back to ArrayBuffer instantiation");
return ya(b,c,d)}))}function X(a){return this.fromWireType(t[a>>2])}function eb(a,b,c={}){var d=b.name;if(!a)throw new A(`type "${d}" must have a positive integer typeid pointer`);if(I.hasOwnProperty(a)){if(c.ignoreDuplicateRegistrations)return;throw new A(`Cannot register type '${d}' twice`);}I[a]=b;delete Y[a];M.hasOwnProperty(a)&&(b=M[a],delete M[a],b.forEach(e=>e()))}function E(a,b,c={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");
return eb(a,b,c)}function fb(a){for(var b=1;b<a.length;++b)if(null!==a[b]&&void 0===a[b].destructorFunction)return!0;return!1}function gb(a,b,c,d,e,g){g=b.length;if(2>g)throw new A("argTypes array size mismatch! Must at least get return value and 'this' types!");var k=null!==b[1]&&null!==c,l=fb(b),m="void"!==b[0].name,p=g-2,n=Array(p),u=[],B=[];return Z(a,function(...f){if(f.length!==p)throw new A(`function ${a} called with ${f.length} arguments, expected ${p}`);B.length=0;u.length=k?2:1;u[0]=e;if(k){var q=
b[1].toWireType(B,this);u[1]=q}for(var r=0;r<p;++r)n[r]=b[r+2].toWireType(B,f[r]),u.push(n[r]);f=d(...u);if(l)fa(B);else for(r=k?1:2;r<b.length;r++){var v=1===r?q:n[r-2];null!==b[r].destructorFunction&&b[r].destructorFunction(v)}q=m?b[0].fromWireType(f):void 0;return q})}function hb(a,b,c){b=za(a)+1;b=Array(b);Aa(a,b,0,b.length);return b}function Ba(){function a(){if(!aa&&(aa=!0,h.calledRun=!0,!wa)){ha(Ca);Da(h);if(h.onRuntimeInitialized)h.onRuntimeInitialized();if(h.postRun)for("function"==typeof h.postRun&&
(h.postRun=[h.postRun]);h.postRun.length;)Ea.unshift(h.postRun.shift());ha(Ea)}}if(!(0<J)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Fa.unshift(h.preRun.shift());ha(Fa);0<J||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);a()},1)):a())}}var h=Object.assign({},ab),Da,W,ib=new Promise((a,b)=>{Da=a;W=b}),Ga=Object.assign({},h),Ha="./this.program",G="";"undefined"!=typeof document&&document.currentScript&&
(G=document.currentScript.src);ra&&(G=ra);G=G.startsWith("blob:")?"":G.substr(0,G.replace(/[?#].*/,"").lastIndexOf("/")+1);h.print||console.log.bind(console);var P=h.printErr||console.error.bind(console);Object.assign(h,Ga);Ga=null;h.arguments&&h.arguments;h.thisProgram&&(Ha=h.thisProgram);h.quit&&h.quit;var R;h.wasmBinary&&(R=h.wasmBinary);var V,wa=!1,D,w,L,O,x,t,ta,ua,Fa=[],Ca=[],Ea=[],J=0,S=null;var Q="lclayout.wasm";Q.startsWith("data:application/octet-stream;base64,")||(Q=bb(Q));var ha=a=>{for(;0<
a.length;)a.shift()(h)};h.noExitRuntime||!0;class jb{constructor(a){this.excPtr=a;this.ptr=a-24}set_type(a){t[this.ptr+4>>2]=a}get_type(){return t[this.ptr+4>>2]}set_destructor(a){t[this.ptr+8>>2]=a}get_destructor(){return t[this.ptr+8>>2]}set_caught(a){D[this.ptr+12]=a?1:0}get_caught(){return 0!=D[this.ptr+12]}set_rethrown(a){D[this.ptr+13]=a?1:0}get_rethrown(){return 0!=D[this.ptr+13]}init(a,b){this.set_adjusted_ptr(0);this.set_type(a);this.set_destructor(b)}set_adjusted_ptr(a){t[this.ptr+16>>2]=
a}get_adjusted_ptr(){return t[this.ptr+16>>2]}get_exception_ptr(){if(Ia(this.get_type()))return t[this.excPtr>>2];var a=this.get_adjusted_ptr();return 0!==a?a:this.excPtr}}var Ja=0,ba={},fa=a=>{for(;a.length;){var b=a.pop();a.pop()(b)}},M={},I={},Y={},ia=(a,b,c)=>{function d(l){l=c(l);if(l.length!==a.length)throw new Ka("Mismatched type converter count");for(var m=0;m<a.length;++m)E(a[m],l[m])}a.forEach(function(l){Y[l]=b});var e=Array(b.length),g=[],k=0;b.forEach((l,m)=>{I.hasOwnProperty(l)?e[m]=
I[l]:(g.push(l),M.hasOwnProperty(l)||(M[l]=[]),M[l].push(()=>{e[m]=I[l];++k;k===g.length&&d(e)}))});0===g.length&&d(e)},La,y=a=>{for(var b="";w[a];)b+=La[w[a++]];return b},ja=[],H=[],ka=a=>{9<a&&0===--H[a+1]&&(H[a]=void 0,ja.push(a))},z={toValue:a=>{if(!a)throw new A("Cannot use deleted val. handle \x3d "+a);return H[a]},toHandle:a=>{switch(a){case void 0:return 2;case null:return 4;case !0:return 6;case !1:return 8;default:const b=ja.pop()||H.length;H[b]=a;H[b+1]=1;return b}}},Ma={name:"emscripten::val",
fromWireType:a=>{var b=z.toValue(a);ka(a);return b},toWireType:(a,b)=>z.toHandle(b),argPackAdvance:8,readValueFromPointer:X,destructorFunction:null},kb=(a,b,c)=>{if(void 0===a[b].overloadTable){var d=a[b];a[b]=function(...e){if(!a[b].overloadTable.hasOwnProperty(e.length))throw new A(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${a[b].overloadTable})!`);return a[b].overloadTable[e.length].apply(this,e)};a[b].overloadTable=[];a[b].overloadTable[d.argCount]=
d}},Na=(a,b,c)=>{if(h.hasOwnProperty(a)){if(void 0===c||void 0!==h[a].overloadTable&&void 0!==h[a].overloadTable[c])throw new A(`Cannot register public name '${a}' twice`);kb(h,a,a);if(h.hasOwnProperty(c))throw new A(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`);h[a].overloadTable[c]=b}else h[a]=b,void 0!==c&&(h[a].numArguments=c)},lb=(a,b,c)=>{switch(b){case 1:return c?function(d){return this.fromWireType(D[d])}:function(d){return this.fromWireType(w[d])};
case 2:return c?function(d){return this.fromWireType(L[d>>1])}:function(d){return this.fromWireType(O[d>>1])};case 4:return c?function(d){return this.fromWireType(x[d>>2])}:function(d){return this.fromWireType(t[d>>2])};default:throw new TypeError(`invalid integer width (${b}): ${a}`);}},Z=(a,b)=>Object.defineProperty(b,"name",{value:a}),Pa=a=>{a=Oa(a);var b=y(a);F(a);return b},ca=(a,b)=>{var c=I[a];if(void 0===c)throw a=`${b} has unknown type ${Pa(a)}`,new A(a);return c},mb=(a,b)=>{switch(b){case 4:return function(c){return this.fromWireType(ta[c>>
2])};case 8:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError(`invalid float width (${b}): ${a}`);}},nb=(a,b)=>{for(var c=[],d=0;d<a;d++)c.push(t[b+4*d>>2]);return c},da=[],Qa,Ra=a=>{var b=da[a];b||(a>=da.length&&(da.length=a+1),da[a]=b=Qa.get(a));return b},ob=(a,b,c=[])=>a.includes("j")?(a=a.replace(/p/g,"i"),(0,h["dynCall_"+a])(b,...c)):Ra(b)(...c),pb=(a,b)=>(...c)=>ob(a,b,c),T=(a,b)=>{a=y(a);var c=a.includes("j")?pb(a,b):Ra(b);if("function"!=typeof c)throw new A(`unknown function pointer with signature ${a}: ${b}`);
return c},rb=(a,b)=>{function c(g){e[g]||I[g]||(Y[g]?Y[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new qb(`${a}: `+d.map(Pa).join([", "]));},sb=a=>{a=a.trim();const b=a.indexOf("(");return-1!==b?a.substr(0,b):a},tb=(a,b,c)=>{switch(b){case 1:return c?d=>D[d]:d=>w[d];case 2:return c?d=>L[d>>1]:d=>O[d>>1];case 4:return c?d=>x[d>>2]:d=>t[d>>2];default:throw new TypeError(`invalid integer width (${b}): ${a}`);}},Aa=(a,b,c,d)=>{if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var k=
a.charCodeAt(g);if(55296<=k&&57343>=k){var l=a.charCodeAt(++g);k=65536+((k&1023)<<10)|l&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-e},za=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Sa="undefined"!=typeof TextDecoder?
new TextDecoder("utf8"):void 0,la=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Sa)return Sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var k=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|k:(e&7)<<18|g<<12|k<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},Ta="undefined"!=typeof TextDecoder?
new TextDecoder("utf-16le"):void 0,ub=(a,b)=>{var c=a>>1;for(var d=c+b/2;!(c>=d)&&O[c];)++c;c<<=1;if(32<c-a&&Ta)return Ta.decode(w.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=L[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c},vb=(a,b,c)=>{c??=2147483647;if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e){var g=a.charCodeAt(e);L[b>>1]=g;b+=2}L[b>>1]=0;return b-d},wb=a=>2*a.length,xb=(a,b)=>{for(var c=0,d="";!(c>=b/4);){var e=x[a+4*c>>2];if(0==e)break;++c;65536<=
e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d},yb=(a,b,c)=>{c??=2147483647;if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var k=a.charCodeAt(++e);g=65536+((g&1023)<<10)|k&1023}x[b>>2]=g;b+=4;if(b+4>c)break}x[b>>2]=0;return b-d},zb=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b},Ua=(a,b,c)=>{var d=[];a=a.toWireType(d,c);d.length&&(t[b>>2]=z.toHandle(d));
return a},Ab={},Va=a=>{var b=Ab[a];return void 0===b?y(a):b},ma=[],Bb=a=>{var b=ma.length;ma.push(a);return b},Cb=(a,b)=>{for(var c=Array(a),d=0;d<a;++d)c[d]=ca(t[b+4*d>>2],"parameter "+d);return c},Db=Reflect.construct,na={},U=()=>{if(!U.strings){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Ha||"./this.program"},b;for(b in na)void 0===na[b]?delete a[b]:
a[b]=na[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);U.strings=c}return U.strings},ea=a=>0===a%4&&(0!==a%100||0===a%400),Wa=[31,29,31,30,31,30,31,31,30,31,30,31],Xa=[31,28,31,30,31,30,31,31,30,31,30,31],Eb=(a,b,c,d)=>{function e(f,q,r){for(f="number"==typeof f?f.toString():f||"";f.length<q;)f=r[0]+f;return f}function g(f,q){return e(f,q,"0")}function k(f,q){function r(K){return 0>K?-1:0<K?1:0}var v;0===(v=r(f.getFullYear()-q.getFullYear()))&&0===(v=r(f.getMonth()-q.getMonth()))&&(v=r(f.getDate()-
q.getDate()));return v}function l(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function m(f){a:{var q=f.tm_yday;for(f=new Date((new Date(f.tm_year+1900,0,1)).getTime());0<q;){var r=ea(f.getFullYear()),v=f.getMonth();r=(r?Wa:Xa)[v];
if(q>r-f.getDate())q-=r-f.getDate()+1,f.setDate(1),11>v?f.setMonth(v+1):(f.setMonth(0),f.setFullYear(f.getFullYear()+1));else{f.setDate(f.getDate()+q);q=f;break a}}q=f}v=new Date(q.getFullYear(),0,4);f=new Date(q.getFullYear()+1,0,4);v=l(v);f=l(f);return 0>=k(v,q)?0>=k(f,q)?q.getFullYear()+1:q.getFullYear():q.getFullYear()-1}var p=t[d+40>>2];d={tm_sec:x[d>>2],tm_min:x[d+4>>2],tm_hour:x[d+8>>2],tm_mday:x[d+12>>2],tm_mon:x[d+16>>2],tm_year:x[d+20>>2],tm_wday:x[d+24>>2],tm_yday:x[d+28>>2],tm_isdst:x[d+
32>>2],tm_gmtoff:x[d+36>>2],tm_zone:p?p?la(w,p,void 0):"":""};c=c?la(w,c,void 0):"";p={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var n in p)c=c.replace(new RegExp(n,"g"),
p[n]);var u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),B="January February March April May June July August September October November December".split(" ");p={"%a":f=>u[f.tm_wday].substring(0,3),"%A":f=>u[f.tm_wday],"%b":f=>B[f.tm_mon].substring(0,3),"%B":f=>B[f.tm_mon],"%C":f=>g((f.tm_year+1900)/100|0,2),"%d":f=>g(f.tm_mday,2),"%e":f=>e(f.tm_mday,2," "),"%g":f=>m(f).toString().substring(2),"%G":m,"%H":f=>g(f.tm_hour,2),"%I":f=>{f=f.tm_hour;0==f?f=12:12<f&&(f-=12);return g(f,
2)},"%j":f=>{for(var q=f.tm_mday,r=ea(f.tm_year+1900)?Wa:Xa,v=0,K=0;K<=f.tm_mon-1;v+=r[K++]);return g(q+v,3)},"%m":f=>g(f.tm_mon+1,2),"%M":f=>g(f.tm_min,2),"%n":()=>"\n","%p":f=>0<=f.tm_hour&&12>f.tm_hour?"AM":"PM","%S":f=>g(f.tm_sec,2),"%t":()=>"\t","%u":f=>f.tm_wday||7,"%U":f=>g(Math.floor((f.tm_yday+7-f.tm_wday)/7),2),"%V":f=>{var q=Math.floor((f.tm_yday+7-(f.tm_wday+6)%7)/7);2>=(f.tm_wday+371-f.tm_yday-2)%7&&q++;if(q)53==q&&(r=(f.tm_wday+371-f.tm_yday)%7,4==r||3==r&&ea(f.tm_year)||(q=1));else{q=
52;var r=(f.tm_wday+7-f.tm_yday-1)%7;(4==r||5==r&&ea(f.tm_year%400-1))&&q++}return g(q,2)},"%w":f=>f.tm_wday,"%W":f=>g(Math.floor((f.tm_yday+7-(f.tm_wday+6)%7)/7),2),"%y":f=>(f.tm_year+1900).toString().substring(2),"%Y":f=>f.tm_year+1900,"%z":f=>{f=f.tm_gmtoff;var q=0<=f;f=Math.abs(f)/60;return(q?"+":"-")+String("0000"+(f/60*100+f%60)).slice(-4)},"%Z":f=>f.tm_zone,"%%":()=>"%"};c=c.replace(/%%/g,"\x00\x00");for(n in p)c.includes(n)&&(c=c.replace(new RegExp(n,"g"),p[n](d)));c=c.replace(/\0\0/g,"%");
n=hb(c);if(n.length>b)return 0;D.set(n,a);return n.length-1};var Ka=h.InternalError=class extends Error{constructor(a){super(a);this.name="InternalError"}};(()=>{for(var a=Array(256),b=0;256>b;++b)a[b]=String.fromCharCode(b);La=a})();var A=h.BindingError=class extends Error{constructor(a){super(a);this.name="BindingError"}};H.push(0,1,void 0,1,null,1,!0,1,!1,1);h.count_emval_handles=()=>H.length/2-5-ja.length;var qb=h.UnboundTypeError=((a,b)=>{var c=Z(b,function(d){this.name=b;this.message=d;d=Error(d).stack;
void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`};return c})(Error,"UnboundTypeError");var Fb={a:(a,b,c)=>{(new jb(a)).init(b,c);Ja=a;throw Ja;},k:a=>{var b=ba[a];delete ba[a];var c=b.rawConstructor,d=b.rawDestructor,e=b.fields,g=e.map(k=>k.getterReturnType).concat(e.map(k=>k.setterArgumentType));ia([a],
g,k=>{var l={};e.forEach((m,p)=>{var n=k[p],u=m.getter,B=m.getterContext,f=k[p+e.length],q=m.setter,r=m.setterContext;l[m.fieldName]={read:v=>n.fromWireType(u(B,v)),write:(v,K)=>{var Ya=[];q(r,v,f.toWireType(Ya,K));fa(Ya)}}});return[{name:b.name,fromWireType:m=>{var p={},n;for(n in l)p[n]=l[n].read(m);d(m);return p},toWireType:(m,p)=>{for(var n in l)if(!(n in p))throw new TypeError(`Missing field: "${n}"`);var u=c();for(n in l)l[n].write(u,p[n]);null!==m&&m.push(d,u);return u},argPackAdvance:8,readValueFromPointer:X,
destructorFunction:d}]})},w:(a,b,c,d,e)=>{},E:(a,b,c,d)=>{b=y(b);E(a,{name:b,fromWireType:function(e){return!!e},toWireType:function(e,g){return g?c:d},argPackAdvance:8,readValueFromPointer:function(e){return this.fromWireType(w[e])},destructorFunction:null})},u:(a,b,c)=>{a=y(a);ia([],[b],d=>{d=d[0];h[a]=d.fromWireType(c);return[]})},v:a=>E(a,Ma),K:(a,b,c,d)=>{function e(){}b=y(b);e.values={};E(a,{name:b,constructor:e,fromWireType:function(g){return this.constructor.values[g]},toWireType:(g,k)=>k.value,
argPackAdvance:8,readValueFromPointer:lb(b,c,d),destructorFunction:null});Na(b,e)},q:(a,b,c)=>{var d=ca(a,"enum");b=y(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Z(`${d.name}_${b}`,function(){})}});a.values[c]=d;a[b]=d},t:(a,b,c)=>{b=y(b);E(a,{name:b,fromWireType:d=>d,toWireType:(d,e)=>e,argPackAdvance:8,readValueFromPointer:mb(b,c),destructorFunction:null})},d:(a,b,c,d,e,g,k)=>{var l=nb(b,c);a=y(a);a=sb(a);e=T(d,e);Na(a,function(){rb(`Cannot call ${a} due to unbound types`,
l)},b-1);ia([],l,m=>{var p=[m[0],null].concat(m.slice(1));m=a;p=gb(a,p,null,e,g);var n=b-1;if(!h.hasOwnProperty(m))throw new Ka("Replacing nonexistent public symbol");void 0!==h[m].overloadTable&&void 0!==n?h[m].overloadTable[n]=p:(h[m]=p,h[m].argCount=n);return[]})},j:(a,b,c,d,e)=>{b=y(b);e=l=>l;if(0===d){var g=32-8*c;e=l=>l<<g>>>g}var k=b.includes("unsigned")?function(l,m){return m>>>0}:function(l,m){return m};E(a,{name:b,fromWireType:e,toWireType:k,argPackAdvance:8,readValueFromPointer:tb(b,c,
0!==d),destructorFunction:null})},f:(a,b,c)=>{function d(g){return new e(D.buffer,t[g+4>>2],t[g>>2])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=y(c);E(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ignoreDuplicateRegistrations:!0})},L:(a,b)=>{E(a,Ma)},s:(a,b)=>{b=y(b);var c="std::string"===b;E(a,{name:b,fromWireType(d){var e=t[d>>2],g=d+4;if(c)for(var k=g,l=0;l<=e;++l){var m=g+l;if(l==e||0==w[m]){var p=m-k;k=k?la(w,
k,p):"";if(void 0===n)var n=k;else n+=String.fromCharCode(0),n+=k;k=m+1}}else{n=Array(e);for(l=0;l<e;++l)n[l]=String.fromCharCode(w[g+l]);n=n.join("")}F(d);return n},toWireType(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"==typeof e;if(!(g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array))throw new A("Cannot pass non-string to std::string");var k=c&&g?za(e):e.length;var l=oa(4+k+1),m=l+4;t[l>>2]=k;if(c&&g)Aa(e,w,m,k+1);else if(g)for(g=0;g<k;++g){var p=
e.charCodeAt(g);if(255<p)throw F(m),new A("String has UTF-16 code units that do not fit in 8 bits");w[m+g]=p}else for(g=0;g<k;++g)w[m+g]=e[g];null!==d&&d.push(F,l);return l},argPackAdvance:8,readValueFromPointer:X,destructorFunction(d){F(d)}})},r:(a,b,c)=>{c=y(c);if(2===b){var d=ub;var e=vb;var g=wb;var k=l=>O[l>>1]}else 4===b&&(d=xb,e=yb,g=zb,k=l=>t[l>>2]);E(a,{name:c,fromWireType:l=>{for(var m=t[l>>2],p,n=l+4,u=0;u<=m;++u){var B=l+4+u*b;if(u==m||0==k(B))n=d(n,B-n),void 0===p?p=n:(p+=String.fromCharCode(0),
p+=n),n=B+b}F(l);return p},toWireType:(l,m)=>{if("string"!=typeof m)throw new A(`Cannot pass non-string to C++ string type ${c}`);var p=g(m),n=oa(4+p+b);t[n>>2]=p/b;e(m,n+4,p+b);null!==l&&l.push(F,n);return n},argPackAdvance:8,readValueFromPointer:X,destructorFunction(l){F(l)}})},l:(a,b,c,d,e,g)=>{ba[a]={name:y(b),rawConstructor:T(c,d),rawDestructor:T(e,g),fields:[]}},e:(a,b,c,d,e,g,k,l,m,p)=>{ba[a].fields.push({fieldName:y(b),getterReturnType:c,getter:T(d,e),getterContext:g,setterArgumentType:k,
setter:T(l,m),setterContext:p})},J:(a,b)=>{b=y(b);E(a,{isVoid:!0,name:b,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,d)=>{}})},C:()=>1,H:(a,b,c)=>w.copyWithin(a,b,b+c),g:(a,b,c)=>{a=z.toValue(a);b=ca(b,"emval::as");return Ua(b,c,a)},n:(a,b,c,d,e)=>{a=ma[a];b=z.toValue(b);c=Va(c);return a(b,b[c],d,e)},b:ka,o:(a,b,c)=>{var d=Cb(a,b),e=d.shift();a--;var g=Array(a);b=`methodCaller<(${d.map(k=>k.name).join(", ")}) => ${e.name}>`;return Bb(Z(b,(k,l,m,p)=>{for(var n=0,u=0;u<a;++u)g[u]=d[u].readValueFromPointer(p+
n),n+=d[u].argPackAdvance;k=1===c?Db(l,g):l.apply(k,g);return Ua(e,m,k)}))},h:(a,b)=>{a=z.toValue(a);b=z.toValue(b);return z.toHandle(a[b])},p:()=>z.toHandle([]),I:a=>{a=z.toValue(a);for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=a[c];return z.toHandle(b)},m:a=>z.toHandle(Va(a)),c:a=>{var b=z.toValue(a);fa(b);ka(a)},i:(a,b)=>{a=ca(a,"_emval_take_value");a=a.readValueFromPointer(b);return z.toHandle(a)},B:()=>{va("")},D:()=>Date.now(),x:()=>2147483648,G:()=>performance.now(),F:a=>{var b=w.length;
a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=(e.min.call(e,2147483648,d+(65536-d%65536)%65536)-V.buffer.byteLength+65535)/65536;try{V.grow(e);sa();var g=1;break a}catch(k){}g=void 0}if(g)return!0}return!1},z:(a,b)=>{var c=0;U().forEach((d,e)=>{var g=b+c;e=t[a+4*e>>2]=g;for(g=0;g<d.length;++g)D[e++]=d.charCodeAt(g);D[e]=0;c+=d.length+1});return 0},A:(a,b)=>{var c=U();t[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+
1);t[b>>2]=d;return 0},y:(a,b,c,d,e)=>Eb(a,b,c,d)},C=function(){function a(c,d){C=c.exports;V=C.M;sa();Qa=C.P;Ca.unshift(C.N);J--;h.monitorRunDependencies?.(J);0==J&&S&&(c=S,S=null,c());return C}var b={a:Fb};J++;h.monitorRunDependencies?.(J);if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){P(`Module.instantiateWasm callback failed with error: ${c}`),W(c)}db(R,Q,b,function(c){a(c.instance)}).catch(W);return{}}(),Oa=a=>(Oa=C.O)(a),oa=h._malloc=a=>(oa=h._malloc=C.Q)(a),F=h._free=a=>(F=
h._free=C.R)(a),Ia=a=>(Ia=C.S)(a);h.dynCall_viijii=(a,b,c,d,e,g,k)=>(h.dynCall_viijii=C.T)(a,b,c,d,e,g,k);h.dynCall_iiiiij=(a,b,c,d,e,g,k)=>(h.dynCall_iiiiij=C.U)(a,b,c,d,e,g,k);h.dynCall_iiiiijj=(a,b,c,d,e,g,k,l,m)=>(h.dynCall_iiiiijj=C.V)(a,b,c,d,e,g,k,l,m);h.dynCall_iiiiiijj=(a,b,c,d,e,g,k,l,m,p)=>(h.dynCall_iiiiiijj=C.W)(a,b,c,d,e,g,k,l,m,p);var aa;S=function b(){aa||Ba();aa||(S=b)};if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();Ba();
return ib}})();$a.exports=qa})(pa);N=N.getDefaultExportFromCjs(pa.exports);N=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));Za.lclayout=N});