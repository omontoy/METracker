var stations = [];
var position = [6.2404155, -75.5552808];
var position_2 = [6.2404155, -75.5552808];

function initMap() {
  var latlng = new google.maps.LatLng(position[0], position[1]);
  // MAPA --------------------------------------------------->>>>>>>>
  var map = crearMapa();
  // RUTA --------------------------------------------------->>>>>>>>
  var flightPath = crearRuta(map, rutaTranvia_D_O);
  // Estaciones --------------------------------------------->>>>>>>>
  var san_antonio = crearEstacion(map, estacionSanAntonio);
  var san_jose = crearEstacion(map, estacionSanJose);
  var pabellon_de_agua = crearEstacion(map, estacionPabellonDeAgua);
  var bicentenario = crearEstacion(map, estacionBicentenario);
  var buenos_aires = crearEstacion(map, estacionBuenosAires);
  var miraflores = crearEstacion(map, estacionMiraflores);
  var loyola = crearEstacion(map, estacionLoyola);
  var alejandro_echavarria = crearEstacion(map, estacionAlejandroEchavarria)
  var oriente = crearEstacion(map, estacionOriente);

  // MARCADOR --------------------------------------------------->>>>>>>>



  // var cont2 = 1
  // var interval = setInterval(function(){
  //   var actual = rutaTranvia_D_O[cont2]
  //   var pasado = cont2 == 0 ? 1 : rutaTranvia_D_O[cont2 - 1]
  //   var result = [actual.lat, actual.lng];
  //   actual_speed = speed(actual, pasado);
  //   transition(result);
  //   marker.setOptions({ label: { text: actual_speed }})
  //   cont2 +=1;
  //   cont2 >= rutaTranvia_D_O.length ? clearInterval(interval) : '';
  // }, 1000);

  google.maps.event.addListener(map,'zoom_changed',function() {
    resizeMarkersText(map);
  });


  google.maps.Map.prototype.createStationNames = function(station, size, i) {
    station.marker.setPosition(station.actual_station.marker_coord[i]);
    station.marker.setOptions({
      label: {
        text: station.actual_station.name,
        fontSize: size,
        fontWeight: 'bold',
        color: '#00a8db'
      }
    });
  }

  return map;
}
