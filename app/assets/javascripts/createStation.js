function crearEstacion(map, station) { 
  let actual_station = new google.maps.Polygon({
    paths: station.path,
    strokeColor: '#007ba0',
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: '#00a8db',
    fillOpacity: 0.6
  });
  actual_station.setMap(map);
  
  let marker = new google.maps.Marker({
    position: {lat: 0, lng: 0}, 
    icon: {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Linea_M_%28Logo_Metro_Medellin%29.png",
      labelOrigin: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(0, 0)
    },
    map: map
  });
  stations.push({actual_station: station, marker:marker})

  return actual_station;
}