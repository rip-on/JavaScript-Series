const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(buttons); //nodelist(4)
//we can access forEach for nodelist

buttons.forEach( function(b){
    // console.log(b); //<span class="button" id="grey"></span> //like 4
    b.addEventListener('click', function(e) {
        // console.log(e); //target : span#grey.button
        // console.log(e.target); //<span>..</span>
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'skyblue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'aqua') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'peru') {
            body.style.backgroundColor = e.target.id
        }
        
        
    });
});
