    require(
        [
         "esri/config",
         "esri/Map",
         "esri/views/MapView",
         "esri/layers/MapImageLayer",
         "esri/layers/FeatureLayer"
        ],
        function(esriConfig, Map, MapView, MapImageLayer, FeatureLayer) 
        {

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
 
 
       });
