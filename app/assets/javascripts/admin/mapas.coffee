class DesplegarMapa
  constructor: (channel) ->
    @map = initMap();
    @train = initTrain(@map);

    $('.complete_map').show();

    $('.b_mapaC').on 'click', () =>
      @mapa_completo(@map)

    $('.b_mapa1').on 'click', () =>
      @mapa_e1(@map)

    $('.b_mapa2').on 'click', () =>
      @mapa_e2(@map)

    $('.b_mapa3').on 'click', () =>
      @mapa_e3(@map)

    $('.b_mapa4').on 'click', () =>
      @mapa_e4(@map)

    $('.b_mapa5').on 'click', () =>
      @mapa_e5(@map)

    $('.b_mapa6').on 'click', () =>
      @mapa_e6(@map)

    $('.b_mapa7').on 'click', () =>
      @mapa_e7(@map)

    $('.b_mapa8').on 'click', () =>
      @mapa_e8(@map)

    $('.b_mapa9').on 'click', () =>
      @mapa_e9(@map)

    channel.bind 'my-message', (data) =>
      @new_position(data.coords)


  mapa_completo: (map) ->
    map.setZoom(15.99);
    center = new google.maps.LatLng(6.2404155, -75.5552808)
    map.panTo(center)

  mapa_e1: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.247279954923373, -75.56751425733489)
    map.panTo(center)

  mapa_e2: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.247140032872732, -75.56537333416327)
    map.panTo(center)

  mapa_e3: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.24542924235259, -75.56192936174023)
    map.panTo(center)

  mapa_e4: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.243860624747923, -75.55874965981889)
    map.panTo(center)

  mapa_e5: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng( 6.241125931035288, -75.55354603848104)
    map.panTo(center)

  mapa_e6: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.241347129275428, -75.54884819715437)
    map.panTo(center)

  mapa_e7: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.239006184123832, -75.5451819727383)
    map.panTo(center)

  mapa_e8: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.235415683382725, -75.54178038246522)
    map.panTo(center)

  mapa_e9: (map) ->
    map.setZoom(18.30);
    center = new google.maps.LatLng(6.23385004536527, -75.54065358528771)
    map.panTo(center)


  new_position: (coords) ->
    result = [coords.lat, coords.lng]
    transition(result)
    info_details(coords.speed)


window.DesplegarMapa = DesplegarMapa
