const form = document.querySelector('form');
//if we select height or weight here outside 
//This usercase will give you empty value

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const xtra = document.querySelector('#xtra');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`
        if (bmi >= 18.6 && bmi <= 24.9) {
            xtra.innerHTML = "Healthy Weight"
            console.log(bmi);
            
        }
        else if(bmi < 18.5){
            xtra.innerHTML = "Underweight"
            console.log(bmi);
            
        }
        else if(bmi >= 25 && bmi <= 29.9){
            xtra.innerHTML = "Overweight"
        }
        else if(bmi >= 30 && bmi <= 39.9){
            xtra.innerHTML = "Obese"
        }
        else if(bmi > 40){
            xtra.innerHTML = "Severely Obese"
        }
        else{
            xtra.innerHTML = "Thanks for using"
        }
    }
    
    
})