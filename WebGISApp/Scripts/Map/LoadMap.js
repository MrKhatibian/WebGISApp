// #region Import -----------------------------------------------------------------------------------------------------
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
import FeatureTable from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/FeatureTable.js";
import it from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/ImageryTileLayer.js";



// #endregion ---------------------------------------------------------------------------------------------------------

// #region Main -------------------------------------------------------------------------------------------------------
const map = new Map({
    //basemap: "gray-vector" // basemap styles service
    //basemap: "topo-vector"
    basemap: "osm"
});

// Adding Map Image Layer
const mapServerUrl = "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer";
//const mapServerUrl = "http://localhost:6080/arcgis/rest/services/Maryanaj/MaryanajEditenabled_14030619/FeatureServer";
const layer = new MapImageLayer({
    // Replace with your ArcGIS Server URL
    url: mapServerUrl
    //url: "http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer"
});
map.add(layer);

// Adding Feature Layer
const featureLayer = new FeatureLayer({
    url: mapServerUrl+"/0",
    outFields: ["*"],
    title: "Arse"
});
//map.add(featureLayer);

// Creat and Set Map View
const view = new MapView({
    container: "mapView", // Div element     
    map: map,
    zoom: 14, // Zoom level
    center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155                        
});

view.when(() => {
    const { title, url } = layer;        
    document.querySelector("#header-title").heading = title;
    document.querySelector("#item-description").innerHTML = url;            
});
//#region Alert box for error messages --------------------------------------------------------------------------------
function alertBox(message, alertType) {
    const boxAlert = document.getElementById("alert");
    const titleAlert = document.getElementById("alertTitle");
    const messageAlert = document.getElementById("alertMessage");
    boxAlert.open = true;
    boxAlert.style.display = "block";    
    messageAlert.innerText = message;    
    switch (alertType) {
        case "success":
            boxAlert.kind = "success";
            boxAlert.icon = "check-extent";            
            titleAlert.innerText = "انجام شد";
            break;
        case "error":
            boxAlert.kind = "danger";
            boxAlert.icon = "x-octagon";            
            titleAlert.innerText = "خطا";
            break;
        case "info":
            boxAlert.kind = "info";
            boxAlert.icon = "information";            
            titleAlert.innerText = "اطلاعات";
            break;
        case "warning":
            boxAlert.kind = "warning";
            boxAlert.icon = "exclamation-mark-triangle";            
            titleAlert.innerText = "هشدار";
    }

    // Auto-hide the message box after 3 seconds
    setTimeout(() => {
        boxAlert.style.display = "none";
    }, 3000);
}
//#endregion ----------------------------------------------------------------------------------------------------------
function layerLoadStatus() {
    switch (layer.loadStatus) {
        case "not-loaded":
            return "بارگذاری نشده است.";            
        case "loading":
            return "درحال بارگذاری";
        case "failed":
            return "خطا در بارگذاری";            
        case "loaded":
            return "بارگذاری انجام شد.";
        default:
            return "وضعیت نامشخص است."; // In case of unexpected status
    }
}
// refresh map button
const btnRefresh = document.getElementById("refresh");
btnRefresh.addEventListener("click", function () {
    if (typeof layer !== "undefined" && typeof layer.refresh === "function") {
        layer.refresh(); // Refresh the layer
        alertBox(layerLoadStatus(),"info"); // Call the function to show the current status
    } else {
        alertBox("لایه مشخص نشده یا قابلیت رفرش ندارد.", "error"); // Error handling for undefined layer
    }
});
// #endregion Main ----------------------------------------------------------------------------------------------------
// #region shell panels and actionbar----------------------------------------------------------------------------------
// References to shell panels and actions
const shellPanelStart = document.getElementById("shell-panel-start");
const shellPanelEnd = document.getElementById("shell-panel-end");

const actionsStart = shellPanelStart?.querySelectorAll("calcite-action");
const actionsEnd = shellPanelEnd?.querySelectorAll("calcite-action");

// Add click listeners for start panel actions
actionsStart?.forEach(el => {
    el.addEventListener("click", function () {
        //alert(el.id);
        const panelStart = document.getElementById("panel_" + el.id);
        if (el.active) {
            el.active = false; // Set the clicked action as active
            shellPanelStart.collapsed = true; // Expand panel
            panelStart.closed = true; // Open panel
            return
        }; // Prevent unnecessary toggling
        actionsStart?.forEach(action => (action.active = false));
        el.active = true; // Set the clicked action as active
        shellPanelStart.collapsed = false; // Expand panel
        panelStart.closed = false; // Open panel      
        panelStart.hidden = false;
        panelStart.heading = el.text; // Update heading
    });
});
// Add click listeners for end panel actions
actionsEnd?.forEach(el => {
    el.addEventListener("click", function () {
        //alert(el.id);
        const panelEnd = document.getElementById("panel_" + el.id);
        if (el.active) {
            el.active = false; // Set the clicked action as active
            shellPanelEnd.collapsed = true; // Expand panel
            panelEnd.hidden = true; // Open panel
            return
        }; // Prevent unnecessary toggling
        actionsEnd?.forEach(action => (action.active = false));
        el.active = true; // Set the clicked action as active
        shellPanelEnd.collapsed = false; // Expand panel            
        panelEnd.hidden = false;
        panelEnd.heading = el.text; // Update heading
    });
});
// #endregion----------------------------------------------------------------------------------------------------------
// #region Add data and open dialogdialog_import-----------------------------------------------------------------------
const btn_AddData = document.getElementById("btn_AddData");
const dialog_AddData = document.getElementById("dialog_AddData");
const btn_CancelAddData = document.getElementById("btn_CancelAddData");
btn_AddData?.addEventListener("click", function () {
    dialog_AddData.open = true;
});
btn_CancelAddData.addEventListener("click", function () {
    dialog_AddData.open = false;
});
const btnAdd_AddData = document.getElementById("btnAdd_AddData");
const input_AddData = document.getElementById("input_AddData").value;
const combo_AddData = document.getElementById("combo_AddData").value;
btnAdd_AddData.addEventListener("click", function () { addData(input_AddData, combo_AddData) });
function addData(dataPath, dataType) {
    if (!dialog_AddData.open) { dialog_AddData.open = true }
    if (dataType == "ArcGIS Server web service") {
        const layer = new MapImageLayer({
            url: dataPath
        });
        map.add(layer);
        dialog_AddData.open = false;
    }
}
// #endregion----------------------------------------------------------------------------------------------------------
// #region Measurment tool --------------------------------------------------------------------------------------------
const graphicsLayer = new GraphicsLayer();

