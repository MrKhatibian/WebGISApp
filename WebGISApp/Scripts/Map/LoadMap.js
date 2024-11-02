
// #region Import -------------------------------------------------------------------------------------------
//Import Files


//Import Modules
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
import Legend from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Legend.js";
import Print from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Print.js";
import Measurement from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Measurement.js";


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
        left: 40,
        right: 20
    },
    map: map,
    zoom: 14, // Zoom level
    center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155                        
});

view.when(() => {
    //const { title, description, thumbnailUrl, avgRating } = map.portalItem;
    //document.querySelector("#header-title").heading = title;
    document.querySelector("#header-title").heading = "Hi Amard";
    document.querySelector("#item-description").innerHTML = "New WebGIS For Amard Creat by Mr.Khatibian";
    //document.querySelector("#item-thumbnail").src = thumbnailUrl;
    //document.querySelector("#item-rating").value = avgRating;

    let activeWidget;

    const handleActionBarClick = ({ target }) => {
        if (target.tagName !== "CALCITE-ACTION") {            
            return;
        }
        
        if (activeWidget) {
            document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
            document.querySelector(`[data-panel-id=${activeWidget}]`).hidden = true;
        }

        const nextWidget = target.dataset.actionId;
        if (nextWidget !== activeWidget) {
            document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
            document.querySelector(`[data-panel-id=${nextWidget}]`).hidden = false;
            activeWidget = nextWidget;
        } else {
            activeWidget = null;
        }
    };
    
    document.getElementById("actionBarRight").addEventListener("click", handleActionBarClick);
    document.getElementById("actionBarLeft").addEventListener("click", handleActionBarClick);

    //// add padding for show Mapbtn when expanded click
       
    //let actionBarExpanded = false;

    //document.addEventListener("calciteActionBarToggle", event => {
    //    actionBarExpanded = !actionBarExpanded;
    //    view.padding = {
    //        left: actionBarExpanded ? 150 : 40,
    //        right: actionBarExpanded ? 150 : 40
    //    };
    //});

});

//Add btn Add layer for open dialog_import data
const btn_AddData = document.getElementById("btn_AddData");
const dialog_AddData = document.getElementById("dialog_AddData");
const btn_CancelAddData = document.getElementById("btn_CancelAddData");
btn_AddData?.addEventListener("click", function() {
    dialog_AddData.open = true;
});
btn_CancelAddData.addEventListener("click",function(){
    dialog_AddData.open= false;
});

//document.querySelector("calcite-shell").hidden = false;
  
// #region manual Home extent
/*
//Define the initial or home extent (center and zoom level)
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
*/
// #endregion


// Add for test /////////////////////////////////////////////////////////////////////////////////////////////
const btnAdd_AddData = document.getElementById("btnAdd_AddData");
const input_AddData = document.getElementById("input_AddData").value;
const combo_AddData = document.getElementById("combo_AddData").value;
btnAdd_AddData.addEventListener("click", function () { addData(input_AddData, combo_AddData) });
function addData(dataPath, dataType){
  if (dataType == "ArcGIS Server web service") {
    const layer = new MapImageLayer({
        url: dataPath
    });
    map.add(layer);
      dialog_AddData.open = false;      
  }
}

//// Add Measurement widget
//const measurement = new Measurement();
//// Set-up event handlers for buttons and click events
//const distanceButton = document.getElementById('distance');
//const areaButton = document.getElementById('area');
//const clearButton = document.getElementById('clear');

//distanceButton.addEventListener("click", () => {
//    distanceMeasurement();
//});
//areaButton.addEventListener("click", () => {
//    areaMeasurement();
//});
//clearButton.addEventListener("click", () => {
//    clearMeasurements();
//});

//// Call the loadView() function for the initial view
//loadView();

//// The loadView() function to define the view for the widgets and div
//function loadView() {    
//    // Add the appropriate measurement UI to the bottom-right when activated
//    view.ui.add(measurement, "bottom-left");
//    view.ui.add("toolbarDiv", "top-right");

    
//    // Set the views for the widgets
//    measurement.view = view;    
//}
//// Call the appropriate DistanceMeasurement2D or DirectLineMeasurement3D
//function distanceMeasurement() {
//    const type = view.type;
//    measurement.activeTool = type.toUpperCase() === "2D" ? "distance" : "direct-line";
//    distanceButton.classList.add("active");
//    areaButton.classList.remove("active");
//}

//// Call the appropriate AreaMeasurement2D or AreaMeasurement3D
//function areaMeasurement() {
//    measurement.activeTool = "area";
//    distanceButton.classList.remove("active");
//    areaButton.classList.add("active");
//}

//// Clears all measurements
//function clearMeasurements() {
//    distanceButton.classList.remove("active");
//    areaButton.classList.remove("active");
//    measurement.clear();
//}

// End for test /////////////////////////////////////////////////////////////////////////////////////////////


//Stop Calcite loader      
//document.querySelector("calcite-loader").hidden = true;

// #endregion Main ------------------------------------------------------------------------------------------

// #region Widgets -------------------------------------------------------------------------------------------

// Add Home button
const homeBtn = new Home({
    view: view
});

// Add FullScreen
const fullscreen = new Fullscreen({
    view: view
});
           
//Add Coordinate
const ccWidget = new CoordinateConversion({
    view: view
});

//Add Bookmark 
const bookmarks = new Bookmarks({
  view,
  container: "bookmarks-container"
});

//Add LayerList
const layerList = new LayerList({
  view,
  dragEnabled: true,
  visibilityAppearance: "checkbox",
  container: "layers-container"
});

//Add Legend
const legend = new Legend({
  view,
  container: "legend-container"
});



// #endregion Widget ----------------------------------------------------------------------------------------

// #region View ---------------------------------------------------------------------------------------------
//Remove bottom atribution (power by esri)
//view.ui.empty();

// Move Zoom button                
view.ui.move("zoom","bottom-right");
//view.ui.move("zoom", "top-left");  

// Add the home button
view.ui.add(homeBtn, "top-right");
// Add the home button Manual
//view.ui.add("Home-button", "top-right");

// Add Draw button
//view.ui.add("Home-button", "bottom-right");  
//view.ui.add(["line-button", "Home-button"], "top-right");
//view.ui.add("line-button", "top-right"); 

// View Coordinate widget
//view.ui.add(ccWidget, "bottom-left");

view.ui.add(fullscreen, "top-right");
//add maual btn FullScreen
//view.ui.add("FullScreen-button","top-right");
view.ui.add("identify","top-left");

// #endregion View ------------------------------------------------------------------------------------------

//#region Exporting -----------------------------------------------------------------------------------------

export {view, mapServerUrl};

//#endregion Exporting --------------------------------------------------------------------------------------