
/*=====Reduce====*/

const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((acc, current) => acc + current, 0);
//console.log(sum); 

/*======filter=======*/

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(num => num % 2 == 0);
//console.log(evenNumbers);

/*======map=======*/

let number3 = [1, 2, 3, 4, 5];
let mappedNumbers = number3.map(e => e = e+10);
//console.log(mappedNumbers);

/*=======forEach======= */

let number4 = [1,2,3,4,5];
let number5 = [];
let sum2 = 0;
number4.forEach(function(el,i){
	number5.push(el);
	
});
console.log(sum2);
