const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()//it is now connected to below .then                     
    },1000)
})
//.then is directly connected to resolve

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

//directly
          
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then( ()=> {
    console.log('Async 2 resolved');
    
})//Async task 2
//   Async 2 resolved


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Jahid", email: "jahid@example.com"})
    }, 1000);
})

promiseThree.then(function(user){ //here user is a representative value of resolve
    console.log(user.email);
    console.log(user);//{ username: 'Jahid', email: 'jahid@example.com' }  
})//jahid@example.com


//reject handle

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "Mehedi", password: "123"})
        }else{
            reject('Error: Something Went Wrong!')
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("The promise either resolved or rejected")} //The promise either resolved or rejected
);

//if error = false
// { username: 'Mehedi', password: '123' }      
// Mehedi

//if error  = true
//Error: Something Went Wrong!

//finally is always gonna be executed whether problem resolved or rejected


//async await in promise
//same does as .then but it waits for and then proceed
//it is fruitful if we are unable to connect to db then it never proceeds
const promiseFive = new Promise( function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Doctor Stephen Strange", email: "strange@marvel.com"})
        }else{
            reject('Error: Could not find!')
        }
    }, 1000);
});

async function consumePromiseFive(){
    const response = await promiseFive //promise is a object so no need to execute it.
    console.log(response);
    
}

//consumePromiseFive() //{ username: 'Doctor Stephen Strange', email: 'strange@marvel.com' } if error = false

//consumePromiseFive() //This error originated either by throwing inside of an async function without a catch block, if error = true

//To handle the problem gracefully we need to pass this try & catch

const promiseSix = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "Jahid Hasan",email: "jahid@google.com"})
        }else{
            reject("Seems to Unfair")
        }

    }, 1000);
});

async function consumePromiseSix() {
    try {
        const response = await promiseSix
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseSix()