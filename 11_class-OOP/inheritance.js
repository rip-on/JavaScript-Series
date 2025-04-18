class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password =password
    }
    
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Jahid", "jahid@apple.com","1123")

chai.addCourse()//A new course was added by Jahid
console.log(chai);
// Teacher {
//     username: 'Jahid',
//     email: 'jahid@apple.com',
//     password: '1123'
//   }

chai.addCourse()
const masalaChai = new User("Masala Chai")
masalaChai.logMe()//USERNAME is Masala Chai
chai.logMe()//USERNAME is Jahid

console.log(chai === masalaChai);//false
console.log(chai === Teacher);//false
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true
