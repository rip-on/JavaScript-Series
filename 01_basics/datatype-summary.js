const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //false

const bigNumber = 4234372436483439349348n //n indicating bigInt

//Reference (Non Primitive)

//Arrays , Objecs, Functions

const heros = ["superman","spiderman","wanda","doctor strange"];

let myObj = {
    name: "Jahid",
    age: 22,
}
const myFuncton = function() {
    console.log("Hello World");
    
}
// console.log(typeof heros); //object
// console.log(typeof myFuncton); //Object Function/ Function
console.log(typeof myObj); //object


//[To master JS we need to master Objects & Browser events/web events]

//Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
 

//[We don't need to define type eg., const score = 100/false]
// So JS is a dynamic typing language.
//there is a cusine brother of JS which is Typescript, there
// we should define such const score:number = 100
