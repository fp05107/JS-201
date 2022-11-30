let person1 = {
    name:"Amar",
    skill:"Singer",
    live:"Goa",
    borrowSkill(skill){
        console.log(`${this.name} is a ${skill} and lives in ${this.live}`)
    }
}
let person2 = {
    name:"Akbar",
    skill:"chef",
    live:"Mumbai"
}
let person3 = {
    name:"Anthony",
    skill:"magician",
    live:"Kashmir"
}

person1.borrowSkill.call(person2,person3.skill)
