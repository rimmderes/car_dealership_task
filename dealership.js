const {Car} = require("./car");

const Dealership = function(name, maxCars) {
    this.name = name;
    this.maxCars = maxCars;
    this.inStock = [];
}

let maxCars = 8;
// count number of cars in stock

Dealership.prototype.countCars = function() {
    return this.inStock.length;
}

  // add car to stock
  Dealership.prototype.addCarsToStock = function(car) {
     // if (this.maxCars > this.countCars) {
    return this.inStock.push(car); }
     //}


   // return array containing each car's manufacturuer

    Dealership.prototype.carManufacturuers = function () {
        return this.inStock.map((car) => {
            return car.name });
    }


module.exports = {Dealership};
