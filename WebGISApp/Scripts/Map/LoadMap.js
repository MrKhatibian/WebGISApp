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
import WebTileLayer from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/layers/WebTileLayer.js";

// #endregion

// #region Main

// Paramter
/*let featureLayer;*/
const features = [];
var featuresLayerArray = [];
var params, viewClick;
var isIdentify = false;

// Create a WebTileLayer with the OSM tile URL
const osmLayer = new WebTileLayer({
    urlTemplate: "https://{subDomain}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    subDomains: ["a", "b", "c"], // Subdomains for OSM tiles
    title: "OpenStreetMap"
});

const map = new Map({
    basemap: "osm"
    //basemap: "topo-vector"
    //basemap: { baseLayers: [osmLayer]}
});

// Adding Map URL
const serverUrl = "http://localhost:6080/arcgis/rest/services/Maryanaj/MaryanajWithoutLabel_14031013";
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
            position: "top-left"
        }
    }
});
// #region Add data and open dialogdialog_import
const btn_AddData = document.getElementById("btn_AddData");
const dialog_AddData = document.getElementById("dialog_AddData");
const btnAdd_AddData = document.getElementById("btnAdd_AddData");
const btnCancel_AddData = document.getElementById("btnCancel_AddData");
const input_AddDataValue = document.getElementById("input_AddData");
const combo_AddDataValue = document.getElementById("combo_AddData");
btn_AddData.addEventListener("click", function () {
    if (!dialog_AddData.open) { dialog_AddData.open = true }
});
btnAdd_AddData.addEventListener("click", function () {
    addData(input_AddDataValue.value, combo_AddDataValue.value);
});
btnCancel_AddData.addEventListener("click", function () {
    dialog_AddData.open = false;
});

function addData(dataPath, dataType) {
    if (dataType === "MapServer") {
        const layer = new MapImageLayer({
            url: dataPath
        });
        map.add(layer);
        dialog_AddData.open = false;
    }
}

// #region Service Setting
const inputServiceSetting = document.getElementById("inputServiceSetting");
const inputPrintSetting = document.getElementById("inputPrintSetting");
const inputCodeArse = document.getElementById("inputCodeArse");
const btnSetServiceSetting = document.getElementById("btnSetServiceSetting");
const btnCancelServiceSetting = document.getElementById("btnCancelServiceSetting");

btnSetServiceSetting.addEventListener("click", async function () {    
    const url = inputServiceSetting.value.trim() +"?f=pjson";    

    // Check if the service URL exists
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json(); // Parse the JSON response if it's a valid service
            alert("Service URL is valid and accessible!");
            fetchArcGISData(url);
        } else {
            alert(`Service URL is invalid or inaccessible. Status: ${response.status}`);            
        }
    } catch (error) {        
        alert("Error checking the service URL. Please try again.");        
    }
});
async function fetchArcGISData(url) {    
    try {
        const response = await fetch(url);
        const data = await response.json();

        const combobox = document.getElementById("comboSelectArseSetting");
        combobox.innerHTML = ""; // Clear previous items

        data.layers.forEach(layer => {
            const value = layer.name; // Change this to your field name
            if (value) {
                const item = document.createElement("calcite-combobox-item");
                item.value = value;
                item.textLabel = value;
                combobox.appendChild(item);
            }
        });

    } catch (error) {
        alert("Error fetching ArcGIS data:");
    }
}
//btnSetServiceSetting.addEventListener("click", () => {
//    debugger
//    if (
//        inputServiceSetting.value.trim() === "" ||
//        inputPrintSetting.value.trim() === "" ||
//        !inputCodeArse.value
//    ) {
//        alert("لطفا مقادیر صحیح وارد کنید");
//        return;
//    }

//    // GET request to fetch features
//    fetch("https://localhost:44323/Home/GetFeatures/", {
//        method: "GET",
//        headers: {
//            "Content-Type": "application/json",
//        },
//    })
//        .then((response) => {
//            if (!response.ok) {
//                throw new Error("Failed to fetch features");
//            }
//            return response.json();
//        })
//        .then((data) => {
//            if (data.success) {
//                alert(`Features fetched successfully: ${data.message}`);
//            } else {
//                console.error("Failed to fetch features:", data.message);
//            }
//        })
//        .catch((error) => {
//            console.error("Error during GET request:", error);
//            alert("Failed to fetch features. Please try again.");
//        });

