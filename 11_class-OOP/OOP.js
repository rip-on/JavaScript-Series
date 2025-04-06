const user ={
    username: "Mehedi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user deatils from database");
        
    }
}

console.log(user.username);//Mehedi

console.log(user.getUserDetails());//Got user deatils from database

const myUser = {
    name: "Jahid",
    isLoggedOut: true,
    email: "jahid@google.com",

    getMy: function(){
        console.log(this.name);
        console.log(this);//printed the total object
        
        
    }
}
 
console.log(myUser.getMy());//ReferenceError: name is not defined
console.log(myUser.getMy());//to access the outside value of the same object we need to use this

console.log(this);//in global context this gives you {}          

//constructor function gives a new instance

function myUser1(username, loginCount, isLoggedOut){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedOut = false;

    return this
}

const userOne = myUser1("Jahid", 22, true)
const userTwo = myUser1("Hasan", 44, false)// this will overwrite our myUser1 even we not printed

console.log(userOne);
 //to overcome we simply need to use new keyword

 
