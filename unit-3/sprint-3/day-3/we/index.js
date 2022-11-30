
let arr = []
class User{
    #password
    constructor(){
        this.organisation = 'Masai'
    }
    #validateUserName(username){
        let value = username.includes("@") ? false : true;
        return value;
    }
    #validatePassword(password){
        let value = password.includes('123') ? false : true;
        return value;
    }
    signup(username,password){
        let isValidated =  false;
        isValidated = this.#validateUserName(username) && this.#validatePassword(password);

        if(isValidated){
            this.username = username;
            this.#password = password;
            console.log("User Registered successfully")
            arr.push(this)
            
        }
        else{
            console.log('Please Enter The Correct Details');
        }
    }
    login(username,password){
        if(username==this.username && password==this.#password){
            console.log('login successfully');
        }else{
            console.log('authentication failed');
        }
    }
}
let u1 = new User()
console.log(arr);
// // console.log(u1);
// u1.signup("subhaam",'13subham')
// u1.login("subhaam",'13subham')
// console.log(u1.password);
class Student extends User{
    constructor(){
        super();
        this.numofAssignments = 0;
        this.usertype = "Student"
    }
    submitAssignment(){
        this.numofAssignments++;
        console.log('%cAccepted','color:green');
    }
}
// let s1 = new Student();
// let s2 = new Student();
// s1.signup('rutu','rutupass')
// s1.login('rutu','rutupass')
// s2.signup('rutu2','rutupass2')
// s2.login('rutu2','rutupass2')
// s1.submitAssignment()
// s1.submitAssignment()
// console.log(s1.numofAssignments);
class Admin extends User{
    constructor(){
        super();
        this.usertype = "Admin"
    }

    removeuser(username){

        arr = arr.filter((element)=>{

            // return element.username!=username;
            if(element.username!=username){
                return true;
            }else{
                return false;
            }
        })
    }
    addAssignments(assname){
        this.assignment = assname;
    }
    addLectures(lecturename){
        this.lecturename = lecturename;
    }
}
// let admin = new Admin();
// admin.signup("johny","johnypass")
// admin.login("johny","johnypass")

// admin.removeuser('johny')
// console.log(arr);

function signUp(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let s1 = new Student();
    s1.signup(username,password)
    localStorage.setItem("userdata",JSON.stringify(arr))
    console.log(arr);
}
function signUpAdmin(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let s1 = new Admin();
    s1.signup(username,password)
    // console.log(arr[0].password);
    localStorage.setItem("userdata",JSON.stringify(arr))
    console.log(arr);
}

document.getElementById("gotouser").addEventListener("click",function(){
    window.location.href = 'user.html'
})
document.getElementById("gotoass").addEventListener("click",function(){
    window.location.href = 'assignment.html'
})
document.getElementById("gotolec").addEventListener("click",function(){
    window.location.href = 'lectures.html'
})