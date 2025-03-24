function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2));//2
console.log(calculateCartPrice(200, 400, 500));//200


// ... is known as spread operater as well as rest operator


function cartPrice(...num1){
    return num1
}

console.log(cartPrice(200, 400, 500));//[ 200, 400, 500 ]


function cart_Price(val1, val2, ...num1){
    return num1
}

console.log(cart_Price(200, 400, 500, 1000)); //[ 500, 1000 ] // here 200 is taken by val1, 400 is taken by val2, and the rest is taken by num1 as an array


const user = {
    username: "Ripon",
    price: 199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
   
}

handleObject(user)//username is Ripon and price is 199
handleObject(user)//username is Ripon and price is undefined when prices

handleObject({
    username: "Jahid",
    price: 399
})//username is Jahid and price is 399

//passing array in function


const myNewArray = [200, 400, 100, 500]//myNewArray is generic 

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));//400

console.log(returnSecondValue([300, 700, 100, 500]));//700
