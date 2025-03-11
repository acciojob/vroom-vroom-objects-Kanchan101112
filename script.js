// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}
Car.prototype.getMakeModel = function() {
  return this.make + " " + this.model;
}

function SportsCar(make, model, topSpeed)
	{ Car.call(this, make, model);
  this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
}
var myCar = new SportsCar("Ferrari", "488 GTB", 205);

console.log(myCar.getMakeModel()); // Outputs: "Ferrari 488 GTB"
console.log(myCar.getTopSpeed()); // Outputs: 205

window.Car = Car;
window.SportsCar = SportsCar;
