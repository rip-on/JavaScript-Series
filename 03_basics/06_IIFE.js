//Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }

// chai()//DB CONNECTED


(function one(){
    console.log(`MY DB CONNECTED`);
    
})();

// OUTPUT : MY DB CONNECTED

//IDK independently they work but together they don't.

//Why IIFE?
//Global scope er pollution dur korar jonno
//()()
//In the first parenthesis we wrap the function and the second parenthesis means execution

//Look here the IIFE function invoked but it not stopped so the following error occurs
//To end the IIFE function we need to add semicolon at the end;
( () => {
    console.log(`DB CONNECTED TWO`);
    
} )();

//Named IIFE
( function code(){
    console.log(`MY BD CONNECTED TWO`);
    
})();

//Passing an argument to my DB
//Unamed IIFE
( (name)=> {
    console.log(`${name} connected to my database`);
    
})("Mehedi")


