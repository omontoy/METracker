function crearMapa() {
  let map = new google.maps.Map(document.getElementById('select_mapa'), {
    center: {lat:6.2404155, lng:-75.5552808},
    zoom: 15.30,
    // maxZoom: 19,
    minZoom: 14.15,
    draggable: false,
    draggableCursor: 'default',
    streetViewControl: false,
    zoomControl: false,
    mapTypeControl: false,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#ffffff'}]},
      {
        featureType: 'administrative',
        stylers: [{visibility: "off"}]
      },
      {
        featureType: 'poi',
        stylers: [{visibility: "off"}]
      },
      {
        featureType: 'water',
        stylers: [{visibility: "off"}]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{visibility: "off"}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        // stylers: [{visibility: "off"}]
        stylers: [{color: '#f2f2f2'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        // stylers: [{visibility: "off"}]
        stylers: [{color: '#bfbfbf'}]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{visibility: "off"}]
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{visibility: "off"}]
      },
    ]
  });
  return map;
}