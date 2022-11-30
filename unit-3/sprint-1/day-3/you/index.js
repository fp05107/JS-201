// let person1 = {
//     name:"Amar",
//     skill:"Singer",
//     live:"Goa",
//     borrowSkill(skill){
//         console.log(`${this.name} is a ${skill} and lives in ${this.live}`)
//     }
// }
// let person2 = {
//     name:"Akbar",
//     skill:"chef",
//     live:"Mumbai"
// }
// let person3 = {
//     name:"Anthony",
//     skill:"magician",
//     live:"Kashmir"
// }

// person1.borrowSkill.call(person2,person3.skill)

// const kitchen = {
//     name:"kitchen",
//     purpose:"cooking",

//     cookFood(order){
//         console.log(`Serving ${order} in ${this.name}`)
//     }

// }

// let bedroom = {
//     name:"bedroom",
//     purpose:"rest"
// }
// kitchen.cookFood.call(kitchen,"maggie")

// let cat = {
//     type:"cat",
//     leg:4,
//     tail:true
// }

// let tiger = Object.create(cat)
// tiger.speed=80;
// console.log(tiger);

// function nikeProduct(n,p){
//     this.name = n
//     this.price = p
// }
// nikeProduct.prototype.sale = "20% off";
// nikeProduct.prototype.brand = "adidas"
// let x = new nikeProduct("Subham",100);
// console.log(x);

// let arr2 =  new Array(1,2,3);
// Array.prototype.namaste = function(){
//     console.log("namste world");
// }
// arr2.namaste()

// function Array2(){
//     this.name = "khalnayak"
// }
// // namste()
// let arr = new Array2()
// Array2.prototype.namaste=function(){
//     console.log("namaste world");
// }
// arr.namaste()
// console.log(arr);

// let arr2 = new Array(1, 2, 3);
// Array.prototype.pushed = function (value) {
//     let index = this.length;
//     this[index] = value
// }
// arr2.pushed(4)
// console.log(arr2);

// let automobile = {
//     wheel:4,
//     roof:1,
//     gear:1,
//     break:1
// }

// function automobile(){
//     this.wheel=4,
//     this.roof=1,
//     this.driver="Human",
//     this.gear=1
// }

// let vehicles = new automobile();
// console.log(vehicles);

// let car = Object.create(vehicles);
// car.ac="Yes"
// console.log(car);

// let bolero = new automobile();
// bolero.seat = 10
// console.log(bolero);