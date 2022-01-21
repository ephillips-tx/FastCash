//get values from page
//start or controller function
function getValues(){
    // get values from page 
    // - let means that startVal is "block scoped" which allows us to 
    //   reuse variable names in other code blocks. This is an especially 
    //   wise practice if you plan to bring in libraries which could 
    //   contain the same variable names.
    let startVal = document.getElementById("startValue").value;
    let endVal = document.getElementById("endValue").value;

    // validate input by parsing to integer
    startVal = parseInt(startVal);
    endVal = parseInt(endVal);

    if(Number.isInteger(startVal) && Number.isInteger(endVal)){
        if(startVal >=0 && endVal >= 1){
            if(startVal <= endVal){
                //call generateNumbers
                let numbers = generateNumbers(startVal, endVal);
                //call displayNumbers
                displayNumbers(numbers);
            } else {
                alert("Error code 1001: The starting value must be less than the ending value.");
            }
        } else {
            alert("Error code 1002: You enterted a negative value.");
        }
    } else {
        alert("Error code 1003: You must enter integers.");
    }
}

//generate numbers from startValue to endValue
//logic function(s)
function generateNumbers(sVal, eVal){
    let numbers = [];

    //get all numbers from start to end
    for(let i = sVal; i <= eVal; i++){
        //this will execute in a loop until i = eVal
        numbers.push(i);
    }
    
    return numbers;
}

//display numbers. Mark even numbers bold
//display or view function
function displayNumbers(numbers){
    let templateRows = "";
    let className = "even";

    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="text-center ${className}">$ ${number}.00</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}