// #region Import
//Import Files


//Import Modules
import Map from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/Map.js";
import MapView from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/views/MapView.js";
import GroupLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/GroupLayer.js";
import MapImageLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/MapImageLayer.js";
import FeatureLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/FeatureLayer.js";
import WFSLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/WFSLayer.js";
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
import ImageryTileLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/ImageryTileLayer.js";
import TileLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/TileLayer.js";
import { Polygon } from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/geometry.js";
import Editor from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/widgets/Editor.js";
import * as identify from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/rest/identify.js";
import IdentifyParameters from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/rest/support/IdentifyParameters.js";
import Query from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/rest/support/Query.js";


// #endregion

// #region Main

// Paramter
/*let featureLayer;*/
const features = [];
var featuresLayerArray = [];
var params, viewClick;
var isIdentify = false;

// Add the basemap layer
const basemapLayer = new TileLayer({
    url: "http://localhost:6080/arcgis/rest/services/Maryanaj/MaryanajEditenabled_14030619/MapServer"
});

const map = new Map({   
    basemap: "osm"
    //basemap: {baseLayers: [basemapLayer]}
});

// Adding Map URL
const serverUrl = "http://localhost:6080/arcgis/rest/services/Maryanaj/MaryanajWithoutLabel_14030619";
//Creat MapServer URL 
const mapServerUrl = serverUrl + "/MapServer";
//Creat FeatureServer URL
const featureServerUrl = serverUrl + "/FeatureServer";

