class vehicle{
    constructor(type,regNumber){
        this.type = type;
        this.regNumber = regNumber

    }
}

class Car extends vehicle{
    constructor(type,regNumber){
        super(type,regNumber)
    }
}
// let c1 = new Car('car',567);
// console.log(c1);

class Bike extends vehicle{
    constructor(type,regNumber){
        super(type,regNumber)
    }
}

class Truck extends vehicle{
    constructor(type,regNumber){
        super(type,regNumber)
    }
}

class Slot{
    #isBooked;
    constructor(number,type){
        this.number = number;
        this.type = type;
        this.#isBooked = false;//we need to change based on booking
    }

    get _isBooked(){
        return this.#isBooked
    }
    set _isBooked(bool){
        this.#isBooked = bool;

    }
}
// let s1 = new Slot();
// s1._isBooked = true;
// console.log(s1._isBooked);

// each parking floor has 3 slot
class ParkingFloor{
    constructor(floornumber,maxSlots){
        this.floornumber = floornumber;
        this.parkingSpots = [];
        for(let i=0;i<maxSlots;i++){
            if(i==0){
                this.parkingSpots.push(new Slot(i,'Truck'))
            }else if(i==1){
                this.parkingSpots.push(new Slot(i,'Bike'))
            
            }else{
                this.parkingSpots.push(new Slot(i,'Car'))
            }
        }
    }
    
}
// let pf  = new ParkingFloor(1,3);
// console.log(pf);

class ParkingLot{
    constructor(numberofFloors){
        this.numberofFloors = numberofFloors;
        this.floors = [];
        for(let i=0;i<numberofFloors;i++){
            this.floors.push(new ParkingFloor(i,numberofFloors))
        }
      
    }
    findSlot(type){
            for(let i=0;i<this.numberofFloors;i++){
                for(let slot of this.floors[i].parkingSpots){
                    if(slot.type == type && !slot._isBooked){
                        return{floornumber:i,slot:slot}
                    }
                }
            }
    }
    parkVehicle(vehicle){
        
    }

}
let pl = new  ParkingLot(3)
console.log(pl);