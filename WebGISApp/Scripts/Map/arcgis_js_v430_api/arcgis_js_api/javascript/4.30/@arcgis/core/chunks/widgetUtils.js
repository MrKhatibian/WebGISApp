/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{A as t}from"../core/Accessor.js";import{h as e,m as i}from"./handleUtils.js";import"../core/lang.js";import"./Logger.js";import{watch as r,syncAndInitial as o}from"../core/reactiveUtils.js";var n=function(){return n=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},a={exports:{}},s={},l={exports:{}},c={};var u=/javascript\s*\:/gim;c.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},c.getDefaultWhiteList=function(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}},c.onAttr=function(t,e,i){},c.onIgnoreAttr=function(t,e,i){},c.safeAttrValue=function(t,e){return u.test(e)?"":e};var d=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},g=c,p=function(t,e){var i;";"!==(i=t,t=String.prototype.trimRight?i.trimRight():i.replace(/(\s*$)/g,""))[t.length-1]&&(t+=";");var r=t.length,o=!1,n=0,a=0,s="";function l(){if(!o){var i=d(t.slice(n,a)),r=i.indexOf(":");if(-1!==r){var l=d(i.slice(0,r)),c=d(i.slice(r+1));if(l){var u=e(n,s.length,l,c,i);u&&(s+=u+"; ")}}}n=a+1}for(;a<r;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;n=(a=u+1)+1,o=!1}else"("===c?o=!0:")"===c?o=!1:";"===c?o||l():"\n"===c&&l()}return d(s)};function f(t){return null==t}function h(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).whiteList=t.whiteList||g.whiteList,t.onAttr=t.onAttr||g.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||g.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||g.safeAttrValue,this.options=t}h.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,r=e.onAttr,o=e.onIgnoreAttr,n=e.safeAttrValue;return p(t,(function(t,e,a,s,l){var c=i[a],u=!1;if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=n(a,s)){var d,g={position:e,sourcePosition:t,source:l,isWhite:u};return u?f(d=r(a,s,g))?a+":"+s:d:f(d=o(a,s,g))?void 0:d}}))};var m=h;!function(t,e){var i=c,r=m;for(var o in(e=t.exports=function(t,e){return new r(e).process(t)}).FilterCSS=r,i)e[o]=i[o]}(l,l.exports);var b=l.exports,v={indexOf:function(t,e){var i,r;if(Array.prototype.indexOf)return t.indexOf(e);for(i=0,r=t.length;i<r;i++)if(t[i]===e)return i;return-1},forEach:function(t,e,i){var r,o;if(Array.prototype.forEach)return t.forEach(e,i);for(r=0,o=t.length;r<o;r++)e.call(i,t[r],r,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}},y=b.FilterCSS,w=b.getDefaultWhiteList,x=v,k=new y;function A(t){return t.replace(L,"&lt;").replace(j,"&gt;")}var L=/</g,j=/>/g,O=/"/g,T=/&quot;/g,S=/&#([a-zA-Z0-9]*);?/gim,I=/&colon;?/gim,z=/&newline;?/gim,C=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,E=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,V=/u\s*r\s*l\s*\(.*/gi;function F(t){return t.replace(O,"&quot;")}function W(t){return t.replace(T,'"')}function q(t){return t.replace(S,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function P(t){return t.replace(I,":").replace(z," ")}function _(t){for(var e="",i=0,r=t.length;i<r;i++)e+=t.charCodeAt(i)<32?" ":t.charAt(i);return x.trim(e)}function B(t){return _(t=P(t=q(t=W(t))))}function H(t){return A(t=F(t))}s.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},s.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}},s.onTag=function(t,e,i){},s.onIgnoreTag=function(t,e,i){},s.onTagAttr=function(t,e,i){},s.onIgnoreTagAttr=function(t,e,i){},s.safeAttrValue=function(t,e,i,r){if(i=B(i),"href"===e||"src"===e){if("#"===(i=x.trim(i)))return"#";if("http://"!==i.substr(0,7)&&"https://"!==i.substr(0,8)&&"mailto:"!==i.substr(0,7)&&"tel:"!==i.substr(0,4)&&"data:image/"!==i.substr(0,11)&&"ftp://"!==i.substr(0,6)&&"./"!==i.substr(0,2)&&"../"!==i.substr(0,3)&&"#"!==i[0]&&"/"!==i[0])return""}else if("background"===e){if(C.lastIndex=0,C.test(i))return""}else if("style"===e){if(E.lastIndex=0,E.test(i))return"";if(V.lastIndex=0,V.test(i)&&(C.lastIndex=0,C.test(i)))return"";!1!==r&&(i=(r=r||k).process(i))}return H(i)},s.escapeHtml=A,s.escapeQuote=F,s.unescapeQuote=W,s.escapeHtmlEntities=q,s.escapeDangerHtml5Entities=P,s.clearNonPrintableCharacter=_,s.friendlyAttrValue=B,s.escapeAttrValue=H,s.onIgnoreTagStripAll=function(){return""},s.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var i=!Array.isArray(t),r=[],o=!1;return{onIgnoreTag:function(n,a,s){if(function(e){return!!i||-1!==x.indexOf(t,e)}(n)){if(s.isClosing){var l=s.position+10;return r.push([!1!==o?o:s.position,l]),o=!1,"[/removed]"}return o||(o=s.position),"[removed]"}return e(n,a,s)},remove:function(t){var e="",i=0;return x.forEach(r,(function(r){e+=t.slice(i,r[0]),i=r[1]})),e+=t.slice(i)}}},s.stripCommentTag=function(t){for(var e="",i=0;i<t.length;){var r=t.indexOf("\x3c!--",i);if(-1===r){e+=t.slice(i);break}e+=t.slice(i,r);var o=t.indexOf("--\x3e",r);if(-1===o)break;i=o+3}return e},s.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)}))).join("")},s.cssFilter=k,s.getDefaultCSSWhiteList=w;var D={},M=v;function R(t){var e,i=M.spaceIndex(t);return e=-1===i?t.slice(1,-1):t.slice(1,i+1),"/"===(e=M.trim(e).toLowerCase()).slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),e}function $(t){return"</"===t.slice(0,2)}var U=/[^a-zA-Z0-9\\_:.-]/gim;function N(t,e){for(;e<t.length;e++){var i=t[e];if(" "!==i)return"="===i?e:-1}}function X(t,e){for(;e<t.length;e++){var i=t[e];if(" "!==i)return"'"===i||'"'===i?e:-1}}function Z(t,e){for(;e>0;e--){var i=t[e];if(" "!==i)return"="===i?e:-1}}function G(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}D.parseTag=function(t,e,i){var r="",o=0,n=!1,a=!1,s=0,l=t.length,c="",u="";t:for(s=0;s<l;s++){var d=t.charAt(s);if(!1===n){if("<"===d){n=s;continue}}else if(!1===a){if("<"===d){r+=i(t.slice(o,s)),n=s,o=s;continue}if(">"===d){r+=i(t.slice(o,n)),c=R(u=t.slice(n,s+1)),r+=e(n,r.length,c,u,$(u)),o=s+1,n=!1;continue}if('"'===d||"'"===d)for(var g=1,p=t.charAt(s-g);""===p.trim()||"="===p;){if("="===p){a=d;continue t}p=t.charAt(s-++g)}}else if(d===a){a=!1;continue}}return o<t.length&&(r+=i(t.substr(o))),r},D.parseAttr=function(t,e){var i=0,r=0,o=[],n=!1,a=t.length;function s(t,i){if(!((t=(t=M.trim(t)).replace(U,"").toLowerCase()).length<1)){var r=e(t,i||"");r&&o.push(r)}}for(var l=0;l<a;l++){var c,u=t.charAt(l);if(!1!==n||"="!==u)if(!1===n||l!==r){if(/\s|\n|\t/.test(u)){if(t=t.replace(/\s|\n|\t/g," "),!1===n){if(-1===(c=N(t,l))){s(M.trim(t.slice(i,l))),n=!1,i=l+1;continue}l=c-1;continue}if(-1===(c=Z(t,l-1))){s(n,G(M.trim(t.slice(i,l)))),n=!1,i=l+1;continue}}}else{if(-1===(c=t.indexOf(u,l+1)))break;s(n,M.trim(t.slice(r+1,c))),n=!1,i=(l=c)+1}else n=t.slice(i,l),i=l+1,r='"'===t.charAt(i)||"'"===t.charAt(i)?i:X(t,l+1)}return i<t.length&&(!1===n?s(t.slice(i)):s(n,G(M.trim(t.slice(i))))),M.trim(o.join(" "))};var Q=b.FilterCSS,Y=s,J=D,K=J.parseTag,tt=J.parseAttr,et=v;function it(t){return null==t}function rt(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=Y.onIgnoreTagStripAll),t.whiteList||t.allowList?t.whiteList=function(t){var e={};for(var i in t)Array.isArray(t[i])?e[i.toLowerCase()]=t[i].map((function(t){return t.toLowerCase()})):e[i.toLowerCase()]=t[i];return e}(t.whiteList||t.allowList):t.whiteList=Y.whiteList,t.onTag=t.onTag||Y.onTag,t.onTagAttr=t.onTagAttr||Y.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||Y.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||Y.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||Y.safeAttrValue,t.escapeHtml=t.escapeHtml||Y.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new Q(t.css))}rt.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,r=e.onTag,o=e.onIgnoreTag,n=e.onTagAttr,a=e.onIgnoreTagAttr,s=e.safeAttrValue,l=e.escapeHtml,c=this.cssFilter;e.stripBlankChar&&(t=Y.stripBlankChar(t)),e.allowCommentTag||(t=Y.stripCommentTag(t));var u=!1;e.stripIgnoreTagBody&&(u=Y.StripTagBody(e.stripIgnoreTagBody,o),o=u.onIgnoreTag);var d=K(t,(function(t,e,u,d,g){var p={sourcePosition:t,position:e,isClosing:g,isWhite:Object.prototype.hasOwnProperty.call(i,u)},f=r(u,d,p);if(!it(f))return f;if(p.isWhite){if(p.isClosing)return"</"+u+">";var h=function(t){var e=et.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var i="/"===(t=et.trim(t.slice(e+1,-1)))[t.length-1];return i&&(t=et.trim(t.slice(0,-1))),{html:t,closing:i}}(d),m=i[u],b=tt(h.html,(function(t,e){var i=-1!==et.indexOf(m,t),r=n(u,t,e,i);return it(r)?i?(e=s(u,t,e,c))?t+'="'+e+'"':t:it(r=a(u,t,e,i))?void 0:r:r}));return d="<"+u,b&&(d+=" "+b),h.closing&&(d+=" /"),d+">"}return it(f=o(u,d,p))?l(d):f}),l);return u&&(d=u.remove(d)),d};var ot=rt;!function(t,e){var i=s,r=D,o=ot;function n(t,e){return new o(e).process(t)}(e=t.exports=n).filterXSS=n,e.FilterXSS=o,function(){for(var t in i)e[t]=i[t];for(var o in r)e[o]=r[o]}(),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)}(a,a.exports);var nt=a.exports,at=function(){function t(t,e){var i,r=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],article:["style"],aside:["style"],audio:["autoplay","controls","loop","muted","preload"],b:[],blockquote:["style"],br:[],code:["style"],dd:["style"],details:["style"],div:["align","style","aria-label","aria-hidden"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],footer:["style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],header:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],main:["style"],mark:["style"],nav:["style"],ol:[],p:["style"],pre:["style"],section:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],summary:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],time:["style"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]},this.arcgisCSSWhiteList=n(n({},nt.getDefaultCSSWhiteList()),{flex:!0,"flex-basis":!0,"flex-direction":!0,"flex-flow":!0,"flex-grow":!0,"flex-shrink":!0,"flex-wrap":!0,"line-height":!0,"justify-content":!0,overflow:!0}),this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(t,e,i,o){return"a"===t&&"href"===e||("img"===t||"source"===t)&&"src"===e?r.sanitizeUrl(i):nt.safeAttrValue(t,e,i,o)}},this._entityMap={"&":"&#x38;","<":"&#x3C;",">":"&#x3E;",'"':"&#x22;","'":"&#x27;","/":"&#x2F;"},t&&!e?i=t:t&&e?((i=Object.create(this.arcgisFilterOptions)).css={whiteList:this.arcgisCSSWhiteList},Object.keys(t).forEach((function(e){if("whiteList"===e)i.whiteList=r._extendObjectOfArrays([r.arcgisWhiteList,t.whiteList||{}]);else if("css"===e){var o=t.css.whiteList;null!=o&&t.css instanceof Object&&Object.keys(o).forEach((function(t){return i.css.whiteList[t]=o[t]}))}else i[e]=t[e]}))):((i=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,i.css={whiteList:this.arcgisCSSWhiteList}),this.xssFilterOptions=i,this._xssFilter=new nt.FilterXSS(i)}return t.prototype.sanitize=function(t,e){switch(void 0===e&&(e={}),typeof t){case"number":return isNaN(t)||!isFinite(t)?null:t;case"boolean":return t;case"string":return this._xssFilter.process(t);case"object":return this._iterateOverObject(t,e);default:if(e.allowUndefined&&void 0===t)return;return null}},t.prototype.sanitizeUrl=function(t,e){var i=(null!=e?e:{}).isProtocolRequired,r=void 0===i||i,o=this._trim(t.substring(0,t.indexOf(":"))),n="/"===t,a=/^#/.test(t),s=o&&this.allowedProtocols.indexOf(o.toLowerCase())>-1;return n||a||s?nt.escapeAttrValue(t):o||r?"":nt.escapeAttrValue("https://".concat(t))},t.prototype.sanitizeHTMLAttribute=function(t,e,i,r){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(t,e,i,r):nt.safeAttrValue(t,e,i,r)},t.prototype.validate=function(t,e){void 0===e&&(e={});var i=this.sanitize(t,e);return{isValid:t===i,sanitized:i}},t.prototype.encodeHTML=function(t){var e=this;return String(t).replace(/[&<>"'\/]/g,(function(t){return e._entityMap[t]}))},t.prototype.encodeAttrValue=function(t){var e=/^[a-zA-Z0-9]$/;return String(t).replace(/[\x00-\xFF]/g,(function(i,r){return e.test(i)?i:"&#x".concat(Number(t.charCodeAt(r)).toString(16),";")}))},t.prototype._extendObjectOfArrays=function(t){var e={};return t.forEach((function(t){Object.keys(t).forEach((function(i){Array.isArray(t[i])&&Array.isArray(e[i])?e[i]=e[i].concat(t[i]):e[i]=t[i]}))})),e},t.prototype._iterateOverObject=function(t,e){var i=this;void 0===e&&(e={});try{var r=!1,o=void 0;if(Array.isArray(t))o=t.reduce((function(t,o){var n=i.validate(o,e);return n.isValid?t.concat([o]):(r=!0,t.concat([n.sanitized]))}),[]);else{if(!function(t){if("object"!=typeof t||null===t)return!1;if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t)){if(e.allowUndefined&&void 0===t)return;return null}o=Object.keys(t).reduce((function(o,n){var a=t[n],s=i.validate(a,e);return s.isValid?o[n]=a:(r=!0,o[n]=s.sanitized),o}),{})}return r?o:t}catch(t){return null}},t.prototype._trim=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},t}();const st=new Map;function lt(){st.clear()}function ct(t){return st.get(t)}function ut(t,e){st.set(t,e)}function dt(t){st.delete(t)}var gt,pt,ft=function(t){gt||function(t){if("WebkitTransition"in t.style)gt="webkitTransitionEnd",pt="webkitAnimationEnd";else{if(!("transition"in t.style))throw new Error("Your browser is not supported!");gt="transitionend",pt="animationend"}}(t)},ht=function(t,e){return void 0===e&&(e=t+"-active"),function(i){ft(i);var r=!1,o=function(n){r||(r=!0,i.removeEventListener(gt,o),i.removeEventListener(pt,o),i.classList.remove(t),i.classList.remove(e))};i.classList.add(t),i.addEventListener(gt,o),i.addEventListener(pt,o),requestAnimationFrame((function(){i.classList.add(e)}))}},mt=function(t,e){return void 0===e&&(e=t+"-active"),function(i,r){ft(i);var o=!1,n=function(t){o||(o=!0,i.removeEventListener(gt,n),i.removeEventListener(pt,n),r())};i.classList.add(t),i.addEventListener(gt,n),i.addEventListener(pt,n),requestAnimationFrame((function(){i.classList.add(e)}))}};function bt(...e){const i=t.acquire();for(let t=0;t<e.length;t++){const r=e[t],o=typeof r;if("string"===o)i.push(r);else if(Array.isArray(r))i.push.apply(i,r);else if("object"===o)for(const t in r)r[t]&&i.push(t)}const r=i.join(" ");return t.release(i),r}const vt=(()=>{const t=new Map,n=new ResizeObserver((e=>{lt();for(const i of e)t.get(i.target)?.(i)}));return(a,s,l)=>{let c=null;return e([r((()=>"function"==typeof a?a():a),(e=>{c?.remove(),e&&(c=((e,r,o)=>(t.set(e,r),n.observe(e,o),i((()=>{n.unobserve(e),t.delete(e)}))))(e,s,l))}),o),i((()=>c?.remove()))])}})();function yt(t){const e=t?.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function wt(t){return yt(t)?"rtl":"ltr"}function xt(t){this[t.getAttribute("data-node-ref")]=null}function kt(t){this[t.getAttribute("data-node-ref")]=t}function At(t,e){return("enter"===t?ht:mt)(e)}const Lt=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup","animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"],jt=Lt.reduce(((t,e)=>(t[e]=[],t)),{}),Ot=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],Tt=new at({whiteList:jt,onTagAttr:(t,e,i)=>{const r=`${e}="${i}"`;if(Ot.includes(e))return r},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function St(t,e){const i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),o=i.top+i.height,n=r.top+r.height,a=i.top,s=r.top;(o>n||a<s)&&t.scrollIntoView({block:"end"})}function It(t){return"Enter"===t||" "===t}function zt(t){return Object.values(t).includes(!0)}export{yt as a,At as b,bt as c,xt as d,Lt as e,Ot as f,wt as g,zt as h,It as i,ct as j,St as k,ut as l,dt as m,lt as n,vt as o,Tt as r,kt as s};