function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.increaseTemperature = function(){
  if (this.temperature == 32) {
    throw "Temperature already at maximum temperature";
  } else {
    ++this.temperature;
  }
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature == 10) {
    throw "Temperature already at minimum temperature";
  } else {
    --this.temperature;
  }
};
