
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
import Graphic from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/Graphic.js";
import GraphicsLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/GraphicsLayer.js";
import * as geometryEngine from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/geometry/geometryEngine.js";
import Sketch from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Sketch.js";
import ScaleBar from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/ScaleBar.js";


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
    let actionBarRight = document.getElementById("actionBarRight");
    let actionBarLeft = document.getElementById("actionBarLeft");
    actionBarRight.addEventListener("click", handleActionBarClick);
    actionBarLeft.addEventListener("click", handleActionBarClick);

    // add padding for show Mapbtn when expanded click       
    let actionBarExpandedRight = false;
    let mapDiv = document.getElementById("mapView");    
    actionBarRight.addEventListener("calciteActionBarToggle", event => {        
        actionBarExpandedRight = !actionBarExpandedRight;
        //alert(mapDiv.style.padding);
        mapDiv.style.padding = actionBarExpandedRight? "0 80px 0 37px" : "0 37px 0 37px";
    });

    // add padding for show Mapbtn when expanded click       
    let actionBarExpandedLeft = false;    
    actionBarLeft.addEventListener("calciteActionBarToggle", event => {
        actionBarExpandedLeft = !actionBarExpandedLeft;        
        mapDiv.style.padding = actionBarExpandedLeft ? "0 37px 0 91px" : "0 37px 0 37px";
    });

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

// #region Add layer ----------------------------------------------------------------------------------------
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
// #endregion -----------------------------------------------------------------------------------------------


// #region Measurment tool ----------------------------------------------------------------------------------
const graphicsLayer = new GraphicsLayer();

const sketch = new Sketch({
    layer: graphicsLayer,
    view: view,
    creationMode: "single",
    visibleElements: {
        createTools: { point: false, rectangle: false, circle: false },selectionTools: {"lasso-selection": false},settingsMenu: true}
});
sketch.visible = false;
view.ui.add(sketch, "top-left");
let isMeasuring = false;

document.getElementById("switchMeasure").onclick = () => {
    isMeasuring ? stopMeasurement() : startMeasurement();
};
function stopMeasurement() {
    isMeasuring = false;
    sketch.visible = false;
    updateUI(false);
    clearGraphics();
    sketch.cancel();
    map.remove(graphicsLayer);
    //alert("stop");
}
function startMeasurement() {
    isMeasuring = true;
    sketch.visible = true;
    map.add(graphicsLayer);
    updateUI(true);    
    sketch.create("polyline");
    //alert("start");
}
function clearGraphics() {
    graphicsLayer.removeAll();
    //displayResult(0, "");
}
sketch.on("create", event => {    
    if (event.state === "complete") {
        const geometry = event.graphic.geometry;
        const result = geometry.type === "polyline"
            ? geometryEngine.geodesicLength(geometry, "kilometers")
            : geometryEngine.geodesicArea(geometry, "square-meters");
        displayResult(result, geometry.type === "polyline" ? "km" : "sq m");
    }
});
function displayResult(value, unit) {
    document.getElementById("result-value").textContent = `${value.toFixed(2)} ${unit}`;
}
function updateUI(showResult) {
    //document.getElementById("toggle-measurement").textContent = buttonText;
    document.getElementById("measurement-result").style.display = showResult ? "block" : "none";
}
// #endregion -----------------------------------------------------------------------------------------------



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
    container: "layers-container",
    listItemCreatedFunction: (event) => {
        const item = event.item;

        // Add custom actions: Toggle Table and Zoom to Layer
        item.actionsSections = [[
            {
                title: "Toggle Table",
                className: "esri-icon-table",
                id: "toggle-table"
            },
            {
                title: "Zoom to Layer",
                className: "esri-icon-zoom-out-fixed",
                id: "zoom-to-layer"
            },
            {
                title: "Remove Layer",
                className: "esri-icon-close",
                id: "remove-layer"
            }
        ]];
    }
});

// Handle LayerList action events
layerList.on("trigger-action", (event) => {
    const layer = event.item.layer;

    if (event.action.id === "zoom-to-layer") {
        // Zoom to the layer's full extent
        //layer.queryExtent().then((response) => {
        //    view.goTo(response.extent);
        //});
        alert(layer.name);
    } else if (event.action.id === "remove-layer") {
        // Remove the layer from the map
        map.remove(layer);
    }
});

//Add Legend
const legend = new Legend({
  view,
  container: "legend-container"
});

//Add ScaleBar
const scaleBar = new ScaleBar({
    view: view,
    unit: "metric" // The scale bar displays both metric and imperial units.
});
view.ui.add(scaleBar, "bottom-left");
// #endregion Widget ----------------------------------------------------------------------------------------

// #region View ---------------------------------------------------------------------------------------------
//Remove bottom atribution (power by esri)
view.ui.empty();

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
//view.ui.add("identify","top-left");

// #endregion View ------------------------------------------------------------------------------------------

//#region Exporting -----------------------------------------------------------------------------------------

export {view, mapServerUrl};

//#endregion Exporting --------------------------------------------------------------------------------------