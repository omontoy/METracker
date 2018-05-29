function resizeMarkersText(map) {
  if (map.getZoom() <= 16){
    for (var i = 0; i < stations.length; i++ ) {
      map.createStationNames(stations[i], "12px", 0);
    }
  } else if (map.getZoom() <= 17) {
    for (var i = 0; i < stations.length; i++ ) {
      map.createStationNames(stations[i], "15px", 1);
    }
  } else if (map.getZoom() <= 18) {
    for (var i = 0; i < stations.length; i++ ) {
      map.createStationNames(stations[i], "18px", 2);
    }
  } else if (map.getZoom() <= 19) {
    for (var i = 0; i < stations.length; i++ ) {
      map.createStationNames(stations[i], "25px", 3);
    }
  }
}

function info_details(speed) {
  $('.trains-details .speed span').text(speed)
  if (speed > 0) {
    $('.trains-details .status').text("En trayecto").removeClass("table-danger").addClass("table-primary")
  } else {
    $('.trains-details .status').text("Detenido").removeClass("table-primary").addClass("table-danger")
  }
}
