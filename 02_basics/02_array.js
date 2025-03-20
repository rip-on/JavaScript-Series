const marvel_heros = ["Spiderman", "Ironman", "Thor"];
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//[ 'Spiderman', 'Ironman', 'Thor', [ 'Superman', 'Flash', 'Batman' ] ]

// console.log(marvel_heros[3][1]);//Flash


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);//[ 'Spiderman', 'Ironman', 'Thor', 'Superman', 'Flash', 'Batman' ]


const all_new_heros = [...marvel_heros, ...dc_heros]
//after puting ... it spread into elements
console.log(all_new_heros);//[ 'Spiderman', 'Ironman', 'Thor', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//we may define how much depth it will go for

console.log(real_another_array);


// const three_Array = another_array.flat(1)
// console.log(three_Array);

console.log(Array.isArray("Ripon"));// false Ripon is not an array
console.log(Array.from("Ripon"));//[ 'R', 'i', 'p', 'o', 'n' ]
console.log(Array.from({name: "Ripon"}));//we should define whether we should convert key or value otherwise it will give always an empty string

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));//[ 100, 200, 300 ] it also returns an array




