$(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0";

  $.getJSON(url, function(resp) {
    var city = resp.name;
    var temp = Math.round(resp.main.temp - 273.15);
    console.log(city);
    console.log(temp);
    $("#outside-temp").text("Outside temperature: "+ city + " " + temp + "&deg;" +"C");
  });
});
