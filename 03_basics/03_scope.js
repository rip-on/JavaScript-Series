// let a = 10
// const b = 20
var c = 30//Global scope

// console.table([a,b,c])


if(true){ // true means we must go through the if statement
    let a = 10
    const b = 20
    var c = 300
    d = 40
}// what is written inside the block code is known as block scope

// console.log(a);//ReferenceError: a is not defined because the scope of a is only bounded by the if statement
// console.log(b);// same goes for b which is good and which should be
console.log(c);// 300 but problem in occurs in var
console.log(d);//40

//Global scope is available in a block but block scope variable is not should be available for global variable


let x = 30
if(true){
    let x = 200
    console.log("INNER: ", x);//INNER:  200       
}

console.log(x);//30


//{}---> Scope
