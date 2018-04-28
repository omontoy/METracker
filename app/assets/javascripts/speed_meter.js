function speed(first_position, second_position) {
  var first_coord = new google.maps.LatLng(first_position.lat, first_position.lng);
  var second_coord = new google.maps.LatLng(second_position.lat, second_position.lng);
  var distance = google.maps.geometry.spherical.computeDistanceBetween(first_coord, second_coord);
  var speed = 'Vel: ' + Math.round(((distance*3600)/1000)) + ' Km/H'
  return speed
}