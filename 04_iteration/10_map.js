//map automatic return values

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (n) => n + 10)
console.log(newNums);

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

//chaining
//using of .map .map /.map .filter together
//2nd iteration will work on first one

const nums = myNumbers
                .map( (nu) => nu * 10)
                .map( (nu) => nu + 1)
                .filter( (nu) => nu > 40)
console.log(nums);

// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ] // result of 2nd map

// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]   //result after using filter

