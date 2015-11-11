describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("It can read the thermostat temperature", function(){
    expect(thermostat.temperature).toEqual(20);
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
    for (i = 1; i <= 12; i++) {
      thermostat.increaseTemperature();
    }
    expect(function(){thermostat.increaseTemperature();}).toThrow("Temperature already at maximum temperature");
    expect(thermostat.temperature).toEqual(32);
  });
});
