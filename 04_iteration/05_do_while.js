let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5
// Score is 6
// Score is 7
// Score is 8
// Score is 9
// Score is 10

// do while first do work and then check condition

let myScore = 11

do{
    console.log(`My score is: ${myScore}`);
    myScore++
}while(myScore <= 10)

//My score is: 11
//for e.g., firstly myScore 11 said you can take money then you can return but when the condtion checks then eventually we came to know that I have no money.
// in few cases we may have to run at least one time