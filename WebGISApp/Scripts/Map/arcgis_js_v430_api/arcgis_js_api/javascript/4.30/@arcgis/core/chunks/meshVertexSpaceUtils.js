/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{b as e}from"../core/Accessor.js";import{L as r}from"./Logger.js";import{g as o}from"./vec3.js";import n from"../geometry/Point.js";import i from"../geometry/support/MeshGeoreferencedVertexSpace.js";import t from"../geometry/support/MeshLocalVertexSpace.js";function c(){return r.getLogger("esri.geometry.Mesh")}function a(e){return!s(e)}function s(e){return null!=e.origin}function g(e){return s(e.vertexSpace)}function p(e,r){if(!s(e))return null;const[o,i,t]=e.origin;return new n({x:o,y:i,z:t,spatialReference:r})}function u(r,o){const{x:n,y:a,z:s,spatialReference:g}=r,p=[n,a,s??0];void 0!==o?.geographic&&(e(c(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),o.vertexSpace&&c().warn("Deprecated geographic flag ignored since vertexSpace option is provided."));const u=o?.vertexSpace??(f=o?.geographic,null==f?void 0:f?"local":"georeferenced")??function(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}(g);var f;return"local"===u?new t({origin:p}):new i({origin:p})}function f(e,r){return e.type===r.type&&(e.origin===r.origin||null!=e.origin&&null!=r.origin&&o(e.origin,r.origin))}export{g as a,p as b,a as c,s as i,u as s,f as v};