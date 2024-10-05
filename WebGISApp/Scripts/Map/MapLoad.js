require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer"
], function (Map, MapView, MapImageLayer) {
    // Create the map
    var myMap = new Map({
        //basemap: "streets-vector" // You can change the basemap here
    });

    // Create the view
    var view = new MapView({
        container: "mapView", // Reference to the view div created in HTML
        map: myMap,
        center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155
        zoom: 16 // Zoom level
    });

    // Adding a sample Map Image Layer
    var layer = new MapImageLayer({
        url: "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer" // Replace with your ArcGIS Server URL
    });

    myMap.add(layer); // Add the layer to the map
});
