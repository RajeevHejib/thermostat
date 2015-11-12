function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.maximumTemperature = 25;
  this.minimumTemperature = 10;
}

Thermostat.prototype.increaseTemperature = function(){
  if (this.temperature >= this.maximumTemperature) {
    throw("Temperature already at maximum temperature");
  } else {
    ++this.temperature;
  }
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature <= this.minimumTemperature) {
    throw "Temperature already at minimum temperature";
  } else {
    --this.temperature;
  }
};

Thermostat.prototype.turnOffPowerSavingMode = function(){
  this.powerSavingMode = false;
  this.maximumTemperature = 32;
};

Thermostat.prototype.turnOnPowerSavingMode = function(){
  this.powerSavingMode = true;
  this.maximumTemperature = 25;
  if (this.temperature >= this.maximumTemperature){
    this.temperature = this.maximumTemperature;
  }
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.color = function(){
  if (this.temperature < 18) {
    return "green";
  } else if (this.temperature < 25) {
    return "yellow";
  } else {
    return "red";
  }
};
