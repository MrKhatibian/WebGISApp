﻿import { DateTime } from "../../node_modules/luxon/build/es6/luxon.js";
import Map from "../../node_modules/@arcgis/core/Map.js";
import MapView from "../../node_modules/@arcgis/core/views/MapView.js";
import FeatureLayer from "../../node_modules/@arcgis/core/layers/FeatureLayer.js";
import MapImageLayer from "../../node_modules/@arcgis/core/layers/MapImageLayer.js";

const map = new Map({
//basemap: "arcgis/topographic" // basemap styles service
});
  
// Adding a sample Map Image Layer
var layer = new MapImageLayer({
url: "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer" // Replace with your ArcGIS Server URL         
});
map.add(layer);
 
const featureLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/1");
//map.add(featureLayer);
 
const view = new MapView({
map: map,
center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155
zoom: 16, // Zoom level
container: "mapView" // Div element
});
