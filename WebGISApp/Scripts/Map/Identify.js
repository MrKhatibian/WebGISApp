// #region Import -------------------------------------------------------------------------------------------
import {view, mapServerUrl} from './LoadMap.js';
//import identify from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/rest/identify.js";
//import { identify } from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/rest/identify.js";
//import IdentifyParameters from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/rest/support/IdentifyParameters.js";


// #endregion Import ----------------------------------------------------------------------------------------

//#region Main ----------------------------------------------------------------------------------------------
let params;
require([
    "esri/rest/identify",
    "esri/rest/support/IdentifyParameters"
  ], function (identify, IdentifyParameters) {
    view.when(function () {
        // executeIdentify() is called each time the view is clicked
        view.on("click", executeIdentify);
    
        // Set the parameters for the identify
        params = new IdentifyParameters();
        params.tolerance = 3;
        params.layerIds = [0, 1, 2, 3, 4];
        params.layerOption = "top";
        params.width = view.width;
        params.height = view.height;
    });
    function executeIdentify(event) {
        // Set the geometry to the location of the view click
        params.geometry = event.mapPoint;
        params.mapExtent = view.extent;
        document.getElementById("mapView").style.cursor = "wait";
    
        // This function returns a promise that resolves to an array of features
        // A custom popupTemplate is set for each feature based on the layer it
        // originates from
        identify
        .identify(mapServerUrl, params)
        .then(function (response) {
            const results = response.results;            
    
            return results.map(function (result) {
                let feature = result.feature;
                let layerName = result.layerName;              
    
                feature.attributes.layerName = layerName;
    
                if (layerName === "عرصه") {
                    feature.popupTemplate = {
                        // autocasts as new PopupTemplate()
                        title: layerName,                  
                        content:
                        "<b>OBJECTID:</b> {OBJECTID} " +
                        "<br><b>Geometry Type:</b> {SHAPE}" +
                        "<br><b>Code_nosazi:</b> {Code_nosazi}"
                    };
                } else if (layerName === "water") {
                    feature.popupTemplate = {
                        // autocasts as new PopupTemplate()
                        title: "{LABEL_LOCAL}",
                        content:
                        "<b>Block ID:</b> {BLOCK_ID} " +
                        "<br><b>Geometry Type:</b> {Shape}" +
                        "<br><b>Water Area:</b> {Shape_Area}"
                    };
                } else if (layerName === "Urban") {
                    feature.popupTemplate = {
                        // autocasts as new PopupTemplate()
                        title: layerName,
                        content:
                        "<b>Block ID:</b> {BLOCK_ID} " +
                        "<br><b>Geometry Type:</b> {Shape}" +
                        "<br><b>Urban Area:</b> {Shape_Area}"
                    };
                } else if (layerName === "Landuse") {
                    feature.popupTemplate = {
                        // autocasts as new PopupTemplate()
                        title: layerName,
                        content:
                        "<b>Block ID:</b> {BLOCK_ID} " +
                        "<br><b>Geometry Type:</b> {Shape}" +
                        "<br><b>Landuse Area:</b> {Shape_Area}"
                    };
                } else if (layerName === "Counties") {
                    feature.popupTemplate = {
                        // autocasts as new PopupTemplate()
                        title: layerName,
                        content:
                        "<b>ObjectID:</b> {OBJECTID} " +
                        "<br><b>Geometry Type:</b> {SHAPE}" +
                        "<br><b>Landuse Area:</b> {SHAPE_Area}"
                    };
                }
                return feature;
            });
        })
        .then(showPopup); // Send the array of features to showPopup()
    
        // Shows the results of the identify in a popup once the promise is resolved
        function showPopup(response) {
            if (response.length > 0) {
                view.openPopup({
                    features: response,
                    location: event.mapPoint
                });
            }
            document.getElementById("mapView").style.cursor = "auto";
        }
    };
});



//#endregion Main -------------------------------------------------------------------------------------------
