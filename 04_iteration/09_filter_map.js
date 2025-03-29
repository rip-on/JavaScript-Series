const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    
})

console.log(values); //undefined 
//this means forEach doesn't return anything

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

//[ 5, 6, 7, 8, 9, 10 ]
const nums = myNums.filter( (n) => {
        n > 4    
})

console.log(nums);//[]

//to overcome this problem we (already discussed in arrow.js in basics-3) need to mention return keyword
//so if we use scope then we must need to use return keyword


const num = myNums.filter( (nu) => {
    return nu > 5
})

console.log(num);
//[ 6, 7, 8, 9, 10 ]

const neNums = []
myNums.forEach( (ite) => {
    if(ite > 3){
        neNums.push(ite)
    }
}) 

console.log(neNums);
// [
//     4, 5,  6, 7,
//     8, 9, 10
//   ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => bk.genre === 'Science')
console.log(userBooks);

// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]

//to overwrite this userbooks we need to remove const keyword

let userBk = books.filter( (bks) => {return bks.publish >= 2000})
console.log(userBk);
    //[
    // {
    //     title: 'Book Five',
    //     genre: 'Science',
    //     publish: 2009,
    //     edition: 2014
    //   },
    //   {
    //     title: 'Book Eight',
    //     genre: 'Science',
    //     publish: 2011,
    //     edition: 2016
    //   }
    // ]

const userBks = books.filter( (b) => {
    return b.publish >= 1995 && b.genre === 'History'
})

console.log(userBks);

// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]