const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


const chai = {
    name: 'Ginger Tea',
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log("Tea isn't ready")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// {
//     value: 'Ginger Tea',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

// price : 250
// isAvailable : true

