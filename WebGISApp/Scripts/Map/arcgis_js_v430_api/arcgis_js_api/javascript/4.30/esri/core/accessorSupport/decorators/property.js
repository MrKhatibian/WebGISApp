// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../Logger ../ensureType ../get ../metadata ../set".split(" "),function(h,r,e,m,l,t){function u(b){let a=0;var c=b;if(e.isLongFormType(b))return e.ensureLongFormType(b);for(;Array.isArray(c)&&1===c.length&&"string"!==typeof c[0]&&"number"!==typeof c[0];)c=c[0],a++;return e.isOneOf(c)?0===a?e.ensureOneOf(c):e.ensureNArrayTyped(e.ensureOneOf(c),a):1===a?e.ensureArray(c):1<a?e.ensureNArray(c,a):b.from?b.from:e.ensureType(b)}function n(b,a){return c=>{c=+b(c);null!=a.step&&(c=Math.round(c/
a.step)*a.step);null!=a.min&&(c=Math.max(a.min,c));null!=a.max&&(c=Math.min(a.max,c));return c}}h.ensureRange=n;h.property=function(b={}){return(a,c)=>{if(a===Function.prototype)throw Error(`Inappropriate use of @property() on a static field: ${a.name}.${c}. Accessor does not support static properties.`);var f=Object.getOwnPropertyDescriptor(a,c);const d=l.getPropertyMetadata(a,c);f&&(f.get||f.set?(d.get=f.get||d.get,d.set=f.set||d.set):"value"in f&&("value"in b&&r.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${c}" on "${a.constructor.name}" already defined in the metadata`,
b),d.value=b.value=f.value));null!=b.readOnly&&(d.readOnly=b.readOnly);if(a=b.aliasOf){const k="string"===typeof a?a:a.source;a="string"===typeof a?null:!0===a.overridable;let p;d.dependsOn=[k];d.get=function(){let g=m.get(this,k);if("function"===typeof g){p||=k.split(".").slice(0,-1).join(".");const q=m.get(this,p);q&&(g=g.bind(q))}return g};d.readOnly||(d.set=a?function(g){this._override(c,g)}:function(g){t.set(this,k,g)})}a=b.type;f=b.types;d.cast||(a?d.cast=u(a):f&&(Array.isArray(f)?d.cast=e.ensureArrayTyped(e.ensureOneOfType(f[0])):
d.cast=e.ensureOneOfType(f)));l.mergeProperty(d,b);b.range&&(d.cast=n(d.cast,b.range))}};h.propertyJSONMeta=function(b,a,c){b=l.getPropertyMetadata(b,c);b.json||(b.json={});b=b.json;void 0!==a&&(b.origins||(b.origins={}),b.origins[a]||(b.origins[a]={}),b=b.origins[a]);return b};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});