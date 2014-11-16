function initialize2() {
  var mapCanvas = document.getElementById('maps');
  var mapOptions = {
    center: new google.maps.LatLng(-19.920682, -43.920128),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
//google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var mapCanvas = document.getElementById('maps');
      var mapOptions = {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    });
  } else {
    alert("I'm sorry, but geolocation services are not supported by your browser.");
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
