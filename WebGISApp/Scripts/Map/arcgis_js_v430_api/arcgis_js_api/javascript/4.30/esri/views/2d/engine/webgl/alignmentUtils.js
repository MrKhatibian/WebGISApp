// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Logger"],function(a,c){a.HAlign=void 0;(function(b){b[b.Left=-1]="Left";b[b.Center=0]="Center";b[b.Right=1]="Right"})(a.HAlign||(a.HAlign={}));a.VAlign=void 0;(function(b){b[b.Top=1]="Top";b[b.Center=0]="Center";b[b.Bottom=-1]="Bottom";b[b.Baseline=2]="Baseline"})(a.VAlign||(a.VAlign={}));a.getAlignmentFromPlacement=function(b){switch(b){case "above-left":case "esriServerPointLabelPlacementAboveLeft":return["right","bottom"];case "above-center":case "above-along":case "esriServerPointLabelPlacementAboveCenter":case "esriServerLinePlacementAboveAlong":return["center",
"bottom"];case "above-right":case "esriServerPointLabelPlacementAboveRight":return["left","bottom"];case "center-left":case "esriServerPointLabelPlacementCenterLeft":return["right","middle"];case "center-center":case "center-along":case "esriServerPointLabelPlacementCenterCenter":case "esriServerLinePlacementCenterAlong":return["center","middle"];case "center-right":case "esriServerPointLabelPlacementCenterRight":return["left","middle"];case "below-left":case "esriServerPointLabelPlacementBelowLeft":return["right",
"top"];case "below-center":case "below-along":case "esriServerPointLabelPlacementBelowCenter":case "esriServerLinePlacementBelowAlong":return["center","top"];case "below-right":case "esriServerPointLabelPlacementBelowRight":return["left","top"];case "always-horizontal":case "esriServerPolygonPlacementAlwaysHorizontal":return["center","middle"];default:return console.debug(`Found invalid placement type ${b}`),["center","middle"]}};a.getJustification=function(b){switch(b){case "left":return a.HAlign.Left;
case "right":return a.HAlign.Right;case "center":return a.HAlign.Center}};a.getXAnchorDirection=function(b){if(!b)return a.HAlign.Center;switch(b){case "Left":case "left":return a.HAlign.Left;case "Right":case "right":return a.HAlign.Right;case "Justify":return c.getLogger("esri.views.2d.engine.webgl.alignmentUtils").warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),a.HAlign.Center;case "Center":case "center":return a.HAlign.Center}};a.getXDirection=function(b){switch(b){case a.HAlign.Right:case "right":return-1;
case a.HAlign.Center:case "center":return 0;case a.HAlign.Left:case "left":return 1;default:return console.debug(`Found invalid horizontal alignment ${b}`),0}};a.getYAnchorDirection=function(b){if(!b)return a.VAlign.Center;switch(b){case "Top":case "top":return a.VAlign.Top;case "Center":case "middle":return a.VAlign.Center;case "Baseline":case "baseline":return a.VAlign.Baseline;case "Bottom":case "bottom":return a.VAlign.Bottom}};a.getYDirection=function(b){switch(b){case a.VAlign.Top:case "top":return 1;
case a.VAlign.Center:case "middle":return 0;case a.VAlign.Bottom:case a.VAlign.Baseline:case "baseline":case "bottom":return-1;default:return console.debug(`Found invalid vertical alignment ${b}`),0}};a.isMapAligned=function(b){switch(b){case "above-along":case "below-along":case "center-along":case "esriServerLinePlacementAboveAlong":case "esriServerLinePlacementBelowAlong":case "esriServerLinePlacementCenterAlong":return!0;default:return!1}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});