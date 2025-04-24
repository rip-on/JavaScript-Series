class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
     
    get password(){
        return `${this._password}ripon`
    }
    set password(value){
        this._password = value
    }
}

const jahid = new User('jahid@youtube.com', '123@')
const shipon = new User('shipon@apple.com', 123)

console.log(jahid.email);
console.log(jahid.password);

console.log(shipon);

// JAHID@YOUTUBE.COM
// 123@ripon
// User { _email: 'shipon@apple.com', _password: 123 }