//    // POST request to update features
//    fetch("https://localhost:44323/Home/UpdateFeature/", {
//        method: "POST",
//        headers: {
//            "Content-Type": "application/json",
//        },
//        body: JSON.stringify({
//            ID: "1",
//            mapService: inputServiceSetting.value.trim(),
//            printService: inputPrintSetting.value.trim(),
//        }),
//    })
//        .then((response) => {
//            if (!response.ok) {
//                throw new Error("Failed to update features");
//            }
//            return response.json();
//        })
//        .then((data) => {
//            if (data.success) {
//                alert(`Feature updated successfully: ${data.message}`);
//            } else {
//                console.error("Failed to update feature:", data.message);
//            }
//        })
//        .catch((error) => {
//            console.error("Error during POST request:", error);
//            alert("Failed to update features. Please try again.");
//        });
//});

// #endregion
// #endregion
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
    //if (headerTitleElement) headerTitleElement.heading = title;
    //if (itemDescriptionElement) itemDescriptionElement.innerHTML = url;

    // Add Feature Layer
    var featureLayer = new FeatureLayer({
        url: `${featureServerUrl}/0`, // Template literals for clarity
        outFields: ["*"], // Fetch all fields
        title: "عرصه" // Replace with a descriptive title
    });
    map.add(featureLayer);
    let inputCodeNosazi = document.getElementById("inputCodeNosazi");
    // #region Search
    document.getElementById("btnSearch").addEventListener("click", () => {

        if (inputCodeNosazi.value) {
            selectByAttribute(inputCodeNosazi.value);
        } else {
            alert("لطفا کد نوسازی معتبر وارد کنید ");
        }
    });
    function selectByAttribute(codeNosazi) {
        featureLayer.load().then(() => {
            // Set the view extent to the data extent
            //view.extent = featureLayer.fullExtent;
            featureLayer.popupTemplate = featureLayer.createPopupTemplate();
        });
        const query = featureLayer.createQuery();
        query.where = `Code_nosazi = N'${codeNosazi}'`; // Search for the specific ObjectID
        query.returnGeometry = true; // Ensure geometry is returned
        query.outFields = ["*"]; // Retrieve all attributes

        featureLayer.queryFeatures(query).then((featureSet) => {
            if (featureSet.features.length > 0) {
                const feature = featureSet.features[0]; // Get the first matching feature
                //console.log("Found Feature:", feature.attributes);

                // Zoom to the feature's location
                view.goTo(feature.geometry.extent.expand(2));

                // Highlight the feature
                //view.graphics.removeAll();
                //const highlightGraphic = new Graphic({
                //    geometry: feature.geometry,
                //    symbol: {
                //        type: "simple-fill", // For polygons
                //        color: [255, 255, 0, 0.5],
                //        outline: {
                //            color: [255, 0, 0],
                //            width: 2
                //        }
                //    }
                //});
                //view.graphics.add(highlightGraphic);
                // open popup of query featureSet
                view.openPopup({
                    //location: feature.geometry,
                    features: featureSet.features,
                    featureMenuOpen: true
                });
                // Optionally display attributes
                //alert(JSON.stringify(feature.attributes, null, 2));
            } else {
                alert("مورد مورد نظر یافت نشد");
            }
        });
    }
    // #endregion search    

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
            if (item.layer.type === "map-image") {
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
            }
            else if (item.layer.type === "feature") {
                item.actionsSections = [[
                    {
                        title: "زوم به لایه",
                        className: "esri-icon-zoom-out-fixed",
                        id: "zoom-to-layer"
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
                    },
                    {
                        title: "پاک کردن لایه",
                        className: "esri-icon-close",
                        id: "remove-layer"
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
            //headerTitleElement.heading = selectedLayer.title;
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

    // References to elements
    const btnCloseAttributeTable = document.getElementById("closeAttributeTable");
    let panelMapView = document.getElementById("panelMapView");
    let panelAttributeTable = document.getElementById("panelAttributeTable");

    // Flag to track the state of the table (open/close)
    let isFeatureTableOpen = false;

    // Toggle FeatureTable visibility
    function toggleFeatureTable(featureLayer) {
        featureTable.layer = featureLayer;

        if (isFeatureTableOpen) {
            // Close the Feature Table
            panelAttributeTable.style.height = "0%";
            panelMapView.style.height = "100%";
            btnCloseAttributeTable.hidden = true;
        } else {
            // Open the Feature Table
            panelAttributeTable.style.height = "50%";
            panelMapView.style.height = "50%";
            btnCloseAttributeTable.hidden = false;
        }

        // Toggle the state
        isFeatureTableOpen = !isFeatureTableOpen;
    }

    // Event listener to close the Feature Table when the close button is clicked
    btnCloseAttributeTable.addEventListener("click", () => {
        if (isFeatureTableOpen) {
            toggleFeatureTable();  // Call the same toggle function to close
        }
    });

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

    // #region Editor
    let editor = null;
    let isEditing = false;
    const editableButton = document.getElementById("editable");

    editableButton.onclick = () => {
        isEditing ? stopEdit() : startEdit(featureLayer);
    };

    function stopEdit() {
        if (!editor) {
            console.warn("Editor is not initialized.");
            return;
        }

        isEditing = false;
        editor.visible = false;

        if (typeof featureTable !== "undefined") {
            featureTable.editingEnabled = false;
        }

        editor.destroy();
        editor = null; // Ensure proper cleanup
    }

    function startEdit(featureLayer) {
        if (!editableButton.active) {
            editableButton.active = true;
        }
        if (!featureLayer) {
            console.error("Feature layer is not defined.");
            return;
        }       

        if (!isEditing) {
            isEditing = true;

            editor = new Editor({
                view: view,
                layerInfos: [{ layer: featureLayer }],
                snappingOptions: {
                    enabled: true,
                    featureSources: [{ layer: featureLayer }],
                },
            });

            view.ui.add(editor, "top-left");

            if (typeof featureTable !== "undefined") {
                featureTable.editingEnabled = true;
            }

            // Handle sketch updates
            editor.on("sketch-update", (evt) => {
                const { tool, graphics, state } = evt.detail;
                if (state === "complete") {
                    console.log("Sketch update complete:", tool, graphics);
                }
            });
        }
    }
    // #endregion Editor


    // #region Identify
    document.getElementById("identify").onclick = () => {
        isIdentify ? stopIdentify() : startIdentify(featureLayer);
    };
    let selectFeatureInfo = new Map();
    let bufferGraphic;
    const btnConnect = document.getElementById("btnConnect");

    // Define point graphic
    const pointGraphic = new Graphic({
        symbol: {
            type: "simple-marker",
            color: [0, 0, 139],
            outline: { color: [255, 255, 255], width: 1.5 }
        }
    });

    function stopIdentify() {
        isIdentify = false;
        btnConnect.disabled = true;

        // Cache elements
        const mapView = document.getElementById("mapView");
        const optionsDiv = document.getElementById("optionsDiv");

        if (mapView) mapView.style.cursor = "auto";
        if (optionsDiv) optionsDiv.hidden = true;

        // Remove point graphic safely
        if (pointGraphic && view?.graphics?.includes(pointGraphic)) {
            view.graphics.remove(pointGraphic);
        }

        // Remove event listener safely
        viewClick?.remove();
    }

    function startIdentify(featureLayer) {
        if (!featureLayer) {
            console.error("Feature layer is undefined.");
            return;
        }

        isIdentify = true;

        // Cache elements
        const mapView = document.getElementById("mapView");

        if (mapView) mapView.style.cursor = "help";

        // Load feature layer with error handling
        featureLayer.load()
            .then(() => {
                if (typeof featureLayer.createPopupTemplate === "function") {
                    featureLayer.popupTemplate = featureLayer.createPopupTemplate();
                } else {
                    console.warn("createPopupTemplate method not found on featureLayer.");
                }
            })
            .catch((error) => {
                console.error("Feature layer failed to load:", error);
                alert("Failed to load feature layer. See console for details.");
            });

        // Remove previous event listener if it exists
        viewClick?.remove();

        // Click event for identification
        viewClick = view.on("click", (event) => handleMapClick(event));
    }

    function handleMapClick(event) {
        if (!event?.mapPoint) {
            console.warn("Invalid event.mapPoint.");
            return;
        }

        // Remove existing pointGraphic safely
        view.graphics?.remove(pointGraphic);

        // Place point graphic safely
        pointGraphic.geometry = event.mapPoint;
        view.graphics?.add(pointGraphic);

        // Execute feature query
        featuresQuery(event.screenPoint);
    }

    function featuresQuery(screenPoint) {
        if (!screenPoint || !pointGraphic) {
            console.warn("Invalid screenPoint or pointGraphic.");
            return;
        }

        if (!featureLayer) {
            console.error("Feature layer is not defined.");
            return;
        }

        // Convert screen point to map coordinates
        const point = view.toMap(screenPoint);
        if (!point) {
            console.error("Failed to convert screenPoint to map coordinates.");
            return;
        }

        // Define query
        const query = new Query({
            geometry: point,
            spatialRelationship: "intersects",
            returnGeometry: false,
            returnQueryGeometry: true,
            outFields: ["*"]
        });

        // Execute feature query
        featureLayer.queryFeatures(query)
            .then((featureSet) => {
                const features = featureSet.features;
                if (!features?.length) {
                    console.warn("No features found at this location.");
                    return;
                }

                // Set graphic location and add to view if not already present
                if (pointGraphic.geometry !== point) {
                    pointGraphic.geometry = point;
                    if (!view.graphics.includes(pointGraphic)) {
                        view.graphics.add(pointGraphic);
                    }
                }

                // Open popup with query results
                view.openPopup({
                    location: point,
                    features: features,
                    featureMenuOpen: true
                });

                // Enable connect button
                btnConnect.disabled = false;

                // Ensure the first feature has attributes
                const attributes = features[0]?.attributes;
                if (!attributes) {
                    console.warn("Feature attributes not found.");
                    return;
                }

                // Update UI elements with feature attributes
                inputCodeNosazi.value = attributes.Code_nosazi ?? "";
                selectFeatureInfo.set("Code_nosazi", attributes.Code_nosazi ?? "N/A");
                selectFeatureInfo.set("Masahat", attributes.Masahat ?? "N/A");

            })
            .catch((error) => {
                console.error("Feature query failed:", error);
                alert("Error fetching feature data!");
            });
    }

    // #endregion Identify


    // #region Connect to Shahrsazi
    // Connect to shahrsazi when clicked by btnconnect
    async function connectToShahrsazi() {        

        // Get feature info safely
        const Code_nosazi = selectFeatureInfo.get("Code_nosazi");
        const Masahat = selectFeatureInfo.get("Masahat");

        // Ensure values are valid before sending request
        if (!Code_nosazi || !Masahat) {
            console.warn("Missing feature data! Please select a valid feature.");
            alert("Feature data is missing. Please select a valid feature.");
            return;
        }

        try {
            const response = await fetch("https://localhost:44323/Home/insertToDB/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mapService: Code_nosazi,
                    printService: Masahat }),
            });

            if (!response.ok) {
                throw new Error(`Failed to insert features: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.success) {
                alert(`Feature inserted successfully: ${data.message}`);
            } else {
                console.error("Failed to insert feature:", data.message);
                alert("Failed to insert feature. Please check the console for more details.");
            }
        } catch (error) {
            console.error("Error during POST request:", error);
            alert("Failed to insert features. Please try again.");
        }
    }

    // Attach event listener
    document.getElementById("btnConnect")?.addEventListener("click", connectToShahrsazi);  
    // #endregion Connect to Shahrsazi

    

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
view.ui.move("zoom", "top-right");

// Add Home button
const homeBtn = new Home({
    view: view
});
view.ui.add(homeBtn, "top-right");

// Add FullScreen
//const fullscreen = new Fullscreen({
//    view: view
//});
//view.ui.add(fullscreen, "top-right");

//Add Coordinate
const ccWidget = new CoordinateConversion({
    view: view
});
//view.ui.add(ccWidget, "bottom-right");

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
// Create the Print widget
const printWidget = new Print({
    view: view,
    container: "print-container",
    printServiceUrl:
        "http://localhost:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
});
// Create the BaseMap widget
//const basemapGallery = new BasemapGallery({
//    view: view,
//    container: "basemaps-container"
//});
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

export { view, mapServerUrl };

//#endregion Exporting 