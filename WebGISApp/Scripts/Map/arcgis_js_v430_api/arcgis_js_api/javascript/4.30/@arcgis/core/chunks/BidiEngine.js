/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const t=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],r=["آ","أ","إ","ا"],e=["ﻵ","ﻷ","ﻹ","ﻻ"],n=["ﻶ","ﻸ","ﻺ","ﻼ"],o=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],i=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],u=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],s=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],a=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],f=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],c=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],l=["ء","ف"],h=["غ","ي"],T=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],A=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],L=0,g=1,B=2,d=3,U=4,m=5,R=6,F=7,b=8,p=11,_=12,S=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],w=100,N=10,v=18,C=[w+0,L,L,L,L,w+1,w+2,w+3,g,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,w+4,U,U,U,L,U,L,U,L,U,U,U,L,L,U,U,L,L,L,L,L,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,L,L,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,L,L,U,U,L,L,U,U,L,L,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,L,L,L,w+5,F,F,w+6,w+7],V=[[v,v,v,v,v,v,v,v,v,R,m,R,b,m,v,v,v,v,v,v,v,v,v,v,v,v,v,v,m,m,m,R,b,U,U,p,p,p,U,U,U,U,U,N,9,N,9,9,B,B,B,B,B,B,B,B,B,B,9,U,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,U,v,v,v,v,v,v,m,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,9,U,p,p,p,p,U,U,U,U,L,U,U,v,U,U,p,p,B,B,U,L,U,U,U,B,L,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,L,L,L,L,L,L,L,L],[L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,U,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,L,L,L,L,L,L,L,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,L,U,U,U,U,U,U,U,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,g,_,g,_,_,g,_,_,g,_,U,U,U,U,U,U,U,U,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,U,U,U,U,U,g,g,g,g,g,U,U,U,U,U,U,U,U,U,U,U],[d,d,d,d,U,U,U,U,F,p,p,F,9,F,U,U,_,_,_,_,_,_,_,_,_,_,_,F,U,U,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,d,d,d,d,d,d,d,d,d,d,p,d,d,F,F,F,_,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,_,_,_,_,_,_,_,d,U,_,_,_,_,_,_,F,F,_,_,U,_,_,_,_,F,F,B,B,B,B,B,B,B,B,B,B,F,F,F,F,F,F],[F,F,F,F,F,F,F,F,F,F,F,F,F,F,U,F,F,_,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,U,U,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,_,_,_,_,_,_,_,_,_,_,_,F,U,U,U,U,U,U,U,U,U,U,U,U,U,U,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,_,_,_,_,_,_,_,_,_,g,g,U,U,U,U,g,U,U,U,U,U],[b,b,b,b,b,b,b,b,b,b,b,v,v,v,L,g,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,b,m,13,14,15,16,17,9,p,p,p,p,p,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,9,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,b,v,v,v,v,v,U,U,U,U,U,v,v,v,v,v,v,B,L,U,U,B,B,B,B,B,B,N,N,U,U,U,L,B,B,B,B,B,B,B,B,B,B,N,N,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U],[L,L,L,L,L,L,L,U,U,U,U,U,U,U,U,U,U,U,U,L,L,L,L,L,U,U,U,U,U,g,_,g,g,g,g,g,g,g,g,g,g,N,g,g,g,g,g,g,g,g,g,g,g,g,g,U,g,g,g,g,g,U,g,U,g,g,U,g,g,U,g,g,g,g,g,g,g,g,g,g,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F],[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,_,_,_,_,_,_,_,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,9,U,9,U,U,9,U,U,U,U,U,U,U,U,U,p,U,U,N,N,U,U,U,U,U,p,p,U,U,U,U,U,F,F,F,F,F,U,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,U,U,v],[U,U,U,p,p,p,U,U,U,U,U,N,9,N,9,9,B,B,B,B,B,B,B,B,B,B,9,U,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,U,U,U,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,U,U,L,L,L,L,L,L,U,U,L,L,L,L,L,L,U,U,L,L,L,L,L,L,U,U,L,L,L,U,U,U,p,p,U,U,U,p,p,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U]];class E{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,o,s){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,r,e){tt=[],et=[];for(let n=0;n<e;n++)t[n]=n,r[n]=n,tt[n]=n}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(o,s))return t;o=this.inputFormat,s=this.outputFormat;let f=t;const l=nt,h=J(o.charAt(1)),T=J(s.charAt(1)),A=("I"===o.charAt(0)?"L":o.charAt(0))+h,L=("I"===s.charAt(0)?"L":s.charAt(0))+T,g=o.charAt(2)+s.charAt(2);l.defInFormat=A,l.defOutFormat=L,l.defSwap=g;const B=O(t,A,L,g,l);let d=!1;return"R"===s.charAt(1)?d=!0:"C"!==s.charAt(1)&&"D"!==s.charAt(1)||(d="rtl"===this.checkContextual(B)),this.sourceToTarget=tt,this.targetToSource=function(t){const r=new Array(t.length);for(let e=0;e<t.length;e++)r[t[e]]=e;return r}(this.sourceToTarget),rt=this.targetToSource,f=o.charAt(3)===s.charAt(3)?B:"S"===s.charAt(3)?function(t,r,o){if(0===r.length)return"";void 0===t&&(t=!0);const s=(r=String(r)).split("");let f=0,c=1,l=s.length;t||(f=s.length-1,c=-1,l=1);const h=function(t,r,o,s,f){let c=0;const l=[];let h=0;for(let f=r;f*o<s;f+=o)if(P(t[f])||H(t[f])){if("ل"===t[f]&&M(t,f+o,o,s)){t[f]=Q(t[f+o],0===c?e:n),f+=o,K(t,f,o,s),l[h]=f,h++,c=0;continue}const r=t[f];1===c?t[f]=Y(t,f+o,o,s)?q(t[f]):G(t[f],u):!0===Y(t,f+o,o,s)?t[f]=G(t[f],a):t[f]=G(t[f],i),H(r)||(c=1),!0===$(r)&&(c=0)}else c=0;return l}(s,f,c,l);let T="";for(let r=0;r<s.length;r++)y(h,h.length,r)>-1?(X(rt,r,!t,-1),tt.splice(r,1)):T+=s[r];return T}(d,B):function(t,e,n){if(0===t.length)return"";void 0===e&&(e=!0);let o="";const i=(t=String(t)).split("");for(let n=0;n<t.length;n++){let u=!1;if(i[n]>="ﹰ"&&i[n]<"\ufeff"){const s=t.charCodeAt(n);i[n]>="ﻵ"&&i[n]<="ﻼ"?(e?(n>0&&" "===i[n-1]?o=o.substring(0,o.length-1)+"ل":(o+="ل",u=!0),o+=r[(s-65269)/2]):(o+=r[(s-65269)/2],o+="ل",n+1<t.length&&" "===i[n+1]?n++:u=!0),u&&(X(rt,n,!0,1),tt.splice(n,0,tt[n]))):o+=c[s-65136]}else o+=i[n]}return o}(B,d),this.sourceToTarget=tt,this.targetToSource=rt,this.levels=et,f}_inputFormatSetter(t){if(!at.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!at.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,r){return t?this._inputFormatSetter(t):t=this.inputFormat,r?this._outputFormatSetter(r):r=this.outputFormat,t!==r}checkContextual(t){let r=I(t);if("ltr"!==r&&"rtl"!==r){try{r=document.dir.toLowerCase()}catch(t){}"ltr"!==r&&"rtl"!==r&&(r="ltr")}return r}hasBidiChar(t){return ft.test(t)}}function O(t,r,e,n,o){const i=function(t,r,e){if(void 0===r.inFormat&&(r.inFormat=e.defInFormat),void 0===r.outFormat&&(r.outFormat=e.defOutFormat),void 0===r.swap&&(r.swap=e.defSwap),r.inFormat===r.outFormat)return r;const n=r.inFormat.substring(0,1),o=r.outFormat.substring(0,1);let i,u=r.inFormat.substring(1,4),s=r.outFormat.substring(1,4);return"C"===u.charAt(0)&&(i=I(t),u="ltr"===i||"rtl"===i?i.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=n+u),"C"===s.charAt(0)&&(i=I(t),"rtl"===i?s="RTL":"ltr"===i?(i=function(t){const r=t.split("");return r.reverse(),I(r.join(""))}(t),s=i.toUpperCase()):s="L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=o+s),r}(t,{inFormat:r,outFormat:e,swap:n},o);if(i.inFormat===i.outFormat)return t;r=i.inFormat,e=i.outFormat,n=i.swap;const u=r.substring(0,1),s=r.substring(1,4),a=e.substring(0,1),f=e.substring(1,4);if(o.inFormat=r,o.outFormat=e,o.swap=n,"L"===u&&"VLTR"===e){if("LTR"===s)return o.dir=ut,x(t,o);if("RTL"===s)return o.dir=st,x(t,o)}if("V"===u&&"V"===a)return o.dir="RTL"===s?st:ut,D(t,o);if("L"===u&&"VRTL"===e)return"LTR"===s?(o.dir=ut,t=x(t,o)):(o.dir=st,t=x(t,o)),D(t);if("VLTR"===r&&"LLTR"===e)return o.dir=ut,x(t,o);if("V"===u&&"L"===a&&s!==f)return t=D(t),"RTL"===s?O(t,"LLTR","VLTR",n,o):O(t,"LRTL","VRTL",n,o);if("VRTL"===r&&"LRTL"===e)return O(t,"LRTL","VRTL",n,o);if("L"===u&&"L"===a){const r=o.swap;return o.swap=r.substr(0,1)+"N","RTL"===s?(o.dir=st,t=x(t,o),o.swap="N"+r.substr(1,2),o.dir=ut,t=x(t,o)):(o.dir=ut,t=x(t,o),o.swap="N"+r.substr(1,2),t=O(t,"VLTR","LRTL",o.swap,o)),t}return t}function I(t){const r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return r?r[0]<="z"?"ltr":"rtl":""}function x(t,r){const e=t.split(""),n=[];return j(e,n,r),function(t,r,e){if(0!==e.hiLevel&&e.swap.substr(0,1)!==e.swap.substr(1,2))for(let e=0;e<t.length;e++)1===r[e]&&(t[e]=Z(t[e]))}(e,n,r),z(2,e,n,r),z(1,e,n,r),et=n,e.join("")}function j(t,r,e){const n=t.length,o=e.dir?A:T;let i=0,u=-1;const s=[],a=[];e.hiLevel=e.dir,e.lastArabic=!1,e.hasUbatAl=!1,e.hasUbatB=!1,e.hasUbatS=!1;for(let r=0;r<n;r++)s[r]=k(t[r]);for(let f=0;f<n;f++){const n=i,c=W(t,s,a,f,e);a[f]=c,i=o[n][c];const l=240&i;i&=15;const h=o[i][ot];if(r[f]=h,l>0)if(16===l){for(let t=u;t<f;t++)r[t]=1;u=-1}else u=-1;if(o[i][it])-1===u&&(u=f);else if(u>-1){for(let t=u;t<f;t++)r[t]=h;u=-1}s[f]===m&&(r[f]=0),e.hiLevel|=h}e.hasUbatS&&function(t,r,e,n){for(let o=0;o<e;o++)if(t[o]===R){r[o]=n.dir;for(let e=o-1;e>=0&&t[e]===b;e--)r[e]=n.dir}}(s,r,n,e)}function k(t){const r=t.charCodeAt(0),e=C[r>>8];return e<w?e:V[e-w][255&r]}function D(t,r){const e=t.split("");if(r){const t=[];j(e,t,r),et=t}return e.reverse(),tt.reverse(),e.join("")}function y(t,r,e){for(let n=0;n<r;n++)if(t[n]===e)return n;return-1}function P(t){for(let r=0;r<l.length;r++)if(t>=l[r]&&t<=h[r])return!0;return!1}function Y(t,r,e,n){for(;r*e<n&&H(t[r]);)r+=e;return!!(r*e<n&&P(t[r]))}function M(t,e,n,o){for(;e*n<o&&H(t[e]);)e+=n;let i=" ";if(!(e*n<o))return!1;i=t[e];for(let t=0;t<r.length;t++)if(r[t]===i)return!0;return!1}function z(t,r,e,n){if(n.hiLevel<t)return;if(1===t&&n.dir===st&&!n.hasUbatB)return r.reverse(),void tt.reverse();const o=r.length;let i,u,s,a,f,c=0;for(;c<o;){if(e[c]>=t){for(i=c+1;i<o&&e[i]>=t;)i++;for(u=c,s=i-1;u<s;u++,s--)a=r[u],r[u]=r[s],r[s]=a,f=tt[u],tt[u]=tt[s],tt[s]=f;c=i}c++}}function W(t,r,e,n,o){const i=r[n];return{UBAT_L:()=>(o.lastArabic=!1,L),UBAT_R:()=>(o.lastArabic=!1,g),UBAT_ON:()=>U,UBAT_AN:()=>d,UBAT_EN:()=>o.lastArabic?d:B,UBAT_AL:()=>(o.lastArabic=!0,o.hasUbatAl=!0,g),UBAT_WS:()=>U,UBAT_CS:()=>{let t,i;return n<1||n+1>=r.length||(t=e[n-1])!==B&&t!==d||(i=r[n+1])!==B&&i!==d?U:(o.lastArabic&&(i=d),i===t?i:U)},UBAT_ES:()=>(n>0?e[n-1]:m)===B&&n+1<r.length&&r[n+1]===B?B:U,UBAT_ET:()=>{if(n>0&&e[n-1]===B)return B;if(o.lastArabic)return U;let t=n+1;const i=r.length;for(;t<i&&r[t]===p;)t++;return t<i&&r[t]===B?B:U},UBAT_NSM:()=>{if("VLTR"===o.inFormat){const e=r.length;let o=n+1;for(;o<e&&r[o]===_;)o++;if(o<e){const e=t[n].charCodeAt(0),i=e>=1425&&e<=2303||64286===e,u=r[o];if(i&&(u===g||u===F))return g}}return n<1||r[n-1]===m?U:e[n-1]},UBAT_B:()=>(o.lastArabic=!0,o.hasUbatB=!0,o.dir),UBAT_S:()=>(o.hasUbatS=!0,U),UBAT_LRE:()=>(o.lastArabic=!1,U),UBAT_RLE:()=>(o.lastArabic=!1,U),UBAT_LRO:()=>(o.lastArabic=!1,U),UBAT_RLO:()=>(o.lastArabic=!1,U),UBAT_PDF:()=>(o.lastArabic=!1,U),UBAT_BN:()=>U}[S[i]]()}function Z(r){let e,n=0,o=t.length-1;for(;n<=o;)if(e=Math.floor((n+o)/2),r<t[e][0])o=e-1;else{if(!(r>t[e][0]))return t[e][1];n=e+1}return r}function $(t){for(let r=0;r<f.length;r++)if(f[r]===t)return!0;return!1}function q(t){for(let r=0;r<o.length;r++)if(t===o[r])return s[r];return t}function G(t,r){for(let e=0;e<o.length;e++)if(t===o[e])return r[e];return t}function H(t){return t>="ً"&&t<="ٕ"}function J(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function K(t,r,e,n){for(;r*e<n&&H(t[r]);)r+=e;return r*e<n&&(t[r]=" ",!0)}function Q(t,e){for(let n=0;n<r.length;n++)if(t===r[n])return e[n];return t}function X(t,r,e,n){for(let o=0;o<t.length;o++)(t[o]>r||!e&&t[o]===r)&&(t[o]+=n)}let tt=[],rt=[],et=[];const nt={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},ot=5,it=6,ut=0,st=1,at=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,ft=/[\u0591-\u06ff\ufb1d-\ufefc]/;export{E as B};