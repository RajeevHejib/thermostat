$(function() {

  var thermostat = new Thermostat();
  $("#temp").text(thermostat.temperature);

  $("#increase").on("click", function(){
      thermostat.increaseTemperature();
      $("#temp").text(thermostat.temperature);
      $("#temp").css("background-color", thermostat.color());
  });

  $("#decrease").on("click", function(){
      thermostat.decreaseTemperature();
      $("#temp").text(thermostat.temperature);
      $("#temp").css("background-color", thermostat.color());
  });

  $("#reset").on("click", function(){
      thermostat.resetTemperature();
      $("#temp").text(thermostat.temperature);
      $("#temp").css("background-color", thermostat.color());
  });

  $("#psm").on("click", function(){
    if (thermostat.powerSavingMode){
      thermostat.turnOffPowerSavingMode();
      $("#psm").text("Power Saving OFF");
      $("#psm").css("color", "red");
    } else {
      thermostat.turnOnPowerSavingMode();
      $("#psm").text("Power Saving ON");
      $("#psm").css("color", "white");
    }
    $("#temp").text(thermostat.temperature);
  });
});