// Creat and Set Map View
const view = new MapView({         
    map: map,
    zoom: 14, // Zoom level
    center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155   
    container: "mapView", // Div element
    popupEnabled: false,
    popup: {
        dockEnabled: true,
        dockOptions: {
            // dock popup at bottom-right side of view
            buttonEnabled: false,
            breakpoint: false,
            position: "bottom-left"
        }
    }
});
view.when(() => {
    const layer = new MapImageLayer({
        // Replace with your ArcGIS Server URL
        url: mapServerUrl
    });
    //map.add(layer);
    if (!layer || !featureServerUrl) {
        console.error("Layer or FeatureServer URL is missing");
        return;
    }

    const { title, url } = layer;

    // Update HTML elements safely
    const headerTitleElement = document.querySelector("#header-title");
    const itemDescriptionElement = document.querySelector("#item-description");
    if (headerTitleElement) headerTitleElement.heading = title;
    if (itemDescriptionElement) itemDescriptionElement.innerHTML = url;

    // Add Feature Layer
    var featureLayer = new FeatureLayer({
        url: `${featureServerUrl}/0`, // Template literals for clarity
        outFields: ["*"], // Fetch all fields
        title: "عرصه" // Replace with a descriptive title
    });
    map.add(featureLayer);
    
    document.getElementById("identify").onclick = () => {        
        isIdentify ? stopIdentify() : startIdentify(featureLayer);
    };    

    // Add all feature layers
    function addFeatureLayers(url) {        
        let urlSplit = url.split("/");
        let featureLayerName = urlSplit[urlSplit.length - 2];

        // Create a GroupLayer to hold all feature layers
        const groupLayer = new GroupLayer({
            title: featureLayerName,
            visibilityMode: "independent", // Allows independent toggling of sublayers
            opacity: 1, // Default opacity            
        });

        fetch(`${url}?f=json`)
            .then((response) => response.json())
            .then((serviceInfo) => {
                const promises = serviceInfo.layers.map((layerInfo) => {
                    featureLayer = new FeatureLayer({
                        url: `${url}/${layerInfo.id}`,
                        outFields: ["*"],
                        title: layerInfo.name,
                    });

                    groupLayer.add(featureLayer);                    
                    featuresLayerArray.push(featureLayer); // Add to array
                    return featureLayer.load(); // Ensure layer is loaded
                });

                // Wait for all FeatureLayers to load
                return Promise.all(promises);
            })
            .then(() => {
                map.add(groupLayer); // Add GroupLayer to map                
                //alert(featuresLayerArray.length);                                                          
            })         
    }
    // Add all feature layers
    //addFeatureLayers(featureServerUrl);

    // #region FeatureTable and layerlist
    //Add LayerList
    const layerList = new LayerList({
        view: view,
        dragEnabled: true,
        visibilityAppearance: "checkbox",
        container: "layers-container",
        visibleElements: { filter: true },// add Layerlist filter
        minFilterItems: 5,//Default Value: 10
        listItemCreatedFunction: (event) => {
            const { item } = event;
            //if (item.layer.type === "map-image") {}            
            // Add custom actions: Remove layer and Zoom to Layer
            item.actionsSections = [[
                {
                    title: "زوم به لایه",
                    className: "esri-icon-zoom-out-fixed",
                    id: "zoom-to-layer"
                },
                {
                    title: "پاک کردن لایه",
                    className: "esri-icon-close",
                    id: "remove-layer"
                }
            ]];            
            if (item.layer.type === "feature" || item.layer.type === "sublayer") {
                item.actionsSections = [[
                    {
                        title: "زوم به لایه",
                        className: "esri-icon-zoom-out-fixed",
                        id: "zoom-to-layer"
                    },
                    {
                        title: "پاک کردن لایه",
                        className: "esri-icon-close",
                        id: "remove-layer"
                    },
                    {
                        title: "جدول اطلاعات",
                        className: "esri-icon-table",
                        id: "toggle-table"
                    },
                    {
                        title: "ویرایش",
                        className: "esri-icon-edit",
                        id: "toggle-edit"
                    }
                ]];
            }
        }
    });

    const featureTable = new FeatureTable({
        view: view,
        layer: featureLayer,
        //layer: featureLayer,
        container: "attributeTable", // Temporary container for now
        multiSortEnabled: true, // set this to true to enable sorting on multiple columns    
        editingEnabled: false, // set this to true to enable editing
        paginationEnabled: true,// Optional: Customize FeatureTable fields        
        visibleElements: {
            header: true,
            menu: true,
            menuItems: {
                clearSelection: true,
                zoomToSelection: true
            }
        },
    });    

    // Handle LayerList action events
    layerList.on("trigger-action", (event) => {
        const selectedLayer = event.item.layer;
        //alert(`${selectedLayer.id}...${selectedLayer.type}...${selectedLayer.url}...${selectedLayer.title}`);        
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
            map.remove(featureLayer).catch((error) => {
                if (error.name != "AbortError") {
                    console.error(error);
                }
            });
        } else if (event.action.id === "toggle-table" || event.action.id === "toggle-edit") {            
            featuresLayerArray.forEach((selectedFeatureLayer) => {
                if (selectedFeatureLayer.title === selectedLayer.title) {
                    featureLayer = selectedFeatureLayer;
                }
            });
            if (event.action.id === "toggle-table") {
                //toggleFeatureTable(selectedLayer.url, selectedLayer.title);
                toggleFeatureTable(featureLayer);
            } else if (event.action.id === "toggle-edit") {
                startEdit(featureLayer);
                toggleFeatureTable(featureLayer);
            }
        }
    });    

    // Toggle FeatureTable visibility
    const btnCloseAttributeTable = document.getElementById("closeAttributeTable");    
    let panelMapView = document.getElementById("panelMapView");
    let panelAttributeTable = document.getElementById("panelAttributeTable");

    btnCloseAttributeTable.addEventListener("click", () => {
        if (panelAttributeTable.style.height === "50%") {
            panelAttributeTable.style.height = "0%";
            btnCloseAttributeTable.hidden = true;
            panelMapView.style.height = "100%";            
        }
    });
    // Toggle FeatureTable overlay visibility
    let flag = true;
    function toggleFeatureTable(featureLayer) {
        featureTable.layer = featureLayer; 
        panelAttributeTable.style.height = "50%";
        btnCloseAttributeTable.hidden = false;
        panelMapView.style.height = "50%";
        //if (flag) {
        //    flag = false;
        //    //featureTable.layer = featureLayer1;
        //    featureTable.layer = featureLayer;
        //    panelMapView.style.height = "50%";
        //    panelAttributeTable.style.height = "50%";
        //} else {
        //    flag = true;
        //    panelMapView.style.height = "100%";
        //    panelAttributeTable.style.height = "0%";
        //}
    }
    // #endregion
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
            featureLayer.refresh();
            alertBox(layerLoadStatus(), "info"); // Call the function to show the current status
        } else {
            alertBox("لایه مشخص نشده یا قابلیت رفرش ندارد.", "error"); // Error handling for undefined layer
        }
    });

    // #region Identify        
    
    function stopIdentify() {
        isIdentify = false;
        document.getElementById("mapView").style.cursor = "auto";
        document.getElementById("optionsDiv").hidden = true;
        viewClick.remove();
        //alert("stop");                
    }
    function startIdentify(featureLayer) {
        isIdentify = true;
        document.getElementById("mapView").style.cursor = "help";
        document.getElementById("optionsDiv").hidden = false;
        view.ui.add("optionsDiv", "top-left");

        // additional query fields initially set to null for basic query
        let distance = null;
        let units = null;

        //create graphic for mouse point click
        const pointGraphic = new Graphic({
            symbol: {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [0, 0, 139],
                outline: {
                    color: [255, 255, 255],
                    width: 1.5
                }
            }
        });

        // Create graphic for distance buffer
        const bufferGraphic = new Graphic({
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [173, 216, 230, 0.2],
                outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            }
        });

        // when query type changes, set appropriate values
        const queryOpts = document.getElementById("query-type");

        queryOpts.addEventListener("change", () => {            
            switch (queryOpts.value) {
                // values set for distance query
                case "distance":
                    distance = 1500;
                    units = "meters";
                    break;
                default:
                    // Default set to basic query
                    distance = null;
                    units = null;
            }
        });

        featureLayer.load().then(() => {
            // Set the view extent to the data extent
            //view.extent = featureLayer.fullExtent;
            featureLayer.popupTemplate = featureLayer.createPopupTemplate();
        });

        // executeIdentify() is called each time the view is clicked
        //view.on("click", executeIdentify);
        viewClick = view.on("click", (event) => {
            view.graphics.remove(pointGraphic);
            if (view.graphics.includes(bufferGraphic)) {
                view.graphics.remove(bufferGraphic);
            }
            queryFeatures1(event);
            //alert(event.mapPoint);
            // Create a buffer around the clicked point
            //const point = event.mapPoint;
            //const buffer = geometryEngine.buffer(point, 50, "meters");

            //// Visualize the buffer
            //const bufferGraphic1 = new Graphic({
            //    geometry: buffer,
            //    symbol: {
            //        type: "simple-fill",
            //        color: [0, 0, 255, 0.3],
            //        outline: {
            //            color: [0, 0, 255],
            //            width: 2
            //        }
            //    }
            //});
            //view.graphics.add(bufferGraphic1);
        });        
        function queryFeatures1(screenPoint) {            
            //const point = view.toMap(screenPoint);
            const point = event.mapPoint;;
            let query = new Query({
                geometry: point,
                // distance and units will be null if basic query selected
                distance: distance,
                units: units,
                spatialRelationship: "intersects",
                returnGeometry: false,
                returnQueryGeometry: true,
                outFields: ["*"]
            });
            featureLayer
                .queryFeatures(query)
                .then((featureSet) => {
                    // set graphic location to mouse pointer and add to mapview
                    pointGraphic.geometry = point;
                    view.graphics.add(pointGraphic);
                    // open popup of query result
                    view.openPopup({
                        location: point,
                        features: featureSet.features,
                        featureMenuOpen: true
                    });
                    alert(distance);
                    if (distance>0) {
                        //bufferGraphic.geometry = featureSet.queryGeometry;
                        bufferGraphic.geometry = point;
                        view.graphics.add(bufferGraphic);
                    }
                });
        }
    }
   
    // #endregion Identify

    // #region Editor
    // Create the Editor
    var editor = null;
    let isEditing = false;
    document.getElementById("editable").onclick = () => {
        isEditing ? stopEdit() : startEdit(featureLayer);
    };
    function stopEdit() {
        isEditing = false;
        editor.visible = false;
        featureTable.editingEnabled = false;
        editor.destroy();        
    }
    function startEdit(featureLayer) {
        if (isEditing == false) {
            isEditing = true;
            //map.add(featureLayer);
            editor = new Editor({
                view: view,
                layerInfos: [featureLayer],
                snappingOptions: { // autocasts to SnappingOptions()
                    enabled: true,
                    featureSources: [{ layer: featureLayer }], // autocasts to FeatureSnappingLayerSource()                
                },
            });
            view.ui.add(editor, "top-left");
            //toggleFeatureTable(featureLayer.url, featureLayer.title);
            featureTable.editingEnabled = true;
            editor.on("sketch-update", function (evt) {
                const { tool, graphics, state } = evt.detail;
                if (state === "complete") {

                }
            });
        }
    }
    // #endregion 

    // #region Add for test

    // Check if the highlights are being changed on the table
    // update the features array to match the table highlights
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





    // #endregion End for test 
});


