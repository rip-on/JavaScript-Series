//Sometimes we don't want to execute all code we have written
//<, >, <=, >=, ==, !=, ===, !==

// === checks value as well as type

const temperature = 41

if(temperature == 41){
    console.log("less than 50");
    
}else{
    console.log("temperature is greater than 50");
    
}
//less than 50

const score = 300

if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`);
    
}//User power: fly

// console.log(`User power: ${power}`);//can't to that because the scope of power is confined only if statement; outside it is not defined
//but if we use var than we can access it

// *********the scope of var is global

//implicite scope means we assume
//and here we can write code without any curly braces

const balance = 1000

if(balance > 500) console.log("test");//test
//semicolon means end
//we can write multiple code by adding , betwenn

const myScore = 400
if(myScore > 200) console.log("High Score"),
console.log("Best wishes!");
//but this is too much unreadable code!

if (balance < 500) {
    console.log("less than 500");
    
}else if(balance < 750){
    console.log("less than 700");
}else if(balance < 900){
    console.log("less than 900");

}else{
    console.log("less than 1200");
    
}//less than 1200

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to purchase course");
    
}//Allow to purchase course
//but if one statement is wrong the message will not show up

const loggedInFromGoogle = true
const loggedInFromEmail = false

if(loggedInFromEmail || loggedInFromGoogle){ //only one condition needs to be true we can check multiple conditions
    console.log("User Logged in")
}
//User Logged in