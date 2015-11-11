describe("Thermostat", function(){
  var thermostat;


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Default temeprature is 20", function(){
    expect(thermostat.DEFAULT_TEMPERATURE).toEqual(20);
  });

  it("Increases temperature with an up button", function(){
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it("Decreases tempearature with a down button", function(){
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it("temperature will not decrease below 10 degrees", function(){
    for (i = 1; i <= 10; i++) {
        thermostat.decreaseTemperature();
    }
    expect(function(){thermostat.decreaseTemperature();}).toThrow("Temperature already at minimum temperature");
    expect(thermostat.temperature).toEqual(10);
  });

  it ("temperature will not increase above 32 degrees", function(){
    thermostat.turnOffPowerSavingMode();
    for (i = 1; i <= 12; i++) {
      thermostat.increaseTemperature();
    }
    expect(function(){thermostat.increaseTemperature();}).toThrow("Temperature already at maximum temperature");
    expect(thermostat.temperature).toEqual(32);
  });

  it ("by default, power-saving mode is on", function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it ("power-saving mode can be turned off", function(){
    thermostat.turnOffPowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it ("power-saving mode can be turned on", function(){
    thermostat.turnOnPowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it ("when power-saving mode on, the temperature will not rise above 25 degrees", function(){
    thermostat.turnOnPowerSavingMode();
    for (i = 1; i <= 5; i++) {
      thermostat.increaseTemperature();
    }
    expect(function(){thermostat.increaseTemperature();}).toThrow("Temperature already at maximum temperature");
    expect(thermostat.temperature).toEqual(25);
  });

  it("it can reset the temperature to 20", function(){
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

});

describe("Temperature Color Gauge", function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("displays green when temperature is less than 18 degrees", function() {
    for (i = 1; i <= 3; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.color()).toEqual("Green");
  });

  it("displays yellow when temperature is less than 25 degrees", function() {
    expect(thermostat.color()).toEqual("Yellow");
  });

  it("displays red when temperature is greater than 25 degrees", function() {
    thermostat.turnOffPowerSavingMode();
    for (i = 1; i <= 6; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.color()).toEqual("Red");
  });

});
