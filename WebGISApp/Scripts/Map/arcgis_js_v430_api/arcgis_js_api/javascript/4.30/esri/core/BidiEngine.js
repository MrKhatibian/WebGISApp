// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["./bidiEngineTables"],function(g){function u(a,d,c,f,b){var h=a;void 0===d&&(d=b.defInFormat);void 0===c&&(c=b.defOutFormat);void 0===f&&(f=b.defSwap);if(d!==c){var e=d.substring(0,1),m=c.substring(0,1);var k=d.substring(1,4);var l=c.substring(1,4);"C"===k.charAt(0)&&(k=w(h),k="ltr"===k||"rtl"===k?k.toUpperCase():"L"===d.charAt(2)?"LTR":"RTL",d=e+k);"C"===l.charAt(0)&&(k=w(h),"rtl"===k?l="RTL":"ltr"===k?(h=h.split(""),h.reverse(),k=w(h.join("")),l=k.toUpperCase()):l="L"===c.charAt(2)?"LTR":
"RTL",c=m+l)}if(d===c)return a;m=d.substring(0,1);h=d.substring(1,4);e=c.substring(0,1);l=c.substring(1,4);b.inFormat=d;b.outFormat=c;b.swap=f;if("L"===m&&"VLTR"===c){if("LTR"===h)return b.dir=0,r(a,b);if("RTL"===h)return b.dir=1,r(a,b)}if("V"===m&&"V"===e)return b.dir="RTL"===h?1:0,z(a,b);if("L"===m&&"VRTL"===c)return b.dir="LTR"===h?0:1,a=r(a,b),z(a);if("VLTR"===d&&"LLTR"===c)return b.dir=0,r(a,b);if("V"===m&&"L"===e&&h!==l)return a=z(a),"RTL"===h?u(a,"LLTR","VLTR",f,b):u(a,"LRTL","VRTL",f,b);if("VRTL"===
d&&"LRTL"===c)return u(a,"LRTL","VRTL",f,b);"L"===m&&"L"===e&&(d=b.swap,b.swap=d.substr(0,1)+"N","RTL"===h?(b.dir=1,a=r(a,b),b.swap="N"+d.substr(1,2),b.dir=0,a=r(a,b)):(b.dir=0,a=r(a,b),b.swap="N"+d.substr(1,2),a=u(a,"VLTR","LRTL",b.swap,b)));return a}function w(a){return(a=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(a))?"z">=a[0]?"ltr":"rtl":""}function r(a,d){a=a.split("");const c=[];B(a,c,d);if(0!==d.hiLevel&&d.swap.substr(0,1)!==d.swap.substr(1,2))for(let h=
0;h<a.length;h++)if(1===c[h]){var f=h;b:{let e=void 0;var b=a[h];let m=0,k=g.swapTable.length-1;for(;m<=k;)if(e=Math.floor((m+k)/2),b<g.swapTable[e][0])k=e-1;else if(b>g.swapTable[e][0])m=e+1;else{b=g.swapTable[e][1];break b}}a[f]=b}C(2,a,c,d);C(1,a,c,d);x=c;return a.join("")}function B(a,d,c){const f=a.length;var b=c.dir?g.impTabRtl:g.impTabLtr,h=0,e=-1;const m=[],k=[];c.hiLevel=c.dir;c.lastArabic=!1;c.hasUbatAl=!1;c.hasUbatB=!1;c.hasUbatS=!1;for(var l=0;l<f;l++){var n=l,p=a[l].charCodeAt(0);const t=
g.primaryTable[p>>8];m[n]=t<g.tbbase?t:g.unicodeTable[t-g.tbbase][p&255]}for(n=0;n<f;n++){l=J(a,m,k,n,c);k[n]=l;h=b[h][l];p=h&240;h&=15;l=b[h][5];d[n]=l;if(0<p){if(16===p)for(;e<n;e++)d[e]=1;e=-1}if(b[h][6])-1===e&&(e=n);else if(-1<e){for(;e<n;e++)d[e]=l;e=-1}m[n]===g.ubatB&&(d[n]=0);c.hiLevel|=l}if(c.hasUbatS)for(a=0;a<f;a++)if(m[a]===g.ubatS)for(d[a]=c.dir,b=a-1;0<=b;b--)if(m[b]===g.ubatWs)d[b]=c.dir;else break}function z(a,d){a=a.split("");if(d){const c=[];B(a,c,d);x=c}a.reverse();q.reverse();
return a.join("")}function D(a){for(let d=0;d<g.arabicAlefBetIntervalsBegine.length;d++)if(a>=g.arabicAlefBetIntervalsBegine[d]&&a<=g.arabicAlefBetIntervalsEnd[d])return!0;return!1}function E(a,d,c,f){for(;d*c<f&&v(a[d]);)d+=c;return d*c<f&&D(a[d])?!0:!1}function C(a,d,c,f){if(!(f.hiLevel<a))if(1!==a||1!==f.dir||f.hasUbatB){f=d.length;for(var b=0,h,e,m;b<f;){if(c[b]>=a){for(h=b+1;h<f&&c[h]>=a;)h++;for(e=h-1;b<e;b++,e--)m=d[b],d[b]=d[e],d[e]=m,m=q[b],q[b]=q[e],q[e]=m;b=h}b++}}else d.reverse(),q.reverse()}
function J(a,d,c,f,b){return{UBAT_L:()=>{b.lastArabic=!1;return g.ubatL},UBAT_R:()=>{b.lastArabic=!1;return g.ubatR},UBAT_ON:()=>g.ubatOn,UBAT_AN:()=>g.ubatAn,UBAT_EN:()=>b.lastArabic?g.ubatAn:g.ubatEn,UBAT_AL:()=>{b.lastArabic=!0;b.hasUbatAl=!0;return g.ubatR},UBAT_WS:()=>g.ubatOn,UBAT_CS:()=>{let h,e;if(1>f||f+1>=d.length||(h=c[f-1])!==g.ubatEn&&h!==g.ubatAn||(e=d[f+1])!==g.ubatEn&&e!==g.ubatAn)return g.ubatOn;b.lastArabic&&(e=g.ubatAn);return e===h?e:g.ubatOn},UBAT_ES:()=>(0<f?c[f-1]:g.ubatB)===
g.ubatEn&&f+1<d.length&&d[f+1]===g.ubatEn?g.ubatEn:g.ubatOn,UBAT_ET:()=>{if(0<f&&c[f-1]===g.ubatEn)return g.ubatEn;if(b.lastArabic)return g.ubatOn;let h=f+1;const e=d.length;for(;h<e&&d[h]===g.ubatEt;)h++;return h<e&&d[h]===g.ubatEn?g.ubatEn:g.ubatOn},UBAT_NSM:()=>{if("VLTR"===b.inFormat){for(var h=d.length,e=f+1;e<h&&d[e]===g.ubatNsm;)e++;if(e<h&&(h=a[f].charCodeAt(0),e=d[e],(1425<=h&&2303>=h||64286===h)&&(e===g.ubatR||e===g.ubatAl)))return g.ubatR}return 1>f||d[f-1]===g.ubatB?g.ubatOn:c[f-1]},UBAT_B:()=>
{b.lastArabic=!0;b.hasUbatB=!0;return b.dir},UBAT_S:()=>{b.hasUbatS=!0;return g.ubatOn},UBAT_LRE:()=>{b.lastArabic=!1;return g.ubatOn},UBAT_RLE:()=>{b.lastArabic=!1;return g.ubatOn},UBAT_LRO:()=>{b.lastArabic=!1;return g.ubatOn},UBAT_RLO:()=>{b.lastArabic=!1;return g.ubatOn},UBAT_PDF:()=>{b.lastArabic=!1;return g.ubatOn},UBAT_BN:()=>g.ubatOn}[g.typesNames[d[f]]]()}function A(a,d){for(let c=0;c<g.baseForm.length;c++)if(a===g.baseForm[c])return d[c];return a}function v(a){return"\u064b"<=a&&"\u0655">=
a}function F(a){return"L"===a?"LTR":"R"===a?"RTL":"C"===a?"CLR":"D"===a?"CRL":""}function G(a,d){for(let c=0;c<g.aLefTable.length;c++)if(a===g.aLefTable[c])return d[c];return a}function H(a,d,c,f){for(let b=0;b<a.length;b++)if(a[b]>d||!c&&a[b]===d)a[b]+=f}class K{constructor(){this.inputFormat="ILYNN";this.outputFormat="VLNNN";this.sourceToTarget=[];this.targetToSource=[];this.levels=[]}bidiTransform(a,d,c){this.sourceToTarget=[];this.targetToSource=[];if(!a)return"";var f=this.sourceToTarget,b=this.targetToSource,
h=a.length;q=[];x=[];for(var e=0;e<h;e++)f[e]=e,b[e]=e,q[e]=e;if(!this.checkParameters(d,c))return a;d=this.inputFormat;c=this.outputFormat;f=a;f=L;e=F(d.charAt(1));b=F(c.charAt(1));var m="I"===d.charAt(0)?"L":d.charAt(0);h="I"===c.charAt(0)?"L":c.charAt(0);e=m+e;b=h+b;h=d.charAt(2)+c.charAt(2);f.defInFormat=e;f.defOutFormat=b;f.defSwap=h;a=u(a,e,b,h,f);f=!1;if("R"===c.charAt(1))f=!0;else if("C"===c.charAt(1)||"D"===c.charAt(1))f="rtl"===this.checkContextual(a);b=this.sourceToTarget=q;h=Array(b.length);
for(e=0;e<b.length;e++)h[b[e]]=e;y=this.targetToSource=h;if(d.charAt(3)===c.charAt(3))f=a;else if("S"===c.charAt(3))if(d=f,c=a,0===c.length)f="";else{void 0===d&&(d=!0);c=String(c);c=c.split("");b=0;a=1;f=c.length;d||(b=c.length-1,a=-1,f=1);e=b;m=0;b=[];for(h=0;e*a<f;e+=a)if(D(c[e])||v(c[e])){var k;if(k="\u0644"===c[e])b:{for(var l=c,n=e+a,p=a,t=f;n*p<t&&v(l[n]);)n+=p;k=" ";if(n*p<t)for(k=l[n],l=0;l<g.aLefTable.length;l++)if(g.aLefTable[l]===k){k=!0;break b}k=!1}if(k){c[e]=0===m?G(c[e+a],g.lamAlefInialTableFE):
G(c[e+a],g.lamAlefMedialTableFE);e+=a;m=c;k=e;l=a;for(n=f;k*l<n&&v(m[k]);)k+=l;k*l<n&&(m[k]=" ");b[h]=e;h++;m=0}else{k=c[e];if(1===m){l=e;if(E(c,e+a,a,f))b:for(n=c[e],p=0;p<g.baseForm.length;p++){if(n===g.baseForm[p]){n=g.medialForm[p];break b}}else n=A(c[e],g.finalForm);c[l]=n}else!0===E(c,e+a,a,f)?c[e]=A(c[e],g.initialForm):c[e]=A(c[e],g.isolatedForm);v(k)||(m=1);b:{for(l=0;l<g.standAlonForm.length;l++)if(g.standAlonForm[l]===k){k=!0;break b}k=!1}!0===k&&(m=0)}}else m=0;a=b;f="";for(b=0;b<c.length;b++){b:{for(h=
0;h<a.length;h++)if(a[h]===b)break b;h=-1}-1<h?(H(y,b,!d,-1),q.splice(b,1)):f+=c[b]}}else if(d=a,c=f,0===d.length)f="";else{void 0===c&&(c=!0);d=String(d);a="";f=d.split("");for(b=0;b<d.length;b++)h=!1,"\ufe70"<=f[b]&&"\ufeff">f[b]?(e=d.charCodeAt(b),"\ufef5"<=f[b]&&"\ufefc">=f[b]?(c?(0<b&&" "===f[b-1]?a=a.substring(0,a.length-1)+"\u0644":(a+="\u0644",h=!0),a+=g.aLefTable[(e-65269)/2]):(a+=g.aLefTable[(e-65269)/2],a+="\u0644",b+1<d.length&&" "===f[b+1]?b++:h=!0),h&&(H(y,b,!0,1),q.splice(b,0,q[b]))):
a+=g.feTo06Table[e-65136]):a+=f[b];f=a}this.sourceToTarget=q;this.targetToSource=y;this.levels=x;return f}_inputFormatSetter(a){if(!I.test(a))throw Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=a}_outputFormatSetter(a){if(!I.test(a))throw Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=a}checkParameters(a,d){a?this._inputFormatSetter(a):a=this.inputFormat;d?this._outputFormatSetter(d):d=this.outputFormat;return a===d?!1:!0}checkContextual(a){a=
w(a);if("ltr"!==a&&"rtl"!==a){try{a=document.dir.toLowerCase()}catch(d){}"ltr"!==a&&"rtl"!==a&&(a="ltr")}return a}hasBidiChar(a){return M.test(a)}}let q=[],y=[],x=[];const L={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},I=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,M=/[\u0591-\u06ff\ufb1d-\ufefc]/;return K});