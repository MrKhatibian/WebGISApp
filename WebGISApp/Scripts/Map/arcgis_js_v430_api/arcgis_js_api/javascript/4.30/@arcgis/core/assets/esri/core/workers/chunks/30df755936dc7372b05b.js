"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4415],{54415:(e,n,t)=>{t.r(n),t.d(n,{hydratedAdapter:()=>c});var a=t(44600),o=t(36533),s=t(64752),i=t(84200),r=t(67504);t(32816),t(20266),t(90740),t(32773),t(29298),t(36544),t(93181),t(13671),t(40499),t(6407),t(69421),t(91047),t(2160),t(99924),t(41390),t(58498),t(45371),t(80959),t(49877),t(7969),t(69763),t(93804),t(18683),t(64604),t(29512),t(99063),t(56273),t(29208),t(48844),t(97827),t(91695),t(18169),t(48402),t(16699),t(26809),t(2589),t(18527);const c={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),o=e.hasM(n),i=new s.A({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(i.z=e.getPointZ(n)),o&&(i.m=e.getPointM(n)),i.cache._geVersion=n,i},exportPolygon:function(e,n,t){const a=new i.A({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){const a=new r.A({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new o.A({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const o=e.hasZ(n),s=e.hasM(n),i=new a.A({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(o){const t=e.getZExtent(n);i.zmin=t.vmin,i.zmax=t.vmax}if(s){const t=e.getMExtent(n);i.mmin=t.vmin,i.mmax=t.vmax}return i.cache._geVersion=n,i}}}}]);