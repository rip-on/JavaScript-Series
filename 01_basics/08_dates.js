let myDate = new Date()
console.log(myDate);//2025-03-19T02:58:36.957Z
console.log(typeof myDate);//object

console.log(myDate.toString());//Wed Mar 19 2025 09:00:25 GMT+0600 (Bangladesh Standard Time)

console.log(myDate.toLocaleString());//3/19/2025, 9:00:25 AM

console.log(myDate.toISOString());//2025-03-19T03:00:25.486Z

console.log(myDate.toTimeString());//09:00:25 GMT+0600 (Bangladesh Standard Time)

console.log(myDate.getTime());//1742353225486

console.log(myDate.toJSON());//2025-03-19T03:00:25.486Z

console.log(myDate.toDateString());//Wed Mar 19 2025

let myCreatedDate = new Date(2024, 0 , 12)
console.log(myCreatedDate.toDateString());//Fri Jan 12 2024 (January starts with 0)

let CreatedOne = new Date(2024,0, 24,5,12)
console.log(CreatedOne.toLocaleDateString());//24/01/2024

let anotherDate = new Date("2014-01-25")//YY-MM-DD
console.log(anotherDate.toLocaleString());//1/25/2014, 6:00:00 AM (01--incating January as it isn't array)

let dates = new Date("01-14-2023")//indian standard (MM-DD-YY)
console.log(dates.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let myTime = Date.now()
console.log(Math.floor(myTime/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());//2025
console.log(newDate.getDay());//3 ***Starting from Monday = 1
console.log(newDate.getMonth())//2 (March as starting from 0 counting January)
console.log(newDate.getMonth()+1);//3 as it is March for not confusing with clients or interacting people.


newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: "AM"
})


 

