const score = 400
console.log(score);//400

const balance = new Number(100)
console.log(balance);//[Number: 100]

console.log(balance.toString());//string
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));//23.9

const otNum = 123.8966

console.log(otNum.toPrecision(3));//124

const otheNum = 1123.8966

console.log(otheNum.toPrecision(3));//1.12e+3

const othNum = 123.8966

console.log(othNum.toPrecision(4));//123.9

const hundreds = 1000000

console.log(hundreds.toLocaleString());//1,000,000 US-Standard
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 Indian Standard
console.log(hundreds.toLocaleString('en-BD'));//1,000,000 Bangladeshi Standard('bn-BD')

//+++++++++++++++++++++++ Math ++++++++++++++++++++
//156523475;

console.log(Math)





