//Array 
// ()---> Parenthesis /round brackets
// []---> Square bracket 
// {}---> Braces / curly brackets
// array can contain different data types & resizable.
const myArr = [0, 1, 2, 3, 4, 5, true, "ripon"]//each component of the array know as element

const myHeros = ["Spiderman","Superman","Wanda","Doctor Strange"]

const myArr2 = new Array(1,2,3,4)//another method to define array

console.log(myArr[6]);//true

console.log(myArr2);//[ 1, 2, 3, 4 ]

//Array Methods

myArr.push(6)//adding 6 to the array
myArr.push(7)
console.log(myArr);

myArr.pop()//no argument, it only removes the last one;
console.log(myArr);

myArr.unshift(9)//adding 9 to first position
myArr.unshift(10)
console.log(myArr);

myArr.shift()//removes the first element
console.log(myArr);

console.log(myArr.includes(8));//false
console.log(myArr.indexOf(8));// -1 (it's not possible & that indexing indicates this)
console.log(myArr.indexOf(18));// -1

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);//string (.join converts array into string)


//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)//3rd value excluded

console.log(myArr);//[ 9, 0, 1, 2, 3, 4, 5, true, 'ripon', 6 ]
console.log("B", myArr);
console.log(myn1);//[ 0, 1 ]

const myn2 = myArr.splice(1,3);//it cuts the original array,
console.log("C", myArr);
console.log(myn2);//[ 0, 1, 2 ]

console.log(myArr);//[ 9, 3, 4, 5, true, 'ripon', 6 ]






