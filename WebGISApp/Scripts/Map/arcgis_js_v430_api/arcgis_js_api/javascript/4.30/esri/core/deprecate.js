// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./has"],function(e,f){function m(c,b,a=!1){const d=`\ud83d\uded1 DEPRECATED - ${b}`;a?(a=h.get(c),a||(a=new Set,h.set(c,a)),a.has(b)||(a.add(b),c.warn(d))):c.warn(d)}function g(c,b,a={}){if(f("esri-deprecation-warnings")){const {replacement:d,version:k,see:l,warnOnce:n}=a;d&&(b+=`\n\t\ud83d\udee0\ufe0f Replacement: ${d}`);k&&(b+=`\n\t\u2699\ufe0f Version: ${k}`);l&&(b+=`\n\t\ud83d\udd17 See ${l} for more details.`);m(c,b,n)}}const h=new WeakMap;e.deprecated=g;e.deprecatedConstructorSignature=
function(c,b,a={}){f("esri-deprecation-warnings")&&g(c,`Multiple argument constructor: ${b}`,{warnOnce:!0,replacement:`new ${b}({ <your properties here> })`,...a})};e.deprecatedFunction=function(c,b,a={}){if(f("esri-deprecation-warnings")){const {moduleName:d}=a;g(c,`Function: ${(d?d+"::":"")+b+"()"}`,a)}};e.deprecatedModule=function(c,b,a={}){f("esri-deprecation-warnings")&&g(c,`Module: ${b}`,a)};e.deprecatedProperty=function(c,b,a={}){if(f("esri-deprecation-warnings")){const {moduleName:d}=a;g(c,
`Property: ${(d?d+"::":"")+b}`,a)}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});