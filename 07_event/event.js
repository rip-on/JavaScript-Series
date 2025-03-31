function createHelloWorld() {
    const hi = function hello(){
         return console.log("Hello World");
    }
    return hi
}

createHelloWorld()