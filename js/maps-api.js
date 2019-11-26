function addMarkersToMap(map) {
   var uba_office = new H.map.Marker({lat:-7.231817, lng:107.899836});
   map.addObject(uba_office);
}

  //Initialize the Platform object:
  var platform = new H.service.Platform({
    'apikey': 'bya_2amiUMMXCIxyhDjOWeC4surSQTV2KUUmaU6k6g4'
  });

  // Get the default map types from the Platform object:
  var defaultLayers = platform.createDefaultLayers();

  // Instantiate the map:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 16,
      center: { lng: 107.899836, lat: -7.231817 }
    });

    window.onload = function () {
    addMarkersToMap(map);
    } 

  // Create the default UI:
  var ui = H.ui.UI.createDefault(map, defaultLayers);   