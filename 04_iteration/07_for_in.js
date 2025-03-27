//for in mainly for object but there are few uses..

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(key);
   
}
//js
// cpp
// rb
// swift

const myObject1 = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject1) {
   console.log(myObject1[key]);
   
}
// Javascript
// C++
// ruby
// swift by apple

for (const key in myObject1) {
    console.log(`${key} shortcut is for ${myObject1[key]}`);
}
// js shortcut is for Javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//for in in array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(key);
   
}
// 0
// 1
// 2
// 3
// 4

const programming1 = ["js", "rb", "py", "java", "cpp"]

for (const key in programming1) {
   console.log(programming1[key]);
   
}

// js
// rb
// py
// java
// cpp

const map = new Map()
map.set('IN', "India")
map.set('BN',"Bangladesh")
map.set('USA', "United States of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
    
}

//no output because map is not iterable
//iteration is not applicable for map
