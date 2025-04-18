//ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email =  email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}amar`
    }
    
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Reepon", "ripon@alphabet.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//Behind the scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User1.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const coffee = new User1("coffee", "coffee@deepseek.com", "123")

console.log(coffee.encryptPassword());
console.log(coffee.changeUserName());



