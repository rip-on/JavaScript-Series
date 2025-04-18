let myName = "Jahid     "

// console.log(myName.length)//10
// console.log(myName.trueLength);//undefined
// console.log(myName.trim().length);//5 `low IQ`


let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.jahid = function(){
    console.log(`Jahid is present in all object`);
    
}

heroPower.jahid()//Jahid is present in all object
//we access the top level hirarchy and add new property and set new)
myHeros.jahid()


Array.prototype.heyJahid = function(){
    console.log(`Jahid says Hello`);
}

myHeros.heyJahid()//Jahid says Hello
//heroPower.heyJahid()//not accessable


//INHERTANCE

const User = {
    name: "Coffee",
    email: "coffee@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User //teacher can access all info from User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Chai or Coffee  "

String.prototype.trueLength = function(){
    console.log(`${this}`);//Chai or Coffee
    console.log(`${this.name}`);//undefined
    console.log(`True length is: ${this.trim().length}`);//True length is: 14
}

anotherUsername.trueLength()
"Jahid".trueLength()
// Jahid
// undefined
// True length is: 5
"RIPON".trueLength()

//je dakbe shei this
