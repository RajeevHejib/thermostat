function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.increaseTemperature = function(){
  ++this.temperature;
};

Thermostat.prototype.decreaseTemperature = function(){
  --this.temperature;
};