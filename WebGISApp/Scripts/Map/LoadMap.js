

require(
    [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/layers/FeatureLayer",
        "esri/widgets/Search",
        "esri/widgets/Attribution",
        "esri/widgets/Home",
        "esri/widgets/Fullscreen",
        "esri/rest/identify",
        "esri/rest/support/IdentifyParameters",
        "esri/widgets/CoordinateConversion"
    ],
    function(
        Map, MapView, MapImageLayer,
        Search, Attribution, Home,
        FeatureLayer, Fullscreen,identify,
        IdentifyParameters, CoordinateConversion
    ) 
    {        
        const map = new Map({
            //basemap: "gray-vector" // basemap styles service
            //basemap: "topo-vector"
            basemap: "osm"
        });
                
        // Adding a sample Map Image Layer
        const mapServerUrl = "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer";
        const layer = new MapImageLayer({
            // Replace with your ArcGIS Server URL
            url: mapServerUrl
            //url: "http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer"
        });
        map.add(layer);
    
        //const featureLayer = new FeatureLayer("http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/1");
        //map.add(featureLayer);
    
        const view = new MapView({
            container: "mapView", // Div element
            map: map,
            zoom: 14, // Zoom level
            center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155                        
        });
        
        //remove bottom atribution (power by esri)
        //view.ui.empty();

        // Add the home button to the top left corner of the view        
        view.ui.add("Home-button", "bottom-right"); 
        view.ui.add("shell-panel-start","top-left");
        view.ui.add("shell-panel-end","top-right");
        view.ui.move("zoom","bottom-right");        

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
        view.ui.add("line-button", "bottom-right");

        const fullscreen = new Fullscreen({
            view: view
        });
        view.ui.add(fullscreen, "top-right");
        //add maual btn FullScreen   
        view.ui.add("FullScreen-button","top-right");

        //add Indentify section
        let params;        
        view.when(function () {
            // executeIdentify() is called each time the view is clicked
            view.on("click", executeIdentify);
  
            // Set the parameters for the identify
            params = new IdentifyParameters();
            params.tolerance = 3;
            params.layerIds = [0, 1, 2, 3, 4];
            params.layerOption = "top";
            params.width = view.width;
            params.height = view.height;
        });
        function executeIdentify(event) {
            // Set the geometry to the location of the view click
            params.geometry = event.mapPoint;
            params.mapExtent = view.extent;
            document.getElementById("mapView").style.cursor = "wait";
            
            // This function returns a promise that resolves to an array of features
          // A custom popupTemplate is set for each feature based on the layer it
          // originates from
          identify
          .identify(mapServerUrl, params)
          .then(function (response) {
            const results = response.results;            

            return results.map(function (result) {
              let feature = result.feature;
              let layerName = result.layerName;              

              feature.attributes.layerName = layerName;
              
              if (layerName === "عرصه") {
                feature.popupTemplate = {
                  // autocasts as new PopupTemplate()
                  title: layerName,                  
                  content:
                    "<b>OBJECTID:</b> {OBJECTID} " +
                    "<br><b>Geometry Type:</b> {SHAPE}" +
                    "<br><b>Code_nosazi:</b> {Code_nosazi}"
                };
              } else if (layerName === "water") {
                feature.popupTemplate = {
                  // autocasts as new PopupTemplate()
                  title: "{LABEL_LOCAL}",
                  content:
                    "<b>Block ID:</b> {BLOCK_ID} " +
                    "<br><b>Geometry Type:</b> {Shape}" +
                    "<br><b>Water Area:</b> {Shape_Area}"
                };
              } else if (layerName === "Urban") {
                feature.popupTemplate = {
                  // autocasts as new PopupTemplate()
                  title: layerName,
                  content:
                    "<b>Block ID:</b> {BLOCK_ID} " +
                    "<br><b>Geometry Type:</b> {Shape}" +
                    "<br><b>Urban Area:</b> {Shape_Area}"
                };
              } else if (layerName === "Landuse") {
                feature.popupTemplate = {
                  // autocasts as new PopupTemplate()
                  title: layerName,
                  content:
                    "<b>Block ID:</b> {BLOCK_ID} " +
                    "<br><b>Geometry Type:</b> {Shape}" +
                    "<br><b>Landuse Area:</b> {Shape_Area}"
                };
              } else if (layerName === "Counties") {
                feature.popupTemplate = {
                  // autocasts as new PopupTemplate()
                  title: layerName,
                  content:
                    "<b>ObjectID:</b> {OBJECTID} " +
                    "<br><b>Geometry Type:</b> {SHAPE}" +
                    "<br><b>Landuse Area:</b> {SHAPE_Area}"
                };
              }
              return feature;
            });
          })
          .then(showPopup); // Send the array of features to showPopup()

          // Shows the results of the identify in a popup once the promise is resolved
          function showPopup(response) {
            if (response.length > 0) {
              view.openPopup({
                features: response,
                location: event.mapPoint
              });
            }
            document.getElementById("mapView").style.cursor = "auto";
          }
        };

        //Add Coordinate widget
        const ccWidget = new CoordinateConversion({
          view: view
        });

        view.ui.add(ccWidget, "bottom-left");        
    }
);
  

