require(
        [
         "esri/Map",
         "esri/views/MapView",
         "esri/layers/MapImageLayer",
         "esri/layers/FeatureLayer",
         "esri/widgets/Search",
         "esri/widgets/Attribution",
         "esri/widgets/Home"     
        ],
        function(
                Map, MapView, MapImageLayer, Search, Attribution, Home            
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

            const homeBtn = new Home(
                {
                    view: view
                }
            );
            // Add the home button to the top left corner of the view
            //view.ui.add(homeBtn, "bottom-left");
            view.ui.add("Home-button", "bottom-left"); 
            document.getElementById("Home-button").addEventListener("click", function(){
                //homeBtn.go();
            });

            // add the button for the draw tool
             view.ui.add("line-button", "top-left");

    
        }
);
  

