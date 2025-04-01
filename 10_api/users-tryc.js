async function getAllUsers(){
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //console.log(response);
    const data = await response.json() //it may took time to get response hence await
    console.log(data[4].name);
    
    } catch (error) {
        console.log("Error:", error);
        
    }

}

getAllUsers()//Chelsey Dietrich