// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Collection ../../core/ReactiveMap ../../core/ReactiveSet ../../core/uid ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/support/UpdatingHandles ../../layers/support/fieldUtils ./featureFormUtils ./InputBase ./support/textManipulationUtils ../support/widgetUtils".split(" "),function(d,e,p,u,q,v,f,C,D,E,w,x,y,l,z,A,B){function r(a){var c=[...a.matchAll(/{[^{]+?}/g)];
let g=0;const k=[],h=[];for(const b of c)c=b[0],k.push(a.slice(g,b.index)),h.push(c),g=b.index+c.length;k.push(a.slice(g));return{literals:k,templates:h}}function t(a,c){return c.reduce((g,k,h)=>g.concat(a.at(h),k),"").concat(a.at(-1))}d.TextElementInput=class extends z{constructor(a){super(a);this.group=null;this.id=`TextElementInput-${v.generateUID()}`;this.type="text";this._expressionReferences=new u;this._expressionsUsed=new q;this._fieldsUsed=new q;this._literalParts=new p;this._templateParts=
new p;this._updatingHandles=new x.UpdatingHandles}initialize(){const {rawText:a}=this;a?"markdown"===this.textFormat?this._updatingHandles.addPromise(A.compileTextElementMarkdownToHTML(a).then(c=>this._initializeTextParts(c))):this._initializeTextParts(a):this._literalParts.push("")}get expressionsUsed(){return Array.from(this._expressionsUsed)}get fieldsIndex(){return this.layer.fieldsIndex}set fieldsIndex(a){this._overrideIfSome("fieldsIndex",a)}get fieldsUsed(){return Array.from(this._fieldsUsed)}get rawText(){return this.element.text}get text(){const a=
this._templateParts.map(c=>`${this._expressionReferences.get(c)?.lastEvaluatedValue??""}`);return B.renderingSanitizer.sanitize(t(this._literalParts,a))}get textFormat(){return this.element.textFormat}get updating(){return this._updatingHandles.updating||Array.from(this._expressionReferences.values()).some(a=>a?.updating)}setExpressionExecutor(a,c){this._expressionReferences.set(l.prependExpressionPrefix(a),c)}setFieldExecutor(a,c){this._expressionReferences.set(l.prependFieldPrefix(a),c)}_initializeTextParts(a){const {fieldsIndex:c}=
this,{literals:g,templates:k}=r(a);a=[];const h=[];for(let m=0;m<k.length;m++){const n=g[m];var b=y.extractSubstitutionTemplatesFromString(k[m])[0];l.isExpressionReference(b)?(this._expressionsUsed.add(l.extractExpressionNameFromString(b)),this._expressionReferences.set(b,null),a.push(n),h.push(b)):l.isLegacyFieldMapsExpressionReference(b)?(this._expressionsUsed.add(b),b=l.prependExpressionPrefix(b),this._expressionReferences.set(b,null),a.push(n),h.push(b)):c?.has(b)?(b=c.normalizeFieldName(b),this._fieldsUsed.add(b),
b=l.prependFieldPrefix(b),this._expressionReferences.set(b,null),a.push(n),h.push(b)):g[m+1]=n.concat(b,g[m+1])}a.push(g.at(-1));this._literalParts.addMany(a);this._templateParts.addMany(h)}};e.__decorate([f.property()],d.TextElementInput.prototype,"expressionsUsed",null);e.__decorate([f.property()],d.TextElementInput.prototype,"fieldsIndex",null);e.__decorate([f.property()],d.TextElementInput.prototype,"fieldsUsed",null);e.__decorate([f.property()],d.TextElementInput.prototype,"group",void 0);e.__decorate([f.property()],
d.TextElementInput.prototype,"id",void 0);e.__decorate([f.property()],d.TextElementInput.prototype,"rawText",null);e.__decorate([f.property()],d.TextElementInput.prototype,"text",null);e.__decorate([f.property()],d.TextElementInput.prototype,"textFormat",null);e.__decorate([f.property()],d.TextElementInput.prototype,"type",void 0);e.__decorate([f.property()],d.TextElementInput.prototype,"updating",null);d.TextElementInput=e.__decorate([w.subclass("esri.widgets.FeatureForm.TextElementInput")],d.TextElementInput);
d.assembleStringFromParts=t;d.splitStringIntoParts=r;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});