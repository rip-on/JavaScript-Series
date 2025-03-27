//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//first initializing
//after checking the second value which is condition check then it jumps to the inside of the loop when the loop is done then it increases the indexing which is index ++
//

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
    
}
//0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}
//ctrl + D ---> for duplicate

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best");
        
    }
    console.log(element);
    
}
// 0
// 1
// 2
// 3
// 4
// 5 is the best
// 5
// 6
// 7
// 8
// 9
// 10

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 5; j++) {
    console.log(`Outer loop value ${j} and inner loop ${i}`);
            
    }
    
}
// Outer loop value: 0
// Outer loop value 0 and inner loop 0
// Outer loop value 1 and inner loop 0
// Outer loop value 2 and inner loop 0
// Outer loop value 3 and inner loop 0
// Outer loop value 4 and inner loop 0
// Outer loop value 5 and inner loop 0
// Outer loop value: 1
// Outer loop value 0 and inner loop 1
// Outer loop value 1 and inner loop 1
// Outer loop value 2 and inner loop 1
// Outer loop value 3 and inner loop 1
// Outer loop value 4 and inner loop 1
// Outer loop value 5 and inner loop 1
// Outer loop value: 2
// Outer loop value 0 and inner loop 2
// Outer loop value 1 and inner loop 2
// Outer loop value 2 and inner loop 2
// Outer loop value 3 and inner loop 2
// Outer loop value 4 and inner loop 2
// Outer loop value 5 and inner loop 2
// Outer loop value: 3
// Outer loop value 0 and inner loop 3
// Outer loop value 1 and inner loop 3
// Outer loop value 2 and inner loop 3
// Outer loop value 3 and inner loop 3
// Outer loop value 4 and inner loop 3
// Outer loop value 5 and inner loop 3
// Outer loop value: 4
// Outer loop value 0 and inner loop 4
// Outer loop value 1 and inner loop 4
// Outer loop value 2 and inner loop 4
// Outer loop value 3 and inner loop 4
// Outer loop value 4 and inner loop 4
// Outer loop value 5 and inner loop 4
// Outer loop value: 5
// Outer loop value 0 and inner loop 5
// Outer loop value 1 and inner loop 5
// Outer loop value 2 and inner loop 5
// Outer loop value 3 and inner loop 5
// Outer loop value 4 and inner loop 5
// Outer loop value 5 and inner loop 5