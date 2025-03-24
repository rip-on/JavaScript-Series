function one(){
    const username = "Jahid"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

one()

//A child can take icecream from a man, but a man can't
//line by line execution occurs

if(true){
    const username = "Hasan"
    if(username === "Hasan"){
        const website = " Youtube"
        console.log(username + website);
        
    }
    // console.log(website);//ReferenceError: website is not defined because outside of scope
    
}
// console.log(username);//ReferenceError: username is not defined [same outside of the scope]


// +++++++ INTERESTING ++++++++++

//we can access function before declaration 
//but when we store it in a variable then we can't do that
console.log(addone(5)); //6 

function addone(num){
    return num + 1
}



addtwo(5)//ReferenceError: Cannot access 'addtwo' before initialization

const addtwo = function addtwo(num) { //often referred as expression [variable can hold anything e.g., json]

    return num + 2
}