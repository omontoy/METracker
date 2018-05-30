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
