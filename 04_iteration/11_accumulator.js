const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc, currval){
    console.log(`acc: ${acc} and current value: ${currval}`);
    return acc + currval
    
}, 0)
console.log(myTotal)

// acc: 0 and current value: 1
// acc: 1 and current value: 2
// acc: 3 and current value: 3
// 6

const mtotal = myNums.reduce( (accu, curvalue) => accu + curvalue, 0)
console.log(mtotal);//6

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 4999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (accum, item) => accum + item.price, 0)
console.log(priceToPay); //21996
