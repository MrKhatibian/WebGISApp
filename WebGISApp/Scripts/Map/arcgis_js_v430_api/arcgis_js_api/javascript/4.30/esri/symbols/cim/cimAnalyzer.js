// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/colorUtils ../../core/fontUtils ../../core/lang ../../core/Logger ../../core/screenUtils ../../core/string ./CIMSymbolHelper ./defaultCIMValues ./enums ./OverrideHelper ./SDFHelper ./utils ./effects/CIMEffectHelper ../../views/2d/engine/webgl/definitions".split(" "),function(L,U,V,M,W,Q,X,Y,B,H,F,I,h,R,Z){function N(a){return a&&0===a.indexOf("Level_")&&(a=parseInt(a.substr(6),10),!isNaN(a))?a:0}function aa(a){var e=a.symbolLayers;if(!e||2!==e.length)return!1;a=e.find(c=>
c.effects?.find(b=>"CIMGeometricEffectDashes"===b.type&&null!=b.dashTemplate));e=e.find(c=>c.effects?.find(b=>"CIMGeometricEffectAddControlPoints"===b.type));return!!a||!!e}function S(a){return M.clone(a).map(e=>({...e,propertyName:h.uncapitalize(e.propertyName)}))}class ba{constructor(a){this._cimLayers=[];this._poMap={};this._primitiveOverrides=[];a&&(this._resourceManager=a)}analyzeSymbolReference(a,e,c){this._cimLayers=c??[];if(!a)return this._cimLayers;this._reset();if(a.primitiveOverrides){this._primitiveOverrides=
a.primitiveOverrides;for(const b of this._primitiveOverrides)(c=b.valueExpressionInfo)?this._setPoMap(b.primitiveName,b.propertyName,c):null!=b.value&&(c=b.value,b.propertyName.includes("Color")&&(U.isRGB(c)&&(c=h.colorToArray(c)),c=h.normalizeAlpha(c)),this._setPoMap(b.primitiveName,b.propertyName,c))}this._analyzeSymbol(a.symbol,e);return this._cimLayers}_reset(){this._cimLayers=[];this._poMap={};this._primitiveOverrides=[]}_analyzeSymbol(a,e){switch(a?.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":this._analyzeMultiLayerSymbol(a,
e)}}_analyzeMultiLayerSymbol(a,e){const c=a?.symbolLayers;if(c){var b=a.effects,f=H.Alignment.SCREEN,g=h.getSize(a)??0;"CIMPointSymbol"===a.type&&"Map"===a.angleAlignment&&(f=H.Alignment.MAP);for(var l="CIMPolygonSymbol"===a.type,k=c.length;k--;){const n=c[k];if(!n||!1===n.enable)continue;let m;b?.length&&(m=[...b]);var d=n.effects;d?.length&&(b?m.push(...d):m=[...d]);d=null;if(m){d=[];for(const v of m){var p=F.OverrideHelper.findEffectOverrides(v,this._primitiveOverrides);p&&d.push(p)}}F.OverrideHelper.findApplicableOverrides(n,
this._primitiveOverrides,[]);switch(n.type){case "CIMSolidFill":this._analyzeSolidFill(n,d);break;case "CIMPictureFill":this._analyzePictureFill(n,d);break;case "CIMHatchFill":this._analyzeHatchFill(n,d);break;case "CIMGradientFill":this._analyzeGradientFill(n,d);break;case "CIMSolidStroke":this._analyzeSolidStroke(n,d,l,g);break;case "CIMPictureStroke":this._analyzePictureStroke(n,d,l,g);break;case "CIMGradientStroke":this._analyzeGradientStroke(n,d,l,g);break;case "CIMCharacterMarker":case "CIMPictureMarker":case "CIMVectorMarker":if("CIMLineSymbol"===
a.type||"CIMPolygonSymbol"===a.type)f=(f=n.markerPlacement)&&f.angleToLine?H.Alignment.MAP:H.Alignment.SCREEN;p=[];var q=n.primitiveName;q&&p.push(q);q=l&&h.isCIMMarkerStrokePlacement(n.markerPlacement);this._analyzeMarker(n,d,null,p,f,g,e,[],!1,q);break;default:W.getLogger("esri.symbols.cim.cimAnalyzer").error("Cannot analyze CIM layer",n.type)}}}}_analyzeSolidFill(a,e){const {primitiveName:c,type:b}=a,f=h.normalizeAlpha(a.color);this._cimLayers.push({type:"fill",spriteRasterizationParam:null,colorLocked:!!a.colorLocked,
color:this._getValueOrOverrideExpression(b,c,"Color",f),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e,applyRandomOffset:!1,sampleAlphaOnly:!0,hasUnresolvedReplacementColor:!1})}_analyzePictureFill(a,e){const {primitiveName:c,type:b}=a,f=h.getTintColor(a),g=h.getNumericValue(a.height,B.defaultCIMValues.CIMPictureFill.height);let l=h.getNumericValue(a.scaleX,1);if("width"in a&&"number"===typeof a.width){var k=a.width;let d=1;const p=this._resourceManager.getResource(a.url);null!=p&&(d=p.width/
p.height);l/=g/k*d}k={type:"sprite-rasterization-param",resource:a,overrides:this._getPrimitiveMaterialOverrides(c,b)};this._cimLayers.push({type:"fill",spriteRasterizationParam:k,colorLocked:!!a.colorLocked,effects:e,color:this._getValueOrOverrideExpression(b,c,"TintColor",f),height:this._getValueOrOverrideExpression(b,c,"Height",g),scaleX:this._getValueOrOverrideExpression(b,c,"ScaleX",l),angle:this._getValueOrOverrideExpression(b,c,"Rotation",h.getNumericValue(a.rotation)),offsetX:this._getValueOrOverrideExpression(b,
c,"OffsetX",h.getNumericValue(a.offsetX)),offsetY:this._getValueOrOverrideExpression(b,c,"OffsetY",h.getNumericValue(a.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!1,hasUnresolvedReplacementColor:!1})}_analyzeHatchFill(a,e){const {primitiveName:c,type:b}=a;var f=this._analyzeMaterialOverrides(c,["Rotation","OffsetX","OffsetY"]);f=h.normalizePrimitiveOverrideProps(f);let g=[255,255,255,1],l=!1;if(a.lineSymbol?.symbolLayers)for(const d of a.lineSymbol.symbolLayers){if("CIMSolidStroke"!==d.type)continue;
const p=d.primitiveName??c;l||!p||d.colorLocked||null==this._poMap[p]?.Color&&null==this._poMap[p]?.StrokeColor||(g=h.normalizeAlpha(d.color),g=this._maybeGetValueOrOverrideExpression(p,"StrokeColor")??this._getValueOrOverrideExpression(b,p,"Color",g),l=!0);var k=this._maybeGetValueOrOverrideExpression(p,"StrokeWidth");if(k){let q=null,n=null;"number"===typeof k?q=k:n=k.valueExpressionInfo;(k=f.find(m=>"strokeWidth"===m.propertyName))?k.propertyName="width":(k={type:"CIMPrimitiveOverride",primitiveName:p,
propertyName:"width",valueExpressionInfo:n,value:q,defaultValue:h.getDefaultCIMValue(b,"width")},f.push(k))}}this._cimLayers.push({type:"fill",spriteRasterizationParam:{type:"sprite-rasterization-param",resource:a,overrides:f},colorLocked:!!a.colorLocked,effects:e,color:g,height:this._getValueOrOverrideExpression(b,c,"Separation",h.getNumericValue(a.separation,B.defaultCIMValues.CIMHatchFill.separation)),scaleX:1,angle:this._getValueOrOverrideExpression(b,c,"Rotation",h.getNumericValue(a.rotation)),
offsetX:this._getValueOrOverrideExpression(b,c,"OffsetX",h.getNumericValue(a.offsetX)),offsetY:this._getValueOrOverrideExpression(b,c,"OffsetY",h.getNumericValue(a.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0,hasUnresolvedReplacementColor:!l})}_analyzeGradientFill(a,e){this._cimLayers.push({type:"fill",spriteRasterizationParam:null,colorLocked:!!a.colorLocked,effects:e,color:[128,128,128,1],height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1,hasUnresolvedReplacementColor:!1})}_analyzeSolidStroke(a,
e,c,b){const {primitiveName:f,type:g}=a,l=h.normalizeAlpha(a.color),k=h.getNumericValue(a.width,B.defaultCIMValues.CIMSolidStroke.width),d=h.getEnum(a.capStyle,B.defaultCIMValues.CIMSolidStroke.capstyle),p=h.getEnum(a.joinStyle,B.defaultCIMValues.CIMSolidStroke.joinstyle),q=a.miterLimit;let n=[];this._analyzePrimitiveOverrides(f,e,null,null)&&(n=this._getPrimitiveMaterialOverrides(f,g));let m,v;if(e&&Array.isArray(e)&&0<e.length){const t=e[e.length-1].effect;t&&"CIMGeometricEffectDashes"===t.type&&
"NoConstraint"===t.lineDashEnding&&null===t.offsetAlongLine&&(m=t.dashTemplate,v=t.scaleDash,e=[...e],e.pop())}this._cimLayers.push({type:"line",spriteRasterizationParam:void 0!==m?{type:"sprite-rasterization-param",resource:{type:"dash",dashTemplate:m,capStyle:d},overrides:n}:null,isOutline:c,colorLocked:!!a.colorLocked,effects:e,color:this._getValueOrOverrideExpression(g,f,"Color",l),width:this._getValueOrOverrideExpression(g,f,"Width",k),cap:this._getValueOrOverrideExpression(g,f,"CapStyle",d),
join:this._getValueOrOverrideExpression(g,f,"JoinStyle",p),miterLimit:q&&this._getValueOrOverrideExpression(g,f,"MiterLimit",q),referenceWidth:b,zOrder:N(a.name),dashTemplate:m,scaleDash:v,sampleAlphaOnly:!0})}_analyzePictureStroke(a,e,c,b){const {primitiveName:f,type:g}=a,l=h.getTintColor(a),k=h.getNumericValue(a.width,B.defaultCIMValues.CIMPictureStroke.width),d=h.getEnum(a.capStyle,B.defaultCIMValues.CIMPictureStroke.capstyle),p=h.getEnum(a.joinStyle,B.defaultCIMValues.CIMPictureStroke.joinstyle),
q=a.miterLimit,n={type:"sprite-rasterization-param",resource:a,overrides:this._getPrimitiveMaterialOverrides(f,g)};this._cimLayers.push({type:"line",spriteRasterizationParam:n,isOutline:c,colorLocked:!!a.colorLocked,effects:e,color:this._getValueOrOverrideExpression(g,f,"TintColor",l),width:this._getValueOrOverrideExpression(g,f,"Width",k),cap:this._getValueOrOverrideExpression(g,f,"CapStyle",d),join:this._getValueOrOverrideExpression(g,f,"JoinStyle",p),miterLimit:q&&this._getValueOrOverrideExpression(g,
f,"MiterLimit",q),referenceWidth:b,zOrder:N(a.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}_analyzeGradientStroke(a,e,c,b){const {primitiveName:f,type:g}=a,l=h.getNumericValue(a.width,B.defaultCIMValues.CIMSolidStroke.width),k=h.getEnum(a.capStyle,B.defaultCIMValues.CIMGradientStroke.capstyle),d=h.getEnum(a.joinStyle,B.defaultCIMValues.CIMGradientStroke.joinstyle),p=a.miterLimit;this._cimLayers.push({type:"line",spriteRasterizationParam:null,isOutline:c,colorLocked:!!a.colorLocked,effects:e,
color:[128,128,128,1],width:this._getValueOrOverrideExpression(g,f,"Width",l),cap:this._getValueOrOverrideExpression(g,f,"CapStyle",k),join:this._getValueOrOverrideExpression(g,f,"JoinStyle",d),miterLimit:p&&this._getValueOrOverrideExpression(g,f,"MiterLimit",p),referenceWidth:b,zOrder:N(a.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}_analyzeMarker(a,e,c,b,f,g,l,k,d=!1,p=!1){d||=!!a.colorLocked;if(!this._analyzeMarkerInsidePolygon(a,e,d)){var q=h.getNumericValue(a.size,B.defaultCIMValues.CIMVectorMarker.size),
n=h.getNumericValue(a.rotation),m=h.getNumericValue(a.offsetX),v=h.getNumericValue(a.offsetY),{primitiveName:t,type:u}=a;q=this._getValueOrOverrideExpression(u,t,"Size",q);n=this._getValueOrOverrideExpression(u,t,"Rotation",n);m=this._getValueOrOverrideExpression(u,t,"OffsetX",m);v=this._getValueOrOverrideExpression(u,t,"OffsetY",v);switch(a.type){case "CIMPictureMarker":this._analyzePictureMarker(a,e,c,b,f,g,q,n,m,v,k,d,p);break;case "CIMVectorMarker":this._analyzeVectorMarker(a,e,c,b,f,g,q,n,m,
v,k,l,d,p)}}}_analyzeMarkerInsidePolygon(a,e,c){const {markerPlacement:b,type:f}=a;if(!b||"CIMMarkerPlacementInsidePolygon"!==b.type)return!1;if("CIMVectorMarker"===f||"CIMPictureMarker"===f){var g=a.primitiveName;if(g&&this._analyzePrimitiveOverrides([g],e,null,null)||(g=b.primitiveName)&&this._analyzePrimitiveOverrides([g],e,null,null))return!1;if("CIMVectorMarker"===f){if({markerGraphics:g}=a,g)for(var l of g)if({symbol:g}=l,"CIMPolygonSymbol"===g?.type&&g.symbolLayers){({symbolLayers:g}=g);for(var k of g)if("CIMSolidStroke"===
k.type)return!1}}else if({animatedSymbolProperties:l}=a,l)return!1}k=Math.abs(b.stepX);g=Math.abs(b.stepY);if(0===k||0===g)return!0;if("Random"===b.gridType){l=Q.px2pt(Z.randomInsidePolygonTextureSize);const d=Math.max(Math.floor(l/k),1);l=g*Math.max(Math.floor(l/g),1);k=d*k/l}else b.shiftOddRows?(l=2*g,k=k/g*.5):(l=g,k/=g);g=h.getTintColor(a);this._cimLayers.push({type:"fill",spriteRasterizationParam:"CIMCharacterMarker"===a.type?null:{type:"sprite-rasterization-param",resource:a,overrides:[]},colorLocked:c,
effects:e,color:g,height:l,scaleX:k,angle:b.gridAngle,offsetX:h.getNumericValue(b.offsetX),offsetY:h.getNumericValue(b.offsetY),applyRandomOffset:"Random"===b.gridType,sampleAlphaOnly:"CIMPictureMarker"!==a.type,hasUnresolvedReplacementColor:!0});return!0}_analyzePictureMarker(a,e,c,b,f,g,l,k,d,p,q,n,m){const {animatedSymbolProperties:v,primitiveName:t,type:u}=a;let x=h.getNumericValue(a.scaleX,1);const y=h.getTintColor(a);c||=this._createMarkerPlacementOverrideExpression(a.markerPlacement);const z=
this._createGIFAnimatedSymbolPropertiesOverrideExpression(v),A=a.anchorPoint??{x:0,y:0};if("width"in a&&"number"===typeof a.width){var r=a.width;let E=1;var w=this._resourceManager.getResource(a.url);null!=w&&(E=w.width/w.height);w=h.getNumericValue(a.size);x/=w/r*E}b=[...b];a.primitiveName&&b.push(a.primitiveName);v||z?r={type:"animated",url:a.url,urlHash:"H"+X.numericHash(a.url),playAnimation:a.animatedSymbolProperties?.playAnimation,reverseAnimation:a.animatedSymbolProperties?.reverseAnimation,
randomizeStartTime:a.animatedSymbolProperties?.randomizeStartTime,randomizeStartSeed:a.animatedSymbolProperties?.randomizeStartSeed,startTimeOffset:a.animatedSymbolProperties?.startTimeOffset,duration:a.animatedSymbolProperties?.duration,repeatType:a.animatedSymbolProperties?.repeatType,repeatDelay:a.animatedSymbolProperties?.repeatDelay}:(r=M.clone(a),r.markerPlacement=null);b={type:"sprite-rasterization-param",resource:r,overrides:this._getMaterialOverrides(b,u)};z&&b.overrides.push(...z.overrides);
this._cimLayers.push({type:"marker",spriteRasterizationParam:b,colorLocked:n,effects:e,scaleSymbolsProportionally:!1,alignment:f,size:l,scaleX:this._getValueOrOverrideExpression(u,t,"ScaleX",x),rotation:k,offsetX:d,offsetY:p,transform:{type:"cim-marker-transform-param",params:q},color:this._getValueOrOverrideExpression(u,t,"TintColor",y),anchorPoint:{x:A.x,y:A.y},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,outlineColor:[0,0,0,0],outlineWidth:0,frameHeight:0,widthRatio:1,rotateClockwise:!!a.rotateClockwise,
referenceSize:g,sizeRatio:1,isOutline:m,markerPlacement:c})}_analyzeVectorMarker(a,e,c,b,f,g,l,k,d,p,q,n,m,v){var t=a.markerGraphics;if(t){var u=a.frame,x=0;if(x=u?u.ymax-u.ymin:g)l={offsetX:d,offsetY:p,rotation:k,size:l,frameHeight:x,rotateClockWise:!!a.rotateClockwise},q=[...q,l];c||=this._createMarkerPlacementOverrideExpression(a.markerPlacement);for(const z of t)if(z&&(t=z.symbol)){(l=z.primitiveName)&&b.push(l);var y=void 0;if(("CIMPointSymbol"===t.type||"CIMTextSymbol"===t.type)&&u){k=y=0;d=
z.geometry;"x"in d&&"y"in d&&(y+=d.x-.5*(u.xmin+u.xmax),k+=d.y-.5*(u.ymin+u.ymax));if(d=a.anchorPoint)"Absolute"===a.anchorPointUnits?(y-=d.x,k-=d.y):u&&(y-=(u.xmax-u.xmin)*d.x,k-=(u.ymax-u.ymin)*d.y);y={offsetX:y,offsetY:k,rotation:0,size:0,frameHeight:0,rotateClockWise:!1};y=[...q,y]}switch(t.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":n||aa(t)?this._analyzeMultiLayerGraphicNonSDF(a,e,c,z,b,f,g,y??q,x,m,v):this._analyzeMultiLayerGraphic(a,e,c,z,b,f,g,y??q,x,m,v);break;
case "CIMTextSymbol":this._analyzeTextGraphic(e,c,z,b,f,g,y??q,m)}l&&b.pop()}}}_analyzeMultiLayerGraphic(a,e,c,b,f,g,l,k,d,p,q){var n=b.symbol;const m=n.symbolLayers;if(m){var v=m.length;if(m&&2===m.length&&m[0].enable&&m[1].enable&&"CIMSolidStroke"===m[0].type&&"CIMSolidFill"===m[1].type&&null==m[0].path&&null==m[1].path&&!m[0].effects&&!m[1].effects)this._analyzeCompositeMarkerGraphic(a,e,c,b,m,g,l,k,d,p,q);else{var t=this._resourceManager.geometryEngine;if(n=R.CIMEffectHelper.applyEffects(n.effects,
b.geometry,t))for(;v--;){const r=m[v];if(!r||!1===r.enable)continue;const w=r.primitiveName;w&&f.push(w);switch(r.type){case "CIMSolidFill":case "CIMSolidStroke":var u=R.CIMEffectHelper.applyEffects(r.effects,n,t),x=I.getExtent(u);if(!x)continue;const E="Relative"!==a.anchorPointUnits,[O,P,J,K]=I.getSDFMetrics(x,a.frame,a.size,a.anchorPoint,E);x="CIMSolidFill"===r.type;u={type:"sdf",geom:u,asFill:x};const {path:G}=r;var y=x?h.normalizeAlpha(h.getFillColor(r)):null==G?h.normalizeAlpha(h.getStrokeColor(r)):
[0,0,0,0],z=x?[0,0,0,0]:h.normalizeAlpha(h.getStrokeColor(r)),A=h.getStrokeWidth(r)??0;if(!x&&!A)break;const C=b.primitiveName;let D=null;x&&!r.colorLocked&&(D=this._maybeGetValueOrOverrideExpression(C,"FillColor"));let T=null;x||r.colorLocked||(T=this._maybeGetValueOrOverrideExpression(C,"StrokeColor"));y=D??this._getValueOrOverrideExpression(r.type,w,"Color",y);z=T??this._getValueOrOverrideExpression(r.type,w,"Color",z);A=this._maybeGetValueOrOverrideExpression(C,"StrokeWidth")??this._getValueOrOverrideExpression(r.type,
w,"Width",A);this._cimLayers.push({type:"marker",spriteRasterizationParam:G?{type:"sprite-rasterization-param",resource:{type:"path",path:G,asFill:x},overrides:[]}:{type:"sprite-rasterization-param",resource:u,overrides:[]},colorLocked:!!r.colorLocked||!!p,effects:e,scaleSymbolsProportionally:!!a.scaleSymbolsProportionally,alignment:g,anchorPoint:{x:P,y:J},isAbsoluteAnchorPoint:E,size:d,rotation:0,offsetX:0,offsetY:0,scaleX:1,transform:{type:"cim-marker-transform-param",params:k},frameHeight:d,widthRatio:K,
rotateClockwise:!1,referenceSize:l,sizeRatio:O,color:y,outlineColor:z,outlineWidth:A,isOutline:q,markerPlacement:c});break;case "CIMPictureMarker":case "CIMVectorMarker":r.markerPlacement?this._analyzeMultiLayerGraphicNonSDF(a,e,c,b,f,g,l,k,d,!!r.colorLocked||!!p,q):this._analyzeMarker(r,e,c,f,g,l,!1,k,p,q);break;default:this._analyzeMultiLayerGraphicNonSDF(a,e,c,b,f,g,l,k,d,!!r.colorLocked||!!p,q)}w&&f.pop()}}}}_analyzeTextGraphic(a,e,c,b,f,g,l,k){F.OverrideHelper.findApplicableOverrides(c,this._primitiveOverrides,
[]);var d=c.geometry;if("x"in d&&"y"in d){d=c.symbol;var p=h.fromCIMFontDecoration(d),q=h.fromCIMFontStyle(d.fontStyleName),n=V.getFontFamily(d.fontFamilyName);d.font={family:n,decoration:p,...q};var m=h.getNumericValue(d.height,B.defaultCIMValues.CIMTextSymbol.height),v=h.getNumericValue(d.angle),t=h.getNumericValue(d.offsetX),u=h.getNumericValue(d.offsetY),x=h.normalizeAlpha(h.getFillColor(d)),y=h.normalizeAlpha(h.getStrokeColor(d)),z=h.getStrokeWidth(d)??0;z||(y=h.normalizeAlpha(h.getFillColor(d.haloSymbol)),
z=h.getNumericValue(d.haloSize));var A=!1;if(d.symbol?.symbolLayers)for(var r of d.symbol.symbolLayers)null!=h.normalizeAlpha(h.getFillColor(r))&&(A=!!r.colorLocked);var w=c.primitiveName;r=null;A||(r=this._maybeGetValueOrOverrideExpression(w,"FillColor"));var E=this._maybeGetValueOrOverrideExpression(w,"TextSize"),O=this._maybeGetValueOrOverrideExpression(w,"TextAngle"),P=this._maybeGetValueOrOverrideExpression(w,"TextOffsetX");w=this._maybeGetValueOrOverrideExpression(w,"TextOffsetY");var J=null,
K=null,G=0;if(d.callout&&"CIMBackgroundCallout"===d.callout.type){var C=d.callout;if(C.backgroundSymbol&&(C=C.backgroundSymbol.symbolLayers))for(var D of C)"CIMSolidFill"===D.type?J=h.normalizeAlpha(D.color):"CIMSolidStroke"===D.type&&(K=h.normalizeAlpha(D.color),G=h.getNumericValue(D.width,B.defaultCIMValues.CIMSolidStroke.width))}D=this._getValueOrOverrideExpression(d.type,c.primitiveName,"TextString",c.textString??"");null!=D&&({fontStyleName:C}=d,n+=C?"-"+C.toLowerCase():"-regular",b=this._getMaterialOverrides(b,
d.type),b.push(...this._getPrimitiveMaterialOverrides(c.primitiveName,d.type)),this._cimLayers.push({type:"text",lineWidth:d.lineWidth,textRasterizationParam:{type:"text-rasterization-param",resource:{type:"text",textString:c.textString??"",font:d.font,symbol:d,primitiveName:c.primitiveName},overrides:b},colorLocked:!!k||!!A,effects:a,alignment:f,anchorPoint:{x:0,y:0},isAbsoluteAnchorPoint:!1,fontName:n,decoration:p,weight:q.weight,style:q.style,size:E??m,angle:O??v,offsetX:P??t,offsetY:w??u,transform:{type:"cim-marker-transform-param",
params:l},horizontalAlignment:h.fromCIMHorizontalAlignment(d.horizontalAlignment),verticalAlignment:h.fromCIMVerticalAlignment(d.verticalAlignment),text:D,color:r??this._getValueOrOverrideExpression(d.type,c.primitiveName,"Color",x),outlineColor:y,outlineSize:z,backgroundColor:J,borderLineColor:K,borderLineWidth:G,referenceSize:g,sizeRatio:1,markerPlacement:e}))}}_analyzeMultiLayerGraphicNonSDF(a,e,c,b,f,g,l,k,d,p,q){b={type:a.type,enable:!0,name:a.name,colorLocked:a.colorLocked,primitiveName:a.primitiveName,
anchorPoint:a.anchorPoint,anchorPointUnits:a.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:a.rotateClockwise,rotation:0,size:a.size,billboardMode3D:a.billboardMode3D,depth3D:a.depth3D,frame:a.frame,markerGraphics:[b],scaleSymbolsProportionally:a.scaleSymbolsProportionally,respectFrame:a.respectFrame,clippingPath:a.clippingPath};var n=this._analyzeMaterialOverrides(a.primitiveName,["Rotation","OffsetX","OffsetY"]);n=h.normalizePrimitiveOverrideProps(n);const [m,v,t]=Y.CIMSymbolHelper.getTextureAnchor(b,
this._resourceManager);f=this._getMaterialOverrides(f,a.type);f.push(...n);this._cimLayers.push({type:"marker",spriteRasterizationParam:{type:"sprite-rasterization-param",resource:{...b,avoidSDFRasterization:!0},overrides:f},colorLocked:p,effects:e,scaleSymbolsProportionally:!!a.scaleSymbolsProportionally,alignment:g,anchorPoint:{x:m,y:v},isAbsoluteAnchorPoint:!1,size:d,rotation:0,offsetX:0,offsetY:0,transform:{type:"cim-marker-transform-param",params:k},color:[255,255,255,1],outlineColor:[0,0,0,
0],outlineWidth:0,scaleX:1,frameHeight:d,widthRatio:1,rotateClockwise:!!a.rotateClockwise,referenceSize:l,sizeRatio:t/Q.pt2px(a.size),isOutline:q,markerPlacement:c})}_createMarkerPlacementOverrideExpression(a){if(!a)return null;const e=[];F.OverrideHelper.findApplicableOverrides(a,this._primitiveOverrides,e);return{type:"cim-marker-placement-param",placement:a,overrides:S(e)}}_createGIFAnimatedSymbolPropertiesOverrideExpression(a){if(!a)return null;const e=[];F.OverrideHelper.findApplicableOverrides(a,
this._primitiveOverrides,e);return{type:"cim-gif-animation-params",animation:a,overrides:S(e)}}_analyzeCompositeMarkerGraphic(a,e,c,b,f,g,l,k,d,p,q){const n=b.geometry;var m=f[0],v=f[1],t=I.getExtent(n);if(t){f="Relative"!==a.anchorPointUnits;var [u,x,y,z]=I.getSDFMetrics(t,a.frame,a.size,a.anchorPoint,f);({path:t}=v);var A=v.primitiveName,r=m.primitiveName;b=b.primitiveName;var w=null;v.colorLocked||p||(w=this._maybeGetValueOrOverrideExpression(b,"FillColor"));v=w??this._getValueOrOverrideExpression(v.type,
A,"Color",h.normalizeAlpha(v.color));A=null;m.colorLocked||p||(A=this._maybeGetValueOrOverrideExpression(b,"StrokeColor"));A=A??this._getValueOrOverrideExpression(m.type,r,"Color",h.normalizeAlpha(m.color));m=this._maybeGetValueOrOverrideExpression(b,"StrokeWidth")??this._getValueOrOverrideExpression(m.type,r,"Width",h.getNumericValue(m.width,B.defaultCIMValues.CIMSolidStroke.width));this._cimLayers.push({type:"marker",spriteRasterizationParam:{type:"sprite-rasterization-param",resource:t?{type:"path",
path:t,asFill:!0}:{type:"sdf",geom:n,asFill:!0},overrides:[]},colorLocked:p,effects:e,scaleSymbolsProportionally:!!a.scaleSymbolsProportionally,alignment:g,anchorPoint:{x,y},isAbsoluteAnchorPoint:f,size:d,rotation:0,offsetX:0,offsetY:0,scaleX:1,transform:{type:"cim-marker-transform-param",params:k},frameHeight:d,widthRatio:z,rotateClockwise:!1,referenceSize:l,sizeRatio:u,color:v,outlineColor:A,outlineWidth:m,isOutline:q,markerPlacement:c})}}_setPoMap(a,e,c){let b;this._poMap[a]?b=this._poMap[a]:(b=
{},this._poMap[a]=b);b[e]=c}_maybeGetValueOrOverrideExpression(a,e,c){return this._getValueOrOverrideExpression("",a,e,c,!1)}_getValueOrOverrideExpression(a,e,c,b,f=!0){f&&!h.isValidCIMValue(b)&&(b=h.getDefaultCIMValue(a,c.toLowerCase()));if(null==e)return b;a=this._poMap[e];if(null==a)return b;c=a[c];return"string"===typeof c||"number"===typeof c||Array.isArray(c)?c:c?{valueExpressionInfo:c,defaultValue:b}:b}_analyzePrimitiveOverrides(a,e,c,b){if(null==a)return!1;"string"===typeof a&&(a=[a]);for(const f of this._primitiveOverrides)if(a.includes(f.primitiveName)&&
f.valueExpressionInfo)return!0;if(null!=e)for(const f of e)if(0<f?.overrides.length)return!0;if(null!=c)for(const f of c)if(0<f?.overrides.length)return!0;if(null!=b)for(const f of b)if(0<f?.overrides.length)return!0;return!1}_getMaterialOverrides(a,e){if(!a)return[];const c=[];for(const b of a)c.push(...this._getPrimitiveMaterialOverrides(b,e));return c}_getPrimitiveMaterialOverrides(a,e){if(!a)return[];const c=h.normalizePrimitiveOverrideProps(this._primitiveOverrides.filter(b=>b.primitiveName===
a));c.forEach(b=>b.defaultValue=h.getDefaultCIMValue(e,b.propertyName.toLowerCase()));return c}_analyzeMaterialOverrides(a,e){return this._primitiveOverrides.filter(c=>c.primitiveName!==a||!e.includes(c.propertyName))}}L.CIMAnalyzer=ba;L.analyzeCIMResource=function(a,e){if(!e||0===e.length)return a;a=M.clone(a);F.OverrideHelper.applyOverrides(a,e);return a};Object.defineProperty(L,Symbol.toStringTag,{value:"Module"})});