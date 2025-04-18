function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const tea = new createUser("Chai", "chai@fb.com", "123")
console.log(tea);

//window = {this = window}
//node = {}

