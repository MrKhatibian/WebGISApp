window.onload = function(){
    require(
        [
         "esri/Map",
         "esri/views/MapView",
         "esri/layers/MapImageLayer",
         "esri/layers/FeatureLayer",     
        ],
        function(
                Map, MapView, MapImageLayer            
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
            zoom: 18, // Zoom level
            container: "mapView" // Div element
            });
    
            //const searchWidget = new Search({view:view});
            //view.ui.add(searchWidget, "top-right");        
            view.ui.move("zoom","bottom-right");
            document.getElementById("zoomIn").onclick = function(){
                //view.zoom += 1;
                //alert("Hiii");
                view.goto({
                    center:[48.464869, 34.834155],
                    zoom:16
                });
            }
    
        }
    );
};