// #endregion Main 
// #region shell panels and actionbar
// References to shell panels and actions
const shellPanelStart = document.getElementById("shell-panel-start");
const shellPanelEnd = document.getElementById("shell-panel-end");

const actionsStart = shellPanelStart?.querySelectorAll("calcite-action");
const panelStart = shellPanelStart?.querySelectorAll("calcite-panel");
const actionsEnd = shellPanelEnd?.querySelectorAll("calcite-action");
const panelEnd = shellPanelEnd?.querySelectorAll("calcite-panel");
// Add click listeners for start panel actions
actionsStart?.forEach(el => {
    el.addEventListener("click", function () {                            
        if (el.active) {
            el.active = false; // Set the clicked action as active           
            return
        };
        el.active = true; // Set the clicked action as active
    });
});
// Add click listeners for end panel actions
actionsEnd?.forEach(el => {
    el.addEventListener("click", function () {                
        const selectedActionPanelEnd = document.getElementById("panel_" + el.id);        
        if (el.active) {
            el.active = false; // Set the clicked action as active
            shellPanelEnd.collapsed = true; // Expand panel
            selectedActionPanelEnd.closed = true; // Open panel
            selectedActionPanelEnd.hidden = true; // Open panel
            return
        }; // Prevent unnecessary toggling
        panelEnd?.forEach(item => { item.closed = true });
        actionsEnd?.forEach(action => (action.active = false));
        el.active = true; // Set the clicked action as active
        shellPanelEnd.collapsed = false; // Expand panel            
        selectedActionPanelEnd.closed = false;
        selectedActionPanelEnd.hidden = false;
        selectedActionPanelEnd.heading = el.text; // Update heading
    });
});
// #endregion
// #region Add data and open dialogdialog_import
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
// #endregion
// #region Measurment tool 
const graphicsLayer = new GraphicsLayer();

const sketch = new Sketch({
    layer: graphicsLayer,
    view: view,
    creationMode: "single",
    visibleElements: {
        createTools: { point: false, rectangle: false, circle: false },
        selectionTools: { "lasso-selection": false },
        settingsMenu: true
    }
});
sketch.visible = false;
view.ui.add(sketch, "top-left");
let isMeasuring = false;

document.getElementById("measureTool").onclick = () => {
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
// #endregion -
// #region Widgets and view

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
// #endregion Widget 
//#region Alert box for error messages 
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
//#endregion 
//#region Exporting

export {view, mapServerUrl};

//#endregion Exporting 