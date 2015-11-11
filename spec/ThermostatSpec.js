describe("Thermostat", function(){
  var thermostat = new Thermostat();

  it("It can read the thermostat temperature", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("Default temeprature is 20", function(){
    expect(thermostat.DEFAULT_TEMPERATURE).toEqual(20);
  });

});
