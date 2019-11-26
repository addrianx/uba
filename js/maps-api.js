function addMarkersToMap(map) {
   var uba_office = new H.map.Marker({lat:-7.231817, lng:107.899836});
   map.addObject(uba_office);
}

 // Initialize the platform object:
 var platform = new H.service.Platform({
 'apikey': 'bya_2amiUMMXCIxyhDjOWeC4surSQTV2KUUmaU6k6g4'
 });

 // Obtain the default map types from the platform object
 var maptypes = platform.createDefaultLayers();

 // Instantiate (and display) a map object:
 var map = new H.Map(
 document.getElementById('mapContainer'),
 maptypes.vector.normal.map,
 {
   zoom: 18,
   center: { lng: 107.899836, lat: -7.231817 }
 });

// Now use the map as required...
window.onload = function () {
addMarkersToMap(map);
}    