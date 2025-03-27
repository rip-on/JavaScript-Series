let myArray = ["flash", "superman", "batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
        
}
// flash
// superman
// batman

// console.log(myArray.length);//3


//if we don't increase the index then it will run the first index value forever

//Break & Continue
//Not necessarily we need to print all the data from the loop

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break
    }
    console.log(index);
        
}
// 1
// 2
// 3
// 4
// Detected 5

//continue
//means let forgive one time (ek bar maaf kar do)

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }    
    console.log(`Value of i is: ${index}`);
    
}
// Value of i is: 1
// Value of i is: 2
// Value of i is: 3
// Value of i is: 4
// Detected 5
// Value of i is: 6
// Value of i is: 7
// Value of i is: 8
// Value of i is: 9
// Value of i is: 10
// Value of i is: 11
// Value of i is: 12
// Value of i is: 13
// Value of i is: 14
// Value of i is: 15
// Value of i is: 16
// Value of i is: 17
// Value of i is: 18
// Value of i is: 19
// Value of i is: 20

//here the value of 5 was not print