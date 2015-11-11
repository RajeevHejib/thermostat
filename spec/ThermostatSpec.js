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

});