const sketch = new Sketch({
    layer: graphicsLayer,
    view: view,
    creationMode: "single",
    visibleElements: {
        createTools: { point: false, rectangle: false, circle: false }, selectionTools: { "lasso-selection": false }, settingsMenu: true
    }
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
// #endregion ---------------------------------------------------------------------------------------------------------
// #region FeatureTable and layerlist----------------------------------------------------------------------------------
//Add LayerList
const layerList = new LayerList({
    view,
    dragEnabled: true,
    visibilityAppearance: "checkbox",
    container: "layers-container",
    listItemCreatedFunction: (event) => {
        const { item } = event;
        if (item.layer.type === "map-image") {
            // Add custom actions: Toggle Table and Zoom to Layer
            item.actionsSections = [[
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
        } else if (item.layer.type === "sublayer") {
            item.actionsSections = [[
                {
                    title: "Toggle Table",
                    className: "esri-icon-table",
                    id: "toggle-table"
                }
            ]];
        }
    }
});
// add Layerlist filter 
layerList.visibleElements.filter = true;
//Default Value: 10
layerList.minFilterItems = 5;

// Handle LayerList action events
layerList.on("trigger-action", (event) => {
    const selectedLayer = event.item.layer;
    if (event.action.id === "zoom-to-layer") {
        selectedLayer.when(() => {
            view.goTo(selectedLayer.fullExtent).catch((error) => {
                if (error.name != "AbortError") {
                    console.error(error);
                }
            });
        });
    } else if (event.action.id === "remove-layer") {
        // Remove the layer from the map
        map.remove(selectedLayer).catch((error) => {
            if (error.name != "AbortError") {
                console.error(error);
            }
        });
    } else if (event.action.id === "toggle-table") {
        toggleFeatureTable(selectedLayer.url, selectedLayer.title);
    }
});
let panelMapView = document.getElementById("panelMapView");
let panelAttributeTable = document.getElementById("panelAttributeTable");
let flag = true;
const featureTable = new FeatureTable({
    view: view,
    layer: featureLayer,
    container: "attributeTable", // Temporary container for now
    multiSortEnabled: true, // set this to true to enable sorting on multiple columns    
    editingEnabled: true, // set this to true to enable editing
    paginationEnabled: true,
});
// Optional: Customize FeatureTable fields
featureTable.visibleElements = {
    header: true,
    menu: true,
    menuItems: {
        clearSelection: true,
        zoomToSelection: true
    },        
};

// Toggle FeatureTable overlay visibility
function toggleFeatureTable(urlLayer, titleLayer) {
    const featureLayer = new FeatureLayer({
        url: urlLayer,
        outFields: ["*"],
        title: titleLayer
    });
    if (flag) {
        flag = false;
        featureTable.layer = featureLayer;
        panelMapView.style.height = "50%";
        panelAttributeTable.style.height = "50%";
    } else {
        flag = true;
        panelMapView.style.height = "100%";
        panelAttributeTable.style.height = "0%";
    }
}
// #endregion ---------------------------------------------------------------------------------------------------------
// #region Widgets and view -------------------------------------------------------------------------------------------

//Remove bottom atribution (power by esri)
view.ui.empty();

// Move Zoom button                
view.ui.move("zoom", "bottom-right");

// Add Home button
const homeBtn = new Home({
    view: view
});
view.ui.add(homeBtn, "top-right");

// Add FullScreen
const fullscreen = new Fullscreen({
    view: view
});
view.ui.add(fullscreen, "top-right");

//Add Coordinate
const ccWidget = new CoordinateConversion({
    view: view
});
//view.ui.add(ccWidget, "bottom-left");

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

// Add Draw button
//view.ui.add(["line-button", "top-right");
// #endregion Widget --------------------------------------------------------------------------------------------------
// Add for test ///////////////////////////////////////////////////////////////////////////////////////////////////////
// Check if the highlights are being changed on the table
// update the features array to match the table highlights
let features = [];
featureTable.highlightIds.on("change", async (event) => {
    // this array will keep track of selected feature objectIds to
    // sync the layerview feature effects and feature table selection
    // set excluded effect on the features that are not selected in the table    
    event.removed.forEach((item) => {        
        const data = features.find((data) => {            
            return data === item;
        });        
        if (data) {            
            features.splice(features.indexOf(data), 1);
        }
    });
    
    // If the selection is added, push all added selections to array
    event.added.forEach((item) => {
        features.push(item);
    });    
    //csvLayerView.featureEffect = {
    //    filter: {
    //        objectIds: features
    //    },
    //    excludedEffect: "blur(5px) grayscale(90%) opacity(40%)"
    //};
});





// End for test ///////////////////////////////////////////////////////////////////////////////////////////////////////
//#region Exporting ---------------------------------------------------------------------------------------------------

export {view, mapServerUrl};

//#endregion Exporting ------------------------------------------------------------------------------------------------