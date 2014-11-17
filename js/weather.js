$(document).ready(function() {
  $.simpleWeather({
    location: 'Belo Horizonte, BR',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2>Belo Horizonte: '+weather.temp+'&deg;'+weather.units.temp+'</h2>'+
      '<img src=\''+weather.forecast[0].thumbnail+'\'/>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
