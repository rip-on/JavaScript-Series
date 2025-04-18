class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    createId(){
        return `123`
    }

}

const ripon = new User("Jahid")
console.log(ripon.createId());//123

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "Im@phone.com")
console.log(iphone.createId());
console.log(iphone.logMe());

