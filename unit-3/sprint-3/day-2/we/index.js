// class User{
//     constructor(n){
//         this.organisation = 'Masai'
//     }
//     validateUserName(username){
//         // if(username.includes('#')){
//         //     return false;
//         // }else{
//         //     return true;
//         // }

//         let value =  username.includes('#') ? false : true; // => ternary operator;
//         return value
//     }

//     validatePassword(password){
//        let value =  password.includes('123') ? false : true;
//        return value;
//     }
//     signUp(username,password){
//         let isValidated = false;

//     }
// }
// let x = new Person()
// // console.log(x);


/*
class Stack{
    constructor() {
        this.length = 0;
        this.stack = [];
    }

    push(...el){

        el.forEach((element) => {
            this.stack.push(element);
            this.length++;    
        });
        

        return this.stack;
    }

    remove(){
        let removed_value = this.stack.pop();
        this.length--;
        return removed_value;
    }
}

Stack.prototype.name = 'subham'

let stack1 = new Stack();
stack1.push(1,2,3,4,'subham');
stack1.remove()
stack1.remove()
console.log(stack1);
console.log(stack1.length);
*/

class Queue {
    constructor() {
        this.length = 0;
        this.queue = []
    }
    enqueue(...el) {

        el.forEach((element) => {
            this.queue.push(element);
            this.length++;
        });
        return this.queue;
    }
    dequeue() {
        let removed_value = this.queue.shift();
        this.length--;
        return removed_value;
    }


    enqueueThree(...el) {
        el.forEach((element) => {
            for (let i = 0; i < 3; i++) {
                this.queue.push(element);
                this.length++;
            }
        });
        return this.queue;
    }
    dequeueThree() {
        let removed_value = this.queue.shift();
        removed_value = this.queue.shift();
        removed_value = this.queue.shift();
        this.length--;
        this.length--;
        this.length--;
        return  removed_value;
    }
}

let queue1 = new Queue()
queue1.enqueue(1, 2, 3,4,5)
queue1.dequeueThree()
console.log(queue1);
