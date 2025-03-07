const accountId = 144559
let accountEmail = "jahid@google.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState; // Semicolon wish
//accountId = 2 // Not allowed

accountEmail = "jahid@rip.com"
accountPassword = "212121"
accountCity = "Bengaluru"  // we can use a variable without declaring it but it isn't not recommended.

console.log(accountId);
console.table([accountId,accountState,accountEmail,accountPassword,accountCity])


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/