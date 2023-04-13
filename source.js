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

let firstNumber = 6;
let secondNumber = 3;
let operator = add();

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') return add(firstNumber, secondNumber);
    else if (operator === '-') return subtract(firstNumber, secondNumber);
    else if (operator === 'x') return multiply(firstNumber, secondNumber);
    else if (operator === '÷') return divide(firstNumber, secondNumber);
}
//let result = (operate(12, '÷', 4));
//console.log(`answer is ${result}`);