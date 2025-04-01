//random color generator

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6 ; i++){
        color +=hex[Math.floor(Math.random() * 16)];
        
    }
    return color;
   
};

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

console.log(randomColor());

let intervalId;
const startColorChanging = function(){
    if(!intervalId){
        intervalId = setInterval( () =>{
            let newColor = randomColor(); //Generate 1 color
            document.body.style.backgroundColor = newColor;
            h2.textContent = newColor;
        }, 1000);      
    
    }
    else{
    h3.innerHTML = "Color Failed Successfully"
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
    h3.textContent = '';
};
// const starting = function(){
   
// };
// const stopping = function(){
   
// };

document.querySelector('#start').addEventListener('click', startColorChanging);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
// document.querySelector('#start').addEventListener('click', starting);
// document.querySelector('#stop').addEventListener('click',stopping);

