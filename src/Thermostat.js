function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.maximumTemperature = 25;
}

Thermostat.prototype.increaseTemperature = function(){
  if (this.powerSavingMode) {
    this.maximumTemperature = 25
  } else {
    this.maximumTemperature = 32
  }

  if (this.temperature == this.maximumTemperature) {
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

Thermostat.prototype.turnOffPowerSavingMode = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.turnOnPowerSavingMode = function(){
  this.powerSavingMode = true;
}