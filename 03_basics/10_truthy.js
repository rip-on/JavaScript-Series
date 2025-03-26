const userEmail = "ripon.ai"

if (userEmail) {
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}
//Got user email

const myMail = ""
if (myMail) {
    console.log("Got my email");
    
}else{
    console.log("Don't have my email");
    
}//Don't have my email

const yourMail = []
if (yourMail) {
    console.log("Got your email");
    
}else{
    console.log("Don't have your email");
    
}
//Got your email

//here we don't check usermail to anything...
//we assume that if something present in te mail variable then it referred to as truthy otherwise false

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', "false", " ", [], {}, function(){} <--empty function

const useEmail = []
if (useEmail.length === 0 ) {
    console.log("Array is empty");
    
}
//Array is empty


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}
//Object is empty

//false == 0
//false == ''
//0 == ''
//all three above statements are true


//Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10;
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20;
console.log(val1);//5
console.log(val2);//10
console.log(val3);//15 
console.log(val4);//10



// Terniary Operator
// if-else like
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
//more than 80