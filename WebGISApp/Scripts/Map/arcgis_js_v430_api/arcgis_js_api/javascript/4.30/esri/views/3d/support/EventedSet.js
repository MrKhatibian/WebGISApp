// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Evented","../../../core/ObservableChangesType","../../../core/SetUtils","../../../core/signal"],function(e,f,d,g,h){class k extends f{constructor(){super(...arguments);this._set=new Set;this._length=h.signal(0)}clear(){if(0<this._set.size){const a=this.toArray();this._set.clear();this.emit("after-changes",{type:d.ObservableChangesType.REMOVE});this.emit("change",{added:[],removed:a})}}get length(){return this._length.value}addMany(a){if(0!==a.length){for(const b of a)this._set.add(b);
this._length.value=this._set.size;this.emit("after-changes",{type:d.ObservableChangesType.ADD});this.emit("change",{added:a,removed:[]})}}remove(a){this._set.delete(a)&&(this._length.value=this._set.size,this.emit("after-changes",{type:d.ObservableChangesType.REMOVE}),this.emit("change",{added:[],removed:[a]}))}removeMany(a){const b=[];for(const c of a)this._set.delete(c)&&b.push(c);0<b.length&&(this._length.value=this._set.size,this.emit("after-changes",{type:d.ObservableChangesType.REMOVE}),this.emit("change",
{added:[],removed:b}))}toArray(){return[...this._set]}find(a){let b;g.someSet(this._set,c=>a(c)?(b=c,!0):!1);return b}forEach(a){this._set.forEach(b=>a(b))}}e.EventedSet=k;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});