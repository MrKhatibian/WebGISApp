require([
    "esri/Map",
    "esri/views/MapView",
    "esri/views/draw/Draw",
    "esri/layers/MapImageLayer",
    "esri/Graphic",
    "esri/geometry/geometryEngine"
  ], (Map, MapView, Draw, Graphic, geometryEngine, MapImageLayer) => {
    const map = new Map({
      //basemap: "gray-vector"
    });

    const view = new MapView({
        map: map,
        center: [48.464869, 34.834155], // Longitude, latitude 48.464869  34.834155
        "zoom": 18, // Zoom level
        container: "mapView" // Div element
    });
    // Adding a sample Map Image Layer
    const layer = new MapImageLayer({
        url: "http://localhost:6080/arcgis/rest/services/Maryanaj/Maryanaj_14030619/MapServer" // Replace with your ArcGIS Server URL         
        });
        map.add(layer);

    // add the button for the draw tool
    view.ui.add("line-button", "top-left");

    const draw = new Draw({
      view: mapView
    });

    // draw polyline button
    document.getElementById("line-button").onclick = () => {
      view.graphics.removeAll();

      // creates and returns an instance of PolyLineDrawAction
      const action = draw.create("polyline");

      // focus the view to activate keyboard shortcuts for sketching
      view.focus();

      // listen polylineDrawAction events to give immediate visual feedback
      // to users as the line is being drawn on the view.
      action.on(
        [
          "vertex-add",
          "vertex-remove",
          "cursor-update",
          "redo",
          "undo",
          "draw-complete"
        ],
        updateVertices
      );
    };

    // Checks if the last vertex is making the line intersect itself.
    function updateVertices(event) {
      // create a polyline from returned vertices
      if (event.vertices.length > 1) {
        const result = createGraphic(event);

        // if the last vertex is making the line intersects itself,
        // prevent the events from firing
        if (result.selfIntersects) {
          event.preventDefault();
        }
      }
    }

    // create a new graphic presenting the polyline that is being drawn on the view
    function createGraphic(event) {
      const vertices = event.vertices;
      view.graphics.removeAll();

      // a graphic representing the polyline that is being drawn
      const graphic = new Graphic({
        geometry: {
          type: "polyline",
          paths: vertices,
          spatialReference: view.spatialReference
        },
        symbol: {
          type: "simple-line", // autocasts as new SimpleFillSymbol
          color: [4, 90, 141],
          width: 4,
          cap: "round",
          join: "round"
        }
      });

      // check if the polyline intersects itself.
      const intersectingSegment = getIntersectingSegment(graphic.geometry);

      // Add a new graphic for the intersecting segment.
      if (intersectingSegment) {
        view.graphics.addMany([graphic, intersectingSegment]);
      }
      // Just add the graphic representing the polyline if no intersection
      else {
        view.graphics.add(graphic);
      }

      // return intersectingSegment
      return {
        selfIntersects: intersectingSegment
      };
    }

    // function that checks if the line intersects itself
    function isSelfIntersecting(polyline) {
      if (polyline.paths[0].length < 3) {
        return false;
      }
      const line = polyline.clone();

      //get the last segment from the polyline that is being drawn
      const lastSegment = getLastSegment(polyline);
      line.removePoint(0, line.paths[0].length - 1);

      // returns true if the line intersects itself, false otherwise
      return geometryEngine.crosses(lastSegment, line);
    }

    // Checks if the line intersects itself. If yes, change the last
    // segment's symbol giving a visual feedback to the user.
    function getIntersectingSegment(polyline) {
      if (isSelfIntersecting(polyline)) {
        return new Graphic({
          geometry: getLastSegment(polyline),
          symbol: {
            type: "simple-line", // autocasts as new SimpleLineSymbol
            style: "short-dot",
            width: 3.5,
            color: "yellow"
          }
        });
      }
      return null;
    }

    // Get the last segment of the polyline that is being drawn
    function getLastSegment(polyline) {
      const line = polyline.clone();
      const lastXYPoint = line.removePoint(0, line.paths[0].length - 1);
      const existingLineFinalPoint = line.getPoint(
        0,
        line.paths[0].length - 1
      );

      return {
        type: "polyline",
        spatialReference: view.spatialReference,
        hasZ: false,
        paths: [
          [
            [existingLineFinalPoint.x, existingLineFinalPoint.y],
            [lastXYPoint.x, lastXYPoint.y]
          ]
        ]
      };
    }
  });