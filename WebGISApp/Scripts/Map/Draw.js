// Export a value
//export const myValue = 42;
// Exporting a value or function using module.exports
const myValue = 42;
function myFunction() {
  return myValue * 2;
}

export  {
    myValue,
    myFunction  
};
import Map from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/Map.js";
import MapView from "./arcgis_js_v430_api/arcgis_js_api/javascript/4.30/@arcgis/core/views/MapView.js";
const map = new Map({
  //basemap: "gray-vector" // basemap styles service
  //basemap: "topo-vector"
  basemap: "osm"
});
      
// Adding a sample Map Image Layer
const mapServerUrl = "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer";

//const featureLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/1");
//map.add(featureLayer);

const view = new MapView({
  container: "mapView", // Div element
  map: map,
  zoom: 14, // Zoom level
  center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155                        
});
export {view};