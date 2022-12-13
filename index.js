// get the display text box by id and assign it to a variable called display
let display = document.getElementById('display');


// from() method creates a new array from an array-like or iterable object
let buttons = Array.from(document.getElementsByClassName('button'));
// so we have an array of buttons and we can use the array map method to loop through the array and add an event listener to each button
buttons.map( button => {
    button.addEventListener('click', (e) => {
        // the switch statement is used to perform different actions based on different conditions in our case we are checking the value of the button
        switch(e.target.innerText){
            // if the button value is equal to C then we clear the display
            case 'C':
                display.innerText = '';
                // 
                break;
            // if the button value is equal to = then we evaluate the display
            case '=':
                // eval() function evaluates or executes an argument. If the argument is an expression
                try{
                    // we use the eval function to evaluate the display
                    display.innerText = eval(display.innerText);
                } catch {
                    // if the display is empty then we display an error message
                    display.innerText = "Error"
                }
                // if the button value is equal to any other value then we append the value to the display
                break;
                // we use the default case to append the value to the display
            case '←':
                
                if (display.innerText){
                    // this method does not alter the original array, but returns a new array. for our case we are removing the last character from the display
                   display.innerText = display.innerText.slice(0, -1);
                }
                 /
                break;
                // we use the default case to append the value to the display
            default:
                display.innerText += e.target.innerText;
        }
    });
});