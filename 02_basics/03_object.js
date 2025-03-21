//singleton

//Object.create -->constructor method where singleton occurs

//object literals

const mySum = Symbol("key1")
const JsUser = {
    name: "Jahid",
    "full name": "Jahid Hasan",
    mySumb: "mykey1",
    [mySum]: "key1",
    age: 22,
    location: "Lakshmipur",
    email: "jahid@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(typeof JsUser.mySumb);//string
console.log(JsUser["mySum"]);
console.log(JsUser["full name"]);//no chance to access via dot as suggestion you got
// console.log(JsUser."full name"];//no chance to access via dot, error will occur


console.log(JsUser[mySum]);
console.log(typeof JsUser[mySum]);//IDK


JsUser.email = "jahid@microsoft.com"//if we want to change;

// Object.freeze(JsUser)//NOT GONNA CHANGE!

JsUser.email = "jahid@amazon.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);//[Function (anonymous)] --> not exucute the function but we got reference;



JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());//Hello JS User, Jahid




