function crearRuta(map, r_path) {
  var route = new google.maps.Polyline({
    path: r_path,
    geodesic: false,
    strokeColor: '#00b300',
    strokeOpacity: 1.0,
    strokeWeight: 1.5
  });
  route.setMap(map);
  return route;
}