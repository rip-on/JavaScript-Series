//To define string we can use single or double qoutation

const name = "jahid"
const repoCount = 50 

// console.log(name + repoCount + " value"); //outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// string interpolation by using backtick (placeholders) (modern)

const gameName = new String('jhripon')//another method to define a string

// console.log(gameName[0]);//string is an object not arrow
// console.log(gameName.__proto__); //{}
// console.log(typeof gameName); //0bject

// console.log(gameName.length);//7
// console.log(gameName.toUpperCase());//JHRIPON
// console.log(gameName.charAt(2));//r
// console.log(gameName.indexOf('i'));//3

const newString = gameName.substring(0,4) // 4 excluded (We can use negative value but the don't obey they wil start from 0)
console.log(newString);//jhri

const anotherString = gameName.slice(-6,4) // we can use negative value in slice
console.log(anotherString);

//trim (remove starting & end space)
const newStringOne = "     hasan     "
console.log(newStringOne);
console.log(newStringOne.trim());//hasan//better for storing in a database;

const url = "https://ripon.com/ripon%20hasan"

// console.log(url.replace('%20','-'));

console.log(url.includes('ripon'))//true
console.log(url.includes('sundar'))//false

const myName = new String('ripon-rip-com');//split convert into array

console.log(myName.split('-'));






