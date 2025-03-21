const tinderUser = new Object() //singleton

const tinder1 = {} //non-singleton

console.log(tinderUser);//{}
console.log(tinder1);//{}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Jahid",
            lastName: "Hasan"
        }
    }
}
console.log(regularUser.fullName.userfullname.firstName);//Jahid

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

const obj3 = { obj1, obj2}

console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj5 = Object.assign(obj1, obj2)//same as the next one
const obj5 = Object.assign({}, obj1, obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } same as upper one but good practice.
 //{}---> target, and the remaining is source
console.log(obj5);
const objectFin = {...obj1,...obj2,...obj4}//spread operator

console.log(objectFin);



const users = [
    {
        id: 1,
        email: "ripon@intel.com"
    },
    {
        id: 2,
        email: "ripon@deepseek.com"
    },
    {
        id: 3,
        email: "ripon@nvidia.com"
    },
    
]

console.log(users[1].email)//ripon@deepseek.com

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
//we convert a object into an array, now can apply loop over it.
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

console.log(tinderUser.hasOwnProperty('isLogged'))//false
