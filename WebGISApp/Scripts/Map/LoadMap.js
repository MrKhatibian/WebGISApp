require(
        [
         "esri/Map",
         "esri/views/MapView",
         "esri/layers/MapImageLayer",
         "esri/layers/FeatureLayer",
         "esri/widgets/Search"     
        ],
        function(
                Map, MapView, MapImageLayer, Search            
            ) 
        {        
            let map = new Map({
            //basemap: "arcgis/topographic" // basemap styles service
            });
          
            // Adding a sample Map Image Layer
            let layer = new MapImageLayer({
            url: "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer" // Replace with your ArcGIS Server URL         
            });
            map.add(layer);
    
            //const featureLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/1");
            //map.add(featureLayer);
    
            let view = new MapView({
            map: map,
            center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155
            "zoom": 18, // Zoom level
            container: "mapView" // Div element
            });
            
    
        }
);
  

