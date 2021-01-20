let display = "0";
let operating = false;
let displayBox = document.querySelector('#display')
displayBox.textContent = display;


// OPERATION FUNCTIONS
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    if (operator = "+") {
        return add(x,y);
    } else if (operator = "-") {
        return subtract(x,y);
    } else if (operator = "*") {
        return multiply(x,y);
    } else if (operator = "/") {
        return divide(x,y);
    }
}

// EVENT LISTENERS FOR NUMBER BUTTONS
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    addSelectionToDisplay('1');
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    addSelectionToDisplay('2');
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    addSelectionToDisplay('3');
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    addSelectionToDisplay('4');
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    addSelectionToDisplay('5');
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    addSelectionToDisplay('6');
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    addSelectionToDisplay('7');
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    addSelectionToDisplay('8');
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    addSelectionToDisplay('9');
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    addSelectionToDisplay('0');
});

// EVENT LISTENERS FOR OPERATION BUTTONS
// these don’t work right now. Operating var doesnt work right now. need to make it so that when you *first* start “operating” the display will clear, but with subsequent button presses, the number will build like it did before
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    let operandx = display;
    operating = true;
    let operation = "+";
    //the idea is to alsomake this hightlihgt the chosen button
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    let operandx = display;
    operating = true;
    let operation = "-";
    //the idea is to alsomake this hightlihgt the chosen button
});

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    let operandx = display;
    operating = true;
    let operation = "*";
    //the idea is to alsomake this hightlihgt the chosen button
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    let operandx = display;
    operating = true;
    let operation = "/";
    //the idea is to alsomake this hightlihgt the chosen button
});



//when a number is selected
//Make sure that this is input independent. 
//in other words, make it function based and add event listeners to the function.
//that way you can have event listeners for key presses alter it
//and have clicks alter it
function addSelectionToDisplay(selection) {
    // let displayBox = document.querySelector('#display')
    if (display === "0") {
        display = selection
        displayBox.textContent = display
    } else {
        display = display.concat(selection);
        displayBox.textContent = display;
    }
}
