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
const equationLine = document.getElementById('equationLine');
const workingLine = document.getElementById('workingLine');

//Number Button Event Listeners
one.addEventListener('click', () => numberBuffer(1));
two.addEventListener('click', () => numberBuffer(2));
three.addEventListener('click', () => numberBuffer(3));
four.addEventListener('click', () => numberBuffer(4));
five.addEventListener('click', () => numberBuffer(5));
six.addEventListener('click', () => numberBuffer(6));
seven.addEventListener('click', () => numberBuffer(7));
eight.addEventListener('click', () => numberBuffer(8));
nine.addEventListener('click', () => numberBuffer(9));
zero.addEventListener('click', () => numberBuffer(0));

//Operation Buttons Event Listeners
decimal.addEventListener('click', () => decimalBuffer('.'));
equals.addEventListener('click', () => operate('=')); 
sumButton.addEventListener('click', () => operationBuffer('+'));
subtractButton.addEventListener('click', () => operationBuffer('−'));
multiplyButton.addEventListener('click', () => operationBuffer('×'));
divideButton.addEventListener('click', () => operationBuffer('÷'));
clearButton.addEventListener('click', () => clearDisplay());




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

