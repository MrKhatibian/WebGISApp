// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(l){function e(b,a,d){a=a.split("\n");for(const c of a)if(c.trim().length){a="";const f=d??"000";null!=d&&(a+=`/*id:${f}*/   `);b.body+=a.padEnd(14);b.body+=" ".repeat(b.indent)+c+"\n"}}class m{write(b){for(const a of b.rootOutputNodes())b.shouldPruneOutputNode(a)||(a.variableName=this._write(b,a.node));return b}_createVarName(b,a){let d="";"boolean"!==typeof a&&"number"!==typeof a&&a.debugInfo.name&&(d=`${a.debugInfo.name}_`);return`${d}v${b.varCount++}`}_write(b,a,d=!1){if("number"===
typeof a||"boolean"===typeof a)return a.toString();let c=b.getEmit(a);if(c)return c;switch(a.shaderType){case "scope-node":c=this._writeScopeNode(b,a);break;case "primitive-node":c=this._writePrimitiveNode(b,a,d);break;case "function-node":c=this._writeFunctionNode(b,a);break;case "property-access-node":c=this._writePropertyAccessNode(b,a);break;case "text-node":c=a.text;break;case "block-node":c=this._writeBlockNode(b,a);break;case "condition-node":c=this._writeConditionNode(b,a)}b.setEmit(a,c);
return c}_writeScopeNode(b,a){var d=new a.child.constructor;d.setDebugName(a.debugInfo.name);d=this._write(b,d,!0);e(b,`{ /*ScopeStart: ${a.uid} ${a.debugInfo.name}*/`);b.indent+=2;const c=this._write(b,a.child);e(b,`${d} = ${c};`);b.indent-=2;e(b,`} /*ScopeEnd: ${a.uid} ${a.debugInfo.name}*/`);return d}_writeConditionNode(b,a){var d=new a.ifTrue.constructor;d=this._write(b,d,!0);var c=this._write(b,a.condition);e(b,`if (${c}) {`);b.indent+=2;c=b.createSubgraphContext();const f=this._write(c,a.ifTrue);
b.body+=c.body;f&&e(b,`${d} = ${f};`);b.indent-=2;e(b,"}");a.ifFalse&&(e(b,"else {"),b.indent+=2,c=b.createSubgraphContext(),a=this._write(c,a.ifFalse),b.body+=c.body,a&&e(b,`${d} = ${a};`),b.indent-=2,e(b,"}"));return d}_writeBlockNode(b,a){const {captureList:d,generator:c,returnType:f}=a;var g={};for(var h in d)if(d[h]){var k=this._write(b,d[h]);g[h]=k}h=new f;h=this._write(b,h,!0);g.out=h;a.subgraph&&(k=b.createSubgraphContext(),a=this._write(k,a.subgraph.child),g.subgraph={varName:a,body:k.body});
g=c(g);e(b,"{\n");b.indent+=2;e(b,g);b.indent-=2;e(b,"}\n");return h}_writePropertyAccessNode(b,a){const d=this._write(b,a.target);return"string"===typeof a.property&&a.property.includes("[")?`${d}${a.property}`:"string"!==typeof a.property?(b=this._write(b,a.property),`${d}[${b}]`):`${d}.${a.property}`}_writeFunctionNode(b,a){const d=a.returnType.type;if(a.isInfix){const [g,h]=a.children.map(k=>this._write(b,k));var c=this._createVarName(b,a);e(b,`${d.padEnd(5)} ${c} = ${g} ${a.token} ${h};`,a.uid);
return c}c=a.children.map(g=>this._write(b,g)).join(", ");const f=this._createVarName(b,a);e(b,`${d.padEnd(5)} ${f} = ${a.token}(${c});`,a.uid);return f}_writePrimitiveNode(b,a,d=!1){var c=b.getInput(a);if(c)return c.isUsed=!0,c.variableName;c=1===a.children.length&&a.children[0]?.type===a.type;if(a.isImplicit||c)return this._write(b,a.children[0]);c=this._createVarName(b,a);if(d)return e(b,`${a.type.padEnd(5)} ${c};`,a.uid),c;if((d=!a.debugInfo.name&&!a.isMutable)&&"float"===a.type&&"number"===typeof a.children[0])return Number.isInteger(a.children[0])?
a.children[0].toFixed(1):a.children[0].toString();if(d&&"int"===a.type&&"number"===typeof a.children[0]&&Number.isInteger(a.children[0]))return a.children[0].toString();const f=a.children.map(g=>this._write(b,g)).join(", ");if("array"===a.type)return e(b,`${a.type.padEnd(5)} ${c} = [${f}];`,a.uid),c;if(d)return`${a.type}(${f})`;e(b,`${a.type.padEnd(5)} ${c} = ${a.type}(${f});`,a.uid);return c}}l.GlslShaderWriter=m;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});