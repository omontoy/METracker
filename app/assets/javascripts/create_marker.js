function initTrain(map) {
  var image = {
    labelOrigin: new google.maps.Point(8, -8),
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Linea_M_%28Logo_Metro_Medellin%29.png", // url
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(5, 5),
    scaledSize: new google.maps.Size(10, 10)
  };

  train_1 = new google.maps.Marker({
    map: map,
    icon: image,
    label: {
      fontSize: "13px"
    }
  });
}
