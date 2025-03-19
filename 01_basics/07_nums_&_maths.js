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
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2));//5 Just a little more than 4
console.log(Math.floor(4.9));//4 
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); //8

console.log(Math.random()); //value from 0 and 1
console.log(Math.random()*10);// shifting value from left to right in 1 digit, 
console.log((Math.random()*10) + 1 );//but what if the value 0.075434, so we add 1 to avoid the case;
console.log(Math.floor(Math.random()*10) + 1 );//but what if the value 0.075434, so we add 1 to avoid the case;
//now we have gurantee that minimum value will be 1 not zero.

min = 10;
max = 20;
console.log(Math.floor(Math.random() * (max-min + 1) + min)) //Should give value from 10 to 20;










