
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      directionsDisplay = new google.maps.DirectionsRenderer();
      var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var mapOptions = {
        zoom: 17,
        center: location
      };
      map = new google.maps.Map(document.getElementById('maps'), mapOptions);
      directionsDisplay.setMap(map);
    }
  } else {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var location = new google.maps.LatLng(-19.920682, -43.920128);
    var mapOptions = {
      zoom: 17,
      center: location
    };
    map = new google.maps.Map(document.getElementById('maps'), mapOptions);
    directionsDisplay.setMap(map);
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
