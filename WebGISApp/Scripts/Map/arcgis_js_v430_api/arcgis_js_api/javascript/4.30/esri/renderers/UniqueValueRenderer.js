// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../symbols ../core/Error ../core/lang ../core/Logger ../core/object ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/diffUtils ../core/accessorSupport/ensureType ../layers/support/fieldUtils ../portal/Portal ./Renderer ./mixins/VisualVariablesMixin ./support/commonProperties ./support/LegendOptions ./support/UniqueValue ./support/UniqueValueClass ./support/UniqueValueGroup ./support/UniqueValueInfo ../support/arcadeOnDemand ../chunks/persistableUrlUtils ../symbols/support/styleUtils ../symbols/WebStyleSymbol".split(" "),
function(g,L,M,p,q,N,C,l,O,P,F,Q,G,R,H,B,D,e,S,I,T,U,V,E,t,J,K,W,X){function Y(a){const {field1:b,field2:c,field3:d,fieldDelimiter:f,uniqueValueInfos:h,valueExpression:n}=a,k=!(!b||!c);return[{classes:(h??[]).map(m=>{const {symbol:u,label:v,value:r,description:w}=m,[x,y,z]=k?r?.toString()?.split(f||"")||[]:[r];m=[];(b||n)&&m.push(x);c&&m.push(y);d&&m.push(z);return{symbol:u,label:v,values:[m],description:w}})}]}var A;const Z=H.ensureType(t);e=A=class extends S.VisualVariablesMixin(e){constructor(a){super(a);
this._valueInfoMap={};this._isDefaultSymbolDerived=!1;this._isInfosSource=null;this.type="unique-value";this.backgroundFillSymbol=null;this.orderByClassesEnabled=!1;this.styleOrigin=this.portal=this.defaultLabel=this.legendOptions=this.valueExpressionTitle=null;this.diff={uniqueValueInfos(b,c){if(b||c){if(!b||!c)return{type:"complete",oldValue:b,newValue:c};var d=!1,f={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let h=0;h<c.length;h++){const n=b.find(k=>k.value===c[h].value);
n?R.diff(n,c[h])?(f.changed.push({type:"complete",oldValue:n,newValue:c[h]}),d=!0):f.unchanged.push({oldValue:n,newValue:c[h]}):(f.added.push(c[h]),d=!0)}for(let h=0;h<b.length;h++)c.find(n=>n.value===b[h].value)||(f.removed.push(b[h]),d=!0);return d?f:void 0}}};this._set("uniqueValueInfos",[]);this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(a){this._set("field",a);this._updateFieldDelimiter();this._updateUniqueValues()}castField(a){return null==a||"function"===
typeof a?a:H.ensureString(a)}writeField(a,b,c,d){"string"===typeof a?b[c]=a:d?.messages?d.messages.push(new M("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):q.getLogger("esri.renderers.UniqueValueRenderer").error(".field: cannot write field to JSON since it's not a string value")}set field2(a){this._set("field2",a);this._updateFieldDelimiter();this._updateUniqueValues()}set field3(a){this._set("field3",a);this._updateUniqueValues()}set valueExpression(a){this._set("valueExpression",
a);this._updateUniqueValues()}set defaultSymbol(a){this._isDefaultSymbolDerived=!1;this._set("defaultSymbol",a)}set fieldDelimiter(a){this._set("fieldDelimiter",a);this._updateUniqueValues()}readPortal(a,b,c){return c.portal||D.getDefault()}readStyleOrigin(a,b,c){if(b.styleName)return Object.freeze({styleName:b.styleName});if(b.styleUrl)return a=K.fromJSON(b.styleUrl,c),Object.freeze({styleUrl:a})}writeStyleOrigin(a,b,c,d){a.styleName?b.styleName=a.styleName:a.styleUrl&&(b.styleUrl=K.toJSON(a.styleUrl,
d))}set uniqueValueGroups(a){this.styleOrigin?q.getLogger("esri.renderers.UniqueValueRenderer").error("#uniqueValueGroups\x3d","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",a),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(a){this.styleOrigin?q.getLogger("esri.renderers.UniqueValueRenderer").error("#uniqueValueInfos\x3d","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):
(this._set("uniqueValueInfos",a),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(a,b){this.styleOrigin?q.getLogger("esri.renderers.UniqueValueRenderer").error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(a="object"===typeof a?Z(a):new t({value:a,symbol:L.ensureType(b)}),this.uniqueValueInfos?.push(a),this._valueInfoMap[a.value]=a,this._updateGroupsFromInfos(),
this._isInfosSource=!0,this._watchUniqueValueInfos())}removeUniqueValueInfo(a){if(this.styleOrigin)q.getLogger("esri.renderers.UniqueValueRenderer").error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else{var b=this.uniqueValueInfos;if(b)for(let c=0;c<b.length;c++)if(String(b[c].value)===String(a)){delete this._valueInfoMap[a];b.splice(c,1);break}this._updateGroupsFromInfos();this._isInfosSource=!0;this._watchUniqueValueInfos()}}async getUniqueValueInfo(a,
b){let c=b;this.valueExpression&&null==b?.arcade&&(c={...c,arcade:await J.loadArcade()});return this._getUniqueValueInfo(a,c)}getSymbol(a,b){if(this.valueExpression&&null==b?.arcade)q.getLogger("esri.renderers.UniqueValueRenderer").error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");else return this._getUniqueValueInfo(a,b)?.symbol||this.defaultSymbol}async getSymbolAsync(a,b){if(this.valueExpression&&null==b?.arcade){const c=await J.loadArcade(),{arcadeUtils:d}=c;d.hasGeometryOperations(this.valueExpression)&&
await d.enableGeometryOperations();b={...b,arcade:c}}return this._getUniqueValueInfo(a,b)?.symbol||this.defaultSymbol}getSymbols(){const a=[];for(const b of this.uniqueValueInfos??[])b.symbol&&a.push(b.symbol);this.defaultSymbol&&a.push(this.defaultSymbol);return a}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((a,b)=>a+b.getAttributeHash(),"")}getMeshHash(){const a=JSON.stringify(this.backgroundFillSymbol),b=JSON.stringify(this.defaultSymbol),c=this.uniqueValueInfos?.reduce((d,
f)=>d+f.getMeshHash(),"");return`${a}.${b}.${c}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const a=new A({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:p.clone(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:p.clone(this.visualVariables),
legendOptions:p.clone(this.legendOptions),authoringInfo:p.clone(this.authoringInfo),backgroundFillSymbol:p.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(a._isDefaultSymbolDerived=!0);a._set("portal",this.portal);const b=p.clone(this.uniqueValueInfos),c=p.clone(this.uniqueValueGroups);this.styleOrigin&&(a._set("styleOrigin",Object.freeze(p.clone(this.styleOrigin))),Object.freeze(b),Object.freeze(c));a._set("uniqueValueInfos",b);a._updateValueInfoMap();a._set("uniqueValueGroups",
c);a._isInfosSource=this._isInfosSource;a._watchUniqueValueInfosAndGroups();return a}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(a,b){a=[this.collectVVRequiredFields(a,b),this.collectSymbolFields(a,b)];await Promise.all(a)}async collectSymbolFields(a,b){const c=[...this.getSymbols().map(d=>d.collectRequiredFields(a,b)),B.collectArcadeFieldNames(a,b,this.valueExpression)];B.collectField(a,b,this.field);B.collectField(a,b,this.field2);
B.collectField(a,b,this.field3);await Promise.all(c)}populateFromStyle(){return W.fetchStyle(this.styleOrigin,{portal:this.portal}).then(a=>{const b=[];this._valueInfoMap={};a?.data&&Array.isArray(a.data.items)&&a.data.items.forEach(c=>{var d=new X({styleUrl:a.styleUrl,styleName:a.styleName,portal:this.portal,name:c.name});this.defaultSymbol||c.name!==a.data.defaultItem||(this.defaultSymbol=d,this._isDefaultSymbolDerived=!0);d=new t({value:c.name,symbol:d});b.push(d);this._valueInfoMap[c.name]=d});
this._set("uniqueValueInfos",Object.freeze(b));this._updateGroupsFromInfos(!0);this._isInfosSource=null;this._watchUniqueValueInfos();!this.defaultSymbol&&this.uniqueValueInfos?.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0);return this})}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",",")}_updateUniqueValues(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap=
{};const {uniqueValueInfos:a}=this;if(a)for(const b of a)this._valueInfoMap[b.value+""]=b}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos();this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles("uvInfos-watcher");const {uniqueValueInfos:a}=this;if(a){const b=[];for(const c of a)b.push(C.watch(()=>({symbol:c.symbol,value:c.value,label:c.label,description:c.description}),(d,f)=>{d!==f&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)},{sync:!0}));this.addHandles(b,
"uvInfos-watcher")}}_watchUniqueValueGroups(){this.removeHandles("uvGroups-watcher");const {uniqueValueGroups:a}=this;if(a){const b=[];for(const c of a){b.push(C.watch(()=>({classes:c.classes}),(d,f)=>{d!==f&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}));for(const d of c.classes??[])b.push(C.watch(()=>({symbol:d.symbol,values:d.values,label:d.label,description:d.description}),(f,h)=>{f!==h&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}))}this.addHandles(b,
"uvGroups-watcher")}}_updateInfosFromGroups(){if(this.uniqueValueGroups){var a=[],{field:b,field2:c,field3:d,fieldDelimiter:f,uniqueValueGroups:h,valueExpression:n}=this;if(b||n){var k=!(!b||!c);for(const u of h)for(const v of u.classes??[]){const {symbol:r,label:w,values:x,description:y}=v;for(const z of x??[]){const {value:aa,value2:ba,value3:ca}=z;var m=[aa];c&&m.push(ba);d&&m.push(ca);m=k?m.join(f||""):m[0]??void 0;a.push(new t({symbol:r,label:w,value:m,description:y}))}}}this._set("uniqueValueInfos",
a)}else this._set("uniqueValueInfos",null);this._updateValueInfoMap();this._watchUniqueValueInfos()}_updateGroupsFromInfos(a=!1){if(this.uniqueValueInfos){var {field:b,field2:c,valueExpression:d,fieldDelimiter:f,uniqueValueInfos:h}=this;if((b||d)&&h.length){var n=!(!b||!c),k=h.map(m=>{const {symbol:u,label:v,value:r,description:w}=m,[x,y,z]=n?r?.toString()?.split(f||"")||[]:[r];return new V({symbol:u,label:v,description:w,values:[new U({value:x,value2:y,value3:z})]})});k=[new E({classes:k})];a&&Object.freeze(k);
this._set("uniqueValueGroups",k)}else this._set("uniqueValueGroups",[])}else this._set("uniqueValueGroups",null);this._watchUniqueValueGroups()}_getUniqueValueInfo(a,b){return this.valueExpression?this._getUnqiueValueInfoForExpression(a,b):this._getUnqiueValueInfoForFields(a)}_getUnqiueValueInfoForExpression(a,b){const {viewingMode:c,scale:d,spatialReference:f,arcade:h,timeZone:n}=b??{};var k=this._cache.compiledFunc;b=h.arcadeUtils;k||(k=b.createSyntaxTree(this.valueExpression),k=b.createFunction(k),
this._cache.compiledFunc=k);a=b.executeFunction(k,b.createExecContext(a,b.getViewInfo({viewingMode:c,scale:d,spatialReference:f}),n));return this._valueInfoMap[a+""]}_getUnqiueValueInfoForFields(a){const b=this.field;a=a.attributes;if(this.field2){var c=this.field2;const d=this.field3,f=[];b&&f.push(a[b]);c&&f.push(a[c]);d&&f.push(a[d]);c=f.join(this.fieldDelimiter||"")}else b&&(c=a[b]);return this._valueInfoMap[c+""]}static fromPortalStyle(a,b){const c=new A(b?.properties);c._set("styleOrigin",Object.freeze({styleName:a}));
c._set("portal",b?.portal||D.getDefault());b=c.populateFromStyle();b.catch(d=>{q.getLogger("esri.renderers.UniqueValueRenderer").error(`#fromPortalStyle('${a}'[, ...])`,"Failed to create unique value renderer from style name",d)});return b}static fromStyleUrl(a,b){b=new A(b?.properties);b._set("styleOrigin",Object.freeze({styleUrl:a}));b=b.populateFromStyle();b.catch(c=>{q.getLogger("esri.renderers.UniqueValueRenderer").error(`#fromStyleUrl('${a}'[, ...])`,"Failed to create unique value renderer from style URL",
c)});return b}};g.__decorate([l.property({readOnly:!0})],e.prototype,"_cache",null);g.__decorate([P.enumeration({uniqueValue:"unique-value"})],e.prototype,"type",void 0);g.__decorate([l.property(I.rendererBackgroundFillSymbolProperty)],e.prototype,"backgroundFillSymbol",void 0);g.__decorate([l.property({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],e.prototype,"field",null);g.__decorate([O.cast("field")],e.prototype,"castField",null);g.__decorate([G.writer("field")],
e.prototype,"writeField",null);g.__decorate([l.property({type:String,value:null,json:{write:!0}})],e.prototype,"field2",null);g.__decorate([l.property({type:String,value:null,json:{write:!0}})],e.prototype,"field3",null);g.__decorate([l.property({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],e.prototype,"orderByClassesEnabled",void 0);g.__decorate([l.property({type:String,value:null,json:{write:!0}})],e.prototype,"valueExpression",null);g.__decorate([l.property({type:String,
json:{write:!0}})],e.prototype,"valueExpressionTitle",void 0);g.__decorate([l.property({type:T.LegendOptions,json:{write:!0}})],e.prototype,"legendOptions",void 0);g.__decorate([l.property({type:String,json:{write:!0}})],e.prototype,"defaultLabel",void 0);g.__decorate([l.property(N.deepMerge({...I.rendererSymbolProperty},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],
e.prototype,"defaultSymbol",null);g.__decorate([l.property({type:String,value:null,json:{write:!0}})],e.prototype,"fieldDelimiter",null);g.__decorate([l.property({type:D,readOnly:!0})],e.prototype,"portal",void 0);g.__decorate([F.reader("portal",["styleName"])],e.prototype,"readPortal",null);g.__decorate([l.property({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],e.prototype,"styleOrigin",void 0);g.__decorate([F.reader("styleOrigin",["styleName","styleUrl"])],e.prototype,
"readStyleOrigin",null);g.__decorate([G.writer("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],e.prototype,"writeStyleOrigin",null);g.__decorate([l.property({type:[E],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(a,b,c)=>(b.uniqueValueGroups||Y(b)).map(d=>E.fromJSON(d,c))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],e.prototype,"uniqueValueGroups",null);g.__decorate([l.property({type:[t],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?
{enabled:!1}:{enabled:!0}}}}})],e.prototype,"uniqueValueInfos",null);return e=A=g.__decorate([Q.subclass("esri.renderers.UniqueValueRenderer")],e)});