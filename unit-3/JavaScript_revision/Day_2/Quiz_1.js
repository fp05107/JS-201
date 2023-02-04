//console.log(`${calling} Nrupul`);

let calling = true;

var a = 10;
{
	var a = 20;
}

function Car(name,price){
	this.name = name;
	this.price = price;
}

function Truck(){
	Car.call(this,"volvo","12lac");
	this.fuel = "diesel";
}

//console.log(new Truck().name);

let arr = [];
for(let i=0;i<5;i++){
	arr.push(() =>{
		console.log(i);
	})
}
//console.log(arr)
//arr.forEach((el) =>el());


const sum = new Function('a','b','return a+b');
//console.log(sum(2,6))



let str = "masai"
let arr2 = [...str];
console.log(arr2)
















