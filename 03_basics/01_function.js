// console.log("R");
// console.log("I");
// console.log("P");
// console.log("O");
// console.log("N");

//We write some code and use it like a packge whenever we need it.
//function ---> keyword
//sayMyName --> name
//()----------> syntax
function sayMyName(){         
    console.log("R");
    console.log("I");
    console.log("I");
    console.log("P");
    console.log("O");
    console.log("N");
}
//sayMyName here is the reference
//()====> execution
sayMyName // no output
sayMyName()

function addTwoNumbers(number1, number2){ //number1 & number2 are parameter
    console.log(number1 + number2);
}


// addTwoNumbers()//NaN
addTwoNumbers(3, 4)//7 here, 3 & 4 are argument
addTwoNumbers(3, "4")//34
addTwoNumbers(3, "a")//3a
addTwoNumbers(3, null)//3


const result = addTwoNumbers(3, 5)
console.log("Result: ", result);//Result:  undefined
console.log(result);//undefined


//return
function addingNumber(num1, num2){
    let result = num1+num2;
    return result
    console.log("Jahid");//no code execution after return statement, unreachable code

    
}

const sum = addingNumber(3, 9)
console.log("Result: ", sum);



function sumNum(num1, num2){
    console.log("Jahid");
    return num1 + num2
}

const res = sumNum(6,7)// we can only store number in a variable after returning the value;
console.log(res);



function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Jahid"));//Jahid just logged in
console.log(loginUserMessage(""))// just logged in
console.log(loginUserMessage());//undefined just logged in (interview)




function loginMessage(username){ // for default value (username = "Sam")
    if(username === undefined){ //or simply (!username)
        console.log("Please enter a username");
        return//this statement prevent the later execution
    }
    return `${username} just logged in`//that means this line will not execute

}


console.log(loginMessage());

//!username is equivalent to  username === undefined
 
function greetings(username = "Olsen"){
    //now don't need to check undefined via if statement because username value can't be undefined, the minimum value will be "Sam"
    return `${username} just logged in`
}

console.log(greetings());//Olsen just logged in
console.log(greetings("Jahid"));


