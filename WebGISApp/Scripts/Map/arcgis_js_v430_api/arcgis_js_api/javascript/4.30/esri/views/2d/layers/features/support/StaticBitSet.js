// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){class c{static fromBuffer(a,b){return new c(a,b)}static create(a,b=4294967295){a=new Uint32Array(Math.ceil(a/32));return new c(a,b)}constructor(a,b){this._mask=0;this._buf=a;this._mask=b}_getIndex(a){return Math.floor(a/32)}has(a){a&=this._mask;return!!(this._buf[this._getIndex(a)]&1<<a%32)}hasRange(a,b){for(;a%32&&a!==b;){if(this.has(a))return!0;a++}for(;b%32&&a!==b;){if(this.has(a))return!0;b--}if(a===b)return!1;for(a/=32;a!==b/32;a++)if(this._buf[a])return!0;return!1}set(a){a&=
this._mask;const b=this._getIndex(a);this._buf[b]|=1<<a%32}setRange(a,b){for(;a%32&&a!==b;)this.set(a++);for(;b%32&&a!==b;)this.set(b--);if(a!==b)for(a/=32;a!==b/32;a++)this._buf[a]=4294967295}unset(a){a&=this._mask;const b=this._getIndex(a);this._buf[b]&=4294967295^1<<a%32}resize(a){const b=this._buf;a=new Uint32Array(Math.ceil(a/32));a.set(b);this._buf=a}or(a){for(let b=0;b<this._buf.length;b++)this._buf[b]|=a._buf[b];return this}and(a){for(let b=0;b<this._buf.length;b++)this._buf[b]&=a._buf[b];
return this}xor(a){for(let b=0;b<this._buf.length;b++)this._buf[b]^=a._buf[b];return this}ior(a){for(let b=0;b<this._buf.length;b++)this._buf[b]|=~a._buf[b];return this}iand(a){for(let b=0;b<this._buf.length;b++)this._buf[b]&=~a._buf[b];return this}ixor(a){for(let b=0;b<this._buf.length;b++)this._buf[b]^=~a._buf[b];return this}any(){for(let a=0;a<this._buf.length;a++)if(this._buf[a])return!0;return!1}copy(a){for(let b=0;b<this._buf.length;b++)this._buf[b]=a._buf[b];return this}clone(){return new c(this._buf.slice(),
this._mask)}clear(){for(let a=0;a<this._buf.length;a++)this._buf[a]=0;return this}forEachSet(a){for(let b=0;b<this._buf.length;b++){let d=this._buf[b],f=32*b;if(d)for(;d;)d&1&&a(f),d>>>=1,f++}}countSet(){let a=0;this.forEachSet(b=>{a++});return a}}e.StaticBitSet=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});