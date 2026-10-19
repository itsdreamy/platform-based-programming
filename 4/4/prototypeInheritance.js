// Create a Vehicle constructor with a shared getInfo() method on its prototype. Create a Car constructor that inherits from Vehicle and adds doors. Demonstrate inherited methods and verify that two cars share the same method reference.

function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;
}

Vehicle.prototype.getInfo = function() {
    return `${this.year} ${this.brand}`;
};

function Car(brand, year, doors) {
    Vehicle.call(this, brand, year);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;

Car.prototype.getCarDetails = function() {
    return `${this.getInfo()} with ${this.doors} doors`;
};

const car1 = new Car("Toyota", 2023, 4);
const car2 = new Car("Honda", 2024, 2);

console.log("--- Inherited Methods ---");
console.log(car1.getInfo());
console.log(car1.getCarDetails());

console.log(car2.getInfo());
console.log(car2.getCarDetails());

console.log("\n--- Method Reference Verification ---");
console.log("Same getInfo reference?", car1.getInfo === car2.getInfo); 