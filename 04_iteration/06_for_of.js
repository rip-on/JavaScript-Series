// ["","",""]
// [{}, {}, {}]


//for of

//for of in array 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}
// 1
// 2
// 3
// 4
// 5

//for of in string

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
    
}
// H
// e
// l
// l
// o

// W
// o
// r
// l
// d
// !

//Maps

const map = new Map()
map.set('IN', "India")
map.set('BN',"Bangladesh")
map.set('USA', "United States of America")
map.set('Fr',"France")

console.log(map);

// Map(4) {
//     'IN' => 'India',
//     'BN' => 'Bangladesh',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }


//for of in map

for (const key of map) {
    console.log(key);
    
}
// [ 'IN', 'India' ]
// [ 'BN', 'Bangladesh' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

//to overcome this..
//for destructuring

for (const [key, value] of map) {
    console.log(key,':-', value);
    
}

// IN :- India
// BN :- Bangladesh
// USA :- United States of America
// Fr :- France

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}

//TypeError: myObject is not iterable

const myObject1 = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject1) {
    console.log(key, ':-', value);
    
}

//TypeError: myObject is not iterable