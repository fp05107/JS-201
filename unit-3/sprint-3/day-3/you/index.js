// console.log('hello');
let arr = [];
class User {
    #password
    constructor() {
        this.organisation = 'Masai'
    }
    #validateUserName(username) {
        let value = username.includes("@") ? false : true;
        return value;
    }
    #validatePassword(password) {
        let value = password.includes("123") ? false : true;
        return value;
    }
    signUp(username, password) {
        let isValidated = this.#validateUserName(username) && this.#validatePassword(password);
        if (isValidated) {
            this.username = username;
            this.#password = password;
            console.log("User Registered successfully")
            arr.push(this)
        }
        else {
            console.log('Please Enter The Correct Details');
        }
    }
    login(username, password) {
        if (username == this.username && password == this.#password) {
            console.log('login successfully');
        } else {
            console.log('authentication failed');
        }
    }
}
// let x = new User();
// x.signUp('subham','subhampass')
// console.log(arr)
// console.log(x);

class Students extends User {
    constructor() {
        super();
        this.numofAssignments = 0;
    }
    submitAssignment() {
        this.numofAssignments++;
        console.log('%cAccepted', 'color:green');
    }
}
// let s1 = new Students();
// s1.submitAssignment()
class Admin extends User {
    constructor() {
        super();

    }
    removeuser(username) {

        arr = arr.filter((element) => {

            return element.username != username;
        })
    }
}