//JavaScript Execution Context

//{}---> Global Execution Context (this)
//1. Global Execution Context
//2. Function Execution Context
//3. Eval Execution Context

//{} Memory creation phase
//{} Execution phase
 
let val1 = 20
let val2 = 23

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result = addNum(val1, val2)
let result1 = addNum(4,6)

console.log(result);
console.log(result1);

