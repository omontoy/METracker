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

function info_details_1(speed) {
  $('.trains-details .train_1 .speed span').text(speed)
  if (speed > 0) {
    $('.trains-details .train_1 .status').text("En marcha").removeClass("table-danger").addClass("table-primary")
    $(".alert-section .alert-train-1").fadeOut(1000);
  } else {
    $('.trains-details .train_1 .status').text("Detenido").removeClass("table-primary").addClass("table-danger")
    $('.alert-section .alert-train-1').show()
  }
}
