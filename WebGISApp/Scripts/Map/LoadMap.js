require(
    [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/layers/FeatureLayer",
        "esri/widgets/Search",
        "esri/widgets/Attribution",
        "esri/widgets/Home",
        "esri/widgets/Fullscreen"     
    ],
    function(
        Map, MapView, MapImageLayer,
        Search, Attribution, Home,
        FeatureLayer, Fullscreen
    ) 
    {        
        const map = new Map({
            basemap: "gray-vector" // basemap styles service
        });
                
        // Adding a sample Map Image Layer
        const layer = new MapImageLayer({
            // Replace with your ArcGIS Server URL
            url: "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer"
            //url: "http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer"
        });
        map.add(layer);
    
        //const featureLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/1");
        //map.add(featureLayer);
    
        const view = new MapView({
            container: "mapView", // Div element
            map: map,
            zoom: 12, // Zoom level
            center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155                        
        });
        
        //remove bottom atribution (power by esri)
        view.ui.empty();

        // Add the home button to the top left corner of the view        
        view.ui.add("Home-button", "top-left"); 

        // Define the initial or home extent (center and zoom level)
        var homeExtent = {
            center: [48.464869, 34.834155], // Longitude, Latitude
            zoom: 15                    // Zoom level
        };

        // Get the custom home button element
        var homeButton = document.getElementById("Home-button");

        // Add event listener to handle click on the Home button
        homeButton.addEventListener("click", function() {            
            view.goTo(homeExtent)
                .then(function() {
                    console.log("Returned to home extent");
                })
                .catch(function(error) {
                    console.error("Error going to home extent:", error);
                });
        });

        // add the button for the draw tool
        view.ui.add("line-button", "top-left");

        const fullscreen = new Fullscreen({
            view: view
        });
        view.ui.add(fullscreen, "top-right");
        //add maual btn FullScreen   
        view.ui.add("FullScreen-button","top-right");

    }
);
  

