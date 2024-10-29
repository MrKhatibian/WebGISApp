
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
import Legend from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Legend.js";
import Print from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Print.js";

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

  document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

  let actionBarExpanded = false;

  document.addEventListener("calciteActionBarToggle", event => {
    actionBarExpanded = !actionBarExpanded;
    view.padding = {
      left: actionBarExpanded ? 150 : 49
    };
  });

});

//Add btn Add layer for open dialog_import data
const btn_addlayer = document.getElementById("btn_addlayer");
const dialog_addlayer = document.getElementById("dialog_addlayer");
const btn_CancelAddlayer = document.getElementById("btn_CancelAddlayer");
btn_addlayer?.addEventListener("click", function() {
  dialog_addlayer.open = true;
});
btn_CancelAddlayer.addEventListener("click",function(){
  dialog_addlayer.open= false;
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
view.ui.add("line-button", "top-right"); 

// View Coordinate widget
//view.ui.add(ccWidget, "bottom-left");

view.ui.add(fullscreen, "top-right");
//add maual btn FullScreen
//view.ui.add("FullScreen-button","top-right");

// #endregion View ------------------------------------------------------------------------------------------

//#region Exporting -----------------------------------------------------------------------------------------

export {view, mapServerUrl};

//#endregion Exporting --------------------------------------------------------------------------------------