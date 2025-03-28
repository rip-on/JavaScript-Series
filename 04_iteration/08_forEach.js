//callback function don't have a name

const codings = ["js", "ruby", "java", "python", "cpp"]

codings.forEach( function (val){
    console.log(val);
    
})

//here val represents every element in the coding
//so it is arbitary

// js
// ruby
// java
// python
// cpp

//another way by arrow function

const code = ["js", "ruby", "java", "python", "cpp"]

code.forEach((item) => {
    console.log(item);
    
})

// js
// ruby
// java
// python
// cpp

function printMe(item) {
    console.log(item);
    
}

code.forEach(printMe) //just to give the reference
//not the parenthesis**
// js
// ruby
// java
// python
// cpp

//it may contain multiple parameter e.g., item, index, arr

code.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ] 
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"

    },
    {
        languageName: "Java",
        languageFileName: "java"

    },
    {
        languageName: "Python",
        languageFileName: "py"

    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})

// JavaScript
// Java
// Python

//This is how we can extract value from an array and which contain many object and we also can access the object values
