var numDeltas = 100;
var delay = 10;
var i = 0;
var deltaLat;
var deltaLng;

function transition_1(result){
  i = 0;
  deltaLat = (result[0] - position[0])/numDeltas;
  deltaLng = (result[1] - position[1])/numDeltas;
  moveMarker_1();
}

function moveMarker_1(){
  position[0] += deltaLat;
  position[1] += deltaLng;
  var latlng = new google.maps.LatLng(position[0], position[1]);
  train_1.setPosition(latlng);
  if(i!=numDeltas){
    i++;
    setTimeout(moveMarker_1, delay);
  }
}


var numDeltas_2 = 100;
var delay_2 = 10;
var i_2 = 0;
var deltaLat_2;
var deltaLng_2;

function transition_2(result){
  i_2 = 0;
  deltaLat_2 = (result[0] - position_2[0])/numDeltas_2;
  deltaLng_2 = (result[1] - position_2[1])/numDeltas_2;
  moveMarker_2();
}

function moveMarker_2(){
  position_2[0] += deltaLat_2;
  position_2[1] += deltaLng_2;
  var latlng = new google.maps.LatLng(position_2[0], position_2[1]);
  train_2.setPosition(latlng);
  if(i_2!=numDeltas_2){
    i_2++;
    setTimeout(moveMarker_2, delay_2);
  }
}
