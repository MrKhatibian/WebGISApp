// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){class d{constructor(){this._store=new Map;this._byteSize=0}set(a,b){this.delete(a);this._store.set(a,b);this._byteSize+=b.byteSize}delete(a){const b=this._store.get(a);return this._store.delete(a)?(null!=b&&(this._byteSize-=b.byteSize),!0):!1}get(a){this._used(a);return this._store.get(a)}has(a){this._used(a);return this._store.has(a)}clear(){this._store.clear()}applyByteSizeLimit(a,b){for(const [e,f]of this._store){if(this._byteSize<=a)break;this.delete(e);b(f)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(a){const b=
this._store.get(a);b&&(this._store.delete(a),this._store.set(a,b))}}c.FeatureServiceTileCache=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});