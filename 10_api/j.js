const promiseSix = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Jahid Hasan",email: "jahid@google.com"})
        }else{
            reject("Seems to Unfair")
        }

    }, 1000);
});

async function consumePromiseSix() {
    try {
        const response = await promiseSix
        console.log(response.email);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseSix()
//jahid@google.com