 //to overcome we simply need to use new keyword


function user(username, loginCount, email, isLoggedIn){
    this.user = username;
    this.loginC = loginCount;
    this.em = email
    this.isLog = isLoggedIn;

    return this
}

const userOne = new user("Jahid", 12, "jahid@microsoft.com", true);
const userTwo = new user("Hasan", 13, "hasan@amazon.com", false);
const userThree = new user("Ripon", 14, "ripon@openai.com", true);

console.log(userOne);
console.log(userTwo);
console.log(userThree);

//return this is not mandatory
