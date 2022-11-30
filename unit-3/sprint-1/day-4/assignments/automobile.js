function automobile(){
    this.wheel=4,
    this.roof=1,
    this.driver="Human",
    this.gear=1
}

let vehicles = new automobile();
console.log(vehicles);

let car = Object.create(vehicles);
car.ac="Yes"
console.log(car);

let bolero = new automobile();
bolero.seat = 10
console.log(bolero);