
// #region Import -------------------------------------------------------------------------------------------
import Map from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/Map.js";
import MapView from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/views/MapView.js";
import MapImageLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/MapImageLayer.js";
import FeatureLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/FeatureLayer.js";
import Home from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Home.js";
import Fullscreen from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Fullscreen.js";
import CoordinateConversion from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/CoordinateConversion.js";

import BasemapGallery from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/BasemapGallery.js";
import Bookmarks from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Bookmarks.js";
import LayerList from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/LayerList.js";

// #endregion -----------------------------------------------------------------------------------------------

// #region Main ---------------------------------------------------------------------------------------------
const map = new Map({
    //basemap: "gray-vector" // basemap styles service
    //basemap: "topo-vector"
    basemap: "osm"
});

// Adding Map Image Layer
const mapServerUrl = "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer";
const layer = new MapImageLayer({
    // Replace with your ArcGIS Server URL
    url: mapServerUrl
    //url: "http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer"
});
map.add(layer);

// Adding Feature Layer
//const featureLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/1");
//map.add(featureLayer);

// Creat and Set Map View
const view = new MapView({
    container: "mapView", // Div element
    padding: {
        left: 49
      },
    map: map,
    zoom: 14, // Zoom level
    center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155                        
});
        
// Define the initial or home extent (center and zoom level)
var homeExtent = {
    center: [48.464869, 34.834155], // Longitude, Latitude
    zoom: 15                    // Zoom level
};

// Get the custom Home-button element
var homeButton = document.getElementById("Home-button");

// Add event listener to handle click on the Home button
homeButton.addEventListener("click", function() {            
    view.goTo(homeExtent)
    .then(function() {
        console.log("Returned to home extent");
    })
    .catch(function(error) {
        console.error("Error going to home extent:", error);
    });
});

// Add for test /////////////////////////////////////////////////////////////////////////////////////////////
const bookmarks = new Bookmarks({
    view,
    container: "bookmarks-container"
});

const layerList = new LayerList({
    view,
    dragEnabled: true,
    visibilityAppearance: "checkbox",
    container: "layers-container"
});

document.querySelector("calcite-shell").hidden = false;
document.querySelector("calcite-loader").hidden = true;
// End for test /////////////////////////////////////////////////////////////////////////////////////////////


//Stop Calcite loader      
//document.querySelector("calcite-loader").hidden = true;

// #endregion Main ------------------------------------------------------------------------------------------

// #region Widget -------------------------------------------------------------------------------------------
// Add FullScreen widget
const fullscreen = new Fullscreen({
    view: view
});
           
//Add Coordinate widget
const ccWidget = new CoordinateConversion({
    view: view
});
// #endregion Widget ----------------------------------------------------------------------------------------

// #region View ---------------------------------------------------------------------------------------------
//Remove bottom atribution (power by esri)
//view.ui.empty();

// Move Zoom button                
//view.ui.move("zoom","bottom-right");
view.ui.move("zoom", "top-left");  


// Add Draw button
// Add the home button to the top left corner of the view 
//view.ui.add("Home-button", "bottom-right");  
view.ui.add(["line-button", "Home-button"], "bottom-right"); 

// View Coordinate widget
view.ui.add(ccWidget, "bottom-left");

view.ui.add(fullscreen, "top-right");
//add maual btn FullScreen
view.ui.add("FullScreen-button","top-right");

// #endregion View ------------------------------------------------------------------------------------------

//#region Exporting -----------------------------------------------------------------------------------------

export {view, mapServerUrl};

//#endregion Exporting --------------------------------------------------------------------------------------