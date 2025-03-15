//Two types of memory:
//Stack (Primitive) : We got copy of the declared variable.
//Heap (Non-Primitive) : Reference [What we changes it becomes a part of original one]
let myYoutubename = "jahid@google.com"

let anotherName = myYoutubename

// console.log(anotherName); //jahid@google.com

anotherName = "j.h-ripon"
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "jahid@google.com"

console.log(userOne.email); //jahid@google.com
console.log(userTwo.email); //jahid@google.com


