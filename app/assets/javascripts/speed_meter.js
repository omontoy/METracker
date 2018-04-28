function speed(first_position, second_position) {
  let first_coord = new google.maps.LatLng(first_position.lat, first_position.lng);
  let second_coord = new google.maps.LatLng(second_position.lat, second_position.lng);
  let distance = google.maps.geometry.spherical.computeDistanceBetween(first_coord, second_coord);
  let speed = 'Vel: ' + Math.round(((distance*3600)/1000)) + ' Km/H'
  return speed
}