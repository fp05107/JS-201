var nums = [1,6,7,8,9];
var out = nums.map((e,i)=>{
	return i%2 == 0;
})
//console.log(out)

function sum(a,b){
	var c = 10;
	var d = 20;
	return a+b+c;	
}
//console.log(c)
//console.log(d)

var arr = [1,2,3,4,5];
var newArr = arr.forEach((el) =>{
	return el*6;
})
//console.log(newArr)

var arr2 = [0,0,0,0];
//console.log(arr2.filter((el) =>{
//	return el;
//}))

var fun1 = function fun2(){
	console.log("clg")
}
fun1();
fun2();