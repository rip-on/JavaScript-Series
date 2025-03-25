const user = {
    username: "Ripon",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);//here this keyword referrs to only this scope or context to the user block
        // console.log(this);
        
    }
}
user.welcomeMessage()//Ripon , welcome to website
user.username = "Sam"
user.welcomeMessage()//Sam , welcome to website
//this refers to current context

console.log(this);//{}


//the object present in browser is known as window object


function chai(){
    console.log(this);
    
}

chai()

function tea(){
    let username = "Jahid"
    console.log(this.username);
    
}

tea()//undefined

const cha = function (){
    let username = "Ripon"
    console.log(this.username);
    
}
cha()//undefined

//++++++++++Arrow Function+++++++++++

const coffee = () => {
    let username = "Jahid"
    console.log(this.username);
    console.log(this);//{}
    
}

coffee()//undefined


//()={}

const addTwo = (num1, num2)=>{
    return num1+num2
}

console.log(addTwo(2,6));//8


//or
const adtwo = (num1, num2)=> num1+ num2//another method
//othoba
const adto = (num1, num2) => (num1 + num2)

console.log(adto(6,7));//13

console.log(adtwo(4,7));//11

//if we use curly braces then we must need to use return keyword (explicite)
//but if we use parenthesis we don't need to use return keyword (implicite)

const atwo = (num1, num2) => {username: "jahid"}

console.log(atwo(4, 3));//undefined because to return a object we need to use parenthesis

const at = (num1, num2) => ({username: "ripon"})
console.log(at(4,6));//{ username: 'ripon' }


