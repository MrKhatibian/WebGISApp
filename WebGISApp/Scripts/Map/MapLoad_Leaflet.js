//function Myfunction(){    document.getElementById("viewMapDiv_h3").innerHTML = "Hi Muhammad. I'm JavaScript"}
 
// Initialize the map
 var map = L.map('mapView').setView([51.505, -0.09], 10);

 // Add a base map (optional)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 18,
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // Add your WMS layer from the local ArcGIS Server
 var wmsLayer = L.tileLayer.wms('http://localhost:6080/arcgis/services/Maryanaj/Maryanaj_14030619/MapServer/WMSServer', {
     layers: '0',  // Replace '0' with the correct layer ID
     format: 'image/png',
     transparent: true,
     attribution: 'ArcGIS WMS Layer'
 }).addTo(map);

 // Bounding box for the WMS layer (get this from GetCapabilities)
 var layerBounds = [
     [34.822474, 48.452172],   // Southwest corner (miny, minx)
     [34.842205, 48.476566]   // Northeast corner (maxy, maxx)
 ];

 // Zoom the map to the WMS layer bounds
 map.fitBounds(layerBounds);