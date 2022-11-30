// 1. Inheritance

// class vehicle{
//     constructor(){
//         this.tyre = 4;
//     }
// }

// class car extends vehicle{
//     constructor(){
//         super();
//         this.roof = 1;
//     }
// }

// car.prototype.seat = 4;
// let c1 = new car()
// console.log(c1);

// 2. Encapsulation

// class vehicle{
//     #seat;
//     #tyre;
//     constructor(){
//         this.#tyre = 4;
//         this.#seat = 4;
//     }
// }

// let c1 = new vehicle()
// // console.log(c1);
// console.log(c1.tyre);
// 3. Abstraction

// 4.Polymorphism
class vehicle{
    run(){
        console.log('This is a vehicle');
    }
}
class car extends vehicle{
    run(){
        console.log('This is a Car');
    }
}
class Truck extends vehicle{
    run(){
        console.log('This is a Truck');
    }
}


let s1 = new vehicle();
console.log(s1.run());
let s2 = new car();
console.log(s2.run());
let s3 = new Truck();
console.log(s3.run());
