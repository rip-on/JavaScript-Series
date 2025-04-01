//No need to call in then method
//second then handle the value of first then
//respons & data are variable we can replace them by any name
//catch only works if there is a error

fetch('https://jsonplaceholder.typicode.com/users').then(function(resp){
    return resp.json()
}).then((dat) => {
    console.log(dat);
    
}).catch( (error) => console.log(error)
)
