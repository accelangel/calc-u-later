//Assign variables to number button elements 
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

//Assign variables to operation button elements
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');
const sumButton = document.getElementById('sum');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');

//Assign variables to display elements 
const equationDisplay = document.getElementById('equationDisplay');
const workingDisplay = document.getElementById('workingDisplay');

//Number Button Event Listeners
one.addEventListener('click', () => {
    numberBuffer(1);
    workingDisplayUpdate();
});
two.addEventListener('click', () => {
    numberBuffer(2);
    workingDisplayUpdate();
});
three.addEventListener('click', () => {
    numberBuffer(3);
    workingDisplayUpdate();
});
four.addEventListener('click', () => {
    numberBuffer(4);
    workingDisplayUpdate();
});
five.addEventListener('click', () => {
    numberBuffer(5);
    workingDisplayUpdate();
});
six.addEventListener('click', () => {
    numberBuffer(6);
    workingDisplayUpdate();
});
seven.addEventListener('click', () => {
    numberBuffer(7);
    workingDisplayUpdate();
});
eight.addEventListener('click', () => {
    numberBuffer(8);
    workingDisplayUpdate();
});
nine.addEventListener('click', () => {
    numberBuffer(9);
    workingDisplayUpdate();
});
zero.addEventListener('click', () => {
    numberBuffer(0);
    workingDisplayUpdate();
});
equals.addEventListener('click', () => {
    //work in progress
});

//Operation Buttons Event Listeners
sumButton.addEventListener('click', () => operationBuffer('+'));
subtractButton.addEventListener('click', () => operationBuffer('−'));
multiplyButton.addEventListener('click', () => operationBuffer('×'));
divideButton.addEventListener('click', () => operationBuffer('÷'));

decimal.addEventListener('click', () => decimalBuffer('.'));
equals.addEventListener('click', () => operate('='));

clearButton.addEventListener('click', () => clearDisplay());
//deleteButton.addEventListener('click', () => );

let firstNumber;
let secondNumber;
let workingDisplayString = '0';
let equationDisplayString = '';

function numberBuffer(numberInput) {
    if (workingDisplayString === '0') workingDisplayString = '';
    workingDisplayString += numberInput;
}

function operationBuffer(operator) {
    firstNumber = workingDisplayString;
    //console.log(firstNumber); 
    equationDisplayString = `${firstNumber} ${operator}`;
    equationDisplayUpdate();
}


function workingDisplayUpdate() { workingDisplay.innerText = workingDisplayString; };
function equationDisplayUpdate() { equationDisplay.innerText = equationDisplayString; }











function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') return add(firstNumber, secondNumber);
    else if (operator === '−') return subtract(firstNumber, secondNumber);
    else if (operator === '×') return multiply(firstNumber, secondNumber);
    else if (operator === '÷') return divide(firstNumber, secondNumber);
}
//let result = (operate(12, '÷', 4));
//console.log(`answer is ${result}`);

