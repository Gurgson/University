/**
 * Dodaj jedną instrukcję w wierszu 17, która spowoduje, że obiekt audi będzie miał właściwości weight i mileage
 */

function Vehicle() {
  return {
    weight: 1000,
    mileage: 10,
  };
}

function Car(model, brand, power) {
  this.model = model;
  this.brand = brand;
  this.power = power;
}
Object.assign(Car.prototype, Vehicle());
//Testy
let audi = new Car("A4", "Audi", 190);
if (audi.weight) {
  console.log("Test 51 passed");
} else {
  console.log("Test 51 failed");
}
if (audi.mileage) {
  console.log("Test 52 passed");
} else {
  console.log("Test 52 failed");
}
